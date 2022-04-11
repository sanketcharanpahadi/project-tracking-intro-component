const hamBurgerMenu = document.querySelector(".ham-burger");
const navLinks = document.querySelector(".nav-links");

hamBurgerMenu.addEventListener("click", function () {
  if (!navLinks.classList.contains("block")) {
    navLinks.classList.add("block");
    hamBurgerMenu.src = "images/icon-close.svg";
  } else {
    navLinks.classList.remove("block");
    hamBurgerMenu.src = "images/icon-hamburger.svg";
  }
});
