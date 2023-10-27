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

