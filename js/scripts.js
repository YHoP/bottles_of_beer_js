var getLyrics = function (number){
  var lyrics = "";
  for (var i = number; i > 1 ; i--){
    lyrics += "<p><font color='orange'>" + i + "</font> bottles of beer on the wall, <font color='red'>" + i + "</font> bottles of beer. <br> Take one down and pass it around, <font color='red'>" + (i - 1) + "</font> bottles of beer on the wall. </p>";
  }
  return lyrics;
};


$(document).ready(function() {
  $("form#numberOfBottles").submit(function(event) {
    var number = $("input#number").val();
    var lyrics = getLyrics(number);

    $(".lyrics").append(lyrics);
    $("#song").fadeIn();

    event.preventDefault();
  });

}); // end of document
