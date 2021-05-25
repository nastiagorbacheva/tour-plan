$(document).ready(function () {
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

var cardButton = $(".card__button");
  cardButton.on('click', function () {
    $(".navbar-bottom")
      .toggleClass("navbar-bottom--visible");
  });

  cardButton.on("click", openModal);

  var menuButton = $(".menu-button");
  menuButton.on('click', function () {
    $(".navbar-bottom")
      .toggleClass("navbar-bottom--visible");
  });



  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  $(document).on('keyup', function (e) {
    if (e.key == "Escape") $(".modal__close").click();
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  };
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid invalid__newsletter",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Имя должно быть не короче 2 букв"
        },
        email: {
          required: "We need your email address to contact you",
        },
        phone: {
          required: "Please enter your phone number",
        },
      },
    });
  });
  $(".newsletter__subscribe").validate({
    errorLabelContainer: ".subscribe__error",
    messages: {
      email: {
        required: "We need your email address to contact you",
      },
    }
  })
})
$(document).ready(function () {
  $('.phone_with_ddd').mask("+7 (999) 99-99-999");
})