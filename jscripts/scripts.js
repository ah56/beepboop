$(document).ready(function(){
  $("form#numberform").submit(function(event){
    event.preventDefault();
    var userInput = $("#inputnumber").val();
    $("#output").text(beepBoop(userInput));
  });
});

//BL.. lets get down to buisness... buisness comes first...
function beepBoop(userInput){
  var number= parseInt(userInput);
  var indexOne = String(number).indexOf(1);
  var indexTwo = String(number).indexOf(2);
  var indexThree = String(number).indexOf(3);
  if( indexOne !== (-1)){
  number = "beep"
  }
  else if( indexTwo !== (-1)){
  number = "boop"
  }
  else if( indexThree !== (-1)){
  number = "I'm sorry, Dave, but we just can't allow for that kind of behavior."
  }
  return number;
}
