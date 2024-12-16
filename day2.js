// write a function that tells num is even or odd


function checkNum(number){
    if(number%2==0){
        console.log('number is even');
    }
    else{
        console.log('number is odd');
    }

}
checkNum(19)

//find smallest num among three through function

function findSmallest(a,b,c){
    if(a<b && a<c){
        return a;
    }
    else if(b<a && b<c){
        return b;
    }
    else if(c<a && c<b){
        return c;
    }
}
console.log('smallest num is: ',findSmallest(-10,5,6));


