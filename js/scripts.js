var converterCaller = function(userInput, base) {
  if (base === '2') {
    return binaryConverter(userInput);
  } else if (base === '3') {
    return ternaryConverter(userInput);
  } else {
    return hexaConverter(userInput);
  }
};

//to convert every string in the array to number and reverse it
var toNumAndReverse = function(userInput) {
  var stringArray = userInput.split("");

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

var ternaryConverter = function(userInput) {
  var numbers = toNumAndReverse(userInput);

  //multiply each number with coresponding power by 3
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] *= Math.pow(3, i);
  }

  var convertedNumber = sumOfNumbers(numbers);
  return convertedNumber;
};

var hexaConverter = function(userInput) {
  var numbers = toNumAndReverse(userInput);

  //multiply each number with coresponding power by 16
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] *= Math.pow(16, i);
  }

  var convertedNumber = sumOfNumbers(numbers);
  return convertedNumber;
};

var binaryConverter = function(userInput) {
  var numbers = toNumAndReverse(userInput);

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

    var number = $("#numbers").val();
    var base = $("input:radio[name=base]:checked").val();

    var result = converterCaller(number, base);
    $("#result").show();

    if (((base === '2') && (/[2-9]+|(\D)+/gi.test(number)))
    || ((base === '3') && (/[3-9]+|(\D)+/gi.test(number)))
    || ((base === '16') && !(/^(\d|[A-F])+$/gi.test(number)))) {
      $(".conversion").text("invalid input");
    } else {
      $(".conversion").text(result);
    }
  });
});
