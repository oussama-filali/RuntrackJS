document.getElementById("filtrer").addEventListener("click", () => {
    fetch("pokemon.json")
      .then(res => res.json())
      .then(pokemons => {
        const id = document.getElementById("id").value.trim();
        const nom = document.getElementById("nom").value.trim().toLowerCase();
        const type = document.getElementById("type").value;
  
        const filtres = pokemons.filter(p => {
          return (!id || p.id == id) &&
                 (!nom || p.nom.toLowerCase().includes(nom)) &&
                 (!type || p.type === type);
        });
  
        const resultatDiv = document.getElementById("resultats");
        resultatDiv.innerHTML = "";
  
        if (filtres.length === 0) {
          resultatDiv.textContent = "Aucun Pokémon trouvé.";
          return;
        }
  
        filtres.forEach(p => {
          const el = document.createElement("p");
          el.textContent = `${p.id} - ${p.nom} (${p.type})`;
          resultatDiv.appendChild(el);
        });
      })
      .catch(err => console.error("Erreur JSON :", err));
  });
  