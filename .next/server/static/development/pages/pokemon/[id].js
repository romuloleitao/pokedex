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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pokemon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/romuloleitao/Documents/GitHub/pokedex/pages/pokemon/[id].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Pokemon({\n  pokemon\n}) {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: pokemon.sprites.front_default,\n    alt: \"Pokemon image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }));\n}\nasync function getStaticProps({\n  params\n}) {\n  console.log(params);\n  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(serverResponse => {\n    if (serverResponse.ok) {\n      return serverResponse.json();\n    }\n\n    throw new Error('It didnt work.');\n  }).then(responseAsObject => responseAsObject);\n  return {\n    props: {\n      pokemon\n    }\n  };\n}\nasync function getStaticPaths() {\n  return {\n    paths: [{\n      params: {\n        id: '1'\n      }\n    }, {\n      params: {\n        id: '2'\n      }\n    }],\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2tlbW9uLy5qcz80ZmVhIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImlkIiwidGhlbiIsInNlcnZlclJlc3BvbnNlIiwib2siLCJqc29uIiwiRXJyb3IiLCJyZXNwb25zZUFzT2JqZWN0IiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBOEI7QUFDekMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkMsYUFBMUI7QUFBeUMsT0FBRyxFQUFDLGVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBS0g7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUVDO0FBQUYsQ0FBOUIsRUFBMEM7QUFDN0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsUUFBTUosT0FBTyxHQUFHLE1BQU1PLEtBQUssQ0FBRSxxQ0FBb0NILE1BQU0sQ0FBQ0ksRUFBRyxFQUFoRCxDQUFMLENBQ3JCQyxJQURxQixDQUNmQyxjQUFELElBQW9CO0FBQ3RCLFFBQUlBLGNBQWMsQ0FBQ0MsRUFBbkIsRUFBdUI7QUFDbkIsYUFBT0QsY0FBYyxDQUFDRSxJQUFmLEVBQVA7QUFDSDs7QUFFRCxVQUFNLElBQUlDLEtBQUosQ0FBVSxnQkFBVixDQUFOO0FBQ0gsR0FQcUIsRUFRckJKLElBUnFCLENBUWZLLGdCQUFELElBQXNCQSxnQkFSTixDQUF0QjtBQVNBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0hmO0FBREc7QUFESixHQUFQO0FBS0g7QUFFTSxlQUFlZ0IsY0FBZixHQUFnQztBQUNuQyxTQUFPO0FBQ0hDLFNBQUssRUFBRSxDQUNIO0FBQ0liLFlBQU0sRUFBRTtBQUNKSSxVQUFFLEVBQUU7QUFEQTtBQURaLEtBREcsRUFNSDtBQUNJSixZQUFNLEVBQUU7QUFDSkksVUFBRSxFQUFFO0FBREE7QUFEWixLQU5HLENBREo7QUFhSFUsWUFBUSxFQUFFO0FBYlAsR0FBUDtBQWVIIiwiZmlsZSI6Ii4vcGFnZXMvcG9rZW1vbi9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vbih7IHBva2Vtb24gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGFsdD1cIlBva2Vtb24gaW1hZ2VcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwYXJhbXMuaWR9YClcbiAgICAudGhlbigoc2VydmVyUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHNlcnZlclJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VydmVyUmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdCBkaWRudCB3b3JrLicpO1xuICAgIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlQXNPYmplY3QpID0+IHJlc3BvbnNlQXNPYmplY3QpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBva2Vtb25cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon/[id].js\n");

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