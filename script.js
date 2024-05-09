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

(function () {
    "use strict";
    /*
     * Form Validation
     */
  
    // Fetch all the forms we want to apply custom validation styles to
    const forms = document.querySelectorAll(".needs-validation");
    const result = document.getElementById("result");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
  
            form.querySelectorAll(":invalid")[0].focus();
          } else {
            /*
             * Form Submission using fetch()
             */
  
            const formData = new FormData(form);
            event.preventDefault();
            event.stopPropagation();
            const object = {};
            formData.forEach((value, key) => {
              object[key] = value;
            });
            const json = JSON.stringify(object);
            result.innerHTML = "Please wait...";
  
            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            })
              .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-green-500");
                } else {
                  console.log(response);
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-red-500");
                }
              })
              .catch((error) => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
              })
              .then(function () {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                  result.style.display = "none";
                }, 5000);
              });
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  