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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _containers_Rooms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Rooms */ \"./containers/Rooms.tsx\");\n/* harmony import */ var _containers_Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Messages */ \"./containers/Messages.tsx\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSetUsername = function handleSetUsername() {\n        var value = usernameRef.current.value;\n        if (!value) {\n            return;\n        }\n        setUsername(value);\n        localStorage.setItem(\"username\", value);\n    };\n    var ref, ref1;\n    _s();\n    //Socket\n    var ref2 = (0,_context_socket_context__WEBPACK_IMPORTED_MODULE_1__.useSockets)(), socket = ref2.socket, username = ref2.username, setUsername = ref2.setUsername;\n    var usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    //Spotify Session\n    var ref3 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref3.data;\n    console.log(session);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (usernameRef) usernameRef.current.value = localStorage.getItem(\"username\") || \"\";\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-screen\",\n        children: [\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"Signed in as \",\n                    session === null || session === void 0 ? void 0 : (ref = session.token) === null || ref === void 0 ? void 0 : ref.email,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 48\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n                        },\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    \"Playing \",\n                    session === null || session === void 0 ? void 0 : (ref1 = session.token) === null || ref1 === void 0 ? void 0 : ref1.name\n                ]\n            }, void 0, true),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"Not signed in \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)();\n                        },\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            !username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Username\",\n                        ref: usernameRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSetUsername,\n                        children: \"START\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this),\n            username && session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-green-300 flex h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_Rooms__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_Messages__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"UriYBdqd1OXBQs5ifsaOlEnUFBk=\", false, function() {\n    return [\n        _context_socket_context__WEBPACK_IMPORTED_MODULE_1__.useSockets,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0QsS0FBRztrQ0FDRiw0RUFBQ2pCLHlEQUFjOzs7O2dDQUFHOzs7Ozs0QkFDZDtrQ0FDTiw4REFBQzRCLFNBQU87d0JBQUNWLFNBQVMsRUFBQyxRQUFRO2tDQUN6Qiw0RUFBQ2pCLDREQUFpQjs7OztnQ0FBRzs7Ozs7NEJBQ2I7Ozs7OztvQkFDTjs7Ozs7O1lBRUosQ0FDTjtDQUNIO0dBN0R1QkMsSUFBSTs7UUFFZ0JSLCtEQUFVO1FBSTFCRyx1REFBVTs7O0FBTmRLLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTb2NrZXRzIH0gZnJvbSBcIi4uL2NvbnRleHQvc29ja2V0LmNvbnRleHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmltcG9ydCBSb29tc0NvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9Sb29tc1wiO1xuaW1wb3J0IE1lc3NhZ2VzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL01lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vU29ja2V0XG4gIGNvbnN0IHsgc29ja2V0LCB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfSA9IHVzZVNvY2tldHMoKTtcbiAgY29uc3QgdXNlcm5hbWVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy9TcG90aWZ5IFNlc3Npb25cbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2V0VXNlcm5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB1c2VybmFtZVJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRVc2VybmFtZSh2YWx1ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCB2YWx1ZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VybmFtZVJlZilcbiAgICAgIHVzZXJuYW1lUmVmLmN1cnJlbnQudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpIHx8IFwiXCI7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtc2NyZWVuXCI+XG4gICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uPy50b2tlbj8uZW1haWx9IDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFBsYXlpbmcge3Nlc3Npb24/LnRva2VuPy5uYW1lfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIE5vdCBzaWduZWQgaW4gPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IXVzZXJuYW1lICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiByZWY9e3VzZXJuYW1lUmVmfSAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2V0VXNlcm5hbWV9PlNUQVJUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHt1c2VybmFtZSAmJiBzZXNzaW9uICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgZmxleCBoLXNjcmVlblwiPlxuICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE15UGxheWxpc3RzKCl9PlBMQVlMSVNUPC9idXR0b24+ICovfVxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSb29tc0NvbnRhaW5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPE1lc3NhZ2VzQ29udGFpbmVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU29ja2V0cyIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiUm9vbXNDb250YWluZXIiLCJNZXNzYWdlc0NvbnRhaW5lciIsIkhvbWUiLCJoYW5kbGVTZXRVc2VybmFtZSIsInZhbHVlIiwidXNlcm5hbWVSZWYiLCJjdXJyZW50Iiwic2V0VXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2Vzc2lvbiIsInNvY2tldCIsInVzZXJuYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9rZW4iLCJlbWFpbCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsIm5hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwicmVmIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});