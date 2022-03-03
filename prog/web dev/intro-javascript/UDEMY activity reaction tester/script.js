//const { hotpink } = require("color-name");
var start = [new Date().getTime()]; //runs soon as the page runs


function getRandomColor() {
    var letters ='0123456789ABCDEF'.split('');
    var color = '#';
    for (var i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function makeShapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() *400;
    var width = (Math.random() *200) +100;

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById.apply("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display  = "block";
    start[0] = new Date().getTime();
    /*this is about scope
    Anything that's defined inside the function can't be used
    outside the function but things that are defined
    outside the function can be used inside the function.
    as it wasn t working as per on tutorial i replaced with an array of 1 (IE pointer)
    */
}

function appearAfterDelay(){
    
setTimeout(makeShapeAppear, Math.random()*2000);
}//

appearAfterDelay();

document.getElementById("shape").onclick = () => {
    var end = new Date().getTime();
    var timeTaken = (end - start[0])/1000;
    document.getElementById("shape").style.display ="none";
    //we test in console first alert(timeTaken); 
    //var t = document.createTextNode(timeTaken + "s!!");
    document.getElementById("timeTaken").innerHTML = timeTaken + "s!!";
    appearAfterDelay();
}
