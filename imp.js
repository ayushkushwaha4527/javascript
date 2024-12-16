// function imp(){
//     let x = 10;
//     let y = 20;
//     var z = 25;
//     console.log(x);
//     console.log(y)
// }
// console.log(z)
// imp();

//The variable z is declared with var inside the function imp(). Although var has function scope (unlike let and const, which have block scope), it is still local to the function. This means that z is only accessible within the imp() function.

//When you try to access z outside the function (console.log(z)), it results in a ReferenceError because z is not defined in the global scope. Variables declared with var inside a function do not leak into the global scope.


// {
//     let a =10;
//     var b = 100;
// }
// console.log(b)
// console.log(a)
// var a = 250;
// function myFun(){
//     console.log(a)

// }
// myFun();


// function myValue(){
//     console.log(x)     undefine becase function call first 
// }
// myValue();
// var x = 100;


var arr = [10,15,20,25]
arr[6] = 30;
console.log(arr.length)
console.log(arr)
