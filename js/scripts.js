//to convert every string in the array to number and reverse it
var toNumAndReverse = function(stringArray) {
  var numbers = stringArray.map(function(number) {
    if (/[ABCDEF]/i.test(number)) {
      return parseInt(number, 16);
    } else {
      return parseInt(number);
    }
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

var hexaConverter = function(stringArray) {
  var numbers = toNumAndReverse(stringArray);

  //multiply each number with coresponding power by 16
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] *= Math.pow(16, i);
  }

  var convertedNumber = sumOfNumbers(numbers);
  return convertedNumber;
};

var ternaryConverter = function(stringArray) {
  var numbers = toNumAndReverse(stringArray);

  //multiply each number with coresponding power by 3
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
    var result = hexaConverter(number);

    $("#result").show();
    $(".conversion").text(result);
  });
});
