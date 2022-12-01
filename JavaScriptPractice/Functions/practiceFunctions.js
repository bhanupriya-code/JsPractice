//Q2  .
students = {
    Padhi: 23,
    oppa: 69,
    bhanu: 54,
    babu: 89
}

for(let a in students){
    console.log("Marks of " + a + " are " + students[a])
}
//Q1.
for(let a = 0; a < Object.keys(students).length; a++){
    console.log("Marks of " + Object.keys(students)[a] + " are " + students[Object.keys(students)[a]])
}

//Q3.
// let num = prompt("Enter a num ")
// if(num == 6){
//     console.log("You won")
// }else{
//     console.log("Try again")
// }