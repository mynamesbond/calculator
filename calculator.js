//creating a function to execute calculus


//select all the buttons,containers and save them in variables
let buttonsNumbers = document.querySelectorAll('.num-buttons')
let displayValue = document.getElementById('history')
let operators = document.querySelectorAll('.operator')
let clear = document.getElementById('clear')
let reset = document.getElementById('reset')

let finalResult = document.getElementById('displayResult')
let equal = document.getElementById('equal')

let deleteButton = document.getElementById('delete')
let percent = document.getElementById('percentage')


//create a function that display the numbers when clicked and save them as inputs 
for (let i = 0; i < buttonsNumbers.length; i++){
    buttonsNumbers[i].addEventListener('click', displayNumber)
}
//initialize inputs

function displayNumber(event){
    
    let numbers =  event.target.textContent

    displayValue.textContent += numbers
}
 

//create a function that display the operation when clicked
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', displayOperation)
}
function displayOperation(event){
 //get the operation that was clicked on

    let operation = event.target.textContent
//add the operation to the display value
    displayValue.textContent += operation
}

//create a function to do calculation when the equal symbol is clicked

equal.addEventListener('click',giveResult)


function giveResult(){
    let result = Function('return '+ displayValue.textContent)();
    console.log(result)
    
    finalResult.textContent = result
}





//create a clear function that set the displayValue to zero
clear.addEventListener('click', Clear)

function Clear(){
    displayValue.textContent = ''
    finalResult.textContent = ''
}

//create a delete function that allows to delete input
deleteButton.addEventListener('click', delButton)
function delButton(){
    displayValue.textContent = displayValue.textContent.slice(0,-1)
}

percent.addEventListener('click',percentButton)

function percentButton(){

   let priorOp = displayValue.textContent;
   let resultP = eval(priorOp.replace(/%/g, '/100'))

   
   finalResult.textContent = resultP;
}























