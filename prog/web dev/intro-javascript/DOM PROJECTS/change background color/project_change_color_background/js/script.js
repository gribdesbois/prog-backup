//Choose a random color
function getRandomColor() {
    var letters ='0123456789ABCDEF'.split('');
    var color = '#';
    for (var i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}


const button = document.querySelector('button')
const body = document.querySelector('body')

body.style.backgroundColor = getRandomColor();
button.addEventListener('click', changeBackground)

function changeBackground() {
    body.style.backgroundColor = getRandomColor();
}

