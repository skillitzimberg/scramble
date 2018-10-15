var userMessage = prompt("Say something!");
console.log(userMessage);

var capitalizeFirstLast = function(input) {
  var firstLast = input.charAt(0) + input.charAt(input.length-1);
  console.log(firstLast);

  var firstLastInCaps = firstLast.toUpperCase();
  console.log(firstLastInCaps);

  return firstLastInCaps;
};

capitalizeFirstLast(userMessage);

// var capitalize = function(userMessage) {
//   var firstLast = userMessage.charAt(0);
//   return firstLast;
// }
// var message = "gibberish";
// console.log(message.charAt(0) + message.charAt(message.length-1));

// console.log(capitalize(userMessage));
