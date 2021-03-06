window.onload = function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.add('active');
  });

  document.querySelector('.header__menu-close').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.remove('active');
  });

  document.querySelectorAll('.main-btn').forEach(item => {
    item .addEventListener('click', function() {
      document.querySelector('.modal-bg').classList.add('active');
      document.querySelector('.modal').classList.add('active');
    });
  })

  document.querySelector('.modal__close').addEventListener('click', function() {
    document.querySelector('.modal-bg').classList.remove('active');
    document.querySelector('.modal').classList.remove('active');
  });

  let mainSlider1Menu = ['-10%', '-15%', '-20%', '-35%']
  let mainSlider2Menu = ['-10%', '-10%', '-10%', '-30%', '-30%', '-50%']
  let mainSlider3Menu = ['ПОДАРОК', '-10%', '-20%', '-30%', '-30%', '-50%']

  let mainSlider1 = new Swiper(".winter-mode__slider", {
    navigation: {
      nextEl: ".section-slider__button-next",
      prevEl: ".section-slider__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="rt-bold ' + className + '"><span>' + (mainSlider1Menu[index]) + '</span></span>';
      },
    },
  });

  let mainSlider2 = new Swiper(".big-control__slider", {
    navigation: {
      nextEl: ".section-slider__button-next",
      prevEl: ".section-slider__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="rt-bold ' + className + '"><span>' + (mainSlider2Menu[index]) + '</span></span>';
      },
    },
  });

  let mainSlider3 = new Swiper(".complex-preparation__slider", {
    navigation: {
      nextEl: ".section-slider__button-next",
      prevEl: ".section-slider__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="rt-bold ' + className + '"><span>' + (mainSlider3Menu[index]) + '</span></span>';
      },
    },
  });

  let ordersSlider = new Swiper(".special-orders__slider", {
    navigation: {
      nextEl: ".special-orders__slider-button-next",
      prevEl: ".special-orders__slider-button-prev",
    },
    pagination: {
      el: ".special-orders__slider-pagination",
      clickable: true,
      bulletClass: "special-orders__slider-pagination-bullet",
      bulletActiveClass: "special-orders__slider-pagination-bullet-active",
    },
  });

  let aboutSlider = new Swiper(".about__content-slider", {
    spaceBetween: 15,
    navigation: {
      nextEl: ".about__content-slider-button-next",
      prevEl: ".about__content-slider-button-prev",
    },
    pagination: {
      el: ".about__content-slider-pagination",
      clickable: true,
      bulletClass: "about__content-slider-pagination-bullet",
      bulletActiveClass: "about__content-slider-pagination-bullet-active",
    },
  });
};