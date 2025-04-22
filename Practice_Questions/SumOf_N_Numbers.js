//Sum of N natural numbers

var pr = prompt("Enter the number till you want the summation of natural numbers: ")

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
            var sum = 0;
            for (var i = 1; i <= n; i++) {
                sum = sum + i;
            }
            console.log(sum);


        }
        else {
            console.log("The number should be positive and more than 0");

        }
    }
}

