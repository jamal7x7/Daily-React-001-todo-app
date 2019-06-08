module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddTask.js":
/*!*******************************!*\
  !*** ./components/AddTask.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_FormTabContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FormTabContent */ "./components/FormTabContent.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg */ "./components/svg/index.js");
/* harmony import */ var _TodosContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TodosContext */ "./components/TodosContext.js");



var _jsxFileName = "/Users/j/Desktop/todo-app/components/AddTask.js";

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-bottom: -20px;\n  display: grid;\n  grid-template-columns: 40px 40px 40px 1fr;\n  grid-template-rows: 1fr;\n  place-items: center start;\n  position: relative;\n\n  .big-svg {\n    top: -30px;\n    justify-self: end;\n    position: absolute;\n    justify-self: end;\n    cursor: pointer;\n    &:hover {\n      transform: scale(1.03);\n      svg > path {\n        fill: ", ";\n      }\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-top: 0;\n  padding: 25px;\n  background: ", ";\n\n  border-radius: 8px;\n  box-shadow: 0 90px 100px -50px rgba(black, 0.4),\n    0 50px 70px 10px rgba(black, 0.1);\n\n  .FormContent {\n    /* background: #000; */\n    height: 60px;\n\n    overflow-y: scroll;\n  }\n\n  hr {\n    opacity: 0.1;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 52px;\n  padding-left: 13px;\n  border: none;\n  background: #00000008;\n  color: ", ";\n  font-size: 16px;\n  outline: none;\n  caret-color: ", ";\n  &:hover :placeholder-shown {\n    background: #00000020;\n    border-radius: 8px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  grid-template-rows: auto;\n  background: #00000033;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  /* padding: 13px 16px; */\n  /* margin-bottom: 16px; */\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  box-sizing: border-box; \n  margin-left: 96px;\n  margin-top: -56px;\n  height: 52px;\n  /* padding: 25px; */\n  /* background: ", "; */\n\n  width: 80%;\n  /* box-shadow: 0 50px 10px -20px #00000033; */\n  /* box-shadow: 0 90px 100px  ", "\n    0 10px 10px 10px rgba(red, 0.7); */\n \n\n  \n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  opacity: 1;\n  margin-left: 16px;\n  font-size: 14px;\n  grid-area: 'addText';\n  /* background: #5a56f8; */\n  display: grid;\n  place-items: center left;\n  height: 52px;\n  opacity: 0.4;\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  grid-area: 'addIcon';\n  display: grid;\n  place-items: center;\n  /* background: #000; */\n  .active {\n    background: #00f;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  grid-area: 'dot';\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: grid;\n  grid-template-columns: 56px 40px 1fr;\n  grid-template-rows: 52px;\n\n  cursor: pointer;\n  opacity: 1;\n  &:hover {\n    opacity: 1;\n  }\n  div {\n    grid-area: 'dot';\n  }\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: inline-block;\n  height: 52px;\n  z-index: 3000000;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  border: none;\n  color: ", ";\n  border-radius: 4px;\n  padding: 13px 20px;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n  background: ", ";\n  &:hover {\n    color: #fff;\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Button = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.text;
}, function (props) {
  return props.primary ? '#8c4ef8' : 'transparent';
}, function (props) {
  return props.primary ? Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.05, '#8c4ef8') : 'transparent';
});
var AddTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject2());
var AddTaskCard = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject4());
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject5());
var AddText = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject6());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.form(_templateObject7(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.bgm;
}, Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])(255, 2, 0, 0.7));
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject8());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.input(_templateObject9(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary;
});
var Card = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.form(_templateObject10(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.bgm;
});
var FormBtns = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject11(), function (_ref7) {
  var theme = _ref7.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.05, theme.colors.primary);
}); // const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 20,
//   (x - window.innerWidth / 2) / 20,
//   1.1
// ]
// const trans = (x, y, s) =>
//   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

var AddTask = function AddTask(_ref8) {
  var addTaskIsShown = _ref8.addTaskIsShown,
      handleSubmit = _ref8.handleSubmit,
      handleAddTask = _ref8.handleAddTask,
      inputRef = _ref8.inputRef;

  // const [props, set] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 10, tension: 1000, friction: 100 }
  // }))
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      state = _useState2[0],
      toggle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('projectTab'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      tab = _useState4[0],
      setTab = _useState4[1];

  var p = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    // opacity: state ? 1 : 0,
    // transform: state ? "rotate(45deg)" : "rotate(0)",
    transform: "rotate(".concat(state ? 135 : 0, "deg ) "),
    // transformOrigin: "center",
    // from: { opacity: 0 },
    // color: !optionsMenuIsShown ? "tomato" : "#8c4ef8",
    // config: { duration: 150 },
    config: {
      mass: 1,
      tension: 500,
      friction: 20
    }
  });
  var fip = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    opacity: state ? 1 : 0,
    transformOrigin: 'left',
    transform: state ? 'scaleX(1) translateX(0px)  ' : 'scaleX(0.9) translateX(-20px) ',
    config: {
      mass: 1,
      tension: 500,
      friction: 30,
      clamp: false // onRest: () => inputRef.current.focus()

    }
  });
  var fbp = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    opacity: state ? 1 : 0,
    // transform: state
    //   ? "scale(1) translateY(0px) "
    //   : "scale(1) translateY(-10px) ",
    transformOrigin: 'top',
    transform: state ? 'scaleY(1) translateY(0px)  ' : 'scaleY(0.9) translateY(-20px) ',
    config: {
      mass: 1,
      tension: 500,
      friction: 30,
      clamp: false
    },
    delay: 150
  });
  var ftp = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    opacity: !state ? 1 : 0,
    // transform: state
    //   ? "scale(1) translateY(0px) "
    //   : "scale(1) translateY(-10px) ",
    transformOrigin: 'top',
    transform: !state ? 'scaleY(1) translateX(0px)  ' : 'scaleY(1) translateX(10px) ',
    config: {
      mass: 1,
      tension: 500,
      friction: 30
    }
  });

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_TodosContext__WEBPACK_IMPORTED_MODULE_9__["MyTodosContext"]),
      dispatch = _useContext.dispatch;

  var handleDeleteTodo = function handleDeleteTodo(e, id) {
    e.preventDefault(); // console.log("done")

    dispatch({
      type: 'DELETED',
      id: id
    });
  };

  var handleProjectTab = function handleProjectTab(e, id) {
    e.preventDefault();
    var pt = document.getElementsByClassName('');
    e.currentTarget.classList.toggle('active');
    var n = e.currentTarget.getAttribute('name');
    setTab(function (p) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
        name: n
      });
    }); // console.log(p => (p = n))

    console.log(typeof n);
  };

  var handlePriorityTab = function handlePriorityTab(e, id) {
    e.preventDefault();
    var n = e.currentTarget.getAttribute('name');
    setTab(function (p) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
        name: n
      });
    }); // console.log(n)
    // console.log(tab.name)
  };

  var handleDatePickerTab = function handleDatePickerTab(e, id) {
    e.preventDefault();
    var n = e.currentTarget.getAttribute('name');
    setTab(function (p) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
        name: n
      });
    }); // console.log(n)
    // console.log(tab.name)
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(AddTaskButton, {
    onClick: function onClick() {
      return toggle(!state);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(AddTaskCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Dot, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Icon, {
    onClick: function onClick(e) {
      return handleAddTask(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_8__["HexBorderSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].g, {
    // width="30"
    // height="30"
    // viewBox="0 0 30 30"
    // fill="none"
    // transform={`translate(${15}, ${15})`}
    style: p,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_8__["AddTaskSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  })))), !state && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    style: ftp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(AddText, {
    onClick: function onClick(e) {
      return handleAddTask(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, " Add Task"))))), state && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Form, {
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    style: fip,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InputWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Input, {
    autoFocus: true,
    ref: inputRef,
    placeholder: "Enter your task here...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Icon, {
    onClick: function onClick(e) {
      return handleDeleteTodo(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_8__["DeleteTaskSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    style: fbp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "FormContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_FormTabContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    tab: tab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(FormBtns, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Icon, {
    name: "projectTab",
    onClick: function onClick(e) {
      return handleProjectTab(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_8__["ProjectSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Icon, {
    name: "priorityTab",
    onClick: function onClick(e) {
      return handlePriorityTab(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_8__["PrioritySvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Icon, {
    name: "datePickerTab",
    onClick: function onClick(e) {
      return handleDatePickerTab(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_8__["DatePickerSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Icon, {
    className: "big-svg",
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_svg__WEBPACK_IMPORTED_MODULE_8__["SubmitSvg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddTask);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.scss */ "./components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/Footer.js";


/* eslint-disable react/react-in-jsx-scope */

var textStyle = {
  fontSize: 10,
  color: "#eeeeee33"
};
function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: textStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " \xA9 jamal, 2019"));
}

/***/ }),

/***/ "./components/FormTabContent.js":
/*!**************************************!*\
  !*** ./components/FormTabContent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar_ProjectsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/ProjectsContext */ "./components/sidebar/ProjectsContext.js");

var _jsxFileName = "/Users/j/Desktop/todo-app/components/FormTabContent.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .projectListAndForm {\n    /* overflow: auto; */\n\n    /* height: 255px; */\n    /* width: 170px; */\n    /* overflow-x: scroll; */\n\n    .projectList {\n      display: inline-flex;\n      /* flex-basis: 100px; */\n      /* flex-wrap: wrap; */\n      padding: 8px;\n      .chooseProject {\n        display: grid;\n        grid-template-columns: auto auto;\n        grid-template-rows: 24px;\n        /* background-color: red; */\n\n        padding: 4px 16px;\n        margin-right: 8px;\n        box-sizing: border-box;\n        border: 2px solid #07317544;\n        border-radius: 20px;\n        color: ", ";\n        cursor: pointer;\n\n        &:hover {\n          color: #ff00f5;\n          background: #073175;\n        }\n        &:hover .projectNum {\n          // background: #8c4ef8;\n          color: #ff00f5;\n        }\n        .projectIcon {\n          display: grid;\n          place-items: center start;\n        }\n        .projectText {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n\n          padding-left: 10px;\n          font-size: 14px;\n          /* overflow-x: auto; */\n        }\n        .projectNum {\n          display: grid;\n          place-items: center;\n          font-size: 12px;\n          color: #eeeeee33;\n        }\n      }\n    }\n  }\n\n  input {\n    /* box-sizing: border-box; */\n\n    width: 100%;\n    border: 0 solid #073175;\n    background: #00000000;\n    color: ", ";\n    // font-size: 16px;\n    outline: none;\n    // margin-bottom: 16px;\n  }\n\n  .projectListForm {\n    display: grid;\n    grid-template-columns: auto 140px;\n    grid-template-rows: auto;\n\n    padding-left: 50px;\n    height: 52px;\n    margin-top: -10px;\n    color: rgba($text, 0.5);\n    cursor: pointer;\n\n    &:hover {\n      color: #ff00f5;\n      background: #00000020;\n    }\n    &:hover .projectNum {\n      // background: $primary2;\n      color: #ff00f5;\n    }\n    .projectIcon {\n      display: grid;\n      place-items: center;\n    }\n    .projectText {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      color: ", ";\n\n      padding-left: 10px;\n      font-size: 14px;\n      form {\n        input {\n          font-size: 14px;\n          color: #ff00f5;\n        }\n      }\n    }\n    /* .projectNum {\n      display: grid;\n      place-items: center;\n      font-size: 12px;\n      color: #eeeeee33;\n    } */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.textLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.textLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.textLight;
});

var FormTabContent = function FormTabContent(_ref4) {
  var tab = _ref4.tab;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_sidebar_ProjectsContext__WEBPACK_IMPORTED_MODULE_3__["MyProjectsContext"]),
      projects = _useContext.projects,
      projectDispatch = _useContext.projectDispatch;

  console.log("========================>", tab.name);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "projectListAndForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, tab.name === "projectTab" && projects.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "projectList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "chooseProject",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "projectIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z",
      fill: "#FF00F5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "projectText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, " ", p.projectName, " "))));
  }), tab.name === "priorityTab" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "projectList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Priority"), tab.name === "datePickerTab" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "projectList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Date Picker")));
};

/* harmony default export */ __webpack_exports__["default"] = (FormTabContent);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.scss */ "./components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/Header.js";


/* eslint-disable react/react-in-jsx-scope */


var linkStyle = {// marginRight: 15
  // margin: 0
};
function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    className: _layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    activeClassName: _layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activeNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " App ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    className: _layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    activeClassName: _layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activeNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Code"))));
}

