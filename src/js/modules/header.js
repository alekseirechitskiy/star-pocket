export default function () {
  const htmlId = document.querySelector('.html').id;
  const html = document.querySelector('.html');
  const body = document.querySelector('.body');
  const menuButton = document.querySelector('.header__toggle');
  const menuList = document.querySelector('.menu__list');

  // определение активного пункта меню
  const menuLinksList = document.querySelectorAll('.menu__link');
  menuLinksList.forEach(i => {
    if (i.dataset.name === htmlId) {
      i.classList.add('menu__link--active');
    }
  })

  // Открытие меню
  const toggleMenu = () => {
    menuButton.classList.toggle('header__toggle--close');
    menuList.classList.toggle('menu__list--active');
    body.classList.toggle('overflow-hidden');
    html.classList.toggle('overflow-hidden');
  };

  menuButton.addEventListener('click', evt => {
      evt.stopPropagation();
      toggleMenu();
    }
  );

  // Исчезновение header при скролле
  const header = document.querySelector('.header');
  let scrollPrev = 0;

  window.onscroll = function () {
    let scrolled = window.pageYOffset;
    if (scrolled > 200 && scrolled > scrollPrev) {
      header.classList.add('header--out');
    } else {
      header.classList.remove('header--out');
    }
    scrollPrev = scrolled;
  };
};
