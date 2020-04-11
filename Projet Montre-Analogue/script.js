// Déclaration des elements DOM nécessaires :

const AIGUILLE_DHEURE = document.querySelector('#hour');
const AIGUILLE_DE_MINUTE = document.querySelector('#minute');
const AIGUILLE_DE_SECONDE = document.querySelector('#second');

// Declarer des compteurs des toures pour les aiguilles :

let seconds_turns = 0;
let minutes_turns = 0;
let hours_turns = 0;

function demarrerLaMontre() {
	// Extraction de la date actuel à l'aide de la classe Date :

	let date_instance = new Date();

	// Ajout de l'heure , le minute et la seconde dans des varaiables :

	let seconds_number = date_instance.getSeconds() / 60;
	let minutes_number = (date_instance.getMinutes() + seconds_number) / 60;
	let hours_number = (date_instance.getHours() + minutes_number) / 12;

	// Calcul des degrées de mouvement de l'aiguille d'heure, de l'aiguille de minute et de l'aiguille de seconde

	let seconds_degree = seconds_number * 360;
	let minutes_degree = minutes_number * 360;
	let hours_degree = hours_number * 360;

	// Si quelque degrée retourne à 0, augmenter sa tourne par 1

	if (seconds_degree == 0) seconds_turns += 1;
	if (minutes_degree == 0) minutes_turns += 1;
	if (hours_degree == 0) hours_turns += 1;

	// Rotation des aiguilles à partir les degrées calculées :

	AIGUILLE_DHEURE.style.transform = `rotate(${hours_degree + 360 * hours_turns}deg)`;
	AIGUILLE_DE_MINUTE.style.transform = `rotate(${minutes_degree + 360 * minutes_turns}deg)`;
	AIGUILLE_DE_SECONDE.style.transform = `rotate(${seconds_degree + 360 * seconds_turns}deg)`;
}

// Execution de la fonction chaque une seconde

const interval = setInterval(demarrerLaMontre, 1000);
