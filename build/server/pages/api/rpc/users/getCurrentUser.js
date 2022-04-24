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
  exports.id = "pages/api/rpc/users/getCurrentUser"
  exports.ids = ["pages/api/rpc/users/getCurrentUser"]
  exports.modules = {
    /***/ "./app/queries/users/getCurrentUser.ts":
      /*!*********************************************!*\
  !*** ./app/queries/users/getCurrentUser.ts ***!
  \*********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/data-client */ "next/data-client");\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! db */ "./db/index.ts");\n\n\n\nasync function getCurrentUser(_ = null, ctx = {}) {\n  var _ctx$session;\n\n  if (!((_ctx$session = ctx.session) !== null && _ctx$session !== void 0 && _ctx$session.userId)) return null;\n  const user = await db__WEBPACK_IMPORTED_MODULE_1__.default.user.findUnique({\n    where: {\n      id: ctx.session.userId\n    }\n  });\n  return user;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(getCurrentUser, {\n  "resolverName": "users/getCurrentUser",\n  "resolverType": "query",\n  "routePath": "/api/rpc/users/getCurrentUser"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcXVlcmllcy91c2Vycy9nZXRDdXJyZW50VXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUdlLGVBQWVDLGNBQWYsQ0FBOEJDLENBQUMsR0FBRyxJQUFsQyxFQUF3Q0MsR0FBaUMsR0FBRyxFQUE1RSxFQUFnRjtBQUFBOztBQUM3RixNQUFJLGtCQUFDQSxHQUFHLENBQUNDLE9BQUwseUNBQUMsYUFBYUMsTUFBZCxDQUFKLEVBQTBCLE9BQU8sSUFBUDtBQUUxQixRQUFNQyxJQUFJLEdBQUcsTUFBTU4sdURBQUEsQ0FBbUI7QUFDcENRLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxFQUFFLEVBQUVOLEdBQUcsQ0FBQ0MsT0FBSixDQUFhQztBQUFuQjtBQUQ2QixHQUFuQixDQUFuQjtBQUlBLFNBQU9DLElBQVA7QUFDRDs7QUFSRCxpRUFBZSxtRUFBZUwsY0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tva29yby10YXNrLy4vYXBwL3F1ZXJpZXMvdXNlcnMvZ2V0Q3VycmVudFVzZXIudHM/NDUwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSBcImRiXCJcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSBcImJsaXR6XCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoXyA9IG51bGwsIGN0eDogeyBzZXNzaW9uPzogU2Vzc2lvbkNvbnRleHQgfSA9IHt9KSB7XG4gIGlmICghY3R4LnNlc3Npb24/LnVzZXJJZCkgcmV0dXJuIG51bGxcblxuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogY3R4LnNlc3Npb24hLnVzZXJJZCB9LFxuICB9KVxuXG4gIHJldHVybiB1c2VyXG59XG4iXSwibmFtZXMiOlsiZGIiLCJnZXRDdXJyZW50VXNlciIsIl8iLCJjdHgiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/queries/users/getCurrentUser.ts\n'
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
  }
  // load runtime
  var __webpack_require__ = require("../../../../webpack-runtime.js")
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_exec__("./app/queries/users/getCurrentUser.ts")
  module.exports = __webpack_exports__
})()
