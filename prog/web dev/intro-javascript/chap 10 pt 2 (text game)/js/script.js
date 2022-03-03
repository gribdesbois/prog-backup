var Character = 
{
	// Initialize the character
	initCharacter: function(name, health, force, gold, key) 
		{
			this.name = name;
			this.health = health;
			this.force = force;
			this.gold = gold;
			this.key = key;
		},
		
	// Attack a target
	
	attack: function ( target ) 
		{
			if ( this.health > 0 ) {
			var damage = this.force;
			console.log(this.name + " attacks " + target.name + " and causes " + damage + " damage points");
			target.health = target.health - damage;
			if ( target.health > 0 )
			 {
				console.log(target.name + " has " + target.health + " health points left"); 
		       	} else
		       	{
			target.health = 0 ;
			console.log(target.name + " has been eliminated!");
			}
			    
			}
			 else 
			{
			console.log(this.name + " can't attack (he has been eliminated).");
			}
	}
};



var Player = Object.create(Character);
//Initialize the player 

Player.initPlayer = function ( name, health, force, gold, key)
{
    this.initCharacter(name , health ,force, gold, key);
    this.xp = 0;
};


// Describe the player
Player.describe = function()
{
    var description = this.name + " has " + this.health + " health points, " + this.force + " force points" + this.xp + " experience points \n also " + this.gold + "gold(s), and " + this.key +" key(s) ";
    return description;
};


//fight an enemy

Player.fight = function (enemy)
{
    this.attack(enemy);
    if (enemy.health == 0)
    {
        console.log(this.name + " eliminated " + enemy.name + " and wins " + enemy.value + " experience points");
        this.xp += enemy.value;
	this.gold += enemy.gold;
	this.key += enemy.key;
    }
};



var Enemy = Object.create(Character);
// Initialize the enemy
Enemy.initEnemy = function ( name, health, force, species, value , gold, key)
{
    this.initCharacter(name, health, force, gold, key);
    this.species = species;
    this.value = value;
};

var player1 = Object.create(Player);
player1.initPlayer("Rainbow Dash", 500,200,535, 3);

var player2 = Object.create(Player);
player2.initPlayer("Applejack", 150, 400, 191095, 30);

console.log("whale cum");
console.log(player1.describe());
console.log(player2.describe());

var monster = Object.create(Enemy);
monster.initEnemy("Spike",40000,20,"orc",10,500,12);

console.log("A wild monster has appeared: A(n) " + monster.species + " named " + monster.name);

while (monster.health > 0  )
{
monster.attack(player1);
monster.attack(player2);

player1.fight(monster);
if (monster.health >0)
{
    player2.fight(monster);
}}

console.log(player1.describe());
console.log(player2.describe());

