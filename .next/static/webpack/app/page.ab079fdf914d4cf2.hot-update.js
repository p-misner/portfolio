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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {\n                    color: color\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave(param) {\n    let { color } = param;\n    _s();\n    console.log(color);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas.getContext(\"2d\");\n        let width = ctx.canvas.width;\n        let height = ctx.canvas.height;\n        drawWave({\n            ctx,\n            width: width,\n            height: height,\n            Tmax: 0.001,\n            Vmax: 2,\n            Vp: 1,\n            phase: 0,\n            fo: 1000,\n            N: 100,\n            color: \"rgba(\".concat(color, \")\"),\n            thick: 3\n        });\n        drawWave({\n            ctx,\n            width: width,\n            height: height,\n            Tmax: 0.001,\n            Vmax: 12,\n            Vp: 1,\n            phase: 0,\n            fo: 1000,\n            N: 100,\n            color: \"rgba(\".concat(color, \")\"),\n            thick: 5\n        });\n    }, [\n        color\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 96,\n        columnNumber: 10\n    }, this);\n}\n_s(CanvasWave, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c1 = CanvasWave;\nfunction drawWave(param) {\n    let { ctx, width, height, Tmax, Vmax, Vp, phase, fo, N, color, thick } = param;\n    // define origin at plot center\n    let x0 = 0.5 + 0.5 * width; // x0, y0 place plot origin in middle of canvas\n    let y0 = 0.5 + 0.5 * height;\n    var x = new Array(), y = new Array(); // x,y plotting variables\n    var dt, tstart, tstop; // time variables\n    // define plot paramaters\n    tstart = -Tmax;\n    tstop = Tmax;\n    dt = (tstop - tstart) / (N - 1); // time increment over N points\n    let xscale = width / (2 * Tmax); // x pix per s\n    let yscale = height / (2 * Vmax); // y pix per V\n    // create function\n    for(let i = 0; i < N; i++){\n        x[i] = tstart + i * dt;\n        y[i] = Vp * Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180);\n    }\n    GraphArray({\n        ctx,\n        x0,\n        y0,\n        xscale,\n        yscale,\n        N,\n        x,\n        y,\n        color,\n        thick\n    });\n}\nfunction GraphArray(param) {\n    let { ctx, x0, y0, xscale, yscale, N, x, y, color, thick } = param;\n    ctx.beginPath();\n    ctx.lineWidth = thick;\n    ctx.strokeStyle = color;\n    for(let i = 0; i < N; i++){\n        // translate actual x,y to plot xp,yp\n        let xp = x0 + x[i] * xscale;\n        let yp = y0 - y[i] * yscale;\n        // draw ine to next point\n        if (i == 0) ctx.moveTo(xp, yp);\n        else ctx.lineTo(xp, yp);\n    }\n    ctx.stroke();\n}\n_c2 = GraphArray;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n$RefreshReg$(_c2, \"GraphArray\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYTtBQUt2QjtBQUlqQixTQUFTTSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNMLCtEQUFnQkE7a0JBQ2YsNEVBQUNHLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0QsMERBQVFBO29CQUFDRyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0osOERBQVlBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7b0JBQVdELE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQjtLQWR3QkQ7QUFpRHhCLFNBQVNFLFdBQVcsS0FBNEI7UUFBNUIsRUFBRUQsS0FBSyxFQUFxQixHQUE1Qjs7SUFDbEJFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixNQUFNSSxZQUFZViw2Q0FBTUEsQ0FBQztJQUN6QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxTQUFTRCxVQUFVRSxPQUFPO1FBQ2hDLE1BQU1DLE1BQU1GLE9BQU9HLFVBQVUsQ0FBQztRQUM5QixJQUFJQyxRQUFRRixJQUFJRixNQUFNLENBQUNJLEtBQUs7UUFDNUIsSUFBSUMsU0FBU0gsSUFBSUYsTUFBTSxDQUFDSyxNQUFNO1FBRTlCQyxTQUFTO1lBQ1BKO1lBQ0FFLE9BQU9BO1lBQ1BDLFFBQVFBO1lBQ1JFLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsSUFBSTtZQUNKQyxHQUFHO1lBQ0hqQixPQUFPLFFBQWMsT0FBTkEsT0FBTTtZQUNyQmtCLE9BQU87UUFDVDtRQUNBUCxTQUFTO1lBQ1BKO1lBQ0FFLE9BQU9BO1lBQ1BDLFFBQVFBO1lBQ1JFLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsSUFBSTtZQUNKQyxHQUFHO1lBQ0hqQixPQUFPLFFBQWMsT0FBTkEsT0FBTTtZQUNyQmtCLE9BQU87UUFDVDtJQUNGLEdBQUc7UUFBQ2xCO0tBQU07SUFDVixxQkFBTyw4REFBQ0s7UUFBT2MsS0FBS2Y7Ozs7OztBQUN0QjtHQXJDU0g7TUFBQUE7QUF1Q1QsU0FBU1UsU0FBUyxLQVlMO1FBWkssRUFDaEJKLEdBQUcsRUFDSEUsS0FBSyxFQUNMQyxNQUFNLEVBQ05FLElBQUksRUFDSkMsSUFBSSxFQUNKQyxFQUFFLEVBQ0ZDLEtBQUssRUFDTEMsRUFBRSxFQUNGQyxDQUFDLEVBQ0RqQixLQUFLLEVBQ0xrQixLQUFLLEVBQ00sR0FaSztJQWFoQiwrQkFBK0I7SUFDL0IsSUFBSUUsS0FBSyxNQUFNLE1BQU1YLE9BQU8sK0NBQStDO0lBQzNFLElBQUlZLEtBQUssTUFBTSxNQUFNWDtJQUVyQixJQUFJWSxJQUFJLElBQUlDLFNBQ1ZDLElBQUksSUFBSUQsU0FBUyx5QkFBeUI7SUFDNUMsSUFBSUUsSUFBSUMsUUFBUUMsT0FBTyxpQkFBaUI7SUFFeEMseUJBQXlCO0lBQ3pCRCxTQUFTLENBQUNkO0lBQ1ZlLFFBQVFmO0lBQ1JhLEtBQUssQ0FBQ0UsUUFBUUQsTUFBSyxJQUFNVCxDQUFBQSxJQUFJLElBQUksK0JBQStCO0lBQ2hFLElBQUlXLFNBQVNuQixRQUFTLEtBQUlHLElBQUcsR0FBSSxjQUFjO0lBQy9DLElBQUlpQixTQUFTbkIsU0FBVSxLQUFJRyxJQUFHLEdBQUksY0FBYztJQUVoRCxrQkFBa0I7SUFDbEIsSUFBSyxJQUFJaUIsSUFBSSxHQUFHQSxJQUFJYixHQUFHYSxJQUFLO1FBQzFCUixDQUFDLENBQUNRLEVBQUUsR0FBR0osU0FBU0ksSUFBSUw7UUFDcEJELENBQUMsQ0FBQ00sRUFBRSxHQUFHaEIsS0FBS2lCLEtBQUtDLEdBQUcsQ0FBQyxJQUFJLFNBQVNoQixLQUFLTSxDQUFDLENBQUNRLEVBQUUsR0FBRyxRQUFTLFNBQVU7SUFDbkU7SUFFQUcsV0FBVztRQUNUMUI7UUFDQWE7UUFDQUM7UUFDQU87UUFDQUM7UUFDQVo7UUFDQUs7UUFDQUU7UUFDQXhCO1FBQ0FrQjtJQUNGO0FBQ0Y7QUFDQSxTQUFTZSxXQUFXLEtBV047UUFYTSxFQUNsQjFCLEdBQUcsRUFDSGEsRUFBRSxFQUNGQyxFQUFFLEVBQ0ZPLE1BQU0sRUFDTkMsTUFBTSxFQUNOWixDQUFDLEVBQ0RLLENBQUMsRUFDREUsQ0FBQyxFQUNEeEIsS0FBSyxFQUNMa0IsS0FBSyxFQUNPLEdBWE07SUFZbEJYLElBQUkyQixTQUFTO0lBQ2IzQixJQUFJNEIsU0FBUyxHQUFHakI7SUFDaEJYLElBQUk2QixXQUFXLEdBQUdwQztJQUVsQixJQUFLLElBQUk4QixJQUFJLEdBQUdBLElBQUliLEdBQUdhLElBQUs7UUFDMUIscUNBQXFDO1FBQ3JDLElBQUlPLEtBQUtqQixLQUFLRSxDQUFDLENBQUNRLEVBQUUsR0FBR0Y7UUFDckIsSUFBSVUsS0FBS2pCLEtBQUtHLENBQUMsQ0FBQ00sRUFBRSxHQUFHRDtRQUVyQix5QkFBeUI7UUFDekIsSUFBSUMsS0FBSyxHQUFHdkIsSUFBSWdDLE1BQU0sQ0FBQ0YsSUFBSUM7YUFDdEIvQixJQUFJaUMsTUFBTSxDQUFDSCxJQUFJQztJQUN0QjtJQUVBL0IsSUFBSWtDLE1BQU07QUFDWjtNQTNCU1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGdWxsV2lkdGhXcmFwcGVyIH0gZnJvbSBcIi4uL3N0eWxlL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIEhlcm9TdWJ0aXRsZSxcbiAgSGVyb1RleHQsXG4gIFNpbmVXYXZlR3JpZFdyYXBwZXIsXG59IGZyb20gXCIuLi9zdHlsZS9zaW5lV2F2ZVN0eWxlXCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuLi9zdHlsZS9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ29sb3JNaXhlciB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5lV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxXaWR0aFdyYXBwZXI+XG4gICAgICA8U2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICAgICAgPEhlcm9UZXh0IGNvbG9yPXtjb2xvcn0+IGRlc2lnbmluZyB3aXRoIGRhdGEgPC9IZXJvVGV4dD5cbiAgICAgICAgPEhlcm9TdWJ0aXRsZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgIGEgZGF0YSB2aXN1YWxpemF0aW9uIGRlc2lnbmVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIGVuZ2luZWVyaW5nLCBJIGxvdmVcbiAgICAgICAgICB3b3JraW5nIHdpdGggY29tcGxleCBkYXRhIGFuZCB0dXJuaW5nIGl0IGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bCBpbnRvXG4gICAgICAgICAgZGF0YSBkcml2ZW4gZGVzaWduZXJcbiAgICAgICAgPC9IZXJvU3VidGl0bGU+XG4gICAgICAgIDxDYW52YXNXYXZlIGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgIDwvU2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICA8L0Z1bGxXaWR0aFdyYXBwZXI+XG4gICk7XG59XG5cbnR5cGUgV2F2ZUlucHV0cyA9IHtcbiAgY3R4OiBhbnk7XG4gIFRtYXg6IG51bWJlcjtcbiAgVm1heDogbnVtYmVyO1xuICBWcDogbnVtYmVyO1xuICBwaGFzZTogbnVtYmVyO1xuICBmbzogbnVtYmVyO1xuICBOOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB0aGljazogYW55O1xufTtcbnR5cGUgR3JhcGhJbnB1dHMgPSB7XG4gIGN0eDoge1xuICAgIGJlZ2luUGF0aDogKCkgPT4gdm9pZDtcbiAgICBsaW5lV2lkdGg6IGFueTtcbiAgICBzdHJva2VTdHlsZTogYW55O1xuICAgIG1vdmVUbzogKGFyZzA6IGFueSwgYXJnMTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGxpbmVUbzogKGFyZzA6IGFueSwgYXJnMTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHN0cm9rZTogKCkgPT4gdm9pZDtcbiAgfTtcbiAgeDA6IGFueTtcbiAgeTA6IGFueTtcbiAgeHNjYWxlOiBhbnk7XG4gIHlzY2FsZTogYW55O1xuICBOOiBudW1iZXI7XG4gIHg6IG51bWJlcltdO1xuICB5OiBudW1iZXJbXTtcbiAgY29sb3I6IHN0cmluZztcbiAgdGhpY2s6IGFueTtcbn07XG5cbmZ1bmN0aW9uIENhbnZhc1dhdmUoeyBjb2xvciB9OiB7IGNvbG9yOiBzdHJpbmcgfSkge1xuICBjb25zb2xlLmxvZyhjb2xvcik7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCB3aWR0aCA9IGN0eC5jYW52YXMud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gICAgZHJhd1dhdmUoe1xuICAgICAgY3R4LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBUbWF4OiAwLjAwMSxcbiAgICAgIFZtYXg6IDIsXG4gICAgICBWcDogMSxcbiAgICAgIHBoYXNlOiAwLFxuICAgICAgZm86IDEwMDAsXG4gICAgICBOOiAxMDAsXG4gICAgICBjb2xvcjogYHJnYmEoJHtjb2xvcn0pYCxcbiAgICAgIHRoaWNrOiAzLFxuICAgIH0pO1xuICAgIGRyYXdXYXZlKHtcbiAgICAgIGN0eCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgVG1heDogMC4wMDEsXG4gICAgICBWbWF4OiAxMixcbiAgICAgIFZwOiAxLFxuICAgICAgcGhhc2U6IDAsXG4gICAgICBmbzogMTAwMCxcbiAgICAgIE46IDEwMCxcbiAgICAgIGNvbG9yOiBgcmdiYSgke2NvbG9yfSlgLFxuICAgICAgdGhpY2s6IDUsXG4gICAgfSk7XG4gIH0sIFtjb2xvcl0pO1xuICByZXR1cm4gPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+O1xufVxuXG5mdW5jdGlvbiBkcmF3V2F2ZSh7XG4gIGN0eCxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgVG1heCxcbiAgVm1heCxcbiAgVnAsXG4gIHBoYXNlLFxuICBmbyxcbiAgTixcbiAgY29sb3IsXG4gIHRoaWNrLFxufTogV2F2ZUlucHV0cykge1xuICAvLyBkZWZpbmUgb3JpZ2luIGF0IHBsb3QgY2VudGVyXG4gIGxldCB4MCA9IDAuNSArIDAuNSAqIHdpZHRoOyAvLyB4MCwgeTAgcGxhY2UgcGxvdCBvcmlnaW4gaW4gbWlkZGxlIG9mIGNhbnZhc1xuICBsZXQgeTAgPSAwLjUgKyAwLjUgKiBoZWlnaHQ7XG5cbiAgdmFyIHggPSBuZXcgQXJyYXkoKSxcbiAgICB5ID0gbmV3IEFycmF5KCk7IC8vIHgseSBwbG90dGluZyB2YXJpYWJsZXNcbiAgdmFyIGR0LCB0c3RhcnQsIHRzdG9wOyAvLyB0aW1lIHZhcmlhYmxlc1xuXG4gIC8vIGRlZmluZSBwbG90IHBhcmFtYXRlcnNcbiAgdHN0YXJ0ID0gLVRtYXg7XG4gIHRzdG9wID0gVG1heDtcbiAgZHQgPSAodHN0b3AgLSB0c3RhcnQpIC8gKE4gLSAxKTsgLy8gdGltZSBpbmNyZW1lbnQgb3ZlciBOIHBvaW50c1xuICBsZXQgeHNjYWxlID0gd2lkdGggLyAoMiAqIFRtYXgpOyAvLyB4IHBpeCBwZXIgc1xuICBsZXQgeXNjYWxlID0gaGVpZ2h0IC8gKDIgKiBWbWF4KTsgLy8geSBwaXggcGVyIFZcblxuICAvLyBjcmVhdGUgZnVuY3Rpb25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICB4W2ldID0gdHN0YXJ0ICsgaSAqIGR0O1xuICAgIHlbaV0gPSBWcCAqIE1hdGguc2luKDIgKiAzLjE0MTUgKiBmbyAqIHhbaV0gKyAocGhhc2UgKiAzLjE0MTUpIC8gMTgwKTtcbiAgfVxuXG4gIEdyYXBoQXJyYXkoe1xuICAgIGN0eCxcbiAgICB4MCxcbiAgICB5MCxcbiAgICB4c2NhbGUsXG4gICAgeXNjYWxlLFxuICAgIE4sXG4gICAgeCxcbiAgICB5LFxuICAgIGNvbG9yLFxuICAgIHRoaWNrLFxuICB9KTtcbn1cbmZ1bmN0aW9uIEdyYXBoQXJyYXkoe1xuICBjdHgsXG4gIHgwLFxuICB5MCxcbiAgeHNjYWxlLFxuICB5c2NhbGUsXG4gIE4sXG4gIHgsXG4gIHksXG4gIGNvbG9yLFxuICB0aGljayxcbn06IEdyYXBoSW5wdXRzKSB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmxpbmVXaWR0aCA9IHRoaWNrO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgIC8vIHRyYW5zbGF0ZSBhY3R1YWwgeCx5IHRvIHBsb3QgeHAseXBcbiAgICBsZXQgeHAgPSB4MCArIHhbaV0gKiB4c2NhbGU7XG4gICAgbGV0IHlwID0geTAgLSB5W2ldICogeXNjYWxlO1xuXG4gICAgLy8gZHJhdyBpbmUgdG8gbmV4dCBwb2ludFxuICAgIGlmIChpID09IDApIGN0eC5tb3ZlVG8oeHAsIHlwKTtcbiAgICBlbHNlIGN0eC5saW5lVG8oeHAsIHlwKTtcbiAgfVxuXG4gIGN0eC5zdHJva2UoKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJGdWxsV2lkdGhXcmFwcGVyIiwiSGVyb1N1YnRpdGxlIiwiSGVyb1RleHQiLCJTaW5lV2F2ZUdyaWRXcmFwcGVyIiwiU2luZVdhdmUiLCJjb2xvciIsIkNhbnZhc1dhdmUiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzUmVmIiwiY2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdXYXZlIiwiVG1heCIsIlZtYXgiLCJWcCIsInBoYXNlIiwiZm8iLCJOIiwidGhpY2siLCJyZWYiLCJ4MCIsInkwIiwieCIsIkFycmF5IiwieSIsImR0IiwidHN0YXJ0IiwidHN0b3AiLCJ4c2NhbGUiLCJ5c2NhbGUiLCJpIiwiTWF0aCIsInNpbiIsIkdyYXBoQXJyYXkiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInhwIiwieXAiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});