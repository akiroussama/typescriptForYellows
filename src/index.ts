/* this is a comment */
console.log(Math.floor(2.3));
let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
mouseEvent = "mouseover"; // compiler error

// on peut utiliser les alias
// type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
// let mouseEvent: MouseEvent;
// mouseEvent = 'click'; // valid
// mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseup'; // valid
// mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error

// let anotherEvent: MouseEvent;
