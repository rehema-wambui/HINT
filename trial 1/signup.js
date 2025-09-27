document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form values
  const fullName = document.getElementById("fullName").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const location = document.getElementById("location").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const workHistory = document.getElementById("workHistory").value;
  const portfolio = document.getElementById("portfolio").value;

  // Handle profile photo
  const photoFile = document.getElementById("photo").files[0];
  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      saveData(e.target.result);
    };
    reader.readAsDataURL(photoFile);
  } else {
    saveData(""); // no photo uploaded
  }

  function saveData(photoData) {
    const data = {
      fullName,
      age,
      gender,
      location,
      email,
      phone,
      education,
      skills,
      workHistory,
      portfolio,
      photo: photoData,
    };

    localStorage.setItem("passportData", JSON.stringify(data));
    window.location.href = "passport.html";
  }
});
