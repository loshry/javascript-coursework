// Q - make a new array containing only the names that are longer than 5 characters
const names = ["Rupert" , "Hebzibah" , "Mollycoddle" , "Samuel" , "Rachel" , "Sam"];
// for all circumstances where funNames array is >5 characters return to new array
// for (let index = 0, index < funNames.length , 

const newNames = names.splice(",");

 for (var i = 0; i < newNames.length; i++) {
     if (newNames[i].length >= 5) {
       console.log(newNames[i]);
     }
   }


//   Q - make a new array containing only the names that start with "S"

const sNames = ["Rupert" , "Hebzibah" , "Mollycoddle" , "Samuel" , "Rachel" , "Sam"];

let sNamesOnly = [];
for (let index = 0; index < sNames.length; index++) {
    // one way to do it
    if (sNames[index].startsWith("S")) {
        sNamesOnly.push(sNames[index]);
    }
}
console.table(sNamesOnly);

const evenNumbers = [8,10, 12, 14, 16, 18,20];

const newArr = evenNumbers.forEach((number) => {
 console.log(`Your number is ${number}`);
} );

 
const newerArr = evenNumbers.map((number) => {
    return 5 * number;
})
console.log(newerArr);

const greetings = ["hi", "hello" , "howdy" , "hey"];

const stephGreetings = greetings.map((greeting) => {
    return greeting + "Steph";
})
console.log(`${stephGreetings} Steph`);



const str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be')); // true
console.log(str.startsWith('not to be')); // false
console.log(str.startsWith('not to be', 10)); // true


// EXT
// Write an arrow function called generateInitials that takes fullName as a parameter, and returns the initials. It should contain a check to ensure people can only enter strings as parameters
// e.g. generateInitials("Sam Joyce") ---> "SJ"
// e.g. generateInitials("Sam Mark Joyce") ---> "SMJ"
// e.g. generateInitials(34) ---> "Please enter a string as the input"

// while loop
// basic loop
// log the index as we iterate
let index = 0;
while (index <6) {
    console.log(`the index is ${index}`)
    index++;
}

// loop with an array
const greetPerson = (firstName) => {
    console.log (`Hi ${firstName}`)
}
let p = 0;
while (p < names.length) {
    const personsName = names [p];
    greetPerson(personsName);
    p++
}

const oNumbers = [0, 1, 2, 3, 4, 5, 6];
const oddNumbers = oNumbers.filter((number) => {
    return number % 2 != 0 && number > 2;
}
);
console.log(oddNumbers);

const reGreetings = greetings.filter((greeting) => {
    return greeting.startsWith("h")
})
console.log(reGreetings[0]);

