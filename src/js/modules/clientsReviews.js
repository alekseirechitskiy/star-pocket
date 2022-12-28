import Swiper, { Navigation } from "swiper";

export default function () {
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
};
