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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Axis: function() { return /* binding */ Axis; },\n/* harmony export */   HeroSubtitle: function() { return /* binding */ HeroSubtitle; },\n/* harmony export */   HeroText: function() { return /* binding */ HeroText; },\n/* harmony export */   Line: function() { return /* binding */ Line; },\n/* harmony export */   MoveLineGroup: function() { return /* binding */ MoveLineGroup; },\n/* harmony export */   MovePath: function() { return /* binding */ MovePath; },\n/* harmony export */   SineSVG: function() { return /* binding */ SineSVG; },\n/* harmony export */   SineWaveGridWrapper: function() { return /* binding */ SineWaveGridWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _gridLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleConstants */ \"(app-pages-browser)/./src/app/style/styleConstants.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"(app-pages-browser)/./src/app/utils/utils.tsx\");\n/* __next_internal_client_entry_do_not_use__ HeroText,HeroSubtitle,SineWaveGridWrapper,SineSVG,MovePath,MoveLineGroup,Line,Axis auto */ \n\n\n\nconst HeroText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n    displayName: \"sineWaveStyle__HeroText\",\n    componentId: \"sc-5d9ad533-0\"\n})([\n    \"color:\",\n    \";margin-top:208px;grid-column:2 / span 11;font-size:96px;font-weight:350;letter-spacing:4px;\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_1__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst HeroSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n    displayName: \"sineWaveStyle__HeroSubtitle\",\n    componentId: \"sc-5d9ad533-1\"\n})([\n    \"color:\",\n    \";grid-column:4 / span 4;font-size:20px;line-height:1.6;font-weight:300;margin-top:32px;margin-bottom:240px;@media screen and (max-width:768px){grid-column:2 / span 8;}\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_1__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst SineWaveGridWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_gridLayout__WEBPACK_IMPORTED_MODULE_0__.GridWrapper).withConfig({\n    displayName: \"sineWaveStyle__SineWaveGridWrapper\",\n    componentId: \"sc-5d9ad533-2\"\n})([\n    \"min-height:400px;\"\n]);\nconst SineSVG = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].svg.withConfig({\n    displayName: \"sineWaveStyle__SineSVG\",\n    componentId: \"sc-5d9ad533-3\"\n})([\n    \"grid-column:1 / span 12;width:100%;height:100%;position:absolute;top:0;z-index:-2;\"\n]);\nconst MovePath = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].path.withConfig({\n    displayName: \"sineWaveStyle__MovePath\",\n    componentId: \"sc-5d9ad533-4\"\n})([\n    \"stroke-width:4px;stroke-dasharray:\",\n    \";stroke:\",\n    \";fill:none;animation-name:move;animation-duration:\",\n    \";animation-iteration-count:infinite;animation-timing-function:linear;@keyframes move{from{transform:translateX(-200%);}to{transform:\",\n    \";}}\"\n], (props)=>props.dasharray ? props.dasharray : \"17 8\", (props)=>props.color ? \"rgba(\".concat(props.color, \")\") : \"black\", (props)=>props.speed ? \"\".concat(props.speed, \"s\") : \"120s\", (props)=>props.transform ? \"translateX(\".concat(props.speed, \"%)\") : \" translateX(0%)\");\nconst MoveLineGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].g.withConfig({\n    displayName: \"sineWaveStyle__MoveLineGroup\",\n    componentId: \"sc-5d9ad533-5\"\n})([\n    \"animation-name:move;animation-duration:\",\n    \";animation-iteration-count:infinite;animation-timing-function:linear;@keyframes move{from{transform:translateX(-200%);}to{transform:\",\n    \";}}\"\n], (props)=>props.speed ? \"\".concat(props.speed, \"s\") : \"120s\", (props)=>props.transform ? \"translateX(\".concat(props.speed, \"%)\") : \" translateX(0%)\");\nconst Line = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].line.withConfig({\n    displayName: \"sineWaveStyle__Line\",\n    componentId: \"sc-5d9ad533-6\"\n})([\n    \"stroke-width:4px;stroke:\",\n    \";\"\n], (props)=>props.color ? \"rgba(\".concat(props.color, \")\") : \"black\");\nconst Axis = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].path.withConfig({\n    displayName: \"sineWaveStyle__Axis\",\n    componentId: \"sc-5d9ad533-7\"\n})([\n    \"stroke-width:1px;stroke:black;fill:none;\"\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGUvc2luZVdhdmVTdHlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3dJQUN1QztBQUNJO0FBQ3VCO0FBQ1g7QUFFaEQsTUFBTUksV0FBV0oseURBQU1BLENBQUNLLEVBQUU7Ozs7OztHQUN0QixDQUFDQyxRQUNSSCx3REFBVUEsQ0FBQztRQUNUSSxhQUFhRCxNQUFNRSxLQUFLO1FBQ3hCQyxVQUFVUCwyREFBY0E7UUFDeEJRLGNBQWM7SUFDaEIsSUFNRjtBQUVLLE1BQU1DLGVBQWVYLHlEQUFNQSxDQUFDWSxDQUFDOzs7Ozs7R0FDekIsQ0FBQ04sUUFDUkgsd0RBQVVBLENBQUM7UUFDVEksYUFBYUQsTUFBTUUsS0FBSztRQUN4QkMsVUFBVVAsMkRBQWNBO1FBQ3hCUSxjQUFjO0lBQ2hCLElBVUY7QUFFSyxNQUFNRyxzQkFBc0JiLDZEQUFNQSxDQUFDQyxvREFBV0E7Ozs7O0dBR25EO0FBRUssTUFBTWEsVUFBVWQseURBQU1BLENBQUNlLEdBQUc7Ozs7O0dBTy9CO0FBU0ssTUFBTUMsV0FBV2hCLHlEQUFNQSxDQUFDaUIsSUFBSTs7Ozs7Ozs7O0dBRWIsQ0FBQ1gsUUFBV0EsTUFBTVksU0FBUyxHQUFHWixNQUFNWSxTQUFTLEdBQUcsUUFDMUQsQ0FBQ1osUUFBV0EsTUFBTUUsS0FBSyxHQUFHLFFBQW9CLE9BQVpGLE1BQU1FLEtBQUssRUFBQyxPQUFLLFNBR3ZDLENBQUNGLFFBQVdBLE1BQU1hLEtBQUssR0FBRyxHQUFlLE9BQVpiLE1BQU1hLEtBQUssRUFBQyxPQUFLLFFBUW5ELENBQUNiLFFBQ1pBLE1BQU1jLFNBQVMsR0FBRyxjQUEwQixPQUFaZCxNQUFNYSxLQUFLLEVBQUMsUUFBTSxtQkFHeEQ7QUFFSyxNQUFNRSxnQkFBZ0JyQix5REFBTUEsQ0FBQ3NCLENBQUM7Ozs7Ozs7R0FFYixDQUFDaEIsUUFBV0EsTUFBTWEsS0FBSyxHQUFHLEdBQWUsT0FBWmIsTUFBTWEsS0FBSyxFQUFDLE9BQUssUUFRbkQsQ0FBQ2IsUUFDWkEsTUFBTWMsU0FBUyxHQUFHLGNBQTBCLE9BQVpkLE1BQU1hLEtBQUssRUFBQyxRQUFNLG1CQUd4RDtBQUNLLE1BQU1JLE9BQU92Qix5REFBTUEsQ0FBQ3dCLElBQUk7Ozs7OztHQUVuQixDQUFDbEIsUUFBV0EsTUFBTUUsS0FBSyxHQUFHLFFBQW9CLE9BQVpGLE1BQU1FLEtBQUssRUFBQyxPQUFLLFNBQzdEO0FBRUssTUFBTWlCLE9BQU96Qix5REFBTUEsQ0FBQ2lCLElBQUk7Ozs7O0dBSTdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGUvc2luZVdhdmVTdHlsZS50c3g/MDJiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBHcmlkV3JhcHBlciB9IGZyb20gXCIuL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7IENvcmVDb2xvcklucHV0LCBEYXJrT3ZlcmxheV84MCB9IGZyb20gXCIuL3N0eWxlQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBcnJheVJHQkEsIENvbG9yTWl4ZXIgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEhlcm9UZXh0ID0gc3R5bGVkLmgxPENvcmVDb2xvcklucHV0PmBcbiAgY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIENvbG9yTWl4ZXIoe1xuICAgICAgYm90dG9tTGF5ZXI6IHByb3BzLmNvbG9yLFxuICAgICAgdG9wTGF5ZXI6IERhcmtPdmVybGF5XzgwLFxuICAgICAgcmV0dXJuRm9ybWF0OiBcInJnYmFcIixcbiAgICB9KX07XG4gIG1hcmdpbi10b3A6IDIwOHB4O1xuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTE7XG4gIGZvbnQtc2l6ZTogOTZweDtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZXJvU3VidGl0bGUgPSBzdHlsZWQucDxDb3JlQ29sb3JJbnB1dD5gXG4gIGNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBDb2xvck1peGVyKHtcbiAgICAgIGJvdHRvbUxheWVyOiBwcm9wcy5jb2xvcixcbiAgICAgIHRvcExheWVyOiBEYXJrT3ZlcmxheV84MCxcbiAgICAgIHJldHVybkZvcm1hdDogXCJyZ2JhXCIsXG4gICAgfSl9O1xuICBncmlkLWNvbHVtbjogNCAvIHNwYW4gNDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNDBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gODtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNpbmVXYXZlR3JpZFdyYXBwZXIgPSBzdHlsZWQoR3JpZFdyYXBwZXIpYFxuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgLy8gaGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTaW5lU1ZHID0gc3R5bGVkLnN2Z2BcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDEyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTI7XG5gO1xuXG50eXBlIE1vdmVQYXRoSW5wdXQgPSB7XG4gIGNvbG9yPzogQXJyYXlSR0JBO1xuICBzcGVlZD86IG51bWJlcjtcbiAgdHJhbnNmb3JtPzogbnVtYmVyO1xuICBkYXNoYXJyYXk/OiBzdHJpbmc7XG4gIHRoaWNrbmVzcz86IG51bWJlcjtcbn07XG5leHBvcnQgY29uc3QgTW92ZVBhdGggPSBzdHlsZWQucGF0aDxNb3ZlUGF0aElucHV0PmBcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gIHN0cm9rZS1kYXNoYXJyYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuZGFzaGFycmF5ID8gcHJvcHMuZGFzaGFycmF5IDogXCIxNyA4XCIpfTtcbiAgc3Ryb2tlOiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbG9yID8gYHJnYmEoJHtwcm9wcy5jb2xvcn0pYCA6IFwiYmxhY2tcIil9O1xuICBmaWxsOiBub25lO1xuICBhbmltYXRpb24tbmFtZTogbW92ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkeyhwcm9wcykgPT4gKHByb3BzLnNwZWVkID8gYCR7cHJvcHMuc3BlZWR9c2AgOiBcIjEyMHNcIil9O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT5cbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID8gYHRyYW5zbGF0ZVgoJHtwcm9wcy5zcGVlZH0lKWAgOiBcIiB0cmFuc2xhdGVYKDAlKVwifTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb3ZlTGluZUdyb3VwID0gc3R5bGVkLmdgXG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlO1xuICBhbmltYXRpb24tZHVyYXRpb246ICR7KHByb3BzKSA9PiAocHJvcHMuc3BlZWQgPyBgJHtwcm9wcy5zcGVlZH1zYCA6IFwiMTIwc1wiKX07XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PlxuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPyBgdHJhbnNsYXRlWCgke3Byb3BzLnNwZWVkfSUpYCA6IFwiIHRyYW5zbGF0ZVgoMCUpXCJ9O1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLmxpbmVgXG4gIHN0cm9rZS13aWR0aDogNHB4O1xuICBzdHJva2U6ICR7KHByb3BzKSA9PiAocHJvcHMuY29sb3IgPyBgcmdiYSgke3Byb3BzLmNvbG9yfSlgIDogXCJibGFja1wiKX07XG5gO1xuXG5leHBvcnQgY29uc3QgQXhpcyA9IHN0eWxlZC5wYXRoYFxuICBzdHJva2Utd2lkdGg6IDFweDtcbiAgc3Ryb2tlOiBibGFjaztcbiAgZmlsbDogbm9uZTtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiR3JpZFdyYXBwZXIiLCJEYXJrT3ZlcmxheV84MCIsIkNvbG9yTWl4ZXIiLCJIZXJvVGV4dCIsImgxIiwicHJvcHMiLCJib3R0b21MYXllciIsImNvbG9yIiwidG9wTGF5ZXIiLCJyZXR1cm5Gb3JtYXQiLCJIZXJvU3VidGl0bGUiLCJwIiwiU2luZVdhdmVHcmlkV3JhcHBlciIsIlNpbmVTVkciLCJzdmciLCJNb3ZlUGF0aCIsInBhdGgiLCJkYXNoYXJyYXkiLCJzcGVlZCIsInRyYW5zZm9ybSIsIk1vdmVMaW5lR3JvdXAiLCJnIiwiTGluZSIsImxpbmUiLCJBeGlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\n"));

/***/ })

});