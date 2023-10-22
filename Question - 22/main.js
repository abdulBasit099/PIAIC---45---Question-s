"use strict";
// Question - 22 
Object.defineProperty(exports, "__esModule", { value: true });
let indexerror = [5, 10, 15, 20];
console.log(indexerror[5]);
console.log(indexerror[2]);
let index = 4;
if (index >= 0 && index < indexerror.length) {
    let element = indexerror[index];
    console.log(element);
}
else {
    console.log("Index Error");
}
;
