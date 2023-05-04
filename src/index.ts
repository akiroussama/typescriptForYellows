/* CONST 
 `const` : permet de déclarer une variable dont la valeur ne peut pas être réaffectée.
 Les variables `const` ont une portée de bloc,
 ce qui signifie qu'elles sont accessibles uniquement à l'intérieur du bloc de code
 dans lequel elles sont définies.
 ==> const : {
        - ne peut pas être réaffectée
        - portée de bloc
    }
*/
// const : exemple réaffectation
const a = 1;
// a = 2; // error

// const: exemple portée de bloc
function sayHello() {
  const message = "Hello, world!";
  return message;
}
//console.log(message); // error

/* LET
    `let` : permet de déclarer une variable dont la valeur peut être réaffectée.
    Les variables `let` ont une portée de bloc,
    ce qui signifie qu'elles sont accessibles uniquement à l'intérieur du bloc de code
    dans lequel elles sont définies.
    ==> let : {
        - peut être réaffectée
        - portée de bloc
    }
*/
// let : exemple réaffectation
let b = 1;
b = 2;
// let: exemple portée de bloc
if (true) {
  let innerVar = "inside";
  console.log(innerVar); // 'inside'
}
console.log(innerVar); // Erreur : ReferenceError: innerVar is not defined

//console.log(message); // error

/* VAR
    `var` : permet de déclarer une variable dont la valeur peut être réaffectée.
    Les variables `var` ont une portée de fonction,
    ce qui signifie qu'elles sont accessibles à l'intérieur de la fonction dans laquelle elles sont définies.
    ==> var : {
        - peut être réaffectée
        - portée de fonction
    }
*/
// var : exemple réaffectation
var c = 1;
c = 2;

// var: exemple portée de fonction
var globalVar = "global";

function exampleFunction() {
  var localVar = "local";

  if (true) {
    var innerVar = "inside";
    console.log(innerVar); // 'inside'
  }
  console.log(innerVar); // 'inside'
}
console.log(innerVar); // Erreur : ReferenceError: innerVar is not defined
console.log(globalVar); // 'global'
console.log(localVar); // Erreur : ReferenceError: localVar is not defined
/*
En résumé, `const` doit être utilisé pour déclarer des variables
 dont la valeur ne doit pas être réaffectée,
 et `let` pour les variables dont la valeur peut être réaffectée.
 `var` est une ancienne méthode de déclaration de variables et, en général,
 il est recommandé d'utiliser `const` ou `let` pour une meilleure gestion de la portée
 et pour éviter les erreurs. */

const profile = {
  name: "John",
  age: 30,
  city: "New York",
};
profile.age++;
console.log(profile.age); // 31
profile.state = "New York";
profile = {
  test: "John",
  email: "test@gmail.Com",
};
