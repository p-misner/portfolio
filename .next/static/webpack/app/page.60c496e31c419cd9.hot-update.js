"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/sineWave.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/sineWave.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const path = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath();\n    }, []);\n    const setPath = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            ref: path\n        }, void 0, false, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"GyInyuuCdyygm1hytS1Vixql7Us=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEM7QUFDYTtBQU12QjtBQUdqQixTQUFTTyxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNOLCtEQUFnQkE7a0JBQ2YsNEVBQUNJLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0YsMERBQVFBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0wsOERBQVlBO29CQUFDSyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7b0JBQVdELE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQjtLQWR3QkQ7QUFnQnhCLFNBQVNFLFdBQVcsS0FBeUI7UUFBekIsRUFBRUQsS0FBSyxFQUFrQixHQUF6Qjs7SUFDbEIsTUFBTUUsT0FBT1QsNkNBQU1BLENBQUM7SUFDcEIsSUFBSVUsV0FBVztJQUNmWCxnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLFVBQVUsS0FBTztJQUN2QixxQkFDRSw4REFBQ1AseURBQU9BO2tCQUNOLDRFQUFDSztZQUFLRyxLQUFLSDs7Ozs7Ozs7Ozs7QUFHakI7R0FiU0Q7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFdyYXBwZXIgfSBmcm9tIFwiLi4vc3R5bGUvZ3JpZExheW91dFwiO1xuaW1wb3J0IHtcbiAgSGVyb1N1YnRpdGxlLFxuICBIZXJvVGV4dCxcbiAgU2luZVNWRyxcbiAgU2luZVdhdmVHcmlkV3JhcHBlcixcbn0gZnJvbSBcIi4uL3N0eWxlL3NpbmVXYXZlU3R5bGVcIjtcbmltcG9ydCB7IENvcmVDb2xvcklucHV0IH0gZnJvbSBcIi4uL3N0eWxlL3N0eWxlQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmVXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbFdpZHRoV3JhcHBlcj5cbiAgICAgIDxTaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgICAgICA8SGVyb1RleHQgY29sb3I9e2NvbG9yfT4gZGVzaWduaW5nIHdpdGggZGF0YSA8L0hlcm9UZXh0PlxuICAgICAgICA8SGVyb1N1YnRpdGxlIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgYSBkYXRhIHZpc3VhbGl6YXRpb24gZGVzaWduZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gZW5naW5lZXJpbmcsIEkgbG92ZVxuICAgICAgICAgIHdvcmtpbmcgd2l0aCBjb21wbGV4IGRhdGEgYW5kIHR1cm5pbmcgaXQgaW50byBzb21ldGhpbmcgYmVhdXRpZnVsIGludG9cbiAgICAgICAgICBkYXRhIGRyaXZlbiBkZXNpZ25lclxuICAgICAgICA8L0hlcm9TdWJ0aXRsZT5cbiAgICAgICAgPENhbnZhc1dhdmUgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FudmFzV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIGNvbnN0IHBhdGggPSB1c2VSZWYobnVsbCk7XG4gIGxldCBwcm9ncmVzcyA9IDA7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGF0aCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0UGF0aCA9ICgpID0+IHt9O1xuICByZXR1cm4gKFxuICAgIDxTaW5lU1ZHPlxuICAgICAgPHBhdGggcmVmPXtwYXRofSAvPlxuICAgIDwvU2luZVNWRz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJGdWxsV2lkdGhXcmFwcGVyIiwiSGVyb1N1YnRpdGxlIiwiSGVyb1RleHQiLCJTaW5lU1ZHIiwiU2luZVdhdmVHcmlkV3JhcHBlciIsIlNpbmVXYXZlIiwiY29sb3IiLCJDYW52YXNXYXZlIiwicGF0aCIsInByb2dyZXNzIiwic2V0UGF0aCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});