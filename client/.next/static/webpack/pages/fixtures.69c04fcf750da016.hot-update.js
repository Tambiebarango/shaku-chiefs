"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fixtures",{

/***/ "./pages/fixtures.js":
/*!***************************!*\
  !*** ./pages/fixtures.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Scorechart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_container_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/container/container */ \"./components/UI/container/container.js\");\n/* harmony import */ var _components_UI_grid_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/grid/grid */ \"./components/UI/grid/grid.js\");\n/* harmony import */ var _components_UI_table_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UI/table/table */ \"./components/UI/table/table.js\");\n/* harmony import */ var _data_top_scorers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/top_scorers */ \"./data/top_scorers.js\");\n/* harmony import */ var _components_UI_table_table_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UI/table/table.module.css */ \"./components/UI/table/table.module.css\");\n/* harmony import */ var _components_UI_table_table_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_UI_table_table_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Scorechart(param1) {\n    var data = param1.data, columns = param1.columns;\n    var _this = this;\n    var gws = data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_container_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                style: {\n                    marginTop: 30 + \"%;\"\n                },\n                children: \"FIXTURES\"\n            }, void 0, false, {\n                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            gws.map(function(param) {\n                var number = param.number, fixtures = param.fixtures;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_grid_grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: [\n                                \"Gameweek \",\n                                number\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: (_components_UI_table_table_module_css__WEBPACK_IMPORTED_MODULE_7___default().table),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: fixtures.map(function(fixture, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: columns.map(function(col) {\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: col.title == \"Versus\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"vs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 48\n                                                }, _this) : fixture[col.accessor]\n                                            }, col.id, false, {\n                                                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 21\n                                            }, _this);\n                                        })\n                                    }, i, false, {\n                                        fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this));\n};\n_c = Scorechart;\nvar _c;\n$RefreshReg$(_c, \"Scorechart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maXh0dXJlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0Q7QUFFNEI7QUFDZjtBQUNHO0FBQ0E7QUFFWTs7QUFxQzdDLFFBQVEsQ0FBQ08sVUFBVSxDQUFDLE1BQWlCLEVBQUUsQ0FBQztRQUFsQkMsSUFBSSxHQUFOLE1BQWlCLENBQWZBLElBQUksRUFBRUMsT0FBTyxHQUFmLE1BQWlCLENBQVRBLE9BQU87O0lBQ2hELEdBQUssQ0FBQ0MsR0FBRyxHQUFHRixJQUFJO0lBQ2hCLE1BQU0sNkVBQ0hOLDBFQUFTOzt3RkFDUFMsQ0FBRTtnQkFBQ0MsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxTQUFTLEVBQUUsRUFBRSxHQUFJLENBQUU7Z0JBQUMsQ0FBQzswQkFBRSxDQUFROzs7Ozs7WUFDMUNILEdBQUcsQ0FBQ0ksR0FBRyxDQUFDLFFBQVE7b0JBQUxDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7OEJBQzFCLE1BQU0sK0RBQUxiLGdFQUFJOztvR0FDRmMsQ0FBRTs7Z0NBQUMsQ0FBUztnQ0FBQ0YsTUFBTTs7Ozs7OztvR0FDbkJHLENBQUs7NEJBQUNDLFNBQVMsRUFBRWIsb0ZBQVk7a0hBQzNCYyxDQUFLOzBDQUNISixRQUFRLENBQUNGLEdBQUcsQ0FBQyxRQUFRLENBQVBPLE9BQU8sRUFBRUMsQ0FBQztrREFDdkIsTUFBTSwrREFBTEMsQ0FBRTtrREFDQWQsT0FBTyxDQUFDSyxHQUFHLENBQUMsUUFBUSxDQUFQVSxHQUFHOzBEQUNmLE1BQU0sK0RBQUxDLENBQUU7MERBQ0FELEdBQUcsQ0FBQ0UsS0FBSyxJQUFJLENBQVEsc0ZBQUlDLENBQU07OERBQUMsQ0FBRTs7Ozs7NERBQVlOLE9BQU8sQ0FBQ0csR0FBRyxDQUFDSSxRQUFROytDQUQ1REosR0FBRyxDQUFDSyxFQUFFOzs7Ozs7dUNBRlZQLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzFCLENBQUM7S0F6QnVCZixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZpeHR1cmVzLmpzPzc2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL2NvbnRhaW5lci9jb250YWluZXJcIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL2dyaWQvZ3JpZFwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL3RhYmxlL3RhYmxlXCI7XG5pbXBvcnQgeyBUT1BTQ09SRVJTIH0gZnJvbSBcIi4uL2RhdGEvdG9wX3Njb3JlcnNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS90YWJsZS90YWJsZS5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHRva2VuID0gY29udGV4dC5yZXEuY29va2llcy50b2tlbjtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9nYW1ld2Vla3NgLCBzZXR0aW5ncyk7XG4gIGlmIChyZXMuc3RhdHVzID09PSA0MDEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxuICAgICAgfSxcbiAgICAgIHByb3BzOiB7fSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgICB7IGlkOiAxLCB0aXRsZTogXCJIb21lIFRlYW1cIiwgYWNjZXNzb3I6IFwiaG9tZV90ZWFtXCIgfSxcbiAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcIlZlcnN1c1wiLCBhY2Nlc3NvcjogXCJ2ZXJzdXNcIiB9LFxuICAgICAgeyBpZDogMywgdGl0bGU6IFwiQXdheSBUZWFtXCIsIGFjY2Vzc29yOiBcImF3YXlfdGVhbVwiIH0sXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NvcmVjaGFydCh7IGRhdGEsIGNvbHVtbnMgfSkge1xuICBjb25zdCBnd3MgPSBkYXRhO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Ub3A6IDMwICsgYCU7YH19PkZJWFRVUkVTPC9oMz5cbiAgICAgIHtnd3MubWFwKCh7IG51bWJlciwgZml4dHVyZXMgfSkgPT4gKFxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8aDQ+R2FtZXdlZWsge251bWJlcn08L2g0PlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtmaXh0dXJlcy5tYXAoKGZpeHR1cmUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbC50aXRsZSA9PSBcIlZlcnN1c1wiID8gPHN0cm9uZz52czwvc3Ryb25nPiA6IGZpeHR1cmVbY29sLmFjY2Vzc29yXX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJDb250YWluZXIiLCJHcmlkIiwiVGFibGUiLCJUT1BTQ09SRVJTIiwic3R5bGVzIiwiU2NvcmVjaGFydCIsImRhdGEiLCJjb2x1bW5zIiwiZ3dzIiwiaDMiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcCIsIm51bWJlciIsImZpeHR1cmVzIiwiaDQiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRib2R5IiwiZml4dHVyZSIsImkiLCJ0ciIsImNvbCIsInRkIiwidGl0bGUiLCJzdHJvbmciLCJhY2Nlc3NvciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/fixtures.js\n");

/***/ })

});