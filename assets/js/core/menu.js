/**
 * =========================================================
 * MOBILE MENU
 * =========================================================
 */

const menuToggle = document.getElementById("menuToggle");

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(".navbar-menu a");

/**
 * INIT MENU
 */

if (menuToggle && navbar) {
  /**
   * TOGGLE MENU
   */

  menuToggle.addEventListener("click", toggleMenu);

  /**
   * CLOSE MENU WHEN CLICK NAV LINK
   */

  if (navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /**
   * CLOSE MENU WHEN PRESS ESC
   */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  /**
   * CLOSE MENU WHEN CLICK OUTSIDE
   */

  document.addEventListener("click", (event) => {
    const isClickInside =
      navbar.contains(event.target) || menuToggle.contains(event.target);

    const isMenuOpen = navbar.classList.contains("is-open");

    if (!isClickInside && isMenuOpen) {
      closeMenu();
    }
  });

  /**
   * RESET MENU WHEN RESIZE DESKTOP
   */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });
}

/**
 * =========================================================
 * TOGGLE MENU
 * =========================================================
 */

function toggleMenu() {
  const isOpen = navbar.classList.toggle("is-open");

  /**
   * TOGGLE BUTTON STATE
   */

  menuToggle.classList.toggle("active");

  /**
   * LOCK BODY SCROLL
   */

  document.body.classList.toggle("menu-open");

  /**
   * ACCESSIBILITY
   */

  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

/**
 * =========================================================
 * CLOSE MENU
 * =========================================================
 */

function closeMenu() {
  navbar.classList.remove("is-open");

  menuToggle.classList.remove("active");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");
}
