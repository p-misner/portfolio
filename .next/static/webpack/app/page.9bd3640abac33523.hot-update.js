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

/***/ "(app-pages-browser)/./src/app/style/controlsStyle.tsx":
/*!*****************************************!*\
  !*** ./src/app/style/controlsStyle.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ColorPickerWrapper: function() { return /* binding */ ColorPickerWrapper; },\n/* harmony export */   ControlPanelWrapper: function() { return /* binding */ ControlPanelWrapper; },\n/* harmony export */   Hue: function() { return /* binding */ Hue; },\n/* harmony export */   HueWrapper: function() { return /* binding */ HueWrapper; },\n/* harmony export */   SettingsButton: function() { return /* binding */ SettingsButton; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleConstants */ \"(app-pages-browser)/./src/app/style/styleConstants.tsx\");\n/* __next_internal_client_entry_do_not_use__ SettingsButton,ColorPickerWrapper,ControlPanelWrapper,HueWrapper,Hue auto */ \n\nconst SettingsButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n    displayName: \"controlsStyle__SettingsButton\",\n    componentId: \"sc-a2b39c82-0\"\n})([\n    \"border:4px solid \",\n    \";width:12px;height:24px;\"\n], (props)=>props.color);\nconst ColorPickerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"controlsStyle__ColorPickerWrapper\",\n    componentId: \"sc-a2b39c82-1\"\n})([\n    \"border:1px solid \",\n    \";fill:\",\n    \" width:24px;height:192px;\"\n], _styleConstants__WEBPACK_IMPORTED_MODULE_0__.baseColor, _styleConstants__WEBPACK_IMPORTED_MODULE_0__.lightBackground);\nconst ControlPanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"controlsStyle__ControlPanelWrapper\",\n    componentId: \"sc-a2b39c82-2\"\n})([\n    \"position:fixed;z-index:20;display:flex;flex-direction:column;row-gap:8px;top:20px;left:20px;\"\n]);\nconst HueWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"controlsStyle__HueWrapper\",\n    componentId: \"sc-a2b39c82-3\"\n})([\n    \"height:192px;width:24px;margin:10px 0;\"\n]);\nconst Hue = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"controlsStyle__Hue\",\n    componentId: \"sc-a2b39c82-4\"\n})([\n    \"width:100%;height:100%;border-radius:4px;position:relative;border:1px solid \",\n    \";background:linear-gradient( to bottom,hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%) );display:flex;align-items:center;& span{position:absolute;left:4px;width:12px;height:12px;border-radius:16px;background-color:\",\n    \";border:2px solid \",\n    \";}\"\n], _styleConstants__WEBPACK_IMPORTED_MODULE_0__.textColor, _styleConstants__WEBPACK_IMPORTED_MODULE_0__.baseColor, _styleConstants__WEBPACK_IMPORTED_MODULE_0__.textColor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGUvY29udHJvbHNTdHlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzswSEFDdUM7QUFNYjtBQUVuQixNQUFNSSxpQkFBaUJKLHlEQUFNQSxDQUFDSyxNQUFNOzs7Ozs7R0FDckIsQ0FBQ0MsUUFBVUEsTUFBTUMsS0FBSyxFQUcxQztBQUVLLE1BQU1DLHFCQUFxQlIseURBQU1BLENBQUNTLEdBQUc7Ozs7Ozs7R0FDdEJSLHNEQUFTQSxFQUNyQkMsNERBQWVBLEVBSXZCO0FBRUssTUFBTVEsc0JBQXNCVix5REFBTUEsQ0FBQ1MsR0FBRzs7Ozs7R0FTM0M7QUFFSyxNQUFNRSxhQUFhWCx5REFBTUEsQ0FBQ1MsR0FBRzs7Ozs7R0FJbEM7QUFFSyxNQUFNRyxNQUFNWix5REFBTUEsQ0FBQ1MsR0FBRzs7Ozs7Ozs7R0FLUE4sc0RBQVNBLEVBa0JQRixzREFBU0EsRUFDVEUsc0RBQVNBLEVBRS9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGUvY29udHJvbHNTdHlsZS50c3g/ZGY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBiYXNlQ29sb3IsXG4gIENvcmVDb2xvcklucHV0LFxuICBsaWdodEJhY2tncm91bmQsXG4gIHRleHRDb2xvcixcbn0gZnJvbSBcIi4vc3R5bGVDb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxDb3JlQ29sb3JJbnB1dD5gXG4gIGJvcmRlcjogNHB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDI0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29sb3JQaWNrZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgJHtiYXNlQ29sb3J9O1xuICBmaWxsOiAke2xpZ2h0QmFja2dyb3VuZH1cbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMTkycHg7XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250cm9sUGFuZWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiA4cHg7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBIdWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxOTJweDtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbjogMTBweCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEh1ZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3RleHRDb2xvcn07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgaHNsKDYwLCAxMDAlLCA1MCUpLFxuICAgIGhzbCgxMjAsIDEwMCUsIDUwJSksXG4gICAgaHNsKDE4MCwgMTAwJSwgNTAlKSxcbiAgICBoc2woMjQwLCAxMDAlLCA1MCUpLFxuICAgIGhzbCgzMDAsIDEwMCUsIDUwJSlcbiAgKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0cHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYXNlQ29sb3J9O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7dGV4dENvbG9yfTtcbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJiYXNlQ29sb3IiLCJsaWdodEJhY2tncm91bmQiLCJ0ZXh0Q29sb3IiLCJTZXR0aW5nc0J1dHRvbiIsImJ1dHRvbiIsInByb3BzIiwiY29sb3IiLCJDb2xvclBpY2tlcldyYXBwZXIiLCJkaXYiLCJDb250cm9sUGFuZWxXcmFwcGVyIiwiSHVlV3JhcHBlciIsIkh1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/style/controlsStyle.tsx\n"));

/***/ })

});