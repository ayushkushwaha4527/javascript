// let num=[40,30,80];
// console.log(num);
// //insert value in the end
// num.push(10);
// console.log(num);
// //inset value in the start
// num.unshift(12);
// console.log(num);
// //insret value in middle
// num.slice(1, 'a');
// console.log(num);
// let marks=[40,60,85,75];
// console.log(marks);
// console.log(marks.indexOf(75));

//remove element from an array
// let elements=[20,6,49,50,43,36];
// console.log(elements);
// elements.pop(6);//pop from end
// console.log(elements);
// elements.shift();//remove from start
// console.log(elements);
// //empty array
// elements.length=0;
// console.log(elements);

//combining arrays
// let first=[1,2,3];
// let second=[4,5,6];
// let third=[7,8,9];
// let combined=first.concat(second).concat(third);
// console.log(combined);

//combining array using spread oprater
// let val_1=[10,20,30];
// let val_2=[40,50,60];
// let combined=[...val_1,...val_2];
// console.log(combined);

//sorating in array
// let arr=[4,12,1,7,10];
// let maxNum=Math.max(...arr)
//  console.log(arr);
//  console.log(maxNum);



/*    +++ acces array elements +++ */

     /*accces from start */
      
/*let lang = ['java','python','html','css','react']
console.log('the length of given array is => ' + lang.length);
let lang1 = lang[0];
console.log(`the first language is => ${lang1}`);

     //access from end

     let lastLang = lang[lang.length - 1]
     console.log('the last lang is => '+ lastLang);     */

    
    
     /*  iterating in an array*/

    // using for loop 
    
/*let playrsName = ['Virat','Rohit','Gill','Bhuvi','Styen'];
for(player=0; player < playrsName.length; player++){
    console.log(playrsName[player]);
}*/


    /* iterate in array using for each loop */

/*let myFriends = ['Aman','Abhishek','Amit','Arpit','Ojas'];
myFriends.forEach(function friends(names){
    console.log(names);
})  */

    
    /*  array join method */

/*let myName = ['A','Y','U','S','H'];
//  let cobinedName = myName.join('')  //joined by space
console.log(myName.join(''));*/




// JavaScript code for concat() method
function func() {
    let num1 = [11, 12, 13],
        num2 = [14, 15, 16],
        num3 = [17, 18, 19];
    // console.log(num1.concat(num2, num3));

    console.log(...num1,...num2,...num3)  //concat using spread oprater
}
func();


// find the biggest num in array


