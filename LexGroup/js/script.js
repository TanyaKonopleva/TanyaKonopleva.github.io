$(document).ready(function() {

  //header fix
  $(window).scroll(function() {
    if($(window).scrollTop() > 90) {
      $('header .navbar').addClass('navbar_fix');
    } else {
      $('header .navbar').removeClass('navbar_fix');
    }
  });


  //Video
  $('.videoMessage-wrap__btn, .videoMessage-wrap__icon').click(function() {
    $('.overlay').css('display', 'flex');
    $('.navbar_fix').hide()
  })

  $('.overlay').click(function(e) {
    if (e.target.tagName === 'VIDEO') return;
    $('.overlay').css('display', 'none');
    $('.navbar_fix').show();
  })

  //Mask for input
  $('.input-phone').mask('+7 999 999-99-99');

  //Selection tour
  $('.selection-tour-wrap').on('click', '.selection-tour-wrap__inner', function(e) {
    
    if (e.target.tagName === 'INPUT') {
      var input = e.target;
      var img = $(input).parent().prev().find('img');
      if (input.checked) {
        img.addClass('img-checked');
      } else {
        img.removeClass('img-checked');
      }  
    } else if (e.target.tagName === 'IMG') {
      var img = e.target;
      var input = $(img).parent().next().find('input');
      $(img).toggleClass('img-checked');
      if ($(img).hasClass('img-checked')) {
        input.prop('checked', true);
      } else {
        input.prop('checked', false);
      }
    }
  });

  //Slider

  $('.arrow_left').on('click', function() {
    $('.slider').slick('slickPrev');
  });
  $('.arrow_right').on('click', function() {
    $('.slider').slick('slickNext');
  });
  $('.slider').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '17px'
          }
        },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '17px'
        }
      }
    ]
  });

  //Toggle menu
  $('.toggle-btn').click(function() {
    $('.toggle-menu').slideToggle(200);
  });

  //Anchor
  $('.menu, .toggle-menu').on('click', 'a', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('html, body').animate({
      scrollTop: top
    }, 1000);
  });



});