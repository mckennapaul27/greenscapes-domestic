(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ");function s(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n("q1tI")),c=n("8L3h"),u=n("jwwS"),d=[],f=[],h=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function m(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var a=p(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return l.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function y(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),r=null;function a(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack){var i=n.webpack();f.push((function(e){var t,n=s(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return a()}}catch(o){n.e(o)}finally{n.f()}}))}var o=function(e,t){a();var s=l.default.useContext(u.LoadableContext),i=c.useSubscription(r);return l.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),s&&Array.isArray(n.modules)&&n.modules.forEach((function(e){s(e)})),i.loading||i.error?l.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null};return o.preload=function(){return a()},o.displayName="LoadableComponent",l.default.forwardRef(o)}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return y(p,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}g.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(m,e)},g.preloadAll=function(){return new Promise((function(e,t){_(d).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};_(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady,t.default=g},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var r,a=n("q1tI");var s=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),i=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return s.computeId(t,n)})).join(" ")};var a=r.prototype;return a.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},a.componentWillUnmount=function(){s.remove(this.props)},a.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},r}(a.Component);t.default=i},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),s=n("Ji7U"),i=n("md7G"),o=n("foSv"),l=n("q1tI"),c=n.n(l),u=n("JX7q"),d=n("rePB"),f=n("YFqc"),h=n.n(f),p=n("Bi3C"),m=n.n(p),v=c.a.createElement;function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=function(e){Object(s.a)(f,e);var t,l=(t=f,function(){var e,n=Object(o.a)(t);if(y()){var r=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function f(){var e;Object(r.a)(this,f);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e=l.call.apply(l,[this].concat(n)),Object(d.a)(Object(u.a)(e),"state",{collapsed:!0}),Object(d.a)(Object(u.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(a.a)(f,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",r=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return v(c.a.Fragment,null,v("nav",{id:"navbar",className:"navbar navbar-expand-lg navbar-style-one navbar-light bg-light"},v("div",{className:"container"},v(h.a,{href:"/"},v("a",{className:"navbar-brand"},v("img",{src:n("Hin1"),alt:"logo",style:{maxWidth:"150px"}}),v("img",{src:n("OiSC"),alt:"logo",style:{maxWidth:"125px"}}))),v("button",{onClick:this.toggleNavbar,className:r,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},v("span",{className:"navbar-toggler-icon"})),v("div",{className:t,id:"navbarSupportedContent"},v("ul",{className:"navbar-nav ml-auto"},v("li",{className:"nav-item"},v(h.a,{href:"/"},v("a",{className:"nav-link"},"Home"))),v("li",{className:"nav-item"},v(m.a,{onClick:this.toggleNavbar,href:"#about"},v("a",{className:"nav-link"},"About"))),v("li",{className:"nav-item"},v(h.a,{href:"/services"},v("a",{className:"nav-link"},"Services"))),v("li",{className:"nav-item"},v(h.a,{href:"/garden-maintenance"},v("a",{className:"nav-link"},"Garden Maintenance"))),v("li",{className:"nav-item"},v(h.a,{href:"/landscaping"},v("a",{className:"nav-link"},"Landscaping"))),v("li",{className:"nav-item"},v(h.a,{href:"/blog"},v("a",{className:"nav-link"},"Blog")))),v("ul",{className:"others-option"},v("li",null,v(m.a,{onClick:this.toggleNavbar,href:"#contact"},v("button",{className:"btn btn-primary"},"Contact Us"))))))))}}]),f}(l.Component),g=n("g7ta"),_=c.a.createElement;function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var w=function(e){Object(s.a)(l,e);var t,n=(t=l,function(){var e,n=Object(o.a)(t);if(S()){var r=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function l(){var e;Object(r.a)(this,l);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=n.call.apply(n,[this].concat(a)),Object(d.a)(Object(u.a)(e),"state",{isOpen:!1}),Object(d.a)(Object(u.a)(e),"openModal",(function(){e.setState({isOpen:!0})})),e}return Object(a.a)(l,[{key:"render",value:function(){return _(c.a.Fragment,null,_("div",{id:"home",className:"main-banner jarallax","data-jarallax":"{'speed': 0.2}"},_("div",{className:"d-table"},_("div",{className:"d-table-cell"},_("div",{className:"container"},_("div",{className:"main-banner-content"},_("h1",null,"Greenscapes Gardening Services Cheshire & South Manchester"),_("p",null,"Reliable Cheshire gardeners. We are making your outdoor dreams come true. Experienced domestic garden maintenance."),"=",_("div",{className:"btn-box"},_(m.a,{onClick:this.toggleNavbar,offset:function(){return-10},href:"#contact"},_("button",{className:"btn btn-primary"},"Contact Us Today")))))))))}}]),l}(l.Component),j=n("wx14"),O=n("MX0m"),N=n.n(O),R=n("a6RD"),k=n.n(R),C=c.a.createElement;function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=k()((function(){return n.e(10).then(n.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),P={loop:!0,nav:!1,dots:!1,autoplayHoverPause:!0,autoplay:!0,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:2},768:{items:3},1024:{items:4},1200:{items:6}}},A=function(e){Object(s.a)(l,e);var t,n=(t=l,function(){var e,n=Object(o.a)(t);if(x()){var r=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function l(){var e;Object(r.a)(this,l);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=n.call.apply(n,[this].concat(a)),Object(d.a)(Object(u.a)(e),"state",{display:!1}),e}return Object(a.a)(l,[{key:"componentDidMount",value:function(){this.setState({display:!0})}},{key:"render",value:function(){return C("section",{className:"jsx-1471720324 partner-area"},C("div",{className:"jsx-1471720324 container"},C("h3",{className:"jsx-1471720324"},"Trusted by customers in your area"),C("div",{className:"jsx-1471720324 row"},this.state.display?C(F,Object(j.a)({className:"partner-slides owl-carousel owl-theme"},P),["Wilmslow","Alderley Edge","Poynton","Bramhall","Prestbury","Hazel Grove","Handforth"].map((function(e){return C("div",{key:e,className:"jsx-1471720324 col-lg-12 col-md-12"},C("div",{className:"jsx-1471720324 partner-item"},C("a",{href:"",className:"jsx-1471720324"},e)))}))):"")),C(N.a,{id:"1471720324"},["a.jsx-1471720324{color:#FFFF;font-size:1.25rem;font-weight:bold;}"]))}}]),l}(l.Component),T=c.a.createElement;function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var E=function(e){Object(s.a)(c,e);var t,l=(t=c,function(){var e,n=Object(o.a)(t);if(D()){var r=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function c(){return Object(r.a)(this,c),l.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return T("section",{id:"about",className:"about-area ptb-100"},T("div",{className:"container"},T("div",{className:"row align-items-center"},T("div",{className:"col-lg-6 col-md-12"},T("div",{className:"about-image"},T("img",{src:n("k4F0"),alt:"image"}))),T("div",{className:"col-lg-6 col-md-12"},T("div",{className:"about-content"},T("h2",null,"About Greenscapes Gardening"),T("p",null,"Greenscapes are a Cheshire based garden maintenanace and landscaping company, that covers all South Manchester and surrounding areas."),T("div",{className:"row"},T("div",{className:"col-lg-6 col-md-6"},T("div",{className:"single-inner-content"},T("div",{className:"title"},T("div",{className:"icon"},T("i",{className:"fas fa-pound-sign"})),T("h3",null,"Competitive Prices")),T("p",null,"Greenscapes gives FREE quotations, no job is too big or too small, we offer very competitive prices along with high standards of work."))),T("div",{className:"col-lg-6 col-md-6"},T("div",{className:"single-inner-content"},T("div",{className:"title"},T("div",{className:"icon"},T("i",{className:"fas fa-comments"})),T("h3",null,"Fulfil Your Dream")),T("p",null,"Whether it's keeping it presentable all year round or planting some bright colours for the summer, imagine a garden you will never have to worry about."))),T("div",{className:"col-lg-6 col-md-6"},T("div",{className:"single-inner-content"},T("div",{className:"title"},T("div",{className:"icon"},T("i",{className:"fas fa-tree"})),T("h3",null,"High Quality Work")),T("p",null,"Whether you just want your hedges pruned or a larger project, Greenscapes always provides a high standard quality of work and offer a full range of services to choose from.."))),T("div",{className:"col-lg-6 col-md-6"},T("div",{className:"single-inner-content"},T("div",{className:"title"},T("div",{className:"icon"},T("i",{className:"fas fa-thumbs-up"})),T("h3",null,"Best result")),T("p",null,"We always offer you the best by being able to meet any demand needed, which shows with the repeat customers who love the end result and reliability of Greenscapes.")))),T("a",{href:"tel:0161 425 0035",className:"btn btn-primary"},"Call Greenscapes Today"))))),T("div",{className:"circle"},T("img",{src:n("sGA2"),alt:"cricle"})))}}]),c}(l.Component),z=c.a.createElement;function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I=k()((function(){return n.e(10).then(n.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),B={loop:!0,nav:!1,dots:!1,autoplayHoverPause:!0,autoplay:!0,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1},768:{items:2},1200:{items:3}}},G=function(e){Object(s.a)(l,e);var t,n=(t=l,function(){var e,n=Object(o.a)(t);if(M()){var r=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function l(){var e;Object(r.a)(this,l);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=n.call.apply(n,[this].concat(a)),Object(d.a)(Object(u.a)(e),"state",{display:!1}),e}return Object(a.a)(l,[{key:"componentDidMount",value:function(){this.setState({display:!0})}},{key:"render",value:function(){return z("section",{id:"testimonials",className:"feedback-area ptb-100"},z("div",{className:"container"},z("div",{className:"section-title"},z("h2",null,"Our customer feedback"),z("p",null,"Please see our range of services that we offer and the testimonials that show the high service we provide.")),z("div",{className:"row"},this.state.display?z(I,Object(j.a)({className:"feedback-slides owl-carousel owl-theme"},B),[{name:"Andrew",content:"GreenScapes have just re-turfed all my garden and generally tidied. I was so pleased with my finished garden! It looks totally transformed! Simon and his colleague have done a fantastic job!",area:"Bramhall"},{name:"Sylvia",content:"Reliable, considerate and knowledgeable, Simon and his team always know what to do in the garden and when. Thanks for all your help and advice.",area:"Pott Shrigley"},{name:"Erica",content:"Greenscapes regularly cuts almost an acre of undulating lawn and trims a mature laylandii hedge for us. They are very trustworthy, efficient and tidy.",area:"Marple"},{name:"John",content:"We have used Simon for the last 12 months and he has transformed the look of our garden. He is totally reliable, always tidy ,knowledgable and has a well structure system for payments. ",area:"Poynton"}].map((function(e){return z("div",{key:e.name,className:"col-lg-12 col-md-12"},z("div",{className:"feedback-item"},z("p",null,e.content),z("div",{className:"client-info"},z("h3",null,e.name),z("span",null,e.area))))}))):"")))}}]),l}(l.Component),q=n("77rn"),W=c.a.createElement;function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var H=function(e){Object(s.a)(c,e);var t,l=(t=c,function(){var e,n=Object(o.a)(t);if(L()){var r=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function c(){return Object(r.a)(this,c),l.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return W("section",{id:"blog",className:"blog-area blog-section ptb-100"},W("div",{className:"container"},W("div",{className:"section-title"},W("h2",null,"Latest News")),W("div",{className:"row"},q.blogs.slice(0,3).map((function(e){return W("div",{className:"col-lg-4 col-md-6",key:e.link},W("div",{className:"single-blog-post"},W("div",{className:"image"},W("img",{src:n("Woiz")("./".concat(e.img)),alt:"image"})),W("div",{className:"blog-post-content"},W("h3",null,W("a",{href:"#"},e.title)),W("p",null,e.intro),W(h.a,{href:"/blog/".concat(e.link)},W("a",{className:"read-more-btn"},"Read More")))))})))))}}]),c}(l.Component),U=n("G96P"),X=c.a.createElement;function J(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var V=k()((function(){return n.e(10).then(n.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),Y={loop:!0,nav:!1,dots:!0,autoplayHoverPause:!0,autoplay:!1,navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],responsive:{0:{items:1},768:{items:2},1200:{items:3}}},Z=function(e){Object(s.a)(c,e);var t,l=(t=c,function(){var e,n=Object(o.a)(t);if(J()){var r=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function c(){var e;Object(r.a)(this,c);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e=l.call.apply(l,[this].concat(n)),Object(d.a)(Object(u.a)(e),"state",{display:!1}),e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){this.setState({display:!0})}},{key:"render",value:function(){return X("section",{id:"services",className:"services-area ptb-100 bg-f9f9f9"},X("div",{className:"container"},X("div",{className:"lead-generation-section-title"},X("span",null,"Services"),X("h2",null,"We Offer Many Services to Our Great Customers"),X("div",{className:"bar"}),X("p",null,"We ensure all our staff are reliable, well presented in uniform and polite at all times. We offer no obligation quotes and would be happy to discuss your garden requirements. Please see our range of services that we offer and the testimonials that show the high service we provide.")),X("div",{className:"row"},this.state.display?X(V,Object(j.a)({className:"services-slides owl-carousel owl-theme"},Y),q.services.map((function(e){return X("div",{key:e.title,className:"col-lg-12 col-md-12"},X("div",{className:"services-box"},X("img",{src:n("Woiz")("./".concat(e.src))}),X("div",{className:"services-content"},X("h3",null,e.title),X("p",null,e.desc),X("ul",null,X(h.a,{href:"/services#".concat(e.id)},X("li",{className:"bg-cdf1d8",style:{cursor:"pointer"}},"Read more"))))))}))):"")))}}]),c}(l.Component),Q=n("TRj5"),$=c.a.createElement;function K(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ee=function(e){Object(s.a)(l,e);var t,n=(t=l,function(){var e,n=Object(o.a)(t);if(K()){var r=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function l(){return Object(r.a)(this,l),n.apply(this,arguments)}return Object(a.a)(l,[{key:"render",value:function(){return $(c.a.Fragment,null,$(Q.a,{title:"Greenscapes Gardening | Call Us Today",desc:"Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire",url:"https://www.greenscapes-gardening.co.uk"}),$(b,null),$(w,null),$(A,null),$(E,null),$(Z,null),$(H,null),$(U.a,null),$(G,null),$(g.a,null))}}]),l}(l.Component);t.default=ee},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n("9kyW")),a=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,i=void 0!==s&&s,o=t.isBrowser,l=void 0===o?"undefined"!==typeof window:o;this._sheet=r||new a.default({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,a=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=a.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var a=String(n),s=t+a;return e[s]||(e[s]="jsx-"+(0,r.default)(t+"-"+a)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var a=n+r;return t[a]||(t[a]=r.replace(e,n)),t[a]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,a=e.id;if(r){var s=this.computeId(a,r);return{styleId:s,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,n)]}}return{styleId:this.computeId(a),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=i},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),s=r(n("2qu3")),i=!1;function o(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return a.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=o,t.default=function(e,t){var n=s.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=s.default.Map;var a={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=a}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,o(n,r);delete r.ssr}return n(r)}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,s=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,l=void 0===o?r:o,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;i(a(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",i("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,o,l=e.prototype;return l.setOptimizeForSpeed=function(e){i("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},l.isOptimizeForSpeed=function(){return this._optimizeForSpeed},l.inject=function(){var e=this;if(i(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},l.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},l.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},l.insertRule=function(e,t){if(i(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(o){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},l.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var a=this._tags[e];i(a,"old rule at index `"+e+"` not found"),a.textContent=t}return e},l.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];i(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},l.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},l.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},l.makeStyleTag=function(e,t,n){t&&i(a(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),o&&n(t,o),e}();function i(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,n("8oxB"))},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.LoadableContext=a.createContext(null)},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,4,1,3,6,7,8,11,5]]]);