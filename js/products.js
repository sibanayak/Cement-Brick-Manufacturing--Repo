document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const modal = document.getElementById("productModal");
  const closeButton = document.querySelector(".close-button");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalPrice = document.getElementById("modalPrice");

  document.querySelectorAll(".btn").forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const productCard = button.closest(".product-card");
      const title = productCard.querySelector("h3").textContent;
      const description = productCard.querySelector("p").textContent;
      const price = productCard.querySelector(".product-price").textContent;

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modalPrice.textContent = price;

      modal.classList.remove("hidden");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

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
