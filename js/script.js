$('.service-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrow: true,
  prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
  autoplay: true,
});



var mixer = mixitup('.port-item');



$(document).ready(function () {
  $('.venobox').venobox();
});



$('.testimonial-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrow: true,
  prevArrow: '<i class="fas fa-long-arrow-alt-left prevv"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right nextt"></i>',
  autoplay: true,
});