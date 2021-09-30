function todoList(todos) {
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  content.appendChild(ul);
  todos.forEach(element => {
    let li = document.createElement("li");
    let text = document.createTextNode(element.todo);
    //console.log(element.todo);
      li.addEventListener("click", check);
      function removelinethrough() {
        li.style.textDecoration = "none";
      }

      function linethrough() {
        li.style.textDecoration = "line-through";
      }

      function check(){
        
    if(li.style.textDecoration= "line-through"){
      li.addEventListener("click", removelinethrough);
    }

    
    else{
     li.addEventListener("click", linethrough);
    }
    
  }

    

    li.appendChild(text);
    ul.appendChild(li);
  });
  
  content.appendChild(ul);
  


}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);