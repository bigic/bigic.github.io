$(function(){
	
	$('.checkboxes').change(function() {
    $(this).siblings().toggleClass("show-hide", this.checked)
  }).change();
	
});