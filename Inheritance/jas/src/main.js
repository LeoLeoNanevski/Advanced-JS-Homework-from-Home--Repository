import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";

console.log("Main");


const horse1 = new Horse('Goce', 7, 'Male');

console.log(horse1);

// horse1.die();
// console.log(horse1);

const sarplaninec1 = new Sarplaninec('Sharko', 5, 'Male');
sarplaninec1.die();
console.log(sarplaninec1);

const pudlica1 = new Pudlica('Sarko', 5, undefined);
pudlica1.bark();

pudlica1.bark();
pudlica1.bark();
pudlica1.bark();
pudlica1.bark();
pudlica1.bark();
pudlica1.bark();
pudlica1.bark();

pudlica1.die('crkni');
pudlica1.bark('af af af');
console.log(pudlica1);
pudlica1.comeAlive();
setTimeout(() => {
    pudlica1.die()
}, 10000)