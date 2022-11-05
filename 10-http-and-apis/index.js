// fetch: make calls to a web server from our JS application
// asynchronous: two events/objects that do not occur at the same time
// promise: object that may produce a single value at some point in the future
// promise -- wait for data to come back, when the reponse occurs, run the promise
// promise has three (3) states:
// Fulfilled -- good (handled using the then() method)
// Rejected -- bad (handled using the catch() method)
// Pending -- waiting (until resolved)
// two (2) ways to handle asynchronous code .then & .catch
// every time want to use API -- this is the format

const nameHeading = document.querySelector("h1");
const getRandomUserOne = () => {
  fetch("https://randomuser.me/api/")
    // // returns a promise
    .then((response) => response.json())
    .then(
      (data) =>
        (nameHeading.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`)
    )
    // catch is to find errors -- will only work when have error
    .catch((error) => console.log(error));
};

getRandomUserOne();

// asynchronous/await
// define function as asynchronous

const getRandomUserTwo = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    nameHeading.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
  } catch (err) {
    console.log(err);
  }
};
getRandomUserTwo();


  //  console.log(response);
  //  if (condition) to determine how to handle can say ! for not or == false
  // //  if (!response.ok) {
  //     console.log(`Request was unsuccessful, error code was: ${response.status}`);
  //     return;
  //  }

  //  console.log(data.results[0].name);



