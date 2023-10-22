// Question - 3 

// toUpperCase 
let toUpperCase = "Abdul";
let toUpperCase1 = toUpperCase. toUpperCase ();
console.log (toUpperCase1);

// toLowerCase 
let toLowerCase = "BASIT";
let tolowercase = toLowerCase. toLowerCase ();
console.log (tolowercase);

//titlecase 
let Name = "malik";
let titlecase = Name.replace (/\w\S*/g, (word) => word. charAt (0).toUpperCase () + word.substr (1). toLowerCase ());

let fName = `Hello! ${titlecase}`;
console.log (fName);