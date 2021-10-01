let bluebutton = document.querySelector("#blueBtn");
let jumbotron = document.querySelector(".jumbotron");
let Donate = document.querySelector(".btn-lrg");
let volunteer = document.querySelector(".btn-secondary");
let orangebutton = document.querySelector("#orangeBtn");
let greenbutton = document.querySelector("#greenBtn");

function blue() {
  bluebutton.addEventListener("click", change);
  function change() {
    jumbotron.style.background = `#588fbd`;
    Donate.style.background = `#ffa500`;
    volunteer.style.background = "black";
    volunteer.style.color = "white";
  }
}
function orange() {
  orangebutton.addEventListener("click", change);
  function change() {
    jumbotron.style.background = `#f0ad4e`;
    Donate.style.background = `#5751fd`;
    volunteer.style.background = `#31b0d5`;
    volunteer.style.color = "white";
  }
}
function green() {
  greenbutton.addEventListener("click", change);
  function change() {
    jumbotron.style.background = `#87ca8a`;
    Donate.style.background = `black`;
    volunteer.style.background = `#8c9c08`;
    volunteer.style.color = "white";
  }
}
blue();
orange();
green();
//********************************************************/

let Email = document.getElementById("exampleInputEmail1");
let yourName = document.getElementById("example-text-input");
let textArea = document.getElementById("exampleTextarea");
let form = document.querySelector("form");
form.addEventListener("submit", validate);
function validate(event) {
   event.preventDefault(event);
  if (!Email.value.includes("@") || Email.value.length === 0) {
    Email.style.background = "red";
  } else if (yourName.value.length === 0) {
    yourName.style.background = "red";
  } else if (textArea.value.length === 0) {
    textArea.style.background = "red";
  } else {
    alert("Thank you for filling out the form");
   
  }
}
