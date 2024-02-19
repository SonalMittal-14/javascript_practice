function addTwoNumber(number1, number2){
    let result = number1 + number2;
    return result;
}

const result = addTwoNumber(3,7)
console.log(result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("sonal"));
console.log(loginUserMessage());


function calculateCartPrice(val1, val2,...num1){ // this ... is a rest operator plus it is a spread operator
    return num1
}
console.log(calculateCartPrice(200,700,600 , 800)); // suru ki do digit val1 and val2 mai chali gai

const user = {
    username: "Sonal",
    price: 1000
}

function handleObejct(huehue){
    console.log(`Username is ${huehue.username} and price is ${huehue.price}`);
}

handleObejct(user)
handleObejct({
    username: "kuch bhi",
    price: 687
})


const array = [514,5562,65,454]
function returnValue(getArray){
    return getArray[1]
}

console.log(returnValue(array));