var Greet = (function(greet) {
var frenchMessage = "";  
    var frenchLexicon = {
      Merry: "Joyeux",
      Christmas: "Nöel",
      and: "et",
      a: "un",
      Happy: "Content",
      New: "Nouveau",
      Year: "An",
      Everyone: "Tout le monde"

    }    
     
  greet.translateFrench = function(input) {
    
    frenchMessage = " ";

    for(i = 0 ; i < input.length ; i++){

    frenchMessage += ( frenchLexicon[input[i]] || input[i] ) + " ";

  output = document.getElementById('output');
  output.innerHTML = "<p>" + frenchMessage + "</p>"; 
  };


  };


  return greet;

})(Greet);