document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-book-form");

  form.addEventListener("submit", (e) => {
    let isValid = true;

    // First Name Validation
    const fname = document.getElementById("fname").value.trim();
    if (fname === "") {
      document.getElementById("err-fname").textContent =
        "First name is required.";
      isValid = false;
    } else {
      document.getElementById("err-fname").textContent = "";
    }
  });
});
