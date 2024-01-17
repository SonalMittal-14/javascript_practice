// singleton
// object literal

const symbol = Symbol("key1")

const JsUser = {
    name: "Sonal",
    [symbol]: "mykey1",
    "full name": "sonal mittal",
    age: 21,
    location: "lucknow",
    email: "sonal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[symbol]);

JsUser.email = "sonal@gla.com"
// Object.freeze(JsUser)
JsUser.email = "sonal@google.com"
console.log(JsUser);

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

console.log(tinderUser);