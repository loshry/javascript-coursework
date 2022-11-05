const classDetails = [
    {
        name: "Sam",
        favSeason: "Summer"
    },
    {
        name: "Sheena",
        favSeason: "Autumn"
    },
    {
        name: "Tina",
        favSeason: "Summer"
    },
    {
        name: "Leah",
        favSeason: "Spring"
    },
    {
        name: "Monica",
        favSeason: "Fall"
    },
];

console.log(classDetails[2]);
classDetails.forEach(detail => console.log(detail));
classDetails.forEach(detail => console.log(detail.favSeason));

// looping through objects

const supermarketItems = {
    "Shampoo": 3.99,
    "Toothbrush": 2.99,
    "Toilet Roll": 8.99,
    "Beer Crate": 10.99,
    "Cereal": 2.99,
    "Soap": 3.99,
    "Book": 6.99,
    "Paper": 5.99,
    "Wine": 14.99
  };

  for (item in supermarketItems) {
    console.log(`${item}: ${supermarketItems[item]}`);
  };

// could use key or value instead of item to represent the item

//  entries -- returns an array of arrays
const entries = Object.entries(supermarketItems);
console.log(entries);
// returns a two-dimensional array with [] inside []

//  keys -- returns all the items names
const keys = Object.keys(supermarketItems);
console.log(keys);


// values -- returns the values
const values = Object.values(supermarketItems);
console.log(values);
console.table(values);

// return just the price for the third item in the array:
console.log(entries[2][1]);

//  arrays inside arrays (2-dimensional arrays)
// 10 students completing 3 projects each
// could also have an object with the scores as keys
// ex: pixel = screen [20][5] -- 20th row, 5th column 
// could represent a spreadsheet with rows/columns
// can have 3d array representing 3 dimensions
const students = ["Tet", "Monica", "Sheena", "Tina", "Rupali"]
const studentScores = [
    [25, 40, 66],
    [35, 55, 80],
    [72, 92, 43],
    [90, 95, 87],
    [10, 85, 4],
    
];

console.log(studentScores[4][2]);

// use spread operator ... to bring back the values of the array in the below example

const combinedArray = students.map((student, index) => {
    return {
        name: student,
        studentScores: [...studentScores[index]]
    };
});

console.table(combinedArray);

// loop through combined array
// for each item -- create new property on an object in format 
// student.name: student.studentScores

// const details {
    // names: []
    // scores: []
// };

// object inside of objects
const samDetails = {
    name: "Sam",
    family: {
        mother: "Mama",
        father: "Papa",
        siblings: ["brother", "sister"],
    }
};

console.log(samDetails.family.siblings[1]);