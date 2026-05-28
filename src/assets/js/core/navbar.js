export function initNavbar() {
  const header = document.querySelector(".header");

  if (!header) return;

  let ticking = false;

  function updateNavbar() {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });
}
