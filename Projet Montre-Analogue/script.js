// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

var date=new Date();

//Ajouter l'heure , minite , seconde  dans des varaiables
var heur=date.getHours(); 
var minite=date.getMinutes();
var seconde=date.getSeconds();


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {



}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);