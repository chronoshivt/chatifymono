"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _containers_Rooms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Rooms */ \"./containers/Rooms.tsx\");\n/* harmony import */ var _containers_Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/Messages */ \"./containers/Messages.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSetUsername = function handleSetUsername() {\n        var value = usernameRef.current.value;\n        if (!value) {\n            return;\n        }\n        setUsername(value);\n        localStorage.setItem(\"username\", value);\n    };\n    var ref, ref1;\n    _s();\n    //Socket\n    var ref2 = (0,_context_socket_context__WEBPACK_IMPORTED_MODULE_2__.useSockets)(), socket = ref2.socket, username = ref2.username, setUsername = ref2.setUsername;\n    var usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    //Spotify Session\n    var ref3 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(), session = ref3.data;\n    console.log(session);\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), list = ref4[0], setList = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}), playing = ref5[0], setPlaying = ref5[1];\n    var getMyPlaylists = function() {\n        var _ref = _asyncToGenerator(C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, items;\n            return C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/playlists\");\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        items = _ctx.sent.items;\n                        setList(items);\n                        console.log(list);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMyPlaylists() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getMyPlaying = function() {\n        var _ref = _asyncToGenerator(C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, items;\n            return C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/playing\");\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        items = _ctx.sent;\n                        setPlaying(items);\n                        console.log(playing);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMyPlaying() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (usernameRef) usernameRef.current.value = localStorage.getItem(\"username\") || \"\";\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \" h-screen\",\n        children: [\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    \"Signed in as \",\n                    session === null || session === void 0 ? void 0 : (ref = session.token) === null || ref === void 0 ? void 0 : ref.email,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 48\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                        },\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    \"User: \",\n                    session === null || session === void 0 ? void 0 : (ref1 = session.token) === null || ref1 === void 0 ? void 0 : ref1.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 bg-purple-400\",\n                        onClick: getMyPlaylists,\n                        children: \"My playlists\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 bg-emerald-400\",\n                        onClick: getMyPlaying,\n                        children: [\n                            \" \",\n                            \"Currently playing\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    \"Not signed in \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)();\n                        },\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            !username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        placeholder: \"Username\",\n                        ref: usernameRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleSetUsername,\n                        children: \"START\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, this),\n            username && session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-green-300 flex h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_containers_Rooms__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: \"flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_containers_Messages__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"GNymh5anUhecnFsTDB8pbpkvDgk=\", false, function() {\n    return [\n        _context_socket_context__WEBPACK_IMPORTED_MODULE_2__.useSockets,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07d0JBQUNDLE9BQU8sRUFBRTlCLGlCQUFpQjtrQ0FBRSxPQUFLOzs7Ozs0QkFBUzs7Ozs7O29CQUM5QztZQUVQUyxRQUFRLElBQUlGLE9BQU8sa0JBQ2xCLDhEQUFDaUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7a0NBR3pDLDhEQUFDRCxLQUFHO2tDQUNGLDRFQUFDM0IseURBQWM7Ozs7Z0NBQUc7Ozs7OzRCQUNkO2tDQUNOLDhEQUFDc0MsU0FBTzt3QkFBQ1YsU0FBUyxFQUFDLFFBQVE7a0NBQ3pCLDRFQUFDM0IsNERBQWlCOzs7O2dDQUFHOzs7Ozs0QkFDYjs7Ozs7O29CQUNOOzs7Ozs7WUFFSixDQUNOO0NBQ0g7R0F0RnVCQyxJQUFJOztRQUVnQlQsK0RBQVU7UUFJMUJJLHVEQUFVOzs7QUFOZEssS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVNvY2tldHMgfSBmcm9tIFwiLi4vY29udGV4dC9zb2NrZXQuY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmltcG9ydCBSb29tc0NvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9Sb29tc1wiO1xuaW1wb3J0IE1lc3NhZ2VzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL01lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vU29ja2V0XG4gIGNvbnN0IHsgc29ja2V0LCB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfSA9IHVzZVNvY2tldHMoKTtcbiAgY29uc3QgdXNlcm5hbWVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy9TcG90aWZ5IFNlc3Npb25cbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2V0VXNlcm5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB1c2VybmFtZVJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRVc2VybmFtZSh2YWx1ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCB2YWx1ZSk7XG4gIH1cblxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBnZXRNeVBsYXlsaXN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcGxheWxpc3RzXCIpO1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0TGlzdChpdGVtcyk7XG4gICAgY29uc29sZS5sb2cobGlzdCk7XG4gIH07XG4gIGNvbnN0IGdldE15UGxheWluZyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcGxheWluZ1wiKTtcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0UGxheWluZyhpdGVtcyk7XG4gICAgY29uc29sZS5sb2cocGxheWluZyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcm5hbWVSZWYpXG4gICAgICB1c2VybmFtZVJlZi5jdXJyZW50LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKSB8fCBcIlwiO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLXNjcmVlblwiPlxuICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIFNpZ25lZCBpbiBhcyB7c2Vzc2lvbj8udG9rZW4/LmVtYWlsfSA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBVc2VyOiB7c2Vzc2lvbj8udG9rZW4/Lm5hbWV9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctcHVycGxlLTQwMFwiIG9uQ2xpY2s9e2dldE15UGxheWxpc3RzfT5cbiAgICAgICAgICAgIE15IHBsYXlsaXN0c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWVtZXJhbGQtNDAwXCIgb25DbGljaz17Z2V0TXlQbGF5aW5nfT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIEN1cnJlbnRseSBwbGF5aW5nXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHshc2Vzc2lvbiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIGluPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHshdXNlcm5hbWUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHJlZj17dXNlcm5hbWVSZWZ9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZXRVc2VybmFtZX0+U1RBUlQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3VzZXJuYW1lICYmIHNlc3Npb24gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTMwMCBmbGV4IGgtc2NyZWVuXCI+XG4gICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0TXlQbGF5bGlzdHMoKX0+UExBWUxJU1Q8L2J1dHRvbj4gKi99XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFJvb21zQ29udGFpbmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICA8TWVzc2FnZXNDb250YWluZXIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTb2NrZXRzIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIlJvb21zQ29udGFpbmVyIiwiTWVzc2FnZXNDb250YWluZXIiLCJIb21lIiwiaGFuZGxlU2V0VXNlcm5hbWUiLCJ2YWx1ZSIsInVzZXJuYW1lUmVmIiwiY3VycmVudCIsInNldFVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNlc3Npb24iLCJzb2NrZXQiLCJ1c2VybmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsInNldExpc3QiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImdldE15UGxheWxpc3RzIiwicmVzIiwiaXRlbXMiLCJmZXRjaCIsImpzb24iLCJnZXRNeVBsYXlpbmciLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9rZW4iLCJlbWFpbCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsIm5hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwicmVmIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});