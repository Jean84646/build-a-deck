var deckStart = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
var deckEnd = ["clubs","diamonds","hearts","spades"];
var deckFull = [];

$(function(){

  deckEnd.forEach(function(suite){
    var tempString = "";
    deckStart.forEach(function(card){
      tempString = wrapListTag(card+" of "+suite);
      deckFull.push(tempString);
    });
  });
  $("#deck-list").html(deckFull);
});

function wrapListTag(value)
{
  return ("<li>"+value+"</li>");
}
