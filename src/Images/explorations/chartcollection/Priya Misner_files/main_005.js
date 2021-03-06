webpackHotUpdate("main",{

/***/ "./src/HomePage/Navigation.js":
/*!************************************!*\
  !*** ./src/HomePage/Navigation.js ***!
  \************************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/priyamisner/Documents/PersonalProjects/portfolio/src/HomePage/Navigation.js",
    _s = __webpack_require__.$Refresh$.signature();





const NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav`
  background-color:#ffffff;
  width: 100vw;
  z-index:10;

`;
_c = NavWrapper;
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul`
  width: 90vw;
  margin: 0 auto;
  list-style: none;
  margin-top: 0px;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  // background-color:orange;
  
`;
_c2 = NavList;
const Logo = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  margin-left: auto;
  text-decoration: none;
`;
_c3 = Logo;
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li`
  margin: 0px 24px;
  cursor:pointer;
  
`;
_c4 = ListItem;
const DropdownMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    display:flex;
    flex-direction:column;
    max-width:78px;
    position:fixed;

  `;
_c5 = DropdownMenu;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  font-size:17px
  @media(max-width:800px){
    font-size:15px;
  }
`;
_c6 = Label;
function NavBar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavList, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ListItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Logo, {
          to: "/",
          children: " priyamisner "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ListItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Card, {
          label: "work \u2938",
          items: [{
            link: "/justaccessibility",
            title: "Geographic Viz"
          }, {
            link: "/rse",
            title: "Redesigning Results"
          }, {
            link: "/vrdriving",
            title: "VR Driving"
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ListItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Card, {
          label: "explorations \u2938",
          items: [{
            link: "/networkflow",
            title: "Network Flow"
          }, {
            link: "/pandemicmario",
            title: "Pandemic Mario"
          }, {
            link: "/chartcollection",
            title: "Charts"
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
_c7 = NavBar;

function Card({
  label,
  items
}) {
  _s();

  const [menuOpen, setMenuOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const DropdownLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
    text-decoration: none;
    background-color:#ffffff;
    clear:right;
    width:200px;
    padding:15px 0px 8px 0px;
  `;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    onMouseEnter: () => setMenuOpen(true),
    onClick: () => setMenuOpen(!menuOpen),
    onMouseLeave: () => setMenuOpen(false),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Label, {
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), menuOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(DropdownMenu, {
      onClick: () => setMenuOpen(false),
      children: items.map(item => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(DropdownLink, {
          to: item.link,
          children: item.title
        }, item.link, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 24
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

_s(Card, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");

_c8 = Card;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

__webpack_require__.$Refresh$.register(_c, "NavWrapper");
__webpack_require__.$Refresh$.register(_c2, "NavList");
__webpack_require__.$Refresh$.register(_c3, "Logo");
__webpack_require__.$Refresh$.register(_c4, "ListItem");
__webpack_require__.$Refresh$.register(_c5, "DropdownMenu");
__webpack_require__.$Refresh$.register(_c6, "Label");
__webpack_require__.$Refresh$.register(_c7, "NavBar");
__webpack_require__.$Refresh$.register(_c8, "Card");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.45eb1490d1ecb906b31a.hot-update.js.map