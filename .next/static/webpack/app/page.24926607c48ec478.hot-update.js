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

/***/ "(app-pages-browser)/./src/app/style/sineWaveStyle.tsx":
/*!*****************************************!*\
  !*** ./src/app/style/sineWaveStyle.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Axis: function() { return /* binding */ Axis; },\n/* harmony export */   HeroSubtitle: function() { return /* binding */ HeroSubtitle; },\n/* harmony export */   HeroText: function() { return /* binding */ HeroText; },\n/* harmony export */   Line: function() { return /* binding */ Line; },\n/* harmony export */   MoveLineGroup: function() { return /* binding */ MoveLineGroup; },\n/* harmony export */   MovePath: function() { return /* binding */ MovePath; },\n/* harmony export */   SineSVG: function() { return /* binding */ SineSVG; },\n/* harmony export */   SineWaveGridWrapper: function() { return /* binding */ SineWaveGridWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _gridLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleConstants */ \"(app-pages-browser)/./src/app/style/styleConstants.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"(app-pages-browser)/./src/app/utils/utils.tsx\");\n/* __next_internal_client_entry_do_not_use__ HeroText,HeroSubtitle,SineWaveGridWrapper,SineSVG,MovePath,MoveLineGroup,Line,Axis auto */ \n\n\n\nconst HeroText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n    displayName: \"sineWaveStyle__HeroText\",\n    componentId: \"sc-8bddfb44-0\"\n})([\n    \"color:\",\n    \";margin-top:208px;grid-column:2 / span 11;font-size:96px;font-weight:350;letter-spacing:4px;\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_1__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst HeroSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n    displayName: \"sineWaveStyle__HeroSubtitle\",\n    componentId: \"sc-8bddfb44-1\"\n})([\n    \"color:\",\n    \";grid-column:4 / span 4;font-size:20px;line-height:1.6;font-weight:300;margin-top:32px;margin-bottom:240px;@media screen and (max-width:768px){grid-column:2 / span 8;}\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_1__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst SineWaveGridWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_gridLayout__WEBPACK_IMPORTED_MODULE_0__.GridWrapper).withConfig({\n    displayName: \"sineWaveStyle__SineWaveGridWrapper\",\n    componentId: \"sc-8bddfb44-2\"\n})([\n    \"min-height:400px;\"\n]);\nconst SineSVG = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].svg.withConfig({\n    displayName: \"sineWaveStyle__SineSVG\",\n    componentId: \"sc-8bddfb44-3\"\n})([\n    \"grid-column:1 / span 12;width:100%;height:100%;position:absolute;top:0;z-index:-2;\"\n]);\nconst MovePath = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].path.withConfig({\n    displayName: \"sineWaveStyle__MovePath\",\n    componentId: \"sc-8bddfb44-4\"\n})([\n    \"stroke-width:2px;stroke:\",\n    \";fill:none;animation-name:move;animation-duration:40s;stroke-dasharray:3 3;animation-iteration-count:infinite;animation-timing-function:linear;@keyframes move{from{transform:translateX(-150%);}to{transform:translateX(0%);}}\"\n], (props)=>props.color ? \"rgba(\".concat(props.color, \")\") : \"black\");\nconst MoveLineGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].g.withConfig({\n    displayName: \"sineWaveStyle__MoveLineGroup\",\n    componentId: \"sc-8bddfb44-5\"\n})([\n    \"animation-name:move1;animation-duration:40s;animation-iteration-count:infinite;animation-timing-function:linear;@keyframes move1{from{transform:translateX(-150%);}to{transform:translateX(0%);}}\"\n]);\nconst Line = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].line.withConfig({\n    displayName: \"sineWaveStyle__Line\",\n    componentId: \"sc-8bddfb44-6\"\n})([\n    \"stroke-width:8px;stroke:\",\n    \";\"\n], (props)=>props.color ? \"rgba(\".concat(props.color, \")\") : \"black\");\nconst Axis = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].path.withConfig({\n    displayName: \"sineWaveStyle__Axis\",\n    componentId: \"sc-8bddfb44-7\"\n})([\n    \"stroke-width:1px;stroke:black;fill:none;\"\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGUvc2luZVdhdmVTdHlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3dJQUN1QztBQUNJO0FBQ3VCO0FBQ1g7QUFFaEQsTUFBTUksV0FBV0oseURBQU1BLENBQUNLLEVBQUU7Ozs7OztHQUN0QixDQUFDQyxRQUNSSCx3REFBVUEsQ0FBQztRQUNUSSxhQUFhRCxNQUFNRSxLQUFLO1FBQ3hCQyxVQUFVUCwyREFBY0E7UUFDeEJRLGNBQWM7SUFDaEIsSUFNRjtBQUVLLE1BQU1DLGVBQWVYLHlEQUFNQSxDQUFDWSxDQUFDOzs7Ozs7R0FDekIsQ0FBQ04sUUFDUkgsd0RBQVVBLENBQUM7UUFDVEksYUFBYUQsTUFBTUUsS0FBSztRQUN4QkMsVUFBVVAsMkRBQWNBO1FBQ3hCUSxjQUFjO0lBQ2hCLElBVUY7QUFFSyxNQUFNRyxzQkFBc0JiLDZEQUFNQSxDQUFDQyxvREFBV0E7Ozs7O0dBR25EO0FBRUssTUFBTWEsVUFBVWQseURBQU1BLENBQUNlLEdBQUc7Ozs7O0dBTy9CO0FBU0ssTUFBTUMsV0FBV2hCLHlEQUFNQSxDQUFDaUIsSUFBSTs7Ozs7O0dBSXZCLENBQUNYLFFBQVdBLE1BQU1FLEtBQUssR0FBRyxRQUFvQixPQUFaRixNQUFNRSxLQUFLLEVBQUMsT0FBSyxTQWU3RDtBQUVLLE1BQU1VLGdCQUFnQmxCLHlEQUFNQSxDQUFDbUIsQ0FBQzs7Ozs7R0FjbkM7QUFDSyxNQUFNQyxPQUFPcEIseURBQU1BLENBQUNxQixJQUFJOzs7Ozs7R0FFbkIsQ0FBQ2YsUUFBV0EsTUFBTUUsS0FBSyxHQUFHLFFBQW9CLE9BQVpGLE1BQU1FLEtBQUssRUFBQyxPQUFLLFNBQzdEO0FBRUssTUFBTWMsT0FBT3RCLHlEQUFNQSxDQUFDaUIsSUFBSTs7Ozs7R0FJN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zdHlsZS9zaW5lV2F2ZVN0eWxlLnRzeD8wMmI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEdyaWRXcmFwcGVyIH0gZnJvbSBcIi4vZ3JpZExheW91dFwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQsIERhcmtPdmVybGF5XzgwIH0gZnJvbSBcIi4vc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IEFycmF5UkdCQSwgQ29sb3JNaXhlciB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgSGVyb1RleHQgPSBzdHlsZWQuaDE8Q29yZUNvbG9ySW5wdXQ+YFxuICBjb2xvcjogJHsocHJvcHMpID0+XG4gICAgQ29sb3JNaXhlcih7XG4gICAgICBib3R0b21MYXllcjogcHJvcHMuY29sb3IsXG4gICAgICB0b3BMYXllcjogRGFya092ZXJsYXlfODAsXG4gICAgICByZXR1cm5Gb3JtYXQ6IFwicmdiYVwiLFxuICAgIH0pfTtcbiAgbWFyZ2luLXRvcDogMjA4cHg7XG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxMTtcbiAgZm9udC1zaXplOiA5NnB4O1xuICBmb250LXdlaWdodDogMzUwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlcm9TdWJ0aXRsZSA9IHN0eWxlZC5wPENvcmVDb2xvcklucHV0PmBcbiAgY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIENvbG9yTWl4ZXIoe1xuICAgICAgYm90dG9tTGF5ZXI6IHByb3BzLmNvbG9yLFxuICAgICAgdG9wTGF5ZXI6IERhcmtPdmVybGF5XzgwLFxuICAgICAgcmV0dXJuRm9ybWF0OiBcInJnYmFcIixcbiAgICB9KX07XG4gIGdyaWQtY29sdW1uOiA0IC8gc3BhbiA0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDI0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2luZVdhdmVHcmlkV3JhcHBlciA9IHN0eWxlZChHcmlkV3JhcHBlcilgXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAvLyBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpbmVTVkcgPSBzdHlsZWQuc3ZnYFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMjtcbmA7XG5cbnR5cGUgTW92ZVBhdGhJbnB1dCA9IHtcbiAgY29sb3I/OiBBcnJheVJHQkE7XG4gIHNwZWVkPzogbnVtYmVyO1xuICB0cmFuc2Zvcm0/OiBudW1iZXI7XG4gIGRhc2hhcnJheT86IHN0cmluZztcbiAgdGhpY2tuZXNzPzogbnVtYmVyO1xufTtcbmV4cG9ydCBjb25zdCBNb3ZlUGF0aCA9IHN0eWxlZC5wYXRoPE1vdmVQYXRoSW5wdXQ+YFxuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgLy8gc3Ryb2tlLWRhc2hhcnJheTogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZGFzaGFycmF5ID8gcHJvcHMuZGFzaGFycmF5IDogXCIxNyA4XCJ9O1xuICBzdHJva2U6ICR7KHByb3BzKSA9PiAocHJvcHMuY29sb3IgPyBgcmdiYSgke3Byb3BzLmNvbG9yfSlgIDogXCJibGFja1wiKX07XG4gIGZpbGw6IG5vbmU7XG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDQwcztcbiAgc3Ryb2tlLWRhc2hhcnJheTogMyAzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb3ZlTGluZUdyb3VwID0gc3R5bGVkLmdgXG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlMTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cbiAgQGtleWZyYW1lcyBtb3ZlMSB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLmxpbmVgXG4gIHN0cm9rZS13aWR0aDogOHB4O1xuICBzdHJva2U6ICR7KHByb3BzKSA9PiAocHJvcHMuY29sb3IgPyBgcmdiYSgke3Byb3BzLmNvbG9yfSlgIDogXCJibGFja1wiKX07XG5gO1xuXG5leHBvcnQgY29uc3QgQXhpcyA9IHN0eWxlZC5wYXRoYFxuICBzdHJva2Utd2lkdGg6IDFweDtcbiAgc3Ryb2tlOiBibGFjaztcbiAgZmlsbDogbm9uZTtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiR3JpZFdyYXBwZXIiLCJEYXJrT3ZlcmxheV84MCIsIkNvbG9yTWl4ZXIiLCJIZXJvVGV4dCIsImgxIiwicHJvcHMiLCJib3R0b21MYXllciIsImNvbG9yIiwidG9wTGF5ZXIiLCJyZXR1cm5Gb3JtYXQiLCJIZXJvU3VidGl0bGUiLCJwIiwiU2luZVdhdmVHcmlkV3JhcHBlciIsIlNpbmVTVkciLCJzdmciLCJNb3ZlUGF0aCIsInBhdGgiLCJNb3ZlTGluZUdyb3VwIiwiZyIsIkxpbmUiLCJsaW5lIiwiQXhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\n"));

/***/ })

});