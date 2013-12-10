$(document).ready(function()
{
			
		function max(firstNumber,secondNumber)
			
			{

				var firstNumber=$("#firstNum").val();
				var secondNumber=$("#secondNum").val();			
				parseInt(firstNumber);
				parseInt(secondNumber);
				var greatest = " ";

				if(firstNumber>secondNumber)
				{
				
					greatest=firstNumber;
					
				}

				else 
				{
					
					greatest=secondNumber;
					
				}

				$('#greater').html(greatest);

			}


	$("#submitBut").click(max);



});


