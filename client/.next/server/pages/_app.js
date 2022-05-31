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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/default.ts":
/*!***************************!*\
  !*** ./config/default.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SOCKET_URL\": () => (/* binding */ SOCKET_URL)\n/* harmony export */ });\nconst SOCKET_URL = process.env.SOCKET_URL || \"http://localhost:4000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZGVmYXVsdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsVUFBVSxHQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVUsSUFBSSx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbmZpZy9kZWZhdWx0LnRzPzVjMTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNPQ0tFVF9VUkwgPVxyXG4gIHByb2Nlc3MuZW52LlNPQ0tFVF9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIjtcclxuIl0sIm5hbWVzIjpbIlNPQ0tFVF9VUkwiLCJwcm9jZXNzIiwiZW52Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/default.ts\n");

/***/ }),

/***/ "./config/events.ts":
/*!**************************!*\
  !*** ./config/events.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst EVENTS = {\n    connection: \"connection\",\n    CLIENT: {\n        CREATE_ROOM: \"CREATE_ROOM\",\n        SEND_ROOM_MESSAGE: \"SEND_ROOM_MESSAGE\",\n        JOIN_ROOM: \"JOIN_ROOM\",\n        LEAVE_ROOM: \"EVENTS.CLIENT.LEAVE_ROOM\"\n    },\n    SERVER: {\n        ROOMS: \"ROOMS\",\n        JOINED_ROOM: \"JOINED_ROOM\",\n        ROOM_MESSAGE: \"ROOM_MESSAGE\",\n        LEFT_ROOM: \"LEFT_ROOM\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EVENTS);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZXZlbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUc7SUFDYkMsVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE1BQU0sRUFBRTtRQUNOQyxXQUFXLEVBQUUsYUFBYTtRQUMxQkMsaUJBQWlCLEVBQUUsbUJBQW1CO1FBQ3RDQyxTQUFTLEVBQUUsV0FBVztRQUN0QkMsVUFBVSxFQUFFLDBCQUEwQjtLQUN2QztJQUNEQyxNQUFNLEVBQUU7UUFDTkMsS0FBSyxFQUFFLE9BQU87UUFDZEMsV0FBVyxFQUFFLGFBQWE7UUFDMUJDLFlBQVksRUFBRSxjQUFjO1FBQzVCQyxTQUFTLEVBQUUsV0FBVztLQUN2QjtDQUNGO0FBRUQsaUVBQWVYLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbmZpZy9ldmVudHMudHM/NmFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFVkVOVFMgPSB7XHJcbiAgY29ubmVjdGlvbjogXCJjb25uZWN0aW9uXCIsXHJcbiAgQ0xJRU5UOiB7XHJcbiAgICBDUkVBVEVfUk9PTTogXCJDUkVBVEVfUk9PTVwiLFxyXG4gICAgU0VORF9ST09NX01FU1NBR0U6IFwiU0VORF9ST09NX01FU1NBR0VcIixcclxuICAgIEpPSU5fUk9PTTogXCJKT0lOX1JPT01cIixcclxuICAgIExFQVZFX1JPT006IFwiRVZFTlRTLkNMSUVOVC5MRUFWRV9ST09NXCIsXHJcbiAgfSxcclxuICBTRVJWRVI6IHtcclxuICAgIFJPT01TOiBcIlJPT01TXCIsXHJcbiAgICBKT0lORURfUk9PTTogXCJKT0lORURfUk9PTVwiLFxyXG4gICAgUk9PTV9NRVNTQUdFOiBcIlJPT01fTUVTU0FHRVwiLFxyXG4gICAgTEVGVF9ST09NOiBcIkxFRlRfUk9PTVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFVkVOVFM7XHJcbiJdLCJuYW1lcyI6WyJFVkVOVFMiLCJjb25uZWN0aW9uIiwiQ0xJRU5UIiwiQ1JFQVRFX1JPT00iLCJTRU5EX1JPT01fTUVTU0FHRSIsIkpPSU5fUk9PTSIsIkxFQVZFX1JPT00iLCJTRVJWRVIiLCJST09NUyIsIkpPSU5FRF9ST09NIiwiUk9PTV9NRVNTQUdFIiwiTEVGVF9ST09NIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/events.ts\n");

/***/ }),

