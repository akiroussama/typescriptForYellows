/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Vérifie tous les chemins de code dans une fonction pour s'assurer qu'ils renvoient une valeur

  - noUnusedLocals
 --- Signaler les erreurs sur les variables locales inutilisées

  - noUnusedParameters
   --- Signaler les erreurs sur les paramètres inutilisés dans les fonctions.
*/

let showMsg = true;

function showDetails(name, age, salary) {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}`;
  }
}

console.log(showDetails("Francesco", 40, 5000));
