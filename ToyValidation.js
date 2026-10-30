
const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Function to check empty values
function isEmpty(value) {
    return value.trim() === "";
}

// Function to validate email
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Function to validate password
function isStrongPassword(password) {
    return password.length >= 8;
}

// Function to display error
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Function to clear errors
function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passError").textContent = "";
}

// Main validation function
function validateForm() {

    let isValid = true;

    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Name validation
    if (isEmpty(name)) {
        showError("nameError", "Name is required");
        isValid = false;
    }
    else if (name.length < 3) {
        showError("nameError", "Name must contain at least 3 characters");
        isValid = false;
    }
    else {
        console.log("Name is valid");
    }

    // Email validation
    if (isEmpty(email)) {
        showError("emailError", "Email is required");
        isValid = false;
    }
    else if (!isValidEmail(email)) {
        showError("emailError", "Enter a valid email address");
        isValid = false;
    }
    else {
        console.log("Email is valid");
    }

    // Password validation
    if (isEmpty(password)) {
        showError("passError", "Password is required");
        isValid = false;
    }
    else if (!isStrongPassword(password)) {
        showError("passError", "Password must contain at least 8 characters");
        isValid = false;
    }
    else {
        console.log("Password is valid");
    }

    return isValid;
}

// Form submit event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (validateForm()) {
        alert("Signup successful! Welcome to Happy Kids Toy Store.");

        form.reset();
        clearErrors();
    }
    else {
        console.log("Please correct the errors.");
    }

});
