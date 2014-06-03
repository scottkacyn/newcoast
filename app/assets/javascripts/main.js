/*----------------------------------------------------*/
// Portfolio Project Loading
/*----------------------------------------------------*/  

$("#project-1").click(function(){
	$('#result').load('landings/project-1.html.erb');
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