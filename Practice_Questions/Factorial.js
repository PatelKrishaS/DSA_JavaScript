//Sum of N natural numbers

var pr = prompt("Enter the number you want factorial of: ")

if (pr === null) {
    console.log("Cancelled")
}
else {
    var n = Number(pr)

    if (isNaN(n)) {
        console.log("Invalid Input");

    }
    else {
        if (n > 0) {
            var fact = 1;
            for (var i = 1; i <= n; i++) {
                fact = fact * i;
            }
            console.log(fact);


        }
        else {
            console.log("The number should be positive and more than 0");

        }
    }
}

