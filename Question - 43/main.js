// Question - 43 
var magician = ["Harry Houdini", "Criss Angel", "Ricky Jay"];
function make_Great(magician) {
    magician.forEach(function (e) { return console.log("The Great", e); });
}
function show_Magicians2() {
    return console.log(magician);
}
show_Magicians2();
make_Great(magician);
