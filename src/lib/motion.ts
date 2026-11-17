/**
 * Spring physics shared by CSS (as `linear()` easings generated at build time)
 * and by runtime scripts (as a tiny integrator).
 *
 * Parameters follow Material 3 Expressive motion tokens: damping ratio + stiffness.
 */

export interface SpringSpec {
  damping: number; // ratio, 1 = critically damped
  stiffness: number;
}

/** Expressive motion scheme (spatial springs overshoot, effect springs do not). */
export const springs = {
  fastSpatial: { damping: 0.6, stiffness: 800 },
  defaultSpatial: { damping: 0.8, stiffness: 380 },
  slowSpatial: { damping: 0.8, stiffness: 200 },
  fastEffects: { damping: 1, stiffness: 3800 },
  defaultEffects: { damping: 1, stiffness: 1600 },
} satisfies Record<string, SpringSpec>;

export type SpringName = keyof typeof springs;

/** Analytical position (0 → 1) of a unit-mass spring at time t seconds. */
export function springAt({ damping: z, stiffness: k }: SpringSpec, t: number): number {
  const w0 = Math.sqrt(k);
  if (z < 1) {
    const wd = w0 * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0) / wd) * Math.sin(wd * t));
  }
  return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
}

/** Time (s) after which the spring stays within `epsilon` of rest. */
export function springDuration(spec: SpringSpec, epsilon = 0.001): number {
  const dt = 1 / 240;
  let settled = 0;
  for (let t = 0; t < 5; t += dt) {
    if (Math.abs(1 - springAt(spec, t)) < epsilon) {
      settled += dt;
      if (settled > 0.08) return t;
    } else settled = 0;
  }
  return 5;
}

/** CSS `linear()` easing approximating the spring, plus its duration in ms. */
export function springToCss(spec: SpringSpec, points = 40): { easing: string; duration: number } {
  const duration = springDuration(spec);
  const stops: string[] = [];
  for (let i = 0; i <= points; i++) {
    const v = i === points ? 1 : springAt(spec, (i / points) * duration);
    stops.push(Number(v.toFixed(4)).toString());
  }
  return { easing: `linear(${stops.join(', ')})`, duration: Math.round(duration * 1000) };
}

/** CSS custom properties for every spring: --spring-<name> and --spring-<name>-dur. */
export function springCssVariables(): string {
  return Object.entries(springs)
    .map(([name, spec]) => {
      const { easing, duration } = springToCss(spec);
      const kebab = name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      return `--spring-${kebab}: ${easing}; --spring-${kebab}-dur: ${duration}ms;`;
    })
    .join(' ');
}
