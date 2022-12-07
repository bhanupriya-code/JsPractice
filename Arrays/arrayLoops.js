let num = [3,4,56,6,4]

//forEach loop
num.forEach((element) => {
    console.log(element * element)
})

//used to create array from object
let a = Array.from("Harry")
console.log(a)

//for of 
//here i = element of array
for(let i  of num){
    console.log(i)
}

//for in
//here item = index of the aray
for(let item in num){
    console.log(item)
}