// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro


let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30];

function randomnumber( min,max){
    return Math.floor(math.random()*(max-min +1)+min)
}

let i = 0

let arrayminore;

if (array1.length > array2.length){
    arrayminore = array2;
} else{
    arrayminore = array1;
}

for ( let i = 0; array1.length !== array2; i++){

    let inseriscinumero = randomnumber (1,100)

    arrayminore.push(inseriscinumero)
}

console.log( array1, array2 )

