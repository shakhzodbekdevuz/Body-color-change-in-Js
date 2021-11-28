const colors=["yellow","red","blue","orange"];
const btn=document.getElementById("btn");
const box=document.querySelector(".box")

btn.addEventListener('click',function(){
        const number=random();
        box.style.backgroundColor=colors[number];
});

function random(){
    return Math.floor(Math.random()*colors.length);
}