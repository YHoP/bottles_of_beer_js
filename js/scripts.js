var getLyrics = function (number){
  var lyrics = "<p><font color='orange'>" + number + "</font> bottles of beer on the wall, <font color='orange'>" + number + "</font> bottles of beer. <br>Take one down and pass it around, <font color='orange'>" + (number - 1) + "</font> bottles of beer on the wall.</p>";
  return lyrics;
};

var lastBottleLyrics = function (number){
  var lyrics = "<p><font color='orange'>1</font> bottle of beer on the wall, <font color='orange'>1</font> bottle of beer. <br>Take one down and pass it around, no more bottles of beer on the wall.</p><p><font color='green'>No more bottles of beer on the wall, no more bottles of beer.<br> Go to the store and buy some more, <font color='orange'>" + number + "</font> bottles of beer on the wall.</font></p>";
  return lyrics;
};


$(document).ready(function() {
  $("form#numberOfBottles").submit(function(event) {
    $(".lyrics").empty();
    var number = $("input#number").val();

    for (var i = number; i > 0; i --){
      if(i === 1){
        $(".lyrics").append(lastBottleLyrics(number));
      }else{
        $(".lyrics").append(getLyrics(i));
      }
    }

    event.preventDefault();
  });

}); // end of document
