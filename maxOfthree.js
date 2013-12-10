$(document).ready(function()
{
			
		function max(firstNumber,secondNumber,thirdNumber)
			
			{

				var firstNumber=$("#firstNum").val();
				var secondNumber=$("#secondNum").val();
				var thirdNumber=$("#thirdNum").val();			
				parseInt(firstNumber);
				parseInt(secondNumber);
				parseInt(thirdNumber);
				var greatest =" ";

				if(firstNumber>secondNumber && firstNumber>thirdNumber)
				{
					
					greatest=firstNumber;
					
				}

				if(secondNumber>firstNumber && secondNumber>thirdNumber)
				{
						
					greatest=secondNumber;
					
				}

				else
				{
					
					greatest=thirdNumber;
	
				}

				$('#greatest').html(greatest);

				

			}


	$("#submitBut").click(max);



});


