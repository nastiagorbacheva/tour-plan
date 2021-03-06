$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {

    loop: true,

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

    loop: true,

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

  var itemButton = $(".item-button");
  cardButton.on('click', function () {
    $(".navbar-bottom")
      .toggleClass("navbar-bottom--visible");
  });

  itemButton.on("click", openModal);

  var itemButtonFirst = $(".item-button--first");
  cardButton.on('click', function () {
    $(".navbar-bottom")
      .toggleClass("navbar-bottom--visible");
  });

  itemButtonFirst.on("click", openModal);

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

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid invalid__newsletter",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name must contain at least 2 characters"
        },
        email: {
          required: "We need your email address to contact you",
        },
        phone: {
          required: "Please enter your phone number",
          minlength: "Must contain at least 10 numbers"
        },
      },
    });
  });

  $(".newsletter__subscribe").validate({
    errorLabelContainer: ".newsletter__error",
    messages: {
      email: {
        required: "We need your email address to contact you",
      },
    }
  })

  $(document).ready(function () {
    $('.footer__input--phone').mask("+7 (999) 99-99-999");
  })
  $(document).ready(function () {
    $('.modal__input--phone').mask("+7 (999) 99-99-999");
  })

  $(".footer__form").validate({
    errorClass: "invalid__footer",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Must contain at least 2 characters",
      },
      phone: {
        required: "Please enter your phone number",
        minlength: "Must contain at least 10 numbers"
      },
    }
    
  });

if (window.innerWidth < 992) {

  function removeAos() {
    var elem = document.getElementById('aos-css-file');
    elem.parentNode.removeChild(elem);
    return false;
  }
  removeAos();

}

  AOS.init();
  
  if (window.innerWidth < 992) {
  var footerLink = $(".footer__link");  
    footerLink.removeClass("footer__link--hover");
  var navbarLink = $(".navbar-menu__link");  
    navbarLink.removeClass("navbar-menu__link--hover");
  var userAvatar = $(".user__avatar");  
    userAvatar.removeClass("user-avatar");
  var userName = $(".user-name");  
    userName.removeClass("user-name--hover");
  var fotLink = $(".footer__link-info");  
    fotLink.removeClass("footer__link--hover");
    fotLink.removeClass("footer__link-info--hover");
}

})
