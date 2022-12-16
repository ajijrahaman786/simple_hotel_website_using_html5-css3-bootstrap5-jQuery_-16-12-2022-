$(document).ready(function(){

  // 2.NAVBAR
  /* srollTop start here */
  $(window).scroll(function(){
    $('.navbar').toggleClass('headerBg', $(this).scrollTop()>100);
  });

  // 3.BANNER
  /* owl-carousel starts here */
  $('.owl-carousel').owlCarousel({
    items:1,
    loop: true,
    nav: true,
    dots: false,
    autoplaySpeed:2500,
    autoplay: true,
    autoplayHoverPouse:true,
    smartSpeed:1500,
  });


  // 5.ROOMS & TARIFFS
  /* slick-slider starts here */
  $('.slick-slider').slick({

    loop:true,
    dots:true,
    nav:false,
    autoplaySpeed:1000,
    // autoplay:true,
    autoplayHoverPouse:true,
    slidesToShow:2,
    infinite:false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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

  // 6.GALLERY  
  /* magnifyPopup starts here */
  $('.gallery-img').magnificPopup({

    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true,
    }

  });
  $('.gallery-item').magnificPopup({

    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true,
    }

  });
  $('.gallery-image').magnificPopup({

    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true,
    }

  });
  $('.gallery-six').magnificPopup({

    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true,
    }

  });
  $('.gallery-seven').magnificPopup({

    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true,
    }

  });
  $('.gallery-eight').magnificPopup({

    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true,
    }

  });


  // 8.CUSTOMER & SIGHTSEEING
  /* counterUp starts here */
  $('.counter').counterUp({
    time:1000,
    delay:10,
  });




});