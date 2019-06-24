(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bem_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bem-cn */ "./node_modules/bem-cn/lib/index.js");
/* harmony import */ var bem_cn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bem_cn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/Layout/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mac/Desktop/test_projects/test-next/components/Layout/index.tsx";



var m = Object(bem_cn__WEBPACK_IMPORTED_MODULE_1__["block"])('main');
var h = Object(bem_cn__WEBPACK_IMPORTED_MODULE_1__["block"])('header');
var f = Object(bem_cn__WEBPACK_IMPORTED_MODULE_1__["block"])('footer');
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: m(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", {
    className: h(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Header"), children, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", {
    className: f(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Footer"));
});

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./components/Layout/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/bem-cn/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/bem-cn/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * bem-cn v3.0.1
 * Friendly BEM class names generator, greate for React
 * @author Alexander Burtsev, https://github.com/albburtsev
 */
!function(n,t){ true?module.exports=t():undefined}(this,function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1);t.ERROR_BLOCK_NAME_TYPE="Block name should be a string",t.ERROR_BLOCK_NAME_EMPTY="Block name should be non-empty";var o={ns:"",el:"__",mod:"_",modValue:"_"},i=function(n){return"string"==typeof n},u=function(n){return"string"!=typeof n},s=function(n,t){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];var i=r.assign({},t);return i.mixes=i.mixes.concat(e),c(i,n)},a=function(n,t,e){for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];var u=r.assign({},t),s=r.assign({},u.states||{});return s[e]=r.assign.apply(void 0,[{},s[e]||{}].concat(o)),u.states=s,c(u,n)},l=function(n,t,e,r){return String.prototype.split.call(f(n,t),e,r)},f=function(n,t){var e=t.name,r=t.mods,o=t.mixes,i=t.states,u=[e];if(r&&(u=u.concat(Object.keys(r).filter(function(n){return r[n]}).map(function(t){var o=r[t];return!0===o?e+n.mod+t:e+n.mod+t+n.modValue+o}))),i&&Object.keys(i).forEach(function(n){var t=i[n];u=u.concat(Object.keys(t).filter(function(n){return t[n]}).map(function(t){return n+t}))}),n.ns&&(u=u.map(function(t){return n.ns+t})),o&&(u=u.concat(function(n){return void 0===n&&(n=[]),n.map(function(n){return Array.isArray(n)?n.join(" "):"object"==typeof n&&null!==n?n.toString():"function"==typeof n?n.toString():"string"==typeof n?n:""}).filter(function(n){return!!n})}(o))),n.classMap){var s=n.classMap;u=u.map(function(n){return s[n]||n})}return u.join(" ")},c=function(n,t){return{mix:s.bind(null,t,n),split:l.bind(null,t,n),is:a.bind(null,t,n,"is-"),has:a.bind(null,t,n,"has-"),state:a.bind(null,t,n,"is-"),toString:f.bind(null,t,n)}},d=function(n,t){var e={name:n,mods:{},mixes:[],states:{"is-":{},"has-":{}}},o=function(n,t){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];if(!e.length)return f(n,t);var s=r.assign({},t),a=e.filter(i).reduce(function(t,e){return t+n.el+e},"");a&&(s.name=s.name+a);var l=e.filter(u).reduce(function(n,t){return r.assign(n,t)},{});return s.mods=r.assign({},s.mods,l),c(s,n)}.bind(null,t,e);return o.mix=s.bind(null,t,e),o.split=l.bind(null,t,e),o.is=a.bind(null,t,e,"is-"),o.has=a.bind(null,t,e,"has-"),o.state=a.bind(null,t,e,"is-"),o.toString=f.bind(null,t,e),o};t.setup=function(n){return void 0===n&&(n={}),function(e){if("string"!=typeof e)throw new Error(t.ERROR_BLOCK_NAME_TYPE);var i=e.trim();if(!i)throw new Error(t.ERROR_BLOCK_NAME_EMPTY);return d(i,r.assign({},o,n))}},t.block=t.setup(),t.default=t.block},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assign=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var r=0;r<t.length;r++){var o=t[r];for(var i in o)o.hasOwnProperty(i)&&(n[i]=o[i])}return n}}])});

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmac%2FDesktop%2Ftest_projects%2Ftest-next%2Fpages%2Findex.tsx!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmac%2FDesktop%2Ftest_projects%2Ftest-next%2Fpages%2Findex.tsx ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_afa7b25a60452594c240 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_afa7b25a60452594c240 */ "dll-reference dll_afa7b25a60452594c240"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./components/index.ts");
var _jsxFileName = "/Users/mac/Desktop/test_projects/test-next/pages/index.tsx";



var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Main Page"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 1:
/*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmac%2FDesktop%2Ftest_projects%2Ftest-next%2Fpages%2Findex.tsx ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmac%2FDesktop%2Ftest_projects%2Ftest-next%2Fpages%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmac%2FDesktop%2Ftest_projects%2Ftest-next%2Fpages%2Findex.tsx!./");


/***/ }),

/***/ "dll-reference dll_afa7b25a60452594c240":
/*!*******************************************!*\
  !*** external "dll_afa7b25a60452594c240" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_afa7b25a60452594c240;

/***/ })

},[[1,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map