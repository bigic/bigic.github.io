$(function(){

		$(".backtab").on('click', function(evt){
		evt.preventDefault();
		$('#ajaxContent').load('/html_content/empty.html');
		$("#gallerychoose").show();
	});	

});