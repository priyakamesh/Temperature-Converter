 var outputTemp = document.getElementById("output-temp");


function myFun() {
	var inputTemp = document.getElementById("temp").value;
	console.log(inputTemp);
	return inputTemp;
}
var degreeCelsius


function toCelsius () {
	 degreeCelsius = (myFun() - 32) * (5/9);
	 if (degreeCelsius >= 32) {
	 	outputTemp.style.backgroundColor = "red";
	 } else if (degreeCelsius < 0) {
	 	outputTemp.style.backgroundColor = "blue";
	 } else {
	 	outputTemp.style.backgroundColor = "green";
	 }
	 
	return degreeCelsius;
}

function toFahrenheit () {
	var degreeFarenheit = (myFun() * 1.8) + 32;
	if (degreeFarenheit >= 90) {
	 	outputTemp.style.backgroundColor = "red";
	 } else if (degreeFarenheit < 32) {
	 	outputTemp.style.backgroundColor = "blue";
	 } else {
	 	outputTemp.style.backgroundColor = "green";
	 }
	return degreeFarenheit;

	
}


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	
  console.log("event", clickEvent);
  	if ( document.getElementById("Celsius").checked) {

  	 	outputTemp.innerHTML = toCelsius();
  	console.log("toCelsius : ", toCelsius());
	} else {
		outputTemp.innerHTML = toFahrenheit();
		console.log( "toFahrenheit : ",toFahrenheit());
	}
	clickEvent.preventDefault();
	
}


	

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
button.addEventListener("keypress", determineConverter);

function colorTemp (high,low,normal) {
	if (normal >= 32) {
		outputTemp.style.color = red;
	}
}



