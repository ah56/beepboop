$(document).ready(function(){
  $("form#numberform").submit(function(event){
    event.preventDefault();
    var userInput = $("#inputnumber").val();
    $("#output").text(beepBoop(userInput));
  });
});

//BL.. lets get down to buisness...
function beepBoop(userInput){
  var number= parseInt(userInput);
  
  number = "beep"
  return number;
}
