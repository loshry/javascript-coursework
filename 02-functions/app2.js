const calculateAreaOfCircle = (radius) => {
  return (Math.PI * radius * radius).toFixed(2);
};

console.log(calculateAreaOfCircle(4));
//   ES6 style
//   const convertMetersToYards = (lengthInMeters) =>

// ES5 - hoistable -- will force the function to the top of the page
// function convertMetersToYards(lengthInMeters) {}

const getGrade = (score) => {
    let yourScore = "";
    if (score > 100 || score < 0 || typeof score != "number") {
      yourScore = "Score Unavailable";
    } else if (score >= 80) {
      yourScore = "A";
    } else if (score >= 70) {
      yourScore = "B";
    } else if (score >= 60) {
      yourScore = "C";
    } else if (score >= 50) {
      yourScore = "D";
    } else if (score >= 40) {
      yourScore = "E";
    } else {
      yourScore = "F";
    }
  
    return yourScore;
  };
  
  console.log(getGrade("buttercup"));

  

getStudentSummary = (score, name) => {
    const grade = getGrade (score)
  var gradeResults = {
    A: `Congratulations ${name}! You achieved a grade of A.`,
    B: `Well done ${name}! You achieved a grade of B.`,
    C: `Nicely done ${name}! You achieved a grade of C.`,
    D: `That's okay ${name}. You achieved a grade of D.`,
    E: `Too bad ${name}. You achieved a grade of E.`,
    F: `Sorry ${name}. You achieved a grade of F. There's always next year.`,
  };
  // If there is a score error : "My apologies" + name + ", there's been an error in processing your grade."
  // if error (score not in dictionary) return "My apologies"
  // otherwise return dict []
  if (!(grade in gradeResults)) {
    return (
      "My apologies " +
      name +
      ", there's been an error in processing your grade."
    );
  }

  return gradeResults[grade];
};

console.log(getStudentSummary(70, "Paul"));


