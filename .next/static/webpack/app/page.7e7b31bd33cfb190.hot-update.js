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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Axis: function() { return /* binding */ Axis; },\n/* harmony export */   HeroSubtitle: function() { return /* binding */ HeroSubtitle; },\n/* harmony export */   HeroText: function() { return /* binding */ HeroText; },\n/* harmony export */   Line: function() { return /* binding */ Line; },\n/* harmony export */   MoveLineGroup: function() { return /* binding */ MoveLineGroup; },\n/* harmony export */   MovePath: function() { return /* binding */ MovePath; },\n/* harmony export */   SineSVG: function() { return /* binding */ SineSVG; },\n/* harmony export */   SineWaveGridWrapper: function() { return /* binding */ SineWaveGridWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _gridLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleConstants */ \"(app-pages-browser)/./src/app/style/styleConstants.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"(app-pages-browser)/./src/app/utils/utils.tsx\");\n/* __next_internal_client_entry_do_not_use__ HeroText,HeroSubtitle,SineWaveGridWrapper,SineSVG,MovePath,MoveLineGroup,Line,Axis auto */ \n\n\n\nconst HeroText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n    displayName: \"sineWaveStyle__HeroText\",\n    componentId: \"sc-d6c5097-0\"\n})([\n    \"color:\",\n    \";margin-top:208px;grid-column:2 / span 11;font-size:96px;font-weight:350;letter-spacing:4px;\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_1__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst HeroSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n    displayName: \"sineWaveStyle__HeroSubtitle\",\n    componentId: \"sc-d6c5097-1\"\n})([\n    \"color:\",\n    \";grid-column:4 / span 4;font-size:20px;line-height:1.6;font-weight:300;margin-top:32px;margin-bottom:240px;@media screen and (max-width:768px){grid-column:2 / span 8;}\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_1__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst SineWaveGridWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_gridLayout__WEBPACK_IMPORTED_MODULE_0__.GridWrapper).withConfig({\n    displayName: \"sineWaveStyle__SineWaveGridWrapper\",\n    componentId: \"sc-d6c5097-2\"\n})([\n    \"min-height:400px;\"\n]);\nconst SineSVG = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].svg.withConfig({\n    displayName: \"sineWaveStyle__SineSVG\",\n    componentId: \"sc-d6c5097-3\"\n})([\n    \"grid-column:1 / span 12;width:100%;height:100%;position:absolute;top:0;z-index:-2;\"\n]);\nconst MovePath = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].path.withConfig({\n    displayName: \"sineWaveStyle__MovePath\",\n    componentId: \"sc-d6c5097-4\"\n})([\n    \"stroke-width:2px;stroke:\",\n    \";fill:none;animation-name:move;animation-duration:10s;stroke-dasharray:3 3;animation-iteration-count:infinite;animation-timing-function:linear;@keyframes move{from{transform:translateX(-150%);}50%{transform:translateX(0%);}to{transform:translateX(-150%);}\"\n], (props)=>props.color ? \"rgba(\".concat(props.color, \")\") : \"black\");\nconst MoveLineGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].g.withConfig({\n    displayName: \"sineWaveStyle__MoveLineGroup\",\n    componentId: \"sc-d6c5097-5\"\n})([\n    \"animation-name:move1;animation-duration:10s;animation-iteration-count:infinite;animation-timing-function:linear;@keyframes move1{from{transform:translateX(-150%);}50%{transform:translateX(0%);}to{transform:translateX(-150%);}}\"\n]);\nconst Line = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].line.withConfig({\n    displayName: \"sineWaveStyle__Line\",\n    componentId: \"sc-d6c5097-6\"\n})([\n    \"stroke-width:8px;stroke:\",\n    \";\"\n], (props)=>props.color ? \"rgba(\".concat(props.color, \")\") : \"black\");\nconst Axis = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].path.withConfig({\n    displayName: \"sineWaveStyle__Axis\",\n    componentId: \"sc-d6c5097-7\"\n})([\n    \"stroke-width:1px;stroke:black;fill:none;\"\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGUvc2luZVdhdmVTdHlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3dJQUN1QztBQUNJO0FBQ3VCO0FBQ1g7QUFFaEQsTUFBTUksV0FBV0oseURBQU1BLENBQUNLLEVBQUU7Ozs7OztHQUN0QixDQUFDQyxRQUNSSCx3REFBVUEsQ0FBQztRQUNUSSxhQUFhRCxNQUFNRSxLQUFLO1FBQ3hCQyxVQUFVUCwyREFBY0E7UUFDeEJRLGNBQWM7SUFDaEIsSUFNRjtBQUVLLE1BQU1DLGVBQWVYLHlEQUFNQSxDQUFDWSxDQUFDOzs7Ozs7R0FDekIsQ0FBQ04sUUFDUkgsd0RBQVVBLENBQUM7UUFDVEksYUFBYUQsTUFBTUUsS0FBSztRQUN4QkMsVUFBVVAsMkRBQWNBO1FBQ3hCUSxjQUFjO0lBQ2hCLElBVUY7QUFFSyxNQUFNRyxzQkFBc0JiLDZEQUFNQSxDQUFDQyxvREFBV0E7Ozs7O0dBR25EO0FBRUssTUFBTWEsVUFBVWQseURBQU1BLENBQUNlLEdBQUc7Ozs7O0dBTy9CO0FBU0ssTUFBTUMsV0FBV2hCLHlEQUFNQSxDQUFDaUIsSUFBSTs7Ozs7O0dBSXZCLENBQUNYLFFBQVdBLE1BQU1FLEtBQUssR0FBRyxRQUFvQixPQUFaRixNQUFNRSxLQUFLLEVBQUMsT0FBSyxTQWlCN0Q7QUFFSyxNQUFNVSxnQkFBZ0JsQix5REFBTUEsQ0FBQ21CLENBQUM7Ozs7O0dBaUJuQztBQUNLLE1BQU1DLE9BQU9wQix5REFBTUEsQ0FBQ3FCLElBQUk7Ozs7OztHQUVuQixDQUFDZixRQUFXQSxNQUFNRSxLQUFLLEdBQUcsUUFBb0IsT0FBWkYsTUFBTUUsS0FBSyxFQUFDLE9BQUssU0FDN0Q7QUFFSyxNQUFNYyxPQUFPdEIseURBQU1BLENBQUNpQixJQUFJOzs7OztHQUk3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3N0eWxlL3NpbmVXYXZlU3R5bGUudHN4PzAyYjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgR3JpZFdyYXBwZXIgfSBmcm9tIFwiLi9ncmlkTGF5b3V0XCI7XG5pbXBvcnQgeyBDb3JlQ29sb3JJbnB1dCwgRGFya092ZXJsYXlfODAgfSBmcm9tIFwiLi9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQXJyYXlSR0JBLCBDb2xvck1peGVyIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBIZXJvVGV4dCA9IHN0eWxlZC5oMTxDb3JlQ29sb3JJbnB1dD5gXG4gIGNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBDb2xvck1peGVyKHtcbiAgICAgIGJvdHRvbUxheWVyOiBwcm9wcy5jb2xvcixcbiAgICAgIHRvcExheWVyOiBEYXJrT3ZlcmxheV84MCxcbiAgICAgIHJldHVybkZvcm1hdDogXCJyZ2JhXCIsXG4gICAgfSl9O1xuICBtYXJnaW4tdG9wOiAyMDhweDtcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDExO1xuICBmb250LXNpemU6IDk2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVyb1N1YnRpdGxlID0gc3R5bGVkLnA8Q29yZUNvbG9ySW5wdXQ+YFxuICBjb2xvcjogJHsocHJvcHMpID0+XG4gICAgQ29sb3JNaXhlcih7XG4gICAgICBib3R0b21MYXllcjogcHJvcHMuY29sb3IsXG4gICAgICB0b3BMYXllcjogRGFya092ZXJsYXlfODAsXG4gICAgICByZXR1cm5Gb3JtYXQ6IFwicmdiYVwiLFxuICAgIH0pfTtcbiAgZ3JpZC1jb2x1bW46IDQgLyBzcGFuIDQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTaW5lV2F2ZUdyaWRXcmFwcGVyID0gc3R5bGVkKEdyaWRXcmFwcGVyKWBcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIC8vIGhlaWdodDogMTAwdmg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2luZVNWRyA9IHN0eWxlZC5zdmdgXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0yO1xuYDtcblxudHlwZSBNb3ZlUGF0aElucHV0ID0ge1xuICBjb2xvcj86IEFycmF5UkdCQTtcbiAgc3BlZWQ/OiBudW1iZXI7XG4gIHRyYW5zZm9ybT86IG51bWJlcjtcbiAgZGFzaGFycmF5Pzogc3RyaW5nO1xuICB0aGlja25lc3M/OiBudW1iZXI7XG59O1xuZXhwb3J0IGNvbnN0IE1vdmVQYXRoID0gc3R5bGVkLnBhdGg8TW92ZVBhdGhJbnB1dD5gXG4gIHN0cm9rZS13aWR0aDogMnB4O1xuICAvLyBzdHJva2UtZGFzaGFycmF5OiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5kYXNoYXJyYXkgPyBwcm9wcy5kYXNoYXJyYXkgOiBcIjE3IDhcIn07XG4gIHN0cm9rZTogJHsocHJvcHMpID0+IChwcm9wcy5jb2xvciA/IGByZ2JhKCR7cHJvcHMuY29sb3J9KWAgOiBcImJsYWNrXCIpfTtcbiAgZmlsbDogbm9uZTtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICBzdHJva2UtZGFzaGFycmF5OiAzIDM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1vdmVMaW5lR3JvdXAgPSBzdHlsZWQuZ2BcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmUxO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblxuICBAa2V5ZnJhbWVzIG1vdmUxIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLmxpbmVgXG4gIHN0cm9rZS13aWR0aDogOHB4O1xuICBzdHJva2U6ICR7KHByb3BzKSA9PiAocHJvcHMuY29sb3IgPyBgcmdiYSgke3Byb3BzLmNvbG9yfSlgIDogXCJibGFja1wiKX07XG5gO1xuXG5leHBvcnQgY29uc3QgQXhpcyA9IHN0eWxlZC5wYXRoYFxuICBzdHJva2Utd2lkdGg6IDFweDtcbiAgc3Ryb2tlOiBibGFjaztcbiAgZmlsbDogbm9uZTtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiR3JpZFdyYXBwZXIiLCJEYXJrT3ZlcmxheV84MCIsIkNvbG9yTWl4ZXIiLCJIZXJvVGV4dCIsImgxIiwicHJvcHMiLCJib3R0b21MYXllciIsImNvbG9yIiwidG9wTGF5ZXIiLCJyZXR1cm5Gb3JtYXQiLCJIZXJvU3VidGl0bGUiLCJwIiwiU2luZVdhdmVHcmlkV3JhcHBlciIsIlNpbmVTVkciLCJzdmciLCJNb3ZlUGF0aCIsInBhdGgiLCJNb3ZlTGluZUdyb3VwIiwiZyIsIkxpbmUiLCJsaW5lIiwiQXhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\n"));

/***/ })

});