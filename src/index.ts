/*
  Type Annotations With Arrays
*/

let all: string | number | boolean = "Baptiste";

all = "A";
all = 100;
all = true;
// all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Comment déduire le type d'un tableau ?
let myFriends: string[] = ["Nathan", "Greg", "Ludivine"];

//let myFriends = ["Nathan", "Greg", "Ludivine", 10];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
  //console.log(myFriends[i].repeat(3));
}