/***/ }),

/***/ "./components/InfoHeader.js":
/*!**********************************!*\
  !*** ./components/InfoHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/j/Desktop/todo-app/components/InfoHeader.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .info {\n    height: 140px;\n    font-size: 12px;\n    display: grid;\n    grid-template-columns: 72px 40px 1fr;\n\n    /* filter: url('/media/blur.svg#blur'); */\n    /* filter: blur(10px); */\n    /* position: relative; */\n    /* background: #eeeeee10; */\n\n    z-index: 3;\n    /* box-shadow: 0 100px 100px -50px #0000001e, 0 10px 70px 10px #0000001e; */\n\n    .dot {\n      /* // background: #000; */\n    }\n    .todayIcon {\n      /* // background: rgb(255, 157, 157); */\n    }\n    .todayInfo {\n      /* // background: red; */\n      display: grid;\n      place-items: center start;\n      /* // margin-top: 40px; */\n\n      .todayInfoWrapper {\n        height: 40px;\n        width: 100%;\n        /* //padding-left: 16px; */\n        display: grid;\n        grid-template-columns: 3fr 1fr 60px;\n        border-bottom: 1px solid #8c4ef870;\n        .todayInfoText {\n          color: rgba(#eee, 0.3);\n          /* color: rgba(#8c4ef8, 0.7); */\n          font-weight: 600;\n        }\n        .todayInfoDate {\n          color: #8c4ef8ee;\n          justify-self: end;\n        }\n        .dot {\n          /* background: #000; */\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var InfoHeader = function InfoHeader() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "todayIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "todayInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "todayInfoWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "todayInfoText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Today"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "todayInfoDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, " Sunday, April 17, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoHeader);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.scss */ "./components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/Layout.js";


/* eslint-disable react/react-in-jsx-scope */



function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_scss__WEBPACK_IMPORTED_MODULE_3___default.a.appContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/TodoCard.js":
/*!********************************!*\
  !*** ./components/TodoCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/svg */ "./components/svg/index.js");
/* harmony import */ var _TodosContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TodosContext */ "./components/TodosContext.js");



var _jsxFileName = "/Users/j/Desktop/todo-app/components/TodoCard.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\n  \n  .todoCard {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 56px 40px 1fr;\n    grid-template-rows: 52px;\n    color: ", ";;;\n\n    &:hover {\n      background: ", "\n      // box-sizing: border-box;\n      // border-top: 1px solid $bgl;\n      // border-bottom: 1px solid $bgl;\n      // border-top: 1px solid rgba(#fff, 0.08);\n      // border-bottom: 1px solid rgba(#fff, 0.08);\n      // box-shadow: 0px 1px 0px #192b4d inset;\n    }\n\n    // &:hover .dot {\n    /* //   border-top: 1px solid rgba(#00000020, 0.08); */\n    /* //   border-bottom: 1px solid rgba(#00000020, 0.08); */\n    // }\n\n    &:hover .checkbox{\n      transform: scale(1.05);\n    }\n    .checkbox:hover {\n      #checkbox-bg{\n        /* fill: ", "; */\n        stroke: ", ";\n      }\n      #check {\n        fill: ", ";\n        \n      }\n    }\n\n    &:hover .options {\n      opacity: 1;\n    }\n\n    &:hover .grab {\n      /* opacity: 0.3; */\n    }\n  }\n\n  .grab {\n    grid-area: \"grab\";\n    \n    display: grid;\n    place-items: center;\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  \n  .grab:hover {\n    opacity: 1;\n    fill: ", ";\n  }\n\n  .checkbox {\n    grid-area: \"checkbox\";\n    display: grid;\n    place-items: center;\n    // background: #3a3a3a;\n  }\n  .todoText {\n    margin-left: 16px;\n    font-size: 14px;\n    box-sizing: border-box;\n    grid-area: \"todoText\";\n    // border-bottom: 1px solid rgba(#fff, 0.08);\n    // border-bottom: 3px solid #00000020;\n    /* border-bottom: 1px solid #192b4d; */\n    display: grid;\n    place-items: center left;\n    // background: #5a56f8;\n    display: grid;\n    grid-template-columns: 8fr 1fr;\n    grid-template-rows: auto;\n    .text {\n      display: grid;\n      place-items: center start;\n      \n    }\n    .text-bar {\n      display: grid;\n      place-items: center start;\n      color: ", ";\n      text-decoration: line-through;\n      text-decoration-color:", "; \n      text-decoration-style: wavy;\n    }\n    .options {\n      display: flex;\n      justify-content: flex-end;\n      opacity: 0;\n      .delete-icon {\n        z-index: 10;\n        display: none;\n      }\n    }\n  }\n  .options:hover .deleteIcon {\n    fill: ", ";;\n    opacity: 1;\n  }\n\n  .options-dropdown {\n    position: relative;\n    /* display: inline-block; */\n    z-index: 200;\n    \n  }\n  .options-content {\n    /* display: none; */\n    right: 10px;\n    top: 20px;\n    position: absolute;\n    background-color: ", ";\n    border-radius: 8px;\n    min-width: 200px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    display: block;\n    z-index: 1;\n\n    \n\n    .options-content-text {\n      padding: 16px;\n      display: grid;\n      grid-template-columns: 40px 1fr;\n      grid-template-rows: auto;\n      align-items: center;\n    }\n    .options-content-text:hover {\n      background:#00000020;\n      /* color:", ";  */\n      color: ", "; \n      /* background: ", ";  */\n      \n    }\n\n    \n  }\n\n    .draging-over {\n      background-color: ", "; \n    }\n\n    .not-draging-over {\n      background-color: ", "; \n    }\n    \n  }\n  /* .options-dropdown:hover .options-content {\n    display: block;\n  } */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Styles = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.section(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.textLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.02, theme.colors.bgd);
}, function (_ref3) {
  var theme = _ref3.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.05, theme.colors.primary);
}, function (_ref4) {
  var theme = _ref4.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["saturate"])(0.5, theme.colors.primary);
}, function (_ref5) {
  var theme = _ref5.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0, theme.colors.bgl);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.textLight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.primary;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.primary;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.bgm;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.primary;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.text;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.primary;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.bgm;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.bgd;
});
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2(), function (props) {
  return props.isDragging ? function (_ref16) {
    var theme = _ref16.theme;
    return Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.02, theme.colors.bgd);
  } : function (_ref17) {
    var theme = _ref17.theme;
    return theme.colors.bgd;
  };
});

