const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll('.error').forEach(el => el.textContent = "");

  if (nameField.value.trim() === "") {
    document.getElementById('nameError').textContent = "Name is required.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailField.value.trim() === "") {
    document.getElementById('emailError').textContent = "Email is required.";
    valid = false;
  } else if (!emailField.value.match(emailPattern)) {
    document.getElementById('emailError').textContent = "Invalid email format.";
    valid = false;
  }

  if (messageField.value.trim() === "") {
    document.getElementById('messageError').textContent = "Message is required.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
