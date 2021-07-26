const simple = ["green", "red", "yellow", "pink", "rgba(133,122,200)","#000000"];

const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomnumber = getrandomNumber();
    document.body.style.backgroundColor = simple[randomnumber];
    color.textContent = simple[randomnumber];
    
});

function getrandomNumber(){
    return Math.floor(Math.random() * simple.length);
}