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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n        var origin = {\n            x: 0,\n            y: 300\n        };\n        var amplitude = 10; // wave amplitude\n        var rarity = 1; // point spacing\n        var freq = 0.1; // angular frequency\n        var phase = 0; // phase angle\n        let amp1 = 40;\n        let angfreq1 = 0.013;\n        let phase1 = 0;\n        let amp2 = 120;\n        let angfreq2 = 0.008;\n        let phase2 = 1;\n        oneSinePath({\n            svg,\n            origin,\n            amp: amp1,\n            angfreq: angfreq1,\n            phase: phase1\n        });\n        oneSinePath({\n            svg,\n            origin,\n            amp: amp2,\n            angfreq: angfreq2,\n            phase: phase2\n        });\n        combineTwoSinesPath({\n            svg,\n            origin,\n            amp1,\n            amp2,\n            angfreq1,\n            angfreq2,\n            phase1,\n            phase2\n        });\n    }, []);\n    const combineTwoSinesPath = (param)=>{\n        let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2 } = param;\n        let rarity = 1;\n        for(var i1 = 0; i1 < 2000; i1++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i1 - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(amp1 * Math.sin(angfreq1 * (i1 - 1) + phase1) + amp2 * Math.sin(angfreq2 * (i1 - 1) + phase2) + origin.y));\n            line.setAttribute(\"x2\", \"\".concat(i1 * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(amp1 * Math.sin(angfreq1 * i1 + phase1) + amp2 * Math.sin(angfreq2 * i1 + phase2) + origin.y));\n            line.setAttribute(\"style\", \"stroke:red;stroke-width:6; \");\n            svg.appendChild(line);\n        }\n    };\n    const combineTwoSinesCircles_Append = (param)=>{\n        let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2 } = param;\n        let rarity = 1;\n        let lineArray = [\n            ...Array(10).keys()\n        ];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n            children: lineArray.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                    x1: (x - 1) * rarity + origin.x,\n                    y1: amp1 * Math.sin(angfreq1 * (x - 1) + phase1) + amp2 * Math.sin(angfreq2 * (x - 1) + phase2) + origin.y,\n                    x2: i * rarity + origin.x,\n                    y2: amp1 * Math.sin(angfreq1 * i + phase1) + amp2 * Math.sin(angfreq2 * i + phase2) + origin.y\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 153,\n            columnNumber: 7\n        }, this);\n    };\n    const oneSinePath = (param)=>{\n        let { svg, origin, amp, angfreq, phase } = param;\n        let rarity = 1;\n        for(var i1 = 0; i1 < 2000; i1++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i1 - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(amp * Math.sin(angfreq * (i1 - 1) + phase) + origin.y));\n            line.setAttribute(\"x2\", \"\".concat(i1 * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(amp * Math.sin(angfreq * i1 + phase) + origin.y));\n            line.setAttribute(\"style\", \"stroke:blue;stroke-width:1\");\n            svg.appendChild(line);\n        }\n    };\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 238,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFRdkI7QUFJakIsU0FBU1EsU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDTiwrREFBZ0JBO2tCQUNmLDRFQUFDSSxxRUFBbUJBOzs4QkFDbEIsOERBQUNGLDBEQUFRQTtvQkFBQ0ksT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNMLDhEQUFZQTtvQkFBQ0ssT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVVWLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1XLFNBQVNYLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFFYSxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNsRCxJQUFJQyxXQUFXO0lBQ2ZqQixnREFBU0EsQ0FBQztRQUNSa0IsUUFBUUQ7UUFDUixJQUFJTCxPQUFPTyxPQUFPLEVBQUU7WUFDbEJMLFVBQVU7Z0JBQ1JDLEdBQUdILE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdDLE1BQU07Z0JBQ2hETCxHQUFHSixPQUFPTyxPQUFPLENBQUNDLHFCQUFxQixHQUFHRSxLQUFLO1lBQ2pEO1FBQ0Y7UUFDQSxJQUFJQyxNQUFNWCxPQUFPTyxPQUFPO1FBQ3hCLElBQUlLLFNBQVM7WUFDWEMsR0FBRztZQUNIQyxHQUFHO1FBQ0w7UUFDQSxJQUFJQyxZQUFZLElBQUksaUJBQWlCO1FBQ3JDLElBQUlDLFNBQVMsR0FBRyxnQkFBZ0I7UUFDaEMsSUFBSUMsT0FBTyxLQUFLLG9C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QkFBZTtRQUV2Qyx5REFBeUQ7UUFDekQsTUFBTUcsZ0JBQWdCRCxXQUFXRSxNQUFNLENBQUNOLFdBQVc7UUFDbkQsTUFBTU8sT0FBT0osWUFBWUU7UUFDekIsT0FBT0U7SUFDVDtJQUVBLHFCQUNFLDhEQUFDNUQseURBQU9BO1FBQUM2RCxLQUFLdkQ7Ozs7OztBQWlCbEI7R0FoT2dCRjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2luZVdhdmUudHN4P2M2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFdyYXBwZXIgfSBmcm9tIFwiLi4vc3R5bGUvZ3JpZExheW91dFwiO1xuaW1wb3J0IHtcbiAgQXhpcyxcbiAgSGVyb1N1YnRpdGxlLFxuICBIZXJvVGV4dCxcbiAgTW92ZVBhdGgsXG4gIFNpbmVTVkcsXG4gIFNpbmVXYXZlR3JpZFdyYXBwZXIsXG59IGZyb20gXCIuLi9zdHlsZS9zaW5lV2F2ZVN0eWxlXCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuLi9zdHlsZS9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQXJyYXlSR0JBIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmVXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbFdpZHRoV3JhcHBlcj5cbiAgICAgIDxTaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgICAgICA8SGVyb1RleHQgY29sb3I9e2NvbG9yfT4gZGVzaWduaW5nIHdpdGggZGF0YSA8L0hlcm9UZXh0PlxuICAgICAgICA8SGVyb1N1YnRpdGxlIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgYSBkYXRhIHZpc3VhbGl6YXRpb24gZGVzaWduZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gZW5naW5lZXJpbmcsIEkgbG92ZVxuICAgICAgICAgIHdvcmtpbmcgd2l0aCBjb21wbGV4IGRhdGEgYW5kIHR1cm5pbmcgaXQgaW50byBzb21ldGhpbmcgYmVhdXRpZnVsIGludG9cbiAgICAgICAgICBkYXRhIGRyaXZlbiBkZXNpZ25lclxuICAgICAgICA8L0hlcm9TdWJ0aXRsZT5cbiAgICAgICAgPENhbnZhc1dhdmUgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhbnZhc1dhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICBjb25zdCBwYXRoUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzdmdSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzdmdEaW0sIHNldFN2Z0RpbV0gPSB1c2VTdGF0ZSh7IGg6IDAsIHc6IDAgfSk7XG4gIGxldCBwcm9ncmVzcyA9IDA7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGF0aChwcm9ncmVzcyk7XG4gICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICBzZXRTdmdEaW0oe1xuICAgICAgICBoOiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgIHc6IHN2Z1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdmcgPSBzdmdSZWYuY3VycmVudDtcbiAgICB2YXIgb3JpZ2luID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDMwMCxcbiAgICB9O1xuICAgIHZhciBhbXBsaXR1ZGUgPSAxMDsgLy8gd2F2ZSBhbXBsaXR1ZGVcbiAgICB2YXIgcmFyaXR5ID0gMTsgLy8gcG9pbnQgc3BhY2luZ1xuICAgIHZhciBmcmVxID0gMC4xOyAvLyBhbmd1bGFyIGZyZXF1ZW5jeVxuICAgIHZhciBwaGFzZSA9IDA7IC8vIHBoYXNlIGFuZ2xlXG5cbiAgICBsZXQgYW1wMSA9IDQwO1xuICAgIGxldCBhbmdmcmVxMSA9IDAuMDEzO1xuICAgIGxldCBwaGFzZTEgPSAwO1xuXG4gICAgbGV0IGFtcDIgPSAxMjA7XG4gICAgbGV0IGFuZ2ZyZXEyID0gMC4wMDg7XG4gICAgbGV0IHBoYXNlMiA9IDE7XG5cbiAgICBvbmVTaW5lUGF0aCh7IHN2Zywgb3JpZ2luLCBhbXA6IGFtcDEsIGFuZ2ZyZXE6IGFuZ2ZyZXExLCBwaGFzZTogcGhhc2UxIH0pO1xuICAgIG9uZVNpbmVQYXRoKHsgc3ZnLCBvcmlnaW4sIGFtcDogYW1wMiwgYW5nZnJlcTogYW5nZnJlcTIsIHBoYXNlOiBwaGFzZTIgfSk7XG4gICAgY29tYmluZVR3b1NpbmVzUGF0aCh7XG4gICAgICBzdmcsXG4gICAgICBvcmlnaW4sXG4gICAgICBhbXAxLFxuICAgICAgYW1wMixcbiAgICAgIGFuZ2ZyZXExLFxuICAgICAgYW5nZnJlcTIsXG4gICAgICBwaGFzZTEsXG4gICAgICBwaGFzZTIsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb21iaW5lVHdvU2luZXNQYXRoID0gKHtcbiAgICBvcmlnaW4sXG4gICAgc3ZnLFxuICAgIGFtcDEsXG4gICAgYW1wMixcbiAgICBhbmdmcmVxMSxcbiAgICBhbmdmcmVxMixcbiAgICBwaGFzZTEsXG4gICAgcGhhc2UyLFxuICB9OiB7XG4gICAgb3JpZ2luOiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgfTtcbiAgICBzdmc6IGFueTtcbiAgICBhbXAxOiBudW1iZXI7XG4gICAgYW1wMjogbnVtYmVyO1xuICAgIGFuZ2ZyZXExOiBudW1iZXI7XG4gICAgYW5nZnJlcTI6IG51bWJlcjtcbiAgICBwaGFzZTE6IG51bWJlcjtcbiAgICBwaGFzZTI6IG51bWJlcjtcbiAgfSkgPT4ge1xuICAgIGxldCByYXJpdHkgPSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjAwMDsgaSsrKSB7XG4gICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwibGluZVwiKTtcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgYCR7KGkgLSAxKSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTFcIixcbiAgICAgICAgYCR7XG4gICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogKGkgLSAxKSArIHBoYXNlMSkgK1xuICAgICAgICAgIGFtcDIgKiBNYXRoLnNpbihhbmdmcmVxMiAqIChpIC0gMSkgKyBwaGFzZTIpICtcbiAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICB9YFxuICAgICAgKTtcblxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBgJHtpICogcmFyaXR5ICsgb3JpZ2luLnh9YCk7XG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJ5MlwiLFxuICAgICAgICBgJHtcbiAgICAgICAgICBhbXAxICogTWF0aC5zaW4oYW5nZnJlcTEgKiBpICsgcGhhc2UxKSArXG4gICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogaSArIHBoYXNlMikgK1xuICAgICAgICAgIG9yaWdpbi55XG4gICAgICAgIH1gXG4gICAgICApO1xuXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwic3Ryb2tlOnJlZDtzdHJva2Utd2lkdGg6NjsgXCIpO1xuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kID0gKHtcbiAgICBvcmlnaW4sXG4gICAgc3ZnLFxuICAgIGFtcDEsXG4gICAgYW1wMixcbiAgICBhbmdmcmVxMSxcbiAgICBhbmdmcmVxMixcbiAgICBwaGFzZTEsXG4gICAgcGhhc2UyLFxuICB9OiB7XG4gICAgb3JpZ2luOiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgfTtcbiAgICBzdmc6IGFueTtcbiAgICBhbXAxOiBudW1iZXI7XG4gICAgYW1wMjogbnVtYmVyO1xuICAgIGFuZ2ZyZXExOiBudW1iZXI7XG4gICAgYW5nZnJlcTI6IG51bWJlcjtcbiAgICBwaGFzZTE6IG51bWJlcjtcbiAgICBwaGFzZTI6IG51bWJlcjtcbiAgfSkgPT4ge1xuICAgIGxldCByYXJpdHkgPSAxO1xuICAgIGxldCBsaW5lQXJyYXk6IGFueSA9IFsuLi5BcnJheSgxMCkua2V5cygpXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Zz5cbiAgICAgICAge2xpbmVBcnJheS5tYXAoKHg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICB4MT17KHggLSAxKSAqIHJhcml0eSArIG9yaWdpbi54fVxuICAgICAgICAgICAgeTE9e1xuICAgICAgICAgICAgICBhbXAxICogTWF0aC5zaW4oYW5nZnJlcTEgKiAoeCAtIDEpICsgcGhhc2UxKSArXG4gICAgICAgICAgICAgIGFtcDIgKiBNYXRoLnNpbihhbmdmcmVxMiAqICh4IC0gMSkgKyBwaGFzZTIpICtcbiAgICAgICAgICAgICAgb3JpZ2luLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHgyPXtpICogcmFyaXR5ICsgb3JpZ2luLnh9XG4gICAgICAgICAgICB5Mj17XG4gICAgICAgICAgICAgIGFtcDEgKiBNYXRoLnNpbihhbmdmcmVxMSAqIGkgKyBwaGFzZTEpICtcbiAgICAgICAgICAgICAgYW1wMiAqIE1hdGguc2luKGFuZ2ZyZXEyICogaSArIHBoYXNlMikgK1xuICAgICAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9nPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgb25lU2luZVBhdGggPSAoe1xuICAgIHN2ZyxcbiAgICBvcmlnaW4sXG4gICAgYW1wLFxuICAgIGFuZ2ZyZXEsXG4gICAgcGhhc2UsXG4gIH06IHtcbiAgICBzdmc6IGFueTtcbiAgICBvcmlnaW46IHtcbiAgICAgIHg6IG51bWJlcjtcbiAgICAgIHk6IG51bWJlcjtcbiAgICB9O1xuICAgIGFtcDogbnVtYmVyO1xuICAgIGFuZ2ZyZXE6IG51bWJlcjtcbiAgICBwaGFzZTogbnVtYmVyO1xuICB9KSA9PiB7XG4gICAgbGV0IHJhcml0eSA9IDE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyMDAwOyBpKyspIHtcbiAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJsaW5lXCIpO1xuXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngxXCIsIGAkeyhpIC0gMSkgKiByYXJpdHkgKyBvcmlnaW4ueH1gKTtcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFxuICAgICAgICBcInkxXCIsXG4gICAgICAgIGAke2FtcCAqIE1hdGguc2luKGFuZ2ZyZXEgKiAoaSAtIDEpICsgcGhhc2UpICsgb3JpZ2luLnl9YFxuICAgICAgKTtcblxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBgJHtpICogcmFyaXR5ICsgb3JpZ2luLnh9YCk7XG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJ5MlwiLFxuICAgICAgICBgJHthbXAgKiBNYXRoLnNpbihhbmdmcmVxICogaSArIHBoYXNlKSArIG9yaWdpbi55fWBcbiAgICAgICk7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJzdHJva2U6Ymx1ZTtzdHJva2Utd2lkdGg6MVwiKTtcblxuICAgICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRQYXRoID0gKHsgbnVtV2F2ZXMsIGFtcCB9OiB7IG51bVdhdmVzOiBudW1iZXI7IGFtcDogbnVtYmVyIH0pID0+IHtcbiAgICAvL2h0dHBzOi8vcGh5cy5saWJyZXRleHRzLm9yZy9Cb29rc2hlbHZlcy9Vbml2ZXJzaXR5X1BoeXNpY3MvQm9vayUzQV9JbnRyb2R1Y3RvcnlfUGh5c2ljc18tX0J1aWxkaW5nX01vZGVsc190b19EZXNjcmliZV9PdXJfV29ybGRfKE1hcnRpbl9OZWFyeV9SaW5hbGRvX2FuZF9Xb29kbWFuKS8xNCUzQV9XYXZlcy8xNC4wNiUzQV9TdXBlcnBvc2l0aW9uX29mX3dhdmVzX2FuZF9pbnRlcmZlcmVuY2VcblxuICAgIC8vIFN0ZXAgMTogQ3JlYXRlIEFuaW1hdGVkIE5vcm1hbCBTaW5lIFdhdmVzXG5cbiAgICAvLyBsZXQgd2F2ZWxlbmd0aCA9IDEwOyB3YXZlbGVuZ2h0IGlzIHJldmVyc2Ugb2YgbnVtV2F2ZXNcbiAgICAvLyBsZXQgbnVtV2F2ZXMgPSAyOyAvLyB3aG9sZSBhbmQgIG51bWJlcnMgb25seTtcbiAgICAvLyBsZXQgYW1wID0gMC4zO1xuXG4gICAgbGV0IGNlbnRlckhlaWdodCA9IHN2Z0RpbS5oIC8gMjtcbiAgICBsZXQgYm90dG9tRnJhY3Rpb24gPSBudW1XYXZlcyAqIDQ7XG5cbiAgICBsZXQgc3RhcnRQYXRoID0gYE0gMCAke2NlbnRlckhlaWdodH1gO1xuICAgIGxldCBzaW5nbGVXYXZlID0gYHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke1xuICAgICAgKGFtcCAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMCBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgICgtMSAqIGFtcCAqIHN2Z0RpbS5oKSAvIDJcbiAgICB9LCAgICR7KDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvbn0gMGA7XG5cbiAgICAvLyBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBtdWx0aXBsZVdhdmVzID0gc2luZ2xlV2F2ZS5yZXBlYXQobnVtV2F2ZXMgKiA0KTtcbiAgICBjb25zdCBwYXRoID0gc3RhcnRQYXRoICsgbXVsdGlwbGVXYXZlcztcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTaW5lU1ZHIHJlZj17c3ZnUmVmfT5cbiAgICAgIHsvKiA8TW92ZVBhdGhcbiAgICAgICAgcmVmPXtwYXRoUmVmfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIHNwZWVkPXsxMDB9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogNSwgYW1wOiAwLjUgfSl9XG4gICAgICAvPlxuICAgICAgPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBkYXNoYXJyYXk9XCI0IDRcIlxuICAgICAgICBzcGVlZD17MzB9XG4gICAgICAgIGQ9e3NldFBhdGgoeyBudW1XYXZlczogMC42LCBhbXA6IDAuMjUgfSl9XG4gICAgICAvPiAgKi99XG4gICAgICB7LyogPEF4aXMgZD17YE0gMCAke3N2Z0RpbS5oIC8gMn0gTCAke3N2Z0RpbS53fSAke3N2Z0RpbS5oIC8gMn1gfSAvPiAqL31cbiAgICA8L1NpbmVTVkc+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGdWxsV2lkdGhXcmFwcGVyIiwiSGVyb1N1YnRpdGxlIiwiSGVyb1RleHQiLCJTaW5lU1ZHIiwiU2luZVdhdmVHcmlkV3JhcHBlciIsIlNpbmVXYXZlIiwiY29sb3IiLCJDYW52YXNXYXZlIiwicGF0aFJlZiIsInN2Z1JlZiIsInN2Z0RpbSIsInNldFN2Z0RpbSIsImgiLCJ3IiwicHJvZ3Jlc3MiLCJzZXRQYXRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpZHRoIiwic3ZnIiwib3JpZ2luIiwieCIsInkiLCJhbXBsaXR1ZGUiLCJyYXJpdHkiLCJmcmVxIiwicGhhc2UiLCJhbXAxIiwiYW5nZnJlcTEiLCJwaGFzZTEiLCJhbXAyIiwiYW5nZnJlcTIiLCJwaGFzZTIiLCJvbmVTaW5lUGF0aCIsImFtcCIsImFuZ2ZyZXEiLCJjb21iaW5lVHdvU2luZXNQYXRoIiwiaSIsImxpbmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZSIsIk1hdGgiLCJzaW4iLCJhcHBlbmRDaGlsZCIsImNvbWJpbmVUd29TaW5lc0NpcmNsZXNfQXBwZW5kIiwibGluZUFycmF5IiwiQXJyYXkiLCJrZXlzIiwiZyIsIm1hcCIsIngxIiwieTEiLCJ4MiIsInkyIiwibnVtV2F2ZXMiLCJjZW50ZXJIZWlnaHQiLCJib3R0b21GcmFjdGlvbiIsInN0YXJ0UGF0aCIsInNpbmdsZVdhdmUiLCJtdWx0aXBsZVdhdmVzIiwicmVwZWF0IiwicGF0aCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});