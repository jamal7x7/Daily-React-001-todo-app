webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ui/Align.js":
/*!********************************!*\
  !*** ./components/ui/Align.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/j/Desktop/pro-todo-app/components/ui/Align.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: ", ";\n\n  justify-content: ", ";\n\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  justify-content: ", ";\n  align-items: ", ";\n  /* border-radius: 8px; */\n  display: grid;\n  /* grid-template-columns: auto;\n      grid-template-rows: auto; */\n  /* place-items: center center; */\n\n  /* height: 100px; */\n  width: 100%;\n\n  /* cursor: pointer; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  width: 100%;\n  display: grid;\n  /* place-items: center center; */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Outer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (props) {
  return props.ha;
}, function (props) {
  return props.va;
});
var XInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.stack ? 'column' : 'row';
}, function (props) {
  return props.placing ? 'space-between' : 'center';
});

var Center = function Center(_ref) {
  var children = _ref.children,
      va = _ref.va,
      ha = _ref.ha,
      width = _ref.width,
      stack = _ref.stack,
      placing = _ref.placing;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Outer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner, {
    va: va,
    ha: ha,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(XInner, {
    stack: stack,
    placing: placing,
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, ' ', children, ' ')));
};

/* harmony default export */ __webpack_exports__["default"] = (Center);

/***/ })

})
//# sourceMappingURL=index.js.28e645ff8d3c65b356f0.hot-update.js.map