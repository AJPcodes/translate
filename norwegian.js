///adding Norwegian


var languages = document.getElementById('languages_list');
languages.innerHTML += '<option value="Norwegian">';

var Greet = (function(greet) {

	var norwegianLexicon = {

			Merry: "God",
			Christmas: "Jul",
			and: "og",
			a: "ei",
			Happy: "godt",
			New: "nytt",
			Year: "år"

	};

  greet.translateToNorwegian = function(input) {

  		norwegianString = "";

  		for(i = 0 ; i < input.length ; i++){

  		norwegianString += ( norwegianLexicon[input[i]] || input[i] ) + " ";


  		output = document.getElementById('output');

  		output.innerHTML = "<p>" + norwegianString + "</p>";
  	}

  	var msg = new SpeechSynthesisUtterance(norwegianString);
msg.lang = "no";
window.speechSynthesis.speak(msg);


  };


  return greet;

})(Greet);

