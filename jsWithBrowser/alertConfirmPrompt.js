alert("Enter the value of x ")
let x = prompt("Enter here", "578")
x = Number.parseInt(x)
alert("You enterd x of type " + (typeof x))
let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}else{
    document.write("Please allow me to write ")
}