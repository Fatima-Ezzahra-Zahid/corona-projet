// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

let date = new Date();

//Ajouter l'heure , minite , seconde  dans des varaiables
let heur = date.getHours(); 
let minite = date.getMinutes();
let seconde = date.getSeconds();


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {



}
// Exercuter la fonction chaque second
let interval = setInterval(demarrerLaMontre, 1000);
