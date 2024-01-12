// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

const  arrayvuota= [ ]

let i = 0

while( i< 50){
    let numeroUtente = parseInt(prompt("inserisci un numero"))

    arrayvuota.push(numeroUtente)
    i += numeroUtente
}

console.log("array", arrayvuota)
console.log("somma degli elementi", i)
