$(window).scroll(function () {
  if ($(window).scrollTop() > 230) {
    $(".menu-fixd").addClass("fixd-menu")
  } else {
    $(".menu-fixd").removeClass("fixd-menu")
  }

})
$('.hero-slider').slick({
  dots: false,
  arrows: false,
  prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
  infinite: true,
  autoplay: false,
  adaptiveHeight:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,

});
$('.card-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight:true,

});
$('.bank-area-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,

});

// herp-slider end
// backtotop start
