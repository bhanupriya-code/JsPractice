//Q1. Write a program to remove all the even numbers from a array

let arr = [1,3,4,5,6,7,6]
let ans = []
remove_even(arr);
function remove_even(arr){
    for(let i in arr){
        if(arr[i] % 2 == 0){
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log(ans)

//Above question with lamba function

function remove_evenByLambda(arr){
    return arr.filter(v => (v%2) == 0)
}

console.log(remove_evenByLambda(arr))


//Above question using delete operator

//delete operator does not affect the length of the array
function remove_evenByDeleteOperator(arr){
    for(let i in arr){
        if(arr[i] % 2 != 0){
            delete arr[i]
        }
    }
    return arr;
}
console.log(remove_evenByDeleteOperator(arr))
 