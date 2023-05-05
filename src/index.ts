/*
  Interface
  - Extending Interfaces
*/

interface User {
  id: number;
  username: string;
  country: string;
}

// interface moderateur sans l'extends
interface Moderator {
  id: number;
  username: string;
  country: string;
  role: string | number;
}

let user: Moderator = {
  id: 100,
  username: "Augustin",
  country: "Pays-Bas",
  role: "Modérateur",
};

// deuxième partie: interface moderateur avec l'extends
// interface User {
//   id: number;
//   username: string;
//   country: string;
// }
// interface Moderator extends User {
//   role: string | number;
// }

// troisième partie: interface admin avec l'extends
// interface Admin extends Moderator {
//   protect?: boolean;
// }

// quatrième partie: interface admin avec l'extends et l'override
// interface User {
//   id: number;
//   username: string;
//   country: string;
// }
// interface Moderator {
//   id: number;
//   username: string;
//   country: string;
//   role: string | number;
// }
// interface Admin extends Moderator, User {
//   protect?: boolean;
//   role: string; // boolean
// }

// let user: Admin = {
//   id: 100,
//   username: "Marine",
//   country: "FR",
//   role: "Super Admin",
//   protect: true,
// };

console.log(user.id);
// exemple d'utilisation d'une interface
let superTypescript = document.getElementById("typescript") as HTMLElement;
