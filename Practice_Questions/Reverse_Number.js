
var pr = prompt("Enter the number: ")

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
            var rev = 0;
            while(n > 0){
                rem = n%10;
                rev = rev*10 + rem;
                n = Math.floor(n/10)
            }
            console.log(rev);


        }
        else {
            console.log("The number should be positive and more than 0");

        }
    }
}

