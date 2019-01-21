/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ \"./src/js/index.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9qcyc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Menu {\n  constructor() {\n    this.hamburger = document.querySelector('.menu-toggle');\n    this.mainNav = document.querySelectorAll('.main-nav .nav-columns');\n  }\n\n  events() {\n    this.hamburger.addEventListener('click', e => {\n      e.preventDefault();\n      this.hamburger.querySelector('.svg-hamburger').classList.toggle('is-active');\n      document.querySelector('body').classList.toggle('menu-open');\n    });\n    for (let i = 0; i < this.mainNav.length; i++) {\n      this.mainNav[i].addEventListener('click', e => {\n        for (let j = 0; j < this.mainNav.length; j++) {\n          if (this.mainNav[j] != this.mainNav[i]) {\n            this.mainNav[j].querySelector('.main-item').classList.remove('active');\n            this.mainNav[j].querySelector('ul').style.maxHeight = null;\n          }\n        }\n        this.mainNav[i].querySelector('.main-item').classList.toggle('active');\n        var item = this.mainNav[i].querySelector('ul');\n        if (item.style.maxHeight) {\n          item.style.maxHeight = null;\n        } else {\n          item.style.maxHeight = item.scrollHeight + 'px';\n        }\n      });\n    }\n  }\n\n  init() {\n    this.events();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanM/YTliYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNZW51IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKVxuICAgIHRoaXMubWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW5hdiAubmF2LWNvbHVtbnMnKVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIHRoaXMuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmhhbWJ1cmdlci5xdWVyeVNlbGVjdG9yKCcuc3ZnLWhhbWJ1cmdlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XG4gICAgfSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFpbk5hdi5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5tYWluTmF2W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYWluTmF2Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHRoaXMubWFpbk5hdltqXSAhPSB0aGlzLm1haW5OYXZbaV0pIHtcbiAgICAgICAgICAgIHRoaXMubWFpbk5hdltqXS5xdWVyeVNlbGVjdG9yKCcubWFpbi1pdGVtJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIHRoaXMubWFpbk5hdltqXS5xdWVyeVNlbGVjdG9yKCd1bCcpLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluTmF2W2ldLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWl0ZW0nKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMubWFpbk5hdltpXS5xdWVyeVNlbGVjdG9yKCd1bCcpXG4gICAgICAgIGlmIChpdGVtLnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgICAgIGl0ZW0uc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLnN0eWxlLm1heEhlaWdodCA9IGl0ZW0uc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmV2ZW50cygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ0E7QUFDQTtBQW1DQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/menu.js\n");

/***/ }),

/***/ "./src/js/components/search.js":
/*!*************************************!*\
  !*** ./src/js/components/search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Search {\n  constructor() {\n    this.searchBtn = document.querySelector('.search-icon');\n  }\n\n  events() {\n    this.searchBtn.addEventListener('click', e => {\n      e.preventDefault();\n      let searchParent = this.searchBtn.parentElement;\n      let menuItem = searchParent.parentElement.querySelector('.menu-item');\n      searchParent.querySelector('.main-search').style.width = menuItem.offsetWidth + 'px';\n      searchParent.querySelector('.main-search').style.right = searchParent.offsetWidth - 10 + 'px';\n      searchParent.classList.toggle('search-open');\n    });\n    document.addEventListener('click', e => {\n      const outsideElement = document.querySelector(\".header-search\");\n      let targetElement = e.target;\n      do {\n        if (targetElement == outsideElement) {\n          return;\n        }\n        targetElement = targetElement.parentNode;\n      } while (targetElement);\n      this.searchBtn.parentElement.classList.remove('search-open');\n    });\n  }\n\n  init() {\n    this.events();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zZWFyY2guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvc2VhcmNoLmpzP2UyODgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWljb24nKVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIHRoaXMuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgc2VhcmNoUGFyZW50ID0gdGhpcy5zZWFyY2hCdG4ucGFyZW50RWxlbWVudFxuICAgICAgbGV0IG1lbnVJdGVtID0gc2VhcmNoUGFyZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaXRlbScpO1xuICAgICAgc2VhcmNoUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlYXJjaCcpLnN0eWxlLndpZHRoID0gbWVudUl0ZW0ub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgc2VhcmNoUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlYXJjaCcpLnN0eWxlLnJpZ2h0ID0gc2VhcmNoUGFyZW50Lm9mZnNldFdpZHRoIC0gMTAgKyAncHgnXG4gICAgICBzZWFyY2hQYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoLW9wZW4nKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3Qgb3V0c2lkZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1zZWFyY2hcIik7XG4gICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgZG8ge1xuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PSBvdXRzaWRlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9IHdoaWxlICh0YXJnZXRFbGVtZW50KTtcbiAgICAgIHRoaXMuc2VhcmNoQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLW9wZW4nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5ldmVudHMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQ0E7QUErQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/search.js\n");

/***/ }),

