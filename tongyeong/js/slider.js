var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },

  navigation: {
    nextEl: ".movement-right",
    prevEl: ".movement-left",
  },

  autoplay: {
    delay: 7500,
    disableOnlnteraction: false,
  },
});
