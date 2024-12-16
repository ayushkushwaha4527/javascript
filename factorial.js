function factorial(number){
    let result=1
    for(i = 1; i<=number; i++){
        result = result*i

    }
    return result;
}
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(0))



function calculateFactorial(num) {
    let fac = 1;
    for(let i = 1;i<=num; i++){
        fac = fac*i;
       
    }
    return fac;
    
}
console.log(calculateFactorial(3))