const body = document.querySelector('body');
const preloader = document.querySelector('.preloader');

window.addEventListener("load", () => {
  body.classList.remove('no-scroll')
  preloader.classList.add('preloader_hidden')
})


flatpickr('#checkout', {
  dateFormat: 'm / d / Y',
  disableMobile: "true"
})
flatpickr('#checkin', {
  dateFormat: 'm / d / Y',
  disableMobile: "true"
})

const swiperBox = document.querySelector('.review');
if (swiperBox) {
  const swiper = new Swiper(swiperBox, {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 60
          },
          1099: {
            slidesPerView: 2,
            spaceBetween: 110
            },

        },
        
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
  })

}
const swiperBoxPlaces = document.querySelector('.slider-places');
if (swiperBoxPlaces) {
  const swiper = new Swiper(swiperBoxPlaces, {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 12
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 32
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 32
            },

        },
        
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
  })

}


const menu = document.querySelector(".nav");
const hmg = document.querySelector(".hmg");
const menuClose = document.querySelector(".nav__close");
const overlay = document.querySelector(".overlay");


hmg.addEventListener("click", () => {
  menu.classList.add("nav__opened");
  overlay.classList.remove("overlay__closed");
  if (window.innerWidth <= 390) {
    body.classList.add('no-scroll')
  }
});
menuClose.addEventListener("click", () => {
  menu.classList.remove("nav__opened");
  overlay.classList.add("overlay__closed");
  body.classList.remove('no-scroll')
});
overlay.addEventListener("click", () => {
  menu.classList.remove("nav__opened");
  overlay.classList.add("overlay__closed");
  body.classList.remove('no-scroll')
});

const navBox = document.querySelector(".nav__list");

function menuLinks(navBox, classNavLink) {
  navBox.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains(classNavLink)) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      menu.classList.remove("nav__opened");
      overlay.classList.add("overlay__closed");
      body.classList.remove('no-scroll')
    }
  });
}

menuLinks(navBox, "nav__list-item-link");


