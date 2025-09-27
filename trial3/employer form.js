document.getElementById("employerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const employerData = {
    companyName: document.getElementById("companyName").value,
    registrationNumber: document.getElementById("registrationNumber").value,
    industry: document.getElementById("industry").value,
    companySize: document.getElementById("companySize").value,
    location: document.getElementById("location").value,
    contactName: document.getElementById("contactName").value,
    contactPosition: document.getElementById("contactPosition").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    roles: document.getElementById("roles").value,
    skills: document.getElementById("skills").value,
    opportunities: document.getElementById("opportunities").value
  };

  // Save to localStorage (replace later with database)
  localStorage.setItem("employerProfile", JSON.stringify(employerData));

  alert("Employer Registered Successfully!");
  window.location.href = "employerDashboard.html"; // redirect
});
