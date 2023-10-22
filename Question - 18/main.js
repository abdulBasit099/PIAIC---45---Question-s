"use strict";
// Quesion - 18 
Object.defineProperty(exports, "__esModule", { value: true });
let placesToVisit = [
    "Paris",
    "Switzerland",
    "Islamabad",
    "South Island",
    "Singapore"
];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());
console.log("\nOriginal Order (Still):");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());
console.log("\nOriginal Order (Still):");
console.log(placesToVisit);
console.log("\nReversed Order:");
console.log(placesToVisit.reverse());
console.log("\nReversed Order (Again):");
console.log(placesToVisit.reverse());
console.log("\nAlphabetical Order (Sorted):");
console.log(placesToVisit.sort());
console.log("\nReverse Alphabetical Order (Sorted):");
console.log(placesToVisit.sort().reverse());
