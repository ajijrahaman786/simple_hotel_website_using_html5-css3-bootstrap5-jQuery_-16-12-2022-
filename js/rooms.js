$(document).ready(function(){

   // 2.NAVBAR
  /* srollTop start here */
  $(window).scroll(function(){
    $('.navbar').toggleClass('headerBg', $(this).scrollTop()>100);
  });

   // 5.ROOMS
  /* owl-carousel starts here */
  $('.owl-carousel').owlCarousel({
    items:1,
    loop: true,
    nav: true,
    dots: false,
    autoplaySpeed:2500,
    // autoplay: true,
    autoplayHoverPouse:true,
    smartSpeed:1500,
  });





});





