// write a funcion take 2 parameter and find sum

function sum(a,b){
    let x = a+b;
    console.log(x)
}
sum(-10.50,-12);

// print the area of a rectengle
 function rectengleArea(lenght,width){
    if(lenght<=0 ){
        throw new Error('plz give valid value');
    }
    if(width<=0 ){
        throw new Error('plz give valid value');
    }
    let area = lenght*width;
    console.log(`the area of rectengle is: `,area);
};
rectengleArea(100,150)

var x = 10;
function foo(){
    console.log(x)
    var x = 20
}
foo();
