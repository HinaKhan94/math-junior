

let flag_add = 0;
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
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
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
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;

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
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
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
    let operand1 = Math.floor(Math.random() * 25) + 1;
    let operand2 = Math.floor(Math.random() * 25) + 1;

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
    while (flag_add) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_add = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_add = 0;
        }
    }
    //while loop will execute only once and when the game type subtraction is selected
    while (flag_sub) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_sub = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_sub = 0;
        }
    }
    //while loop will execute only once and when the game type multiplication is selected
    while (flag_mul) {
        if (sAnswer == answer_mul) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_mul = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_mul = 0;
        }
    }
    //while loop will execute only once and when the game type division is selected
    while (flag_div) {
        if (sAnswer == answer_div) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_div = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_div = 0;
        }
    }
});

/**
 * function for generating answer option 2 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through while loops
 */

result2.addEventListener('click', function () {
    sAnswer = result2.textContent;
    while (flag_add) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_add = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_add = 0;
        }
    }
    while (flag_sub) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_sub = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_sub = 0;
        }
    }
    while (flag_mul) {
        if (sAnswer == answer_mul) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_mul = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_mul = 0;
        }
    }
    while (flag_div) {
        if (sAnswer == answer_div) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_div = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_div = 0;
        }
    }
});

/**
 * function for generating answer option 3 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through while loops
 */

result3.addEventListener('click', function () {
    sAnswer = result3.textContent;
    while (flag_add) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_add = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_add = 0;
        }
    }
    while (flag_sub) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_sub = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_sub = 0;
        }
    }
    while (flag_mul) {
        if (sAnswer == answer_mul) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_mul = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_mul = 0;
        }
    }
    while (flag_div) {
        if (sAnswer == answer_div) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_div = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_div = 0;
        }
    }
});

/**
 * function for generating answer option 4 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through while loops
 */

result4.addEventListener('click', function () {
    sAnswer = result4.textContent;
    while (flag_add) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_add = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_add = 0;
        }
    }
    while (flag_sub) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_sub = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_sub = 0;
        }
    }
    while (flag_mul) {
        if (sAnswer == answer_mul) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_mul = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_mul = 0;
        }
    }
    while (flag_div) {
        if (sAnswer == answer_div) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
            flag_div = 0;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
            flag_div = 0;
        }
    }

});

reset.addEventListener('click', function () {
    // Reset the scores of scorecorrect and scoreincorrect functions
    c_score.textContent = 0;
    ic_score.textContent = 0;
});

/**
 * Display game questioy by creating two random numbers each 
 * time according to the categories selected by the user
 */

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


