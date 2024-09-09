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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n        var origin = {\n            //origin of axes\n            x: 200,\n            y: 100\n        };\n        var amplitude = 10; // wave amplitude\n        var rarity = 1; // point spacing\n        var freq = 0.1; // angular frequency\n        var phase = 0; // phase angle\n        let amp1 = 10;\n        let angfreq1 = 12;\n        let phase1 = 0.2;\n        let amp2 = 4;\n        let angfreq2 = 12;\n        let phase2 = 1.2;\n        for(var i = -100; i < 1000; i++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(amp1 * Math.sin(angfreq1 * (i - 1) + phase1) + amp2 * Math.sin(angfreq2 * (i - 1) + phase2) + origin.y));\n            line.setAttribute(\"x2\", \"\".concat(i * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(amp1 * Math.sin(angfreq1 * i + phase1) + amp2 * Math.sin(angfreq2 * i + phase2) + origin.y));\n            line.setAttribute(\"style\", \"stroke:black;stroke-width:1\");\n            svg.appendChild(line);\n        }\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                speed: 100,\n                d: setPath({\n                    numWaves: 5,\n                    amp: 0.5\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                speed: 30,\n                d: setPath({\n                    numWaves: 0.6,\n                    amp: 0.25\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFRdkI7QUFJakIsU0FBU1MsU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDUCwrREFBZ0JBO2tCQUNmLDRFQUFDSyxxRUFBbUJBOzs4QkFDbEIsOERBQUNILDBEQUFRQTtvQkFBQ0ssT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNOLDhEQUFZQTtvQkFBQ00sT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVVYLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1ZLFNBQVNaLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBQztRQUFFYyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNsRCxJQUFJQyxXQUFXO0lBQ2ZsQixnREFBU0EsQ0FBQztRQUNSbUIsUUFBUUQ7UUFDUixJQUFJTCxPQUFPTyxPQUFPLEVBQUU7WUFDbEJMLFVBQVU7Z0JBQ1JDLEdBQUdILE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdDLE1BQU07Z0JBQ2hETCxHQUFHSixPQUFPTyxPQUFPLENBQUNDLHFCQUFxQixHQUFHRSxLQUFLO1lBQ2pEO1FBQ0Y7UUFDQSxJQUFJQyxNQUFNWCxPQUFPTyxPQUFPO1FBQ3hCLElBQUlLLFNBQVM7WUFDWCxnQkFBZ0I7WUFDaEJDLEdBQUc7WUFDSEMsR0FBRztRQUNMO1FBQ0EsSUFBSUMsWUFBWSxJQUFJLGlCQUFpQjtRQUNyQyxJQUFJQyxTQUFTLEdBQUcsZ0JBQWdCO1FBQ2hDLElBQUlDLE9BQU8sS0FBSyxvQkFBb0I7UUFDcEMsSUFBSUMsUUFBUSxHQUFHLGNBQWM7UUFFN0IsSUFBSUMsT0FBTztRQUNYLElBQUlDLFdBQVc7UUFDZixJQUFJQyxTQUFTO1FBRWIsSUFBSUMsT0FBTztRQUNYLElBQUlDLFdBQVc7UUFDZixJQUFJQyxTQUFTO1FBRWIsSUFBSyxJQUFJQyxJQUFJLENBQUMsS0FBS0EsSUFBSSxNQUFNQSxJQUFLO1lBQ2hDLElBQUlDLE9BQU9DLFNBQVNDLGVBQWUsQ0FBQyw4QkFBOEI7WUFFbEVGLEtBQUtHLFlBQVksQ0FBQyxNQUFNLEdBQStCLE9BQTVCLENBQUNKLElBQUksS0FBS1QsU0FBU0osT0FBT0MsQ0FBQztZQUN0RGEsS0FBS0csWUFBWSxDQUNmLE1BQ0EsR0FJQyxPQUhDVixPQUFPVyxLQUFLQyxHQUFHLENBQUNYLFdBQVlLLENBQUFBLElBQUksS0FBS0osVUFDckNDLE9BQU9RLEtBQUtDLEdBQUcsQ0FBQ1IsV0FBWUUsQ0FBQUEsSUFBSSxLQUFLRCxVQUNyQ1osT0FBT0UsQ0FBQztZQUlaWSxLQUFLRyxZQUFZLENBQUMsTUFBTSxHQUF5QixPQUF0QkosSUFBSVQsU0FBU0osT0FBT0MsQ0FBQztZQUNoRGEsS0FBS0csWUFBWSxDQUNmLE1BQ0EsR0FJQyxPQUhDVixPQUFPVyxLQUFLQyxHQUFHLENBQUNYLFdBQVdLLElBQUlKLFVBQy9CQyxPQUFPUSxLQUFLQyxHQUFHLENBQUNSLFdBQVdFLElBQUlELFVBQy9CWixPQUFPRSxDQUFDO1lBSVpZLEtBQUtHLFlBQVksQ0FBQyxTQUFTO1lBRTNCbEIsSUFBSXFCLFdBQVcsQ0FBQ047UUFDbEI7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNcEIsVUFBVTtZQUFDLEVBQUUyQixRQUFRLEVBQUVDLEdBQUcsRUFBcUM7UUFDbkUsaU9BQWlPO1FBRWpPLDRDQUE0QztRQUU1Qyx5REFBeUQ7UUFDekQsZ0RBQWdEO1FBQ2hELGlCQUFpQjtRQUVqQixJQUFJQyxlQUFlbEMsT0FBT0UsQ0FBQyxHQUFHO1FBQzlCLElBQUlpQyxpQkFBaUJILFdBQVc7UUFFaEMsSUFBSUksWUFBWSxPQUFvQixPQUFiRjtRQUN2QixJQUFJRyxhQUFhLEtBQ2YsT0FEb0JyQyxPQUFPRyxDQUFDLEdBQUdnQyxnQkFBZSxLQUV6QyxPQURMLE1BQU9uQyxPQUFPRSxDQUFDLEdBQUksR0FDcEIsUUFBNkNGLE9BQXZDLElBQUtBLE9BQU9HLENBQUMsR0FBSWdDLGdCQUFlLFNBQ3JDLE9BRDRDbkMsT0FBT0csQ0FBQyxHQUFHZ0MsZ0JBQWUsS0FFakUsT0FETCxDQUFFLElBQUlGLE1BQU1qQyxPQUFPRSxDQUFDLEdBQUksR0FDekIsUUFBc0MsT0FBaEMsSUFBS0YsT0FBT0csQ0FBQyxHQUFJZ0MsZ0JBQWU7UUFFdkMseURBQXlEO1FBQ3pELE1BQU1HLGdCQUFnQkQsV0FBV0UsTUFBTSxDQUFDUCxXQUFXO1FBQ25ELE1BQU1RLE9BQU9KLFlBQVlFO1FBQ3pCLE9BQU9FO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQy9DLHlEQUFPQTtRQUFDZ0QsS0FBSzFDOzswQkFDWiw4REFBQ1AsMERBQVFBO2dCQUNQaUQsS0FBSzNDO2dCQUNMRixPQUFPQTtnQkFDUDhDLE9BQU87Z0JBQ1BDLEdBQUd0QyxRQUFRO29CQUFFMkIsVUFBVTtvQkFBR0MsS0FBSztnQkFBSTs7Ozs7OzBCQUVyQyw4REFBQ3pDLDBEQUFRQTtnQkFDUGlELEtBQUszQztnQkFDTEYsT0FBT0E7Z0JBQ1BnRCxXQUFVO2dCQUNWRixPQUFPO2dCQUNQQyxHQUFHdEMsUUFBUTtvQkFBRTJCLFVBQVU7b0JBQUtDLEtBQUs7Z0JBQUs7Ozs7Ozs7Ozs7OztBQUs5QztHQXhHZ0JwQztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2luZVdhdmUudHN4P2M2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFdyYXBwZXIgfSBmcm9tIFwiLi4vc3R5bGUvZ3JpZExheW91dFwiO1xuaW1wb3J0IHtcbiAgQXhpcyxcbiAgSGVyb1N1YnRpdGxlLFxuICBIZXJvVGV4dCxcbiAgTW92ZVBhdGgsXG4gIFNpbmVTVkcsXG4gIFNpbmVXYXZlR3JpZFdyYXBwZXIsXG59IGZyb20gXCIuLi9zdHlsZS9zaW5lV2F2ZVN0eWxlXCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuLi9zdHlsZS9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQXJyYXlSR0JBIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmVXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbFdpZHRoV3JhcHBlcj5cbiAgICAgIDxTaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgICAgICA8SGVyb1RleHQgY29sb3I9e2NvbG9yfT4gZGVzaWduaW5nIHdpdGggZGF0YSA8L0hlcm9UZXh0PlxuICAgICAgICA8SGVyb1N1YnRpdGxlIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgYSBkYXRhIHZpc3VhbGl6YXRpb24gZGVzaWduZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gZW5naW5lZXJpbmcsIEkgbG92ZVxuICAgICAgICAgIHdvcmtpbmcgd2l0aCBjb21wbGV4IGRhdGEgYW5kIHR1cm5pbmcgaXQgaW50byBzb21ldGhpbmcgYmVhdXRpZnVsIGludG9cbiAgICAgICAgICBkYXRhIGRyaXZlbiBkZXNpZ25lclxuICAgICAgICA8L0hlcm9TdWJ0aXRsZT5cbiAgICAgICAgPENhbnZhc1dhdmUgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhbnZhc1dhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICBjb25zdCBwYXRoUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzdmdSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzdmdEaW0sIHNldFN2Z0RpbV0gPSB1c2VTdGF0ZSh7IGg6IDAsIHc6IDAgfSk7XG4gIGxldCBwcm9ncmVzcyA9IDA7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGF0aChwcm9ncmVzcyk7XG4gICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICBzZXRTdmdEaW0oe1xuICAgICAgICBoOiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgIHc6IHN2Z1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdmcgPSBzdmdSZWYuY3VycmVudDtcbiAgICB2YXIgb3JpZ2luID0ge1xuICAgICAgLy9vcmlnaW4gb2YgYXhlc1xuICAgICAgeDogMjAwLFxuICAgICAgeTogMTAwLFxuICAgIH07XG4gICAgdmFyIGFtcGxpdHVkZSA9IDEwOyAvLyB3YXZlIGFtcGxpdHVkZVxuICAgIHZhciByYXJpdHkgPSAxOyAvLyBwb2ludCBzcGFjaW5nXG4gICAgdmFyIGZyZXEgPSAwLjE7IC8vIGFuZ3VsYXIgZnJlcXVlbmN5XG4gICAgdmFyIHBoYXNlID0gMDsgLy8gcGhhc2UgYW5nbGVcblxuICAgIGxldCBhbXAxID0gMTA7XG4gICAgbGV0IGFuZ2ZyZXExID0gMTI7XG4gICAgbGV0IHBoYXNlMSA9IDAuMjtcblxuICAgIGxldCBhbXAyID0gNDtcbiAgICBsZXQgYW5nZnJlcTIgPSAxMjtcbiAgICBsZXQgcGhhc2UyID0gMS4yO1xuXG4gICAgZm9yICh2YXIgaSA9IC0xMDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJsaW5lXCIpO1xuXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngxXCIsIGAkeyhpIC0gMSkgKiByYXJpdHkgKyBvcmlnaW4ueH1gKTtcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFxuICAgICAgICBcInkxXCIsXG4gICAgICAgIGAke1xuICAgICAgICAgIGFtcDEgKiBNYXRoLnNpbihhbmdmcmVxMSAqIChpIC0gMSkgKyBwaGFzZTEpICtcbiAgICAgICAgICBhbXAyICogTWF0aC5zaW4oYW5nZnJlcTIgKiAoaSAtIDEpICsgcGhhc2UyKSArXG4gICAgICAgICAgb3JpZ2luLnlcbiAgICAgICAgfWBcbiAgICAgICk7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgYCR7aSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTJcIixcbiAgICAgICAgYCR7XG4gICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogaSArIHBoYXNlMSkgK1xuICAgICAgICAgIGFtcDIgKiBNYXRoLnNpbihhbmdmcmVxMiAqIGkgKyBwaGFzZTIpICtcbiAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICB9YFxuICAgICAgKTtcblxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInN0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MVwiKTtcblxuICAgICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldFBhdGggPSAoeyBudW1XYXZlcywgYW1wIH06IHsgbnVtV2F2ZXM6IG51bWJlcjsgYW1wOiBudW1iZXIgfSkgPT4ge1xuICAgIC8vaHR0cHM6Ly9waHlzLmxpYnJldGV4dHMub3JnL0Jvb2tzaGVsdmVzL1VuaXZlcnNpdHlfUGh5c2ljcy9Cb29rJTNBX0ludHJvZHVjdG9yeV9QaHlzaWNzXy1fQnVpbGRpbmdfTW9kZWxzX3RvX0Rlc2NyaWJlX091cl9Xb3JsZF8oTWFydGluX05lYXJ5X1JpbmFsZG9fYW5kX1dvb2RtYW4pLzE0JTNBX1dhdmVzLzE0LjA2JTNBX1N1cGVycG9zaXRpb25fb2Zfd2F2ZXNfYW5kX2ludGVyZmVyZW5jZVxuXG4gICAgLy8gU3RlcCAxOiBDcmVhdGUgQW5pbWF0ZWQgTm9ybWFsIFNpbmUgV2F2ZXNcblxuICAgIC8vIGxldCB3YXZlbGVuZ3RoID0gMTA7IHdhdmVsZW5naHQgaXMgcmV2ZXJzZSBvZiBudW1XYXZlc1xuICAgIC8vIGxldCBudW1XYXZlcyA9IDI7IC8vIHdob2xlIGFuZCAgbnVtYmVycyBvbmx5O1xuICAgIC8vIGxldCBhbXAgPSAwLjM7XG5cbiAgICBsZXQgY2VudGVySGVpZ2h0ID0gc3ZnRGltLmggLyAyO1xuICAgIGxldCBib3R0b21GcmFjdGlvbiA9IG51bVdhdmVzICogNDtcblxuICAgIGxldCBzdGFydFBhdGggPSBgTSAwICR7Y2VudGVySGVpZ2h0fWA7XG4gICAgbGV0IHNpbmdsZVdhdmUgPSBgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoYW1wICogc3ZnRGltLmgpIC8gMlxuICAgIH0sICAgJHsoMiAqIHN2Z0RpbS53KSAvIGJvdHRvbUZyYWN0aW9ufSAwIHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke1xuICAgICAgKC0xICogYW1wICogc3ZnRGltLmgpIC8gMlxuICAgIH0sICAgJHsoMiAqIHN2Z0RpbS53KSAvIGJvdHRvbUZyYWN0aW9ufSAwYDtcblxuICAgIC8vIGNvbnN0IG11bHRpcGxlV2F2ZXMgPSBzaW5nbGVXYXZlLnJlcGVhdChudW1XYXZlcyAqIDQpO1xuICAgIGNvbnN0IG11bHRpcGxlV2F2ZXMgPSBzaW5nbGVXYXZlLnJlcGVhdChudW1XYXZlcyAqIDQpO1xuICAgIGNvbnN0IHBhdGggPSBzdGFydFBhdGggKyBtdWx0aXBsZVdhdmVzO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNpbmVTVkcgcmVmPXtzdmdSZWZ9PlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBzcGVlZD17MTAwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDUsIGFtcDogMC41IH0pfVxuICAgICAgLz5cbiAgICAgIDxNb3ZlUGF0aFxuICAgICAgICByZWY9e3BhdGhSZWZ9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgZGFzaGFycmF5PVwiNCA0XCJcbiAgICAgICAgc3BlZWQ9ezMwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDAuNiwgYW1wOiAwLjI1IH0pfVxuICAgICAgLz5cbiAgICAgIHsvKiA8QXhpcyBkPXtgTSAwICR7c3ZnRGltLmggLyAyfSBMICR7c3ZnRGltLnd9ICR7c3ZnRGltLmggLyAyfWB9IC8+ICovfVxuICAgIDwvU2luZVNWRz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIk1vdmVQYXRoIiwiU2luZVNWRyIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsInBhdGhSZWYiLCJzdmdSZWYiLCJzdmdEaW0iLCJzZXRTdmdEaW0iLCJoIiwidyIsInByb2dyZXNzIiwic2V0UGF0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsIm9yaWdpbiIsIngiLCJ5IiwiYW1wbGl0dWRlIiwicmFyaXR5IiwiZnJlcSIsInBoYXNlIiwiYW1wMSIsImFuZ2ZyZXExIiwicGhhc2UxIiwiYW1wMiIsImFuZ2ZyZXEyIiwicGhhc2UyIiwiaSIsImxpbmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZSIsIk1hdGgiLCJzaW4iLCJhcHBlbmRDaGlsZCIsIm51bVdhdmVzIiwiYW1wIiwiY2VudGVySGVpZ2h0IiwiYm90dG9tRnJhY3Rpb24iLCJzdGFydFBhdGgiLCJzaW5nbGVXYXZlIiwibXVsdGlwbGVXYXZlcyIsInJlcGVhdCIsInBhdGgiLCJyZWYiLCJzcGVlZCIsImQiLCJkYXNoYXJyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});