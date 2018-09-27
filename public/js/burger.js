$('.burgerMenu').on('click', function(ev){
	ev.preventDefault();
	$(this).toggleClass('animateBurger');
	$('nav').slideToggle('slow');
});
$(window).on('resize', function(ev){
	//console.info(window.innerWidth);
	if(window.innerWidth > 900){
		$('nav ul').attr('style','');	
	};
});