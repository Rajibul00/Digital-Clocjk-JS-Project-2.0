let timee = document.querySelector('.time');
let date = document.querySelector('.date');
let dateofstrings = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday';
let dateofarr = dateofstrings.split(' ');
console.log(dateofarr);
date.innerText =dateofarr[ new Date().getDay()]

setInterval(function(){
    let time = new Date();
timee.innerText = time.toLocaleTimeString();
},1000)
