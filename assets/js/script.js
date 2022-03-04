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

 $( ".choice-form__select" ).click(function() {
 
  $(this).find('label').addClass('up');
  //$(this).find('.jqselect').addClass('opened dropdown');
 
});

 $( "*" ).click(function() {   
    if($(this).find('label.up').next().hasClass('focused')  == false)
    {
      if($('label.up').next().find('select option:selected').val() == 0)
      {
        $(this).find('label').removeClass('up');
      }
    }
  });

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