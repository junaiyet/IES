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
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

// herp-slider end
// backtotop start
