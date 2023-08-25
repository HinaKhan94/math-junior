const startButton = document.getElementById('start-btn');
const endGameBtn = document.getElementById('endbtn');
const gameCategories = document.getElementById('function-bar');
const startButtonDiv = document.getElementById('btn-wrapper');
const gamePlayArea = document.getElementById('wrapper');
const answerOptions = document.getElementById('answer-options');
const scoreArea = document.getElementById('scores');


startButton.addEventListener('click', startGame);


let flag_add = 1;
let flag_sub = 0;
let flag_mul = 0;
let flag_div = 0;
let answer_add = 0;
let answer_sub = 0;
let answer_mul = 0;
let answer_div = 0;
let c_score = document.getElementById('correct');
let ic_score = document.getElementById('incorrect');

let button1 = document.getElementById('addition');
let button2 = document.getElementById('subtract');
let button3 = document.getElementById('multiply');
let button4 = document.getElementById('divide');

let result1 = document.getElementById('option1');
let result2 = document.getElementById('option2');
let result3 = document.getElementById('option3');
let result4 = document.getElementById('option4');

let reset = document.getElementById('resetbtn');
let endGame = document.getElementById('endbtn');



// Function for incrementing the score

function scorecorrect(a) {
    score = a + 1;
    return score;
}

// Function for decrementing the score

function scoreincorrect(a) {
    score = a + 1;
    return score;
}

/**
 * game type: addition
 * will only generate addition game equation when pressed
 */
button1.addEventListener('click', function () {
    flag_add = 1;
    flag_sub = 0;
    flag_mul = 0;
    flag_div = 0;
    flag_sameGame= 0;
    //let operand1 = Math.floor(Math.random() * 10) + 1;
    //let operand2 = Math.floor(Math.random() * 10) + 1;
    [operand1, operand2]=generateEq()
    answer_add = operand1 + operand2;
    
    displayadd(operand1, operand2);
    displayOptions(answer_add);

});


/**
 * game type: Subtraction
 * will only generate subtraction game equation when pressed
 */

button2.addEventListener('click', function () {
    flag_add = 0;
    flag_sub = 1;
    flag_mul = 0;
    flag_div = 0;
    //let operand1 = Math.floor(Math.random() * 10) + 1;
    //let operand2 = Math.floor(Math.random() * 10) + 1;

    [operand1, operand2]=generateEq()

    if (operand1 > operand2) {
        answer_sub = operand1 - operand2;
    } else {
        answer_sub = operand2 - operand1;
    }
    displaysubtract(operand1, operand2);
    displayOptions(answer_sub);
});

/**
 * game type: Multiplication
 * will only generate multiplication game equation when pressed
 */

button3.addEventListener('click', function () {
    flag_add = 0;
    flag_sub = 0;
    flag_mul = 1;
    flag_div = 0;
    //let operand1 = Math.floor(Math.random() * 10) + 1;
    //let operand2 = Math.floor(Math.random() * 10) + 1;
    [operand1, operand2]=generateEq()

    answer_mul = operand1 * operand2;

    displaymultiply(operand1, operand2);
    displayOptions(answer_mul);
});

/**
 * game type: Division
 * will only generate division game equation when pressed
 */

button4.addEventListener('click', function () {
    flag_add = 0;
    flag_sub = 0;
    flag_mul = 0;
    flag_div = 1;
    //let operand1 = Math.floor(Math.random() * 25) + 1;
    //let operand2 = Math.floor(Math.random() * 25) + 1;
    [operand1, operand2]=generateEq()

    while (operand1 % operand2) {
        operand1 = Math.floor(Math.random() * 25) + 1;
        operand2 = Math.floor(Math.random() * 25) + 1;
    }
    answer_div = operand1 / operand2;
    displaydivide(operand1, operand2);
    displayOptions(answer_div);

});

/**
 * function for generating answer option 1 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through while loops
 */

result1.addEventListener('click', function () {
    sAnswer = result1.textContent;
    //while loop will execute only once and when addition game type addition is selected
    if (flag_add) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqAdd();
        

    } else if (flag_sub){
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqSub();
    } else if (flag_mul) {
        if (sAnswer == answer_mul) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqMul();
    } else if (flag_div) {
        if (sAnswer == answer_div) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqDiv()
    }
});

/**
 * function for generating answer option 2 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through while loops
 */

result2.addEventListener('click', function () {
    sAnswer = result2.textContent;
    if (flag_add) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;  
            alert('Oops you got that wrong, better luck next time');     
        }
        repeatEqAdd();

    }else if(flag_sub) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqSub();
    } else if (flag_mul) {
        if (sAnswer == answer_mul) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqMul();
    } else if (flag_div) {
        if (sAnswer == answer_div) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqDiv();
    }
});

/**
 * function for generating answer option 3 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through while loops
 */

result3.addEventListener('click', function () {
    sAnswer = result3.textContent;
    if (flag_add) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqAdd();

    }else if (flag_sub) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqSub();
    } else if (flag_mul) {
        if (sAnswer == answer_mul) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqMul();
    } else if (flag_div) {
        if (sAnswer == answer_div) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        }
        repeatEqDiv();
    }
});

