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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {}, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave() {\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        //Our first draw\n        context.fillStyle = \"#ff000f\";\n        context.fillRect(0, 0, context.canvas.width, context.canvas.height);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 36,\n        columnNumber: 10\n    }, this);\n}\n_s(CanvasWave, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYTtBQUt2QjtBQUlqQixTQUFTTSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNMLCtEQUFnQkE7a0JBQ2YsNEVBQUNHLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0QsMERBQVFBO29CQUFDRyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0osOERBQVlBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtLQWR3QkY7QUFnQnhCLFNBQVNFOztJQUNQLE1BQU1DLFlBQVlSLDZDQUFNQSxDQUFDO0lBQ3pCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFNBQVNELFVBQVVFLE9BQU87UUFDaEMsTUFBTUMsVUFBVUYsT0FBT0csVUFBVSxDQUFDO1FBQ2xDLGdCQUFnQjtRQUNoQkQsUUFBUUUsU0FBUyxHQUFHO1FBQ3BCRixRQUFRRyxRQUFRLENBQUMsR0FBRyxHQUFHSCxRQUFRRixNQUFNLENBQUNNLEtBQUssRUFBRUosUUFBUUYsTUFBTSxDQUFDTyxNQUFNO0lBQ3BFLEdBQUcsRUFBRTtJQUNMLHFCQUFPLDhEQUFDUDtRQUFPUSxLQUFLVDs7Ozs7O0FBQ3RCO0dBVlNEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3g/YzYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRnVsbFdpZHRoV3JhcHBlciB9IGZyb20gXCIuLi9zdHlsZS9ncmlkTGF5b3V0XCI7XG5pbXBvcnQge1xuICBIZXJvU3VidGl0bGUsXG4gIEhlcm9UZXh0LFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IENvbG9yTWl4ZXIgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZVdhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICByZXR1cm4gKFxuICAgIDxGdWxsV2lkdGhXcmFwcGVyPlxuICAgICAgPFNpbmVXYXZlR3JpZFdyYXBwZXI+XG4gICAgICAgIDxIZXJvVGV4dCBjb2xvcj17Y29sb3J9PiBkZXNpZ25pbmcgd2l0aCBkYXRhIDwvSGVyb1RleHQ+XG4gICAgICAgIDxIZXJvU3VidGl0bGUgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICBhIGRhdGEgdmlzdWFsaXphdGlvbiBkZXNpZ25lciB3aXRoIGEgYmFja2dyb3VuZCBpbiBlbmdpbmVlcmluZywgSSBsb3ZlXG4gICAgICAgICAgd29ya2luZyB3aXRoIGNvbXBsZXggZGF0YSBhbmQgdHVybmluZyBpdCBpbnRvIHNvbWV0aGluZyBiZWF1dGlmdWwgaW50b1xuICAgICAgICAgIGRhdGEgZHJpdmVuIGRlc2lnbmVyXG4gICAgICAgIDwvSGVyb1N1YnRpdGxlPlxuICAgICAgICA8Q2FudmFzV2F2ZSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FudmFzV2F2ZSgpIHtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vT3VyIGZpcnN0IGRyYXdcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiI2ZmMDAwZlwiO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9PjwvY2FudmFzPjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJGdWxsV2lkdGhXcmFwcGVyIiwiSGVyb1N1YnRpdGxlIiwiSGVyb1RleHQiLCJTaW5lV2F2ZUdyaWRXcmFwcGVyIiwiU2luZVdhdmUiLCJjb2xvciIsIkNhbnZhc1dhdmUiLCJjYW52YXNSZWYiLCJjYW52YXMiLCJjdXJyZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});