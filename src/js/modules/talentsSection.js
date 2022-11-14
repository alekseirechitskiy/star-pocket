import $ from "jquery";

export default function () {
  $('.talents-tabs__navigation-link').on('click', function(e) {
    e.preventDefault();
    $('.talents-tabs__navigation-link').removeClass('talents-tabs__navigation-link--active');
    $(this).addClass('talents-tabs__navigation-link--active');

    $('.tabs-content__item').removeClass('tabs-content__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');
  })

};

