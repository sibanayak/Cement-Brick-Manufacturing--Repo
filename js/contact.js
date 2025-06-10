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



const form =document.getElementById("contactForm");
const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const email =document.getElementById("mail");
const phone=document.getElementById("phone");


function showError(field, errorId, message){
    field.classList.add("error");
    document.getElementById(errorId).textContent=message;
    document.getElementById(errorId).style.display="block";
}

function hideError(field, errorId){
    field.classList.remove("error");
    document.getElementById(errorId).style.display="none";
}

// for firstName----

function validateName(){
    const name =firstName.value.trim();
    const nameRegex=/^[A-Za-z ]+$/;
    
    if (name===""){
        showError(firstName, "firstNameError", "Please enter your valid name");
        return false;
    }
    else if(!nameRegex.test(name)){
        showError(firstName, "firstNameError", "Please enter only letter");
        return false;
    }
    else if(name.length<2){
        showError(firstName, "firstNameError", "Name must be at least 2 character long");
        return false;

    }
    else{
        hideError(firstName, "firstNameError");
        return true;
    }
}


// for lastName---
function validLastName(){
const name =lastName.value.trim();
    const nameRegex=/^[A-Za-z ]+$/;
    
    if (name===""){
        showError(lastName, "lastNameError", "Please enter your valid name");
        return false;
    }
    else if(!nameRegex.test(name)){
        showError(lastName, "lastNameError", "Please enter only letter");
        return false;
    }
    else if(name.length<2){
        showError(lastName, "lastNameError", "Name must be at least 2 character long");
        return false;

    }
    else{
        hideError(lastName, "lastNameError");
        return true;
    }
}

// for email
function validateEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        showError(email, "emailError", "Please enter your email address");
        return false;
    } else if (!emailRegex.test(emailValue)) {
        showError(email, "emailError", "Please enter a valid email address");
        return false;
    } else {
        hideError(email, "emailError");
        return true;
    }
}


// for phone
function validatePhone() {
    const phoneValue = phone.value.trim();
    const phoneDigitsOnly = phoneValue.replace(/\D/g, ""); // removes non-digits

    const phoneRegex = /^[6-9]\d{9}$/; // accepts digits, spaces, dashes, parens

    if (phoneValue === "") {
        showError(phone, "phoneError", "Please enter your phone number");
        return false;
    } else if (!phoneRegex.test(phoneValue)) {
        showError(phone, "phoneError", "Please enter a valid phone number");
        return false;
    } else if (phoneDigitsOnly.length < 10) {
        showError(phone, "phoneError", "Phone number must be at least 10 digits");
        return false;
    } else {
        hideError(phone, "phoneError");
        return true;
    }
}


firstName.addEventListener("blur", validateName);
lastName.addEventListener("blur", validLastName);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);

firstName.addEventListener("input", ()=>{
    if(firstName.classList.contains("error")){
        validateName();
    }
});

lastName.addEventListener("input", ()=>{
    if(lastName.classList.contains("error")){
        validLastName();
    }
});
email.addEventListener("input", () => {
    if (email.classList.contains("error")) {
        validateEmail();
    }
});
phone.addEventListener("input", () => {
    if (phone.classList.contains("error")) {
      validatePhone();
    }
  });




form.addEventListener("submit", function(e) {
    e.preventDefault();

    const isFirstNameValid=validateName();
    const isLastNameValid=validLastName();
    const isValidEmail=validateEmail();
    const isValidPhone=validatePhone();

    if(isFirstNameValid &&  isLastNameValid && isValidEmail && isValidPhone){
        alert("your details submitted successfully ");
        form.reset();
    }
});
