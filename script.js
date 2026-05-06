const buttons = document.querySelector(".buttons");
const display = document.querySelector("#display");
let operator = null;
let num1 = "";
let num2 = ""; //default

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
            num2 = String(Number(display.value) * 0.01);
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
  display.value = value;
}
function decimal(){
    if (num2.includes(".")) return;
        num2 = num2 ? num2 + "." : "0.";
    display.value = num2;
}
function handleOperatorInput(first, second){
    if(num1 != "" && num2 != ""){
        calculate(first, second);
    }
    num1 = num2;
    num2 = "";
}
function calculate(first, second){
    let result;
    if(operator === null || first === "" || second === "") return;
    switch(operator){
        case "/":
            if(second === 0){
                display.value = "Error";
                reset();
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
    num2 = String(result);
    display.value = num2;
    num1 = "";
}