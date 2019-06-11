webpackHotUpdate("static/development/pages/Login.js",{

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
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg */ "./components/svg/index.js");
/* harmony import */ var _ui_DropMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/DropMenu */ "./components/ui/DropMenu.js");


var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/UserInfo.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .dropMenuPosition {\n    background: #00f;\n    /* width: 100%; */\n    /* right: calc(50% - 100px); */\n    left: 50px;\n    top: 0px;\n    position: relative;\n    z-index: 100000000;\n  }\n  .userCardWrapper {\n    display: grid;\n    /* padding-left: 50px; */\n    place-items: center;\n    height: 100%;\n  }\n  .userCard {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    /* padding-left: 50px; */\n    height: 70px;\n\n    .userCardAvatar {\n      margin-bottom: 4px;\n      display: grid;\n      place-items: center;\n    }\n    .userCardName {\n      margin-top: 4px;\n      /* display: flex;\n      justify-content: center;\n      align-items: start; */\n      cursor: pointer;\n\n      /* place-items: start center; */\n\n      /* padding-left: 16px; */\n      /* background: #f00; */\n    }\n\n    .userCardNameBtn {\n      /* background: #000; */\n      padding: 5px 24px;\n      border-radius: 8px;\n      &:hover {\n        background: ", ";\n      }\n    }\n    .userCardNameText {\n      display: inline;\n    }\n\n    .userSettingsMenu {\n      padding-left: 8px;\n      display: inline;\n    }\n  }\n  .options-dropdown {\n    position: relative;\n    /* display: inline-block; */\n    z-index: 200;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Styles = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.bgl;
});

var UserInfo = function UserInfo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  var sp = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
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
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCardWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCardAvatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_6__["AvatarSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCardName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCardNameBtn",
    onClick: function onClick() {
      return setShowMenu(!showMenu);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userCardNameText ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Jamal"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "userSettingsMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_6__["UserSettingsMenuSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })))), showMenu && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    style: sp,
    className: "options-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "dropMenuPosition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_DropMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showMenu: showMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "options-content-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, " || "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Logout")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "options-content-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, " || "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Settings"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/components/ui/DropMenu.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n  \n\n  .options-content {\n    /* display: none; */\n   \n    position: absolute;\n    background-color: ", ";\n    border-radius: 8px;\n    min-width: 200px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    display: block;\n    z-index: 1;\n\n    .options-content-text {\n      padding: 16px;\n      display: grid;\n      grid-template-columns: 40px 1fr;\n      grid-template-rows: auto;\n      align-items: center;\n    }\n    \n    .options-content-text:hover {\n      background:#00000020;\n      /* color:", ";  */\n      color: ", "; \n      /* background: ", ";  */\n      \n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref) {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "options-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " ", children, " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (DropMenu);

/***/ })

})
//# sourceMappingURL=Login.js.2b3fc3e7a007a216ffe2.hot-update.js.map