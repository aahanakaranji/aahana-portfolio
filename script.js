function showForm() {
  const dialog = document.getElementById("signupDialog");
  if (dialog) {
    dialog.showModal();
  }
}

function closeForm() {
  const dialog = document.getElementById("signupDialog");
  if (dialog) {
    dialog.close();
  }
}

// Handle form submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;

    // Show thank you message
    alert(`Thank you, ${name}! We will contact you soon at ${email}.`);

    // Clear the form
    form.reset();

    // Close the dialog
    closeForm();
  });
});
