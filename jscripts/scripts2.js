$(document).ready(function(){
  $("form#numberform").submit(function(event){
    event.preventDefault();
    var userInput = $("#inputnumber").val();
    var secondInput= makeArray(userInput);
    //var finalOutPut= scan(secondInput);
    $("#output").text(secondInput);
  });
});
function makeArray(userInput){
  var masterArray = [];
  for(var i=0; i<=parseInt(userInput); i=i+1){
    masterArray[i]=i;
  }
  return masterArray;
}
  /*function scan(masterArray, userInput){
    var masterArray=makeArray(userInput);
    if (masterArray[0]="1"){
      masterArray[0]="Beep";
    }
    return masterArray;
  }*/
