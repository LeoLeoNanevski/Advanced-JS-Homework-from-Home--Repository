import Animal from "./animal.js";

export default class Horse extends Animal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.numberOfLegs = 4;
        this.gallops = true;
        this.hasGrive = true;
    }

    gallop(soundOfGalloping = 'tk tk tk') {
        console.log(soundOfGalloping);
    }
    run(soundOfRunning = 'tgdk tgdk tgdk tgdk') {
        console.log(soundOfRunning);
    }
    die(causeOfDeath) {
        super.die(causeOfDeath);
        this.gallops = false;
    }
}