var TodoCard = function TodoCard(_ref18) {
  var id = _ref18.id,
      text = _ref18.text,
      completed = _ref18.completed,
      handleCheckBox = _ref18.handleCheckBox,
      i = _ref18.i;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_TodosContext__WEBPACK_IMPORTED_MODULE_9__["MyTodosContext"]),
      dispatch = _useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      optionsMenuIsShown = _useState2[0],
      setOptionsMenuIsShown = _useState2[1]; // const handleOptionsMenu = e => {
  //   e.preventDefault()
  //   setOptionsMenuIsShown(prev => !prev)
  // }


  var handleDeleteTodo = function handleDeleteTodo(e, id) {
    e.preventDefault(); // console.log("done")

    dispatch({
      type: "DELETED",
      id: id
    });
    setOptionsMenuIsShown(function (prev) {
      return !prev;
    });
  };

  var handleExpandCard = function handleExpandCard(e, id) {
    e.preventDefault(); // console.log("done")
    // setOptionsMenuIsShown(prev => !prev)
  };

  var sp = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["useSpring"])({
    // opacity: optionsMenuIsShown ? 1 : 0,
    transform: optionsMenuIsShown ? "scale(1)" : "scale(0.1)",
    // from: { opacity: 0 },
    // color: !optionsMenuIsShown ? "tomato" : "#8c4ef8",
    // config: { duration: 150 },
    config: {
      mass: 1,
      tension: 500,
      friction: 30
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Draggable"], {
    key: id,
    draggableId: id,
    index: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, function (provided, snapshot) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CardContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps, {
      isDragging: snapshot.isDragging,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "todoCard",
      key: id,
      onClick: function onClick(e) {
        return handleExpandCard(e, id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "grab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_svg__WEBPACK_IMPORTED_MODULE_8__["GrabSvg"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "checkbox",
      onClick: function onClick(e) {
        return handleCheckBox(e, id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, completed ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_svg__WEBPACK_IMPORTED_MODULE_8__["CheckBoxSvg"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_svg__WEBPACK_IMPORTED_MODULE_8__["HexBorderSvg"], {
      color: "red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "todoText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, !completed ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, text) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "text-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, text), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "options",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("svg", {
      className: "delete-icon",
      onClick: function onClick(e) {
        return handleDeleteTodo(e, id);
      },
      width: "31",
      height: "31",
      viewBox: "0 0 31 31",
      fill: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("g", {
      opacity: "0.33",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      d: "M11.5 2.3094C13.9752 0.880339 17.0248 0.880339 19.5 2.3094L24.9234 5.4406C27.3986 6.86966 28.9234 9.51068 28.9234 12.3688V18.6312C28.9234 21.4893 27.3986 24.1303 24.9234 25.5594L19.5 28.6906C17.0248 30.1197 13.9752 30.1197 11.5 28.6906L6.07661 25.5594C3.6014 24.1303 2.07661 21.4893 2.07661 18.6312V12.3688C2.07661 9.51068 3.6014 6.86966 6.07661 5.4406L11.5 2.3094Z",
      fill: "#073175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      d: "M19 3.17543L24.4234 6.30662C26.5892 7.55705 27.9234 9.86794 27.9234 12.3688V18.6312C27.9234 21.1321 26.5892 23.4429 24.4234 24.6934L19 27.8246C16.8342 29.075 14.1658 29.075 12 27.8246L6.57661 24.6934C4.4108 23.4429 3.07661 21.1321 3.07661 18.6312V12.3688C3.07661 9.86794 4.4108 7.55705 6.57661 6.30662L12 3.17543C14.1658 1.925 16.8342 1.925 19 3.17543Z",
      stroke: "#C4C4C4",
      "stroke-opacity": "0",
      "stroke-width": "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("g", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      className: "deleteIcon",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M13 11C11.8954 11 11 11.8954 11 13V21C11 22.1046 11.8954 23 13 23H19C20.1046 23 21 22.1046 21 21V13C21 11.8954 20.1046 11 19 11H13ZM17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16V20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20V16ZM19 15C19.5523 15 20 15.4477 20 16V20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20V16C18 15.4477 18.4477 15 19 15ZM14 16C14 15.4477 13.5523 15 13 15C12.4477 15 12 15.4477 12 16V20C12 20.5523 12.4477 21 13 21C13.5523 21 14 20.5523 14 20V16Z",
      fill: "#4c5f7e" // opacity="1"
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("rect", {
      className: "deleteIcon",
      x: "18",
      y: "9",
      width: "2",
      height: "4",
      rx: "1",
      transform: "rotate(90 18 9)",
      fill: "#4c5f7e" // opacity="1"
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("rect", {
      className: "deleteIcon",
      x: "22",
      y: "10",
      width: "4",
      height: "12",
      rx: "2",
      transform: "rotate(90 22 10)",
      fill: "#4c5f7e" // opacity="1"
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("svg", {
      width: "31",
      height: "31",
      viewBox: "0 0 31 31",
      fill: "none",
      onClick: function onClick() {
        return setOptionsMenuIsShown(!optionsMenuIsShown);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("g", {
      opacity: "0.33",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      d: "M11.5 2.3094C13.9752 0.880339 17.0248 0.880339 19.5 2.3094L24.9234 5.4406C27.3986 6.86966 28.9234 9.51068 28.9234 12.3688V18.6312C28.9234 21.4893 27.3986 24.1303 24.9234 25.5594L19.5 28.6906C17.0248 30.1197 13.9752 30.1197 11.5 28.6906L6.07661 25.5594C3.6014 24.1303 2.07661 21.4893 2.07661 18.6312V12.3688C2.07661 9.51068 3.6014 6.86966 6.07661 5.4406L11.5 2.3094Z",
      fill: "#073175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      d: "M19 3.17543L24.4234 6.30662C26.5892 7.55705 27.9234 9.86794 27.9234 12.3688V18.6312C27.9234 21.1321 26.5892 23.4429 24.4234 24.6934L19 27.8246C16.8342 29.075 14.1658 29.075 12 27.8246L6.57661 24.6934C4.4108 23.4429 3.07661 21.1321 3.07661 18.6312V12.3688C3.07661 9.86794 4.4108 7.55705 6.57661 6.30662L12 3.17543C14.1658 1.925 16.8342 1.925 19 3.17543Z",
      stroke: "#C4C4C4",
      "stroke-opacity": "0",
      "stroke-width": "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      className: "deleteIcon",
      d: "M9.9 13.8887C10.2094 13.71 10.5906 13.71 10.9 13.8887L11.9785 14.5113C12.2879 14.69 12.4785 15.0201 12.4785 15.3774V16.6227C12.4785 16.9799 12.2879 17.31 11.9785 17.4887L10.9 18.1113C10.5906 18.29 10.2094 18.29 9.9 18.1113L8.82154 17.4887C8.51214 17.31 8.32154 16.9799 8.32154 16.6227V15.3774C8.32154 15.0201 8.51214 14.69 8.82154 14.5113L9.9 13.8887Z",
      fill: "#4c5f7e",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      className: "deleteIcon",
      d: "M15.5 13.8887C15.8094 13.71 16.1906 13.71 16.5 13.8887L17.5784 14.5113C17.8878 14.69 18.0784 15.0201 18.0784 15.3774V16.6227C18.0784 16.9799 17.8878 17.31 17.5784 17.4887L16.5 18.1113C16.1906 18.29 15.8094 18.29 15.5 18.1113L14.4215 17.4887C14.1121 17.31 13.9215 16.9799 13.9215 16.6227V15.3774C13.9215 15.0201 14.1121 14.69 14.4215 14.5113L15.5 13.8887Z",
      fill: "#4c5f7e",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      className: "deleteIcon",
      d: "M21.1 13.8887C21.4094 13.71 21.7906 13.71 22.1 13.8887L23.1785 14.5113C23.4879 14.69 23.6785 15.0201 23.6785 15.3774V16.6227C23.6785 16.9799 23.4879 17.31 23.1785 17.4887L22.1 18.1113C21.7906 18.29 21.4094 18.29 21.1 18.1113L20.0216 17.4887C19.7121 17.31 19.5216 16.9799 19.5216 16.6227V15.3774C19.5216 15.0201 19.7122 14.69 20.0216 14.5113L21.1 13.8887Z",
      fill: "#4c5f7e",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    })), optionsMenuIsShown && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__["animated"].div, {
      style: sp,
      className: "options-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "options-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "options-content-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, " || "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, "Edit")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "options-content-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, " || "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, "Add to Project")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "options-content-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, " || "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, "Priority")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "options-content-text",
      onClick: function onClick(e) {
        return handleDeleteTodo(e, id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("svg", {
      className: "delete-icon-svg",
      onClick: function onClick(e) {
        return handleDeleteTodo(e, id);
      },
      width: "31",
      height: "31",
      viewBox: "0 0 31 31",
      fill: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("g", {
      opacity: "0.33",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      d: "M11.5 2.3094C13.9752 0.880339 17.0248 0.880339 19.5 2.3094L24.9234 5.4406C27.3986 6.86966 28.9234 9.51068 28.9234 12.3688V18.6312C28.9234 21.4893 27.3986 24.1303 24.9234 25.5594L19.5 28.6906C17.0248 30.1197 13.9752 30.1197 11.5 28.6906L6.07661 25.5594C3.6014 24.1303 2.07661 21.4893 2.07661 18.6312V12.3688C2.07661 9.51068 3.6014 6.86966 6.07661 5.4406L11.5 2.3094Z",
      fill: "#073175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      d: "M19 3.17543L24.4234 6.30662C26.5892 7.55705 27.9234 9.86794 27.9234 12.3688V18.6312C27.9234 21.1321 26.5892 23.4429 24.4234 24.6934L19 27.8246C16.8342 29.075 14.1658 29.075 12 27.8246L6.57661 24.6934C4.4108 23.4429 3.07661 21.1321 3.07661 18.6312V12.3688C3.07661 9.86794 4.4108 7.55705 6.57661 6.30662L12 3.17543C14.1658 1.925 16.8342 1.925 19 3.17543Z",
      stroke: "#C4C4C4",
      "stroke-opacity": "0",
      "stroke-width": "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("g", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
      className: "deleteIcon",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M13 11C11.8954 11 11 11.8954 11 13V21C11 22.1046 11.8954 23 13 23H19C20.1046 23 21 22.1046 21 21V13C21 11.8954 20.1046 11 19 11H13ZM17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16V20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20V16ZM19 15C19.5523 15 20 15.4477 20 16V20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20V16C18 15.4477 18.4477 15 19 15ZM14 16C14 15.4477 13.5523 15 13 15C12.4477 15 12 15.4477 12 16V20C12 20.5523 12.4477 21 13 21C13.5523 21 14 20.5523 14 20V16Z",
      fill: "#4c5f7e" // opacity="1"
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("rect", {
      className: "deleteIcon",
      x: "18",
      y: "9",
      width: "2",
      height: "4",
      rx: "1",
      transform: "rotate(90 18 9)",
      fill: "#4c5f7e" // opacity="1"
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("rect", {
      className: "deleteIcon",
      x: "22",
      y: "10",
      width: "4",
      height: "12",
      rx: "2",
      transform: "rotate(90 22 10)",
      fill: "#4c5f7e" // opacity="1"
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    }, "Delete"))))))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TodoCard);

/***/ }),

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AddTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddTask */ "./components/AddTask.js");
/* harmony import */ var _InfoHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InfoHeader */ "./components/InfoHeader.js");
/* harmony import */ var _TodoCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TodoCard */ "./components/TodoCard.js");
/* harmony import */ var _TodosContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TodosContext */ "./components/TodosContext.js");



var _jsxFileName = "/Users/j/Desktop/todo-app/components/TodoList.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  .scroll {\n    height: 600px;\n    // background: #000;\n    overflow: scroll;\n  }\n   \nsvg {\n  z-index: 300;\n}\n\n  .info-header {\n    background: ", ";\n    \n    position: sticky;\n    backdrop-filter: blur(4px); \n    /* backdrop-filter: blur(4px) saturate(180%);  */\n    top: 0;\n    z-index: 1000;\n  }\n\n  .list {\n    // margin: 80px;\n    // background: red;\n    margin-top: 20px;\n  }\n  \n  .options:hover .deleteIcon {\n    fill: ", ";;\n    opacity: 1;\n  }\n\n  .options-dropdown {\n    position: relative;\n    /* display: inline-block; */\n    z-index: 200;\n    \n  }\n  .options-content {\n    /* display: none; */\n    right: 10px;\n    top: 20px;\n    position: absolute;\n    background-color: ", ";\n    border-radius: 8px;\n    min-width: 200px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    display: block;\n    z-index: 1;\n\n    \n\n    .options-content-text {\n      padding: 16px;\n      display: grid;\n      grid-template-columns: 40px 1fr;\n      grid-template-rows: auto;\n      align-items: center;\n    }\n    .options-content-text:hover {\n      background:#00000020;\n      /* color:", ";  */\n      color: ", "; \n      /* background: ", ";  */\n      \n    }\n\n    \n  }\n\n    .draging-over {\n      background-color: ", "; \n    }\n\n    .not-draging-over {\n      background-color: ", "; \n    }\n    \n  }\n  /* .options-dropdown:hover .options-content {\n    display: block;\n  } */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Styles = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.section(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])(theme.colors.bgd, 0.8);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.bgm;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.text;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.bgm;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.bgd;
});
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject2(), function (props) {
  return props.isDragging ? function (_ref9) {
    var theme = _ref9.theme;
    return Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.02, theme.colors.bgd);
  } : function (_ref10) {
    var theme = _ref10.theme;
    return theme.colors.bgd;
  };
});

var TodoList = function TodoList(_ref11) {
  var handleOnDragEnd = _ref11.handleOnDragEnd,
      handleCheckBox = _ref11.handleCheckBox,
      addTaskIsShown = _ref11.addTaskIsShown,
      handleAddTask = _ref11.handleAddTask;
  // const props = useSpring({
  //   opacity: 1,
  //   // transform: ${props => scale(1.3)},
  //   from: { opacity: 0 },
  //   config: { duration: 250 }
  // })
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_TodosContext__WEBPACK_IMPORTED_MODULE_10__["MyTodosContext"]),
      todos = _useContext.todos,
      dispatch = _useContext.dispatch;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var text = inputRef.current.value;

    if (text) {
      dispatch({
        type: "ADD",
        text: text,
        id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
        completed: false
      });
    }

    inputRef.current.value = "";
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "info-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_InfoHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["DragDropContext"], {
    onDragEnd: handleOnDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Droppable"], {
    droppableId: "droppable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, function (provided, snapshot) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.droppableProps, {
      ref: provided.innerRef,
      className: snapshot.isDraggingOver ? "draging-over" : "not-draging-over",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), todos.map(function (t, i) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TodoCard__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, t, {
        handleCheckBox: handleCheckBox // handleDeleteTodo={handleDeleteTodo}
        ,
        i: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }));
    }), provided.placeholder);
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AddTask__WEBPACK_IMPORTED_MODULE_7__["default"], {
    addTaskIsShown: addTaskIsShown,
    inputRef: inputRef,
    handleAddTask: handleAddTask,
    handleSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./components/TodosContext.js":
/*!************************************!*\
  !*** ./components/TodosContext.js ***!
  \************************************/
/*! exports provided: MyTodosContext, MyTodosProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTodosContext", function() { return MyTodosContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTodosProvider", function() { return MyTodosProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MyTodosContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var MyTodosProvider = MyTodosContext.Provider;

/***/ }),

/***/ "./components/layout.scss":
/*!********************************!*\
  !*** ./components/layout.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "main___2MU47",
	"header": "header___3Y6Zd",
	"nav": "nav___1DdTT",
	"activeNav": "activeNav___3681z",
	"footer": "footer___2LRYT",
	"container": "container___2ql0T",
	"appContainer": "appContainer___2nVWX",
	"active": "active___2ugN7"
};

/***/ }),

/***/ "./components/sidebar/AddProjectButton.js":
/*!************************************************!*\
  !*** ./components/sidebar/AddProjectButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/AddProjectButton.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .addProject {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: 52px;\n\n    margin-left: 50px;\n    // height: 10px;\n    border-top: 1px solid #eeeeee20;\n    color: #eeeeee40;\n    cursor: pointer;\n    /* box-sizing: inside-box; */\n    /* background: red; */\n\n    &:hover {\n      color: #8c4ef8;\n    }\n\n    .addListIcon {\n      display: grid;\n      place-items: center;\n    }\n    .addListText {\n      display: grid;\n      place-items: center start;\n      padding-left: 10px;\n      font-size: 12px;\n      font-weight: bold;\n      margin: 0;\n    }\n  }\n\n  .todoNum {\n    grid-area: \"TodoNum\";\n    display: grid;\n    place-items: center;\n    background: #8c4ef8;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProjectsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectsContext */ "./components/sidebar/ProjectsContext.js");


var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/ProjectList.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .projectListAndForm {\n    overflow-x: scroll;\n\n    height: 255px;\n    // margin-top: -10px;\n\n    .projectList {\n      display: grid;\n      grid-template-columns: auto 1fr 28px;\n      grid-template-rows: auto;\n\n      padding-left: 50px;\n      height: 52px;\n      color: ", ";\n      cursor: pointer;\n\n      &:hover {\n        color: #ff00f5;\n        background: #00000020;\n      }\n      &:hover .projectNum {\n        // background: #8c4ef8;\n        color: #ff00f5;\n      }\n      .projectIcon {\n        display: grid;\n        place-items: center;\n      }\n      .projectText {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        padding-left: 10px;\n        font-size: 14px;\n        overflow-x: auto;\n      }\n      .projectNum {\n        display: grid;\n        place-items: center;\n        font-size: 12px;\n        color: #eeeeee33;\n      }\n    }\n  }\n\n  input {\n    box-sizing: border-box;\n\n    width: 100%;\n    border: 0 solid #073175;\n    background: #00000000;\n    color: ", ";\n    // font-size: 16px;\n    outline: none;\n    // margin-bottom: 16px;\n  }\n\n  .projectListForm {\n    display: grid;\n    grid-template-columns: auto 1fr 28px;\n    grid-template-rows: auto;\n\n    padding-left: 50px;\n    height: 52px;\n    margin-top: -10px;\n    color: rgba($text, 0.5);\n    cursor: pointer;\n\n    &:hover {\n      color: #ff00f5;\n      background: #00000020;\n    }\n    &:hover .projectNum {\n      // background: $primary2;\n      color: #ff00f5;\n    }\n    .projectIcon {\n      display: grid;\n      place-items: center;\n    }\n    .projectText {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      color: ", ";\n\n      padding-left: 10px;\n      font-size: 14px;\n      form {\n        input {\n          font-size: 14px;\n          color: #ff00f5;\n        }\n      }\n    }\n    .projectNum {\n      display: grid;\n      place-items: center;\n      font-size: 12px;\n      color: #eeeeee33;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styles = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.section(_templateObject(), function (_ref) {
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

/***/ "./components/sidebar/ProjectsContext.js":
/*!***********************************************!*\
  !*** ./components/sidebar/ProjectsContext.js ***!
  \***********************************************/
/*! exports provided: MyProjectsContext, MyProjectsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsContext", function() { return MyProjectsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsProvider", function() { return MyProjectsProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MyProjectsContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var MyProjectsProvider = MyProjectsContext.Provider;

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/SidebarTab.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .todoSideBtn {\n    padding: 0 16px 0 36px;\n\n    .sideBtn {\n      height: 52px;\n      border-radius: 8px;\n      padding-left: 16px;\n      display: grid;\n      grid-template-columns: 1fr 28px;\n      grid-template-rows: auto;\n      cursor: pointer;\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n      &:hover .todoListNum {\n        // background: $primary2;\n        color: ", ";\n      }\n      .todoSideBtnLabel {\n        display: grid;\n        place-items: center start;\n        color: ", ";\n      }\n      &:hover .todoSideBtnLabel {\n        color: ", ";\n      }\n      .todoSideBtnNum {\n        display: grid;\n        place-items: center;\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), function (_ref) {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/j/Desktop/todo-app/components/sidebar/UserInfo.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .userCard {\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    padding-left: 50px;\n    height: 100%;\n    .userCardAvatar {\n      display: grid;\n      place-items: center;\n    }\n    .userCardName {\n      display: grid;\n      place-items: center start;\n      padding-left: 16px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var UserInfo = function UserInfo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "userCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "userCardAvatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17 2.3094C19.4752 0.880339 22.5248 0.880339 25 2.3094L35.1865 8.1906C37.6617 9.61966 39.1865 12.2607 39.1865 15.1188V26.8812C39.1865 29.7393 37.6617 32.3803 35.1865 33.8094L25 39.6906C22.5248 41.1197 19.4752 41.1197 17 39.6906L6.81347 33.8094C4.33826 32.3803 2.81347 29.7393 2.81347 26.8812V15.1188C2.81347 12.2607 4.33826 9.61966 6.81347 8.1906L17 2.3094Z",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "7",
    y: "7",
    width: "28",
    height: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M24.5 22.1754L30.3564 25.5566C32.5222 26.8071 33.8564 29.1179 33.8564 31.6188V35C33.8564 36.1663 32.9555 37.1346 31.7922 37.2185L21.5039 37.961C21.1684 37.9852 20.8316 37.9852 20.4961 37.961L10.2078 37.2185C9.04448 37.1346 8.14359 36.1663 8.14359 35V31.6188C8.14359 29.1179 9.47778 26.8071 11.6436 25.5566L17.5 22.1754C19.6658 20.925 22.3342 20.925 24.5 22.1754Z",
    fill: "#2C2B2B",
    stroke: "#885FFF",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.6029 9.11603C19.705 7.90235 22.295 7.90235 24.3971 9.11603C26.4993 10.3297 27.7942 12.5727 27.7942 15C27.7942 17.4273 26.4993 19.6703 24.3971 20.884C22.295 22.0976 19.705 22.0976 17.6029 20.884C15.5007 19.6703 14.2058 17.4273 14.2058 15C14.2058 12.5727 15.5007 10.3297 17.6029 9.11603Z",
    fill: "#2C2B2B",
    stroke: "#885FFF",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    mask: "url(#mask0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.5 3.17543C19.6658 1.925 22.3342 1.925 24.5 3.17543L34.6865 9.05662C36.8523 10.3071 38.1865 12.6179 38.1865 15.1188V26.8812C38.1865 29.3821 36.8523 31.6929 34.6865 32.9434L24.5 38.8246C22.3342 40.075 19.6658 40.075 17.5 38.8246L7.31347 32.9434C5.14766 31.6929 3.81347 29.3821 3.81347 26.8812V15.1188C3.81347 12.6179 5.14766 10.3071 7.31347 9.05662L17.5 3.17543Z",
    fill: "#2C2B2B",
    stroke: "#885FFF",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "userCardName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Jamal")));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./components/sidebar/index.js":
/*!*************************************!*\
  !*** ./components/sidebar/index.js ***!
  \*************************************/
/*! exports provided: SidebarTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarTab */ "./components/sidebar/SidebarTab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarTab", function() { return _SidebarTab__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./components/svg/AddTaskSvg.js":
/*!**************************************!*\
  !*** ./components/svg/AddTaskSvg.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/AddTaskSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "14",
    y: "10.0001",
    width: "4",
    height: "12",
    rx: "2",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "22",
    y: "14",
    width: "4",
    height: "12",
    rx: "2",
    transform: "rotate(90 22 14)",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/svg/CancelTaskSvg.js":
/*!*****************************************!*\
  !*** ./components/svg/CancelTaskSvg.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/CancelTaskSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11 2.3094C13.4752 0.880339 16.5248 0.880339 19 2.3094L23.9904 5.1906C26.4656 6.61966 27.9904 9.26068 27.9904 12.1188V17.8812C27.9904 20.7393 26.4656 23.3803 23.9904 24.8094L19 27.6906C16.5248 29.1197 13.4752 29.1197 11 27.6906L6.00962 24.8094C3.53441 23.3803 2.00962 20.7393 2.00962 17.8812V12.1188C2.00962 9.26068 3.53441 6.61966 6.00962 5.1906L11 2.3094Z",
    fill: "#073175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.444 10.5671C13.7891 10.6595 14.0587 10.9291 14.1511 11.2742L14.4534 12.4023C14.5459 12.7474 14.4472 13.1156 14.1946 13.3682L13.3688 14.194C13.1161 14.4466 12.7479 14.5453 12.4028 14.4528L11.2747 14.1506C10.9296 14.0581 10.6601 13.7885 10.5676 13.4435L10.2654 12.3154C10.1729 11.9703 10.2716 11.6021 10.5242 11.3494L11.35 10.5236C11.6026 10.271 11.9708 10.1723 12.3159 10.2648L13.444 10.5671Z",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.569 13.6921C16.9141 13.7846 17.1837 14.0541 17.2761 14.3992L17.5784 15.5273C17.6709 15.8724 17.5722 16.2406 17.3196 16.4932L16.4938 17.319C16.2411 17.5717 15.8729 17.6703 15.5278 17.5778L14.3997 17.2756C14.0546 17.1831 13.7851 16.9136 13.6926 16.5685L13.3904 15.4404C13.2979 15.0953 13.3966 14.7271 13.6492 14.4745L14.475 13.6486C14.7276 13.396 15.0958 13.2974 15.4409 13.3898L16.569 13.6921Z",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.694 16.8171C20.0391 16.9096 20.3087 17.1791 20.4011 17.5242L20.7034 18.6523C20.7959 18.9974 20.6972 19.3656 20.4446 19.6182L19.6188 20.444C19.3661 20.6967 18.9979 20.7953 18.6528 20.7029L17.5247 20.4006C17.1796 20.3081 16.9101 20.0386 16.8176 19.6935L16.5154 18.5654C16.4229 18.2203 16.5216 17.8521 16.7742 17.5995L17.6 16.7737C17.8526 16.521 18.2208 16.4224 18.5659 16.5148L19.694 16.8171Z",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.5676 17.5242C10.6601 17.1791 10.9296 16.9096 11.2747 16.8171L12.4028 16.5148C12.7479 16.4224 13.1161 16.521 13.3687 16.7736L14.1945 17.5995C14.4472 17.8521 14.5458 18.2203 14.4533 18.5654L14.1511 19.6935C14.0586 20.0386 13.7891 20.3081 13.444 20.4006L12.3159 20.7029C11.9708 20.7953 11.6026 20.6967 11.35 20.444L10.5241 19.6182C10.2715 19.3656 10.1729 18.9974 10.2653 18.6523L10.5676 17.5242Z",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.8176 11.2742C16.9101 10.9291 17.1796 10.6595 17.5247 10.5671L18.6528 10.2648C18.9979 10.1723 19.3661 10.271 19.6187 10.5236L20.4445 11.3494C20.6972 11.6021 20.7958 11.9703 20.7033 12.3154L20.4011 13.4435C20.3086 13.7885 20.0391 14.0581 19.694 14.1506L18.5659 14.4528C18.2208 14.5453 17.8526 14.4466 17.6 14.194L16.7741 13.3682C16.5215 13.1156 16.4229 12.7474 16.5153 12.4023L16.8176 11.2742Z",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/svg/CheckBoxSvg.js":
/*!***************************************!*\
  !*** ./components/svg/CheckBoxSvg.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/CheckBoxSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function (completed) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none" // style={props}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "checkbox-bg",
    d: "M11.5 3.17543C13.6658 1.925 16.3342 1.925 18.5 3.17543L23.4904 6.05662C25.6562 7.30705 26.9904 9.61794 26.9904 12.1188V17.8812C26.9904 20.3821 25.6562 22.6929 23.4904 23.9434L18.5 26.8246C16.3342 28.075 13.6658 28.075 11.5 26.8246L6.50962 23.9434C4.34381 22.6929 3.00962 20.3821 3.00962 17.8812V12.1188C3.00962 9.61794 4.34381 7.30705 6.50962 6.05662L11.5 3.17543Z",
    fill: completed ? "#8c4ef8" : "#062659",
    stroke: "#8c4ef8",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "check",
    d: "M11.9142 14.0858C11.1332 13.3047 9.86683 13.3047 9.08579 14.0858C8.30474 14.8668 8.30474 16.1332 9.08579 16.9142L11.9142 14.0858ZM21.5185 13.3016C22.2374 12.4629 22.1402 11.2003 21.3016 10.4815C20.4629 9.76264 19.2003 9.85977 18.4815 10.6984L21.5185 13.3016ZM9.08579 16.9142L11.8222 19.6506L14.6506 16.8222L11.9142 14.0858L9.08579 16.9142ZM16.2213 19.4817L21.5185 13.3016L18.4815 10.6984L13.1843 16.8785L16.2213 19.4817ZM11.8222 19.6506C13.0579 20.8863 15.084 20.8085 16.2213 19.4817L13.1843 16.8785C13.5634 16.4362 14.2387 16.4103 14.6506 16.8222L11.8222 19.6506Z",
    fill: completed ? "#062659" : "#06265900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/svg/DatePickerSvg.js":
/*!*****************************************!*\
  !*** ./components/svg/DatePickerSvg.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/DatePickerSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.5 3.17543C13.6658 1.925 16.3342 1.925 18.5 3.17543L23.4904 6.05662C25.6562 7.30705 26.9904 9.61794 26.9904 12.1188V17.8812C26.9904 20.3821 25.6562 22.6929 23.4904 23.9434L18.5 26.8246C16.3342 28.075 13.6658 28.075 11.5 26.8246L6.50962 23.9434C4.34381 22.6929 3.00962 20.3821 3.00962 17.8812V12.1188C3.00962 9.61794 4.34381 7.30705 6.50962 6.05662L11.5 3.17543Z",
    stroke: "#073175",
    "stroke-opacity": "0.4",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    opacity: "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "8",
    y: "10",
    width: "14",
    height: "12",
    rx: "2",
    fill: "#536A91",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "21",
    y: "13",
    width: "8",
    height: "12",
    rx: "2",
    transform: "rotate(90 21 13)",
    fill: "#073175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "20",
    y: "14",
    width: "2",
    height: "10",
    rx: "1",
    transform: "rotate(90 20 14)",
    fill: "#536A91",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "13",
    y: "9",
    width: "2",
    height: "2",
    rx: "1",
    transform: "rotate(90 13 9)",
    fill: "#536A91",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "19",
    y: "9",
    width: "2",
    height: "2",
    rx: "1",
    transform: "rotate(90 19 9)",
    fill: "#536A91",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./components/svg/DeleteTaskSvg.js":
/*!*****************************************!*\
  !*** ./components/svg/DeleteTaskSvg.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/DeleteTaskSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.5 3.17543C13.6658 1.925 16.3342 1.925 18.5 3.17543L23.4904 6.05662C25.6562 7.30705 26.9904 9.61794 26.9904 12.1188V17.8812C26.9904 20.3821 25.6562 22.6929 23.4904 23.9434L18.5 26.8246C16.3342 28.075 13.6658 28.075 11.5 26.8246L6.50962 23.9434C4.34381 22.6929 3.00962 20.3821 3.00962 17.8812V12.1188C3.00962 9.61794 4.34381 7.30705 6.50962 6.05662L11.5 3.17543Z",
    stroke: "#073175",
    "stroke-opacity": "0.4",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10.0881 13.4111C10.0308 13.5973 10 13.795 10 14V20C10 21.1046 10.8954 22 12 22H18C19.1046 22 20 21.1046 20 20V14C20 13.795 19.9692 13.5973 19.9119 13.4111C19.7551 13.7583 19.4058 14 19 14L11 14C10.5942 14 10.2449 13.7583 10.0881 13.4111Z",
    fill: "#536A91",
    "fill-opacity": "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M17 9C17 8.44772 16.5523 8 16 8H14C13.4477 8 13 8.44772 13 9L11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13L19 13C20.1046 13 21 12.1046 21 11C21 9.89543 20.1046 9 19 9L17 9Z",
    fill: "#536A91",
    "fill-opacity": "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/svg/GrabSvg.js":
/*!***********************************!*\
  !*** ./components/svg/GrabSvg.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/GrabSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    opacity: "0.33",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.5 2.3094C13.9752 0.880339 17.0248 0.880339 19.5 2.3094L24.9234 5.4406C27.3986 6.86966 28.9234 9.51068 28.9234 12.3688V18.6312C28.9234 21.4893 27.3986 24.1303 24.9234 25.5594L19.5 28.6906C17.0248 30.1197 13.9752 30.1197 11.5 28.6906L6.07661 25.5594C3.6014 24.1303 2.07661 21.4893 2.07661 18.6312V12.3688C2.07661 9.51068 3.6014 6.86966 6.07661 5.4406L11.5 2.3094Z",
    fill: "#073175",
    opacity: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19 3.17543L24.4234 6.30662C26.5892 7.55705 27.9234 9.86794 27.9234 12.3688V18.6312C27.9234 21.1321 26.5892 23.4429 24.4234 24.6934L19 27.8246C16.8342 29.075 14.1658 29.075 12 27.8246L6.57661 24.6934C4.4108 23.4429 3.07661 21.1321 3.07661 18.6312V12.3688C3.07661 9.86794 4.4108 7.55705 6.57661 6.30662L12 3.17543C14.1658 1.925 16.8342 1.925 19 3.17543Z",
    stroke: "#C4C4C4",
    "stroke-opacity": "0",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.2887 22.1C17.11 21.7906 17.11 21.4094 17.2887 21.1L17.9113 20.0215C18.09 19.7121 18.4201 19.5215 18.7774 19.5215H20.0227C20.3799 19.5215 20.71 19.7121 20.8887 20.0215L21.5113 21.1C21.69 21.4094 21.69 21.7906 21.5113 22.1L20.8887 23.1785C20.71 23.4879 20.3799 23.6785 20.0226 23.6785H18.7773C18.4201 23.6785 18.09 23.4879 17.9113 23.1785L17.2887 22.1Z",
    fill: "#4c5f7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.2887 16.5C17.11 16.1906 17.11 15.8094 17.2887 15.5L17.9113 14.4215C18.09 14.1121 18.4201 13.9215 18.7774 13.9215H20.0227C20.3799 13.9215 20.71 14.1121 20.8887 14.4215L21.5113 15.5C21.69 15.8094 21.69 16.1906 21.5113 16.5L20.8887 17.5785C20.71 17.8879 20.3799 18.0785 20.0226 18.0785H18.7773C18.4201 18.0785 18.09 17.8879 17.9113 17.5785L17.2887 16.5Z",
    fill: "#4c5f7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.2887 10.9C17.11 10.5906 17.11 10.2094 17.2887 9.9L17.9113 8.82154C18.09 8.51214 18.4201 8.32154 18.7774 8.32154H20.0227C20.3799 8.32154 20.71 8.51214 20.8887 8.82154L21.5113 9.9C21.69 10.2094 21.69 10.5906 21.5113 10.9L20.8887 11.9785C20.71 12.2879 20.3799 12.4785 20.0226 12.4785H18.7773C18.4201 12.4785 18.09 12.2879 17.9113 11.9785L17.2887 10.9Z",
    fill: "#4c5f7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.2887 22.1C10.11 21.7906 10.11 21.4094 10.2887 21.1L10.9113 20.0215C11.09 19.7121 11.4201 19.5215 11.7774 19.5215H13.0227C13.3799 19.5215 13.71 19.7121 13.8887 20.0215L14.5113 21.1C14.69 21.4094 14.69 21.7906 14.5113 22.1L13.8887 23.1785C13.71 23.4879 13.3799 23.6785 13.0226 23.6785H11.7773C11.4201 23.6785 11.09 23.4879 10.9113 23.1785L10.2887 22.1Z",
    fill: "#4c5f7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.2887 16.5C10.11 16.1906 10.11 15.8094 10.2887 15.5L10.9113 14.4215C11.09 14.1121 11.4201 13.9215 11.7774 13.9215H13.0227C13.3799 13.9215 13.71 14.1121 13.8887 14.4215L14.5113 15.5C14.69 15.8094 14.69 16.1906 14.5113 16.5L13.8887 17.5785C13.71 17.8879 13.3799 18.0785 13.0226 18.0785H11.7773C11.4201 18.0785 11.09 17.8879 10.9113 17.5785L10.2887 16.5Z",
    fill: "#4c5f7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.2887 10.9C10.11 10.5906 10.11 10.2094 10.2887 9.9L10.9113 8.82154C11.09 8.51214 11.4201 8.32154 11.7774 8.32154H13.0227C13.3799 8.32154 13.71 8.51214 13.8887 8.82154L14.5113 9.9C14.69 10.2094 14.69 10.5906 14.5113 10.9L13.8887 11.9785C13.71 12.2879 13.3799 12.4785 13.0226 12.4785H11.7773C11.4201 12.4785 11.09 12.2879 10.9113 11.9785L10.2887 10.9Z",
    fill: "#4c5f7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./components/svg/HexBorderSvg.js":
/*!****************************************!*\
  !*** ./components/svg/HexBorderSvg.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/HexBorderSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.5 3.17543L25.3564 6.55662C27.5222 7.80705 28.8564 10.1179 28.8564 12.6188V19.3812C28.8564 21.8821 27.5222 24.1929 25.3564 25.4434L19.5 28.8246C17.3342 30.075 14.6658 30.075 12.5 28.8246L6.64359 25.4434C4.47779 24.1929 3.14359 21.8821 3.14359 19.3812V12.6188C3.14359 10.1179 4.47779 7.80705 6.64359 6.55662L12.5 3.17543C14.6658 1.925 17.3342 1.925 19.5 3.17543Z",
    stroke: "#073175",
    "stroke-opacity": "0.4",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", props.children)));
});

/***/ }),

/***/ "./components/svg/MenuCloseSvg.js":
/*!****************************************!*\
  !*** ./components/svg/MenuCloseSvg.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/MenuCloseSvg.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .ham {\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n    transition: transform 400ms;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: absolute;\n    z-index: 999;\n  }\n  .hamRotate.active {\n    transform: rotate(45deg);\n  }\n  .hamRotate180.active {\n    transform: rotate(180deg);\n  }\n  .line {\n    fill: none;\n    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;\n    stroke: #000;\n    stroke-width: 5.5;\n    stroke-linecap: round;\n  }\n  .ham1 .top {\n    stroke-dasharray: 40 139;\n  }\n  .ham1 .bottom {\n    stroke-dasharray: 40 180;\n  }\n  .ham1.active .top {\n    stroke-dashoffset: -98px;\n  }\n  .ham1.active .bottom {\n    stroke-dashoffset: -138px;\n  }\n  .anydo {\n    width: 70%;\n    border: 0;\n    margin: 0 auto;\n  }\n  @media screen and (min-width: 1059px) {\n    .nav {\n      margin: -150px;\n    }\n    .anydo {\n      width: 700px;\n    }\n    .header {\n      padding-top: 22em;\n    }\n  }\n  @media screen and (max-width: 1058px) {\n    .nav {\n      margin: -180px;\n    }\n    .anydo {\n      width: 70%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "ham hamRotate ham1 active",
    viewBox: "0 0 100 100",
    width: "80",
    onclick: "this.classList.toggle('active')",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "line top",
    d: "m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "line middle",
    d: "m 30,50 h 40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "line bottom",
    d: "m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/svg/PrioritySvg.js":
/*!***************************************!*\
  !*** ./components/svg/PrioritySvg.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/PrioritySvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.5 3.17543C13.6658 1.925 16.3342 1.925 18.5 3.17543L23.4904 6.05662C25.6562 7.30705 26.9904 9.61794 26.9904 12.1188V17.8812C26.9904 20.3821 25.6562 22.6929 23.4904 23.9434L18.5 26.8246C16.3342 28.075 13.6658 28.075 11.5 26.8246L6.50962 23.9434C4.34381 22.6929 3.00962 20.3821 3.00962 17.8812V12.1188C3.00962 9.61794 4.34381 7.30705 6.50962 6.05662L11.5 3.17543Z",
    stroke: "#073175",
    "stroke-opacity": "0.4",
    "stroke-width": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "10",
    y: "9",
    width: "3",
    height: "9",
    rx: "1.5",
    fill: "#536A91",
    "fill-opacity": "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "10",
    y: "19",
    width: "3",
    height: "3",
    rx: "1.5",
    fill: "#536A91",
    "fill-opacity": "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "14",
    y: "9",
    width: "3",
    height: "9",
    rx: "1.5",
    fill: "#536A91",
    "fill-opacity": "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "14",
    y: "19",
    width: "3",
    height: "3",
    rx: "1.5",
    fill: "#536A91",
    "fill-opacity": "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "18",
    y: "9",
    width: "3",
    height: "9",
    rx: "1.5",
    fill: "#536A91",
    "fill-opacity": "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "18",
    y: "19",
    width: "3",
    height: "3",
    rx: "1.5",
    fill: "#536A91",
    "fill-opacity": "0.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/svg/ProjectSvg.js":
/*!**************************************!*\
  !*** ./components/svg/ProjectSvg.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/ProjectSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    className: "projectSvg " // onClick="this.classList.toggle('active')"
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11 2.3094C13.4752 0.880339 16.5248 0.880339 19 2.3094L23.9904 5.1906C26.4656 6.61966 27.9904 9.26068 27.9904 12.1188V17.8812C27.9904 20.7393 26.4656 23.3803 23.9904 24.8094L19 27.6906C16.5248 29.1197 13.4752 29.1197 11 27.6906L6.00962 24.8094C3.53441 23.3803 2.00962 20.7393 2.00962 17.8812V12.1188C2.00962 9.26068 3.53441 6.61966 6.00962 5.1906L11 2.3094Z",
    fill: "#073175" // fill={tab.name === "projectTab" ? "#073175" : "#00000000"}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19 15.5774C19.6188 15.2201 20.3812 15.2201 21 15.5774L22.4641 16.4226C23.0829 16.7799 23.4641 17.4402 23.4641 18.1547V19.8453C23.4641 20.5598 23.0829 21.2201 22.4641 21.5774L21 22.4226C20.3812 22.7799 19.6188 22.7799 19 22.4226L17.5359 21.5774C16.9171 21.2201 16.5359 20.5598 16.5359 19.8453V18.1547C16.5359 17.4402 16.9171 16.7799 17.5359 16.4226L19 15.5774Z",
    fill: "#885FFF" // fill={tab.name === "projectTab" ? "#073175" : "#00F"}
    // fill={isActive ? "#885FFF" : "#F00"}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9 15.5774C9.6188 15.2201 10.3812 15.2201 11 15.5774L12.4641 16.4226C13.0829 16.7799 13.4641 17.4402 13.4641 18.1547V19.8453C13.4641 20.5598 13.0829 21.2201 12.4641 21.5774L11 22.4226C10.3812 22.7799 9.6188 22.7799 9 22.4226L7.5359 21.5774C6.9171 21.2201 6.5359 20.5598 6.5359 19.8453V18.1547C6.5359 17.4402 6.9171 16.7799 7.5359 16.4226L9 15.5774Z",
    fill: "#885FFF" // fill={isActive ? "#885FFF" : "#F00"}
    // fill={tab.name === "projectTab" ? "#073175" : "#00F"}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14 7.57735C14.6188 7.22008 15.3812 7.22008 16 7.57735L17.4641 8.42265C18.0829 8.77992 18.4641 9.44017 18.4641 10.1547V11.8453C18.4641 12.5598 18.0829 13.2201 17.4641 13.5774L16 14.4226C15.3812 14.7799 14.6188 14.7799 14 14.4226L12.5359 13.5774C11.9171 13.2201 11.5359 12.5598 11.5359 11.8453V10.1547C11.5359 9.44017 11.9171 8.77992 12.5359 8.42265L14 7.57735Z" // fill={tab.name === "projectTab" ? "#073175" : "#00F"}
    // fill={isActive ? "#885FFF" : "#F00"}
    ,
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/svg/SubmitSvg.js":
/*!*************************************!*\
  !*** ./components/svg/SubmitSvg.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/j/Desktop/todo-app/components/svg/SubmitSvg.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15 3.4641C18.7128 1.32051 23.2872 1.32051 27 3.4641L33.1865 7.0359C36.8993 9.17949 39.1865 13.141 39.1865 17.4282V24.5718C39.1865 28.859 36.8993 32.8205 33.1865 34.9641L27 38.5359C23.2872 40.6795 18.7128 40.6795 15 38.5359L8.81347 34.9641C5.10065 32.8205 2.81347 28.859 2.81347 24.5718V17.4282C2.81347 13.141 5.10065 9.17949 8.81347 7.0359L15 3.4641Z",
    fill: "#885FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "28.9038",
    y: "18.9041",
    width: "4",
    height: "15",
    rx: "2",
    transform: "rotate(90 28.9038 18.9041)",
    fill: "#073175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "22.9331",
    y: "25.056",
    width: "4.02784",
    height: "9.86072",
    rx: "2",
    transform: "rotate(135 22.9331 25.056)",
    fill: "#073175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "20.085",
    y: "13.8872",
    width: "4.01007",
    height: "9.78808",
    rx: "2",
    transform: "rotate(45 20.085 13.8872)",
    fill: "#073175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/svg/index.js":
/*!*********************************!*\
  !*** ./components/svg/index.js ***!
  \*********************************/
/*! exports provided: HexBorderSvg, AddTaskSvg, CancelTaskSvg, DeleteTaskSvg, DatePickerSvg, PrioritySvg, ProjectSvg, SubmitSvg, GrabSvg, CheckBoxSvg, MenuCloseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddTaskSvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTaskSvg */ "./components/svg/AddTaskSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddTaskSvg", function() { return _AddTaskSvg__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CancelTaskSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CancelTaskSvg */ "./components/svg/CancelTaskSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancelTaskSvg", function() { return _CancelTaskSvg__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CheckBoxSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckBoxSvg */ "./components/svg/CheckBoxSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxSvg", function() { return _CheckBoxSvg__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DatePickerSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DatePickerSvg */ "./components/svg/DatePickerSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerSvg", function() { return _DatePickerSvg__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DeleteTaskSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteTaskSvg */ "./components/svg/DeleteTaskSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteTaskSvg", function() { return _DeleteTaskSvg__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _GrabSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GrabSvg */ "./components/svg/GrabSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GrabSvg", function() { return _GrabSvg__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _HexBorderSvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HexBorderSvg */ "./components/svg/HexBorderSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HexBorderSvg", function() { return _HexBorderSvg__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _MenuCloseSvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MenuCloseSvg */ "./components/svg/MenuCloseSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuCloseSvg", function() { return _MenuCloseSvg__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _PrioritySvg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrioritySvg */ "./components/svg/PrioritySvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrioritySvg", function() { return _PrioritySvg__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ProjectSvg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProjectSvg */ "./components/svg/ProjectSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectSvg", function() { return _ProjectSvg__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _SubmitSvg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SubmitSvg */ "./components/svg/SubmitSvg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitSvg", function() { return _SubmitSvg__WEBPACK_IMPORTED_MODULE_10__["default"]; });














/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sidebar */ "./components/sidebar/index.js");
/* harmony import */ var _components_sidebar_AddProjectButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sidebar/AddProjectButton */ "./components/sidebar/AddProjectButton.js");
/* harmony import */ var _components_sidebar_ProjectList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sidebar/ProjectList */ "./components/sidebar/ProjectList.js");
/* harmony import */ var _components_sidebar_ProjectsContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sidebar/ProjectsContext */ "./components/sidebar/ProjectsContext.js");
/* harmony import */ var _components_sidebar_UserInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sidebar/UserInfo */ "./components/sidebar/UserInfo.js");
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.js");
/* harmony import */ var _components_TodosContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/TodosContext */ "./components/TodosContext.js");







var _jsxFileName = "/Users/j/Desktop/todo-app/pages/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  .wrapper {\n    width: 100%;\n    height: 100%;\n\n    // padding: 20px;\n    // border: 1px solid rgba(#fff, 0.08);\n    border-radius: 4px;\n    // background-color: $bgm;\n    // border: 1px solid $bgl;\n    // box-shadow: 0 90px 100px -50px rgba(black, 0.4),\n    //   0 50px 70px 10px rgba(black, 0.1);\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: ' sideBar  content ';\n  }\n\n  // * /////////////////////////////////////////////SIDE-BAR/////////////////////////////////////////////// * //\n\n  .sideBar {\n    grid-area: 'sideBar';\n    background: ", ";\n    border-radius: 4px 0 0 4px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 140px 1fr;\n    resize: horizontal;\n    overflow: auto;\n  }\n\n  .userCard {\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    padding-left: 50px;\n    .userCardAvatar {\n      display: grid;\n      place-items: center;\n    }\n    .userCardName {\n      display: grid;\n      place-items: center start;\n      padding-left: 16px;\n    }\n  }\n\n  .sideBarList {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto auto 30px 170px auto;\n    align-content: start;\n    grid-gap: 10px;\n    // height: 100%;\n  }\n\n  .projects {\n    padding-left: 50px;\n    height: 52px;\n    display: grid;\n    place-items: center start;\n  }\n\n  // * ///////////////////////////////////////CONTENT///////////////////////////////////// * //\n\n  .content {\n    grid-area: 'content';\n    background: ", ";\n\n    overflow-anchor: none;\n    border-radius: 0 4px 4px 0;\n  }\n\n  .anchor {\n    overflow-anchor: auto;\n    height: 1px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var Styles = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
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
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar_ProjectsContext__WEBPACK_IMPORTED_MODULE_13__["MyProjectsProvider"], {
    value: {
      projects: projects,
      projectDispatch: projectDispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TodosContext__WEBPACK_IMPORTED_MODULE_16__["MyTodosProvider"], {
    value: {
      todos: todos,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "sideBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar_UserInfo__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "sideBarList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_10__["SidebarTab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "Todos"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_10__["SidebarTab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "Calendar"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, " Projects "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar_ProjectList__WEBPACK_IMPORTED_MODULE_12__["default"], {
    addListIsShown: addListIsShown,
    handleAddListIsShown: handleAddListIsShown // handleAddList={handleAddList}
    // handleDeleteList={handleDeleteList}
    ,
    addListRef: addListRef // projects={projects}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sidebar_AddProjectButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleAddListIsShown: handleAddListIsShown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TodoList__WEBPACK_IMPORTED_MODULE_15__["default"] // todos={todos}
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
      lineNumber: 281
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/j/Desktop/todo-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map