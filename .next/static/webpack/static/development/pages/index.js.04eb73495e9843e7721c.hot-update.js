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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .addProject {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: 52px;\n\n    margin-left: 50px;\n    // height: 10px;\n    border-top: 1px solid #eeeeee20;\n    color: #eeeeee40;\n    cursor: pointer;\n    /* box-sizing: inside-box; */\n    /* background: red; */\n\n    &:hover {\n      color: #8c4ef8;\n    }\n\n    .addListIcon {\n      display: grid;\n      place-items: center;\n    }\n    .addListText {\n      display: grid;\n      place-items: center start;\n      padding-left: 10px;\n      font-size: 12px;\n      font-weight: bold;\n      margin: 0;\n    }\n  }\n\n  .todoNum {\n    grid-area: \"TodoNum\";\n    display: grid;\n    place-items: center;\n    background: #8c4ef8;\n  }\n"]);

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

/***/ }),

/***/ "./components/sidebar/ProjectList.js":
/*!*******************************************!*\
  !*** ./components/sidebar/ProjectList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProjectsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectsContext */ "./components/sidebar/ProjectsContext.js");


var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/ProjectList.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .projectListAndForm {\n    overflow-x: scroll;\n\n    height: 255px;\n    // margin-top: -10px;\n\n    .projectList {\n      display: grid;\n      grid-template-columns: auto 1fr 28px;\n      grid-template-rows: auto;\n\n      padding-left: 50px;\n      height: 52px;\n      color: ", ";\n      cursor: pointer;\n\n      &:hover {\n        color: #ff00f5;\n        background: #00000020;\n      }\n      &:hover .projectNum {\n        // background: #8c4ef8;\n        color: #ff00f5;\n      }\n      .projectIcon {\n        display: grid;\n        place-items: center;\n      }\n      .projectText {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        padding-left: 10px;\n        font-size: 14px;\n        overflow-x: auto;\n      }\n      .projectNum {\n        display: grid;\n        place-items: center;\n        font-size: 12px;\n        color: #eeeeee33;\n      }\n    }\n  }\n\n  input {\n    box-sizing: border-box;\n\n    width: 100%;\n    border: 0 solid #073175;\n    background: #00000000;\n    color: ", ";\n    // font-size: 16px;\n    outline: none;\n    // margin-bottom: 16px;\n  }\n\n  .projectListForm {\n    display: grid;\n    grid-template-columns: auto 1fr 28px;\n    grid-template-rows: auto;\n\n    padding-left: 50px;\n    height: 52px;\n    margin-top: -10px;\n    color: rgba($text, 0.5);\n    cursor: pointer;\n\n    &:hover {\n      color: #ff00f5;\n      background: #00000020;\n    }\n    &:hover .projectNum {\n      // background: $primary2;\n      color: #ff00f5;\n    }\n    .projectIcon {\n      display: grid;\n      place-items: center;\n    }\n    .projectText {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      color: ", ";\n\n      padding-left: 10px;\n      font-size: 14px;\n      form {\n        input {\n          font-size: 14px;\n          color: #ff00f5;\n        }\n      }\n    }\n    .projectNum {\n      display: grid;\n      place-items: center;\n      font-size: 12px;\n      color: #eeeeee33;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.textLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.textLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.textLight;
});

var ProjectList = function ProjectList(_ref4) {
  var addListIsShown = _ref4.addListIsShown,
      addListRef = _ref4.addListRef,
      handleAddListIsShown = _ref4.handleAddListIsShown;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_ProjectsContext__WEBPACK_IMPORTED_MODULE_4__["MyProjectsContext"]),
      projects = _useContext.projects,
      projectDispatch = _useContext.projectDispatch;

  var handleAddList = function handleAddList(e) {
    e.preventDefault();
    var text = addListRef.current.value;

    if (text) {
      projectDispatch({
        type: "ADD_LIST",
        id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(),
        projectName: text
      });
    }

    addListRef.current.value = "";
  };

  var handleDeleteList = function handleDeleteList(e, id) {
    e.preventDefault();
    projectDispatch({
      type: "DELETE_LIST",
      id: id
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectListAndForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, projects.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      d: "M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z" // fill="#FF00F5"
      ,
      style: {
        fill: "hsl(0, 100%, 50%)"
      } // fill={
      //   "hsl(" +
      //   [0, 0, 0]
      //     .map(function() {
      //       return Math.round(100 * Math.random()) + "%"
      //     })
      //     .join(",") +
      //   ")"
      // }
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, " ", p.projectName, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      onClick: function onClick(e) {
        return handleDeleteList(e, p.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "x"), " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectNum",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, p.remainingTodos));
  }), addListIsShown && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectListForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z",
    fill: "#4c5f7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return handleAddList(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    ref: addListRef,
    autoFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectNum",
    onClick: function onClick(e) {
      return handleAddListIsShown(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "x"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectList);

/***/ }),

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
/* harmony import */ var _AddProjectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddProjectButton */ "./components/sidebar/AddProjectButton.js");
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectList */ "./components/sidebar/ProjectList.js");
/* harmony import */ var _SidebarTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarTab */ "./components/sidebar/SidebarTab.js");
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserInfo */ "./components/sidebar/UserInfo.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/Sidebar.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .todoSideBtn {\n    padding: 0 16px 0 36px;\n\n    .sideBtn {\n      height: 52px;\n      border-radius: 8px;\n      padding-left: 16px;\n      display: grid;\n      grid-template-columns: 1fr 28px;\n      grid-template-rows: auto;\n      cursor: pointer;\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n      &:hover .todoListNum {\n        // background: $primary2;\n        color: ", ";\n      }\n      .todoSideBtnLabel {\n        display: grid;\n        place-items: center start;\n        color: ", ";\n      }\n      &:hover .todoSideBtnLabel {\n        color: ", ";\n      }\n      .todoSideBtnNum {\n        display: grid;\n        place-items: center;\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.bgl;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.textLight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.text;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.textLight;
});

