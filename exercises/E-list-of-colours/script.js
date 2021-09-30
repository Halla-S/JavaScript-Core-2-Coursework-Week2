function listOfColours(colours) {
  let content = document.getElementById("content");
  let selectElement = document.createElement("select");

  let pElement = document.createElement("p");
  pElement.innerText = "Can you see my colour ?";
  content.appendChild(pElement);
 
  
  for (var i =0; i<colours.length; i++){
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value" ,colours[i])
  
    let text = document.createTextNode(
      (optionElement.value)
    );
    selectElement.addEventListener("click", changecolour );
    function changecolour(){
    pElement.style.color = selectElement.value;
    } 

    //pElement.appendChild(text);
    optionElement.appendChild(text);
    selectElement.appendChild(optionElement);
  }
  content.appendChild(selectElement);
  // Write your code here...
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
