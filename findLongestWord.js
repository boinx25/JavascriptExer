$(document).ready(function(){

	 var myArray = ["efren","gamotea","boinx","bantug"];
     var longest = 0;
     $("#words").html(myArray + "\xa0");
	
    
    function findLongest(boinxList){

		for(var i = 0; i<boinxList.length; i++){
			console.log(boinxList[i].length);

			if(boinxList[i].length > longest)
	    		longest=boinxList[i].length;
	    }

			return longest;
	}


 	$("#findLong").click(function(){

 		var result = findLongest(myArray);
 		$("#length").html(result);
 	});

});