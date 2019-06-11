class Menu {
  constructor() {
    this.hamburger = document.querySelector('.menu-toggle')
    this.mobileNav = document.querySelectorAll('.nav-columns');
    this.submenu = document.querySelectorAll('.js-sub-menu');
    this.menuWithSub = document.querySelectorAll('.js-menu-with-sub');
  }

  events() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', e => {
        e.preventDefault();
        this.hamburger.querySelector('.svg-hamburger').classList.toggle('is-active')
        document.querySelector('body').classList.toggle('menu-open');
      });
    }

    if (this.submenu) {
      let allMenuElement = this.menuWithSub[0];
      let subMenu = this.submenu[0];
      for (let i = 0; i < this.submenu.length; i++) {
        let subMenu = this.submenu[i];
        let subMenuParent = subMenu.previousElementSibling;
        subMenuParent.classList.add('has-submenu');
        subMenuParent.addEventListener('mouseover', e => {
          e.preventDefault();

          subMenu.style.display = 'block';
          subMenuParent.classList.add('is-opened');

          if ( i > 0 ) {
            subMenuParent.addEventListener('mouseleave', e => {
              subMenu.style.display = 'none';
            })

            subMenu.addEventListener('mouseover', e => {
              subMenu.style.display = 'block';
            })

            subMenu.addEventListener('mouseleave', e => {
              subMenu.style.display = 'none';
            })
          }

          let subMenuWidth = subMenu.offsetWidth;
          let subMenuChildMenu = subMenu.querySelector('.sub-menu');
          if (subMenuChildMenu) {
            subMenuChildMenu.style.left = subMenuWidth + 'px';
          }
        })
      }

      if (allMenuElement) {
        allMenuElement.addEventListener('mouseleave', e => {
          subMenu.style.display = 'none';
        })
      }

    }
  }

  resize() {
    var isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;
    if (isMobile) {
      this.hamburger.addEventListener('click', e => {
        e.preventDefault();
        for (let i = 0; i < this.mobileNav.length; i++) {
          this.mobileNav[i].style.display = 'block'
        }
      })
    }
  }

  init() {
    this.events();
    this.resize();

    window.addEventListener('resize', () => {
      this.resize();
    });
  }
}

export default Menu;
