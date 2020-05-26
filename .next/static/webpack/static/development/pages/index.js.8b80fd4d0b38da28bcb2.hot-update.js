webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
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
/* harmony import */ var _utils_sib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/sib.helpers */ "./utils/sib.helpers.js");
/* harmony import */ var _utils_sib_helpers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_sib_helpers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _node_modules_react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../node_modules/react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _node_modules_react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Contact = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
      submitted: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleInputChange", function (e) {
      var target = e.target;
      var name = e.target.name;
      var value = target.value;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function () {
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email,
          subject = _this$state.subject,
          phone = _this$state.phone,
          message = _this$state.message;

      _this.setState({
        submitted: true
      }, function () {
        // sendContactForm (name, email, subject, phone, message)
        react_toastify__WEBPACK_IMPORTED_MODULE_10__["toast"].success("Thanks ".concat(name, ". We have received your message and will be in contact very soon."));
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          email = _this$state2.email,
          subject = _this$state2.subject,
          phone = _this$state2.phone,
          message = _this$state2.message;
      var disabled = name === '' || email === '' || subject === '' || phone === '' || message === '';
      return __jsx("section", {
        id: "contact",
        className: "contact-area ptb-100 bg-f9f9f9"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "section-title"
      }, __jsx("h2", null, "Contact Us"), __jsx("p", null, "Greenscapes are a Cheshire based garden maintenanace and landscaping company, that covers all South Manchester and surrounding areas.")), __jsx("div", {
        className: "row align-items-center"
      }, __jsx("div", {
        className: "col-lg-8 col-md-12"
      }, __jsx("form", null, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-lg-6 col-md-6"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Name"), __jsx("input", {
        type: "text",
        className: "form-control",
        required: true,
        "data-error": "Please enter your name",
        name: 'name',
        onChange: this.handleInputChange
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-6 col-md-6"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Email"), __jsx("input", {
        type: "email",
        className: "form-control",
        required: true,
        "data-error": "Please enter your email",
        name: 'email',
        onChange: this.handleInputChange
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-6 col-md-6"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Subject"), __jsx("input", {
        type: "text",
        className: "form-control",
        required: true,
        "data-error": "Please enter your subject",
        name: 'subject',
        onChange: this.handleInputChange
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-6 col-md-6"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Phone Number"), __jsx("input", {
        type: "text",
        className: "form-control",
        required: true,
        "data-error": "Please enter your number",
        name: 'phone',
        onChange: this.handleInputChange
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Message"), __jsx("textarea", {
        className: "form-control",
        cols: "30",
        rows: "4",
        required: true,
        "data-error": "Write your message",
        name: 'message',
        onChange: this.handleInputChange
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("button", {
        type: "submit",
        className: "btn btn-primary",
        onClick: this.handleSubmit
      }, "Send Message"), __jsx("br", null), this.state.submitted && __jsx("div", {
        className: "clearfix"
      }, __jsx("span", null, "We have received your message ", __jsx("i", {
        className: "fa fa-check-circle"
      }))))))), __jsx("div", {
        className: "col-lg-4 col-md-12"
      }, __jsx("address", {
        className: "contact-info-box"
      }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
        className: "fas fa-map-marker-alt"
      }), __jsx("span", null, "Address:"), "Seal Rd, Bramhall, Stockport SK7 2LL, UK"), __jsx("li", null, __jsx("i", {
        className: "fas fa-envelope"
      }), __jsx("span", null, "Email:"), __jsx("a", {
        href: "mailto:simon@greenscapes-gardening.co.uk"
      }, "simon@greenscapes-gardening.co.uk")), __jsx("li", null, __jsx("i", {
        className: "fas fa-phone"
      }), __jsx("span", null, "Phone:"), __jsx("a", {
        href: "tel:07772 656034"
      }, "07772 656034"), __jsx("a", {
        href: "tel:0161 425 0035"
      }, "0161 425 0035")), __jsx("li", null, __jsx("i", {
        className: "fas fa-globe"
      }), __jsx("span", null, "Website:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, __jsx("a", null, "https://greenscapes-gardening.co.uk/"))))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_10__["ToastContainer"], {
        position: 'bottom-left',
        autoClose: 5000
      })));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.8b80fd4d0b38da28bcb2.hot-update.js.map