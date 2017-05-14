// every time game starts set random values for each diamond between
// 1 and 12

// set holdsRandomNumber variable
// set playerScore var

// set random number for the user to see
// this random number will be the number to guess/compare
// with the result that the user is going to get pressing diamonds

// each time diamond is pressed add that value to the
// player score variable

// compare if the playerScore is eqal or greater to holdsRandomNumber

// if the playerScore is equal to holdsRandomNumber wins++
// if the playerScore is greater then holdsRandomNumber losses++
// reset all variables start the game over by calling startGame() function


// reset playerScore
// reset holdsRandomNumber
// start game from the begining keeping wins and losses result active

$(document).ready(function () {


	// the game will only start from 0 wins/lose score when the page is 
	// loaded from the beginning. 
	var red = 0;
	var blue = 0;
	var yellow = 0;
	var green = 0;
	var playerScoreNumber = 0;
	var numberToGuess = 0;
	var win = 0;
	var lose = 0; 

	// once you get to this line, call the function and start the game
	// from the begining but keeping the current win/lose score. 
    startGame();

	function startGame() {

		red = 1 + Math.floor(Math.random() * 12);
		blue = 1 + Math.floor(Math.random() * 12);
		yellow = 1 + Math.floor(Math.random() * 12);
		green = 1 + Math.floor(Math.random() * 12);
		playerScoreNumber = 0;
		

		console.log(red, blue, yellow, green);

		numberToGuess = Math.floor(Math.random() * 102) + 19;
		console.log(numberToGuess);

		$("#holdsRandomNumber").text(numberToGuess);
		$("#playerScore").text(playerScoreNumber);
		$("#winsScore").text(win);
		$("#lossesScore").text(lose);
	}




		// when you click red button aka red diamond
		$("#redDiamond").on("click", function() {
			// alert("working");
			playerScoreNumber = playerScoreNumber + red;
			$("#playerScore").text(playerScoreNumber);

	 			if (playerScoreNumber === numberToGuess) {
			      alert("You win!");
			      win++;
			      startGame();
			    }

			    else if (playerScoreNumber >= numberToGuess) {
			      alert("You lose!!");
			      lose++;
			      startGame();
			    }
		});




		$("#blueDiamond").on("click", function() {
			// alert("working");
			playerScoreNumber = playerScoreNumber + blue;
			$("#playerScore").text(playerScoreNumber);

			 	if (playerScoreNumber === numberToGuess) {
					alert("You win!");
				    win++;
					startGame();
				}

				else if (playerScoreNumber >= numberToGuess) {
					alert("You lose!!");
					lose++;
					startGame();
				}
		});





		$("#yellowDiamond").on("click", function() {
			// alert("working");
			playerScoreNumber = playerScoreNumber + yellow;
			$("#playerScore").text(playerScoreNumber);
		 		if (playerScoreNumber === numberToGuess) {
				    alert("You win!");
				    win++;
				    startGame();
				    }

				    else if (playerScoreNumber >= numberToGuess) {
				    alert("You lose!!");
				    lose++;
				    startGame();
				    }
		});





		$("#greenDiamond").on("click", function() {
			// alert("working");
			playerScoreNumber = playerScoreNumber + green;
			$("#playerScore").text(playerScoreNumber);

 			if (playerScoreNumber === numberToGuess) {
		      alert("You win!");
		      win++;
		      startGame();
		    }

		    else if (playerScoreNumber >= numberToGuess) {
		      alert("You lose!!");
		      lose++;
		      startGame();
		    }
		});

});