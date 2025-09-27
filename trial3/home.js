// script.js - interactions + small enhancements

// small helper to add class with delay for initial micro-animations
document.addEventListener("DOMContentLoaded", () => {
  // Fade in header brand a touch
  const brand = document.querySelector(".brand");
  if (brand) brand.classList.add("loaded");

  // Make hero CTA pulse subtly
  const cta = document.querySelector(".btn-cta");
  if (cta) {
    setInterval(() => {
      cta.animate([{ transform: "translateY(0)" }, { transform: "translateY(-6px)" }, { transform: "translateY(0)" }], {
        duration: 3200,
        iterations: 1,
        easing: 'ease-in-out'
      });
    }, 6000);
  }

  // Quick stat counters (visual only)
  const stats = document.querySelectorAll(".stat strong");
  stats.forEach((el, i) => {
    // small number pulse (just cosmetic)
    el.animate([{ transform: "scale(1)" }, { transform: "scale(1.06)" }, { transform: "scale(1)" }], {
      duration: 2000 + i * 400,
      iterations: Infinity
    });
  });
});

// Smooth scroll for internal links
document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.matches('a[href^="#"]')) {
    e.preventDefault();
    const id = target.getAttribute('href');
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Small visibility toggle for nav on scroll
let lastScroll = 0;
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const s = window.scrollY || window.pageYOffset;
  if (s > 80 && s > lastScroll) {
    // scrolling down
    header.style.transform = 'translateY(-72px)';
    header.style.transition = 'transform 280ms ease';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = s;
});

// Make cards animate slightly on hover (progressive enhancement)
document.querySelectorAll('.card, .feature-item, .employer-card').forEach(el => {
  el.addEventListener('mouseenter', () => el.style.boxShadow = '0 18px 48px rgba(2,80,140,0.12)');
  el.addEventListener('mouseleave', () => el.style.boxShadow = '');
});
