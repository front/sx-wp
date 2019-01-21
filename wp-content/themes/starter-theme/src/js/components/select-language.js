class SelectLanguage {
  constructor(select) {
    this.select = select;
  }

  events() {
    this.select.addEventListener('click', e => {
      e.preventDefault();
      this.select.parentElement.querySelector('.js-lang-dropdown').classList.toggle('is-open')
    })
    document.addEventListener('click', e => {
      const outsideElement = this.select;
      let targetElement = e.target;
      do {
        if (targetElement == outsideElement) {
            return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);
      this.select.parentElement.querySelector('.js-lang-dropdown').classList.remove('is-open');
    });
  }

  init() {
    this.events();
  }
}

export default SelectLanguage;
