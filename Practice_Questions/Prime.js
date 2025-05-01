var pr = prompt("Enter a number: ");

if (pr === null) {
    console.log("Cancelled");
} else {
    var n = Number(pr);
    if (n > 0 && !isNaN(n)) {
        console.log(isPrime(n));
    } else {
        console.log("Invalid input. Enter a positive number and greater than 0.");
    }
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}
