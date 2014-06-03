/*----------------------------------------------------*/
// Flexslider in Top Banner
/*----------------------------------------------------*/  
 $('#home-slider').flexslider({						
		animation: "swing",
		direction: "vertical",
		slideshow: true,
		slideshowSpeed: 3800,
		animationDuration: 1000,
		directionNav: false,
		controlNav: true,
		smootheHeight:true,
		useCSS: false,
		after: function(slider) {
		  slider.removeClass('loading');
		}
			
 });

/*----------------------------------------------------*/
// Portfolio Project Loading
/*----------------------------------------------------*/  


		   $("#project-1").click(function(){
		   	$('#result').load('../portfolio/project-1.html');
		   }); 
 
		   $("#page2").click(function(){
		   	$('#result').load('pages/page2.html');
		     //alert("Thanks for visiting!");
		   });


/*----------------------------------------------------*/
// Parallax Scrolling
/*----------------------------------------------------*/  

 $(document).ready(function(){
	$('.parallax .parallax-banner-1').parallax("50%", 0.6);
	$('.parallax .parallax-banner-2').parallax("50%", 0.6);
	$('.parallax .parallax-banner-3').parallax("50%", 0.6);

})