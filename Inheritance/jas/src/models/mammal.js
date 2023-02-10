export default class Mammal {
    constructor(name, age, gender) {

        this.type = this.constructor.name;
        this.numberOfLegs;
        this.causeOfDeath;

        this.name = name;
        this.age = age;
        this.gender = gender;

        this.drinksMilk = true;
        this.hasWarmBlood = true;
        this.numberOfEyes = 2;
        this.breaths = true;
        this.hasPuls = true;
        this.isAlive = true;
    }
    die(causeOfDeath = 'natural causes') {
        this.isAlive = false;
        this.hasPuls = false;
        this.breaths = false;

        this.causeOfDeath = causeOfDeath;
        console.warn(`CAUSE OF DEATH: ${this.causeOfDeath}`);
    }
}