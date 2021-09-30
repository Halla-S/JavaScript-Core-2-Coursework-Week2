function shoppingList(arrayOfPeople) {
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  for (var i = 0; i < arrayOfPeople.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(arrayOfPeople[i]));
    //li.textContent = arrayOfPeople[i]; It can be done this way as well
    ul.appendChild(li);
  }

  content.appendChild(ul);
  // Write your code here...
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
