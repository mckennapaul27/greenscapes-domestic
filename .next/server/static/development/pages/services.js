module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/react-image-gallery/styles/css/image-gallery.css */ "./node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var _node_modules_react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ "react-image-gallery");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Carousel = ({
  images,
  showThumbnails
}) => __jsx(react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default.a, {
  items: images,
  showThumbnails: showThumbnails
});

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_sib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sib.helpers */ "./utils/sib.helpers.js");
/* harmony import */ var _utils_sib_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_sib_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _node_modules_react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
      submitted: false
    });

    _defineProperty(this, "handleInputChange", e => {
      const target = e.target;
      const name = e.target.name;
      const value = target.value;
      this.setState({
        [name]: value
      });
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const {
        name,
        email,
        subject,
        phone,
        message
      } = this.state;
      this.setState({
        submitted: true
      }, () => {
        Object(_utils_sib_helpers__WEBPACK_IMPORTED_MODULE_2__["sendContactForm"])(name, email, subject, phone, message);
        Object(_utils_sib_helpers__WEBPACK_IMPORTED_MODULE_2__["createNewContact"])(name, email, subject, phone, message);
        react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success(`Thanks ${name}. We have received your message and will be in contact very soon.`);
      });
    });
  }

  render() {
    const {
      name,
      email,
      subject,
      phone,
      message
    } = this.state;
    const disabled = name === '' || email === '' || subject === '' || phone === '' || message === '';
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
    }, __jsx("form", {
      id: "contactForm"
    }, __jsx("div", {
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
    }, "Send Message"), __jsx("div", {
      id: "msgSubmit",
      className: "h3 text-center hidden"
    }), __jsx("br", null), this.state.submitted && __jsx("div", {
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
    }), __jsx("span", null, "Website:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, "https://www.greenscapes-gardening.co.uk/"))))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
      position: 'bottom-left',
      autoClose: 5000
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      className: "footer-area bg-fffcf4"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/agency"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/gardening-logo-transparent.png */ "./images/gardening-logo-transparent.png"),
      style: {
        maxWidth: '150px'
      }
    })))), __jsx("ul", {
      className: "contact-info"
    }, __jsx("li", null, "Seal Rd, Bramhall, Stockport"), __jsx("li", null, __jsx("a", {
      href: "tel:07772 656034"
    }, "07772 656034"), __jsx("a", {
      href: "tel:0161 425 0035"
    }, "0161 425 0035")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "simon@greenscapes-gardening.co.uk"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "https://www.greenscapes-gardening.co.uk")))))), __jsx("div", {
      className: "col-lg-2 col-md-6"
    }), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-3"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, "Home"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/services"
    }, __jsx("a", null, "Projects"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("a", null, "Blog"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/#testimonials"
    }, __jsx("a", null, "Testimonial"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/#contact"
    }, __jsx("a", null, "Contact")))))), __jsx("div", {
      className: "col-lg-2 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-3"
    }, __jsx("h3", null, "Follow Us"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx("a", {
      href: "https://www.facebook.com/greenscapesgardeners"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/icon-facebook.png */ "./images/icon-facebook.png"),
      style: {
        maxWidth: '150px'
      }
    })))))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-7 col-md-7"
    }, __jsx("p", null, __jsx("i", {
      className: "far fa-copyright"
    }), " ", moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY'), " ", __jsx("a", {
      href: "/"
    }, "Greenscapes"), ". All Rights Reserved")), __jsx("div", {
      className: "col-lg-5 col-md-5"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-facebook-f"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-linkedin-in"
    }))))))))), __jsx("div", {
      className: "map2"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/map2.png */ "./images/map2.png"),
      alt: "map"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/NavbarTwo.js":
/*!*****************************************!*\
  !*** ./components/Layouts/NavbarTwo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class NavbarTwo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
      id: "navbar",
      className: "navbar navbar-expand-lg navbar-style-one navbar-light bg-light"
    }, __jsx("div", {
      className: "container"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/#about"
    }, __jsx("a", {
      className: "nav-link"
    }, "About"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/services"
    }, __jsx("a", {
      className: "nav-link"
    }, "Services"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/garden-maintenance"
    }, __jsx("a", {
      className: "nav-link"
    }, "Garden Maintenance"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/landscaping"
    }, __jsx("a", {
      className: "nav-link"
    }, "Landscaping"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog")))), __jsx("ul", {
      className: "others-option"
    }, __jsx("li", null, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.toggleNavbar,
      href: "#contact"
    }, __jsx("button", {
      className: "btn btn-primary"
    }, "Contact Us"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavbarTwo);

/***/ }),

/***/ "./components/Layouts/SeoSection.js":
/*!******************************************!*\
  !*** ./components/Layouts/SeoSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  desc,
  url
}) => __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
  title: title,
  description: desc,
  canonical: url,
  openGraph: {
    url: url,
    title: title,
    description: desc
  }
}));

/***/ }),

/***/ "./data/data.js":
/*!**********************!*\
  !*** ./data/data.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gardeningLandscaping = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping1.jpg */ "./images/gardening-landscaping1.jpg"));

var _gardeningLandscaping2 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping2.jpg */ "./images/gardening-landscaping2.jpg"));

var _gardeningLandscaping3 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping3.jpg */ "./images/gardening-landscaping3.jpg"));

var _gardeningLandscaping4 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping4.jpg */ "./images/gardening-landscaping4.jpg"));

var _gardeningLandscaping5 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping5.jpg */ "./images/gardening-landscaping5.jpg"));

var _gardeningLandscaping6 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping6.jpg */ "./images/gardening-landscaping6.jpg"));

var _gardeningLandscaping7 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping7.jpg */ "./images/gardening-landscaping7.jpg"));

var _gardeningLandscaping8 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping8.jpg */ "./images/gardening-landscaping8.jpg"));

var _gardeningLandscaping9 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping9.jpg */ "./images/gardening-landscaping9.jpg"));

var _gardeningLandscaping10 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping10.jpg */ "./images/gardening-landscaping10.jpg"));

var _gardeningLandscaping11 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping11.jpg */ "./images/gardening-landscaping11.jpg"));

var _gardeningLandscaping12 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-landscaping12.jpg */ "./images/gardening-landscaping12.jpg"));

var _gardeningDomestic = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic1.jpeg */ "./images/gardening-domestic1.jpeg"));

var _gardeningDomestic2 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic2.jpeg */ "./images/gardening-domestic2.jpeg"));

var _gardeningDomestic3 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic4.jpeg */ "./images/gardening-domestic4.jpeg"));

var _gardeningDomestic4 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic5.jpeg */ "./images/gardening-domestic5.jpeg"));

var _gardeningDomestic5 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic6.jpeg */ "./images/gardening-domestic6.jpeg"));

var _gardeningDomestic6 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic7.jpeg */ "./images/gardening-domestic7.jpeg"));

var _gardeningDomestic7 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic8.jpeg */ "./images/gardening-domestic8.jpeg"));

var _gardeningDomestic8 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic9.jpeg */ "./images/gardening-domestic9.jpeg"));

var _gardeningDomestic9 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic10.jpeg */ "./images/gardening-domestic10.jpeg"));

var _gardeningDomestic10 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic11.jpeg */ "./images/gardening-domestic11.jpeg"));

var _gardeningDomestic11 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic12.jpeg */ "./images/gardening-domestic12.jpeg"));

var _gardeningDomestic12 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic13.jpeg */ "./images/gardening-domestic13.jpeg"));

var _gardeningTurfing = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing1.jpeg */ "./images/gardening-turfing1.jpeg"));

var _gardeningTurfing2 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing2.jpeg */ "./images/gardening-turfing2.jpeg"));

var _gardeningTurfing3 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing3.jpeg */ "./images/gardening-turfing3.jpeg"));

