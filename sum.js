$(document).ready(function()
{
	var array = [1,2,3,4];
	$("#numbers").html("The Numbers are:" + "\xa0" + array);
	
	function add()
	{
		var Sum= array.reduce(function (a,b)
		{
			return a+b;
		});
	
	$("#resultSum").html("The Sum is:" + "\xa0" + Sum);
	
	}
	 
	
    function multiply()
	{
	 
	 	var Quotient= array.reduce(function (a,b)
		{
			return a*b;
		});
	 
    $("#resultQuotient").html("The Quotient is:" + "\xa0" + Quotient);
	
	}
	
	
$("#sum").click(add);
$("#quo").click(multiply);

});