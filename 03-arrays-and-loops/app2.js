
// while loop
// basic loop
// log the index as we iterate

const names = ["Rupert" , "Hebzibah" , "Mollycoddle" , "Samuel" , "Rachel" , "Sam"];
let index = 0;
while (index <6) {
    console.log(`the index is ${index}`)
    index++;
}

// loop with an array
const greetPerson = (firstName) => {
    console.log (`Hi ${firstName}`)
}
let i = 0;
while (i < names.length) {
    const personsName = names [i];
    greetPerson(personsName);
    i++
}