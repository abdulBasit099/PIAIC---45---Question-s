"use strict";
// Question - 15 
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
