/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

*/

/* SCRIVI QUI LA TUA RISPOSTA */

// number=sono tipi numerici
// string=sono tipi stringa
// boolean=possono essere solo true o false
// null è un valore nullo
// undefined è un valore non definito
// array= è composto da un insieme di variabili come una sorta di contenitore
 //--------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "alfio";
console.log(myName)
 //--------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12;
let b = 20;
let somma = a + b;
console.log(somma)

 //--------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x)


//----------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


//const myName = "battiato";                in questo caso non possiamo modificare questa esatta variabile perchè stiamo cercando
// di instanziare una nuova variabile utilizzando il nome di una già esistente, oltretutto se dichiariamo una CONST non può altrettando
//essere modificata perchè avrà un valore appositivamente constante! per tanto se vogliamo modificarla la corretta assegnazione sarebbe:

 myName="battiato"
 console.log(myName)

 //--------------------------------------------------------------------------------------------------------------------------------------------
 /* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione= 4-x
console.log(sottrazione)

 //--------------------------------------------------------------------------------------------------------------------------------------------

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1="john";
let name2="John"

console.log(name1===name2)
console.log(name1===name2.toLocaleLowerCase())
