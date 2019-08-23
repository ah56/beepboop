$(document).ready(function(){
  $("form#numberform").submit(function(event){
    event.preventDefault();
    var userInput = $("#inputnumber").val()
    var masterArray= makeArray(userInput);
    var theBetterArray= checkForThrees(masterArray, userInput);
    console.log("whatsup");
    $("#output").text(theBetterArray);
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
  for(var i= 0; i<= masterArray.length; i=i+1 ){
    var chosenIndex = masterArray[i];
    if(String(chosenIndex).includes("3")){
      chosenIndex = "Dave, I can't believe it was you!"
      }
    else if(String(chosenIndex).includes("2")){
      chosenIndex = "If you snooze it's better to choose one."
      }
    else if(String(chosenIndex).includes("1")){
      chosenIndex = "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah!"
      }
    else{
        chosenIndex=chosenIndex;
      }
      console.log(chosenIndex);
      for(var superMasterArray=[]; superMasterArray.length<=i+1; superMasterArray.push(chosenIndex)){
        var theBetterArray = superMasterArray;
      }
      console.log(theBetterArray);
    }
    return theBetterArray;
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
