import $ from "jquery";
import slick from "slick-carousel"

export default function () {
  $('.watched-recently__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev link"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33594 14.97L1.27533 8.00027L7.33594 1.03058" stroke="#F4F4F4"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next link"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.664062 14.97L6.72467 8.00027L0.664063 1.03058" stroke="#F4F4F4"/></svg></button>',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
    ]
  });
};
