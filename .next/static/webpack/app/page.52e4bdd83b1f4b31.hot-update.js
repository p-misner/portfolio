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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n        var origin = {\n            //origin of axes\n            x: 100,\n            y: 100\n        };\n        var amplitude = 10; // wave amplitude\n        var rarity = 1; // point spacing\n        var freq = 0.1; // angular frequency\n        var phase = 0; // phase angle\n        for(var i = -100; i < 1000; i++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(Math.sin(freq * (i - 1 + phase)) * 88 + (Math.sin(0.01 * (i - 1 + Math.PI / 2)) * 13 + origin.y)));\n            line.setAttribute(\"x2\", \"\".concat(i * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(Math.sin(freq * (i + phase)) * 88 + (Math.sin(0.01 * (i + Math.PI / 2)) * 13 + origin.y)));\n            line.setAttribute(\"style\", \"stroke:black;stroke-width:1\");\n            svg.appendChild(line);\n        }\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                speed: 100,\n                d: setPath({\n                    numWaves: 5,\n                    amp: 0.5\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                speed: 30,\n                d: setPath({\n                    numWaves: 0.6,\n                    amp: 0.25\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFRdkI7QUFJakIsU0FBU1MsU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDUCwrREFBZ0JBO2tCQUNmLDRFQUFDSyxxRUFBbUJBOzs4QkFDbEIsOERBQUNILDBEQUFRQTtvQkFBQ0ssT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNOLDhEQUFZQTtvQkFBQ00sT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVVYLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1ZLFNBQVNaLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBQztRQUFFYyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNsRCxJQUFJQyxXQUFXO0lBQ2ZsQixnREFBU0EsQ0FBQztRQUNSbUIsUUFBUUQ7UUFDUixJQUFJTCxPQUFPTyxPQUFPLEVBQUU7WUFDbEJMLFVBQVU7Z0JBQ1JDLEdBQUdILE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdDLE1BQU07Z0JBQ2hETCxHQUFHSixPQUFPTyxPQUFPLENBQUNDLHFCQUFxQixHQUFHRSxLQUFLO1lBQ2pEO1FBQ0Y7UUFDQSxJQUFJQyxNQUFNWCxPQUFPTyxPQUFPO1FBQ3hCLElBQUlLLFNBQVM7WUFDWCxnQkFBZ0I7WUFDaEJDLEdBQUc7WUFDSEMsR0FBRztRQUNMO1FBQ0EsSUFBSUMsWUFBWSxJQUFJLGlCQUFpQjtRQUNyQyxJQUFJQyxTQUFTLEdBQUcsZ0JBQWdCO1FBQ2hDLElBQUlDLE9BQU8sS0FBSyxvQkFBb0I7UUFDcEMsSUFBSUMsUUFBUSxHQUFHLGNBQWM7UUFFN0IsSUFBSyxJQUFJQyxJQUFJLENBQUMsS0FBS0EsSUFBSSxNQUFNQSxJQUFLO1lBQ2hDLElBQUlDLE9BQU9DLFNBQVNDLGVBQWUsQ0FBQyw4QkFBOEI7WUFFbEVGLEtBQUtHLFlBQVksQ0FBQyxNQUFNLEdBQStCLE9BQTVCLENBQUNKLElBQUksS0FBS0gsU0FBU0osT0FBT0MsQ0FBQztZQUN0RE8sS0FBS0csWUFBWSxDQUNmLE1BQ0EsR0FHQyxPQUZDQyxLQUFLQyxHQUFHLENBQUNSLE9BQVFFLENBQUFBLElBQUksSUFBSUQsS0FBSSxLQUFNLEtBQ2xDTSxDQUFBQSxLQUFLQyxHQUFHLENBQUMsT0FBUU4sQ0FBQUEsSUFBSSxJQUFJSyxLQUFLRSxFQUFFLEdBQUcsTUFBTSxLQUFLZCxPQUFPRSxDQUFDO1lBSTNETSxLQUFLRyxZQUFZLENBQUMsTUFBTSxHQUF5QixPQUF0QkosSUFBSUgsU0FBU0osT0FBT0MsQ0FBQztZQUNoRE8sS0FBS0csWUFBWSxDQUNmLE1BQ0EsR0FHQyxPQUZDQyxLQUFLQyxHQUFHLENBQUNSLE9BQVFFLENBQUFBLElBQUlELEtBQUksS0FBTSxLQUM5Qk0sQ0FBQUEsS0FBS0MsR0FBRyxDQUFDLE9BQVFOLENBQUFBLElBQUlLLEtBQUtFLEVBQUUsR0FBRyxNQUFNLEtBQUtkLE9BQU9FLENBQUM7WUFJdkRNLEtBQUtHLFlBQVksQ0FBQyxTQUFTO1lBRTNCWixJQUFJZ0IsV0FBVyxDQUFDUDtRQUNsQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1kLFVBQVU7WUFBQyxFQUFFc0IsUUFBUSxFQUFFQyxHQUFHLEVBQXFDO1FBQ25FLGlPQUFpTztRQUVqTyw0Q0FBNEM7UUFFNUMseURBQXlEO1FBQ3pELGdEQUFnRDtRQUNoRCxpQkFBaUI7UUFFakIsSUFBSUMsZUFBZTdCLE9BQU9FLENBQUMsR0FBRztRQUM5QixJQUFJNEIsaUJBQWlCSCxXQUFXO1FBRWhDLElBQUlJLFlBQVksT0FBb0IsT0FBYkY7UUFDdkIsSUFBSUcsYUFBYSxLQUNmLE9BRG9CaEMsT0FBT0csQ0FBQyxHQUFHMkIsZ0JBQWUsS0FFekMsT0FETCxNQUFPOUIsT0FBT0UsQ0FBQyxHQUFJLEdBQ3BCLFFBQTZDRixPQUF2QyxJQUFLQSxPQUFPRyxDQUFDLEdBQUkyQixnQkFBZSxTQUNyQyxPQUQ0QzlCLE9BQU9HLENBQUMsR0FBRzJCLGdCQUFlLEtBRWpFLE9BREwsQ0FBRSxJQUFJRixNQUFNNUIsT0FBT0UsQ0FBQyxHQUFJLEdBQ3pCLFFBQXNDLE9BQWhDLElBQUtGLE9BQU9HLENBQUMsR0FBSTJCLGdCQUFlO1FBRXZDLHlEQUF5RDtRQUN6RCxNQUFNRyxnQkFBZ0JELFdBQVdFLE1BQU0sQ0FBQ1AsV0FBVztRQUNuRCxNQUFNUSxPQUFPSixZQUFZRTtRQUN6QixPQUFPRTtJQUNUO0lBRUEscUJBQ0UsOERBQUMxQyx5REFBT0E7UUFBQzJDLEtBQUtyQzs7MEJBQ1osOERBQUNQLDBEQUFRQTtnQkFDUDRDLEtBQUt0QztnQkFDTEYsT0FBT0E7Z0JBQ1B5QyxPQUFPO2dCQUNQQyxHQUFHakMsUUFBUTtvQkFBRXNCLFVBQVU7b0JBQUdDLEtBQUs7Z0JBQUk7Ozs7OzswQkFFckMsOERBQUNwQywwREFBUUE7Z0JBQ1A0QyxLQUFLdEM7Z0JBQ0xGLE9BQU9BO2dCQUNQMkMsV0FBVTtnQkFDVkYsT0FBTztnQkFDUEMsR0FBR2pDLFFBQVE7b0JBQUVzQixVQUFVO29CQUFLQyxLQUFLO2dCQUFLOzs7Ozs7Ozs7Ozs7QUFLOUM7R0E5RmdCL0I7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGdWxsV2lkdGhXcmFwcGVyIH0gZnJvbSBcIi4uL3N0eWxlL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIEF4aXMsXG4gIEhlcm9TdWJ0aXRsZSxcbiAgSGVyb1RleHQsXG4gIE1vdmVQYXRoLFxuICBTaW5lU1ZHLFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IEFycmF5UkdCQSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5lV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxXaWR0aFdyYXBwZXI+XG4gICAgICA8U2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICAgICAgPEhlcm9UZXh0IGNvbG9yPXtjb2xvcn0+IGRlc2lnbmluZyB3aXRoIGRhdGEgPC9IZXJvVGV4dD5cbiAgICAgICAgPEhlcm9TdWJ0aXRsZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgIGEgZGF0YSB2aXN1YWxpemF0aW9uIGRlc2lnbmVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIGVuZ2luZWVyaW5nLCBJIGxvdmVcbiAgICAgICAgICB3b3JraW5nIHdpdGggY29tcGxleCBkYXRhIGFuZCB0dXJuaW5nIGl0IGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bCBpbnRvXG4gICAgICAgICAgZGF0YSBkcml2ZW4gZGVzaWduZXJcbiAgICAgICAgPC9IZXJvU3VidGl0bGU+XG4gICAgICAgIDxDYW52YXNXYXZlIGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgIDwvU2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICA8L0Z1bGxXaWR0aFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgY29uc3QgcGF0aFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc3ZnRGltLCBzZXRTdmdEaW1dID0gdXNlU3RhdGUoeyBoOiAwLCB3OiAwIH0pO1xuICBsZXQgcHJvZ3Jlc3MgPSAwO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhdGgocHJvZ3Jlc3MpO1xuICAgIGlmIChzdmdSZWYuY3VycmVudCkge1xuICAgICAgc2V0U3ZnRGltKHtcbiAgICAgICAgaDogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICB3OiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3ZnID0gc3ZnUmVmLmN1cnJlbnQ7XG4gICAgdmFyIG9yaWdpbiA9IHtcbiAgICAgIC8vb3JpZ2luIG9mIGF4ZXNcbiAgICAgIHg6IDEwMCxcbiAgICAgIHk6IDEwMCxcbiAgICB9O1xuICAgIHZhciBhbXBsaXR1ZGUgPSAxMDsgLy8gd2F2ZSBhbXBsaXR1ZGVcbiAgICB2YXIgcmFyaXR5ID0gMTsgLy8gcG9pbnQgc3BhY2luZ1xuICAgIHZhciBmcmVxID0gMC4xOyAvLyBhbmd1bGFyIGZyZXF1ZW5jeVxuICAgIHZhciBwaGFzZSA9IDA7IC8vIHBoYXNlIGFuZ2xlXG5cbiAgICBmb3IgKHZhciBpID0gLTEwMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImxpbmVcIik7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgYCR7KGkgLSAxKSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTFcIixcbiAgICAgICAgYCR7XG4gICAgICAgICAgTWF0aC5zaW4oZnJlcSAqIChpIC0gMSArIHBoYXNlKSkgKiA4OCArXG4gICAgICAgICAgKE1hdGguc2luKDAuMDEgKiAoaSAtIDEgKyBNYXRoLlBJIC8gMikpICogMTMgKyBvcmlnaW4ueSlcbiAgICAgICAgfWBcbiAgICAgICk7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgYCR7aSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTJcIixcbiAgICAgICAgYCR7XG4gICAgICAgICAgTWF0aC5zaW4oZnJlcSAqIChpICsgcGhhc2UpKSAqIDg4ICtcbiAgICAgICAgICAoTWF0aC5zaW4oMC4wMSAqIChpICsgTWF0aC5QSSAvIDIpKSAqIDEzICsgb3JpZ2luLnkpXG4gICAgICAgIH1gXG4gICAgICApO1xuXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwic3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxXCIpO1xuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0UGF0aCA9ICh7IG51bVdhdmVzLCBhbXAgfTogeyBudW1XYXZlczogbnVtYmVyOyBhbXA6IG51bWJlciB9KSA9PiB7XG4gICAgLy9odHRwczovL3BoeXMubGlicmV0ZXh0cy5vcmcvQm9va3NoZWx2ZXMvVW5pdmVyc2l0eV9QaHlzaWNzL0Jvb2slM0FfSW50cm9kdWN0b3J5X1BoeXNpY3NfLV9CdWlsZGluZ19Nb2RlbHNfdG9fRGVzY3JpYmVfT3VyX1dvcmxkXyhNYXJ0aW5fTmVhcnlfUmluYWxkb19hbmRfV29vZG1hbikvMTQlM0FfV2F2ZXMvMTQuMDYlM0FfU3VwZXJwb3NpdGlvbl9vZl93YXZlc19hbmRfaW50ZXJmZXJlbmNlXG5cbiAgICAvLyBTdGVwIDE6IENyZWF0ZSBBbmltYXRlZCBOb3JtYWwgU2luZSBXYXZlc1xuXG4gICAgLy8gbGV0IHdhdmVsZW5ndGggPSAxMDsgd2F2ZWxlbmdodCBpcyByZXZlcnNlIG9mIG51bVdhdmVzXG4gICAgLy8gbGV0IG51bVdhdmVzID0gMjsgLy8gd2hvbGUgYW5kICBudW1iZXJzIG9ubHk7XG4gICAgLy8gbGV0IGFtcCA9IDAuMztcblxuICAgIGxldCBjZW50ZXJIZWlnaHQgPSBzdmdEaW0uaCAvIDI7XG4gICAgbGV0IGJvdHRvbUZyYWN0aW9uID0gbnVtV2F2ZXMgKiA0O1xuXG4gICAgbGV0IHN0YXJ0UGF0aCA9IGBNIDAgJHtjZW50ZXJIZWlnaHR9YDtcbiAgICBsZXQgc2luZ2xlV2F2ZSA9IGBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgIChhbXAgKiBzdmdEaW0uaCkgLyAyXG4gICAgfSwgICAkeygyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb259IDAgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoLTEgKiBhbXAgKiBzdmdEaW0uaCkgLyAyXG4gICAgfSwgICAkeygyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb259IDBgO1xuXG4gICAgLy8gY29uc3QgbXVsdGlwbGVXYXZlcyA9IHNpbmdsZVdhdmUucmVwZWF0KG51bVdhdmVzICogNCk7XG4gICAgY29uc3QgbXVsdGlwbGVXYXZlcyA9IHNpbmdsZVdhdmUucmVwZWF0KG51bVdhdmVzICogNCk7XG4gICAgY29uc3QgcGF0aCA9IHN0YXJ0UGF0aCArIG11bHRpcGxlV2F2ZXM7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2luZVNWRyByZWY9e3N2Z1JlZn0+XG4gICAgICA8TW92ZVBhdGhcbiAgICAgICAgcmVmPXtwYXRoUmVmfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIHNwZWVkPXsxMDB9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogNSwgYW1wOiAwLjUgfSl9XG4gICAgICAvPlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBkYXNoYXJyYXk9XCI0IDRcIlxuICAgICAgICBzcGVlZD17MzB9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogMC42LCBhbXA6IDAuMjUgfSl9XG4gICAgICAvPlxuICAgICAgey8qIDxBeGlzIGQ9e2BNIDAgJHtzdmdEaW0uaCAvIDJ9IEwgJHtzdmdEaW0ud30gJHtzdmdEaW0uaCAvIDJ9YH0gLz4gKi99XG4gICAgPC9TaW5lU1ZHPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRnVsbFdpZHRoV3JhcHBlciIsIkhlcm9TdWJ0aXRsZSIsIkhlcm9UZXh0IiwiTW92ZVBhdGgiLCJTaW5lU1ZHIiwiU2luZVdhdmVHcmlkV3JhcHBlciIsIlNpbmVXYXZlIiwiY29sb3IiLCJDYW52YXNXYXZlIiwicGF0aFJlZiIsInN2Z1JlZiIsInN2Z0RpbSIsInNldFN2Z0RpbSIsImgiLCJ3IiwicHJvZ3Jlc3MiLCJzZXRQYXRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpZHRoIiwic3ZnIiwib3JpZ2luIiwieCIsInkiLCJhbXBsaXR1ZGUiLCJyYXJpdHkiLCJmcmVxIiwicGhhc2UiLCJpIiwibGluZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlIiwiTWF0aCIsInNpbiIsIlBJIiwiYXBwZW5kQ2hpbGQiLCJudW1XYXZlcyIsImFtcCIsImNlbnRlckhlaWdodCIsImJvdHRvbUZyYWN0aW9uIiwic3RhcnRQYXRoIiwic2luZ2xlV2F2ZSIsIm11bHRpcGxlV2F2ZXMiLCJyZXBlYXQiLCJwYXRoIiwicmVmIiwic3BlZWQiLCJkIiwiZGFzaGFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});