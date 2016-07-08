$(function(){
	
	$('#ajaxContent').hide();
	
	$(".backtab").on('click', function(evt){
		evt.preventDefault();
		$('#ajaxContent').hide();
		$("#gallerychoose").fadeIn("500");
		$("#mainpagedate").fadeIn("500");
		$("#BlogNote").fadeIn("500");
		$('html, body').animate({scrollTop: $("#gallerychoose").offset().top - 350}, 200);
	});	

});