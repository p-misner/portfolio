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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    var origin = {\n        x: 10,\n        y: 300\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    let a1 = 0.25;\n    let a2 = 0.45;\n    let nw1 = 4;\n    let nw2 = 1;\n    let s1 = 150;\n    let s2 = 150;\n    let amp1 = svgDim.h * a1 / 4;\n    let angfreq1 = 2 * Math.PI / (s1 * nw1); //w = 2PI/T\n    let phase1 = 0;\n    let amp2 = svgDim.h * a2 / 4;\n    let angfreq2 = 0.08;\n    let phase2 = 1;\n    const combineTwoSinesCircles_Append = (param)=>{\n        let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2, color, thickness, dasharray } = param;\n        var rarity = 1; // point spacing\n        let lineArray = Array.from(Array(3000).keys());\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MoveLineGroup, {\n            children: lineArray.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                    x1: (x - 10) * rarity + origin.x,\n                    y1: (amp1 * Math.sin(angfreq1 * (x - 1) + phase1) + amp2 * Math.sin(angfreq2 * (x - 1) + phase2) + origin.y).toFixed(5),\n                    x2: x * rarity + origin.x,\n                    y2: (amp1 * Math.sin(angfreq1 * x + phase1) + amp2 * Math.sin(angfreq2 * x + phase2) + origin.y).toFixed(5)\n                }, x, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 126,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                speed: 150,\n                d: setPath({\n                    numWaves: 4,\n                    amp: a1\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                speed: 150,\n                d: setPath({\n                    numWaves: 1,\n                    amp: a2\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            combineTwoSinesCircles_Append({\n                origin,\n                svg: svgRef.current,\n                amp1,\n                amp2: 0,\n                angfreq1,\n                angfreq2,\n                phase1,\n                phase2,\n                color: color,\n                thickness: 2,\n                dasharray: \"2 2\"\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFVdkI7QUFJakIsU0FBU1csU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDVCwrREFBZ0JBO2tCQUNmLDRFQUFDTyxxRUFBbUJBOzs4QkFDbEIsOERBQUNMLDBEQUFRQTtvQkFBQ08sT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNSLDhEQUFZQTtvQkFBQ1EsT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVViLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1jLFNBQVNkLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUFFZ0IsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDbEQsSUFBSUMsV0FBVztJQUVmLElBQUlDLFNBQVM7UUFDWEMsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFFQXZCLGdEQUFTQSxDQUFDO1FBQ1J3QixRQUFRSjtRQUNSLElBQUlMLE9BQU9VLE9BQU8sRUFBRTtZQUNsQlIsVUFBVTtnQkFDUkMsR0FBR0gsT0FBT1UsT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0MsTUFBTTtnQkFDaERSLEdBQUdKLE9BQU9VLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdFLEtBQUs7WUFDakQ7UUFDRjtRQUNBLElBQUlDLE1BQU1kLE9BQU9VLE9BQU87SUFDMUIsR0FBRyxFQUFFO0lBRUwsTUFBTUQsVUFBVTtZQUFDLEVBQUVNLFFBQVEsRUFBRUMsR0FBRyxFQUFxQztRQUNuRSxpT0FBaU87UUFF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Z0JBQUc7Ozs7OztZQUVuQ2EsOEJBQThCO2dCQUM3QmhDO2dCQUNBUSxLQUFLZCxPQUFPVSxPQUFPO2dCQUNuQm9CO2dCQUNBSyxNQUFNO2dCQUNOSjtnQkFDQUs7Z0JBQ0FGO2dCQUNBRztnQkFDQXhDLE9BQU9BO2dCQUNQMEMsV0FBVztnQkFDWEMsV0FBVztZQUNiOzs7Ozs7O0FBSU47R0FySmdCMUM7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGdWxsV2lkdGhXcmFwcGVyIH0gZnJvbSBcIi4uL3N0eWxlL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIEF4aXMsXG4gIEhlcm9TdWJ0aXRsZSxcbiAgSGVyb1RleHQsXG4gIExpbmUsXG4gIE1vdmVMaW5lR3JvdXAsXG4gIE1vdmVQYXRoLFxuICBTaW5lU1ZHLFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IEFycmF5UkdCQSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5lV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxXaWR0aFdyYXBwZXI+XG4gICAgICA8U2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICAgICAgPEhlcm9UZXh0IGNvbG9yPXtjb2xvcn0+IGRlc2lnbmluZyB3aXRoIGRhdGEgPC9IZXJvVGV4dD5cbiAgICAgICAgPEhlcm9TdWJ0aXRsZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgIGEgZGF0YSB2aXN1YWxpemF0aW9uIGRlc2lnbmVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIGVuZ2luZWVyaW5nLCBJIGxvdmVcbiAgICAgICAgICB3b3JraW5nIHdpdGggY29tcGxleCBkYXRhIGFuZCB0dXJuaW5nIGl0IGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bCBpbnRvXG4gICAgICAgICAgZGF0YSBkcml2ZW4gZGVzaWduZXJcbiAgICAgICAgPC9IZXJvU3VidGl0bGU+XG4gICAgICAgIDxDYW52YXNXYXZlIGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgIDwvU2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICA8L0Z1bGxXaWR0aFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgY29uc3QgcGF0aFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc3ZnRGltLCBzZXRTdmdEaW1dID0gdXNlU3RhdGUoeyBoOiAwLCB3OiAwIH0pO1xuICBsZXQgcHJvZ3Jlc3MgPSAwO1xuXG4gIHZhciBvcmlnaW4gPSB7XG4gICAgeDogMTAsXG4gICAgeTogMzAwLFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGF0aChwcm9ncmVzcyk7XG4gICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICBzZXRTdmdEaW0oe1xuICAgICAgICBoOiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgIHc6IHN2Z1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdmcgPSBzdmdSZWYuY3VycmVudDtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldFBhdGggPSAoeyBudW1XYXZlcywgYW1wIH06IHsgbnVtV2F2ZXM6IG51bWJlcjsgYW1wOiBudW1iZXIgfSkgPT4ge1xuICAgIC8vaHR0cHM6Ly9waHlzLmxpYnJldGV4dHMub3JnL0Jvb2tzaGVsdmVzL1VuaXZlcnNpdHlfUGh5c2ljcy9Cb29rJTNBX0ludHJvZHVjdG9yeV9QaHlzaWNzXy1fQnVpbGRpbmdfTW9kZWxzX3RvX0Rlc2NyaWJlX091cl9Xb3JsZF8oTWFydGluX05lYXJ5X1JpbmFsZG9fYW5kX1dvb2RtYW4pLzE0JTNBX1dhdmVzLzE0LjA2JTNBX1N1cGVycG9zaXRpb25fb2Zfd2F2ZXNfYW5kX2ludGVyZmVyZW5jZVxuXG4gICAgLy8gU3RlcCAxOiBDcmVhdGUgQW5pbWF0ZWQgTm9ybWFsIFNpbmUgV2F2ZXNcblxuICAgIC8vIGxldCB3YXZlbGVuZ3RoID0gMTA7IHdhdmVsZW5naHQgaXMgcmV2ZXJzZSBvZiBudW1XYXZlc1xuICAgIC8vIGxldCBudW1XYXZlcyA9IDI7IC8vIHdob2xlIGFuZCAgbnVtYmVycyBvbmx5O1xuICAgIC8vIGxldCBhbXAgPSAwLjM7XG5cbiAgICBsZXQgY2VudGVySGVpZ2h0ID0gc3ZnRGltLmggLyAyO1xuICAgIGxldCBib3R0b21GcmFjdGlvbiA9IG51bVdhdmVzICogNDtcblxuICAgIGxldCBzdGFydFBhdGggPSBgTSAwICR7Y2VudGVySGVpZ2h0fWA7XG4gICAgbGV0IHNpbmdsZVdhdmUgPSBgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoYW1wICogc3ZnRGltLmgpIC8gMlxuICAgIH0sICAgJHsoMiAqIHN2Z0RpbS53KSAvIGJvdHRvbUZyYWN0aW9ufSAwIHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke1xuICAgICAgKC0xICogYW1wICogc3ZnRGltLmgpIC8gMlxuICAgIH0sICAgJHsoMiAqIHN2Z0RpbS53KSAvIGJvdHRvbUZyYWN0aW9ufSAwYDtcblxuICAgIC8vIGNvbnN0IG11bHRpcGxlV2F2ZXMgPSBzaW5nbGVXYXZlLnJlcGVhdChudW1XYXZlcyAqIDQpO1xuICAgIGNvbnN0IG11bHRpcGxlV2F2ZXMgPSBzaW5nbGVXYXZlLnJlcGVhdChudW1XYXZlcyAqIDQpO1xuICAgIGNvbnN0IHBhdGggPSBzdGFydFBhdGggKyBtdWx0aXBsZVdhdmVzO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIGxldCBhMSA9IDAuMjU7XG4gIGxldCBhMiA9IDAuNDU7XG4gIGxldCBudzEgPSA0O1xuICBsZXQgbncyID0gMTtcbiAgbGV0IHMxID0gMTUwO1xuICBsZXQgczIgPSAxNTA7XG4gIGxldCBhbXAxID0gKHN2Z0RpbS5oICogYTEpIC8gNDtcbiAgbGV0IGFuZ2ZyZXExID0gKDIgKiBNYXRoLlBJKSAvIChzMSAqIG53MSk7IC8vdyA9IDJQSS9UXG4gIGxldCBwaGFzZTEgPSAwO1xuXG4gIGxldCBhbXAyID0gKHN2Z0RpbS5oICogYTIpIC8gNDtcbiAgbGV0IGFuZ2ZyZXEyID0gMC4wODtcbiAgbGV0IHBoYXNlMiA9IDE7XG4gIGNvbnN0IGNvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kID0gKHtcbiAgICBvcmlnaW4sXG4gICAgc3ZnLFxuICAgIGFtcDEsXG4gICAgYW1wMixcbiAgICBhbmdmcmVxMSxcbiAgICBhbmdmcmVxMixcbiAgICBwaGFzZTEsXG4gICAgcGhhc2UyLFxuICAgIGNvbG9yLFxuICAgIHRoaWNrbmVzcyxcbiAgICBkYXNoYXJyYXksXG4gIH06IHtcbiAgICBvcmlnaW46IHtcbiAgICAgIHg6IG51bWJlcjtcbiAgICAgIHk6IG51bWJlcjtcbiAgICB9O1xuICAgIHN2ZzogYW55O1xuICAgIGFtcDE6IG51bWJlcjtcbiAgICBhbXAyOiBudW1iZXI7XG4gICAgYW5nZnJlcTE6IG51bWJlcjtcbiAgICBhbmdmcmVxMjogbnVtYmVyO1xuICAgIHBoYXNlMTogbnVtYmVyO1xuICAgIHBoYXNlMjogbnVtYmVyO1xuICAgIGNvbG9yOiBBcnJheVJHQkE7XG4gICAgdGhpY2tuZXNzOiBudW1iZXI7XG4gICAgZGFzaGFycmF5OiBzdHJpbmc7XG4gIH0pID0+IHtcbiAgICB2YXIgcmFyaXR5ID0gMTsgLy8gcG9pbnQgc3BhY2luZ1xuXG4gICAgbGV0IGxpbmVBcnJheTogYW55ID0gQXJyYXkuZnJvbShBcnJheSgzMDAwKS5rZXlzKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb3ZlTGluZUdyb3VwPlxuICAgICAgICB7bGluZUFycmF5Lm1hcCgoeDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPExpbmVcbiAgICAgICAgICAgIC8vIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIC8vIHN0cm9rZURhc2hhcnJheT17ZGFzaGFycmF5fVxuICAgICAgICAgICAgLy8gc3Ryb2tlV2lkdGg9e2Ake3RoaWNrbmVzc31weGB9XG4gICAgICAgICAgICBrZXk9e3h9XG4gICAgICAgICAgICB4MT17KHggLSAxMCkgKiByYXJpdHkgKyBvcmlnaW4ueH1cbiAgICAgICAgICAgIHkxPXsoXG4gICAgICAgICAgICAgIGFtcDEgKiBNYXRoLnNpbihhbmdmcmVxMSAqICh4IC0gMSkgKyBwaGFzZTEpICtcbiAgICAgICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogKHggLSAxKSArIHBoYXNlMikgK1xuICAgICAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICAgICAgKS50b0ZpeGVkKDUpfVxuICAgICAgICAgICAgeDI9e3ggKiByYXJpdHkgKyBvcmlnaW4ueH1cbiAgICAgICAgICAgIHkyPXsoXG4gICAgICAgICAgICAgIGFtcDEgKiBNYXRoLnNpbihhbmdmcmVxMSAqIHggKyBwaGFzZTEpICtcbiAgICAgICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogeCArIHBoYXNlMikgK1xuICAgICAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICAgICAgKS50b0ZpeGVkKDUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Nb3ZlTGluZUdyb3VwPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2luZVNWRyByZWY9e3N2Z1JlZn0+XG4gICAgICA8TW92ZVBhdGhcbiAgICAgICAgcmVmPXtwYXRoUmVmfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIHNwZWVkPXsxNTB9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogNCwgYW1wOiBhMSB9KX1cbiAgICAgIC8+XG4gICAgICA8TW92ZVBhdGhcbiAgICAgICAgcmVmPXtwYXRoUmVmfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGRhc2hhcnJheT1cIjQgNFwiXG4gICAgICAgIHNwZWVkPXsxNTB9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogMSwgYW1wOiBhMiB9KX1cbiAgICAgIC8+XG4gICAgICB7Y29tYmluZVR3b1NpbmVzQ2lyY2xlc19BcHBlbmQoe1xuICAgICAgICBvcmlnaW4sXG4gICAgICAgIHN2Zzogc3ZnUmVmLmN1cnJlbnQsXG4gICAgICAgIGFtcDEsXG4gICAgICAgIGFtcDI6IDAsXG4gICAgICAgIGFuZ2ZyZXExLFxuICAgICAgICBhbmdmcmVxMixcbiAgICAgICAgcGhhc2UxLFxuICAgICAgICBwaGFzZTIsXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgdGhpY2tuZXNzOiAyLFxuICAgICAgICBkYXNoYXJyYXk6IFwiMiAyXCIsXG4gICAgICB9KX1cbiAgICAgIHsvKiA8QXhpcyBkPXtgTSAwICR7c3ZnRGltLmggLyAyfSBMICR7c3ZnRGltLnd9ICR7c3ZnRGltLmggLyAyfWB9IC8+ICovfVxuICAgIDwvU2luZVNWRz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIkxpbmUiLCJNb3ZlTGluZUdyb3VwIiwiTW92ZVBhdGgiLCJTaW5lU1ZHIiwiU2luZVdhdmVHcmlkV3JhcHBlciIsIlNpbmVXYXZlIiwiY29sb3IiLCJDYW52YXNXYXZlIiwicGF0aFJlZiIsInN2Z1JlZiIsInN2Z0RpbSIsInNldFN2Z0RpbSIsImgiLCJ3IiwicHJvZ3Jlc3MiLCJvcmlnaW4iLCJ4IiwieSIsInNldFBhdGgiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzdmciLCJudW1XYXZlcyIsImFtcCIsImNlbnRlckhlaWdodCIsImJvdHRvbUZyYWN0aW9uIiwic3RhcnRQYXRoIiwic2luZ2xlV2F2ZSIsIm11bHRpcGxlV2F2ZXMiLCJyZXBlYXQiLCJwYXRoIiwiYTEiLCJhMiIsIm53MSIsIm53MiIsInMxIiwiczIiLCJhbXAxIiwiYW5nZnJlcTEiLCJNYXRoIiwiUEkiLCJwaGFzZTEiLCJhbXAyIiwiYW5nZnJlcTIiLCJwaGFzZTIiLCJjb21iaW5lVHdvU2luZXNDaXJjbGVzX0FwcGVuZCIsInRoaWNrbmVzcyIsImRhc2hhcnJheSIsInJhcml0eSIsImxpbmVBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJtYXAiLCJ4MSIsInkxIiwic2luIiwidG9GaXhlZCIsIngyIiwieTIiLCJyZWYiLCJzcGVlZCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});