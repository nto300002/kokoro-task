"use strict"
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/task", {
  /***/ "./app/pages/task/index.tsx":
    /*!**********************************!*\
  !*** ./app/pages/task/index.tsx ***!
  \**********************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "TasksList": function() { return /* binding */ TasksList; }\n/* harmony export */ });\n/* harmony import */ var _Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/stdlib */ "./node_modules/next/stdlib.js");\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/data-client */ "./node_modules/next/data-client.js");\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var app_core_layouts_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/layouts/Layout */ "./app/core/layouts/Layout.tsx");\n/* harmony import */ var app_pages_task_queries_getTasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/task/queries/getTasks */ "./app/pages/task/queries/getTasks.ts");\n/* harmony import */ var _new__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new */ "./app/pages/task/new.tsx");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = "/Users/yasuda/Downloads/kokoro-task/app/pages/task/index.tsx",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar ITEMS_PER_PAGE = 100;\nvar TasksList = function TasksList() {\n  _s();\n\n  var session = (0,next_data_client__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n  var router = (0,next_stdlib__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var page = Number(router.query.page) || 0;\n\n  var _usePaginatedQuery = (0,next_data_client__WEBPACK_IMPORTED_MODULE_3__.usePaginatedQuery)(app_pages_task_queries_getTasks__WEBPACK_IMPORTED_MODULE_7__.default, {\n    orderBy: {\n      id: "asc"\n    },\n    skip: ITEMS_PER_PAGE * page,\n    take: ITEMS_PER_PAGE\n  }),\n      _usePaginatedQuery2 = (0,_Users_yasuda_Downloads_kokoro_task_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_usePaginatedQuery, 1),\n      _usePaginatedQuery2$ = _usePaginatedQuery2[0],\n      tasks = _usePaginatedQuery2$.tasks,\n      hasMore = _usePaginatedQuery2$.hasMore;\n\n  var goToPreviousPage = function goToPreviousPage() {\n    return router.push({\n      query: {\n        page: page - 1\n      }\n    });\n  };\n\n  var goToNextPage = function goToNextPage() {\n    return router.push({\n      query: {\n        page: page + 1\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ul", {\n      children: tasks.map(function (task) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__.Link, {\n            href: next_stdlib__WEBPACK_IMPORTED_MODULE_2__.Routes.ShowTaskPage({\n              taskId: task.id\n            }),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {\n              children: task.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this), task.done ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {\n              children: "\\u5B8C\\u4E86!"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {\n              children: "\\u672A\\u5B8C\\u4E86"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false)]\n        }, task.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {\n      disabled: page === 0,\n      onClick: goToPreviousPage,\n      children: "\\uFF1C"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {\n      disabled: !hasMore,\n      onClick: goToNextPage,\n      children: "\\uFF1E"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TasksList, "O12O5bOaRYrMtec6ZwK4Am//Bfk=", false, function () {\n  return [next_data_client__WEBPACK_IMPORTED_MODULE_3__.useSession, next_stdlib__WEBPACK_IMPORTED_MODULE_2__.useRouter, next_data_client__WEBPACK_IMPORTED_MODULE_3__.usePaginatedQuery];\n});\n\n_c = TasksList;\n\nvar TasksPage = function TasksPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(next_head__WEBPACK_IMPORTED_MODULE_5__.Head, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("title", {\n        children: "\\u30BF\\u30B9\\u30AF\\u4E00\\u89A7"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n        fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {\n          children: "Loading..."\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 29\n        }, _this),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(TasksList, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_new__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c2 = TasksPage;\nTasksPage.authenticate = {\n  redirectTo: "/auth/notSignIn"\n};\n\nTasksPage.getLayout = function (page) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(app_core_layouts_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: page\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 33\n  }, _this);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (TasksPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "TasksList");\n$RefreshReg$(_c2, "TasksPage");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBLGFBREYsZUFLRTtBQUFBLDZCQUNFLDhEQUFDLDJDQUFEO0FBQVUsZ0JBQVEsZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBcEI7QUFBQSxnQ0FDRSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURGO0FBY0QsQ0FmRDs7TUFBTUE7QUFpQk5BLFNBQVMsQ0FBQ0MsWUFBVixHQUF5QjtBQUFFQyxFQUFBQSxVQUFVLEVBQUU7QUFBZCxDQUF6Qjs7QUFDQUYsU0FBUyxDQUFDRyxTQUFWLEdBQXNCLFVBQUNyQixJQUFEO0FBQUEsc0JBQVUsOERBQUMsNERBQUQ7QUFBQSxjQUFTQTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVjtBQUFBLENBQXRCOztBQUVBLCtEQUFla0IsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZXMvdGFzay9pbmRleC50c3g/ODVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQge1xuICBIZWFkLFxuICBMaW5rLFxuICB1c2VQYWdpbmF0ZWRRdWVyeSxcbiAgdXNlUm91dGVyLFxuICBCbGl0elBhZ2UsXG4gIFJvdXRlcyxcbiAgdXNlU2Vzc2lvbixcbn0gZnJvbSBcImJsaXR6XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcImFwcC9jb3JlL2xheW91dHMvTGF5b3V0XCJcbmltcG9ydCBnZXRUYXNrcyBmcm9tIFwiYXBwL3BhZ2VzL3Rhc2svcXVlcmllcy9nZXRUYXNrc1wiXG5pbXBvcnQgTmV3VGFza1BhZ2UgZnJvbSBcIi4vbmV3XCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFwcC9jb3JlL2NvbXBvbmVudHMvYXRvbXMvbWFpbkNvbnRlbnQubW9kdWxlLnNjc3NcIlxuXG5jb25zdCBJVEVNU19QRVJfUEFHRSA9IDEwMFxuXG5leHBvcnQgY29uc3QgVGFza3NMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhZ2UgPSBOdW1iZXIocm91dGVyLnF1ZXJ5LnBhZ2UpIHx8IDBcbiAgY29uc3QgW3sgdGFza3MsIGhhc01vcmUgfV0gPSB1c2VQYWdpbmF0ZWRRdWVyeShnZXRUYXNrcywge1xuICAgIG9yZGVyQnk6IHsgaWQ6IFwiYXNjXCIgfSxcbiAgICBza2lwOiBJVEVNU19QRVJfUEFHRSAqIHBhZ2UsXG4gICAgdGFrZTogSVRFTVNfUEVSX1BBR0UsXG4gIH0pXG5cbiAgY29uc3QgZ29Ub1ByZXZpb3VzUGFnZSA9ICgpID0+IHJvdXRlci5wdXNoKHsgcXVlcnk6IHsgcGFnZTogcGFnZSAtIDEgfSB9KVxuICBjb25zdCBnb1RvTmV4dFBhZ2UgPSAoKSA9PiByb3V0ZXIucHVzaCh7IHF1ZXJ5OiB7IHBhZ2U6IHBhZ2UgKyAxIH0gfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlcy5TaG93VGFza1BhZ2UoeyB0YXNrSWQ6IHRhc2suaWQgfSl9PlxuICAgICAgICAgICAgICA8YT57dGFzay50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7dGFzay5kb25lID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzcGFuPuWujOS6hiE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3Bhbj7mnKrlrozkuoY8L3NwYW4+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3BhZ2UgPT09IDB9IG9uQ2xpY2s9e2dvVG9QcmV2aW91c1BhZ2V9PlxuICAgICAgICDvvJxcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWhhc01vcmV9IG9uQ2xpY2s9e2dvVG9OZXh0UGFnZX0+XG4gICAgICAgIO+8nlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgVGFza3NQYWdlOiBCbGl0elBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+44K/44K544Kv5LiA6KanPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUYXNrc0xpc3QgLz5cbiAgICAgICAgICA8TmV3VGFza1BhZ2UgLz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cblRhc2tzUGFnZS5hdXRoZW50aWNhdGUgPSB7IHJlZGlyZWN0VG86IFwiL2F1dGgvbm90U2lnbkluXCIgfVxuVGFza3NQYWdlLmdldExheW91dCA9IChwYWdlKSA9PiA8TGF5b3V0PntwYWdlfTwvTGF5b3V0PlxuXG5leHBvcnQgZGVmYXVsdCBUYXNrc1BhZ2VcbiJdLCJuYW1lcyI6WyJTdXNwZW5zZSIsInVzZVJvdXRlciIsIlJvdXRlcyIsInVzZVNlc3Npb24iLCJ1c2VQYWdpbmF0ZWRRdWVyeSIsIkxpbmsiLCJIZWFkIiwiTGF5b3V0IiwiZ2V0VGFza3MiLCJOZXdUYXNrUGFnZSIsIklURU1TX1BFUl9QQUdFIiwiVGFza3NMaXN0Iiwic2Vzc2lvbiIsInJvdXRlciIsInBhZ2UiLCJOdW1iZXIiLCJxdWVyeSIsIm9yZGVyQnkiLCJpZCIsInNraXAiLCJ0YWtlIiwidGFza3MiLCJoYXNNb3JlIiwiZ29Ub1ByZXZpb3VzUGFnZSIsInB1c2giLCJnb1RvTmV4dFBhZ2UiLCJtYXAiLCJ0YXNrIiwiU2hvd1Rhc2tQYWdlIiwidGFza0lkIiwidGl0bGUiLCJkb25lIiwiVGFza3NQYWdlIiwiYXV0aGVudGljYXRlIiwicmVkaXJlY3RUbyIsImdldExheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/pages/task/index.tsx\n'
      )

      /***/
    },
})