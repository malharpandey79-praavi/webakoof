document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  const header = document.querySelector(".site-header");
  const navToggle = header?.querySelector(".site-header__toggle");
  const nav = header?.querySelector(".site-header__nav");

  if (header && navToggle instanceof HTMLElement && nav instanceof HTMLElement) {
    const closeMenu = () => {
      header.classList.remove("site-header--menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("site-header--menu-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.matches("a")) {
        closeMenu();
      }
    });
  }

  const heroPrimary = document.querySelector(".section-hero__primary");
  const prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  if (heroPrimary instanceof HTMLElement && !prefersReducedMotion) {
    heroPrimary.classList.add("section-hero__primary--animated");

    requestAnimationFrame(() => {
      heroPrimary.classList.add("section-hero__primary--in");
    });
  }

  console.info("Webakoof main.js initialized");
});
