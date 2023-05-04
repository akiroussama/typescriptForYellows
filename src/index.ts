/*
  Data Types
  - Tuple
  --- Est un autre type de type de tableau
  --- Nous savons exactement combien d'éléments il contient
  --- Nous savons quels types il contient à des positions spécifiques
*/
// première partie
let article: [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];

// article.push(100);
console.log(article);

// add ready only
let article2: readonly [number, string, boolean] = [11, "Title One", true];
// article2.push(100);

// deuxième partie : tuple avec des types différents
// define our tuple
let ourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple = [false, "Coding God was mistaken", 5];

// troisème partie : distructuring tuple
let articles: readonly [number, string, boolean] = [11, "Title One", true];
// distructuré le tuple avec la syntaxe suivante:
const [id, title, published] = articles;
console.log(id);
console.log(title);
console.log(published);
