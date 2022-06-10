const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

const toggleMobileMenu = () => {
  mobileMenu.style.display = "block";
  overlay.style.display = "block";
};

const collapseMobileMenu = () => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
};
