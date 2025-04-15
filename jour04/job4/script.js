document.getElementById("update").addEventListener("click", () => {
    fetch("utilisateur.json")
      .then(res => res.json())
      .then(utilisateurs => {
        const tbody = document.getElementById("tableau");
        tbody.innerHTML = "";
  
        utilisateurs.forEach(u => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${u.id}</td><td>${u.nom}</td><td>${u.prenom}</td><td>${u.email}</td>`;
          tbody.appendChild(row);
        });
      })
      .catch(error => console.error("Erreur lors du fetch :", error));
  });
  