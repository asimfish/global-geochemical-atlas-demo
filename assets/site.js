(() => {
  const PAGE_LANG = (document.documentElement.lang || 'zh').slice(0, 2);
  const T = PAGE_LANG === 'en'
    ? { copy: 'Copy', copied: 'Copied', open: 'Open menu', close: 'Close menu' }
    : { copy: '复制', copied: '已复制', open: '打开菜单', close: '关闭菜单' };

  if ('IntersectionObserver' in window && !new URLSearchParams(location.search).has('static')) {
    document.body.classList.add('fx-on');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll('.fx').forEach(el => io.observe(el));

    // count-up for stats band
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const cio = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          cio.unobserve(entry.target);
          const el = entry.target;
          const target = +el.dataset.n;
          const suffix = el.dataset.suffix || '';
          const t0 = performance.now(), dur = 1500;
          const tick = now => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }, { threshold: .5 });
      document.querySelectorAll('.stat b[data-n]').forEach(el => cio.observe(el));
    }
  }

  // copy buttons for quick-start snippets (falls back to a hidden textarea when Clipboard API is unavailable)
  function legacyCopy(text, done) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = btn.parentElement;
      const src = box.querySelector('pre, p');
      const text = btn.dataset.copy || (src ? src.textContent.trim() : '');
      const done = () => { btn.textContent = T.copied; btn.classList.add('done'); setTimeout(() => { btn.textContent = T.copy; btn.classList.remove('done'); }, 1600); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, () => legacyCopy(text, done));
      } else {
        legacyCopy(text, done);
      }
    });
  });

  // mobile menu
  const topbar = document.querySelector('.topbar');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (topbar && toggle && menu) {
    const setOpen = open => {
      topbar.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? T.close : T.open);
      menu.hidden = !open;
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
    const wide = matchMedia('(min-width: 1141px)');
    (wide.addEventListener ? wide.addEventListener.bind(wide, 'change') : wide.addListener.bind(wide))(e => { if (e.matches) setOpen(false); });
  }

  // remember an explicit language choice (index.html / en.html read it before render)
  document.querySelectorAll('a[data-lang]').forEach(a => {
    a.addEventListener('click', () => { try { localStorage.setItem('gga-lang', a.dataset.lang); } catch (e) {} });
  });
})();
