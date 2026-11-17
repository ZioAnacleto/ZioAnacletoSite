/**
 * Adds .is-in to [data-weight-in] headings and [data-stagger] lists when they enter view.
 * Content is visible by default; this only runs when JS is available (html.js).
 */
export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-weight-in], [data-stagger]');
  targets.forEach((el) => {
    if (el.matches('[data-stagger]')) {
      Array.from(el.children).forEach((child, i) =>
        (child as HTMLElement).style.setProperty('--i', String(Math.min(i, 8))),
      );
    }
  });
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  targets.forEach((el) => io.observe(el));

  // Hero focal entrance, after fonts so the weight trade is visible.
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (hero) {
    const go = () => requestAnimationFrame(() => hero.classList.add('is-in'));
    Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 600))]).then(go);
  }
}