var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sideBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sideBarList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SidebarTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Todos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SidebarTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Calendar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, " Projects "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    addListIsShown: addListIsShown,
    handleAddListIsShown: handleAddListIsShown // handleAddList={handleAddList}
    // handleDeleteList={handleDeleteList}
    ,
    addListRef: addListRef // projects={projects}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddProjectButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleAddListIsShown: handleAddListIsShown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/sidebar/SidebarTab.js":
/*!******************************************!*\
  !*** ./components/sidebar/SidebarTab.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/SidebarTab.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .todoSideBtn {\n    padding: 0 16px 0 36px;\n\n    .sideBtn {\n      height: 52px;\n      border-radius: 8px;\n      padding-left: 16px;\n      display: grid;\n      grid-template-columns: 1fr 28px;\n      grid-template-rows: auto;\n      cursor: pointer;\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n      &:hover .todoListNum {\n        // background: $primary2;\n        color: ", ";\n      }\n      .todoSideBtnLabel {\n        display: grid;\n        place-items: center start;\n        color: ", ";\n      }\n      &:hover .todoSideBtnLabel {\n        color: ", ";\n      }\n      .todoSideBtnNum {\n        display: grid;\n        place-items: center;\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.bgl;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.textLight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.text;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.textLight;
});

var SidebarTab = function SidebarTab(_ref7) {
  var children = _ref7.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "todoSideBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sideBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "todoSideBtnLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, " ", children, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "todoSideBtnNum",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "3"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarTab);

/***/ }),

/***/ "./components/sidebar/UserInfo.js":
/*!****************************************!*\
  !*** ./components/sidebar/UserInfo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg */ "./components/svg/index.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/UserInfo.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .userCard {\n    background: #000;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    /* padding-left: 50px; */\n    height: 100%;\n\n    .userCardAvatar {\n      display: grid;\n      place-items: center;\n    }\n    .userCardName {\n      display: grid;\n      grid-template-columns: auto auto;\n      place-items: center;\n\n      /* padding-left: 16px; */\n      background: #f00;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var UserInfo = function UserInfo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "userCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "userCardAvatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_3__["AvatarSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "userCardName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Jamal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "||"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_sidebar_ProjectsContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sidebar/ProjectsContext */ "./components/sidebar/ProjectsContext.js");
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ "./components/sidebar/Sidebar.js");
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.js");
/* harmony import */ var _components_TodosContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/TodosContext */ "./components/TodosContext.js");







