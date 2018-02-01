//to convert every string in the array to number and reverse it
var toNumAndReverse = function(userInput) {
  var stringArray = userInput.split("");

  var digits = stringArray.map(function(digit) {
    if (/[ABCDEF]/i.test(digit)) {
      return parseInt(digit, 16);
    } else {
      return parseInt(digit);
    }
  });
  return digits.reverse();
};

var converter = function(userInput, base) {
  var digits = toNumAndReverse(userInput);

  //multiply each digit with coresponding power
  for (var i = 0; i < digits.length; i++) {
    digits[i] *= Math.pow(base, i);
  }
  //sum the array of digits
  var convertedNumber = digits.reduce(function(first, digit) {
    return first + digit;
  });

  return convertedNumber;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var number = $("#number").val();
    var base = $("input:radio[name=base]:checked").val();

    var result = converter(number, base);
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
