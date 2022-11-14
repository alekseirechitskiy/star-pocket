import $ from "jquery";
import slick from "slick-carousel"

export default function () {
  $('.tabs-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true
  });
};

