describe("getLyrics", function() {
  it("return the lyrics with the inputted number", function() {
    var output = "<p><font color='orange'>" + 8 + "</font> bottles of beer on the wall, <font color='orange'>" + 8 + "</font> bottles of beer. <br>Take one down and pass it around, <font color='orange'>" + 7 + "</font> bottles of beer on the wall.</p>";
    expect(getLyrics(8)).to.equal(output);
  });
});
