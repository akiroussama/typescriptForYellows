"use strict";
const fail = (msg) => {
    throw new Error(msg);
};
fail("Iam A Message");
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
alwaysLog("Yellowz");
console.log("Test");
//# sourceMappingURL=index.js.map