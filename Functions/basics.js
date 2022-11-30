function onePlusAvg(a, b){

    return 1 + (a + b)/2 + " \nDone ";


}

console.log("One plus avg " + onePlusAvg(1,3));
console.log("One plus avg " + onePlusAvg(5,1));
 

//new way to work with function called arrow function

const hello = () => {
    console.log("I am to fine yar")
}

hello();


//func without arguments

function addTwoAndThree(a,b){
    return a + b
}

console.log(addTwoAndThree(5,6)) 