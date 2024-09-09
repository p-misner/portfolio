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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasWave: function() { return /* binding */ CanvasWave; },\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default,CanvasWave auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n        let svg = svgRef.current;\n        var origin = {\n            x: 0,\n            y: 300\n        };\n        var amplitude = 10; // wave amplitude\n        var rarity = 1; // point spacing\n        var freq = 0.1; // angular frequency\n        var phase = 0; // phase angle\n        let amp1 = 40;\n        let angfreq1 = 0.013;\n        let phase1 = 0;\n        let amp2 = 120;\n        let angfreq2 = 0.008;\n        let phase2 = 1;\n        oneSinePath({\n            svg,\n            origin,\n            amp: amp1,\n            angfreq: angfreq1,\n            phase: phase1\n        });\n        oneSinePath({\n            svg,\n            origin,\n            amp: amp2,\n            angfreq: angfreq2,\n            phase: phase2\n        });\n        combineTwoSinesPath({\n            svg,\n            origin,\n            amp1,\n            amp2,\n            angfreq1,\n            angfreq2,\n            phase1,\n            phase2\n        });\n    }, []);\n    const combineTwoSinesPath = (param)=>{\n        let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2 } = param;\n        let rarity = 1;\n        for(var i1 = 0; i1 < 2000; i1++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i1 - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(amp1 * Math.sin(angfreq1 * (i1 - 1) + phase1) + amp2 * Math.sin(angfreq2 * (i1 - 1) + phase2) + origin.y));\n            line.setAttribute(\"x2\", \"\".concat(i1 * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(amp1 * Math.sin(angfreq1 * i1 + phase1) + amp2 * Math.sin(angfreq2 * i1 + phase2) + origin.y));\n            line.setAttribute(\"style\", \"stroke:red;stroke-width:6; \");\n            svg.appendChild(line);\n        }\n    };\n    const combineTwoSinesCircles_Append = (param)=>{\n        let { origin, svg, amp1, amp2, angfreq1, angfreq2, phase1, phase2 } = param;\n        let rarity = 1;\n        let lineArray = Array.from(Array(1000).keys());\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n            children: lineArray.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                    x1: (x - 1) * rarity + origin.x,\n                    y1: amp1 * Math.sin(angfreq1 * (x - 1) + phase1) + amp2 * Math.sin(angfreq2 * (x - 1) + phase2) + origin.y,\n                    x2: i * rarity + origin.x,\n                    y2: amp1 * Math.sin(angfreq1 * i + phase1) + amp2 * Math.sin(angfreq2 * i + phase2) + origin.y\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 153,\n            columnNumber: 7\n        }, this);\n    };\n    const oneSinePath = (param)=>{\n        let { svg, origin, amp, angfreq, phase } = param;\n        let rarity = 1;\n        for(var i1 = 0; i1 < 2000; i1++){\n            var line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n            line.setAttribute(\"x1\", \"\".concat((i1 - 1) * rarity + origin.x));\n            line.setAttribute(\"y1\", \"\".concat(amp * Math.sin(angfreq * (i1 - 1) + phase) + origin.y));\n            line.setAttribute(\"x2\", \"\".concat(i1 * rarity + origin.x));\n            line.setAttribute(\"y2\", \"\".concat(amp * Math.sin(angfreq * i1 + phase) + origin.y));\n            line.setAttribute(\"style\", \"stroke:blue;stroke-width:1\");\n            svg.appendChild(line);\n        }\n    };\n    const setPath = (param)=>{\n        let { numWaves, amp } = param;\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        // let numWaves = 2; // whole and  numbers only;\n        // let amp = 0.3;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        // const multipleWaves = singleWave.repeat(numWaves * 4);\n        const multipleWaves = singleWave.repeat(numWaves * 4);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 238,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFRdkI7QUFJakIsU0FBU1EsU0FBUyxLQUF5QjtRQUF6QixFQUFFQyxLQUFLLEVBQWtCLEdBQXpCO0lBQy9CLHFCQUNFLDhEQUFDTiwrREFBZ0JBO2tCQUNmLDRFQUFDSSxxRUFBbUJBOzs4QkFDbEIsOERBQUNGLDBEQUFRQTtvQkFBQ0ksT0FBT0E7OEJBQU87Ozs7Ozs4QkFDeEIsOERBQUNMLDhEQUFZQTtvQkFBQ0ssT0FBT0E7OEJBQU87Ozs7Ozs4QkFLNUIsOERBQUNDO29CQUFXRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0Fkd0JEO0FBZ0JqQixTQUFTRSxXQUFXLEtBQXlCO1FBQXpCLEVBQUVELEtBQUssRUFBa0IsR0FBekI7O0lBQ3pCLE1BQU1FLFVBQVVWLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1XLFNBQVNYLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFFYSxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNsRCxJQUFJQyxXQUFXO0lBQ2ZqQixnREFBU0EsQ0FBQztRQUNSa0IsUUFBUUQ7UUFDUixJQUFJTCxPQUFPTyxPQUFPLEVBQUU7WUFDbEJMLFVBQVU7Z0JBQ1JDLEdBQUdILE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdDLE1BQU07Z0JBQ2hETCxHQUFHSixPQUFPTyxPQUFPLENBQUNDLHFCQUFxQixHQUFHRSxLQUFLO1lBQ2pEO1FBQ0Y7UUFDQSxJQUFJQyxNQUFNWCxPQUFPTyxPQUFPO1FBQ3hCLElBQUlLLFNBQVM7WUFDWEMsR0FBRztZQUNIQyxHQUFHO1FBQ0w7UUFDQSxJQUFJQyxZQUFZLElBQUksaUJBQWlCO1FBQ3JDLElBQUlDLFNBQVMsR0FBRyxnQkFBZ0I7UUFDaEMsSUFBSUMsT0FBTyxLQUFLLG9C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QUFJOEMsZ0JBQWU7UUFFdkMseURBQXlEO1FBQ3pELE1BQU1HLGdCQUFnQkQsV0FBV0UsTUFBTSxDQUFDTixXQUFXO1FBQ25ELE1BQU1PLE9BQU9KLFlBQVlFO1FBQ3pCLE9BQU9FO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQzdELHlEQUFPQTtRQUFDOEQsS0FBS3hEOzs7Ozs7QUFpQmxCO0dBaE9nQkY7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGdWxsV2lkdGhXcmFwcGVyIH0gZnJvbSBcIi4uL3N0eWxlL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIEF4aXMsXG4gIEhlcm9TdWJ0aXRsZSxcbiAgSGVyb1RleHQsXG4gIE1vdmVQYXRoLFxuICBTaW5lU1ZHLFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IEFycmF5UkdCQSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5lV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxXaWR0aFdyYXBwZXI+XG4gICAgICA8U2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICAgICAgPEhlcm9UZXh0IGNvbG9yPXtjb2xvcn0+IGRlc2lnbmluZyB3aXRoIGRhdGEgPC9IZXJvVGV4dD5cbiAgICAgICAgPEhlcm9TdWJ0aXRsZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgIGEgZGF0YSB2aXN1YWxpemF0aW9uIGRlc2lnbmVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIGVuZ2luZWVyaW5nLCBJIGxvdmVcbiAgICAgICAgICB3b3JraW5nIHdpdGggY29tcGxleCBkYXRhIGFuZCB0dXJuaW5nIGl0IGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bCBpbnRvXG4gICAgICAgICAgZGF0YSBkcml2ZW4gZGVzaWduZXJcbiAgICAgICAgPC9IZXJvU3VidGl0bGU+XG4gICAgICAgIDxDYW52YXNXYXZlIGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgIDwvU2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICA8L0Z1bGxXaWR0aFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgY29uc3QgcGF0aFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc3ZnRGltLCBzZXRTdmdEaW1dID0gdXNlU3RhdGUoeyBoOiAwLCB3OiAwIH0pO1xuICBsZXQgcHJvZ3Jlc3MgPSAwO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhdGgocHJvZ3Jlc3MpO1xuICAgIGlmIChzdmdSZWYuY3VycmVudCkge1xuICAgICAgc2V0U3ZnRGltKHtcbiAgICAgICAgaDogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICB3OiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3ZnID0gc3ZnUmVmLmN1cnJlbnQ7XG4gICAgdmFyIG9yaWdpbiA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAzMDAsXG4gICAgfTtcbiAgICB2YXIgYW1wbGl0dWRlID0gMTA7IC8vIHdhdmUgYW1wbGl0dWRlXG4gICAgdmFyIHJhcml0eSA9IDE7IC8vIHBvaW50IHNwYWNpbmdcbiAgICB2YXIgZnJlcSA9IDAuMTsgLy8gYW5ndWxhciBmcmVxdWVuY3lcbiAgICB2YXIgcGhhc2UgPSAwOyAvLyBwaGFzZSBhbmdsZVxuXG4gICAgbGV0IGFtcDEgPSA0MDtcbiAgICBsZXQgYW5nZnJlcTEgPSAwLjAxMztcbiAgICBsZXQgcGhhc2UxID0gMDtcblxuICAgIGxldCBhbXAyID0gMTIwO1xuICAgIGxldCBhbmdmcmVxMiA9IDAuMDA4O1xuICAgIGxldCBwaGFzZTIgPSAxO1xuXG4gICAgb25lU2luZVBhdGgoeyBzdmcsIG9yaWdpbiwgYW1wOiBhbXAxLCBhbmdmcmVxOiBhbmdmcmVxMSwgcGhhc2U6IHBoYXNlMSB9KTtcbiAgICBvbmVTaW5lUGF0aCh7IHN2Zywgb3JpZ2luLCBhbXA6IGFtcDIsIGFuZ2ZyZXE6IGFuZ2ZyZXEyLCBwaGFzZTogcGhhc2UyIH0pO1xuICAgIGNvbWJpbmVUd29TaW5lc1BhdGgoe1xuICAgICAgc3ZnLFxuICAgICAgb3JpZ2luLFxuICAgICAgYW1wMSxcbiAgICAgIGFtcDIsXG4gICAgICBhbmdmcmVxMSxcbiAgICAgIGFuZ2ZyZXEyLFxuICAgICAgcGhhc2UxLFxuICAgICAgcGhhc2UyLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29tYmluZVR3b1NpbmVzUGF0aCA9ICh7XG4gICAgb3JpZ2luLFxuICAgIHN2ZyxcbiAgICBhbXAxLFxuICAgIGFtcDIsXG4gICAgYW5nZnJlcTEsXG4gICAgYW5nZnJlcTIsXG4gICAgcGhhc2UxLFxuICAgIHBoYXNlMixcbiAgfToge1xuICAgIG9yaWdpbjoge1xuICAgICAgeDogbnVtYmVyO1xuICAgICAgeTogbnVtYmVyO1xuICAgIH07XG4gICAgc3ZnOiBhbnk7XG4gICAgYW1wMTogbnVtYmVyO1xuICAgIGFtcDI6IG51bWJlcjtcbiAgICBhbmdmcmVxMTogbnVtYmVyO1xuICAgIGFuZ2ZyZXEyOiBudW1iZXI7XG4gICAgcGhhc2UxOiBudW1iZXI7XG4gICAgcGhhc2UyOiBudW1iZXI7XG4gIH0pID0+IHtcbiAgICBsZXQgcmFyaXR5ID0gMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDIwMDA7IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImxpbmVcIik7XG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngxXCIsIGAkeyhpIC0gMSkgKiByYXJpdHkgKyBvcmlnaW4ueH1gKTtcbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFxuICAgICAgICBcInkxXCIsXG4gICAgICAgIGAke1xuICAgICAgICAgIGFtcDEgKiBNYXRoLnNpbihhbmdmcmVxMSAqIChpIC0gMSkgKyBwaGFzZTEpICtcbiAgICAgICAgICBhbXAyICogTWF0aC5zaW4oYW5nZnJlcTIgKiAoaSAtIDEpICsgcGhhc2UyKSArXG4gICAgICAgICAgb3JpZ2luLnlcbiAgICAgICAgfWBcbiAgICAgICk7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgYCR7aSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTJcIixcbiAgICAgICAgYCR7XG4gICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogaSArIHBoYXNlMSkgK1xuICAgICAgICAgIGFtcDIgKiBNYXRoLnNpbihhbmdmcmVxMiAqIGkgKyBwaGFzZTIpICtcbiAgICAgICAgICBvcmlnaW4ueVxuICAgICAgICB9YFxuICAgICAgKTtcblxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInN0cm9rZTpyZWQ7c3Ryb2tlLXdpZHRoOjY7IFwiKTtcblxuICAgICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb21iaW5lVHdvU2luZXNDaXJjbGVzX0FwcGVuZCA9ICh7XG4gICAgb3JpZ2luLFxuICAgIHN2ZyxcbiAgICBhbXAxLFxuICAgIGFtcDIsXG4gICAgYW5nZnJlcTEsXG4gICAgYW5nZnJlcTIsXG4gICAgcGhhc2UxLFxuICAgIHBoYXNlMixcbiAgfToge1xuICAgIG9yaWdpbjoge1xuICAgICAgeDogbnVtYmVyO1xuICAgICAgeTogbnVtYmVyO1xuICAgIH07XG4gICAgc3ZnOiBhbnk7XG4gICAgYW1wMTogbnVtYmVyO1xuICAgIGFtcDI6IG51bWJlcjtcbiAgICBhbmdmcmVxMTogbnVtYmVyO1xuICAgIGFuZ2ZyZXEyOiBudW1iZXI7XG4gICAgcGhhc2UxOiBudW1iZXI7XG4gICAgcGhhc2UyOiBudW1iZXI7XG4gIH0pID0+IHtcbiAgICBsZXQgcmFyaXR5ID0gMTtcbiAgICBsZXQgbGluZUFycmF5OiBhbnkgPSBBcnJheS5mcm9tKEFycmF5KDEwMDApLmtleXMoKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGc+XG4gICAgICAgIHtsaW5lQXJyYXkubWFwKCh4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgeDE9eyh4IC0gMSkgKiByYXJpdHkgKyBvcmlnaW4ueH1cbiAgICAgICAgICAgIHkxPXtcbiAgICAgICAgICAgICAgYW1wMSAqIE1hdGguc2luKGFuZ2ZyZXExICogKHggLSAxKSArIHBoYXNlMSkgK1xuICAgICAgICAgICAgICBhbXAyICogTWF0aC5zaW4oYW5nZnJlcTIgKiAoeCAtIDEpICsgcGhhc2UyKSArXG4gICAgICAgICAgICAgIG9yaWdpbi55XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4Mj17aSAqIHJhcml0eSArIG9yaWdpbi54fVxuICAgICAgICAgICAgeTI9e1xuICAgICAgICAgICAgICBhbXAxICogTWF0aC5zaW4oYW5nZnJlcTEgKiBpICsgcGhhc2UxKSArXG4gICAgICAgICAgICAgIGFtcDIgKiBNYXRoLnNpbihhbmdmcmVxMiAqIGkgKyBwaGFzZTIpICtcbiAgICAgICAgICAgICAgb3JpZ2luLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IG9uZVNpbmVQYXRoID0gKHtcbiAgICBzdmcsXG4gICAgb3JpZ2luLFxuICAgIGFtcCxcbiAgICBhbmdmcmVxLFxuICAgIHBoYXNlLFxuICB9OiB7XG4gICAgc3ZnOiBhbnk7XG4gICAgb3JpZ2luOiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgfTtcbiAgICBhbXA6IG51bWJlcjtcbiAgICBhbmdmcmVxOiBudW1iZXI7XG4gICAgcGhhc2U6IG51bWJlcjtcbiAgfSkgPT4ge1xuICAgIGxldCByYXJpdHkgPSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjAwMDsgaSsrKSB7XG4gICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwibGluZVwiKTtcblxuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBgJHsoaSAtIDEpICogcmFyaXR5ICsgb3JpZ2luLnh9YCk7XG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJ5MVwiLFxuICAgICAgICBgJHthbXAgKiBNYXRoLnNpbihhbmdmcmVxICogKGkgLSAxKSArIHBoYXNlKSArIG9yaWdpbi55fWBcbiAgICAgICk7XG5cbiAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgYCR7aSAqIHJhcml0eSArIG9yaWdpbi54fWApO1xuICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwieTJcIixcbiAgICAgICAgYCR7YW1wICogTWF0aC5zaW4oYW5nZnJlcSAqIGkgKyBwaGFzZSkgKyBvcmlnaW4ueX1gXG4gICAgICApO1xuXG4gICAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwic3Ryb2tlOmJsdWU7c3Ryb2tlLXdpZHRoOjFcIik7XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0UGF0aCA9ICh7IG51bVdhdmVzLCBhbXAgfTogeyBudW1XYXZlczogbnVtYmVyOyBhbXA6IG51bWJlciB9KSA9PiB7XG4gICAgLy9odHRwczovL3BoeXMubGlicmV0ZXh0cy5vcmcvQm9va3NoZWx2ZXMvVW5pdmVyc2l0eV9QaHlzaWNzL0Jvb2slM0FfSW50cm9kdWN0b3J5X1BoeXNpY3NfLV9CdWlsZGluZ19Nb2RlbHNfdG9fRGVzY3JpYmVfT3VyX1dvcmxkXyhNYXJ0aW5fTmVhcnlfUmluYWxkb19hbmRfV29vZG1hbikvMTQlM0FfV2F2ZXMvMTQuMDYlM0FfU3VwZXJwb3NpdGlvbl9vZl93YXZlc19hbmRfaW50ZXJmZXJlbmNlXG5cbiAgICAvLyBTdGVwIDE6IENyZWF0ZSBBbmltYXRlZCBOb3JtYWwgU2luZSBXYXZlc1xuXG4gICAgLy8gbGV0IHdhdmVsZW5ndGggPSAxMDsgd2F2ZWxlbmdodCBpcyByZXZlcnNlIG9mIG51bVdhdmVzXG4gICAgLy8gbGV0IG51bVdhdmVzID0gMjsgLy8gd2hvbGUgYW5kICBudW1iZXJzIG9ubHk7XG4gICAgLy8gbGV0IGFtcCA9IDAuMztcblxuICAgIGxldCBjZW50ZXJIZWlnaHQgPSBzdmdEaW0uaCAvIDI7XG4gICAgbGV0IGJvdHRvbUZyYWN0aW9uID0gbnVtV2F2ZXMgKiA0O1xuXG4gICAgbGV0IHN0YXJ0UGF0aCA9IGBNIDAgJHtjZW50ZXJIZWlnaHR9YDtcbiAgICBsZXQgc2luZ2xlV2F2ZSA9IGBxICR7c3ZnRGltLncgLyBib3R0b21GcmFjdGlvbn0gJHtcbiAgICAgIChhbXAgKiBzdmdEaW0uaCkgLyAyXG4gICAgfSwgICAkeygyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb259IDAgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoLTEgKiBhbXAgKiBzdmdEaW0uaCkgLyAyXG4gICAgfSwgICAkeygyICogc3ZnRGltLncpIC8gYm90dG9tRnJhY3Rpb259IDBgO1xuXG4gICAgLy8gY29uc3QgbXVsdGlwbGVXYXZlcyA9IHNpbmdsZVdhdmUucmVwZWF0KG51bVdhdmVzICogNCk7XG4gICAgY29uc3QgbXVsdGlwbGVXYXZlcyA9IHNpbmdsZVdhdmUucmVwZWF0KG51bVdhdmVzICogNCk7XG4gICAgY29uc3QgcGF0aCA9IHN0YXJ0UGF0aCArIG11bHRpcGxlV2F2ZXM7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2luZVNWRyByZWY9e3N2Z1JlZn0+XG4gICAgICB7LyogPE1vdmVQYXRoXG4gICAgICAgIHJlZj17cGF0aFJlZn1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBzcGVlZD17MTAwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDUsIGFtcDogMC41IH0pfVxuICAgICAgLz5cbiAgICAgIDxNb3ZlUGF0aFxuICAgICAgICByZWY9e3BhdGhSZWZ9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgZGFzaGFycmF5PVwiNCA0XCJcbiAgICAgICAgc3BlZWQ9ezMwfVxuICAgICAgICBkPXtzZXRQYXRoKHsgbnVtV2F2ZXM6IDAuNiwgYW1wOiAwLjI1IH0pfVxuICAgICAgLz4gICovfVxuICAgICAgey8qIDxBeGlzIGQ9e2BNIDAgJHtzdmdEaW0uaCAvIDJ9IEwgJHtzdmdEaW0ud30gJHtzdmdEaW0uaCAvIDJ9YH0gLz4gKi99XG4gICAgPC9TaW5lU1ZHPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRnVsbFdpZHRoV3JhcHBlciIsIkhlcm9TdWJ0aXRsZSIsIkhlcm9UZXh0IiwiU2luZVNWRyIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsInBhdGhSZWYiLCJzdmdSZWYiLCJzdmdEaW0iLCJzZXRTdmdEaW0iLCJoIiwidyIsInByb2dyZXNzIiwic2V0UGF0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsIm9yaWdpbiIsIngiLCJ5IiwiYW1wbGl0dWRlIiwicmFyaXR5IiwiZnJlcSIsInBoYXNlIiwiYW1wMSIsImFuZ2ZyZXExIiwicGhhc2UxIiwiYW1wMiIsImFuZ2ZyZXEyIiwicGhhc2UyIiwib25lU2luZVBhdGgiLCJhbXAiLCJhbmdmcmVxIiwiY29tYmluZVR3b1NpbmVzUGF0aCIsImkiLCJsaW5lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJNYXRoIiwic2luIiwiYXBwZW5kQ2hpbGQiLCJjb21iaW5lVHdvU2luZXNDaXJjbGVzX0FwcGVuZCIsImxpbmVBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJnIiwibWFwIiwieDEiLCJ5MSIsIngyIiwieTIiLCJudW1XYXZlcyIsImNlbnRlckhlaWdodCIsImJvdHRvbUZyYWN0aW9uIiwic3RhcnRQYXRoIiwic2luZ2xlV2F2ZSIsIm11bHRpcGxlV2F2ZXMiLCJyZXBlYXQiLCJwYXRoIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});