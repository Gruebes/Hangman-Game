
// Allow user to select a letter from alphabet
// Check to see if that letter is in the array from the word we generated
// Take the result and diplay it to the user OR deduct a life from user
// Show lives remaining

window.onload = function() {


	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
		't', 'u', 'v', 'w', 'x', 'y', 'z'];


	// // Show alphabet cloices on screen
	var buttons = function () {
		myButtons = document.querySelector('#buttons');
		letters = document.createElement('ul');

		for (var i = 0; i < alphabet.length; i++) {
			letters.id = 'alphabet';
			list = document.createElement('li');
			list.id = 'letter';
			list.innerHTML = alphabet[i];
			lookUp();


			myButtons.appendChild(letters);
			letters.appendChild(list);
		}
	}


	// Show spaces equivelent to the length of word generated
	blanks = function () {
		wordHolder = document.querySelector('#holder');
		correct = document.createElement('ul');

		for (var i = 0; i < word.length; i++) {
			correct.id = 'my-word' ;
			geuss = document.createElement('li');
			geuss.class = 'guess' ;
			geuss.innerHTML = '_'

			guesses.push(geuss);
			wordHolder.appendChild(correct);
			correct.appendChild(geuss);		
		}
	}




	// OnClick Check
	lookUp = function () {
		list.onclick = function () {
			var guess = (this.innerHTML);

			console.log(guess);

			for(var i = 0; i < word.length; i++){
				if(word[i] === guess) {
					guesses[i].innerHTML = guess;
				}

			}
		}
	}


	init = function () {

		var words = ["blue", "red", "green", "yellow", "orange", "brown", "black", "purple"];

		// Generate a random word and store it
		word = words[Math.floor(Math.random() * words.length)];
		console.log(word);

		guesses = [];

		blanks();
		buttons();
	}

	init();


}