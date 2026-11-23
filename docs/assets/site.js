const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');
function setTheme(theme) {
  root.dataset.theme = theme;
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  }
}
let savedTheme;
try { savedTheme = localStorage.getItem('research-theme'); } catch {}
setTheme(savedTheme || 'light');
toggle?.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('research-theme', theme); } catch {}
});
const menu = document.querySelector('[data-menu-toggle]');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  document.querySelector('#site-nav').classList.toggle('is-open', expanded);
});
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
