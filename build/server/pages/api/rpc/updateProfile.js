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
  exports.id = "pages/api/rpc/updateProfile"
  exports.ids = ["pages/api/rpc/updateProfile"]
  exports.modules = {
    /***/ "./app/pages/profile/mutations/updateProfile.ts":
      /*!******************************************************!*\
  !*** ./app/pages/profile/mutations/updateProfile.ts ***!
  \******************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/data-client */ "next/data-client");\n/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/stdlib-server */ "next/stdlib-server");\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ "zod");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! db */ "./db/index.ts");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nconst UpdateProfile = zod__WEBPACK_IMPORTED_MODULE_2___default().object({\n  id: (0,zod__WEBPACK_IMPORTED_MODULE_2__.number)(),\n  name: zod__WEBPACK_IMPORTED_MODULE_2___default().string().optional(),\n  profile: zod__WEBPACK_IMPORTED_MODULE_2___default().string().optional(),\n  email: zod__WEBPACK_IMPORTED_MODULE_2___default().string().email().optional()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(UpdateProfile), next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async (_ref) => {\n  let {\n    id\n  } = _ref,\n      data = _objectWithoutProperties(_ref, ["id"]);\n\n  const profile = await db__WEBPACK_IMPORTED_MODULE_3__.default.user.update({\n    where: {\n      id\n    },\n    data: _objectSpread({}, data)\n  });\n  return profile;\n}), {\n  "resolverName": "updateProfile",\n  "resolverType": "mutation",\n  "routePath": "/api/rpc/updateProfile"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZXMvcHJvZmlsZS9tdXRhdGlvbnMvdXBkYXRlUHJvZmlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUEsTUFBTUksYUFBYSxHQUFHSCxpREFBQSxDQUFTO0FBQzdCSyxFQUFBQSxFQUFFLEVBQUVKLDJDQUFNLEVBRG1CO0FBRTdCSyxFQUFBQSxJQUFJLEVBQUVOLGlEQUFBLEdBQVdRLFFBQVgsRUFGdUI7QUFHN0JDLEVBQUFBLE9BQU8sRUFBRVQsaURBQUEsR0FBV1EsUUFBWCxFQUhvQjtBQUk3QkUsRUFBQUEsS0FBSyxFQUFFVixpREFBQSxHQUFXVSxLQUFYLEdBQW1CRixRQUFuQjtBQUpzQixDQUFULENBQXRCO0FBT0EsaUVBQWUsbUVBQUFULDZEQUFBLENBQ2JBLDREQUFBLENBQWFJLGFBQWIsQ0FEYSxFQUViSixrRUFBQSxFQUZhLEVBR2IsZ0JBQTJCO0FBQUEsTUFBcEI7QUFBRU0sSUFBQUE7QUFBRixHQUFvQjtBQUFBLE1BQVhTLElBQVc7O0FBQ3pCLFFBQU1MLE9BQU8sR0FBRyxNQUFNUCxtREFBQSxDQUFlO0FBQ25DZSxJQUFBQSxLQUFLLEVBQUU7QUFBRVosTUFBQUE7QUFBRixLQUQ0QjtBQUVuQ1MsSUFBQUEsSUFBSSxvQkFDQ0EsSUFERDtBQUYrQixHQUFmLENBQXRCO0FBTUEsU0FBT0wsT0FBUDtBQUNELENBWFksQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29rb3JvLXRhc2svLi9hcHAvcGFnZXMvcHJvZmlsZS9tdXRhdGlvbnMvdXBkYXRlUHJvZmlsZS50cz9lMTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc29sdmVyIH0gZnJvbSBcImJsaXR6XCJcbmltcG9ydCB6LCB7IG51bWJlciB9IGZyb20gXCJ6b2RcIlxuaW1wb3J0IGRiIGZyb20gXCJkYlwiXG5cbmNvbnN0IFVwZGF0ZVByb2ZpbGUgPSB6Lm9iamVjdCh7XG4gIGlkOiBudW1iZXIoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcm9maWxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCkub3B0aW9uYWwoKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVyLnBpcGUoXG4gIHJlc29sdmVyLnpvZChVcGRhdGVQcm9maWxlKSxcbiAgcmVzb2x2ZXIuYXV0aG9yaXplKCksXG4gIGFzeW5jICh7IGlkLCAuLi5kYXRhIH0pID0+IHtcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgZGIudXNlci51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4gcHJvZmlsZVxuICB9XG4pXG4iXSwibmFtZXMiOlsicmVzb2x2ZXIiLCJ6IiwibnVtYmVyIiwiZGIiLCJVcGRhdGVQcm9maWxlIiwib2JqZWN0IiwiaWQiLCJuYW1lIiwic3RyaW5nIiwib3B0aW9uYWwiLCJwcm9maWxlIiwiZW1haWwiLCJwaXBlIiwiem9kIiwiYXV0aG9yaXplIiwiZGF0YSIsInVzZXIiLCJ1cGRhdGUiLCJ3aGVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/pages/profile/mutations/updateProfile.ts\n'
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
  var __webpack_exports__ = __webpack_exec__("./app/pages/profile/mutations/updateProfile.ts")
  module.exports = __webpack_exports__
})()
