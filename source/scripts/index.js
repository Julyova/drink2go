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

const filterForm = document.querySelector('#filter');
const priceRange = document.querySelector('#price-range');
const priceFrom = document.querySelector('#price-from');
const priceTo = document.querySelector('#price-to');

if (priceRange && window.noUiSlider) {
  const PRICE_MIN = 0;
  const PRICE_MAX = 1000;

  window.noUiSlider.create(priceRange, {
    start: [PRICE_MIN, 900],
    connect: true,
    step: 1,
    range: {
      min: PRICE_MIN,
      max: PRICE_MAX,
    },
    handleAttributes: [
      {'aria-label': 'Минимальная цена'},
      {'aria-label': 'Максимальная цена'},
    ],
  });

  priceRange.noUiSlider.on('update', (values, handle) => {
    const value = Math.round(values[handle]);

    if (handle === 0) {
      priceFrom.value = value === PRICE_MIN ? '' : value;
    } else {
      priceTo.value = value;
    }
  });

  priceFrom.addEventListener('change', () => {
    priceRange.noUiSlider.set([priceFrom.value || PRICE_MIN, null]);
  });

  priceTo.addEventListener('change', () => {
    priceRange.noUiSlider.set([null, priceTo.value || PRICE_MAX]);
  });

  filterForm.addEventListener('reset', () => {
    priceRange.noUiSlider.reset();
  });
}
