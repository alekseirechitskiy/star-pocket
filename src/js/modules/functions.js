/* Прооверка поддержки webp, добавление класса webp или no-webp для HTML */

export function isWebp() {
    // Проверка поддержки webp
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //Добавление класса _webp или _no-webp для HTML
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function toggleFilters() {
  const htmlId = document.querySelector('.html').id;
  if (htmlId === 'talents') {
    const filtesToggler = document.querySelector('.talents-choise__filter-button');
    const ftiltersBlock = document.querySelector('.talents-choise__filters');
  
    filtesToggler.addEventListener('click', () => {
      ftiltersBlock.classList.toggle('talents-choise__filters--open');
    });
  }
}
