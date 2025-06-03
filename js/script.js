document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");

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

  const orderForm = document.getElementById('orderForm');
  const fullName = document.getElementById('fullName');
  const mobile = document.getElementById('mobile');
  const product = document.getElementById('product');
  const quantity = document.getElementById('quantity');

  function showError(field, errorId, message) {
    field.classList.add('error');
    document.getElementById(errorId).textContent = message;
    document.getElementById(errorId).style.display = 'block';
  }

  function hideError(field, errorId) {
    field.classList.remove('error');
    document.getElementById(errorId).style.display = 'none';
  }

  function validateName() {
    const name = fullName.value.trim();
    const nameRegex = /^[A-Za-z ]+$/;
    
    if (name === '') {
      showError(fullName, 'nameError', 'Please enter your full name');
      return false;
    } else if (!nameRegex.test(name)) {
      showError(fullName, 'nameError', 'Please enter only letters (no numbers or special characters)');
      return false;
    } else if (name.length < 2) {
      showError(fullName, 'nameError', 'Name must be at least 2 characters long');
      return false;
    } else {
      hideError(fullName, 'nameError');
      return true;
    }
  }

  function validateMobile() {
    const mobileValue = mobile.value.trim();
    const mobileRegex = /^[6-9]\d{9}$/;
    
    if (mobileValue === '') {
      showError(mobile, 'mobileError', 'Please enter your mobile number');
      return false;
    } else if (!mobileRegex.test(mobileValue)) {
      showError(mobile, 'mobileError', 'Please enter a valid 10-digit mobile number');
      return false;
    } else {
      hideError(mobile, 'mobileError');
      return true;
    }
  }

  function validateProduct() {
    if (product.value === '') {
      showError(product, 'productError', 'Please select a product');
      return false;
    } else {
      hideError(product, 'productError');
      return true;
    }
  }

  function validateQuantity() {
    const quantityValue = parseInt(quantity.value);
    
    if (quantity.value === '' || isNaN(quantityValue)) {
      showError(quantity, 'quantityError', 'Please enter quantity');
      return false;
    } else if (quantityValue < 1) {
      showError(quantity, 'quantityError', 'Quantity must be at least 1');
      return false;
    } else if (quantityValue > 10000) {
      showError(quantity, 'quantityError', 'Quantity cannot exceed 10,000 units');
      return false;
    } else {
      hideError(quantity, 'quantityError');
      return true;
    }
  }

  fullName.addEventListener('blur', validateName);
  mobile.addEventListener('blur', validateMobile);
  product.addEventListener('change', validateProduct);
  quantity.addEventListener('blur', validateQuantity);

  fullName.addEventListener('input', () => {
    if (fullName.classList.contains('error')) {
      validateName();
    }
  });

  mobile.addEventListener('input', () => {
    if (mobile.classList.contains('error')) {
      validateMobile();
    }
  });

  quantity.addEventListener('input', () => {
    if (quantity.classList.contains('error')) {
      validateQuantity();
    }
  });

  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isMobileValid = validateMobile();
    const isProductValid = validateProduct();
    const isQuantityValid = validateQuantity();
    
    if (isNameValid && isMobileValid && isProductValid && isQuantityValid) {
      alert('Order submitted successfully! We will contact you shortly.');
      orderForm.reset();
    }
  });
});