/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

console.log("Esercizio 1");

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("Esercizio 2");

{
  const petsCopy = pets.slice(0);
  const alphaPets = petsCopy.sort();

  console.log(alphaPets);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("Esercizio 3");

{
  const pets1 = pets.slice(0);

  reversePets = pets1.reverse();

  console.log(reversePets);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("Esercizio 4");

{
  const firstPet = pets.shift();

  console.log(firstPet);

  pets.push(firstPet);

  console.log(pets);
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("Esercizio 5");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars[0].licensePlate = "MY67OJ";
cars[1].licensePlate = "OB78IK";
cars[2].licensePlate = "GT97RD";

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("Esercizio 6");

const newCar = {
  brand: "Ferrari",
  model: "Italia",
  color: "red",
  trims: ["corsa", "dolce", "boh"],
  licensePlate: "XZ08DR",
};

cars.push(newCar);

console.log(cars);

const removeLastTrim = function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();
  }
};

removeLastTrim();

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("Esercizio 7");

const justTrims = [];

const trimPush = function () {
  for (let i = 0; i < cars.length; i++) {
    const firstTrim = cars[i].trims.shift();
    justTrims.push(firstTrim);
  }
};

trimPush();

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("Esercizio 8");

const fizzOrBuzz = function () {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].color.charAt(0) === "b") {
      console.log(cars[i].brand + " è Fizz");
    } else {
      console.log(cars[i].brand + " è Buzz");
    }
  }
};

fizzOrBuzz();

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;

while (numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alphabetArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      alphabetArray.push(1);
      break;
    case "b":
      alphabetArray.push(2);
      break;
    case "c":
      alphabetArray.push(3);
      break;
    case "d":
      alphabetArray.push(4);
      break;
    case "e":
      alphabetArray.push(5);
      break;
    case "f":
      alphabetArray.push(6);
      break;
    case "g":
      alphabetArray.push(7);
      break;
    case "h":
      alphabetArray.push(8);
      break;
    case "i":
      alphabetArray.push(9);
      break;
    case "j":
      alphabetArray.push(10);
      break;
    case "k":
      alphabetArray.push(11);
      break;
    case "l":
      alphabetArray.push(12);
      break;
    case "m":
      alphabetArray.push(13);
      break;
    case "n":
      alphabetArray.push(14);
      break;
    case "o":
      alphabetArray.push(15);
      break;
    case "p":
      alphabetArray.push(16);
      break;
    case "q":
      alphabetArray.push(17);
      break;
    case "r":
      alphabetArray.push(18);
      break;
    case "s":
      alphabetArray.push(19);
      break;
    case "t":
      alphabetArray.push(20);
      break;
    case "u":
      alphabetArray.push(21);
      break;
    case "v":
      alphabetArray.push(22);
      break;
    case "w":
      alphabetArray.push(23);
      break;
    case "x":
      alphabetArray.push(24);
      break;
    case "y":
      alphabetArray.push(25);
      break;
    case "z":
      alphabetArray.push(26);
      break;
  }
}

console.log(alphabetArray);
