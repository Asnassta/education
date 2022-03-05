$(document).ready(function() {

  /*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__inner_mobile").toggleClass('active');
  });
  /*==========/menu-toggle=========*/

	  /*======link-drop=============*/
    if ($(window).width() >= 741) {
        $(".link-drop").hover( function(event) {
        event.preventDefault();
        $(this).find(".link-arrow").toggleClass("active");
        $(this).find(".link__dropdown").slideToggle(333);
      });
    } else {
      $(".link-drop").on("click", function() {
        event.preventDefault();
        $(this).find(".link-arrow").toggleClass("active");
        $(this).find(".link__dropdown").slideToggle(333);
      });
    }
  

  /*==========/link-drop=========*/

   /*======Like=============*/
  
  $(".popular-box__like").on("click", function() {
    $(this).toggleClass("active");
  });
  /*==========/like=========*/

	/*======Select=============*/
	$(function() {
		$('select').styler();
	});
	/*======/select=============*/

  /*==========Label===========*/

   $('.choice-form__input input').on('input', function() {
 

 if($(this).val().length == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }

});

 $('.choice-form__select select').on('change', function() {
 
 if($(this).val() == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }

});

$( ".choice-form__select label" ).click(function() {
 
  $(this).addClass('up');
  d = $(this).next().attr('id');
  setTimeout(function() {
   $('#'+d+' .jq-selectbox__select').trigger('click');
}, 50);

 
});


 setInterval(function() {
   var elems = $(".jqselect");
    var elemsTotal = elems.length;
    for(var i=0; i<elemsTotal; ++i){
      
  if($(elems[i]).hasClass('opened') == false)
   {
      if($(elems[i]).parent().find('label.up').next().find('select option:selected').val() == 0)
      {
       
         $(elems[i]).parent().find('label.up').removeClass('up');
      }
    }
}

}, 800);

 /*==========label===========*/

	/*======Slider-intro=============*/
  $('.intro__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.intro-arrows__arrow_prev'),
      nextArrow: $('.intro-arrows__arrow_next'),
      responsive: [
    {
      breakpoint: 1400,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.intro-arrows__arrow_prev'),
        nextArrow: $('.intro-arrows__arrow_next'),
        centerMode: true,
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 996,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.intro-arrows__arrow_prev'),
        nextArrow: $('.intro-arrows__arrow_next'),
        centerMode: true,
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 541,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.intro-arrows__arrow_prev'),
        nextArrow: $('.intro-arrows__arrow_next'),
        centerMode: true,
        centerPadding: '40px',
      }
    }
  ]
  }).on('setPosition', function (event, slick) {
 	
 	h = 0;
 	par =  $('.intro__slider .slick-slide');
 	 par.each(function() {
	 	 
	 	 
 if($(this).height() > h)
 {
	 h = $(this).height();
 }
 

});
 
 	$('.intro__slider .slick-slide').css('height', h+'px');
 
});
  /*=============/slider-intro==============*/

  /*======Slider-popular=============*/
  $('.popular__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrows__arrow_prev'),
      nextArrow: $('.slider-arrows__arrow_next'),
      responsive: [
    {
      breakpoint: 993,
      settings: {
        infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrows__arrow_prev'),
      nextArrow: $('.slider-arrows__arrow_next'),
      }
    },
    {
      breakpoint: 541,
      settings: {
        infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrows__arrow_prev'),
      nextArrow: $('.slider-arrows__arrow_next'),
      }
    }
  ]
  }).on('setPosition', function (event, slick) {
  
  h = 0;
  par =  $('.popular__slider .slick-slide .popular-box');
   par.each(function() {
     
     
 if($(this).height() > h)
 {
   h = $(this).height();
 }
 

});
 
  $('.popular__slider .slick-slide .popular-box').css('height', h+'px');
 
});
  /*=============/slider-popular==============*/
	
});