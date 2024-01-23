// genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale


let randomN = Math.floor(Math.random() * 100) + 1;
console.log(randomN)

usernumber = 0


while (usernumber !== randomN ) {
    
    let tentativoUtente = parseInt(prompt("Indovina il numero tra 1 e 100:"));
    

    if (tentativoUtente === randomN) {
        alert("Hai indovinato! il numero era:  " + randomN);
    } else if (tentativoUtente < randomN) {
        alert("Il numero è troppo basso. Prova di nuovo.");
    } else {
        alert("Il numero è troppo alto. Prova di nuovo.");
    }
}
