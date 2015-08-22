console.log('German JS file linked.');


var Greet = (function(greet) {

	var germanLexicon = {

			Merry: "Frohe",
			Christmas: "Weihnachten",
			and: "und",
			a: "ein",
			Happy: "glückliches",
			New: "neues",
			Year: "Jahr!"

	};

  greet.translateToGerman = function(input) {

  		germanString = "";

  		for(i = 0 ; i < input.length ; i++){

  		germanString += ( germanLexicon[input[i]] || input[i] ) + " ";


  		output = document.getElementById('output');

  		output.innerHTML = germanString;
  	}

  };


  return greet;

})(Greet);