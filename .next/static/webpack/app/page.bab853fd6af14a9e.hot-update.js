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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {}, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave() {\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas.getContext(\"2d\");\n        // setting variables\n        let width = ctx.canvas.width;\n        let height = ctx.canvas.height;\n        let x0 = 0.5 * width;\n        let y0 = 0.5 * height;\n        let Tmax = 0.001;\n        let Vmax = 2;\n        let phase = 0;\n        let N = 100;\n        let xscale = width / (2 * Tmax); // x pix per s\n        let yscale = height / (2 * Vmax); // y pix per V\n        //timesteps\n        let tstart = -Tmax;\n        let tstop = Tmax;\n        let dt = (tstop - tstart) / (N - 1);\n        let x = [];\n        let y = [];\n        for(let i = 0; i < N; i++){\n            x[i] = tstart + i * dt;\n            y[i] = 1 * Math.sin(2 * 3.1415 * x[i] + phase * 3.1415 / 180);\n        }\n        for(let i = 0; i < N; i++){\n            // translate actual x,y to plot xp,yp\n            let xp = x0 + x[i] * xscale;\n            let yp = y0 - y[i] * yscale;\n            // draw line to next point\n            if (i == 0) ctx.moveTo(xp, yp);\n            else ctx.lineTo(xp, yp);\n        }\n        ctx.fillStyle = \"#000\";\n        ctx.beginPath();\n        ctx.moveTo(0, y0);\n        ctx.lineTo(width, y0); // X axis\n        ctx.moveTo(x0, 0);\n        ctx.lineTo(x0, height); // Y axis\n        ctx.strokeStyle = \"#000\";\n        ctx.lineWidth = 1;\n        ctx.stroke();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 77,\n        columnNumber: 10\n    }, this);\n}\n_s(CanvasWave, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYTtBQUt2QjtBQUlqQixTQUFTTSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNMLCtEQUFnQkE7a0JBQ2YsNEVBQUNHLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0QsMERBQVFBO29CQUFDRyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0osOERBQVlBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtLQWR3QkY7QUFnQnhCLFNBQVNFOztJQUNQLE1BQU1DLFlBQVlSLDZDQUFNQSxDQUFDO0lBQ3pCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFNBQVNELFVBQVVFLE9BQU87UUFDaEMsTUFBTUMsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1FBQzlCLG9CQUFvQjtRQUNwQixJQUFJQyxRQUFRRixJQUFJRixNQUFNLENBQUNJLEtBQUs7UUFDNUIsSUFBSUMsU0FBU0gsSUFBSUYsTUFBTSxDQUFDSyxNQUFNO1FBQzlCLElBQUlDLEtBQUssTUFBTUY7UUFDZixJQUFJRyxLQUFLLE1BQU1GO1FBQ2YsSUFBSUcsT0FBTztRQUNYLElBQUlDLE9BQU87UUFDWCxJQUFJQyxRQUFRO1FBQ1osSUFBSUMsSUFBSTtRQUVSLElBQUlDLFNBQVNSLFFBQVMsS0FBSUksSUFBRyxHQUFJLGNBQWM7UUFDL0MsSUFBSUssU0FBU1IsU0FBVSxLQUFJSSxJQUFHLEdBQUksY0FBYztRQUNoRCxXQUFXO1FBQ1gsSUFBSUssU0FBUyxDQUFDTjtRQUNkLElBQUlPLFFBQVFQO1FBQ1osSUFBSVEsS0FBSyxDQUFDRCxRQUFRRCxNQUFLLElBQU1ILENBQUFBLElBQUk7UUFFakMsSUFBSU0sSUFBSSxFQUFFO1FBQ1YsSUFBSUMsSUFBSSxFQUFFO1FBRVYsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlSLEdBQUdRLElBQUs7WUFDMUJGLENBQUMsQ0FBQ0UsRUFBRSxHQUFHTCxTQUFTSyxJQUFJSDtZQUNwQkUsQ0FBQyxDQUFDQyxFQUFFLEdBQUcsSUFBSUMsS0FBS0MsR0FBRyxDQUFDLElBQUksU0FBU0osQ0FBQyxDQUFDRSxFQUFFLEdBQUcsUUFBUyxTQUFVO1FBQzdEO1FBRUEsSUFBSyxJQUFJQSxJQUFJLEdBQUdBLElBQUlSLEdBQUdRLElBQUs7WUFDMUIscUNBQXFDO1lBQ3JDLElBQUlHLEtBQUtoQixLQUFLVyxDQUFDLENBQUNFLEVBQUUsR0FBR1A7WUFDckIsSUFBSVcsS0FBS2hCLEtBQUtXLENBQUMsQ0FBQ0MsRUFBRSxHQUFHTjtZQUVyQiwwQkFBMEI7WUFDMUIsSUFBSU0sS0FBSyxHQUFHakIsSUFBSXNCLE1BQU0sQ0FBQ0YsSUFBSUM7aUJBQ3RCckIsSUFBSXVCLE1BQU0sQ0FBQ0gsSUFBSUM7UUFDdEI7UUFDQXJCLElBQUl3QixTQUFTLEdBQUc7UUFFaEJ4QixJQUFJeUIsU0FBUztRQUNiekIsSUFBSXNCLE1BQU0sQ0FBQyxHQUFHakI7UUFDZEwsSUFBSXVCLE1BQU0sQ0FBQ3JCLE9BQU9HLEtBQUssU0FBUztRQUNoQ0wsSUFBSXNCLE1BQU0sQ0FBQ2xCLElBQUk7UUFDZkosSUFBSXVCLE1BQU0sQ0FBQ25CLElBQUlELFNBQVMsU0FBUztRQUNqQ0gsSUFBSTBCLFdBQVcsR0FBRztRQUNsQjFCLElBQUkyQixTQUFTLEdBQUc7UUFDaEIzQixJQUFJNEIsTUFBTTtJQUNaLEdBQUcsRUFBRTtJQUNMLHFCQUFPLDhEQUFDOUI7UUFBTytCLEtBQUtoQzs7Ozs7O0FBQ3RCO0dBbkRTRDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2luZVdhdmUudHN4P2M2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFdyYXBwZXIgfSBmcm9tIFwiLi4vc3R5bGUvZ3JpZExheW91dFwiO1xuaW1wb3J0IHtcbiAgSGVyb1N1YnRpdGxlLFxuICBIZXJvVGV4dCxcbiAgU2luZVdhdmVHcmlkV3JhcHBlcixcbn0gZnJvbSBcIi4uL3N0eWxlL3NpbmVXYXZlU3R5bGVcIjtcbmltcG9ydCB7IENvcmVDb2xvcklucHV0IH0gZnJvbSBcIi4uL3N0eWxlL3N0eWxlQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDb2xvck1peGVyIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmVXYXZlKHsgY29sb3IgfTogQ29yZUNvbG9ySW5wdXQpIHtcbiAgcmV0dXJuIChcbiAgICA8RnVsbFdpZHRoV3JhcHBlcj5cbiAgICAgIDxTaW5lV2F2ZUdyaWRXcmFwcGVyPlxuICAgICAgICA8SGVyb1RleHQgY29sb3I9e2NvbG9yfT4gZGVzaWduaW5nIHdpdGggZGF0YSA8L0hlcm9UZXh0PlxuICAgICAgICA8SGVyb1N1YnRpdGxlIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgYSBkYXRhIHZpc3VhbGl6YXRpb24gZGVzaWduZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gZW5naW5lZXJpbmcsIEkgbG92ZVxuICAgICAgICAgIHdvcmtpbmcgd2l0aCBjb21wbGV4IGRhdGEgYW5kIHR1cm5pbmcgaXQgaW50byBzb21ldGhpbmcgYmVhdXRpZnVsIGludG9cbiAgICAgICAgICBkYXRhIGRyaXZlbiBkZXNpZ25lclxuICAgICAgICA8L0hlcm9TdWJ0aXRsZT5cbiAgICAgICAgPENhbnZhc1dhdmUgLz5cbiAgICAgIDwvU2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICA8L0Z1bGxXaWR0aFdyYXBwZXI+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhbnZhc1dhdmUoKSB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vIHNldHRpbmcgdmFyaWFibGVzXG4gICAgbGV0IHdpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG4gICAgbGV0IHgwID0gMC41ICogd2lkdGg7XG4gICAgbGV0IHkwID0gMC41ICogaGVpZ2h0O1xuICAgIGxldCBUbWF4ID0gMC4wMDE7XG4gICAgbGV0IFZtYXggPSAyO1xuICAgIGxldCBwaGFzZSA9IDA7XG4gICAgbGV0IE4gPSAxMDA7XG5cbiAgICBsZXQgeHNjYWxlID0gd2lkdGggLyAoMiAqIFRtYXgpOyAvLyB4IHBpeCBwZXIgc1xuICAgIGxldCB5c2NhbGUgPSBoZWlnaHQgLyAoMiAqIFZtYXgpOyAvLyB5IHBpeCBwZXIgVlxuICAgIC8vdGltZXN0ZXBzXG4gICAgbGV0IHRzdGFydCA9IC1UbWF4O1xuICAgIGxldCB0c3RvcCA9IFRtYXg7XG4gICAgbGV0IGR0ID0gKHRzdG9wIC0gdHN0YXJ0KSAvIChOIC0gMSk7XG5cbiAgICBsZXQgeCA9IFtdO1xuICAgIGxldCB5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgeFtpXSA9IHRzdGFydCArIGkgKiBkdDtcbiAgICAgIHlbaV0gPSAxICogTWF0aC5zaW4oMiAqIDMuMTQxNSAqIHhbaV0gKyAocGhhc2UgKiAzLjE0MTUpIC8gMTgwKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgLy8gdHJhbnNsYXRlIGFjdHVhbCB4LHkgdG8gcGxvdCB4cCx5cFxuICAgICAgbGV0IHhwID0geDAgKyB4W2ldICogeHNjYWxlO1xuICAgICAgbGV0IHlwID0geTAgLSB5W2ldICogeXNjYWxlO1xuXG4gICAgICAvLyBkcmF3IGxpbmUgdG8gbmV4dCBwb2ludFxuICAgICAgaWYgKGkgPT0gMCkgY3R4Lm1vdmVUbyh4cCwgeXApO1xuICAgICAgZWxzZSBjdHgubGluZVRvKHhwLCB5cCk7XG4gICAgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDBcIjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIHkwKTtcbiAgICBjdHgubGluZVRvKHdpZHRoLCB5MCk7IC8vIFggYXhpc1xuICAgIGN0eC5tb3ZlVG8oeDAsIDApO1xuICAgIGN0eC5saW5lVG8oeDAsIGhlaWdodCk7IC8vIFkgYXhpc1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4MCIsInkwIiwiVG1heCIsIlZtYXgiLCJwaGFzZSIsIk4iLCJ4c2NhbGUiLCJ5c2NhbGUiLCJ0c3RhcnQiLCJ0c3RvcCIsImR0IiwieCIsInkiLCJpIiwiTWF0aCIsInNpbiIsInhwIiwieXAiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});