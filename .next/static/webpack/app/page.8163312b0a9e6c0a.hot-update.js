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

/***/ "(app-pages-browser)/./src/app/style/gridLayout.tsx":
/*!**************************************!*\
  !*** ./src/app/style/gridLayout.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FullWidthWrapper: function() { return /* binding */ FullWidthWrapper; },\n/* harmony export */   GridWrapper: function() { return /* binding */ GridWrapper; },\n/* harmony export */   PageWrapper: function() { return /* binding */ PageWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleConstants */ \"(app-pages-browser)/./src/app/style/styleConstants.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"(app-pages-browser)/./src/app/utils/utils.tsx\");\n/* __next_internal_client_entry_do_not_use__ PageWrapper,GridWrapper,FullWidthWrapper auto */ \n\n\nconst PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"gridLayout__PageWrapper\",\n    componentId: \"sc-a6a566a0-0\"\n})([\n    \"background-color:\",\n    \";z-index:1;position:relative;\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_0__.LightOverlay_95,\n        returnFormat: \"rgba\"\n    }));\nconst GridWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"gridLayout__GridWrapper\",\n    componentId: \"sc-a6a566a0-1\"\n})([\n    \"width:100%;max-width:1200px;margin:0px auto;position:relative;z-index:100;display:grid;grid-template-columns:0.5fr repeat(10,1fr) 0.5fr;column-gap:10px;row-gap:15px;@media screen and (max-width:768px){}@media screen and (max-width:480px){}\"\n]);\nconst FullWidthWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"gridLayout__FullWidthWrapper\",\n    componentId: \"sc-a6a566a0-2\"\n})([\n    \"grid-column:1 / span 12;\"\n]); // export const SingleColumn = styled.div`\n //   opacity: 0.1;\n //   height: 100vh;\n //   border: 1px dashed ${baseColor};\n //   border-top: 0px;\n //   grid-column: 1 span 2;\n //   border-bottom: 0px;\n //   color: grey;\n //   @media screen and (max-width: 768px) {\n //     border-color: blue;\n //   }\n //   @media screen and (max-width: 480px) {\n //     border-color: red;\n //   }\n // `;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGUvZ3JpZExheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzhGQUN1QztBQUM0QjtBQUN2QjtBQUVyQyxNQUFNRyxjQUFjSCx5REFBTUEsQ0FBQ0ksR0FBRzs7Ozs7O0dBQ2YsQ0FBQ0MsUUFDbkJILHdEQUFVQSxDQUFDO1FBQ1RJLGFBQWFELE1BQU1FLEtBQUs7UUFDeEJDLFVBQVVQLDREQUFlQTtRQUN6QlEsY0FBYztJQUNoQixJQUdGO0FBQ0ssTUFBTUMsY0FBY1YseURBQU1BLENBQUNJLEdBQUc7Ozs7O0dBY25DO0FBRUssTUFBTU8sbUJBQW1CWCx5REFBTUEsQ0FBQ0ksR0FBRzs7Ozs7R0FFeEMsQ0FFRiwwQ0FBMEM7Q0FDMUMsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixxQ0FBcUM7Q0FDckMscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBQ2pCLDJDQUEyQztDQUMzQywwQkFBMEI7Q0FDMUIsTUFBTTtDQUNOLDJDQUEyQztDQUMzQyx5QkFBeUI7Q0FDekIsTUFBTTtDQUNOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zdHlsZS9ncmlkTGF5b3V0LnRzeD8xY2FlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvcmVDb2xvcklucHV0LCBMaWdodE92ZXJsYXlfOTUgfSBmcm9tIFwiLi9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ29sb3JNaXhlciB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2PENvcmVDb2xvcklucHV0PmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XG4gICAgQ29sb3JNaXhlcih7XG4gICAgICBib3R0b21MYXllcjogcHJvcHMuY29sb3IsXG4gICAgICB0b3BMYXllcjogTGlnaHRPdmVybGF5Xzk1LFxuICAgICAgcmV0dXJuRm9ybWF0OiBcInJnYmFcIixcbiAgICB9KX07XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5leHBvcnQgY29uc3QgR3JpZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgMWZyKSAwLjVmcjtcbiAgY29sdW1uLWdhcDogMTBweDtcbiAgcm93LWdhcDogMTVweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRnVsbFdpZHRoV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxMjtcbmA7XG5cbi8vIGV4cG9ydCBjb25zdCBTaW5nbGVDb2x1bW4gPSBzdHlsZWQuZGl2YFxuLy8gICBvcGFjaXR5OiAwLjE7XG4vLyAgIGhlaWdodDogMTAwdmg7XG4vLyAgIGJvcmRlcjogMXB4IGRhc2hlZCAke2Jhc2VDb2xvcn07XG4vLyAgIGJvcmRlci10b3A6IDBweDtcbi8vICAgZ3JpZC1jb2x1bW46IDEgc3BhbiAyO1xuLy8gICBib3JkZXItYm90dG9tOiAwcHg7XG4vLyAgIGNvbG9yOiBncmV5O1xuLy8gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuLy8gICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcbi8vICAgfVxuLy8gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuLy8gICAgIGJvcmRlci1jb2xvcjogcmVkO1xuLy8gICB9XG4vLyBgO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpZ2h0T3ZlcmxheV85NSIsIkNvbG9yTWl4ZXIiLCJQYWdlV3JhcHBlciIsImRpdiIsInByb3BzIiwiYm90dG9tTGF5ZXIiLCJjb2xvciIsInRvcExheWVyIiwicmV0dXJuRm9ybWF0IiwiR3JpZFdyYXBwZXIiLCJGdWxsV2lkdGhXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/style/gridLayout.tsx\n"));

/***/ })

});