const leahDetails = {
    firstName: "Leah",
    lastName: "Oshry",
    favSeason: "Spring",
    age: 51,
    interests: ["Cooking", "Baking", "Reading", "True Crime"],
    canCode: true
    // last key does not require a ,
};

const nameHeading = document.getElementsByTagName("h1")[0];
nameHeading.innerText = `${leahDetails.firstName} ${leahDetails.lastName}`;


console.log(leahDetails.age);
console.log(leahDetails.interests[2]);
