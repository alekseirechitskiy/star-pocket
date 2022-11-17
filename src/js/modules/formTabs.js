import $ from "jquery";

export default function () {
  $('.form-box__tab-link').on('click', function(e) {
    e.preventDefault();
    console.log('clicked?');
    $('.form-box__tab-link').removeClass('form-box__tab-link--active');
    $(this).addClass('form-box__tab-link--active');

    $('.form-box__content-item').removeClass('form-box__content-item--active');
    $($(this).attr('href')).addClass('form-box__content-item--active');
  })

};

