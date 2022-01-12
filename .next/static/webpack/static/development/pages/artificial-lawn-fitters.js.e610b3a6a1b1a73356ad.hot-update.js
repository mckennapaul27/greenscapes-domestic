webpackHotUpdate("static/development/pages/artificial-lawn-fitters.js",{

/***/ "./components/Layouts/NavBarThree.jsx":
/*!********************************************!*\
  !*** ./components/Layouts/NavBarThree.jsx ***!
  \********************************************/
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







var _jsxFileName = "/Users/user1/Documents/development/greenscapes/greenscapes-domestic/components/Layouts/NavBarThree.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var NavbarOne = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NavbarOne, _Component);

  var _super = _createSuper(NavbarOne);

  function NavbarOne() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarOne);

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarOne, [{
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
      window.scrollTo(0, 0); // this.menuActiveClass()
    } // menuActiveClass = () => {
    //     let mainNavLinks = document.querySelectorAll('nav ul li a');
    //     window.addEventListener('scroll', () => {
    //         let fromTop = window.scrollY;
    //         mainNavLinks.forEach(link => {
    //             if (link.hash){
    //                 let section = document.querySelector(link.hash);
    //                 if (
    //                     section.offsetTop <= fromTop &&
    //                     section.offsetTop + section.offsetHeight > fromTop
    //                 ) {
    //                     link.classList.add('active');
    //                 } else {
    //                     link.classList.remove('active');
    //                 }
    //             }
    //         });
    //     });
    // }

  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, __jsx("nav", {
        id: "navbar",
        className: "navbar navbar-expand-lg navbar-style-one navbar-light bg-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: "navbar-brand" // style={{
        //     width: '107px',
        //     height: '74px',
        //     backgroundColor: 'wheat',
        // }}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: '/greenscapes-artificial-grass-logo.svg',
        alt: "logo",
        style: {
          width: '107px',
          height: '74px',
          display: 'block'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 33
        }
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }
      }, __jsx("ul", {
        className: "navbar-nav ml-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 29
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 41
        }
      }, "Home"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 33
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.toggleNavbar,
        href: "#about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 41
        }
      }, "About"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/services",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 41
        }
      }, "Services"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/garden-maintenance",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 41
        }
      }, "Garden Maintenance"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/landscaping",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 41
        }
      }, "Landscaping"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/blog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 41
        }
      }, "Blog")))), __jsx("ul", {
        className: "others-option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 29
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/index#contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 37
        }
      }, __jsx("button", {
        className: "btn btn-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 41
        }
      }, "Contact Us"))))))));
    }
  }]);

  return NavbarOne;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavbarOne);

/***/ })

})
//# sourceMappingURL=artificial-lawn-fitters.js.e610b3a6a1b1a73356ad.hot-update.js.map