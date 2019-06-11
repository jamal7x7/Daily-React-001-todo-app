webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoginSignup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginSignup */ "./pages/LoginSignup.js");
/* harmony import */ var _Signedin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Signedin */ "./pages/Signedin.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/pages/index.js";




var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      userSignedin = _useState2[0],
      setuserSignedin = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, userSignedin ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Signedin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userSignedin: userSignedin,
    setUserSignedin: setUserSignedin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginSignup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    userSignedin: userSignedin,
    setUserSignedin: setUserSignedin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.597cae8e3ba600e7650b.hot-update.js.map