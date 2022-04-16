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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _containers_Rooms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Rooms */ \"./containers/Rooms.tsx\");\n/* harmony import */ var _containers_Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Messages */ \"./containers/Messages.tsx\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSetUsername = function handleSetUsername() {\n        var value = usernameRef.current.value;\n        if (!value) {\n            return;\n        }\n        setUsername(value);\n        localStorage.setItem(\"username\", value);\n    };\n    _s();\n    //Socket\n    var ref = (0,_context_socket_context__WEBPACK_IMPORTED_MODULE_1__.useSockets)(), socket = ref.socket, username = ref.username, setUsername = ref.setUsername;\n    var usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    //Spotify Session\n    var ref1 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref1.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (usernameRef) usernameRef.current.value = localStorage.getItem(\"username\") || \"\";\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-screen\",\n        children: [\n            !username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Username\",\n                        ref: usernameRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSetUsername,\n                        children: \"START\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-green-300 flex h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_Rooms__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_Messages__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"UriYBdqd1OXBQs5ifsaOlEnUFBk=\", false, function() {\n    return [\n        _context_socket_context__WEBPACK_IMPORTED_MODULE_1__.useSockets,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR3VEO0FBQ2I7QUFDb0I7QUFFYjtBQUNNOztBQUV4QyxTQUFTTSxJQUFJLEdBQUc7UUFRcEJDLGlCQUFpQixHQUExQixTQUFTQSxpQkFBaUIsR0FBRztRQUMzQixJQUFNQyxLQUFLLEdBQUdDLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDRixLQUFLO1FBQ3ZDLElBQUksQ0FBQ0EsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRURHLFdBQVcsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7UUFDbkJJLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsRUFBRUwsS0FBSyxDQUFDLENBQUM7S0FDekM7O0lBZkQsUUFBUTtJQUNSLElBQTBDUixHQUFZLEdBQVpBLG1FQUFVLEVBQUUsRUFBOUNjLE1BQU0sR0FBNEJkLEdBQVksQ0FBOUNjLE1BQU0sRUFBRUMsUUFBUSxHQUFrQmYsR0FBWSxDQUF0Q2UsUUFBUSxFQUFFSixXQUFXLEdBQUtYLEdBQVksQ0FBNUJXLFdBQVc7SUFDckMsSUFBTUYsV0FBVyxHQUFHUCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUVoQyxpQkFBaUI7SUFDakIsSUFBMEJDLElBQVksR0FBWkEsMkRBQVUsRUFBRSxFQUE5QmEsT0FBYSxHQUFLYixJQUFZLENBQTlCYSxJQUFJO0lBWVpmLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlRLFdBQVcsRUFDYkEsV0FBVyxDQUFDQyxPQUFPLENBQUNGLEtBQUssR0FBR0ksWUFBWSxDQUFDTSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVzs7WUFDdkIsQ0FBQ0wsUUFBUSxrQkFDUiw4REFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs7a0NBQ2xDLDhEQUFDQyxPQUFLO3dCQUFDQyxXQUFXLEVBQUMsVUFBVTt3QkFBQ0MsR0FBRyxFQUFFZCxXQUFXOzs7Ozs0QkFBSTtrQ0FDbEQsOERBQUNlLFFBQU07d0JBQUNDLE9BQU8sRUFBRWxCLGlCQUFpQjtrQ0FBRSxPQUFLOzs7Ozs0QkFBUzs7Ozs7O29CQUM5QztZQUVQUSxRQUFRLGtCQUNQLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNEJBQTRCOztrQ0FHekMsOERBQUNELEtBQUc7a0NBQ0YsNEVBQUNmLHlEQUFjOzs7O2dDQUFHOzs7Ozs0QkFDZDtrQ0FDTiw4REFBQ3NCLFNBQU87d0JBQUNOLFNBQVMsRUFBQyxRQUFRO2tDQUN6Qiw0RUFBQ2YsNERBQWlCOzs7O2dDQUFHOzs7Ozs0QkFDYjs7Ozs7O29CQUNOOzs7Ozs7WUFFSixDQUNOO0NBQ0g7R0E3Q3VCQyxJQUFJOztRQUVnQk4sK0RBQVU7UUFJMUJHLHVEQUFVOzs7QUFOZEcsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVNvY2tldHMgfSBmcm9tIFwiLi4vY29udGV4dC9zb2NrZXQuY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuaW1wb3J0IFJvb21zQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1Jvb21zXCI7XG5pbXBvcnQgTWVzc2FnZXNDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvTWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy9Tb2NrZXRcbiAgY29uc3QgeyBzb2NrZXQsIHVzZXJuYW1lLCBzZXRVc2VybmFtZSB9ID0gdXNlU29ja2V0cygpO1xuICBjb25zdCB1c2VybmFtZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvL1Nwb3RpZnkgU2Vzc2lvblxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZXRVc2VybmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHVzZXJuYW1lUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFVzZXJuYW1lKHZhbHVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHZhbHVlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJuYW1lUmVmKVxuICAgICAgdXNlcm5hbWVSZWYuY3VycmVudC52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikgfHwgXCJcIjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgaC1zY3JlZW5cIj5cbiAgICAgIHshdXNlcm5hbWUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHJlZj17dXNlcm5hbWVSZWZ9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZXRVc2VybmFtZX0+U1RBUlQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3VzZXJuYW1lICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgZmxleCBoLXNjcmVlblwiPlxuICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE15UGxheWxpc3RzKCl9PlBMQVlMSVNUPC9idXR0b24+ICovfVxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSb29tc0NvbnRhaW5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPE1lc3NhZ2VzQ29udGFpbmVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU29ja2V0cyIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVNlc3Npb24iLCJSb29tc0NvbnRhaW5lciIsIk1lc3NhZ2VzQ29udGFpbmVyIiwiSG9tZSIsImhhbmRsZVNldFVzZXJuYW1lIiwidmFsdWUiLCJ1c2VybmFtZVJlZiIsImN1cnJlbnQiLCJzZXRVc2VybmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzb2NrZXQiLCJ1c2VybmFtZSIsImRhdGEiLCJzZXNzaW9uIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});