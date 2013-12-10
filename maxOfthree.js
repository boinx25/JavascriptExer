$(document).ready(function()
{
			
	function max(firstNumber,secondNumber,thirdNumber){
			
		if(firstNumber>secondNumber && firstNumber>thirdNumber)
		{
			
			return firstNumber;
			
		}

		else if(secondNumber>firstNumber && secondNumber>thirdNumber){
				
			return secondNumber;
		}

		else{
			
			return thirdNumber;
		}

	}


	$("#submitBut").click(function(){
		var total = max($("#firstNum").val(),$("#secondNum").val(),$("#thirdNum").val());
		$('#greatest').html(total);
	});

		

});


