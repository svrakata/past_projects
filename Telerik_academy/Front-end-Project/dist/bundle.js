!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r.default:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t.default=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l.default:l})}}}("undefined"!=typeof self?self:global)(["1"],[],!1,function($__System){var exports=(this.require,this.exports),module=this.module;!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l.default:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i.import(e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global),$__System.register("2",[],function(_export,_context){"use strict";var layoutHelpers;return{setters:[],execute:function(){layoutHelpers={loggedControls:function(user){var username=user.displayName;return $(".sub-nav__ul").hide(),$(".sub-nav__user-btn").html(username),$(".sub-nav__login-btn").hide(),$(".sub-nav__user-btn").show(),$(".sub-nav__logout-btn").show(),$(".sub-nav__ul").fadeIn(500),""},notLoggedControls:function(){$(".sub-nav__ul").hide(),$(".sub-nav__login-btn").show(),$(".sub-nav__user-btn").hide(),$(".sub-nav__logout-btn").hide(),$(".sub-nav__ul").fadeIn(500)}},_export("default",layoutHelpers)}}}),$__System.register("3",[],function(_export,_context){"use strict";var hbHelpers;return{setters:[],execute:function(){hbHelpers={compare:function(){var _this=this;Handlebars.registerHelper("compare",function(par1,par2,options){return par1===par2?options.fn(_this):options.inverse(_this)})},clearOdd:function(){var _this2=this;Handlebars.registerHelper("clearfix-odd",function(par1,par2,options){return(par1-2)%par2===0?options.fn(_this2):options.inverse(_this2)})},isOdd:function(){var _this3=this;Handlebars.registerHelper("is-odd",function(par1,options){return par1%2===1?options.fn(_this3):options.inverse(_this3)})},generateElements:function(){Handlebars.registerHelper("generator",function(par1,category,options){for(var html="",index=0;index<par1;index+=1)html+=options.fn({number:index+1,category:category,page:index});return html})},subHeaders:function(){Handlebars.registerHelper("subheader",function(category){var html="";return html="environment"===category?new Handlebars.SafeString('<h2 class="category-header__h2">The environment - everything that isn\'t me</h2>'):"science"===category?new Handlebars.SafeString('<h2 class="category-header__h2">From a grain of sand to the vast galaxy, science uncovers secrets around you and me</h2>'):new Handlebars.SafeString('<h2 class="category-header__h2">New technologies, tech reviews, showcases and other content</h2>')})},registerHelpers:function(){hbHelpers.compare(),hbHelpers.clearOdd(),hbHelpers.isOdd(),hbHelpers.generateElements(),hbHelpers.subHeaders()}},_export("default",hbHelpers)}}}),$__System.register("4",["5","6","2","3","7"],function(_export,_context){"use strict";var viewHandler,dataBase,layoutHelpers,hbHelpers,router,layoutController;return{setters:[function(_){viewHandler=_.default},function(_2){dataBase=_2.default},function(_3){layoutHelpers=_3.default},function(_4){hbHelpers=_4.default},function(_5){router=_5.router}],execute:function(){layoutController={init:function(){var _this=this;return hbHelpers.registerHelpers(),this.toastrOptions(),this.filterData().then(function(){return _this.cacheDom()}).then(function(){_this.attachEvents(),_this.render(),_this.colapseMenu(),_this.checkUserStatus()})},toastrOptions:function(){toastr.options.positionClass="toast-top-left",toastr.options.closeButton=!0,toastr.options.newestOnTop=!1,toastr.options.showEasing="swing",toastr.options.hideEasing="swing",toastr.options.closeEasing="swing",toastr.options.showMethod="slideDown",toastr.options.preventDuplicates=!0,toastr.options.timeOut=2e3,toastr.options.extendedTimeOut=2e3},cacheDom:function(){var _this2=this;return viewHandler("layout",{articles:this.articles,comments:this.comments}).then(function(html){_this2.$html=$(html),_this2.$headerSearchForm=_this2.$html.find(".header-search-form"),_this2.$searchFormInput=_this2.$html.find(".header-search-form__input")})},render:function(){$("body").html(this.$html)},filterData:function(){var _this3=this;return Promise.all([dataBase.readDataOnce("/comments"),dataBase.readDataOnce("/articles")]).then(function(data){(data[0].val()||data[1].val())&&(_this3.comments=Object.values(data[0].val()),_this3.comments=_this3.comments.reverse().slice(0,4),_this3.articles=Object.values(data[1].val()),_this3.articles=_this3.articles.reverse().slice(0,4))})},checkUserStatus:function(){dataBase.checkIfLogged(layoutHelpers.loggedControls,layoutHelpers.notLoggedControls)},colapseMenu:function(){$(document).on("click","a, span",".navbar-collapse.in",function(){$(".navbar-collapse.in").collapse("hide")})},attachEvents:function(){this.$headerSearchForm.on("submit",this.search.bind(this))},search:function(e){e.preventDefault();var query=this.$searchFormInput.val();return 0===query.trim().length?void toastr.warning("You havn't written any search criteria."):(this.$searchFormInput.val(""),void router.navigate("/search?"+query))}},_export("default",layoutController)}}}),function(){var define=$__System.amdDefine;!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("8",[],t)&&define("Navigo",["8"],function(m){return m}):"object"==typeof exports?exports.Navigo=t():e.Navigo=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function i(e,t,n){this.root=null,this._routes=[],this._useHash=t,this._hash="undefined"==typeof n?"#":n,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!t&&o(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=t?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):t&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function s(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function r(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}function a(e){var t,n=[];return t=e instanceof RegExp?e:new RegExp(e.replace(i.PARAMETER_REGEXP,function(e,t,o){return n.push(o),i.REPLACE_VARIABLE_REGEXP}).replace(i.WILDCARD_REGEXP,i.REPLACE_WILDCARD)+i.FOLLOWED_BY_SLASH_REGEXP,i.MATCH_REGEXP_FLAGS),{regexp:t,paramNames:n}}function u(e){return e.replace(/\/$/,"").split("/").length}function h(e,t){return u(t)-u(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map(function(t){var n=a(s(t.route)),o=n.regexp,i=n.paramNames,u=e.replace(/^\/+/,"/").match(o),h=r(u,i);return!!u&&{match:u,route:t,params:h}}).filter(function(e){return e})}function d(e,t){return l(e,t)[0]||!1}function c(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),o=s(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:o}function f(){return!!("undefined"!=typeof window&&"onhashchange"in window)}function _(e){return e.split(/\?(.*)?$/).slice(1).join("")}function p(e,t,n){var i,s=e;return"undefined"==typeof n&&(n="#"),o()&&!t?s=e.split(/\?(.*)?$/)[0].split(n)[0]:(i=e.split(n),s=i.length>1?i[1]:i[0]),s}function v(e,t,n){return t&&"object"===("undefined"==typeof t?"undefined":g(t))?void(t.before?t.before(function(){var o=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];o&&(e(),t.after&&t.after(n))},n):t.after&&(e(),t.after&&t.after(n))):void e()}function R(e,t,n){if(o()&&!t)return!1;if(!e.match(n))return!1;var i=e.split(n);return i.length<2||""===i[1]}Object.defineProperty(t,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i.prototype={helpers:{match:d,root:c,clean:s,getOnlyURL:p},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/"),n=n.replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if("function"==typeof n[0])this._defaultHandler={handler:n[0],hooks:n[1]};else if(n.length>=2)if("/"===n[0]){var i=n[1];"object"===g(n[1])&&(i=n[1].uses),this._defaultHandler={handler:i,hooks:n[2]}}else this._add(n[0],n[1],n[2]);else if("object"===g(n[0])){var s=Object.keys(n[0]).sort(h);s.forEach(function(t){e.on(t,n[0][t])})}return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var t,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var r=_(e||this._cLoc()),a=p(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&a===this._lastRouteResolved.url&&r===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=d(a,this._routes))?(this._callLeave(),this._lastRouteResolved={url:a,query:r,hooks:o.route.hooks,params:o.params,name:o.route.name},t=o.route.handler,v(function(){v(function(){o.route.route instanceof RegExp?t.apply(void 0,n(o.match.slice(1,o.match.length))):t(o.params,r)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===a||"/"===a||a===this._hash||R(a,this._useHash,this._hash))?(v(function(){v(function(){i._callLeave(),i._lastRouteResolved={url:a,query:r,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(r)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&v(function(){v(function(){i._callLeave(),i._lastRouteResolved={url:a,query:r,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(r)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e){n=o.route;for(i in t)n=n.toString().replace(":"+i,t[i])}return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,e?this._historyAPIUpdateMethod="replaceState":this._historyAPIUpdateMethod="pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return"undefined"==typeof e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){o()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.pathname||e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof e&&(e=encodeURI(e)),"object"===("undefined"==typeof t?"undefined":g(t))?this._routes.push({route:e,handler:t.uses,name:t.as,hooks:n||t.hooks}):this._routes.push({route:e,handler:t,hooks:n}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=c(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if(f())window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?"undefined"!=typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:s(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){this._lastRouteResolved&&this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.leave&&this._lastRouteResolved.hooks.leave()}},i.PARAMETER_REGEXP=/([:*])(\w+)/g,i.WILDCARD_REGEXP=/\*/g,i.REPLACE_VARIABLE_REGEXP="([^/]+)",i.REPLACE_WILDCARD="(?:.*)",i.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",i.MATCH_REGEXP_FLAGS="",t.default=i,e.exports=t.default}])})}(),$__System.register("9",["5","6"],function(_export,_context){"use strict";var viewHandler,dataBase,homeController;return{setters:[function(_){viewHandler=_.default},function(_2){dataBase=_2.default}],execute:function(){homeController={init:function(){var _this=this;this.filterData().then(function(){return _this.cacheDom()}).then(function(){_this.render(),_this.initCarousel()})},cacheDom:function(){var _this2=this;return viewHandler("home",{articles:this.articles,carouselArticles:this.carouselArticles,mainArticles:this.mainArticles,popularArticles:this.popularArticles}).then(function(html){_this2.$html=$(html),_this2.$contentBucket=$(".content-bucket")})},render:function(){this.$contentBucket.html(this.$html)},filterData:function(){var _this3=this;return dataBase.readDataOnce("/articles").then(function(data){_this3.articles=Object.values(data.val()),_this3.carouselArticles=_this3.articles.reverse().slice(0,5),_this3.mainArticles=_this3.articles.slice(5,11),_this3.popularArticles=_this3.articles.filter(function(ele){return ele.commentCount>2}).slice(0,3)})},initCarousel:function(){$(".owl-carousel").owlCarousel({nav:!0,loop:!0,margin:0,navText:[$(".small-carousel__right-button"),$(".small-carousel__left-button")],responsive:{0:{items:3},400:{items:5},768:{items:8}}})}},_export("default",homeController)}}}),$__System.register("a",["5"],function(_export,_context){"use strict";var viewHandler,notFoundController;return{setters:[function(_){viewHandler=_.default}],execute:function(){notFoundController={init:function(){var _this=this;this.cacheDom().then(function(){return _this.render()})},cacheDom:function(){var _this2=this;return viewHandler("not-found").then(function(html){return _this2.$html=$(html)})},render:function(){$(".content-bucket").html(this.$html)}},_export("default",notFoundController)}}}),$__System.register("b",["5","6"],function(_export,_context){"use strict";var viewHandler,dataBase,categoryController;return{setters:[function(_){viewHandler=_.default},function(_2){dataBase=_2.default}],execute:function(){categoryController={init:function(param,query){var _this=this;this.firstVisit=!1,this.filterData(param,query).then(function(){return _this.cacheDom()}).then(function(){_this.render(),_this.visited=!0})},cacheDom:function(){var _this2=this;return""!==this.page&&this.articles&&!this.firstVisit?viewHandler("category-article",{articlesFragment:this.articlesFragment}).then(function(html){_this2.$htmlFragment=$(html)}):viewHandler("category",{category:this.category,pages:this.pages,archive:this.archive}).then(function(html){return _this2.$html=$(html),_this2.$categoryBucket=_this2.$html.find(".category-articles__bucket"),viewHandler("category-article",{articlesFragment:_this2.articlesFragment})}).then(function(html){_this2.$htmlFragment=$(html)})},render:function(){""!==this.page&&this.articles&&!this.firstVisit?($(this.$categoryBucket).hide(),$(this.$categoryBucket).html(this.$htmlFragment),$(this.$categoryBucket).fadeIn(800),$("html, body").animate({scrollTop:0},500)):(this.$categoryBucket.html(this.$htmlFragment),$(".content-bucket").html(this.$html),$(this.$categoryBucket).hide(),$(this.$categoryBucket).fadeIn(800),$("html, body").animate({scrollTop:0},500))},filterData:function(param,query){var _this3=this;return this.category=param.category,this.page=query,this.category.indexOf("?")!==-1&&(this.category=this.category.split("?"),this.category=this.category[0],this.firstVisit=!0),""!==this.page&&this.articles?(this.articlesFragment=this.articles.slice(3*this.page,3*this.page+3),Promise.resolve(this.articlesFragment)):dataBase.readDataOnce("/articles").then(function(data){_this3.articles=Object.values(data.val()),_this3.articles=_this3.articles.filter(function(ele){return ele.category.toLowerCase()===_this3.category}),_this3.arLength=_this3.articles.length,_this3.pages=Math.ceil(_this3.arLength/3),_this3.archive=_this3.articles.slice(_this3.arLength-5,_this3.arLength-1),_this3.articlesFragment=_this3.articles.slice(3*_this3.page,3*_this3.page+3)})}},_export("default",categoryController)}}}),$__System.register("c",[],function(_export,_context){"use strict";var date;return{setters:[],execute:function(){date={currentDate:function(){return this.date=new Date,this.day=this.date.getDate(),this.month=this.date.getMonth()+1,this.year=this.date.getFullYear(),this.hours=this.date.getHours(),this.minutes=this.date.getMinutes(),this.seconds=this.date.getSeconds(),this.day<10&&(this.day="0"+this.day),this.month<10&&(this.month="0"+this.month),this.hours<10&&(this.hours="0"+this.hours),this.minutes<10&&(this.minutes="0"+this.minutes),this.seconds<10&&(this.seconds="0"+this.seconds),this.year+"-"+this.month+"-"+this.day+" at "+this.hours+":"+this.minutes+":"+this.seconds}},_export("default",date)}}}),$__System.register("d",["5","6","c"],function(_export,_context){"use strict";var viewHandler,dataBase,date,articleCategory;return{setters:[function(_){viewHandler=_.default},function(_2){dataBase=_2.default},function(_c){date=_c.default}],execute:function(){articleCategory={init:function(param){var _this=this;this.filterData(param).then(function(){return _this.cacheDom()}).then(function(){return _this.render()}).then(function(){return _this.stateCheck()}).then(function(){return _this.bindEvents()})},cacheDom:function(comment){var _this2=this;return comment?viewHandler("new-comment",comment).then(function(html){_this2.$comment=$(html)}):viewHandler("article",{article:this.article,articleComments:this.articleComments,latestComments:this.latestComments}).then(function(html){_this2.$html=$(html),_this2.$commentButton=_this2.$html.find(".article-comment-form__button"),_this2.$commentInput=_this2.$html.find(".article-comment-form__textarea"),_this2.$articleComments=_this2.$html.find(".article-comments"),_this2.$countSpan=_this2.$html.find(".article-item__count-span")})},render:function(){$(".content-bucket").html(this.$html),$("html, body").animate({scrollTop:0},500)},filterData:function(param){var _this3=this;return this.articleId=param.articleId,Promise.all([dataBase.readDataOnce("/articles/"+this.articleId),dataBase.readDataOnce("/comments")]).then(function(data){_this3.article=data[0].val(),_this3.article.category=_this3.article.category.toLowerCase(),data[1].val()&&(_this3.comments=Object.values(data[1].val()),_this3.articleComments=_this3.comments.filter(function(ele){return ele.articleId===_this3.articleId}).reverse(),_this3.comments.reverse(),_this3.latestComments=_this3.comments.slice(0,10))})},bindEvents:function(){this.$commentButton.on("click",this.createComment.bind(this))},createComment:function(){var _this4=this,comment={};return comment.text=this.$commentInput.val(),this.user?0===comment.text.trim().length?void toastr.warning("You havn't written any comment."):(comment.username=this.user.displayName,comment.email=this.user.email,comment.articleId=this.articleId,comment.date=date.currentDate(),void dataBase.updateData("/comments",comment).then(function(){return dataBase.updateChild("/articles/"+_this4.articleId,{commentCount:_this4.article.commentCount+1})}).then(function(){return _this4.cacheDom(comment)}).then(function(){_this4.$commentInput.val("");var com=+_this4.$countSpan.html()+1;_this4.$countSpan.html(com),_this4.$articleComments.prepend(_this4.$comment)})):void toastr.warning("Please log in or register to leave a reply.")},stateCheck:function(){var _this5=this;return this.logged=function(user){_this5.user=user},this.notLogged=function(){_this5.$commentInput.attr("placeholder","Please log in or register to leave a reply.")},dataBase.checkIfLogged(this.logged,this.notLogged)}},_export("default",articleCategory)}}}),$__System.register("e",[],function(_export,_context){"use strict";var validator;return{setters:[],execute:function(){validator={patterns:{password_pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,user_name_pattern:/\S[_a-zA-Z0-9]{5,10}/,email_pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i},messages:{invalid_password_message:"The password must be at least 6 symbols long and contain at least one uppercase, lowercase and a number.",invalid_username_message:"The username must be between 6 and 10 symbols and include only letters, numbers and underscores.",invalid_email_messages:"The email is badly formatted.",empty_username_field:"Please enter username.",empty_password_field:"Please enter password.",empty_email_field:"Please enter email address."},username:function(_username){if(""===_username)throw this.messages.empty_username_field;if(!this.patterns.user_name_pattern.test(_username))throw this.messages.invalid_username_message},email:function(_email){if(""===_email)throw this.messages.empty_email_field;if(!this.patterns.email_pattern.test(_email))throw this.messages.invalid_email_messages},password:function(_password){if(""===_password)throw this.messages.empty_password_field;if(!this.patterns.password_pattern.test(_password))throw this.messages.invalid_password_message},registerValidation:function(username,email,password){return Promise.resolve([this.username(username),this.email(email),this.password(password)])}},_export("default",validator)}}}),$__System.register("f",["5","6","e","7"],function(_export,_context){"use strict";var viewHandler,dataBase,validator,router,authController;return{setters:[function(_){viewHandler=_.default},function(_2){dataBase=_2.default},function(_e){validator=_e.default},function(_3){router=_3.router}],execute:function(){authController={init:function(){var _this=this;this.cacheDom().then(function(){_this.attachEvents(),_this.render()})},cacheDom:function(){var _this2=this;return viewHandler("auth").then(function(html){_this2.$html=$(html),_this2.$showReg=_this2.$html.find(".auth-forms__register-btn"),_this2.$showLog=_this2.$html.find(".auth-forms__login-btn"),_this2.$loginForm=_this2.$html.find(".login-form"),_this2.$registerForm=_this2.$html.find(".register-form")})},attachEvents:function(){var _this3=this;this.$showReg.on("click",function(){_this3.$loginForm.hide(),_this3.$registerForm.show()}),this.$showLog.on("click",function(){_this3.$registerForm.hide(),_this3.$loginForm.show()}),this.$loginForm.on("submit",this.login.bind(this)),this.$registerForm.on("submit",this.register.bind(this))},render:function(){$(".content-bucket").html(this.$html)},register:function(e){e.preventDefault();var data=this.$registerForm.serializeArray(),usr=void 0,validate=new Promise(function(resolve){validator.username(data[0].value),validator.email(data[1].value),validator.password(data[2].value),resolve()});validate.then(function(){return dataBase.register(data[1].value,data[2].value)}).then(function(user){return usr={uid:user.uid,username:data[0].value,email:data[1].value,imageUrl:"/assets/images/default-profile.png"},$(".sub-nav__user-btn").html(usr.username),user.updateProfile({displayName:usr.username})}).then(function(){return dataBase.updateUserCollection(usr,usr.uid)}).then(function(){toastr.success("Registration successful!"),router.navigate("/home")}).catch(function(er){var msg=er.message||er;toastr.error(msg)})},login:function(e){e.preventDefault();var data=this.$loginForm.serializeArray(),validate=new Promise(function(resolve){validator.email(data[0].value),resolve()});validate.then(function(){return dataBase.login(data[0].value,data[1].value)}).then(function(){toastr.success("Logged in successfully!"),router.navigate("/home")}).catch(function(er){var msg=er.message||er;toastr.error(msg)})},logout:function(){dataBase.logOut().then(function(){toastr.success("Logged out successfully!"),router.navigate("/home")})}},_export("default",authController)}}}),$__System.register("10",["5","6"],function(_export,_context){"use strict";var viewHandler,dataBase,profileController;return{setters:[function(_){viewHandler=_.default},function(_2){dataBase=_2.default}],execute:function(){profileController={init:function(){var _this=this;this.filterData().then(function(){return _this.cacheDom()}).then(function(){return _this.render()})},cacheDom:function(){var _this2=this;return viewHandler("profile",this.user).then(function(html){_this2.$html=$(html);
})},render:function(){$(".content-bucket").html(this.$html)},attachEvents:function(){},filterData:function(){var _this3=this;return dataBase.readUserData().then(function(user){_this3.user=user.val()})}},_export("default",profileController)}}}),$__System.register("11",[],function(_export,_context){"use strict";var config;return{setters:[],execute:function(){config={apiKey:"AIzaSyAfx4LbIQYEl9Xbq4RKxyoMXkeFj8qHncI",authDomain:"donothingclub7.firebaseapp.com",databaseURL:"https://donothingclub7.firebaseio.com",projectId:"donothingclub7",storageBucket:"donothingclub7.appspot.com",messagingSenderId:"30139855058"},_export("default",config)}}}),$__System.register("6",["11"],function(_export,_context){"use strict";var config,dataBase;return{setters:[function(_){config=_.default}],execute:function(){firebase.initializeApp(config),dataBase={register:function(email,password){return firebase.auth().createUserWithEmailAndPassword(email,password)},readUserData:function(){var user=firebase.auth().currentUser,userId=void 0;return null!==user?(userId=user.uid,firebase.database().ref("users/"+userId).once("value")):Promise.reject("You're not logged!")},readDataOnce:function(){var path=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return firebase.database().ref(path).once("value")},updateChild:function(){var path=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",data=arguments[1];return firebase.database().ref("/"+path).update(data)},updateData:function(){var path=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",data=arguments[1],newPostKey=firebase.database().ref().child(path).push().key,upload=data;return upload.url=newPostKey,firebase.database().ref("/"+path+"/"+newPostKey).update(data)},updateUserCollection:function(data,uid){return firebase.database().ref("users/"+uid).update(data)},login:function(email,pass){return firebase.auth().signInWithEmailAndPassword(email,pass)},checkIfLogged:function(loggedCallback,notLoggedCallback){return firebase.auth().onAuthStateChanged(function(user){return user?loggedCallback(user):notLoggedCallback()})},logOut:function(){return firebase.auth().signOut()}},_export("default",dataBase)}}}),$__System.register("12",["5","6"],function(_export,_context){"use strict";var viewHandler,dataBase,searchController;return{setters:[function(_){viewHandler=_.default},function(_2){dataBase=_2.default}],execute:function(){searchController={init:function(param,query){var _this=this;this.query=query,this.filterData().then(function(){return _this.cacheDom()}).then(function(){return _this.render()})},cacheDom:function(){var _this2=this;return viewHandler("search",{articles:this.result,resultCount:this.resultCount}).then(function(html){_this2.$html=$(html)})},render:function(){$(".content-bucket").html(this.$html)},attachEvents:function(){},filterData:function(){var _this3=this;return dataBase.readDataOnce("/articles").then(function(data){_this3.articles=Object.values(data.val()),_this3.result=_this3.articles.filter(function(ele){return ele.headline.toLowerCase().includes(_this3.query.toLowerCase())}),_this3.resultCount=_this3.result.length,0===_this3.resultCount?_this3.resultCount="'"+_this3.query+"' does not match any article.":_this3.resultCount=_this3.resultCount+" articles found."})}},_export("default",searchController)}}}),$__System.register("5",[],function(_export,_context){"use strict";function viewHandler(viewName){var viewData=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return $.get("views/"+viewName+".handlebars").then(function(view){var template=Handlebars.compile(view);return template(viewData)})}return{setters:[],execute:function(){_export("default",viewHandler)}}}),$__System.register("13",["5"],function(_export,_context){"use strict";var viewHandler,aboutController;return{setters:[function(_){viewHandler=_.default}],execute:function(){aboutController={init:function(){var _this=this;this.cacheDom().then(function(){return _this.render()})},cacheDom:function(){var _this2=this;return viewHandler("about",this.user).then(function(html){_this2.$html=$(html)})},render:function(){$(".content-bucket").html(this.$html),$("html, body").animate({scrollTop:0},500)}},_export("default",aboutController)}}}),$__System.register("7",["8","9","a","b","d","f","10","12","13"],function(_export,_context){"use strict";var Navigo,homeController,notFoundController,categoryController,articleController,authController,profileController,searchController,aboutController,router,initRoutes;return{setters:[function(_){Navigo=_.default},function(_2){homeController=_2.default},function(_a){notFoundController=_a.default},function(_b){categoryController=_b.default},function(_d){articleController=_d.default},function(_f){authController=_f.default},function(_3){profileController=_3.default},function(_4){searchController=_4.default},function(_5){aboutController=_5.default}],execute:function(){_export("router",router=new Navigo(null,!0,"#")),_export("initRoutes",initRoutes=function(){router.on(function(){homeController.init()}).on("home",function(){homeController.init()}).on("profile",function(){profileController.init()}).on("auth",function(){authController.init()}).on("about",function(){aboutController.init()}).on("search",function(param,query){searchController.init(null,query)}).on("logout",function(){authController.logout()}).on("category/:category",function(param,query){categoryController.init(param,query)}).on("article/:articleId",function(param){articleController.init(param)}).resolve(),router.notFound(function(){notFoundController.init()}).resolve()}),_export("router",router),_export("initRoutes",initRoutes)}}}),$__System.register("1",["4","7"],function(_export,_context){"use strict";var layoutController,initRoutes;return{setters:[function(_){layoutController=_.default},function(_2){initRoutes=_2.initRoutes}],execute:function(){$(function(){layoutController.init().then(function(){return initRoutes()})})}}})})(function(factory){"function"==typeof define&&define.amd?define([],factory):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=factory():factory()});