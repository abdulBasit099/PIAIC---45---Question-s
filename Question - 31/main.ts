// Question - 31 

let userNames = ["Farman", "Faisal", "Hassan", "Basit", "Fahad"];

userNames.splice(0, 4, "empty");

if (userNames.includes("empty")) {

    console.log(`We need to find some users`)
};

