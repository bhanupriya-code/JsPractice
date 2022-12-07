//return true if the letters of a string are same
var first = "Mary"
var second = "army"
console.log(checkAnagram(first, second))

function checkAnagram(first, second){
  var a = first.toLowerCase();
    var b = second.toLowerCase();

   a = a.split("").sort().join("")
    
   b = b.split("").sort().join("")

    return a === b  

}