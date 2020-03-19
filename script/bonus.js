// Quanti minuti mancano alla fine dell’ora?  (quindi script che quando aggiorno la pagina mi dice quanti minuti mancano);
// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.


// creo una variabile per avere l'orario in minuti



var minuti = new Date();
var tempoRim = 60 - minuti.getMinutes();

document.getElementById('minuti-rimanenti').innerHTML = "Mancano " + tempoRim + " minuti alla fine dell'ora!"

console.log( minuti.getMinutes() + "prova " + tempoRim);
