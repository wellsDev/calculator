	//global variables
	var display = 0;
	var displayHTML = "<p id='display'>" + display + "</p>";
	var numVal = "";
  var numVal2 = "";
  var numKey = "";
  var num1 = "";
  var num2 = "";
  var opPress = 0;

//Functions

// Update Display on Click
function updateDisplay(){
  $( "p#display" ).replaceWith("<p id='display'>" + display + "</p>");
	}

//Clear Calculator
function clearCalc(){
  //clear display
	display = 0;
	//clear current value
	numVal = "";
  //clear numKey value
	numKey = "";
  //clear numVal2 value
	numVal2 = "";
  //clear opPress
  opPress = "0";
	//update Display
	updateDisplay();
}

//Click Listeners
$("#clear").on('click', function(){
  clearCalc();
});

//Num Button
$(".btn-num").on('click', function(){
  if (opPress === 0) {
  console.log("num1");
  //collect num key value
  numKey = $(this).text();
  numKey = parseInt(numKey);

  //current value tally
  numVal += numKey;
  num1 = numVal;

  //add value to display
  display = numVal;
  updateDisplay();
  return num1;
} else {
  console.log("num2");
  updateDisplay();
  //collect num key value
  numVal2 = $(this).text();
  numVal2 = parseInt(numVal2);

  //current value tally
  numVal += numVal2;


  //add value to display
  display = numVal;
  updateDisplay();
  return num2;
}
});

//Operator Button Click
$(".btn-op").on('click',function(){
  opPress ++;
  display = "0";
  numVal = "";
  if (opPress > 1){
    console.log("equals");
    display = num1 + num2;
    updateDisplay();
  }
});

$(document).ready(function(){

	// init display
	$( displayHTML ).appendTo( "#calculator-display" );

});
