// wait for Dom to finish loading before playing the game 

document.addEventListener('DOMContentLoaded', function() {
    let controls = document.getElementsByClassName('btn');

    for (controls in btn) {
        controls.addEventListener('click', fucntion() {
            if (controls.getAttribute('data-type') === 'addition') {
                startGame(game);
            } else {
                alert('unknown value');
            }
        })
    }
})

/**
 * The main game starts when the script is loaded
 * and the user's answer has been processed
*/

function startGame(game) {

    // creats two random numbers between 1 and 15
    let operand1 = Math.floor(Math.random()* 15) + 1;
    let operand2 = Math.floor(Math.random()* 15) + 1;

    if (game === 'addQuestion') {
        addQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${game}´);
        throw `Unknown game type: ${game}. Aborting!`;
    }

}

function addQuestion(num1, num2) {

        document.getElementById('num1').textContent = num1;
        document.getElementById('num2').textContent = num2;
        document.getElementById('operand').textContent = '+';

}

function subtractQuestion(num1, num2) {
    
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    document.getElementById('operand').textContent = '-';

}

function multiplyQuestion(num1, num2) {
    
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    document.getElementById('operand').textContent = '*';

}

function divideQuestion(num1, num2) {
    
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    document.getElementById('operand').textContent = '/';

}
