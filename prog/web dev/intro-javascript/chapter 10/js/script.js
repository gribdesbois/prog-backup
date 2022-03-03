var cake = 
{
    flavor : "strawberry",
    levels: 2, 
    price : "$10",
    occasion: "birthday",
    
    //describe the cake
    describe: function()
    {
	var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
	return description;
    }
};

console.log(cake.describe());


//the cake is actually for a wedding!

cake.occasion = "wedding";

//it's number of layers and price both go up

cake.levels = cake.levels + 8;
cake.price = "$50";

console.log(cake.describe());


var muffin =
{
    type: "muffin",
    flavor: "blueberry",
    levels: 1,
    price: "$2",
    occasion: "breakfast",
    
    
    //describe the pastry
    
    describe: function()
    {
	var description = "The " + this.type + " is a "+ this.occasion + " pastry, has " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
	return description;
    }
};


var anObject = 
{
    a:2
};

// Create anotherObject using an'bject as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a); //will show 2


var Pastry = 
{
	//initialize the pastry
	init: function (type, flavor, levels, price, occasion)
	{
		this.type = type;
		this.flavor = flavor;
		this.levels = levels;
		this.price = price;
		this.occasion = occasion;
	},
	
	//Describe the pastry
	describe: function()
	{
		var description = "The " + this.type + "is a " + this.occasion + " pastry has a " + this.flavor + "flavor, " + this.levels + " layer(s), and costs" + this.levels + " layer(s), and costs " + this.price + ".";
		return description;
	},
	
	bake: function()
	{
		var baked = "The " + this.flavor + this type + " was placed in the oven. Done!"
	}note
};


var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "blueberry", 3, "$10", "birthday");

console.log(muffin.bake());
console.log(cake.bake());
console.log(muffin.describe());
console.log(cake.describe());

		

