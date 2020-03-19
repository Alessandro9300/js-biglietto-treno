// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

// Il prezzo del biglietto è definito in base ai km (0.21 € al km),

// ma va applicato uno sconto del 20% per i minorenni

// e del 40% per gli over 65.



// chiedo al passeggero quanti anni ha e quanti chilometri vuole percorrere in treno

var ageUser = prompt("Quanti anni hai?");
var numbKm = prompt("Quanti chilometri vuoi percorrere?");

console.log("età " + ageUser + " km " + numbKm);

// calcolo il prezzo dei biglietti

var costoPerKm = 0.21;
var costoViaggio = numbKm * costoPerKm;

// calcolo gli sconti

if (ageUser >= 65){
costoViaggio = costoViaggio - ((costoViaggio * 40) / 100);
} else if (ageUser < 18) {
costoViaggio = costoViaggio - ((costoViaggio * 20) / 100);
}

console.log("euro" + costoPerKm + " tot costo " + costoViaggio);

// dò l'output in html

document.getElementById('costoBiglietto').innerHTML = "Il suo viaggio costa " + costoViaggio;
