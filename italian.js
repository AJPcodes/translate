var Greet = (function(greet) {
var italianMessage = "";  
    var italianLexicon = {
      Merry: "Allegro",
      Christmas: "Natale",
      and: "e",
      a: "un",
      Happy: "Contento",
      New: "Nuovo",
      Year: "Anno",
      Everyone: "Tutti"

    };    
     
  greet.translateItalian = function(input) {
    
    italianMessage = " ";

    for(i = 0 ; i < input.length ; i++){

    italianMessage += ( italianLexicon[input[i]] || input[i] ) + " ";

  output = document.getElementById('output');
  output.innerHTML = "<p>" + italianMessage + "</p>"; 

  console.log(italianMessage)

  };
var msg = new SpeechSynthesisUtterance(italianMessage);
msg.lang = "it";
window.speechSynthesis.speak(msg);

  };


  return greet;

})(Greet);