const swiper2 = new Swiper('.global-swiper', {
   spaceBetween: 40,
   effect: "fade",
   // grabCursor: true,
   slidesPerView: 1,
   grabCursor: true,
   navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
   },
});


const swiper3 = new Swiper('.projects-container', {
   spaceBetween: 40,
   loop: true,
   centeredSlides: true,
   pagination: {
      el: ".projects-arrow .swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
   },
   slidesPerView: 1,
   grabCursor: true,
   breakpoints: {
      5000: {
         slidesPerView: 1.2,
      },
      1050: {
         slidesPerView: 1.5,
      },
   },
});



const swiper4 = new Swiper('.team-container', {
   spaceBetween: 40,
   loop: true,
   pagination: {
      el: ".team-arrow .swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
   },
   slidesPerView: 1.2,
   grabCursor: true,
   breakpoints: {
      500: {
         slidesPerView: 1.5,
      },
      750: {
         slidesPerView: 2.5,
      },
      1050: {
         slidesPerView: 3.5,
      },
   },
});


const burger = document.querySelector(".header-burger");
const burgerMenu = document.querySelector('.header-nav');

burger.addEventListener('click', function () {
   burger.classList.toggle('active');
   burgerMenu.classList.toggle('active');
});