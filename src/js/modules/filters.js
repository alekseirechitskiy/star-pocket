import $ from "jquery";

export default function () {
  $('.filter-list__title').on('click', function () {
    $(this).siblings('.filter-list').toggleClass('filter-list--closed');
    $(this).toggleClass('filter-list__title--closed');
  })
};
