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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                d: setPath({\n                    numWaves: 5,\n                    amp: 0.2\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                d: setPath({\n                    numWaves: 3,\n                    amp: 0.9\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.Axis, {\n                d: \"M 0 \".concat(svgDim.h / 2, \" L \").concat(svgDim.w, \" \").concat(svgDim.h / 2)\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDRztBQVF2QjtBQUlqQixTQUFTVSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNSLCtEQUFnQkE7a0JBQ2YsNEVBQUNNLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0gsMERBQVFBO29CQUFDSyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ04sOERBQVlBO29CQUFDTSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7b0JBQVdELE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQjtLQWR3QkQ7QUFnQnhCLFNBQVNFLFdBQVcsS0FBeUI7UUFBekIsRUFBRUQsS0FBSyxFQUFrQixHQUF6Qjs7SUFDbEIsTUFBTUUsVUFBVVosNkNBQU1BLENBQUM7SUFDdkIsTUFBTWEsU0FBU2IsNkNBQU1BLENBQUM7SUFDdEIsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO1FBQUVlLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ2xELElBQUlDLFdBQVc7SUFDZm5CLGdEQUFTQSxDQUFDO1FBQ1JvQixRQUFRRDtRQUNSLElBQUlMLE9BQU9PLE9BQU8sRUFBRTtZQUNsQkwsVUFBVTtnQkFDUkMsR0FBR0gsT0FBT08sT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0MsTUFBTTtnQkFDaERMLEdBQUdKLE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdFLEtBQUs7WUFDakQ7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1KLFVBQVU7WUFBQyxFQUFFSyxRQUFRLEVBQUVDLEdBQUcsRUFBcUM7UUFDbkUsaU9BQWlPO1FBRWpPLDRDQUE0QztRQUU1Qyx5REFBeUQ7UUFDekQsZ0RBQWdEO1FBQ2hELGlCQUFpQjtRQUVqQixJQUFJQyxlQUFlWixPQUFPRSxDQUFDLEdBQUc7UUFDOUIsSUFBSVcsaUJBQWlCSCxXQUFXO1FBRWhDLElBQUlJLFlBQVksT0FBb0IsT0FBYkY7UUFDdkIsSUFBSUcsYUFBYSxLQUNmLE9BRG9CZixPQUFPRyxDQUFDLEdBQUdVLGdCQUFlLEtBRXpDLE9BREwsTUFBT2IsT0FBT0UsQ0FBQyxHQUFJLEdBQ3BCLFFBQTZDRixPQUF2QyxJQUFLQSxPQUFPRyxDQUFDLEdBQUlVLGdCQUFlLFNBQ3JDLE9BRDRDYixPQUFPRyxDQUFDLEdBQUdVLGdCQUFlLEtBRWpFLE9BREwsQ0FBRSxJQUFJRixNQUFNWCxPQUFPRSxDQUFDLEdBQUksR0FDekIsUUFBc0MsT0FBaEMsSUFBS0YsT0FBT0csQ0FBQyxHQUFJVSxnQkFBZTtRQUV2Qyx5REFBeUQ7UUFDekQsTUFBTUcsZ0JBQWdCRCxXQUFXRSxNQUFNLENBQUNQLFdBQVc7UUFDbkQsTUFBTVEsT0FBT0osWUFBWUU7UUFDekIsT0FBT0U7SUFDVDtJQUNBLHFCQUNFLDhEQUFDekIseURBQU9BO1FBQUMwQixLQUFLcEI7OzBCQUNaLDhEQUFDUCwwREFBUUE7Z0JBQ1AyQixLQUFLckI7Z0JBQ0xGLE9BQU9BO2dCQUNQd0IsR0FBR2YsUUFBUTtvQkFBRUssVUFBVTtvQkFBR0MsS0FBSztnQkFBSTs7Ozs7OzBCQUVyQyw4REFBQ25CLDBEQUFRQTtnQkFDUDJCLEtBQUtyQjtnQkFDTEYsT0FBT0E7Z0JBQ1B5QixXQUFVO2dCQUNWRCxHQUFHZixRQUFRO29CQUFFSyxVQUFVO29CQUFHQyxLQUFLO2dCQUFJOzs7Ozs7MEJBR3JDLDhEQUFDdEIsc0RBQUlBO2dCQUFDK0IsR0FBRyxPQUF5QnBCLE9BQWxCQSxPQUFPRSxDQUFDLEdBQUcsR0FBRSxPQUFpQkYsT0FBWkEsT0FBT0csQ0FBQyxFQUFDLEtBQWdCLE9BQWJILE9BQU9FLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7O0FBRy9EO0dBeERTTDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2luZVdhdmUudHN4P2M2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFdyYXBwZXIgfSBmcm9tIFwiLi4vc3R5bGUvZ3JpZExheW91dFwiO1xuaW1wb3J0IHtcbiAgQXhpcyxcbiAgSGVyb1N1YnRpdGxlLFxuICBIZXJvVGV4dCxcbiAgTW92ZVBhdGgsXG4gIFNpbmVTVkcsXG4gIFNpbmVXYXZlR3JpZFdyYXBwZXIsXG59IGZyb20gXCIuLi9zdHlsZS9zaW5lV2F2ZVN0eWxlXCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuLi9zdHlsZS9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQXJyYXlSR0JBIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmVXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbFdpZHRoV3JhcHBlcj5cbiAgICAgIDxTaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgICAgICA8SGVyb1RleHQgY29sb3I9e2NvbG9yfT4gZGVzaWduaW5nIHdpdGggZGF0YSA8L0hlcm9UZXh0PlxuICAgICAgICA8SGVyb1N1YnRpdGxlIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgYSBkYXRhIHZpc3VhbGl6YXRpb24gZGVzaWduZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gZW5naW5lZXJpbmcsIEkgbG92ZVxuICAgICAgICAgIHdvcmtpbmcgd2l0aCBjb21wbGV4IGRhdGEgYW5kIHR1cm5pbmcgaXQgaW50byBzb21ldGhpbmcgYmVhdXRpZnVsIGludG9cbiAgICAgICAgICBkYXRhIGRyaXZlbiBkZXNpZ25lclxuICAgICAgICA8L0hlcm9TdWJ0aXRsZT5cbiAgICAgICAgPENhbnZhc1dhdmUgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FudmFzV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIGNvbnN0IHBhdGhSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3N2Z0RpbSwgc2V0U3ZnRGltXSA9IHVzZVN0YXRlKHsgaDogMCwgdzogMCB9KTtcbiAgbGV0IHByb2dyZXNzID0gMDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYXRoKHByb2dyZXNzKTtcbiAgICBpZiAoc3ZnUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFN2Z0RpbSh7XG4gICAgICAgIGg6IHN2Z1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgdzogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXRQYXRoID0gKHsgbnVtV2F2ZXMsIGFtcCB9OiB7IG51bVdhdmVzOiBudW1iZXI7IGFtcDogbnVtYmVyIH0pID0+IHtcbiAgICAvL2h0dHBzOi8vcGh5cy5saWJyZXRleHRzLm9yZy9Cb29rc2hlbHZlcy9Vbml2ZXJzaXR5X1BoeXNpY3MvQm9vayUzQV9JbnRyb2R1Y3RvcnlfUGh5c2ljc18tX0J1aWxkaW5nX01vZGVsc190b19EZXNjcmliZV9PdXJfV29ybGRfKE1hcnRpbl9OZWFyeV9SaW5hbGRvX2FuZF9Xb29kbWFuKS8xNCUzQV9XYXZlcy8xNC4wNiUzQV9TdXBlcnBvc2l0aW9uX29mX3dhdmVzX2FuZF9pbnRlcmZlcmVuY2VcblxuICAgIC8vIFN0ZXAgMTogQ3JlYXRlIEFuaW1hdGVkIE5vcm1hbCBTaW5lIFdhdmVzXG5cbiAgICAvLyBsZXQgd2F2ZWxlbmd0aCA9IDEwOyB3YXZlbGVuZ2h0IGlzIHJldmVyc2Ugb2YgbnVtV2F2ZXNcbiAgICAvLyBsZXQgbnVtV2F2ZXMgPSAyOyAvLyB3aG9sZSBhbmQgIG51bWJlcnMgb25seTtcbiAgICAvLyBsZXQgYW1wID0gMC4zO1xuXG4gICAgbGV0IGNlbnRlckhlaWdodCA9IHN2Z0RpbS5oIC8gMjtcbiAgICBsZXQgYm90dG9tRnJhY3Rpb24gPSBudW1XYXZlcyAqIDQ7XG5cbiAgICBsZXQgc3RhcnRQYXRoID0gYE0gMCAke2NlbnRlckhlaWdodH1gO1xuICAgIGxldCBzaW5nbGVXYXZlID0gYHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke1xuICAgICAgKGFtcCAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMCBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgICgtMSAqIGFtcCAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMGA7XG5cbiAgICAvLyBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBwYXRoID0gc3RhcnRQYXRoICsgbXVsdGlwbGVXYXZlcztcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8U2luZVNWRyByZWY9e3N2Z1JlZn0+XG4gICAgICA8TW92ZVBhdGhcbiAgICAgICAgcmVmPXtwYXRoUmVmfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogNSwgYW1wOiAwLjIgfSl9XG4gICAgICAvPlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBkYXNoYXJyYXk9XCI0IDRcIlxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDMsIGFtcDogMC45IH0pfVxuICAgICAgLz5cbiAgICAgIHsvKiA8cGF0aCByZWY9e3BhdGhSZWZ9IGQ9e3NldFBhdGgoKHByb2dyZXNzID0gMjApKX0gLz4gKi99XG4gICAgICA8QXhpcyBkPXtgTSAwICR7c3ZnRGltLmggLyAyfSBMICR7c3ZnRGltLnd9ICR7c3ZnRGltLmggLyAyfWB9IC8+XG4gICAgPC9TaW5lU1ZHPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRnVsbFdpZHRoV3JhcHBlciIsIkF4aXMiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIk1vdmVQYXRoIiwiU2luZVNWRyIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsInBhdGhSZWYiLCJzdmdSZWYiLCJzdmdEaW0iLCJzZXRTdmdEaW0iLCJoIiwidyIsInByb2dyZXNzIiwic2V0UGF0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsIm51bVdhdmVzIiwiYW1wIiwiY2VudGVySGVpZ2h0IiwiYm90dG9tRnJhY3Rpb24iLCJzdGFydFBhdGgiLCJzaW5nbGVXYXZlIiwibXVsdGlwbGVXYXZlcyIsInJlcGVhdCIsInBhdGgiLCJyZWYiLCJkIiwiZGFzaGFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});