const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.nav-links');
const themeButton = document.querySelector('.theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function updateThemeControl() {
  const isLight = document.documentElement.dataset.theme === 'light';
  if (!themeButton) return;
  const label = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  themeButton.setAttribute('aria-label', label);
  themeButton.setAttribute('title', label);
  themeButton.setAttribute('aria-pressed', String(isLight));
  themeButton.querySelector('.theme-icon').textContent = isLight ? '☾' : '☀';
  themeButton.querySelector('.theme-label').textContent = isLight ? 'Dark mode' : 'Light mode';
  if (themeMeta) themeMeta.content = isLight ? '#f5f7f5' : '#090d16';
}

updateThemeControl();
themeButton?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  try { localStorage.setItem('portfolio-theme', nextTheme); } catch (_) { /* Storage may be unavailable. */ }
  updateThemeControl();
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  menuLinks.classList.toggle('open', !isOpen);
});

menuLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
}));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 60px 0px' });
  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add('is-visible'));
}

const art = document.querySelector('.hero-art');
if (art && !reducedMotion.matches && window.matchMedia('(pointer: fine)').matches) {
  const floatingCards = [
    { el: art.querySelector('.card-ai'), rotation: -9 },
    { el: art.querySelector('.card-flutter'), rotation: 8 },
    { el: art.querySelector('.card-web'), rotation: 7 }
  ];
  art.addEventListener('pointermove', event => {
    const bounds = art.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    floatingCards.forEach(({ el, rotation }) => {
      if (!el) return;
      const depth = Number(el.dataset.depth || 15);
      el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0) rotate(${rotation}deg)`;
    });
  });
  art.addEventListener('pointerleave', () => {
    floatingCards.forEach(({ el, rotation }) => {
      if (el) el.style.transform = `rotate(${rotation}deg)`;
    });
  });
}

if (!reducedMotion.matches && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const whatsappForm = document.querySelector('#whatsapp-form');
whatsappForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!whatsappForm.reportValidity()) return;

  const name = whatsappForm.elements.namedItem('name').value.trim();
  const email = whatsappForm.elements.namedItem('email').value.trim();
  const message = whatsappForm.elements.namedItem('message').value.trim();
  if (!name || !message) return;

  const lines = [`Hi Pratik, I'm ${name}.`];
  if (email) lines.push(`My email is ${email}.`);
  lines.push('', message);
  window.location.href = `https://wa.me/919307923973?text=${encodeURIComponent(lines.join('\n'))}`;
});
