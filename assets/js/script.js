
let button1 = document.getElementById('addition');
    button1.addEventListener('click', function(){
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;
    answer= operand1+operand2

   displayadd(operand1, operand2)
   displayOptions(answer)
    })

let button2 = document.getElementById('subtract');
    button2.addEventListener('click', function(){
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;

   displaysubtract(operand1, operand2)
    })

let button3 = document.getElementById('multiply');
    button3.addEventListener('click', function(){
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;

   displaymultiply(operand1, operand2)
    })

let button4 = document.getElementById('divide');
    button4.addEventListener('click', function(){
    let operand1 = Math.floor(Math.random() * 10) + 1;
    let operand2 = Math.floor(Math.random() * 10) + 1;

   displaydivide(operand1, operand2)
    })    


function displayadd(a,b) {
    document.getElementById('num1').textContent = a
    document.getElementById('num2'). textContent = b
    document.getElementById('operand'). textContent = '+'
}

function displaysubtract(a,b) {
    document.getElementById('num1').textContent = a
    document.getElementById('num2'). textContent = b
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

function displayOptions(c){
    let option1= Math.floor(Math.random() * 100) + 1
    let option2= Math.floor(Math.random() * 100) + 1
    let option3= Math.floor(Math.random() * 100) + 1

    let normal= [option1, option2, option3, c]

    document.getElementById('option1').textContent = option1
    document.getElementById('option2'). textContent = option2
    document.getElementById('option3'). textContent = option3
    document.getElementById('option4').textContent = c


}