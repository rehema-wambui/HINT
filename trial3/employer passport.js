document.addEventListener("DOMContentLoaded", () => {
  // Example employees (in real app this would come from server/db)
  const employees = [
    { name: "Alice Mwangi", skill: "UI/UX Designer", location: "Nairobi" },
    { name: "John Kamau", skill: "Fullstack Developer", location: "Mombasa" },
    { name: "Grace Otieno", skill: "Data Analyst", location: "Kisumu" }
  ];

  const employeeList = document.getElementById("employeeList");

  employees.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <h4>${emp.name}</h4>
      <p><strong>Skill:</strong> ${emp.skill}</p>
      <p><strong>Location:</strong> ${emp.location}</p>
    `;
    employeeList.appendChild(card);
  });
});
