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
exports.id = "pages/api/playing";
exports.ids = ["pages/api/playing"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/playing.js":
/*!******************************!*\
  !*** ./pages/api/playing.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/spotify */ \"(api)/./pages/lib/spotify.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = async (req, res)=>{\n    const { token: { accessToken  } ,  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    const response = await (0,_lib_spotify__WEBPACK_IMPORTED_MODULE_0__.getCurrentlyPlaying)(accessToken);\n    const items = await response.json();\n    return res.status(200).json(items);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWluZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFEO0FBQ1I7QUFFN0MsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2xDLE1BQU0sRUFDSkMsS0FBSyxFQUFFLEVBQUVDLFdBQVcsR0FBRSxLQUN2QixHQUFHLE1BQU1MLDJEQUFVLENBQUM7UUFBRUUsR0FBRztLQUFFLENBQUM7SUFDN0IsTUFBTUksUUFBUSxHQUFHLE1BQU1QLGlFQUFtQixDQUFDTSxXQUFXLENBQUM7SUFDdkQsTUFBTUUsS0FBSyxHQUFHLE1BQU1ELFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0lBRW5DLE9BQU9MLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUNELEtBQUssQ0FBQyxDQUFDO0NBQ3BDO0FBRUQsaUVBQWVOLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9wbGF5aW5nLmpzPzAwOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q3VycmVudGx5UGxheWluZyB9IGZyb20gXCIuLi9saWIvc3BvdGlmeVwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRva2VuOiB7IGFjY2Vzc1Rva2VuIH0sXHJcbiAgfSA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRDdXJyZW50bHlQbGF5aW5nKGFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGl0ZW1zKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJnZXRDdXJyZW50bHlQbGF5aW5nIiwiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwicmVzcG9uc2UiLCJpdGVtcyIsImpzb24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/playing.js\n");

/***/ }),

