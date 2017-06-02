$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $("nav>div").addClass("sticky");
  }
  else{
    $("nav>div").removeClass("sticky");
  }
});

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 85
    }, 500);
    return false;
});


	window.sr = ScrollReveal();
	
	sr.reveal('.navbar', { 
	    duration: 1500,
	    origin:'bottom',
	    distance: '200px',
	});
	
	sr.reveal('#logo>h1', { 
	    duration: 2500,
	    origin:'left',
	    distance: '2000px',
	});
	
	sr.reveal('.left', { 
	    duration: 1500,
	    origin:'bottom',
	    distance: '200px',
	});