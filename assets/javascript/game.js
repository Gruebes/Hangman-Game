
// Show spaces equivelent to the length of word generated
// Allow user to select a letter from alphabet
// Check to see if that letter is in the array from the word we generated
// Take the result and diplay it to the user OR deduct a life from user
// Show lives remaining

window.onload = function() {

	var words = ["blue", "red", "green", "yellow", "orange", "brown", "black", "purple"];

	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
		't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// Generate a random word and store it
	word = words[Math.floor(Math.random() * words.length)];
	console.log(word);

	// // Show alphabet cloices on screen
	var buttons = function () {
		myButtons = document.getElementById('buttons');
		letters = document.createElement('ul');

		for (var i = 0; i < alphabet.length; i++) {
	      letters.id = 'alphabet';
	      list = document.createElement('li');
	      list.id = 'letter';
	      list.innerHTML = alphabet[i];

			myButtons.appendChild(letters);
			letters.appendChild(list);
		}
	}

	buttons();



}