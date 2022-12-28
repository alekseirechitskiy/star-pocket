import $ from "jquery";
import {ionRangeSlider} from "ion-rangeslider";

export default function () {
  $('.price-slider').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
  });
};
