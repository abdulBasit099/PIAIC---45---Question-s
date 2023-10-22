// Question - 19 

let friendName = ['"Farman"', '"Faisal"', '"Ahsan"'];

let i = friendName;

for (let i = 0; i < friendName.length; i++) {

    console.log(`I invite you ${friendName[i]} come on a dinner`)

};

console.log(`Due to some issue ${friendName[1]} is not coming`);

friendName.splice(2, 1, '"Usama"');

for (let i = 0; i < friendName.length; i++) {

    console.log(`I invite you ${friendName[i]} come on a dinner`)

}

console.log("I found a big table so I invite 3 more friends on dinner");

friendName.unshift('"Hassan"');
friendName.splice(2, 0, '"Ali"');
friendName.push('"Bisman"');

for (let i = 0; i < friendName.length; i++) {
    console.log(`I invite you ${friendName[i]} come on a dinner`)
}

console.log("Sorry I can invite only two people for dinner.");

let a = friendName.pop();
console.log(`${a} sorry you can’t invite them to dinner`);

let b = friendName.pop();
console.log(`${b} sorry you can’t invite them to dinner`);

let c = friendName.pop();
console.log(`${c} sorry you can’t invite them to dinner`);

let d = friendName.pop();
console.log(`${d} sorry you can’t invite them to dinner`);

for (let i = 0; i < friendName.length; i++) {

    console.log(`I invite you ${friendName[i]} come on a dinner`)

}

let x = friendName.length;
console.log(`I invite ${x} number of people in dinner`);