var _gardeningTurfing4 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing4.jpeg */ "./images/gardening-turfing4.jpeg"));

var _gardeningTurfing5 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing5.jpeg */ "./images/gardening-turfing5.jpeg"));

var _gardeningTurfing6 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing6.jpeg */ "./images/gardening-turfing6.jpeg"));

var _gardeningTurfing7 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing7.jpeg */ "./images/gardening-turfing7.jpeg"));

var _gardeningTurfing8 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing8.jpeg */ "./images/gardening-turfing8.jpeg"));

var _gardeningTurfing9 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing9.jpeg */ "./images/gardening-turfing9.jpeg"));

var _gardeningTurfing10 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing10.jpeg */ "./images/gardening-turfing10.jpeg"));

var _gardeningTurfing11 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-turfing11.jpeg */ "./images/gardening-turfing11.jpeg"));

var _gardeningDomestic13 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-domestic3.jpeg */ "./images/gardening-domestic3.jpeg"));

var _gardeningServices = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-services1.jpeg */ "./images/gardening-services1.jpeg"));

var _gardeningPlanting = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-planting2.jpg */ "./images/gardening-planting2.jpg"));

var _gardeningPlanting2 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-planting3.jpg */ "./images/gardening-planting3.jpg"));

var _gardeningHedgePlanting = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting1.jpeg */ "./images/gardening-hedge-planting1.jpeg"));

var _gardeningHedgePlanting2 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting2.jpeg */ "./images/gardening-hedge-planting2.jpeg"));

var _gardeningHedgePlanting3 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting3.jpeg */ "./images/gardening-hedge-planting3.jpeg"));

var _gardeningHedgePlanting4 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting4.jpeg */ "./images/gardening-hedge-planting4.jpeg"));

var _gardeningHedgePlanting5 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting5.jpeg */ "./images/gardening-hedge-planting5.jpeg"));

var _gardeningHedgePlanting6 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting6.jpeg */ "./images/gardening-hedge-planting6.jpeg"));

var _gardeningHedgePlanting7 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting7.jpeg */ "./images/gardening-hedge-planting7.jpeg"));

var _gardeningHedgePlanting8 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting8.jpg */ "./images/gardening-hedge-planting8.jpg"));

var _gardeningHedgePlanting9 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting9.jpg */ "./images/gardening-hedge-planting9.jpg"));

var _gardeningHedgePlanting10 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting10.jpeg */ "./images/gardening-hedge-planting10.jpeg"));

var _gardeningHedgePlanting11 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting11.jpeg */ "./images/gardening-hedge-planting11.jpeg"));

var _gardeningHedgePlanting12 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting12.jpeg */ "./images/gardening-hedge-planting12.jpeg"));

var _gardeningHedgePlanting13 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting13.jpeg */ "./images/gardening-hedge-planting13.jpeg"));

var _gardeningHedgePlanting14 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting14.jpeg */ "./images/gardening-hedge-planting14.jpeg"));

var _gardeningHedgePlanting15 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting15.jpeg */ "./images/gardening-hedge-planting15.jpeg"));

var _gardeningHedgePlanting16 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting16.jpeg */ "./images/gardening-hedge-planting16.jpeg"));

var _gardeningHedgePlanting17 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting17.jpg */ "./images/gardening-hedge-planting17.jpg"));

var _gardeningHedgePlanting18 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting18.jpg */ "./images/gardening-hedge-planting18.jpg"));

var _gardeningHedgePlanting19 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting19.jpg */ "./images/gardening-hedge-planting19.jpg"));

var _gardeningHedgePlanting20 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-planting20.jpg */ "./images/gardening-hedge-planting20.jpg"));

var _gardeningHedgePruning = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-pruning1.jpeg */ "./images/gardening-hedge-pruning1.jpeg"));

var _gardeningHedgePruning2 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-pruning2.jpg */ "./images/gardening-hedge-pruning2.jpg"));

var _gardeningHedgePruning3 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-pruning3.jpg */ "./images/gardening-hedge-pruning3.jpg"));

var _gardeningHedgePruning4 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-pruning4.jpeg */ "./images/gardening-hedge-pruning4.jpeg"));

var _gardeningHedgePruning5 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-pruning5.jpeg */ "./images/gardening-hedge-pruning5.jpeg"));

var _gardeningHedgePruning6 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-pruning6.jpeg */ "./images/gardening-hedge-pruning6.jpeg"));

