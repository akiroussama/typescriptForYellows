/*
Annotations de type || Signature
  -- Indiquez le type de données des variables
  -- Indiquer le type de données des fonctions d'entrée/sortie
  -- Objets, etc...

  - Pourquoi l'utilisons-nous ?
  - Est-ce obligatoire ?
  - Que se passe-t-il si nous ne l'utilisons pas ?
*/

let theName = "Wild";
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Wild Code School";
let allVars; // Any

theName = "Fawsy";
all = 100;

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));

// function add(n1, n2) {
//   return n1 + n2;
// }

// console.log(add(10, "20"));
// console.log(typeof add(10, "20"));
