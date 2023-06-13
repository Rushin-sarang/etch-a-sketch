const grid = document.getElementById("container");
const r = document.querySelector(":root");
const color = document.getElementById("color");
const reset = document.getElementById("reset");
const eraser = document.getElementById("eraser");
const inp = document.getElementById("inp");
const range = document.getElementById("range");
const apply = document.getElementById("apply");
const colorBut = document.getElementById("colorBut");
const rainbow = document.getElementById("rainbow");
// let gridElement = " ";
let mode = 'color-mode';
let size = 16;
let gridColor = '#00ffff';

range.addEventListener("input", (e) =>{
    inp.textContent = e.target.value;
});
inp.textContent = range.value;

colorBut.oninput = (e) => {gridColor = e.target.value;}
apply.onclick = () => {size = range.value; grid.innerHTML = " "; createGrid();};
reset.onclick = () => {grid.innerHTML = ""; createGrid();};
color.onclick = () => {mode = "color-mode";rainbow.classList.remove("active"); color.classList.add("active"); eraser.classList.remove("active");}
rainbow.onclick = () => {mode = "rainbow-mode"; rainbow.classList.add("active"); color.classList.remove("active"); eraser.classList.remove("active");}
eraser.onclick = () => {mode = "eraser-mode";rainbow.classList.remove("active"); color.classList.remove("active"); eraser.classList.add("active");}

function createGrid(){
    r.style.setProperty('--size', size);
    for(let i = 1; i<=size*size;i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridElement.addEventListener("mouseenter", working);
        grid.appendChild(gridElement);
    }
}
function working(e){
    if(mode == "color-mode"){
        e.target.style.backgroundColor = gridColor;
    }else if (mode == "eraser-mode"){
        e.target.style.backgroundColor = '#ffffff';
    }else if (mode == "rainbow-mode"){
        randomR = Math.floor(Math.random() * 256);
        randomG = Math.floor(Math.random() * 256);
        randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}

window.onload = () => {
    createGrid();
}