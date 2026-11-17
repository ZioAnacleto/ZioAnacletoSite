import type { SpringSpec } from '@/lib/motion';

/** Interruptible spring integrated per frame (semi-implicit Euler, unit mass). */
export class Spring {
  value: number;
  velocity = 0;
  target: number;

  constructor(
    initial: number,
    public spec: SpringSpec,
  ) {
    this.value = initial;
    this.target = initial;
  }

  /** Advance by dt seconds; returns true while still moving. */
  step(dt: number): boolean {
    const { stiffness: k, damping: z } = this.spec;
    const c = 2 * z * Math.sqrt(k);
    // Sub-step for stability with stiff springs.
    const steps = Math.max(1, Math.ceil(dt / (1 / 240)));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      const force = -k * (this.value - this.target) - c * this.velocity;
      this.velocity += force * h;
      this.value += this.velocity * h;
    }
    const moving = Math.abs(this.velocity) > 1e-3 || Math.abs(this.value - this.target) > 1e-4;
    if (!moving) {
      this.value = this.target;
      this.velocity = 0;
    }
    return moving;
  }

  /** Give the spring a kick without changing the target. */
  impulse(v: number): void {
    this.velocity += v;
  }
}

export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
