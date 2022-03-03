const newElement = document.createElement("p");
let element= document.getElementById("main");

element.appendChild(newElement);
document.querySelector("#main > p").innerHTML="Mon <strong>grand</strong> contenu";
newElement.classList.add("important");
newElement.style.backgroundColor="#15DEA5";