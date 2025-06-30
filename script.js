let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  const slidesContainer = document.querySelector('.slides');
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});
document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(parseInt(dot.dataset.index));
  });
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);

showSlide(currentSlide);

function toggleContent(id) {
  const content = document.getElementById(id);
  const isVisible = content.style.display === "block";
  content.style.display = isVisible ? "none" : "block";
}

function goToDetail() {
  window.location.href = "halaman6.html";
}

function goToDetail() {
  window.location.href = "halaman6.html";
}

// Slider Baru
window.onload = function () {
  let slideIndexNew = 0;
  const slidesNew = document.querySelectorAll('.slideNew');

  function showSlidesNew() {
    slidesNew.forEach(slide => slide.classList.remove('active'));
    slideIndexNew = (slideIndexNew + 1) % slidesNew.length;
    slidesNew[slideIndexNew].classList.add('active');
  }

  setInterval(showSlidesNew, 3000);
};
