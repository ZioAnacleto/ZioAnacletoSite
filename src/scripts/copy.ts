/** Copy-to-clipboard buttons ([data-copy]) with an announced confirmation. */
export function initCopyButtons(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    const status = btn.querySelector<HTMLElement>('[role="status"]');
    let timer = 0;
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      } catch {
        return; // clipboard unavailable: the mailto link next to it still works
      }
      btn.dataset.done = '';
      if (status) status.textContent = btn.dataset.copiedLabel ?? '';
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        delete btn.dataset.done;
        if (status) status.textContent = '';
      }, 2400);
    });
  });
}