/***/ "./src/js/components/select-language.js":
/*!**********************************************!*\
  !*** ./src/js/components/select-language.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass SelectLanguage {\n  constructor(select) {\n    this.select = select;\n  }\n\n  events() {\n    this.select.addEventListener('click', e => {\n      e.preventDefault();\n      this.select.parentElement.querySelector('.js-lang-dropdown').classList.toggle('is-open');\n    });\n    document.addEventListener('click', e => {\n      const outsideElement = this.select;\n      let targetElement = e.target;\n      do {\n        if (targetElement == outsideElement) {\n          return;\n        }\n        targetElement = targetElement.parentNode;\n      } while (targetElement);\n      this.select.parentElement.querySelector('.js-lang-dropdown').classList.remove('is-open');\n    });\n  }\n\n  init() {\n    this.events();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectLanguage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zZWxlY3QtbGFuZ3VhZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvc2VsZWN0LWxhbmd1YWdlLmpzP2VhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VsZWN0TGFuZ3VhZ2Uge1xuICBjb25zdHJ1Y3RvcihzZWxlY3QpIHtcbiAgICB0aGlzLnNlbGVjdCA9IHNlbGVjdDtcbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZWxlY3QucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGFuZy1kcm9wZG93bicpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IG91dHNpZGVFbGVtZW50ID0gdGhpcy5zZWxlY3Q7XG4gICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgZG8ge1xuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PSBvdXRzaWRlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9IHdoaWxlICh0YXJnZXRFbGVtZW50KTtcbiAgICAgIHRoaXMuc2VsZWN0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxhbmctZHJvcGRvd24nKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZXZlbnRzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TGFuZ3VhZ2U7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQUNBO0FBMkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components/select-language.js\n");

/***/ }),

/***/ "./src/js/components/skip-link-focus-fix.js":
/*!**************************************************!*\
  !*** ./src/js/components/skip-link-focus-fix.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass SkipLinkFocusFix {\n\n  fixIt() {\n    var isIe = /(trident|msie)/i.test(navigator.userAgent);\n\n    if (isIe && document.getElementById && window.addEventListener) {\n      window.addEventListener('hashchange', function () {\n        var id = location.hash.substring(1),\n            element;\n\n        if (!/^[A-z0-9_-]+$/.test(id)) {\n          return;\n        }\n\n        element = document.getElementById(id);\n\n        if (element) {\n          if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n            element.tabIndex = -1;\n          }\n\n          element.focus();\n        }\n      }, false);\n    }\n  }\n\n  init() {\n    this.fixIt();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkipLinkFocusFix);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9za2lwLWxpbmstZm9jdXMtZml4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3NraXAtbGluay1mb2N1cy1maXguanM/ZjBmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTa2lwTGlua0ZvY3VzRml4IHtcbiAgXG4gIGZpeEl0ICgpIHtcbiAgICB2YXIgaXNJZSA9IC8odHJpZGVudHxtc2llKS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKTtcblxuICAgIGlmICggaXNJZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZyggMSApLFxuICAgICAgICAgIGVsZW1lbnQ7XG4gIFxuICAgICAgICBpZiAoICEgKCAvXltBLXowLTlfLV0rJC8udGVzdCggaWQgKSApICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuICBcbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xuICAgICAgICAgIGlmICggISAoIC9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KCBlbGVtZW50LnRhZ05hbWUgKSApICkge1xuICAgICAgICAgICAgZWxlbWVudC50YWJJbmRleCA9IC0xO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSApO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5maXhJdCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraXBMaW5rRm9jdXNGaXg7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQ0E7QUErQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/skip-link-focus-fix.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/skip-link-focus-fix */ \"./src/js/components/skip-link-focus-fix.js\");\n/* harmony import */ var _components_select_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select-language */ \"./src/js/components/select-language.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ \"./src/js/components/menu.js\");\n/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search */ \"./src/js/components/search.js\");\n\n\n\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n    (async () => {\n        await new Promise(res => res());\n    })();\n    const skipLink = new _components_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    skipLink.init();\n    const menu = new _components_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    menu.init();\n    const search = new _components_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    search.init();\n    const selectLanguage = new _components_select_language__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector('.js-lang-btn'));\n    selectLanguage.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2luZGV4LmpzPzAyN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IFNraXBMaW5rRml4IGZyb20gJy4vY29tcG9uZW50cy9za2lwLWxpbmstZm9jdXMtZml4JztcbmltcG9ydCBTZWxlY3RMYW5ndWFnZSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LWxhbmd1YWdlJztcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9tZW51JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXMgPT4gcmVzKCkpO1xuICAgIH0pKCk7XG4gICAgY29uc3Qgc2tpcExpbmsgPSBuZXcgU2tpcExpbmtGaXgoKTtcbiAgICBza2lwTGluay5pbml0KCk7XG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XG4gICAgbWVudS5pbml0KCk7XG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFNlYXJjaCgpO1xuICAgIHNlYXJjaC5pbml0KCk7XG4gICAgY29uc3Qgc2VsZWN0TGFuZ3VhZ2UgPSBuZXcgU2VsZWN0TGFuZ3VhZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxhbmctYnRuJykpO1xuICAgIHNlbGVjdExhbmd1YWdlLmluaXQoKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/YWFhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCI/Y2QwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jquery\n");

/***/ })

/******/ });