var _gardeningHedgePruning7 = _interopRequireDefault(__webpack_require__(/*! ../images/gardening-hedge-pruning7.jpeg */ "./images/gardening-hedge-pruning7.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import planting2 from '../images/gardening-planting1.jpeg';
const blogs = [// intro 87 characters
{
  date: 'April 17th 2019',
  title: 'Love Your Garden',
  intro: 'Do you like your garden and are desperate to spend time enjoying it rather than working on it?',
  link: 'garden-maintenance-service-wilmslow',
  img: 'gardening-blog1.jpg',
  tag: 'Garden Tips'
}, {
  date: 'April 08, 2019',
  title: 'Garden Maintenance',
  intro: 'Spend less time working on garden maintenance and enjoy sitting back and enjoying your space',
  link: 'garden-maintenance-service-stockport',
  img: 'gardening-blog2.jpg',
  tag: 'Services'
}, {
  date: 'March 15th, 2019',
  title: 'Spring Maintenance',
  intro: 'At Greenscapes we cover the full range of gardening services starting with garden maintenance.',
  link: 'spring-garden-maintenance-service-stockport',
  img: 'gardening-blog3.jpg',
  tag: 'Services'
}, {
  date: 'March 6th, 2019',
  title: 'Gardening Legalities',
  intro: 'By law you are can trim any overhanging leaves and branches up to the boundary line',
  link: 'garden-maintenance-legals-wilmslow',
  img: 'gardening-blog4.png',
  tag: 'Garden Tips'
}, {
  date: 'January 19th, 2019',
  title: 'Winter Garden Maintenance',
  intro: 'Winter is the ideal time for garden chores to be done in preparation for Spring',
  link: 'domestic-garden-maintenance-wilmslow',
  img: 'gardening-blog6.jpg',
  tag: 'Garden Tips'
}, {
  date: 'November 18th, 2018',
  title: 'Garden Maintenance',
  intro: "Gardenening is a constant task, whether you are keeping it tidy or planning major changes. ",
  link: 'winter-garden-maintenance',
  img: 'gardening-blog7.jpg',
  tag: 'Garden Tips'
}, {
  date: 'September 11th, 2018',
  title: 'Deadhead an Astilbe',
  intro: 'Originating in Asia, Astilbes are one of those garden plants that are just so easy to love.',
  link: 'how-to-deadhead-an-astilbe',
  img: 'gardening-blog8.jpg',
  tag: 'Garden Tips'
}, {
  date: 'February 5th, 2018',
  title: 'Garden Maintenance Tips',
  intro: 'We all love gardening but domestic garden maintenance can be backbreaking work',
  link: 'domestic-garden-maintenance-tips-wilmslow',
  img: 'gardening-blog5.jpg',
  tag: 'Services'
}];
const services = [{
  title: 'Garden Maintenance',
  src: 'gardening-services1.jpeg',
  desc: 'Greenscapes gardening services operate throughout the Stockport and Cheshire areas. We are proud of our professional service and the reputation we have built',
  id: 'domestic-garden-maintenance'
}, {
  title: 'Turfing',
  src: 'gardening-servicesTurfing.jpeg',
  desc: 'At Greenscapes we can lift existing lawns, level areas and re-turf using locally sourced quality Cheshire turf. We can provide  instant results to make your lawn look green and attractive immediately. We can re-seed an area if needed',
  id: 'turfing'
}, {
  title: 'Landscaping',
  src: 'gardening-servicesLandscaping.jpeg',
  desc: 'Here at Greenscapes we specialise in driveways, patios, decking, composite decking, walling, fencing and any other landscaping needs you may have',
  id: 'landscaping'
}, {
  title: 'Planting & Plant Care',
  src: 'gardening-services1.jpeg',
  desc: 'We provide a full planting service, where we can provide the plants you require or you can provide them if you prefer. We can offer advice and help you select the right plants for your garden that will give you ongoing enjoyment',
  id: 'planting'
}, {
  title: 'Hedge & Tree Pruning',
  src: 'gardening-hedge-pruning5.jpeg',
  desc: 'Greenscapes can provide a trimming and lowering of all types of hedges. We can prune and fell all types of trees to a high standard. We can also arrange stump removal',
  id: 'hedge-pruning'
}, {
  title: 'Hedge Planting',
  src: 'gardening-servicesHedge2.jpeg',
  desc: 'We provide a full hedge planting service, where we can provide the hedging you require or you can provide them if you prefer. We can offer advice on how to maintain your hedge after planting or we can maintain it for you',
  id: 'hedge-planting'
}];
const landscapingImages = [{
  original: _gardeningLandscaping.default,
  thumbnail: _gardeningLandscaping.default
}, {
  original: _gardeningLandscaping2.default,
  thumbnail: _gardeningLandscaping2.default
}, {
  original: _gardeningLandscaping3.default,
  thumbnail: _gardeningLandscaping3.default
}, {
  original: _gardeningLandscaping4.default,
  thumbnail: _gardeningLandscaping4.default
}, {
  original: _gardeningLandscaping5.default,
  thumbnail: _gardeningLandscaping5.default
}, {
  original: _gardeningLandscaping6.default,
  thumbnail: _gardeningLandscaping6.default
}, {
  original: _gardeningLandscaping7.default,
  thumbnail: _gardeningLandscaping7.default
}, {
  original: _gardeningLandscaping8.default,
  thumbnail: _gardeningLandscaping8.default
}, {
  original: _gardeningLandscaping9.default,
  thumbnail: _gardeningLandscaping9.default
}, {
  original: _gardeningLandscaping10.default,
  thumbnail: _gardeningLandscaping10.default
}, {
  original: _gardeningLandscaping11.default,
  thumbnail: _gardeningLandscaping11.default
}, {
  original: _gardeningLandscaping12.default,
  thumbnail: _gardeningLandscaping12.default
}];
const domesticImages = [{
  original: _gardeningDomestic.default,
  thumbnail: _gardeningDomestic.default
}, {
  original: _gardeningDomestic2.default,
  thumbnail: _gardeningDomestic2.default
}, // { original: domestic3, thumbnail: domestic3 },
{
  original: _gardeningDomestic3.default,
  thumbnail: _gardeningDomestic3.default
}, {
  original: _gardeningDomestic4.default,
  thumbnail: _gardeningDomestic4.default
}, {
  original: _gardeningDomestic5.default,
  thumbnail: _gardeningDomestic5.default
}, {
  original: _gardeningDomestic6.default,
  thumbnail: _gardeningDomestic6.default
}, {
  original: _gardeningDomestic7.default,
  thumbnail: _gardeningDomestic7.default
}, {
  original: _gardeningDomestic8.default,
  thumbnail: _gardeningDomestic8.default
}, {
  original: _gardeningDomestic9.default,
  thumbnail: _gardeningDomestic9.default
}, {
  original: _gardeningDomestic10.default,
  thumbnail: _gardeningDomestic10.default
}, {
  original: _gardeningDomestic11.default,
  thumbnail: _gardeningDomestic11.default
}, {
  original: _gardeningDomestic12.default,
  thumbnail: _gardeningDomestic12.default
}];
const turfingImages = [// { original: turfing1 },
{
  original: _gardeningTurfing2.default
}, {
  original: _gardeningTurfing3.default
}, {
  original: _gardeningTurfing4.default
}, {
  original: _gardeningTurfing5.default
}, {
  original: _gardeningTurfing6.default
}, {
  original: _gardeningTurfing7.default
}, {
  original: _gardeningTurfing8.default
}, {
  original: _gardeningTurfing9.default
}, {
  original: _gardeningTurfing10.default
}, {
  original: _gardeningTurfing11.default
}, {
  original: _gardeningDomestic13.default
}, {
  original: _gardeningHedgePruning.default
}];
const plantingImages = [{
  original: _gardeningServices.default
}, // { original: planting2 },
{
  original: _gardeningPlanting.default
}, {
  original: _gardeningPlanting2.default
}, {
  original: _gardeningHedgePlanting8.default
}, {
  original: _gardeningHedgePlanting9.default
}];
const hedgePlantingImages = [{
  original: _gardeningHedgePlanting.default
}, {
  original: _gardeningHedgePlanting2.default
}, {
  original: _gardeningHedgePlanting3.default
}, {
  original: _gardeningHedgePlanting4.default
}, {
  original: _gardeningHedgePlanting5.default
}, {
  original: _gardeningHedgePlanting6.default
}, {
  original: _gardeningHedgePlanting7.default
}, {
  original: _gardeningHedgePlanting10.default
}, {
  original: _gardeningHedgePlanting11.default
}, {
  original: _gardeningHedgePlanting12.default
}, {
  original: _gardeningHedgePlanting13.default
}, {
  original: _gardeningHedgePlanting14.default
}, {
  original: _gardeningHedgePlanting15.default
}, {
  original: _gardeningHedgePlanting16.default
}, {
  original: _gardeningHedgePlanting17.default
}, {
  original: _gardeningHedgePlanting18.default
}, {
  original: _gardeningHedgePlanting19.default
}, {
  original: _gardeningHedgePlanting20.default
}];
const hedgePruningImages = [{
  original: _gardeningHedgePruning5.default
}, {
  original: _gardeningHedgePruning2.default
}, {
  original: _gardeningHedgePruning3.default
}, {
  original: _gardeningHedgePruning4.default
}, {
  original: _gardeningHedgePruning6.default
}, {
  original: _gardeningHedgePruning7.default
}];
module.exports = {
  blogs,
  services,
  landscapingImages,
  domesticImages,
  turfingImages,
  plantingImages,
  hedgePlantingImages,
  hedgePruningImages
};

/***/ }),

/***/ "./images/gardening-domestic1.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic1.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic1-f3401130c90d750e907082a6faf32a08.jpeg";

/***/ }),

/***/ "./images/gardening-domestic10.jpeg":
/*!******************************************!*\
  !*** ./images/gardening-domestic10.jpeg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic10-f677399544676f78b2fb3be2f87619f5.jpeg";

/***/ }),

/***/ "./images/gardening-domestic11.jpeg":
/*!******************************************!*\
  !*** ./images/gardening-domestic11.jpeg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic11-efca56eca456c5b0cc25717afb67d809.jpeg";

/***/ }),

/***/ "./images/gardening-domestic12.jpeg":
/*!******************************************!*\
  !*** ./images/gardening-domestic12.jpeg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic12-c27e15cc0afda100143ef1a6a6fd73ce.jpeg";

/***/ }),

/***/ "./images/gardening-domestic13.jpeg":
/*!******************************************!*\
  !*** ./images/gardening-domestic13.jpeg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic13-b7d37d43bc8b9a473ff1386e102075c0.jpeg";

/***/ }),

/***/ "./images/gardening-domestic2.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic2.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic2-4350c71493a4bb412a018ce3709419d6.jpeg";

/***/ }),

/***/ "./images/gardening-domestic3.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic3.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic3-fbb8bc9650179afe3741989fafad8be6.jpeg";

/***/ }),

