$(function(){
	
	$('.checkboxes').change(function() {
    $(this).siblings().toggleClass("show-hide", this.checked)
  }).change();
	

	function scrollingnavmenu() {
		var thinheaderimage = document.getElementById('thin-top-image'); 
		var thinheaderimageheight = thinheaderimage.clientHeight;
		
		$(window).scroll(function () {
			if ($(window).scrollTop() > thinheaderimageheight) {
				$(".post-hometab").addClass("post-hometab-fixed");
			}
			if ($(window).scrollTop() < thinheaderimageheight + 1) {
				$(".post-hometab").removeClass("post-hometab-fixed");
			}
		});
	};
	
	scrollingnavmenu();
	$(window).resize(scrollingnavmenu);
	
});