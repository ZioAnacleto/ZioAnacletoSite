/**
 * Morphing shapes. Any element with [data-morph] holding an SVG with [data-morph-path]
 * elements morphs between the shapes listed in data-shapes.
 *
 * - data-autoplay: advance every `data-bars` bars at the page tempo (--beat), pulsing on each beat.
 * - click / Enter / Space on the host advances to the next shape with a spatial spring.
 * - Loops pause offscreen, when the tab is hidden, under reduced motion, or via [data-morph-toggle].
 */
import { sampleShape, mixRadii, radiiToPath, SAMPLES, type ShapeName } from '@/lib/shapes';
import { springs } from '@/lib/motion';
import { Spring, prefersReducedMotion } from './spring';

const BEATS_PER_MORPH = 4;
/** Shortest beat accepted (ms): guards against a bad value turning the loop into a spin. */
const MIN_BEAT_MS = 200;

/**
 * Reads a CSS time ("536ms", ".536s") as milliseconds. Production CSS is minified,
 * which rewrites 536ms as .536s, so the unit must be honoured.
 */
function cssDurationMs(raw: string, fallback: number): number {
  const match = raw.trim().match(/^(-?[\d.]+)(ms|s)$/i);
  if (!match) return fallback;
  const value = parseFloat(match[1]!) * (match[2]!.toLowerCase() === 's' ? 1000 : 1);
  return Number.isFinite(value) && value >= MIN_BEAT_MS ? value : fallback;
}

class MorphShape {
  private shapes: ShapeName[];
  private radii: Float32Array[];
  private index = 0;
  private from: Float32Array;
  private to: Float32Array;
  private current = new Float32Array(SAMPLES);
  private paths: SVGPathElement[];
  private mallet: SVGElement | null;
  private progress: Spring;
  private rotation: Spring;
  private pulse: Spring;
  private playing: boolean;
  private visible = true;
  private beatMs: number;
  private lastBeat = 0;
  private beatCount = 0;
  private raf = 0;
  private lastFrame = 0;
  private baseScale: number;

  constructor(private host: HTMLElement) {
    this.shapes = (host.dataset.shapes ?? 'circle,cookie').split(',') as ShapeName[];
    this.radii = this.shapes.map((s) => sampleShape(s));
    this.from = this.radii[0]!;
    this.to = this.radii[0]!;
    this.baseScale = parseFloat(host.dataset.scale ?? '0.92');
    this.mallet = host.querySelector<SVGElement>('[data-mallet]');
    this.paths = Array.from(host.querySelectorAll<SVGPathElement>('[data-morph-path]'));
    const reduced = prefersReducedMotion();
    const spatial = reduced ? springs.defaultEffects : springs.defaultSpatial;
    this.progress = new Spring(1, spatial);
    this.rotation = new Spring(0, reduced ? springs.defaultEffects : springs.slowSpatial);
    this.pulse = new Spring(1, springs.fastSpatial);
    this.playing = host.dataset.autoplay !== undefined && !reduced;
    this.beatMs = cssDurationMs(
      getComputedStyle(document.documentElement).getPropertyValue('--beat'),
      536,
    );

    this.bindInput();
    this.observe();
    this.syncToggle();
    this.render();
    if (this.playing) this.start();
  }

  next(kick = false): void {
    // Start from wherever the outline is now, so interrupted morphs stay continuous.
    this.from = Float32Array.from(this.current);
    this.index = (this.index + 1) % this.shapes.length;
    this.to = this.radii[this.index]!;
    this.progress.value = 0;
    this.progress.target = 1;
    this.rotation.target += 360 / (this.shapes.length * 2);
    if (kick) this.pulse.impulse(-1.6);
    this.host.dataset.shape = this.shapes[this.index];
    this.start();
  }

  /** The monogram's mallet hits on the beat (accented on the downbeat). */
  private strike(accent = false): void {
    if (!this.mallet || prefersReducedMotion()) return;
    const hit = accent ? 1.32 : 1.18;
    this.mallet.animate(
      [
        { transform: 'translateY(0) scale(1)' },
        { transform: `translateY(8%) scale(${hit})`, offset: 0.22 },
        { transform: 'translateY(0) scale(1)' },
      ],
      { duration: 320, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    );
  }

  private bindInput(): void {
    this.host.addEventListener('click', () => {
      this.strike(true);
      this.next(true);
      this.beatCount = 0;
      this.lastBeat = performance.now();
    });
    const toggleId = this.host.dataset.toggle;
    const toggle = toggleId ? document.getElementById(toggleId) : null;
    toggle?.addEventListener('click', () => {
      this.playing = !this.playing;
      this.lastBeat = performance.now();
      this.syncToggle();
      if (this.playing) this.start();
    });
  }

  private syncToggle(): void {
    const toggleId = this.host.dataset.toggle;
    const toggle = toggleId ? document.getElementById(toggleId) : null;
    if (!toggle) return;
    toggle.setAttribute('aria-pressed', String(!this.playing));
    toggle.dataset.state = this.playing ? 'playing' : 'paused';
  }

  private observe(): void {
    new IntersectionObserver(([entry]) => {
      this.visible = entry?.isIntersecting ?? true;
      if (this.visible) this.start();
    }).observe(this.host);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.lastBeat = performance.now();
        this.start();
      }
    });
  }

  private start(): void {
    if (this.raf) return;
    this.lastFrame = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }

  private frame = (now: number): void => {
    this.raf = 0;
    const dt = Math.min(0.05, (now - this.lastFrame) / 1000);
    this.lastFrame = now;

    let moving = this.progress.step(dt);
    moving = this.rotation.step(dt) || moving;
    moving = this.pulse.step(dt) || moving;

    const looping = this.playing && this.visible && !document.hidden;
    if (looping) {
      if (!this.lastBeat) this.lastBeat = now;
      if (now - this.lastBeat >= this.beatMs) {
        this.lastBeat += this.beatMs * Math.floor((now - this.lastBeat) / this.beatMs);
        this.beatCount = (this.beatCount + 1) % BEATS_PER_MORPH;
        this.host.dataset.beat = String(this.beatCount);
        this.host.dispatchEvent(new CustomEvent('morph:beat', { detail: this.beatCount }));
        if (this.beatCount === 0) this.next();
        else this.pulse.impulse(-0.5);
        this.strike(this.beatCount === 0);
      }
    }

    this.render();
    if (moving || looping) this.raf = requestAnimationFrame(this.frame);
  };

  private render(): void {
    mixRadii(this.from, this.to, this.progress.value, this.current);
    const rot = (this.rotation.value * Math.PI) / 180;
    const scale = this.baseScale * (0.94 + 0.06 * this.pulse.value);
    const d = radiiToPath(this.current, 100, rot, scale);
    for (const p of this.paths) p.setAttribute('d', d);
  }
}

export function initMorphShapes(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-morph]').forEach((el) => {
    if (el.dataset.morphReady) return;
    el.dataset.morphReady = 'true';
    new MorphShape(el);
  });
}
