export default function () {
  const pageNumbers = document.querySelectorAll('.pagination__link--number');

  pageNumbers.forEach(item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      pageNumbers.forEach(i => {
        i.classList.remove('pagination__link--active');
      })
      this.classList.add('pagination__link--active')
    })
  });
};