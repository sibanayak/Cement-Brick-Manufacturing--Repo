document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove("active");
      }
    });
  } 

}); 

