window.onload = function() {

	// letters to input in letters list
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
		't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var words = ["blue", "red", "green", "yellow", "orange", "brown"
		, "black", "purple", "white", "teal", "grey", "maroon", "pink"
		, "coral"];

	var word = '';
	var guess = '';

    var lives ;

    function initializeGame() {

		// Generate a random word and store it
		word = words[Math.floor(Math.random() * words.length)];
		console.log(word);
		initializeButtons();

		guesses = [];
	    lives = 10;
	    correct = 0;

		initializeBlanks();
		comments();


		$('.char').on('click', function() {
				
				var guess = $(this).text();
				guesses.push(guess);

				for(var i = 0; i < word.length; i++) {
					if(word[i] === guess) {
						$('.guess' + [i]).html(guess);
						correct += 1;
					}
				}

				var life = (word.indexOf(guess));
				if (life === -1) {
					lives -=1;
					comments();
				} else {
						comments();
				}

				$(this).attr("id", "clicked");
		});
	}

	initializeGame();

	// // Show alphabet cloices on screen
	function initializeButtons() {
		$('#buttons').append($('<ul>').addClass('alphabet'));

		for(var i = 0; i < alphabet.length; i++) {
			$('.alphabet').append(($('<li>').addClass('char')).append(alphabet[i]));
		}
	}

	// Show spaces equivelent to the length of word generated
	 function initializeBlanks() {
		$('#holder').append($('<ul>').addClass('my-word'));
    
		for (var i = 0; i < word.length; i++) {
			$('.my-word').append(($('<li>').addClass('guess' + [i])).append('_'));

		}
	}

	// Show lives
    function comments() {
    $('#mylives').html('You Have <strong>' + lives + '</strong> Lives Remaining ');
    if (lives < 1) {
		$('#mylives').html('Game Over');

		for(var i = 0; i < word.length; i++) {
			$('.guess' + [i]).html(word[i]);
		}
    }

    if (correct >= word.length) {
        $('#mylives').addClass('strongtext').html('You Win!');
	}
	}


	// Reset
	$( "button" ).click(function() {
    $('#holder').empty();
    $('#buttons').empty();

    initializeGame();
  })
}
