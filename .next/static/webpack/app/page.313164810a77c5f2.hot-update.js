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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    const pathRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgDim, setSvgDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        h: 0,\n        w: 0\n    });\n    let progress = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPath(progress);\n        if (svgRef.current) {\n            setSvgDim({\n                h: svgRef.current.getBoundingClientRect().height,\n                w: svgRef.current.getBoundingClientRect().width\n            });\n        }\n    }, []);\n    const setPath = (progress)=>{\n        //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference\n        // Step 1: Create Animated Normal Sine Waves\n        // let wavelength = 10; wavelenght is reverse of numWaves\n        let numWaves = 6; // positive numbers only;\n        let amp = 0.5;\n        let centerHeight = svgDim.h / 2;\n        let bottomFraction = numWaves * 4;\n        let startPath = \"M 0 \".concat(centerHeight);\n        let singleWave = \"q \".concat(svgDim.w / bottomFraction, \" \").concat(amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0 q \").concat(svgDim.w / bottomFraction, \" \").concat(-1 * amp * svgDim.h / 2, \",   \").concat(2 * svgDim.w / bottomFraction, \" 0\");\n        const multipleWaves = singleWave.repeat(numWaves * 2);\n        const path = startPath + multipleWaves;\n        return path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineSVG, {\n        ref: svgRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                id: \"wave\",\n                ref: pathRef,\n                d: setPath(progress = 20)\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M 0 \".concat(svgDim.h / 2, \" L \").concat(svgDim.w, \" \").concat(svgDim.h / 2)\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                id: \"orange-circle\",\n                r: \"30\",\n                cx: \"50\",\n                cy: \"50\",\n                fill: \"orange\"\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"animate\", {\n                xlinkHref: \"#orange-circle\",\n                attributeName: \"cx\",\n                from: \"50\",\n                to: \"450\",\n                dur: \"1s\",\n                // begin=\"hover\"\n                fill: \"freeze\"\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"animate\", {\n                xlinkHref: \"#wave\",\n                attributeName: \"x\",\n                from: \"0\",\n                to: \"\".concat(-1 * svgDim.w / 2),\n                dur: \"10s\",\n                // repeatCount=\"indefinite\"\n                begin: \"click\"\n            }, void 0, false, {\n                fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(CanvasWave, \"qt7ItrI5sqWJz7c353wTFuXMbX0=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDRztBQU12QjtBQUdqQixTQUFTUSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNOLCtEQUFnQkE7a0JBQ2YsNEVBQUNJLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0YsMERBQVFBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0wsOERBQVlBO29CQUFDSyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7b0JBQVdELE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQjtLQWR3QkQ7QUFnQnhCLFNBQVNFLFdBQVcsS0FBeUI7UUFBekIsRUFBRUQsS0FBSyxFQUFrQixHQUF6Qjs7SUFDbEIsTUFBTUUsVUFBVVYsNkNBQU1BLENBQUM7SUFDdkIsTUFBTVcsU0FBU1gsNkNBQU1BLENBQUM7SUFDdEIsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO1FBQUVhLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ2xELElBQUlDLFdBQVc7SUFDZmpCLGdEQUFTQSxDQUFDO1FBQ1JrQixRQUFRRDtRQUNSLElBQUlMLE9BQU9PLE9BQU8sRUFBRTtZQUNsQkwsVUFBVTtnQkFDUkMsR0FBR0gsT0FBT08sT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0MsTUFBTTtnQkFDaERMLEdBQUdKLE9BQU9PLE9BQU8sQ0FBQ0MscUJBQXFCLEdBQUdFLEtBQUs7WUFDakQ7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1KLFVBQVUsQ0FBQ0Q7UUFDZixpT0FBaU87UUFFak8sNENBQTRDO1FBRTVDLHlEQUF5RDtRQUN6RCxJQUFJTSxXQUFXLEdBQUcseUJBQXlCO1FBQzNDLElBQUlDLE1BQU07UUFFVixJQUFJQyxlQUFlWixPQUFPRSxDQUFDLEdBQUc7UUFDOUIsSUFBSVcsaUJBQWlCSCxXQUFXO1FBRWhDLElBQUlJLFlBQVksT0FBb0IsT0FBYkY7UUFDdkIsSUFBSUcsYUFBYSxLQUNmLE9BRG9CZixPQUFPRyxDQUFDLEdBQUdVLGdCQUFlLEtBRXpDLE9BREwsTUFBT2IsT0FBT0UsQ0FBQyxHQUFJLEdBQ3BCLFFBQTZDRixPQUF2QyxJQUFLQSxPQUFPRyxDQUFDLEdBQUlVLGdCQUFlLFNBQ3JDLE9BRDRDYixPQUFPRyxDQUFDLEdBQUdVLGdCQUFlLEtBRWpFLE9BREwsQ0FBRSxJQUFJRixNQUFNWCxPQUFPRSxDQUFDLEdBQUksR0FDekIsUUFBc0MsT0FBaEMsSUFBS0YsT0FBT0csQ0FBQyxHQUFJVSxnQkFBZTtRQUV2QyxNQUFNRyxnQkFBZ0JELFdBQVdFLE1BQU0sQ0FBQ1AsV0FBVztRQUNuRCxNQUFNUSxPQUFPSixZQUFZRTtRQUN6QixPQUFPRTtJQUNUO0lBQ0EscUJBQ0UsOERBQUN6Qix5REFBT0E7UUFBQzBCLEtBQUtwQjs7MEJBQ1osOERBQUNtQjtnQkFBS0UsSUFBRztnQkFBT0QsS0FBS3JCO2dCQUFTdUIsR0FBR2hCLFFBQVNELFdBQVc7Ozs7OzswQkFDckQsOERBQUNjO2dCQUFLRyxHQUFHLE9BQXlCckIsT0FBbEJBLE9BQU9FLENBQUMsR0FBRyxHQUFFLE9BQWlCRixPQUFaQSxPQUFPRyxDQUFDLEVBQUMsS0FBZ0IsT0FBYkgsT0FBT0UsQ0FBQyxHQUFHOzs7Ozs7MEJBQ3pELDhEQUFDb0I7Z0JBQU9GLElBQUc7Z0JBQWdCRyxHQUFFO2dCQUFLQyxJQUFHO2dCQUFLQyxJQUFHO2dCQUFLQyxNQUFLOzs7Ozs7MEJBRXZELDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVkMsZUFBYztnQkFDZEMsTUFBSztnQkFDTEMsSUFBRztnQkFDSEMsS0FBSTtnQkFDSixnQkFBZ0I7Z0JBQ2hCTixNQUFLOzs7Ozs7MEJBRVAsOERBQUNDO2dCQUNDQyxXQUFVO2dCQUNWQyxlQUFjO2dCQUNkQyxNQUFLO2dCQUNMQyxJQUFJLEdBQXVCLE9BQXBCLENBQUUsSUFBSS9CLE9BQU9HLENBQUMsR0FBSTtnQkFDekI2QixLQUFJO2dCQUNKLDJCQUEyQjtnQkFDM0JDLE9BQU07Ozs7Ozs7Ozs7OztBQUtkO0dBakVTcEM7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGdWxsV2lkdGhXcmFwcGVyIH0gZnJvbSBcIi4uL3N0eWxlL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIEhlcm9TdWJ0aXRsZSxcbiAgSGVyb1RleHQsXG4gIFNpbmVTVkcsXG4gIFNpbmVXYXZlR3JpZFdyYXBwZXIsXG59IGZyb20gXCIuLi9zdHlsZS9zaW5lV2F2ZVN0eWxlXCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuLi9zdHlsZS9zdHlsZUNvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5lV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxXaWR0aFdyYXBwZXI+XG4gICAgICA8U2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICAgICAgPEhlcm9UZXh0IGNvbG9yPXtjb2xvcn0+IGRlc2lnbmluZyB3aXRoIGRhdGEgPC9IZXJvVGV4dD5cbiAgICAgICAgPEhlcm9TdWJ0aXRsZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgIGEgZGF0YSB2aXN1YWxpemF0aW9uIGRlc2lnbmVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIGVuZ2luZWVyaW5nLCBJIGxvdmVcbiAgICAgICAgICB3b3JraW5nIHdpdGggY29tcGxleCBkYXRhIGFuZCB0dXJuaW5nIGl0IGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bCBpbnRvXG4gICAgICAgICAgZGF0YSBkcml2ZW4gZGVzaWduZXJcbiAgICAgICAgPC9IZXJvU3VidGl0bGU+XG4gICAgICAgIDxDYW52YXNXYXZlIGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgIDwvU2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICA8L0Z1bGxXaWR0aFdyYXBwZXI+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhbnZhc1dhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICBjb25zdCBwYXRoUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzdmdSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzdmdEaW0sIHNldFN2Z0RpbV0gPSB1c2VTdGF0ZSh7IGg6IDAsIHc6IDAgfSk7XG4gIGxldCBwcm9ncmVzcyA9IDA7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGF0aChwcm9ncmVzcyk7XG4gICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICBzZXRTdmdEaW0oe1xuICAgICAgICBoOiBzdmdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgIHc6IHN2Z1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0UGF0aCA9IChwcm9ncmVzczogbnVtYmVyKSA9PiB7XG4gICAgLy9odHRwczovL3BoeXMubGlicmV0ZXh0cy5vcmcvQm9va3NoZWx2ZXMvVW5pdmVyc2l0eV9QaHlzaWNzL0Jvb2slM0FfSW50cm9kdWN0b3J5X1BoeXNpY3NfLV9CdWlsZGluZ19Nb2RlbHNfdG9fRGVzY3JpYmVfT3VyX1dvcmxkXyhNYXJ0aW5fTmVhcnlfUmluYWxkb19hbmRfV29vZG1hbikvMTQlM0FfV2F2ZXMvMTQuMDYlM0FfU3VwZXJwb3NpdGlvbl9vZl93YXZlc19hbmRfaW50ZXJmZXJlbmNlXG5cbiAgICAvLyBTdGVwIDE6IENyZWF0ZSBBbmltYXRlZCBOb3JtYWwgU2luZSBXYXZlc1xuXG4gICAgLy8gbGV0IHdhdmVsZW5ndGggPSAxMDsgd2F2ZWxlbmdodCBpcyByZXZlcnNlIG9mIG51bVdhdmVzXG4gICAgbGV0IG51bVdhdmVzID0gNjsgLy8gcG9zaXRpdmUgbnVtYmVycyBvbmx5O1xuICAgIGxldCBhbXAgPSAwLjU7XG5cbiAgICBsZXQgY2VudGVySGVpZ2h0ID0gc3ZnRGltLmggLyAyO1xuICAgIGxldCBib3R0b21GcmFjdGlvbiA9IG51bVdhdmVzICogNDtcblxuICAgIGxldCBzdGFydFBhdGggPSBgTSAwICR7Y2VudGVySGVpZ2h0fWA7XG4gICAgbGV0IHNpbmdsZVdhdmUgPSBgcSAke3N2Z0RpbS53IC8gYm90dG9tRnJhY3Rpb259ICR7XG4gICAgICAoYW1wICogc3ZnRGltLmgpIC8gMlxuICAgIH0sICAgJHsoMiAqIHN2Z0RpbS53KSAvIGJvdHRvbUZyYWN0aW9ufSAwIHEgJHtzdmdEaW0udyAvIGJvdHRvbUZyYWN0aW9ufSAke1xuICAgICAgKC0xICogYW1wICogc3ZnRGltLmgpIC8gMlxuICAgIH0sICAgJHsoMiAqIHN2Z0RpbS53KSAvIGJvdHRvbUZyYWN0aW9ufSAwYDtcblxuICAgIGNvbnN0IG11bHRpcGxlV2F2ZXMgPSBzaW5nbGVXYXZlLnJlcGVhdChudW1XYXZlcyAqIDIpO1xuICAgIGNvbnN0IHBhdGggPSBzdGFydFBhdGggKyBtdWx0aXBsZVdhdmVzO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxTaW5lU1ZHIHJlZj17c3ZnUmVmfT5cbiAgICAgIDxwYXRoIGlkPVwid2F2ZVwiIHJlZj17cGF0aFJlZn0gZD17c2V0UGF0aCgocHJvZ3Jlc3MgPSAyMCkpfT48L3BhdGg+XG4gICAgICA8cGF0aCBkPXtgTSAwICR7c3ZnRGltLmggLyAyfSBMICR7c3ZnRGltLnd9ICR7c3ZnRGltLmggLyAyfWB9IC8+XG4gICAgICA8Y2lyY2xlIGlkPVwib3JhbmdlLWNpcmNsZVwiIHI9XCIzMFwiIGN4PVwiNTBcIiBjeT1cIjUwXCIgZmlsbD1cIm9yYW5nZVwiIC8+XG5cbiAgICAgIDxhbmltYXRlXG4gICAgICAgIHhsaW5rSHJlZj1cIiNvcmFuZ2UtY2lyY2xlXCJcbiAgICAgICAgYXR0cmlidXRlTmFtZT1cImN4XCJcbiAgICAgICAgZnJvbT1cIjUwXCJcbiAgICAgICAgdG89XCI0NTBcIlxuICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgIC8vIGJlZ2luPVwiaG92ZXJcIlxuICAgICAgICBmaWxsPVwiZnJlZXplXCJcbiAgICAgIC8+XG4gICAgICA8YW5pbWF0ZVxuICAgICAgICB4bGlua0hyZWY9XCIjd2F2ZVwiXG4gICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ4XCJcbiAgICAgICAgZnJvbT1cIjBcIlxuICAgICAgICB0bz17YCR7KC0xICogc3ZnRGltLncpIC8gMn1gfVxuICAgICAgICBkdXI9XCIxMHNcIlxuICAgICAgICAvLyByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICBiZWdpbj1cImNsaWNrXCJcbiAgICAgIC8+XG4gICAgICB7LyogPHVzZSB4bGlua0hyZWY9XCIjZmlyc3RcIj48L3VzZT4gKi99XG4gICAgPC9TaW5lU1ZHPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRnVsbFdpZHRoV3JhcHBlciIsIkhlcm9TdWJ0aXRsZSIsIkhlcm9UZXh0IiwiU2luZVNWRyIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsInBhdGhSZWYiLCJzdmdSZWYiLCJzdmdEaW0iLCJzZXRTdmdEaW0iLCJoIiwidyIsInByb2dyZXNzIiwic2V0UGF0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsIm51bVdhdmVzIiwiYW1wIiwiY2VudGVySGVpZ2h0IiwiYm90dG9tRnJhY3Rpb24iLCJzdGFydFBhdGgiLCJzaW5nbGVXYXZlIiwibXVsdGlwbGVXYXZlcyIsInJlcGVhdCIsInBhdGgiLCJyZWYiLCJpZCIsImQiLCJjaXJjbGUiLCJyIiwiY3giLCJjeSIsImZpbGwiLCJhbmltYXRlIiwieGxpbmtIcmVmIiwiYXR0cmlidXRlTmFtZSIsImZyb20iLCJ0byIsImR1ciIsImJlZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});