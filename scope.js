let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("inner scope", a);
}


console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "sonal"

    function two() { //two one ke sab cheze acess kar sakta h 
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //ye nahi chalega kyuli ye two() ka part h

    two()
}
one()


if(true){
    const username = "sonal"
    if(username === "sonal") {
        const website = " goggle"
        console.log(username + website);
    }
}


// +++++++ interesting ++++++++


function addone(num){
    return num+1
}
addone(5)

const addtwo = function(num){
    return num + 2
}
addtwo(5)