/***/ "./images/gardening-domestic4.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic4.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic4-0c2152118afadc9cbb51efbbf5a3dfb7.jpeg";

/***/ }),

/***/ "./images/gardening-domestic5.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic5.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic5-07c8352bdc8fa7133a95856a85e2fba8.jpeg";

/***/ }),

/***/ "./images/gardening-domestic6.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic6.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic6-647d7d500dfcd57903d57fb94de2415d.jpeg";

/***/ }),

/***/ "./images/gardening-domestic7.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic7.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic7-2e2c63ba922ccb31c314b4642c514af2.jpeg";

/***/ }),

/***/ "./images/gardening-domestic8.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic8.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic8-94f74677c690113f7cfcee5a545f7ab5.jpeg";

/***/ }),

/***/ "./images/gardening-domestic9.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-domestic9.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-domestic9-cbbbf94c721073057b09f3ca8f3d1f86.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting1.jpeg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting1.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting1-d33d1600c4e38b81715bd718a142cd65.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting10.jpeg":
/*!************************************************!*\
  !*** ./images/gardening-hedge-planting10.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting10-ed2bb40c811e363b02fd9c15b82beb7c.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting11.jpeg":
/*!************************************************!*\
  !*** ./images/gardening-hedge-planting11.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting11-b8f4cb47dfe0ef9db7e2f137c143ecfc.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting12.jpeg":
/*!************************************************!*\
  !*** ./images/gardening-hedge-planting12.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting12-a30e2f14e649ed9eddcf98f8e21c2dc3.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting13.jpeg":
/*!************************************************!*\
  !*** ./images/gardening-hedge-planting13.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting13-3a115e9331b4c06fff7478de2a4ffde9.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting14.jpeg":
/*!************************************************!*\
  !*** ./images/gardening-hedge-planting14.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting14-ed2bb40c811e363b02fd9c15b82beb7c.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting15.jpeg":
/*!************************************************!*\
  !*** ./images/gardening-hedge-planting15.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting15-4f4d6bc6c9f8ba541cd4bee24d9d60bf.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting16.jpeg":
/*!************************************************!*\
  !*** ./images/gardening-hedge-planting16.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting16-08622d5c32b8eb02fe19c4ae5b6b9d85.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting17.jpg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting17.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting17-3f2067af1461ae320c55cb91ce13044e.jpg";

/***/ }),

/***/ "./images/gardening-hedge-planting18.jpg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting18.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting18-a302ae1d4a24755d91449baf52908411.jpg";

/***/ }),

/***/ "./images/gardening-hedge-planting19.jpg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting19.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting19-ad8d28fe58618c2265c462689d7264bd.jpg";

/***/ }),

/***/ "./images/gardening-hedge-planting2.jpeg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting2.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting2-f48197f3f7c8987213e079ca607a4593.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting20.jpg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting20.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting20-48d0a534b795f4d75cfeefa07ca6f82e.jpg";

/***/ }),

/***/ "./images/gardening-hedge-planting3.jpeg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting3.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting3-cf6ad113e01377b5f6bc948e35f47ea1.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting4.jpeg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting4.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting4-b6938befe1320ca584a6cc18ccf62e9b.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting5.jpeg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting5.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting5-cf6ad113e01377b5f6bc948e35f47ea1.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting6.jpeg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting6.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting6-6f92ad7d4765c519ef62cde6b3d8b2cd.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting7.jpeg":
/*!***********************************************!*\
  !*** ./images/gardening-hedge-planting7.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting7-d33d1600c4e38b81715bd718a142cd65.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-planting8.jpg":
/*!**********************************************!*\
  !*** ./images/gardening-hedge-planting8.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting8-cc691e46e904253376524ae28948a316.jpg";

/***/ }),

/***/ "./images/gardening-hedge-planting9.jpg":
/*!**********************************************!*\
  !*** ./images/gardening-hedge-planting9.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-planting9-82a9d6bc9404294e70679bc7711986a4.jpg";

/***/ }),

/***/ "./images/gardening-hedge-pruning1.jpeg":
/*!**********************************************!*\
  !*** ./images/gardening-hedge-pruning1.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-pruning1-c303c794a0edc819a0e34cd50041f6c4.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-pruning2.jpg":
/*!*********************************************!*\
  !*** ./images/gardening-hedge-pruning2.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-pruning2-69d8dc985389f71a7172fce670f42865.jpg";

/***/ }),

/***/ "./images/gardening-hedge-pruning3.jpg":
/*!*********************************************!*\
  !*** ./images/gardening-hedge-pruning3.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-pruning3-bedc614571ea04ff5999fd6c2c0ef5c1.jpg";

/***/ }),

/***/ "./images/gardening-hedge-pruning4.jpeg":
/*!**********************************************!*\
  !*** ./images/gardening-hedge-pruning4.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-pruning4-2424b3002141595f34acfb8362c625b2.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-pruning5.jpeg":
/*!**********************************************!*\
  !*** ./images/gardening-hedge-pruning5.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-pruning5-95c16626fa92979870c97edf475fdb58.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-pruning6.jpeg":
/*!**********************************************!*\
  !*** ./images/gardening-hedge-pruning6.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-pruning6-a9101be76a92584618257e9224713167.jpeg";

/***/ }),

/***/ "./images/gardening-hedge-pruning7.jpeg":
/*!**********************************************!*\
  !*** ./images/gardening-hedge-pruning7.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-hedge-pruning7-2acd51f70cdf3c513d83eb0eade13705.jpeg";

/***/ }),

/***/ "./images/gardening-landscaping1.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping1.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping1-6ab9f778612f86ebb403d5b0de4ced7d.jpg";

/***/ }),

/***/ "./images/gardening-landscaping10.jpg":
/*!********************************************!*\
  !*** ./images/gardening-landscaping10.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping10-705992ad71d53af1b678331d44b58e40.jpg";

/***/ }),

/***/ "./images/gardening-landscaping11.jpg":
/*!********************************************!*\
  !*** ./images/gardening-landscaping11.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping11-8b53b1502194e007c36c002a28b0281e.jpg";

/***/ }),

/***/ "./images/gardening-landscaping12.jpg":
/*!********************************************!*\
  !*** ./images/gardening-landscaping12.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping12-97f2db7807cfbb40044895d0d2006dcd.jpg";

/***/ }),

/***/ "./images/gardening-landscaping2.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping2.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping2-6dae1c2c4e01076a0baa6b1c8f513723.jpg";

/***/ }),

/***/ "./images/gardening-landscaping3.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping3.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping3-2b00fa62676b6902f9eb5957b2370f3e.jpg";

/***/ }),

/***/ "./images/gardening-landscaping4.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping4.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping4-70fe42082cd7db33ed97835e6b1b9b64.jpg";

/***/ }),

/***/ "./images/gardening-landscaping5.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping5.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping5-532b5e51ac2a547f21264a7dba50a7d7.jpg";

/***/ }),

/***/ "./images/gardening-landscaping6.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping6.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping6-da7cc3d61cb69fcf25807965c1ef0ff1.jpg";

/***/ }),

/***/ "./images/gardening-landscaping7.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping7.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping7-507fe612dfc902998ac6af0ee0710d5b.jpg";

/***/ }),

/***/ "./images/gardening-landscaping8.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping8.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping8-81e06f29ec0334dfe30720c11033d653.jpg";

/***/ }),

/***/ "./images/gardening-landscaping9.jpg":
/*!*******************************************!*\
  !*** ./images/gardening-landscaping9.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-landscaping9-4d51cda1833693290195e2399be4e4e6.jpg";

/***/ }),

