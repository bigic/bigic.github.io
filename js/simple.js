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
	
	setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);

	$('#ajaxContent').append($('<div id="AlarmCalls"></div>').load('html_content/Calls.html'));
	$('#ajaxContent').append($('<div id="MyInfo"></div>').load('html_content/info.html'));
	
	$("#alarms").on('click', function(evt){
		evt.preventDefault();	
		$("#gallerychoose").hide();
		$("#mainpagedate").hide();
		$("#BlogNote").hide();
		$('#AlarmCalls').siblings().hide();
		$('#AlarmCalls').show().fadeIn("1000");
		$('#ajaxContent').fadeIn("1000");
		$('html, body').animate({scrollTop: $("#AlarmCalls").offset().top - 250}, 200);
	
	});

	$("#infoME").on('click', function(evt){
		evt.preventDefault();
		$("#gallerychoose").hide();
		$("#mainpagedate").hide();
		$("#BlogNote").hide();
		$('#MyInfo').siblings().hide();
		$('#MyInfo').show().fadeIn("1000");
		$('#ajaxContent').fadeIn("1000");
		$('html, body').animate({scrollTop: $("#headertext").offset().top - 250}, 200);
	});	
	
});