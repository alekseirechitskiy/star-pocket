import $ from "jquery";
import slick from "slick-carousel"

export default function () {
  $('.clients-slider').slick({
    slidesToShow: 6,
    variableWidth: true,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
};
