function afficherJoursSemaines() {
    // Tableau contenant les jours de la semaine
    let joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Boucle for pour parcourir et afficher chaque jour
    for (let i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]); // Affichage dans la console
    }
}

// Appel de la fonction pour afficher les jours
afficherJoursSemaines();
