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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ColorPickerWrapper: function() { return /* binding */ ColorPickerWrapper; },\n/* harmony export */   ControlPanelWrapper: function() { return /* binding */ ControlPanelWrapper; },\n/* harmony export */   Hue: function() { return /* binding */ Hue; },\n/* harmony export */   HueWrapper: function() { return /* binding */ HueWrapper; },\n/* harmony export */   SettingsButton: function() { return /* binding */ SettingsButton; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleConstants */ \"(app-pages-browser)/./src/app/style/styleConstants.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"(app-pages-browser)/./src/app/utils/utils.tsx\");\n/* __next_internal_client_entry_do_not_use__ SettingsButton,ColorPickerWrapper,ControlPanelWrapper,HueWrapper,Hue auto */ \n\n\nconst SettingsButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n    displayName: \"controlsStyle__SettingsButton\",\n    componentId: \"sc-17e91c13-0\"\n})([\n    \"border:1px solid \",\n    \";width:24px;height:24px;\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_0__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\nconst ColorPickerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"controlsStyle__ColorPickerWrapper\",\n    componentId: \"sc-17e91c13-1\"\n})([\n    \"width:24px;height:192px;\"\n]);\nconst ControlPanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"controlsStyle__ControlPanelWrapper\",\n    componentId: \"sc-17e91c13-2\"\n})([\n    \"position:fixed;z-index:20;display:flex;flex-direction:column;row-gap:8px;top:20px;left:20px;\"\n]);\nconst HueWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"controlsStyle__HueWrapper\",\n    componentId: \"sc-17e91c13-3\"\n})([\n    \"height:192px;width:24px;margin:10px 0;\"\n]);\nconst Hue = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"controlsStyle__Hue\",\n    componentId: \"sc-17e91c13-4\"\n})([\n    \"width:100%;height:100%;border-radius:4px;position:relative;border:1px solid \",\n    \";background:linear-gradient( to bottom,hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%) );display:flex;align-items:center;& span{position:absolute;left:4px;width:12px;height:12px;border-radius:16px;background-color:\",\n    \";border:2px solid \",\n    \";}\"\n], (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_0__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }), (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: props.color,\n        returnFormat: \"rgba\"\n    }), (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: _styleConstants__WEBPACK_IMPORTED_MODULE_0__.DarkOverlay_80,\n        returnFormat: \"rgba\"\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGUvY29udHJvbHNTdHlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7MEhBQ3VDO0FBT2I7QUFDa0I7QUFFckMsTUFBTUssaUJBQWlCTCx5REFBTUEsQ0FBQ00sTUFBTTs7Ozs7O0dBRXJDLENBQUNDLFFBQ0RILHdEQUFVQSxDQUFDO1FBQ1RJLGFBQWFELE1BQU1FLEtBQUs7UUFDeEJDLFVBQVVSLDJEQUFjQTtRQUN4QlMsY0FBYztJQUNoQixJQUdKO0FBRUssTUFBTUMscUJBQXFCWix5REFBTUEsQ0FBQ2EsR0FBRzs7Ozs7R0FLMUM7QUFFSyxNQUFNQyxzQkFBc0JkLHlEQUFNQSxDQUFDYSxHQUFHOzs7OztHQVMzQztBQUVLLE1BQU1FLGFBQWFmLHlEQUFNQSxDQUFDYSxHQUFHOzs7OztHQUlsQztBQUVLLE1BQU1HLE1BQU1oQix5REFBTUEsQ0FBQ2EsR0FBRzs7Ozs7Ozs7R0FNdkIsQ0FBQ04sUUFDREgsd0RBQVVBLENBQUM7UUFDVEksYUFBYUQsTUFBTUUsS0FBSztRQUN4QkMsVUFBVVIsMkRBQWNBO1FBQ3hCUyxjQUFjO0lBQ2hCLElBa0JrQixDQUFDSixRQUNuQkgsd0RBQVVBLENBQUM7UUFDVEksYUFBYUQsTUFBTUUsS0FBSztRQUN4QkMsVUFBVUgsTUFBTUUsS0FBSztRQUNyQkUsY0FBYztJQUNoQixJQUVFLENBQUNKLFFBQ0RILHdEQUFVQSxDQUFDO1FBQ1RJLGFBQWFELE1BQU1FLEtBQUs7UUFDeEJDLFVBQVVSLDJEQUFjQTtRQUN4QlMsY0FBYztJQUNoQixJQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGUvY29udHJvbHNTdHlsZS50c3g/ZGY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBiYXNlQ29sb3IsXG4gIENvcmVDb2xvcklucHV0LFxuICBEYXJrT3ZlcmxheV84MCxcbiAgbGlnaHRCYWNrZ3JvdW5kLFxuICB0ZXh0Q29sb3IsXG59IGZyb20gXCIuL3N0eWxlQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDb2xvck1peGVyIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nc0J1dHRvbiA9IHN0eWxlZC5idXR0b248Q29yZUNvbG9ySW5wdXQ+YFxuICBib3JkZXI6IDFweCBzb2xpZFxuICAgICR7KHByb3BzKSA9PlxuICAgICAgQ29sb3JNaXhlcih7XG4gICAgICAgIGJvdHRvbUxheWVyOiBwcm9wcy5jb2xvcixcbiAgICAgICAgdG9wTGF5ZXI6IERhcmtPdmVybGF5XzgwLFxuICAgICAgICByZXR1cm5Gb3JtYXQ6IFwicmdiYVwiLFxuICAgICAgfSl9O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbG9yUGlja2VyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICR7YmFzZUNvbG9yfTtcbiAgLy8gZmlsbDogJHtsaWdodEJhY2tncm91bmR9XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDE5MnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRyb2xQYW5lbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDhweDtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEh1ZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDE5MnB4O1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSHVlID0gc3R5bGVkLmRpdjxDb3JlQ29sb3JJbnB1dD5gXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZFxuICAgICR7KHByb3BzKSA9PlxuICAgICAgQ29sb3JNaXhlcih7XG4gICAgICAgIGJvdHRvbUxheWVyOiBwcm9wcy5jb2xvcixcbiAgICAgICAgdG9wTGF5ZXI6IERhcmtPdmVybGF5XzgwLFxuICAgICAgICByZXR1cm5Gb3JtYXQ6IFwicmdiYVwiLFxuICAgICAgfSl9O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgIGhzbCg2MCwgMTAwJSwgNTAlKSxcbiAgICBoc2woMTIwLCAxMDAlLCA1MCUpLFxuICAgIGhzbCgxODAsIDEwMCUsIDUwJSksXG4gICAgaHNsKDI0MCwgMTAwJSwgNTAlKSxcbiAgICBoc2woMzAwLCAxMDAlLCA1MCUpXG4gICk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNHB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxuICAgICAgQ29sb3JNaXhlcih7XG4gICAgICAgIGJvdHRvbUxheWVyOiBwcm9wcy5jb2xvcixcbiAgICAgICAgdG9wTGF5ZXI6IHByb3BzLmNvbG9yLFxuICAgICAgICByZXR1cm5Gb3JtYXQ6IFwicmdiYVwiLFxuICAgICAgfSl9O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkXG4gICAgICAkeyhwcm9wcykgPT5cbiAgICAgICAgQ29sb3JNaXhlcih7XG4gICAgICAgICAgYm90dG9tTGF5ZXI6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIHRvcExheWVyOiBEYXJrT3ZlcmxheV84MCxcbiAgICAgICAgICByZXR1cm5Gb3JtYXQ6IFwicmdiYVwiLFxuICAgICAgICB9KX07XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiYmFzZUNvbG9yIiwiRGFya092ZXJsYXlfODAiLCJsaWdodEJhY2tncm91bmQiLCJDb2xvck1peGVyIiwiU2V0dGluZ3NCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImJvdHRvbUxheWVyIiwiY29sb3IiLCJ0b3BMYXllciIsInJldHVybkZvcm1hdCIsIkNvbG9yUGlja2VyV3JhcHBlciIsImRpdiIsIkNvbnRyb2xQYW5lbFdyYXBwZXIiLCJIdWVXcmFwcGVyIiwiSHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/style/controlsStyle.tsx\n"));

/***/ })

});