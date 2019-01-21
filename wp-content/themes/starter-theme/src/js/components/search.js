class Search {
  constructor() {
    this.searchBtn = document.querySelector('.search-icon')
  }

  events() {
    this.searchBtn.addEventListener('click', e => {
      e.preventDefault();
      let searchParent = this.searchBtn.parentElement
      let menuItem = searchParent.parentElement.querySelector('.menu-item');
      searchParent.querySelector('.main-search').style.width = menuItem.offsetWidth + 'px';
      searchParent.querySelector('.main-search').style.right = searchParent.offsetWidth - 10 + 'px'
      searchParent.classList.toggle('search-open');
    });
    document.addEventListener('click', e => {
      const outsideElement = document.querySelector(".header-search");
      let targetElement = e.target;
      do {
        if (targetElement == outsideElement) {
            return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);
      this.searchBtn.parentElement.classList.remove('search-open');
    });
  }

  init() {
    this.events();
  }
}

export default Search;
