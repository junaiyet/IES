
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
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

});

// herp-slider end
// backtotop start
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".menu-fixd").addClass("fixd-menu")
  } else {
    $(".menu-fixd").removeClass("fixd-menu")
  }
  if ($(window).scrollTop() > 100) {
    $(".section-mg").addClass("section-auto")
  } else {
    $(".section-mg").removeClass("section-auto")
  }
  if($(window).scrollTop() > 1000){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }

})