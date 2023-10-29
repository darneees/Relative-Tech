// scroll to top
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// menu mobile
document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.getElementById("dropBtn");
    const dropContent = document.querySelector(".dropup__content");

    dropBtn.addEventListener("click", function () {
        dropContent.classList.toggle("active");
    });
});


// swipper carousel

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  speed: 800,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
  },
  autoplay: {
      delay: 5000,
  },


  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      // when window width is >= 1024px
      1024: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

});
