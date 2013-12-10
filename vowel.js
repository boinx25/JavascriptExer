$(document).ready(function()
{

	function vowel(letter){
		
		switch(letter){
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
			
			return "The character entered is vowel";
			break;
			
			default:

			return "The character entered is consonant";
			break;
		}

		
	}

	$("#subBut").click(function(){

	var result = vowel($("#char").val());
	$("#result").html(result);

	});

});