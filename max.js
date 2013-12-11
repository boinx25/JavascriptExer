$(document).ready(function()
{
		var result = " ";	
		function max(firstNumber,secondNumber){

				if(firstNumber>secondNumber){
				
					return firstNumber;
				}

				else{
					
					return secondNumber;
				}
		}


	$("#submitBut").click(function(){

		var result = max($("#firstNum").val(),$("#secondNum").val());
		parseInt(result);
		$("#greater").html(result);

	});



});


