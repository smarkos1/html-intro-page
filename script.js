function startGame(){

    const randomNumber = Math.floor(Math.random()*10)+1;

    const maxAttempts = 3;

    for(let i=1;i<=maxAttempts;i++){

        let guess = prompt("Attempt "+i+": Enter a number between 1 and 10");

        guess = Number(guess);

        if(guess === randomNumber){
            alert("Congratulations! You guessed the correct number!");
            return;
        }

        else if(guess > randomNumber){
            alert("Too high!");
        }

        else{
            alert("Too low!");
        }

    }

    alert("Game Over! The correct number was "+randomNumber);

}