"use strict"
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/task/[taskId]", {
  /***/ "./app/pages/task/[taskId].tsx":
    /*!*************************************!*\
  !*** ./app/pages/task/[taskId].tsx ***!
  \*************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ModalClose": function() { return /* binding */ ModalClose; },\n/* harmony export */   "Task": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var _Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var _Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/stdlib */ "./node_modules/next/stdlib.js");\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/data-client */ "./node_modules/next/data-client.js");\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var app_core_layouts_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/layouts/Layout */ "./app/core/layouts/Layout.tsx");\n/* harmony import */ var app_pages_task_queries_getTask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/task/queries/getTask */ "./app/pages/task/queries/getTask.ts");\n/* harmony import */ var app_pages_task_mutations_deleteTask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/task/mutations/deleteTask */ "./app/pages/task/mutations/deleteTask.ts");\n/* harmony import */ var app_core_components_timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/components/timer */ "./app/core/components/timer/index.tsx");\n/* harmony import */ var _core_components_timer_context_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/components/timer/context/modal */ "./app/core/components/timer/context/modal.ts");\n/* harmony import */ var _mutations_taskDone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mutations/taskDone */ "./app/pages/task/mutations/taskDone.ts");\n/* harmony import */ var _mutations_taskReset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mutations/taskReset */ "./app/pages/task/mutations/taskReset.ts");\n/* harmony import */ var app_core_components_atoms_button_Button_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/core/components/atoms/button/Button.module.scss */ "./app/core/components/atoms/button/Button.module.scss");\n/* harmony import */ var app_core_components_atoms_button_Button_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(app_core_components_atoms_button_Button_module_scss__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var app_core_components_atoms_mainContent_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/core/components/atoms/mainContent.module.scss */ "./app/core/components/atoms/mainContent.module.scss");\n/* harmony import */ var app_core_components_atoms_mainContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(app_core_components_atoms_mainContent_module_scss__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var app_core_components_atoms_task_task_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/core/components/atoms/task/task.module.scss */ "./app/core/components/atoms/task/task.module.scss");\n/* harmony import */ var app_core_components_atoms_task_task_module_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(app_core_components_atoms_task_task_module_scss__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = "/Users/yasuda/Downloads/kokoro-task/app/pages/task/[taskId].tsx",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ModalClose = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(false);\nvar Task = function Task() {\n  _s();\n\n  var router = (0,next_stdlib__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  var taskId = (0,next_stdlib__WEBPACK_IMPORTED_MODULE_4__.useParam)("taskId", "number");\n\n  var _useMutation = (0,next_data_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(app_pages_task_mutations_deleteTask__WEBPACK_IMPORTED_MODULE_10__.default),\n      _useMutation2 = (0,_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 1),\n      deleteTaskMutation = _useMutation2[0];\n\n  var _useQuery = (0,next_data_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(app_pages_task_queries_getTask__WEBPACK_IMPORTED_MODULE_9__.default, {\n    id: taskId\n  }),\n      _useQuery2 = (0,_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useQuery, 2),\n      task = _useQuery2[0],\n      refetch = _useQuery2[1].refetch;\n\n  var ctx = (0,_core_components_timer_context_modal__WEBPACK_IMPORTED_MODULE_12__.useModal)();\n\n  var _useMutation3 = (0,next_data_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_mutations_taskDone__WEBPACK_IMPORTED_MODULE_13__.default),\n      _useMutation4 = (0,_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation3, 1),\n      taskDoneMutation = _useMutation4[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(task.done),\n      isDone = _useState[0],\n      setDone = _useState[1];\n\n  var TaskDone = /*#__PURE__*/function () {\n    var _ref = (0,_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n      return _Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return taskDoneMutation({\n                id: id\n              });\n\n            case 3:\n              router.push(next_stdlib__WEBPACK_IMPORTED_MODULE_4__.Routes.TasksPage());\n              _context.next = 9;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context["catch"](0);\n              alert("\\u30A8\\u30E9\\u30FC\\u304C\\u767A\\u751F\\u3057\\u307E\\u3057\\u305F");\n\n            case 9:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n\n    return function TaskDone(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useMutation5 = (0,next_data_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_mutations_taskReset__WEBPACK_IMPORTED_MODULE_14__.default),\n      _useMutation6 = (0,_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation5, 1),\n      taskResetMutation = _useMutation6[0];\n\n  var TaskReset = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {\n      return _Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return taskResetMutation({\n                id: id\n              });\n\n            case 3:\n              router.push(next_stdlib__WEBPACK_IMPORTED_MODULE_4__.Routes.TasksPage());\n              _context2.next = 9;\n              break;\n\n            case 6:\n              _context2.prev = 6;\n              _context2.t0 = _context2["catch"](0);\n              alert("\\u30A8\\u30E9\\u30FC\\u304C\\u767A\\u751F\\u3057\\u307E\\u3057\\u305F");\n\n            case 9:\n            case "end":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 6]]);\n    }));\n\n    return function TaskReset(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(next_head__WEBPACK_IMPORTED_MODULE_7__.Head, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("title", {\n        children: ["Task ", task.id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {\n      className: (app_core_components_atoms_mainContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().content),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h1", {\n        className: (app_core_components_atoms_mainContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().h2),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {\n          className: (app_core_components_atoms_mainContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title),\n          children: "\\u3010title\\u3011"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 35\n        }, _this), task.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("p", {\n        className: (app_core_components_atoms_mainContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().textMap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {\n          className: (app_core_components_atoms_mainContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().margin),\n          children: ["\\u96C6\\u4E2D\\u3067\\u304D\\u305F\\u6642\\u9593\\uFF08\\u5206\\uFF09  ", task.concentration_time]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 39\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        href: next_stdlib__WEBPACK_IMPORTED_MODULE_4__.Routes.EditTaskPage({\n          taskId: task.id\n        }),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("a", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("button", {\n            className: (app_core_components_atoms_button_Button_module_scss__WEBPACK_IMPORTED_MODULE_17___default().Button),\n            children: "\\u7DE8\\u96C6"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 14\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("button", {\n        className: (app_core_components_atoms_button_Button_module_scss__WEBPACK_IMPORTED_MODULE_17___default().Button),\n        type: "button",\n        onClick: /*#__PURE__*/(0,_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n          return _Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n            while (1) {\n              switch (_context3.prev = _context3.next) {\n                case 0:\n                  if (!window.confirm("削除しますか？")) {\n                    _context3.next = 4;\n                    break;\n                  }\n\n                  _context3.next = 3;\n                  return deleteTaskMutation({\n                    id: task.id\n                  });\n\n                case 3:\n                  router.push(next_stdlib__WEBPACK_IMPORTED_MODULE_4__.Routes.TasksPage());\n\n                case 4:\n                case "end":\n                  return _context3.stop();\n              }\n            }\n          }, _callee3);\n        })),\n        style: {\n          marginLeft: "0.5rem"\n        },\n        children: "\\u524A\\u9664"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_core_components_timer_context_modal__WEBPACK_IMPORTED_MODULE_12__.modalContext.Provider, {\n        value: ctx,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(app_core_components_timer__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), isDone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("button", {\n          className: (app_core_components_atoms_task_task_module_scss__WEBPACK_IMPORTED_MODULE_18___default().button),\n          onClick: function onClick() {\n            return TaskReset(task.id);\n          },\n          children: "\\u9032\\u6357\\u3092\\u30EA\\u30BB\\u30C3\\u30C8"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {\n          className: (app_core_components_atoms_task_task_module_scss__WEBPACK_IMPORTED_MODULE_18___default().success),\n          children: "\\u5B8C\\u4E86"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("button", {\n          className: (app_core_components_atoms_task_task_module_scss__WEBPACK_IMPORTED_MODULE_18___default().button),\n          onClick: function onClick() {\n            return TaskDone(task.id);\n          },\n          children: "\\u9032\\u6357\\u3092\\u3059\\u3059\\u3081\\u308B"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {\n          className: (app_core_components_atoms_task_task_module_scss__WEBPACK_IMPORTED_MODULE_18___default().notSuccess),\n          children: "\\u672A\\u5B8C\\u4E86"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Task, "ONbWxyJTP/cYlADWEuHsP7iVRDc=", false, function () {\n  return [next_stdlib__WEBPACK_IMPORTED_MODULE_4__.useRouter, next_stdlib__WEBPACK_IMPORTED_MODULE_4__.useParam, next_data_client__WEBPACK_IMPORTED_MODULE_5__.useMutation, next_data_client__WEBPACK_IMPORTED_MODULE_5__.useQuery, _core_components_timer_context_modal__WEBPACK_IMPORTED_MODULE_12__.useModal, next_data_client__WEBPACK_IMPORTED_MODULE_5__.useMutation, next_data_client__WEBPACK_IMPORTED_MODULE_5__.useMutation];\n});\n\n_c = Task;\n\nvar ShowTaskPage = function ShowTaskPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("p", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        href: next_stdlib__WEBPACK_IMPORTED_MODULE_4__.Routes.TasksPage(),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("a", {\n          children: "\\u30BF\\u30B9\\u30AF\\u4E00\\u89A7\\u306B\\u623B\\u308B"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n      fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {\n        children: "Loading..."\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 27\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(Task, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = ShowTaskPage;\nShowTaskPage.authenticate = true;\n\nShowTaskPage.getLayout = function (page) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(app_core_layouts_Layout__WEBPACK_IMPORTED_MODULE_8__.default, {\n    children: page\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 36\n  }, _this);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (ShowTaskPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "Task");\n$RefreshReg$(_c2, "ShowTaskPage");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWREOztNQUFNaUQ7QUFnQk5BLFlBQVksQ0FBQ0MsWUFBYixHQUE0QixJQUE1Qjs7QUFDQUQsWUFBWSxDQUFDRSxTQUFiLEdBQXlCLFVBQUNDLElBQUQ7QUFBQSxzQkFBVSwrREFBQyw0REFBRDtBQUFBLGNBQVNBO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFWO0FBQUEsQ0FBekI7O0FBRUEsK0RBQWVILFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2VzL3Rhc2svW3Rhc2tJZF0udHN4P2U5ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgU3VzcGVuc2UsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEhlYWQsIExpbmssIHVzZVJvdXRlciwgdXNlUXVlcnksIHVzZVBhcmFtLCBCbGl0elBhZ2UsIHVzZU11dGF0aW9uLCBSb3V0ZXMgfSBmcm9tIFwiYmxpdHpcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiYXBwL2NvcmUvbGF5b3V0cy9MYXlvdXRcIlxuaW1wb3J0IGdldFRhc2sgZnJvbSBcImFwcC9wYWdlcy90YXNrL3F1ZXJpZXMvZ2V0VGFza1wiXG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tIFwiYXBwL3BhZ2VzL3Rhc2svbXV0YXRpb25zL2RlbGV0ZVRhc2tcIlxuaW1wb3J0IENvdW50RG93blRpbWVyIGZyb20gXCJhcHAvY29yZS9jb21wb25lbnRzL3RpbWVyXCJcbmltcG9ydCB7IG1vZGFsQ29udGV4dCwgdXNlTW9kYWwgfSBmcm9tIFwiLi4vLi4vY29yZS9jb21wb25lbnRzL3RpbWVyL2NvbnRleHQvbW9kYWxcIlxuaW1wb3J0IHRhc2tEb25lIGZyb20gXCIuL211dGF0aW9ucy90YXNrRG9uZVwiXG5pbXBvcnQgdGFza1Jlc2V0IGZyb20gXCIuL211dGF0aW9ucy90YXNrUmVzZXRcIlxuaW1wb3J0IGJ1dHRvblN0eWxlIGZyb20gXCJhcHAvY29yZS9jb21wb25lbnRzL2F0b21zL2J1dHRvbi9CdXR0b24ubW9kdWxlLnNjc3NcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXBwL2NvcmUvY29tcG9uZW50cy9hdG9tcy9tYWluQ29udGVudC5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgdGFza1N0eWxlcyBmcm9tIFwiYXBwL2NvcmUvY29tcG9uZW50cy9hdG9tcy90YXNrL3Rhc2subW9kdWxlLnNjc3NcIlxuXG5leHBvcnQgY29uc3QgTW9kYWxDbG9zZSA9IGNyZWF0ZUNvbnRleHQoZmFsc2UpXG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB0YXNrSWQgPSB1c2VQYXJhbShcInRhc2tJZFwiLCBcIm51bWJlclwiKVxuICBjb25zdCBbZGVsZXRlVGFza011dGF0aW9uXSA9IHVzZU11dGF0aW9uKGRlbGV0ZVRhc2spXG4gIGNvbnN0IFt0YXNrLCB7IHJlZmV0Y2ggfV0gPSB1c2VRdWVyeShnZXRUYXNrLCB7IGlkOiB0YXNrSWQgfSlcbiAgY29uc3QgY3R4ID0gdXNlTW9kYWwoKVxuICBjb25zdCBbdGFza0RvbmVNdXRhdGlvbl0gPSB1c2VNdXRhdGlvbih0YXNrRG9uZSlcbiAgY29uc3QgW2lzRG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZSh0YXNrLmRvbmUpXG5cbiAgY29uc3QgVGFza0RvbmUgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0YXNrRG9uZU11dGF0aW9uKHsgaWQgfSlcbiAgICAgIHJvdXRlci5wdXNoKFJvdXRlcy5UYXNrc1BhZ2UoKSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoYOOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn2ApXG4gICAgfVxuICB9XG4gIGNvbnN0IFt0YXNrUmVzZXRNdXRhdGlvbl0gPSB1c2VNdXRhdGlvbih0YXNrUmVzZXQpXG4gIGNvbnN0IFRhc2tSZXNldCA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRhc2tSZXNldE11dGF0aW9uKHsgaWQgfSlcbiAgICAgIHJvdXRlci5wdXNoKFJvdXRlcy5UYXNrc1BhZ2UoKSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoYOOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn2ApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UYXNrIHt0YXNrLmlkfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oMn0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PuOAkHRpdGxl44CRPC9zcGFuPnt0YXNrLnRpdGxlfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHRNYXB9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+6ZuG5Lit44Gn44GN44Gf5pmC6ZaT77yI5YiG77yJICB7dGFzay5jb25jZW50cmF0aW9uX3RpbWV9PC9zcGFuPjwvcD5cbiAgICAgICAgPExpbmsgaHJlZj17Um91dGVzLkVkaXRUYXNrUGFnZSh7IHRhc2tJZDogdGFzay5pZCB9KX0+XG4gICAgICAgICAgPGE+PGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvblN0eWxlLkJ1dHRvbn0+57eo6ZuGPC9idXR0b24+PC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uU3R5bGUuQnV0dG9ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIuWJiumZpOOBl+OBvuOBmeOBi++8n1wiKSkge1xuICAgICAgICAgICAgICBhd2FpdCBkZWxldGVUYXNrTXV0YXRpb24oeyBpZDogdGFzay5pZCB9KVxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChSb3V0ZXMuVGFza3NQYWdlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIOWJiumZpFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxtb2RhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N0eH0+XG4gICAgICAgICAgPENvdW50RG93blRpbWVyIC8+XG4gICAgICAgIDwvbW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICB7aXNEb25lID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGFza1N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IFRhc2tSZXNldCh0YXNrLmlkKX0+6YCy5o2X44KS44Oq44K744OD44OIPC9idXR0b24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Rhc2tTdHlsZXMuc3VjY2Vzc30+5a6M5LqGPC9zcGFuPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGFza1N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IFRhc2tEb25lKHRhc2suaWQpfT7pgLLmjZfjgpLjgZnjgZnjgoHjgos8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGFza1N0eWxlcy5ub3RTdWNjZXNzfT7mnKrlrozkuoY8L3NwYW4+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBTaG93VGFza1BhZ2U6IEJsaXR6UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlcy5UYXNrc1BhZ2UoKX0+XG4gICAgICAgICAgPGE+44K/44K544Kv5LiA6Kan44Gr5oi744KLPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3A+XG5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgPFRhc2sgLz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuU2hvd1Rhc2tQYWdlLmF1dGhlbnRpY2F0ZSA9IHRydWVcblNob3dUYXNrUGFnZS5nZXRMYXlvdXQgPSAocGFnZSkgPT4gPExheW91dD57cGFnZX08L0xheW91dD5cblxuZXhwb3J0IGRlZmF1bHQgU2hvd1Rhc2tQYWdlXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIlN1c3BlbnNlIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VQYXJhbSIsIlJvdXRlcyIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJMaW5rIiwiSGVhZCIsIkxheW91dCIsImdldFRhc2siLCJkZWxldGVUYXNrIiwiQ291bnREb3duVGltZXIiLCJtb2RhbENvbnRleHQiLCJ1c2VNb2RhbCIsInRhc2tEb25lIiwidGFza1Jlc2V0IiwiYnV0dG9uU3R5bGUiLCJzdHlsZXMiLCJ0YXNrU3R5bGVzIiwiTW9kYWxDbG9zZSIsIlRhc2siLCJyb3V0ZXIiLCJ0YXNrSWQiLCJkZWxldGVUYXNrTXV0YXRpb24iLCJpZCIsInRhc2siLCJyZWZldGNoIiwiY3R4IiwidGFza0RvbmVNdXRhdGlvbiIsImRvbmUiLCJpc0RvbmUiLCJzZXREb25lIiwiVGFza0RvbmUiLCJwdXNoIiwiVGFza3NQYWdlIiwiYWxlcnQiLCJ0YXNrUmVzZXRNdXRhdGlvbiIsIlRhc2tSZXNldCIsImNvbnRlbnQiLCJoMiIsInRpdGxlIiwidGV4dE1hcCIsIm1hcmdpbiIsImNvbmNlbnRyYXRpb25fdGltZSIsIkVkaXRUYXNrUGFnZSIsIkJ1dHRvbiIsIndpbmRvdyIsImNvbmZpcm0iLCJtYXJnaW5MZWZ0IiwiYnV0dG9uIiwic3VjY2VzcyIsIm5vdFN1Y2Nlc3MiLCJTaG93VGFza1BhZ2UiLCJhdXRoZW50aWNhdGUiLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/pages/task/[taskId].tsx\n'
      )

      /***/
    },
})