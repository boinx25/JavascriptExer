$(document).ready(function(){

	var boinxObj = {};


	function charCount(boinxString){
		
		var b=0;
		var boinxArray= [];
		boinxArray=boinxString.split("");
		boinxObj["a"] = boinxArray;
		boinxObj["b"] = 2;
		}

	


	$("#freqBut").click(function(){

		var result = charCount($("#stringInput").val());
		

		// $("#frequencyList").html("<li>" + result + "</li>");
	});


});