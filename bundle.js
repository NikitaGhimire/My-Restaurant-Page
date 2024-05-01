/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage(){\n  const content = document.getElementById('content');\n  const contactContent = document.createElement('div');\n  contactContent.innerHTML = `\n  <h2>Contact Us</h2>\n  <p>Get in touch with us!</p>\n  `;\n  content.appendChild(contactContent);\n}\n\n//# sourceURL=webpack://my-restaurant-page/./src/contact-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage(){\n  const content= document.getElementById('content');\n  const homepageContent = document.createElement('div');\n  homepageContent.innerHTML = \n  `\n  <h1> Welcome to Nikita' Restaurant </h1>\n  <p> Indulge in a culinary journey like no other at [Restaurant Name]. Our menu features an exquisite selection of dishes crafted with the finest ingredients, curated by our talented chefs. Experience the perfect blend of flavors, textures, and aromas that will tantalize your taste buds and leave you craving for more. Whether you're looking for a cozy dinner for two, a family celebration, or a special event, [Restaurant Name] offers a warm and inviting ambiance to complement your dining experience. Join us and savor the essence of exceptional dining.or reservations, please call [Phone Number] or book online.</p>\n  `;\n\n  content.appendChild(homepageContent);\n\n}\n\n//# sourceURL=webpack://my-restaurant-page/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _reservation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-page */ \"./src/reservation-page.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_home_page__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)();\n\n  const homeTab = document.getElementById('home-tab');\n  const menuTab = document.getElementById('menu-tab');\n  const reservationTab = document.getElementById('reservation-tab');\n  const contactTab = document.getElementById('contact-tab');\n\n  homeTab.addEventListener('click', () => {\n    clearContent();\n    (0,_home_page__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)();\n  });\n\n  menuTab.addEventListener('click', () => {\n    clearContent();\n    (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\n  });\n\n  reservationTab.addEventListener('click', () => {\n    clearContent();\n    (0,_reservation_page__WEBPACK_IMPORTED_MODULE_3__.loadReservationPage)();\n  });\n\n  contactTab.addEventListener('click', () => {\n    clearContent();\n    (0,_contact_page__WEBPACK_IMPORTED_MODULE_0__.loadContactPage)();\n  });\n\n  function clearContent() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n  }\n});\n\n//# sourceURL=webpack://my-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage(){\n  const content = document.getElementById('content');\n  const menuContent = document.createElement('div');\n  menuContent.innerHTML = `\n   <h2>Our Menu</h2>\n    <ul>\n      <li>Item 1</li>\n      <li>Item 2</li>\n      <li>Item 3</li>\n    </ul>\n  `;\n  content.appendChild(menuContent);\n}\n\n//# sourceURL=webpack://my-restaurant-page/./src/menu-page.js?");

/***/ }),

/***/ "./src/reservation-page.js":
/*!*********************************!*\
  !*** ./src/reservation-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadReservationPage: () => (/* binding */ loadReservationPage)\n/* harmony export */ });\nfunction loadReservationPage(){\n  const content = document.getElementById('content');\n  const reservationContent = document.createElement('div');\n  reservationContent.innerHTML = `\n   <h1> Make your reservations here </h1>\n  `;\n  content.appendChild(reservationContent);\n}\n\n//# sourceURL=webpack://my-restaurant-page/./src/reservation-page.js?");

/***/ })

/******/ 	});
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;