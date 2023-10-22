"use strict";
// Question - 16 
Object.defineProperty(exports, "__esModule", { value: true });
let friendName = ['"Farman"', '"Faisal"', '"Ahsan"'];
let i = friendName;
for (let i = 0; i < friendName.length; i++) {
    console.log(`I invite you ${friendName[i]} come on a dinner`);
}
;
console.log(`Due to some issue ${friendName[1]} is not coming`);
friendName.splice(1, 1, '"Usama"');
for (let i = 0; i < friendName.length; i++) {
    console.log(`I invite you ${friendName[i]} come on a dinner`);
}
;
console.log("I found a big table so I invite 3 more friends on dinner");
friendName.unshift('"Hassman"');
friendName.splice(2, 0, '"Ali"');
friendName.push('"Bisman"');
for (let i = 0; i < friendName.length; i++) {
    console.log(`I invite you ${friendName[i]} come on a dinner`);
}
;
