// Get access to DOM elements
const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');
const articleSection =document.querySelector('section');
const addPostButton = document.getElementById('add-post');

// Click event listeners
blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
}); 

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background');
    header.classList.add('green-background', 'text-white');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});


function createNewPost() {
  let newArticle = document.createElement("article");
  let newHeading = document.createElement("h5");
  let newParagraph = document.createElement("p");
  newArticle.classList.add("list-group-item");
  newHeading.appendChild(newParagraph);
  newArticle.appendChild(newHeading);
  
  return newArticle;
  
}

addPostButton.addEventListener("click", function() {
  articleSection.appendChild(createNewPost());
}); 
