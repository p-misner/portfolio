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

/***/ "(app-pages-browser)/./src/app/style/projectsStyle.tsx":
/*!*****************************************!*\
  !*** ./src/app/style/projectsStyle.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FullWidthProject: function() { return /* binding */ FullWidthProject; },\n/* harmony export */   OneThirdProject: function() { return /* binding */ OneThirdProject; },\n/* harmony export */   RightHalfProject: function() { return /* binding */ RightHalfProject; },\n/* harmony export */   TwoThirdProject: function() { return /* binding */ TwoThirdProject; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleConstants */ \"(app-pages-browser)/./src/app/style/styleConstants.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"(app-pages-browser)/./src/app/utils/utils.tsx\");\n/* __next_internal_client_entry_do_not_use__ FullWidthProject,TwoThirdProject,OneThirdProject,RightHalfProject auto */ \n\n\n// const ProjectWrapper = styled.div<ProjectStyleInput>`\n//   border: ${borderWidth} solid ${baseColor};\n//   color: ${(props) => (props.filled == \"true\" ? lightBackground : textColor)};\n//   border-radius: 16px;\n//   background-color: ${(props) =>\n//     props.filled == \"true\" ? baseColor : lightBackground};\n//   min-height: 350px;\n// `;\nconst FullWidthProject = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"projectsStyle__FullWidthProject\",\n    componentId: \"sc-9944df3-0\"\n})([\n    \"border:\",\n    \" solid \",\n    \";color:\",\n    \";border-radius:16px;background-color:\",\n    \";min-height:350px;grid-column:2 / span 10;\"\n], _styleConstants__WEBPACK_IMPORTED_MODULE_0__.borderWidth, (props)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.ColorMixer)({\n        bottomLayer: props.color,\n        topLayer: props.color,\n        returnFormat: \"rgba\"\n    }), (props)=>props.filled == \"true\" ? lightBackground : textColor, (props)=>props.filled == \"true\" ? baseColor : lightBackground);\nconst TwoThirdProject = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProjectWrapper).withConfig({\n    displayName: \"projectsStyle__TwoThirdProject\",\n    componentId: \"sc-9944df3-1\"\n})([\n    \"grid-column:2 / span 6;\"\n]);\nconst OneThirdProject = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProjectWrapper).withConfig({\n    displayName: \"projectsStyle__OneThirdProject\",\n    componentId: \"sc-9944df3-2\"\n})([\n    \"grid-column:8 / span 4;\"\n]);\nconst RightHalfProject = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProjectWrapper).withConfig({\n    displayName: \"projectsStyle__RightHalfProject\",\n    componentId: \"sc-9944df3-3\"\n})([\n    \"grid-column:7 / span 5;\"\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGUvcHJvamVjdHNTdHlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozt1SEFDdUM7QUFFd0I7QUFDUjtBQU92RCx3REFBd0Q7QUFDeEQsK0NBQStDO0FBQy9DLGlGQUFpRjtBQUNqRix5QkFBeUI7QUFDekIsbUNBQW1DO0FBQ25DLDZEQUE2RDtBQUM3RCx1QkFBdUI7QUFDdkIsS0FBSztBQUNFLE1BQU1HLG1CQUFtQkgseURBQU1BLENBQUNJLEdBQUc7Ozs7Ozs7OztHQUM5Qkgsd0RBQVdBLEVBQ2pCLENBQUNJLFFBQ0RILHdEQUFVQSxDQUFDO1FBQ1RJLGFBQWFELE1BQU1FLEtBQUs7UUFDeEJDLFVBQVVILE1BQU1FLEtBQUs7UUFDckJFLGNBQWM7SUFDaEIsSUFDSyxDQUFDSixRQUFXQSxNQUFNSyxNQUFNLElBQUksU0FBU0Msa0JBQWtCQyxXQUU1QyxDQUFDUCxRQUNuQkEsTUFBTUssTUFBTSxJQUFJLFNBQVNHLFlBQVlGLGlCQUd2QztBQUVLLE1BQU1HLGtCQUFrQmQsNkRBQU1BLENBQUNlOzs7OztHQUVwQztBQUNLLE1BQU1DLGtCQUFrQmhCLDZEQUFNQSxDQUFDZTs7Ozs7R0FFcEM7QUFDSyxNQUFNRSxtQkFBbUJqQiw2REFBTUEsQ0FBQ2U7Ozs7O0dBRXJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGUvcHJvamVjdHNTdHlsZS50c3g/ZTRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBHcmlkV3JhcHBlciB9IGZyb20gXCIuL2dyaWRMYXlvdXRcIjtcbmltcG9ydCB7IGJvcmRlcldpZHRoLCBDb3JlQ29sb3JJbnB1dCB9IGZyb20gXCIuL3N0eWxlQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBcnJheVJHQkEsIENvbG9yTWl4ZXIgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcblxudHlwZSBQcm9qZWN0U3R5bGVJbnB1dCA9IHtcbiAgZmlsbGVkPzogXCJ0cnVlXCIgfCBcImZhbHNlXCI7XG4gIGNvbG9yOiBBcnJheVJHQkE7XG59O1xuXG4vLyBjb25zdCBQcm9qZWN0V3JhcHBlciA9IHN0eWxlZC5kaXY8UHJvamVjdFN0eWxlSW5wdXQ+YFxuLy8gICBib3JkZXI6ICR7Ym9yZGVyV2lkdGh9IHNvbGlkICR7YmFzZUNvbG9yfTtcbi8vICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZmlsbGVkID09IFwidHJ1ZVwiID8gbGlnaHRCYWNrZ3JvdW5kIDogdGV4dENvbG9yKX07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxuLy8gICAgIHByb3BzLmZpbGxlZCA9PSBcInRydWVcIiA/IGJhc2VDb2xvciA6IGxpZ2h0QmFja2dyb3VuZH07XG4vLyAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuLy8gYDtcbmV4cG9ydCBjb25zdCBGdWxsV2lkdGhQcm9qZWN0ID0gc3R5bGVkLmRpdjxQcm9qZWN0U3R5bGVJbnB1dD5gXG4gIGJvcmRlcjogJHtib3JkZXJXaWR0aH0gc29saWRcbiAgICAkeyhwcm9wcykgPT5cbiAgICAgIENvbG9yTWl4ZXIoe1xuICAgICAgICBib3R0b21MYXllcjogcHJvcHMuY29sb3IsXG4gICAgICAgIHRvcExheWVyOiBwcm9wcy5jb2xvcixcbiAgICAgICAgcmV0dXJuRm9ybWF0OiBcInJnYmFcIixcbiAgICAgIH0pfTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZmlsbGVkID09IFwidHJ1ZVwiID8gbGlnaHRCYWNrZ3JvdW5kIDogdGV4dENvbG9yKX07XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmZpbGxlZCA9PSBcInRydWVcIiA/IGJhc2VDb2xvciA6IGxpZ2h0QmFja2dyb3VuZH07XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTA7XG5gO1xuXG5leHBvcnQgY29uc3QgVHdvVGhpcmRQcm9qZWN0ID0gc3R5bGVkKFByb2plY3RXcmFwcGVyKWBcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDY7XG5gO1xuZXhwb3J0IGNvbnN0IE9uZVRoaXJkUHJvamVjdCA9IHN0eWxlZChQcm9qZWN0V3JhcHBlcilgXG4gIGdyaWQtY29sdW1uOiA4IC8gc3BhbiA0O1xuYDtcbmV4cG9ydCBjb25zdCBSaWdodEhhbGZQcm9qZWN0ID0gc3R5bGVkKFByb2plY3RXcmFwcGVyKWBcbiAgZ3JpZC1jb2x1bW46IDcgLyBzcGFuIDU7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsImJvcmRlcldpZHRoIiwiQ29sb3JNaXhlciIsIkZ1bGxXaWR0aFByb2plY3QiLCJkaXYiLCJwcm9wcyIsImJvdHRvbUxheWVyIiwiY29sb3IiLCJ0b3BMYXllciIsInJldHVybkZvcm1hdCIsImZpbGxlZCIsImxpZ2h0QmFja2dyb3VuZCIsInRleHRDb2xvciIsImJhc2VDb2xvciIsIlR3b1RoaXJkUHJvamVjdCIsIlByb2plY3RXcmFwcGVyIiwiT25lVGhpcmRQcm9qZWN0IiwiUmlnaHRIYWxmUHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/style/projectsStyle.tsx\n"));

/***/ })

});