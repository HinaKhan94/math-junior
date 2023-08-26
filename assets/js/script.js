const startButton = document.getElementById('start-btn');
const endGameBtn = document.getElementById('endbtn');
const gameCategories = document.getElementById('function-bar');
const startButtonDiv = document.getElementById('btn-wrapper');
const gamePlayArea = document.getElementById('wrapper');
const answerOptions = document.getElementById('answer-options');
const scoreArea = document.getElementById('scores');


startButton.addEventListener('click', startGame);


let playAdditionCategory = true;
let playSubtractionCategory = false;
let playMultiplyCategory = false;
let playDivideCategory = false;
let answerAdd = 0;
let answerSubtract = 0;
let answerMultiply = 0;
let answerDivide = 0;
let incrementScore = document.getElementById('correct');
let decrementScore = document.getElementById('incorrect');

let playAdditionGame = document.getElementById('addition');
let playSubtractionGame = document.getElementById('subtract');
let playMultiplicationGame = document.getElementById('multiply');
let playDivisionGame = document.getElementById('divide');

let optionAnswerOne = document.getElementById('option1');
let optionAnswerTwo = document.getElementById('option2');
let optionAnswerThree = document.getElementById('option3');
let optionAnswerFour = document.getElementById('option4');

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
playAdditionGame.addEventListener('click', function () {
    playAdditionCategory = true;
    playSubtractionCategory = false;
    playMultiplyCategory = false;
    playDivideCategory = false;
    flag_sameGame= false;
    [operand1, operand2]=generateEq()
    answerAdd = operand1 + operand2;
    
    displayadd(operand1, operand2);
    displayOptions(answerAdd);

});


/**
 * game type: Subtraction
 * will only generate subtraction game equation when pressed
 */

playSubtractionGame.addEventListener('click', function () {
    playAdditionCategory = false;
    playSubtractionCategory = true;
    playMultiplyCategory = false;
    playDivideCategory = false;
    
    [operand1, operand2]=generateEq()

    if (operand1 > operand2) {
        answerSubtract = operand1 - operand2;
    } else {
        answerSubtract = operand2 - operand1;
    }
    displaysubtract(operand1, operand2);
    displayOptions(answerSubtract);
});

/**
 * game type: Multiplication
 * will only generate multiplication game equation when pressed
 */

playMultiplicationGame.addEventListener('click', function () {
    playAdditionCategory = false;
    playSubtractionCategory = false;
    playMultiplyCategory = true;
    playDivideCategory = false;
    [operand1, operand2]=generateEq()

    answerMultiply = operand1 * operand2;

    displaymultiply(operand1, operand2);
    displayOptions(answerMultiply);
});

/**
 * game type: Division
 * will only generate division game equation when pressed
 */

playDivisionGame.addEventListener('click', function () {
    playAdditionCategory = false;
    playSubtractionCategory = false;
    playMultiplyCategory = false;
    playDivideCategory = true;
   
    [operand1, operand2]=generateEq()

    while (operand1 % operand2) {
        operand1 = Math.floor(Math.random() * 25) + 1;
        operand2 = Math.floor(Math.random() * 25) + 1;
    }
    answerDivide = operand1 / operand2;
    displaydivide(operand1, operand2);
    displayOptions(answerDivide);

});

/**
 * function for generating answer option 1 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through if else loops
 */

optionAnswerOne.addEventListener('click', function () {
    userSelectedAnswer = optionAnswerOne.textContent;
    //if loop will execute when addition game type is selected
    if (playAdditionCategory) {
        if (userSelectedAnswer == answerAdd) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextAdditionQuestion();
        
    //else if loop will execute when subtraction game type is selected

    } else if (playSubtractionCategory){
        if (userSelectedAnswer == answerSubtract) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextSubtractQuestion();

    //else if loop will execute when multiplication game type is selected

    } else if (playMultiplyCategory) {
        if (userSelectedAnswer == answerMultiply) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextMultiplyQuestion();

    //else if loop will execute when division game type is selected

    } else if (playDivideCategory) {
        if (userSelectedAnswer == answerDivide) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextDivisionQuestion()
    }
});

/**
 * function for generating answer option 2 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through if else loops
 */

optionAnswerTwo.addEventListener('click', function () {
    userSelectedAnswer = optionAnswerTwo.textContent;
    if (playAdditionCategory) {
        if (userSelectedAnswer == answerAdd) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;  
            alert('Oops you got that wrong, better luck next time!');     
        }
        nextAdditionQuestion();

    }else if(playSubtractionCategory) {
        if (userSelectedAnswer == answerSubtract) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextSubtractQuestion();
    } else if (playMultiplyCategory) {
        if (userSelectedAnswer == answerMultiply) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextMultiplyQuestion();
    } else if (playDivideCategory) {
        if (userSelectedAnswer == answerDivide) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextDivisionQuestion();
    }
});

