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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    var origin = {\n        x: 0,\n        y: 300\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    let amp1 = svgDim.h * 0.25;\n    let angfreq1 = 0.013;\n    let phase1 = 0;\n    let amp2 = svgDim.h * 0.45;\n    let angfreq2 = 0.08;\n    let phase2 = 1;\n    const combineTwoSinesCircles_Append = (param)=>{\n        let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2, color, thickness, dasharray } = param;\n        var rarity = 1; // point spacing\n        let lineArray = Array.from(Array(3000).keys());\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MoveLineGroup, {\n            children: lineArray.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                    x1: (x - 10) * rarity + origin.x,\n                    y1: (amp1 * Math.sin(angfreq1 * (x - 1) + phase1) + amp2 * Math.sin(angfreq2 * (x - 1) + phase2) + origin.y).toFixed(5),\n                    x2: x * rarity + origin.x,\n                    y2: (amp1 * Math.sin(angfreq1 * x + phase1) + amp2 * Math.sin(angfreq2 * x + phase2) + origin.y).toFixed(5)\n                }, x, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 120,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                speed: 150,\n                d: setPath({\n                    numWaves: 4,\n                    amp: 0.25\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                speed: 150,\n                d: setPath({\n                    numWaves: 1,\n                    amp: 0.45\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this),\n            combineTwoSinesCircles_Append({\n                origin,\n                svg: svgRef.current,\n                amp1,\n                amp2,\n                angfreq1,\n                angfreq2,\n                phase1,\n                phase2,\n                color: color,\n                thickness: 2,\n                dasharray: \"2 2\"\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 146,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFVdkI7QUFJakIsU0FBU1csU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDVCwrREFBZ0JBO2tCQUNmLDRFQUFDTyxxRUFBbUJBOzs4QkFDbEIsOERBQUNMLDBEQUFRQTtvQkFBQ08sT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNSLDhEQUFZQTtvQkFBQ1EsT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVViLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1jLFNBQVNkLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUFFZ0IsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDbEQsSUFBSUMsV0FBVztJQUVmLElBQUlDLFNBQVM7UUFDWEMsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFFQXZCLGdEQUFTQSxDQUFDO1FBQ1J3QixRQUFRSjtRQUNSLElBQUlMLE9BQU9VLE9BQU8sRUFBRTtZQUNsQlIsVUFBVTtnQkFDUkMsR0FBR0gsT0FBT1UsT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0MsTUFBTTtnQkFDaERSLEdBQUdKLE9BQU9VLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdFLEtBQUs7WUFDakQ7UUFDRjtRQUNBLElBQUlDLE1BQU1kLE9BQU9VLE9BQU87SUFDMUIsR0FBRyxFQUFFO0lBRUwsTUFBTUQsVUFBVTtZQUFDLEVBQUVNLFFBQVEsRUFBRUMsR0FBRyxFQUFxQztRQUNuRSxpT0FBaU87UUFFak8sNENBQTRDO1FBRTVDLHlEQUF5RDtRQUN6RCxnREFBZ0Q7UUFDaEQsaUJBQWlCO1FBRWpCLElBQUlDLGVBQWVoQixPQUFPRSxDQUFDLEdBQUc7UUFDOUIsSUFBSWUsaUJBQWlCSCxXQUFXO1FBRWhDLElBQUlJLFlBQVksT0FBb0IsT0FBYkY7UUFDdkIsSUFBSUcsYUFBYSxLQUNmLE9BRG9CbkIsT0FBT0csQ0FBQyxHQUFHYyxnQkFBZSxLQUV6QyxPQURMLE1BQU9qQixPQUFPRSxDQUFDLEdBQUksR0FDcEIsUUFBNkNGLE9BQXZDLElBQUtBLE9BQU9HLENBQUMsR0FBSWMsZ0JBQWUsU0FDckMsT0FENENqQixPQUFPRyxDQUFDLEdBQUdjLGdCQUFlLEtBRWpFLE9BREwsQ0FBRSxJQUFJRixNQUFNZixPQUFPRSxDQUFDLEdBQUksR0FDekIsUUFBc0MsT0FBaEMsSUFBS0YsT0FBT0csQ0FBQyxHQUFJYyxnQkFBZTtRQUV2Qyx5REFBeUQ7UUFDekQsTUFBTUcsZ0JBQWdCRCxXQUFXRSxNQUFNLENBQUNQLFdBQVc7UUFDbkQsTUFBTVEsT0FBT0osWUFBWUU7UUFDekIsT0FBT0U7SUFDVDtJQUVBLElBQUlDLE9BQU92QixPQUFPRSxDQUFDLEdBQUc7SUFDdEIsSUFBSXNCLFdBQVc7SUFDZixJQUFJQyxTQUFTO0lBRWIsSUFBSUMsT0FBTzFCLE9BQU9FLENBQUMsR0FBRztJQUN0QixJQUFJeUIsV0FBVztJQUNmLElBQUlDLFNBQVM7SUFDYixNQUFNQyxnQ0FBZ0M7WUFBQyxFQUNyQ3hCLE1BQU0sRUFDTlEsR0FBRyxFQUNIVSxJQUFJLEVBQ0pHLElBQUksRUFDSkYsUUFBUSxFQUNSRyxRQUFRLEVBQ1JGLE1BQU0sRUFDTkcsTUFBTSxFQUNOaEMsS0FBSyxFQUNMa0MsU0FBUyxFQUNUQyxTQUFTLEVBZ0JWO1FBQ0MsSUFBSUMsU0FBUyxHQUFHLGdCQUFnQjtRQUVoQyxJQUFJQyxZQUFpQkMsTUFBTUMsSUFBSSxDQUFDRCxNQUFNLE1BQU1FLElBQUk7UUFFaEQscUJBQ0UsOERBQUM3QywrREFBYUE7c0JBQ1gwQyxVQUFVSSxHQUFHLENBQUMsQ0FBQy9CLGtCQUNkLDhEQUFDaEIsc0RBQUlBO29CQUtIZ0QsSUFBSSxDQUFDaEMsSUFBSSxFQUFDLElBQUswQixTQUFTM0IsT0FBT0MsQ0FBQztvQkFDaENpQyxJQUFJLENBQ0ZoQixPQUFPaUIsS0FBS0MsR0FBRyxDQUFDakIsV0FBWWxCLENBQUFBLElBQUksS0FBS21CLFVBQ3JDQyxPQUFPYyxLQUFLQyxHQUFHLENBQUNkLFdBQVlyQixDQUFBQSxJQUFJLEtBQUtzQixVQUNyQ3ZCLE9BQU9FLENBQUMsRUFDUm1DLE9BQU8sQ0FBQztvQkFDVkMsSUFBSXJDLElBQUkwQixTQUFTM0IsT0FBT0MsQ0FBQztvQkFDekJzQyxJQUFJLENBQ0ZyQixPQUFPaUIsS0FBS0MsR0FBRyxDQUFDakIsV0FBV2xCLElBQUltQixVQUMvQkMsT0FBT2MsS0FBS0MsR0FBRyxDQUFDZCxXQUFXckIsSUFBSXNCLFVBQy9CdkIsT0FBT0UsQ0FBQyxFQUNSbUMsT0FBTyxDQUFDO21CQVpMcEM7Ozs7Ozs7Ozs7SUFpQmY7SUFFQSxxQkFDRSw4REFBQ2IseURBQU9BO1FBQUNvRCxLQUFLOUM7OzBCQUNaLDhEQUFDUCwwREFBUUE7Z0JBQ1BxRCxLQUFLL0M7Z0JBQ0xGLE9BQU9BO2dCQUNQa0QsT0FBTztnQkFDUEMsR0FBR3ZDLFFBQVE7b0JBQUVNLFVBQVU7b0JBQUdDLEtBQUs7Z0JBQUs7Ozs7OzswQkFFdEMsOERBQUN2QiwwREFBUUE7Z0JBQ1BxRCxLQUFLL0M7Z0JBQ0xGLE9BQU9BO2dCQUNQbUMsV0FBVTtnQkFDVmUsT0FBTztnQkFDUEMsR0FBR3ZDLFFBQVE7b0JBQUVNLFVBQVU7b0JBQUdDLEtBQUs7Z0JBQUs7Ozs7OztZQUVyQ2MsOEJBQThCO2dCQUM3QnhCO2dCQUNBUSxLQUFLZCxPQUFPVSxPQUFPO2dCQUNuQmM7Z0JBQ0FHO2dCQUNBRjtnQkFDQUc7Z0JBQ0FGO2dCQUNBRztnQkFDQWhDLE9BQU9BO2dCQUNQa0MsV0FBVztnQkFDWEMsV0FBVztZQUNiOzs7Ozs7O0FBSU47R0EvSWdCbEM7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGdWxsV2lkdGhXcmFwcGVyIH0gZnJvbSBcIi4uL3N0eWxlL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIEF4aXMsXG4gIEhlcm9TdWJ0aXRsZSxcbiAgSGVyb1RleHQsXG4gIExpbmUsXG4gIE1vdmVMaW5lR3JvdXAsXG4gIE1vdmVQYXRoLFxuICBTaW5lU1ZHLFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IEFycmF5UkdCQSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5lV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxXaWR0aFdyYXBwZXI+XG4gICAgICA8U2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICAgICAgPEhlcm9UZXh0IGNvbG9yPXtjb2xvcn0+IGRlc2lnbmluZyB3aXRoIGRhdGEgPC9IZXJvVGV4dD5cbiAgICAgICAgPEhlcm9TdWJ0aXRsZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgIGEgZGF0YSB2aXN1YWxpemF0aW9uIGRlc2lnbmVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIGVuZ2luZWVyaW5nLCBJIGxvdmVcbiAgICAgICAgICB3b3JraW5nIHdpdGggY29tcGxleCBkYXRhIGFuZCB0dXJuaW5nIGl0IGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bCBpbnRvXG4gICAgICAgICAgZGF0YSBkcml2ZW4gZGVzaWduZXJcbiAgICAgICAgPC9IZXJvU3VidGl0bGU+XG4gICAgICAgIDxDYW52YXNXYXZlIGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgIDwvU2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICA8L0Z1bGxXaWR0aFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgY29uc3QgcGF0aFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc3ZnRGltLCBzZXRTdmdEaW1dID0gdXNlU3RhdGUoeyBoOiAwLCB3OiAwIH0pO1xuICBsZXQgcHJvZ3Jlc3MgPSAwO1xuXG4gIHZhciBvcmlnaW4gPSB7XG4gICAgeDogMCxcbiAgICB5OiAzMDAsXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYXRoKHByb2dyZXNzKTtcbiAgICBpZiAoc3ZnUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFN2Z0RpbSh7XG4gICAgICAgIGg6IHN2Z1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgdzogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN2ZyA9IHN2Z1JlZi5jdXJyZW50O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0UGF0aCA9ICh7IG51bVdhdmVzLCBhbXAgfTogeyBudW1XYXZlczogbnVtYmVyOyBhbXA6IG51bWJlciB9KSA9PiB7XG4gICAgLy9odHRwczovL3BoeXMubGlicmV0ZXh0cy5vcmcvQm9va3NoZWx2ZXMvVW5pdmVyc2l0eV9QaHlzaWNzL0Jvb2slM0FfSW50cm9kdWN0b3J5X1BoeXNpY3NfLV9CdWlsZGluZ19Nb2RlbHNfdG9fRGVzY3JpYmVfT3VyX1dvcmxkXyhNYXJ0aW5fTmVhcnlfUmluYWxkb19hbmRfV29vZG1hbikvMTQlM0FfV2F2ZXMvMTQuMDYlM0FfU3VwZXJwb3NpdGlvbl9vZl93YXZlc19hbmRfaW50ZXJmZXJlbmNlXG5cbiAgICAvLyBTdGVwIDE6IENyZWF0ZSBBbmltYXRlZCBOb3JtYWwgU2luZSBXYXZlc1xuXG4gICAgLy8gbGV0IHdhdmVsZW5ndGggPSAxMDsgd2F2ZWxlbmdodCBpcyByZXZlcnNlIG9mIG51bVdhdmVzXG4gICAgLy8gbGV0IG51bVdhdmVzID0gMjsgLy8gd2hvbGUgYW5kICBudW1iZXJzIG9ubHk7XG4gICAgLy8gbGV0IGFtcCA9IDAuMztcblxuICAgIGxldCBjZW50ZXJIZWlnaHQgPSBzdmdEaW0uaCAvIDI7XG4gICAgbGV0IGJvdHRvbUZyYWN0aW9uID0gbnVtV2F2ZXMgKiA0O1xuXG4gICAgbGV0IHN0YXJ0UGF0aCA9IGBNIDAgJHtjZW50ZXJIZWlnaHR9YDtcbiAgICBsZXQgc2luZ2xlV2F2ZSA9IGBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgIChhbXAgKiBzdmdEaW0uaCkgLyAyXG4gICAgfSwgICAkeygyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb259IDAgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoLTEgKiBhbXAgKiBzdmdEaW0uaCkgLyAyXG4gICAgfSwgICAkeygyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb259IDBgO1xuXG4gICAgLy8gY29uc3QgbXVsdGlwbGVXYXZlcyA9IHNpbmdsZVdhdmUucmVwZWF0KG51bVdhdmVzICogNCk7XG4gICAgY29uc3QgbXVsdGlwbGVXYXZlcyA9IHNpbmdsZVdhdmUucmVwZWF0KG51bVdhdmVzICogNCk7XG4gICAgY29uc3QgcGF0aCA9IHN0YXJ0UGF0aCArIG11bHRpcGxlV2F2ZXM7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgbGV0IGFtcDEgPSBzdmdEaW0uaCAqIDAuMjU7XG4gIGxldCBhbmdmcmVxMSA9IDAuMDEzO1xuICBsZXQgcGhhc2UxID0gMDtcblxuICBsZXQgYW1wMiA9IHN2Z0RpbS5oICogMC40NTtcbiAgbGV0IGFuZ2ZyZXEyID0gMC4wODtcbiAgbGV0IHBoYXNlMiA9IDE7XG4gIGNvbnN0IGNvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kID0gKHtcbiAgICBvcmlnaW4sXG4gICAgc3ZnLFxuICAgIGFtcDEsXG4gICAgYW1wMixcbiAgICBhbmdmcmVxMSxcbiAgICBhbmdmcmVxMixcbiAgICBwaGFzZTEsXG4gICAgcGhhc2UyLFxuICAgIGNvbG9yLFxuICAgIHRoaWNrbmVzcyxcbiAgICBkYXNoYXJyYXksXG4gIH06IHtcbiAgICBvcmlnaW46IHtcbiAgICAgIHg6IG51bWJlcjtcbiAgICAgIHk6IG51bWJlcjtcbiAgICB9O1xuICAgIHN2ZzogYW55O1xuICAgIGFtcDE6IG51bWJlcjtcbiAgICBhbXAyOiBudW1iZXI7XG4gICAgYW5nZnJlcTE6IG51bWJlcjtcbiAgICBhbmdmcmVxMjogbnVtYmVyO1xuICAgIHBoYXNlMTogbnVtYmVyO1xuICAgIHBoYXNlMjogbnVtYmVyO1xuICAgIGNvbG9yOiBBcnJheVJHQkE7XG4gICAgdGhpY2tuZXNzOiBudW1iZXI7XG4gICAgZGFzaGFycmF5OiBzdHJpbmc7XG4gIH0pID0+IHtcbiAgICB2YXIgcmFyaXR5ID0gMTsgLy8gcG9pbnQgc3BhY2luZ1xuXG4gICAgbGV0IGxpbmVBcnJheTogYW55ID0gQXJyYXkuZnJvbShBcnJheSgzMDAwKS5rZXlzKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb3ZlTGluZUdyb3VwPlxuICAgICAgICB7bGluZUFycmF5Lm1hcCgoeDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPExpbmVcbiAgICAgICAgICAgIC8vIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIC8vIHN0cm9rZURhc2hhcnJheT17ZGFzaGFycmF5fVxuICAgICAgICAgICAgLy8gc3Ryb2tlV2lkdGg9e2Ake3RoaWNrbmVzc31weGB9XG4gICAgICAgICAgICBrZXk9e3h9XG4gICAgICAgICAgICB4MT17KHggLSAxMCkgKiByYXJpdHkgKyBvcmlnaW4ueH1cbiAgICAgICAgICAgIHkxPXsoXG4gICAgICAgICAgICAgIGFtcDEgKiBNYXRoLnNpbihhbmdmcmVxMSAqICh4IC0gMSkgKyBwaGFzZTEpICtcbiAgICAgICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogKHggLSAxKSArIHBoYXNlMikgK1xuICAgICAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICAgICAgKS50b0ZpeGVkKDUpfVxuICAgICAgICAgICAgeDI9e3ggKiByYXJpdHkgKyBvcmlnaW4ueH1cbiAgICAgICAgICAgIHkyPXsoXG4gICAgICAgICAgICAgIGFtcDEgKiBNYXRoLnNpbihhbmdmcmVxMSAqIHggKyBwaGFzZTEpICtcbiAgICAgICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogeCArIHBoYXNlMikgK1xuICAgICAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICAgICAgKS50b0ZpeGVkKDUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Nb3ZlTGluZUdyb3VwPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2luZVNWRyByZWY9e3N2Z1JlZn0+XG4gICAgICA8TW92ZVBhdGhcbiAgICAgICAgcmVmPXtwYXRoUmVmfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIHNwZWVkPXsxNTB9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogNCwgYW1wOiAwLjI1IH0pfVxuICAgICAgLz5cbiAgICAgIDxNb3ZlUGF0aFxuICAgICAgICByZWY9e3BhdGhSZWZ9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgZGFzaGFycmF5PVwiNCA0XCJcbiAgICAgICAgc3BlZWQ9ezE1MH1cbiAgICAgICAgZD17c2V0UGF0aCh7IG51bVdhdmVzOiAxLCBhbXA6IDAuNDUgfSl9XG4gICAgICAvPlxuICAgICAge2NvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kKHtcbiAgICAgICAgb3JpZ2luLFxuICAgICAgICBzdmc6IHN2Z1JlZi5jdXJyZW50LFxuICAgICAgICBhbXAxLFxuICAgICAgICBhbXAyLFxuICAgICAgICBhbmdmcmVxMSxcbiAgICAgICAgYW5nZnJlcTIsXG4gICAgICAgIHBoYXNlMSxcbiAgICAgICAgcGhhc2UyLFxuICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIHRoaWNrbmVzczogMixcbiAgICAgICAgZGFzaGFycmF5OiBcIjIgMlwiLFxuICAgICAgfSl9XG4gICAgICB7LyogPEF4aXMgZD17YE0gMCAke3N2Z0RpbS5oIC8gMn0gTCAke3N2Z0RpbS53fSAke3N2Z0RpbS5oIC8gMn1gfSAvPiAqL31cbiAgICA8L1NpbmVTVkc+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGdWxsV2lkdGhXcmFwcGVyIiwiSGVyb1N1YnRpdGxlIiwiSGVyb1RleHQiLCJMaW5lIiwiTW92ZUxpbmVHcm91cCIsIk1vdmVQYXRoIiwiU2luZVNWRyIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsInBhdGhSZWYiLCJzdmdSZWYiLCJzdmdEaW0iLCJzZXRTdmdEaW0iLCJoIiwidyIsInByb2dyZXNzIiwib3JpZ2luIiwieCIsInkiLCJzZXRQYXRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpZHRoIiwic3ZnIiwibnVtV2F2ZXMiLCJhbXAiLCJjZW50ZXJIZWlnaHQiLCJib3R0b21GcmFjdGlvbiIsInN0YXJ0UGF0aCIsInNpbmdsZVdhdmUiLCJtdWx0aXBsZVdhdmVzIiwicmVwZWF0IiwicGF0aCIsImFtcDEiLCJhbmdmcmVxMSIsInBoYXNlMSIsImFtcDIiLCJhbmdmcmVxMiIsInBoYXNlMiIsImNvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kIiwidGhpY2tuZXNzIiwiZGFzaGFycmF5IiwicmFyaXR5IiwibGluZUFycmF5IiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsIngxIiwieTEiLCJNYXRoIiwic2luIiwidG9GaXhlZCIsIngyIiwieTIiLCJyZWYiLCJzcGVlZCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});