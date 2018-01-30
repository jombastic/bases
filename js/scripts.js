var binaryConverter = function(stringArray) {
  var numbers = stringArray.map(function(number) {
    return parseInt(number);
  });
  numbers.reverse();

  for (var i = 0; i < numbers.length ; i++) {
    numbers[i] *= Math.pow(2, i);
  }

  var convertedNumber = numbers.reduce(function(first, number) {
    return first + number;
  });

  return convertedNumber;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var number = $("#numbers").val().toString().split("");
    var result = binaryConverter(number);
    $("#result").text(result);
  });
});
