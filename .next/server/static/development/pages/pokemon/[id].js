module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/pokemon/[id].js":
/*!*******************************!*\
  !*** ./pages/pokemon/[id].js ***!
  \*******************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pokemon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/romuloleitao/Documents/GitHub/pokedex/pages/pokemon/[id].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Pokemon({\n  pokemon\n}) {\n  console.log(pokemon);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \"Id: ...\", __jsx(\"img\", {\n    src: \"???\",\n    alt: \"Pokemon image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }));\n}\nasync function getStaticProps({\n  params\n}) {\n  console.log(params);\n  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(serverResponse => {\n    if (serverResponse.ok) {\n      return serverResponse.json();\n    }\n\n    throw new Error('It didnt work.');\n  }).then(responseAsObject => responseAsObject);\n  return {\n    props: {\n      pokemon\n    }\n  };\n}\nasync function getStaticPaths() {\n  return {\n    paths: [{\n      params: {\n        id: '1'\n      }\n    }, {\n      params: {\n        id: '2'\n      }\n    }],\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2tlbW9uLy5qcz80ZmVhIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwiZmV0Y2giLCJpZCIsInRoZW4iLCJzZXJ2ZXJSZXNwb25zZSIsIm9rIiwianNvbiIsIkVycm9yIiwicmVzcG9uc2VBc09iamVjdCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQThCO0FBQ3pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFSTtBQUFLLE9BQUcsRUFBQyxLQUFUO0FBQWUsT0FBRyxFQUFDLGVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKO0FBTUg7QUFFTSxlQUFlRyxjQUFmLENBQThCO0FBQUVDO0FBQUYsQ0FBOUIsRUFBMEM7QUFDN0NILFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxNQUFaO0FBQ0EsUUFBTUosT0FBTyxHQUFHLE1BQU1LLEtBQUssQ0FBRSxxQ0FBb0NELE1BQU0sQ0FBQ0UsRUFBRyxFQUFoRCxDQUFMLENBQ3JCQyxJQURxQixDQUNmQyxjQUFELElBQW9CO0FBQ3RCLFFBQUlBLGNBQWMsQ0FBQ0MsRUFBbkIsRUFBdUI7QUFDbkIsYUFBT0QsY0FBYyxDQUFDRSxJQUFmLEVBQVA7QUFDSDs7QUFFRCxVQUFNLElBQUlDLEtBQUosQ0FBVSxnQkFBVixDQUFOO0FBQ0gsR0FQcUIsRUFRckJKLElBUnFCLENBUWZLLGdCQUFELElBQXNCQSxnQkFSTixDQUF0QjtBQVNBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0hiO0FBREc7QUFESixHQUFQO0FBS0g7QUFFTSxlQUFlYyxjQUFmLEdBQWdDO0FBQ25DLFNBQU87QUFDSEMsU0FBSyxFQUFFLENBQ0g7QUFDSVgsWUFBTSxFQUFFO0FBQ0pFLFVBQUUsRUFBRTtBQURBO0FBRFosS0FERyxFQU1IO0FBQ0lGLFlBQU0sRUFBRTtBQUNKRSxVQUFFLEVBQUU7QUFEQTtBQURaLEtBTkcsQ0FESjtBQWFIVSxZQUFRLEVBQUU7QUFiUCxHQUFQO0FBZUgiLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKHsgcG9rZW1vbiB9KSB7XG4gICAgY29uc29sZS5sb2cocG9rZW1vbik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIElkOiAuLi5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiPz8/XCIgYWx0PVwiUG9rZW1vbiBpbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3BhcmFtcy5pZH1gKVxuICAgIC50aGVuKChzZXJ2ZXJSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoc2VydmVyUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJ2ZXJSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0IGRpZG50IHdvcmsuJyk7XG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2VBc09iamVjdCkgPT4gcmVzcG9uc2VBc09iamVjdClcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9rZW1vblxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon/[id].js\n");

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/pokemon/[id].js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/romuloleitao/Documents/GitHub/pokedex/pages/pokemon/[id].js */"./pages/pokemon/[id].js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });