//Guessing Game
//Guess a number from 1 to 5
//Generate a random number between 1 to 5
//If the guess number matches random number; then show message won else lost 
//Run the Game for 5 times
//show the number of wons and lost


    var numOfWon =0;
    var numOfLost=0; 

for(var i=1; i<=5; i++){
    var guessNumber= parseInt(prompt("Enter a number : "));
    var randomNumber = Math.floor(Math.random()*5)+1;
    
    if(guessNumber==randomNumber){
        console.log("You have won ");
        numOfWon++;
    }
    else{
        console.log("You have lost. Random number was "+ randomNumber);
        numOfLost++;
    }
    
}

