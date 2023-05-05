/*
  Interface
  - ReOpen The Interface, dans quel cas ?
*/

// Homepage :
interface Settings {
  readonly theme: boolean;
  font: string;
}

// après quelques temps, on décide de rajouter une propriété
// à l'interface Settings
// on peut le faire sans avoir à modifier le code de l'interface
// on peut le faire dans un autre fichier
// Articles Page
interface Settings {
  sidebar: boolean;
}

// Pareil pour une autre page
// Contact Page
interface Settings {
  external: boolean;
}

let userSettings: Settings = {};

// essaye maintenant avec type alias
// type Settings = { ...
// et tu verras que ça ne marche pas
// il faut que tu modifies le code de l'alias
// pour rajouter la propriété
// et ça ne marche pas si tu le fais dans un autre fichier
// il faut que tu modifies le code de l'alias
// dans le même fichier
