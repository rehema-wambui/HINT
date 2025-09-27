window.onload = function () {
  const savedData = localStorage.getItem("passportData");
  if (!savedData) return;
  const data = JSON.parse(savedData);

  // Fill profile
  document.getElementById("passportName").textContent = data.fullName || "";
  document.getElementById("passportLocation").textContent = data.location || "";
  document.getElementById("passportAge").textContent = data.age || "";
  document.getElementById("passportGender").textContent = data.gender || "";
  if (data.photo) document.getElementById("passportPhoto").src = data.photo;

  // Tabs
  const contentBox = document.getElementById("passportContent");
  const tabs = document.querySelectorAll(".tabs button");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabType = tab.getAttribute("data-tab");
      let content = "";

      switch (tabType) {
        case "education":
          content = `<h3>Education</h3>
            <ul>${(data.educationList || []).map(ed => `<li>${ed}</li>`).join("")}</ul>
            ${(data.certificates || []).map(cert => `<p><a href="${cert}" target="_blank">View Certificate</a></p>`).join("")}`;
          break;

        case "skills":
          content = `<h3>Skills</h3>
            ${(data.skills || "").split(",").map(skill => `<span class="skill-tag">${skill.trim()}</span>`).join("")}`;
          break;

        case "work":
          content = `<h3>Work History & Recommendations</h3>
            <p>${data.workHistory || "Not provided"}</p>
            ${(data.recommendations || []).map(rec => `<p><a href="${rec}" target="_blank">View Recommendation</a></p>`).join("")}`;
          break;

        case "portfolio":
          content = `<h3>Portfolio & Side Projects</h3>
            ${(data.portfolioLinks || []).map(link => `<p><a href="${link}" target="_blank">${link}</a></p>`).join("")}`;
          break;

        case "finance":
          content = `<h3>Financial Info</h3>
            <p>${data.finance || "Not provided"}</p>`;
          break;

        default:
          content = `<p>Select a tab to view details.</p>`;
      }
      contentBox.innerHTML = content;
    });
  });

  // Load default tab
  tabs[0].click();

  // QR Code
  const passportUrl = window.location.href;
  QRCode.toCanvas(document.getElementById("qrCode"), passportUrl, err => {
    if (err) console.error(err);
  });

  // Copy link
  document.getElementById("copyLink").addEventListener("click", () => {
    navigator.clipboard.writeText(passportUrl);
    alert("Passport link copied!");
  });

  // Share Passport
  document.getElementById("sharePassport").addEventListener("click", async () => {
    if (navigator.share) {
      await navigator.share({
        title: "My Digital Passport",
        url: passportUrl
      });
    } else {
      alert("Sharing not supported on this device");
    }
  });

  // Download PDF (placeholder)
  document.getElementById("downloadPassport").addEventListener("click", () => {
    alert("PDF download feature coming soon!");
  });
};
