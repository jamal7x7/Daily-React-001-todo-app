webpackHotUpdate("static/development/pages/LoginSignup.js",{

/***/ "./components/sidebar/UserInfo.js":
/*!****************************************!*\
  !*** ./components/sidebar/UserInfo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg */ "./components/svg/index.js");


var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/UserInfo.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .userCard {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 1fr;\n    /* padding-left: 50px; */\n    height: 100%;\n\n    .userCardAvatar {\n      margin-bottom: 4px;\n      /* background: #000; */\n      display: grid;\n      place-items: end center;\n    }\n    .userCardName {\n      margin-top: 4px;\n      display: flex;\n      justify-content: center;\n      align-items: start;\n\n      /* place-items: start center; */\n\n      /* padding-left: 16px; */\n      /* background: #f00; */\n    }\n\n    .userSettingsMenu {\n      padding-left: 8px;\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());

var UserInfo = function UserInfo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCardAvatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_5__["AvatarSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCardName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Jamal"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userSettingsMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_5__["UserSettingsMenuSvg"], {
    onClick: function onClick() {
      return setShowMenu(!showMenu);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), showMenu && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/LoginSignup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Logout")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Signedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Signin")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ })

})
//# sourceMappingURL=LoginSignup.js.336348ca28828def7dbb.hot-update.js.map