let kiss = []

function Baby(kiss, hug){
    kiss.push("I kiss you")
    hug();
}

//callback function is a function which will be passed to a function in argument and when that function is being called then in the parameter we will define the callback function

Baby(kiss, function(){
    console.log("I miss my baby")
});
console.log(kiss)
