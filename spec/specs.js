describe("getLyrics", function() {
  it("return the lyrics with the inputted number", function() {
    var output = "<p><font color='orange'>" + 8 + "</font> bottles of beer on the wall, <font color='orange'>" + 8 + "</font> bottles of beer. <br>Take one down and pass it around, <font color='orange'>" + 7 + "</font> bottles of beer on the wall.</p>";
    expect(getLyrics(8)).to.equal(output);
  });
});

describe("lastBottleLyrics", function() {
  it("return the last bottle lyrics with the inputted number", function() {
    var output = "<p><font color='orange'>1</font> bottle of beer on the wall, <font color='orange'>1</font> bottle of beer. <br>Take one down and pass it around, no more bottles of beer on the wall.</p><p><font color='green'>No more bottles of beer on the wall, no more bottles of beer.<br> Go to the store and buy some more, <font color='orange'>" + 5 + "</font> bottles of beer on the wall.</font></p>";
    expect(lastBottleLyrics(5)).to.equal(output);
  });
});
