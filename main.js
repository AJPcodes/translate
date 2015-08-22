var Greet = (function() {



  return {

    getInput: function() {
      var inputText = document.getElementById('englishText').value;
      return inputText;
    },

    translate: function() {

        var inputText = document.getElementById('englishText').value;
        var language = document.getElementById('languages').value;

        console.log('You need to translate ' + inputText + ' to ' + language);


    }

  };
})();


document.getElementById('translate').addEventListener("click", Greet.translate);

