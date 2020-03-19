// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km),
// ma va applicato uno sconto del 20% per i minorenni
// e del 40% per gli over 65.



// chiedo al passeggero quanti anni ha e quanti chilometri vuole percorrere in treno

var scontoApplicato;
var ageUser = parseInt(prompt("Quanti anni hai?"));
var numbKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

console.log("età " + ageUser + " km " + numbKm);

// calcolo il prezzo dei biglietti

var pochiKm = null;
var costoPerKm = 0.21;
var costoViaggio = Math.ceil(numbKm * costoPerKm);

// calcolo gli sconti (e altre cose)

if (ageUser >= 65){
  costoViaggio = costoViaggio - ((costoViaggio * 40) / 100);
  scontoApplicato = "Siamo lieti di comunicarle che le è stata applicata la nostra speciale tariffa 'UN PIEDE NELLA FOSSA'!"
} else if (ageUser < 18) {
  costoViaggio = costoViaggio - ((costoViaggio * 20) / 100);
  scontoApplicato = "Siamo lieti di comunicarle che le è stata applicata la nostra speciale tariffa 'BIMBO SPECIALE'!!"
}
else{
  scontoApplicato = " ";
}

if (numbKm < 10){
  var pochiKm = "Certo che per così poca strada poteva andarsene in bici D:"
}



// dò l'output in html

document.getElementById('costoBiglietto').innerHTML = "Il suo viaggio costa " + costoViaggio + " euro!";
document.getElementById('scontoEta').innerHTML = scontoApplicato;
document.getElementById('pocaStrada').innerHTML = pochiKm;



//provo parse int
var prova = ageUser + 10;
console.log("prova pars int " + prova);

// console per controllare che tutto funzioni correttamente
console.log("euro" + costoPerKm + " tot costo " + costoViaggio);
