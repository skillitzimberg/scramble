$(function() {
  var userMessage = prompt("Say something!");
  console.log(userMessage);

  var capitalizeFirstLast = function(input) {
    var firstLast = input.charAt(0) + input.charAt(input.length-1);
    console.log(firstLast);

    var firstLastInCaps = firstLast.toUpperCase();
    console.log(firstLastInCaps);

    return firstLastInCaps;
  };

  var reverseFirstLast = function(letterPair) {
    var lastFirst = letterPair.charAt(1) + letterPair.charAt(0);

    console.log(lastFirst);

    return lastFirst;
  };

  var joinStrings = function(userMessage) {
    var letterPair = capitalizeFirstLast(userMessage);

    var joinedStrings = userMessage + reverseFirstLast(letterPair);
    console.log(joinedStrings);
    return joinedStrings;
  };

  // var final = function(userMessage) {
  //   var userMessage = prompt("Say something!");
  //   console.log(userMessage);
  //   var middleLetter = userMessage.charAt(parseInt(userMessage.length/2));
  //   var original = joinStrings(userMessage);
  //   var joined = middleLetter + original;
  //   console.log(joined);
  //
  //   document.getElementById("processedInput").textContent = joined;
  //   // return joined;
  // };
  
  $("#sweet").click(function() {
    alert(userMessage);
  });

  $("#angry").click(function() {

    var middleLetter = userMessage.charAt(parseInt(userMessage.length/2));
    var original = joinStrings(userMessage);
    var joined = middleLetter + original;
    console.log(joined);

    document.getElementById("processedInput").textContent = joined;

  });

});
