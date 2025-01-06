const header = document.querySelector(".header");
const headerNav = document.querySelector(".header-nav");
const preloader = document.querySelector(".preloader");
const wrapper = document.querySelector(".wrapper");

window.addEventListener("load", function () {
  if (preloader) {
    preloader.classList.add("active");
  }

  // Задержка в 2 секунды для остальной части
  setTimeout(function () {
    if (header) {
      header.classList.add("active");
    }
    if (headerNav) {
      headerNav.classList.add("active");
    }
    if (wrapper) {
      wrapper.classList.add("active");
    }
  }, 500); // 2000 мс = 2 секунды
});
