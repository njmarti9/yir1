/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



const pageload = () => {
    const content = document.querySelector('#content');
    const headerDiv = (0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
    content.appendChild(headerDiv);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageload);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _picgallery1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



const home = () => {
    let slideshow = new _slideshow__WEBPACK_IMPORTED_MODULE_0__["default"]();

    const content = document.querySelector('#content');

    const galleryDiv = (0,_picgallery1__WEBPACK_IMPORTED_MODULE_1__["default"])();

    content.appendChild(galleryDiv);

    slideshow.showSlides(0, "home_slides");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Slideshow {
    constructor() {
        this.slideIndex = 0;
    }

    get slideIndex() {
        return this._slideIndex;
    }

    set slideIndex(n) {
        this._slideIndex = n;
    }

    showSlides(n, className) {
        this.slideIndex = n;
        let i;
        let slides = document.getElementsByClassName(className);
        if (n >= slides.length) {this.slideIndex = 0}
        if (n < 0) {this.slideIndex = slides.length-1}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex].style.display = "block";
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slideshow);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _dist_images_gallery1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _dist_images_gallery2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _dist_images_gallery3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);





const picgallery1 = () => {
    let slideshow = new _slideshow__WEBPACK_IMPORTED_MODULE_0__["default"]();

    const galleryDiv = document.createElement('div');
    galleryDiv.id = "gallery";

    const img1 = document.createElement('img');
    img1.src = _dist_images_gallery1_png__WEBPACK_IMPORTED_MODULE_1__;
    img1.id = "home_slides";
    img1.classList.add("home_slides");

    galleryDiv.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = _dist_images_gallery2_png__WEBPACK_IMPORTED_MODULE_2__;
    img2.id = "home_slides";
    img2.classList.add("home_slides");

    galleryDiv.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = _dist_images_gallery3_png__WEBPACK_IMPORTED_MODULE_3__;
    img3.id = "home_slides";
    img3.classList.add("home_slides");

    galleryDiv.appendChild(img3);

    const buttonDiv = document.createElement('div');
    buttonDiv.id = "button_div";

    const leftButton = document.createElement('button');
    leftButton.id = "home_left_button";
    leftButton.classList.add("slide_button");
    leftButton.textContent = "<";
    leftButton.addEventListener('click', ()=>{
        slideshow.showSlides(slideshow.slideIndex - 1, "home_slides");
    })

    buttonDiv.appendChild(leftButton);

    const rightButton = document.createElement('button');
    rightButton.id = "home_right_button";
    rightButton.classList.add("slide_button");
    rightButton.textContent = ">";
    rightButton.addEventListener('click', ()=>{
        slideshow.showSlides(slideshow.slideIndex + 1, "home_slides");
    })

    buttonDiv.appendChild(rightButton);

    galleryDiv.appendChild(buttonDiv);

    return galleryDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (picgallery1);

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66c9b770c8bc4a041aa0.png";

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a48c68363bb6a174f7ff.png";

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e788b640e843fd3af650.png";

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const header = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = "header";

    const headerTitle = document.createElement('h1');
    headerTitle.id = "header_title";
    // headerTitle.textContent = "Year 1 in Review";
    headerTitle.textContent = "In Progress"

    headerDiv.appendChild(headerTitle);

    return headerDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_pageload__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;