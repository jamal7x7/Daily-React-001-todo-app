webpackHotUpdate("static/development/pages/Login.js",{

/***/ "./components/ui/DropMenu.js":
/*!***********************************!*\
  !*** ./components/ui/DropMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/components/ui/DropMenu.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n  .options-dropdown {\n    position: relative;\n    /* display: inline-block; */\n    z-index: 200;\n    \n  }\n\n  .options-content {\n    /* display: none; */\n   \n    position: absolute;\n    background-color: ", ";\n    border-radius: 8px;\n    min-width: 200px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    display: block;\n    z-index: 1;\n\n    .options-content-text {\n      padding: 16px;\n      display: grid;\n      grid-template-columns: 40px 1fr;\n      grid-template-rows: auto;\n      align-items: center;\n    }\n    \n    .options-content-text:hover {\n      background:#00000020;\n      /* color:", ";  */\n      color: ", "; \n      /* background: ", ";  */\n      \n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.bgm;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
});

var DropMenu = function DropMenu(_ref5) {
  var children = _ref5.children,
      showMenu = _ref5.showMenu;
  var sp = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    // opacity: optionsMenuIsShown ? 1 : 0,
    transform: showMenu ? 'scale(1)' : 'scale(0.1)',
    // from: { opacity: 0 },
    // color: !optionsMenuIsShown ? "tomato" : "#8c4ef8",
    // config: { duration: 150 },
    config: {
      mass: 1,
      tension: 500,
      friction: 30
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    style: sp,
    className: "options-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "options-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, " ", children, " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (DropMenu);

/***/ })

})
//# sourceMappingURL=Login.js.1a97934e20c31cd55454.hot-update.js.map