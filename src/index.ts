/*
  Data Types
  - Enums => Enumerations
  --- Nous permettre de déclarer un ensemble de constantes nommées
  --- Utilisé pour le regroupement logique Collection de constantes "Collection de valeurs associées"
  --- Il organise notre code
  --- Par défaut, les énumérations sont basées sur des nombres, le premier élément est 0
  --- Il y a des énumérations numériques ou string
  --- Il y a des énumérations hétérogènes [chaîne + nombre]
*/

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;

// enum Level {
//   Kids = 15,
//   Easy = 9,
//   Medium = 6,
//   Hard = 3,
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
// }

/*
   Deuxième partie
  
*/

function getHardSeconds(): number {
  return 3;
}

enum Childrens {
  Five = 25,
  Seven = 20,
  Ten = 15,
}

enum Level {
  //L'énumération peut faire référence à une autre énumération
  Kid = Childrens.Ten,
  Easy = 9,
  //Enum peut avoir des calculs
  // L'énumération peut faire référence à la même énumération
  Medium = Easy - 3,
  // Enum peut avoir des fonctions
  Hard = getHardSeconds(),
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
