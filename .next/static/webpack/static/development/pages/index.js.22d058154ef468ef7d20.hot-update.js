webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _AddProjectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddProjectButton */ "./components/sidebar/AddProjectButton.js");
/* harmony import */ var _ProjectsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectsContext */ "./components/sidebar/ProjectsContext.js");


var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/ProjectList.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .projectListAndForm {\n    overflow-x: scroll;\n\n    height: 250px;\n    // margin-top: -10px;\n\n    .projectList {\n      display: grid;\n      grid-template-columns: auto 1fr 28px;\n      grid-template-rows: auto;\n\n      padding-left: 50px;\n      height: 52px;\n      color: ", ";\n      cursor: pointer;\n\n      &:hover {\n        color: #ff00f5;\n        background: #00000020;\n      }\n      &:hover .projectNum {\n        // background: #8c4ef8;\n        color: #ff00f5;\n      }\n      .projectIcon {\n        display: grid;\n        place-items: center;\n      }\n      .projectText {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        padding-left: 10px;\n        font-size: 14px;\n        overflow-x: auto;\n      }\n      .projectNum {\n        display: grid;\n        place-items: center;\n        font-size: 12px;\n        color: #eeeeee33;\n      }\n    }\n  }\n\n  input {\n    box-sizing: border-box;\n\n    width: 100%;\n    border: 0 solid #073175;\n    background: #00000000;\n    color: ", ";\n    // font-size: 16px;\n    outline: none;\n    // margin-bottom: 16px;\n  }\n\n  .projectListForm {\n    display: grid;\n    grid-template-columns: auto 1fr 28px;\n    grid-template-rows: auto;\n\n    padding-left: 50px;\n    height: 52px;\n    margin-top: -10px;\n    color: rgba($text, 0.5);\n    cursor: pointer;\n\n    &:hover {\n      color: #ff00f5;\n      background: #00000020;\n    }\n    &:hover .projectNum {\n      // background: $primary2;\n      color: #ff00f5;\n    }\n    .projectIcon {\n      display: grid;\n      place-items: center;\n    }\n    .projectText {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      color: ", ";\n\n      padding-left: 10px;\n      font-size: 14px;\n      form {\n        input {\n          font-size: 14px;\n          color: #ff00f5;\n        }\n      }\n    }\n    .projectNum {\n      display: grid;\n      place-items: center;\n      font-size: 12px;\n      color: #eeeeee33;\n    }\n  }\n"]);

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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_ProjectsContext__WEBPACK_IMPORTED_MODULE_5__["MyProjectsContext"]),
      projects = _useContext.projects,
      projectDispatch = _useContext.projectDispatch;

  var handleAddList = function handleAddList(e) {
    e.preventDefault();
    var text = addListRef.current.value;

    if (text) {
      projectDispatch({
        type: 'ADD_LIST',
        id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(),
        projectName: text
      });
    }

    addListRef.current.value = '';
  };

  var handleDeleteList = function handleDeleteList(e, id) {
    e.preventDefault();
    projectDispatch({
      type: 'DELETE_LIST',
      id: id
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectListAndForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, projects.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      d: "M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z",
      fill: "#FF00F5",
      style: {
        fill: 'hsl(0, 100%, 50%)'
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
        lineNumber: 153
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, " ", p.projectName, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      onClick: function onClick(e) {
        return handleDeleteList(e, p.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "x"), ' '), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectNum",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, p.remainingTodos));
  }), addListIsShown && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectListForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z",
    fill: "#4c5f7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return handleAddList(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    ref: addListRef,
    autoFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projectNum",
    onClick: function onClick(e) {
      return handleAddListIsShown(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "x")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AddProjectButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleAddListIsShown: handleAddListIsShown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectList);

/***/ })

})
//# sourceMappingURL=index.js.22d058154ef468ef7d20.hot-update.js.map