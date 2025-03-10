// job 4
function bisextile(année) {
    if (année % 4 === 0 && année % 100 !== 0 || année % 400 === 0)
        return true;
    else
        return false;
}
// Tester la fonction avec quelques valeurs
console.log(bisextile(2024)); // true (bissextile)
console.log(bisextile(2023)); // false (non bissextile)
console.log(bisextile(2025)); // false (non bissextile)