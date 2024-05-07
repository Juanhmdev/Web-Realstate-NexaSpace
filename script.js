// Javascript for navbar
window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// navgation sidebar menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

// swiper 
const swiper = new Swiper (".swiper", {
    slidesPerView: 3,
    direction: "horizontal",
    lazyLoading: true,
    spaceBetween: 7,
    grabCursor: false,
    centeredSlides: true,
    loop:true,
    keyboard: {
        enabled: true,
    },

    // responsive breakpoints

    breakpoints: {
        320: {
            slidesPerView:1,
            spaceBetween: 30
        },

        700:{
            slidesPerView:1.5,
            spaceBetween:7
        },

        768:{
            slidesPerView:1.5,
            spaceBetween:10,
        },
        1024: { 
            slidesPerView:3,
            spaceBetween:10,
        },
        1440: {
            slidesPerView:3,
            spaceBetween:10,
        },
    },

    // navigation arrows
    navigation:{
        nextEl: ".swiper-custom-nav-next",
        prevEl: ".swiper-custom-nav-prev",
    }
});