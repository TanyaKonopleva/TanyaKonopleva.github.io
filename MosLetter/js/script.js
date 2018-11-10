$(document).ready(function() {

  //header fix
  $(window).scroll(function() {
    if($(window).scrollTop() > 823) {
      $('header').addClass('header_fix');
    } else {
      $('header').removeClass('header_fix');
    }
  });

  $('.slider__img').slick({
    dots: true,
    asNavFor: '.slider__text',
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false
        }
      }
    ]
  });

  $('.slider__text').slick({
    slidesToShow: 1,
    arrows: false,
    swipe: false
  });

  $('.toggle-btn').click(function() {
    $('.header-mobile').toggleClass('header-mobile_active');
  });

  $('.close').click(function() {
    $('.header-mobile').removeClass('header-mobile_active');
  });

  settings = {
    slidesToShow: 1,
    dots: true,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    centerPadding: '20px'
  };

  $('.about-wrap')
  $(window).on('resize load', function() {
    if ($(window).width() > 768) {
      if ($('.about-wrap').hasClass('slick-initialized')) {
        $('.about-wrap').slick('unslick')
      }
      if ($('.instagram-wrap').hasClass('slick-initialized')) {
        $('.instagram-wrap').slick('unslick')
      }
    } else {
      $('.about-wrap').slick(settings);
      $('.instagram-wrap').slick(settings);
    }
   })

});