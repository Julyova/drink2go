const menu = document.querySelector('.header__nav');
const toggle = document.querySelector('.header__toggle');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('header__nav--open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__arrow--prev');
const nextButton = document.querySelector('.slider__arrow--next');
const stepButtons = document.querySelectorAll('.slider__pagination-button');

let currentIndex = 0;

const showSlide = (index) => {
  slides[currentIndex].classList.remove('slider__item--current');
  stepButtons[currentIndex].classList.remove('slider__pagination-button--current');

  currentIndex = index;

  slides[currentIndex].classList.add('slider__item--current');
  stepButtons[currentIndex].classList.add('slider__pagination-button--current');

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;
};

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

stepButtons.forEach((stepButton, index) => {
  stepButton.addEventListener('click', () => {
    showSlide(index);
  });
});
