$(function(){
	
	
	var disqus_config = function () {
    this.page.url = 'https://dl.dropboxusercontent.com/u/34084514/index.html';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'Info'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = '//tinybrownbird.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
	
	//$('.hiddenboxes').hide();
	$('.checkboxes').change(function() {
    $(this).siblings().toggleClass("show-hide", this.checked)
  }).change();
	

	

});