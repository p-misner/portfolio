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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    var origin = {\n        x: 0,\n        y: 300\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 3;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    const setPathSuperposition = (param)=>{\n        let { numWaves1, amp1, numWaves2, amp2 } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        //define bigger\n        if (numWaves1 > numWaves2) {\n            biggerWaveNum = numWaves1;\n        } else {\n            biggerWaveNum = numWaves2;\n        }\n        let centerHeight = svgDim.h / 3;\n        let bottomFraction = biggerWaveNum * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat((amp1 * svgDim.h + amp2 * svgDim.h) / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * (amp1 * svgDim.h + amp2 * svgDim.h) / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(biggerWaveNum * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                speed: 150,\n                d: setPath({\n                    numWaves: 9,\n                    amp: 0.15\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                speed: 150,\n                d: setPath({\n                    numWaves: 1,\n                    amp: 0.45\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                // color={color}\n                dasharray: \"4 4\",\n                speed: 150,\n                d: setPathSuperposition({\n                    numWaves1: 1,\n                    amp1: 0.45,\n                    numWaves2: 9,\n                    amp2: 0.15\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nconst combineTwoSinesCircles_Append = (param)=>{\n    let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2, color, thickness, dasharray } = param;\n    var amplitude = 10; // wave amplitude\n    var rarity = 1; // point spacing\n    var freq = 0.1; // angular frequency\n    var phase = 0; // phase angle\n    // let amp1 = 40;\n    // let angfreq1 = 0.013;\n    // let phase1 = 0;\n    // let amp2 = 120;\n    // let angfreq2 = 0.008;\n    // let phase2 = 1;\n    let lineArray = Array.from(Array(3000).keys());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MoveLineGroup, {\n        children: lineArray.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                color: color,\n                strokeDasharray: dasharray,\n                strokeWidth: \"\".concat(thickness, \"px\"),\n                x1: (x - 10) * rarity + origin.x,\n                y1: (amp1 * Math.sin(angfreq1 * (x - 1) + phase1) + amp2 * Math.sin(angfreq2 * (x - 1) + phase2) + origin.y).toFixed(5),\n                x2: x * rarity + origin.x,\n                y2: (amp1 * Math.sin(angfreq1 * x + phase1) + amp2 * Math.sin(angfreq2 * x + phase2) + origin.y).toFixed(5)\n            }, x, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 194,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 192,\n        columnNumber: 5\n    }, undefined);\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFVdkI7QUFJakIsU0FBU1csU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDVCwrREFBZ0JBO2tCQUNmLDRFQUFDTyxxRUFBbUJBOzs4QkFDbEIsOERBQUNMLDBEQUFRQTtvQkFBQ08sT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNSLDhEQUFZQTtvQkFBQ1EsT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVViLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1jLFNBQVNkLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUFFZ0IsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDbEQsSUFBSUMsV0FBVztJQUVmLElBQUlDLFNBQVM7UUFDWEMsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFFQXZCLGdEQUFTQSxDQUFDO1FBQ1J3QixRQUFRSjtRQUNSLElBQUlMLE9BQU9VLE9BQU8sRUFBRTtZQUNsQlIsVUFBVTtnQkFDUkMsR0FBR0gsT0FBT1UsT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0MsTUFBTTtnQkFDaERSLEdBQUdKLE9BQU9VLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdFLEtBQUs7WUFDakQ7UUFDRjtRQUNBLElBQUlDLE1BQU1kLE9BQU9VLE9BQU87SUFDMUIsR0FBRyxFQUFFO0lBRUwsTUFBTUQsVUFBVTtZQUFDLEVBQUVNLFFBQVEsRUFBRUMsR0FBRyxFQUFxQztRQUNuRSxpT0FBaU87UUFF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QUNDLElBQUlPLFlBQVksSUFBSSxpQkFBaUI7SUFDckMsSUFBSUMsU0FBUyxHQUFHLGdCQUFnQjtJQUNoQyxJQUFJQyxPQUFPLEtBQUssb0JBQW9CO0lBQ3BDLElBQUlDLFFBQVEsR0FBRyxjQUFjO0lBRTdCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBRWxCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLElBQUlDLFlBQWlCQyxNQUFNQyxJQUFJLENBQUNELE1BQU0sTUFBTUUsSUFBSTtJQUVoRCxxQkFDRSw4REFBQ3ZELCtEQUFhQTtrQkFDWG9ELFVBQVVJLEdBQUcsQ0FBQyxDQUFDekMsa0JBQ2QsOERBQUNoQixzREFBSUE7Z0JBQ0hNLE9BQU9BO2dCQUNQb0QsaUJBQWlCaEI7Z0JBQ2pCaUIsYUFBYSxHQUFhLE9BQVZYLFdBQVU7Z0JBRTFCWSxJQUFJLENBQUM1QyxJQUFJLEVBQUMsSUFBS2tDLFNBQVNuQyxPQUFPQyxDQUFDO2dCQUNoQzZDLElBQUksQ0FDRjFCLE9BQU8yQixLQUFLQyxHQUFHLENBQUNuQixXQUFZNUIsQ0FBQUEsSUFBSSxLQUFLOEIsVUFDckNULE9BQU95QixLQUFLQyxHQUFHLENBQUNsQixXQUFZN0IsQ0FBQUEsSUFBSSxLQUFLK0IsVUFDckNoQyxPQUFPRSxDQUFDLEVBQ1IrQyxPQUFPLENBQUM7Z0JBQ1ZDLElBQUlqRCxJQUFJa0MsU0FBU25DLE9BQU9DLENBQUM7Z0JBQ3pCa0QsSUFBSSxDQUNGL0IsT0FBTzJCLEtBQUtDLEdBQUcsQ0FBQ25CLFdBQVc1QixJQUFJOEIsVUFDL0JULE9BQU95QixLQUFLQyxHQUFHLENBQUNsQixXQUFXN0IsSUFBSStCLFVBQy9CaEMsT0FBT0UsQ0FBQyxFQUNSK0MsT0FBTyxDQUFDO2VBWkxoRDs7Ozs7Ozs7OztBQWlCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2luZVdhdmUudHN4P2M2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFdyYXBwZXIgfSBmcm9tIFwiLi4vc3R5bGUvZ3JpZExheW91dFwiO1xuaW1wb3J0IHtcbiAgQXhpcyxcbiAgSGVyb1N1YnRpdGxlLFxuICBIZXJvVGV4dCxcbiAgTGluZSxcbiAgTW92ZUxpbmVHcm91cCxcbiAgTW92ZVBhdGgsXG4gIFNpbmVTVkcsXG4gIFNpbmVXYXZlR3JpZFdyYXBwZXIsXG59IGZyb20gXCIuLi9zdHlsZS9zaW5lV2F2ZVN0eWxlXCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuLi9zdHlsZS9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQXJyYXlSR0JBIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmVXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbFdpZHRoV3JhcHBlcj5cbiAgICAgIDxTaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgICAgICA8SGVyb1RleHQgY29sb3I9e2NvbG9yfT4gZGVzaWduaW5nIHdpdGggZGF0YSA8L0hlcm9UZXh0PlxuICAgICAgICA8SGVyb1N1YnRpdGxlIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgYSBkYXRhIHZpc3VhbGl6YXRpb24gZGVzaWduZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gZW5naW5lZXJpbmcsIEkgbG92ZVxuICAgICAgICAgIHdvcmtpbmcgd2l0aCBjb21wbGV4IGRhdGEgYW5kIHR1cm5pbmcgaXQgaW50byBzb21ldGhpbmcgYmVhdXRpZnVsIGludG9cbiAgICAgICAgICBkYXRhIGRyaXZlbiBkZXNpZ25lclxuICAgICAgICA8L0hlcm9TdWJ0aXRsZT5cbiAgICAgICAgPENhbnZhc1dhdmUgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhbnZhc1dhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICBjb25zdCBwYXRoUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzdmdSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzdmdEaW0sIHNldFN2Z0RpbV0gPSB1c2VTdGF0ZSh7IGg6IDAsIHc6IDAgfSk7XG4gIGxldCBwcm9ncmVzcyA9IDA7XG5cbiAgdmFyIG9yaWdpbiA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDMwMCxcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhdGgocHJvZ3Jlc3MpO1xuICAgIGlmIChzdmdSZWYuY3VycmVudCkge1xuICAgICAgc2V0U3ZnRGltKHtcbiAgICAgICAgaDogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICB3OiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3ZnID0gc3ZnUmVmLmN1cnJlbnQ7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXRQYXRoID0gKHsgbnVtV2F2ZXMsIGFtcCB9OiB7IG51bVdhdmVzOiBudW1iZXI7IGFtcDogbnVtYmVyIH0pID0+IHtcbiAgICAvL2h0dHBzOi8vcGh5cy5saWJyZXRleHRzLm9yZy9Cb29rc2hlbHZlcy9Vbml2ZXJzaXR5X1BoeXNpY3MvQm9vayUzQV9JbnRyb2R1Y3RvcnlfUGh5c2ljc18tX0J1aWxkaW5nX01vZGVsc190b19EZXNjcmliZV9PdXJfV29ybGRfKE1hcnRpbl9OZWFyeV9SaW5hbGRvX2FuZF9Xb29kbWFuKS8xNCUzQV9XYXZlcy8xNC4wNiUzQV9TdXBlcnBvc2l0aW9uX29mX3dhdmVzX2FuZF9pbnRlcmZlcmVuY2VcblxuICAgIC8vIFN0ZXAgMTogQ3JlYXRlIEFuaW1hdGVkIE5vcm1hbCBTaW5lIFdhdmVzXG5cbiAgICAvLyBsZXQgd2F2ZWxlbmd0aCA9IDEwOyB3YXZlbGVuZ2h0IGlzIHJldmVyc2Ugb2YgbnVtV2F2ZXNcbiAgICAvLyBsZXQgbnVtV2F2ZXMgPSAyOyAvLyB3aG9sZSBhbmQgIG51bWJlcnMgb25seTtcbiAgICAvLyBsZXQgYW1wID0gMC4zO1xuXG4gICAgbGV0IGNlbnRlckhlaWdodCA9IHN2Z0RpbS5oIC8gMztcbiAgICBsZXQgYm90dG9tRnJhY3Rpb24gPSBudW1XYXZlcyAqIDQ7XG5cbiAgICBsZXQgc3RhcnRQYXRoID0gYE0gMCAke2NlbnRlckhlaWdodH1gO1xuICAgIGxldCBzaW5nbGVXYXZlID0gYHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke1xuICAgICAgKGFtcCAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMCBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgICgtMSAqIGFtcCAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMGA7XG5cbiAgICAvLyBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBwYXRoID0gc3RhcnRQYXRoICsgbXVsdGlwbGVXYXZlcztcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBjb25zdCBzZXRQYXRoU3VwZXJwb3NpdGlvbiA9ICh7XG4gICAgbnVtV2F2ZXMxLFxuICAgIGFtcDEsXG4gICAgbnVtV2F2ZXMyLFxuICAgIGFtcDIsXG4gIH06IHtcbiAgICBudW1XYXZlczE6IG51bWJlcjtcbiAgICBhbXAxOiBudW1iZXI7XG4gICAgbnVtV2F2ZXMyOiBudW1iZXI7XG4gICAgYW1wMjogbnVtYmVyO1xuICB9KSA9PiB7XG4gICAgLy9odHRwczovL3BoeXMubGlicmV0ZXh0cy5vcmcvQm9va3NoZWx2ZXMvVW5pdmVyc2l0eV9QaHlzaWNzL0Jvb2slM0FfSW50cm9kdWN0b3J5X1BoeXNpY3NfLV9CdWlsZGluZ19Nb2RlbHNfdG9fRGVzY3JpYmVfT3VyX1dvcmxkXyhNYXJ0aW5fTmVhcnlfUmluYWxkb19hbmRfV29vZG1hbikvMTQlM0FfV2F2ZXMvMTQuMDYlM0FfU3VwZXJwb3NpdGlvbl9vZl93YXZlc19hbmRfaW50ZXJmZXJlbmNlXG5cbiAgICAvL2RlZmluZSBiaWdnZXJcblxuICAgIGlmIChudW1XYXZlczEgPiBudW1XYXZlczIpIHtcbiAgICAgIGJpZ2dlcldhdmVOdW0gPSBudW1XYXZlczE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJpZ2dlcldhdmVOdW0gPSBudW1XYXZlczI7XG4gICAgfVxuXG4gICAgbGV0IGNlbnRlckhlaWdodCA9IHN2Z0RpbS5oIC8gMztcbiAgICBsZXQgYm90dG9tRnJhY3Rpb24gPSBiaWdnZXJXYXZlTnVtICogNDtcblxuICAgIGxldCBzdGFydFBhdGggPSBgTSAwICR7Y2VudGVySGVpZ2h0fWA7XG4gICAgbGV0IHNpbmdsZVdhdmUgPSBgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoYW1wMSAqIHN2Z0RpbS5oICsgYW1wMiAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMCBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgICgtMSAqIChhbXAxICogc3ZnRGltLmggKyBhbXAyICogc3ZnRGltLmgpKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMGA7XG5cbiAgICAvLyBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQoYmlnZ2VyV2F2ZU51bSAqIDQpO1xuICAgIGNvbnN0IHBhdGggPSBzdGFydFBhdGggKyBtdWx0aXBsZVdhdmVzO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNpbmVTVkcgcmVmPXtzdmdSZWZ9PlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBzcGVlZD17MTUwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDksIGFtcDogMC4xNSB9KX1cbiAgICAgIC8+XG4gICAgICA8TW92ZVBhdGhcbiAgICAgICAgcmVmPXtwYXRoUmVmfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGRhc2hhcnJheT1cIjQgNFwiXG4gICAgICAgIHNwZWVkPXsxNTB9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogMSwgYW1wOiAwLjQ1IH0pfVxuICAgICAgLz5cbiAgICAgIDxNb3ZlUGF0aFxuICAgICAgICByZWY9e3BhdGhSZWZ9XG4gICAgICAgIC8vIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgZGFzaGFycmF5PVwiNCA0XCJcbiAgICAgICAgc3BlZWQ9ezE1MH1cbiAgICAgICAgZD17c2V0UGF0aFN1cGVycG9zaXRpb24oe1xuICAgICAgICAgIG51bVdhdmVzMTogMSxcbiAgICAgICAgICBhbXAxOiAwLjQ1LFxuICAgICAgICAgIG51bVdhdmVzMjogOSxcbiAgICAgICAgICBhbXAyOiAwLjE1LFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgICB7LyogPEF4aXMgZD17YE0gMCAke3N2Z0RpbS5oIC8gMn0gTCAke3N2Z0RpbS53fSAke3N2Z0RpbS5oIC8gMn1gfSAvPiAqL31cbiAgICA8L1NpbmVTVkc+XG4gICk7XG59XG5cbmNvbnN0IGNvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kID0gKHtcbiAgb3JpZ2luLFxuICBzdmcsXG4gIGFtcDEsXG4gIGFtcDIsXG4gIGFuZ2ZyZXExLFxuICBhbmdmcmVxMixcbiAgcGhhc2UxLFxuICBwaGFzZTIsXG4gIGNvbG9yLFxuICB0aGlja25lc3MsXG4gIGRhc2hhcnJheSxcbn06IHtcbiAgb3JpZ2luOiB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgfTtcbiAgc3ZnOiBhbnk7XG4gIGFtcDE6IG51bWJlcjtcbiAgYW1wMjogbnVtYmVyO1xuICBhbmdmcmVxMTogbnVtYmVyO1xuICBhbmdmcmVxMjogbnVtYmVyO1xuICBwaGFzZTE6IG51bWJlcjtcbiAgcGhhc2UyOiBudW1iZXI7XG4gIGNvbG9yOiBBcnJheVJHQkE7XG4gIHRoaWNrbmVzczogbnVtYmVyO1xuICBkYXNoYXJyYXk6IHN0cmluZztcbn0pID0+IHtcbiAgdmFyIGFtcGxpdHVkZSA9IDEwOyAvLyB3YXZlIGFtcGxpdHVkZVxuICB2YXIgcmFyaXR5ID0gMTsgLy8gcG9pbnQgc3BhY2luZ1xuICB2YXIgZnJlcSA9IDAuMTsgLy8gYW5ndWxhciBmcmVxdWVuY3lcbiAgdmFyIHBoYXNlID0gMDsgLy8gcGhhc2UgYW5nbGVcblxuICAvLyBsZXQgYW1wMSA9IDQwO1xuICAvLyBsZXQgYW5nZnJlcTEgPSAwLjAxMztcbiAgLy8gbGV0IHBoYXNlMSA9IDA7XG5cbiAgLy8gbGV0IGFtcDIgPSAxMjA7XG4gIC8vIGxldCBhbmdmcmVxMiA9IDAuMDA4O1xuICAvLyBsZXQgcGhhc2UyID0gMTtcbiAgbGV0IGxpbmVBcnJheTogYW55ID0gQXJyYXkuZnJvbShBcnJheSgzMDAwKS5rZXlzKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPE1vdmVMaW5lR3JvdXA+XG4gICAgICB7bGluZUFycmF5Lm1hcCgoeDogbnVtYmVyKSA9PiAoXG4gICAgICAgIDxMaW5lXG4gICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgIHN0cm9rZURhc2hhcnJheT17ZGFzaGFycmF5fVxuICAgICAgICAgIHN0cm9rZVdpZHRoPXtgJHt0aGlja25lc3N9cHhgfVxuICAgICAgICAgIGtleT17eH1cbiAgICAgICAgICB4MT17KHggLSAxMCkgKiByYXJpdHkgKyBvcmlnaW4ueH1cbiAgICAgICAgICB5MT17KFxuICAgICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogKHggLSAxKSArIHBoYXNlMSkgK1xuICAgICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogKHggLSAxKSArIHBoYXNlMikgK1xuICAgICAgICAgICAgb3JpZ2luLnlcbiAgICAgICAgICApLnRvRml4ZWQoNSl9XG4gICAgICAgICAgeDI9e3ggKiByYXJpdHkgKyBvcmlnaW4ueH1cbiAgICAgICAgICB5Mj17KFxuICAgICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogeCArIHBoYXNlMSkgK1xuICAgICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogeCArIHBoYXNlMikgK1xuICAgICAgICAgICAgb3JpZ2luLnlcbiAgICAgICAgICApLnRvRml4ZWQoNSl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L01vdmVMaW5lR3JvdXA+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRnVsbFdpZHRoV3JhcHBlciIsIkhlcm9TdWJ0aXRsZSIsIkhlcm9UZXh0IiwiTGluZSIsIk1vdmVMaW5lR3JvdXAiLCJNb3ZlUGF0aCIsIlNpbmVTVkciLCJTaW5lV2F2ZUdyaWRXcmFwcGVyIiwiU2luZVdhdmUiLCJjb2xvciIsIkNhbnZhc1dhdmUiLCJwYXRoUmVmIiwic3ZnUmVmIiwic3ZnRGltIiwic2V0U3ZnRGltIiwiaCIsInciLCJwcm9ncmVzcyIsIm9yaWdpbiIsIngiLCJ5Iiwic2V0UGF0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsIm51bVdhdmVzIiwiYW1wIiwiY2VudGVySGVpZ2h0IiwiYm90dG9tRnJhY3Rpb24iLCJzdGFydFBhdGgiLCJzaW5nbGVXYXZlIiwibXVsdGlwbGVXYXZlcyIsInJlcGVhdCIsInBhdGgiLCJzZXRQYXRoU3VwZXJwb3NpdGlvbiIsIm51bVdhdmVzMSIsImFtcDEiLCJudW1XYXZlczIiLCJhbXAyIiwiYmlnZ2VyV2F2ZU51bSIsInJlZiIsInNwZWVkIiwiZCIsImRhc2hhcnJheSIsImNvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kIiwiYW5nZnJlcTEiLCJhbmdmcmVxMiIsInBoYXNlMSIsInBoYXNlMiIsInRoaWNrbmVzcyIsImFtcGxpdHVkZSIsInJhcml0eSIsImZyZXEiLCJwaGFzZSIsImxpbmVBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJtYXAiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VXaWR0aCIsIngxIiwieTEiLCJNYXRoIiwic2luIiwidG9GaXhlZCIsIngyIiwieTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});