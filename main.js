const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const mLinks = document.getElementsByClassName("mLink");
const toggler = document.getElementById("toggler");
const body = document.getElementById("body");
const togglerIcon = document.getElementById("togglerIcon");

if (body.classList.contains("dark")) {
  togglerIcon.classList.remove("fa-moon");
  togglerIcon.classList.add("fa-sun");
}

for (const item of mLinks) {
  item.addEventListener("click", collapseMobileMenu);
}

toggler.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    togglerIcon.classList.remove("fa-moon");
    togglerIcon.classList.add("fa-sun");
  } else {
    togglerIcon.classList.remove("fa-sun");
    togglerIcon.classList.add("fa-moon");
  }
});

const toggleMobileMenu = () => {
  mobileMenu.style.display = "block";
  overlay.style.display = "block";
};

function collapseMobileMenu() {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
}
