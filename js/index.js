console.log("Making A Mini game");

var myMove = prompt("Choose rock, paper or scissors?");

var computerMove = Math.random();
  if (computerMove < 0.29) {
	computerMove = "rock";
} else if(computerMove <= 0.45) {
	computerMove = "paper";
  } else {
	computerMove = "scissors";
  }

var compare = function(move1,move2) {
    if (move1 == move2) {
        return "It's a tie!, Play again." ;
    }
    else if (move1 == "rock") {
        if (move2 == "scissors") {
            return "rock wins, You beat the computer";
        }
        else {
            return "paper wins, The computer wins.";}
    }
    else if (move1 == "paper") {
        if (move2 == "rock") {
            return "paper wins, You win!";
        }
        else {
            return "scissors wins, You lost.";}
    }
    else if (move1 == "scissors") {
        if (move2 == "rock") {
            return "rock wins, Computer wins.";
        }
        else {
            return "scissors win, You win!"; }
    }
    }
   alert("Computer chose: " + computerMove);
   alert(compare(myMove,computerMove));

   for(var i = 0; i == 5; i++){
     setTimeout(
       (function(value){
       return function(){
         console.log(value);
       }
     })(i)
     , (i == 5) );
   }
