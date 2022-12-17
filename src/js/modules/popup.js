import $ from "jquery";

export default function () {
  $('.form__checkbox-input-iconed').on('click', function (evt) { 
    evt.preventDefault();
    if ($(this).attr('checked', true)) {
      $(this).attr('checked', false);
      $(this).parent().siblings().toggleClass('popup--open');
    } else {
      $(this).attr('checked', false)
      $(this).parent().siblings().toggleClass('popup--open');
    }
  })
  
  // let isChecked = false;

  // $('.form__checkbox-input-iconed').on('click', function () {
  //   $(this).parent().siblings().toggleClass('popup--open');
  //   if (isChecked) {
  //     $(this).prop('checked', true);
  //     console.log('sdjkfbdsahjfbjhdsfb');
  //   } else {
  //     $(this).prop('checked', false);

  //   }
  // });

  $('.popup__button--ok').on('click', function () {
    $(this).parent().parent().parent().removeClass('popup--open');

    if (!$(this).parent().siblings('.popup__middle').children().children().children().children('.form__checkbox-input').is(':checked')) {
      $(this).parent().parent().parent().siblings().children('.form__checkbox-input-iconed').prop('checked', false);
    } else {
      $(this).parent().parent().parent().siblings().children('.form__checkbox-input-iconed').prop('checked', true);
      isChecked = true;
    }
    console.log('isChecked : ', isChecked );
  });

  $('.popup__button--choose-all').on('click', function () { 
    $(this).parent().siblings('.popup__middle').children().children().children().children('.form__checkbox-input').prop('checked', true);
    isChecked = true;

  })

  $('.popup__button--reset-all').on('click', function () { 
    $(this).parent().siblings('.popup__middle').children().children().children().children('.form__checkbox-input').prop('checked', false);
    isChecked = false;

  })
  
};

