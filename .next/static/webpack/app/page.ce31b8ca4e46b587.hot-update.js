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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {}, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave() {\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas.getContext(\"2d\");\n        let width = ctx.canvas.width;\n        let height = ctx.canvas.height;\n        drawWave({\n            ctx,\n            width: width,\n            height: height,\n            Tmax: 0.001,\n            Vmax: 2,\n            Vp: 1,\n            phase: 0,\n            fo: 1000,\n            N: 100,\n            color: \"red\",\n            thick: 1\n        });\n        drawWave({\n            ctx,\n            width: width,\n            height: height,\n            Tmax: 0.001,\n            Vmax: 12,\n            Vp: 1,\n            phase: 0,\n            fo: 1000,\n            N: 100,\n            color: \"blue\",\n            thick: 5\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 95,\n        columnNumber: 10\n    }, this);\n}\n_s(CanvasWave, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c1 = CanvasWave;\nfunction drawWave(param) {\n    let { ctx, width, height, Tmax, Vmax, Vp, phase, fo, N, color, thick } = param;\n    // fill canvas\n    // ctx.fillStyle = \"#dddddd\";\n    // ctx.fillRect(0, 0, 501, 201);\n    // define origin at plot center\n    let x0 = 0.5 + 0.5 * width; // x0, y0 place plot origin in middle of canvas\n    let y0 = 0.5 + 0.5 * height;\n    var x = new Array(), y = new Array(); // x,y plotting variables\n    var dt, tstart, tstop; // time variables\n    // define plot paramaters\n    tstart = -Tmax;\n    tstop = Tmax;\n    dt = (tstop - tstart) / (N - 1); // time increment over N points\n    let xscale = width / (2 * Tmax); // x pix per s\n    let yscale = height / (2 * Vmax); // y pix per V\n    // create function\n    for(let i = 0; i < N; i++){\n        x[i] = tstart + i * dt;\n        y[i] = Vp * Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180);\n    }\n    GraphArray({\n        ctx,\n        x0,\n        y0,\n        xscale,\n        yscale,\n        N,\n        x,\n        y,\n        color: \"rgb(0,0,255)\",\n        thick: 4\n    });\n}\nfunction GraphArray(param) {\n    let { ctx, x0, y0, xscale, yscale, N, x, y, color, thick } = param;\n    ctx.beginPath();\n    ctx.lineWidth = thick;\n    ctx.strokeStyle = color;\n    for(let i = 0; i < N; i++){\n        // translate actual x,y to plot xp,yp\n        let xp = x0 + x[i] * xscale;\n        let yp = y0 - y[i] * yscale;\n        // draw ine to next point\n        if (i == 0) ctx.moveTo(xp, yp);\n        else ctx.lineTo(xp, yp);\n    }\n    ctx.stroke();\n}\n_c2 = GraphArray;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n$RefreshReg$(_c2, \"GraphArray\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYTtBQUt2QjtBQUlqQixTQUFTTSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNMLCtEQUFnQkE7a0JBQ2YsNEVBQUNHLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0QsMERBQVFBO29CQUFDRyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0osOERBQVlBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtLQWR3QkY7QUFpRHhCLFNBQVNFOztJQUNQLE1BQU1DLFlBQVlSLDZDQUFNQSxDQUFDO0lBQ3pCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFNBQVNELFVBQVVFLE9BQU87UUFDaEMsTUFBTUMsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1FBQzlCLElBQUlDLFFBQVFGLElBQUlGLE1BQU0sQ0FBQ0ksS0FBSztRQUM1QixJQUFJQyxTQUFTSCxJQUFJRixNQUFNLENBQUNLLE1BQU07UUFFOUJDLFNBQVM7WUFDUEo7WUFDQUUsT0FBT0E7WUFDUEMsUUFBUUE7WUFDUkUsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsT0FBTztZQUNQQyxJQUFJO1lBQ0pDLEdBQUc7WUFDSGYsT0FBTztZQUNQZ0IsT0FBTztRQUNUO1FBQ0FQLFNBQVM7WUFDUEo7WUFDQUUsT0FBT0E7WUFDUEMsUUFBUUE7WUFDUkUsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsT0FBTztZQUNQQyxJQUFJO1lBQ0pDLEdBQUc7WUFDSGYsT0FBTztZQUNQZ0IsT0FBTztRQUNUO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQU8sOERBQUNiO1FBQU9jLEtBQUtmOzs7Ozs7QUFDdEI7R0FwQ1NEO01BQUFBO0FBc0NULFNBQVNRLFNBQVMsS0FZTDtRQVpLLEVBQ2hCSixHQUFHLEVBQ0hFLEtBQUssRUFDTEMsTUFBTSxFQUNORSxJQUFJLEVBQ0pDLElBQUksRUFDSkMsRUFBRSxFQUNGQyxLQUFLLEVBQ0xDLEVBQUUsRUFDRkMsQ0FBQyxFQUNEZixLQUFLLEVBQ0xnQixLQUFLLEVBQ00sR0FaSztJQWFoQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUVoQywrQkFBK0I7SUFDL0IsSUFBSUUsS0FBSyxNQUFNLE1BQU1YLE9BQU8sK0NBQStDO0lBQzNFLElBQUlZLEtBQUssTUFBTSxNQUFNWDtJQUVyQixJQUFJWSxJQUFJLElBQUlDLFNBQ1ZDLElBQUksSUFBSUQsU0FBUyx5QkFBeUI7SUFDNUMsSUFBSUUsSUFBSUMsUUFBUUMsT0FBTyxpQkFBaUI7SUFFeEMseUJBQXlCO0lBQ3pCRCxTQUFTLENBQUNkO0lBQ1ZlLFFBQVFmO0lBQ1JhLEtBQUssQ0FBQ0UsUUFBUUQsTUFBSyxJQUFNVCxDQUFBQSxJQUFJLElBQUksK0JBQStCO0lBQ2hFLElBQUlXLFNBQVNuQixRQUFTLEtBQUlHLElBQUcsR0FBSSxjQUFjO0lBQy9DLElBQUlpQixTQUFTbkIsU0FBVSxLQUFJRyxJQUFHLEdBQUksY0FBYztJQUVoRCxrQkFBa0I7SUFDbEIsSUFBSyxJQUFJaUIsSUFBSSxHQUFHQSxJQUFJYixHQUFHYSxJQUFLO1FBQzFCUixDQUFDLENBQUNRLEVBQUUsR0FBR0osU0FBU0ksSUFBSUw7UUFDcEJELENBQUMsQ0FBQ00sRUFBRSxHQUFHaEIsS0FBS2lCLEtBQUtDLEdBQUcsQ0FBQyxJQUFJLFNBQVNoQixLQUFLTSxDQUFDLENBQUNRLEVBQUUsR0FBRyxRQUFTLFNBQVU7SUFDbkU7SUFFQUcsV0FBVztRQUNUMUI7UUFDQWE7UUFDQUM7UUFDQU87UUFDQUM7UUFDQVo7UUFDQUs7UUFDQUU7UUFDQXRCLE9BQU87UUFDUGdCLE9BQU87SUFDVDtBQUNGO0FBQ0EsU0FBU2UsV0FBVyxLQVdOO1FBWE0sRUFDbEIxQixHQUFHLEVBQ0hhLEVBQUUsRUFDRkMsRUFBRSxFQUNGTyxNQUFNLEVBQ05DLE1BQU0sRUFDTlosQ0FBQyxFQUNESyxDQUFDLEVBQ0RFLENBQUMsRUFDRHRCLEtBQUssRUFDTGdCLEtBQUssRUFDTyxHQVhNO0lBWWxCWCxJQUFJMkIsU0FBUztJQUNiM0IsSUFBSTRCLFNBQVMsR0FBR2pCO0lBQ2hCWCxJQUFJNkIsV0FBVyxHQUFHbEM7SUFFbEIsSUFBSyxJQUFJNEIsSUFBSSxHQUFHQSxJQUFJYixHQUFHYSxJQUFLO1FBQzFCLHFDQUFxQztRQUNyQyxJQUFJTyxLQUFLakIsS0FBS0UsQ0FBQyxDQUFDUSxFQUFFLEdBQUdGO1FBQ3JCLElBQUlVLEtBQUtqQixLQUFLRyxDQUFDLENBQUNNLEVBQUUsR0FBR0Q7UUFFckIseUJBQXlCO1FBQ3pCLElBQUlDLEtBQUssR0FBR3ZCLElBQUlnQyxNQUFNLENBQUNGLElBQUlDO2FBQ3RCL0IsSUFBSWlDLE1BQU0sQ0FBQ0gsSUFBSUM7SUFDdEI7SUFFQS9CLElBQUlrQyxNQUFNO0FBQ1o7TUEzQlNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3g/YzYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRnVsbFdpZHRoV3JhcHBlciB9IGZyb20gXCIuLi9zdHlsZS9ncmlkTGF5b3V0XCI7XG5pbXBvcnQge1xuICBIZXJvU3VidGl0bGUsXG4gIEhlcm9UZXh0LFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IENvbG9yTWl4ZXIgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZVdhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICByZXR1cm4gKFxuICAgIDxGdWxsV2lkdGhXcmFwcGVyPlxuICAgICAgPFNpbmVXYXZlR3JpZFdyYXBwZXI+XG4gICAgICAgIDxIZXJvVGV4dCBjb2xvcj17Y29sb3J9PiBkZXNpZ25pbmcgd2l0aCBkYXRhIDwvSGVyb1RleHQ+XG4gICAgICAgIDxIZXJvU3VidGl0bGUgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICBhIGRhdGEgdmlzdWFsaXphdGlvbiBkZXNpZ25lciB3aXRoIGEgYmFja2dyb3VuZCBpbiBlbmdpbmVlcmluZywgSSBsb3ZlXG4gICAgICAgICAgd29ya2luZyB3aXRoIGNvbXBsZXggZGF0YSBhbmQgdHVybmluZyBpdCBpbnRvIHNvbWV0aGluZyBiZWF1dGlmdWwgaW50b1xuICAgICAgICAgIGRhdGEgZHJpdmVuIGRlc2lnbmVyXG4gICAgICAgIDwvSGVyb1N1YnRpdGxlPlxuICAgICAgICA8Q2FudmFzV2F2ZSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxudHlwZSBXYXZlSW5wdXRzID0ge1xuICBjdHg6IGFueTtcbiAgVG1heDogbnVtYmVyO1xuICBWbWF4OiBudW1iZXI7XG4gIFZwOiBudW1iZXI7XG4gIHBoYXNlOiBudW1iZXI7XG4gIGZvOiBudW1iZXI7XG4gIE46IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRoaWNrOiBhbnk7XG59O1xudHlwZSBHcmFwaElucHV0cyA9IHtcbiAgY3R4OiB7XG4gICAgYmVnaW5QYXRoOiAoKSA9PiB2b2lkO1xuICAgIGxpbmVXaWR0aDogYW55O1xuICAgIHN0cm9rZVN0eWxlOiBhbnk7XG4gICAgbW92ZVRvOiAoYXJnMDogYW55LCBhcmcxOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgbGluZVRvOiAoYXJnMDogYW55LCBhcmcxOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgc3Ryb2tlOiAoKSA9PiB2b2lkO1xuICB9O1xuICB4MDogYW55O1xuICB5MDogYW55O1xuICB4c2NhbGU6IGFueTtcbiAgeXNjYWxlOiBhbnk7XG4gIE46IG51bWJlcjtcbiAgeDogbnVtYmVyW107XG4gIHk6IG51bWJlcltdO1xuICBjb2xvcjogc3RyaW5nO1xuICB0aGljazogYW55O1xufTtcblxuZnVuY3Rpb24gQ2FudmFzV2F2ZSgpIHtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IHdpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG5cbiAgICBkcmF3V2F2ZSh7XG4gICAgICBjdHgsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIFRtYXg6IDAuMDAxLFxuICAgICAgVm1heDogMixcbiAgICAgIFZwOiAxLFxuICAgICAgcGhhc2U6IDAsXG4gICAgICBmbzogMTAwMCxcbiAgICAgIE46IDEwMCxcbiAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgdGhpY2s6IDEsXG4gICAgfSk7XG4gICAgZHJhd1dhdmUoe1xuICAgICAgY3R4LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBUbWF4OiAwLjAwMSxcbiAgICAgIFZtYXg6IDEyLFxuICAgICAgVnA6IDEsXG4gICAgICBwaGFzZTogMCxcbiAgICAgIGZvOiAxMDAwLFxuICAgICAgTjogMTAwLFxuICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgdGhpY2s6IDUsXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9PjwvY2FudmFzPjtcbn1cblxuZnVuY3Rpb24gZHJhd1dhdmUoe1xuICBjdHgsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIFRtYXgsXG4gIFZtYXgsXG4gIFZwLFxuICBwaGFzZSxcbiAgZm8sXG4gIE4sXG4gIGNvbG9yLFxuICB0aGljayxcbn06IFdhdmVJbnB1dHMpIHtcbiAgLy8gZmlsbCBjYW52YXNcbiAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2RkZGRkZFwiO1xuICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgNTAxLCAyMDEpO1xuXG4gIC8vIGRlZmluZSBvcmlnaW4gYXQgcGxvdCBjZW50ZXJcbiAgbGV0IHgwID0gMC41ICsgMC41ICogd2lkdGg7IC8vIHgwLCB5MCBwbGFjZSBwbG90IG9yaWdpbiBpbiBtaWRkbGUgb2YgY2FudmFzXG4gIGxldCB5MCA9IDAuNSArIDAuNSAqIGhlaWdodDtcblxuICB2YXIgeCA9IG5ldyBBcnJheSgpLFxuICAgIHkgPSBuZXcgQXJyYXkoKTsgLy8geCx5IHBsb3R0aW5nIHZhcmlhYmxlc1xuICB2YXIgZHQsIHRzdGFydCwgdHN0b3A7IC8vIHRpbWUgdmFyaWFibGVzXG5cbiAgLy8gZGVmaW5lIHBsb3QgcGFyYW1hdGVyc1xuICB0c3RhcnQgPSAtVG1heDtcbiAgdHN0b3AgPSBUbWF4O1xuICBkdCA9ICh0c3RvcCAtIHRzdGFydCkgLyAoTiAtIDEpOyAvLyB0aW1lIGluY3JlbWVudCBvdmVyIE4gcG9pbnRzXG4gIGxldCB4c2NhbGUgPSB3aWR0aCAvICgyICogVG1heCk7IC8vIHggcGl4IHBlciBzXG4gIGxldCB5c2NhbGUgPSBoZWlnaHQgLyAoMiAqIFZtYXgpOyAvLyB5IHBpeCBwZXIgVlxuXG4gIC8vIGNyZWF0ZSBmdW5jdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgIHhbaV0gPSB0c3RhcnQgKyBpICogZHQ7XG4gICAgeVtpXSA9IFZwICogTWF0aC5zaW4oMiAqIDMuMTQxNSAqIGZvICogeFtpXSArIChwaGFzZSAqIDMuMTQxNSkgLyAxODApO1xuICB9XG5cbiAgR3JhcGhBcnJheSh7XG4gICAgY3R4LFxuICAgIHgwLFxuICAgIHkwLFxuICAgIHhzY2FsZSxcbiAgICB5c2NhbGUsXG4gICAgTixcbiAgICB4LFxuICAgIHksXG4gICAgY29sb3I6IFwicmdiKDAsMCwyNTUpXCIsXG4gICAgdGhpY2s6IDQsXG4gIH0pO1xufVxuZnVuY3Rpb24gR3JhcGhBcnJheSh7XG4gIGN0eCxcbiAgeDAsXG4gIHkwLFxuICB4c2NhbGUsXG4gIHlzY2FsZSxcbiAgTixcbiAgeCxcbiAgeSxcbiAgY29sb3IsXG4gIHRoaWNrLFxufTogR3JhcGhJbnB1dHMpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubGluZVdpZHRoID0gdGhpY2s7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgLy8gdHJhbnNsYXRlIGFjdHVhbCB4LHkgdG8gcGxvdCB4cCx5cFxuICAgIGxldCB4cCA9IHgwICsgeFtpXSAqIHhzY2FsZTtcbiAgICBsZXQgeXAgPSB5MCAtIHlbaV0gKiB5c2NhbGU7XG5cbiAgICAvLyBkcmF3IGluZSB0byBuZXh0IHBvaW50XG4gICAgaWYgKGkgPT0gMCkgY3R4Lm1vdmVUbyh4cCwgeXApO1xuICAgIGVsc2UgY3R4LmxpbmVUbyh4cCwgeXApO1xuICB9XG5cbiAgY3R4LnN0cm9rZSgpO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3V2F2ZSIsIlRtYXgiLCJWbWF4IiwiVnAiLCJwaGFzZSIsImZvIiwiTiIsInRoaWNrIiwicmVmIiwieDAiLCJ5MCIsIngiLCJBcnJheSIsInkiLCJkdCIsInRzdGFydCIsInRzdG9wIiwieHNjYWxlIiwieXNjYWxlIiwiaSIsIk1hdGgiLCJzaW4iLCJHcmFwaEFycmF5IiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJ4cCIsInlwIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});