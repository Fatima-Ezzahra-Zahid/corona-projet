const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


function demarrerLaMontre() {

  //Extraire l'heure actuel à l'aide de l'objet Date()
    let date = new Date();

    //Ajouter l'heure , minite , seconde  dans des varaiables
    let seconde = (date.getSeconds())/60;
    let munite = (date.getMinutes()+seconde)/60;
    let heur = (date.getHours()+munite)/12;
    
    // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde 
    let degres=seconde*360;
    let degrem=munite*360;
    let degreh=heur*360;

    AIGUILLESEC.style.transform = `rotate(${degres}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${degrem}deg)`;
    AIGUILLEHR.style.transform = `rotate(${degreh}deg)`;

   


}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);