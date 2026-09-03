/**
 * ============================================================
 * KELVIN ARANTA — PORTFOLIO
 * script.js
 *
 * TABLE OF CONTENTS:
 * 1. Initialize Lucide Icons
 * 2. Navbar — Scroll Effect & Active Link Tracking
 * 3. Hamburger Mobile Menu Toggle
 * 4. Smooth Scroll for Internal Links
 * 5. Scroll Reveal (Fade-in) Animation
 * 6. Back-to-Top Button
 * ============================================================
 */

/* ============================================================
   1. INITIALIZE LUCIDE ICONS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Lucide icons are loaded via the CDN script with defer.
  // lucide.createIcons() replaces all <i data-lucide="name"> elements.
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Run all initializers after DOM is ready
  initNavbar();
  initHamburgerMenu();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
});

/* ============================================================
   2. NAVBAR — SCROLL EFFECT & ACTIVE LINK TRACKING
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (!navbar) return;

  /* ----- Scroll effect: add/remove 'scrolled' class ----- */
  const handleNavbarScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // run once on load

  /* ----- Active link tracking via IntersectionObserver ----- */
  const observerOptions = {
    root: null,
    // Trigger when section is roughly centred in viewport
    rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h')) || 68}px 0px -50% 0px`,
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove 'active' from all nav links
        navLinks.forEach((link) => link.classList.remove('active'));

        // Add 'active' to matching nav link
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));
}

/* ============================================================
   3. HAMBURGER MOBILE MENU TOGGLE
   ============================================================ */
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburgerBtn || !mobileMenu) return;

  /* Toggle menu open/close */
  const toggleMenu = (forceClose = false) => {
    const isOpen = hamburgerBtn.classList.contains('open');

    if (forceClose || isOpen) {
      // Close
      hamburgerBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    } else {
      // Open
      hamburgerBtn.classList.add('open');
      mobileMenu.classList.add('open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }
  };

  hamburgerBtn.addEventListener('click', () => toggleMenu());

  /* Close menu when a link is clicked */
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  /* Close menu when clicking outside (on overlay) */
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) toggleMenu(true);
  });

  /* Close menu on Escape key */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(true);
  });
}

/* ============================================================
   4. SMOOTH SCROLL FOR INTERNAL LINKS
   ============================================================ */
function initSmoothScroll() {
  // CSS scroll-behavior: smooth handles most cases.
  // This JS handler ensures consistent navbar offset compensation
  // across browsers and provides a fallback.
  const navbarHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--navbar-h') || '68'
  );

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const targetTop =
        targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   5. SCROLL REVEAL (FADE-IN) ANIMATION
   ============================================================ */
function initScrollReveal() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if (!fadeElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px', // trigger 60px before element enters viewport bottom
    threshold: 0.1,
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once only
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => revealObserver.observe(el));
}

/* ============================================================
   6. BACK-TO-TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');

  if (!btn) return;

  /* Show/hide based on scroll position */
  const handleBackToTopVisibility = () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });

  /* Scroll to top on click */
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
