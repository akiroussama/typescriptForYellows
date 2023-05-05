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
