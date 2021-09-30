function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((element) => {
    let newh1 = document.createElement("h1");
    let newh2 = document.createElement("h2");
    newh1.textContent = element.name;
    newh2.textContent = element.job;
    content.appendChild(newh1);
    content.appendChild(newh2);
  });

}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
