$('.burgerMenu').on('click', function(ev){
	ev.preventDefault();
	$(this).toggleClass('animateBurger');
	$('nav').slideToggle('fast');
});
$(window).on('resize', function(ev){
	//console.info(window.innerWidth);
	if(window.innerWidth > 900){
		$('nav ul').attr('style','');	
	};
});

// $('.contact').on('click', function(ev){
// 	ev.preventDefault();
// 	// $(this).toggleClass('animateContact');
// 	$('hiddenStuff').slideToggle('fast');
// })
// function myFunction() {
//     var x = document.getElementById(".hiddenStuff");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
 $('.contact').on('click', function(){
	var x = document.getElementById("hiddenStuff");
	var y = document
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
 });