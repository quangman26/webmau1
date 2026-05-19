/* =========================================
   REVEAL ANIMATION
========================================= */

const reveals = document.querySelectorAll(".reveal, .fade-left, .fade-right");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((item) => {
    const elementTop = item.getBoundingClientRect().top;

    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      item.classList.add("active");
    }
  });
}

/* RUN */

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);
