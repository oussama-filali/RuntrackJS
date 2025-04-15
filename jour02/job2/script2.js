// Variable pour suivre l'état de l'article
let articleExiste = false;
let article;

document.getElementById("button").addEventListener("click", showhide);

function showhide() {
    if (!articleExiste) {
        // Crée et ajoute l'article
        article = document.createElement("article");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
        articleExiste = true;
    } else {
        // Supprime l'article
        article.remove();
        articleExiste = false;
    }
}