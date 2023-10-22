// Question - 42 

const magician = ["Harry Houdini", "Criss Angel", "Ricky Jay"];

function make_Great(magician:any) {

    for (let i = 0; i < magician.length; i++) {

        console.log("The Great " + magician[i])
    }
};

make_Great(magician);