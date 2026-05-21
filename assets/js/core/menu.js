const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
});
