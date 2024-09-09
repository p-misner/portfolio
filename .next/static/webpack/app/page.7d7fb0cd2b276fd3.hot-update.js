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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    var origin = {\n        x: 10,\n        y: 300\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    let a1 = 0.25;\n    let a2 = 0.45;\n    let nw1 = 4;\n    let nw2 = 1;\n    let s1 = 150;\n    let s2 = 150;\n    let amp1 = svgDim.h * a1 / 4;\n    let angfreq1 = 2 * Math.PI / (svgDim.w / nw1); //w = 2PI/T\n    let phase1 = 0;\n    let amp2 = svgDim.h * a2 / 4;\n    let angfreq2 = 0.08;\n    let phase2 = 1;\n    const combineTwoSinesCircles_Append = (param)=>{\n        let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2, color, thickness, dasharray } = param;\n        var rarity = 1; // point spacing\n        let lineArray = Array.from(Array(3000).keys());\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MoveLineGroup, {\n            children: lineArray.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                    x1: (x - 10) * rarity + origin.x,\n                    y1: (amp1 * Math.sin(angfreq1 * (x - 1) + phase1) + amp2 * Math.sin(angfreq2 * (x - 1) + phase2) + origin.y).toFixed(5),\n                    x2: x * rarity + origin.x,\n                    y2: (amp1 * Math.sin(angfreq1 * x + phase1) + amp2 * Math.sin(angfreq2 * x + phase2) + origin.y).toFixed(5)\n                }, x, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 126,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                speed: 150,\n                d: setPath({\n                    numWaves: 4,\n                    amp: a1\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                speed: 150,\n                d: setPath({\n                    numWaves: 1,\n                    amp: a2\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            combineTwoSinesCircles_Append({\n                origin,\n                svg: svgRef.current,\n                amp1,\n                amp2: 0,\n                angfreq1,\n                angfreq2,\n                phase1,\n                phase2,\n                color: color,\n                thickness: 2,\n                dasharray: \"2 2\"\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFVdkI7QUFJakIsU0FBU1csU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDVCwrREFBZ0JBO2tCQUNmLDRFQUFDTyxxRUFBbUJBOzs4QkFDbEIsOERBQUNMLDBEQUFRQTtvQkFBQ08sT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNSLDhEQUFZQTtvQkFBQ1EsT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVViLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1jLFNBQVNkLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUFFZ0IsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDbEQsSUFBSUMsV0FBVztJQUVmLElBQUlDLFNBQVM7UUFDWEMsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFFQXZCLGdEQUFTQSxDQUFDO1FBQ1J3QixRQUFRSjtRQUNSLElBQUlMLE9BQU9VLE9BQU8sRUFBRTtZQUNsQlIsVUFBVTtnQkFDUkMsR0FBR0gsT0FBT1UsT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0MsTUFBTTtnQkFDaERSLEdBQUdKLE9BQU9VLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdFLEtBQUs7WUFDakQ7UUFDRjtRQUNBLElBQUlDLE1BQU1kLE9BQU9VLE9BQU87SUFDMUIsR0FBRyxFQUFFO0lBRUwsTUFBTUQsVUFBVTtZQUFDLEVBQUVNLFFBQVEsRUFBRUMsR0FBRyxFQUFxQztRQUNuRSxpT0FBaU87UUFF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b0JBQUdDLEtBQUtTO2dCQUFHOzs7Ozs7WUFFbkNhLDhCQUE4QjtnQkFDN0JoQztnQkFDQVEsS0FBS2QsT0FBT1UsT0FBTztnQkFDbkJvQjtnQkFDQUssTUFBTTtnQkFDTko7Z0JBQ0FLO2dCQUNBRjtnQkFDQUc7Z0JBQ0F4QyxPQUFPQTtnQkFDUDBDLFdBQVc7Z0JBQ1hDLFdBQVc7WUFDYjs7Ozs7OztBQUlOO0dBckpnQjFDO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3g/YzYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRnVsbFdpZHRoV3JhcHBlciB9IGZyb20gXCIuLi9zdHlsZS9ncmlkTGF5b3V0XCI7XG5pbXBvcnQge1xuICBBeGlzLFxuICBIZXJvU3VidGl0bGUsXG4gIEhlcm9UZXh0LFxuICBMaW5lLFxuICBNb3ZlTGluZUdyb3VwLFxuICBNb3ZlUGF0aCxcbiAgU2luZVNWRyxcbiAgU2luZVdhdmVHcmlkV3JhcHBlcixcbn0gZnJvbSBcIi4uL3N0eWxlL3NpbmVXYXZlU3R5bGVcIjtcbmltcG9ydCB7IENvcmVDb2xvcklucHV0IH0gZnJvbSBcIi4uL3N0eWxlL3N0eWxlQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBcnJheVJHQkEgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZVdhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICByZXR1cm4gKFxuICAgIDxGdWxsV2lkdGhXcmFwcGVyPlxuICAgICAgPFNpbmVXYXZlR3JpZFdyYXBwZXI+XG4gICAgICAgIDxIZXJvVGV4dCBjb2xvcj17Y29sb3J9PiBkZXNpZ25pbmcgd2l0aCBkYXRhIDwvSGVyb1RleHQ+XG4gICAgICAgIDxIZXJvU3VidGl0bGUgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICBhIGRhdGEgdmlzdWFsaXphdGlvbiBkZXNpZ25lciB3aXRoIGEgYmFja2dyb3VuZCBpbiBlbmdpbmVlcmluZywgSSBsb3ZlXG4gICAgICAgICAgd29ya2luZyB3aXRoIGNvbXBsZXggZGF0YSBhbmQgdHVybmluZyBpdCBpbnRvIHNvbWV0aGluZyBiZWF1dGlmdWwgaW50b1xuICAgICAgICAgIGRhdGEgZHJpdmVuIGRlc2lnbmVyXG4gICAgICAgIDwvSGVyb1N1YnRpdGxlPlxuICAgICAgICA8Q2FudmFzV2F2ZSBjb2xvcj17Y29sb3J9IC8+XG4gICAgICA8L1NpbmVXYXZlR3JpZFdyYXBwZXI+XG4gICAgPC9GdWxsV2lkdGhXcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FudmFzV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIGNvbnN0IHBhdGhSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3N2Z0RpbSwgc2V0U3ZnRGltXSA9IHVzZVN0YXRlKHsgaDogMCwgdzogMCB9KTtcbiAgbGV0IHByb2dyZXNzID0gMDtcblxuICB2YXIgb3JpZ2luID0ge1xuICAgIHg6IDEwLFxuICAgIHk6IDMwMCxcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhdGgocHJvZ3Jlc3MpO1xuICAgIGlmIChzdmdSZWYuY3VycmVudCkge1xuICAgICAgc2V0U3ZnRGltKHtcbiAgICAgICAgaDogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICB3OiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3ZnID0gc3ZnUmVmLmN1cnJlbnQ7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXRQYXRoID0gKHsgbnVtV2F2ZXMsIGFtcCB9OiB7IG51bVdhdmVzOiBudW1iZXI7IGFtcDogbnVtYmVyIH0pID0+IHtcbiAgICAvL2h0dHBzOi8vcGh5cy5saWJyZXRleHRzLm9yZy9Cb29rc2hlbHZlcy9Vbml2ZXJzaXR5X1BoeXNpY3MvQm9vayUzQV9JbnRyb2R1Y3RvcnlfUGh5c2ljc18tX0J1aWxkaW5nX01vZGVsc190b19EZXNjcmliZV9PdXJfV29ybGRfKE1hcnRpbl9OZWFyeV9SaW5hbGRvX2FuZF9Xb29kbWFuKS8xNCUzQV9XYXZlcy8xNC4wNiUzQV9TdXBlcnBvc2l0aW9uX29mX3dhdmVzX2FuZF9pbnRlcmZlcmVuY2VcblxuICAgIC8vIFN0ZXAgMTogQ3JlYXRlIEFuaW1hdGVkIE5vcm1hbCBTaW5lIFdhdmVzXG5cbiAgICAvLyBsZXQgd2F2ZWxlbmd0aCA9IDEwOyB3YXZlbGVuZ2h0IGlzIHJldmVyc2Ugb2YgbnVtV2F2ZXNcbiAgICAvLyBsZXQgbnVtV2F2ZXMgPSAyOyAvLyB3aG9sZSBhbmQgIG51bWJlcnMgb25seTtcbiAgICAvLyBsZXQgYW1wID0gMC4zO1xuXG4gICAgbGV0IGNlbnRlckhlaWdodCA9IHN2Z0RpbS5oIC8gMjtcbiAgICBsZXQgYm90dG9tRnJhY3Rpb24gPSBudW1XYXZlcyAqIDQ7XG5cbiAgICBsZXQgc3RhcnRQYXRoID0gYE0gMCAke2NlbnRlckhlaWdodH1gO1xuICAgIGxldCBzaW5nbGVXYXZlID0gYHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke1xuICAgICAgKGFtcCAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMCBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgICgtMSAqIGFtcCAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMGA7XG5cbiAgICAvLyBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBwYXRoID0gc3RhcnRQYXRoICsgbXVsdGlwbGVXYXZlcztcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBsZXQgYTEgPSAwLjI1O1xuICBsZXQgYTIgPSAwLjQ1O1xuICBsZXQgbncxID0gNDtcbiAgbGV0IG53MiA9IDE7XG4gIGxldCBzMSA9IDE1MDtcbiAgbGV0IHMyID0gMTUwO1xuICBsZXQgYW1wMSA9IChzdmdEaW0uaCAqIGExKSAvIDQ7XG4gIGxldCBhbmdmcmVxMSA9ICgyICogTWF0aC5QSSkgLyAoc3ZnRGltLncgLyBudzEpOyAvL3cgPSAyUEkvVFxuICBsZXQgcGhhc2UxID0gMDtcblxuICBsZXQgYW1wMiA9IChzdmdEaW0uaCAqIGEyKSAvIDQ7XG4gIGxldCBhbmdmcmVxMiA9IDAuMDg7XG4gIGxldCBwaGFzZTIgPSAxO1xuICBjb25zdCBjb21iaW5lVHdvU2luZXNDaXJjbGVzX0FwcGVuZCA9ICh7XG4gICAgb3JpZ2luLFxuICAgIHN2ZyxcbiAgICBhbXAxLFxuICAgIGFtcDIsXG4gICAgYW5nZnJlcTEsXG4gICAgYW5nZnJlcTIsXG4gICAgcGhhc2UxLFxuICAgIHBoYXNlMixcbiAgICBjb2xvcixcbiAgICB0aGlja25lc3MsXG4gICAgZGFzaGFycmF5LFxuICB9OiB7XG4gICAgb3JpZ2luOiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgfTtcbiAgICBzdmc6IGFueTtcbiAgICBhbXAxOiBudW1iZXI7XG4gICAgYW1wMjogbnVtYmVyO1xuICAgIGFuZ2ZyZXExOiBudW1iZXI7XG4gICAgYW5nZnJlcTI6IG51bWJlcjtcbiAgICBwaGFzZTE6IG51bWJlcjtcbiAgICBwaGFzZTI6IG51bWJlcjtcbiAgICBjb2xvcjogQXJyYXlSR0JBO1xuICAgIHRoaWNrbmVzczogbnVtYmVyO1xuICAgIGRhc2hhcnJheTogc3RyaW5nO1xuICB9KSA9PiB7XG4gICAgdmFyIHJhcml0eSA9IDE7IC8vIHBvaW50IHNwYWNpbmdcblxuICAgIGxldCBsaW5lQXJyYXk6IGFueSA9IEFycmF5LmZyb20oQXJyYXkoMzAwMCkua2V5cygpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TW92ZUxpbmVHcm91cD5cbiAgICAgICAge2xpbmVBcnJheS5tYXAoKHg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAvLyBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAvLyBzdHJva2VEYXNoYXJyYXk9e2Rhc2hhcnJheX1cbiAgICAgICAgICAgIC8vIHN0cm9rZVdpZHRoPXtgJHt0aGlja25lc3N9cHhgfVxuICAgICAgICAgICAga2V5PXt4fVxuICAgICAgICAgICAgeDE9eyh4IC0gMTApICogcmFyaXR5ICsgb3JpZ2luLnh9XG4gICAgICAgICAgICB5MT17KFxuICAgICAgICAgICAgICBhbXAxICogTWF0aC5zaW4oYW5nZnJlcTEgKiAoeCAtIDEpICsgcGhhc2UxKSArXG4gICAgICAgICAgICAgIGFtcDIgKiBNYXRoLnNpbihhbmdmcmVxMiAqICh4IC0gMSkgKyBwaGFzZTIpICtcbiAgICAgICAgICAgICAgb3JpZ2luLnlcbiAgICAgICAgICAgICkudG9GaXhlZCg1KX1cbiAgICAgICAgICAgIHgyPXt4ICogcmFyaXR5ICsgb3JpZ2luLnh9XG4gICAgICAgICAgICB5Mj17KFxuICAgICAgICAgICAgICBhbXAxICogTWF0aC5zaW4oYW5nZnJlcTEgKiB4ICsgcGhhc2UxKSArXG4gICAgICAgICAgICAgIGFtcDIgKiBNYXRoLnNpbihhbmdmcmVxMiAqIHggKyBwaGFzZTIpICtcbiAgICAgICAgICAgICAgb3JpZ2luLnlcbiAgICAgICAgICAgICkudG9GaXhlZCg1KX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTW92ZUxpbmVHcm91cD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNpbmVTVkcgcmVmPXtzdmdSZWZ9PlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBzcGVlZD17MTUwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDQsIGFtcDogYTEgfSl9XG4gICAgICAvPlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBkYXNoYXJyYXk9XCI0IDRcIlxuICAgICAgICBzcGVlZD17MTUwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDEsIGFtcDogYTIgfSl9XG4gICAgICAvPlxuICAgICAge2NvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kKHtcbiAgICAgICAgb3JpZ2luLFxuICAgICAgICBzdmc6IHN2Z1JlZi5jdXJyZW50LFxuICAgICAgICBhbXAxLFxuICAgICAgICBhbXAyOiAwLFxuICAgICAgICBhbmdmcmVxMSxcbiAgICAgICAgYW5nZnJlcTIsXG4gICAgICAgIHBoYXNlMSxcbiAgICAgICAgcGhhc2UyLFxuICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIHRoaWNrbmVzczogMixcbiAgICAgICAgZGFzaGFycmF5OiBcIjIgMlwiLFxuICAgICAgfSl9XG4gICAgICB7LyogPEF4aXMgZD17YE0gMCAke3N2Z0RpbS5oIC8gMn0gTCAke3N2Z0RpbS53fSAke3N2Z0RpbS5oIC8gMn1gfSAvPiAqL31cbiAgICA8L1NpbmVTVkc+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGdWxsV2lkdGhXcmFwcGVyIiwiSGVyb1N1YnRpdGxlIiwiSGVyb1RleHQiLCJMaW5lIiwiTW92ZUxpbmVHcm91cCIsIk1vdmVQYXRoIiwiU2luZVNWRyIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsInBhdGhSZWYiLCJzdmdSZWYiLCJzdmdEaW0iLCJzZXRTdmdEaW0iLCJoIiwidyIsInByb2dyZXNzIiwib3JpZ2luIiwieCIsInkiLCJzZXRQYXRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpZHRoIiwic3ZnIiwibnVtV2F2ZXMiLCJhbXAiLCJjZW50ZXJIZWlnaHQiLCJib3R0b21GcmFjdGlvbiIsInN0YXJ0UGF0aCIsInNpbmdsZVdhdmUiLCJtdWx0aXBsZVdhdmVzIiwicmVwZWF0IiwicGF0aCIsImExIiwiYTIiLCJudzEiLCJudzIiLCJzMSIsInMyIiwiYW1wMSIsImFuZ2ZyZXExIiwiTWF0aCIsIlBJIiwicGhhc2UxIiwiYW1wMiIsImFuZ2ZyZXEyIiwicGhhc2UyIiwiY29tYmluZVR3b1NpbmVzQ2lyY2xlc19BcHBlbmQiLCJ0aGlja25lc3MiLCJkYXNoYXJyYXkiLCJyYXJpdHkiLCJsaW5lQXJyYXkiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwieDEiLCJ5MSIsInNpbiIsInRvRml4ZWQiLCJ4MiIsInkyIiwicmVmIiwic3BlZWQiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});