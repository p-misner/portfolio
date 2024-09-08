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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SineWave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_gridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sineWaveStyle */ \"(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SineWave(param) {\n    let { color } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_gridLayout__WEBPACK_IMPORTED_MODULE_2__.FullWidthWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.SineWaveGridWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroText, {\n                    color: color,\n                    children: \" designing with data \"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_sineWaveStyle__WEBPACK_IMPORTED_MODULE_3__.HeroSubtitle, {\n                    color: color,\n                    children: \"a data visualization designer with a background in engineering, I love working with complex data and turning it into something beautiful into data driven designer\"\n                }, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasWave, {}, void 0, false, {\n                    fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = SineWave;\nfunction CanvasWave() {\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas.getContext(\"2d\");\n        // setting variables\n        let width = ctx.canvas.width;\n        let height = ctx.canvas.height;\n        // let x0 = 0.5 * width;\n        // let y0 = 0.5 * height;\n        let Tmax = 0.001;\n        let Vmax = 2;\n        let Vp = 1;\n        let phase = 0;\n        let N = 100;\n        let fo = 1000;\n        /////\n        function draw() {\n            // get values directly from form\n            // var Vp=document.myForm.Vp.value\n            // var fo=document.myForm.fo.value\n            // var phase=document.myForm.phase.value\n            // var Vmax=document.myForm.Vmax.value\n            // var Tmax=document.myForm.Tmax.value\n            // var N=document.myForm.N.value\n            // Vp=Number(Vp);\n            // fo=Number(fo);\n            // phase=Number(phase);\n            // Vmax=Number(Vmax);\n            // Tmax=Number(Tmax);\n            // N=Number(N);\n            // define canvas\n            // var canvas = document.getElementById(\"canvas\");\n            // if (null==canvas || !canvas.getContext) return;\n            // ctx=canvas.getContext(\"2d\");\n            // fill canvas\n            ctx.fillStyle = \"#dddddd\";\n            ctx.fillRect(0, 0, 501, 201);\n            // define origin at plot center\n            let x0 = 0.5 + 0.5 * width; // x0, y0 place plot origin in middle of canvas\n            let y0 = 0.5 + 0.5 * height;\n            var x = new Array(), y = new Array(); // x,y plotting variables\n            var dt, tstart, tstop; // time variables\n            // define plot paramaters\n            tstart = -Tmax;\n            tstop = Tmax;\n            dt = (tstop - tstart) / (N - 1); // time increment over N points\n            let xscale = width / (2 * Tmax); // x pix per s\n            let yscale = height / (2 * Vmax); // y pix per V\n            // create function\n            for(let i = 0; i < N; i++){\n                x[i] = tstart + i * dt;\n                y[i] = Vp * Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180);\n            }\n            GraphArray(ctx, x0, y0, xscale, yscale, N, x, y, \"rgb(0,0,256)\", 1);\n        }\n        ///////\n        function GraphArray(ctx, x0, y0, xscale, yscale, N, x, y, color, thick) {\n            var i, x0, y0, xscale, yscale, xp, yp;\n            x0 = axes.x0;\n            y0 = axes.y0;\n            xscale = axes.xscale;\n            yscale = axes.yscale;\n            ctx.beginPath();\n            ctx.lineWidth = thick;\n            ctx.strokeStyle = color;\n            for(i = 0; i < axes.N; i++){\n                // translate actual x,y to plot xp,yp\n                xp = x0 + x[i] * xscale;\n                yp = y0 - y[i] * yscale;\n                // draw ine to next point\n                if (i == 0) ctx.moveTo(xp, yp);\n                else ctx.lineTo(xp, yp);\n            }\n            ctx.stroke();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"/Users/priyamisner/Dev/portfolio/src/app/components/sineWave.tsx\",\n        lineNumber: 137,\n        columnNumber: 10\n    }, this);\n}\n_s(CanvasWave, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c1 = CanvasWave;\nvar _c, _c1;\n$RefreshReg$(_c, \"SineWave\");\n$RefreshReg$(_c1, \"CanvasWave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW5lV2F2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYTtBQUt2QjtBQUlqQixTQUFTTSxTQUFTLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUssRUFBa0IsR0FBekI7SUFDL0IscUJBQ0UsOERBQUNMLCtEQUFnQkE7a0JBQ2YsNEVBQUNHLHFFQUFtQkE7OzhCQUNsQiw4REFBQ0QsMERBQVFBO29CQUFDRyxPQUFPQTs4QkFBTzs7Ozs7OzhCQUN4Qiw4REFBQ0osOERBQVlBO29CQUFDSSxPQUFPQTs4QkFBTzs7Ozs7OzhCQUs1Qiw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtLQWR3QkY7QUFnQnhCLFNBQVNFOztJQUNQLE1BQU1DLFlBQVlSLDZDQUFNQSxDQUFDO0lBQ3pCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFNBQVNELFVBQVVFLE9BQU87UUFDaEMsTUFBTUMsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1FBQzlCLG9CQUFvQjtRQUNwQixJQUFJQyxRQUFRRixJQUFJRixNQUFNLENBQUNJLEtBQUs7UUFDNUIsSUFBSUMsU0FBU0gsSUFBSUYsTUFBTSxDQUFDSyxNQUFNO1FBQzlCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsSUFBSUMsT0FBTztRQUNYLElBQUlDLE9BQU87UUFDWCxJQUFJQyxLQUFLO1FBQ1QsSUFBSUMsUUFBUTtRQUNaLElBQUlDLElBQUk7UUFDUixJQUFJQyxLQUFLO1FBQ1QsS0FBSztRQUVMLFNBQVNDO1lBQ1AsZ0NBQWdDO1lBQ2hDLGtDQUFrQztZQUNsQyxrQ0FBa0M7WUFDbEMsd0NBQXdDO1lBQ3hDLHNDQUFzQztZQUN0QyxzQ0FBc0M7WUFDdEMsZ0NBQWdDO1lBQ2hDLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsZUFBZTtZQUVmLGdCQUFnQjtZQUNoQixrREFBa0Q7WUFDbEQsa0RBQWtEO1lBQ2xELCtCQUErQjtZQUUvQixjQUFjO1lBQ2RWLElBQUlXLFNBQVMsR0FBRztZQUNoQlgsSUFBSVksUUFBUSxDQUFDLEdBQUcsR0FBRyxLQUFLO1lBRXhCLCtCQUErQjtZQUMvQixJQUFJQyxLQUFLLE1BQU0sTUFBTVgsT0FBTywrQ0FBK0M7WUFDM0UsSUFBSVksS0FBSyxNQUFNLE1BQU1YO1lBRXJCLElBQUlZLElBQUksSUFBSUMsU0FDVkMsSUFBSSxJQUFJRCxTQUFTLHlCQUF5QjtZQUM1QyxJQUFJRSxJQUFJQyxRQUFRQyxPQUFPLGlCQUFpQjtZQUV4Qyx5QkFBeUI7WUFDekJELFNBQVMsQ0FBQ2Y7WUFDVmdCLFFBQVFoQjtZQUNSYyxLQUFLLENBQUNFLFFBQVFELE1BQUssSUFBTVgsQ0FBQUEsSUFBSSxJQUFJLCtCQUErQjtZQUNoRSxJQUFJYSxTQUFTbkIsUUFBUyxLQUFJRSxJQUFHLEdBQUksY0FBYztZQUMvQyxJQUFJa0IsU0FBU25CLFNBQVUsS0FBSUUsSUFBRyxHQUFJLGNBQWM7WUFFaEQsa0JBQWtCO1lBQ2xCLElBQUssSUFBSWtCLElBQUksR0FBR0EsSUFBSWYsR0FBR2UsSUFBSztnQkFDMUJSLENBQUMsQ0FBQ1EsRUFBRSxHQUFHSixTQUFTSSxJQUFJTDtnQkFDcEJELENBQUMsQ0FBQ00sRUFBRSxHQUFHakIsS0FBS2tCLEtBQUtDLEdBQUcsQ0FBQyxJQUFJLFNBQVNoQixLQUFLTSxDQUFDLENBQUNRLEVBQUUsR0FBRyxRQUFTLFNBQVU7WUFDbkU7WUFFQUcsV0FBVzFCLEtBQUthLElBQUlDLElBQUlPLFFBQVFDLFFBQVFkLEdBQUdPLEdBQUdFLEdBQUcsZ0JBQWdCO1FBQ25FO1FBRUEsT0FBTztRQUNQLFNBQVNTLFdBQ1AxQixHQU9DLEVBQ0RhLEVBQU8sRUFDUEMsRUFBTyxFQUNQTyxNQUFXLEVBQ1hDLE1BQVcsRUFDWGQsQ0FBUyxFQUNUTyxDQUFXLEVBQ1hFLENBQVcsRUFDWHRCLEtBQVUsRUFDVmdDLEtBQVU7WUFFVixJQUFJSixHQUFHVixJQUFJQyxJQUFJTyxRQUFRQyxRQUFRTSxJQUFJQztZQUVuQ2hCLEtBQUtpQixLQUFLakIsRUFBRTtZQUNaQyxLQUFLZ0IsS0FBS2hCLEVBQUU7WUFDWk8sU0FBU1MsS0FBS1QsTUFBTTtZQUNwQkMsU0FBU1EsS0FBS1IsTUFBTTtZQUVwQnRCLElBQUkrQixTQUFTO1lBQ2IvQixJQUFJZ0MsU0FBUyxHQUFHTDtZQUNoQjNCLElBQUlpQyxXQUFXLEdBQUd0QztZQUVsQixJQUFLNEIsSUFBSSxHQUFHQSxJQUFJTyxLQUFLdEIsQ0FBQyxFQUFFZSxJQUFLO2dCQUMzQixxQ0FBcUM7Z0JBQ3JDSyxLQUFLZixLQUFLRSxDQUFDLENBQUNRLEVBQUUsR0FBR0Y7Z0JBQ2pCUSxLQUFLZixLQUFLRyxDQUFDLENBQUNNLEVBQUUsR0FBR0Q7Z0JBRWpCLHlCQUF5QjtnQkFDekIsSUFBSUMsS0FBSyxHQUFHdkIsSUFBSWtDLE1BQU0sQ0FBQ04sSUFBSUM7cUJBQ3RCN0IsSUFBSW1DLE1BQU0sQ0FBQ1AsSUFBSUM7WUFDdEI7WUFFQTdCLElBQUlvQyxNQUFNO1FBQ1o7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFBTyw4REFBQ3RDO1FBQU91QyxLQUFLeEM7Ozs7OztBQUN0QjtHQS9HU0Q7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NpbmVXYXZlLnRzeD9jNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGdWxsV2lkdGhXcmFwcGVyIH0gZnJvbSBcIi4uL3N0eWxlL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIEhlcm9TdWJ0aXRsZSxcbiAgSGVyb1RleHQsXG4gIFNpbmVXYXZlR3JpZFdyYXBwZXIsXG59IGZyb20gXCIuLi9zdHlsZS9zaW5lV2F2ZVN0eWxlXCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuLi9zdHlsZS9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ29sb3JNaXhlciB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5lV2F2ZSh7IGNvbG9yIH06IENvcmVDb2xvcklucHV0KSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxXaWR0aFdyYXBwZXI+XG4gICAgICA8U2luZVdhdmVHcmlkV3JhcHBlcj5cbiAgICAgICAgPEhlcm9UZXh0IGNvbG9yPXtjb2xvcn0+IGRlc2lnbmluZyB3aXRoIGRhdGEgPC9IZXJvVGV4dD5cbiAgICAgICAgPEhlcm9TdWJ0aXRsZSBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgIGEgZGF0YSB2aXN1YWxpemF0aW9uIGRlc2lnbmVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIGVuZ2luZWVyaW5nLCBJIGxvdmVcbiAgICAgICAgICB3b3JraW5nIHdpdGggY29tcGxleCBkYXRhIGFuZCB0dXJuaW5nIGl0IGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bCBpbnRvXG4gICAgICAgICAgZGF0YSBkcml2ZW4gZGVzaWduZXJcbiAgICAgICAgPC9IZXJvU3VidGl0bGU+XG4gICAgICAgIDxDYW52YXNXYXZlIC8+XG4gICAgICA8L1NpbmVXYXZlR3JpZFdyYXBwZXI+XG4gICAgPC9GdWxsV2lkdGhXcmFwcGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBDYW52YXNXYXZlKCkge1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvLyBzZXR0aW5nIHZhcmlhYmxlc1xuICAgIGxldCB3aWR0aCA9IGN0eC5jYW52YXMud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuICAgIC8vIGxldCB4MCA9IDAuNSAqIHdpZHRoO1xuICAgIC8vIGxldCB5MCA9IDAuNSAqIGhlaWdodDtcbiAgICBsZXQgVG1heCA9IDAuMDAxO1xuICAgIGxldCBWbWF4ID0gMjtcbiAgICBsZXQgVnAgPSAxO1xuICAgIGxldCBwaGFzZSA9IDA7XG4gICAgbGV0IE4gPSAxMDA7XG4gICAgbGV0IGZvID0gMTAwMDtcbiAgICAvLy8vL1xuXG4gICAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgIC8vIGdldCB2YWx1ZXMgZGlyZWN0bHkgZnJvbSBmb3JtXG4gICAgICAvLyB2YXIgVnA9ZG9jdW1lbnQubXlGb3JtLlZwLnZhbHVlXG4gICAgICAvLyB2YXIgZm89ZG9jdW1lbnQubXlGb3JtLmZvLnZhbHVlXG4gICAgICAvLyB2YXIgcGhhc2U9ZG9jdW1lbnQubXlGb3JtLnBoYXNlLnZhbHVlXG4gICAgICAvLyB2YXIgVm1heD1kb2N1bWVudC5teUZvcm0uVm1heC52YWx1ZVxuICAgICAgLy8gdmFyIFRtYXg9ZG9jdW1lbnQubXlGb3JtLlRtYXgudmFsdWVcbiAgICAgIC8vIHZhciBOPWRvY3VtZW50Lm15Rm9ybS5OLnZhbHVlXG4gICAgICAvLyBWcD1OdW1iZXIoVnApO1xuICAgICAgLy8gZm89TnVtYmVyKGZvKTtcbiAgICAgIC8vIHBoYXNlPU51bWJlcihwaGFzZSk7XG4gICAgICAvLyBWbWF4PU51bWJlcihWbWF4KTtcbiAgICAgIC8vIFRtYXg9TnVtYmVyKFRtYXgpO1xuICAgICAgLy8gTj1OdW1iZXIoTik7XG5cbiAgICAgIC8vIGRlZmluZSBjYW52YXNcbiAgICAgIC8vIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgIC8vIGlmIChudWxsPT1jYW52YXMgfHwgIWNhbnZhcy5nZXRDb250ZXh0KSByZXR1cm47XG4gICAgICAvLyBjdHg9Y2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgLy8gZmlsbCBjYW52YXNcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNkZGRkZGRcIjtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCA1MDEsIDIwMSk7XG5cbiAgICAgIC8vIGRlZmluZSBvcmlnaW4gYXQgcGxvdCBjZW50ZXJcbiAgICAgIGxldCB4MCA9IDAuNSArIDAuNSAqIHdpZHRoOyAvLyB4MCwgeTAgcGxhY2UgcGxvdCBvcmlnaW4gaW4gbWlkZGxlIG9mIGNhbnZhc1xuICAgICAgbGV0IHkwID0gMC41ICsgMC41ICogaGVpZ2h0O1xuXG4gICAgICB2YXIgeCA9IG5ldyBBcnJheSgpLFxuICAgICAgICB5ID0gbmV3IEFycmF5KCk7IC8vIHgseSBwbG90dGluZyB2YXJpYWJsZXNcbiAgICAgIHZhciBkdCwgdHN0YXJ0LCB0c3RvcDsgLy8gdGltZSB2YXJpYWJsZXNcblxuICAgICAgLy8gZGVmaW5lIHBsb3QgcGFyYW1hdGVyc1xuICAgICAgdHN0YXJ0ID0gLVRtYXg7XG4gICAgICB0c3RvcCA9IFRtYXg7XG4gICAgICBkdCA9ICh0c3RvcCAtIHRzdGFydCkgLyAoTiAtIDEpOyAvLyB0aW1lIGluY3JlbWVudCBvdmVyIE4gcG9pbnRzXG4gICAgICBsZXQgeHNjYWxlID0gd2lkdGggLyAoMiAqIFRtYXgpOyAvLyB4IHBpeCBwZXIgc1xuICAgICAgbGV0IHlzY2FsZSA9IGhlaWdodCAvICgyICogVm1heCk7IC8vIHkgcGl4IHBlciBWXG5cbiAgICAgIC8vIGNyZWF0ZSBmdW5jdGlvblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgICAgeFtpXSA9IHRzdGFydCArIGkgKiBkdDtcbiAgICAgICAgeVtpXSA9IFZwICogTWF0aC5zaW4oMiAqIDMuMTQxNSAqIGZvICogeFtpXSArIChwaGFzZSAqIDMuMTQxNSkgLyAxODApO1xuICAgICAgfVxuXG4gICAgICBHcmFwaEFycmF5KGN0eCwgeDAsIHkwLCB4c2NhbGUsIHlzY2FsZSwgTiwgeCwgeSwgXCJyZ2IoMCwwLDI1NilcIiwgMSk7XG4gICAgfVxuXG4gICAgLy8vLy8vL1xuICAgIGZ1bmN0aW9uIEdyYXBoQXJyYXkoXG4gICAgICBjdHg6IHtcbiAgICAgICAgYmVnaW5QYXRoOiAoKSA9PiB2b2lkO1xuICAgICAgICBsaW5lV2lkdGg6IGFueTtcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGFueTtcbiAgICAgICAgbW92ZVRvOiAoYXJnMDogYW55LCBhcmcxOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgICAgIGxpbmVUbzogKGFyZzA6IGFueSwgYXJnMTogbnVtYmVyKSA9PiB2b2lkO1xuICAgICAgICBzdHJva2U6ICgpID0+IHZvaWQ7XG4gICAgICB9LFxuICAgICAgeDA6IGFueSxcbiAgICAgIHkwOiBhbnksXG4gICAgICB4c2NhbGU6IGFueSxcbiAgICAgIHlzY2FsZTogYW55LFxuICAgICAgTjogbnVtYmVyLFxuICAgICAgeDogbnVtYmVyW10sXG4gICAgICB5OiBudW1iZXJbXSxcbiAgICAgIGNvbG9yOiBhbnksXG4gICAgICB0aGljazogYW55XG4gICAgKSB7XG4gICAgICB2YXIgaSwgeDAsIHkwLCB4c2NhbGUsIHlzY2FsZSwgeHAsIHlwO1xuXG4gICAgICB4MCA9IGF4ZXMueDA7XG4gICAgICB5MCA9IGF4ZXMueTA7XG4gICAgICB4c2NhbGUgPSBheGVzLnhzY2FsZTtcbiAgICAgIHlzY2FsZSA9IGF4ZXMueXNjYWxlO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubGluZVdpZHRoID0gdGhpY2s7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGF4ZXMuTjsgaSsrKSB7XG4gICAgICAgIC8vIHRyYW5zbGF0ZSBhY3R1YWwgeCx5IHRvIHBsb3QgeHAseXBcbiAgICAgICAgeHAgPSB4MCArIHhbaV0gKiB4c2NhbGU7XG4gICAgICAgIHlwID0geTAgLSB5W2ldICogeXNjYWxlO1xuXG4gICAgICAgIC8vIGRyYXcgaW5lIHRvIG5leHQgcG9pbnRcbiAgICAgICAgaWYgKGkgPT0gMCkgY3R4Lm1vdmVUbyh4cCwgeXApO1xuICAgICAgICBlbHNlIGN0eC5saW5lVG8oeHAsIHlwKTtcbiAgICAgIH1cblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkZ1bGxXaWR0aFdyYXBwZXIiLCJIZXJvU3VidGl0bGUiLCJIZXJvVGV4dCIsIlNpbmVXYXZlR3JpZFdyYXBwZXIiLCJTaW5lV2F2ZSIsImNvbG9yIiwiQ2FudmFzV2F2ZSIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJUbWF4IiwiVm1heCIsIlZwIiwicGhhc2UiLCJOIiwiZm8iLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4MCIsInkwIiwieCIsIkFycmF5IiwieSIsImR0IiwidHN0YXJ0IiwidHN0b3AiLCJ4c2NhbGUiLCJ5c2NhbGUiLCJpIiwiTWF0aCIsInNpbiIsIkdyYXBoQXJyYXkiLCJ0aGljayIsInhwIiwieXAiLCJheGVzIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sineWave.tsx\n"));

/***/ })

});