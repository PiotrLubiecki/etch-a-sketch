const container = document.querySelector('#container');
let isDrawing = false;
let currentColor = 'black';
let gridSize = 16;
draw(gridSize);
containerEvent()
const colorPick = document.querySelectorAll('.color-pick');
const topButtons = document.querySelectorAll('.top-buttons');
const resetButton = document.querySelector('#reset-button');
const hint = document.querySelector('#hint');

resetButton.addEventListener('click', reset); // resets the canvas

topButtons.forEach((topButton) => {      
    topButton.addEventListener('click', () => {
        gridSize = topButton.id;
        topButtons.forEach((topButton) => {
            topButton.classList.remove('top-buttons-active');
        })
        reset();
        topButton.classList.add('top-buttons-active');
    })
}) ;    //  resets the canvas and draws the new one
colorPick.forEach((color) => {         
    color.addEventListener('click', () => {
        colorPick.forEach((color) => {
            color.classList.remove('color-pick-active');
        })
        currentColor = color.id;
        color.classList.add('color-pick-active');
    })
}); //selects current color


function draw(size) {
    for (let i = 0; i < Math.pow(size, 2); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = 768 / size +"px";
        square.style.height = 768 / size +"px";
        container.appendChild(square);
    }
}       //adds square divs to the main container

function containerEvent() {             
    container.addEventListener('click', () => {
        if (hint.style != 'visibility: hidden'){
            hint.style = 'visibility: hidden';
        }
        const squares = document.querySelectorAll('.square')
        if (!isDrawing){
            squares.forEach((square) => {
                square.addEventListener('mouseover', colorChange);
            })
            isDrawing = true;
        } else if(isDrawing) {
            squares.forEach((square) => {
                square.removeEventListener('mouseover', colorChange);
            })
            isDrawing = false;
        }
    });
}        //function, which adds paintable divs to the container


function colorChange() {                
    this.style.backgroundColor = currentColor;
}           //function, which allows to change the color of paintable div to the selected one


function reset() { 
    container.innerHTML = '';
    hint.style = 'visibility: visible'
    draw(gridSize);
    isDrawing = false;
    containerEvent;
}
