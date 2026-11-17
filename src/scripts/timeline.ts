/**
 * Wavy timeline (Material 3 Expressive wavy progress): a sine rail that fills
 * as the reader moves through the career. Under reduced motion it is drawn full.
 */
import { prefersReducedMotion } from './spring';

const AMPLITUDE = 5;
const WAVELENGTH = 30;

function wavePath(height: number, cx: number): string {
  let d = `M${cx} 0`;
  for (let y = 2; y <= height; y += 2) {
    const x = cx + AMPLITUDE * Math.sin((y / WAVELENGTH) * Math.PI * 2);
    d += `L${x.toFixed(2)} ${y}`;
  }
  return d;
}

export function initTimeline(): void {
  const root = document.querySelector<HTMLElement>('[data-timeline]');
  const track = root?.querySelector<SVGPathElement>('[data-wave-track]');
  const fill = root?.querySelector<SVGPathElement>('[data-wave-fill]');
  if (!root || !track || !fill) return;
  const svg = track.ownerSVGElement!;
  let length = 0;
  let ticking = false;

  const layout = () => {
    const h = svg.getBoundingClientRect().height;
    if (!h) return;
    const d = wavePath(h, 12);
    track.setAttribute('d', d);
    fill.setAttribute('d', d);
    length = fill.getTotalLength();
    fill.style.strokeDasharray = `${length}`;
    update();
  };

  const update = () => {
    ticking = false;
    if (!length) return;
    if (prefersReducedMotion()) {
      fill.style.strokeDashoffset = '0';
      return;
    }
    const rect = root.getBoundingClientRect();
    const focus = window.innerHeight * 0.6;
    const p = Math.min(1, Math.max(0, (focus - rect.top) / rect.height));
    fill.style.strokeDashoffset = `${length * (1 - p)}`;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  new ResizeObserver(layout).observe(root);
  window.addEventListener('scroll', onScroll, { passive: true });
}
