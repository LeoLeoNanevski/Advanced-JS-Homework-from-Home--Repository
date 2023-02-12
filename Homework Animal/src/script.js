console.log("Wired");

class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(zivotinja) {
        if (zivotinja instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`${this.name} is a herbivore and does not eat other animals`);
            } else if (zivotinja.size <= this.size) {
                zivotinja.isEaten = true;
                console.log(`${this.name} ate the ${zivotinja.name}`);
            } else {
                console.log(`${this.name} tried to eat the ${zivotinja.name} but it was too large.`);
            }
        } else {
            console.log(`${this.name} is eating ${zivotinja}.`);
        }
    }
}

const lion = new Animal("Lion", "carnivore", 5, 150);
const gazelle = new Animal("Gazelle", "herbivore", 3, 70);
const panda = new Animal("Panda", "omnivore", 7, 250);

lion.eat(gazelle);
gazelle.eat(panda);
panda.eat("apple");

const elephant = new Animal("Elephant", "herbivore", 20, 5000);
const tiger = new Animal("Tiger", "carnivore", 5, 250);
const rabbit = new Animal("Rabbit", "herbivore", 2, 5);

elephant.eat(rabbit);
tiger.eat(elephant);
rabbit.eat("carrot");

const bear = new Animal("Bear", "omnivore", 10, 300);
const deer = new Animal("Deer", "herbivore", 5, 150);

bear.eat(deer);
deer.eat("grass");
