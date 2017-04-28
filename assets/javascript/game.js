// Allow user to select a letter from alphabet
// Check to see if that letter is in the array from the word we generated
// Take the result and diplay it to the user OR deduct a life from user
// Show lives remaining

window.onload = function() {

	// letters to input in letters list
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
		't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var words = ["blue", "red", "green", "yellow", "orange", "brown", "black", "purple"];
	var word = '';
	var guess = '';

    var lives ;   // Lives
    var showLives = document.getElementById("mylives");

    function InitializeGame() {

		// Generate a random word and store it
		word = words[Math.floor(Math.random() * words.length)];
		console.log(word);
		InitializeButtons();

		guesses = [];
	    lives = 10;
	    console.log(lives);
	    correct = 0;

		InitializeBlanks();
		comments();

	}

	InitializeGame();

	$('.char').on('click', function() {
			
			var guess = $(this).text();

			console.log('Guess: '+guess);

			guesses.push(guess);


			for(var i = 0; i < word.length; i++) {
				if(word[i] === guess) {
					$('.guess' + [i]).html(guess);
					correct += 1;


					// console.log('correct: '+correct);
				}
			}


			var life = (word.indexOf(guess));
			if (life === -1) {
				lives -=1;
				comments();
			} else {
					comments();
			}

			console.log('life: '+life);
			console.log('lives: '+lives);
			console.log('correct: '+correct);
			console.log('Guesses: '+guesses);
			console.log('__________');
	});

	// // Show alphabet cloices on screen
	function InitializeButtons() {

		$('#buttons').append($('<ul>').addClass('alphabet'));

		for(var i = 0; i < alphabet.length; i++) {
			$('.alphabet').append(($('<li>').addClass('char')).append(alphabet[i]));

			// lookUp();
		}
	}

	// Show spaces equivelent to the length of word generated
	 function InitializeBlanks() {
		$('#holder').append($('<ul>').addClass('my-word'));
    
		for (var i = 0; i < word.length; i++) {
			$('.my-word').append(($('<li>').addClass('guess' + [i])).append('_'));

		}
	}

	// Show lives
    function comments() {
    showLives.innerHTML =  lives + " Lives Remaining ";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    if (correct >= word.length) {
        showLives.innerHTML = "You Win!";
      }
  }


	// Reset
 	document.getElementById('reset').onclick = function() {
		// correct.parentNode.removeChild(correct);
		// letters.parentNode.removeChild(letters);

    // $('#holder').removeClass('my-word');
    // $('#my-word').removeClass('div');

    // .empty();

    InitializeGame();
  }
}
