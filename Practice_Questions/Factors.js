var pr = prompt("Enter a number: ")

if (pr === null) {
    console.log("Cancelled")
}
else{
    var n = Number(pr)
    if (n > 0 && !isNaN(n)) {
        for(var i = 1; i <= Math.floor(n/2); i++){
            if(n % i === 0){
                console.log(i);
                
            }

        }
        console.log(n);
        
      } 
      else {
        console.log("Invalid input. Enter a positive number and greater than 0.");
      }
}