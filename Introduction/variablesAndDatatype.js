 var a = 7  //itereals
 let b = 8 //declaring variable
 const c = 9 // declaring a constant
 b = b + 2 
 a = a + 3
//  c = c + 1 //constant, cant be changed
 console.log(b)
 console.log(a)
 console.log(c)


 //diff bw var, let and const
 //let and const => block scopped 
 //var => globally scopped
 {
    let b = "bhanu"
    console.log(b)

    a = "Vikas"
    console.log(a)
 }
 console.log(b) //10
 console.log(a) //vikas



 //Data Types = Primitives(7) and Non primitives(Object)

 let a1 = null;
 let b1 = 345;
 let c1 = true;
 let d1 = BigInt("567") + BigInt("3")
 let e1 = "Harry"
 let f1 = Symbol("I am a smart symbol");
 let g 

 console.log(a1, b1, c1, d1, e1, f1, g)
 console.log(typeof c)

 //Objects in Js

 const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish": 67, 
    "Rohan": undefined
 }

 console.log(item["Shubh"])
 console.log(item["Rohan"])
 console.log(item["Lovish"])
 