//for loop types
//1. for in
//2. for of

let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}
for( let a in obj){
    console.log("Marks of" + a + " are " + obj[a])
}

for( let b of "Harry"){
    console.log(b)
}