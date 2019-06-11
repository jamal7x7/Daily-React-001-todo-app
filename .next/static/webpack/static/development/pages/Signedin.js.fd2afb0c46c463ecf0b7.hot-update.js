webpackHotUpdate("static/development/pages/Signedin.js",{

/***/ "./pages/Signedin.js":
/*!***************************!*\
  !*** ./pages/Signedin.js ***!
  \***************************/
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







var _jsxFileName = "/Users/j/Desktop/todo-app/pages/Signedin.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  .wrapper {\n    width: 100%;\n    height: 100%;\n\n    // padding: 20px;\n    // border: 1px solid rgba(#fff, 0.08);\n    border-radius: 4px;\n    // background-color: $bgm;\n    // border: 1px solid $bgl;\n    // box-shadow: 0 90px 100px -50px rgba(black, 0.4),\n    //   0 50px 70px 10px rgba(black, 0.1);\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: ' sideBar  content ';\n  }\n\n  // * /////////////////////////////////////////////SIDE-BAR/////////////////////////////////////////////// * //\n\n  /* .userCard {\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    padding-left: 50px;\n    .userCardAvatar {\n      display: grid;\n      place-items: center;\n    }\n    .userCardName {\n      display: grid;\n      place-items: center start;\n      padding-left: 16px;\n    }\n  } */\n\n  // * ///////////////////////////////////////CONTENT///////////////////////////////////// * //\n\n  .content {\n    grid-area: 'content';\n    background: ", ";\n\n    overflow-anchor: none;\n    border-radius: 0 4px 4px 0;\n    z-index: -1;\n  }\n\n  .anchor {\n    overflow-anchor: auto;\n    height: 1px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Styles = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
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
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar_ProjectsContext__WEBPACK_IMPORTED_MODULE_10__["MyProjectsProvider"], {
    value: {
      projects: projects,
      projectDispatch: projectDispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TodosContext__WEBPACK_IMPORTED_MODULE_13__["MyTodosProvider"], {
    value: {
      todos: todos,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    addListIsShown: addListIsShown,
    handleAddListIsShown: handleAddListIsShown // handleAddList={handleAddList}
    // handleDeleteList={handleDeleteList}
    ,
    addListRef: addListRef,
    projects: projects // handleAddListIsShown={handleAddListIsShown}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
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
      lineNumber: 238
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=Signedin.js.fd2afb0c46c463ecf0b7.hot-update.js.map