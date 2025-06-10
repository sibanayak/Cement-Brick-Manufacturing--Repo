// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });

  // Date Validation
  const today = new Date().toISOString().split("T")[0];
  const deliveryDateInput = document.getElementById("deliveryDate");
  if (deliveryDateInput) {
    deliveryDateInput.setAttribute("min", today);
  }

  // Order form functionality
  const orderForm = document.getElementById("orderForm");
  const trackingForm = document.getElementById("trackingForm");

  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const customerName = document.getElementById("customerName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const brickType = document.getElementById("brickType").value;
    const quantity = document.getElementById("quantity").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    // Name validation
    if (customerName.length < 3 || customerName.startsWith(" ")) {
      alert(
        "Customer Name must be at least 3 characters and not start with a space."
      );
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    // Phone validation
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid Phone number.");
      return;
    }

    // Address validation
    if (address.length === 0) {
      alert("Delivery address cannot be empty.");
      return;
    }

    // Quantity validation
    if (quantity === "" || isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity (positive number).");
      return;
    }

    // Brick Type validation
    if (brickType === "") {
      alert("Please select a brick type.");
      return;
    }

    // Delivery Date validation
    if (!deliveryDate) {
      alert("Please select a preferred delivery date.");
      return;
    }

    const todayDate = new Date().toISOString().split("T")[0];
    if (deliveryDate < todayDate) {
      alert("Please select a future date for delivery.");
      return;
    }

    // Generate order ID
    const orderId =
      "YE-" +
      new Date().getFullYear() +
      "-" +
      String(Math.floor(Math.random() * 1000)).padStart(3, "0");

    // Show success message
    alert(
      `Order placed successfully!\nOrder ID: ${orderId}\nDelivery Date: ${deliveryDate}\nYou will receive a confirmation email shortly.`
    );

    // Reset form
    orderForm.reset();

    // Reset the min date after form reset
    if (deliveryDateInput) {
      deliveryDateInput.setAttribute("min", today);
    }
  });
});
