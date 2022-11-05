// If a name, is a coaches name, log "It's a coach"


// If a greeting, is bonjour, log "comment ca va"
const greeting = "bonjour";


if (greeting === "bonjour")
    {console.log("comment ca va")};
;

// If a score, reaches ten, log "you won the game"

const score = 10;

if (score >9) {
    console.log("You won the game");
}



// If age, is greater than or equal to 65, log "Time to retire"
const myAge = 65

if (myAge >= 65) {
    console.log("Time to retire");
}

// If hasCovid OR isShielding, log "time to isolate", else log "Keep social distancing"
const hasCovid = true;
const isSheilding = false;

if (hasCovid || isSheilding) {
    console.log("time to isolate");
}
else  {
    console.log ("Keep social distancing");
}


// If age, greater than 18, and isBritish, "You can vote in the next election"
const myBritAge = 19
const isBritish = true

if (myBritAge > 18 && isBritish) {
    console.log ("You can vote in the next election");
}
