//to convert every string in the array to number and reverse it
var toNumAndReverse = function(stringArray) {
  var numbers = stringArray.map(function(number) {
    return parseInt(number);
  });
  return numbers.reverse();
};

//to sum the numbers
var sumOfNumbers = function(numbers) {
  var sum = numbers.reduce(function(first, number) {
    return first + number;
  });

  return sum;
};

var ternaryConverter = function(stringArray) {
  var numbers = toNumAndReverse(stringArray);

  //multiply each number by 3 with coresponding powers
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] *= Math.pow(3, i);
  }

  var convertedNumber = sumOfNumbers(numbers);
  return convertedNumber;
};

var binaryConverter = function(stringArray) {
  var numbers = toNumAndReverse(stringArray);

  //multiply each number by 2 with coresponding powers
  for (var i = 0; i < numbers.length ; i++) {
    numbers[i] *= Math.pow(2, i);
  }

  var convertedNumber = sumOfNumbers(numbers);
  return convertedNumber;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var number = $("#numbers").val().split("");
    var result = ternaryConverter(number);
    $("#result").text(result);
  });
});
