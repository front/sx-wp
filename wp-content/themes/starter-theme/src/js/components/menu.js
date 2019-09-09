class Menu {
  constructor() {
    this.hamburger = document.querySelector('.menu-toggle')
    this.mobileNav = document.querySelectorAll('.nav-columns');
    this.submenu = document.querySelectorAll('.js-sub-menu');
    this.menuWithSub = document.querySelectorAll('.js-menu-with-sub');
    this.isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;
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
        subMenu.style.display = "none";

        if (this.isMobile) {
          subMenuParent.addEventListener('click', e => {
            subMenuParent.classList.toggle('is-opened');
            subMenu.style.display = subMenu.style.display == "none" ? "block" : "none";
          });
        } else {
          subMenuParent.addEventListener('mouseenter', e => {
            e.preventDefault();

            subMenu.style.display = 'block';
            subMenuParent.classList.add('is-opened');

            subMenuParent.addEventListener('mouseleave', e => {
              subMenu.style.display = 'none';
            });

            subMenu.addEventListener('mouseenter', e => {
              subMenu.style.display = 'block';
            });

            subMenu.addEventListener('mouseleave', e => {
              subMenu.style.display = 'none';
            });

            let subMenuWidth = subMenu.offsetWidth;
            let subMenuChildMenu = subMenu.querySelector('.sub-menu');
            if (subMenuChildMenu) {
              subMenuChildMenu.style.left = subMenuWidth + 'px';
            }
          })
        }
      }

      if ( ! this.isMobile ) {
        if (allMenuElement) {
          allMenuElement.addEventListener('mouseleave', e => {
            subMenu.style.display = 'none';
          })
        }
      }

    }
  }

  resize() {
    if (this.isMobile) {
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