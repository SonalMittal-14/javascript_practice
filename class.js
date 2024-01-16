const vada = new Promise((resolve,reject) =>{
    const flag = true;
    if(flag) {
        setTimeout (() => {
            console.log(2);
            resolve()
        },5000)
    }
    else{
        reject()
    }
})

console.log(1);
vada.then(() => {
    console.log(3);
});