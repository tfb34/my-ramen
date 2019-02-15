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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/flexboxgrid/dist/flexboxgrid.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/flexboxgrid/dist/flexboxgrid.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".container-fluid,\n.container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container-fluid {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n\n.row.reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.col.reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-offset-0,\n.col-xs-offset-1,\n.col-xs-offset-2,\n.col-xs-offset-3,\n.col-xs-offset-4,\n.col-xs-offset-5,\n.col-xs-offset-6,\n.col-xs-offset-7,\n.col-xs-offset-8,\n.col-xs-offset-9,\n.col-xs-offset-10,\n.col-xs-offset-11,\n.col-xs-offset-12 {\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.col-xs {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.around-xs {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .container {\n    width: 49rem;\n  }\n\n  .col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-offset-0,\n  .col-sm-offset-1,\n  .col-sm-offset-2,\n  .col-sm-offset-3,\n  .col-sm-offset-4,\n  .col-sm-offset-5,\n  .col-sm-offset-6,\n  .col-sm-offset-7,\n  .col-sm-offset-8,\n  .col-sm-offset-9,\n  .col-sm-offset-10,\n  .col-sm-offset-11,\n  .col-sm-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .container {\n    width: 65rem;\n  }\n\n  .col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-offset-0,\n  .col-md-offset-1,\n  .col-md-offset-2,\n  .col-md-offset-3,\n  .col-md-offset-4,\n  .col-md-offset-5,\n  .col-md-offset-6,\n  .col-md-offset-7,\n  .col-md-offset-8,\n  .col-md-offset-9,\n  .col-md-offset-10,\n  .col-md-offset-11,\n  .col-md-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-md-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-md-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-md-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-md-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .container {\n    width: 76rem;\n  }\n\n  .col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-offset-0,\n  .col-lg-offset-1,\n  .col-lg-offset-2,\n  .col-lg-offset-3,\n  .col-lg-offset-4,\n  .col-lg-offset-5,\n  .col-lg-offset-6,\n  .col-lg-offset-7,\n  .col-lg-offset-8,\n  .col-lg-offset-9,\n  .col-lg-offset-10,\n  .col-lg-offset-11,\n  .col-lg-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/myStyle.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/myStyle.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600);", ""]);

// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n:root{\r\n  --main-bg-color: #E6EDF0;\r\n  --not-black: #433D3D;\r\n}\r\n#mobile-menu{\r\n  height:100vh;\r\n  width:100%;\r\n  position: absolute;\r\n  top:0;\r\n  background-color: white;\r\n  z-index:1;\r\n  opacity: 0;\r\n}\r\n#mobile-items {\r\n  opacity: 0;\r\n  list-style-type: none;\r\n\r\n  position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    bottom: 0;\r\n    margin: auto;\r\n    width: 392px;\r\n    height: 301px;\r\n}\r\n#mobile-items span{\r\n  height: 10px;\r\n    width: 10px;\r\n    background-color: white;\r\n    display: inline-grid;\r\n    border-radius: 100%;\r\n    margin-right: 1em;\r\n\r\n}\r\n.show{\r\n  background-color: red !important;\r\n}\r\n#mobile-items li{\r\n  padding:1em 0;\r\n  font-size:16px;\r\n}\r\n#mobile-items a{\r\n  text-decoration: none;\r\n  color:black;\r\n}\r\n.fadeIn{\r\n  animation: fadein 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n.fadeOut{\r\n  animation: fadeout 0.5s;\r\n}\r\n#bg-color{\r\n  position: absolute;\r\n  top:0;\r\n  height:100vh;\r\n  width:100%;\r\n  z-index: -1;\r\n}\r\n#homepage #bg-color{\r\n  animation: changeColor 1s;\r\n  animation-delay: 3s;\r\n  animation-fill-mode: forwards;\r\n}\r\n@keyframes changeColor{\r\n  from{\r\n    opacity: 0;\r\n    background-color: white;\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    background-color: var(--main-bg-color);\r\n  }\r\n}\r\n.loading-bar{\r\n  width:1%;\r\n  z-index:10;\r\n  opacity: 0;\r\n  height:5px;\r\n  position: absolute;\r\n  top:0;\r\n  background-color:black;\r\n  animation:loadingRight 3s;\r\n  animation-delay: 0.5s;\r\n  animation-fill-mode: forwards;\r\n  /*animation-timing-function: ease-in-out;*/\r\n\r\n}\r\n@keyframes loadingRight{\r\n  0%{\r\n    opacity: 0;\r\n    width:1%;\r\n    transform: scaleY(1);\r\n  }\r\n  60%{\r\n    opacity: 1;\r\n    width:100%;\r\n    transform: scaleY(1);\r\n  }\r\n  75%{\r\n    opacity: 1;\r\n    width:100%;\r\n    transform: scaleY(22);\r\n  }\r\n /* 100%{\r\n    opacity: 1;\r\n    width: 100%;\r\n    transform: scaleY(22);\r\n  }*/\r\n  100%{\r\n    opacity: 0;\r\n    width: 100%;\r\n    transform: translateY(140px) scaleY(10);\r\n  }\r\n  \r\n}\r\n.mobile-navbar{\r\n  position: relative;\r\n  z-index:1000;\r\n  background-color: white;\r\n  height:72px;\r\n  width:100%;\r\n}\r\n.mobile-navbar img{\r\n  position: absolute;\r\n  top:0;\r\n  left:1em;\r\n  bottom:0;\r\n  margin: auto;\r\n  animation: fadeInRight 2s;\r\n}\r\n.menu-btn{\r\n  opacity: 0;\r\n  position: absolute;\r\n  width:30px;\r\n  height:20px;\r\n  top:0;\r\n  right:1em;\r\n  bottom:0;\r\n  margin: auto;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  animation: fadein 1s;\r\n  animation-delay: 2.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.menu-btn span{\r\n  display: inline-grid;\r\n  width:4px;\r\n  height:4px;\r\n  border-radius:100%;\r\n  background-color:#070606;\r\n}\r\n.menu-btn span:nth-child(2){\r\n  margin:0 3px;\r\n}\r\n.menu-btn span:nth-child(3){\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n#bg-pic{\r\n  opacity: 0;\r\n  width:70vw;\r\n  max-width: 400px;\r\n  position: absolute;\r\n  top:0;\r\n  left:8vw;\r\n  right:0;\r\n  bottom:0;\r\n  margin: auto;\r\n  animation: fadein 1.5s;\r\n  animation-delay: 3s;\r\n  animation-fill-mode: forwards;\r\n}\r\n#homepage h1{\r\n  font-family: 'Roboto Slab', serif;\r\n  position: absolute;\r\n  bottom:8vh;\r\n  left:0;\r\n  right:0;\r\n  text-align: center;\r\n  font-weight: 400; /*regular*/\r\n  opacity: 0;\r\n  animation: fadeInUp 2s;\r\n  animation-delay: 3s;\r\n  animation-fill-mode: forwards;\r\n\r\n}\r\n/*animation-direction: alternate;*/\r\n.moveRight{\r\n  animation: moveRight 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n.moveLeft{\r\n  animation: moveLeft 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n@keyframes moveRight{\r\n    from {\r\n      transform: translateX(0px);\r\n    }\r\n    to{\r\n      transform: translateX(11px);\r\n    }\r\n}\r\n@keyframes moveLeft{\r\n    from {\r\n      transform: translateX(0px);\r\n    }\r\n    to{\r\n      transform: translateX(-11px);\r\n    }\r\n}\r\n\r\n.grow{\r\n  animation: grow 0.8s;\r\n  animation-delay: 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n@keyframes grow{\r\n  0%{\r\n    transform: scale(0,0);\r\n    border-radius: 100%;\r\n  }\r\n  50%{\r\n    transform: scale(1,5);\r\n    border-radius: 0px;\r\n  }\r\n  100%{\r\n    transform: rotate(45deg) scale(1,5);\r\n    border-radius: 0px;\r\n  }\r\n}\r\n\r\n.grow2{\r\n  animation: growTwo 0.8s;\r\n  animation-delay: 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.exit2{\r\n  animation: growTwo 1s;\r\n  animation-direction: reverse;\r\n  transition: 1s;\r\n}\r\n@keyframes growTwo{\r\n  0%{\r\n    transform: scale(0);\r\n    border-radius: 100%;\r\n  }\r\n  50%{\r\n    transform: scale(1,5);\r\n    border-radius: 0px;\r\n  }\r\n  100%{\r\n    transform: rotate(-45deg) scale(1,5);\r\n    border-radius: 0px;\r\n  }\r\n}\r\n\r\n/* FADE IN */\r\n@keyframes fadein{\r\n  from{\r\n    opacity:0;\r\n  }\r\n  to{\r\n    opacity:1;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUp{\r\n  from{\r\n    opacity: 0;\r\n    transform: translateY(25px);\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    transform:translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInRight{\r\n  from{\r\n    opacity: 0;\r\n    transform: translateX(-20px);\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInLeft{\r\n  from{\r\n    opacity: 0;\r\n    transform: translateX(20px);\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes fadeout{\r\n  from{\r\n    opacity:1;\r\n  }\r\n  to{\r\n    opacity:0;\r\n  }\r\n}\r\n\r\n.fadeInRight{\r\n    animation: fadeInRight 0.5s;\r\n    animation-delay: 0.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n#about #bg-color{\r\n  background-color: #FDF8F8 !important;\r\n}\r\n\r\n#about{\r\n  color: var(--not-black);\r\n}\r\n#about h1, #menu h1, #contact-us h1{\r\n  font-weight: 400;\r\n  margin-top:1.5em;\r\n  text-align: center;\r\n  animation: fadeInUp 1s;\r\n  animation-delay: 0.5s;\r\n  opacity: 0;\r\n  animation-fill-mode: forwards;\r\n}\r\n#about p{\r\n  font-family: 'Roboto', sans-serif;\r\n  padding:0 1em;\r\n  text-align: left;\r\n  line-height: 1.5em;\r\n  animation: fadeInUp 1s;\r\n  animation-delay: 0.8s;\r\n  opacity: 0;\r\n  animation-fill-mode: forwards;\r\n  max-width: 450px;\r\n  margin: 1em auto;\r\n}\r\n#about-pic{\r\n  width:100%;\r\n  margin-top:2em;\r\n  animation: fadeInUp 1s;\r\n  animation-delay: 1s;\r\n  opacity: 0;\r\n  animation-fill-mode: forwards;\r\n}\r\n.menu-pic{\r\n  /*width: 30vw;\r\n  height: 30vw;*/\r\n  width:130px;\r\n  height:130px;\r\n  max-width: 250px;\r\n  max-height: 250px;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  right:0;\r\n  bottom:0;\r\n  margin:auto;\r\n}\r\n.food-menu-wrapper{\r\n  width: 100%;\r\n  max-width: 500px;\r\n  margin: 0 auto;\r\n}\r\n.text-box{\r\n  font-family: 'Source Serif Pro', serif;\r\n  color:var(--not-black);\r\n}\r\n.text-box h2{\r\n  font-weight: 600;/*semibold*/\r\n  position: relative;\r\n}\r\n.text-box h2 span{\r\n    display: block;\r\n    width: 150px;\r\n    height: 8px;\r\n    background-color: rgba(242,201,76,0.41);\r\n    position: absolute;\r\n    bottom: 2px;\r\n    z-index: -1;\r\n}\r\n.text-box p{\r\n  font-weight: 400;\r\n}\r\n.price{\r\n  text-align: right;\r\n  font-weight: bold;\r\n  width:150px;\r\n}\r\n.row{\r\n  width:100%;\r\n}\r\n.pic-box{\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n#side-dishes span{\r\n  background-color: rgba(111, 207, 151, 0.51);\r\n}\r\n#dessert span{\r\n  background: rgba(217, 107, 166, 0.41);\r\n}\r\n.divider .line{\r\n  width:40px;\r\n  height:2px;\r\n  background: #C4C4C4;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right:1em;\r\n}\r\n.divider span{\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-weight: 300;\r\n  font-size:16px;\r\n  color:black;\r\n}\r\n.divider{\r\n  margin-bottom: 3em;\r\n  margin-top:4em;\r\n  opacity: 0;\r\n  animation: fadeInUp 1s;\r\n  animation-delay: 1s;\r\n  animation-fill-mode: forwards;\r\n}\r\n.menu-item{\r\n  opacity: 0;\r\n  animation: fadeInUp 1s;\r\n  animation-delay: 1s;\r\n  animation-fill-mode: forwards;\r\n}\r\n#contact-us{\r\n  font-family: 'Source Serif Pro', serif;\r\n  color:#433D3D;\r\n}\r\n#contact-us h1{\r\n  margin-bottom: 2em;\r\n}\r\n#contact-us .info{\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n  display: block;\r\n  color:#433D3D;\r\n  margin-top:1em;\r\n}\r\n.info-box{\r\n  margin-bottom: 2.5em;\r\n}\r\n.info-wrapper{\r\n  text-align: center;\r\n}\r\n.row{\r\n  margin-left:0 !important;/*0.5rem*/\r\n}\r\n.desktop-navbar{\r\n  display: none;\r\n}\r\n.dskt-content{\r\n  display: none;\r\n}\r\n#menu .header-content-box, #contact-us .header-content-box{\r\n  display: none;\r\n}\r\n#logo{\r\n  display: none;\r\n}\r\n/* TABLET */\r\n@media only screen and (min-width:768px){\r\n  #homepage h1{\r\n    font-size: 46px;\r\n  }\r\n  #about p{\r\n    font-size: 22px;\r\n  }\r\n}\r\n/* DESKTOP */\r\n@media only screen and (min-width: 1024px){\r\n  .mobile-navbar,#mobile-menu{\r\n    display: none;\r\n  }\r\n  #logo{\r\n    display: block;\r\n    width:150px;\r\n    position: absolute;\r\n    top:1em;\r\n    left:1em;\r\n    animation: fadeInRight 2s;\r\n  }\r\n  #homepage #bg-color{\r\n    animation: changeColor 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n  }\r\n  #bg-pic{\r\n    animation: fadein 1.5s;\r\n    animation-delay: 1.5s;\r\n    animation-fill-mode: forwards;\r\n  }\r\n  #homepage h1{\r\n    text-align: left;\r\n    width:50%;\r\n    left: 4vw;\r\n    bottom: 30vh;\r\n    animation: fadeInUp 2s;\r\n    animation-delay: 1.5s;\r\n    animation-fill-mode: forwards;\r\n  }\r\n  .desktop-navbar{\r\n    display: block;\r\n    background: white;\r\n    position: fixed;\r\n    width:130px;\r\n    height:100%;\r\n    top:0;\r\n    right:0;\r\n    opacity: 0;\r\n    animation: fadeInLeft 1s;\r\n    animation-delay: 2.5s;\r\n    animation-fill-mode: forwards;\r\n    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);\r\n  }\r\n  .desktop-navbar ul{\r\n    list-style-type: none;\r\n    list-style: none;\r\n    padding:0;\r\n    text-align: center;\r\n    position: absolute;\r\n    height:322px;\r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom: 0;\r\n    margin:auto;\r\n  }\r\n\r\n  .desktop-navbar li:not(:last-child){\r\n      margin-bottom: 76px;\r\n  }\r\n  .desktop-navbar a{\r\n    text-decoration: none;\r\n    color:var(--not-black);\r\n    font-family: 'Roboto Slab', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n  }\r\n  .desktop-navbar a:hover{\r\n    text-decoration: underline;\r\n    text-underline-position: under;\r\n  }\r\n  .vertical-divider{\r\n    height: 220px;\r\n    width:1px;\r\n    background:var(--not-black);\r\n  }\r\n  .header-content-box{\r\n    width:892px;\r\n    top:0;\r\n    margin-left:0;\r\n  }\r\n  .header-content-box div[class*=\"col\"]{\r\n    position: relative;\r\n  }\r\n  .header-content-box p{\r\n    margin-top:0 !important;\r\n    padding-top: 8em !important;\r\n  }\r\n\r\n  .content-font{\r\n    font-size:16px !important;\r\n    font-family: 'Roboto Slab', sans-serif;\r\n    font-weight: 300;\r\n    line-height: 30px;\r\n    padding:0 !important;\r\n    margin:0 !important;\r\n  }\r\n  .header-content-box h1{\r\n    font-size:38px !important;\r\n    font-family: 'Roboto Slab', sans-serif !important;\r\n    font-weight: 300 !important;\r\n    margin-top:0 !important;\r\n    color: var(--not-black);\r\n    position: absolute;\r\n    right: 2em;\r\n    top: 3.5em;\r\n    margin: auto;\r\n  }\r\n  #about-pic{\r\n    display: none;\r\n  }\r\n  #description-box{\r\n    display: none;\r\n  }\r\n  #mission .pic{\r\n    height: 50vh;\r\n    width:100%;\r\n  }\r\n  h2{\r\n    font-family: 'Roboto Slab', sans-serif !important;\r\n    font-size:38px;\r\n    font-weight: 300;\r\n    margin-bottom: 5px;\r\n  }\r\n  .divider{\r\n    width:340px;\r\n    height:1px;\r\n    margin:0;\r\n    background: var(--not-black);\r\n    position: absolute;\r\n    left: -3em;\r\n  }\r\n  .description{\r\n    margin-top:3.5em !important;\r\n  }\r\n  section{\r\n    margin-top:30vh;\r\n    width:85%;\r\n    margin-bottom: 8em;\r\n  }\r\n  .dskt-content{\r\n    display: block;\r\n  }\r\n  #menu .title, #contact-us .title{\r\n    display: none;\r\n  }\r\n  #menu .header-content-box, #contact-us .header-content-box{\r\n    display: block;\r\n    margin-bottom: 15vh;\r\n  }\r\n  .food-menu-wrapper{\r\n    width: 80%;\r\n    max-width:unset;\r\n    margin: 0 auto;\r\n    margin-left: 2vw;\r\n    padding:4em 0;\r\n  }\r\n  .food-menu-wrapper h2{\r\n    font-size:24px;\r\n  }\r\n  .contact-info-wrapper{\r\n    width:1000px;\r\n    margin-top: 15vh;\r\n  }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/flexboxgrid/dist/flexboxgrid.css":
/*!*******************************************************!*\
  !*** ./node_modules/flexboxgrid/dist/flexboxgrid.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./flexboxgrid.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flexboxgrid/dist/flexboxgrid.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myStyle.css */ "./src/myStyle.css");
/* harmony import */ var _myStyle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_myStyle_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flexboxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flexboxgrid */ "./node_modules/flexboxgrid/dist/flexboxgrid.css");
/* harmony import */ var flexboxgrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flexboxgrid__WEBPACK_IMPORTED_MODULE_1__);



window.onload = function(){
	console.log("hello")
	setInterval(function(){loadPage();}, 1000);
}

function loadPage(){
	document.getElementsByTagName("body")[0].style.display = "block";
}

