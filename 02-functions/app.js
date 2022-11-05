const sayGreeting = (name, favFruit) => {
    // guard clauses
    // if statement to check the type of name -- to prevent non-string
    // if (condition) to check
    if (typeof name != "string" || typeof favFruit != "string") {
        return "All parameters must be Strings!!!";
    }
    const output = "Hello " + name + ". I heard your favorite fruit is " + favFruit;
    return output;
};
// implicit return: 
// const sayGreeting = (name, favFruit) => "Hello " + name + ". I heard your favorite fruit is " + favFruit;

const exampleName = "Sam"
// sayGreeting("Ollie", "apple");
// sayGreeting(exampleName, "pineapple");
const stephGreeting = sayGreeting("Steph", "orange");
console.log(stephGreeting);


