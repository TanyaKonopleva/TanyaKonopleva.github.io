$(document).ready(function(){

  $('.reviews-wrap').slick();
  $('.header-sliders').slick({
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        setting: {
          autoplay: false
        }
      }
    ]
  });

  $('.navbar-wrap__toggle').click(function() {
    $('.navbar-wrap__toggle-menu').slideToggle(200);
  });

  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('.navbar').addClass('navbar_fix');
    } else {
      $('.navbar').removeClass('navbar_fix');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.to-top').fadeIn(400);
    } else {
      $('.to-top').fadeOut(400);
    };
  });

  $('.to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
  });

  $('#menu').on('click', 'a', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('html, body').animate({
      scrollTop: top
    }, 1000);
  });

  $('.portfolio-wrap__content').mixItUp();

  // $('.portfolio-wrap__tabs').on('click', 'input', function() {
  //   $(this).siblings().removeClass('portfolio-wrap__tabs_active');
  //   $('.portfolio-wrap__item').siblings().removeClass('portfolio-wrap__item_active');
  //   if ($(this).hasClass('mix') && $('.portfolio-wrap__item').hasClass('mix')) {
  //     $(this).addClass('portfolio-wrap__tabs_active');
  //     $('.portfolio-wrap__item').addClass('portfolio-wrap__item_active');
  //   } else if ($(this).hasClass('branding') && $('.portfolio-wrap__item').hasClass('branding')) {
  //     $(this).addClass('portfolio-wrap__tabs_active');
  //     $('.portfolio-wrap__item').addClass('portfolio-wrap__item_active');
  //   }

    // || $(this).hasClass('branding') || $(this).hasClass('planning') || $(this).hasClass('marketing') || $(this).hasClass('research')
  // });

  
});

