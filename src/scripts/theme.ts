/**
 * Light / dark theme switch. The initial theme is applied by an inline script in
 * BaseLayout (before first paint); this module handles the toggle, persists the
 * choice and keeps following the system while the visitor has not chosen.
 */
import { prefersReducedMotion } from './spring';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';
const THEME_COLOR: Record<Theme, string> = { light: '#9ef2dc', dark: '#0e1513' };

const root = document.documentElement;
const system = window.matchMedia('(prefers-color-scheme: dark)');

function storedTheme(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

function currentTheme(): Theme {
  return root.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function initThemeToggle(): void {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;

  const sync = () => {
    const theme = currentTheme();
    button.setAttribute(
      'aria-label',
      (theme === 'dark' ? button.dataset.labelLight : button.dataset.labelDark) ?? '',
    );
    document
      .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
      .forEach((m) => (m.content = THEME_COLOR[theme]));
  };

  const apply = (theme: Theme) => {
    root.dataset.theme = theme;
    sync();
  };

  system.addEventListener('change', () => {
    if (!storedTheme()) apply(system.matches ? 'dark' : 'light');
  });

  button.addEventListener('click', () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: the choice lasts for this page view */
    }

    if (!document.startViewTransition || prefersReducedMotion()) {
      apply(next);
      return;
    }

    // The new theme grows as a circle out of the button.
    const r = button.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const transition = document.startViewTransition(() => apply(next));
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 640,
          easing: 'cubic-bezier(0.2, 0, 0, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  });

  sync();
}
