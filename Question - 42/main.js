"use strict";
// Question - 42 
Object.defineProperty(exports, "__esModule", { value: true });
const magician = ["Harry Houdini", "Criss Angel", "Ricky Jay"];
function make_Great(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log("The Great " + magician[i]);
    }
}
;
make_Great(magician);
