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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n    }, []);\n    const setPath = (progress)=>{\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        let wavelength = 10;\n        let amp = 50;\n        let numWaves = 1;\n        // Distant Step 2: Combine Waves via adding line elements: https://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js\n        // const path = `M0 ${svgDim.h / 2} q ${svgDim.w / 2} ${svgDim.h / 2}, ${\n        //   svgDim.w\n        // } 0} `;\n        let centerHeight = svgDim.h / 2;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let bottomFraction = numWaves * 4;\n        let downCurve = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(centerHeight, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        const path = \"M 0 \".concat(svgDim.h / 2, \" q \").concat(svgDim.w / 4, \" \").concat(svgDim.h / 2, \",   \").concat(2 * svgDim.w / 4, \" 0, q \").concat(svgDim.w / 4, \" \").concat(-1 * svgDim.h / 2, \", \").concat(svgDim.w / 2, \" 0\");\n        const path2 = \"M 0 \".concat(svgDim.h / 2, \" q \").concat(svgDim.w / 8, \" \").concat(svgDim.h / 2, \",   \").concat(2 * svgDim.w / 8, \" 0, q \").concat(3 * svgDim.w / q6, \" \").concat(-1 * svgDim.h / 2, \", \").concat(2 * svgDim.w / 8, \" 0\");\n        return path2;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                ref: pathRef,\n                d: setPath(progress = 20)\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M 0 \".concat(svgDim.h / 2, \" L \").concat(svgDim.w, \" \").concat(svgDim.h / 2)\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDRztBQU12QjtBQUdqQixTQUFTUSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNOLCtEQUFnQkE7a0JBQ2YsNEVBQUNJLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0YsMERBQVFBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0wsOERBQVlBO29CQUFDSyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7b0JBQVdELE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQjtLQWR3QkQ7QUFnQnhCLFNBQVNFLFdBQVcsS0FBeUI7UUFBekIsRUFBRUQsS0FBSyxFQUFrQixHQUF6Qjs7SUFDbEIsTUFBTUUsVUFBVVYsNkNBQU1BLENBQUM7SUFDdkIsTUFBTVcsU0FBU1gsNkNBQU1BLENBQUM7SUFDdEIsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO1FBQUVhLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ2xELElBQUlDLFdBQVc7SUFDZmpCLGdEQUFTQSxDQUFDO1FBQ1JrQixRQUFRRDtRQUNSLElBQUlMLE9BQU9PLE9BQU8sRUFBRTtZQUNsQkwsVUFBVTtnQkFDUkMsR0FBR0gsT0FBT08sT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0MsTUFBTTtnQkFDaERMLEdBQUdKLE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdFLEtBQUs7WUFDakQ7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1KLFVBQVUsQ0FBQ0Q7UUFDZixpT0FBaU87UUFFak8sNENBQTRDO1FBRTVDLElBQUlNLGFBQWE7UUFDakIsSUFBSUMsTUFBTTtRQUNWLElBQUlDLFdBQVc7UUFDZiwwSUFBMEk7UUFFMUkseUVBQXlFO1FBQ3pFLGFBQWE7UUFDYixVQUFVO1FBQ1YsSUFBSUMsZUFBZWIsT0FBT0UsQ0FBQyxHQUFHO1FBQzlCLElBQUlZLFlBQVksT0FBb0IsT0FBYkQ7UUFDdkIsSUFBSUUsaUJBQWlCSCxXQUFXO1FBQ2hDLElBQUlJLFlBQVksS0FBa0NILE9BQTdCYixPQUFPRyxDQUFDLEdBQUdZLGdCQUFlLEtBQzdDLE9BRGdERixjQUFhLFFBRTlELE9BREMsSUFBS2IsT0FBT0csQ0FBQyxHQUFJWSxnQkFDbEI7UUFFRCxNQUFNRSxPQUFPLE9BQXlCakIsT0FBbEJBLE9BQU9FLENBQUMsR0FBRyxHQUFFLE9BQXFCRixPQUFoQkEsT0FBT0csQ0FBQyxHQUFHLEdBQUUsS0FDakQsT0FEb0RILE9BQU9FLENBQUMsR0FBRyxHQUFFLFFBRTFERixPQURQLElBQUtBLE9BQU9HLENBQUMsR0FBSSxHQUNsQixVQUF3QixPQUFoQkgsT0FBT0csQ0FBQyxHQUFHLEdBQUUsS0FBMkJILE9BQXhCLENBQUUsSUFBSUEsT0FBT0UsQ0FBQyxHQUFJLEdBQUUsTUFBaUIsT0FBYkYsT0FBT0csQ0FBQyxHQUFHLEdBQUU7UUFFOUQsTUFBTWUsUUFBUSxPQUF5QmxCLE9BQWxCQSxPQUFPRSxDQUFDLEdBQUcsR0FBRSxPQUFxQkYsT0FBaEJBLE9BQU9HLENBQUMsR0FBRyxHQUFFLEtBQ2xELE9BRHFESCxPQUFPRSxDQUFDLEdBQUcsR0FBRSxRQUUzRCxPQURQLElBQUtGLE9BQU9HLENBQUMsR0FBSSxHQUNsQixVQUErQixPQUF2QixJQUFLSCxPQUFPRyxDQUFDLEdBQUlnQixJQUFHLEtBQzNCLE9BRDhCLENBQUUsSUFBSW5CLE9BQU9FLENBQUMsR0FBSSxHQUFFLE1BRW5ELE9BREMsSUFBS0YsT0FBT0csQ0FBQyxHQUFJLEdBQ2xCO1FBQ0QsT0FBT2U7SUFDVDtJQUNBLHFCQUNFLDhEQUFDekIseURBQU9BO1FBQUMyQixLQUFLckI7OzBCQUNaLDhEQUFDa0I7Z0JBQ0NHLEtBQUt0QjtnQkFDTHVCLEdBQUdoQixRQUFTRCxXQUFXOzs7Ozs7MEJBR3pCLDhEQUFDYTtnQkFBS0ksR0FBRyxPQUF5QnJCLE9BQWxCQSxPQUFPRSxDQUFDLEdBQUcsR0FBRSxPQUFpQkYsT0FBWkEsT0FBT0csQ0FBQyxFQUFDLEtBQWdCLE9BQWJILE9BQU9FLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7O0FBRy9EO0dBeERTTDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2luZVdhdmUudHN4P2M2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFdyYXBwZXIgfSBmcm9tIFwiLi4vc3R5bGUvZ3JpZExheW91dFwiO1xuaW1wb3J0IHtcbiAgSGVyb1N1YnRpdGxlLFxuICBIZXJvVGV4dCxcbiAgU2luZVNWRyxcbiAgU2luZVdhdmVHcmlkV3JhcHBlcixcbn0gZnJvbSBcIi4uL3N0eWxlL3NpbmVXYXZlU3R5bGVcIjtcbmltcG9ydCB7IENvcmVDb2xvcklucHV0IH0gZnJvbSBcIi4uL3N0eWxlL3N0eWxlQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmVXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbFdpZHRoV3JhcHBlcj5cbiAgICAgIDxTaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgICAgICA8SGVyb1RleHQgY29sb3I9e2NvbG9yfT4gZGVzaWduaW5nIHdpdGggZGF0YSA8L0hlcm9UZXh0PlxuICAgICAgICA8SGVyb1N1YnRpdGxlIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgYSBkYXRhIHZpc3VhbGl6YXRpb24gZGVzaWduZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gZW5naW5lZXJpbmcsIEkgbG92ZVxuICAgICAgICAgIHdvcmtpbmcgd2l0aCBjb21wbGV4IGRhdGEgYW5kIHR1cm5pbmcgaXQgaW50byBzb21ldGhpbmcgYmVhdXRpZnVsIGludG9cbiAgICAgICAgICBkYXRhIGRyaXZlbiBkZXNpZ25lclxuICAgICAgICA8L0hlcm9TdWJ0aXRsZT5cbiAgICAgICAgPENhbnZhc1dhdmUgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FudmFzV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIGNvbnN0IHBhdGhSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3N2Z0RpbSwgc2V0U3ZnRGltXSA9IHVzZVN0YXRlKHsgaDogMCwgdzogMCB9KTtcbiAgbGV0IHByb2dyZXNzID0gMDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYXRoKHByb2dyZXNzKTtcbiAgICBpZiAoc3ZnUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFN2Z0RpbSh7XG4gICAgICAgIGg6IHN2Z1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgdzogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXRQYXRoID0gKHByb2dyZXNzOiBudW1iZXIpID0+IHtcbiAgICAvL2h0dHBzOi8vcGh5cy5saWJyZXRleHRzLm9yZy9Cb29rc2hlbHZlcy9Vbml2ZXJzaXR5X1BoeXNpY3MvQm9vayUzQV9JbnRyb2R1Y3RvcnlfUGh5c2ljc18tX0J1aWxkaW5nX01vZGVsc190b19EZXNjcmliZV9PdXJfV29ybGRfKE1hcnRpbl9OZWFyeV9SaW5hbGRvX2FuZF9Xb29kbWFuKS8xNCUzQV9XYXZlcy8xNC4wNiUzQV9TdXBlcnBvc2l0aW9uX29mX3dhdmVzX2FuZF9pbnRlcmZlcmVuY2VcblxuICAgIC8vIFN0ZXAgMTogQ3JlYXRlIEFuaW1hdGVkIE5vcm1hbCBTaW5lIFdhdmVzXG5cbiAgICBsZXQgd2F2ZWxlbmd0aCA9IDEwO1xuICAgIGxldCBhbXAgPSA1MDtcbiAgICBsZXQgbnVtV2F2ZXMgPSAxO1xuICAgIC8vIERpc3RhbnQgU3RlcCAyOiBDb21iaW5lIFdhdmVzIHZpYSBhZGRpbmcgbGluZSBlbGVtZW50czogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTM5MzI3MDQvaG93LXRvLWRyYXctc2luZS13YXZlcy13aXRoLXN2Zy1qc1xuXG4gICAgLy8gY29uc3QgcGF0aCA9IGBNMCAke3N2Z0RpbS5oIC8gMn0gcSAke3N2Z0RpbS53IC8gMn0gJHtzdmdEaW0uaCAvIDJ9LCAke1xuICAgIC8vICAgc3ZnRGltLndcbiAgICAvLyB9IDB9IGA7XG4gICAgbGV0IGNlbnRlckhlaWdodCA9IHN2Z0RpbS5oIC8gMjtcbiAgICBsZXQgc3RhcnRQYXRoID0gYE0gMCAke2NlbnRlckhlaWdodH1gO1xuICAgIGxldCBib3R0b21GcmFjdGlvbiA9IG51bVdhdmVzICogNDtcbiAgICBsZXQgZG93bkN1cnZlID0gYHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke2NlbnRlckhlaWdodH0sICAgJHtcbiAgICAgICgyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb25cbiAgICB9IDBgO1xuXG4gICAgY29uc3QgcGF0aCA9IGBNIDAgJHtzdmdEaW0uaCAvIDJ9IHEgJHtzdmdEaW0udyAvIDR9ICR7c3ZnRGltLmggLyAyfSwgICAke1xuICAgICAgKDIgKiBzdmdEaW0udykgLyA0XG4gICAgfSAwLCBxICR7c3ZnRGltLncgLyA0fSAkeygtMSAqIHN2Z0RpbS5oKSAvIDJ9LCAke3N2Z0RpbS53IC8gMn0gMGA7XG5cbiAgICBjb25zdCBwYXRoMiA9IGBNIDAgJHtzdmdEaW0uaCAvIDJ9IHEgJHtzdmdEaW0udyAvIDh9ICR7c3ZnRGltLmggLyAyfSwgICAke1xuICAgICAgKDIgKiBzdmdEaW0udykgLyA4XG4gICAgfSAwLCBxICR7KDMgKiBzdmdEaW0udykgLyBxNn0gJHsoLTEgKiBzdmdEaW0uaCkgLyAyfSwgJHtcbiAgICAgICgyICogc3ZnRGltLncpIC8gOFxuICAgIH0gMGA7XG4gICAgcmV0dXJuIHBhdGgyO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxTaW5lU1ZHIHJlZj17c3ZnUmVmfT5cbiAgICAgIDxwYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgZD17c2V0UGF0aCgocHJvZ3Jlc3MgPSAyMCkpfVxuICAgICAgICAvLyBkPVwiXHRcdHBhdGg6ICdNIC0xODAgMCAgcSA5MCAwIDE4MCAxMDAgdCAxODAgMCB0IDE4MCAwIHQgMTgwIDAgdCAxODAgMCB0IDE4MCAwIHQgMTgwIDAgdCAxODAgMCB0IDE4MCAwICcsXG4gICAgICAvPlxuICAgICAgPHBhdGggZD17YE0gMCAke3N2Z0RpbS5oIC8gMn0gTCAke3N2Z0RpbS53fSAke3N2Z0RpbS5oIC8gMn1gfSAvPlxuICAgIDwvU2luZVNWRz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIlNpbmVTVkciLCJTaW5lV2F2ZUdyaWRXcmFwcGVyIiwiU2luZVdhdmUiLCJjb2xvciIsIkNhbnZhc1dhdmUiLCJwYXRoUmVmIiwic3ZnUmVmIiwic3ZnRGltIiwic2V0U3ZnRGltIiwiaCIsInciLCJwcm9ncmVzcyIsInNldFBhdGgiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ3YXZlbGVuZ3RoIiwiYW1wIiwibnVtV2F2ZXMiLCJjZW50ZXJIZWlnaHQiLCJzdGFydFBhdGgiLCJib3R0b21GcmFjdGlvbiIsImRvd25DdXJ2ZSIsInBhdGgiLCJwYXRoMiIsInE2IiwicmVmIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});