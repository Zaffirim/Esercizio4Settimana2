/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const l1 = 20;
const l2 = 22;

let area;
function risultato(l1, l2) {
    area = (l1 * l2) / 2;
    return console.log(area);

}
risultato(l1, l2);

console.log('***ESERCIZIO 2***');


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const n1 = 30;
const n2 = 30;

function crazySum(n1, n2) {

    if (n1 === n2) {
        risultatoUguali = (n1 + n2) * 3;
        return console.log(risultatoUguali)
    }

    console.log(n1 + n2)

}

crazySum(n1, n2);

console.log('***ESERCIZIO 3***');
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const n3 = 20;
function crazyDiff(p) {

    if (p > 19) {

        let risultato = Math.abs(19 - p) * 3;
        return console.log(risultato)
    }

    console.log(Math.abs(19 - p))
}

crazyDiff(n3);

console.log('***ESERCIZIO 4***');

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
let number = 400;

function boundary(n) {

    if (n > 20 && n < 100 || n === 400) {
        return console.log(true)
    }

}

boundary(number);
console.log('***ESERCIZIO 4***');

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const stringaEsercizio = 'Oggi abbiamo studiato gli integrali';

function epify(frase = '') {

    if (typeof frase !== 'string') {
        return console.log('Il parametro deve essere una stringa');
    }

    if (frase.startsWith("EPICODE")) {
        return console.log(frase);
    }
    return console.log("EPICODE" + " " + frase);
}

epify(stringaEsercizio);
console.log('***ESERCIZIO 6***');



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
number = 3;

function check3and7(number) {

    if (number % 3 === 0 || number % 7 === 0) {
        return console.log('numero è multiplo di 3 o di 7');
    }
    return console.log('numero non è multiplo di 3 o di 7');
}

check3and7(number);
console.log('***ESERCIZIO 7***');
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/



function reverseString(stringa) {

    stringaInvertita = stringa.split('').reverse().join('');

    return console.log(stringaInvertita);
}

reverseString(stringaEsercizio);
console.log('***ESERCIZIO 8***');

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


function upperFirst(inputString) {

    const words = inputString.split(' ');
    const uppercasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const resultString = uppercasedWords.join(' ');
    return console.log(resultString);


}

upperFirst(stringaEsercizio);
console.log('***ESERCIZIO 9***');



/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const parola2 = 'Milo';

function cutString(inputString) {

    let parola = inputString.slice(1,-1);
    return console.log(parola);
}

cutString(parola2);

console.log('***ESERCIZIO 10***');


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const x = 20;

function giveMeRandom(n) {

    const randomNumbers = [];

    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNumber)
    }

    return console.log(randomNumbers);
}

giveMeRandom(x);
/* SCRIVI QUI LA TUA RISPOSTA */
