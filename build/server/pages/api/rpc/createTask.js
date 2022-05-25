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
  exports.id = "pages/api/rpc/createTask"
  exports.ids = ["pages/api/rpc/createTask"]
  exports.modules = {
    /***/ "./app/pages/task/mutations/createTask.ts":
      /*!************************************************!*\
  !*** ./app/pages/task/mutations/createTask.ts ***!
  \************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/data-client */ "next/data-client");\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/stdlib-server */ "next/stdlib-server");\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db */ "./db/index.ts");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ "zod");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CreateTask = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({\n  title: zod__WEBPACK_IMPORTED_MODULE_3__.z.string()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(CreateTask), next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async input => {\n  // TODO: in multi-tenant app, you must add validation to ensure correct tenant\n  const task = await db__WEBPACK_IMPORTED_MODULE_2__.default.task.create({\n    data: input\n  });\n  return task;\n}), {\n  "resolverName": "createTask",\n  "resolverType": "mutation",\n  "routePath": "/api/rpc/createTask"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZXMvdGFzay9tdXRhdGlvbnMvY3JlYXRlVGFzay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLE1BQU1HLFVBQVUsR0FBR0QseUNBQUEsQ0FBUztBQUMxQkcsRUFBQUEsS0FBSyxFQUFFSCx5Q0FBQTtBQURtQixDQUFULENBQW5CO0FBSUEsaUVBQWUsbUVBQUFGLDZEQUFBLENBQWNBLDREQUFBLENBQWFHLFVBQWIsQ0FBZCxFQUF3Q0gsa0VBQUEsRUFBeEMsRUFBOEQsTUFBT1UsS0FBUCxJQUFpQjtBQUM1RjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNVixtREFBQSxDQUFlO0FBQUVZLElBQUFBLElBQUksRUFBRUg7QUFBUixHQUFmLENBQW5CO0FBRUEsU0FBT0MsSUFBUDtBQUNELENBTGMsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29rb3JvLXRhc2svLi9hcHAvcGFnZXMvdGFzay9tdXRhdGlvbnMvY3JlYXRlVGFzay50cz9hZDE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc29sdmVyIH0gZnJvbSBcImJsaXR6XCJcbmltcG9ydCBkYiBmcm9tIFwiZGJcIlxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIlxuXG5jb25zdCBDcmVhdGVUYXNrID0gei5vYmplY3Qoe1xuICB0aXRsZTogei5zdHJpbmcoKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVyLnBpcGUocmVzb2x2ZXIuem9kKENyZWF0ZVRhc2spLCByZXNvbHZlci5hdXRob3JpemUoKSwgYXN5bmMgKGlucHV0KSA9PiB7XG4gIC8vIFRPRE86IGluIG11bHRpLXRlbmFudCBhcHAsIHlvdSBtdXN0IGFkZCB2YWxpZGF0aW9uIHRvIGVuc3VyZSBjb3JyZWN0IHRlbmFudFxuICBjb25zdCB0YXNrID0gYXdhaXQgZGIudGFzay5jcmVhdGUoeyBkYXRhOiBpbnB1dCB9KVxuXG4gIHJldHVybiB0YXNrXG59KVxuIl0sIm5hbWVzIjpbInJlc29sdmVyIiwiZGIiLCJ6IiwiQ3JlYXRlVGFzayIsIm9iamVjdCIsInRpdGxlIiwic3RyaW5nIiwicGlwZSIsInpvZCIsImF1dGhvcml6ZSIsImlucHV0IiwidGFzayIsImNyZWF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/pages/task/mutations/createTask.ts\n'
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

    /***/ zod:
      /*!**********************!*\
  !*** external "zod" ***!
  \**********************/
      /***/ (module) => {
        module.exports = require("zod")

        /***/
      },
  }
  // load runtime
  var __webpack_require__ = require("../../../webpack-runtime.js")
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_exec__("./app/pages/task/mutations/createTask.ts")
  module.exports = __webpack_exports__
})()
