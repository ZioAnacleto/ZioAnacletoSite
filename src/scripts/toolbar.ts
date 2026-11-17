/**
 * Floating toolbar: tracks the section in view, moves the active indicator
 * with a spring, and keeps the current hash when switching language.
 */
export function initToolbar(): void {
  const nav = document.querySelector<HTMLElement>('[data-toolbar]');
  if (!nav) return;
  const indicator = nav.querySelector<HTMLElement>('[data-indicator]');
  const links = new Map<string, HTMLAnchorElement>();
  nav.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((a) => {
    links.set(a.dataset.navLink!, a);
  });

  let active: string | null = null;

  const placeIndicator = () => {
    if (!indicator) return;
    const link = active ? links.get(active) : null;
    if (!link) {
      indicator.style.setProperty('--o', '0');
      return;
    }
    indicator.style.setProperty('--x', `${link.offsetLeft}px`);
    indicator.style.setProperty('--w', `${link.offsetWidth}px`);
    indicator.style.setProperty('--o', '1');
  };

  const setActive = (id: string | null) => {
    if (id === active) return;
    if (active) links.get(active)?.removeAttribute('aria-current');
    active = id;
    if (id) links.get(id)?.setAttribute('aria-current', 'location');
    // Labels can appear/disappear with the active item, so measure after layout.
    requestAnimationFrame(placeIndicator);
  };

  // A section is "current" when it crosses a line 40% down the viewport.
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
  const visible = new Set<string>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      }
      const current = sections.find((s) => visible.has(s.id));
      // Between two sections (the gap of a margin) keep the last one; clear only above the first.
      if (current) setActive(current.id);
      else if (sections[0] && sections[0].getBoundingClientRect().top > window.innerHeight * 0.4)
        setActive(null);
    },
    { rootMargin: '-40% 0px -59% 0px' },
  );
  sections.forEach((s) => io.observe(s));

  window.addEventListener('resize', placeIndicator, { passive: true });
  document.fonts?.ready.then(placeIndicator);

  // Keep the section when switching language.
  nav.querySelectorAll<HTMLAnchorElement>('[data-lang-link]').forEach((a) => {
    a.addEventListener('click', () => {
      if (location.hash) a.href = a.pathname + location.hash;
    });
  });
}
