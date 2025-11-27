// script.js — scroll reveal, smooth scroll, small accessibility helpers

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetSelector = this.getAttribute('href');
      if (!targetSelector || targetSelector === '#') return;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // IntersectionObserver for reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => io.observe(r));
  } else {
    // fallback: simple timeout reveal
    reveals.forEach((r, i) => setTimeout(() => r.classList.add('visible'), 150 * i));
  }

  // small keyboard helper: focus outlines for .btn
  document.querySelectorAll('.btn').forEach(b => {
    b.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.target.click();
      }
    });
  });

  // make sure hero text animates on load
  window.setTimeout(() => {
    const h = document.querySelector('.hero-title');
    const s = document.querySelector('.hero-subtitle');
    if (h) h.style.transform = 'translateY(0)';
    if (s) s.style.opacity = '1';
  }, 120);
});
