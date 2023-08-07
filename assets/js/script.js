/**
 * Addition game loop, creates two random number 
 * with 4 random options to choose from 
 */
let button1 = document.getElementById('addition');
    button1.addEventListener('click', function(){
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
    answer = operand1+operand2

   displayadd(operand1, operand2)
   displayOptions(answer)

   let result1 = document.getElementById('option1')
   result1.addEventListener('click', function(){
    sAnswer=result1.textContent
    if (sAnswer == answer){
        alert('right');
    } else {
        result1.style.backgroundColor = 'red';
    }
    })
    let result2 = document.getElementById('option2')
   result2.addEventListener('click', function(){
    sAnswer=result2.textContent
    if (sAnswer == answer){
        alert('right');
    } else {
        result2.style.backgroundColor = 'red';
    }
    })

    let result3 = document.getElementById('option3')
   result3.addEventListener('click', function(){
    sAnswer=result3.textContent
    if (sAnswer == answer){
        alert('right');
    } else {
        result3.style.backgroundColor = 'red';
    }
    })

    let result4 = document.getElementById('option4')
   result4.addEventListener('click', function(){
    sAnswer=result4.textContent
    if (sAnswer == answer){
        alert('right');
    } else {
        result4.style.backgroundColor = 'red';
    }
    })


})

 /**
 * Subtraction game loop, creates two random number 
 * with 4 random options to choose from 
 */   

let button2 = document.getElementById('subtract');
    button2.addEventListener('click', function(){
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
    answer1 = operand1 - operand2

   displaysubtract(operand1, operand2)
   displayOptions(answer1)

   let result1 = document.getElementById('option1')
   result1.addEventListener('click', function(){
    sAnswer=result1.textContent
    if (sAnswer == answer1){
        alert(right);
    } else {
        alert('wrong!')
    }
    })
    let result2 = document.getElementById('option2')
   result2.addEventListener('click', function(){
    sAnswer=result2.textContent
    if (sAnswer == answer1){
        alert('right');
    } else {
        alert('wrong!')
    }
    })

    let result3 = document.getElementById('option3')
   result3.addEventListener('click', function(){
    sAnswer=result3.textContent
    if (sAnswer == answer1){
        alert('right');
    } else {
        result3.style.backgroundColor = 'red';
    }
    })

    let result4 = document.getElementById('option4')
   result4.addEventListener('click', function(){
    sAnswer=result4.textContent
    if (sAnswer == answer1){
        alert('right');
    } else {
        alert('wrong!')
    }
    })


})

/**
 * Multiplication game loop, creates two random number 
 * with 4 random options to choose from 
 */

let button3 = document.getElementById('multiply');
    button3.addEventListener('click', function(){
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
    answer2 = operand1 * operand2

   displaymultiply(operand1, operand2)
   displayOptions(answer2)

   let result1 = document.getElementById('option1')
   result1.addEventListener('click', function(){
    sAnswer=result1.textContent
    if (sAnswer == answer2){
        alert('right');
    } else {
        alert('wrong!')
    }
    })
    let result2 = document.getElementById('option2')
   result2.addEventListener('click', function(){
    sAnswer=result2.textContent
    if (sAnswer == answer2){
        alert('right');
    } else {
        alert('wrong!')
    }
    })

    let result3 = document.getElementById('option3')
   result3.addEventListener('click', function(){
    sAnswer=result3.textContent
    if (sAnswer == answer2){
        alert('right');
    } else {
        result3.style.backgroundColor = 'red';
    }
    })

    let result4 = document.getElementById('option4')
   result4.addEventListener('click', function(){
    sAnswer=result4.textContent
    if (sAnswer == answer2){
        alert('right');
    } else {
        alert('wrong!')
    }
    })


})

/**
 * Division game loop, creates two random number 
 * with 4 random options to choose from 
 */

let button4 = document.getElementById('divide');
    button4.addEventListener('click', function(){
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
    answer3 = operand1 / operand2

   displaydivide(operand1, operand2)
   displayOptions(answer3)

   let result1 = document.getElementById('option1')
   result1.addEventListener('click', function(){
    sAnswer=result1.textContent
    if (sAnswer == answer3){
        alert('right');
    } else {
        alert('wrong!')
    }
    })
    let result2 = document.getElementById('option2')
   result2.addEventListener('click', function(){
    sAnswer=result2.textContent
    if (sAnswer == answer3){
        alert('right');
    } else {
        alert('wrong!')
    }
    })

    let result3 = document.getElementById('option3')
   result3.addEventListener('click', function(){
    sAnswer=result3.textContent
    if (sAnswer == answer3){
        alert('right');
    } else {
        result3.style.backgroundColor = 'red';
    }
    })

    let result4 = document.getElementById('option4')
   result4.addEventListener('click', function(){
    sAnswer=result4.textContent
    if (sAnswer == answer3){
        alert('right');
    } else {
        alert('wrong!')
    }
    })


})

       

 //Function to check answer

function answer() {

 let num1 = parseInt(document.getElementById('num1').innerHTML);
 let num2 = parseInt(document.getElementById('num2').innerHTML);
 let sign = document.getElementById('operand').innerHTML

 if (sign === '+') {
    return [num1 + num2, 'addition'];
 } else if (sign === '-') {
    return [num1 + num2, 'subtract'];
 } else if (sign === 'x') {
    return [num1 + num2, 'multiply'];
 } else if (sign === '/') {
    return [num1 + num2, 'addition'];
 } else {
    alert(`Unknown sign ${sign}`);
    throw `Unknwon operator ${sign}. Aborting!`;
 }
}

       
/**
 * Function to display game type 
 * after the user has selected 
 */

function displayadd(a,b) {
    document.getElementById('num1').textContent = a
    document.getElementById('num2'). textContent = b
    document.getElementById('operand'). textContent = '+'
}

function displaysubtract(a,b) {
    document.getElementById('num1').textContent = a > b ? a:b;
    document.getElementById('num2'). textContent = a > b ? b:a;
    document.getElementById('operand'). textContent = '-'
}

function displaymultiply(a,b) {
    document.getElementById('num1').textContent = a
    document.getElementById('num2'). textContent = b
    document.getElementById('operand'). textContent = 'x'
}

function displaydivide(a,b) {
    document.getElementById('num1').textContent = a
    document.getElementById('num2'). textContent = b
    document.getElementById('operand'). textContent = '/'
}


/**
 * Display options to choose from by creating 4 random numbers 
 * and shuffling them through splice
 */

function displayOptions(c){
    
    let option1= Math.floor(Math.random() * 100) + 1
    let option2= Math.floor(Math.random() * 100) + 1
    let option3= Math.floor(Math.random() * 100) + 1

    let normal= [option1, option2, option3, c]
    let shuffled=[];

    for (i=normal.length-1;i>=0;i--){

        j=Math.floor(Math.random()*(i+1))
        shuffled.push(normal.splice(j,1)[0])
    }

    document.getElementById('option1').textContent = shuffled[0]
    document.getElementById('option2'). textContent = shuffled[1]
    document.getElementById('option3'). textContent = shuffled[2]
    document.getElementById('option4').textContent = shuffled[3]



}

