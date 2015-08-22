var Greet = (function() {



  return {

    getInput: function() {
      var inputText = document.getElementById('englishText').value;
      return inputText;
    },

    translate: function() {

        var inputText = document.getElementById('englishText').value;
        var language = document.getElementById('languages').value;

        var wordsArray = inputText.split(" ");

        console.log('You need to translate ' + inputText + ' to ' + language);

        console.log(wordsArray);

        if (wordsArray.length > 0 && language == 'German') {
          Greet.translateToGerman(wordsArray);
        };

        if (wordsArray.length > 0 && language == 'French') {
          Greet.translateFrench(wordsArray);
        }
    }

  };
})();


document.getElementById('translate').addEventListener("click", Greet.translate);

