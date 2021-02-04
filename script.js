const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Nav
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards
         ${index / 5 + 0.3}s`;
      }
    });

    //Burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

//Modal functions

let modal = document.getElementById("imgModal");

// Get the button that opens the modal
let btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

//GETTING GALLARY MODAL ELEMENTS
let modalTwo = document.getElementById("gallaryModal");

// Get the button that opens the modal
let imgBtn = document.getElementById("openGallaryModal");

// Get the <span> element that closes the modal
let spanTwo = document.getElementsByClassName("closeGallaryModal")[0];

// When the user clicks the button, open the modal
openModal.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks the button, open the modal
openGallaryModal.onclick = function () {
  modalTwo.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function () {
  modalTwo.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
};

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gallarySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
