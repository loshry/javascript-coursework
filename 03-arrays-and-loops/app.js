const names = ["Shirin" , "Sheena" , "Leah" , "Monica" , "Rupali"];

console.log(names);
console.table(names);

// return value of monica from array

console.log(names[3]);

// change names to uppercase
let upperCaseNames = []
for (let index = 0; index < names.length; index++) {
    const upperCaseName = names[index].toUpperCase();
    console.log(upperCaseNames);
    upperCaseNames.push(upperCaseName);
    // names[index] = upperCaseName - would change array to upper case 

}

console.log(names);
console.log(upperCaseNames);

// for (let index = 0; index < names.length; index++) => calls the variable index

// merge arrays together
const allTheNames = names.concat(upperCaseNames);
console.log(allTheNames);
