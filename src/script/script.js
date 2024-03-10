const button = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector(".menu-toggler");
const headerMenu = document.querySelector(".menu");

// Filter buttons toggle code

button.forEach((e) =>
  e.addEventListener("click", function () {
    button.forEach((e) => e.classList.remove("filter-button-toggle"));

    this.classList.add("filter-button-toggle");
  })
);

// Menu slider in mobile View
var isVisible = false;
menuToggle.addEventListener("click", function () {
  if (isVisible == false) {
    headerMenu.style.cssText = "left:0%";
    isVisible = true;
  } else {
    headerMenu.style.cssText = "left:100%";
    isVisible = false;
  }
});
// Also to deselect by clicking anywhere;