/***/ "(api)/./pages/lib/spotify.js":
/*!******************************!*\
  !*** ./pages/lib/spotify.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsersPlaylists\": () => (/* binding */ getUsersPlaylists),\n/* harmony export */   \"getCurrentlyPlaying\": () => (/* binding */ getCurrentlyPlaying)\n/* harmony export */ });\nconst client_id = process.env.SPOTIFY_CLIENT_ID;\nconst client_secret = process.env.SPOTIFY_CLIENT_SECRET;\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString(\"base64\");\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\nconst PLAYLISTS_ENDPOINT = \"https://api.spotify.com/v1/me/playlists\";\nconst CURRENTLY_PLAYING_ENDPOINT = \"https://api.spotify.com/v1/me/player/currently-playing\";\nconst getAccessToken = async (refresh_token)=>{\n    const response = await fetch(TOKEN_ENDPOINT, {\n        method: \"POST\",\n        headers: {\n            Authorization: `Basic ${basic}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: new URLSearchParams({\n            grant_type: \"refresh_token\",\n            refresh_token\n        })\n    });\n    return response.json();\n};\nconst getUsersPlaylists = async (refresh_token)=>{\n    const { access_token  } = await getAccessToken(refresh_token);\n    return fetch(PLAYLISTS_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\nconst getCurrentlyPlaying = async (refresh_token)=>{\n    const { access_token  } = await getAccessToken(refresh_token);\n    return fetch(CURRENTLY_PLAYING_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9saWIvc3BvdGlmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQjtBQUMvQyxNQUFNQyxhQUFhLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxxQkFBcUI7QUFDdkQsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLEVBQUVSLFNBQVMsQ0FBQyxDQUFDLEVBQUVJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssUUFBUSxDQUFDLFFBQVEsQ0FBQztBQUM3RSxNQUFNQyxjQUFjLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQztBQUMvRCxNQUFNQyxrQkFBa0IsR0FBRyx5Q0FBeUM7QUFDcEUsTUFBTUMsMEJBQTBCLEdBQzlCLHdEQUF3RDtBQUUxRCxNQUFNQyxjQUFjLEdBQUcsT0FBT0MsYUFBYSxHQUFLO0lBQzlDLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNOLGNBQWMsRUFBRTtRQUMzQ08sTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ1BDLGFBQWEsRUFBRSxDQUFDLE1BQU0sRUFBRWIsS0FBSyxDQUFDLENBQUM7WUFDL0IsY0FBYyxFQUFFLG1DQUFtQztTQUNwRDtRQUNEYyxJQUFJLEVBQUUsSUFBSUMsZUFBZSxDQUFDO1lBQ3hCQyxVQUFVLEVBQUUsZUFBZTtZQUMzQlIsYUFBYTtTQUNkLENBQUM7S0FDSCxDQUFDO0lBRUYsT0FBT0MsUUFBUSxDQUFDUSxJQUFJLEVBQUUsQ0FBQztDQUN4QjtBQUVNLE1BQU1DLGlCQUFpQixHQUFHLE9BQU9WLGFBQWEsR0FBSztJQUN4RCxNQUFNLEVBQUVXLFlBQVksR0FBRSxHQUFHLE1BQU1aLGNBQWMsQ0FBQ0MsYUFBYSxDQUFDO0lBQzVELE9BQU9FLEtBQUssQ0FBQ0wsa0JBQWtCLEVBQUU7UUFDL0JPLE9BQU8sRUFBRTtZQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVNLFlBQVksQ0FBQyxDQUFDO1NBQ3hDO0tBQ0YsQ0FBQyxDQUFDO0NBQ0osQ0FBQztBQUVLLE1BQU1DLG1CQUFtQixHQUFHLE9BQU9aLGFBQWEsR0FBSztJQUMxRCxNQUFNLEVBQUVXLFlBQVksR0FBRSxHQUFHLE1BQU1aLGNBQWMsQ0FBQ0MsYUFBYSxDQUFDO0lBQzVELE9BQU9FLEtBQUssQ0FBQ0osMEJBQTBCLEVBQUU7UUFDdkNNLE9BQU8sRUFBRTtZQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVNLFlBQVksQ0FBQyxDQUFDO1NBQ3hDO0tBQ0YsQ0FBQyxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2xpYi9zcG90aWZ5LmpzP2EyNmEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xpZW50X2lkID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfSUQ7XHJcbmNvbnN0IGNsaWVudF9zZWNyZXQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQ7XHJcbmNvbnN0IGJhc2ljID0gQnVmZmVyLmZyb20oYCR7Y2xpZW50X2lkfToke2NsaWVudF9zZWNyZXR9YCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XHJcbmNvbnN0IFRPS0VOX0VORFBPSU5UID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuYDtcclxuY29uc3QgUExBWUxJU1RTX0VORFBPSU5UID0gXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5bGlzdHNcIjtcclxuY29uc3QgQ1VSUkVOVExZX1BMQVlJTkdfRU5EUE9JTlQgPVxyXG4gIFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL2N1cnJlbnRseS1wbGF5aW5nXCI7XHJcblxyXG5jb25zdCBnZXRBY2Nlc3NUb2tlbiA9IGFzeW5jIChyZWZyZXNoX3Rva2VuKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChUT0tFTl9FTkRQT0lOVCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7YmFzaWN9YCxcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCIsXHJcbiAgICAgIHJlZnJlc2hfdG9rZW4sXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2Vyc1BsYXlsaXN0cyA9IGFzeW5jIChyZWZyZXNoX3Rva2VuKSA9PiB7XHJcbiAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKHJlZnJlc2hfdG9rZW4pO1xyXG4gIHJldHVybiBmZXRjaChQTEFZTElTVFNfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50bHlQbGF5aW5nID0gYXN5bmMgKHJlZnJlc2hfdG9rZW4pID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVmcmVzaF90b2tlbik7XHJcbiAgcmV0dXJuIGZldGNoKENVUlJFTlRMWV9QTEFZSU5HX0VORFBPSU5ULCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwiYmFzaWMiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJUT0tFTl9FTkRQT0lOVCIsIlBMQVlMSVNUU19FTkRQT0lOVCIsIkNVUlJFTlRMWV9QTEFZSU5HX0VORFBPSU5UIiwiZ2V0QWNjZXNzVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIlVSTFNlYXJjaFBhcmFtcyIsImdyYW50X3R5cGUiLCJqc29uIiwiZ2V0VXNlcnNQbGF5bGlzdHMiLCJhY2Nlc3NfdG9rZW4iLCJnZXRDdXJyZW50bHlQbGF5aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/lib/spotify.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/playing.js"));
module.exports = __webpack_exports__;

})();