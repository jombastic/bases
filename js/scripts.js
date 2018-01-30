var binaryConverter = function(number) {
  return number;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var number = $("#numbers").val();
    var result = binaryConverter(number);
    $("#result").text(result);
  });
});