/***/ "./images/gardening-logo-transparent.png":
/*!***********************************************!*\
  !*** ./images/gardening-logo-transparent.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-logo-transparent-c4957dd4799f0f92a629f0593d67f24d.png";

/***/ }),

/***/ "./images/gardening-planting2.jpg":
/*!****************************************!*\
  !*** ./images/gardening-planting2.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-planting2-72220ec330748e6515421db18144d923.jpg";

/***/ }),

/***/ "./images/gardening-planting3.jpg":
/*!****************************************!*\
  !*** ./images/gardening-planting3.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-planting3-cff2ebf8cdb4ba8bfd84f9d9cb0795da.jpg";

/***/ }),

/***/ "./images/gardening-services1.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-services1.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-services1-4350c71493a4bb412a018ce3709419d6.jpeg";

/***/ }),

/***/ "./images/gardening-turfing1.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing1.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing1-647d7d500dfcd57903d57fb94de2415d.jpeg";

/***/ }),

/***/ "./images/gardening-turfing10.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-turfing10.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing10-d3d852a48716aa46e60033abb4c5d4f9.jpeg";

/***/ }),

/***/ "./images/gardening-turfing11.jpeg":
/*!*****************************************!*\
  !*** ./images/gardening-turfing11.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing11-2813c48be09b50dea8d8248058ffd1ca.jpeg";

/***/ }),

/***/ "./images/gardening-turfing2.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing2.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing2-3a8b8b456f0787ac8d8269ff6b3bec2b.jpeg";

/***/ }),

/***/ "./images/gardening-turfing3.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing3.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing3-efd209d46f2eb2ef415123c6685c3f23.jpeg";

/***/ }),

/***/ "./images/gardening-turfing4.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing4.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing4-d90741f7db3d10f46f8a9532316aead2.jpeg";

/***/ }),

/***/ "./images/gardening-turfing5.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing5.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing5-32767e6d23e01f9839ade7cd9e5bd995.jpeg";

/***/ }),

/***/ "./images/gardening-turfing6.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing6.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing6-e0a517c1db705b7adb09b83b5820ac64.jpeg";

/***/ }),

/***/ "./images/gardening-turfing7.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing7.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing7-ef5e09607fc4f7571756eb9ead24fcc9.jpeg";

/***/ }),

/***/ "./images/gardening-turfing8.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing8.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing8-b6424c77458b9c28f8b00ce14293e7aa.jpeg";

/***/ }),

/***/ "./images/gardening-turfing9.jpeg":
/*!****************************************!*\
  !*** ./images/gardening-turfing9.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gardening-turfing9-d90741f7db3d10f46f8a9532316aead2.jpeg";

/***/ }),

/***/ "./images/greenscapes-test.png":
/*!*************************************!*\
  !*** ./images/greenscapes-test.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/greenscapes-test-9b24b0ac7d27e43c587dce823df9ef9d.png";

/***/ }),

