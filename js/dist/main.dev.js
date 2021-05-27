"use strict";

var swiper = new Swiper('.swiper-container', {

  loop: true,

  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
});