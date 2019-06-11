webpackHotUpdate("static/development/pages/LoginSignup.js",{

/***/ "./pages/LoginSignup.js":
/*!******************************!*\
  !*** ./pages/LoginSignup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ "./components/sidebar/Sidebar.js");


var _jsxFileName = "/Users/j/Desktop/todo-app/pages/LoginSignup.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .wrapper {\n    width: 100%;\n    height: 100%;\n\n    // padding: 20px;\n    // border: 1px solid rgba(#fff, 0.08);\n    border-radius: 4px;\n    // background-color: $bgm;\n    // border: 1px solid $bgl;\n    // box-shadow: 0 90px 100px -50px rgba(black, 0.4),\n    //   0 50px 70px 10px rgba(black, 0.1);\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: ' sideBar  content ';\n  }\n\n  // * /////////////////////////////////////////////SIDE-BAR/////////////////////////////////////////////// * //\n\n  .sideBarList {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto auto 30px 170px auto;\n    align-content: start;\n    grid-gap: 10px;\n    // height: 100%;\n  }\n\n  .projects {\n    padding-left: 50px;\n    height: 52px;\n    display: grid;\n    place-items: center start;\n  }\n\n  // * ///////////////////////////////////////CONTENT///////////////////////////////////// * //\n\n  .content {\n    grid-area: 'content';\n    background: ", ";\n\n    overflow-anchor: none;\n    border-radius: 0 4px 4px 0;\n  }\n\n  .anchor {\n    overflow-anchor: auto;\n    height: 1px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.bgd;
});

var LoginSignup = function LoginSignup(userSignedin) {
  var addListRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var didRun = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      addTaskIsShown = _useState2[0],
      setAddTaskIsShown = _useState2[1];

  var handleAddListIsShown = function handleAddListIsShown(e) {
    setAddListIsShown(function (prev) {
      return !prev;
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userSignedin: userSignedin,
    setUserSignedin: setUserSignedin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginSignup);

/***/ })

})
//# sourceMappingURL=LoginSignup.js.b518c74269771278f64d.hot-update.js.map