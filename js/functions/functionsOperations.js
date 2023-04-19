const { resultPrimo, resultPar, resultImpar, previousOperationText, currentOperationText, currentOperation } = require("../graphicInterface");

// let newResultPar = resultPar.innerText;
// let newResultImpar = resultImpar.innerText;

const { updateScreen } = require('./functionsDisplay');

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


function sqrt(n) {
    return Math.sqrt(n);
}

function ptnc(b, e) {
    return Math.pow(b, e);
}

function isOdd(num) { //ver se é impar
   if(num % 2 !== 0) {
      newResultPar = "Não";
        resultPar.innerText = "Não";
       console.log(`${num} é ímpar`);
   } else {
       newResultPar = "Sim";
        resultPar.innerText = "Sim";
       console.log(`${num} é par`);
   }
  // retirar o innerText e fazer com o return
}
  
function isEven(num) { //ver se é ímpar
    if(num % 2 === 0) {
        newResultImpar = "Não";
        // resultImpar.innerText = "Não";
        console.log(`${num} é par`);
    } else{
        newResultImpar = "Sim";
        // resultImpar.innerText = "Sim";
        console.log(`${num} é ímpar`);
    }
  }

function isPrime(num) {
    if (num <= 1) {
      console.log(`${num} NÃO é primo`);
      resultPrimo.innerText = "Não";
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log(`${num} NÃO é primo`);
        resultPrimo.innerText = "Não";
        return false;
      }
    }
    console.log(`${num} é primo`);
    resultPrimo.innerText = "Sim";
    return true;
}

function processOperation(operation) {
    if (currentOperation === "" && operation !== "C") {
      if (previousOperationText.innerText !== "") {
        changeOperation(operation);
      }
      return;
    }
  
    let operationValue;
    let previous = +previousOperationText.innerText.split(" ")[0];
    let current = +currentOperationText.innerText;
  
    switch (operation) {
      case "+":
        operationValue = sum(previous, current);
        updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = subtract(previous, current);
        updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = multiply(previous, current);
        updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = divide(previous, current);
        updateScreen(operationValue, operation, current, previous);
        break;
      case "!":
        operationValue = factorial(current);
        updateScreen(operationValue, operation, current, previous);
        break;
      case "√":
          operationValue = sqrt(current);
          updateScreen(operationValue, operation, current, previous);
          break;
      case "^":
          operationValue = ptnc(previous, current);
          updateScreen(operationValue, operation, current, previous);
          break;
      case "DEL":
        processDelOperator();
        break;
      case "CE":
        processClearCurrentOperator();
        break;
      case "C": updateScreen, processOperation 
        processClearOperator();
        break;
      case "=":
        processEqualOperator();
        break;
      case "?":
          result = isOdd(currentOperationText.innerText);
          result = isEven(currentOperationText.innerText);
          result = isPrime(currentOperationText.innerText);
      break;
      default:
        return;
    }
}

function changeOperation(operation) {
  const mathOperations = ["*", "-", "+", "/", "!", "√", "^", "?"];

  if (!mathOperations.includes(operation)) {
    return;
  }

  previousOperationText.innerText =
    previousOperationText.innerText.slice(0, -1) + operation;

    updateScreen();
}
  
module.exports = { sum, subtract, multiply, divide, ptnc, factorial, sqrt, isEven, isOdd, isPrime, processOperation, changeOperation };