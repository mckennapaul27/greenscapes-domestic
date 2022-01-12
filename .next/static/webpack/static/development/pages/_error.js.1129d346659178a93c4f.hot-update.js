webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/Layouts/NavbarTwo.js":
/*!*****************************************!*\
  !*** ./components/Layouts/NavbarTwo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var NavbarTwo = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NavbarTwo, _Component);

  var _super = _createSuper(NavbarTwo);

  function NavbarTwo() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarTwo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      collapsed: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarTwo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var elementId = document.getElementById('navbar');
      document.addEventListener('scroll', function () {
        if (window.scrollY > 170) {
          elementId.classList.add('is-sticky');
        } else {
          elementId.classList.remove('is-sticky');
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("nav", {
        id: "navbar",
        className: "navbar navbar-expand-lg navbar-style-one navbar-light bg-light"
      }, __jsx("div", {
        className: "container"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, __jsx("a", {
        className: "navbar-brand"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/greenscapes-test.png */ "./images/greenscapes-test.png"),
        alt: "logo",
        style: {
          maxWidth: '150px'
        }
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/gardening-logo-transparent.png */ "./images/gardening-logo-transparent.png"),
        alt: "logo",
        style: {
          maxWidth: '150px'
        }
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, __jsx("span", {
        className: "navbar-toggler-icon"
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, __jsx("ul", {
        className: "navbar-nav ml-auto"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, __jsx("a", {
        className: "nav-link"
      }, "Home"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/#about"
      }, __jsx("a", {
        className: "nav-link"
      }, "About"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/services"
      }, __jsx("a", {
        className: "nav-link"
      }, "Services"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/garden-maintenance"
      }, __jsx("a", {
        className: "nav-link"
      }, "Garden Maintenance"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/landscaping"
      }, __jsx("a", {
        className: "nav-link"
      }, "Landscaping"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/blog"
      }, __jsx("a", {
        className: "nav-link"
      }, "Blog")))), __jsx("ul", {
        className: "others-option"
      }, __jsx("li", null, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.toggleNavbar,
        href: "#contact"
      }, __jsx("button", {
        className: "btn btn-primary"
      }, "Contact Us"))))))));
    }
  }]);

  return NavbarTwo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavbarTwo);

/***/ }),

/***/ "./images/404.png":
/*!************************!*\
  !*** ./images/404.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/404-10a47ef7f85b7727abebbda1beb87167.png";

/***/ }),

/***/ "./images/gardening-logo-transparent.png":
/*!***********************************************!*\
  !*** ./images/gardening-logo-transparent.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-logo-transparent-c4957dd4799f0f92a629f0593d67f24d.png";

/***/ }),

/***/ "./images/greenscapes-test.png":
/*!*************************************!*\
  !*** ./images/greenscapes-test.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/greenscapes-test-9b24b0ac7d27e43c587dce823df9ef9d.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fuser1%2FDocuments%2Fdevelopment%2Fgreenscapes%2Fgreenscapes-domestic%2Fpages%2F_error.js!./":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fuser1%2FDocuments%2Fdevelopment%2Fgreenscapes%2Fgreenscapes-domestic%2Fpages%2F_error.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layouts_NavbarTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layouts/NavbarTwo */ "./components/Layouts/NavbarTwo.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Error = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Error, _React$Component);

  var _super = _createSuper(Error);

  function Error() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Error);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Error, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_components_Layouts_NavbarTwo__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx("section", {
        className: "page-title-area jarallax",
        "data-jarallax": "{\"speed\": 0.2}"
      }, __jsx("div", {
        className: "container"
      }, __jsx("h2", null, this.props.statusCode, " Error"))), __jsx("section", {
        className: "error-area ptb-100"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "error-content"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../images/404.png */ "./images/404.png"),
        alt: "error"
      }), __jsx("form", {
        className: "search-form"
      }, __jsx("input", {
        type: "text",
        className: "search-field",
        placeholder: "search"
      }), __jsx("button", {
        type: "submit",
        className: "search-submit"
      }, "Search"))))), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 7:
/*!**************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fuser1%2FDocuments%2Fdevelopment%2Fgreenscapes%2Fgreenscapes-domestic%2Fpages%2F_error.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fuser1%2FDocuments%2Fdevelopment%2Fgreenscapes%2Fgreenscapes-domestic%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fuser1%2FDocuments%2Fdevelopment%2Fgreenscapes%2Fgreenscapes-domestic%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.1129d346659178a93c4f.hot-update.js.map