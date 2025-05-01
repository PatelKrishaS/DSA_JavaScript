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
            var original = n;
            while(n > 0){
                var rem = n % 10;
                var fact = 1;
                for(var i = 1; i <= rem; i++){
                    fact = fact * i;
                }
                sum = sum + fact;
                n = Math.floor(n/10)
            }
            // console.log(sum);
            if(original === sum){
                console.log("It is a strong number");
            } else{
                console.log("It is not a strong number");
                
            }


        }
        else {
            console.log("The number should be positive and more than 0");

        }
    }
}

