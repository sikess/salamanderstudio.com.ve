var anchoPantalla=$(window).width();
var altoPantalla=$(window).height();
function main(){

}

// Menu Flotante
$(document).ready(function(){
	var altura=$('.menu').offset().top;
	$(window).on('scroll', function(){
		if($(window).scrollTop()>altura){
			$('.menu').addClass('menu-fixed');
			// $('.isotipo').removeClass('hide');
		}else{
			$('.menu').removeClass('menu-fixed');
			// $('.isotipo').addClass('hide');
		}
	});




var altura2=$('.seccion_cont1').offset().top;
var alturaseca=altura2-40;
var play=0;
$(window).on('scroll',function(){
    if($(window).scrollTop()>alturaseca){
         $("#item_corp").fadeIn('slow');
         $("#item_shop").fadeIn('slow');
         $("#item_port").fadeIn('slow');

         // $('#item_corp').addClass('menu-fixed');
         if(play==0){
           $("#item_corp").animate({'top': '-100px'}, 1000); 
           $("#item_shop").animate({'top': '-100px'},'slow'); 
           $("#item_port").animate({'top': '-100px'}, 1000); 

           play=1;
         }
          
    }
    // else{
    //     $("#item_corp").fadeOut();
    //     $("#item_shop").fadeOut();
    //     $("#item_port").fadeOut();
    // }
//     $("#Friends").fadeIn('slow',function(){
//   $(this).animate({'top': '-=30px'},'slow');
// });
});



// $('h2').append('<a href="#top" class="gototop">Subir</a>');
linkInterno = $('a[href^="#"]');
linkInterno.on('click',function(e) {

	e.preventDefault();
	var href = $(this).attr('href');
	// alert(href);
    $('html, body').animate({ scrollTop : $( href ).offset().top }, 'slow', 'easeInOutExpo'); 
// if(anchoPantalla<=650){
//     $('html, body').animate({ scrollTop : $( href ).offset().top-140 }, 'slow', 'easeInOutExpo');
// }else{
//  $('html, body').animate({ scrollTop : $( href ).offset().top }, 'slow', 'easeInOutExpo');   
// }
	
});

    $(window).scroll(function(){
    	var barra=$(window).scrollTop();
    	var posicion=barra*0.03;

        $('link_menu').css({
            'font-size':'0.5em'
        });


    	$('.seccion_cont1').css({
    		'background-position':'50%'+posicion+'%'
            // 'min-height':'900px'
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
	

    var altpantalla=$(window).height();
    // alert(altpantalla); 
    // $(window).on(function(){
    $('.seccion_cont1').css({
        'min-height':altpantalla+'px'
        // });
    });

        $('.seccion_cont1').css({
        'min-height':altpantalla+'px'
        // });
    });

     $('.seccion_cont2').css({
        'min-height':altpantalla+'px'
        // });
    });

      $('.seccion_cont3').css({
        'min-height':altpantalla+'px'
        // });
    });

      // alert(altpantalla);

});


   $('#aa').click(function(){
        // alert(anchoPantalla);
    });