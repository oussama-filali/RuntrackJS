window.addEventListener("scroll", function() {
    // Calcule le pourcentage de scroll
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    const scrollActuel = window.scrollY;
    const pourcentage = (scrollActuel / scrollMax) * 100;
    
    // Change la teinte de la couleur (de rouge à vert)
    const hue = (pourcentage * 1.2); // 0 à 120 degrés
    document.querySelector("footer").style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
});