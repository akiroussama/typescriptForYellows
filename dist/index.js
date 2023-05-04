"use strict";
const a = 1;
function sayHello() {
    const message = "Hello, world!";
    return message;
}
let b = 1;
b = 2;
if (true) {
    let innerVar = "inside";
    console.log(innerVar);
}
console.log(innerVar);
var c = 1;
c = 2;
var globalVar = "global";
function exampleFunction() {
    var localVar = "local";
    if (true) {
        var innerVar = "inside";
        console.log(innerVar);
    }
    console.log(innerVar);
}
console.log(innerVar);
console.log(globalVar);
console.log(localVar);
const profile = {
    name: "John",
    age: 30,
    city: "New York",
};
profile.age++;
console.log(profile.age);
profile.state = "New York";
profile = {
    test: "John",
    email: "test@gmail.Com",
};
//# sourceMappingURL=index.js.map