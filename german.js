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

  		console.log("Translating to German")
  		console.log(input);
  		output = document.getElementById('output');

  };


  return greet;

})(Greet);