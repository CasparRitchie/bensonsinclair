const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => reveal.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}
