$(document).ready(function()
{

	function vowel()
	{
		var input = $("#char").val();
		var res = " ";
		
		switch(input)
		{
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
			case 'A':
			case 'E':
			case 'I':
			case 'O':
			case 'U':
			res = "The character entered is vowel";
			break;
			
			default:

			res = "The character entered is consonant";
			break;
		}

		$("#result").html(res);
		}

$("#subBut").click(vowel);

});