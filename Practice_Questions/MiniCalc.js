window.onload = function(){
    let num1 = prompt("Enter the first number: ");
    let num2 = prompt("Enter the second number: ");
    let operator = prompt("Enter the operator");

    num1 = Number(num1)
    num2 = Number(num2)

    if(isNaN(num1) || isNaN(num2)){
        alert("Invalid number input");
        return;
    }
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            if(num2 === 0){
                alert("Cannot divide by zero.")
                return
            }
            result = num1 / num2
            break;
    
        default:
            alert("Invalid operator. Use +, -, *, or /");
            return;
    }
    alert(`Result: ${num1} ${operator} ${num2} = ${result}`)
}