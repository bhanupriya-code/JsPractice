let arr = ["bhanu", 23, true]
//in js arrays can contain different types of data
let num = [1,2,3,4]

//join

let res1 = num.join("*")
console.log(res1)
for(let i = 0; i < num.length; i++){
    console.log(num[i]) 
} 

//pop(remove)

let res2 = num.pop()
console.log(res2)
console.log(num)

//push(add)

let res3 = num.push("4")
console.log(res3)
console.log(num)

//shift (remove)
// --> removing the first element from the array unlike the pop operation whihc removes the last element from the array

let res4 = num.shift()
console.log(res4)
console.log(num)

//unshift(add)
// --> unlike push its add element in the starting index of the array


let res5 = num.unshift(143)
console.log(res5)
console.log(num)
