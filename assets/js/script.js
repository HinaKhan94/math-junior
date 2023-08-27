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


function scoreCorrect(score) {
    // Function for incrementing the score
    return score+1;
}


function scoreIncorrect(score) {
    // Function for decrementing the score
    return score+1;
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
    playSameGame= false;
    [operandOne, operandTwo]=generateEq();
    answerAdd = operandOne + operandTwo;
    
    displayadd(operandOne, operandTwo);
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
    
    [operandOne, operandTwo]=generateEq();

    if (operandOne > operandTwo) {
        answerSubtract = operandOne - operandTwo;
    } else {
        answerSubtract = operandTwo - operandOne;
    }
    displaysubtract(operandOne, operandTwo);
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
    [operandOne, operandTwo]=generateEq();

    answerMultiply = operandOne * operandTwo;

    displaymultiply(operandOne, operandTwo);
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
   
    [operandOne, operandTwo]=generateEq();

    while (operandOne % operandTwo) {
        operandOne = Math.floor(Math.random() * 25) + 1;
        operandTwo = Math.floor(Math.random() * 25) + 1;
    }
    answerDivide = operandOne / operandTwo;
    displaydivide(operandOne, operandTwo);
    displayOptions(answerDivide);

});

/**
 * function for generating answer option 1 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through if else loops
 */

optionAnswerOne.addEventListener('click', function () {
    userSelectedAnswer = optionAnswerOne.textContent;
    checkAnswers(userSelectedAnswer);
    
});

/**
 * function for generating answer option 2 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through if else loops
 */

optionAnswerTwo.addEventListener('click', function () {
    userSelectedAnswer = optionAnswerTwo.textContent;
    checkAnswers(userSelectedAnswer);
});

/**
 * function for generating answer option 3 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through if else loops
 */

optionAnswerThree.addEventListener('click', function () {
    userSelectedAnswer = optionAnswerThree.textContent;
    checkAnswers(userSelectedAnswer);
});

/**
 * function for generating answer option 4 
 * and then compares it with the correct answer depending on which game type is running (+,-,x,/)
 * through if else loops
 */

