const header = document.querySelector("header");
const blueButton = document.querySelector("#color-button-blue");
const brownButton = document.querySelector("#color-button-brown");
const greenButton = document.querySelector("#color-button-green");
const noneButton = document.querySelector("#color-button-none");

blueButton.addEventListener('click', () => {    header.classList.add('blue-background', 'text-white');
header.classList.remove('brown-background', 'green-background');//remove conflicting previous classes
 });
   
 brownButton.addEventListener('click', () => {    header.classList.add('brown-background', 'text-white');
header.classList.remove('blue-background', 'green-background');//remove conflicting previous classes
 });                                              
                                            
greenButton.addEventListener('click', () => {    header.classList.add('green-background', 'text-white');
header.classList.remove('brown-background', 'blue-background');//remove conflicting previous classes
 });   
                                             
noneButton.addEventListener('click', () => {    header.classList.add('none-background', 'text-white');
header.classList.remove('none-background', 'green-background');//remove conflicting previous classes
 });                                            
                                            
                                            
