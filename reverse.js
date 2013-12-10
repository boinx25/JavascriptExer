$(document).ready(function(){

	function reverse(word){

		var nareverse = word.split("").reverse().join("");

		return "This is the reversed format:" + "\xa0" + nareverse;

	}

	$("#subButton").click(function(){

	    var reversed = reverse($("#str").val());
	    $("#result").html(reversed);


	});

});