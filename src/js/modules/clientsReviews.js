import $ from "jquery";
import slick from "slick-carousel"
import Splide from '@splidejs/splide';


export default function () {
  $('.reviews-slide').on('click', function () {
    $(this).toggleClass('reviews-slide--active');
  });
  
  const splide = new Splide('.splide', {
    perPage: 3,
    pagination: false,
    // arrows: false,
    focus: 1 | 'center'

  }).mount();
  // $('.reviews-slider').slick({
  //   slidesToShow: 3,
  //   infinite: true,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   variableWidth: true,
  //   adaptiveHeight: true
  //   // autoplay: true,
  //   // autoplaySpeed: 3000,
  // });
};

