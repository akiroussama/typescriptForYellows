/*
  Data Types
  - Void
  --- Fonction qui ne renverra rien
  --- La fonction en JavaScript qui ne renvoie pas une valeur affichera undefined
  --- undefined n'est pas vide
*/
// première partie:
function logging(msg: string) {
  console.log(msg);
}

// console.log(logging("Iam A Message"));

// deuxième partie:
// function logging(msg: string): void {
//   console.log(msg);
//   return;
// }

// console.log(logging("Iam A Message"));

// troisième partie:
// const fail = (msg: string) => {
//   throw new Error(msg);
//   // return 10;
// };
//fail("Iam A Message");
/*  - Never
  --- Le type de retour ne revient jamais
  --- La fonction n'a pas de fin normale
  --- Il génère une erreur ou ne finit jamais de fonctionner "Infinite Loop"
 
*/

// function alwaysLog(name: string): never {
//   while (true) {
//     console.log(name);
//   }
// }

// alwaysLog("Yellowz");
// console.log("Test");

// 4eme partie
// variable de type never
// let a: never = 10;
// --- Les variables ne peuvent pas avoir un type de retour "Never"

// 5eme partie
// allowUnreachableCode : false
