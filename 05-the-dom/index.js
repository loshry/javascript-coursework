// step 1: grab desired HTML elements
// step 2: store elements in a variable

const heading = document.getElementsByTagName("h1")[0];
// will return an array because Elements is plural so add the index in [] after indicating the tag in ()
// when use document - switches to using the HTML so have to launch the browser to see the code
console.log(heading);

const addButton = document.getElementById("add-button");
console.log(addButton);

const addTodoInput = document.querySelector("input");
// will grab the first one it finds if use the singular instead of querySelectorAll
console.log(addTodoInput);

const list = document.querySelector(".list");
console.log(list);


const listItems = document.querySelectorAll("li");
// calling it item because listitem is already defined
listItems.forEach((item) => {
    item.addEventListener("click", () =>item.remove());
});

// default of submitting page is to refresh the page -- use (event) to prevent refresh
addButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (list.childElementCount > 4) {
    addTodoInput.value = "";
    return;
  }

  // make a new todo -- add the value
  const newTodo = addTodoInput.value;
  // console.log(newTodo);
  // make html element in javascript
  const listItem = document.createElement("li");
  // insert new item into listItem -- innerHTML and innerText are interchangable -- which
  listItem.innerHTML = newTodo;

// remove todo when done -- only allows to remove new todo since within the add todo function
listItem.addEventListener("click", () => listItem.remove());  

  // add to list
  list.appendChild(listItem);

  // clear input box for next todo
  addTodoInput.value = "";

  
});

