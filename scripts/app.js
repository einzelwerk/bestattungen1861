const swiper = new Swiper(".sites-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  slidesOffsetBefore: 16,

  navigation: {
    nextEl: ".sites-next",
    prevEl: ".sites-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesOffsetBefore: 0,
    },
  },
});
