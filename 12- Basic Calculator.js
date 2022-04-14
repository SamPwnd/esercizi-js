function calculator(firstNum, operator, secondNum){
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}


console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));