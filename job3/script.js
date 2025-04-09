// Récupère les éléments
const bouton = document.getElementById("button");
const compteur = document.getElementById("compteur");

// Ajoute l'événement click
bouton.addEventListener("click", addOne);

function addOne() {
    // Incrémente le compteur
    let nombre = parseInt(compteur.textContent);
    nombre++;
    compteur.textContent = nombre;
}