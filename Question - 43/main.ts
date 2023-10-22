// Question - 43 

const magician = ["Harry Houdini", "Criss Angel", "Ricky Jay"];

function make_Great(magician:any) {
    magician.forEach(e => console.log("The Great", e));
}

function show_Magicians2() {
    return console.log(magician);
}
show_Magicians2();
make_Great(magician);
