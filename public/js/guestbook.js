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

    // Mailing list dependency
    const mailingListChecked = document.getElementById("mailing-list").checked;
    const emailVal = document.getElementById("email").value.trim();

    // If mailing list is checked, email is required
    if (mailingListChecked) {
      if (emailVal === "") {
        document.getElementById("err-mailing-list").textContent =
          "Email is required if you join the mailing list.";
        isValid = false;
      } else {
        document.getElementById("err-mailing-list").textContent = "";
      }
    } else {
      document.getElementById("err-mailing-list").textContent = "";
    }

    if (!isValid) e.preventDefault();
  });
});
