webpackHotUpdate("static/development/pages/Signedin.js",{

/***/ "./components/sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectList */ "./components/sidebar/ProjectList.js");
/* harmony import */ var _SidebarTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarTab */ "./components/sidebar/SidebarTab.js");
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserInfo */ "./components/sidebar/UserInfo.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/Sidebar.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 100%;\n  overflow: visible;\n  .sideBar {\n    grid-area: 'sideBar';\n    background: ", ";\n    border-radius: 4px 0 0 4px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 160px 1fr 52px;\n    /* resize: horizontal; */\n    overflow: auto;\n    z-index: 2000;\n  }\n  .sidebarMain {\n    /* background: #00f; */\n    overflow: scroll;\n  }\n  .mode {\n    /* background: #000; */\n    z-index: 10;\n    border-top: 1px solid #eeeeee20;\n    display: grid;\n    place-items: center start;\n    padding-left: 52px;\n  }\n  .todoSideBtn {\n    padding: 0 16px 0 36px;\n\n    .sideBtn {\n      height: 52px;\n      border-radius: 8px;\n      padding-left: 16px;\n      display: grid;\n      grid-template-columns: 1fr 28px;\n      grid-template-rows: auto;\n      cursor: pointer;\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n      &:hover .todoListNum {\n        // background: $primary2;\n        color: ", ";\n      }\n      .todoSideBtnLabel {\n        display: grid;\n        place-items: center start;\n        color: ", ";\n      }\n      &:hover .todoSideBtnLabel {\n        color: ", ";\n      }\n      .todoSideBtnNum {\n        display: grid;\n        place-items: center;\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n  }\n\n  .sideBarList {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto auto 30px 170px auto;\n    align-content: start;\n    grid-gap: 10px;\n    // height: 100%;\n  }\n\n  .projects {\n    padding-left: 50px;\n    height: 52px;\n    display: grid;\n    place-items: center start;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.sideBar;
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
  return theme.colors.textLight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.text;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.textLight;
});

var Sidebar = function Sidebar(_ref8) {
  var addListIsShown = _ref8.addListIsShown,
      handleAddListIsShown = _ref8.handleAddListIsShown,
      addListRef = _ref8.addListRef,
      projects = _ref8.projects,
      userSignedin = _ref8.userSignedin,
      setUserSignedin = _ref8.setUserSignedin;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sideBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sidebarMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SidebarTab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Todos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SidebarTab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Calendar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, " Projects "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    addListIsShown: addListIsShown,
    handleAddListIsShown: handleAddListIsShown // handleAddList={handleAddList}
    // handleDeleteList={handleDeleteList}
    ,
    addListRef: addListRef,
    projects: projects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Zen")));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=Signedin.js.b92a460ea4a432b52d7d.hot-update.js.map