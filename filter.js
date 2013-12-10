$(document).ready(function(){  

   var i=4;
   var boinxArray = ["Boinx","Gamotea","Bantug","Bro"];
   $("#words").html(boinxArray + "\xa0");
   var res= [];
 
   function filterLongWords(myArray){
   		for(var a = 0; a < myArray.length ;a++) {
      
       	if (myArray[a].length>i){

           	res.push(myArray[a] + "\xa0");
              
   		  }
   		}

      return res;
    }

	$("#filter").click(function(){	
		
		var result= filterLongWords(boinxArray);
		$("#filtered").html(result);

	});
});