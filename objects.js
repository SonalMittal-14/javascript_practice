// singleton - ye apni tarah ka ek hi object h 
// object literal

const symbol = Symbol("key1")

const JsUser = {
    name: "Sonal",
    [symbol]: "mykey1", // symbol ko define karnai ka sahi tarika 
    "full name": "sonal mittal",
    age: 21,
    location: "lucknow",
    email: "sonal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); 
console.log(JsUser["email"]); // square braket vala tarika tab kaam aata h jab string mai space hoti h
console.log(JsUser["full name"]);
console.log(typeof JsUser[symbol]);

JsUser.email = "sonal@gla.com"
// Object.freeze(JsUser) // value change nahi hoti h 
JsUser.email = "sonal@google.com"
console.log(JsUser);


// functions variable ki tarah treat kar sakte h
JsUser.greeting = function(){
    console.log("hello"); 
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`);
}
console.log(JsUser.greetingTwo());


// const tinderUser = new Object()  // singleton object
const tinderUser = {} //non singleton object
tinderUser.id = "123abc"
tinderUser.name = "sonal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "hello@gmail.com",
    fullname: {
        userfullname: {
            firstname : "sonal",
            lastname : "mittal"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj4 = {5 : "c" , 6 : "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = {
    id : 1,
    email : "fghj@gmail.com"
}

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course  = {
    coursename : "bhag bhosdi",
    price : "100000000",
    courseinstructor : "cvbnm"
}

 