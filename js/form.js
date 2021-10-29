const form = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const mobile = document.querySelector("#telephone");
const field = document.querySelector("#message");
const nameError = document.querySelector("#nameError");
const mailError = document.querySelector("#mailError");
const mobileError = document.querySelector(".mobileError");
const textarea = document.querySelector(".formresult");

function validateForm() {
    event.preventDefault();  

    if (checkLength(name.value, 7) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
        mailError.style.display = "none";
    } else {
        mailError.style.display = "block";
    }
    if (checkLength(mobile.value, 7)  === true)  {
        console.log("Yes");
        mobileError.style.display = "none";
    } else {
        console.log("false");
        mobileError.style.display = "block";
    }
    if ((checkLength(name.value, 7) === true) && (validateEmail(email.value) === true) && (checkLength(mobile.value, 7)  === true)) {
        textarea.innerHTML = "&#9745; Thank you! We will be in touch.";
        textarea.style.background = "var(--green)";
        textarea.style.color = "var(--gray)";
        textarea.style.padding = "1%";
    } else {
        textarea.innerHTML = "&#9746; Please check inputs";
        textarea.style.background = "var(--pink)";
    }
   
}
form.addEventListener("submit", validateForm);



//Making a function to check length.
function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}