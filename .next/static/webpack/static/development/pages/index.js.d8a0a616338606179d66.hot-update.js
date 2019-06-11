webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sidebar/AddProjectButton.js":
/*!************************************************!*\
  !*** ./components/sidebar/AddProjectButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/AddProjectButton.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .addProject {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: 52px;\n\n    margin-left: 50px;\n    // height: 10px;\n\n    color: #eeeeee40;\n    cursor: pointer;\n    /* box-sizing: inside-box; */\n    /* background: red; */\n\n    &:hover {\n      color: #8c4ef8;\n    }\n\n    .addListIcon {\n      display: grid;\n      place-items: center;\n    }\n    .addListText {\n      display: grid;\n      place-items: center start;\n      padding-left: 10px;\n      font-size: 12px;\n      font-weight: bold;\n      margin: 0;\n    }\n  }\n\n  .todoNum {\n    grid-area: 'TodoNum';\n    display: grid;\n    place-items: center;\n    background: #8c4ef8;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var AddProjectButton = function AddProjectButton(_ref) {
  var handleAddListIsShown = _ref.handleAddListIsShown;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "addProject",
    onClick: function onClick(e) {
      return handleAddListIsShown(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "addListIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z",
    fill: "#8c4ef8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: "6",
    y: "4",
    width: "2",
    height: "6",
    rx: "1",
    fill: "#062659",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: "10",
    y: "6",
    width: "2",
    height: "6",
    rx: "1",
    transform: "rotate(90 10 6)",
    fill: "#062659",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "addListText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, " Add Project ")));
};

/* harmony default export */ __webpack_exports__["default"] = (AddProjectButton);

/***/ })

})
//# sourceMappingURL=index.js.d8a0a616338606179d66.hot-update.js.map