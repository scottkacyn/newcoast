$(document).ready(function(){

    var canvas_width=1200,
        $backTop=$('.back-top'),
        offset=$('.anim1').offset().top;

    $backTop.hide();
    //smooth scroll when click on the menu
    $('.imageFull nav ul li a').on('click', function(e){
        console.log('ok');
        SmoothScroll(e, $(this.hash).offset().top, 900);
    });
    // smooth croll to top
    $backTop.on('click', function(e){
        SmoothScroll(e, 0, 900); 
    });
    
    //smooth load of gallery image
    if($(window).width()>canvas_width){

        // var $list_image_1=$('.anim1 li').css('opacity',0),
        //     $list_image_2=$('.anim2 li').css('opacity',0);

        // var offset_list_image_1=$('.anim1').offset().top-$(window).height()*0.8,
        //     offset_list_image_2=$('.anim2').offset().top-$(window).height()*0.8;

        // LoadGallery(offset_list_image_1, $list_image_1, 350);
        // LoadGallery(offset_list_image_2, $list_image_2, 350);  

         $(window).scroll(function(){
        //     LoadGallery(offset_list_image_1, $list_image_1, 350);
        //     LoadGallery(offset_list_image_2, $list_image_2, 350);
            
            ($(this).scrollTop() > offset) ? $backTop.fadeIn() : $backTop.fadeOut();
        });
    }
   

    function LoadGallery(offset_list_image, $list_image, delay){
        if($(window).scrollTop() > offset_list_image){
            var i = 0;
            (function displayImages() {
            $list_image.eq(i++).animate(
                {opacity:1},
                delay,displayImages);
            })();
        }
    }

    function SmoothScroll(e, top, duration){
        e.preventDefault();
        $('body,html').animate(
            {'scrollTop':top},
            duration, 'swing'); 
    }


});