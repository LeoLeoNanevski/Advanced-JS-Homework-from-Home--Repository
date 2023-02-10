import Mammal from "../mammal.js";

export default class Human extends Mammal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.wareClothes = true;
        this.abilityToControlFire = true;
        this.walkOnTwoFeets = true;
        this.hasSharpTeeth = false;
    }

    speak(languages = 'Многу разни јазици и уште повеќе диалекти на тие јазици') {
        console.log(languages);
    }

}