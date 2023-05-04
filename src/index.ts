/*
  Data Types
  - Type Alias
*/

type st = string;
let theName: st = "Wild School";
theName = "Yellow team";

type standnum = string | number;
let all: standnum = 10;
all = 100;
all = "Baptiste";
all = true;

/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

function getActions(btns: Buttons) {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Down Is ${btns.down}`);
  console.log(`Action For Button Left Is ${btns.left}`);
}

getActions({
  up: "Jump",
  right: "Go Right",
  down: "Go Down",
  left: "Go Left",
});
