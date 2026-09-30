const numbers = document.querySelectorAll(".numbers") 
const operator = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const display = document.querySelector(".display")



function add(number1 , number2){
    return number1 + number2
}

function substract(number1,number2){
    return number1 - number2 
}

function multiply(number1, number2){
    return number1 * number2
}

function divide(number1,number2){
    return number1 / number2
}

function operate(operator, number1 , number2){
    if(operator == "+"){
        return add(number1,number2)
    }
    else if(operator == "-"){
        return substract(number1,number2)
    }
    else if(operator == "*"){
        return multiply(number1,number2)
    }
    else if(operator == "/"){
        if(number2 === 0) return "can't divide by zer0"
        return divide(number1,number2)
    }
    else{
        console.log("invalid enter")
    }
}
let calculation =false
function inputNumber(number){
  if(calculation === true){
    display.textContent = number
    calculation = false;
  }
  else if(display.textContent === "0"){
    display.textContent = number;
  }
  else
      display.textContent = display.textContent + number
}
numbers.forEach(button=>{
    button.addEventListener("click", (e)=>{
        inputNumber(e.target.textContent)   
    })
})

let firstNumber = 0;
let selectOperator = "";
let secondNumber = 0;


operator.forEach(button => {
    button.addEventListener("click", (e) => {

        if (calculation === true) {
            firstNumber = Number(display.textContent);
            selectOperator = e.target.textContent;
            display.textContent = "";
            calculation = false;
        }

        else if (display.textContent === "") {
            selectOperator = e.target.textContent;
        }

        else if (selectOperator !== "") {
            let result = operate(
                selectOperator,
                firstNumber,
                Number(display.textContent)
            );

            firstNumber = result;
            selectOperator = e.target.textContent;
            display.textContent = "";
        }

        else {
            firstNumber = Number(display.textContent);
            selectOperator = e.target.textContent;
            display.textContent = "";
        }

    });
});
equal.addEventListener("click", ()=>{

    if (selectOperator === "") {
        return;
    }
    else{
        secondNumber = Number(display.textContent);

        let result = operate(selectOperator, firstNumber, secondNumber);

        display.textContent = result;

        firstNumber = result;
        calculation = true;
    }
})
clear.addEventListener("click" ,()=>{
   display.textContent = "0"
   firstNumber = 0
   selectOperator = ""
   secondNumber = 0
   calculation = false;
})