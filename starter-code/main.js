var cards =[];

var cardsInPlay=[];

var gameBoard = document.getElementById('game-board');

var matchCount = 0;

var difficulty = parseInt(prompt("On a scale of 1 - 3(1 being the hardest), what difficulty level would you like?"));

function levelOfDifficulty() {

	if(difficulty === 1){
		cards.push("queen","queen","king","king");
	}

	else if(difficulty === 2){
		cards.push("queen", "king", "jack", "queen","king","jack");

	}

	else if(difficulty === 3){
		cards.push("queen", "king", "jack", "queen","king","jack","joker","joker");	
	}

	else{
		alert("Please key in either 1, 2 or 3!");
		location.reload(true);
	}
}

levelOfDifficulty();

function createBoard(){
	for(i=0;i<cards.length;i++){
		var newCard = document.createElement('div');
		newCard.className='card';
		newCard.setAttribute('data-card',cards[i]);	
		newCard.addEventListener('click',isTwoCards);
		gameBoard.appendChild(newCard);
	}
}

function isMatch(cardsToMatch){
	if(cardsToMatch[0]===cardsToMatch[1]){
		alert("You found a match!");
		cardsInPlay=[];
		matchCount++; 
		/* matchCount is count of pairs of cards matched*/
		if(matchCount === (difficulty+1)){
			var matchComplete = prompt("Congrats! You have completed this puzzle at difficult level "+ difficulty + "\n (Type 'yes' to try another round)");
			if(matchComplete === "yes"){
				location.reload(true);
		  	}
			else {alert("Thanks for playing!")
			}
			/***Question to instructor: location.reload() seems shorter in code. Are there
			drawbacks of using this vs changing innerHTML = '' ?*/
		}
	}
	else{
		alert("Sorry, try again!");
		cardsInPlay=[];
		matchCount =0;
		/***Question to instructor: Why does setting matchCount = 0 not force matchCount to
		stay permanently at value of 0, rendering matchCount++ on line 49 useless?
		To compare, had I set line 13 if(difficulty=1)... instead of if(difficulty===1), 
		line 9, var difficult = parseInt(prompt(....)) would be rendered useless.*/

		// console.log(matchCount);
		var allCards = document.getElementsByClassName('card'); 
		//document.getElementsByClassName('Card') gives an array of the 4 cards.
		//Need to loop through each of the 4 array cards and run innerHTML = '' as per below
		for(var i = 0; i < allCards.length; i++) { 
		allCards[i].innerHTML='';
		}
		//Alternatively, can use location.reload(false); to refresh the whole page
	}
}

function afterTimeout() {
    isMatch(cardsInPlay);
}

function isTwoCards(){
	var cardType = this.getAttribute('data-card');

	cardsInPlay.push(cardType);

	if(cardType==="queen"){
		this.innerHTML= '<img src= "QueenCard.png" alt= "Queen Card" />';
	}
	else if(cardType ==="king"){
		this.innerHTML= '<img src= "KingCard.png" alt= "King Card" />';
	}

	else if(cardType ==="jack"){
		this.innerHTML= '<img src= "JackCard.png" alt= "Jack Card" />';
	}

	else if(cardType ==="joker"){
		this.innerHTML= '<img src= "JokerCard.png" alt= "Joker Card" />';
	}

	if(cardsInPlay.length===2){
		setTimeout(afterTimeout,200);
	}
}

createBoard();
