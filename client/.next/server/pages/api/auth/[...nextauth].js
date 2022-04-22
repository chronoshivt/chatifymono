"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            authorization: \"https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-read-currently-playing,user-read-playback-state,user-modify-playback-state,\",\n            clientId: process.env.SPOTIFY_CLIENT_ID,\n            clientSecret: process.env.SPOTIFY_CLIENT_SECRET\n        }), \n    ],\n    secret: \"anything\",\n    callbacks: {\n        async jwt ({ token , account  }) {\n            if (account) {\n                token.accessToken = account.refresh_token;\n            }\n            return token;\n        },\n        async session (session, user) {\n            session.user = user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3lCO0FBRTFELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3RCRSxTQUFTLEVBQUU7UUFDVEQsa0VBQWUsQ0FBQztZQUNkRSxhQUFhLEVBQ1gscUtBQXFLO1lBQ3ZLQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7WUFDdkNDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHFCQUFxQjtTQUNoRCxDQUFDO0tBQ0g7SUFDREMsTUFBTSxFQUFFTCxVQUE4QjtJQUN0Q08sU0FBUyxFQUFFO1FBQ1QsTUFBTUMsR0FBRyxFQUFDLEVBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFLEVBQUU7WUFDNUIsSUFBSUEsT0FBTyxFQUFFO2dCQUNYRCxLQUFLLENBQUNFLFdBQVcsR0FBR0QsT0FBTyxDQUFDRSxhQUFhLENBQUM7YUFDM0M7WUFDRCxPQUFPSCxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU1JLE9BQU8sRUFBQ0EsT0FBTyxFQUFFQyxJQUFJLEVBQUU7WUFDM0JELE9BQU8sQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJLENBQUM7WUFDcEIsT0FBT0QsT0FBTyxDQUFDO1NBQ2hCO0tBQ0Y7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IFNwb3RpZnlQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9zcG90aWZ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBTcG90aWZ5UHJvdmlkZXIoe1xyXG4gICAgICBhdXRob3JpemF0aW9uOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemU/c2NvcGU9dXNlci1yZWFkLWVtYWlsLHBsYXlsaXN0LXJlYWQtcHJpdmF0ZSx1c2VyLXJlYWQtY3VycmVudGx5LXBsYXlpbmcsdXNlci1yZWFkLXBsYXliYWNrLXN0YXRlLHVzZXItbW9kaWZ5LXBsYXliYWNrLXN0YXRlLFwiLFxyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFQ1JFVCxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCBhY2NvdW50IH0pIHtcclxuICAgICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQucmVmcmVzaF90b2tlbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uLCB1c2VyKSB7XHJcbiAgICAgIHNlc3Npb24udXNlciA9IHVzZXI7XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiU3BvdGlmeVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiYXV0aG9yaXphdGlvbiIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwic2VjcmV0IiwiTkVYVF9QVUJMSUNfU0VDUkVUIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwic2Vzc2lvbiIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();