optionAnswerFour.addEventListener('click', function () {
    userSelectedAnswer = optionAnswerFour.textContent;
    checkAnswers(userSelectedAnswer)
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
    [operandOne,operandTwo]=generateEq();
    displayadd(operandOne,operandTwo)
    answerAdd= operandOne+operandTwo;
    displayOptions(answerAdd)
    playAdditionCategory=1;

}

/**
 * function for ending the game and displaying 
 * the final correct and incorrect scores. The user wins if the correct answers score is higher than the 
 * incorrect answers score
 */

endGameBtn.addEventListener('click', function(){

    if (parseInt(incrementScore.textContent)>parseInt(decrementScore.textContent)){
        alert(`Well done! You have ${parseInt(incrementScore.textContent)} correct answers & ${parseInt(decrementScore.textContent)} incorrect answers.
        \n See you next time!`)
        window.location.href = "index.html";
    }else {
        alert (`Oops! You have ${parseInt(decrementScore.textContent)} incorrect answers & ${parseInt(incrementScore.textContent)} correct answers.
        \n Better luck next time!`)
        window.location.href = "index.html";
    }  
})


reset.addEventListener('click', function () {
    // Reset the scores of scoreCorrect and scoreIncorrect functions
    incrementScore.textContent = 0;
    decrementScore.textContent = 0;
});


/**
 * Display game question by creating two random numbers each 
 * time according to the categories selected by the user
 */

function generateEq(){
    let operandOne = Math.floor(Math.random() * 25) + 1;
    let operandTwo = Math.floor(Math.random() * 25) + 1;
    return [operandOne, operandTwo];
      
}

/**
 * function to keep generating addition question when clicked 
 * on any answer option. It generates more addition questions
 */

function nextAdditionQuestion(){
        [operandOne, operandTwo]=generateEq();
        answerAdd = operandOne + operandTwo;
        displayadd(operandOne, operandTwo);
        displayOptions(answerAdd);
}

/**
 * function to keep generating subtraction question when clicked 
 * on any answer option. It generates more subtraction questions
 */

function nextSubtractQuestion(){
    [operandOne, operandTwo]=generateEq();
    if (operandOne > operandTwo) {
        answerSubtract = operandOne - operandTwo;
    } else {
        answerSubtract = operandTwo - operandOne;
    }
    displaysubtract(operandOne, operandTwo);
    displayOptions(answerSubtract);
}

/**
 * function to keep generating multiplication question when clicked 
 * on any answer option. It generates more multiplication questions
 */

function nextMultiplyQuestion(){
    [operandOne, operandTwo]=generateEq();
    answerMultiply = operandOne * operandTwo;
    displaymultiply(operandOne, operandTwo);
    displayOptions(answerMultiply);
}

/**
 * function to keep generating division question when clicked 
 * on any answer option. It generates more division questions
 */

function nextDivisionQuestion(){
    [operandOne, operandTwo]=generateEq();
    while (operandOne % operandTwo) {
        operandOne = Math.floor(Math.random() * 25) + 1;
        operandTwo = Math.floor(Math.random() * 25) + 1;
    }
    answerDivide = operandOne / operandTwo;
    displaydivide(operandOne, operandTwo);
    displayOptions(answerDivide);
}

/**
 * function to chcek whether the selected answer is right or wrong
 * and increment/decrement scores according to the user selection
 */

function checkAnswers(userSelectedAnswer){
    // if loop will execute if addition game is selected
    if (playAdditionCategory) {
        if (userSelectedAnswer == answerAdd) {
            correct_value = scoreCorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreIncorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;  
        }
        nextAdditionQuestion();
        
    //else if loop will execute when subtraction game type is selected

    } else if (playSubtractionCategory){
        if (userSelectedAnswer == answerSubtract) {
            correct_value = scoreCorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreIncorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
           
        }
        nextSubtractQuestion();

    //else if loop will execute when multiplication game type is selected

    } else if (playMultiplyCategory) {
        if (userSelectedAnswer == answerMultiply) {
            correct_value = scoreCorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreIncorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
           
        }
        nextMultiplyQuestion();

    //else if loop will execute when division game type is selected

    } else if (playDivideCategory) {
        if (userSelectedAnswer == answerDivide) {
            correct_value = scoreCorrect(parseInt(incrementScore.textContent));
            incrementScore.textContent = correct_value;
        } else {
            incorrect_value = scoreIncorrect(parseInt(decrementScore.textContent));
            decrementScore.textContent = incorrect_value;
           
        }
        nextDivisionQuestion()
    }
}

/**
 * functions to display game equation for al categories
 * (addition, subtraction,multiplication and division)
 */

function displayadd(valueOne, valueTwo) {
    assignOperationValuesAddMul(valueOne, valueTwo, '+');
   
}
function displaysubtract(valueOne, valueTwo) {
    assignOperationValuesSubDiv(valueOne,valueTwo,'-');

}
function displaymultiply(valueOne, valueTwo) {
    assignOperationValuesAddMul(valueOne, valueTwo, 'x');
}

function displaydivide(valueOne, valueTwo) {
    assignOperationValuesSubDiv(valueOne,valueTwo,'/');
}
/**
 * Function to create random numbers 
 * for addition and multiplication game  
 */
function assignOperationValuesAddMul(valueOne, valueTwo, operator){
    document.getElementById('num1').textContent = valueOne;
    document.getElementById('num2').textContent = valueTwo;
    document.getElementById('operand').textContent = operator;

}
/**
 * Function to create random numbers 
 * for division and subtraction game  and making sure the answer is not in minus for subtraction and
 * in decimal for the division game
 */
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


