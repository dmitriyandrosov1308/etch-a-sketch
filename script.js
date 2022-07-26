function drawGrid (n) {
    let element;
    for (let i = 1; i <= n*n; i++)
    {
        element = document.createElement("div");
        element.style.height = `${600/n - 2}`;
        element.style.width = `${600/n - 2}`;
        element.style.backgroundColor="white";
        document.getElementById('container').appendChild(element);
        element.classList.add("square");
    }
    squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', colorSquare);
    }
}

let n = 16;
let squares;
let randomColor = false, eraserMode = false, hoverMode = false;

window.onload = drawGrid(n);

function createGrid (n) {
    document.getElementById('container').innerHTML = '';
    n = Number(inputNumber.value);
    window.onload = drawGrid(n);
}

let inputNumber = document.getElementById('input-squares');
let colorPicker = document.getElementById('color-picker');

inputNumber.addEventListener('input', createGrid);
inputNumber.addEventListener('input', function () {
    if (eraserMode) {
        eraserMode = !eraserMode;
        document.getElementById('eraser').style.backgroundColor = "white";
      }
    document.getElementById('size').textContent = `${inputNumber.value}x${inputNumber.value}`;
});

document.getElementById('random-color').addEventListener('click', function () {
    if (eraserMode) {
        eraserMode = !eraserMode;
        document.getElementById('eraser').style.backgroundColor = "white";
      }

    randomColor = !randomColor;
    if (randomColor) document.getElementById('random-color').style.backgroundColor = "lime";
    else document.getElementById('random-color').style.backgroundColor = "white";

})

document.getElementById('eraser').addEventListener('click', function () {
    eraserMode = !eraserMode;
    if (eraserMode) document.getElementById('eraser').style.backgroundColor = "lime";
    else document.getElementById('eraser').style.backgroundColor = "white";

})

document.getElementById('hover-mode').addEventListener('click', function () {
    hoverMode = !hoverMode;
    squares = document.getElementsByClassName("square");
    if (hoverMode) {
        document.getElementById('hover-mode').textContent = "DISABLE HOVER MODE";
        document.getElementById('hover-mode').style.backgroundColor = "lime";
        for (let i = 0; i < squares.length; i++){
            squares[i].removeEventListener('click', colorSquare);
            squares[i].addEventListener('mousemove', colorSquare);
        }
    }
    else 
    {
        document.getElementById('hover-mode').textContent = "ENABLE HOVER MODE";
        document.getElementById('hover-mode').style.backgroundColor = "white";
        for (let i = 0; i < squares.length; i++){
            squares[i].removeEventListener('mousemove', colorSquare);
            squares[i].addEventListener('click', colorSquare);
        }
    }



})
function colorSquare () {
    if (eraserMode) {
        this.style.backgroundColor = "white";
    }
    else if (randomColor){
        this.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
    else this.style.backgroundColor = colorPicker.value;
}

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', function () {
    squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor="white";
    }

});