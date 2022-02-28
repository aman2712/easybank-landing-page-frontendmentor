const navbar = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");
const bgPattern = document.getElementById("bg-pattern");

function toggleNavbar() {
  if (navbar.style.height === "50px") {
    navbar.style.height = "250px";
  } else {
    navbar.style.height = "50px";
  }
}

if (window.innerWidth <= 800) {
  bgPattern.src = "./images/bg-intro-mobile.svg";
}

menuIcon.addEventListener("click", toggleNavbar);
