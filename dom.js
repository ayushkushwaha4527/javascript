const ayush = document.createElement('h1');
ayush.innerText = 'ayush it is tough but you have to do it';
ayush.innerText+=' hey i am appended text'
 let body = document.querySelector('body')

body.appendChild(ayush);

const head = document.querySelector('h2');
head.innerText+=' this is heading two';
head.innerText+=' it will fine'
head.style.color='blue'
head.style.textAlign='center'


let para = document.createElement('a');
para.setAttribute('href','https://facebook.com')
para.textContent = 'facebook';
para.setAttribute('target','_blank')
body.append(para)
body.para.style.marginTop= '50px'

