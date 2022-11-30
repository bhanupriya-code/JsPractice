console.log(examp(2)(3)(5));

function examp(x){
    return function(y){
        return function(z){
            return x * y * z
        }
    }
}

//this is called the anonymous function