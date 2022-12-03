const button=document.getElementById("btn");
const body=document.body;
const colours=['red','green','blue','yellow','pink','purple'];
body.style.backgroundColor=colours[0]
button.addEventListener('click',changeBackground)

function changeBackground(){
    const colousIndex=Math.floor(Math.random()*colours.length)
    body.style.backgroundColor=colours[colousIndex]
}