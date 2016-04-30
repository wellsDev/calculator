//global variables
  //Variables
  var numberPressed = $(".btn-num");
  var operatorPressed = $(".btn-op");
  var equalPressed = $(".btn-equal");

  //Display
  var initDisplay = 0;
  //opValue
  var opValue = 0;
  //Total Number Value
  var numVal = "";
  //Current Number Value
  var numKey = "";
  //Store first and second number
  var num1 = "";
  var num2 = "";
  //Track Operator Press
  var opTotal = 0;

//Functions
  // Update Display on Click
  function updateDisplay(num2display){
    $( "p#display" ).replaceWith("<p id='display'>" + num2display + "</p>");
  	}

  //Clear Calculator
  function clearCalc(){
    numVal = "";
  	numKey = "";
    num1 = "";
    num2 = "";
    opTotal = 0;
    opValue = 0;

  	//update Display
  	updateDisplay(0);
  }

  //Clear Calculator Event Listener
  $("#clear").on('click', function(){
    clearCalc();
  });

  //When Number Pressed DO
  numberPressed.on('click', function(){
    //Log Number Button Pressed on Press
    var numKey = $(this).attr('data-num');
    //Does Num1 or Num2 Log this number?
    if (opTotal === 0) {
      //
      numVal += numKey;
      numVal = parseInt(numVal);
      //update num1 Value
      num1 += numKey;
      num1 = parseInt(num1);
      //update View
      updateDisplay(numVal);
      console.log("num1 + " + numKey + " is now " + num1);
    } else if (opTotal === 1) {
      //
      numVal += numKey;
      numVal = parseInt(numVal);
      //update num2 Value
      num2 += numKey;
      num2 = parseInt(num2);
      //update View
      updateDisplay(num2);
      console.log("num2 + " + numKey + " is now " + num2);
    } else {
      console.log("broke");
    }

  });

  operatorPressed.on('click', function(){
    opTotal ++;
    if (opValue === 0){
      if (opTotal === 2) {
        numVal = num1 + num2;
        numVal = parseInt(numVal);
        updateDisplay(numVal);
        opTotal = 0;
        opValue = numVal;
        opValue = parseInt(opValue);
        num1 = "";
        num2 = "";
        console.log("numVal:" + numVal + " numKey:" + numKey + " num1:" + num1 + " num2:" +  num2 +  " opTotal:" +  opTotal + " opValue:" +  opValue);
        numVal = "";
      }
    } else{
      if (opTotal === 2) {
        numVal = num1 + num2;
        numVal = parseInt(numVal);
        opValue = opValue + numVal;
        opValue = parseInt(opValue);
        updateDisplay(opValue);
        opTotal = 0;
          num1 = "";
          num2 = "";
        console.log("numVal:" + numVal + " numKey:" + numKey + " num1:" + num1 + " num2:" +  num2 +  " opTotal:" +  opTotal + " opValue:" +  opValue);
        numVal = "";
      }
    }

  });

  equalPressed.on('click', function(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    numVal = num1 + num2;
    numVal = parseInt(numVal);
    updateDisplay(numVal);
    opTotal = 0;
    opValue += numVal;
    opValue = parseInt(opValue);
    num1 = "";
    num2 = "";
    console.log("numVal:" + numVal + " numKey:" + numKey + " num1:" + num1 + " num2:" +  num2 +  " opTotal:" +  opTotal + " opValue:" +  opValue);
  });

//Doc Ready
$(document).ready(function(){

	// init display
	$( "<p id='display'>" + initDisplay + "</p>" ).appendTo( "#calculator-display" );

});


  // //Operator Button Click
  // $(".btn-op").on('click',function(){
  //   opTotal ++;
  //   display = "0";
  //   numVal = "";
  //   if (opTotal > 1){
  //     console.log("equals");
  //     display = num1 + num2;
  //     updateDisplay();
  //   }
  // });

  // //Update Number Value after Key Press
  // numVal += numKey;
  // //Update Displays Number Value
  // display = numVal;
  // //Update Display
  // updateDisplay();
