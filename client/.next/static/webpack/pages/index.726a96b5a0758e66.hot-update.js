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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _containers_Rooms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Rooms */ \"./containers/Rooms.tsx\");\n/* harmony import */ var _containers_Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/Messages */ \"./containers/Messages.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSetUsername = function handleSetUsername() {\n        var value = usernameRef.current.value;\n        if (!value) {\n            return;\n        }\n        setUsername(value);\n        localStorage.setItem(\"username\", value);\n    };\n    var ref, ref1, ref2;\n    _s();\n    //Socket\n    var ref3 = (0,_context_socket_context__WEBPACK_IMPORTED_MODULE_2__.useSockets)(), socket = ref3.socket, username = ref3.username, setUsername = ref3.setUsername;\n    var usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    //Spotify Session\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(), session = ref4.data;\n    console.log(session);\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), list = ref5[0], setList = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}), playing = ref6[0], setPlaying = ref6[1];\n    var getMyPlaylists = function() {\n        var _ref = _asyncToGenerator(C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, items;\n            return C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/playlists\");\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        items = _ctx.sent.items;\n                        setList(items);\n                        console.log(list);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMyPlaylists() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getMyPlaying = function() {\n        var _ref = _asyncToGenerator(C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, items;\n            return C_Users_phill_Desktop_chatify_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/playing\");\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        items = _ctx.sent;\n                        setPlaying(items);\n                        console.log(playing);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMyPlaying() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (usernameRef) usernameRef.current.value = localStorage.getItem(\"username\") || \"\";\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \" h-screen\",\n        children: [\n            session && !username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    \"Signed in as \",\n                    session === null || session === void 0 ? void 0 : (ref = session.token) === null || ref === void 0 ? void 0 : ref.email,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 48\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                        },\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    \"User: \",\n                    session === null || session === void 0 ? void 0 : (ref1 = session.token) === null || ref1 === void 0 ? void 0 : ref1.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 bg-purple-400\",\n                        onClick: getMyPlaylists,\n                        children: \"My playlists\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 bg-emerald-400\",\n                        onClick: getMyPlaying,\n                        children: [\n                            \" \",\n                            \"Currently playing\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Song Title: \",\n                            playing === null || playing === void 0 ? void 0 : (ref2 = playing.item) === null || ref2 === void 0 ? void 0 : ref2.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    \"Not signed in \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)();\n                        },\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            !username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        placeholder: \"Username\",\n                        ref: usernameRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleSetUsername,\n                        children: \"START\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this),\n            username && session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-green-300 flex h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Status:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_containers_Rooms__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: \"flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_containers_Messages__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"GNymh5anUhecnFsTDB8pbpkvDgk=\", false, function() {\n    return [\n        _context_socket_context__WEBPACK_IMPORTED_MODULE_2__.useSockets,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdUQ7QUFDSDtBQUNVO0FBRWI7QUFDTTs7QUFFeEMsU0FBU1MsSUFBSSxHQUFHO1FBVXBCQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCLEdBQUc7UUFDM0IsSUFBTUMsS0FBSyxHQUFHQyxXQUFXLENBQUNDLE9BQU8sQ0FBQ0YsS0FBSztRQUN2QyxJQUFJLENBQUNBLEtBQUssRUFBRTtZQUNWLE9BQU87U0FDUjtRQUVERyxXQUFXLENBQUNILEtBQUssQ0FBQyxDQUFDO1FBQ25CSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLEVBQUVMLEtBQUssQ0FBQyxDQUFDO0tBQ3pDO1FBMkJxQk0sR0FBYyxFQUdyQkEsSUFBYyxFQVVMQyxJQUFhOztJQXpEckMsUUFBUTtJQUNSLElBQTBDbEIsSUFBWSxHQUFaQSxtRUFBVSxFQUFFLEVBQTlDbUIsTUFBTSxHQUE0Qm5CLElBQVksQ0FBOUNtQixNQUFNLEVBQUVDLFFBQVEsR0FBa0JwQixJQUFZLENBQXRDb0IsUUFBUSxFQUFFTixXQUFXLEdBQUtkLElBQVksQ0FBNUJjLFdBQVc7SUFDckMsSUFBTUYsV0FBVyxHQUFHViw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUVoQyxpQkFBaUI7SUFDakIsSUFBMEJFLElBQVksR0FBWkEsMkRBQVUsRUFBRSxFQUE5QmlCLE9BQWEsR0FBS2pCLElBQVksQ0FBOUJpQixJQUFJO0lBRVpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixPQUFPLENBQUMsQ0FBQztJQVlyQixJQUF3QmQsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQTlCdEMsSUE4QmEsR0FBYUEsSUFBWSxHQUF6QixFQTlCYixPQThCc0IsR0FBSUEsSUFBWSxHQUFoQjtJQUNwQixJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQS9CNUMsT0ErQmdCLEdBQWdCQSxJQUFZLEdBQTVCLEVBL0JoQixVQStCNEIsR0FBSUEsSUFBWSxHQUFoQjtJQUUxQixJQUFNd0IsY0FBYzttQkFBRyxxTEFBWTtnQkFDM0JDLEdBQUcsRUFDREMsS0FBSzs7Ozs7K0JBREtDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7d0JBQW5DRixHQUFHLFlBQWdDOzsrQkFDakJBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFOzt3QkFBNUIsS0FBTyxhQUFMRixLQUFLLENBQXFCO3dCQUNsQ0osT0FBTyxDQUFDSSxLQUFLLENBQUMsQ0FBQzt3QkFDZlAsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDOzs7Ozs7U0FDbkI7d0JBTEtHLGNBQWM7OztPQUtuQjtJQUNELElBQU1LLFlBQVk7bUJBQUcscUxBQVk7Z0JBQ3pCSixHQUFHLEVBQ0hDLEtBQUs7Ozs7OytCQURPQyxLQUFLLENBQUMsY0FBYyxDQUFDOzt3QkFBakNGLEdBQUcsWUFBOEI7OytCQUNuQkEsR0FBRyxDQUFDRyxJQUFJLEVBQUU7O3dCQUF4QkYsS0FBSyxZQUFtQjt3QkFDOUJILFVBQVUsQ0FBQ0csS0FBSyxDQUFDLENBQUM7d0JBQ2xCUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUM7Ozs7OztTQUN0Qjt3QkFMS2MsWUFBWTs7O09BS2pCO0lBRUQvQixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJVyxXQUFXLEVBQ2JBLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDRixLQUFLLEdBQUdJLFlBQVksQ0FBQ2tCLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOztZQUN2QmxCLE9BQU8sSUFBSSxDQUFDRyxRQUFRLGtCQUNuQjs7b0JBQUUsZUFDYTtvQkFBQ0gsT0FBTyxhQUFQQSxPQUFPLFdBQU8sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxDQUFBQSxHQUFjLEdBQWRBLE9BQU8sQ0FBRW1CLEtBQUssY0FBZG5CLEdBQWMsY0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxHQUFjLENBQUVvQixLQUFLO29CQUFDLEdBQUM7a0NBQUEsOERBQUNDLElBQUU7Ozs7NEJBQUc7a0NBQzNDLDhEQUFDQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1sQyx3REFBTyxFQUFFO3lCQUFBO2tDQUFFLFVBQVE7Ozs7OzRCQUFTO2tDQUNuRCw4REFBQ2dDLElBQUU7Ozs7NEJBQUc7b0JBQUEsUUFDQTtvQkFBQ3JCLE9BQU8sYUFBUEEsT0FBTyxXQUFPLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsQ0FBQUEsSUFBYyxHQUFkQSxPQUFPLENBQUVtQixLQUFLLGNBQWRuQixJQUFjLGNBQWRBLEtBQUFBLENBQWMsR0FBZEEsSUFBYyxDQUFFd0IsSUFBSTtrQ0FDM0IsOERBQUNILElBQUU7Ozs7NEJBQUc7a0NBQ04sOERBQUNDLFFBQU07d0JBQUNKLFNBQVMsRUFBQyx5QkFBeUI7d0JBQUNLLE9BQU8sRUFBRWIsY0FBYztrQ0FBRSxjQUVyRTs7Ozs7NEJBQVM7a0NBQ1QsOERBQUNXLElBQUU7Ozs7NEJBQUc7a0NBQ04sOERBQUNDLFFBQU07d0JBQUNKLFNBQVMsRUFBQywwQkFBMEI7d0JBQUNLLE9BQU8sRUFBRVIsWUFBWTs7NEJBQy9ELEdBQUc7NEJBQUMsbUJBRVA7Ozs7Ozs0QkFBUztrQ0FDVCw4REFBQ1UsR0FBQzs7NEJBQUMsY0FBWTs0QkFBQ3hCLE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsQ0FBQUEsSUFBYSxHQUFiQSxPQUFPLENBQUV5QixJQUFJLGNBQWJ6QixJQUFhLGNBQWJBLEtBQUFBLENBQWEsR0FBYkEsSUFBYSxDQUFFdUIsSUFBSTs7Ozs7OzRCQUFLOzs0QkFDdkM7WUFFSixDQUFDeEIsT0FBTyxrQkFDUDs7b0JBQUUsZ0JBQ2M7a0NBQUEsOERBQUNxQixJQUFFOzs7OzRCQUFHO2tDQUNwQiw4REFBQ0MsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNbkMsdURBQU0sRUFBRTt5QkFBQTtrQ0FBRSxTQUFPOzs7Ozs0QkFBUzs7NEJBQ2hEO1lBRUosQ0FBQ2UsUUFBUSxrQkFDUiw4REFBQ2MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs7a0NBQ2xDLDhEQUFDUyxPQUFLO3dCQUFDQyxXQUFXLEVBQUMsVUFBVTt3QkFBQ0MsR0FBRyxFQUFFbEMsV0FBVzs7Ozs7NEJBQUk7a0NBQ2xELDhEQUFDMkIsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFOUIsaUJBQWlCO2tDQUFFLE9BQUs7Ozs7OzRCQUFTOzs7Ozs7b0JBQzlDO1lBRVBVLFFBQVEsSUFBSUgsT0FBTyxrQkFDbEIsOERBQUNpQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNEJBQTRCOztrQ0FFekMsOERBQUNPLEdBQUM7a0NBQUMsU0FBTzs7Ozs7NEJBQUk7a0NBQ2QsOERBQUNSLEtBQUc7a0NBQ0YsNEVBQUMzQix5REFBYzs7OztnQ0FBRzs7Ozs7NEJBQ2Q7a0NBQ04sOERBQUN3QyxTQUFPO3dCQUFDWixTQUFTLEVBQUMsUUFBUTtrQ0FDekIsNEVBQUMzQiw0REFBaUI7Ozs7Z0NBQUc7Ozs7OzRCQUNiOzs7Ozs7b0JBQ047Ozs7OztZQUVKLENBQ047Q0FDSDtHQXZGdUJDLElBQUk7O1FBRWdCVCwrREFBVTtRQUkxQkksdURBQVU7OztBQU5kSyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU29ja2V0cyB9IGZyb20gXCIuLi9jb250ZXh0L3NvY2tldC5jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuaW1wb3J0IFJvb21zQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1Jvb21zXCI7XG5pbXBvcnQgTWVzc2FnZXNDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvTWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy9Tb2NrZXRcbiAgY29uc3QgeyBzb2NrZXQsIHVzZXJuYW1lLCBzZXRVc2VybmFtZSB9ID0gdXNlU29ja2V0cygpO1xuICBjb25zdCB1c2VybmFtZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvL1Nwb3RpZnkgU2Vzc2lvblxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZXRVc2VybmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHVzZXJuYW1lUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFVzZXJuYW1lKHZhbHVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IGdldE15UGxheWxpc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9wbGF5bGlzdHNcIik7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRMaXN0KGl0ZW1zKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgfTtcbiAgY29uc3QgZ2V0TXlQbGF5aW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9wbGF5aW5nXCIpO1xuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRQbGF5aW5nKGl0ZW1zKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5aW5nKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VybmFtZVJlZilcbiAgICAgIHVzZXJuYW1lUmVmLmN1cnJlbnQudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpIHx8IFwiXCI7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtc2NyZWVuXCI+XG4gICAgICB7c2Vzc2lvbiAmJiAhdXNlcm5hbWUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIFNpZ25lZCBpbiBhcyB7c2Vzc2lvbj8udG9rZW4/LmVtYWlsfSA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBVc2VyOiB7c2Vzc2lvbj8udG9rZW4/Lm5hbWV9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctcHVycGxlLTQwMFwiIG9uQ2xpY2s9e2dldE15UGxheWxpc3RzfT5cbiAgICAgICAgICAgIE15IHBsYXlsaXN0c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWVtZXJhbGQtNDAwXCIgb25DbGljaz17Z2V0TXlQbGF5aW5nfT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIEN1cnJlbnRseSBwbGF5aW5nXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHA+U29uZyBUaXRsZToge3BsYXlpbmc/Lml0ZW0/Lm5hbWV9PC9wPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIE5vdCBzaWduZWQgaW4gPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IXVzZXJuYW1lICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiByZWY9e3VzZXJuYW1lUmVmfSAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2V0VXNlcm5hbWV9PlNUQVJUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHt1c2VybmFtZSAmJiBzZXNzaW9uICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgZmxleCBoLXNjcmVlblwiPlxuICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE15UGxheWxpc3RzKCl9PlBMQVlMSVNUPC9idXR0b24+ICovfVxuICAgICAgICAgIDxwPlN0YXR1czo8L3A+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSb29tc0NvbnRhaW5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPE1lc3NhZ2VzQ29udGFpbmVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU29ja2V0cyIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJSb29tc0NvbnRhaW5lciIsIk1lc3NhZ2VzQ29udGFpbmVyIiwiSG9tZSIsImhhbmRsZVNldFVzZXJuYW1lIiwidmFsdWUiLCJ1c2VybmFtZVJlZiIsImN1cnJlbnQiLCJzZXRVc2VybmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXNzaW9uIiwicGxheWluZyIsInNvY2tldCIsInVzZXJuYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0Iiwic2V0TGlzdCIsInNldFBsYXlpbmciLCJnZXRNeVBsYXlsaXN0cyIsInJlcyIsIml0ZW1zIiwiZmV0Y2giLCJqc29uIiwiZ2V0TXlQbGF5aW5nIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsInRva2VuIiwiZW1haWwiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYW1lIiwicCIsIml0ZW0iLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwicmVmIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});