/***/ "./images/icon-facebook.png":
/*!**********************************!*\
  !*** ./images/icon-facebook.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAxCAIAAAFt0C2ZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDczNTJDMzBCQ0QxMTFFODhBMzlFRjI1MDZGNDA2QUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDczNTJDMzFCQ0QxMTFFODhBMzlFRjI1MDZGNDA2QUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNzM1MkMyRUJDRDExMUU4OEEzOUVGMjUwNkY0MDZBQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNzM1MkMyRkJDRDExMUU4OEEzOUVGMjUwNkY0MDZBQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl8KwB0AAAOHSURBVHjaYhTJu8yAAVj+/viEKcr099tbCHo30wrOZvnz9SVcCZzN8ufLK4QojM3IbF1IrG0AAcSI6TIsClmALkAXgjji67oUIMkdNAdkFptrK5Di52b/+PUnXOMbIPXuG17jAQKIUTj7LAMRgOXv9/doQu/nOgNJweS9aG57jcxPdFYGknmzT6OJM3J4T0DmA13+YmUGp89EDHtR9f1l4ACRqIIg85jMMonxB0AAMWJNDlj8+//vL6LU/fv9gzjz/nxH5odbSsxI0cYSfv9+fUPmQxTxx25GT6r/fn+Fo3g7CaDQ919/gQxkcSBi5AqcDdcESTEQAEk3SOb9+gpH8GgAMpDFgQjovq+YvsMUZPn/+xumOkxB7BkGW/gRGc7/iIs3gABiFM65wEA9AEwuP6lqHHG+Jda4f9giAxl8WOCBzBVI2IHfuK/EWPvp22+Z1E2Eo4I7ZCEuuS+r4zAFeUIX4TOO028aHmk+LrYXy5MhbC7/6USE3a8veKT/s7Ij5YIvxBiHLyr+sf5FMu4bMQkFn6L/v//hyXtYwo7JInfw5gqAACK27Cbadf/+UtM4hv9/qeu6P9SNCqoax0Bl1/37jV/Fm9lOzEyMEPaEbQ8a197F71l8xnVEacLNAmWM///wqydgXLiVFISRP+/Sgv0PifEsviqKmQnKmL/3NpExi9N1wNYXKwvUvAQHOSB59fHHU7feUK00Tpp4eNWR+1RoR0HA4ctP8KsnULh/2whtBEpEzv307RcxYUec6/79JkYlscYBlRFp3G/ijPtNjEpqG8fw7zdxYfeHGJVUdh2x7cphUnxSu+qhpnEAAcYoknuRYbACKvuV2o77P4gdR900TO2Q+zuYHUdkyYkXWKjyF3rKq0txy4twIItP2P6wce09SkKOIsfJi3KebrNmg7U60Evvf/8oMZ/SkFuSY4HLZRDXUWI+CwOFISfCicz9/uuvRNJmKmaIX1RMwr///KOigYw8oUvI0PZ5VTQxyppWXOxed2WwhBx6i/fKU0rMJzO3ztt1HUiysTDHOKmhZ5F9t379gdY6J689BWYJ8qOV02cy2Zr5uNlerEhDE5SImPXp669BkCH+MmIT/E2tpEJRIfz/LxPZzWYiC2Hyffn/HyM2wV+UmEnFkGPGJviHeiFHfcdRM1opcNw/bI4D9pr/UcdxjMxW+aONTTKjdRA7jmEQd3AAHU4n+5/xkoYAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/map2.png":
/*!*************************!*\
  !*** ./images/map2.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map2-39fb2c0187172150d8f66690a3be0dcd.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layouts_NavbarTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts/NavbarTwo */ "./components/Layouts/NavbarTwo.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/data */ "./data/data.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layouts_SeoSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layouts/SeoSection */ "./components/Layouts/SeoSection.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Services = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layouts_SeoSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
  title: "Our Services | Greenscapes Gardening",
  desc: "We provide a range of services from domestic gardening, landscpaing, turfing and planting to large projects. No job is too big or too small. ",
  url: "https://www.greenscapes-gardening.co.uk/services"
}), __jsx(_components_Layouts_NavbarTwo__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("section", {
  "data-jarallax": "{'speed': 0.2}",
  className: "jsx-1467028609" + " " + 'page-title-area jarallax'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'container'
}, __jsx("h2", {
  className: "jsx-1467028609"
}, "Services"))), __jsx("section", {
  className: "jsx-1467028609" + " " + 'blog-details-area ptb-100'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'container'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'row'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-12 col-md-12'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'blog-details'
}, __jsx("h2", {
  className: "jsx-1467028609"
}, "Services & Project Gallery"), __jsx("p", {
  className: "jsx-1467028609"
}, "Here at Greenscapes Gardening we provide a complete range of Gardening Services to meet your requirements and to suit all budgets."), __jsx("p", {
  className: "jsx-1467028609"
}, "Do you long for a beautifully designed garden, but just do not have the time? We offer a fully managed garden design and maintenance service"), __jsx("p", {
  className: "jsx-1467028609"
}, "We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton"), __jsx("p", {
  className: "jsx-1467028609"
}, "Here at Greenscapes we specialise in driveways, patios, decking, composite decking, walling, fencing and any other landscaping needs you may have. Our landscaping teams and contractors we work closely with will deliver the garden you have dreamed about."), __jsx("p", {
  className: "jsx-1467028609"
}, "Whatever your requirement, we will visit you and provide an estimate with no hidden charges or surprise costs."), __jsx("br", {
  className: "jsx-1467028609"
}), __jsx("hr", {
  className: "jsx-1467028609"
}), __jsx("div", {
  id: "domestic-garden-maintenance",
  className: "jsx-1467028609" + " " + 'row align-items-center'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx("h3", {
  className: "jsx-1467028609"
}, "Domestic Garden Maintenance"), __jsx("p", {
  className: "jsx-1467028609"
}, "Greenscapes gardening services operate throughout the stockport and cheshire areas. We are proud of our professional service and the reputation we have built for reliable and honest gardening and landscaping"), __jsx("p", {
  className: "jsx-1467028609"
}, "We look after all sizes of domestic gardens from small gardens to managing large estates and offer an all year round service"), __jsx("p", {
  className: "jsx-1467028609"
}, "We can assist you with helpful advice from garden design ideas, planting schemes, plant, shrub and tree selection and maintenance tips"), __jsx("p", {
  className: "jsx-1467028609"
}, "We have a professional, reliable and trustworthy team who will discuss your requirements with you to ensure our service meets what you need"), __jsx("br", {
  className: "jsx-1467028609"
})), __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  images: _data_data__WEBPACK_IMPORTED_MODULE_6__["domesticImages"],
  showThumbnails: false
}), __jsx("br", {
  className: "jsx-1467028609"
}))), __jsx("hr", {
  className: "jsx-1467028609"
}), __jsx("div", {
  id: "turfing",
  className: "jsx-1467028609" + " " + 'row align-items-center'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  images: _data_data__WEBPACK_IMPORTED_MODULE_6__["turfingImages"],
  showThumbnails: false
}), __jsx("br", {
  className: "jsx-1467028609"
})), __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx("h3", {
  className: "jsx-1467028609"
}, "Turfing"), __jsx("p", {
  className: "jsx-1467028609"
}, "At Greenscapes we can lift existing lawns, level areas and re-turf using locally sourced quality Cheshire turf."), __jsx("p", {
  className: "jsx-1467028609"
}, "We can provide  instant results to make your lawn look green and attractive immediately. We can re-seed an area if needed."), __jsx("br", {
  className: "jsx-1467028609"
}))), __jsx("hr", {
  className: "jsx-1467028609"
}), __jsx("div", {
  id: "landscaping",
  className: "jsx-1467028609" + " " + 'row align-items-center'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx("h3", {
  className: "jsx-1467028609"
}, "Landscaping"), __jsx("p", {
  className: "jsx-1467028609"
}, "Here at Greenscapes we specialise in driveways, patios, decking, composite decking, walling, fencing and any other landscaping needs you may have."), __jsx("p", {
  className: "jsx-1467028609"
}, "Our landscaping teams and contractors we work closely with will deliver the garden you have dreamed about. "), __jsx("br", {
  className: "jsx-1467028609"
})), __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  images: _data_data__WEBPACK_IMPORTED_MODULE_6__["landscapingImages"],
  showThumbnails: false
}), __jsx("br", {
  className: "jsx-1467028609"
}))), __jsx("hr", {
  className: "jsx-1467028609"
}), __jsx("div", {
  id: "planting",
  className: "jsx-1467028609" + " " + 'row align-items-center'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  images: _data_data__WEBPACK_IMPORTED_MODULE_6__["plantingImages"],
  showThumbnails: false
}), __jsx("br", {
  className: "jsx-1467028609"
})), __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx("h3", {
  className: "jsx-1467028609"
}, "Planting & Plant Care"), __jsx("p", {
  className: "jsx-1467028609"
}, "We provide a full planting service, where we can provide the plants you require or you can provide them if you prefer."), __jsx("p", {
  className: "jsx-1467028609"
}, "We can offer advice and help you select the right plants for your garden that will give you ongoing enjoyment."), __jsx("br", {
  className: "jsx-1467028609"
}))), __jsx("hr", {
  className: "jsx-1467028609"
}), __jsx("div", {
  id: "hedge-pruning",
  className: "jsx-1467028609" + " " + 'row align-items-center'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx("h3", {
  className: "jsx-1467028609"
}, "Hedge & Tree Pruning"), __jsx("p", {
  className: "jsx-1467028609"
}, "Greenscapes can provide a trimming and lowering of all types of hedges."), __jsx("p", {
  className: "jsx-1467028609"
}, "We can prune and fell all types of trees to a high standard.  We can also arrange stump removal."), __jsx("p", {
  className: "jsx-1467028609"
}, "We will leave your garden looking tidy removing all waste."), __jsx("br", {
  className: "jsx-1467028609"
})), __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  images: _data_data__WEBPACK_IMPORTED_MODULE_6__["hedgePruningImages"],
  showThumbnails: false
}), __jsx("br", {
  className: "jsx-1467028609"
}))), __jsx("hr", {
  className: "jsx-1467028609"
}), __jsx("div", {
  id: "hedge-planting",
  className: "jsx-1467028609" + " " + 'row align-items-center'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  images: _data_data__WEBPACK_IMPORTED_MODULE_6__["hedgePlantingImages"],
  showThumbnails: false
}), __jsx("br", {
  className: "jsx-1467028609"
})), __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-12'
}, __jsx("br", {
  className: "jsx-1467028609"
}), __jsx("h3", {
  className: "jsx-1467028609"
}, "Hedge Planting"), __jsx("p", {
  className: "jsx-1467028609"
}, "We provide a full hedge planting service, where we can provide the hedging you require or you can provide them if you prefer. "), __jsx("p", {
  className: "jsx-1467028609"
}, "We can offer advise on how to maintain your hedge after planting or we can maintain it for you and help it form in to a strong hedge."), __jsx("br", {
  className: "jsx-1467028609"
})))), __jsx("div", {
  className: "jsx-1467028609" + " " + 'post-tag-media'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'row h-100 align-items-center'
}, __jsx("div", {
  className: "jsx-1467028609" + " " + 'col-lg-6 col-md-7'
}, __jsx("ul", {
  className: "jsx-1467028609" + " " + 'tag'
}, __jsx("li", {
  className: "jsx-1467028609"
}, __jsx("span", {
  className: "jsx-1467028609"
}, "Tags:")), __jsx("li", {
  className: "jsx-1467028609"
}, __jsx("a", {
  className: "jsx-1467028609"
}, "Projects,")), __jsx("li", {
  className: "jsx-1467028609"
}, __jsx("a", {
  className: "jsx-1467028609"
}, "Services,")), __jsx("li", {
  className: "jsx-1467028609"
}, __jsx("a", {
  className: "jsx-1467028609"
}, "Gallery")))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1467028609"
}, ".fa-check-circle.jsx-1467028609{color:#339935;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMS9Eb2N1bWVudHMvZGV2ZWxvcG1lbnQvZ3JlZW5zY2FwZXMvZ3JlZW5zY2FwZXMtZG9tZXN0aWMvcGFnZXMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkpvQixBQUcrQixjQUNsQiIsImZpbGUiOiIvVXNlcnMvdXNlcjEvRG9jdW1lbnRzL2RldmVsb3BtZW50L2dyZWVuc2NhcGVzL2dyZWVuc2NhcGVzLWRvbWVzdGljL3BhZ2VzL3NlcnZpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXJUd28gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhclR3byc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Gb290ZXInO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL0Nhcm91c2VsJztcbmltcG9ydCB7IFxuICAgIGRvbWVzdGljSW1hZ2VzLCBcbiAgICB0dXJmaW5nSW1hZ2VzLCBcbiAgICBsYW5kc2NhcGluZ0ltYWdlcyxcbiAgICBwbGFudGluZ0ltYWdlcyxcbiAgICBoZWRnZVBsYW50aW5nSW1hZ2VzLFxuICAgIGhlZGdlUHJ1bmluZ0ltYWdlcyBcbn0gZnJvbSAnLi4vZGF0YS9kYXRhJztcbmltcG9ydCBTZW9TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9TZW9TZWN0aW9uJztcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8U2VvU2VjdGlvbiBcbiAgICAgICAgICAgIHRpdGxlPSdPdXIgU2VydmljZXMgfCBHcmVlbnNjYXBlcyBHYXJkZW5pbmcnXG4gICAgICAgICAgICBkZXNjPSdXZSBwcm92aWRlIGEgcmFuZ2Ugb2Ygc2VydmljZXMgZnJvbSBkb21lc3RpYyBnYXJkZW5pbmcsIGxhbmRzY3BhaW5nLCB0dXJmaW5nIGFuZCBwbGFudGluZyB0byBsYXJnZSBwcm9qZWN0cy4gTm8gam9iIGlzIHRvbyBiaWcgb3IgdG9vIHNtYWxsLiAnXG4gICAgICAgICAgICB1cmw9J2h0dHBzOi8vd3d3LmdyZWVuc2NhcGVzLWdhcmRlbmluZy5jby51ay9zZXJ2aWNlcydcbiAgICAgICAgLz5cbiAgICAgICAgPE5hdmJhclR3byAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2UtdGl0bGUtYXJlYSBqYXJhbGxheCcgZGF0YS1qYXJhbGxheD1cInsnc3BlZWQnOiAwLjJ9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8aDI+U2VydmljZXM8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdibG9nLWRldGFpbHMtYXJlYSBwdGItMTAwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTEyIGNvbC1tZC0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1kZXRhaWxzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+U2VydmljZXMgJmFtcDsgUHJvamVjdCBHYWxsZXJ5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2Jsb2ctbWV0YSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9J2ZhcyBmYS11c2VyJz48L2k+IDxhPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPSdmYXIgZmEtY2xvY2snPjwvaT4gTWF5IDEzdGgsIDIwMTk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT0nZmFzIGZhLWZvbGRlci1vcGVuJz48L2k+IDxhPlNlcnZpY2VzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhlcmUgYXQgR3JlZW5zY2FwZXMgR2FyZGVuaW5nIHdlIHByb3ZpZGUgYSBjb21wbGV0ZSByYW5nZSBvZiBHYXJkZW5pbmcgU2VydmljZXMgdG8gbWVldCB5b3VyIHJlcXVpcmVtZW50cyBhbmQgdG8gc3VpdCBhbGwgYnVkZ2V0cy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG8geW91IGxvbmcgZm9yIGEgYmVhdXRpZnVsbHkgZGVzaWduZWQgZ2FyZGVuLCBidXQganVzdCBkbyBub3QgaGF2ZSB0aGUgdGltZT8gV2Ugb2ZmZXIgYSBmdWxseSBtYW5hZ2VkIGdhcmRlbiBkZXNpZ24gYW5kIG1haW50ZW5hbmNlIHNlcnZpY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgY292ZXIgU291dGggTWFuY2hlc3RlciwgQnJhbWhhbGwsIENoZWFkbGUsIENoZWFkbGUgSHVsbWUsIFdpbG1zbG93LCBBbGRlcmxleSBFZGdlLCBCb2xsaW5ndG9uLCBQcmVzdGJ1cnksIEhhbmRmb3J0aCwgTW9iYmVybHksIFdvb2Rmb3JkIGFuZCBQb3ludG9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhlcmUgYXQgR3JlZW5zY2FwZXMgd2Ugc3BlY2lhbGlzZSBpbiBkcml2ZXdheXMsIHBhdGlvcywgZGVja2luZywgY29tcG9zaXRlIGRlY2tpbmcsIHdhbGxpbmcsIGZlbmNpbmcgYW5kIGFueSBvdGhlciBsYW5kc2NhcGluZyBuZWVkcyB5b3UgbWF5IGhhdmUuIE91ciBsYW5kc2NhcGluZyB0ZWFtcyBhbmQgY29udHJhY3RvcnMgd2Ugd29yayBjbG9zZWx5IHdpdGggd2lsbCBkZWxpdmVyIHRoZSBnYXJkZW4geW91IGhhdmUgZHJlYW1lZCBhYm91dC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hhdGV2ZXIgeW91ciByZXF1aXJlbWVudCwgd2Ugd2lsbCB2aXNpdCB5b3UgYW5kIHByb3ZpZGUgYW4gZXN0aW1hdGUgd2l0aCBubyBoaWRkZW4gY2hhcmdlcyBvciBzdXJwcmlzZSBjb3N0cy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJyBpZD0nZG9tZXN0aWMtZ2FyZGVuLW1haW50ZW5hbmNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02IGNvbC1tZC0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRvbWVzdGljIEdhcmRlbiBNYWludGVuYW5jZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HcmVlbnNjYXBlcyBnYXJkZW5pbmcgc2VydmljZXMgb3BlcmF0ZSB0aHJvdWdob3V0IHRoZSBzdG9ja3BvcnQgYW5kIGNoZXNoaXJlIGFyZWFzLiBXZSBhcmUgcHJvdWQgb2Ygb3VyIHByb2Zlc3Npb25hbCBzZXJ2aWNlIGFuZCB0aGUgcmVwdXRhdGlvbiB3ZSBoYXZlIGJ1aWx0IGZvciByZWxpYWJsZSBhbmQgaG9uZXN0IGdhcmRlbmluZyBhbmQgbGFuZHNjYXBpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBsb29rIGFmdGVyIGFsbCBzaXplcyBvZiBkb21lc3RpYyBnYXJkZW5zIGZyb20gc21hbGwgZ2FyZGVucyB0byBtYW5hZ2luZyBsYXJnZSBlc3RhdGVzIGFuZCBvZmZlciBhbiBhbGwgeWVhciByb3VuZCBzZXJ2aWNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgY2FuIGFzc2lzdCB5b3Ugd2l0aCBoZWxwZnVsIGFkdmljZSBmcm9tIGdhcmRlbiBkZXNpZ24gaWRlYXMsIHBsYW50aW5nIHNjaGVtZXMsIHBsYW50LCBzaHJ1YiBhbmQgdHJlZSBzZWxlY3Rpb24gYW5kIG1haW50ZW5hbmNlIHRpcHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBoYXZlIGEgcHJvZmVzc2lvbmFsLCByZWxpYWJsZSBhbmQgdHJ1c3R3b3J0aHkgdGVhbSB3aG8gd2lsbCBkaXNjdXNzIHlvdXIgcmVxdWlyZW1lbnRzIHdpdGggeW91IHRvIGVuc3VyZSBvdXIgc2VydmljZSBtZWV0cyB3aGF0IHlvdSBuZWVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNiBjb2wtbWQtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBpbWFnZXM9e2RvbWVzdGljSW1hZ2VzfSBzaG93VGh1bWJuYWlscz17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJyBpZD0ndHVyZmluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNiBjb2wtbWQtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBpbWFnZXM9e3R1cmZpbmdJbWFnZXN9IHNob3dUaHVtYm5haWxzPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYgY29sLW1kLTEyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VHVyZmluZzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdCBHcmVlbnNjYXBlcyB3ZSBjYW4gbGlmdCBleGlzdGluZyBsYXducywgbGV2ZWwgYXJlYXMgYW5kIHJlLXR1cmYgdXNpbmcgbG9jYWxseSBzb3VyY2VkIHF1YWxpdHkgQ2hlc2hpcmUgdHVyZi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBjYW4gcHJvdmlkZSAgaW5zdGFudCByZXN1bHRzIHRvIG1ha2UgeW91ciBsYXduIGxvb2sgZ3JlZW4gYW5kIGF0dHJhY3RpdmUgaW1tZWRpYXRlbHkuIFdlIGNhbiByZS1zZWVkIGFuIGFyZWEgaWYgbmVlZGVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInIGlkPSdsYW5kc2NhcGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNiBjb2wtbWQtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MYW5kc2NhcGluZzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGF0IEdyZWVuc2NhcGVzIHdlIHNwZWNpYWxpc2UgaW4gZHJpdmV3YXlzLCBwYXRpb3MsIGRlY2tpbmcsIGNvbXBvc2l0ZSBkZWNraW5nLCB3YWxsaW5nLCBmZW5jaW5nIGFuZCBhbnkgb3RoZXIgbGFuZHNjYXBpbmcgbmVlZHMgeW91IG1heSBoYXZlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk91ciBsYW5kc2NhcGluZyB0ZWFtcyBhbmQgY29udHJhY3RvcnMgd2Ugd29yayBjbG9zZWx5IHdpdGggd2lsbCBkZWxpdmVyIHRoZSBnYXJkZW4geW91IGhhdmUgZHJlYW1lZCBhYm91dC4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNiBjb2wtbWQtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBpbWFnZXM9e2xhbmRzY2FwaW5nSW1hZ2VzfSBzaG93VGh1bWJuYWlscz17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJyBpZD0ncGxhbnRpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYgY29sLW1kLTEyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgaW1hZ2VzPXtwbGFudGluZ0ltYWdlc30gc2hvd1RodW1ibmFpbHM9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNiBjb2wtbWQtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QbGFudGluZyAmYW1wOyBQbGFudCBDYXJlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIHByb3ZpZGUgYSBmdWxsIHBsYW50aW5nIHNlcnZpY2UsIHdoZXJlIHdlIGNhbiBwcm92aWRlIHRoZSBwbGFudHMgeW91IHJlcXVpcmUgb3IgeW91IGNhbiBwcm92aWRlIHRoZW0gaWYgeW91IHByZWZlci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBjYW4gb2ZmZXIgYWR2aWNlIGFuZCBoZWxwIHlvdSBzZWxlY3QgdGhlIHJpZ2h0IHBsYW50cyBmb3IgeW91ciBnYXJkZW4gdGhhdCB3aWxsIGdpdmUgeW91IG9uZ29pbmcgZW5qb3ltZW50LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInIGlkPSdoZWRnZS1wcnVuaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02IGNvbC1tZC0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkhlZGdlICZhbXA7IFRyZWUgUHJ1bmluZzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HcmVlbnNjYXBlcyBjYW4gcHJvdmlkZSBhIHRyaW1taW5nIGFuZCBsb3dlcmluZyBvZiBhbGwgdHlwZXMgb2YgaGVkZ2VzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGNhbiBwcnVuZSBhbmQgZmVsbCBhbGwgdHlwZXMgb2YgdHJlZXMgdG8gYSBoaWdoIHN0YW5kYXJkLiAgV2UgY2FuIGFsc28gYXJyYW5nZSBzdHVtcCByZW1vdmFsLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIHdpbGwgbGVhdmUgeW91ciBnYXJkZW4gbG9va2luZyB0aWR5IHJlbW92aW5nIGFsbCB3YXN0ZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02IGNvbC1tZC0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGltYWdlcz17aGVkZ2VQcnVuaW5nSW1hZ2VzfSBzaG93VGh1bWJuYWlscz17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJyBpZD0naGVkZ2UtcGxhbnRpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYgY29sLW1kLTEyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgaW1hZ2VzPXtoZWRnZVBsYW50aW5nSW1hZ2VzfSBzaG93VGh1bWJuYWlscz17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02IGNvbC1tZC0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkhlZGdlIFBsYW50aW5nPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIHByb3ZpZGUgYSBmdWxsIGhlZGdlIHBsYW50aW5nIHNlcnZpY2UsIHdoZXJlIHdlIGNhbiBwcm92aWRlIHRoZSBoZWRnaW5nIHlvdSByZXF1aXJlIG9yIHlvdSBjYW4gcHJvdmlkZSB0aGVtIGlmIHlvdSBwcmVmZXIuIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGNhbiBvZmZlciBhZHZpc2Ugb24gaG93IHRvIG1haW50YWluIHlvdXIgaGVkZ2UgYWZ0ZXIgcGxhbnRpbmcgb3Igd2UgY2FuIG1haW50YWluIGl0IGZvciB5b3UgYW5kIGhlbHAgaXQgZm9ybSBpbiB0byBhIHN0cm9uZyBoZWRnZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3QtdGFnLW1lZGlhJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNiBjb2wtbWQtNyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0YWcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj5UYWdzOjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YT5Qcm9qZWN0cyw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGE+U2VydmljZXMsPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhPkdhbGxlcnk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmZhLWNoZWNrLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzk5MzU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4pICAgXG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIl19 */\n/*@ sourceURL=/Users/user1/Documents/development/greenscapes/greenscapes-domestic/pages/services.js */"), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./utils/sib.helpers.js":
/*!******************************!*\
  !*** ./utils/sib.helpers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const path = require('path');
// require('dotenv').config({path: path.join(__dirname, '../.env')});
const SibApiV3Sdk = __webpack_require__(/*! sib-api-v3-sdk */ "sib-api-v3-sdk"); // console.log(SibApiV3Sdk.ApiClient.instance)


