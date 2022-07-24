(window["webpackJsonp_inaturalist"] = window["webpackJsonp_inaturalist"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_inaturalist"] = window["webpackJsonp_inaturalist"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");





function Edit({
  attributes,
  setAttributes,
  isSelected
}) {
  function updateUsername(e) {
    setAttributes({
      username: e.target.value,
      iNatWidgetURL: `https://www.inaturalist.org/observations/${e.target.value}.widget?layout=${attributes.layout}&limit=1000&order=desc&order_by=observed_on&d1=${attributes.date1}&d2=${attributes.date2}`
    });
  }

  function updateDate1(e) {
    setAttributes({
      date1: e.target.value,
      iNatWidgetURL: `https://www.inaturalist.org/observations/${attributes.username}.widget?layout=${attributes.layout}&limit=1000&order=desc&order_by=observed_on&d1=${e.target.value}&d2=${attributes.date2}`
    });
  }

  function updateDate2(e) {
    setAttributes({
      date2: e.target.value,
      iNatWidgetURL: `https://www.inaturalist.org/observations/${attributes.username}.widget?layout=${attributes.layout}&limit=1000&order=desc&order_by=observed_on&d1=${attributes.date1}&d2=${e.target.value}`
    });
  }

  function updateLayout(e) {
    setAttributes({
      layout: e.target.value,
      iNatWidgetURL: `https://www.inaturalist.org/observations/${attributes.username}.widget?layout=${e.target.value}&limit=1000&order=desc&order_by=observed_on&d1=${attributes.date1}&d2=${attributes.date2}`
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "inat-widget-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://www.inaturalist.org"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "202px",
    height: "179px",
    viewBox: "0 0 202 179"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, "iNaturalist"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "iNaturalist-Logo",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M0,20.7263158 C54.5248587,26.3201751 97.3849609,46.3506571 128.580307,80.8177618 C129.79793,82.1630894 133.17907,85.9671053 135.762791,85.025 C138.346512,84.0828947 141.499632,78.1866754 142.878787,76.1338022 C145.044488,72.9101545 151.734884,61.4723684 166.297674,56.7618421 C180.860465,52.0513158 199.313331,57.29323 199.98336,57.5252042 C201.242664,57.9611941 202.513754,58.5328898 201.788146,59.5540524 C201.062539,60.5752149 194.897364,63.0330024 190.708719,71.0598586 C186.227594,79.6472066 183.593875,96.2609609 182.94767,99.9224135 C180.402526,115.000988 174.299302,128.982225 165.472214,140.864406 C149.941743,161.770039 125.979483,176.17799 98.1288182,178.632593 C82.9034426,179.974473 68.2067059,177.594989 54.9232727,172.242093 C71.020061,170.658979 90.50223,163.000959 106.151872,144.665804 C125.897674,121.531579 104.288372,133.543421 85.7325581,130.481579 C72.7319736,128.336389 62.1504527,121.641086 44.3908476,98.9974003 C50.0879988,97.4013289 61.3190036,95.4542789 70.3782277,95.0660826 C53.6217502,91.2098699 31.3919846,80.5885837 21.5565397,64.2256177 C29.4608287,61.4778099 39.861857,62.475544 48.1719022,62.8370987 C16.5208943,43.7475222 2.87054309,33.46405 0,20.7263158 Z M75.6325581,-8.52651283e-14 C77.5030666,0.913766419 105.702313,13.1841017 119.32093,31.5605263 C138.346512,57.2328947 139.051163,81.9631579 133.883721,76.3105263 C121.740896,63.0275681 110.57747,54.5219154 96.772093,44.9855263 C86.2023256,37.6842105 79.1384898,16.8742837 75.6325581,-8.52651283e-14 Z M173.874316,64.0813655 C171.289891,64.308092 169.378097,66.5927128 169.604204,69.1842089 C169.830312,71.775705 172.1087,73.6927294 174.693126,73.4660029 C177.277551,73.2392764 179.189345,70.9546556 178.963237,68.3631595 C178.737129,65.7716635 176.458742,63.854639 173.874316,64.0813655 Z",
    id: "iNaturalist-Logo",
    fill: "#74AC00"
  })))), "Observations"), attributes.username && attributes.date1 && attributes.date2 && attributes.layout && !isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "inat-editor-preview"
  }, "Observations will appear here on the frontend. Click here to change settings.") : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    instructions: "Enter settings for iNaturalist"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "inat-block-input-form"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "inat-block-input-label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    for: "username"
  }, "Username: ")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    name: "username",
    type: "text",
    onChange: updateUsername,
    value: attributes.username,
    placeholder: "username"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "inat-block-input-label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    for: "daterange"
  }, "Date range: ")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    name: "daterange",
    type: "date",
    onChange: updateDate1,
    value: attributes.date1,
    placeholder: "YYYY-MM-DD"
  }), "-", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "date",
    onChange: updateDate2,
    value: attributes.date2,
    placeholder: "YYYY-MM-DD"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "inat-block-input-label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    for: "layout"
  }, "Layout: ")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", {
    name: "layout",
    onChange: updateLayout,
    value: attributes.layout
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
    value: "large",
    key: "list"
  }, "list"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
    value: "small",
    key: "grid"
  }, "grid")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('willsides/inaturalist', {
  apiVersion: 2,
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "202px",
    height: "179px",
    viewBox: "0 0 202 179"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, "iNaturalist-Logo"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "iNaturalist-Logo",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M0,20.7263158 C54.5248587,26.3201751 97.3849609,46.3506571 128.580307,80.8177618 C129.79793,82.1630894 133.17907,85.9671053 135.762791,85.025 C138.346512,84.0828947 141.499632,78.1866754 142.878787,76.1338022 C145.044488,72.9101545 151.734884,61.4723684 166.297674,56.7618421 C180.860465,52.0513158 199.313331,57.29323 199.98336,57.5252042 C201.242664,57.9611941 202.513754,58.5328898 201.788146,59.5540524 C201.062539,60.5752149 194.897364,63.0330024 190.708719,71.0598586 C186.227594,79.6472066 183.593875,96.2609609 182.94767,99.9224135 C180.402526,115.000988 174.299302,128.982225 165.472214,140.864406 C149.941743,161.770039 125.979483,176.17799 98.1288182,178.632593 C82.9034426,179.974473 68.2067059,177.594989 54.9232727,172.242093 C71.020061,170.658979 90.50223,163.000959 106.151872,144.665804 C125.897674,121.531579 104.288372,133.543421 85.7325581,130.481579 C72.7319736,128.336389 62.1504527,121.641086 44.3908476,98.9974003 C50.0879988,97.4013289 61.3190036,95.4542789 70.3782277,95.0660826 C53.6217502,91.2098699 31.3919846,80.5885837 21.5565397,64.2256177 C29.4608287,61.4778099 39.861857,62.475544 48.1719022,62.8370987 C16.5208943,43.7475222 2.87054309,33.46405 0,20.7263158 Z M75.6325581,-8.52651283e-14 C77.5030666,0.913766419 105.702313,13.1841017 119.32093,31.5605263 C138.346512,57.2328947 139.051163,81.9631579 133.883721,76.3105263 C121.740896,63.0275681 110.57747,54.5219154 96.772093,44.9855263 C86.2023256,37.6842105 79.1384898,16.8742837 75.6325581,-8.52651283e-14 Z M173.874316,64.0813655 C171.289891,64.308092 169.378097,66.5927128 169.604204,69.1842089 C169.830312,71.775705 172.1087,73.6927294 174.693126,73.4660029 C177.277551,73.2392764 179.189345,70.9546556 178.963237,68.3631595 C178.737129,65.7716635 176.458742,63.854639 173.874316,64.0813655 Z",
    id: "iNaturalist-Logo",
    fill: "#74AC00"
  }))),
  attributes: {
    username: {
      type: 'string'
    },
    date1: {
      type: 'string'
    },
    date2: {
      type: 'string'
    },
    iNatWidgetURL: {
      type: 'string'
    },
    layout: {
      type: 'string',
      default: 'large'
    }
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function save({
  attributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    class: "inat-widget"
  }, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    class: "inat-widget-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: "https://www.inaturalist.org"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "202px",
    height: "179px",
    viewBox: "0 0 202 179"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("title", null, "iNaturalist"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    id: "iNaturalist-Logo",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M0,20.7263158 C54.5248587,26.3201751 97.3849609,46.3506571 128.580307,80.8177618 C129.79793,82.1630894 133.17907,85.9671053 135.762791,85.025 C138.346512,84.0828947 141.499632,78.1866754 142.878787,76.1338022 C145.044488,72.9101545 151.734884,61.4723684 166.297674,56.7618421 C180.860465,52.0513158 199.313331,57.29323 199.98336,57.5252042 C201.242664,57.9611941 202.513754,58.5328898 201.788146,59.5540524 C201.062539,60.5752149 194.897364,63.0330024 190.708719,71.0598586 C186.227594,79.6472066 183.593875,96.2609609 182.94767,99.9224135 C180.402526,115.000988 174.299302,128.982225 165.472214,140.864406 C149.941743,161.770039 125.979483,176.17799 98.1288182,178.632593 C82.9034426,179.974473 68.2067059,177.594989 54.9232727,172.242093 C71.020061,170.658979 90.50223,163.000959 106.151872,144.665804 C125.897674,121.531579 104.288372,133.543421 85.7325581,130.481579 C72.7319736,128.336389 62.1504527,121.641086 44.3908476,98.9974003 C50.0879988,97.4013289 61.3190036,95.4542789 70.3782277,95.0660826 C53.6217502,91.2098699 31.3919846,80.5885837 21.5565397,64.2256177 C29.4608287,61.4778099 39.861857,62.475544 48.1719022,62.8370987 C16.5208943,43.7475222 2.87054309,33.46405 0,20.7263158 Z M75.6325581,-8.52651283e-14 C77.5030666,0.913766419 105.702313,13.1841017 119.32093,31.5605263 C138.346512,57.2328947 139.051163,81.9631579 133.883721,76.3105263 C121.740896,63.0275681 110.57747,54.5219154 96.772093,44.9855263 C86.2023256,37.6842105 79.1384898,16.8742837 75.6325581,-8.52651283e-14 Z M173.874316,64.0813655 C171.289891,64.308092 169.378097,66.5927128 169.604204,69.1842089 C169.830312,71.775705 172.1087,73.6927294 174.693126,73.4660029 C177.277551,73.2392764 179.189345,70.9546556 178.963237,68.3631595 C178.737129,65.7716635 176.458742,63.854639 173.874316,64.0813655 Z",
    id: "iNaturalist-Logo",
    fill: "#74AC00"
  })))), "Observations"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("script", {
    type: "text/javascript",
    charset: "utf-8",
    src: attributes.iNatWidgetURL
  }));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map