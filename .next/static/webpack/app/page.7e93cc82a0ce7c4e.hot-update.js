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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    var origin = {\n        x: 0,\n        y: svgDim.h / 2\n    };\n    let a1 = 0.25;\n    let a2 = 0.5;\n    let nw1 = 4;\n    let nw2 = 1.2;\n    let amp1 = svgDim.h * a1 / 4;\n    let angfreq1 = 2 * Math.PI / (svgDim.w / nw1); //w = 2PI/T\n    let phase1 = 0;\n    let amp2 = svgDim.h * a2 / 4;\n    let angfreq2 = 2 * Math.PI / (svgDim.w / nw2); //w = 2PI/T\n    let phase2 = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    const combineTwoSinesCircles_Append = (param)=>{\n        let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2, color, thickness, dasharray } = param;\n        var rarity = 1; // point spacing\n        let lineArray = Array.from(Array(3000).keys());\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MoveLineGroup, {\n            children: lineArray.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                    color: color,\n                    x1: (x - 2) * rarity + origin.x,\n                    y1: (amp1 * Math.sin(angfreq1 * (x - 1) + phase1) + amp2 * Math.sin(angfreq2 * (x - 1) + phase2) + origin.y).toFixed(5),\n                    x2: x * rarity + origin.x,\n                    y2: (amp1 * Math.sin(angfreq1 * x + phase1) + amp2 * Math.sin(angfreq2 * x + phase2) + origin.y).toFixed(5)\n                }, x, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 124,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                d: setPath({\n                    numWaves: nw1,\n                    amp: a1\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                d: setPath({\n                    numWaves: nw2,\n                    amp: a2\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            combineTwoSinesCircles_Append({\n                origin,\n                svg: svgRef.current,\n                amp1,\n                amp2,\n                angfreq1,\n                angfreq2,\n                phase1,\n                phase2,\n                color: color,\n                thickness: 2,\n                dasharray: \"2 2\"\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFVdkI7QUFJakIsU0FBU1csU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDVCwrREFBZ0JBO2tCQUNmLDRFQUFDTyxxRUFBbUJBOzs4QkFDbEIsOERBQUNMLDBEQUFRQTtvQkFBQ08sT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNSLDhEQUFZQTtvQkFBQ1EsT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVViLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1jLFNBQVNkLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUFFZ0IsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDbEQsSUFBSUMsV0FBVztJQUVmLElBQUlDLFNBQVM7UUFDWEMsR0FBRztRQUNIQyxHQUFHUCxPQUFPRSxDQUFDLEdBQUc7SUFDaEI7SUFDQSxJQUFJTSxLQUFLO0lBQ1QsSUFBSUMsS0FBSztJQUNULElBQUlDLE1BQU07SUFDVixJQUFJQyxNQUFNO0lBQ1YsSUFBSUMsT0FBTyxPQUFRVixDQUFDLEdBQUdNLEtBQU07SUFDN0IsSUFBSUssV0FBVyxJQUFLQyxLQUFLQyxFQUFFLEdBQUtmLENBQUFBLE9BQU9HLENBQUMsR0FBR08sR0FBRSxHQUFJLFdBQVc7SUFDNUQsSUFBSU0sU0FBUztJQUViLElBQUlDLE9BQU8sT0FBUWYsQ0FBQyxHQUFHTyxLQUFNO0lBQzdCLElBQUlTLFdBQVcsSUFBS0osS0FBS0MsRUFBRSxH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V0FBVTtnQkFDVmMsR0FBRy9CLFFBQVE7b0JBQUVNLFVBQVVmO29CQUFLZ0IsS0FBS2xCO2dCQUFHOzs7Ozs7WUFFckMwQiw4QkFBOEI7Z0JBQzdCOUI7Z0JBQ0FvQixLQUFLMUIsT0FBT3NCLE9BQU87Z0JBQ25CVDtnQkFDQUs7Z0JBQ0FKO2dCQUNBSztnQkFDQUY7Z0JBQ0FHO2dCQUNBdkIsT0FBT0E7Z0JBQ1B3QyxXQUFXO2dCQUNYQyxXQUFXO1lBQ2I7Ozs7Ozs7QUFJTjtHQWxKZ0J4QztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2luZVdhdmUudHN4P2M2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFdyYXBwZXIgfSBmcm9tIFwiLi4vc3R5bGUvZ3JpZExheW91dFwiO1xuaW1wb3J0IHtcbiAgQXhpcyxcbiAgSGVyb1N1YnRpdGxlLFxuICBIZXJvVGV4dCxcbiAgTGluZSxcbiAgTW92ZUxpbmVHcm91cCxcbiAgTW92ZVBhdGgsXG4gIFNpbmVTVkcsXG4gIFNpbmVXYXZlR3JpZFdyYXBwZXIsXG59IGZyb20gXCIuLi9zdHlsZS9zaW5lV2F2ZVN0eWxlXCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuLi9zdHlsZS9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQXJyYXlSR0JBIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmVXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbFdpZHRoV3JhcHBlcj5cbiAgICAgIDxTaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgICAgICA8SGVyb1RleHQgY29sb3I9e2NvbG9yfT4gZGVzaWduaW5nIHdpdGggZGF0YSA8L0hlcm9UZXh0PlxuICAgICAgICA8SGVyb1N1YnRpdGxlIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgYSBkYXRhIHZpc3VhbGl6YXRpb24gZGVzaWduZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gZW5naW5lZXJpbmcsIEkgbG92ZVxuICAgICAgICAgIHdvcmtpbmcgd2l0aCBjb21wbGV4IGRhdGEgYW5kIHR1cm5pbmcgaXQgaW50byBzb21ldGhpbmcgYmVhdXRpZnVsIGludG9cbiAgICAgICAgICBkYXRhIGRyaXZlbiBkZXNpZ25lclxuICAgICAgICA8L0hlcm9TdWJ0aXRsZT5cbiAgICAgICAgPENhbnZhc1dhdmUgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhbnZhc1dhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICBjb25zdCBwYXRoUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzdmdSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzdmdEaW0sIHNldFN2Z0RpbV0gPSB1c2VTdGF0ZSh7IGg6IDAsIHc6IDAgfSk7XG4gIGxldCBwcm9ncmVzcyA9IDA7XG5cbiAgdmFyIG9yaWdpbiA9IHtcbiAgICB4OiAwLFxuICAgIHk6IHN2Z0RpbS5oIC8gMixcbiAgfTtcbiAgbGV0IGExID0gMC4yNTtcbiAgbGV0IGEyID0gMC41O1xuICBsZXQgbncxID0gNDtcbiAgbGV0IG53MiA9IDEuMjtcbiAgbGV0IGFtcDEgPSAoc3ZnRGltLmggKiBhMSkgLyA0O1xuICBsZXQgYW5nZnJlcTEgPSAoMiAqIE1hdGguUEkpIC8gKHN2Z0RpbS53IC8gbncxKTsgLy93ID0gMlBJL1RcbiAgbGV0IHBoYXNlMSA9IDA7XG5cbiAgbGV0IGFtcDIgPSAoc3ZnRGltLmggKiBhMikgLyA0O1xuICBsZXQgYW5nZnJlcTIgPSAoMiAqIE1hdGguUEkpIC8gKHN2Z0RpbS53IC8gbncyKTsgLy93ID0gMlBJL1RcbiAgbGV0IHBoYXNlMiA9IDA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYXRoKHByb2dyZXNzKTtcbiAgICBpZiAoc3ZnUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFN2Z0RpbSh7XG4gICAgICAgIGg6IHN2Z1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgdzogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN2ZyA9IHN2Z1JlZi5jdXJyZW50O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0UGF0aCA9ICh7IG51bVdhdmVzLCBhbXAgfTogeyBudW1XYXZlczogbnVtYmVyOyBhbXA6IG51bWJlciB9KSA9PiB7XG4gICAgLy9odHRwczovL3BoeXMubGlicmV0ZXh0cy5vcmcvQm9va3NoZWx2ZXMvVW5pdmVyc2l0eV9QaHlzaWNzL0Jvb2slM0FfSW50cm9kdWN0b3J5X1BoeXNpY3NfLV9CdWlsZGluZ19Nb2RlbHNfdG9fRGVzY3JpYmVfT3VyX1dvcmxkXyhNYXJ0aW5fTmVhcnlfUmluYWxkb19hbmRfV29vZG1hbikvMTQlM0FfV2F2ZXMvMTQuMDYlM0FfU3VwZXJwb3NpdGlvbl9vZl93YXZlc19hbmRfaW50ZXJmZXJlbmNlXG5cbiAgICAvLyBTdGVwIDE6IENyZWF0ZSBBbmltYXRlZCBOb3JtYWwgU2luZSBXYXZlc1xuXG4gICAgLy8gbGV0IHdhdmVsZW5ndGggPSAxMDsgd2F2ZWxlbmdodCBpcyByZXZlcnNlIG9mIG51bVdhdmVzXG4gICAgLy8gbGV0IG51bVdhdmVzID0gMjsgLy8gd2hvbGUgYW5kICBudW1iZXJzIG9ubHk7XG4gICAgLy8gbGV0IGFtcCA9IDAuMztcblxuICAgIGxldCBjZW50ZXJIZWlnaHQgPSBzdmdEaW0uaCAvIDI7XG4gICAgbGV0IGJvdHRvbUZyYWN0aW9uID0gbnVtV2F2ZXMgKiA0O1xuXG4gICAgbGV0IHN0YXJ0UGF0aCA9IGBNIDAgJHtjZW50ZXJIZWlnaHR9YDtcbiAgICBsZXQgc2luZ2xlV2F2ZSA9IGBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgIChhbXAgKiBzdmdEaW0uaCkgLyAyXG4gICAgfSwgICAkeygyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb259IDAgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoLTEgKiBhbXAgKiBzdmdEaW0uaCkgLyAyXG4gICAgfSwgICAkeygyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb259IDBgO1xuXG4gICAgLy8gY29uc3QgbXVsdGlwbGVXYXZlcyA9IHNpbmdsZVdhdmUucmVwZWF0KG51bVdhdmVzICogNCk7XG4gICAgY29uc3QgbXVsdGlwbGVXYXZlcyA9IHNpbmdsZVdhdmUucmVwZWF0KG51bVdhdmVzICogNCk7XG4gICAgY29uc3QgcGF0aCA9IHN0YXJ0UGF0aCArIG11bHRpcGxlV2F2ZXM7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgY29uc3QgY29tYmluZVR3b1NpbmVzQ2lyY2xlc19BcHBlbmQgPSAoe1xuICAgIG9yaWdpbixcbiAgICBzdmcsXG4gICAgYW1wMSxcbiAgICBhbXAyLFxuICAgIGFuZ2ZyZXExLFxuICAgIGFuZ2ZyZXEyLFxuICAgIHBoYXNlMSxcbiAgICBwaGFzZTIsXG4gICAgY29sb3IsXG4gICAgdGhpY2tuZXNzLFxuICAgIGRhc2hhcnJheSxcbiAgfToge1xuICAgIG9yaWdpbjoge1xuICAgICAgeDogbnVtYmVyO1xuICAgICAgeTogbnVtYmVyO1xuICAgIH07XG4gICAgc3ZnOiBhbnk7XG4gICAgYW1wMTogbnVtYmVyO1xuICAgIGFtcDI6IG51bWJlcjtcbiAgICBhbmdmcmVxMTogbnVtYmVyO1xuICAgIGFuZ2ZyZXEyOiBudW1iZXI7XG4gICAgcGhhc2UxOiBudW1iZXI7XG4gICAgcGhhc2UyOiBudW1iZXI7XG4gICAgY29sb3I6IEFycmF5UkdCQTtcbiAgICB0aGlja25lc3M6IG51bWJlcjtcbiAgICBkYXNoYXJyYXk6IHN0cmluZztcbiAgfSkgPT4ge1xuICAgIHZhciByYXJpdHkgPSAxOyAvLyBwb2ludCBzcGFjaW5nXG5cbiAgICBsZXQgbGluZUFycmF5OiBhbnkgPSBBcnJheS5mcm9tKEFycmF5KDMwMDApLmtleXMoKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vdmVMaW5lR3JvdXA+XG4gICAgICAgIHtsaW5lQXJyYXkubWFwKCh4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgLy8gc3Ryb2tlRGFzaGFycmF5PXtkYXNoYXJyYXl9XG4gICAgICAgICAgICAvLyBzdHJva2VXaWR0aD17YCR7dGhpY2tuZXNzfXB4YH1cbiAgICAgICAgICAgIC8vIHI9ezR9XG4gICAgICAgICAgICBrZXk9e3h9XG4gICAgICAgICAgICB4MT17KHggLSAyKSAqIHJhcml0eSArIG9yaWdpbi54fVxuICAgICAgICAgICAgeTE9eyhcbiAgICAgICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogKHggLSAxKSArIHBoYXNlMSkgK1xuICAgICAgICAgICAgICBhbXAyICogTWF0aC5zaW4oYW5nZnJlcTIgKiAoeCAtIDEpICsgcGhhc2UyKSArXG4gICAgICAgICAgICAgIG9yaWdpbi55XG4gICAgICAgICAgICApLnRvRml4ZWQoNSl9XG4gICAgICAgICAgICB4Mj17eCAqIHJhcml0eSArIG9yaWdpbi54fVxuICAgICAgICAgICAgeTI9eyhcbiAgICAgICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogeCArIHBoYXNlMSkgK1xuICAgICAgICAgICAgICBhbXAyICogTWF0aC5zaW4oYW5nZnJlcTIgKiB4ICsgcGhhc2UyKSArXG4gICAgICAgICAgICAgIG9yaWdpbi55XG4gICAgICAgICAgICApLnRvRml4ZWQoNSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L01vdmVMaW5lR3JvdXA+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTaW5lU1ZHIHJlZj17c3ZnUmVmfT5cbiAgICAgIDxNb3ZlUGF0aFxuICAgICAgICByZWY9e3BhdGhSZWZ9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgZD17c2V0UGF0aCh7IG51bVdhdmVzOiBudzEsIGFtcDogYTEgfSl9XG4gICAgICAvPlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBkYXNoYXJyYXk9XCI0IDRcIlxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IG53MiwgYW1wOiBhMiB9KX1cbiAgICAgIC8+XG4gICAgICB7Y29tYmluZVR3b1NpbmVzQ2lyY2xlc19BcHBlbmQoe1xuICAgICAgICBvcmlnaW4sXG4gICAgICAgIHN2Zzogc3ZnUmVmLmN1cnJlbnQsXG4gICAgICAgIGFtcDEsXG4gICAgICAgIGFtcDIsXG4gICAgICAgIGFuZ2ZyZXExLFxuICAgICAgICBhbmdmcmVxMixcbiAgICAgICAgcGhhc2UxLFxuICAgICAgICBwaGFzZTIsXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgdGhpY2tuZXNzOiAyLFxuICAgICAgICBkYXNoYXJyYXk6IFwiMiAyXCIsXG4gICAgICB9KX1cbiAgICAgIHsvKiA8QXhpcyBkPXtgTSAwICR7c3ZnRGltLmggLyAyfSBMICR7c3ZnRGltLnd9ICR7c3ZnRGltLmggLyAyfWB9IC8+ICovfVxuICAgIDwvU2luZVNWRz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIkxpbmUiLCJNb3ZlTGluZUdyb3VwIiwiTW92ZVBhdGgiLCJTaW5lU1ZHIiwiU2luZVdhdmVHcmlkV3JhcHBlciIsIlNpbmVXYXZlIiwiY29sb3IiLCJDYW52YXNXYXZlIiwicGF0aFJlZiIsInN2Z1JlZiIsInN2Z0RpbSIsInNldFN2Z0RpbSIsImgiLCJ3IiwicHJvZ3Jlc3MiLCJvcmlnaW4iLCJ4IiwieSIsImExIiwiYTIiLCJudzEiLCJudzIiLCJhbXAxIiwiYW5nZnJlcTEiLCJNYXRoIiwiUEkiLCJwaGFzZTEiLCJhbXAyIiwiYW5nZnJlcTIiLCJwaGFzZTIiLCJzZXRQYXRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpZHRoIiwic3ZnIiwibnVtV2F2ZXMiLCJhbXAiLCJjZW50ZXJIZWlnaHQiLCJib3R0b21GcmFjdGlvbiIsInN0YXJ0UGF0aCIsInNpbmdsZVdhdmUiLCJtdWx0aXBsZVdhdmVzIiwicmVwZWF0IiwicGF0aCIsImNvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kIiwidGhpY2tuZXNzIiwiZGFzaGFycmF5IiwicmFyaXR5IiwibGluZUFycmF5IiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsIngxIiwieTEiLCJzaW4iLCJ0b0ZpeGVkIiwieDIiLCJ5MiIsInJlZiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});