function animateMenuBtn(x){
	var leftDot = x.getElementsByTagName('span')[0];
	var midDot = x.getElementsByTagName('span')[1];
	var midDot2 = x.getElementsByTagName('span')[2];
	var rightDot = x.getElementsByTagName('span')[3];
	leftDot.classList.toggle("moveRight");
	rightDot.classList.toggle("moveLeft");

	midDot.classList.toggle("grow");
	midDot2.classList.toggle("grow2");

	toggleMenu();

	document.getElementById("mobile-items").classList.toggle("fadeInRight");
}


function toggleMenu(){
	var menu = document.getElementById("mobile-menu");
	if(menu.classList.contains("fadeIn"))
		menu.classList.replace("fadeIn", "fadeOut");
	else
		menu.classList.replace("fadeOut","fadeIn");
}
window.animateMenuBtn = animateMenuBtn;

/***/ }),

/***/ "./src/myStyle.css":
/*!*************************!*\
  !*** ./src/myStyle.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./myStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/myStyle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzIiwid2VicGFjazovLy8uL3NyYy9teVN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcz9hNTNjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXlTdHlsZS5jc3M/YTU1OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsMkZBQXNDO0FBQ3pFO0FBQ0EsY0FBYyxRQUFTLGtDQUFrQyx1QkFBdUIsc0JBQXNCLEdBQUcsc0JBQXNCLHdCQUF3Qix1QkFBdUIsR0FBRyxVQUFVLDJCQUEyQix5QkFBeUIseUJBQXlCLGtCQUFrQix3QkFBd0IsdUJBQXVCLG1CQUFtQixtQ0FBbUMsa0NBQWtDLDRCQUE0Qix3QkFBd0Isd0JBQXdCLG9CQUFvQiwwQkFBMEIseUJBQXlCLEdBQUcsa0JBQWtCLG1DQUFtQyxtQ0FBbUMsb0NBQW9DLGdDQUFnQyxHQUFHLGtCQUFrQixpQ0FBaUMsbUNBQW1DLHVDQUF1QyxtQ0FBbUMsR0FBRywwWkFBMFosMkJBQTJCLHdCQUF3Qix1QkFBdUIsbUJBQW1CLDBCQUEwQix5QkFBeUIsR0FBRyxhQUFhLHdCQUF3Qix5QkFBeUIsaUJBQWlCLCtCQUErQixrQkFBa0Isb0JBQW9CLEdBQUcsZUFBZSx5Q0FBeUMsNEJBQTRCLDJCQUEyQixHQUFHLGVBQWUsMENBQTBDLDZCQUE2Qiw0QkFBNEIsR0FBRyxlQUFlLGlDQUFpQyxvQkFBb0IsbUJBQW1CLEdBQUcsZUFBZSwwQ0FBMEMsNkJBQTZCLDRCQUE0QixHQUFHLGVBQWUsMENBQTBDLDZCQUE2Qiw0QkFBNEIsR0FBRyxlQUFlLGlDQUFpQyxvQkFBb0IsbUJBQW1CLEdBQUcsZUFBZSwwQ0FBMEMsNkJBQTZCLDRCQUE0QixHQUFHLGVBQWUsMENBQTBDLDZCQUE2Qiw0QkFBNEIsR0FBRyxlQUFlLGlDQUFpQyxvQkFBb0IsbUJBQW1CLEdBQUcsZ0JBQWdCLDBDQUEwQyw2QkFBNkIsNEJBQTRCLEdBQUcsZ0JBQWdCLDBDQUEwQyw2QkFBNkIsNEJBQTRCLEdBQUcsZ0JBQWdCLGtDQUFrQyxxQkFBcUIsb0JBQW9CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHNCQUFzQiw2QkFBNkIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsZUFBZSw0QkFBNEIseUJBQXlCLGdDQUFnQyxzQkFBc0IsR0FBRyxnQkFBZ0IsNkJBQTZCLDBCQUEwQiw0QkFBNEIsdUJBQXVCLEdBQUcsYUFBYSwwQkFBMEIsdUJBQXVCLDhCQUE4QixvQkFBb0IsR0FBRyxhQUFhLDZCQUE2QiwwQkFBMEIsNEJBQTRCLEdBQUcsZ0JBQWdCLDhCQUE4QiwyQkFBMkIsd0JBQXdCLEdBQUcsZ0JBQWdCLDJCQUEyQix3QkFBd0IsMEJBQTBCLEdBQUcsZ0JBQWdCLDhCQUE4QixrQ0FBa0MsR0FBRyxpQkFBaUIsOEJBQThCLDJCQUEyQixtQ0FBbUMsR0FBRyxlQUFlLGlDQUFpQyx1QkFBdUIsY0FBYyxHQUFHLGNBQWMsaUNBQWlDLHNCQUFzQixhQUFhLEdBQUcsOENBQThDLGdCQUFnQixtQkFBbUIsS0FBSyw4Y0FBOGMsNkJBQTZCLDBCQUEwQix5QkFBeUIscUJBQXFCLDRCQUE0QiwyQkFBMkIsS0FBSyxlQUFlLDBCQUEwQiwyQkFBMkIsbUJBQW1CLGlDQUFpQyxvQkFBb0Isc0JBQXNCLEtBQUssaUJBQWlCLDJDQUEyQyw4QkFBOEIsNkJBQTZCLEtBQUssaUJBQWlCLDRDQUE0QywrQkFBK0IsOEJBQThCLEtBQUssaUJBQWlCLG1DQUFtQyxzQkFBc0IscUJBQXFCLEtBQUssaUJBQWlCLDRDQUE0QywrQkFBK0IsOEJBQThCLEtBQUssaUJBQWlCLDRDQUE0QywrQkFBK0IsOEJBQThCLEtBQUssaUJBQWlCLG1DQUFtQyxzQkFBc0IscUJBQXFCLEtBQUssaUJBQWlCLDRDQUE0QywrQkFBK0IsOEJBQThCLEtBQUssaUJBQWlCLDRDQUE0QywrQkFBK0IsOEJBQThCLEtBQUssaUJBQWlCLG1DQUFtQyxzQkFBc0IscUJBQXFCLEtBQUssa0JBQWtCLDRDQUE0QywrQkFBK0IsOEJBQThCLEtBQUssa0JBQWtCLDRDQUE0QywrQkFBK0IsOEJBQThCLEtBQUssa0JBQWtCLG9DQUFvQyx1QkFBdUIsc0JBQXNCLEtBQUssd0JBQXdCLHFCQUFxQixLQUFLLHdCQUF3QiwrQkFBK0IsS0FBSyx3QkFBd0IsZ0NBQWdDLEtBQUssd0JBQXdCLHVCQUF1QixLQUFLLHdCQUF3QixnQ0FBZ0MsS0FBSyx3QkFBd0IsZ0NBQWdDLEtBQUssd0JBQXdCLHVCQUF1QixLQUFLLHdCQUF3QixnQ0FBZ0MsS0FBSyx3QkFBd0IsZ0NBQWdDLEtBQUssd0JBQXdCLHVCQUF1QixLQUFLLHlCQUF5QixnQ0FBZ0MsS0FBSyx5QkFBeUIsZ0NBQWdDLEtBQUssaUJBQWlCLDhCQUE4QiwyQkFBMkIsa0NBQWtDLHdCQUF3QixLQUFLLGtCQUFrQiwrQkFBK0IsNEJBQTRCLDhCQUE4Qix5QkFBeUIsS0FBSyxlQUFlLDRCQUE0Qix5QkFBeUIsZ0NBQWdDLHNCQUFzQixLQUFLLGVBQWUsK0JBQStCLDRCQUE0Qiw4QkFBOEIsS0FBSyxrQkFBa0IsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsS0FBSyxrQkFBa0IsNkJBQTZCLDBCQUEwQiw0QkFBNEIsS0FBSyxrQkFBa0IsZ0NBQWdDLG9DQUFvQyxLQUFLLG1CQUFtQixnQ0FBZ0MsNkJBQTZCLHFDQUFxQyxLQUFLLGlCQUFpQixtQ0FBbUMseUJBQXlCLGdCQUFnQixLQUFLLGdCQUFnQixtQ0FBbUMsd0JBQXdCLGVBQWUsS0FBSyxHQUFHLDhDQUE4QyxnQkFBZ0IsbUJBQW1CLEtBQUssOGNBQThjLDZCQUE2QiwwQkFBMEIseUJBQXlCLHFCQUFxQiw0QkFBNEIsMkJBQTJCLEtBQUssZUFBZSwwQkFBMEIsMkJBQTJCLG1CQUFtQixpQ0FBaUMsb0JBQW9CLHNCQUFzQixLQUFLLGlCQUFpQiwyQ0FBMkMsOEJBQThCLDZCQUE2QixLQUFLLGlCQUFpQiw0Q0FBNEMsK0JBQStCLDhCQUE4QixLQUFLLGlCQUFpQixtQ0FBbUMsc0JBQXNCLHFCQUFxQixLQUFLLGlCQUFpQiw0Q0FBNEMsK0JBQStCLDhCQUE4QixLQUFLLGlCQUFpQiw0Q0FBNEMsK0JBQStCLDhCQUE4QixLQUFLLGlCQUFpQixtQ0FBbUMsc0JBQXNCLHFCQUFxQixLQUFLLGlCQUFpQiw0Q0FBNEMsK0JBQStCLDhCQUE4QixLQUFLLGlCQUFpQiw0Q0FBNEMsK0JBQStCLDhCQUE4QixLQUFLLGlCQUFpQixtQ0FBbUMsc0JBQXNCLHFCQUFxQixLQUFLLGtCQUFrQiw0Q0FBNEMsK0JBQStCLDhCQUE4QixLQUFLLGtCQUFrQiw0Q0FBNEMsK0JBQStCLDhCQUE4QixLQUFLLGtCQUFrQixvQ0FBb0MsdUJBQXVCLHNCQUFzQixLQUFLLHdCQUF3QixxQkFBcUIsS0FBSyx3QkFBd0IsK0JBQStCLEtBQUssd0JBQXdCLGdDQUFnQyxLQUFLLHdCQUF3Qix1QkFBdUIsS0FBSyx3QkFBd0IsZ0NBQWdDLEtBQUssd0JBQXdCLGdDQUFnQyxLQUFLLHdCQUF3Qix1QkFBdUIsS0FBSyx3QkFBd0IsZ0NBQWdDLEtBQUssd0JBQXdCLGdDQUFnQyxLQUFLLHdCQUF3Qix1QkFBdUIsS0FBSyx5QkFBeUIsZ0NBQWdDLEtBQUsseUJBQXlCLGdDQUFnQyxLQUFLLGlCQUFpQiw4QkFBOEIsMkJBQTJCLGtDQUFrQyx3QkFBd0IsS0FBSyxrQkFBa0IsK0JBQStCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLEtBQUssZUFBZSw0QkFBNEIseUJBQXlCLGdDQUFnQyxzQkFBc0IsS0FBSyxlQUFlLCtCQUErQiw0QkFBNEIsOEJBQThCLEtBQUssa0JBQWtCLGdDQUFnQyw2QkFBNkIsMEJBQTBCLEtBQUssa0JBQWtCLDZCQUE2QiwwQkFBMEIsNEJBQTRCLEtBQUssa0JBQWtCLGdDQUFnQyxvQ0FBb0MsS0FBSyxtQkFBbUIsZ0NBQWdDLDZCQUE2QixxQ0FBcUMsS0FBSyxpQkFBaUIsbUNBQW1DLHlCQUF5QixnQkFBZ0IsS0FBSyxnQkFBZ0IsbUNBQW1DLHdCQUF3QixlQUFlLEtBQUssR0FBRyw4Q0FBOEMsZ0JBQWdCLG1CQUFtQixLQUFLLDhjQUE4Yyw2QkFBNkIsMEJBQTBCLHlCQUF5QixxQkFBcUIsNEJBQTRCLDJCQUEyQixLQUFLLGVBQWUsMEJBQTBCLDJCQUEyQixtQkFBbUIsaUNBQWlDLG9CQUFvQixzQkFBc0IsS0FBSyxpQkFBaUIsMkNBQTJDLDhCQUE4Qiw2QkFBNkIsS0FBSyxpQkFBaUIsNENBQTRDLCtCQUErQiw4QkFBOEIsS0FBSyxpQkFBaUIsbUNBQW1DLHNCQUFzQixxQkFBcUIsS0FBSyxpQkFBaUIsNENBQTRDLCtCQUErQiw4QkFBOEIsS0FBSyxpQkFBaUIsNENBQTRDLCtCQUErQiw4QkFBOEIsS0FBSyxpQkFBaUIsbUNBQW1DLHNCQUFzQixxQkFBcUIsS0FBSyxpQkFBaUIsNENBQTRDLCtCQUErQiw4QkFBOEIsS0FBSyxpQkFBaUIsNENBQTRDLCtCQUErQiw4QkFBOEIsS0FBSyxpQkFBaUIsbUNBQW1DLHNCQUFzQixxQkFBcUIsS0FBSyxrQkFBa0IsNENBQTRDLCtCQUErQiw4QkFBOEIsS0FBSyxrQkFBa0IsNENBQTRDLCtCQUErQiw4QkFBOEIsS0FBSyxrQkFBa0Isb0NBQW9DLHVCQUF1QixzQkFBc0IsS0FBSyx3QkFBd0IscUJBQXFCLEtBQUssd0JBQXdCLCtCQUErQixLQUFLLHdCQUF3QixnQ0FBZ0MsS0FBSyx3QkFBd0IsdUJBQXVCLEtBQUssd0JBQXdCLGdDQUFnQyxLQUFLLHdCQUF3QixnQ0FBZ0MsS0FBSyx3QkFBd0IsdUJBQXVCLEtBQUssd0JBQXdCLGdDQUFnQyxLQUFLLHdCQUF3QixnQ0FBZ0MsS0FBSyx3QkFBd0IsdUJBQXVCLEtBQUsseUJBQXlCLGdDQUFnQyxLQUFLLHlCQUF5QixnQ0FBZ0MsS0FBSyxpQkFBaUIsOEJBQThCLDJCQUEyQixrQ0FBa0Msd0JBQXdCLEtBQUssa0JBQWtCLCtCQUErQiw0QkFBNEIsOEJBQThCLHlCQUF5QixLQUFLLGVBQWUsNEJBQTRCLHlCQUF5QixnQ0FBZ0Msc0JBQXNCLEtBQUssZUFBZSwrQkFBK0IsNEJBQTRCLDhCQUE4QixLQUFLLGtCQUFrQixnQ0FBZ0MsNkJBQTZCLDBCQUEwQixLQUFLLGtCQUFrQiw2QkFBNkIsMEJBQTBCLDRCQUE0QixLQUFLLGtCQUFrQixnQ0FBZ0Msb0NBQW9DLEtBQUssbUJBQW1CLGdDQUFnQyw2QkFBNkIscUNBQXFDLEtBQUssaUJBQWlCLG1DQUFtQyx5QkFBeUIsZ0JBQWdCLEtBQUssZ0JBQWdCLG1DQUFtQyx3QkFBd0IsZUFBZSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNGMWhoQiwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsZ0ZBQWdGO0FBQ3ZHLGNBQWMsUUFBUyx1RUFBdUU7QUFDOUYsY0FBYyxRQUFTLGlGQUFpRjs7QUFFeEc7QUFDQSxjQUFjLFFBQVMsb1ZBQW9WLHdCQUF3Qiw2Q0FBNkMsYUFBYSxnTEFBZ0wsZ0JBQWdCLEtBQUssb0ZBQW9GLHFCQUFxQixLQUFLLG9LQUFvSyw2Q0FBNkMscUJBQXFCLHVCQUF1QixLQUFLLHdPQUF3Tyw4QkFBOEIsd0JBQXdCLGdDQUFnQyxhQUFhLHFLQUFxSyx3Q0FBd0MsNkJBQTZCLGFBQWEsMk1BQTJNLG9DQUFvQyxLQUFLLHdLQUF3SywwQkFBMEIseUNBQXlDLGdEQUFnRCxhQUFhLHVHQUF1RywwQkFBMEIsS0FBSyx1TEFBdUwsd0NBQXdDLDZCQUE2QixhQUFhLGtGQUFrRixxQkFBcUIsS0FBSyxvSUFBb0kscUJBQXFCLHFCQUFxQix5QkFBeUIsK0JBQStCLEtBQUssYUFBYSxzQkFBc0IsS0FBSyxhQUFhLGtCQUFrQixLQUFLLHVNQUF1TSx5QkFBeUIsS0FBSyx3UkFBd1IsMkJBQTJCLDhCQUE4QixnQ0FBZ0Msd0JBQXdCLGFBQWEsK0dBQStHLGdDQUFnQyxLQUFLLG9MQUFvTCxtQ0FBbUMsS0FBSywyS0FBMkssaUNBQWlDLEtBQUssaU9BQWlPLHlCQUF5QixpQkFBaUIsS0FBSywwTkFBME4scUNBQXFDLEtBQUssMEVBQTBFLHFDQUFxQyxLQUFLLDBSQUEwUiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw4QkFBOEIseUJBQXlCLGtDQUFrQyxhQUFhLDRHQUE0RywrQkFBK0IsS0FBSywyRkFBMkYscUJBQXFCLEtBQUssd0pBQXdKLDZCQUE2Qix5QkFBeUIsYUFBYSxzTUFBc00sbUJBQW1CLEtBQUsscUpBQXFKLG9DQUFvQyxtQ0FBbUMsYUFBYSxzSUFBc0ksK0JBQStCLEtBQUssMkxBQTJMLGlDQUFpQyw0QkFBNEIsYUFBYSx3TUFBd00scUJBQXFCLEtBQUssaUZBQWlGLHlCQUF5QixLQUFLLGdMQUFnTCxvQkFBb0IsS0FBSyw0RUFBNEUsb0JBQW9CLEtBQUssY0FBYywrQkFBK0IsMkJBQTJCLEtBQUssaUJBQWlCLG1CQUFtQixpQkFBaUIseUJBQXlCLFlBQVksOEJBQThCLGdCQUFnQixpQkFBaUIsS0FBSyxtQkFBbUIsaUJBQWlCLDRCQUE0Qiw2QkFBNkIsZUFBZSxnQkFBZ0IsMEJBQTBCLHFCQUFxQixxQkFBcUIsc0JBQXNCLEtBQUssdUJBQXVCLG1CQUFtQixvQkFBb0IsZ0NBQWdDLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLFNBQVMsVUFBVSx1Q0FBdUMsS0FBSyxxQkFBcUIsb0JBQW9CLHFCQUFxQixLQUFLLG9CQUFvQiw0QkFBNEIsa0JBQWtCLEtBQUssWUFBWSw2QkFBNkIsb0NBQW9DLEtBQUssYUFBYSw4QkFBOEIsS0FBSyxjQUFjLHlCQUF5QixZQUFZLG1CQUFtQixpQkFBaUIsa0JBQWtCLEtBQUssd0JBQXdCLGdDQUFnQywwQkFBMEIsb0NBQW9DLEtBQUssMkJBQTJCLFdBQVcsbUJBQW1CLGdDQUFnQyxPQUFPLFNBQVMsbUJBQW1CLCtDQUErQyxPQUFPLEtBQUssaUJBQWlCLGVBQWUsaUJBQWlCLGlCQUFpQixpQkFBaUIseUJBQXlCLFlBQVksNkJBQTZCLGdDQUFnQyw0QkFBNEIsb0NBQW9DLCtDQUErQyxXQUFXLDRCQUE0QixTQUFTLG1CQUFtQixpQkFBaUIsNkJBQTZCLE9BQU8sVUFBVSxtQkFBbUIsbUJBQW1CLDZCQUE2QixPQUFPLFVBQVUsbUJBQW1CLG1CQUFtQiw4QkFBOEIsT0FBTyxhQUFhLG1CQUFtQixvQkFBb0IsOEJBQThCLE9BQU8sYUFBYSxtQkFBbUIsb0JBQW9CLGdEQUFnRCxPQUFPLFdBQVcsbUJBQW1CLHlCQUF5QixtQkFBbUIsOEJBQThCLGtCQUFrQixpQkFBaUIsS0FBSyx1QkFBdUIseUJBQXlCLFlBQVksZUFBZSxlQUFlLG1CQUFtQixnQ0FBZ0MsS0FBSyxjQUFjLGlCQUFpQix5QkFBeUIsaUJBQWlCLGtCQUFrQixZQUFZLGdCQUFnQixlQUFlLG1CQUFtQix5QkFBeUIsc0JBQXNCLDJCQUEyQiw0QkFBNEIsb0NBQW9DLEtBQUssdUJBQXVCLDJCQUEyQixnQkFBZ0IsaUJBQWlCLHlCQUF5QiwrQkFBK0IsS0FBSyxnQ0FBZ0MsbUJBQW1CLEtBQUssZ0NBQWdDLDJCQUEyQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixrQkFBa0IscUJBQXFCLEtBQUssWUFBWSxpQkFBaUIsaUJBQWlCLHVCQUF1Qix5QkFBeUIsWUFBWSxlQUFlLGNBQWMsZUFBZSxtQkFBbUIsNkJBQTZCLDBCQUEwQixvQ0FBb0MsS0FBSyxpQkFBaUIsd0NBQXdDLHlCQUF5QixpQkFBaUIsYUFBYSxjQUFjLHlCQUF5Qix1QkFBdUIsNkJBQTZCLDZCQUE2QiwwQkFBMEIsb0NBQW9DLFNBQVMscUNBQXFDLGlCQUFpQixnQ0FBZ0Msb0NBQW9DLEtBQUssY0FBYywrQkFBK0Isb0NBQW9DLEtBQUsseUJBQXlCLGNBQWMscUNBQXFDLFNBQVMsV0FBVyxzQ0FBc0MsU0FBUyxLQUFLLHdCQUF3QixjQUFjLHFDQUFxQyxTQUFTLFdBQVcsdUNBQXVDLFNBQVMsS0FBSyxjQUFjLDJCQUEyQiw0QkFBNEIsb0NBQW9DLEtBQUssb0JBQW9CLFNBQVMsOEJBQThCLDRCQUE0QixPQUFPLFVBQVUsOEJBQThCLDJCQUEyQixPQUFPLFdBQVcsNENBQTRDLDJCQUEyQixPQUFPLEtBQUssZUFBZSw4QkFBOEIsNEJBQTRCLG9DQUFvQyxLQUFLLGVBQWUsNEJBQTRCLG1DQUFtQyxxQkFBcUIsS0FBSyx1QkFBdUIsU0FBUyw0QkFBNEIsNEJBQTRCLE9BQU8sVUFBVSw4QkFBOEIsMkJBQTJCLE9BQU8sV0FBVyw2Q0FBNkMsMkJBQTJCLE9BQU8sS0FBSywyQ0FBMkMsV0FBVyxrQkFBa0IsT0FBTyxTQUFTLGtCQUFrQixPQUFPLEtBQUssNEJBQTRCLFdBQVcsbUJBQW1CLG9DQUFvQyxPQUFPLFNBQVMsbUJBQW1CLGdDQUFnQyxPQUFPLEtBQUssK0JBQStCLFdBQVcsbUJBQW1CLHFDQUFxQyxPQUFPLFNBQVMsbUJBQW1CLGlDQUFpQyxPQUFPLEtBQUssOEJBQThCLFdBQVcsbUJBQW1CLG9DQUFvQyxPQUFPLFNBQVMsbUJBQW1CLGlDQUFpQyxPQUFPLEtBQUssMkJBQTJCLFdBQVcsa0JBQWtCLE9BQU8sU0FBUyxrQkFBa0IsT0FBTyxLQUFLLHFCQUFxQixvQ0FBb0MsOEJBQThCLHNDQUFzQyxLQUFLLHlCQUF5QiwyQ0FBMkMsS0FBSyxlQUFlLDhCQUE4QixLQUFLLHdDQUF3Qyx1QkFBdUIsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsNEJBQTRCLGlCQUFpQixvQ0FBb0MsS0FBSyxhQUFhLHdDQUF3QyxvQkFBb0IsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsNEJBQTRCLGlCQUFpQixvQ0FBb0MsdUJBQXVCLHVCQUF1QixLQUFLLGVBQWUsaUJBQWlCLHFCQUFxQiw2QkFBNkIsMEJBQTBCLGlCQUFpQixvQ0FBb0MsS0FBSyxjQUFjLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQix1QkFBdUIsd0JBQXdCLDBCQUEwQix5QkFBeUIsWUFBWSxhQUFhLGNBQWMsZUFBZSxrQkFBa0IsS0FBSyx1QkFBdUIsa0JBQWtCLHVCQUF1QixxQkFBcUIsS0FBSyxjQUFjLDZDQUE2Qyw2QkFBNkIsS0FBSyxpQkFBaUIsdUJBQXVCLHFDQUFxQyxLQUFLLHNCQUFzQix1QkFBdUIscUJBQXFCLG9CQUFvQixnREFBZ0QsMkJBQTJCLG9CQUFvQixvQkFBb0IsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssV0FBVyx3QkFBd0Isd0JBQXdCLGtCQUFrQixLQUFLLFNBQVMsaUJBQWlCLEtBQUssYUFBYSx5QkFBeUIseUJBQXlCLEtBQUssc0JBQXNCLGtEQUFrRCxLQUFLLGtCQUFrQiw0Q0FBNEMsS0FBSyxtQkFBbUIsaUJBQWlCLGlCQUFpQiwwQkFBMEIsNEJBQTRCLDZCQUE2Qix1QkFBdUIsS0FBSyxrQkFBa0IsNkNBQTZDLHVCQUF1QixxQkFBcUIsa0JBQWtCLEtBQUssYUFBYSx5QkFBeUIscUJBQXFCLGlCQUFpQiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxLQUFLLGVBQWUsaUJBQWlCLDZCQUE2QiwwQkFBMEIsb0NBQW9DLEtBQUssZ0JBQWdCLDZDQUE2QyxvQkFBb0IsS0FBSyxtQkFBbUIseUJBQXlCLEtBQUssc0JBQXNCLHNCQUFzQix1QkFBdUIsNEJBQTRCLHFCQUFxQixvQkFBb0IscUJBQXFCLEtBQUssY0FBYywyQkFBMkIsS0FBSyxrQkFBa0IseUJBQXlCLEtBQUssU0FBUywrQkFBK0IsZUFBZSxvQkFBb0Isb0JBQW9CLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLCtEQUErRCxvQkFBb0IsS0FBSyxVQUFVLG9CQUFvQixLQUFLLDZEQUE2RCxtQkFBbUIsd0JBQXdCLE9BQU8sZUFBZSx3QkFBd0IsT0FBTyxLQUFLLGdFQUFnRSxrQ0FBa0Msc0JBQXNCLE9BQU8sWUFBWSx1QkFBdUIsb0JBQW9CLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGtDQUFrQyxPQUFPLDBCQUEwQixrQ0FBa0MsNEJBQTRCLHNDQUFzQyxPQUFPLGNBQWMsK0JBQStCLDhCQUE4QixzQ0FBc0MsT0FBTyxtQkFBbUIseUJBQXlCLGtCQUFrQixrQkFBa0IscUJBQXFCLCtCQUErQiw4QkFBOEIsc0NBQXNDLE9BQU8sc0JBQXNCLHVCQUF1QiwwQkFBMEIsd0JBQXdCLG9CQUFvQixvQkFBb0IsY0FBYyxnQkFBZ0IsbUJBQW1CLGlDQUFpQyw4QkFBOEIsc0NBQXNDLGlEQUFpRCxPQUFPLHlCQUF5Qiw4QkFBOEIseUJBQXlCLGtCQUFrQiwyQkFBMkIsMkJBQTJCLHFCQUFxQixjQUFjLGVBQWUsZ0JBQWdCLGtCQUFrQixvQkFBb0IsT0FBTyw4Q0FBOEMsOEJBQThCLE9BQU8sd0JBQXdCLDhCQUE4QiwrQkFBK0IsK0NBQStDLHlCQUF5Qix3QkFBd0IsT0FBTyw4QkFBOEIsbUNBQW1DLHVDQUF1QyxPQUFPLHdCQUF3QixzQkFBc0Isa0JBQWtCLG9DQUFvQyxPQUFPLDBCQUEwQixvQkFBb0IsY0FBYyxzQkFBc0IsT0FBTyw4Q0FBOEMsMkJBQTJCLE9BQU8sNEJBQTRCLGdDQUFnQyxvQ0FBb0MsT0FBTyx3QkFBd0Isa0NBQWtDLCtDQUErQyx5QkFBeUIsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsT0FBTyw2QkFBNkIsa0NBQWtDLDBEQUEwRCxvQ0FBb0MsZ0NBQWdDLGdDQUFnQywyQkFBMkIsbUJBQW1CLG1CQUFtQixxQkFBcUIsT0FBTyxpQkFBaUIsc0JBQXNCLE9BQU8sdUJBQXVCLHNCQUFzQixPQUFPLG9CQUFvQixxQkFBcUIsbUJBQW1CLE9BQU8sU0FBUywwREFBMEQsdUJBQXVCLHlCQUF5QiwyQkFBMkIsT0FBTyxlQUFlLG9CQUFvQixtQkFBbUIsaUJBQWlCLHFDQUFxQywyQkFBMkIsbUJBQW1CLE9BQU8sbUJBQW1CLG9DQUFvQyxPQUFPLGNBQWMsd0JBQXdCLGtCQUFrQiwyQkFBMkIsT0FBTyxvQkFBb0IsdUJBQXVCLE9BQU8sdUNBQXVDLHNCQUFzQixPQUFPLGlFQUFpRSx1QkFBdUIsNEJBQTRCLE9BQU8seUJBQXlCLG1CQUFtQix3QkFBd0IsdUJBQXVCLHlCQUF5QixzQkFBc0IsT0FBTyw0QkFBNEIsdUJBQXVCLE9BQU8sNEJBQTRCLHFCQUFxQix5QkFBeUIsT0FBTyxLQUFLOzs7Ozs7Ozs7Ozs7OztBQ1Avem5COztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ25GQSxjQUFjLG1CQUFPLENBQUMsOElBQWtEOztBQUV4RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUZBQXNDOztBQUUzRDs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ0s7O0FBRTVCO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7QUNuQ0EsY0FBYyxtQkFBTyxDQUFDLHNIQUF3RDs7QUFFOUUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyLWZsdWlkLFxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jb250YWluZXItZmx1aWQge1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLnJvdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xcbiAgZmxleDogMCAxIGF1dG87XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XFxuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcXG59XFxuXFxuLnJvdy5yZXZlcnNlIHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcbi5jb2wucmV2ZXJzZSB7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuXFxuLmNvbC14cyxcXG4uY29sLXhzLTEsXFxuLmNvbC14cy0yLFxcbi5jb2wteHMtMyxcXG4uY29sLXhzLTQsXFxuLmNvbC14cy01LFxcbi5jb2wteHMtNixcXG4uY29sLXhzLTcsXFxuLmNvbC14cy04LFxcbi5jb2wteHMtOSxcXG4uY29sLXhzLTEwLFxcbi5jb2wteHMtMTEsXFxuLmNvbC14cy0xMixcXG4uY29sLXhzLW9mZnNldC0wLFxcbi5jb2wteHMtb2Zmc2V0LTEsXFxuLmNvbC14cy1vZmZzZXQtMixcXG4uY29sLXhzLW9mZnNldC0zLFxcbi5jb2wteHMtb2Zmc2V0LTQsXFxuLmNvbC14cy1vZmZzZXQtNSxcXG4uY29sLXhzLW9mZnNldC02LFxcbi5jb2wteHMtb2Zmc2V0LTcsXFxuLmNvbC14cy1vZmZzZXQtOCxcXG4uY29sLXhzLW9mZnNldC05LFxcbi5jb2wteHMtb2Zmc2V0LTEwLFxcbi5jb2wteHMtb2Zmc2V0LTExLFxcbi5jb2wteHMtb2Zmc2V0LTEyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmNvbC14cyB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICBmbGV4LWdyb3c6IDE7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2wteHMtMSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtMiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtMyB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgZmxleC1iYXNpczogMjUlO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxufVxcblxcbi5jb2wteHMtNCB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtNSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtNiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgZmxleC1iYXNpczogNTAlO1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5jb2wteHMtNyB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtOCB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtOSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgZmxleC1iYXNpczogNzUlO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxufVxcblxcbi5jb2wteHMtMTAge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLTExIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy0xMiB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTEge1xcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTMge1xcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtNCB7XFxuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC01IHtcXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTYge1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtNyB7XFxuICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTkge1xcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMTEge1xcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG59XFxuXFxuLnN0YXJ0LXhzIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmNlbnRlci14cyB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVuZC14cyB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4udG9wLXhzIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWlkZGxlLXhzIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvdHRvbS14cyB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFyb3VuZC14cyB7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5iZXR3ZWVuLXhzIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZmlyc3QteHMge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuLmxhc3QteHMge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgb3JkZXI6IDE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA0OXJlbTtcXG4gIH1cXG5cXG4gIC5jb2wtc20sXFxuICAuY29sLXNtLTEsXFxuICAuY29sLXNtLTIsXFxuICAuY29sLXNtLTMsXFxuICAuY29sLXNtLTQsXFxuICAuY29sLXNtLTUsXFxuICAuY29sLXNtLTYsXFxuICAuY29sLXNtLTcsXFxuICAuY29sLXNtLTgsXFxuICAuY29sLXNtLTksXFxuICAuY29sLXNtLTEwLFxcbiAgLmNvbC1zbS0xMSxcXG4gIC5jb2wtc20tMTIsXFxuICAuY29sLXNtLW9mZnNldC0wLFxcbiAgLmNvbC1zbS1vZmZzZXQtMSxcXG4gIC5jb2wtc20tb2Zmc2V0LTIsXFxuICAuY29sLXNtLW9mZnNldC0zLFxcbiAgLmNvbC1zbS1vZmZzZXQtNCxcXG4gIC5jb2wtc20tb2Zmc2V0LTUsXFxuICAuY29sLXNtLW9mZnNldC02LFxcbiAgLmNvbC1zbS1vZmZzZXQtNyxcXG4gIC5jb2wtc20tb2Zmc2V0LTgsXFxuICAuY29sLXNtLW9mZnNldC05LFxcbiAgLmNvbC1zbS1vZmZzZXQtMTAsXFxuICAuY29sLXNtLW9mZnNldC0xMSxcXG4gIC5jb2wtc20tb2Zmc2V0LTEyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb2wtc20ge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0xIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTMge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS00IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTYge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS03IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tOCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTkge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0xMCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTExIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTIge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTUge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuc3RhcnQtc20ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuXFxuICAuY2VudGVyLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZW5kLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gIH1cXG5cXG4gIC50b3Atc20ge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAubWlkZGxlLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib3R0b20tc20ge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuYXJvdW5kLXNtIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAuYmV0d2Vlbi1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5maXJzdC1zbSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gICAgb3JkZXI6IC0xO1xcbiAgfVxcblxcbiAgLmxhc3Qtc20ge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA2NXJlbTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQsXFxuICAuY29sLW1kLTEsXFxuICAuY29sLW1kLTIsXFxuICAuY29sLW1kLTMsXFxuICAuY29sLW1kLTQsXFxuICAuY29sLW1kLTUsXFxuICAuY29sLW1kLTYsXFxuICAuY29sLW1kLTcsXFxuICAuY29sLW1kLTgsXFxuICAuY29sLW1kLTksXFxuICAuY29sLW1kLTEwLFxcbiAgLmNvbC1tZC0xMSxcXG4gIC5jb2wtbWQtMTIsXFxuICAuY29sLW1kLW9mZnNldC0wLFxcbiAgLmNvbC1tZC1vZmZzZXQtMSxcXG4gIC5jb2wtbWQtb2Zmc2V0LTIsXFxuICAuY29sLW1kLW9mZnNldC0zLFxcbiAgLmNvbC1tZC1vZmZzZXQtNCxcXG4gIC5jb2wtbWQtb2Zmc2V0LTUsXFxuICAuY29sLW1kLW9mZnNldC02LFxcbiAgLmNvbC1tZC1vZmZzZXQtNyxcXG4gIC5jb2wtbWQtb2Zmc2V0LTgsXFxuICAuY29sLW1kLW9mZnNldC05LFxcbiAgLmNvbC1tZC1vZmZzZXQtMTAsXFxuICAuY29sLW1kLW9mZnNldC0xMSxcXG4gIC5jb2wtbWQtb2Zmc2V0LTEyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0xIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTMge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC00IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtNSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTYge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC03IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtOCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTkge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0xMCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTExIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTIge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTUge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuc3RhcnQtbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuXFxuICAuY2VudGVyLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZW5kLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gIH1cXG5cXG4gIC50b3AtbWQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAubWlkZGxlLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib3R0b20tbWQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuYXJvdW5kLW1kIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAuYmV0d2Vlbi1tZCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5maXJzdC1tZCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gICAgb3JkZXI6IC0xO1xcbiAgfVxcblxcbiAgLmxhc3QtbWQge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3NnJlbTtcXG4gIH1cXG5cXG4gIC5jb2wtbGcsXFxuICAuY29sLWxnLTEsXFxuICAuY29sLWxnLTIsXFxuICAuY29sLWxnLTMsXFxuICAuY29sLWxnLTQsXFxuICAuY29sLWxnLTUsXFxuICAuY29sLWxnLTYsXFxuICAuY29sLWxnLTcsXFxuICAuY29sLWxnLTgsXFxuICAuY29sLWxnLTksXFxuICAuY29sLWxnLTEwLFxcbiAgLmNvbC1sZy0xMSxcXG4gIC5jb2wtbGctMTIsXFxuICAuY29sLWxnLW9mZnNldC0wLFxcbiAgLmNvbC1sZy1vZmZzZXQtMSxcXG4gIC5jb2wtbGctb2Zmc2V0LTIsXFxuICAuY29sLWxnLW9mZnNldC0zLFxcbiAgLmNvbC1sZy1vZmZzZXQtNCxcXG4gIC5jb2wtbGctb2Zmc2V0LTUsXFxuICAuY29sLWxnLW9mZnNldC02LFxcbiAgLmNvbC1sZy1vZmZzZXQtNyxcXG4gIC5jb2wtbGctb2Zmc2V0LTgsXFxuICAuY29sLWxnLW9mZnNldC05LFxcbiAgLmNvbC1sZy1vZmZzZXQtMTAsXFxuICAuY29sLWxnLW9mZnNldC0xMSxcXG4gIC5jb2wtbGctb2Zmc2V0LTEyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb2wtbGcge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTMge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIG1heC13aWR0aDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy00IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogMzMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTYge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTAlO1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy03IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogNTguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctOCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTkge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNzUlO1xcbiAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDgzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTExIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTIge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTUge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuc3RhcnQtbGcge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuXFxuICAuY2VudGVyLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZW5kLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gIH1cXG5cXG4gIC50b3AtbGcge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAubWlkZGxlLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib3R0b20tbGcge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuYXJvdW5kLWxnIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAuYmV0d2Vlbi1sZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5maXJzdC1sZyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcXG4gICAgb3JkZXI6IC0xO1xcbiAgfVxcblxcbiAgLmxhc3QtbGcge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rU2xhYjozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCk7XCIsIFwiXCJdKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2VyaWYrUHJvOjQwMCw2MDApO1wiLCBcIlwiXSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxyXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcclxcbiAqIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7IC8qIDEgKi9cXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7IC8qIDEgKi9cXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXHJcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXHJcXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3RpdmVcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcclxcbiAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgLS1tYWluLWJnLWNvbG9yOiAjRTZFREYwO1xcclxcbiAgLS1ub3QtYmxhY2s6ICM0MzNEM0Q7XFxyXFxufVxcclxcbiNtb2JpbGUtbWVudXtcXHJcXG4gIGhlaWdodDoxMDB2aDtcXHJcXG4gIHdpZHRoOjEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6MDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgei1pbmRleDoxO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuI21vYmlsZS1pdGVtcyB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIFxcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDM5MnB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMXB4O1xcclxcbn1cXHJcXG4jbW9iaWxlLWl0ZW1zIHNwYW57XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcclxcblxcclxcbn1cXHJcXG4uc2hvd3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4jbW9iaWxlLWl0ZW1zIGxpe1xcclxcbiAgcGFkZGluZzoxZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZToxNnB4O1xcclxcbn1cXHJcXG4jbW9iaWxlLWl0ZW1zIGF7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuLmZhZGVJbntcXHJcXG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuLmZhZGVPdXR7XFxyXFxuICBhbmltYXRpb246IGZhZGVvdXQgMC41cztcXHJcXG59XFxyXFxuI2JnLWNvbG9ye1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOjA7XFxyXFxuICBoZWlnaHQ6MTAwdmg7XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcbiNob21lcGFnZSAjYmctY29sb3J7XFxyXFxuICBhbmltYXRpb246IGNoYW5nZUNvbG9yIDFzO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUNvbG9ye1xcclxcbiAgZnJvbXtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICB0b3tcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcbi5sb2FkaW5nLWJhcntcXHJcXG4gIHdpZHRoOjElO1xcclxcbiAgei1pbmRleDoxMDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBoZWlnaHQ6NXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOjA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xcclxcbiAgYW5pbWF0aW9uOmxvYWRpbmdSaWdodCAzcztcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgLyphbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsqL1xcclxcblxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGxvYWRpbmdSaWdodHtcXHJcXG4gIDAle1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDoxJTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxyXFxuICB9XFxyXFxuICA2MCV7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbiAgfVxcclxcbiAgNzUle1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgyMik7XFxyXFxuICB9XFxyXFxuIC8qIDEwMCV7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgyMik7XFxyXFxuICB9Ki9cXHJcXG4gIDEwMCV7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTQwcHgpIHNjYWxlWSgxMCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG59XFxyXFxuLm1vYmlsZS1uYXZiYXJ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OjEwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDo3MnB4O1xcclxcbiAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuLm1vYmlsZS1uYXZiYXIgaW1ne1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOjA7XFxyXFxuICBsZWZ0OjFlbTtcXHJcXG4gIGJvdHRvbTowO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodCAycztcXHJcXG59XFxyXFxuLm1lbnUtYnRue1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOjMwcHg7XFxyXFxuICBoZWlnaHQ6MjBweDtcXHJcXG4gIHRvcDowO1xcclxcbiAgcmlnaHQ6MWVtO1xcclxcbiAgYm90dG9tOjA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbmltYXRpb246IGZhZGVpbiAxcztcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMi41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idG4gc3BhbntcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcclxcbiAgd2lkdGg6NHB4O1xcclxcbiAgaGVpZ2h0OjRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IzA3MDYwNjtcXHJcXG59XFxyXFxuLm1lbnUtYnRuIHNwYW46bnRoLWNoaWxkKDIpe1xcclxcbiAgbWFyZ2luOjAgM3B4O1xcclxcbn1cXHJcXG4ubWVudS1idG4gc3BhbjpudGgtY2hpbGQoMyl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAzcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuI2JnLXBpY3tcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB3aWR0aDo3MHZ3O1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDowO1xcclxcbiAgbGVmdDo4dnc7XFxyXFxuICByaWdodDowO1xcclxcbiAgYm90dG9tOjA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBhbmltYXRpb246IGZhZGVpbiAxLjVzO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG4jaG9tZXBhZ2UgaDF7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206OHZoO1xcclxcbiAgbGVmdDowO1xcclxcbiAgcmlnaHQ6MDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IC8qcmVndWxhciovXFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAycztcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogM3M7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG5cXHJcXG59XFxyXFxuLyphbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7Ki9cXHJcXG4ubW92ZVJpZ2h0e1xcclxcbiAgYW5pbWF0aW9uOiBtb3ZlUmlnaHQgMC41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG4ubW92ZUxlZnR7XFxyXFxuICBhbmltYXRpb246IG1vdmVMZWZ0IDAuNXM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBtb3ZlUmlnaHR7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIHRve1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMXB4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVMZWZ0e1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICB0b3tcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExcHgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ncm93e1xcclxcbiAgYW5pbWF0aW9uOiBncm93IDAuOHM7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBncm93e1xcclxcbiAgMCV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIDUwJXtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLDUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICB9XFxyXFxuICAxMDAle1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSw1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JvdzJ7XFxyXFxuICBhbmltYXRpb246IGdyb3dUd28gMC44cztcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhpdDJ7XFxyXFxuICBhbmltYXRpb246IGdyb3dUd28gMXM7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZ3Jvd1R3b3tcXHJcXG4gIDAle1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgNTAle1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gIH1cXHJcXG4gIDEwMCV7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSw1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBGQURFIElOICovXFxyXFxuQGtleWZyYW1lcyBmYWRlaW57XFxyXFxuICBmcm9te1xcclxcbiAgICBvcGFjaXR5OjA7XFxyXFxuICB9XFxyXFxuICB0b3tcXHJcXG4gICAgb3BhY2l0eToxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJblVwe1xcclxcbiAgZnJvbXtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xcclxcbiAgfVxcclxcbiAgdG97XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0e1xcclxcbiAgZnJvbXtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXHJcXG4gIH1cXHJcXG4gIHRve1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluTGVmdHtcXHJcXG4gIGZyb217XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gIH1cXHJcXG4gIHRve1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZW91dHtcXHJcXG4gIGZyb217XFxyXFxuICAgIG9wYWNpdHk6MTtcXHJcXG4gIH1cXHJcXG4gIHRve1xcclxcbiAgICBvcGFjaXR5OjA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mYWRlSW5SaWdodHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodCAwLjVzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQgI2JnLWNvbG9ye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERjhGOCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXR7XFxyXFxuICBjb2xvcjogdmFyKC0tbm90LWJsYWNrKTtcXHJcXG59XFxyXFxuI2Fib3V0IGgxLCAjbWVudSBoMSwgI2NvbnRhY3QtdXMgaDF7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbWFyZ2luLXRvcDoxLjVlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMXM7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcbiNhYm91dCBwe1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzowIDFlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICBhbmltYXRpb246IGZhZGVJblVwIDFzO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxufVxcclxcbiNhYm91dC1waWN7XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDoyZW07XFxyXFxuICBhbmltYXRpb246IGZhZGVJblVwIDFzO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuLm1lbnUtcGlje1xcclxcbiAgLyp3aWR0aDogMzB2dztcXHJcXG4gIGhlaWdodDogMzB2dzsqL1xcclxcbiAgd2lkdGg6MTMwcHg7XFxyXFxuICBoZWlnaHQ6MTMwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOjA7XFxyXFxuICBsZWZ0OjA7XFxyXFxuICByaWdodDowO1xcclxcbiAgYm90dG9tOjA7XFxyXFxuICBtYXJnaW46YXV0bztcXHJcXG59XFxyXFxuLmZvb2QtbWVudS13cmFwcGVye1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi50ZXh0LWJveHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xcclxcbiAgY29sb3I6dmFyKC0tbm90LWJsYWNrKTtcXHJcXG59XFxyXFxuLnRleHQtYm94IGgye1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDsvKnNlbWlib2xkKi9cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnRleHQtYm94IGgyIHNwYW57XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwyMDEsNzYsMC40MSk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAycHg7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4udGV4dC1ib3ggcHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcbi5wcmljZXtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDoxNTBweDtcXHJcXG59XFxyXFxuLnJvd3tcXHJcXG4gIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcbi5waWMtYm94e1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4jc2lkZS1kaXNoZXMgc3BhbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTExLCAyMDcsIDE1MSwgMC41MSk7XFxyXFxufVxcclxcbiNkZXNzZXJ0IHNwYW57XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgMTA3LCAxNjYsIDAuNDEpO1xcclxcbn1cXHJcXG4uZGl2aWRlciAubGluZXtcXHJcXG4gIHdpZHRoOjQwcHg7XFxyXFxuICBoZWlnaHQ6MnB4O1xcclxcbiAgYmFja2dyb3VuZDogI0M0QzRDNDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6MWVtO1xcclxcbn1cXHJcXG4uZGl2aWRlciBzcGFue1xcclxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgZm9udC1zaXplOjE2cHg7XFxyXFxuICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuLmRpdmlkZXJ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxyXFxuICBtYXJnaW4tdG9wOjRlbTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IGZhZGVJblVwIDFzO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG4ubWVudS1pdGVte1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMXM7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcbiNjb250YWN0LXVze1xcclxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XFxyXFxuICBjb2xvcjojNDMzRDNEO1xcclxcbn1cXHJcXG4jY29udGFjdC11cyBoMXtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtdXMgLmluZm97XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjb2xvcjojNDMzRDNEO1xcclxcbiAgbWFyZ2luLXRvcDoxZW07XFxyXFxufVxcclxcbi5pbmZvLWJveHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xcclxcbn1cXHJcXG4uaW5mby13cmFwcGVye1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucm93e1xcclxcbiAgbWFyZ2luLWxlZnQ6MCAhaW1wb3J0YW50Oy8qMC41cmVtKi9cXHJcXG59XFxyXFxuLmRlc2t0b3AtbmF2YmFye1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmRza3QtY29udGVudHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNtZW51IC5oZWFkZXItY29udGVudC1ib3gsICNjb250YWN0LXVzIC5oZWFkZXItY29udGVudC1ib3h7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4jbG9nb3tcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi8qIFRBQkxFVCAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XFxyXFxuICAjaG9tZXBhZ2UgaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDZweDtcXHJcXG4gIH1cXHJcXG4gICNhYm91dCBwe1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIERFU0tUT1AgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XFxyXFxuICAubW9iaWxlLW5hdmJhciwjbW9iaWxlLW1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAjbG9nb3tcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOjE1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDoxZW07XFxyXFxuICAgIGxlZnQ6MWVtO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJblJpZ2h0IDJzO1xcclxcbiAgfVxcclxcbiAgI2hvbWVwYWdlICNiZy1jb2xvcntcXHJcXG4gICAgYW5pbWF0aW9uOiBjaGFuZ2VDb2xvciAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICB9XFxyXFxuICAjYmctcGlje1xcclxcbiAgICBhbmltYXRpb246IGZhZGVpbiAxLjVzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgfVxcclxcbiAgI2hvbWVwYWdlIGgxe1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB3aWR0aDo1MCU7XFxyXFxuICAgIGxlZnQ6IDR2dztcXHJcXG4gICAgYm90dG9tOiAzMHZoO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDJzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgfVxcclxcbiAgLmRlc2t0b3AtbmF2YmFye1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6MTMwcHg7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0IDFzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLDAsMCwwLjUpO1xcclxcbiAgfVxcclxcbiAgLmRlc2t0b3AtbmF2YmFyIHVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDozMjJweDtcXHJcXG4gICAgdG9wOjA7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXNrdG9wLW5hdmJhciBsaTpub3QoOmxhc3QtY2hpbGQpe1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDc2cHg7XFxyXFxuICB9XFxyXFxuICAuZGVza3RvcC1uYXZiYXIgYXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjp2YXIoLS1ub3QtYmxhY2spO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcbiAgLmRlc2t0b3AtbmF2YmFyIGE6aG92ZXJ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XFxyXFxuICB9XFxyXFxuICAudmVydGljYWwtZGl2aWRlcntcXHJcXG4gICAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gICAgd2lkdGg6MXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLW5vdC1ibGFjayk7XFxyXFxuICB9XFxyXFxuICAuaGVhZGVyLWNvbnRlbnQtYm94e1xcclxcbiAgICB3aWR0aDo4OTJweDtcXHJcXG4gICAgdG9wOjA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjA7XFxyXFxuICB9XFxyXFxuICAuaGVhZGVyLWNvbnRlbnQtYm94IGRpdltjbGFzcyo9XFxcImNvbFxcXCJde1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICAuaGVhZGVyLWNvbnRlbnQtYm94IHB7XFxyXFxuICAgIG1hcmdpbi10b3A6MCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLXRvcDogOGVtICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudC1mb250e1xcclxcbiAgICBmb250LXNpemU6MTZweCAhaW1wb3J0YW50O1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW46MCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLmhlYWRlci1jb250ZW50LWJveCBoMXtcXHJcXG4gICAgZm9udC1zaXplOjM4cHggIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW4tdG9wOjAgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLW5vdC1ibGFjayk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDJlbTtcXHJcXG4gICAgdG9wOiAzLjVlbTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgfVxcclxcbiAgI2Fib3V0LXBpY3tcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICNkZXNjcmlwdGlvbi1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAjbWlzc2lvbiAucGlje1xcclxcbiAgICBoZWlnaHQ6IDUwdmg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICB9XFxyXFxuICBoMntcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1zaXplOjM4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG4gIC5kaXZpZGVye1xcclxcbiAgICB3aWR0aDozNDBweDtcXHJcXG4gICAgaGVpZ2h0OjFweDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW5vdC1ibGFjayk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogLTNlbTtcXHJcXG4gIH1cXHJcXG4gIC5kZXNjcmlwdGlvbntcXHJcXG4gICAgbWFyZ2luLXRvcDozLjVlbSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgc2VjdGlvbntcXHJcXG4gICAgbWFyZ2luLXRvcDozMHZoO1xcclxcbiAgICB3aWR0aDo4NSU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDhlbTtcXHJcXG4gIH1cXHJcXG4gIC5kc2t0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgI21lbnUgLnRpdGxlLCAjY29udGFjdC11cyAudGl0bGV7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAjbWVudSAuaGVhZGVyLWNvbnRlbnQtYm94LCAjY29udGFjdC11cyAuaGVhZGVyLWNvbnRlbnQtYm94e1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTV2aDtcXHJcXG4gIH1cXHJcXG4gIC5mb29kLW1lbnUtd3JhcHBlcntcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWF4LXdpZHRoOnVuc2V0O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcXHJcXG4gICAgcGFkZGluZzo0ZW0gMDtcXHJcXG4gIH1cXHJcXG4gIC5mb29kLW1lbnUtd3JhcHBlciBoMntcXHJcXG4gICAgZm9udC1zaXplOjI0cHg7XFxyXFxuICB9XFxyXFxuICAuY29udGFjdC1pbmZvLXdyYXBwZXJ7XFxyXFxuICAgIHdpZHRoOjEwMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTV2aDtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmxleGJveGdyaWQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mbGV4Ym94Z3JpZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmxleGJveGdyaWQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0ICcuL215U3R5bGUuY3NzJztcclxuaW1wb3J0IF8gZnJvbSAnZmxleGJveGdyaWQnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG5cdHNldEludGVydmFsKGZ1bmN0aW9uKCl7bG9hZFBhZ2UoKTt9LCAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBhZ2UoKXtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZU1lbnVCdG4oeCl7XHJcblx0dmFyIGxlZnREb3QgPSB4LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcGFuJylbMF07XHJcblx0dmFyIG1pZERvdCA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKVsxXTtcclxuXHR2YXIgbWlkRG90MiA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKVsyXTtcclxuXHR2YXIgcmlnaHREb3QgPSB4LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcGFuJylbM107XHJcblx0bGVmdERvdC5jbGFzc0xpc3QudG9nZ2xlKFwibW92ZVJpZ2h0XCIpO1xyXG5cdHJpZ2h0RG90LmNsYXNzTGlzdC50b2dnbGUoXCJtb3ZlTGVmdFwiKTtcclxuXHJcblx0bWlkRG90LmNsYXNzTGlzdC50b2dnbGUoXCJncm93XCIpO1xyXG5cdG1pZERvdDIuY2xhc3NMaXN0LnRvZ2dsZShcImdyb3cyXCIpO1xyXG5cclxuXHR0b2dnbGVNZW51KCk7XHJcblxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlLWl0ZW1zXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJmYWRlSW5SaWdodFwiKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKXtcclxuXHR2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlLW1lbnVcIik7XHJcblx0aWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWRlSW5cIikpXHJcblx0XHRtZW51LmNsYXNzTGlzdC5yZXBsYWNlKFwiZmFkZUluXCIsIFwiZmFkZU91dFwiKTtcclxuXHRlbHNlXHJcblx0XHRtZW51LmNsYXNzTGlzdC5yZXBsYWNlKFwiZmFkZU91dFwiLFwiZmFkZUluXCIpO1xyXG59XHJcbndpbmRvdy5hbmltYXRlTWVudUJ0biA9IGFuaW1hdGVNZW51QnRuOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215U3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215U3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teVN0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=