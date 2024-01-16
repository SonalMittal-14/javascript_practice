const myArr = [0,1,2,3,4,5]
const myHeros = ["mavel", "spiderman"]

console.log(myArr[0]);
console.log(myArr[1]);

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) //this puts the number on the starting of the array and then shift every number
myArr.shift() //ye first value array mai e remove kar deta h
console.log(myArr[0]);
console.log(myArr.includes(5));
console.log(myArr.includes(10));
console.log(myArr.indexOf(8));
console.log(myArr);

const newArr = myArr.join()
console.log(newArr); //changes into string

// SLICE AND SPLICE
console.log("A",myArr);
const myn1 = myArr.slice(1,3) // ismai last value include nahi hotiii
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1,3) // ismai last value include hoti h
console.log(myn2); //or ye original array ko manipulate karta h
console.log(myn1);

const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

marvel.push(dc)
// console.log(marvel);

const hero = marvel.concat(dc)
console.log(hero);

const newHero = [...marvel, ...dc]
console.log(newHero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray = another_array.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("Sonal"));
console.log(Array.from("Sonal"));
console.log(Array.from({name: "Sonal"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
