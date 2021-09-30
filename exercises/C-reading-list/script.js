function readingList(books) {
  let content = document.querySelector("#content");
  
  let ul = document.createElement("ul");
  for (var i=0; i<books.length; i++){
    let li = document.createElement("li");
    let pelement = document.createElement("p");
    let img = document.createElement("img");
    //img.src =coverPage;(CAN NOT FIND THE COVERPAGR HERE !!!!)
    pelement.textContent = books[i].title + " by " + books[i].author;
    let img = document.createElement("img");
    
    if (books[i].alreadyRead === true) {
      li.style.background = "Green";
    } else {
      li.style.background = "Red";
    }
    li.appendChild(img);
    li.appendChild(pelement);
    li.style.width = "100px";
    li.style.height = "100px";
    li.style.fontSize = "7px";
    img.width = "50";
    ul.style.listStyleType = "none";
    li.style.float = "left";
    li.style.display = "inline";
    li.style.marginRight = "20px";
    ul.appendChild(li);
  }
  content.appendChild(ul)
  // Write your code here...
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);