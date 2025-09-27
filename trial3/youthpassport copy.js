document.addEventListener("DOMContentLoaded", function () {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    alert("No passport data found. Please sign up first.");
    return;
  }

  // Fill profile
  document.getElementById("userName").textContent = currentUser.fullName || "";
  document.getElementById("userAge").textContent = currentUser.age || "";
  document.getElementById("userGender").textContent = currentUser.gender || "";
  document.getElementById("userLocation").textContent = currentUser.location || "";
  document.getElementById("userEmail").textContent = currentUser.email || "";
  document.getElementById("userPhone").textContent = currentUser.phone || "";

  // Education, Work, Portfolio
  document.getElementById("eduList").textContent = currentUser.education || "Not provided";
  document.getElementById("workList").textContent = currentUser.workHistory || "Not provided";
  document.getElementById("portfolioList").textContent = currentUser.portfolio || "Not provided";

  // Finance & Referee
  document.getElementById("userFinance").textContent = currentUser.finance || "";
  document.getElementById("userSavings").textContent = currentUser.savings || "";
  document.getElementById("userReferee").textContent = currentUser.referee || "";
});
