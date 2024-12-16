let content = document.querySelector('h1');
content.addEventListener('click', function() {
    console.log('hey ayush here ');
    content.style.color='yellow';
});
let content_1=document.querySelector('p');
content_1.addEventListener('mouseover',function(){
    mouseover="setTimeout(function, 3000);"
     console.log("hey this is a para.");
    content_1.style.background='red';
});
let body = document.querySelector('body');
body.addEventListener('click', function(event) {
    
    let color = prompt('choose color'); // Changed variable name from 'prompt' to 'color'
    console.log(color);
    // console.log(event.target);
    body.style.backgroundColor = `${color}`;
});

