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

/***/ "./components/UI/table/table.js":
/*!**************************************!*\
  !*** ./components/UI/table/table.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ \"./components/UI/card/card.js\");\n/* harmony import */ var _table_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.module.css */ \"./components/UI/table/table.module.css\");\n/* harmony import */ var _table_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_table_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Table(props) {\n    var _this = this;\n    var data = props.data;\n    var columns = props.columns;\n    var hasHeader = props.hasHeader;\n    console.log(data);\n    return(// TODO: convert to MUI\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: (_table_module_css__WEBPACK_IMPORTED_MODULE_2___default().table),\n        children: [\n            hasHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: columns.map(function(col) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: col.title\n                        }, col.id, false, {\n                            fileName: \"/Users/theodore/dev/shakuchiefs/client/components/UI/table/table.js\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/theodore/dev/shakuchiefs/client/components/UI/table/table.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/theodore/dev/shakuchiefs/client/components/UI/table/table.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: data.map(function(team, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: columns.map(function(col) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: col.title == \"Position\" ? i + 1 : team[col.accessor]\n                            }, col.id, false, {\n                                fileName: \"/Users/theodore/dev/shakuchiefs/client/components/UI/table/table.js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, i, false, {\n                        fileName: \"/Users/theodore/dev/shakuchiefs/client/components/UI/table/table.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/theodore/dev/shakuchiefs/client/components/UI/table/table.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/theodore/dev/shakuchiefs/client/components/UI/table/table.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n};\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL3RhYmxlL3RhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1E7QUFFeEIsUUFBUSxDQUFDRSxLQUFLLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUNwQyxHQUFLLENBQUNDLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFJO0lBQ3ZCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHRixLQUFLLENBQUNFLE9BQU87SUFDN0IsR0FBSyxDQUFDQyxTQUFTLEdBQUdILEtBQUssQ0FBQ0csU0FBUztJQUVqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7SUFDaEIsTUFBTSxDQUNKLEVBQXVCO2dGQUN0QkssQ0FBSztRQUFDQyxTQUFTLEVBQUVULGdFQUFZOztZQUUxQkssU0FBUyxnRkFDUkssQ0FBSztzR0FDSEMsQ0FBRTs4QkFDQVAsT0FBTyxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHO3NDQUNmLE1BQU0sK0RBQUxDLENBQUU7c0NBQWVELEdBQUcsQ0FBQ0UsS0FBSzsyQkFBbEJGLEdBQUcsQ0FBQ0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLdEJDLENBQUs7MEJBQ0hkLElBQUksQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUE0sSUFBSSxFQUFFQyxDQUFDO2tDQUNoQixNQUFNLCtEQUFMUixDQUFFO2tDQUNBUCxPQUFPLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQUc7MENBQ2YsTUFBTSwrREFBTE8sQ0FBRTswQ0FDQVAsR0FBRyxDQUFDRSxLQUFLLElBQUksQ0FBVSxZQUFHSSxDQUFDLEdBQUMsQ0FBQyxHQUFHRCxJQUFJLENBQUNMLEdBQUcsQ0FBQ1EsUUFBUTsrQkFEM0NSLEdBQUcsQ0FBQ0csRUFBRTs7Ozs7O3VCQUZWRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVdwQixDQUFDO0tBaEN1QmxCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS90YWJsZS90YWJsZS5qcz9lMmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi9jYXJkL2NhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFibGUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgY29sdW1ucyA9IHByb3BzLmNvbHVtbnM7XG4gIGNvbnN0IGhhc0hlYWRlciA9IHByb3BzLmhhc0hlYWRlcjtcblxuICBjb25zb2xlLmxvZyhkYXRhKVxuICByZXR1cm4gKFxuICAgIC8vIFRPRE86IGNvbnZlcnQgdG8gTVVJXG4gICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgIHtcbiAgICAgICAgaGFzSGVhZGVyICYmXG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCkgPT4gKFxuICAgICAgICAgICAgICA8dGgga2V5PXtjb2wuaWR9Pntjb2wudGl0bGV9PC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICB9XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtkYXRhLm1hcCgodGVhbSwgaSkgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2wpID0+IChcbiAgICAgICAgICAgICAgPHRkIGtleT17Y29sLmlkfT5cbiAgICAgICAgICAgICAgICB7Y29sLnRpdGxlID09IFwiUG9zaXRpb25cIiA/IGkrMSA6IHRlYW1bY29sLmFjY2Vzc29yXX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZXMiLCJUYWJsZSIsInByb3BzIiwiZGF0YSIsImNvbHVtbnMiLCJoYXNIZWFkZXIiLCJjb25zb2xlIiwibG9nIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwibWFwIiwiY29sIiwidGgiLCJ0aXRsZSIsImlkIiwidGJvZHkiLCJ0ZWFtIiwiaSIsInRkIiwiYWNjZXNzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UI/table/table.js\n");

/***/ })

});