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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n    }, []);\n    const setPath = (progress)=>{\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        let wavelength = 10;\n        let amp = 50;\n        let numWaves = 1;\n        // Distant Step 2: Combine Waves via adding line elements: https://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js\n        // const path = `M0 ${svgDim.h / 2} q ${svgDim.w / 2} ${svgDim.h / 2}, ${\n        //   svgDim.w\n        // } 0} `;\n        let centerHeight = svgDim.h / 2;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let bottomFraction = numWaves * 4;\n        let downCurve = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(centerHeight, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        const path = \"M 0 \".concat(svgDim.h / 2, \" q \").concat(svgDim.w / 4, \" \").concat(svgDim.h / 2, \",   \").concat(2 * svgDim.w / 4, \" 0, q \").concat(svgDim.w / 4, \" \").concat(-1 * svgDim.h / 2, \", \").concat(svgDim.w / 2, \" 0\");\n        const path2 = \"M 0 \".concat(svgDim.h / 2, \" q \").concat(svgDim.w / 8, \" \").concat(svgDim.h / 2, \",   \").concat(2 * svgDim.w / 8, \" 0, q \").concat(svgDim.w / 8, \" \").concat(-1 * svgDim.h / 2, \", \").concat(3 * svgDim.w / 8, \" 0\");\n        return path2;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                ref: pathRef,\n                d: setPath(progress = 20)\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M 0 \".concat(svgDim.h / 2, \" L \").concat(svgDim.w, \" \").concat(svgDim.h / 2)\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDRztBQU12QjtBQUdqQixTQUFTUSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNOLCtEQUFnQkE7a0JBQ2YsNEVBQUNJLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0YsMERBQVFBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0wsOERBQVlBO29CQUFDSyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7b0JBQVdELE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQjtLQWR3QkQ7QUFnQnhCLFNBQVNFLFdBQVcsS0FBeUI7UUFBekIsRUFBRUQsS0FBSyxFQUFrQixHQUF6Qjs7SUFDbEIsTUFBTUUsVUFBVVYsNkNBQU1BLENBQUM7SUFDdkIsTUFBTVcsU0FBU1gsNkNBQU1BLENBQUM7SUFDdEIsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO1FBQUVhLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ2xELElBQUlDLFdBQVc7SUFDZmpCLGdEQUFTQSxDQUFDO1FBQ1JrQixRQUFRRDtRQUNSLElBQUlMLE9BQU9PLE9BQU8sRUFBRTtZQUNsQkwsVUFBVTtnQkFDUkMsR0FBR0gsT0FBT08sT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0MsTUFBTTtnQkFDaERMLEdBQUdKLE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdFLEtBQUs7WUFDakQ7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1KLFVBQVUsQ0FBQ0Q7UUFDZixpT0FBaU87UUFFak8sNENBQTRDO1FBRTVDLElBQUlNLGFBQWE7UUFDakIsSUFBSUMsTUFBTTtRQUNWLElBQUlDLFdBQVc7UUFDZiwwSUFBMEk7UUFFMUkseUVBQXlFO1FBQ3pFLGFBQWE7UUFDYixVQUFVO1FBQ1YsSUFBSUMsZUFBZWIsT0FBT0UsQ0FBQyxHQUFHO1FBQzlCLElBQUlZLFlBQVksT0FBb0IsT0FBYkQ7UUFDdkIsSUFBSUUsaUJBQWlCSCxXQUFXO1FBQ2hDLElBQUlJLFlBQVksS0FBa0NILE9BQTdCYixPQUFPRyxDQUFDLEdBQUdZLGdCQUFlLEtBQzdDLE9BRGdERixjQUFhLFFBRTlELE9BREMsSUFBS2IsT0FBT0csQ0FBQyxHQUFJWSxnQkFDbEI7UUFFRCxNQUFNRSxPQUFPLE9BQXlCakIsT0FBbEJBLE9BQU9FLENBQUMsR0FBRyxHQUFFLE9BQXFCRixPQUFoQkEsT0FBT0csQ0FBQyxHQUFHLEdBQUUsS0FDakQsT0FEb0RILE9BQU9FLENBQUMsR0FBRyxHQUFFLFFBRTFERixPQURQLElBQUtBLE9BQU9HLENBQUMsR0FBSSxHQUNsQixVQUF3QixPQUFoQkgsT0FBT0csQ0FBQyxHQUFHLEdBQUUsS0FBMkJILE9BQXhCLENBQUUsSUFBSUEsT0FBT0UsQ0FBQyxHQUFJLEdBQUUsTUFBaUIsT0FBYkYsT0FBT0csQ0FBQyxHQUFHLEdBQUU7UUFFOUQsTUFBTWUsUUFBUSxPQUF5QmxCLE9BQWxCQSxPQUFPRSxDQUFDLEdBQUcsR0FBRSxPQUFxQkYsT0FBaEJBLE9BQU9HLENBQUMsR0FBRyxHQUFFLEtBQ2xELE9BRHFESCxPQUFPRSxDQUFDLEdBQUcsR0FBRSxRQUUzREYsT0FEUCxJQUFLQSxPQUFPRyxDQUFDLEdBQUksR0FDbEIsVUFBd0IsT0FBaEJILE9BQU9HLENBQUMsR0FBRyxHQUFFLEtBQTJCLE9BQXhCLENBQUUsSUFBSUgsT0FBT0UsQ0FBQyxHQUFJLEdBQUUsTUFBdUIsT0FBbkIsSUFBS0YsT0FBT0csQ0FBQyxHQUFJLEdBQUU7UUFDcEUsT0FBT2U7SUFDVDtJQUNBLHFCQUNFLDhEQUFDekIseURBQU9BO1FBQUMwQixLQUFLcEI7OzBCQUNaLDhEQUFDa0I7Z0JBQ0NFLEtBQUtyQjtnQkFDTHNCLEdBQUdmLFFBQVNELFdBQVc7Ozs7OzswQkFHekIsOERBQUNhO2dCQUFLRyxHQUFHLE9BQXlCcEIsT0FBbEJBLE9BQU9FLENBQUMsR0FBRyxHQUFFLE9BQWlCRixPQUFaQSxPQUFPRyxDQUFDLEVBQUMsS0FBZ0IsT0FBYkgsT0FBT0UsQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7QUFHL0Q7R0F0RFNMO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3g/YzYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRnVsbFdpZHRoV3JhcHBlciB9IGZyb20gXCIuLi9zdHlsZS9ncmlkTGF5b3V0XCI7XG5pbXBvcnQge1xuICBIZXJvU3VidGl0bGUsXG4gIEhlcm9UZXh0LFxuICBTaW5lU1ZHLFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZVdhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICByZXR1cm4gKFxuICAgIDxGdWxsV2lkdGhXcmFwcGVyPlxuICAgICAgPFNpbmVXYXZlR3JpZFdyYXBwZXI+XG4gICAgICAgIDxIZXJvVGV4dCBjb2xvcj17Y29sb3J9PiBkZXNpZ25pbmcgd2l0aCBkYXRhIDwvSGVyb1RleHQ+XG4gICAgICAgIDxIZXJvU3VidGl0bGUgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICBhIGRhdGEgdmlzdWFsaXphdGlvbiBkZXNpZ25lciB3aXRoIGEgYmFja2dyb3VuZCBpbiBlbmdpbmVlcmluZywgSSBsb3ZlXG4gICAgICAgICAgd29ya2luZyB3aXRoIGNvbXBsZXggZGF0YSBhbmQgdHVybmluZyBpdCBpbnRvIHNvbWV0aGluZyBiZWF1dGlmdWwgaW50b1xuICAgICAgICAgIGRhdGEgZHJpdmVuIGRlc2lnbmVyXG4gICAgICAgIDwvSGVyb1N1YnRpdGxlPlxuICAgICAgICA8Q2FudmFzV2F2ZSBjb2xvcj17Y29sb3J9IC8+XG4gICAgICA8L1NpbmVXYXZlR3JpZFdyYXBwZXI+XG4gICAgPC9GdWxsV2lkdGhXcmFwcGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBDYW52YXNXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgY29uc3QgcGF0aFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc3ZnRGltLCBzZXRTdmdEaW1dID0gdXNlU3RhdGUoeyBoOiAwLCB3OiAwIH0pO1xuICBsZXQgcHJvZ3Jlc3MgPSAwO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhdGgocHJvZ3Jlc3MpO1xuICAgIGlmIChzdmdSZWYuY3VycmVudCkge1xuICAgICAgc2V0U3ZnRGltKHtcbiAgICAgICAgaDogc3ZnUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICB3OiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldFBhdGggPSAocHJvZ3Jlc3M6IG51bWJlcikgPT4ge1xuICAgIC8vaHR0cHM6Ly9waHlzLmxpYnJldGV4dHMub3JnL0Jvb2tzaGVsdmVzL1VuaXZlcnNpdHlfUGh5c2ljcy9Cb29rJTNBX0ludHJvZHVjdG9yeV9QaHlzaWNzXy1fQnVpbGRpbmdfTW9kZWxzX3RvX0Rlc2NyaWJlX091cl9Xb3JsZF8oTWFydGluX05lYXJ5X1JpbmFsZG9fYW5kX1dvb2RtYW4pLzE0JTNBX1dhdmVzLzE0LjA2JTNBX1N1cGVycG9zaXRpb25fb2Zfd2F2ZXNfYW5kX2ludGVyZmVyZW5jZVxuXG4gICAgLy8gU3RlcCAxOiBDcmVhdGUgQW5pbWF0ZWQgTm9ybWFsIFNpbmUgV2F2ZXNcblxuICAgIGxldCB3YXZlbGVuZ3RoID0gMTA7XG4gICAgbGV0IGFtcCA9IDUwO1xuICAgIGxldCBudW1XYXZlcyA9IDE7XG4gICAgLy8gRGlzdGFudCBTdGVwIDI6IENvbWJpbmUgV2F2ZXMgdmlhIGFkZGluZyBsaW5lIGVsZW1lbnRzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzkzMjcwNC9ob3ctdG8tZHJhdy1zaW5lLXdhdmVzLXdpdGgtc3ZnLWpzXG5cbiAgICAvLyBjb25zdCBwYXRoID0gYE0wICR7c3ZnRGltLmggLyAyfSBxICR7c3ZnRGltLncgLyAyfSAke3N2Z0RpbS5oIC8gMn0sICR7XG4gICAgLy8gICBzdmdEaW0ud1xuICAgIC8vIH0gMH0gYDtcbiAgICBsZXQgY2VudGVySGVpZ2h0ID0gc3ZnRGltLmggLyAyO1xuICAgIGxldCBzdGFydFBhdGggPSBgTSAwICR7Y2VudGVySGVpZ2h0fWA7XG4gICAgbGV0IGJvdHRvbUZyYWN0aW9uID0gbnVtV2F2ZXMgKiA0O1xuICAgIGxldCBkb3duQ3VydmUgPSBgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7Y2VudGVySGVpZ2h0fSwgICAke1xuICAgICAgKDIgKiBzdmdEaW0udykgLyBib3R0b21GcmFjdGlvblxuICAgIH0gMGA7XG5cbiAgICBjb25zdCBwYXRoID0gYE0gMCAke3N2Z0RpbS5oIC8gMn0gcSAke3N2Z0RpbS53IC8gNH0gJHtzdmdEaW0uaCAvIDJ9LCAgICR7XG4gICAgICAoMiAqIHN2Z0RpbS53KSAvIDRcbiAgICB9IDAsIHEgJHtzdmdEaW0udyAvIDR9ICR7KC0xICogc3ZnRGltLmgpIC8gMn0sICR7c3ZnRGltLncgLyAyfSAwYDtcblxuICAgIGNvbnN0IHBhdGgyID0gYE0gMCAke3N2Z0RpbS5oIC8gMn0gcSAke3N2Z0RpbS53IC8gOH0gJHtzdmdEaW0uaCAvIDJ9LCAgICR7XG4gICAgICAoMiAqIHN2Z0RpbS53KSAvIDhcbiAgICB9IDAsIHEgJHtzdmdEaW0udyAvIDh9ICR7KC0xICogc3ZnRGltLmgpIC8gMn0sICR7KDMgKiBzdmdEaW0udykgLyA4fSAwYDtcbiAgICByZXR1cm4gcGF0aDI7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFNpbmVTVkcgcmVmPXtzdmdSZWZ9PlxuICAgICAgPHBhdGhcbiAgICAgICAgcmVmPXtwYXRoUmVmfVxuICAgICAgICBkPXtzZXRQYXRoKChwcm9ncmVzcyA9IDIwKSl9XG4gICAgICAgIC8vIGQ9XCJcdFx0cGF0aDogJ00gLTE4MCAwICBxIDkwIDAgMTgwIDEwMCB0IDE4MCAwIHQgMTgwIDAgdCAxODAgMCB0IDE4MCAwIHQgMTgwIDAgdCAxODAgMCB0IDE4MCAwIHQgMTgwIDAgJyxcbiAgICAgIC8+XG4gICAgICA8cGF0aCBkPXtgTSAwICR7c3ZnRGltLmggLyAyfSBMICR7c3ZnRGltLnd9ICR7c3ZnRGltLmggLyAyfWB9IC8+XG4gICAgPC9TaW5lU1ZHPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRnVsbFdpZHRoV3JhcHBlciIsIkhlcm9TdWJ0aXRsZSIsIkhlcm9UZXh0IiwiU2luZVNWRyIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsInBhdGhSZWYiLCJzdmdSZWYiLCJzdmdEaW0iLCJzZXRTdmdEaW0iLCJoIiwidyIsInByb2dyZXNzIiwic2V0UGF0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsIndhdmVsZW5ndGgiLCJhbXAiLCJudW1XYXZlcyIsImNlbnRlckhlaWdodCIsInN0YXJ0UGF0aCIsImJvdHRvbUZyYWN0aW9uIiwiZG93bkN1cnZlIiwicGF0aCIsInBhdGgyIiwicmVmIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});