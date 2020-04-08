// Déclaration des elements DOM nécessaires :

const AIGUILLE_DHEURE = document.querySelector("#hour");
const AIGUILLE_DE_MINUTE = document.querySelector("#minute");
const AIGUILLE_DE_SECONDE = document.querySelector("#second");


function demarrerLaMontre() {

    // Extraction de la date actuel à l'aide de la classe Date :

    let date_instance = new Date();

    // Ajout de l'heure , le minute et la seconde dans des varaiables :

    let seconds_number = (date_instance.getSeconds()) / 60;
    let minutes_number = (date_instance.getMinutes() + seconds_number) / 60;
    let hours_number = (date_instance.getHours() + minutes_number) / 12;
    
    // Calcul des degrées de mouvement de l'aiguille d'heure, de l'aiguille de minute et de l'aiguille de seconde 

    let seconds_degree = seconds_number * 360;
    let minutes_degree = minutes_number * 360;
    let hours_degree = hours_number * 360;

    // Rotation des aiguilles à partir les degrées calculées :

    AIGUILLE_DHEURE.style.transform = `rotate(${seconds_degree}deg)`;
    AIGUILLE_DE_MINUTE.style.transform = `rotate(${minutes_degree}deg)`;
    AIGUILLE_DE_SECONDE.style.transform = `rotate(${hours_degree}deg)`;
}

// Execution de la fonction chaque une seconde

const interval = setInterval(demarrerLaMontre, 1000);
