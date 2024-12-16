/*let myPromise = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve('job done');
    },2000);
});
myPromise.then(function(value) {
    console.log(value); 
});*/

let myPromise = new Promise(function(resolve,reject){
    let x =5;
    let y =5;
    if(x===y){
        resolve('yes it is true')
    }
    else{
        reject('is it not working')
    }
});
myPromise.then(function(ayush){
    console.log(ayush)
})
.catch(function(error){
    console.log(error)
})





let p = new Promise((resolve, reject) => {
    let isTrue = true;
    if (isTrue) {
      resolve('Success hai bhai');
    } else {
      reject('Error');
    }
  });
  
   p.then(function(value){
    console.log(value)
   })
  .catch(message => console.log(`Promise rejected: ${message}`));