/**
 * Material 3 Expressive–style shape library, expressed as polar radius functions.
 *
 * Every shape is sampled at the same number of angles, so any two shapes can be
 * morphed by interpolating their radius arrays point by point. This keeps the
 * morph smooth without a path-interpolation dependency.
 */

export const SAMPLES = 180;

export type ShapeName =
  'circle' | 'cookie' | 'clover' | 'sunny' | 'squircle' | 'flower' | 'burst' | 'gem';

type RadiusFn = (theta: number) => number;

/** Smooth periodic lobes: n lobes, depth 0..1, sharpness >= 1 makes lobes rounder/pointier. */
const lobes =
  (n: number, depth: number, sharpness = 1): RadiusFn =>
  (t) => {
    const c = (Math.cos(n * t) + 1) / 2; // 0..1
    return 1 - depth + depth * Math.pow(c, sharpness);
  };

/** Superellipse ("squircle"): p = 2 is a circle, larger p is squarer. */
const superellipse =
  (p: number): RadiusFn =>
  (t) =>
    Math.pow(Math.pow(Math.abs(Math.cos(t)), p) + Math.pow(Math.abs(Math.sin(t)), p), -1 / p);

const shapeFns: Record<ShapeName, RadiusFn> = {
  circle: () => 1,
  cookie: lobes(9, 0.11, 0.8),
  clover: lobes(4, 0.3, 0.6),
  sunny: lobes(8, 0.16, 1.6),
  squircle: superellipse(4.5),
  flower: lobes(6, 0.24, 0.7),
  burst: lobes(12, 0.14, 2.2),
  gem: lobes(5, 0.12, 0.9),
};

export const shapeNames = Object.keys(shapeFns) as ShapeName[];

/** Radii for a shape, normalised so the largest radius is 1. */
export function sampleShape(name: ShapeName, samples = SAMPLES): Float32Array {
  const fn = shapeFns[name];
  const out = new Float32Array(samples);
  let max = 0;
  for (let i = 0; i < samples; i++) {
    const r = fn((i / samples) * Math.PI * 2);
    out[i] = r;
    if (r > max) max = r;
  }
  for (let i = 0; i < samples; i++) out[i] = (out[i] ?? 0) / max;
  return out;
}

/** Linear interpolation between two radius arrays (t may overshoot for spring squash). */
export function mixRadii(
  a: Float32Array,
  b: Float32Array,
  t: number,
  out: Float32Array,
): Float32Array {
  for (let i = 0; i < out.length; i++) {
    const ra = a[i] ?? 0;
    out[i] = ra + ((b[i] ?? 0) - ra) * t;
  }
  return out;
}

/**
 * Build a closed SVG path for radii centred in a `size` box.
 * Uses Catmull–Rom → cubic Bézier so the outline stays smooth at any scale.
 */
export function radiiToPath(radii: Float32Array, size = 100, rotation = 0, scale = 1): string {
  const n = radii.length;
  const c = size / 2;
  const R = c * scale;
  const xs = new Float32Array(n);
  const ys = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rotation;
    const r = (radii[i] ?? 0) * R;
    xs[i] = c + Math.cos(a) * r;
    ys[i] = c + Math.sin(a) * r;
  }
  const f = (v: number) => v.toFixed(2);
  let d = `M${f(xs[0] ?? 0)} ${f(ys[0] ?? 0)}`;
  for (let i = 0; i < n; i++) {
    const p0 = (i - 1 + n) % n;
    const p2 = (i + 1) % n;
    const p3 = (i + 2) % n;
    const x1 = (xs[i] ?? 0) + ((xs[p2] ?? 0) - (xs[p0] ?? 0)) / 6;
    const y1 = (ys[i] ?? 0) + ((ys[p2] ?? 0) - (ys[p0] ?? 0)) / 6;
    const x2 = (xs[p2] ?? 0) - ((xs[p3] ?? 0) - (xs[i] ?? 0)) / 6;
    const y2 = (ys[p2] ?? 0) - ((ys[p3] ?? 0) - (ys[i] ?? 0)) / 6;
    d += `C${f(x1)} ${f(y1)} ${f(x2)} ${f(y2)} ${f(xs[p2] ?? 0)} ${f(ys[p2] ?? 0)}`;
  }
  return `${d}Z`;
}

/** Static path for a named shape (used at build time for SVG markup). */
export function shapePath(name: ShapeName, size = 100, rotation = 0, samples = 72): string {
  return radiiToPath(sampleShape(name, samples), size, rotation);
}
