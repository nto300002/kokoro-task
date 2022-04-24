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
  exports.id = "pages/api/rpc/editTask"
  exports.ids = ["pages/api/rpc/editTask"]
  exports.modules = {
    /***/ "./app/pages/task/mutations/editTask.ts":
      /*!**********************************************!*\
  !*** ./app/pages/task/mutations/editTask.ts ***!
  \**********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/data-client */ "next/data-client");\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/stdlib-server */ "next/stdlib-server");\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db */ "./db/index.ts");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ "zod");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nconst UpdateTask = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({\n  id: zod__WEBPACK_IMPORTED_MODULE_3__.z.number(),\n  title: zod__WEBPACK_IMPORTED_MODULE_3__.z.string(),\n  concentration_time: zod__WEBPACK_IMPORTED_MODULE_3__.z.number()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(UpdateTask), next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async (_ref) => {\n  let {\n    id\n  } = _ref,\n      data = _objectWithoutProperties(_ref, ["id"]);\n\n  // TODO: in multi-tenant app, you must add validation to ensure correct tenant\n  const task = await db__WEBPACK_IMPORTED_MODULE_2__.default.task.update({\n    where: {\n      id\n    },\n    data\n  });\n  return task;\n}), {\n  "resolverName": "editTask",\n  "resolverType": "mutation",\n  "routePath": "/api/rpc/editTask"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZXMvdGFzay9tdXRhdGlvbnMvZWRpdFRhc2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLE1BQU1HLFVBQVUsR0FBR0QseUNBQUEsQ0FBUztBQUMxQkcsRUFBQUEsRUFBRSxFQUFFSCx5Q0FBQSxFQURzQjtBQUUxQkssRUFBQUEsS0FBSyxFQUFFTCx5Q0FBQSxFQUZtQjtBQUcxQk8sRUFBQUEsa0JBQWtCLEVBQUVQLHlDQUFBO0FBSE0sQ0FBVCxDQUFuQjtBQU1BLGlFQUFlLG1FQUFBRiw2REFBQSxDQUNiQSw0REFBQSxDQUFhRyxVQUFiLENBRGEsRUFFYkgsa0VBQUEsRUFGYSxFQUdiLGdCQUEyQjtBQUFBLE1BQXBCO0FBQUVLLElBQUFBO0FBQUYsR0FBb0I7QUFBQSxNQUFYUSxJQUFXOztBQUN6QjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNYixtREFBQSxDQUFlO0FBQUVlLElBQUFBLEtBQUssRUFBRTtBQUFFWCxNQUFBQTtBQUFGLEtBQVQ7QUFBaUJRLElBQUFBO0FBQWpCLEdBQWYsQ0FBbkI7QUFFQSxTQUFPQyxJQUFQO0FBQ0QsQ0FSWSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2tvcm8tdGFzay8uL2FwcC9wYWdlcy90YXNrL211dGF0aW9ucy9lZGl0VGFzay50cz81MDhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc29sdmVyIH0gZnJvbSBcImJsaXR6XCJcbmltcG9ydCBkYiBmcm9tIFwiZGJcIlxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIlxuXG5jb25zdCBVcGRhdGVUYXNrID0gei5vYmplY3Qoe1xuICBpZDogei5udW1iZXIoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGNvbmNlbnRyYXRpb25fdGltZTogei5udW1iZXIoKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVyLnBpcGUoXG4gIHJlc29sdmVyLnpvZChVcGRhdGVUYXNrKSxcbiAgcmVzb2x2ZXIuYXV0aG9yaXplKCksXG4gIGFzeW5jICh7IGlkLCAuLi5kYXRhIH0pID0+IHtcbiAgICAvLyBUT0RPOiBpbiBtdWx0aS10ZW5hbnQgYXBwLCB5b3UgbXVzdCBhZGQgdmFsaWRhdGlvbiB0byBlbnN1cmUgY29ycmVjdCB0ZW5hbnRcbiAgICBjb25zdCB0YXNrID0gYXdhaXQgZGIudGFzay51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG5cbiAgICByZXR1cm4gdGFza1xuICB9XG4pXG4iXSwibmFtZXMiOlsicmVzb2x2ZXIiLCJkYiIsInoiLCJVcGRhdGVUYXNrIiwib2JqZWN0IiwiaWQiLCJudW1iZXIiLCJ0aXRsZSIsInN0cmluZyIsImNvbmNlbnRyYXRpb25fdGltZSIsInBpcGUiLCJ6b2QiLCJhdXRob3JpemUiLCJkYXRhIiwidGFzayIsInVwZGF0ZSIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/pages/task/mutations/editTask.ts\n'
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
  var __webpack_exports__ = __webpack_exec__("./app/pages/task/mutations/editTask.ts")
  module.exports = __webpack_exports__
})()
