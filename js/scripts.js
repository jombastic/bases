var convertAndReverse = function(stringArray) {    //to convert every string in the array to number
  var numbers = stringArray.map(function(number) { //and reverse it
    return parseInt(number);
  });
  return numbers.reverse();
};

var sumOfNumbers = function(numbers) {
  var sum = numbers.reduce(function(first, number) {
    return first + number;
  });

  return sum;
};

/*var ternaryConverter = function(stringArray) {
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] *= Math.pow(3, i);
  }
};*/

var binaryConverter = function(stringArray) {
  var numbers = convertAndReverse(stringArray);

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
    var result = binaryConverter(number);
    $("#result").text(result);
  });
});
