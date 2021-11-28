const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8,9, "A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const box = document.querySelector(".box");
const text = document.querySelector(".text");
btn.addEventListener("click", function () {
  let color='#';
  for(let i=0;i<6;i++){
      color+=colors[random()];
  }
  box.style.backgroundColor = color;
  text.textContent = color;
});

function random() {
  return Math.floor(Math.random() * colors.length);
}
