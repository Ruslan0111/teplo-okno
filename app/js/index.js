window.onload = function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.add('active');
  });

   document.querySelector('.header__menu-close').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.remove('active');
  });

  let menu = ['-10%', '-15%', '-20%', '-35%']

  let swiper = new Swiper(".section-slider__inner", {
    navigation: {
      nextEl: ".section-slider__button-next",
      prevEl: ".section-slider__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="rt-bold ' + className + '"><span>' + (menu[index]) + '</span></span>';
      },
    },
  });
};