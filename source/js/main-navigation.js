const mainNavigation = document.querySelector('.header__main-nav');
const navToggle = document.querySelector('.header__main-nav-toggle');
const mainNavItem = document.querySelectorAll('.header__main-nav-item');

mainNavigation.classList.remove('header__main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (mainNavigation.classList.contains('header__main-nav--closed')) {
    mainNavigation.classList.remove('header__main-nav--closed');
    mainNavigation.classList.add('header__main-nav--opened');
  } else {
    mainNavigation.classList.add('header__main-nav--closed');
    mainNavigation.classList.remove('header__main-nav--opened');
  }
});