/**
 * function for generating answer option 3 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through if else loops
 */

optionAnswerThree.addEventListener('click', function () {
    userSelectedAnswer = optionAnswerThree.textContent;
    if (playAdditionCategory) {
        if (userSelectedAnswer == answerAdd) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextAdditionQuestion();

    }else if (playSubtractionCategory) {
        if (userSelectedAnswer == answerSubtract) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextSubtractQuestion();
    } else if (playMultiplyCategory) {
        if (userSelectedAnswer == answerMultiply) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextMultiplyQuestion();
    } else if (playDivideCategory) {
        if (userSelectedAnswer == answerDivide) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        }
        nextDivisionQuestion();
    }
});

/**
 * function for generating answer option 4 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through if else loops
 */

optionAnswerFour.addEventListener('click', function () {
    userSelectedAnswer = optionAnswerFour.textContent;
    if (playAdditionCategory) {
        if (userSelectedAnswer == answerAdd) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
            
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
            
        }
        nextAdditionQuestion();

    } else if (playSubtractionCategory) {
        if (userSelectedAnswer == answerSubtract) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;

        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
            
        }
        nextSubtractQuestion();
    } else if (playMultiplyCategory) {
        if (userSelectedAnswer == answerMultiply) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
           
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
            
        }
        nextMultiplyQuestion();
    } else if (playDivideCategory) {
        if (userSelectedAnswer == answerDivide) {
            correct_value = scorecorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
            
        } else {
            incorrect_value = scoreincorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
            alert('Oops you got that wrong, better luck next time!');
        
        }
        nextDivisionQuestion();
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
    answerAdd= operand1+operand2;
    displayOptions(answerAdd)
    playAdditionCategory=1;

}

endGameBtn.addEventListener('click', function(){
    finalScore= parseInt(incrementScore.textContent) - parseInt(decrementScore.textContent)
    alert(`Well done! You scored a total of ${finalScore}.\nSee you next time!`)
})


reset.addEventListener('click', function () {
    // Reset the scores of scorecorrect and scoreincorrect functions
    incrementScore.textContent = 0;
    decrementScore.textContent = 0;
});


/**
 * Display game questioy by creating two random numbers each 
 * time according to the categories selected by the user
 */

function generateEq(){
    let operand1 = Math.floor(Math.random() * 25) + 1;
    let operand2 = Math.floor(Math.random() * 25) + 1;
    return [operand1, operand2]
      
}

function nextAdditionQuestion(){
        [operand1, operand2]=generateEq()
        answerAdd = operand1 + operand2;
        displayadd(operand1, operand2);
        displayOptions(answerAdd);
}

function nextSubtractQuestion(){
    [operand1, operand2]=generateEq()
    if (operand1 > operand2) {
        answerSubtract = operand1 - operand2;
    } else {
        answerSubtract = operand2 - operand1;
    }
    displaysubtract(operand1, operand2);
    displayOptions(answerSubtract);
}

function nextMultiplyQuestion(){
    [operand1, operand2]=generateEq()
    answerMultiply = operand1 * operand2;
    displaymultiply(operand1, operand2);
    displayOptions(answerMultiply);
}

function nextDivisionQuestion(){
    [operand1, operand2]=generateEq()
    while (operand1 % operand2) {
        operand1 = Math.floor(Math.random() * 25) + 1;
        operand2 = Math.floor(Math.random() * 25) + 1;
    }
    answerDivide = operand1 / operand2;
    displaydivide(operand1, operand2);
    displayOptions(answerDivide);
}



function displayadd(a, b) {
    assignOperationValuesAddMul(a, b, '+')
   
}
function displaysubtract(a, b) {
    assignOperationValuesSubDiv(a,b,'-')

}
function displaymultiply(a, b) {
    assignOperationValuesAddMul(a, b, 'x')
}

function displaydivide(a, b) {
    assignOperationValuesSubDiv(a,b,'/')
}

function assignOperationValuesAddMul(valueOne, valueTwo, operator){
    document.getElementById('num1').textContent = valueOne;
    document.getElementById('num2').textContent = valueTwo;
    document.getElementById('operand').textContent = operator;

}
function assignOperationValuesSubDiv(valueOne, valueTwo, operator){
    document.getElementById('num1').textContent = valueOne > valueTwo ? valueOne : valueTwo;
    document.getElementById('num2').textContent = valueOne > valueTwo ? valueTwo : valueOne;
    document.getElementById('operand').textContent = operator;
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


