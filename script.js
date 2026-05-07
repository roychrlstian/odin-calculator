const buttons = document.querySelector(".buttons");
const display = document.querySelector("#display");
let operator = null;
let num1 = "";
let num2 = ""; //default
let lastOperand = null;
let justPressedEquals = false;

buttons.addEventListener("click", e => {
    if (!e.target.matches("button")) return;

    if (e.target.classList.contains("number")) {
        num2 += e.target.textContent;
        display.value = num2;
    } else {
        handleOperator(e);
    }
});

function handleOperator(e){
    let first = Number(num1);
    let second = Number(num2);
    if(e.target.classList.contains("clear")){
        reset();
        return;
    }else if(e.target.classList.contains("percent")){
        if(display.value !== ""){
            const percentResult = Number(display.value) * 0.01;
            if(!Number.isFinite(percentResult) || Number.isNaN(percentResult)){
                handleError("Invalid percent value");
                return;
            }
            num2 = String(percentResult);
            display.value = num2;
        }
        return;
    }else if(e.target.classList.contains("backspace")){
        num2 = display.value = display.value.slice(0, -1);
        return;
    }else if(e.target.classList.contains("divide")){
        handleOperatorInput(first, second);
        operator = "/"
        return;
    }else if(e.target.classList.contains("multiply")){
        handleOperatorInput(first, second);
        operator = "*"
        return;
    }else if(e.target.classList.contains("subtract")){
        handleOperatorInput(first, second);
        operator = "-"
        return;
    }else if(e.target.classList.contains("add")){
        handleOperatorInput(first, second);
        operator = "+"
        return;
    }else if(e.target.classList.contains("decimal")){
        decimal();
        return;
    }else if(e.target.classList.contains("equals")){
        calculate(first, second);
        return;
    }
}

function reset(value = "") {
    num1 = num2 = operator = "";
    lastOperand = null;
    justPressedEquals = false;
    display.value = value;
}
function decimal(){
    if (num2.includes(".")) return;
        num2 = num2 ? num2 + "." : "0.";
    display.value = num2;
}
function handleOperatorInput(first, second){
    if(justPressedEquals) {
        justPressedEquals = false;
        num2 = "";
        return;
    }
    if(num1 != "" && num2 != ""){
        calculate(first, second);
    }
    num1 = num2 || num1;
    num2 = "";
}
function calculate(first, second){
    let result;
    if(operator === null) return;
    
    if(num2 === "" && lastOperand !== null) {
        first = Number(display.value);
        second = lastOperand;
    } else if(num2 === "" && lastOperand === null) {
        return;
    }
    
    switch(operator){
        case "/":
            if(second === 0){
                handleError("Cannot divide by zero");
                return;
            }
            result = first / second;
            break;
        case "*":
            result = first * second;
            break;
        case "-":
            result = first - second;
            break;
        case "+":
            result = first + second;
            break;
    }

    if(!Number.isFinite(result) || Number.isNaN(result)){
        handleError("Invalid calculation result");
        return;
    }
    
    lastOperand = second;
    num1 = String(result);
    display.value = num1;
    num2 = "";
    justPressedEquals = true;
}

function handleError(message) {
    alert(message);
    reset("Error");
}