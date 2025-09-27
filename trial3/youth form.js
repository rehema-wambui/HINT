document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("youthForm"); // ✅ match ID with HTML

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

    // Save basic info
    currentUser.fullName = document.getElementById("fullName").value;
    currentUser.age = document.getElementById("age").value;
    currentUser.gender = document.getElementById("gender").value;
    currentUser.location = document.getElementById("location").value;
    currentUser.email = document.getElementById("email").value;
    currentUser.phone = document.getElementById("phone").value;

    // Education
    currentUser.education = document.getElementById("education").value;

    // Work history
    currentUser.workHistory = document.getElementById("workHistory").value;

    // Portfolio
    currentUser.portfolio = document.getElementById("portfolio").value;

    // Finance & Referee
    currentUser.finance = document.getElementById("finance").value;
    currentUser.savings = document.getElementById("savings").value;
    currentUser.referee = document.getElementById("referee").value;

    // Save to localStorage
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem(currentUser.email, JSON.stringify(currentUser));

    // ✅ Redirect to passport page
    window.location.href = "youthPassport.html";
  });
});
