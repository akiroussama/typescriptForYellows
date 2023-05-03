/*
  Function
  - Paramètres facultatifs et par défaut

  - En JavaScript, chaque paramètre est facultatif => "undefined" si vous ne l'avez pas utilisé
  - "?" Paramètre facultatif
*/

function showData(name, age, country) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData("Iris"));
