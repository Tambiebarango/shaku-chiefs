"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signin; }\n/* harmony export */ });\n/* harmony import */ var _Users_theodore_dev_shakuchiefs_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_theodore_dev_shakuchiefs_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_theodore_dev_shakuchiefs_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_UI_container_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/container/container */ \"./components/UI/container/container.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/context */ \"./lib/context.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Signin() {\n    _s();\n    var ref = (0,_lib_context__WEBPACK_IMPORTED_MODULE_5__.useAppContext)(), user = ref.user, setUser = ref.setUser;\n    var ref1 = _slicedToArray((0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        'token'\n    ]), 3), cookies = ref1[0], setCookie = ref1[1], removeCookie = ref1[2];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), email1 = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), password1 = ref3[0], setPassword = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), error = ref4[0], setError = ref4[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var signInUser = function() {\n        var _ref = _asyncToGenerator(_Users_theodore_dev_shakuchiefs_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password) {\n            var settings, fetchResponse, data, jwt;\n            return _Users_theodore_dev_shakuchiefs_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        settings = {\n                            method: 'POST',\n                            body: JSON.stringify({\n                                user: {\n                                    email: email,\n                                    password: password\n                                }\n                            }),\n                            headers: {\n                                'Accept': 'application/json',\n                                'Content-Type': 'application/json'\n                            }\n                        };\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return fetch(\"http://localhost:5000/users/sign_in\", settings);\n                    case 4:\n                        fetchResponse = _ctx.sent;\n                        _ctx.next = 7;\n                        return fetchResponse.json();\n                    case 7:\n                        data = _ctx.sent;\n                        _ctx.next = 10;\n                        return fetchResponse.headers.get('Authorization');\n                    case 10:\n                        jwt = _ctx.sent;\n                        if (!data.error) {\n                            localStorage.setItem(\"token\", jwt);\n                            localStorage.setItem(\"username\", data.username);\n                            setUser(data.username);\n                            setCookie('token', jwt);\n                            router.push('/');\n                        } else {\n                            setError(data.error);\n                        }\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        setError(_ctx.t0);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return function signInUser(email, password) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSubmit = function(e, email, password) {\n        e.preventDefault();\n        signInUser(email, password);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UI_container_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Alert, {\n                severity: \"error\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: function(e) {\n                    return handleSubmit(e, email1, password1);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.TextField, {\n                            fullWidth: true,\n                            id: \"outlined-email\",\n                            label: \"Email\",\n                            type: \"email\",\n                            value: email1,\n                            variant: \"outlined\",\n                            margin: \"normal\",\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.TextField, {\n                            fullWidth: true,\n                            id: \"outlined-password\",\n                            label: \"Password\",\n                            type: \"password\",\n                            value: password1,\n                            variant: \"outlined\",\n                            margin: \"normal\",\n                            onChange: function(e) {\n                                return setPassword(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                            type: \"submit\",\n                            color: \"primary\",\n                            variant: \"contained\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                            variant: \"p\",\n                            textAlign: \"center\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"/signup\",\n                                    children: \"Sign up\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 77\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/signin.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this));\n};\n_s(Signin, \"DIgycDzF/jKAH+MRk+xzQ3PD9a4=\", false, function() {\n    return [\n        _lib_context__WEBPACK_IMPORTED_MODULE_5__.useAppContext,\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Signin;\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQUNKLE9BQU8sRUFBQyxDQUFXO3NDQUFDLENBQU07Ozs7OztvR0FDL0RLLENBQUU7Ozs7O29HQUNGQSxDQUFFOzs7OztvR0FDRkEsQ0FBRTs7Ozs7b0dBQ0ZyRCx5REFBVTs0QkFBQ2dELE9BQU8sRUFBQyxDQUFHOzRCQUFDTSxTQUFTLEVBQUMsQ0FBUTs7Z0NBQUMsQ0FBdUI7NEdBQUNDLENBQUM7b0NBQUNDLElBQUksRUFBQyxDQUFTOzhDQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JHLENBQUM7R0F0RnVCbEQsTUFBTTs7UUFDSkYsdURBQWE7UUFDTUMsb0RBQVU7UUFJdENSLGtEQUFTOzs7S0FORlMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduaW4uanM/NzhmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9VSS9jb250YWluZXIvY29udGFpbmVyJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtdWkvc3lzdGVtJztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSAnLi4vbGliL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbmluKCkge1xuICBjb25zdCB7dXNlciwgc2V0VXNlcn0gPSB1c2VBcHBDb250ZXh0KCk7XG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWUsIHJlbW92ZUNvb2tpZV0gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3Qgc2lnbkluVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2Vycy9zaWduX2luYCwgc2V0dGluZ3MpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3Qgand0ID0gYXdhaXQgZmV0Y2hSZXNwb25zZS5oZWFkZXJzLmdldCgnQXV0aG9yaXphdGlvbicpXG4gICAgICBpZighZGF0YS5lcnJvcil7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBqd3QpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgZGF0YS51c2VybmFtZSlcblxuICAgICAgICBzZXRVc2VyKGRhdGEudXNlcm5hbWUpXG4gICAgICAgIHNldENvb2tpZSgndG9rZW4nLCBqd3QpXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0RXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHNpZ25JblVzZXIoZW1haWwsIHBhc3N3b3JkKVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7XG4gICAgICAgIGVycm9yICYmIFxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPntlcnJvcn08L0FsZXJ0PlxuICAgICAgfVxuICAgICAgPGgzPlNpZ24gSW48L2gzPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyBlID0+IGhhbmRsZVN1Ym1pdChlLCBlbWFpbCwgcGFzc3dvcmQpIH0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1wYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInBcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIvc2lnbnVwXCI+U2lnbiB1cDwvYT48L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiQ29udGFpbmVyIiwiQm94IiwiQWxlcnQiLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29va2llcyIsIlNpZ25pbiIsInVzZXIiLCJzZXRVc2VyIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInNpZ25JblVzZXIiLCJzZXR0aW5ncyIsImZldGNoUmVzcG9uc2UiLCJkYXRhIiwiand0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZmV0Y2giLCJqc29uIiwiZ2V0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVzZXJuYW1lIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldmVyaXR5IiwiaDMiLCJmb3JtIiwib25TdWJtaXQiLCJmdWxsV2lkdGgiLCJpZCIsImxhYmVsIiwidHlwZSIsInZhbHVlIiwidmFyaWFudCIsIm1hcmdpbiIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiY29sb3IiLCJiciIsInRleHRBbGlnbiIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ })

});