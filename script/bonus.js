// Quanti minuti mancano alla fine dell’ora?  (quindi script che quando aggiorno la pagina mi dice quanti minuti mancano);
// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.


// creo una variabile per avere l'orario in minuti
var minuti = new Date();
// calcolo quanto manca alla fine dell'ora
var tempoRim = 60 - minuti.getMinutes();
// dò l'out-put al pc

if (tempoRim === 1){
  document.getElementById('minuti-rimanenti').innerHTML = "FUN-FACT: manca un minuto alla fine dell'ora!"

} else {
  document.getElementById('minuti-rimanenti').innerHTML = "FUN-FACT: mancano " + tempoRim + " minuti alla fine dell'ora!"

}


// creo var per chiedere l'età alla gente

var userUno = parseInt(prompt("Ciao utente uno, quanti anni hai??"));
var userDue = parseInt(prompt("Ciao utente due, quanti anni hai?"));

// creo var messaggio

var messaggio = null;

// creo messaggio output in base a chi è il più grande

if (userUno > userDue) {
  messaggio = "Complimenti utente uno! Con la veneranda età di " + userUno + " anni lei è l'utente più grande.";
} else if (userUno < userDue) {
  messaggio = "Complimenti utente due! Con la veneranda età di " + userDue + " anni lei è l'utente più grande.";
}
else if (userUno === userDue) {
  messaggio = "Pare proprio che abbiate la stessa età!"
}

document.getElementById('quello-grande').innerHTML = messaggio;