var _jsxFileName = "/Users/j/Desktop/todo-app/pages/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  .wrapper {\n    width: 100%;\n    height: 100%;\n\n    // padding: 20px;\n    // border: 1px solid rgba(#fff, 0.08);\n    border-radius: 4px;\n    // background-color: $bgm;\n    // border: 1px solid $bgl;\n    // box-shadow: 0 90px 100px -50px rgba(black, 0.4),\n    //   0 50px 70px 10px rgba(black, 0.1);\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: ' sideBar  content ';\n  }\n\n  // * /////////////////////////////////////////////SIDE-BAR/////////////////////////////////////////////// * //\n\n  .sideBar {\n    grid-area: 'sideBar';\n    background: ", ";\n    border-radius: 4px 0 0 4px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 140px 1fr;\n    resize: horizontal;\n    overflow: auto;\n  }\n\n  /* .userCard {\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    padding-left: 50px;\n    .userCardAvatar {\n      display: grid;\n      place-items: center;\n    }\n    .userCardName {\n      display: grid;\n      place-items: center start;\n      padding-left: 16px;\n    }\n  } */\n\n  .sideBarList {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto auto 30px 170px auto;\n    align-content: start;\n    grid-gap: 10px;\n    // height: 100%;\n  }\n\n  .projects {\n    padding-left: 50px;\n    height: 52px;\n    display: grid;\n    place-items: center start;\n  }\n\n  // * ///////////////////////////////////////CONTENT///////////////////////////////////// * //\n\n  .content {\n    grid-area: 'content';\n    background: ", ";\n\n    overflow-anchor: none;\n    border-radius: 0 4px 4px 0;\n  }\n\n  .anchor {\n    overflow-anchor: auto;\n    height: 1px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Styles = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.sideBar;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.bgd;
});

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(state), [{
        id: action.id,
        text: action.text,
        completed: action.completed
      }]);

    case 'COMPLETED':
      return state.map(function (v) {
        if (v.id === action.id) {
          v = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, v, {
            completed: !v.completed
          });
        }

        return v;
      });

    case 'REORDER':
      return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(action.reorderedTodos);

    case 'DELETED':
      return state.filter(function (v) {
        return v.id !== action.id;
      });

    case 'RESET':
      {
        console.log(action);
        return action.payload;
      }

    default:
      return state;
  }
};

var projectsReducer = function projectsReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(state), [{
        id: action.id,
        projectName: action.projectName,
        totalTodos: 0,
        remainingTodos: 0
      }]);

    case 'DELETE_LIST':
      return state.filter(function (v) {
        return v.id !== action.id;
      });

    default:
      return state;
  }
};

var Index = function Index() {
  var addListRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();
  var didRun = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      addTaskIsShown = _useState2[0],
      setAddTaskIsShown = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      addListIsShown = _useState4[0],
      setAddListIsShown = _useState4[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(reducer, [{
    id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()(),
    text: 'Read',
    // completed: true,
    project: 'default'
  }, {
    id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()() + 1,
    text: 'Run',
    // completed: false,
    project: 'default'
  }, {
    id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()() + 2,
    text: 'Pray',
    // completed: false,
    project: 'default'
  }]),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useReducer, 2),
      todos = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useReducer3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(projectsReducer, [{
    id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()(),
    projectName: 'Design',
    totalTodos: 0,
    remainingTodos: 0
  }]),
      _useReducer4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useReducer3, 2),
      projects = _useReducer4[0],
      projectDispatch = _useReducer4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!didRun.current) {
      var raw = localStorage.getItem('data');
      dispatch({
        type: 'RESET',
        payload: JSON.parse(raw)
      });
      didRun.current = true;
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    localStorage.setItem('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(todos));
  }, [todos]);

  var handleCheckBox = function handleCheckBox(e, id) {
    e.preventDefault(); // console.log("done")

    dispatch({
      type: 'COMPLETED',
      id: id,
      completed: true
    });
  };

  var handleAddTask = function handleAddTask(e) {
    setAddTaskIsShown(function (prev) {
      return !prev;
    });
  }; // a little function to help us with reordering the result


  var reorder = function reorder(list, startIndex, endIndex) {
    var result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(list);

    var _result$splice = result.splice(startIndex, 1),
        _result$splice2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_result$splice, 1),
        removed = _result$splice2[0];

    result.splice(endIndex, 0, removed);
    return result;
  };

  var handleOnDragEnd = function handleOnDragEnd(result) {
    // e.preventDefault()
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    var reorderedTodos = reorder(todos, result.source.index, result.destination.index);
    console.log('to', reorderedTodos);
    dispatch({
      type: 'REORDER',
      reorderedTodos: reorderedTodos
    });
  };

  var handleAddListIsShown = function handleAddListIsShown(e) {
    setAddListIsShown(function (prev) {
      return !prev;
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar_ProjectsContext__WEBPACK_IMPORTED_MODULE_10__["MyProjectsProvider"], {
    value: {
      projects: projects,
      projectDispatch: projectDispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TodosContext__WEBPACK_IMPORTED_MODULE_13__["MyTodosProvider"], {
    value: {
      todos: todos,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TodoList__WEBPACK_IMPORTED_MODULE_12__["default"] // todos={todos}
  , {
    handleOnDragEnd: handleOnDragEnd,
    handleCheckBox: handleCheckBox // handleDeleteTodo={handleDeleteTodo}
    ,
    addTaskIsShown: addTaskIsShown // inputRef={inputRef}
    ,
    handleAddTask: handleAddTask // handleSubmit={handleSubmit}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.04eb73495e9843e7721c.hot-update.js.map