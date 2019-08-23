$(document).ready(function(){
  $("form#numberform").submit(function(event){
    event.preventDefault();
    var userInput = $("#inputnumber").val();
    var masterArray= makeArray(userInput);
    $("#output").text(checkForThrees(masterArray, userInput));
  });
});

//BL.. lets get down to buisness... buisness comes first...

function makeArray(userInput){
  var masterArray = [];
  for(var i=0; i<=parseInt(userInput); i=i+1){
    masterArray[i]=i;
  }
  return masterArray;
}
function checkForThrees(masterArray, userInput){
  var masterArray = makeArray(userInput);
  masterArray.forEach(function(number){
    if (number === "3"){
      number = beep;
    }
})
}
/*function beepBoop(userInput){
  var numbers= makeArray(userInput);
  numbers.forEach(function(number){
    var indexOne = String(number).indexOf("1");
    var indexTwo = String(number).indexOf("2");
    var indexThree = String(number).indexOf("3");
    if( indexOne !== (-1)){
    number = "beep"
    }
    else if( indexTwo !== (-1)){
    number = "boop"
    }
    else if( indexThree !== (-1)){
    number = "I'm sorry, Dave, but we just can't allow for that kind of behavior."
    return number;
    }
  });

};*/
