document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navlinks = document.getElementById('navlinks');
  navToggle.addEventListener('click', () => navlinks.classList.toggle('open'));
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));

  // Theme toggle (persists via data-theme attribute; defaults to system preference)
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    themeBtn.textContent = t === 'light' ? '☀️' : '🌙';
    try{ localStorage.setItem('portfolio-theme', t); }catch(e){}
  }
  let saved = null;
  try{ saved = localStorage.getItem('portfolio-theme'); }catch(e){}
  applyTheme(saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  themeBtn.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });
