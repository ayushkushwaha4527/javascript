// let person={
//     fname:'ayush',
//     lname:'kushwaha',
//     age:23,
//     course:'MCA'
// };
//  console.log(person);
// console.log(person.age);

//object creation using function factory
// function ayushKush(){
//     let person={
//         name:'ayush',
//         age:23,
//         college:'axis kanpur'

//     };
//     return person;
// }
// let personDetails = ayushKush();
// console.log(personDetails);

//using parameter in factory function

// function vishuMishra(name,age,course,college){
//     let person={
//         fname:name,
//         age:age,
//         course:course,
//         college:college
//     };
//     return person;
// }
// let vishu = vishuMishra('vishakha','21','bachelors','axis college');
// console.log(vishu);

function carFeature(name,model,color,mileage,maxspeed){
    let car={
        name:name,
        model:model,
        color:color,
        mileage:mileage,
        maxspeed:maxspeed
     };
     return car;

}
let kia=carFeature('kia','seltos','red','20 kmpl','130kmph');
let audi=carFeature('audi','top','black','25 kmpl','150kmph');
let thar=carFeature('mahindra','thar','black','25 kmpl','140kmph');
console.log(kia);
console.log(audi);
console.log(thar);
console.log(thar.name); 