const defaultClient = SibApiV3Sdk.ApiClient.instance; // const moment = require('moment');
// Configure API key authorization: api-key

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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'; // // // Configure API key authorization: partner-key
// let partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = process.env.SIBKEY;
// // send contact form submitted

function sendContactForm(name, email, subject, phone, message) {
  const apiInstance = new SibApiV3Sdk.SMTPApi();
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.sender = {
    name: 'Greenscapes Gardening Sevices',
    email: 'simon@greenscapes-gardening.co.uk'
  };
  sendSmtpEmail.to = [{
    email: email,
    name: name
  }, {
    name: 'Greenscapes Gardening',
    email: 'simon@greenscapes-gardening.co.uk'
  }];
  sendSmtpEmail.replyTo = {
    email: email
  };
  sendSmtpEmail.templateId = 1;
  sendSmtpEmail.tags = ['support'];
  sendSmtpEmail.params = {
    FIRSTNAME: name,
    MESSAGE: message,
    PHONE: phone,
    EMAIL: email
  };
  apiInstance.sendTransacEmail(sendSmtpEmail).then(res => console.log(res)).catch(e => console.log(e));
} // create new contact


function createNewContact(name, email, subject, phone, message) {
  const apiInstance = new SibApiV3Sdk.ContactsApi();
  let createContact = new SibApiV3Sdk.CreateContact();
  createContact.email = email;
  createContact.attributes = {
    FIRSTNAME: name,
    PHONENUMBER: phone
  };
  createContact.listIds = [3];
  apiInstance.createContact(createContact).then(res => {
    console.log(res);
    return {
      success: true,
      msg: 'User added'
    };
  }).catch(e => console.log(e));
}

module.exports = {
  sendContactForm,
  createNewContact
};

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/services.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user1/Documents/development/greenscapes/greenscapes-domestic/pages/services.js */"./pages/services.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-image-gallery":
/*!**************************************!*\
  !*** external "react-image-gallery" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-gallery");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "sib-api-v3-sdk":
/*!*********************************!*\
  !*** external "sib-api-v3-sdk" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sib-api-v3-sdk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=services.js.map