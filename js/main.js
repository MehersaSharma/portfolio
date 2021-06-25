
$( document ).ready(function() {
    console.log( "ready!" );
});

$(window).on('scroll',function() {
	if($(window).scrollTop()){
		$('nav').addClass('black');
	}
	else
	{
		$('nav').removeClass('black');
	}
	
})



