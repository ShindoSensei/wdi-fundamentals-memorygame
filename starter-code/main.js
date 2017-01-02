/* Card Variables */

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardTwo === cardFour) {
	alert("You found a match!");
}

else {alert("Sorry, try again.");
}

if(cardOne === cardTwo) {
	alert("You found a match!");
}

if (cardThree === cardFour){
	alert("You found a match!");
}
*/


var gameBoard = document.getElementById('game-board');

function createCards(){
	for(i=0;i<4;i++){
		var newCard = document.createElement('div');
		newCard.className='card';
		gameBoard.appendChild(newCard);
	}       
}

createCards();