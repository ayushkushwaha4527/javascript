// /*   check year is leap or not*/

/*function leapYear(year){
    if((year%4===0 && year%100!==0)||(year%400===0)){
        return true;
   }
    else{
        return false;
     }
}
 const year=2029;
 if(leapYear(year)){
     console.log(year +' is a leap year')
 }
 else{
     console.log(year +' not a leap year');
}*/


/*      check num is positive pr negative*/

/*function checkNum(number){
    if(number>=0){
        return true;
    }
    else{
        return false;
    }
}
let number=100;
if(checkNum(number)){
    console.log(number + ' is a positive number');
}
else{
    console.log(number + ' is negative number');
}*/


        //check the greatest of two number//

/*function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
        return num1 + " is greater than " + num2;
    } else if (num2 > num1) {
        return num2 + " is greater than " + num1;
    } else {
        return num1 + " and " + num2 + " are equal";
    }
}
const number1 = 10;
const number2 = 20;
console.log(findGreaterNumber(number1, number2));*/


      //check year is leap or not without using function//

/*let year =2022;
if((year%4===0 && year%100!==0)||(year%400===0)){
    console.log(year + ' is a leap year');

} 
else{
    console.log(year + ' is not a leap year');
}*/

// question ==> Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0   //

let price=70;
let discount;
if(price>=100){
    discount=20;
}
else if(price>=50 && price<=100){
    discount=10;
}
else{
    discount=0;
}
console.log('discount: ' +discount +'%');
