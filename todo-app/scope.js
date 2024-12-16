
// can not hoist arrow functin because fun is like a variable now
// fun()
// var x = 7;
// console.log(x)

// var fun = ()=>{
//     console.log("name kya hai")
// }

// function a(){
//     console.log(x)
// }
// const x = 20
// a();

// {
//     let a = 100;
//     let b = 200;
//     console.log(a);
//     console.log(b)
// }
// console.log(a);
//     console.log(b)


function my(){
    let x = 100;
    var y = 200;
}
console.log(x)
my()             // can not access var outside of a function scope