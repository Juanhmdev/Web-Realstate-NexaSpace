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

// faq section

function toggleAccordion(accordionId) {
    var accordionItem = document.getElementById(accordionId);
    var answer = accordionItem.querySelector(".answer");
    var arrow = accordionItem.querySelector(".fa-arrow-up");

    if (accordionItem.classList.contains("active")) {
        accordionItem.classList.remove("active");
        answer.style.maxHeight = "0";
        arrow.style.transform = "rotate(0deg)";
    } else {
        accordionItem.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        arrow.style.transform = "rotate(180deg)";
    }
}

// index page parallax
document.addEventListener("DOMContentLoaded", function () {
    var heroPageImg = document.getElementsByClassName("hero-page-img");
    var aboutImg = document.getElementsByClassName("about-img");
    var propertyImg = document.getElementsByClassName("property-img");

    new simpleParallax(heroPageImg, {
        delay: 0.6,
        scale: 1.2,
        transition: "cubic-bezier(0.1,0,0,1)",
    });

    new simpleParallax(aboutImg, {
        delay: 0.6,
        scale: 1.2,
        transition: "cubic-bezier(0.1,0,0,1)",
    });

    new simpleParallax(propertyImg, {
        delay: 0.6,
        scale: 1.1,
        orientation: "left",
        transition: "cubic-bezier(0.1,0,0,1)",
    });
});