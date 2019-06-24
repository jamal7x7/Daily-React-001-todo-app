webpackHotUpdate("static/development/pages/Login.js",{

/***/ "./components/ui/Tab.js":
/*!******************************!*\
  !*** ./components/ui/Tab.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/j/Desktop/pro-todo-app/components/ui/Tab.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .todoSideBtn {\n    padding: 0 16px 0 36px;\n\n    .sideBtn {\n      height: 52px;\n      border-radius: 8px;\n      padding-left: 16px;\n      display: grid;\n      grid-template-columns: 1fr 28px;\n      grid-template-rows: auto;\n        background: ", ";\n      cursor: pointer;\n      &:hover {\n        background: ", " ;\n        color: ", ";\n      }\n      &:hover .todoListNum {\n        // background: $primary2;\n        color: ", ";\n      }\n      .todoSideBtnLabel {\n        display: grid;\n        place-items: center start;\n        /* font-size: ", "; */\n        font-size: 14px;\n        color: ", ";\n      }\n      &:hover .todoSideBtnLabel {\n        color: ", ";\n      }\n     \n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.active ? function (_ref) {
    var theme = _ref.theme;
    return theme.colors.bgl;
  } : '00000000';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.bgl;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontSizes[0];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.textLight;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.text;
});
var TodoSideBtnNum = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.textLight;
});

var SidebarTab = function SidebarTab(_ref9) {
  var children = _ref9.children,
      num = _ref9.num,
      label = _ref9.label,
      index = _ref9.index;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "todoSideBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sideBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "todoSideBtnLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, label)), num && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TodoSideBtnNum, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "3"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarTab);

/***/ })

})
//# sourceMappingURL=Login.js.d6461b587cf59aefb64b.hot-update.js.map