/***/ "./context/socket.context.tsx":
/*!************************************!*\
  !*** ./context/socket.context.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSockets\": () => (/* binding */ useSockets),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/default */ \"./config/default.ts\");\n/* harmony import */ var _config_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/events */ \"./config/events.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_config_default__WEBPACK_IMPORTED_MODULE_3__.SOCKET_URL);\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    socket,\n    setUsername: ()=>false\n    ,\n    setMessages: ()=>false\n    ,\n    rooms: {},\n    messages: []\n});\nfunction SocketsProvider(props) {\n    const { 0: username1 , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: roomId , 1: setRoomId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: rooms , 1: setRooms  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: messages , 1: setMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.onfocus = function() {\n            document.title = \"Chatify :D\";\n        };\n    }, []);\n    socket.on(_config_events__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SERVER.ROOMS, (value)=>{\n        setRooms(value);\n    });\n    socket.on(_config_events__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SERVER.JOINED_ROOM, (value)=>{\n        setRoomId(value);\n        setMessages([]);\n    });\n    socket.on(_config_events__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SERVER.ROOM_MESSAGE, ({ message , username , time  })=>{\n        if (!document.hasFocus()) {\n            document.title = \"new message..!\";\n        }\n        setMessages([\n            ...messages,\n            {\n                message,\n                username,\n                time\n            }\n        ]);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: {\n            socket,\n            username: username1,\n            setUsername,\n            rooms,\n            roomId,\n            messages,\n            setMessages\n        },\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\context\\\\socket.context.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\nconst useSockets = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketsProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NvY2tldC5jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2RDtBQUNmO0FBQ0M7QUFDZDtBQUNLO0FBV3RDLE1BQU1PLE1BQU0sR0FBR0osNERBQUUsQ0FBQ0MsdURBQVUsQ0FBQztBQUU3QixNQUFNSSxhQUFhLGlCQUFHUixvREFBYSxDQUFVO0lBQzNDTyxNQUFNO0lBQ05FLFdBQVcsRUFBRSxJQUFNLEtBQUs7SUFBQTtJQUN4QkMsV0FBVyxFQUFFLElBQU0sS0FBSztJQUFBO0lBQ3hCQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFFRixTQUFTQyxlQUFlLENBQUNDLEtBQVUsRUFBRTtJQUNuQyxNQUFNLEVBMUJSLEdBMEJTQyxTQUFRLEdBMUJqQixHQTBCbUJOLFdBQVcsTUFBSUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDNUMsTUFBTSxFQTNCUixHQTJCU1csTUFBTSxHQTNCZixHQTJCaUJDLFNBQVMsTUFBSVosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSxFQTVCUixHQTRCU00sS0FBSyxHQTVCZCxHQTRCZ0JPLFFBQVEsTUFBSWIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxFQTdCUixHQTZCU08sUUFBUSxHQTdCakIsR0E2Qm1CRixXQUFXLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTVDSCxnREFBUyxDQUFDLElBQU07UUFDZGlCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFdBQVk7WUFDM0JDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLFlBQVksQ0FBQztTQUMvQixDQUFDO0tBQ0gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQZixNQUFNLENBQUNnQixFQUFFLENBQUNqQixtRUFBbUIsRUFBRSxDQUFDb0IsS0FBSyxHQUFLO1FBQ3hDUixRQUFRLENBQUNRLEtBQUssQ0FBQyxDQUFDO0tBQ2pCLENBQUMsQ0FBQztJQUNIbkIsTUFBTSxDQUFDZ0IsRUFBRSxDQUFDakIseUVBQXlCLEVBQUUsQ0FBQ29CLEtBQUssR0FBSztRQUM5Q1QsU0FBUyxDQUFDUyxLQUFLLENBQUMsQ0FBQztRQUNqQmhCLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQixDQUFDLENBQUM7SUFFSEgsTUFBTSxDQUFDZ0IsRUFBRSxDQUFDakIsMEVBQTBCLEVBQUUsQ0FBQyxFQUFFdUIsT0FBTyxHQUFFZCxRQUFRLEdBQUVlLElBQUksR0FBRSxHQUFLO1FBQ3JFLElBQUksQ0FBQ1QsUUFBUSxDQUFDVSxRQUFRLEVBQUUsRUFBRTtZQUN4QlYsUUFBUSxDQUFDQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7U0FDbkM7UUFFRFosV0FBVyxDQUFDO2VBQUlFLFFBQVE7WUFBRTtnQkFBRWlCLE9BQU87Z0JBQUVkLFFBQVE7Z0JBQUVlLElBQUk7YUFBRTtTQUFDLENBQUMsQ0FBQztLQUN6RCxDQUFDLENBQUM7SUFDSCxxQkFDRSw4REFBQ3RCLGFBQWEsQ0FBQ3dCLFFBQVE7UUFDckJOLEtBQUssRUFBRTtZQUNMbkIsTUFBTTtZQUNOUSxRQUFRLEVBQVJBLFNBQVE7WUFDUk4sV0FBVztZQUNYRSxLQUFLO1lBQ0xLLE1BQU07WUFDTkosUUFBUTtZQUNSRixXQUFXO1NBQ1o7UUFDQSxHQUFHSSxLQUFLOzs7OztZQUNULENBQ0Y7Q0FDSDtBQUVNLE1BQU1tQixVQUFVLEdBQUcsSUFBTWhDLGlEQUFVLENBQUNPLGFBQWEsQ0FBQztBQUFBLENBQUM7QUFFMUQsaUVBQWVLLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvc29ja2V0LmNvbnRleHQudHN4PzUwMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbywgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBTT0NLRVRfVVJMIH0gZnJvbSBcIi4uL2NvbmZpZy9kZWZhdWx0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFVkVOVFMgZnJvbSBcIi4uL2NvbmZpZy9ldmVudHNcIjtcclxuaW50ZXJmYWNlIENvbnRleHQge1xyXG4gIHNvY2tldDogU29ja2V0O1xyXG4gIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIHNldFVzZXJuYW1lOiBGdW5jdGlvbjtcclxuICBtZXNzYWdlcz86IHsgbWVzc2FnZTogc3RyaW5nOyB0aW1lOiBzdHJpbmc7IHVzZXJuYW1lOiBzdHJpbmcgfVtdO1xyXG4gIHNldE1lc3NhZ2VzOiBGdW5jdGlvbjtcclxuICByb29tSWQ/OiBzdHJpbmc7XHJcbiAgcm9vbXM6IG9iamVjdDtcclxufVxyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oU09DS0VUX1VSTCk7XHJcblxyXG5jb25zdCBTb2NrZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0Pih7XHJcbiAgc29ja2V0LFxyXG4gIHNldFVzZXJuYW1lOiAoKSA9PiBmYWxzZSxcclxuICBzZXRNZXNzYWdlczogKCkgPT4gZmFsc2UsXHJcbiAgcm9vbXM6IHt9LFxyXG4gIG1lc3NhZ2VzOiBbXSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBTb2NrZXRzUHJvdmlkZXIocHJvcHM6IGFueSkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jvb21JZCwgc2V0Um9vbUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyb29tcywgc2V0Um9vbXNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJDaGF0aWZ5IDpEXCI7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgc29ja2V0Lm9uKEVWRU5UUy5TRVJWRVIuUk9PTVMsICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Um9vbXModmFsdWUpO1xyXG4gIH0pO1xyXG4gIHNvY2tldC5vbihFVkVOVFMuU0VSVkVSLkpPSU5FRF9ST09NLCAodmFsdWUpID0+IHtcclxuICAgIHNldFJvb21JZCh2YWx1ZSk7XHJcbiAgICBzZXRNZXNzYWdlcyhbXSk7XHJcbiAgfSk7XHJcblxyXG4gIHNvY2tldC5vbihFVkVOVFMuU0VSVkVSLlJPT01fTUVTU0FHRSwgKHsgbWVzc2FnZSwgdXNlcm5hbWUsIHRpbWUgfSkgPT4ge1xyXG4gICAgaWYgKCFkb2N1bWVudC5oYXNGb2N1cygpKSB7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJuZXcgbWVzc2FnZS4uIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgeyBtZXNzYWdlLCB1c2VybmFtZSwgdGltZSB9XSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTb2NrZXRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc29ja2V0LFxyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHNldFVzZXJuYW1lLFxyXG4gICAgICAgIHJvb21zLFxyXG4gICAgICAgIHJvb21JZCxcclxuICAgICAgICBtZXNzYWdlcyxcclxuICAgICAgICBzZXRNZXNzYWdlcyxcclxuICAgICAgfX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU29ja2V0cyA9ICgpID0+IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NrZXRzUHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImlvIiwiU09DS0VUX1VSTCIsInVzZVN0YXRlIiwiRVZFTlRTIiwic29ja2V0IiwiU29ja2V0Q29udGV4dCIsInNldFVzZXJuYW1lIiwic2V0TWVzc2FnZXMiLCJyb29tcyIsIm1lc3NhZ2VzIiwiU29ja2V0c1Byb3ZpZGVyIiwicHJvcHMiLCJ1c2VybmFtZSIsInJvb21JZCIsInNldFJvb21JZCIsInNldFJvb21zIiwid2luZG93Iiwib25mb2N1cyIsImRvY3VtZW50IiwidGl0bGUiLCJvbiIsIlNFUlZFUiIsIlJPT01TIiwidmFsdWUiLCJKT0lORURfUk9PTSIsIlJPT01fTUVTU0FHRSIsIm1lc3NhZ2UiLCJ0aW1lIiwiaGFzRm9jdXMiLCJQcm92aWRlciIsInVzZVNvY2tldHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/socket.context.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_socket_context__WEBPACK_IMPORTED_MODULE_2__]);\n_context_socket_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_socket_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\Desktop\\\\chatify\\\\client\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ3lCO0FBQ047QUFFbEQsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFHRCxTQUFTLEVBQUUsR0FBRSxFQUFFO0lBQ2xFLHFCQUNFLDhEQUFDSCw0REFBZTtRQUFDSSxPQUFPLEVBQUVBLE9BQU87a0JBQy9CLDRFQUFDTCwrREFBZTtzQkFDZCw0RUFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1o7Ozs7O1lBQ0YsQ0FDbEI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFNvY2tldHNQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9zb2NrZXQuY29udGV4dFwiO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPFNvY2tldHNQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Tb2NrZXRzUHJvdmlkZXI+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlNvY2tldHNQcm92aWRlciIsIlNlc3Npb25Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();