$(document).ready(function()
{

	function add()
	{
	 var a = $("#firstNum").val();
	 var b = $("#secondNum").val();
	 var c = $("#thirdNum").val();
	 var d = $("#fourthNum").val();
	 var array= new Array([a,b,c,d]);
	 var total= " ";
	 $.map(array, function(val,i) 
	 		{ 
     			return parseInt(val); 
    	    });
 	
  		for (var i = 0; i < array.length; i++) 
  			{
    			total += array[i];
  					$("#result").html(total);	
  			}
 
  
}
	 

	
	

	 function multiply()
	 {

 	 var a = $("#firstNum").val();
	 var b = $("#secondNum").val();
	 var c = $("#thirdNum").val();
	 var d = $("#fourthNum").val();
	 var array= [a,b,c,d];
	 var total= " ";
	 
    		total*=array;
	 		$("#result").html(total);

	 }
	
	
$("#add").click(add);
$("#multiply").click(multiply);

});