/**
 * function for generating answer option 4 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through while loops
 */

result4.addEventListener('click', function () {
    sAnswer = result4.textContent;
    if (flag_add) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
            
        }
        repeatEqAdd();

    } else if (flag_sub) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;

        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
            
        }
        repeatEqSub();
    } else if (flag_mul) {
        if (sAnswer == answer_mul) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
           
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
            
        }
        repeatEqMul();
    } else if (flag_div) {
        if (sAnswer == answer_div) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time');
        
        }
        repeatEqDiv();
    }

});

/**
 * startGame functions that hides the start button and the 
 * instructions button and shows the game related elements only
 */

function startGame() {
     // Perform actions to start the game
    startButton.classList.add('hide');
    startButtonDiv.classList.add('hide');
    gameCategories.classList.remove('hide');
    gamePlayArea.classList.remove('hide');
    answerOptions.classList.remove('hide');
    scoreArea.classList.remove('hide');
    [operand1,operand2]=generateEq()
    displayadd(operand1,operand2)
    answer_add= operand1+operand2;
    displayOptions(answer_add)
    flag_add=1;

}

endGameBtn.addEventListener('click', function(){
    alert(`Well done! You scored a total of ${c_score}.\nSee you next time!`)
})


reset.addEventListener('click', function () {
    // Reset the scores of scorecorrect and scoreincorrect functions
    c_score.textContent = 0;
    ic_score.textContent = 0;
});

/*
 * endGame function that shows the start button and the 
 * instructions button again and hides the game related elements 
 * /
 
endGameBtn.addEventListener('click', endGame);
function endGame() {
     Perform actions to end the game
    gameCategories.classList.add('hide');
    gamePlayArea.classList.add('hide');
    answerOptions.classList.add('hide');
    scoreArea.classList.add('hide');
    startButtonDiv.classList.remove('hide');
    startButton.classList.remove('hide');
}


/**
 * Display game questioy by creating two random numbers each 
 * time according to the categories selected by the user
 */

function generateEq(){
    let operand1 = Math.floor(Math.random() * 25) + 1;
    let operand2 = Math.floor(Math.random() * 25) + 1;
    return [operand1, operand2]
      
}

function repeatEqAdd(){
        [operand1, operand2]=generateEq()
        answer_add = operand1 + operand2;
        displayadd(operand1, operand2);
        displayOptions(answer_add);
}

function repeatEqSub(){
    [operand1, operand2]=generateEq()
    if (operand1 > operand2) {
        answer_sub = operand1 - operand2;
    } else {
        answer_sub = operand2 - operand1;
    }
    displaysubtract(operand1, operand2);
    displayOptions(answer_sub);
}

function repeatEqMul(){
    [operand1, operand2]=generateEq()
    answer_mul = operand1 * operand2;
    displaymultiply(operand1, operand2);
    displayOptions(answer_mul);
}

function repeatEqDiv(){
    [operand1, operand2]=generateEq()
    while (operand1 % operand2) {
        operand1 = Math.floor(Math.random() * 25) + 1;
        operand2 = Math.floor(Math.random() * 25) + 1;
    }
    answer_div = operand1 / operand2;
    displaydivide(operand1, operand2);
    displayOptions(answer_div);
}



function displayadd(a, b) {
    document.getElementById('num1').textContent = a;
    document.getElementById('num2').textContent = b;
    document.getElementById('operand').textContent = '+';
}

function displaysubtract(a, b) {
    document.getElementById('num1').textContent = a > b ? a : b;
    document.getElementById('num2').textContent = a > b ? b : a;
    document.getElementById('operand').textContent = '-';
}

function displaymultiply(a, b) {
    document.getElementById('num1').textContent = a;
    document.getElementById('num2').textContent = b;
    document.getElementById('operand').textContent = 'x';
}

function displaydivide(a, b) {
    document.getElementById('num1').textContent = a > b ? a : b;
    document.getElementById('num2').textContent = a > b ? b : a;
    document.getElementById('operand').textContent = '/';
}

/**
 * Display options to choose from by creating 4 random numbers 
 * and shuffling them through splice
 */

function displayOptions(c) {

    let option1 = Math.floor(Math.random() * 100) + 1;
    let option2 = Math.floor(Math.random() * 100) + 1;
    let option3 = Math.floor(Math.random() * 100) + 1;

    let normal = [option1, option2, option3, c]; // list of options before shuffling
    let shuffled = [];

    for (i = normal.length - 1; i >= 0; i--) {

        j = Math.floor(Math.random() * (i + 1)); // random number generator from 0:i
        shuffled.push(normal.splice(j, 1)[0]); // push randomly selected value from normal into shuffled list
    }

    document.getElementById('option1').textContent = shuffled[0];
    document.getElementById('option2').textContent = shuffled[1];
    document.getElementById('option3').textContent = shuffled[2];
    document.getElementById('option4').textContent = shuffled[3];

}


