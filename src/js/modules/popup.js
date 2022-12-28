import $ from "jquery";

export default function () {

  $('.form__checkbox-input-iconed').on('click', function (evt) {
    evt.preventDefault();

    if ($(this).has('checked', 'checked')) {
      $(this).parent().siblings('.popup').toggleClass('popup--open');
      let popupListItem = $(this).parent().siblings('.popup').children('.popup__inner').children('.popup__middle').children('.popup__list').children('.filter-list__item').children('.form__checkbox').children('.form__checkbox-input')
    }
  });
  
  $('.popup__button--ok').on('click', function () {

    let thisListItem = $(this).parent('.popup__bottom').siblings('.popup__middle').children('.popup__list').children('.filter-list__item').children('.form__checkbox').children('.form__checkbox-input');

    $(this).parent('.popup__bottom').parent('.popup__inner').parent('.popup').siblings('.form__checkbox').children('.form__checkbox-input-iconed').removeAttr('checked');

    thisListItem.each(function (i, elem) {
      if ($(this).is(':checked')) {
        $(this).parent('.form__checkbox').parent().parent().parent().parent().parent().siblings().children('.form__checkbox-input-iconed').attr('checked', true);
      }
    });
    
    $(this).parent('.popup__bottom').parent('.popup__inner').parent('.popup').removeClass('popup--open');
  });

  $('.popup__button--choose-all').on('click', function () {
    $(this).parent().siblings('.popup__middle').children().children().children().children('.form__checkbox-input').prop('checked', true);
  });

  $('.popup__button--reset-all').on('click', function () {
    $(this).parent().siblings('.popup__middle').children().children().children().children('.form__checkbox-input').prop('checked', false);
  });

  $('.popup__search-button').on('click', function () {
    $(this).siblings('.popup__search').val('');
  })
};
