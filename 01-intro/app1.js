console.log("hello!");
//alert ("HELLO!");

let myAge = 409;
console.log(myAge);
myAge = myAge + 1; 
console.log (myAge);
myAge++;
console.log(myAge);


const myName = "Leah Oshry";
console.log(myName);

const numberOne = 10;
const numberTwo = 3;
console.log(numberOne / numberTwo);

// JavaScript Data Types

// Strings!
const simpleString ="My String";
const stringLiteral = `This string has ${myName} in it!`;
console.log(stringLiteral);
const stringConcat = myName + " " + simpleString;
console.log(stringConcat);

// Numbers
myAge++; // increment by one
myAge--; // decrement by one
myAge+=5; // increment by 5
myAge-=5; // decrement by 5

const myInteger = 5; // Integer
const myFloat = 4.332; // Float
// Convert
const numberInAString = "3554";
console.log(Number(numberInAString) + 540);

// Boolean -- can only be True or False
const isOllieFuny = true;

// If/Else
if (isOllieFuny) {
    console.log("We all laugh a lot!");}
    else {
        console.log("Tumbleweed");}
    
// Truthiness vs Falsiness
// the 6 Falses
// - false
// - undefined
// - null
// - NaN
// - 0
// - ""
// EVERYTHING ELSE IS DEFAULTED TO TRUE

const myBalance = 3950;
if (myBalance >3000) {
    console.log("WooHoo I'm rich");}
    else {
        console.log("Boo I'm poor");
    }

// OR
// if (myBalance > 2000 || myName === "Ollie") {
    // console.log("Life is good!");
// }

// AND
// if (myBalance > 5000 && myName === "Ollie") {
    // console.log("Wow things got out of hand");
// }

console.log(20 > 6); //true
console.log(20 > 6 && 6 > 3); //true
console.log(20 > 21 && 6 > 3); //false
console.log(false || true); //true
console.log(20==="20"); //false
console.log(20 == "20") //true
console.log(!false); //true ! denotes "not"
console.log(!20);//false
console.log(!!20); //true -- converted into boolean
