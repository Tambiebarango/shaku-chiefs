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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Scorechart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_card_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/card/card */ \"./components/UI/card/card.js\");\n/* harmony import */ var _components_UI_container_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/container/container */ \"./components/UI/container/container.js\");\n/* harmony import */ var _components_UI_grid_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UI/grid/grid */ \"./components/UI/grid/grid.js\");\n/* harmony import */ var _components_UI_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UI/table/table */ \"./components/UI/table/table.js\");\n/* harmony import */ var _data_top_scorers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/top_scorers */ \"./data/top_scorers.js\");\n/* harmony import */ var _components_UI_table_table_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UI/table/table.module.css */ \"./components/UI/table/table.module.css\");\n/* harmony import */ var _components_UI_table_table_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_UI_table_table_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Scorechart(param1) {\n    var data = param1.data, columns = param1.columns;\n    var _this = this;\n    var gws = data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_container_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                style: {\n                    marginTop: 200 + \"px;\"\n                },\n                children: \"FIXTURES\"\n            }, void 0, false, {\n                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            gws.map(function(param) {\n                var number = param.number, fixtures = param.fixtures;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_grid_grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: [\n                                \"Gameweek \",\n                                number\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: (_components_UI_table_table_module_css__WEBPACK_IMPORTED_MODULE_8___default().table),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: fixtures.map(function(fixture, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: columns.map(function(col) {\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: col.title == \"Versus\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"vs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 50\n                                                }, _this) : fixture[col.accessor]\n                                            }, col.id, false, {\n                                                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 23\n                                            }, _this);\n                                        })\n                                    }, i, false, {\n                                        fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/theodore/dev/shakuchiefs/client/pages/fixtures.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this));\n};\n_c = Scorechart;\nvar _c;\n$RefreshReg$(_c, \"Scorechart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maXh0dXJlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNEO0FBRWE7QUFDZTtBQUNmO0FBQ0c7QUFDQTtBQUVZOztBQXFDN0MsUUFBUSxDQUFDUSxVQUFVLENBQUMsTUFBaUIsRUFBRSxDQUFDO1FBQWxCQyxJQUFJLEdBQU4sTUFBaUIsQ0FBZkEsSUFBSSxFQUFFQyxPQUFPLEdBQWYsTUFBaUIsQ0FBVEEsT0FBTzs7SUFDaEQsR0FBSyxDQUFDQyxHQUFHLEdBQUdGLElBQUk7SUFDaEIsTUFBTSw2RUFDSE4sMEVBQVM7O3dGQUNQUyxDQUFFO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7b0JBQUFBLFNBQVMsRUFBRSxHQUFHLEdBQUksQ0FBRztnQkFBQyxDQUFDOzBCQUFFLENBQVE7Ozs7OztZQUM1Q0gsR0FBRyxDQUFDSSxHQUFHLENBQUMsUUFBUTtvQkFBTEMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs4QkFDMUIsTUFBTSwrREFBTGIsZ0VBQUk7O29HQUNGYyxDQUFFOztnQ0FBQyxDQUFTO2dDQUFDRixNQUFNOzs7Ozs7O29HQUNqQkcsQ0FBSzs0QkFBQ0MsU0FBUyxFQUFFYixvRkFBWTtrSEFDM0JjLENBQUs7MENBQ0hKLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDLFFBQVEsQ0FBUE8sT0FBTyxFQUFFQyxDQUFDO2tEQUN2QixNQUFNLCtEQUFMQyxDQUFFO2tEQUNBZCxPQUFPLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQVBVLEdBQUc7MERBQ2YsTUFBTSwrREFBTEMsQ0FBRTswREFDQUQsR0FBRyxDQUFDRSxLQUFLLElBQUksQ0FBUSxzRkFBSUMsQ0FBTTs4REFBQyxDQUFFOzs7Ozs0REFBWU4sT0FBTyxDQUFDRyxHQUFHLENBQUNJLFFBQVE7K0NBRDVESixHQUFHLENBQUNLLEVBQUU7Ozs7Ozt1Q0FGVlAsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjNUIsQ0FBQztLQXpCdUJmLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZml4dHVyZXMuanM/NzYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL2NhcmQvY2FyZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9jb250YWluZXIvY29udGFpbmVyXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9ncmlkL2dyaWRcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS90YWJsZS90YWJsZVwiO1xuaW1wb3J0IHsgVE9QU0NPUkVSUyB9IGZyb20gXCIuLi9kYXRhL3RvcF9zY29yZXJzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvdGFibGUvdGFibGUubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB0b2tlbiA9IGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW47XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2FtZXdlZWtzYCwgc2V0dGluZ3MpO1xuICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9zaWduaW5cIixcbiAgICAgIH0sXG4gICAgICBwcm9wczoge30sXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCBjb2x1bW5zID0gW1xuICAgICAgeyBpZDogMSwgdGl0bGU6IFwiSG9tZSBUZWFtXCIsIGFjY2Vzc29yOiBcImhvbWVfdGVhbVwiIH0sXG4gICAgICB7IGlkOiAyLCB0aXRsZTogXCJWZXJzdXNcIiwgYWNjZXNzb3I6IFwidmVyc3VzXCIgfSxcbiAgICAgIHsgaWQ6IDMsIHRpdGxlOiBcIkF3YXkgVGVhbVwiLCBhY2Nlc3NvcjogXCJhd2F5X3RlYW1cIiB9LFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgY29sdW1uczogY29sdW1uc1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjb3JlY2hhcnQoeyBkYXRhLCBjb2x1bW5zIH0pIHtcbiAgY29uc3QgZ3dzID0gZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luVG9wOiAyMDAgKyBgcHg7YH19PkZJWFRVUkVTPC9oMz5cbiAgICAgIHtnd3MubWFwKCh7IG51bWJlciwgZml4dHVyZXMgfSkgPT4gKFxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8aDQ+R2FtZXdlZWsge251bWJlcn08L2g0PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtmaXh0dXJlcy5tYXAoKGZpeHR1cmUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sLnRpdGxlID09IFwiVmVyc3VzXCIgPyA8c3Ryb25nPnZzPC9zdHJvbmc+IDogZml4dHVyZVtjb2wuYWNjZXNzb3JdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICkpfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJvdXRlciIsIkNhcmQiLCJDb250YWluZXIiLCJHcmlkIiwiVGFibGUiLCJUT1BTQ09SRVJTIiwic3R5bGVzIiwiU2NvcmVjaGFydCIsImRhdGEiLCJjb2x1bW5zIiwiZ3dzIiwiaDMiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcCIsIm51bWJlciIsImZpeHR1cmVzIiwiaDQiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRib2R5IiwiZml4dHVyZSIsImkiLCJ0ciIsImNvbCIsInRkIiwidGl0bGUiLCJzdHJvbmciLCJhY2Nlc3NvciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/fixtures.js\n");

/***/ })

});