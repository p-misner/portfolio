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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Axis: function() { return /* binding */ Axis; },\n/* harmony export */   HeroSubtitle: function() { return /* binding */ HeroSubtitle; },\n/* harmony export */   HeroText: function() { return /* binding */ HeroText; },\n/* harmony export */   MovePath: function() { return /* binding */ MovePath; },\n/* harmony export */   SineSVG: function() { return /* binding */ SineSVG; },\n/* harmony export */   SineWaveGridWrapper: function() { return /* binding */ SineWaveGridWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _gridLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gridLayout */ \"(app-pages-browser)/./src/app/style/gridLayout.tsx\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleConstants */ \"(app-pages-browser)/./src/app/style/styleConstants.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"(app-pages-browser)/./src/app/utils/utils.tsx\");\n/* __next_internal_client_entry_do_not_use__ HeroText,HeroSubtitle,SineWaveGridWrapper,SineSVG,MovePath,Axis auto */ \n\n\n\nconst HeroText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n    displayName: \"sineWaveStyle__HeroText\",\n    componentId: \"sc-1e709825-0\"\n})([\n    \"color:\",\n    \";margin-top:128px;grid-column:2 / span 11;font-size:96px;font-weight:350;letter-spacing:4px;\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_1__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst HeroSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n    displayName: \"sineWaveStyle__HeroSubtitle\",\n    componentId: \"sc-1e709825-1\"\n})([\n    \"color:\",\n    \";grid-column:4 / span 4;font-size:20px;line-height:1.6;font-weight:300;margin-bottom:240px;@media screen and (max-width:768px){grid-column:2 / span 8;}\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_1__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst SineWaveGridWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_gridLayout__WEBPACK_IMPORTED_MODULE_0__.GridWrapper).withConfig({\n    displayName: \"sineWaveStyle__SineWaveGridWrapper\",\n    componentId: \"sc-1e709825-2\"\n})([\n    \"min-height:400px;\"\n]);\nconst SineSVG = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].svg.withConfig({\n    displayName: \"sineWaveStyle__SineSVG\",\n    componentId: \"sc-1e709825-3\"\n})([\n    \"grid-column:1 / span 12;width:100%;height:100%;position:absolute;top:0;background-color:rgba(0,0,0,0.1);z-index:0;\"\n]);\nconst MovePath = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].path.withConfig({\n    displayName: \"sineWaveStyle__MovePath\",\n    componentId: \"sc-1e709825-4\"\n})([\n    \"stroke-width:4px;stroke-dasharray:\",\n    \";stroke:\",\n    \";fill:none;animation-name:move;animation-duration:\",\n    \";animation-iteration-count:infinite;animation-timing-function:linear;@keyframes move{from{transform:translateX(-200%);}to{transform:\",\n    \";}}\"\n], (props)=>props.dasharray ? props.dasharray : \"17 8\", (props)=>props.color ? \"rgba(\".concat(props.color, \")\") : \"black\", (props)=>props.speed ? \"\".concat(props.speed, \"s\") : \"120s\", (props)=>props.transform ? \"translateX(\".concat(props.speed, \"%)\") : \" translateX(0%)\");\nconst Axis = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].path.withConfig({\n    displayName: \"sineWaveStyle__Axis\",\n    componentId: \"sc-1e709825-5\"\n})([\n    \"stroke-width:1px;stroke:black;fill:none;\"\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGUvc2luZVdhdmVTdHlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztxSEFDdUM7QUFDSTtBQUN1QjtBQUNYO0FBRWhELE1BQU1JLFdBQVdKLHlEQUFNQSxDQUFDSyxFQUFFOzs7Ozs7R0FDdEIsQ0FBQ0MsUUFDUkgsd0RBQVVBLENBQUM7UUFDVEksYUFBYUQsTUFBTUUsS0FBSztRQUN4QkMsVUFBVVAsMkRBQWNBO1FBQ3hCUSxjQUFjO0lBQ2hCLElBTUY7QUFFSyxNQUFNQyxlQUFlWCx5REFBTUEsQ0FBQ1ksQ0FBQzs7Ozs7O0dBQ3pCLENBQUNOLFFBQ1JILHdEQUFVQSxDQUFDO1FBQ1RJLGFBQWFELE1BQU1FLEtBQUs7UUFDeEJDLFVBQVVQLDJEQUFjQTtRQUN4QlEsY0FBYztJQUNoQixJQVNGO0FBRUssTUFBTUcsc0JBQXNCYiw2REFBTUEsQ0FBQ0Msb0RBQVdBOzs7OztHQUduRDtBQUVLLE1BQU1hLFVBQVVkLHlEQUFNQSxDQUFDZSxHQUFHOzs7OztHQVEvQjtBQVFLLE1BQU1DLFdBQVdoQix5REFBTUEsQ0FBQ2lCLElBQUk7Ozs7Ozs7OztHQUViLENBQUNYLFFBQVdBLE1BQU1ZLFNBQVMsR0FBR1osTUFBTVksU0FBUyxHQUFHLFFBQzFELENBQUNaLFFBQVdBLE1BQU1FLEtBQUssR0FBRyxRQUFvQixPQUFaRixNQUFNRSxLQUFLLEVBQUMsT0FBSyxTQUd2QyxDQUFDRixRQUFXQSxNQUFNYSxLQUFLLEdBQUcsR0FBZSxPQUFaYixNQUFNYSxLQUFLLEVBQUMsT0FBSyxRQVNuRCxDQUFDYixRQUNaQSxNQUFNYyxTQUFTLEdBQUcsY0FBMEIsT0FBWmQsTUFBTWEsS0FBSyxFQUFDLFFBQU0sbUJBR3hEO0FBRUssTUFBTUUsT0FBT3JCLHlEQUFNQSxDQUFDaUIsSUFBSTs7Ozs7R0FJN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zdHlsZS9zaW5lV2F2ZVN0eWxlLnRzeD8wMmI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEdyaWRXcmFwcGVyIH0gZnJvbSBcIi4vZ3JpZExheW91dFwiO1xuaW1wb3J0IHsgQ29yZUNvbG9ySW5wdXQsIERhcmtPdmVybGF5XzgwIH0gZnJvbSBcIi4vc3R5bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IEFycmF5UkdCQSwgQ29sb3JNaXhlciB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgSGVyb1RleHQgPSBzdHlsZWQuaDE8Q29yZUNvbG9ySW5wdXQ+YFxuICBjb2xvcjogJHsocHJvcHMpID0+XG4gICAgQ29sb3JNaXhlcih7XG4gICAgICBib3R0b21MYXllcjogcHJvcHMuY29sb3IsXG4gICAgICB0b3BMYXllcjogRGFya092ZXJsYXlfODAsXG4gICAgICByZXR1cm5Gb3JtYXQ6IFwicmdiYVwiLFxuICAgIH0pfTtcbiAgbWFyZ2luLXRvcDogMTI4cHg7XG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxMTtcbiAgZm9udC1zaXplOiA5NnB4O1xuICBmb250LXdlaWdodDogMzUwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlcm9TdWJ0aXRsZSA9IHN0eWxlZC5wPENvcmVDb2xvcklucHV0PmBcbiAgY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIENvbG9yTWl4ZXIoe1xuICAgICAgYm90dG9tTGF5ZXI6IHByb3BzLmNvbG9yLFxuICAgICAgdG9wTGF5ZXI6IERhcmtPdmVybGF5XzgwLFxuICAgICAgcmV0dXJuRm9ybWF0OiBcInJnYmFcIixcbiAgICB9KX07XG4gIGdyaWQtY29sdW1uOiA0IC8gc3BhbiA0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDI0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2luZVdhdmVHcmlkV3JhcHBlciA9IHN0eWxlZChHcmlkV3JhcHBlcilgXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAvLyBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpbmVTVkcgPSBzdHlsZWQuc3ZnYFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDA7XG5gO1xuXG50eXBlIE1vdmVQYXRoSW5wdXQgPSB7XG4gIGNvbG9yPzogQXJyYXlSR0JBO1xuICBzcGVlZD86IG51bWJlcjtcbiAgdHJhbnNmb3JtPzogbnVtYmVyO1xuICBkYXNoYXJyYXk/OiBzdHJpbmc7XG59O1xuZXhwb3J0IGNvbnN0IE1vdmVQYXRoID0gc3R5bGVkLnBhdGg8TW92ZVBhdGhJbnB1dD5gXG4gIHN0cm9rZS13aWR0aDogNHB4O1xuICBzdHJva2UtZGFzaGFycmF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmRhc2hhcnJheSA/IHByb3BzLmRhc2hhcnJheSA6IFwiMTcgOFwiKX07XG4gIHN0cm9rZTogJHsocHJvcHMpID0+IChwcm9wcy5jb2xvciA/IGByZ2JhKCR7cHJvcHMuY29sb3J9KWAgOiBcImJsYWNrXCIpfTtcbiAgZmlsbDogbm9uZTtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogJHsocHJvcHMpID0+IChwcm9wcy5zcGVlZCA/IGAke3Byb3BzLnNwZWVkfXNgIDogXCIxMjBzXCIpfTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblxuICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT5cbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID8gYHRyYW5zbGF0ZVgoJHtwcm9wcy5zcGVlZH0lKWAgOiBcIiB0cmFuc2xhdGVYKDAlKVwifTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBeGlzID0gc3R5bGVkLnBhdGhgXG4gIHN0cm9rZS13aWR0aDogMXB4O1xuICBzdHJva2U6IGJsYWNrO1xuICBmaWxsOiBub25lO1xuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJHcmlkV3JhcHBlciIsIkRhcmtPdmVybGF5XzgwIiwiQ29sb3JNaXhlciIsIkhlcm9UZXh0IiwiaDEiLCJwcm9wcyIsImJvdHRvbUxheWVyIiwiY29sb3IiLCJ0b3BMYXllciIsInJldHVybkZvcm1hdCIsIkhlcm9TdWJ0aXRsZSIsInAiLCJTaW5lV2F2ZUdyaWRXcmFwcGVyIiwiU2luZVNWRyIsInN2ZyIsIk1vdmVQYXRoIiwicGF0aCIsImRhc2hhcnJheSIsInNwZWVkIiwidHJhbnNmb3JtIiwiQXhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/style/sineWaveStyle.tsx\n"));

/***/ })

});