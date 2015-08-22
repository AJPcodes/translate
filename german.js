console.log('German JS file linked.');


var Greet = (function(greet) {

  greet.translateToGerman = function(input) {
    console.log('Tried to Tanslate to German');
  };


  return greet;

})(Greet);