const colors=["Yellow","Red","Blue","Orange"];
const btn=document.getElementById("btn");
const box=document.querySelector(".box");
const text=document.querySelector(".text");
btn.addEventListener('click',function(){
        const number=random();
        box.style.backgroundColor=colors[number];
        text.textContent = colors[number];
});

function random(){
    return Math.floor(Math.random()*colors.length);
}