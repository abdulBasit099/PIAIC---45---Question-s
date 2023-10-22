// Question - 32 

let current_users = ["Farman", "Basit", "Usama", "Faisal", "Ahsan"];
let new_users = ["Ali", "Usama", "Fahad", "Farman", "Mohid"];

for (let i = 0; i < new_users.length; ++i) {

  if (current_users.includes(new_users[i])) {

    console.log(`Please enter a different username`)
  } else {

    console.log(`Username ${new_users[i]} is available for this.`)
  }
};