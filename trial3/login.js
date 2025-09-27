// youth-login.js
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let userData = JSON.parse(localStorage.getItem(email));

  if(userData && userData.password === password && userData.userType === "youth"){
    localStorage.setItem("currentUser", JSON.stringify(userData));
    window.location.href = "youthPassport.html";
  } else {
    alert("Invalid login details!");
  }
});
