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

    // Name validation
    if (customerName.length < 3 || customerName.startsWith(" ")) {
      alert(
        "Customer Name must be at least 3 characters and not start with a space."
      );
      return;
    }

    // Email validation (basic regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      alert(
        "Phone number must be exactly 10 digits and start with 6, 7, 8, or 9."
      );
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

    // Generate order ID
    const orderId =
      "YE-" +
      new Date().getFullYear() +
      "-" +
      String(Math.floor(Math.random() * 1000)).padStart(3, "0");

    // Show success message
    alert(
      `Order placed successfully!\nOrder ID: ${orderId}\nYou will receive a confirmation email shortly.`
    );

    // Reset form
    orderForm.reset();
  });

  // Track Order validation
  trackingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const orderId = document.getElementById("orderId").value.trim();
    const email = document.getElementById("trackingEmail").value.trim();

    // Track Order validations
    if (orderId.length === 0) {
      alert("Please enter your Order ID.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show tracking message
    alert(
      `Tracking information for Order ID: ${orderId}\nStatus: Processing\nEstimated delivery: 7-10 business days\nDetailed tracking info has been sent to ${email}`
    );
  });

  // Set minimum date to today for delivery date
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("deliveryDate").setAttribute("min", today);
});
