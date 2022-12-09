// import $ from "jquery";
// import slick from "slick-carousel"
// import Splide from '@splidejs/splide';
import Swiper, { Navigation } from "swiper";


export default function () {
  // $('.reviews-slide').on('click', function () {
  //   $(this).toggleClass('reviews-slide--active');
  // });

  // === SWIPER 

  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        // spaceBetween: 50,
      },
      1280: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },

    // autoHeight: true,
  });

  // === SLICK ====
  
  // $('.reviews-slider').slick({
  //   // arrows: false,
  //   slidesToShow: 3,
  //   infinite: true,
  //   variableWidth: true,
  //   centerMode: true,
  //   prevArrow: '<button type="button" class="slick-prev link"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33594 14.97L1.27533 8.00027L7.33594 1.03058" stroke="#F4F4F4"/></svg></button>',
  //   nextArrow: '<button type="button" class="slick-next link"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.664062 14.97L6.72467 8.00027L0.664063 1.03058" stroke="#F4F4F4"/></svg></button>',
  // });

  // === SPLIDE SLIDER === 
  
  // const splide = new Splide('.splide', {
  //   pagination: false,
  //   type: 'loop',
    // height: '10rem',
    // focus: 'center',
    // autoWidth: true,
    // perPage: 3,
    // arrows: false,
    // focus: 1 | 'center'

  // }).mount();


};

