// function add(a,b){
//     return a+b;
// }
// console.log('the ans is='+ add(4,5));

//using function through object
// let square=function(a,b){
//        return a*a;
//        return b*b;
// };
// let a=square(2);
// let b=square(4);
// console.log(a);
// console.log(b);
// let names=['ayush','aman','ravi','sita'];
// console.log(names);
// console.log(names.length);
// console.log(names.typeof);

function ayushKush(){
     let ayush={
         fanme:'ayushh',
        lname:'kushwaha',
      
     };
     console.log(ayush)
     return ayush;
 }
 ayushKush();

/*arrow function
 let x=(a,b) => a+b;
 console.log('the result is=' + x(15,5));
function chai(){
    let x='chai pi lo';
    console.log(x);
 }
 chai();// invoking the function

 for(i=1;i<=10;i++){
    i*i;
    console.log(`${2*i}`);
 }*/
 
   getName(); // =>  this will give you a error because arrow function behave like a object
const getName = ()=>{
   console.log("hellow function")
}
// getName();