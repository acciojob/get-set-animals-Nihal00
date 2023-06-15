//complete this code
class Animal {
	species;
	constructor(species){
		this.species = species;
	}

	getSpecies(){
		return this.species;
	}

	makeSound(){
		console.log(`The ${species} makes a sound`);
	}

}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const species = "Siamese";
const myCat = new Cat(species);
myCat.makeSound();



