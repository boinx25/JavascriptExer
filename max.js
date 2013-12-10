$(document).ready(function()
{
			
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
		$("#greater").html(result);

	});



});


