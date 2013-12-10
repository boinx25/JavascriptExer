$(document).ready(function()
{

	function reverse()
	{

		var str = $("#str").val();
		var reversed= str.split("").reverse().join("");

		$("#result").html("This is the reversed format:" + "\xa0" + reversed);

	}

	$("#subButton").click(reverse);

});