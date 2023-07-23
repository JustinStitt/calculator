let runningTotal = 0;
let buffer = 0;
let previousOperator;
let screen;
let buttons;
let button;

screen = document.querySelector('.screen');
container = document.querySelector('.calc-buttons');
buttons = document.querySelectorAll('.calc-button');


function buttonClick(value) {
    isNaN(value) ? handleOp(value) : handleNum(value);
    screen.innerText = buffer;
    console.log(value);
}

function handleOp(operation) {
    switch(operation) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator === null) {
                return;
            }
            doMath(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1) {
                buffer = '0';
            } else {
                buffer.buffer.toString(0, buffer.length - 1)
            }
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            handleMath(operation);
            break;
    }
}

function handleMath(operation) {
    if(buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer);

    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        doMath(intBuffer);
    }
    previousOperator = operation;
    buffer = '0';
}

function doMath() {
    if(previousOperator === '+') {
        runningTotal += intBuffer;
    } 
    else if(previousOperator === '-') {
        runningTotal -= intBuffer;
    }
    else if(previousOperator === '÷') {
        runningTotal /= intBuffer;
    }
    else if(previousOperator === 'x') {
        runningTotal *= intBuffer;
    }
}

function handleNum(digit) {
    console.log("digit:", digit)
    if(buffer === '0') {
        buffer = digit;
    } else {
        buffer += digit;
    }
}

function init() {
    document.querySelector(".calc-buttons").addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}

buttons.forEach(button => {
var currentColor = button.style.backgroundColor;
button.addEventListener('mousedown', () => {
    const bgColor = window.getComputedStyle(container).backgroundColor;
    button.style.backgroundColor = bgColor;
});
button.addEventListener('mouseup', () => {
    button.style.backgroundColor = currentColor;
})
});

init();
