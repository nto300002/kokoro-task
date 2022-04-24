"use strict"
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
;(() => {
  var exports = {}
  exports.id = "pages/api/rpc/getTasks"
  exports.ids = ["pages/api/rpc/getTasks"]
  exports.modules = {
    /***/ "./app/pages/task/queries/getTasks.ts":
      /*!********************************************!*\
  !*** ./app/pages/task/queries/getTasks.ts ***!
  \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/data-client */ "next/data-client");\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/stdlib-server */ "next/stdlib-server");\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db */ "./db/index.ts");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({\n  where,\n  orderBy,\n  skip = 0,\n  take = 100\n}) => {\n  // TODO: in multi-tenant app, you must add validation to ensure correct tenant\n  const {\n    items: tasks,\n    hasMore,\n    nextPage,\n    count\n  } = await (0,next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.paginate)({\n    skip,\n    take,\n    count: () => db__WEBPACK_IMPORTED_MODULE_2__.default.task.count({\n      where\n    }),\n    query: paginateArgs => db__WEBPACK_IMPORTED_MODULE_2__.default.task.findMany(_objectSpread(_objectSpread({}, paginateArgs), {}, {\n      where,\n      orderBy\n    }))\n  });\n  return {\n    tasks,\n    nextPage,\n    hasMore,\n    count\n  };\n}), {\n  "resolverName": "getTasks",\n  "resolverType": "query",\n  "routePath": "/api/rpc/getTasks"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZXMvdGFzay9xdWVyaWVzL2dldFRhc2tzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUtBLGlFQUFlLG1FQUFBQSw2REFBQSxDQUNiQSxrRUFBQSxFQURhLEVBRWIsT0FBTztBQUFFSyxFQUFBQSxLQUFGO0FBQVNDLEVBQUFBLE9BQVQ7QUFBa0JDLEVBQUFBLElBQUksR0FBRyxDQUF6QjtBQUE0QkMsRUFBQUEsSUFBSSxHQUFHO0FBQW5DLENBQVAsS0FBbUU7QUFDakU7QUFDQSxRQUFNO0FBQ0pDLElBQUFBLEtBQUssRUFBRUMsS0FESDtBQUVKQyxJQUFBQSxPQUZJO0FBR0pDLElBQUFBLFFBSEk7QUFJSkMsSUFBQUE7QUFKSSxNQUtGLE1BQU1aLDREQUFRLENBQUM7QUFDakJNLElBQUFBLElBRGlCO0FBRWpCQyxJQUFBQSxJQUZpQjtBQUdqQkssSUFBQUEsS0FBSyxFQUFFLE1BQU1YLGtEQUFBLENBQWM7QUFBRUcsTUFBQUE7QUFBRixLQUFkLENBSEk7QUFJakJVLElBQUFBLEtBQUssRUFBR0MsWUFBRCxJQUFrQmQscURBQUEsaUNBQXNCYyxZQUF0QjtBQUFvQ1gsTUFBQUEsS0FBcEM7QUFBMkNDLE1BQUFBO0FBQTNDO0FBSlIsR0FBRCxDQUxsQjtBQVlBLFNBQU87QUFDTEksSUFBQUEsS0FESztBQUVMRSxJQUFBQSxRQUZLO0FBR0xELElBQUFBLE9BSEs7QUFJTEUsSUFBQUE7QUFKSyxHQUFQO0FBTUQsQ0F0QlksQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29rb3JvLXRhc2svLi9hcHAvcGFnZXMvdGFzay9xdWVyaWVzL2dldFRhc2tzLnRzPzkxNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFnaW5hdGUsIHJlc29sdmVyIH0gZnJvbSBcImJsaXR6XCJcbmltcG9ydCBkYiwgeyBQcmlzbWEgfSBmcm9tIFwiZGJcIlxuXG5pbnRlcmZhY2UgR2V0VGFza3NJbnB1dFxuICBleHRlbmRzIFBpY2s8UHJpc21hLlRhc2tGaW5kTWFueUFyZ3MsIFwid2hlcmVcIiB8IFwib3JkZXJCeVwiIHwgXCJza2lwXCIgfCBcInRha2VcIj4ge31cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZXIucGlwZShcbiAgcmVzb2x2ZXIuYXV0aG9yaXplKCksXG4gIGFzeW5jICh7IHdoZXJlLCBvcmRlckJ5LCBza2lwID0gMCwgdGFrZSA9IDEwMCB9OiBHZXRUYXNrc0lucHV0KSA9PiB7XG4gICAgLy8gVE9ETzogaW4gbXVsdGktdGVuYW50IGFwcCwgeW91IG11c3QgYWRkIHZhbGlkYXRpb24gdG8gZW5zdXJlIGNvcnJlY3QgdGVuYW50XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXM6IHRhc2tzLFxuICAgICAgaGFzTW9yZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgY291bnQsXG4gICAgfSA9IGF3YWl0IHBhZ2luYXRlKHtcbiAgICAgIHNraXAsXG4gICAgICB0YWtlLFxuICAgICAgY291bnQ6ICgpID0+IGRiLnRhc2suY291bnQoeyB3aGVyZSB9KSxcbiAgICAgIHF1ZXJ5OiAocGFnaW5hdGVBcmdzKSA9PiBkYi50YXNrLmZpbmRNYW55KHsgLi4ucGFnaW5hdGVBcmdzLCB3aGVyZSwgb3JkZXJCeSB9KSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhc2tzLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBoYXNNb3JlLFxuICAgICAgY291bnQsXG4gICAgfVxuICB9XG4pXG4iXSwibmFtZXMiOlsicmVzb2x2ZXIiLCJwYWdpbmF0ZSIsImRiIiwicGlwZSIsImF1dGhvcml6ZSIsIndoZXJlIiwib3JkZXJCeSIsInNraXAiLCJ0YWtlIiwiaXRlbXMiLCJ0YXNrcyIsImhhc01vcmUiLCJuZXh0UGFnZSIsImNvdW50IiwidGFzayIsInF1ZXJ5IiwicGFnaW5hdGVBcmdzIiwiZmluZE1hbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/pages/task/queries/getTasks.ts\n'
        )

        /***/
      },

    /***/ "./db/index.ts":
      /*!*********************!*\
  !*** ./db/index.ts ***!
  \*********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/stdlib */ "next/stdlib");\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _prisma_client__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\nconst EnhancedPrisma = (0,next_stdlib__WEBPACK_IMPORTED_MODULE_0__.enhancePrisma)(_prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EnhancedPrisma());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxjQUFjLEdBQUdGLDBEQUFhLENBQUNDLHdEQUFELENBQXBDO0FBRUE7QUFDQSxpRUFBZSxJQUFJQyxjQUFKLEVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2tvcm8tdGFzay8uL2RiL2luZGV4LnRzP2ZiNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5oYW5jZVByaXNtYSB9IGZyb20gXCJibGl0elwiXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5jb25zdCBFbmhhbmNlZFByaXNtYSA9IGVuaGFuY2VQcmlzbWEoUHJpc21hQ2xpZW50KVxuXG5leHBvcnQgKiBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuZXhwb3J0IGRlZmF1bHQgbmV3IEVuaGFuY2VkUHJpc21hKClcbiJdLCJuYW1lcyI6WyJlbmhhbmNlUHJpc21hIiwiUHJpc21hQ2xpZW50IiwiRW5oYW5jZWRQcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./db/index.ts\n'
        )

        /***/
      },

    /***/ "@prisma/client":
      /*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require("@prisma/client")

        /***/
      },

    /***/ "next/data-client":
      /*!***********************************!*\
  !*** external "next/data-client" ***!
  \***********************************/
      /***/ (module) => {
        module.exports = require("next/data-client")

        /***/
      },

    /***/ "next/stdlib":
      /*!******************************!*\
  !*** external "next/stdlib" ***!
  \******************************/
      /***/ (module) => {
        module.exports = require("next/stdlib")

        /***/
      },

    /***/ "next/stdlib-server":
      /*!*************************************!*\
  !*** external "next/stdlib-server" ***!
  \*************************************/
      /***/ (module) => {
        module.exports = require("next/stdlib-server")

        /***/
      },
  }
  // load runtime
  var __webpack_require__ = require("../../../webpack-runtime.js")
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_exec__("./app/pages/task/queries/getTasks.ts")
  module.exports = __webpack_exports__
})()
