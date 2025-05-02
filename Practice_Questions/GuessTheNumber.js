window.onload = function () {
    let random = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 5;

    function askGuess() {
        if (attempts >= maxAttempts) {
            alert(`You've used all ${maxAttempts} attempts! The number was ${random}.`);
            return;
        }

        let guess = prompt(`Attempt ${attempts + 1}/${maxAttempts}:\nGuess the number between 1 and 100:`);

        if (guess === null) {
            alert("Game cancelled.");
            return;
        }

        guess = Number(guess);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Invalid input! Enter a number between 1 and 100.");
            askGuess(); 
            return;
        }

        attempts++;

        if (guess > random) {
            alert("Too high! Try again.");
            askGuess();
        } else if (guess < random) {
            alert("Too low! Try again.");
            askGuess();
        } else {
            alert(`🎉 Congrats! You guessed it right in ${attempts} attempt(s). The number was ${random}`);
            return;
        }
    }

    askGuess(); 
};
