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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n        var origin = {\n            //origin of axes\n            x: 200,\n            y: 300\n        };\n        var amplitude = 10; // wave amplitude\n        var rarity = 1; // point spacing\n        var freq = 0.1; // angular frequency\n        var phase = 0; // phase angle\n        let amp1 = 40;\n        let angfreq1 = 0.02;\n        let phase1 = 0;\n        let amp2 = 94;\n        let angfreq2 = 0.005;\n        let phase2 = 1.2;\n        for(var i = -100; i < 1000; i++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(amp1 * Math.sin(angfreq1 * (i - 1) + phase1) + amp2 * Math.sin(angfreq2 * (i - 1) + phase2) + origin.y));\n            line.setAttribute(\"x2\", \"\".concat(i * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(amp1 * Math.sin(angfreq1 * i + phase1) + amp2 * Math.sin(angfreq2 * i + phase2) + origin.y));\n            line.setAttribute(\"style\", \"stroke:red;stroke-width:1\");\n            svg.appendChild(line);\n        }\n        for(var i = -100; i < 1000; i++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(amp1 * Math.sin(angfreq1 * (i - 1) + phase1) + origin.y));\n            line.setAttribute(\"x2\", \"\".concat(i * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(amp1 * Math.sin(angfreq1 * i + phase1) + origin.y));\n            line.setAttribute(\"style\", \"stroke:blue;stroke-width:1\");\n            svg.appendChild(line);\n        }\n        for(var i = -100; i < 1000; i++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(amp2 * Math.sin(angfreq2 * (i - 1) + phase2) + origin.y));\n            line.setAttribute(\"x2\", \"\".concat(i * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(amp2 * Math.sin(angfreq2 * i + phase2) + origin.y));\n            line.setAttribute(\"style\", \"stroke:red;stroke-width:1; stroke-dasharray:4;\");\n            svg.appendChild(line);\n        }\n    }, []);\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                speed: 100,\n                d: setPath({\n                    numWaves: 5,\n                    amp: 0.5\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.MovePath, {\n                ref: pathRef,\n                color: color,\n                dasharray: \"4 4\",\n                speed: 30,\n                d: setPath({\n                    numWaves: 0.6,\n                    amp: 0.25\n                })\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 159,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFRdkI7QUFJakIsU0FBU1MsU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDUCwrREFBZ0JBO2tCQUNmLDRFQUFDSyxxRUFBbUJBOzs4QkFDbEIsOERBQUNILDBEQUFRQTtvQkFBQ0ssT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNOLDhEQUFZQTtvQkFBQ00sT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVVYLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1ZLFNBQVNaLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBQztRQUFFYyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNsRCxJQUFJQyxXQUFXO0lBQ2ZsQixnREFBU0EsQ0FBQztRQUNSbUIsUUFBUUQ7UUFDUixJQUFJTCxPQUFPTyxPQUFPLEVBQUU7WUFDbEJMLFVBQVU7Z0JBQ1JDLEdBQUdILE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdDLE1BQU07Z0JBQ2hETCxHQUFHSixPQUFPTyxPQUFPLENBQUNDLHFCQUFxQixHQUFHRSxLQUFLO1lBQ2pEO1FBQ0Y7UUFDQSxJQUFJQyxNQUFNWCxPQUFPTyxPQUFPO1FBQ3hCLElBQUlLLFNBQVM7WUFDWCxnQkFBZ0I7WUFDaEJDLEdBQUc7WUFDSEMsR0FBRztRQUNMO1FBQ0EsSUFBSUMsWUFBWSxJQUFJLGlCQUFpQjtRQUNyQyxJQUFJQyxTQUFTLEdBQUcsZ0JBQWdCO1FBQ2hDLElBQUlD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RDtRQUNoRCxpQkFBaUI7UUFFakIsSUFBSUMsZUFBZWxDLE9BQU9FLENBQUMsR0FBRztRQUM5QixJQUFJaUMsaUJBQWlCSCxXQUFXO1FBRWhDLElBQUlJLFlBQVksT0FBb0IsT0FBYkY7UUFDdkIsSUFBSUcsYUFBYSxLQUNmLE9BRG9CckMsT0FBT0csQ0FBQyxHQUFHZ0MsZ0JBQWUsS0FFekMsT0FETCxNQUFPbkMsT0FBT0UsQ0FBQyxHQUFJLEdBQ3BCLFFBQTZDRixPQUF2QyxJQUFLQSxPQUFPRyxDQUFDLEdBQUlnQyxnQkFBZSxTQUNyQyxPQUQ0Q25DLE9BQU9HLENBQUMsR0FBR2dDLGdCQUFlLEtBRWpFLE9BREwsQ0FBRSxJQUFJRixNQUFNakMsT0FBT0UsQ0FBQyxHQUFJLEdBQ3pCLFFBQXNDLE9BQWhDLElBQUtGLE9BQU9HLENBQUMsR0FBSWdDLGdCQUFlO1FBRXZDLHlEQUF5RDtRQUN6RCxNQUFNRyxnQkFBZ0JELFdBQVdFLE1BQU0sQ0FBQ1AsV0FBVztRQUNuRCxNQUFNUSxPQUFPSixZQUFZRTtRQUN6QixPQUFPRTtJQUNUO0lBRUEscUJBQ0UsOERBQUMvQyx5REFBT0E7UUFBQ2dELEtBQUsxQzs7MEJBQ1osOERBQUNQLDBEQUFRQTtnQkFDUGlELEtBQUszQztnQkFDTEYsT0FBT0E7Z0JBQ1A4QyxPQUFPO2dCQUNQQyxHQUFHdEMsUUFBUTtvQkFBRTJCLFVBQVU7b0JBQUdDLEtBQUs7Z0JBQUk7Ozs7OzswQkFFckMsOERBQUN6QywwREFBUUE7Z0JBQ1BpRCxLQUFLM0M7Z0JBQ0xGLE9BQU9BO2dCQUNQZ0QsV0FBVTtnQkFDVkYsT0FBTztnQkFDUEMsR0FBR3RDLFFBQVE7b0JBQUUyQixVQUFVO29CQUFLQyxLQUFLO2dCQUFLOzs7Ozs7Ozs7Ozs7QUFLOUM7R0FqSmdCcEM7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGdWxsV2lkdGhXcmFwcGVyIH0gZnJvbSBcIi4uL3N0eWxlL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIEF4aXMsXG4gIEhlcm9TdWJ0aXRsZSxcbiAgSGVyb1RleHQsXG4gIE1vdmVQYXRoLFxuICBTaW5lU1ZHLFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IEFycmF5UkdCQSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5lV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxXaWR0aFdyYXBwZXI+XG4gICAgICA8U2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICAgICAgPEhlcm9UZXh0IGNvbG9yPXtjb2xvcn0+IGRlc2lnbmluZyB3aXRoIGRhdGEgPC9IZXJvVGV4dD5cbiAgICAgICAgPEhlcm9TdWJ0aXRsZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgIGEgZGF0YSB2aXN1YWxpemF0aW9uIGRlc2lnbmVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIGVuZ2luZWVyaW5nLCBJIGxvdmVcbiAgICAgICAgICB3b3JraW5nIHdpdGggY29tcGxleCBkYXRhIGFuZCB0dXJuaW5nIGl0IGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bCBpbnRvXG4gICAgICAgICAgZGF0YSBkcml2ZW4gZGVzaWduZXJcbiAgICAgICAgPC9IZXJvU3VidGl0bGU+XG4gICAgICAgIDxDYW52YXNXYXZlIGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgIDwvU2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICA8L0Z1bGxXaWR0aFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgY29uc3QgcGF0aFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc3ZnRGltLCBzZXRTdmdEaW1dID0gdXNlU3RhdGUoeyBoOiAwLCB3OiAwIH0pO1xuICBsZXQgcHJvZ3Jlc3MgPSAwO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhdGgocHJvZ3Jlc3MpO1xuICAgIGlmIChzdmdSZWYuY3VycmVudCkge1xuICAgICAgc2V0U3ZnRGltKHtcbiAgICAgICAgaDogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICB3OiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3ZnID0gc3ZnUmVmLmN1cnJlbnQ7XG4gICAgdmFyIG9yaWdpbiA9IHtcbiAgICAgIC8vb3JpZ2luIG9mIGF4ZXNcbiAgICAgIHg6IDIwMCxcbiAgICAgIHk6IDMwMCxcbiAgICB9O1xuICAgIHZhciBhbXBsaXR1ZGUgPSAxMDsgLy8gd2F2ZSBhbXBsaXR1ZGVcbiAgICB2YXIgcmFyaXR5ID0gMTsgLy8gcG9pbnQgc3BhY2luZ1xuICAgIHZhciBmcmVxID0gMC4xOyAvLyBhbmd1bGFyIGZyZXF1ZW5jeVxuICAgIHZhciBwaGFzZSA9IDA7IC8vIHBoYXNlIGFuZ2xlXG5cbiAgICBsZXQgYW1wMSA9IDQwO1xuICAgIGxldCBhbmdmcmVxMSA9IDAuMDI7XG4gICAgbGV0IHBoYXNlMSA9IDA7XG5cbiAgICBsZXQgYW1wMiA9IDk0O1xuICAgIGxldCBhbmdmcmVxMiA9IDAuMDA1O1xuICAgIGxldCBwaGFzZTIgPSAxLjI7XG5cbiAgICBmb3IgKHZhciBpID0gLTEwMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImxpbmVcIik7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgYCR7KGkgLSAxKSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTFcIixcbiAgICAgICAgYCR7XG4gICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogKGkgLSAxKSArIHBoYXNlMSkgK1xuICAgICAgICAgIGFtcDIgKiBNYXRoLnNpbihhbmdmcmVxMiAqIChpIC0gMSkgKyBwaGFzZTIpICtcbiAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICB9YFxuICAgICAgKTtcblxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBgJHtpICogcmFyaXR5ICsgb3JpZ2luLnh9YCk7XG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJ5MlwiLFxuICAgICAgICBgJHtcbiAgICAgICAgICBhbXAxICogTWF0aC5zaW4oYW5nZnJlcTEgKiBpICsgcGhhc2UxKSArXG4gICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogaSArIHBoYXNlMikgK1xuICAgICAgICAgIG9yaWdpbi55XG4gICAgICAgIH1gXG4gICAgICApO1xuXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwic3Ryb2tlOnJlZDtzdHJva2Utd2lkdGg6MVwiKTtcblxuICAgICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gLTEwMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImxpbmVcIik7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgYCR7KGkgLSAxKSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTFcIixcbiAgICAgICAgYCR7YW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogKGkgLSAxKSArIHBoYXNlMSkgKyBvcmlnaW4ueX1gXG4gICAgICApO1xuXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngyXCIsIGAke2kgKiByYXJpdHkgKyBvcmlnaW4ueH1gKTtcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFxuICAgICAgICBcInkyXCIsXG4gICAgICAgIGAke2FtcDEgKiBNYXRoLnNpbihhbmdmcmVxMSAqIGkgKyBwaGFzZTEpICsgb3JpZ2luLnl9YFxuICAgICAgKTtcblxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInN0cm9rZTpibHVlO3N0cm9rZS13aWR0aDoxXCIpO1xuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAtMTAwOyBpIDwgMTAwMDsgaSsrKSB7XG4gICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwibGluZVwiKTtcblxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBgJHsoaSAtIDEpICogcmFyaXR5ICsgb3JpZ2luLnh9YCk7XG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJ5MVwiLFxuICAgICAgICBgJHthbXAyICogTWF0aC5zaW4oYW5nZnJlcTIgKiAoaSAtIDEpICsgcGhhc2UyKSArIG9yaWdpbi55fWBcbiAgICAgICk7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgYCR7aSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTJcIixcbiAgICAgICAgYCR7YW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogaSArIHBoYXNlMikgKyBvcmlnaW4ueX1gXG4gICAgICApO1xuXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJzdHlsZVwiLFxuICAgICAgICBcInN0cm9rZTpyZWQ7c3Ryb2tlLXdpZHRoOjE7IHN0cm9rZS1kYXNoYXJyYXk6NDtcIlxuICAgICAgKTtcblxuICAgICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldFBhdGggPSAoeyBudW1XYXZlcywgYW1wIH06IHsgbnVtV2F2ZXM6IG51bWJlcjsgYW1wOiBudW1iZXIgfSkgPT4ge1xuICAgIC8vaHR0cHM6Ly9waHlzLmxpYnJldGV4dHMub3JnL0Jvb2tzaGVsdmVzL1VuaXZlcnNpdHlfUGh5c2ljcy9Cb29rJTNBX0ludHJvZHVjdG9yeV9QaHlzaWNzXy1fQnVpbGRpbmdfTW9kZWxzX3RvX0Rlc2NyaWJlX091cl9Xb3JsZF8oTWFydGluX05lYXJ5X1JpbmFsZG9fYW5kX1dvb2RtYW4pLzE0JTNBX1dhdmVzLzE0LjA2JTNBX1N1cGVycG9zaXRpb25fb2Zfd2F2ZXNfYW5kX2ludGVyZmVyZW5jZVxuXG4gICAgLy8gU3RlcCAxOiBDcmVhdGUgQW5pbWF0ZWQgTm9ybWFsIFNpbmUgV2F2ZXNcblxuICAgIC8vIGxldCB3YXZlbGVuZ3RoID0gMTA7IHdhdmVsZW5naHQgaXMgcmV2ZXJzZSBvZiBudW1XYXZlc1xuICAgIC8vIGxldCBudW1XYXZlcyA9IDI7IC8vIHdob2xlIGFuZCAgbnVtYmVycyBvbmx5O1xuICAgIC8vIGxldCBhbXAgPSAwLjM7XG5cbiAgICBsZXQgY2VudGVySGVpZ2h0ID0gc3ZnRGltLmggLyAyO1xuICAgIGxldCBib3R0b21GcmFjdGlvbiA9IG51bVdhdmVzICogNDtcblxuICAgIGxldCBzdGFydFBhdGggPSBgTSAwICR7Y2VudGVySGVpZ2h0fWA7XG4gICAgbGV0IHNpbmdsZVdhdmUgPSBgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoYW1wICogc3ZnRGltLmgpIC8gMlxuICAgIH0sICAgJHsoMiAqIHN2Z0RpbS53KSAvIGJvdHRvbUZyYWN0aW9ufSAwIHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke1xuICAgICAgKC0xICogYW1wICogc3ZnRGltLmgpIC8gMlxuICAgIH0sICAgJHsoMiAqIHN2Z0RpbS53KSAvIGJvdHRvbUZyYWN0aW9ufSAwYDtcblxuICAgIC8vIGNvbnN0IG11bHRpcGxlV2F2ZXMgPSBzaW5nbGVXYXZlLnJlcGVhdChudW1XYXZlcyAqIDQpO1xuICAgIGNvbnN0IG11bHRpcGxlV2F2ZXMgPSBzaW5nbGVXYXZlLnJlcGVhdChudW1XYXZlcyAqIDQpO1xuICAgIGNvbnN0IHBhdGggPSBzdGFydFBhdGggKyBtdWx0aXBsZVdhdmVzO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNpbmVTVkcgcmVmPXtzdmdSZWZ9PlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBzcGVlZD17MTAwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDUsIGFtcDogMC41IH0pfVxuICAgICAgLz5cbiAgICAgIDxNb3ZlUGF0aFxuICAgICAgICByZWY9e3BhdGhSZWZ9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgZGFzaGFycmF5PVwiNCA0XCJcbiAgICAgICAgc3BlZWQ9ezMwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDAuNiwgYW1wOiAwLjI1IH0pfVxuICAgICAgLz5cbiAgICAgIHsvKiA8QXhpcyBkPXtgTSAwICR7c3ZnRGltLmggLyAyfSBMICR7c3ZnRGltLnd9ICR7c3ZnRGltLmggLyAyfWB9IC8+ICovfVxuICAgIDwvU2luZVNWRz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIk1vdmVQYXRoIiwiU2luZVNWRyIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsInBhdGhSZWYiLCJzdmdSZWYiLCJzdmdEaW0iLCJzZXRTdmdEaW0iLCJoIiwidyIsInByb2dyZXNzIiwic2V0UGF0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsIm9yaWdpbiIsIngiLCJ5IiwiYW1wbGl0dWRlIiwicmFyaXR5IiwiZnJlcSIsInBoYXNlIiwiYW1wMSIsImFuZ2ZyZXExIiwicGhhc2UxIiwiYW1wMiIsImFuZ2ZyZXEyIiwicGhhc2UyIiwiaSIsImxpbmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZSIsIk1hdGgiLCJzaW4iLCJhcHBlbmRDaGlsZCIsIm51bVdhdmVzIiwiYW1wIiwiY2VudGVySGVpZ2h0IiwiYm90dG9tRnJhY3Rpb24iLCJzdGFydFBhdGgiLCJzaW5nbGVXYXZlIiwibXVsdGlwbGVXYXZlcyIsInJlcGVhdCIsInBhdGgiLCJyZWYiLCJzcGVlZCIsImQiLCJkYXNoYXJyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});