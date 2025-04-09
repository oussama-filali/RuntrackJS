// Récupère le bouton et ajoute un événement click
document.getElementById("button").addEventListener("click", citation);

function citation() {
    // Récupère le contenu de l'article et l'affiche dans la console
    const texte = document.getElementById("citation").textContent;
    console.log(texte);
}