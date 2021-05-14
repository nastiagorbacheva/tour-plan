const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  }
});

$('.newsletter').parallaxBackground();
(function ($) {
    jQuery.fn.parallaxBackground = function (options) {
        options = $.extend({
            min: 0,
            max: 100,
            speed: 1
        }, options);

        var previousScroll = 0;
        var directionScroll;

        var parallax = function () {
            var elemTopPosition = $(this).offset().top;
            var elemHeight = $(this).height();
            var currentBackPosition = parseFloat($(this).css('background-position-y'));
            if (window.pageYOffset + window.innerHeight > elemTopPosition && window.pageYOffset < elemTopPosition + elemHeight) {
                var newBackPosition = (currentBackPosition + options.speed * directionScroll);
                if (newBackPosition < options.min || newBackPosition > options.max)
                    return;
                $(this).css('background-position-y', newBackPosition + '%');
            }
        };

        $(window).on('scroll', { elements: this }, function (event) {
            directionScroll = (window.pageYOffset > previousScroll) ? 1 : -1;
            previousScroll = window.pageYOffset;
            $(event.data.elements).each(parallax);
        });
        return this.each(parallax);
    }
}
)(jQuery);
