$(function(){

	function ajaxFunction(){
      var ajaxRequest;  // The variable that makes Ajax possible!

      try{
         // Opera 8.0+, Firefox, Safari 
         ajaxRequest = new XMLHttpRequest();
      }catch (e){

         // Internet Explorer Browsers
         try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
         }catch (e) {
            try{
               ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){

               // Something went wrong
               alert("Your browser broke!");
               return false;
            }
         }
      }
   };
	
	//alert($(window).width());
	
	$("#alarms").on('click', function(evt){
		evt.preventDefault();
		$("#gallerychoose").hide();
		$('#ajaxContent').load('html_content/Calls.html');		
	});

	$("#infoME").on('click', function(evt){
		evt.preventDefault();
		$("#gallerychoose").hide();
		$('#ajaxContent').load('html_content/info.html');		
	});	
	
});