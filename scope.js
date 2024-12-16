// a=100 overshadow by a=100




setTimeout(()=>{
    var a = 100;
{
    var a = 10;
    console.log(a)
}
console.log(a)
    
},3000)


function a(){
    console.log('start')
}

console.log('end')
a();