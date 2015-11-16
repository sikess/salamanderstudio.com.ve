$(document).ready(function(){
	var altura=$('.menu').offset().top;
	$(window).on('scroll', function(){
		if($(window).scrollTop()>altura){
			$('.menu').addClass('menu-fixed');
			$('.isotipo').removeClass('hide');
		}else{
			$('.menu').removeClass('menu-fixed');
			$('.isotipo').addClass('hide');
		}
	});



var altura2=$('.seccion_cont1').offset().top;
var alturaseca=altura2-20;
$(window).on('scroll',function(){
    if($(window).scrollTop()>alturaseca){
         $("#item_corp").fadeIn();
         $("#item_shop").fadeIn("slow");
         $("#item_port").fadeIn(1000);
    }else{
        $("#item_corp").fadeOut();
        $("#item_shop").fadeOut();
        $("#item_port").fadeOut();
    }

});


    $('h2').append('<a href="#top" class="gototop">Subir</a>');
    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
	e.preventDefault();
	var href = $(this).attr('href');
	// alert(href);
	$('html, body').animate({ scrollTop : $( href ).offset().top }, 'slow', 'easeInOutExpo');
	});

    $(window).scroll(function(){
    	var barra=$(window).scrollTop();
    	var posicion=barra*0.03;

    	$('.seccion_cont1').css({
    		'background-position':'50%'+posicion+'%'
    	});


    	$('.seccion_cont2').css({
    		'background-position':'50%'+''+posicion+'%'
    	});

 		$('.seccion_cont3').css({
    		'background-position':'50%'+''+posicion+'%'
    	});

    	$('.bg1_seccion2').css({
    		'background-position':'50%'+posicion+'%'
    	});
    });
	
});


