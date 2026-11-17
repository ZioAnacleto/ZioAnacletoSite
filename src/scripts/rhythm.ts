/**
 * Percussion pads: synthesised with Web Audio (no audio files), started only by a
 * user gesture. Keys 1–4 play the pads while the kit is on screen.
 */
type Voice = (ctx: AudioContext, out: AudioNode, t: number) => void;

function noiseBuffer(ctx: AudioContext, seconds: number): AudioBuffer {
  const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * seconds), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

function envelope(ctx: AudioContext, t: number, peak: number, decay: number): GainNode {
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.004);
  g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
  return g;
}

const voices: Record<string, Voice> = {
  timpani(ctx, out, t) {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.exponentialRampToValueAtTime(92, t + 0.6);
    const g = envelope(ctx, t, 0.9, 1.6);
    osc.connect(g).connect(out);
    osc.start(t);
    osc.stop(t + 1.7);

    const thud = ctx.createBufferSource();
    thud.buffer = noiseBuffer(ctx, 0.1);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 600;
    thud
      .connect(lp)
      .connect(envelope(ctx, t, 0.3, 0.08))
      .connect(out);
    thud.start(t);
  },
  snare(ctx, out, t) {
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer(ctx, 0.25);
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 1400;
    noise
      .connect(hp)
      .connect(envelope(ctx, t, 0.55, 0.2))
      .connect(out);
    noise.start(t);

    const body = ctx.createOscillator();
    body.type = 'triangle';
    body.frequency.setValueAtTime(220, t);
    body.frequency.exponentialRampToValueAtTime(160, t + 0.08);
    body.connect(envelope(ctx, t, 0.4, 0.1)).connect(out);
    body.start(t);
    body.stop(t + 0.12);
  },
  woodblock(ctx, out, t) {
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.value = 860;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1050;
    bp.Q.value = 6;
    osc
      .connect(bp)
      .connect(envelope(ctx, t, 0.7, 0.07))
      .connect(out);
    osc.start(t);
    osc.stop(t + 0.09);
  },
  triangle(ctx, out, t) {
    for (const [freq, gain] of [
      [2637, 0.12],
      [3951, 0.07],
      [5274, 0.04],
    ] as const) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(envelope(ctx, t, gain, 2.2)).connect(out);
      osc.start(t);
      osc.stop(t + 2.3);
    }
  },
};

export function initRhythm(): void {
  const kit = document.querySelector<HTMLElement>('[data-kit]');
  if (!kit) return;
  const pads = Array.from(kit.querySelectorAll<HTMLElement>('[data-pad]'));
  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;

  const play = (id: string) => {
    const voice = voices[id];
    if (!voice) return;
    if (!ctx) {
      ctx = new AudioContext();
      master = ctx.createGain();
      master.gain.value = 0.6;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') void ctx.resume();
    voice(ctx, master!, ctx.currentTime + 0.005);
  };

  pads.forEach((pad) => {
    // pointerdown for low latency; click covers keyboard activation.
    pad.addEventListener('pointerdown', () => play(pad.dataset.pad!));
    pad.addEventListener('click', (e) => {
      if ((e as PointerEvent).pointerType === '' || e.detail === 0) play(pad.dataset.pad!);
    });
  });

  let inView = false;
  new IntersectionObserver(([entry]) => {
    inView = entry?.isIntersecting ?? false;
  }).observe(kit);

  window.addEventListener('keydown', (e) => {
    if (!inView || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
    const target = e.target as HTMLElement;
    if (target.closest('input, textarea, [contenteditable]')) return;
    const pad = pads[Number(e.key) - 1];
    if (pad) pad.click();
  });
}
