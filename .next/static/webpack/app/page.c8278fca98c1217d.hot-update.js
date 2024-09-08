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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {}, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave() {\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas.getContext(\"2d\");\n        let width = ctx.canvas.width;\n        let height = ctx.canvas.height;\n        function drawWave() {\n            let Tmax = 0.001;\n            let Vmax = 2;\n            let Vp = 1;\n            let phase = 0;\n            let fo = 1000;\n            let N = 100;\n            // fill canvas\n            ctx.fillStyle = \"#dddddd\";\n            ctx.fillRect(0, 0, 501, 201);\n            // define origin at plot center\n            let x0 = 0.5 + 0.5 * width; // x0, y0 place plot origin in middle of canvas\n            let y0 = 0.5 + 0.5 * height;\n            var x = new Array(), y = new Array(); // x,y plotting variables\n            var dt, tstart, tstop; // time variables\n            // define plot paramaters\n            tstart = -Tmax;\n            tstop = Tmax;\n            dt = (tstop - tstart) / (N - 1); // time increment over N points\n            let xscale = width / (2 * Tmax); // x pix per s\n            let yscale = height / (2 * Vmax); // y pix per V\n            // create function\n            for(let i = 0; i < N; i++){\n                x[i] = tstart + i * dt;\n                y[i] = Vp * Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180);\n            }\n            GraphArray(ctx, x0, y0, xscale, yscale, N, x, y, \"rgb(0,0,255)\", 2);\n        }\n        function GraphArray(ctx, x0, y0, xscale, yscale, N, x, y, color, thick) {\n            var i, x0, y0, xscale, yscale, xp, yp;\n            // x0 = axes.x0;\n            // y0 = axes.y0;\n            // xscale = axes.xscale;\n            // yscale = axes.yscale;\n            ctx.beginPath();\n            ctx.lineWidth = thick;\n            ctx.strokeStyle = color;\n            for(i = 0; i < N; i++){\n                // translate actual x,y to plot xp,yp\n                xp = x0 + x[i] * xscale;\n                yp = y0 - y[i] * yscale;\n                // draw ine to next point\n                if (i == 0) ctx.moveTo(xp, yp);\n                else ctx.lineTo(xp, yp);\n            }\n            ctx.stroke();\n        }\n        drawWave();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 114,\n        columnNumber: 10\n    }, this);\n}\n_s(CanvasWave, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYTtBQUt2QjtBQUlqQixTQUFTTSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNMLCtEQUFnQkE7a0JBQ2YsNEVBQUNHLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0QsMERBQVFBO29CQUFDRyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0osOERBQVlBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtLQWR3QkY7QUFnQnhCLFNBQVNFOztJQUNQLE1BQU1DLFlBQVlSLDZDQUFNQSxDQUFDO0lBQ3pCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFNBQVNELFVBQVVFLE9BQU87UUFDaEMsTUFBTUMsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1FBQzlCLElBQUlDLFFBQVFGLElBQUlGLE1BQU0sQ0FBQ0ksS0FBSztRQUM1QixJQUFJQyxTQUFTSCxJQUFJRixNQUFNLENBQUNLLE1BQU07UUFFOUIsU0FBU0M7WUFDUCxJQUFJQyxPQUFPO1lBQ1gsSUFBSUMsT0FBTztZQUNYLElBQUlDLEtBQUs7WUFDVCxJQUFJQyxRQUFRO1lBQ1osSUFBSUMsS0FBSztZQUNULElBQUlDLElBQUk7WUFDUixjQUFjO1lBQ2RWLElBQUlXLFNBQVMsR0FBRztZQUNoQlgsSUFBSVksUUFBUSxDQUFDLEdBQUcsR0FBRyxLQUFLO1lBRXhCLCtCQUErQjtZQUMvQixJQUFJQyxLQUFLLE1BQU0sTUFBTVgsT0FBTywrQ0FBK0M7WUFDM0UsSUFBSVksS0FBSyxNQUFNLE1BQU1YO1lBRXJCLElBQUlZLElBQUksSUFBSUMsU0FDVkMsSUFBSSxJQUFJRCxTQUFTLHlCQUF5QjtZQUM1QyxJQUFJRSxJQUFJQyxRQUFRQyxPQUFPLGlCQUFpQjtZQUV4Qyx5QkFBeUI7WUFDekJELFNBQVMsQ0FBQ2Q7WUFDVmUsUUFBUWY7WUFDUmEsS0FBSyxDQUFDRSxRQUFRRCxNQUFLLElBQU1ULENBQUFBLElBQUksSUFBSSwrQkFBK0I7WUFDaEUsSUFBSVcsU0FBU25CLFFBQVMsS0FBSUcsSUFBRyxHQUFJLGNBQWM7WUFDL0MsSUFBSWlCLFNBQVNuQixTQUFVLEtBQUlHLElBQUcsR0FBSSxjQUFjO1lBRWhELGtCQUFrQjtZQUNsQixJQUFLLElBQUlpQixJQUFJLEdBQUdBLElBQUliLEdBQUdhLElBQUs7Z0JBQzFCUixDQUFDLENBQUNRLEVBQUUsR0FBR0osU0FBU0ksSUFBSUw7Z0JBQ3BCRCxDQUFDLENBQUNNLEVBQUUsR0FBR2hCLEtBQUtpQixLQUFLQyxHQUFHLENBQUMsSUFBSSxTQUFTaEIsS0FBS00sQ0FBQyxDQUFDUSxFQUFFLEdBQUcsUUFBUyxTQUFVO1lBQ25FO1lBRUFHLFdBQVcxQixLQUFLYSxJQUFJQyxJQUFJTyxRQUFRQyxRQUFRWixHQUFHSyxHQUFHRSxHQUFHLGdCQUFnQjtRQUNuRTtRQUNBLFNBQVNTLFdBQ1AxQixHQU9DLEVBQ0RhLEVBQU8sRUFDUEMsRUFBTyxFQUNQTyxNQUFXLEVBQ1hDLE1BQVcsRUFDWFosQ0FBUyxFQUNUSyxDQUFXLEVBQ1hFLENBQVcsRUFDWHRCLEtBQVUsRUFDVmdDLEtBQVU7WUFFVixJQUFJSixHQUFHVixJQUFJQyxJQUFJTyxRQUFRQyxRQUFRTSxJQUFJQztZQUVuQyxnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFFeEI3QixJQUFJOEIsU0FBUztZQUNiOUIsSUFBSStCLFNBQVMsR0FBR0o7WUFDaEIzQixJQUFJZ0MsV0FBVyxHQUFHckM7WUFFbEIsSUFBSzRCLElBQUksR0FBR0EsSUFBSWIsR0FBR2EsSUFBSztnQkFDdEIscUNBQXFDO2dCQUNyQ0ssS0FBS2YsS0FBS0UsQ0FBQyxDQUFDUSxFQUFFLEdBQUdGO2dCQUNqQlEsS0FBS2YsS0FBS0csQ0FBQyxDQUFDTSxFQUFFLEdBQUdEO2dCQUVqQix5QkFBeUI7Z0JBQ3pCLElBQUlDLEtBQUssR0FBR3ZCLElBQUlpQyxNQUFNLENBQUNMLElBQUlDO3FCQUN0QjdCLElBQUlrQyxNQUFNLENBQUNOLElBQUlDO1lBQ3RCO1lBRUE3QixJQUFJbUMsTUFBTTtRQUNaO1FBRUEvQjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUFPLDhEQUFDTjtRQUFPc0MsS0FBS3ZDOzs7Ozs7QUFDdEI7R0F4RlNEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3g/YzYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRnVsbFdpZHRoV3JhcHBlciB9IGZyb20gXCIuLi9zdHlsZS9ncmlkTGF5b3V0XCI7XG5pbXBvcnQge1xuICBIZXJvU3VidGl0bGUsXG4gIEhlcm9UZXh0LFxuICBTaW5lV2F2ZUdyaWRXcmFwcGVyLFxufSBmcm9tIFwiLi4vc3R5bGUvc2luZVdhdmVTdHlsZVwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQgfSBmcm9tIFwiLi4vc3R5bGUvc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IENvbG9yTWl4ZXIgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZVdhdmUoeyBjb2xvciB9OiBDb3JlQ29sb3JJbnB1dCkge1xuICByZXR1cm4gKFxuICAgIDxGdWxsV2lkdGhXcmFwcGVyPlxuICAgICAgPFNpbmVXYXZlR3JpZFdyYXBwZXI+XG4gICAgICAgIDxIZXJvVGV4dCBjb2xvcj17Y29sb3J9PiBkZXNpZ25pbmcgd2l0aCBkYXRhIDwvSGVyb1RleHQ+XG4gICAgICAgIDxIZXJvU3VidGl0bGUgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICBhIGRhdGEgdmlzdWFsaXphdGlvbiBkZXNpZ25lciB3aXRoIGEgYmFja2dyb3VuZCBpbiBlbmdpbmVlcmluZywgSSBsb3ZlXG4gICAgICAgICAgd29ya2luZyB3aXRoIGNvbXBsZXggZGF0YSBhbmQgdHVybmluZyBpdCBpbnRvIHNvbWV0aGluZyBiZWF1dGlmdWwgaW50b1xuICAgICAgICAgIGRhdGEgZHJpdmVuIGRlc2lnbmVyXG4gICAgICAgIDwvSGVyb1N1YnRpdGxlPlxuICAgICAgICA8Q2FudmFzV2F2ZSAvPlxuICAgICAgPC9TaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgIDwvRnVsbFdpZHRoV3JhcHBlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FudmFzV2F2ZSgpIHtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IHdpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG5cbiAgICBmdW5jdGlvbiBkcmF3V2F2ZSgpIHtcbiAgICAgIGxldCBUbWF4ID0gMC4wMDE7XG4gICAgICBsZXQgVm1heCA9IDI7XG4gICAgICBsZXQgVnAgPSAxO1xuICAgICAgbGV0IHBoYXNlID0gMDtcbiAgICAgIGxldCBmbyA9IDEwMDA7XG4gICAgICBsZXQgTiA9IDEwMDtcbiAgICAgIC8vIGZpbGwgY2FudmFzXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjZGRkZGRkXCI7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgNTAxLCAyMDEpO1xuXG4gICAgICAvLyBkZWZpbmUgb3JpZ2luIGF0IHBsb3QgY2VudGVyXG4gICAgICBsZXQgeDAgPSAwLjUgKyAwLjUgKiB3aWR0aDsgLy8geDAsIHkwIHBsYWNlIHBsb3Qgb3JpZ2luIGluIG1pZGRsZSBvZiBjYW52YXNcbiAgICAgIGxldCB5MCA9IDAuNSArIDAuNSAqIGhlaWdodDtcblxuICAgICAgdmFyIHggPSBuZXcgQXJyYXkoKSxcbiAgICAgICAgeSA9IG5ldyBBcnJheSgpOyAvLyB4LHkgcGxvdHRpbmcgdmFyaWFibGVzXG4gICAgICB2YXIgZHQsIHRzdGFydCwgdHN0b3A7IC8vIHRpbWUgdmFyaWFibGVzXG5cbiAgICAgIC8vIGRlZmluZSBwbG90IHBhcmFtYXRlcnNcbiAgICAgIHRzdGFydCA9IC1UbWF4O1xuICAgICAgdHN0b3AgPSBUbWF4O1xuICAgICAgZHQgPSAodHN0b3AgLSB0c3RhcnQpIC8gKE4gLSAxKTsgLy8gdGltZSBpbmNyZW1lbnQgb3ZlciBOIHBvaW50c1xuICAgICAgbGV0IHhzY2FsZSA9IHdpZHRoIC8gKDIgKiBUbWF4KTsgLy8geCBwaXggcGVyIHNcbiAgICAgIGxldCB5c2NhbGUgPSBoZWlnaHQgLyAoMiAqIFZtYXgpOyAvLyB5IHBpeCBwZXIgVlxuXG4gICAgICAvLyBjcmVhdGUgZnVuY3Rpb25cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICAgIHhbaV0gPSB0c3RhcnQgKyBpICogZHQ7XG4gICAgICAgIHlbaV0gPSBWcCAqIE1hdGguc2luKDIgKiAzLjE0MTUgKiBmbyAqIHhbaV0gKyAocGhhc2UgKiAzLjE0MTUpIC8gMTgwKTtcbiAgICAgIH1cblxuICAgICAgR3JhcGhBcnJheShjdHgsIHgwLCB5MCwgeHNjYWxlLCB5c2NhbGUsIE4sIHgsIHksIFwicmdiKDAsMCwyNTUpXCIsIDIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBHcmFwaEFycmF5KFxuICAgICAgY3R4OiB7XG4gICAgICAgIGJlZ2luUGF0aDogKCkgPT4gdm9pZDtcbiAgICAgICAgbGluZVdpZHRoOiBhbnk7XG4gICAgICAgIHN0cm9rZVN0eWxlOiBhbnk7XG4gICAgICAgIG1vdmVUbzogKGFyZzA6IGFueSwgYXJnMTogbnVtYmVyKSA9PiB2b2lkO1xuICAgICAgICBsaW5lVG86IChhcmcwOiBhbnksIGFyZzE6IG51bWJlcikgPT4gdm9pZDtcbiAgICAgICAgc3Ryb2tlOiAoKSA9PiB2b2lkO1xuICAgICAgfSxcbiAgICAgIHgwOiBhbnksXG4gICAgICB5MDogYW55LFxuICAgICAgeHNjYWxlOiBhbnksXG4gICAgICB5c2NhbGU6IGFueSxcbiAgICAgIE46IG51bWJlcixcbiAgICAgIHg6IG51bWJlcltdLFxuICAgICAgeTogbnVtYmVyW10sXG4gICAgICBjb2xvcjogYW55LFxuICAgICAgdGhpY2s6IGFueVxuICAgICkge1xuICAgICAgdmFyIGksIHgwLCB5MCwgeHNjYWxlLCB5c2NhbGUsIHhwLCB5cDtcblxuICAgICAgLy8geDAgPSBheGVzLngwO1xuICAgICAgLy8geTAgPSBheGVzLnkwO1xuICAgICAgLy8geHNjYWxlID0gYXhlcy54c2NhbGU7XG4gICAgICAvLyB5c2NhbGUgPSBheGVzLnlzY2FsZTtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaWNrO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgICAgLy8gdHJhbnNsYXRlIGFjdHVhbCB4LHkgdG8gcGxvdCB4cCx5cFxuICAgICAgICB4cCA9IHgwICsgeFtpXSAqIHhzY2FsZTtcbiAgICAgICAgeXAgPSB5MCAtIHlbaV0gKiB5c2NhbGU7XG5cbiAgICAgICAgLy8gZHJhdyBpbmUgdG8gbmV4dCBwb2ludFxuICAgICAgICBpZiAoaSA9PSAwKSBjdHgubW92ZVRvKHhwLCB5cCk7XG4gICAgICAgIGVsc2UgY3R4LmxpbmVUbyh4cCwgeXApO1xuICAgICAgfVxuXG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgZHJhd1dhdmUoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3V2F2ZSIsIlRtYXgiLCJWbWF4IiwiVnAiLCJwaGFzZSIsImZvIiwiTiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieDAiLCJ5MCIsIngiLCJBcnJheSIsInkiLCJkdCIsInRzdGFydCIsInRzdG9wIiwieHNjYWxlIiwieXNjYWxlIiwiaSIsIk1hdGgiLCJzaW4iLCJHcmFwaEFycmF5IiwidGhpY2siLCJ4cCIsInlwIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});