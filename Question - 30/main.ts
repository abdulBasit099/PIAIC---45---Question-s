// Question - 30 

let userNames = ["Farman", "Faisal", "Hassan", "Basit", "Fahad"];

for (let i = 0; i < userNames.length; i++) {

    if (userNames[i] === "Hassan") {

        console.log(`Hello Admin, would you like see a monthly repot?`)
    } else {

        console.log(`Hello ${userNames[i]}, welcome to the AI World`)
    }
};