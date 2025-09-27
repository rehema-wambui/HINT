document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  if (!form) {
    console.error("❌ Signup form not found on this page.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Which button did they press on homepage?
    const userType = localStorage.getItem("pendingUserType") || "youth";

    const userData = { fullName, email, password, userType };

    // Save
    localStorage.setItem("currentUser", JSON.stringify(userData));
    localStorage.setItem(email, JSON.stringify(userData));

    console.log("✅ User saved:", userData);

    // Redirect to correct form
    if (userType === "youth") {
      window.location.href = "youth form.html";
    } else if (userType === "employer") {
      window.location.href = "employer form.html";
    }
  });
});
