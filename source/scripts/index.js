const menu = document.querySelector('.header__nav');
const toggle = document.querySelector('.header__toggle');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('header__nav--open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
