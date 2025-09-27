function addEducation() {
  const container = document.getElementById("educationContainer");
  const div = document.createElement("div");
  div.classList.add("education-entry");
  div.innerHTML = `
    <input type="text" placeholder="Institution / School" class="education-input"/>
    <input type="text" placeholder="Level (e.g. Secondary, University)" class="education-input"/>
    <input type="file" accept="image/*,.pdf" class="education-cert"/>
  `;
  container.appendChild(div);
}

function addWork() {
  const container = document.getElementById("workContainer");
  const div = document.createElement("div");
  div.classList.add("work-entry");
  div.innerHTML = `
    <input type="text" placeholder="Job Title" class="work-input"/>
    <textarea placeholder="Description"></textarea>
    <input type="file" accept="image/*,.pdf" class="work-recommend"/>
  `;
  container.appendChild(div);
}

function addPortfolio() {
  const container = document.getElementById("portfolioContainer");
  const div = document.createElement("div");
  div.classList.add("portfolio-entry");
  div.innerHTML = `
    <input type="text" placeholder="Project/Job Title" class="portfolio-input"/>
    <textarea placeholder="Description"></textarea>
    <input type="url" placeholder="Link to work"/>
    <input type="file" accept="image/*" multiple class="portfolio-files"/>
  `;
  container.appendChild(div);
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Passport created successfully! (Data saving feature links to passport page)");
  window.location.href = "passport.html"; // redirect
});
