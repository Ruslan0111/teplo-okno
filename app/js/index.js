window.onload = function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.add('active');
  });

   document.querySelector('.header__menu-close').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.remove('active');
  });

  let slider1Menu = ['-10%', '-15%', '-20%', '-35%']
  let slider2Menu = ['-10%', '-10%', '-10%', '-30%', '-30%', '-50%']
  let slider3Menu = ['ПОДАРОК', '-10%', '-20%', '-30%', '-30%', '-50%']

  let slider1 = new Swiper(".winter-mode__slider", {
    navigation: {
      nextEl: ".section-slider__button-next",
      prevEl: ".section-slider__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="rt-bold ' + className + '"><span>' + (slider1Menu[index]) + '</span></span>';
      },
    },
  });

  let slider2 = new Swiper(".big-control__slider", {
    navigation: {
      nextEl: ".section-slider__button-next",
      prevEl: ".section-slider__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="rt-bold ' + className + '"><span>' + (slider2Menu[index]) + '</span></span>';
      },
    },
  });

  let slider3 = new Swiper(".complex-preparation__slider", {
    navigation: {
      nextEl: ".section-slider__button-next",
      prevEl: ".section-slider__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="rt-bold ' + className + '"><span>' + (slider3Menu[index]) + '</span></span>';
      },
    },
  });
};