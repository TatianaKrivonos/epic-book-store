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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/bookCardTemplate.js":
/*!********************************************!*\
  !*** ./src/js/modules/bookCardTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookCardTemplate = {\n  wrap: '.catalog__list',\n  tag: 'article',\n  tagClass: 'product-card',\n  setContent: function setContent(product) {\n    return \"<a href=\\\"\".concat(product.link, \"\\\">\\n\\t\\t\\t       <h3 class=\\\"product-card__title\\\">\").concat(product.name, \"</h3>\\n\\t\\t\\t    </a>\\n\\t\\t\\t\\t<a href=\\\"\").concat(product.link, \"\\\" class=\\\"product-card__img-wrap\\\">\\n\\t\\t\\t\\t\\t<img src=\\\"./img/books_all/\").concat(product.uri, \".png\\\" alt=\\\"\").concat(product.name, \"\\\" class=\\\"product-card-mini__img\\\">\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t<p class=\\\"product-card__descr\\\">\").concat(product.desc, \"</p>\\n\\t\\t\\t\\t\\t<div class=\\\"product-card__price\\\">\").concat(product.price, \" P</div>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/modules/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(product, template) {\n  var productCard = document.createElement(template.tag);\n  productCard.classList.add(template.tagClass);\n  productCard.innerHTML = template.setContent(product);\n  return productCard;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/modules/createElement.js?");

/***/ }),

/***/ "./src/js/modules/insertElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/insertElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/modules/createElement.js\");\n\n\nfunction insertElement(dataProducts, template) {\n  dataProducts.forEach(function (product) {\n    var productCard = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(product, template);\n    var catalogList = document.querySelector(template.wrap);\n    catalogList.appendChild(productCard);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertElement);\n\n//# sourceURL=webpack:///./src/js/modules/insertElement.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_insertElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/insertElement.js */ \"./src/js/modules/insertElement.js\");\n/* harmony import */ var _js_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modules/bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n// function ready(fn) {\n//   if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\"){\n//     fn();\n//   } else {\n//     document.addEventListener('DOMContentLoaded', fn);\n//   }\n// }\n//\n// ready(function(){\n//   console.log('DOM ready');\n// });\n\n //объект данныхдля ajax запроса\n\nvar data = {\n  page: 1,\n  perPage: 8,\n  type: ''\n};\nvar wrap = document.querySelector(_js_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\nif (wrap) {\n  var dataAjax = createDataAjax();\n  sendRequest(dataAjax, function (responseObj) {\n    if (wrap.children) {\n      wrap.innerHTML = '';\n    }\n\n    Object(_js_modules_insertElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _js_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  });\n}\n\nconsole.log(sendRequest(createDataAjax())); //функция подготовки url'a для GET запроса\n\nfunction createDataAjax() {\n  if (window.matchMedia(\"(min-width: 768px)\").matches) {\n    data.perPage = 8;\n  } else {\n    data.perPage = 3;\n  }\n\n  return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n} //вешаем слушатели на табы\n\n\nvar tabsWrap = document.querySelector('.j-tabs');\nvar tabsArray = Array.from(tabsWrap.children);\ntabsArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    data.type = event.target.dataset.type;\n\n    if (window.matchMedia(\"(min-width: 768px)\").matches) {\n      data.perPage = 8;\n    } else {\n      data.perPage = 3;\n    }\n\n    var dataAjax = \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n    console.log(dataAjax);\n    sendRequest(dataAjax);\n  });\n});\n\nfunction sendRequest(data) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var request = JSON.parse(xhr.responseText);\n      console.log(request);\n\n      if (document.querySelector(_js_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap)) {\n        var _wrap = document.querySelector(_js_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\n        if (_wrap.children) {\n          _wrap.innerHTML = '';\n        }\n\n        Object(_js_modules_insertElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(request.items, _js_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n      }\n    } else {\n      // console.log(xhr.responseText);\n      console.log(\"\\u0416\\u0434\\u0443 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438: \".concat(xhr.readyState));\n    }\n  };\n}\n\n;\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });