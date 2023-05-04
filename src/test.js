// var
var a = 1;
var a = 2;
console.log(a); // 2
console.log(toto); // 2
var toto = "trop tard";

// let
let b = 1;
let b = 2; // error: Duplicate identifier 'b'.
console.log(b);

// const
const c = 1;
const c = 2; // error: Duplicate identifier 'c'.
console.log(c);

// var
var d = 1;
if (true) {
  var d = 2;
}
console.log(d); // 2

// let
let e = 1;
if (true) {
  let e = 2;
}
console.log(e); // 1

// const
const f = 1;
if (true) {
  const f = 2;
}
console.log(f); // 1

// var
var g = 1;
function funcg() {
  var g = 2;
}
funcg();
console.log(g); // 1

// let
let h = 1;
function funch() {
  let h = 2;
}
funch();
console.log(h); // 1

// const
const i = 1;
function funcbeta() {
  const i = 2;
}
funcbeta();
console.log(i); // 1

// var
var j = 1;
for (var j = 0; j < 10; j++) {
  // do something
}
console.log(j); // 10

// let
let k = 1;
for (let k = 0; k < 10; k++) {
  // do something
}
console.log(k); // 1

// const
const l = 1;
for (const l = 0; l < 10; l++) {
  // do something
}
console.log(l); // 1
