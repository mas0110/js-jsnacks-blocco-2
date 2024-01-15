// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


let NumeroUtente = parseInt(prompt("Inserisci un numero:"));


for (let  i = 0; i < NumeroUtente; i++) {

    if (NumeroUtente % 2 === 0) {
        alert("Il numero inserito è pari:", NumeroUtente)
        console.log("Il numero inserito è pari:", NumeroUtente);
    } else {
        alert("Il numero inserito è dispari. Il numero successivo è:", NumeroUtente + 1)
        console.log("Il numero inserito è dispari. Il numero successivo è:", NumeroUtente + 1);
    }
}
