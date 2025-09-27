window.onload = function () {
  const savedData = localStorage.getItem("passportData");
  if (!savedData) return;

  const data = JSON.parse(savedData);

  // Fill in passport details
  document.getElementById("passportName").textContent = data.fullName || "";
  document.getElementById("passportLocation").textContent = data.location || "";
  if (data.photo) {
    document.getElementById("passportPhoto").src = data.photo;
  }

  // Tab system content
  const contentBox = document.getElementById("passportContent");
  const tabs = document.querySelectorAll(".tabs button");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabType = tab.getAttribute("data-tab");
      let content = "";

      switch (tabType) {
        case "skills":
          content = `<h4>Skills</h4><p>${data.skills || "Not provided"}</p>`;
          break;
        case "education":
          content = `<h4>Education</h4><p>${data.education || "Not provided"}</p>`;
          break;
        case "work":
          content = `<h4>Work History</h4><p>${data.workHistory || "Not provided"}</p>`;
          break;
        case "creative":
          content = `<h4>Portfolio</h4>
                     <p>${
                       data.portfolio
                         ? `<a href="${data.portfolio}" target="_blank">${data.portfolio}</a>`
                         : "Not provided"
                     }</p>`;
          break;
        default:
          content = `<p>Select a tab to view details.</p>`;
      }

      contentBox.innerHTML = content;
    });
  });

  // Load default tab
  tabs[0].click();

  // QR Code (shareable link)
  const passportUrl = window.location.href;
  QRCode.toCanvas(document.getElementById("qrCode"), passportUrl, function (error) {
    if (error) console.error(error);
  });

  // Copy link button
  document.getElementById("copyLink").addEventListener("click", () => {
    navigator.clipboard.writeText(passportUrl);
    alert("Passport link copied!");
  });

  // Share passport button
  const shareBtn = document.getElementById("sharePassport");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      if (navigator.share) {
        navigator
          .share({
            title: "My HINT Digital Passport",
            text: "Check out my verified HINT Digital Passport!",
            url: passportUrl,
          })
          .catch((err) => console.error("Share failed:", err));
      } else {
        alert("Sharing is not supported on this browser. Please copy the link instead.");
      }
    });
  }
};
