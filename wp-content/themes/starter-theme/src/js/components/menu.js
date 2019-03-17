class Menu {
  constructor() {
    this.hamburger = document.querySelector('.menu-toggle')
    this.mainNav = document.querySelectorAll('.main-nav .nav-columns')
    this.mobileNav = document.querySelectorAll('.nav-columns');
    this.submenu = document.querySelectorAll('.js-sub-menu');
  }

  events() {
    if ( this.hamburger ) {
      this.hamburger.addEventListener('click', e => {
        e.preventDefault();
        this.hamburger.querySelector('.svg-hamburger').classList.toggle('is-active')
        document.querySelector('body').classList.toggle('menu-open');
      });
    }
    for (let i = 0; i < this.mainNav.length; i++) {
      this.mainNav[i].addEventListener('click', e => {
        for (let j = 0; j < this.mainNav.length; j++) {
          if (this.mainNav[j] != this.mainNav[i]) {
            this.mainNav[j].querySelector('.main-item').classList.remove('active')
            this.mainNav[j].querySelector('ul').style.maxHeight = null
          }
        }
        this.mainNav[i].querySelector('.main-item').classList.toggle('active')
        var item = this.mainNav[i].querySelector('ul')
        if (item.style.maxHeight) {
          item.style.maxHeight = null;
        } else {
          item.style.maxHeight = item.scrollHeight + 'px';
        }
      });
    }

    var isMobile = window.matchMedia("only screen and (max-width: 640px)").matches;
    if (isMobile) {
        this.hamburger.addEventListener('click', e => {
            e.preventDefault();
            for (let i = 0; i < this.mobileNav.length; i++) {
                this.mobileNav[i].style.display = 'block'
            }
        })
    }

    if (this.submenu) {
      for (let i = 0; i < this.submenu.length; i++) {
        let subMenu = this.submenu[i];
        let subMenuParent = subMenu.previousElementSibling;
        subMenuParent.addEventListener('click', e => {
          e.preventDefault();
          subMenu.style.display = 'block';
          let subMenuWidth = subMenu.offsetWidth;
          let subMenuChildMenu = subMenu.querySelector('.sub-menu');
          if (subMenuChildMenu) {
            subMenuChildMenu.style.left = subMenuWidth + 'px';
          }
        })
      }
    }
  }

  init() {
    this.events();
  }
}

export default Menu;
