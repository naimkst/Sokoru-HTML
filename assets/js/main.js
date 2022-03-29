(function($) {
  "use strict";
  /*-------------------------------------------
  preloader active
  --------------------------------------------- */
  jQuery(window).on('load',function() {
    jQuery('.preloader').fadeOut('slow');
  });

  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  $(window).on('scroll', function(){
    if( $(window).scrollTop()>80 ){
      $('.sticky').addClass('stick');
    } else {
      $('.sticky').removeClass('stick');
    }
  }); 
  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  $(window).on('scroll', function(){
    var divHeight = $(".single-product-page").outerHeight();
    if( $(window).scrollTop()>divHeight ){
      $('.product-stickty-bar').addClass('active');
    } else {
      $('.product-stickty-bar').removeClass('active');
    }
  }); 
  
  jQuery(document).ready(function(){
    /*---------------------------------
    AOS active
    -----------------------------------*/
    AOS.init();

    // mobile dropdown menu 
    $('.mobile-menu .has-sub-menu .dropdown-btn').on('click', function() {
      $(this).siblings('.sub-menu').slideToggle();
    })
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    }); 
    /*-------------------------------------------
    topbar-slide active
    --------------------------------------------- */
    $('.topbar-slide').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      fade: false,
      vertical: true,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
    });
    /*-------------------------------------------
    brand-slide active
    --------------------------------------------- */
    $('.brand-slide').slick({
      infinite: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: 'linear',
      pauseOnHover: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      variableWidth: true,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*-------------------------------------------
    brand-slide-rtl active
    --------------------------------------------- */
    $('.brand-slide-rtl').slick({
      infinite: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: 'linear',
      pauseOnHover: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      rtl: true,
      variableWidth: true,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*-------------------------------------------
    company-slide active
    --------------------------------------------- */
    $('.company-slide').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      dots: false,
      arrows: false,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
    });
    /*-------------------------------------------
    image-slide active
    --------------------------------------------- */
    $('.image-slide').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
    });
    /*-------------------------------------------
    conversation-list active
    --------------------------------------------- */
    $('.conversation-list').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: false,
      dots: false,
      arrows: false,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
      vertical: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*-------------------------------------------
    single-product-slide active
    --------------------------------------------- */
    $('.single-product-slide').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      prevArrow: '<i class="slick-prev fas fa-angle-left"></i> ',
      nextArrow: '<i class="slick-next fas fa-angle-right"></i> ',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*-------------------------------------------
    switch-card-wrap active
    --------------------------------------------- */
    $('.switch-card-wrap').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          }
        }
      ]
    });
    /*-------------------------------------------
    plastic-product-slide active
    --------------------------------------------- */
    $('.plastic-product-slide').slick({
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
          }
        }
      ]
    });
    /*-------------------------------------------
    recently-product-slide active
    --------------------------------------------- */
    $('.recently-product-slide').slick({
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
          }
        }
      ]
    });
    /*-------------------------------------------
    product-slide active
    --------------------------------------------- */
    $('.product-slide').slick({
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      prevArrow: '<img class="slick-prev" src="assets/images/icon-left-arrow.svg" alt="left-arrow.svg" /> ',
      nextArrow: '<img class="slick-next" src="assets/images/icon-right-arrow.svg" alt="right-arrow" />  ',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
            centerMode: false
          }
        }
      ]
    });
    /*-------------------------------------------
    Product Quantity JS
    --------------------------------------------- */
    $('.qty-btn').on('click', function (e) {
      e.preventDefault();
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find('input').val(newVal);
    });
    /*-------------------------------------------
    js counterUp
    --------------------------------------------- */
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    /*---------------------------------
    venobox Popup active
    -----------------------------------*/
    $('.popup-video').venobox(); 
    /*---------------------------------
    movile video autoplay stop 
    -----------------------------------*/
    var screenWidth = $(window).width();
    if (screenWidth < 767){
      $('video').removeAttr('autoplay');
    } else {
      $('video').attr('autoplay');
    }

  });

})(jQuery);