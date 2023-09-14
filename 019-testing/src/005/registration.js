document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm(document);
  });
});

function validateForm(document) {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  let valid = true;

  if (username.length < 5) {
    usernameError.textContent = "Username should be at least 5 characters.";
    valid = false;
  } else {
    usernameError.textContent = "";
  }

  if (!email.includes("@")) {
    emailError.textContent = "Email should be valid.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (password.length < 8) {
    passwordError.textContent = "Password should be at least 8 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    // Here you would send the data to the server
    console.log("Form is valid. Sending data to server...");
  }

  return valid;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { validateForm };
}
