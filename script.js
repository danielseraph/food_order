const navbar = document.querySelector("nav"); // Ensure you're selecting the <nav> element

// Add event listener for scrolling
window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.classList.add("nav");
  } else {
    navbar.classList.remove("nav");
  }
};

// Toggle menu for mobile view
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
