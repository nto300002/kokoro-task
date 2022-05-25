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
  exports.id = "pages/api/auth/[...auth]"
  exports.ids = ["pages/api/auth/[...auth]"]
  exports.modules = {
    /***/ "./app/api/auth/[...auth].ts":
      /*!***********************************!*\
  !*** ./app/api/auth/[...auth].ts ***!
  \***********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/utils */ "./node_modules/next/dist/server/utils.js");\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/stdlib-server */ "next/stdlib-server");\n/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db */ "./db/index.ts");\n/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20");\n/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__.withFixNodeFileTrace)((0,next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.passportAuth)({\n  successRedirectUrl: "/",\n  errorRedirectUrl: "/",\n  strategies: [{\n    strategy: new passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__.Strategy({\n      clientID: process.env.GOOGLE_CLIENT_ID,\n      clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n      callbackURL:  false ? 0 : "http://localhost:3000/api/auth/google/callback",\n      scope: ["email", "profile"]\n    }, async function (_token, _tokenSecret, profile, done) {\n      var _profile$emails$;\n\n      const email = profile.emails && ((_profile$emails$ = profile.emails[0]) === null || _profile$emails$ === void 0 ? void 0 : _profile$emails$.value);\n      const user = await db__WEBPACK_IMPORTED_MODULE_2__.default.user.upsert({\n        where: {\n          email\n        },\n        create: {\n          email,\n          name: profile.displayName\n        },\n        update: {\n          email\n        }\n      });\n      const publicData = {\n        userId: user.id,\n        roles: [user.role],\n        source: "google"\n      };\n      done(null, {\n        publicData\n      });\n    })\n  }]\n})));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBpL2F1dGgvWy4uLmF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQSxpRUFBZSw2RUFBQUEsZ0VBQVksQ0FBQztBQUMxQkksRUFBQUEsa0JBQWtCLEVBQUUsR0FETTtBQUUxQkMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FGUTtBQUcxQkMsRUFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRUMsSUFBQUEsUUFBUSxFQUFFLElBQUlKLDZEQUFKLENBQ1I7QUFDRUssTUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRHhCO0FBRUVDLE1BQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUY1QjtBQUdFQyxNQUFBQSxXQUFXLEVBQ1QsU0FDSSxDQURKLEdBRUksZ0RBTlI7QUFPRUMsTUFBQUEsS0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVY7QUFQVCxLQURRLEVBVVIsZ0JBQWdCQyxNQUFoQixFQUF3QkMsWUFBeEIsRUFBc0NDLE9BQXRDLEVBQStDQyxJQUEvQyxFQUFxRDtBQUFBOztBQUNuRCxZQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csTUFBUix5QkFBa0JILE9BQU8sQ0FBQ0csTUFBUixDQUFlLENBQWYsQ0FBbEIscURBQWtCLGlCQUFtQkMsS0FBckMsQ0FBZDtBQUNBLFlBQU1DLElBQUksR0FBRyxNQUFNdEIsbURBQUEsQ0FBZTtBQUNoQ3dCLFFBQUFBLEtBQUssRUFBRTtBQUFFTCxVQUFBQTtBQUFGLFNBRHlCO0FBRWhDTSxRQUFBQSxNQUFNLEVBQUU7QUFDTk4sVUFBQUEsS0FETTtBQUVOTyxVQUFBQSxJQUFJLEVBQUVULE9BQU8sQ0FBQ1U7QUFGUixTQUZ3QjtBQU1oQ0MsUUFBQUEsTUFBTSxFQUFFO0FBQUVULFVBQUFBO0FBQUY7QUFOd0IsT0FBZixDQUFuQjtBQVFBLFlBQU1VLFVBQVUsR0FBRztBQUNqQkMsUUFBQUEsTUFBTSxFQUFFUixJQUFJLENBQUNTLEVBREk7QUFFakJDLFFBQUFBLEtBQUssRUFBRSxDQUFDVixJQUFJLENBQUNXLElBQU4sQ0FGVTtBQUdqQkMsUUFBQUEsTUFBTSxFQUFFO0FBSFMsT0FBbkI7QUFLQWhCLE1BQUFBLElBQUksQ0FBQyxJQUFELEVBQU87QUFBRVcsUUFBQUE7QUFBRixPQUFQLENBQUo7QUFDRCxLQTFCTztBQURaLEdBRFU7QUFIYyxDQUFELENBQTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29rb3JvLXRhc2svLi9hcHAvYXBpL2F1dGgvWy4uLmF1dGhdLnRzPzI3ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFzc3BvcnRBdXRoIH0gZnJvbSBcImJsaXR6XCJcbmltcG9ydCBkYiBmcm9tIFwiZGJcIlxuaW1wb3J0IHsgU3RyYXRlZ3kgYXMgR29vZ2xlU3RyYXRlZ3kgfSBmcm9tIFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjBcIlxuZXhwb3J0IGRlZmF1bHQgcGFzc3BvcnRBdXRoKHtcbiAgc3VjY2Vzc1JlZGlyZWN0VXJsOiBcIi9cIixcbiAgZXJyb3JSZWRpcmVjdFVybDogXCIvXCIsXG4gIHN0cmF0ZWdpZXM6IFtcbiAgICB7XG4gICAgICBzdHJhdGVneTogbmV3IEdvb2dsZVN0cmF0ZWd5KFxuICAgICAgICB7XG4gICAgICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgYXMgc3RyaW5nLFxuICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nLFxuICAgICAgICAgIGNhbGxiYWNrVVJMOlxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgID8gXCLjg4fjg5fjg63jgqTlhYgvYXBpL2F1dGgvZ29vZ2xlL2NhbGxiYWNrXCJcbiAgICAgICAgICAgICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9nb29nbGUvY2FsbGJhY2tcIixcbiAgICAgICAgICBzY29wZTogW1wiZW1haWxcIiwgXCJwcm9maWxlXCJdLFxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBmdW5jdGlvbiAoX3Rva2VuLCBfdG9rZW5TZWNyZXQsIHByb2ZpbGUsIGRvbmUpIHtcbiAgICAgICAgICBjb25zdCBlbWFpbCA9IHByb2ZpbGUuZW1haWxzICYmIHByb2ZpbGUuZW1haWxzWzBdPy52YWx1ZVxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLnVwc2VydCh7XG4gICAgICAgICAgICB3aGVyZTogeyBlbWFpbCB9LFxuICAgICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZTogeyBlbWFpbCB9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgcHVibGljRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgICAgICAgIHJvbGVzOiBbdXNlci5yb2xlXSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJnb29nbGVcIixcbiAgICAgICAgICB9XG4gICAgICAgICAgZG9uZShudWxsLCB7IHB1YmxpY0RhdGEgfSlcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICB9LFxuICBdLFxufSlcbiJdLCJuYW1lcyI6WyJwYXNzcG9ydEF1dGgiLCJkYiIsIlN0cmF0ZWd5IiwiR29vZ2xlU3RyYXRlZ3kiLCJzdWNjZXNzUmVkaXJlY3RVcmwiLCJlcnJvclJlZGlyZWN0VXJsIiwic3RyYXRlZ2llcyIsInN0cmF0ZWd5IiwiY2xpZW50SUQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tVUkwiLCJzY29wZSIsIl90b2tlbiIsIl90b2tlblNlY3JldCIsInByb2ZpbGUiLCJkb25lIiwiZW1haWwiLCJlbWFpbHMiLCJ2YWx1ZSIsInVzZXIiLCJ1cHNlcnQiLCJ3aGVyZSIsImNyZWF0ZSIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsInVwZGF0ZSIsInB1YmxpY0RhdGEiLCJ1c2VySWQiLCJpZCIsInJvbGVzIiwicm9sZSIsInNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/api/auth/[...auth].ts\n'
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

    /***/ "./node_modules/next/dist/server/utils.js":
      /*!************************************************!*\
  !*** ./node_modules/next/dist/server/utils.js ***!
  \************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          "\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.isBlockedPage = isBlockedPage;\nexports.cleanAmpPath = cleanAmpPath;\nexports.resultFromChunks = resultFromChunks;\nexports.resultToChunks = resultToChunks;\nexports.fixNodeFileTrace = exports.isInternalBlitzMonorepoDevelopment = exports.withFixNodeFileTrace = void 0;\nvar _constants = __webpack_require__(/*! ../shared/lib/constants */ \"../shared/lib/constants\");\nfunction isBlockedPage(pathname) {\n    return _constants.BLOCKED_PAGES.includes(pathname);\n}\nfunction cleanAmpPath(pathname) {\n    if (pathname.match(/\\?amp=(y|yes|true|1)/)) {\n        pathname = pathname.replace(/\\?amp=(y|yes|true|1)&?/, '?');\n    }\n    if (pathname.match(/&amp=(y|yes|true|1)/)) {\n        pathname = pathname.replace(/&amp=(y|yes|true|1)/, '');\n    }\n    pathname = pathname.replace(/\\?$/, '');\n    return pathname;\n}\nfunction resultFromChunks(chunks) {\n    return ({ next , complete  })=>{\n        chunks.forEach(next);\n        complete();\n        return ()=>{\n        };\n    };\n}\nfunction resultToChunks(result) {\n    return new Promise((resolve, reject)=>{\n        const chunks = [];\n        result({\n            next: (chunk)=>{\n                chunks.push(chunk);\n            },\n            error: (error)=>reject(error)\n            ,\n            complete: ()=>resolve(chunks)\n        });\n    });\n}\nconst isInternalBlitzMonorepoDevelopment = __dirname.match(/[\\\\/]packages[\\\\/]next[\\\\/]dist[\\\\/]server$/);\nexports.isInternalBlitzMonorepoDevelopment = isInternalBlitzMonorepoDevelopment;\nconst fixNodeFileTrace = ()=>{\n    const path = __webpack_require__(/*! path */ \"path\");\n    path.resolve('.blitz.config.compiled.js');\n    path.resolve('.next/server/blitz-db.js');\n    path.resolve('.next/serverless/blitz-db.js');\n};\nexports.fixNodeFileTrace = fixNodeFileTrace;\nconst withFixNodeFileTrace = (fn)=>{\n    fixNodeFileTrace();\n    return fn;\n};\nexports.withFixNodeFileTrace = withFixNodeFileTrace;\n\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci91dGlscy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0Qix3QkFBd0IsR0FBRywwQ0FBMEMsR0FBRyw0QkFBNEI7QUFDcEcsaUJBQWlCLG1CQUFPLENBQUMsd0RBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsa0JBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29rb3JvLXRhc2svLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci91dGlscy5qcz8wODllIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc0Jsb2NrZWRQYWdlID0gaXNCbG9ja2VkUGFnZTtcbmV4cG9ydHMuY2xlYW5BbXBQYXRoID0gY2xlYW5BbXBQYXRoO1xuZXhwb3J0cy5yZXN1bHRGcm9tQ2h1bmtzID0gcmVzdWx0RnJvbUNodW5rcztcbmV4cG9ydHMucmVzdWx0VG9DaHVua3MgPSByZXN1bHRUb0NodW5rcztcbmV4cG9ydHMuZml4Tm9kZUZpbGVUcmFjZSA9IGV4cG9ydHMuaXNJbnRlcm5hbEJsaXR6TW9ub3JlcG9EZXZlbG9wbWVudCA9IGV4cG9ydHMud2l0aEZpeE5vZGVGaWxlVHJhY2UgPSB2b2lkIDA7XG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2NvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIGlzQmxvY2tlZFBhZ2UocGF0aG5hbWUpIHtcbiAgICByZXR1cm4gX2NvbnN0YW50cy5CTE9DS0VEX1BBR0VTLmluY2x1ZGVzKHBhdGhuYW1lKTtcbn1cbmZ1bmN0aW9uIGNsZWFuQW1wUGF0aChwYXRobmFtZSkge1xuICAgIGlmIChwYXRobmFtZS5tYXRjaCgvXFw/YW1wPSh5fHllc3x0cnVlfDEpLykpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9cXD9hbXA9KHl8eWVzfHRydWV8MSkmPy8sICc/Jyk7XG4gICAgfVxuICAgIGlmIChwYXRobmFtZS5tYXRjaCgvJmFtcD0oeXx5ZXN8dHJ1ZXwxKS8pKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvJmFtcD0oeXx5ZXN8dHJ1ZXwxKS8sICcnKTtcbiAgICB9XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9cXD8kLywgJycpO1xuICAgIHJldHVybiBwYXRobmFtZTtcbn1cbmZ1bmN0aW9uIHJlc3VsdEZyb21DaHVua3MoY2h1bmtzKSB7XG4gICAgcmV0dXJuICh7IG5leHQgLCBjb21wbGV0ZSAgfSk9PntcbiAgICAgICAgY2h1bmtzLmZvckVhY2gobmV4dCk7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICB9O1xuICAgIH07XG59XG5mdW5jdGlvbiByZXN1bHRUb0NodW5rcyhyZXN1bHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgICAgIHJlc3VsdCh7XG4gICAgICAgICAgICBuZXh0OiAoY2h1bmspPT57XG4gICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpPT5yZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAsXG4gICAgICAgICAgICBjb21wbGV0ZTogKCk9PnJlc29sdmUoY2h1bmtzKVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmNvbnN0IGlzSW50ZXJuYWxCbGl0ek1vbm9yZXBvRGV2ZWxvcG1lbnQgPSBfX2Rpcm5hbWUubWF0Y2goL1tcXFxcL11wYWNrYWdlc1tcXFxcL11uZXh0W1xcXFwvXWRpc3RbXFxcXC9dc2VydmVyJC8pO1xuZXhwb3J0cy5pc0ludGVybmFsQmxpdHpNb25vcmVwb0RldmVsb3BtZW50ID0gaXNJbnRlcm5hbEJsaXR6TW9ub3JlcG9EZXZlbG9wbWVudDtcbmNvbnN0IGZpeE5vZGVGaWxlVHJhY2UgPSAoKT0+e1xuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gICAgcGF0aC5yZXNvbHZlKCcuYmxpdHouY29uZmlnLmNvbXBpbGVkLmpzJyk7XG4gICAgcGF0aC5yZXNvbHZlKCcubmV4dC9zZXJ2ZXIvYmxpdHotZGIuanMnKTtcbiAgICBwYXRoLnJlc29sdmUoJy5uZXh0L3NlcnZlcmxlc3MvYmxpdHotZGIuanMnKTtcbn07XG5leHBvcnRzLmZpeE5vZGVGaWxlVHJhY2UgPSBmaXhOb2RlRmlsZVRyYWNlO1xuY29uc3Qgd2l0aEZpeE5vZGVGaWxlVHJhY2UgPSAoZm4pPT57XG4gICAgZml4Tm9kZUZpbGVUcmFjZSgpO1xuICAgIHJldHVybiBmbjtcbn07XG5leHBvcnRzLndpdGhGaXhOb2RlRmlsZVRyYWNlID0gd2l0aEZpeE5vZGVGaWxlVHJhY2U7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/server/utils.js\n"
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

    /***/ "../shared/lib/constants":
      /*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
      /***/ (module) => {
        module.exports = require("next/dist/shared/lib/constants.js")

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

    /***/ "passport-google-oauth20":
      /*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
      /***/ (module) => {
        module.exports = require("passport-google-oauth20")

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("path")

        /***/
      },
  }
  // load runtime
  var __webpack_require__ = require("../../../webpack-runtime.js")
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_exec__("./app/api/auth/[...auth].ts")
  module.exports = __webpack_exports__
})()
