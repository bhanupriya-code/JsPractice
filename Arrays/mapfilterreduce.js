let arr = [23,45,66]


//map() ...creates a new array by performing operation on each element
//return array
let a= arr.map((value, index, aray) =>{
//    console.log(value, index, arr)
   return value + 1
})
console.log(a)


//filter() ...create a new array with filterd elements
//returns an array
let arr1 = [34,34,322,5,5,6]
let a1 = arr1.filter((a) => {
    return a < 10;
})
console.log(a1)

//reduce() ...perform opereations of array elements and returns a valuw
//returns a value
let arr2 = [1,1,2,1,2,1,2,3,2]
let a2 = arr2.reduce((h1 , h2) =>{
    return h1 + h2
})
console.log(a2)
