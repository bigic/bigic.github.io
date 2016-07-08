$(function(){
	
	$('#ajaxContent').hide();
	
	$(".backtab").on('click', function(evt){
		evt.preventDefault();
		$('#ajaxContent').hide();
		$("#gallerychoose").show();
		$("#mainpagedate").show();
		$("#BlogNote").show();
	});	

});