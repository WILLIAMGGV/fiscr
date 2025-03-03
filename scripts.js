const mobileMenu = document.getElementById("mobile-menu");
const navbarUl = document.querySelector(".navbar ul");

mobileMenu.addEventListener("click", () => {
  navbarUl.classList.toggle("active");
});
