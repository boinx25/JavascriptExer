$(document).ready(function(){

	function check(boinxWord){

		switch(boinxWord){
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
			case " ":
			
			return true;
			break;
			
			default:

			return false;
		}
	}

	function rova(textRova){

		var d=0;
		var boinxArray = [];
		boinxArray=textRova.split("");

		while(d<boinxArray.length){

			if(!check(boinxArray[d])){

				boinxArray.splice(d+1,0,"o");
				boinxArray.splice(d+2,0,boinxArray[d]);
				d+=3;
			}
			else
				d++;
		}

		return boinxArray.join("");
	}



	$("#countBut").click(function(){
		var resultWord= rova($("#input").val());
		$("#result").html(resultWord);

	});
});