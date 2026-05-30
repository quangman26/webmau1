export function initNavbar() {
  const header = document.querySelector(".header");

  if (!header) return;

  let ticking = false;

  function updateNavbar() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);

    ticking = false;
  }

  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  updateNavbar();

  window.addEventListener("scroll", handleScroll, { passive: true });
}
