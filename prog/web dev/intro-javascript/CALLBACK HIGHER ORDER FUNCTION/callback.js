 morning = ((name) => {  //callback function

    return `Good morning ${name.toUpperCase()}`;

});

greet = ((name, callback) => { //higher order function
    const myName = 'John';
    console.log(`${callback(name)} my name is ${myName}`); //BACK TICK!!!!! with ${string}
});

greet('bobo', morning);
greet('peter', morning);