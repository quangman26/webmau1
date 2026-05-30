/**
 * =========================================================
 * MOBILE MENU
 * =========================================================
 */

export function initMenu() {
  /**
   * =========================================================
   * ELEMENTS
   * =========================================================
   */

  const menuToggle = document.getElementById("menuToggle");

  const navbar = document.querySelector(".navbar");

  const navLinks = document.querySelectorAll(".navbar-menu a");

  /**
   * =========================================================
   * GUARD CLAUSE
   * =========================================================
   */

  if (!menuToggle || !navbar) return;

  /**
   * =========================================================
   * CONSTANTS
   * =========================================================
   */

  const DESKTOP_BREAKPOINT = 992;

  /**
   * =========================================================
   * MENU STATE
   * =========================================================
   */

  function openMenu() {
    /**
     * OPEN NAVBAR
     */

    navbar.classList.add("is-open");

    /**
     * ACTIVE TOGGLE BUTTON
     */

    menuToggle.classList.add("active");

    /**
     * LOCK BODY SCROLL
     */

    document.body.classList.add("menu-open");

    /**
     * ACCESSIBILITY
     */

    menuToggle.setAttribute("aria-expanded", "true");

    menuToggle.setAttribute("aria-label", "Đóng menu");
  }

  function closeMenu() {
    /**
     * CLOSE NAVBAR
     */

    navbar.classList.remove("is-open");

    /**
     * RESET TOGGLE BUTTON
     */

    menuToggle.classList.remove("active");

    /**
     * UNLOCK BODY SCROLL
     */

    document.body.classList.remove("menu-open");

    /**
     * ACCESSIBILITY
     */

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Mở menu");
  }

  function toggleMenu() {
    const isMenuOpen = navbar.classList.contains("is-open");

    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /**
   * =========================================================
   * EVENT HANDLERS
   * =========================================================
   */

  function handleEscape(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }

  function handleClickOutside(event) {
    const isClickInsideNavbar = navbar.contains(event.target);

    const isClickToggleButton = menuToggle.contains(event.target);

    const isMenuOpen = navbar.classList.contains("is-open");

    if (!isClickInsideNavbar && !isClickToggleButton && isMenuOpen) {
      closeMenu();
    }
  }

  /**
   * =========================================================
   * RESIZE HANDLER
   * =========================================================
   */

  let resizeTimer;

  function handleResize() {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        closeMenu();
      }
    }, 150);
  }

  /**
   * =========================================================
   * TOGGLE MENU
   * =========================================================
   */

  menuToggle.addEventListener("click", toggleMenu);

  /**
   * =========================================================
   * CLOSE MENU WHEN CLICK NAV LINK
   * =========================================================
   */

  if (navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /**
   * =========================================================
   * CLOSE MENU WHEN PRESS ESC
   * =========================================================
   */

  document.addEventListener("keydown", handleEscape);

  /**
   * =========================================================
   * CLOSE MENU WHEN CLICK OUTSIDE
   * =========================================================
   */

  document.addEventListener("click", handleClickOutside, { passive: true });
  /**
   * =========================================================
   * RESET MENU WHEN RESIZE DESKTOP
   * =========================================================
   */

  window.addEventListener("resize", handleResize, {
    passive: true,
  });
}
