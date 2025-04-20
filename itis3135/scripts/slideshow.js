let sIndex = 1;  

const show = (index) => {
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('demo');
  let captionText = document.getElementById("caption");

  if (index > slides.length) {
    sIndex = 12;
  } else if (index < 1) {
    sIndex = 1;
  } else {
    sIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[sIndex - 1].style.display = "block";
  dots[sIndex - 1].className += " active";
  captionText.innerHTML = dots[sIndex - 1].alt;
};

show(sIndex);

const plusSlides = (n) => {
  show(sIndex += n);
};

const currentSlide = (n) => {
  show(sIndex = n);
};
