$(document).ready(function(){  

   var i=4;
   var boinxArray = ["Efren","Gamotea","Bantug","Lim"];
   $("#words").html(boinxArray + "\xa0");
 
   function filterLongWords(myArray){
   		for(var a = 0; a < myArray.length ;a++) {
      
       	if (myArray[a].length>i){

           	return myArray[a];
           
   		}
   		
  	 }
    }

	$("#filter").click(function(){	
		
		var result= filterLongWords(boinxArray);
		$("#filtered").html(result);

	});
});