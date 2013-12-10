$(document).ready(function()
{
	var arrayNames= new Array ("Antonio","Noel","Tan","Bantug","Acer","Nike");
	$("#words").html(arrayNames + "\xa0");
	
		function sort()
		{

			arrayNames.sort();
			$("#sorted").html("<li>" + arrayNames + "</li>" + "\xa0");
	
		}

$("#sortBut").click(sort);

});