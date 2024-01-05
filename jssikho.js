var if_else_condition ;

// let age =10;
// let hasVoterCard = 'no';

// if(age>=14){
//     if(hasVoterCard == 'yes'){
//         alert("you can vote");
//     } else{
//         alert("get your voter id card");
//     }
// }else{
//     alert("you cannot vote");
// }


// let isLoggedin = 0;
// let option = isLoggedin == 1 ? "logout" : "login";
// document.write(option);


// let user;
// // user = "sonal";
// alert(user ?? "guest user");

var switch_case

// input = "y";
// switch(input){ 
//     case 1:
//     case "y":
//     case "yes":
//         document.write("continue...");
//         break;
//     case 0:
//     case "n":
//     case "no":
//         document.write("continue...");
//         break;
//     default :
//         document.write("wrong input");
// }

var breakHorRahah
var continueBhiii
// for(let counter=1; counter<=10; counter++){
    
//     if(counter==5){
//         continue;
//     }
//     document.write(counter);
//     document.write('<br>');
// }

var nestedloop
// outer: for(counter=1; counter<=10; counter++){
    
//     document.write(counter);
//     document.write('<br>');

//     for(counter2 =1; counter2 <3; counter2++){

//         if(counter==3){
//             break outer;
//         }

//         document.write("sona");
//         document.write('<br>');
//     }
// }

var alert1 
var prompt1
var confirm1

// 1 alert -->> shows a message 

// 2 prompt() -->> shows a messgae , input Text. it returns the text on ok or, if cancel button or esc is clicked, null

// 3 confirm() -->> shows a message, confirm with "ok" or "cancel". it returns true for ok and false for cancel/esc.

// alert('welcome bhai loggg');

// let age = prompt("enter your age");
// if(age!= null){
//     document.write(`your age is ${age}`);
// }
// else{
//     document.write("age feild is blank");
// }

// let response = confirm("are you sure , you want to delete?");
// if(response){
//     document.write("deleted");
// }
// else{
//     document.write("not deleted");
// }

var typeconversion
// let type = "5" * "yes";
// console.log(type);
// console.log(typeof type);

// let type =4;
// console.log(typeof type);

// let NewType = String(type);
// console.log(typeof NewType);

var stringManipulation

let str = "sonal \" mittal ";
let greet = `hi ${str}`;
console.log(greet);
console.log(greet.length); // to know the length of the line
console.log(greet[2]); //we are printing the word on the position 2

let str2 = "is a good girl";
// console.log(str + " " + str2);

// if("Sonal" == str){
//     console.log("Equal")
// }
// else{
//     console.log("not equal");
// }

let str3 = str.concat(str2);
console.log(str3);


// numbers and maths 
// const score = 400;
console.log(score);
const money = new Number(100.8765)
// console.log(money);

console.log(money.toString().length);
console.log(money.toFixed(2));


const ekornumber = 1123.8765
console.log(ekornumber.toPrecision(3));

const hundreds = 1000000000;
// console.log(hundreds.toLocaleString());

// console.log(Math);
console.log(Math.abs(-4));
