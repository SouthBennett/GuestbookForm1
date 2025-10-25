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

    // Last Name Validation
    const lname = document.getElementById("lname").value.trim();
    if (lname === "") {
      document.getElementById("err-lname").textContent =
        "Last name is required.";
      isValid = false;
    } else {
      document.getElementById("err-lname").textContent = "";
    }

    //Validate Email
    const email = document.getElementById("email").value.trim();

    if (email !== "") {
      if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("err-email").textContent =
          "Email must include '@' and a dot (.)";
        isValid == false;
      } else {
        document.getElementById("err-email").textContent = "";
      }
    } else {
      document.getElementById("err-email").textContent = "";
    }

    if (!isValid) e.preventDefault();
  });
});
