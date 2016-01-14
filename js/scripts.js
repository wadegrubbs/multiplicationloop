$(document).ready(function() {

var total = 0;

var someNumbers = [23, 45, 89, 1, 3];
someNumbers.forEach(function(number) {
  total *= number;
$("p").text("<p>" + total + "</p>");
});
});
