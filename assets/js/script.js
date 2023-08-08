/**
 * Addition game loop, creates two random number 
 * with 4 random options to choose from 
 */
const correct_score = 0;
const incorrect_score = 0;
let select_add = 0;
let select_sub = 0;
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

button1.addEventListener('click', function () {
    select_add = 1;
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
    answer_add = operand1 + operand2;
    displayadd(operand1, operand2);
    displayOptions(answer_add);

});
/**
* Subtraction game loop, creates two random number 
* with 4 random options to choose from 
*/

button2.addEventListener('click', function () {
    select_sub = 1;
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

result1.addEventListener('click', function () {
    sAnswer = result1.textContent;
    console.log(sAnswer, answer_add);
    if (select_add === 1) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
        }
    }

    if (select_sub === 1) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
        }
    }

});

result2.addEventListener('click', function () {
    sAnswer = result2.textContent;
    console.log(sAnswer, answer_add);
    if (select_add === 1) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
        }
    }

    if (select_sub === 1) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
        }
    }
});

result3.addEventListener('click', function () {
    sAnswer = result3.textContent;
    console.log(sAnswer, answer_add);
    if (select_add === 1) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
        }
    }

    if (select_sub === 1) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
        }
    }
});


result4.addEventListener('click', function () {
    sAnswer = result4.textContent;
    console.log(sAnswer, answer_add);
    if (select_add === 1) {
        if (sAnswer == answer_add) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
        }
    }
    if (select_sub === 1) {
        if (sAnswer == answer_sub) {
            correct_value = scorecorrect(parseInt(c_score.textContent));
            c_score.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(ic_score.textContent));
            ic_score.textContent = incorrect_value;
        }
    }
});




/**
 * Multiplication game loop, creates two random number 
 * with 4 random options to choose from 
 */

button3.addEventListener('click', function () {
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
    answer2 = operand1 * operand2;

    displaymultiply(operand1, operand2);
    displayOptions(answer2);

    let result1 = document.getElementById('option1');
    result1.addEventListener('click', function () {
        sAnswer = result1.textContent;
        if (sAnswer == answer2) {
            alert('right');
        } else {
            alert('wrong!');
        }
    });
    let result2 = document.getElementById('option2');
    result2.addEventListener('click', function () {
        sAnswer = result2.textContent;
        if (sAnswer == answer2) {
            alert('right');
        } else {
            alert('wrong!');
        }
    });

    let result3 = document.getElementById('option3');
    result3.addEventListener('click', function () {
        sAnswer = result3.textContent;
        if (sAnswer == answer2) {
            alert('right');
        } else {
            result3.style.backgroundColor = 'red';
        }
    });

    let result4 = document.getElementById('option4');
    result4.addEventListener('click', function () {
        sAnswer = result4.textContent;
        if (sAnswer == answer2) {
            alert('right');
        } else {
            alert('wrong!');
        }
    });


});

/**
 * Division game loop, creates two random number 
 * with 4 random options to choose from 
 */

button4.addEventListener('click', function () {
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
    answer3 = operand1 / operand2;

    displaydivide(operand1, operand2);
    displayOptions(answer3);

    let result1 = document.getElementById('option1');
    result1.addEventListener('click', function () {
        sAnswer = result1.textContent;
        if (sAnswer == answer3) {
            alert('right');
        } else {
            alert('wrong!');
        }
    });
    let result2 = document.getElementById('option2');
    result2.addEventListener('click', function () {
        sAnswer = result2.textContent;
        if (sAnswer == answer3) {
            alert('right');
        } else {
            alert('wrong!');
        }
    });

    let result3 = document.getElementById('option3');
    result3.addEventListener('click', function () {
        sAnswer = result3.textContent;
        if (sAnswer == answer3) {
            alert('right');
        } else {
            result3.style.backgroundColor = 'red';
        }
    });

    let result4 = document.getElementById('option4');
    result4.addEventListener('click', function () {
        sAnswer = result4.textContent;
        if (sAnswer == answer3) {
            alert('right');
        } else {
            alert('wrong!');
        }
    });


});
/**
 * Function to display game type 
 * after the user has selected 
 */

function scorecorrect(a) {
    score = a + 1;
    return score;
}
function scoreincorrect(a) {
    score = a + 1;
    return score;
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
    document.getElementById('num1').textContent = a;
    document.getElementById('num2').textContent = b;
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

    let normal = [option1, option2, option3, c];
    let shuffled = [];

    for (i = normal.length - 1; i >= 0; i--) {

        j = Math.floor(Math.random() * (i + 1));
        shuffled.push(normal.splice(j, 1)[0]);
    }

    document.getElementById('option1').textContent = shuffled[0];
    document.getElementById('option2').textContent = shuffled[1];
    document.getElementById('option3').textContent = shuffled[2];
    document.getElementById('option4').textContent = shuffled[3];



}

