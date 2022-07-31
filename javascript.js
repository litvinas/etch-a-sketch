const container = document.querySelector('.container');
const square = [];

const para = document.querySelector('.slider-value');

const slider = document.querySelector('.slider');
let gridSize = 16;

const checkbox = document.querySelector('.checkbox');

let rgbMode = false;


checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        rgbMode = true;
    } else {
        rgbMode = false;
    }
})

initalizeGrid();

slider.addEventListener('input', () => {
    console.log(slider.value);
    gridSize = slider.value;
    para.textContent = `Grid size: ${slider.value}`;
    updateGrid();
})


function initalizeGrid() {
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${512/gridSize}px)`;

    for (let i = 0; i < gridSize*gridSize; i++) {
        square[i] = document.createElement('div');
        square[i].classList.add(`square`);            
        square[i].style.width = `${parseInt(512/gridSize)}px`;
        square[i].style.height = `${parseInt(512/gridSize)}px`;

        container.appendChild(square[i]);
        square[i].addEventListener('mouseover', () => {
            if (rgbMode === true) {
                square[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
            } else {
                square[i].classList.add('filled');
            }
        })
    }
}

function updateGrid() {
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${512/gridSize}px)`;

    container.innerHTML = "";

    for (let i = 0; i < gridSize*gridSize; i++) {
        square[i] = document.createElement('div');
        square[i].classList.add(`square`);
        square[i].style.width = `${parseInt(512/gridSize)}px`;
        square[i].style.height = `${parseInt(512/gridSize)}px`;

        container.appendChild(square[i]);
        square[i].addEventListener('mouseover', () => {
            if (rgbMode === true) {
                square[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
            } else {
                square[i].classList.add('filled');
            }
        })
    }
    
}
// square.classList.add('square');

