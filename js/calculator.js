$(document).ready(function(){

	//global variables
	var display = 0;
	var displayHTML = "<p id='display'>" + display + "</p>";
	var numVal = "";

	// init display
	$( displayHTML ).appendTo( "#calculator-display" );

	// Update Display on Click
	function updateDisplay(){
		$( "p#display" ).replaceWith("<p id='display'>" + display + "</p>");
	}

	//Click Listeners

	//Clear Calculator
	$("#clear").on('click', function(){
		//clear display
		display = 0;
		//clear current value
		numVal = "";
		//update Display
		updateDisplay();
	});

	//Num Button
	$(".btn-num").on('click', function(){
		//collect num key value
		var numKey = $(this).text();
		numKey = parseInt(numKey);

		//current value tally
		numVal += numKey;

		//add value to display
		display = numVal;
		updateDisplay();
	});

});
