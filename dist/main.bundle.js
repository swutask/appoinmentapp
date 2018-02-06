webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/forgot/forgot.module": [
		"../../../../../src/app/pages/forgot/forgot.module.ts",
		"forgot.module"
	],
	"app/pages/forgotreset/forgotreset.module": [
		"../../../../../src/app/pages/forgotreset/forgotreset.module.ts",
		"forgotreset.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n:host /deep/ .al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n:host /deep/ .al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n:host /deep/ .subitem-submenu-link .fa {\n  top: 7px; }\n\n:host /deep/ .al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n  :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n    :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n      :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n:host /deep/ .ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\n:host /deep/ a.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n  :host /deep/ a.al-sidebar-list-link:hover {\n    color: #00abff; }\n    :host /deep/ a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n  :host /deep/ a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n  :host /deep/ a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n\n:host /deep/ .slimScrollBar, :host /deep/ .slimScrollRail {\n  border-radius: 0 !important;\n  width: 4px !important;\n  left: 176px; }\n\n:host /deep/ .al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n  :host /deep/ .al-sidebar-sublist.expanded {\n    display: block; }\n  :host /deep/ .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n:host /deep/ .sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  transition: all 0.5s ease;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n:host /deep/ .sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n:host /deep/ .menu-collapsed .slimScrollBar, :host /deep/ .menu-collapsed .slimScrollRail {\n  display: none !important; }\n\n@media (min-width: 1200px) {\n  :host /deep/ .menu-collapsed .al-main {\n    margin-left: 50px; }\n  :host /deep/ .menu-collapsed .al-footer {\n    padding-left: 83px; } }\n\n@media (max-width: 1200px) and (min-width: 500px) {\n  :host /deep/ .al-main {\n    margin-left: 50px; }\n  :host /deep/ .al-footer {\n    padding-left: 83px; } }\n\n@media (min-width: 501px) {\n  :host /deep/ .menu-collapsed .al-sidebar {\n    width: 52px; }\n    :host /deep/ .menu-collapsed .al-sidebar .fa-angle-down, :host /deep/ .menu-collapsed .al-sidebar .fa-angle-up {\n      opacity: 0; }\n    :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist {\n      position: absolute;\n      top: -1px;\n      left: 52px;\n      background: rgba(0, 0, 0, 0.8);\n      width: 0;\n      display: block;\n      overflow: hidden;\n      transition: width 0.5s ease; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist.slide-right {\n        width: 135px; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist::before {\n        display: none; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist li::before {\n        display: none; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist li a {\n        padding-left: 18px;\n        padding-right: 18px;\n        min-width: 130px;\n        white-space: nowrap; }\n    :host /deep/ .menu-collapsed .al-sidebar .sidebar-hover-elem, :host /deep/ .menu-collapsed .al-sidebar .sidebar-select-elem {\n      left: 48px; } }\n\n@media (max-width: 1200px) {\n  :host /deep/ .al-sidebar {\n    width: 180px;\n    background: rgba(0, 0, 0, 0.75);\n    transition: width 0.5s ease; }\n    :host /deep/ .al-sidebar .fa-angle-down, :host /deep/ .al-sidebar .fa-angle-up {\n      opacity: 1; }\n    :host /deep/ .al-sidebar .al-sidebar-sublist {\n      padding: 0;\n      list-style: none;\n      position: relative;\n      display: none;\n      top: auto;\n      left: auto;\n      background: none;\n      width: auto;\n      overflow: visible;\n      transition: none; }\n      :host /deep/ .al-sidebar .al-sidebar-sublist.expanded {\n        display: block; }\n      :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li {\n        display: block;\n        float: none;\n        padding: 0;\n        border-bottom: none;\n        position: relative; }\n        :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li a {\n          display: block;\n          text-shadow: none;\n          font-size: 13px;\n          text-decoration: none;\n          color: #ffffff;\n          padding-left: 52px;\n          height: auto;\n          line-height: 29px; }\n          :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li a:hover {\n            color: #00abff; }\n        :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n          border: none;\n          background-color: #00abff; }\n          :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n            color: #ffffff; }\n    :host /deep/ .al-sidebar .sidebar-hover-elem, :host /deep/ .al-sidebar .sidebar-select-elem {\n      left: 176px;\n      transition: left 0.5s ease; } }\n\n@media (max-width: 500px) {\n  :host /deep/ .menu-collapsed .al-sidebar {\n    width: 0; }\n  :host /deep/ .menu-collapsed .sidebar-hover-elem, :host /deep/ .menu-collapsed .sidebar-select-elem {\n    display: none; }\n  :host /deep/ .al-main {\n    margin-left: 0; }\n  :host /deep/ .al-footer {\n    padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









/*

 * App Component

 * Top Level Component

 */

var App = (function () {

    function App(_state, _imageLoader, _spinner, viewContainerRef, themeConfig) {

        var _this = this;

        this._state = _state;

        this._imageLoader = _imageLoader;

        this._spinner = _spinner;

        this.viewContainerRef = viewContainerRef;

        this.themeConfig = themeConfig;

        this.isMenuCollapsed = false;

        themeConfig.config();

        this._loadImages();

        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {

            _this.isMenuCollapsed = isCollapsed;

        });

    }

    App.prototype.ngAfterViewInit = function () {

        var _this = this;

        // hide spinner once all loaders are completed

        __WEBPACK_IMPORTED_MODULE_2__theme_services__["c" /* BaThemePreloader */].load().then(function (values) {

            setTimeout(function () {

                _this._spinner.hide();

            }, 1000);

        });

    };

    App.prototype._loadImages = function () {

        // register some loaders

        __WEBPACK_IMPORTED_MODULE_2__theme_services__["c" /* BaThemePreloader */].registerLoader(this._imageLoader.load('/assets/img/sky-bg.jpg'));

    };

    return App;

}());

App = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'app',

        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],

        template: "\n    <main [class.menu-collapsed]=\"isMenuCollapsed\" baThemeRun>\n      <div class=\"additional-bg\"></div>\n      <router-outlet></router-outlet>\n    </main>\n  "

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__theme_services__["a" /* BaImageLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_services__["a" /* BaImageLoaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__theme_services__["d" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_services__["d" /* BaThemeSpinner */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__["a" /* BaThemeConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__["a" /* BaThemeConfig */]) === "function" && _e || Object])

], App);



var _a, _b, _c, _d, _e;

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};

















/*





 * Platform and Environment providers/directives/pipes

 */



// App is our top level component













// Application wide providers

var APP_PROVIDERS = [

    __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */],

    __WEBPACK_IMPORTED_MODULE_11__global_state__["a" /* GlobalState */]

];

/**

 * `AppModule` is the main entry point into Angular2's bootstraping process

 */

var AppModule = (function () {

    function AppModule(appState) {

        this.appState = appState;

    }

    return AppModule;

}());

AppModule = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({

        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* App */]],

        declarations: [

            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* App */]

        ],

        imports: [

            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],

            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],

            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],

            __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */],

            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],

            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],

            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],

            __WEBPACK_IMPORTED_MODULE_12__theme_nga_module__["a" /* NgaModule */].forRoot(),

            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */].forRoot(),

            __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MaterialModule */],

            __WEBPACK_IMPORTED_MODULE_13__pages_pages_module__["a" /* PagesModule */],

            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],

        ],

        providers: [

            APP_PROVIDERS

        ]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */]) === "function" && _a || Object])

], AppModule);



var _a;

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");


var routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: '**', redirectTo: 'pages/login' }

];

var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true });

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



var AppState = (function () {

    function AppState() {

        this._state = {};

    }

    Object.defineProperty(AppState.prototype, "state", {

        // already return a clone of the current state

        get: function () {

            return this._state = this._clone(this._state);

        },

        // never allow mutation

        set: function (value) {

            throw new Error('do not mutate the `.state` directly');

        },

        enumerable: true,

        configurable: true

    });

    AppState.prototype.get = function (prop) {

        // use our state getter for the clone

        var state = this.state;

        return state.hasOwnProperty(prop) ? state[prop] : state;

    };

    AppState.prototype.set = function (prop, value) {

        // internally mutate our state

        return this._state[prop] = value;

    };

    AppState.prototype._clone = function (object) {

        // simple object clone

        return JSON.parse(JSON.stringify(object));

    };

    return AppState;

}());

AppState = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [])

], AppState);



//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.translation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTranslationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};











function createTranslateLoader(http) {

    return new __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/DE/', '.json');

}

var translationOptions = {

    loader: {

        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],

        useFactory: (createTranslateLoader),

        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]

    }

};

var AppTranslationModule = (function () {

    function AppTranslationModule(translate) {

        this.translate = translate;

        translate.addLangs(["en"]);

        translate.setDefaultLang('en');

        translate.use('en');

    }

    AppTranslationModule.prototype.setDefaultLang = function (lang) {

        this.translate.addLangs([lang]);

        this.translate.setDefaultLang(lang);

        this.translate.use(lang);

    };

    AppTranslationModule.prototype.getCurrentLang = function () {

        return this.translate.currentLang;

    };

    return AppTranslationModule;

}());

AppTranslationModule = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({

        imports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot(translationOptions)],

        exports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]],

        providers: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])

], AppTranslationModule);



var _a;

//# sourceMappingURL=app.translation.module.js.map

/***/ }),

/***/ "../../../../../src/app/global.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var UserType;

(function (UserType) {

    UserType[UserType["client"] = 0] = "client";

    UserType[UserType["admin"] = 1] = "admin";

})(UserType || (UserType = {}));

var GlobalState = (function () {

    function GlobalState() {

        var _this = this;

        this._data = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();

        this._dataStream$ = this._data.asObservable();

        this._subscriptions = new Map();

        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });

    }

    GlobalState.prototype.notifyDataChanged = function (event, value) {

        var current = this._data[event];

        if (current !== value) {

            this._data[event] = value;

            this._data.next({

                event: event,

                data: this._data[event]

            });

        }

    };

    GlobalState.prototype.subscribe = function (event, callback) {

        var subscribers = this._subscriptions.get(event) || [];

        subscribers.push(callback);

        this._subscriptions.set(event, subscribers);

    };

    GlobalState.prototype._onEvent = function (data) {

        var subscribers = this._subscriptions.get(data['event']) || [];

        subscribers.forEach(function (callback) {

            callback.call(null, data['data']);

        });

    };

    GlobalState.prototype.getState = function (event) {

        return this._subscriptions.get(event);

    };

    return GlobalState;

}());

GlobalState.curPage = "clients";

GlobalState.curUser = UserType.admin;

GlobalState = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [])

], GlobalState);



//# sourceMappingURL=global.state.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin/admin-edit/admin-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalHeader}}</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" >\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"companyname\">Name</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.name' name = 'name' class=\"form-control\" id=\"name\" placeholder=\"Company Name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"street\">Street</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.street' name = 'street' class=\"form-control\" id=\"street\" placeholder=\"Street\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"zip\">Zip Code</label>\r\n        <input type=\"number\" [(ngModel)] = 'modalData.zip' name = 'zip' class=\"form-control\" id=\"zip\" placeholder=\"Zip Code\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"city\">City</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.city' name = 'city' class=\"form-control\" id=\"city\" placeholder=\"City\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"country\">Country</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.country' name = 'country' class=\"form-control\" id=\"country\" placeholder=\"Country\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"phone\">Mobile</label>\r\n        <input type=\"number\" [(ngModel)] = 'modalData.mobile' name = 'mobile' class=\"form-control\" id=\"mobile\" placeholder=\"mobile Number\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.email' name = 'email' class=\"form-control\" id=\"email\" placeholder=\"Email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Email</label>\r\n        <input type=\"password\" [(ngModel)] = 'modalData.password' name = 'password' class=\"form-control\" id=\"password\" placeholder=\"password\">\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n            <input *ngIf = \"modalData.status\" type=\"checkbox\" checked>\r\n            <input *ngIf = \"!modalData.status\" type=\"checkbox\">\r\n            <span>Active</span>\r\n          </label>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success confirm-btn\" (click)=\"saveModal()\">Save changes</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin/admin-edit/admin-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var AdminEdit = (function () {

    function AdminEdit(activeModal) {

        this.activeModal = activeModal;

    }

    AdminEdit.prototype.ngOnInit = function () {

        //console.log(this.modalData);

    };

    AdminEdit.prototype.saveModal = function () {

        this.activeModal.close();

    };

    AdminEdit.prototype.closeModal = function () {

        this.activeModal.close();

    };

    return AdminEdit;

}());

AdminEdit = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'edit-admin-modal',

        styles: [__webpack_require__(("../../../../../src/app/pages/admin/admin/admin-edit/admin-edit.scss"))],

        template: __webpack_require__("../../../../../src/app/pages/admin/admin/admin-edit/admin-edit.component.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])

], AdminEdit);



var _a;

//# sourceMappingURL=admin-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin/admin-edit/admin-edit.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-buttons .btn {\n  margin-right: 20px; }\n\n.modal-content {\n  color: white;\n  background-color: #5491cb; }\n\n.checkbox {\n  display: inline-block;\n  margin-bottom: -12px;\n  margin-left: 12px; }\n\ndiv.category {\n  display: inherit; }\n  div.category select {\n    margin-left: 11px; }\n  div.category label {\n    padding: 5px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_companies_service__ = __webpack_require__("../../../../../src/app/services/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};















var AdminTables = (function () {

    function AdminTables(dataService, modalService, companyiesServices, _service, _langService) {

        var _this = this;

        this.dataService = dataService;

        this.modalService = modalService;

        this.companyiesServices = companyiesServices;

        this._service = _service;

        this._langService = _langService;

        this.filterQuery = '';

        this.rowsOnPage = 10;

        this.sortBy = 'email';

        this.sortOrder = 'asc';

        this.options = {

            position: ["top", "right"],

            timeOut: 3000,

            lastOnBottom: true,

            clickToClose: true,

            animation: 'scale',

            showProgressBar: false,

            maxLength: 100

        };

        this.sortByWordLength = function (a) {

            return a.city.length;

        };

        this.loading = true;

        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.companyiesServices.getCompanies().then(function (data) {

            _this.companies = data;

        });

        if (localStorage.getItem('lang') == 'de') {

            this._langService.getDEJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        else {

            this._langService.getENJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        this.dataService.getAdminUsers().then(function (data) {

            _this.data = data;

            //console.log(this.data);

            if (localStorage.getItem('lang') === "en") {

                _this.settings = {

                    add: {

                        addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                        createButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmCreate: true,

                    },

                    edit: {

                        editButtonContent: '<i class="ion-edit"></i>',

                        saveButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmSave: true,

                    },

                    delete: {

                        deleteButtonContent: '<i class="ion-trash-a"></i>',

                        confirmDelete: true,

                    },

                    columns: {

                        username: {

                            title: 'username',

                            type: 'string',

                        },

                        email: {

                            title: 'E-mail',

                            type: 'string'

                        },

                        name: {

                            title: 'name',

                            type: 'string'

                        },

                        country: {

                            title: 'Country',

                            type: 'number'

                        },

                    }

                };

            }

            else {

                _this.settings = {

                    add: {

                        addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                        createButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmCreate: true,

                    },

                    edit: {

                        editButtonContent: '<i class="ion-edit"></i>',

                        saveButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmSave: true,

                    },

                    delete: {

                        deleteButtonContent: '<i class="ion-trash-a"></i>',

                        confirmDelete: true,

                    },

                    columns: {

                        username: {

                            title: 'Benutzer',

                            type: 'string',

                        },

                        email: {

                            title: 'E-mail',

                            type: 'string'

                        },

                        name: {

                            title: 'Name',

                            type: 'string'

                        },

                        country: {

                            title: 'Land',

                            type: 'number'

                        },

                    }

                };

            }

            _this.source.load(data);

            _this.loading = false;

        });

    }

    AdminTables.prototype.ngOnInit = function () {

    };

    AdminTables.prototype.toInt = function (num) {

        return +num;

    };

    AdminTables.prototype.onDeleteConfirm = function (event) {

        if (window.confirm(this.language.message.deleteconfirm)) {

            event.confirm.resolve();

        }

        else {

            event.confirm.reject();

        }

    };

    AdminTables.prototype.editClient = function (id) {

    };

    AdminTables.prototype.addClient = function () {

        //  //console.log(id);

    };

    AdminTables.prototype.removeAdmin = function (event) {

        if (window.confirm(this.language.message.deleteconfirm)) {

            var index = this.data.findIndex(function (obj) { return obj._id === event.data._id; });

            this.dataService.delete(this.data[index]._id);

            if (index > -1) {

                this.data.splice(index, 1);

                this.source.load(this.data);

                this.showSuccessToast(this.language.message.success, this.language.message.adminremoved);

            }

        }

    };

    AdminTables.prototype.validateEmail = function (email) {

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);

    };

    AdminTables.prototype.onCreateConfirm = function (event) {

        if (event.newData.username === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputusername);

            return;

        }

        else if (event.newData.email === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputemail);

            return;

        }

        else if (!this.validateEmail(event.newData.email)) {

            this.showErrorToast(this.language.message.info, this.language.message.emailcorrectly);

            return;

        }

        if (window.confirm(this.language.message.createconfirm)) {

            // event.confirm.resolve();

            this.saveAdmin(event.newData, event);

        }

        else {

            event.confirm.reject();

        }

    };

    AdminTables.prototype.onEditConfirm = function (event) {

        if (event.newData.username === "") {

            alert(this.language.message.inputusername);

            return;

        }

        else if (event.newData.email === "") {

            alert(this.language.message.inputemail);

            return;

        }

        else if (!this.validateEmail(event.newData.email)) {

            alert(this.language.message.emailcorrectly);

            return;

        }

        if (event.newData.companyName === "Other") {

            window.alert(this.language.message.selectcompanyname);

            return;

        }

        if (window.confirm(this.language.message.updateconfirm)) {

            event.confirm.resolve();

            this.saveAdmin(event.newData, event);

        }

        else {

            event.confirm.reject();

        }

    };

    AdminTables.prototype.saveAdmin = function (newData, event) {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* User */]();

        saveData.username = newData.username;

        saveData.email = newData.email;

        saveData.country = newData.country;

        saveData.active = true;

        saveData.name = newData.name;

        if (newData._id == undefined) {

            this.dataService.create(saveData).then(function (user) {

                //console.log(user)

                event.confirm.resolve();

                _this.data.shift();

                _this.data.unshift(user);

                _this.source.load(_this.data);

                _this.showSuccessToast(_this.language.message.success, _this.language.message.admincreated);

            }, function (error) {

                event.confirm.reject();

                error = JSON.parse(error._body);

                _this.showErrorToast(_this.language.message.info, error.message);

            });

        }

        else {

            this.dataService.update(saveData, newData._id).then(function (user) {

                _this.showSuccessToast(_this.language.message.success, _this.language.message.adminupdated);

            });

        }

    };

    AdminTables.prototype.showSuccessToast = function (title, content) {

        this._service.success(title, content, this.options);

    };

    AdminTables.prototype.showErrorToast = function (title, content) {

        this._service.info(title, content, this.options);

    };

    AdminTables.prototype.showWaningToast = function (title, content) {

        this._service.warn(title, content, this.options);

    };

    return AdminTables;

}());

AdminTables = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'admin-tables',

        template: __webpack_require__("../../../../../src/app/pages/admin/admin/admin.html"),

        styles: [__webpack_require__("../../../../../src/app/pages/admin/admin/admin.scss")],

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["b" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_companies_service__["a" /* CompaniesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_language_service__["a" /* LanguageService */]) === "function" && _e || Object])

], AdminTables);



var _a, _b, _c, _d, _e;

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin/admin.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n<div class=\"widgets\" *ngIf=\"loading == false\">\r\n    <div class=\"row\">\r\n        <ba-card title=\"{{'general.table.admintable' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                <div class=\"row\">\r\n                    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"removeAdmin($event)\" \r\n                    (editConfirm)=\"onEditConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\" ></ng2-smart-table>\r\n                </div>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"loading == true\" class=\"loader\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin/admin.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .smart-table-container {\n  width: 100%; }\n\n:host /deep/ ng2-smart-table {\n  color: #ffffff; }\n  :host /deep/ ng2-smart-table th, :host /deep/ ng2-smart-table td {\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  :host /deep/ ng2-smart-table table tr td {\n    padding: 0 8px; }\n  :host /deep/ ng2-smart-table input {\n    line-height: 1.5 !important; }\n  :host /deep/ ng2-smart-table ng2-smart-table-cell {\n    color: #ffffff;\n    line-height: 35px; }\n  :host /deep/ ng2-smart-table tbody tr {\n    color: #ffffff; }\n  :host /deep/ ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  :host /deep/ ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #ffffff;\n    font-weight: 500; }\n    :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 500 !important; }\n      :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #ffffff !important; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    :host /deep/ ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions-title-add {\n    text-align: center; }\n  :host /deep/ ng2-smart-table a.ng2-smart-action, :host /deep/ ng2-smart-table .ng2-smart-title {\n    font-size: 14px !important;\n    color: #ffffff;\n    padding: 0 5px;\n    display: inline-block; }\n    :host /deep/ ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add, :host /deep/ ng2-smart-table .ng2-smart-title.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n  :host /deep/ ng2-smart-table nav.ng2-smart-pagination-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n  margin: -75px 0 0 -75px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/categories/categories-edit/categories-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalHeader}}</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" >\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"companyname\">Description</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.description' name = 'description' class=\"form-control\" id=\"description\" placeholder=\"Description\">\r\n      </div>\r\n      <div class=\"form-group row\">\r\n       <div class=\"col-sm-6\">\r\n          <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n           <input type=\"checkbox\" [(ngModel)] = 'modalData.status' [ngModelOptions]=\"{standalone: true}\" >\r\n            <span>Active</span>\r\n          </label>\r\n        </div>\r\n    \r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success confirm-btn\" (click)=\"saveModal()\">Save changes</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/categories/categories-edit/categories-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var CategoriesEdit = (function () {

    function CategoriesEdit(activeModal, dataService) {

        this.activeModal = activeModal;

        this.dataService = dataService;

    }

    CategoriesEdit.prototype.ngOnInit = function () {

    };

    CategoriesEdit.prototype.saveModal = function () {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["b" /* Category */]();

        saveData.description = this.modalData.description;

        saveData.status = this.modalData.status;

        if (this.modalType == 'edit') {

            var id = this.modalData._id;

            this.dataService.update(saveData, id);

        }

        else {

            this.dataService.create(saveData).then(function (category) {

                //console.log(category);

                _this.tableData.push(category);

            });

        }

        this.activeModal.close();

    };

    CategoriesEdit.prototype.closeModal = function () {

        this.activeModal.close();

    };

    return CategoriesEdit;

}());

CategoriesEdit = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'edit-categories-modal',

        styles: [__webpack_require__(("../../../../../src/app/pages/admin/categories/categories-edit/categories-edit.scss"))],

        template: __webpack_require__("../../../../../src/app/pages/admin/categories/categories-edit/categories-edit.component.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */]) === "function" && _b || Object])

], CategoriesEdit);



var _a, _b;

//# sourceMappingURL=categories-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/categories/categories-edit/categories-edit.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};















var Categories = (function () {

    function Categories(dataService, modalService, categoriesServices, _service, _langService) {

        var _this = this;

        this.dataService = dataService;

        this.modalService = modalService;

        this.categoriesServices = categoriesServices;

        this._service = _service;

        this._langService = _langService;

        this.filterQuery = '';

        this.rowsOnPage = 10;

        this.sortBy = 'email';

        this.sortOrder = 'asc';

        this.options = {

            position: ["top", "right"],

            timeOut: 3000,

            lastOnBottom: true,

            clickToClose: true,

            animation: 'scale',

            showProgressBar: false,

            maxLength: 100

        };

        this.loading = true;

        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (localStorage.getItem('lang') == 'de') {

            this._langService.getDEJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        else {

            this._langService.getENJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        this.categoriesServices.getCategories().then(function (data) {

            _this.data = data;

            if (localStorage.getItem('lang') === "en") {

                _this.settings = {

                    add: {

                        addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                        createButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmCreate: true,

                    },

                    edit: {

                        editButtonContent: '<i class="ion-edit"></i>',

                        saveButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmSave: true,

                    },

                    delete: {

                        deleteButtonContent: '<i class="ion-trash-a"></i>',

                        confirmDelete: true,

                    },

                    columns: {

                        description: {

                            title: 'Category Name',

                            type: 'string',

                        },

                        status: {

                            title: 'Status',

                            filter: {

                                type: 'checkbox',

                                config: {

                                    true: 'true',

                                    false: 'false',

                                    resetText: 'clear',

                                },

                            },

                            editor: {

                                type: 'checkbox',

                                config: {

                                    true: true,

                                    false: false,

                                },

                            },

                        },

                    }

                };

            }

            else {

                _this.settings = {

                    add: {

                        addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                        createButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmCreate: true,

                    },

                    edit: {

                        editButtonContent: '<i class="ion-edit"></i>',

                        saveButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmSave: true,

                    },

                    delete: {

                        deleteButtonContent: '<i class="ion-trash-a"></i>',

                        confirmDelete: true,

                    },

                    columns: {

                        description: {

                            title: 'Kategorie',

                            type: 'string',

                        },

                        status: {

                            title: 'Aktiv',

                            filter: {

                                type: 'checkbox',

                                config: {

                                    true: 'true',

                                    false: 'false',

                                    resetText: 'clear',

                                },

                            },

                            editor: {

                                type: 'checkbox',

                                config: {

                                    true: true,

                                    false: false,

                                },

                            },

                        },

                    }

                };

            }

            _this.source.load(data);

            _this.loading = false;

        });

    }

    Categories.prototype.ngOnInit = function () {

    };

    Categories.prototype.removeCategory = function (event) {

        if (window.confirm(this.language.message.deleteconfirm)) {

            var index = this.data.findIndex(function (obj) { return obj._id === event.data._id; });

            this.categoriesServices.delete(this.data[index]._id);

            if (index > -1) {

                this.data.splice(index, 1);

                this.source.load(this.data);

                this.showSuccessToast(this.language.message.success, this.language.message.categoryremoved);

            }

        }

    };

    Categories.prototype.onCreateConfirm = function (event) {

        if (window.confirm(this.language.message.createconfirm)) {

            event.confirm.resolve();

            this.saveCategory(event.newData);

        }

        else {

            event.confirm.reject();

        }

    };

    Categories.prototype.onEditConfirm = function (event) {

        if (window.confirm(this.language.message.updateconfirm)) {

            event.confirm.resolve();

            this.saveCategory(event.newData);

        }

        else {

            event.confirm.reject();

        }

    };

    Categories.prototype.saveCategory = function (newData) {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["b" /* Category */]();

        saveData.description = newData.description;

        saveData.status = newData.status;

        if (newData._id == undefined) {

            this.categoriesServices.create(saveData).then(function (categories) {

                //console.log(categories)

                _this.data.shift();

                _this.data.unshift(categories);

                _this.source.load(_this.data);

                _this.showSuccessToast(_this.language.message.success, _this.language.message.categorycreated);

            });

        }

        else {

            this.categoriesServices.update(saveData, newData._id).then(function (categories) {

                _this.showSuccessToast(_this.language.message.success, _this.language.message.categoryupdated);

            });

        }

    };

    Categories.prototype.showSuccessToast = function (title, content) {

        this._service.success(title, content, this.options);

    };

    Categories.prototype.showErrorToast = function (title, content) {

        this._service.info(title, content, this.options);

    };

    Categories.prototype.showWaningToast = function (title, content) {

        this._service.warn(title, content, this.options);

    };

    return Categories;

}());

Categories = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'categories',

        styles: [__webpack_require__(("../../../../../src/app/pages/admin/categories/categories.scss"))],

        template: __webpack_require__("../../../../../src/app/pages/admin/categories/categories.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["b" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_language_service__["a" /* LanguageService */]) === "function" && _e || Object])

], Categories);



var _a, _b, _c, _d, _e;

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/categories/categories.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n<div *ngIf=\"loading == true\" class=\"loader\"></div>\r\n<div class=\"widgets\" *ngIf=\"loading == false\">\r\n    <div class=\"row\">\r\n        <ba-card title=\"{{'general.table.categorytable' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                <div class=\"row\">\r\n                    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"removeCategory($event)\" \r\n                    (editConfirm)=\"onEditConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>\r\n                </div>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/categories/categories.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .smart-table-container {\n  width: 100%; }\n\n:host /deep/ ng2-smart-table {\n  color: #ffffff; }\n  :host /deep/ ng2-smart-table th, :host /deep/ ng2-smart-table td {\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  :host /deep/ ng2-smart-table table tr td {\n    padding: 0 8px; }\n  :host /deep/ ng2-smart-table input {\n    line-height: 1.5 !important; }\n  :host /deep/ ng2-smart-table ng2-smart-table-cell {\n    color: #ffffff;\n    line-height: 35px; }\n  :host /deep/ ng2-smart-table tbody tr {\n    color: #ffffff; }\n  :host /deep/ ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  :host /deep/ ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #ffffff;\n    font-weight: 500; }\n    :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 500 !important; }\n      :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #ffffff !important; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    :host /deep/ ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions-title-add {\n    text-align: center; }\n  :host /deep/ ng2-smart-table a.ng2-smart-action, :host /deep/ ng2-smart-table .ng2-smart-title {\n    font-size: 14px !important;\n    color: #ffffff;\n    padding: 0 5px;\n    display: inline-block; }\n    :host /deep/ ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add, :host /deep/ ng2-smart-table .ng2-smart-title.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n  :host /deep/ ng2-smart-table nav.ng2-smart-pagination-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n  margin: -75px 0 0 -75px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/companies/companies-edit/companies-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalHeader}}</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" >\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"companyname\">Company Name</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.name' name = 'companyname' class=\"form-control\" id=\"companyname\" placeholder=\"Company Name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.email' name = 'email' class=\"form-control\" id=\"email\" placeholder=\"Email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"street\">Street</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.street' name = 'street' class=\"form-control\" id=\"street\" placeholder=\"Street\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"city\">City</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.city' name = 'city' class=\"form-control\" id=\"city\" placeholder=\"City\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"zip\">Zip Code</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.zip' name = 'zip' class=\"form-control\" id=\"zip\" placeholder=\"Zip Code\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"country\">Country</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.country' name = 'country' class=\"form-control\" id=\"country\" placeholder=\"Country\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"phone\">PhoneNumber</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.phoneNumber' name = 'phone' class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"fax\">FAX</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.fax' name = 'fax' class=\"form-control\" id=\"fax\" placeholder=\"FAX\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"latitude\">Latitude</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.latitude' name = 'latitude' class=\"form-control\" id=\"latitude\" placeholder=\"Latitude\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"longitude\">Longitude</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.longitude' name = 'longitude' class=\"form-control\" id=\"longitude\" placeholder=\"Longitude\">\r\n      </div>\r\n      \r\n      \r\n      <div class=\"form-group row\">\r\n        \r\n       <div class=\"col-sm-6\">\r\n          <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n            <input type=\"checkbox\" [(ngModel)] = 'modalData.status' [ngModelOptions]=\"{standalone: true}\" >\r\n            <span>Active</span>\r\n          </label>\r\n        </div>\r\n        \r\n      <div class = \"category col-sm-4 col-sm-offset-2 pull-right\">\r\n        <label for=\"category\">Category</label>\r\n        <select class=\"form-control input-sm\" [(ngModel)]=\"modalData.category\" name = \"category\">\r\n            <option [ngValue]=\"item.description\" *ngFor=\"let item of categories\">{{item.description}}</option>\r\n        </select>\r\n      </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success confirm-btn\" (click)=\"saveModal()\">Save changes</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/companies/companies-edit/companies-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_companies_service__ = __webpack_require__("../../../../../src/app/services/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};











var CompaniesEdit = (function () {

    function CompaniesEdit(activeModal, dataService, router, categoriesService) {

        this.activeModal = activeModal;

        this.dataService = dataService;

        this.router = router;

        this.categoriesService = categoriesService;

    }

    CompaniesEdit.prototype.ngOnInit = function () {

        var _this = this;

        this.modalData.status = true;

        this.categoriesService.getCategories().then(function (data) {

            _this.categories = data;

            //console.log(this.categories);

        });

    };

    CompaniesEdit.prototype.saveModal = function () {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_2__services_companies_service__["b" /* Company */]();

        saveData.name = this.modalData.name;

        saveData.email = this.modalData.email;

        saveData.phoneNumber = this.modalData.phoneNumber;

        saveData.street = this.modalData.street;

        saveData.zip = this.modalData.zip;

        saveData.city = this.modalData.city;

        saveData.country = this.modalData.country;

        saveData.fax = this.modalData.fax;

        saveData.status = this.modalData.status;

        saveData.categories = this.modalData.categories;

        saveData.latitude = this.modalData.latitude;

        saveData.longitude = this.modalData.longitude;

        if (this.modalType == 'edit') {

            var id = this.modalData._id;

            // //console.log("company id"+id);

            this.dataService.update(saveData, id);

        }

        else {

            this.dataService.create(saveData).then(function (company) {

                _this.tableData.push(company);

            });

        }

        this.activeModal.close();

    };

    CompaniesEdit.prototype.closeModal = function () {

        this.activeModal.close();

    };

    return CompaniesEdit;

}());

CompaniesEdit = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'edit-companies-modal',

        styles: [__webpack_require__(("../../../../../src/app/pages/admin/companies/companies-edit/companies-edit.scss"))],

        template: __webpack_require__("../../../../../src/app/pages/admin/companies/companies-edit/companies-edit.component.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_companies_service__["a" /* CompaniesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */]) === "function" && _d || Object])

], CompaniesEdit);



var _a, _b, _c, _d;

//# sourceMappingURL=companies-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/companies/companies-edit/companies-edit.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-buttons .btn {\n  margin-right: 20px; }\n\n.modal-content {\n  color: white;\n  background-color: #5491cb; }\n\n.checkbox {\n  display: inline-block;\n  margin-bottom: -12px;\n  margin-left: 12px; }\n\ndiv.category {\n  display: inherit; }\n  div.category select {\n    margin-left: 11px; }\n  div.category label {\n    padding: 5px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/companies/companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Companies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_companies_service__ = __webpack_require__("../../../../../src/app/services/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};

















var Companies = (function () {

    function Companies(dataService, modalService, companyiesServices, _service, cagetoriesService, _langService) {

        var _this = this;

        this.dataService = dataService;

        this.modalService = modalService;

        this.companyiesServices = companyiesServices;

        this._service = _service;

        this.cagetoriesService = cagetoriesService;

        this._langService = _langService;

        this.filterQuery = '';

        this.rowsOnPage = 10;

        this.sortBy = 'email';

        this.sortOrder = 'asc';

        this.options = {

            position: ["top", "right"],

            timeOut: 3000,

            lastOnBottom: true,

            clickToClose: true,

            animation: 'scale',

            showProgressBar: false,

            maxLength: 100

        };

        this.loading = true;

        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (localStorage.getItem('lang') == 'de') {

            this._langService.getDEJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        else {

            this._langService.getENJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        this.cagetoriesService.getStatusCategories().then(function (data) {

            _this.originCategories = data;

            _this.categories = data.map(function (obj) {

                var newObj = {};

                newObj['value'] = obj.description;

                newObj['title'] = obj.description;

                return newObj;

            });

            _this.companyiesServices.getCompanies().then(function (data) {

                _this.data = data;

                //console.log(data);

                if (_this.originCategories === null)

                    return;

                for (var i = 0; i < data.length; i++) {

                    for (var j = 0; j < _this.originCategories.length; j++) {

                        if (data[i].categories === _this.originCategories[j]._id) {

                            data[i].categories = _this.originCategories[j].description;

                        }

                    }

                }

                if (localStorage.getItem('lang') === "en") {

                    _this.settings = {

                        add: {

                            addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                            createButtonContent: '<i class="ion-checkmark"></i>',

                            cancelButtonContent: '<i class="ion-close"></i>',

                            confirmCreate: true,

                        },

                        edit: {

                            editButtonContent: '<i class="ion-edit"></i>',

                            saveButtonContent: '<i class="ion-checkmark"></i>',

                            cancelButtonContent: '<i class="ion-close"></i>',

                            confirmSave: true,

                        },

                        delete: {

                            deleteButtonContent: '<i class="ion-trash-a"></i>',

                            confirmDelete: true,

                        },

                        columns: {

                            name: {

                                title: 'Company Name',

                                type: 'string',

                            },

                            email: {

                                title: 'E-mail',

                                type: 'string'

                            },

                            fax: {

                                title: 'FAX',

                                type: 'number'

                            },

                            phoneNumber: {

                                title: 'Phone Number',

                                type: 'string'

                            },

                            zip: {

                                title: 'Zip code',

                                type: 'number'

                            },

                            city: {

                                title: 'City',

                                type: 'number'

                            },

                            street: {

                                title: 'Street',

                                type: 'number'

                            },

                            country: {

                                title: 'Country',

                                type: 'number'

                            },

                            latitude: {

                                title: 'Latitude',

                                type: 'string'

                            },

                            longitude: {

                                title: 'Longitude',

                                type: 'string'

                            },

                            categories: {

                                title: 'Category',

                                type: 'html',

                                editor: {

                                    type: 'list',

                                    config: {

                                        list: _this.categories,

                                    },

                                },

                            },

                            status: {

                                title: 'Status',

                                type: 'number',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                            // appoconftemplate: {

                            //   title: 'Appointment Confirmation Template',

                            //   type: 'string'

                            // },

                            // apponottemplate: {

                            //   title: 'Appointment Notification Template',

                            //   type: 'string'

                            // },

                            appoconfemail: {

                                title: 'Appointment Confirmation Email',

                                type: 'boolean',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                            appoconfsms: {

                                title: 'Appointment Confirmation SMS',

                                type: 'boolean',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                            apponotemail: {

                                title: 'Appointment Notification Email',

                                type: 'boolean',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                            apponotsms: {

                                title: 'Appointment Notification SMS',

                                type: 'boolean',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                        }

                    };

                }

                else {

                    _this.settings = {

                        add: {

                            addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                            createButtonContent: '<i class="ion-checkmark"></i>',

                            cancelButtonContent: '<i class="ion-close"></i>',

                            confirmCreate: true,

                        },

                        edit: {

                            editButtonContent: '<i class="ion-edit"></i>',

                            saveButtonContent: '<i class="ion-checkmark"></i>',

                            cancelButtonContent: '<i class="ion-close"></i>',

                            confirmSave: true,

                        },

                        delete: {

                            deleteButtonContent: '<i class="ion-trash-a"></i>',

                            confirmDelete: true,

                        },

                        columns: {

                            name: {

                                title: 'Anbieter',

                                type: 'string',

                            },

                            email: {

                                title: 'E-mail',

                                type: 'string'

                            },

                            fax: {

                                title: 'Fax',

                                type: 'string'

                            },

                            phoneNumber: {

                                title: 'Telefon',

                                type: 'number'

                            },

                            zip: {

                                title: 'PLZ',

                                type: 'number'

                            },

                            city: {

                                title: 'Ort',

                                type: 'string'

                            },

                            street: {

                                title: 'Straße',

                                type: 'string'

                            },

                            country: {

                                title: 'Land',

                                type: 'string'

                            },

                            latitude: {

                                title: 'Breite',

                                type: 'string'

                            },

                            longitude: {

                                title: 'Länge',

                                type: 'string'

                            },

                            categories: {

                                title: 'Kategorie',

                                type: 'html',

                                editor: {

                                    type: 'list',

                                    config: {

                                        list: _this.categories,

                                    },

                                },

                            },

                            status: {

                                title: 'Aktiv',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                            // appoconftemplate: {

                            //   title: 'Terminbestätigungsvorlage',

                            //   type: 'string'

                            // },

                            // apponottemplate: {

                            //   title: 'Terminbenachrichtigungsvorlage',

                            //   type: 'string'

                            // },

                            appoconfemail: {

                                title: 'Terminbestätigungs-E-Mail',

                                type: 'number',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                            appoconfsms: {

                                title: 'Terminbestätigung SMS',

                                type: 'number',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                            apponotemail: {

                                title: 'Terminbenachrichtigungs-E-Mail',

                                type: 'number',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                            apponotsms: {

                                title: 'Terminbenachrichtigung SMS',

                                type: 'number',

                                filter: {

                                    type: 'checkbox',

                                    config: {

                                        true: 'true',

                                        false: 'false',

                                        resetText: 'clear',

                                    },

                                },

                                editor: {

                                    type: 'checkbox',

                                    config: {

                                        true: true,

                                        false: false,

                                    },

                                },

                            },

                        }

                    };

                }

                _this.source.load(data);

                _this.loading = false;

            });

        });

    }

    Companies.prototype.ngOnInit = function () {

    };

    Companies.prototype.removeCompany = function (event) {

        if (window.confirm(this.language.message.deleteconfirm)) {

            var index = this.data.findIndex(function (obj) { return obj._id === event.data._id; });

            this.companyiesServices.delete(this.data[index]._id);

            if (index > -1) {

                this.data.splice(index, 1);

                this.source.load(this.data);

                this.showSuccessToast(this.language.message.success, this.language.message.companyremoved);

            }

        }

    };

    Companies.prototype.validateEmail = function (email) {

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);

    };

    Companies.prototype.onCreateConfirm = function (event) {

        if (event.newData.name === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputname);

            return;

        }

        else if (event.newData.email === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputemail);

            return;

        }

        else if (!this.validateEmail(event.newData.email)) {

            this.showErrorToast(this.language.message.info, this.language.message.emailcorrectly);

            return;

        }

        if (window.confirm(this.language.message.createconfirm)) {

            event.confirm.resolve();

            this.saveCompany(event.newData);

        }

        else {

            event.confirm.reject();

        }

    };

    Companies.prototype.onEditConfirm = function (event) {

        if (event.newData.name === "") {

            alert(this.language.message.inputcompanyname);

            return;

        }

        else if (event.newData.email === "") {

            alert(this.language.message.inputemail);

            return;

        }

        else if (!this.validateEmail(event.newData.email)) {

            alert(this.language.message.emailcorrectly);

            return;

        }

        if (event.newData.companyName === "Other") {

            window.alert(this.language.message.selectcompanyname);

            return;

        }

        if (window.confirm(this.language.message.updateconfirm)) {

            event.confirm.resolve();

            this.saveCompany(event.newData);

        }

        else {

            event.confirm.reject();

        }

    };

    Companies.prototype.saveCompany = function (newData) {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_4__services_companies_service__["b" /* Company */]();

        saveData.name = newData.name;

        saveData.email = newData.email;

        saveData.phoneNumber = newData.phoneNumber;

        saveData.street = newData.street;

        saveData.zip = newData.zip;

        saveData.city = newData.city;

        saveData.country = newData.country;

        saveData.fax = newData.fax;

        saveData.status = newData.status;

        saveData.latitude = newData.latitude;

        saveData.longitude = newData.longitude;

        saveData.appoconfemail = newData.appoconfemail;

        saveData.appoconfsms = newData.appoconfsms;

        saveData.apponotemail = newData.apponotemail;

        saveData.apponotsms = newData.apponotsms;

        // saveData.appoconftemplate = newData.appoconftemplate;

        // saveData.apponottemplate = newData.apponottemplate;

        //saveData.categories = newData.categories;

        for (var i = 0; i < this.originCategories.length; i++) {

            if (this.originCategories[i].description === newData.categories) {

                saveData.categories = this.originCategories[i]._id;

            }

        }

        if (newData._id == undefined) {

            this.companyiesServices.create(saveData).then(function (company) {

                _this.data.shift();

                company.categories = newData.categories;

                _this.data.unshift(company);

                _this.source.load(_this.data);

                _this.showSuccessToast(_this.language.message.success, _this.language.message.companycreated);

            });

        }

        else {

            this.companyiesServices.update(saveData, newData._id).then(function (user) {

                _this.companyiesServices.getCompanies().then(function (data) {

                    _this.data = data;

                    if (_this.originCategories === null)

                        return;

                    for (var i = 0; i < data.length; i++) {

                        for (var j = 0; j < _this.originCategories.length; j++) {

                            if (data[i].categories === _this.originCategories[j]._id) {

                                data[i].categories = _this.originCategories[j].description;

                            }

                        }

                    }

                    _this.source.load(_this.data);

                });

                _this.showSuccessToast(_this.language.message.success, _this.language.message.companyupdated);

            });

        }

    };

    Companies.prototype.showSuccessToast = function (title, content) {

        this._service.success(title, content, this.options);

    };

    Companies.prototype.showErrorToast = function (title, content) {

        this._service.info(title, content, this.options);

    };

    Companies.prototype.showWaningToast = function (title, content) {

        this._service.warn(title, content, this.options);

    };

    return Companies;

}());

Companies = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'companies',

        styles: [__webpack_require__(("../../../../../src/app/pages/admin/companies/companies.scss"))],

        template: __webpack_require__("../../../../../src/app/pages/admin/companies/companies.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["b" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_companies_service__["a" /* CompaniesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_categories_service__["a" /* CategoriesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_language_service__["a" /* LanguageService */]) === "function" && _f || Object])

], Companies);



var _a, _b, _c, _d, _e, _f;

//# sourceMappingURL=companies.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/companies/companies.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n<div class=\"widgets\" *ngIf=\"loading == false\">\r\n    <div class=\"row\">\r\n        <ba-card title=\"{{'general.table.companytable' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                <div class=\"row\">\r\n                    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"removeCompany($event)\" \r\n                    (editConfirm)=\"onEditConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\" ></ng2-smart-table>\r\n                </div>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"loading == true\" class=\"loader\"></div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/companies/companies.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .smart-table-container {\n  width: 100%; }\n\n:host /deep/ ng2-smart-table {\n  /*table tr td:nth-child(14) {\r\n      overflow-x: scroll;\r\n      max-width: 100px;\r\n      white-space: nowrap;\r\n    }*/\n  color: #ffffff; }\n  :host /deep/ ng2-smart-table th, :host /deep/ ng2-smart-table td {\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  :host /deep/ ng2-smart-table table tr td {\n    padding: 0 8px; }\n  :host /deep/ ng2-smart-table input {\n    line-height: 1.5 !important; }\n  :host /deep/ ng2-smart-table ng2-smart-table-cell {\n    color: #ffffff;\n    line-height: 35px; }\n  :host /deep/ ng2-smart-table tbody tr {\n    color: #ffffff; }\n  :host /deep/ ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  :host /deep/ ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #ffffff;\n    font-weight: 500; }\n    :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 500 !important; }\n      :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #ffffff !important; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    :host /deep/ ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions-title-add {\n    text-align: center; }\n  :host /deep/ ng2-smart-table a.ng2-smart-action, :host /deep/ ng2-smart-table .ng2-smart-title {\n    font-size: 14px !important;\n    color: #ffffff;\n    padding: 0 5px;\n    display: inline-block; }\n    :host /deep/ ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add, :host /deep/ ng2-smart-table .ng2-smart-title.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n  :host /deep/ ng2-smart-table nav.ng2-smart-pagination-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n  margin: -75px 0 0 -75px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config__ = __webpack_require__("../../../../../src/app/services/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};















var Login = (function () {

    function Login(fb, router, userService, translate) {

        this.router = router;

        this.userService = userService;

        this.translate = translate;

        this.submitted = false;

        this.invalid = false;

        this.form = fb.group({

            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(4)])],

            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(4)])]

        });

        this.email = this.form.controls['email'];

        this.password = this.form.controls['password'];

        this.selectedValue = "en";

        this.translate.setDefaultLang('en');

    }

    Login.prototype.onSubmit = function (values) {

        var _this = this;

        this.submitted = true;

        if (this.form.valid) {

            // your code goes here

            this.userService.login(this.email.value, this.password.value).then(function (data) {

                //console.log(data['jwt_Token']);

                localStorage.setItem('currentUser', JSON.stringify({ user: data['user'], token: data['jwt_Token'] }));

                localStorage.setItem('lang', _this.translate.getCurrentLang());

                var currentUser = JSON.parse(localStorage.getItem('currentUser'));

                //console.log("currentUser=====>", currentUser.token);

                if (data.role == 'company') {

                    __WEBPACK_IMPORTED_MODULE_4__services_config__["a" /* Config */].companyID = data.companyID;

                    __WEBPACK_IMPORTED_MODULE_4__services_config__["a" /* Config */].approle = data.role;

                }

                // //console.log(Config.apptoken);

                data ? _this.router.navigateByUrl('/clients') : _this.invalid = true;

                data.role == 'user' ? __WEBPACK_IMPORTED_MODULE_0__global_state__["a" /* GlobalState */].curUser = 0 : 1;

                //  //console.log(data);

            }).catch(function (error) {

                _this.invalid = true;

            });

            //  //console.log(GlobalState.curPage);

        }

    };

    Login.prototype.translate_ch = function () {

        //this.translate.addLangs(["en"]);

        if (this.translate.getCurrentLang() === "de")

            this.translate.setDefaultLang('en');

        else if (this.translate.getCurrentLang() === "en")

            this.translate.setDefaultLang('de');

        //this.translate.use('en');

    };

    Login.prototype.onChangeLang = function (e) {

        this.selectedValue = e;

        //console.log(this.selectedValue);

        if (this.selectedValue === "de") {

            this.translate.setDefaultLang('de');

        }

        else if (this.selectedValue === "en") {

            this.translate.setDefaultLang('en');

        }

    };

    return Login;

}());

Login = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({

        selector: 'login',

        template: __webpack_require__("../../../../../src/app/pages/login/login.html"),

        styles: [__webpack_require__("../../../../../src/app/pages/login/login.scss")]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["b" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__app_translation_module__["a" /* AppTranslationModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_translation_module__["a" /* AppTranslationModule */]) === "function" && _d || Object])

], Login);



var _a, _b, _c, _d;

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\" style=\"background:rgba(58, 101, 148, 0.54);\">\r\n  <div class=\"auth-block\">\r\n    <h1 translate><img src=\"assets/img/logo.png\" width=\"250\" height=\"60\"></h1>\r\n    <!--<a routerLink=\"/register\" class=\"auth-link\" translate>{{'login.signup_link'}}</a>-->\r\n\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\" >\r\n      <div class = \"form-group row\" *ngIf = \"invalid==true\" style = \"background-color:brown;height: 30px; margin: 15px 0px 15px 83px;\r\n    align-items: center;\r\n    padding: 10px;\" translate>\r\n          {{'login.invalid'}}\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\r\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\" translate>{{'login.email'}}</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"{{'login.email' | translate}}\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\" translate>{{'login.password'}}</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"{{'login.password' | translate}}\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"offset-sm-2 col-sm-10\">\r\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\" translate>{{'login.sign_in'}}</button>\r\n          <a routerLink=\"/forgot\" class=\"forgot-pass\" translate>{{'login.forgot_password'}}</a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <!--<button  type=\"button\" class=\"btn btn-default btn-auth\" (click)=\"translate_ch()\" translate>Translate</button>-->\r\n    <div class=\"col-sm-4 pull-right\" >\r\n        <select class=\"form-control input-sm\" [ngModel]=\"selectedValue\" (ngModelChange)=\"onChangeLang($event)\">\r\n            <option value=\"en\" >EN</option>\r\n            <option value=\"de\">DE</option>\r\n        </select>\r\n    </div>\r\n    <!--<div class=\"auth-sep\"><span><span translate>{{'login.sign_from_app_text'}}</span></span></div>\r\n\r\n    <div class=\"al-share-auth\">\r\n      <ul class=\"al-share clearfix\">\r\n        <li><i class=\"socicon socicon-facebook\" title=\"{{'login.share_on_facebook' | translate}}\"></i></li>\r\n        <li><i class=\"socicon socicon-twitter\" title=\"{{'login.share_on_twitter' | translate}}\"></i></li>\r\n        <li><i class=\"socicon socicon-google\" title=\"{{'login.share_on_google_plus' | translate}}\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #00abff; }\n    .auth-block a:hover {\n      color: #0091d9; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages.menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var Pages = (function () {

    function Pages(_menuService, translate) {

        this._menuService = _menuService;

        this.translate = translate;

        this.translate.setDefaultLang(localStorage.getItem('lang'));

    }

    Pages.prototype.ngOnInit = function () {

        this._menuService.updateMenuByRoutes(__WEBPACK_IMPORTED_MODULE_2__pages_menu__["a" /* PAGES_MENU */]);

    };

    return Pages;

}());

Pages = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'pages',

        template: "\n    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n      \n      <div class=\"al-footer-main clearfix\">\n        \n      </div>\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaMenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */]) === "function" && _b || Object])

], Pages);



var _a, _b;

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGES_MENU; });
var PAGES_MENU = [

    {

        path: 'clients',

        data: {

            menu: {

                title: 'general.menu.clients',

                icon: 'ion-android-contacts',

                selected: true,

                expanded: false,

                order: 0,

                userType: ''

            }

        }

    },

    // {

    //       path: 'settings',

    //       data: {

    //         menu: {

    //           title: 'general.menu.settings',

    //           icon: 'ion-gear-a',

    //           selected: false,

    //           expanded: false,

    //           order: 0,

    //           userType: 'company'

    //         }

    //       }

    // },

    // {

    //       path: 'appointments',

    //       data: {

    //         menu: {

    //           title: 'general.menu.appointments',

    //           icon: 'ion-ios-compose-outline',

    //           selected: false,

    //           expanded: false,

    //           order: 0,

    //           userType: 'company'

    //         }

    //       },

    //       children: [

    //         {

    //           path: 'appointments',

    //           data: {

    //             menu: {

    //               title: 'general.menu.appointments',

    //               icon: 'ion-ios-compose-outline',

    //               selected: false,

    //               expanded: false,

    //               order: 0,

    //               userType: 'company'

    //             }

    //           }

    //         }

    //       ]

    // },

    {

        path: 'companies',

        data: {

            menu: {

                title: 'general.menu.companies',

                icon: 'ion-ios-home',

                selected: false,

                expanded: false,

                order: 0,

                userType: 'admin'

            }

        }

    },

    {

        path: 'categories',

        data: {

            menu: {

                title: 'general.menu.categories',

                icon: 'ion-clipboard',

                selected: false,

                expanded: false,

                order: 0,

                userType: 'admin'

            }

        }

    },

    {

        path: 'admin',

        data: {

            menu: {

                title: 'general.menu.admin',

                icon: 'ion-person',

                selected: false,

                expanded: false,

                order: 0,

                userType: 'admin'

            }

        }

    },

    {

        path: 'clients-admin',

        data: {

            menu: {

                title: 'general.menu.admin',

                icon: 'ion-android-contacts',

                selected: true,

                expanded: false,

                order: 0

            }

        }

    },

];

//# sourceMappingURL=pages.menu.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_data_filter_pipe__ = __webpack_require__("../../../../../src/app/pages/user/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_clients_clientsTables_component__ = __webpack_require__("../../../../../src/app/pages/user/clients/clientsTables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_settings_settingsTables_component__ = __webpack_require__("../../../../../src/app/pages/user/settings/settingsTables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_appointments_appointments_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_appointments_select_client_select_client_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/select-client/select-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_clients_custom_company_component__ = __webpack_require__("../../../../../src/app/pages/user/clients/custom_company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_companies_companies_component__ = __webpack_require__("../../../../../src/app/pages/admin/companies/companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_companies_companies_edit_companies_edit_component__ = __webpack_require__("../../../../../src/app/pages/admin/companies/companies-edit/companies-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_admin_admin_edit_admin_edit_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin/admin-edit/admin-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_categories_categories_component__ = __webpack_require__("../../../../../src/app/pages/admin/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_categories_categories_edit_categories_edit_component__ = __webpack_require__("../../../../../src/app/pages/admin/categories/categories-edit/categories-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_clients_clients_edit_clients_edit_component__ = __webpack_require__("../../../../../src/app/pages/user/clients/clients-edit/clients-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__user_settings_settings_edit_calendar_edit_calendar_edit_component__ = __webpack_require__("../../../../../src/app/pages/user/settings/settings-edit/calendar-edit/calendar-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_settings_settings_edit_service_edit_service_edit_component__ = __webpack_require__("../../../../../src/app/pages/user/settings/settings-edit/service-edit/service-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_companies_service__ = __webpack_require__("../../../../../src/app/services/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_calendars_service__ = __webpack_require__("../../../../../src/app/services/calendars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_services_service__ = __webpack_require__("../../../../../src/app/services/services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__user_appointments_select_client_basicTables_service__ = __webpack_require__("../../../../../src/app/pages/user/appointments/select-client/basicTables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__user_appointments_select_client_smartTables_service__ = __webpack_require__("../../../../../src/app/pages/user/appointments/select-client/smartTables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__user_changepassword_changePassword_component__ = __webpack_require__("../../../../../src/app/pages/user/changepassword/changePassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_openinghours_service__ = __webpack_require__("../../../../../src/app/services/openinghours.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__user_appointments_calendar_header_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__user_appointments_calendar_custom_calendar_scheduler_view_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__user_appointments_calendar_custom_calendar_scheduler_view_event_title_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-event-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__user_appointments_calendar_custom_calendar_scheduler_view_event_content_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-event-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__user_appointments_calendar_custom_calendar_scheduler_view_header_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__user_appointments_calendar_custom_calendar_scheduler_view_cell_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__user_appointments_calendar_custom_calendar_scheduler_view_event_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__user_appointments_calendar_custom_calendar_scheduler_view_event_actions_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-event-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__user_appointments_date_time_picker_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/date-time-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__node_modules_angular_calendar_dist_css_angular_calendar_css__ = __webpack_require__("../../../../angular-calendar/dist/css/angular-calendar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__node_modules_angular_calendar_dist_css_angular_calendar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49__node_modules_angular_calendar_dist_css_angular_calendar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_50_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_55_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};























































// import { Clients } from './admin/clients/clients.component';































































var PagesModule = (function () {

    function PagesModule() {

    }

    return PagesModule;

}());

PagesModule = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({

        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],

            __WEBPACK_IMPORTED_MODULE_8__app_translation_module__["a" /* AppTranslationModule */],

            __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */], __WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* routing */],

            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],

            __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__["b" /* Ng2SmartTableModule */],

            __WEBPACK_IMPORTED_MODULE_9_angular2_datatable__["DataTableModule"],

            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],

            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["d" /* NgbModalModule */],

            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerModule */].forRoot(),

            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["f" /* NgbTimepickerModule */].forRoot(),

            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],

            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],

            __WEBPACK_IMPORTED_MODULE_13_ng2_completer__["b" /* Ng2CompleterModule */],

            __WEBPACK_IMPORTED_MODULE_50_angular2_busy__["BusyModule"],

            __WEBPACK_IMPORTED_MODULE_2_angular_calendar__["a" /* CalendarModule */].forRoot(),

            __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__["a" /* DragAndDropModule */],

            __WEBPACK_IMPORTED_MODULE_55_angular2_notifications__["SimpleNotificationsModule"].forRoot(),

            __WEBPACK_IMPORTED_MODULE_51__angular_material__["a" /* MaterialModule */],

        ],

        declarations: [__WEBPACK_IMPORTED_MODULE_14__pages_component__["a" /* Pages */],

            __WEBPACK_IMPORTED_MODULE_15__user_clients_clientsTables_component__["a" /* ClientsTables */],

            __WEBPACK_IMPORTED_MODULE_15__user_clients_clientsTables_component__["b" /* MultiSelectDropdownComponent */],

            __WEBPACK_IMPORTED_MODULE_26__user_clients_clients_edit_clients_edit_component__["a" /* ClientsEdit */],

            __WEBPACK_IMPORTED_MODULE_16__user_settings_settingsTables_component__["a" /* SettingsTables */],

            __WEBPACK_IMPORTED_MODULE_38__user_changepassword_changePassword_component__["a" /* ChangePassword */],

            __WEBPACK_IMPORTED_MODULE_27__user_settings_settings_edit_calendar_edit_calendar_edit_component__["a" /* CalendarEdit */],

            __WEBPACK_IMPORTED_MODULE_28__user_settings_settings_edit_service_edit_service_edit_component__["a" /* ServiceEdit */],

            __WEBPACK_IMPORTED_MODULE_20__admin_companies_companies_component__["a" /* Companies */],

            __WEBPACK_IMPORTED_MODULE_21__admin_companies_companies_edit_companies_edit_component__["a" /* CompaniesEdit */],

            __WEBPACK_IMPORTED_MODULE_22__admin_admin_admin_component__["a" /* AdminTables */],

            __WEBPACK_IMPORTED_MODULE_23__admin_admin_admin_edit_admin_edit_component__["a" /* AdminEdit */],

            __WEBPACK_IMPORTED_MODULE_23__admin_admin_admin_edit_admin_edit_component__["a" /* AdminEdit */],

            __WEBPACK_IMPORTED_MODULE_24__admin_categories_categories_component__["a" /* Categories */],

            __WEBPACK_IMPORTED_MODULE_25__admin_categories_categories_edit_categories_edit_component__["a" /* CategoriesEdit */],

            __WEBPACK_IMPORTED_MODULE_11__user_data_filter_pipe__["a" /* DataFilterPipe */],

            __WEBPACK_IMPORTED_MODULE_17__user_appointments_appointments_component__["a" /* AppointmentComponent */],

            __WEBPACK_IMPORTED_MODULE_18__user_appointments_select_client_select_client_component__["a" /* SelectClientComponent */],

            __WEBPACK_IMPORTED_MODULE_40__user_appointments_calendar_header_component__["a" /* CalendarHeaderComponent */],

            __WEBPACK_IMPORTED_MODULE_41__user_appointments_calendar_custom_calendar_scheduler_view_component__["b" /* CalendarSchedulerViewComponent */],

            __WEBPACK_IMPORTED_MODULE_42__user_appointments_calendar_custom_calendar_scheduler_view_event_title_component__["a" /* CalendarSchedulerViewEventTitleComponent */],

            __WEBPACK_IMPORTED_MODULE_43__user_appointments_calendar_custom_calendar_scheduler_view_event_content_component__["a" /* CalendarSchedulerViewEventContentComponent */],

            __WEBPACK_IMPORTED_MODULE_44__user_appointments_calendar_custom_calendar_scheduler_view_header_component__["a" /* CalendarSchedulerViewHeaderComponent */],

            __WEBPACK_IMPORTED_MODULE_45__user_appointments_calendar_custom_calendar_scheduler_view_cell_component__["a" /* CalendarSchedulerViewCellComponent */],

            __WEBPACK_IMPORTED_MODULE_46__user_appointments_calendar_custom_calendar_scheduler_view_event_component__["a" /* CalendarSchedulerViewEventComponent */],

            __WEBPACK_IMPORTED_MODULE_47__user_appointments_calendar_custom_calendar_scheduler_view_event_actions_component__["a" /* CalendarSchedulerViewEventActionsComponent */],

            __WEBPACK_IMPORTED_MODULE_48__user_appointments_date_time_picker_component__["a" /* DateTimePickerComponent */],

            __WEBPACK_IMPORTED_MODULE_19__user_clients_custom_company_component__["a" /* CustomCompanyComponent */],

            __WEBPACK_IMPORTED_MODULE_53__login_login_component__["a" /* Login */]

        ],

        entryComponents: [__WEBPACK_IMPORTED_MODULE_15__user_clients_clientsTables_component__["b" /* MultiSelectDropdownComponent */], __WEBPACK_IMPORTED_MODULE_21__admin_companies_companies_edit_companies_edit_component__["a" /* CompaniesEdit */], __WEBPACK_IMPORTED_MODULE_23__admin_admin_admin_edit_admin_edit_component__["a" /* AdminEdit */], __WEBPACK_IMPORTED_MODULE_25__admin_categories_categories_edit_categories_edit_component__["a" /* CategoriesEdit */], __WEBPACK_IMPORTED_MODULE_26__user_clients_clients_edit_clients_edit_component__["a" /* ClientsEdit */], __WEBPACK_IMPORTED_MODULE_27__user_settings_settings_edit_calendar_edit_calendar_edit_component__["a" /* CalendarEdit */], __WEBPACK_IMPORTED_MODULE_28__user_settings_settings_edit_service_edit_service_edit_component__["a" /* ServiceEdit */], __WEBPACK_IMPORTED_MODULE_18__user_appointments_select_client_select_client_component__["a" /* SelectClientComponent */], __WEBPACK_IMPORTED_MODULE_19__user_clients_custom_company_component__["a" /* CustomCompanyComponent */]],

        providers: [__WEBPACK_IMPORTED_MODULE_29__services_users_service__["b" /* UsersService */], __WEBPACK_IMPORTED_MODULE_30__services_clients_service__["b" /* ClientsService */], __WEBPACK_IMPORTED_MODULE_31__services_companies_service__["a" /* CompaniesService */], __WEBPACK_IMPORTED_MODULE_32__services_categories_service__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_54__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_56__services_language_service__["a" /* LanguageService */],

            __WEBPACK_IMPORTED_MODULE_33__services_calendars_service__["b" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_34__services_services_service__["b" /* ServicesService */], __WEBPACK_IMPORTED_MODULE_39__services_openinghours_service__["a" /* OpeningHoursService */], __WEBPACK_IMPORTED_MODULE_35__services_appointment_service__["b" /* AppointmentService */], __WEBPACK_IMPORTED_MODULE_52_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */], __WEBPACK_IMPORTED_MODULE_36__user_appointments_select_client_basicTables_service__["a" /* BasicTablesService */], __WEBPACK_IMPORTED_MODULE_37__user_appointments_select_client_smartTables_service__["a" /* SmartTablesService */]]

    })

], PagesModule);



//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_clients_clientsTables_component__ = __webpack_require__("../../../../../src/app/pages/user/clients/clientsTables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_settings_settingsTables_component__ = __webpack_require__("../../../../../src/app/pages/user/settings/settingsTables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_changepassword_changePassword_component__ = __webpack_require__("../../../../../src/app/pages/user/changepassword/changePassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_companies_companies_component__ = __webpack_require__("../../../../../src/app/pages/admin/companies/companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_categories_categories_component__ = __webpack_require__("../../../../../src/app/pages/admin/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_appointments_appointments_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");






















// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

var routes = [

    {

        // path: 'login',

        // loadChildren: 'app/pages/login/login.module#LoginModule'

        path: 'login',

        component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* Login */],

    },

    {

        path: 'forgot',

        loadChildren: 'app/pages/forgot/forgot.module#ForgotModule'

    },

    {

        path: '!/forgot-password/:verificationCode/reset',

        loadChildren: 'app/pages/forgotreset/forgotreset.module#ForgotresetModule'

    },

    {

        path: 'clients',

        redirectTo: 'pages/clients',

        pathMatch: 'full'

    },

    {

        path: 'changepassword',

        redirectTo: 'pages/changepassword',

        pathMatch: 'full'

    },

    {

        path: 'settings',

        redirectTo: 'pages/settings',

        pathMatch: 'full'

    },

    {

        path: 'appointments',

        redirectTo: 'pages/appointments',

        pathMatch: 'full'

    },

    {

        path: 'companies',

        redirectTo: 'pages/companies',

        pathMatch: 'full'

    },

    {

        path: 'admin',

        redirectTo: 'pages/admin',

        pathMatch: 'full'

    },

    {

        path: 'categories',

        redirectTo: 'pages/categories',

        pathMatch: 'full'

    },

    {

        path: 'pages',

        component: __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* Pages */],

        children: [

            { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_2__user_clients_clientsTables_component__["a" /* ClientsTables */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]] },

            { path: 'appointments', component: __WEBPACK_IMPORTED_MODULE_8__user_appointments_appointments_component__["a" /* AppointmentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]], data: { roles: ['company'] } },

            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_3__user_settings_settingsTables_component__["a" /* SettingsTables */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]], data: { roles: ['company'] } },

            { path: 'changepassword', component: __WEBPACK_IMPORTED_MODULE_4__user_changepassword_changePassword_component__["a" /* ChangePassword */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]] },

            { path: 'companies', component: __WEBPACK_IMPORTED_MODULE_5__admin_companies_companies_component__["a" /* Companies */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]], data: { roles: ['admin'] } },

            { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_7__admin_categories_categories_component__["a" /* Categories */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]], data: { roles: ['admin'] } },

            { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_admin_component__["a" /* AdminTables */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]], data: { roles: ['admin'] } }

        ]

    }

];

var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);

//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/angular-calendar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * angular-calendar - A calendar component for angular 4.0+ that can display events on a month, week or day view\r\n * @version v0.17.3\r\n * @author Matt Lewis\r\n * @link https://github.com/mattlewis92/angular-calendar#readme\r\n * @license MIT\r\n */\r\n.cal-month-view .cal-header {\r\n  text-align: center;\r\n  font-weight: bolder; }\r\n\r\n.cal-month-view .cal-cell-row:hover {\r\n  background-color: #fafafa; }\r\n\r\n.cal-month-view .cal-header .cal-cell {\r\n  padding: 5px 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  white-space: nowrap; }\r\n\r\n.cal-month-view .cal-cell-row .cal-cell:hover,\r\n.cal-month-view .cal-cell.cal-has-events.cal-open {\r\n  background-color: #ededed; }\r\n\r\n.cal-month-view .cal-days {\r\n  border: 1px solid #e1e1e1;\r\n  border-bottom: 0; }\r\n\r\n.cal-month-view .cal-cell-top {\r\n  min-height: 78px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1; }\r\n\r\n.cal-month-view .cal-cell-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -js-display: flex;\r\n  display: flex; }\r\n\r\n.cal-month-view .cal-cell {\r\n  float: left;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -js-display: flex;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch; }\r\n\r\n.cal-month-view .cal-day-cell {\r\n  min-height: 100px; }\r\n\r\n.cal-month-view .cal-day-cell:not(:last-child) {\r\n  border-right: 1px solid #e1e1e1; }\r\n\r\n.cal-month-view .cal-days .cal-cell-row {\r\n  border-bottom: 1px solid #e1e1e1; }\r\n\r\n.cal-month-view .cal-day-badge {\r\n  margin-top: 18px;\r\n  margin-left: 10px;\r\n  background-color: #b94a48;\r\n  display: inline-block;\r\n  min-width: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: white;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  border-radius: 10px; }\r\n\r\n.cal-month-view .cal-day-number {\r\n  font-size: 1.2em;\r\n  font-weight: 400;\r\n  opacity: 0.5;\r\n  margin-top: 15px;\r\n  margin-right: 15px;\r\n  float: right;\r\n  color:black;\r\n  margin-bottom: 10px; }\r\n\r\n.cal-month-view .cal-events {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  margin: 3px;\r\n  line-height: 10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -js-display: flex;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap; }\r\n\r\n.cal-month-view .cal-event {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin: 2px; }\r\n\r\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\r\n  cursor: pointer; }\r\n\r\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\r\n  opacity: 0.2;\r\n  cursor: default; }\r\n\r\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\r\n  color: darkred; }\r\n\r\n.cal-month-view .cal-day-cell.cal-today {\r\n  background-color: #e8fde7; }\r\n\r\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\r\n  font-size: 1.9em; }\r\n\r\n.cal-month-view .cal-day-cell.cal-drag-over {\r\n  background-color: #e0e0e0 !important; }\r\n\r\n.cal-month-view .cal-open-day-events {\r\n  padding: 15px;\r\n  color: white;\r\n  background-color: #555;\r\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\r\n\r\n.cal-month-view .cal-open-day-events .cal-event {\r\n  position: relative;\r\n  top: 2px; }\r\n\r\n.cal-month-view .cal-event-title {\r\n  color: white; }\r\n\r\n.cal-month-view .cal-out-month .cal-day-badge,\r\n.cal-month-view .cal-out-month .cal-event {\r\n  opacity: 0.3; }\r\n\r\n.cal-week-view .cal-day-headers {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -js-display: flex;\r\n  display: flex;\r\n  margin-bottom: 3px;\r\n  border: 1px solid #e1e1e1;\r\n  margin-left: 2px;\r\n  margin-right: 2px; }\r\n\r\n.cal-week-view .cal-day-headers .cal-header {\r\n  color:black;\r\n  opacity: 0.6;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  text-align: center;\r\n  padding: 5px; }\r\n\r\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\r\n  border-right: 1px solid #e1e1e1; }\r\n\r\n.cal-week-view .cal-day-headers .cal-header:hover,\r\n.cal-week-view .cal-day-headers .cal-drag-over {\r\n  background-color: #ededed; }\r\n\r\n.cal-week-view .cal-day-headers span {\r\n  font-weight: 400;\r\n  opacity: 0.5; }\r\n\r\n.cal-week-view .cal-events-row {\r\n  position: relative;\r\n  height: 33px; }\r\n\r\n.cal-week-view .cal-event-container {\r\n  display: inline-block;\r\n  position: absolute; }\r\n\r\n.cal-week-view .cal-event {\r\n  padding: 0 10px;\r\n  font-size: 12px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  height: 30px;\r\n  line-height: 30px; }\r\n\r\n.cal-week-view .cal-draggable {\r\n  cursor: move; }\r\n\r\n.cal-week-view .cal-event.cal-starts-within-week {\r\n  border-top-left-radius: 5px;\r\n  border-bottom-left-radius: 5px; }\r\n\r\n.cal-week-view .cal-event.cal-ends-within-week {\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px; }\r\n\r\n.cal-week-view .cal-header.cal-today {\r\n  background-color: #e8fde7; }\r\n\r\n.cal-week-view .cal-header.cal-weekend span {\r\n  color: #8b0000; }\r\n\r\n.cal-week-view .cal-event,\r\n.cal-week-view .cal-header {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap; }\r\n\r\n.cal-day-view .cal-hour-rows {\r\n  width: 100%;\r\n  border: solid 1px #e1e1e1;\r\n  overflow-x: scroll;\r\n  background-color: #5893D0;\r\n  position: relative; }\r\n\r\n.cal-day-view .cal-hour:nth-child(odd) {\r\n  background-color: #fafafa; }\r\n\r\n.cal-day-view .cal-hour-segment {\r\n  background-color: #5893D0;\r\n  height: 30px; }\r\n\r\n.cal-day-view .cal-hour-segment::after {\r\n  content: '\\A0'; }\r\n\r\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\r\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\r\n  border-bottom: thin dashed #e1e1e1; }\r\n\r\n.cal-day-view .cal-time {\r\n  font-weight: bold;\r\n  padding-top: 5px;\r\n  width: 70px;\r\n  text-align: center; }\r\n\r\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\r\n  display: none; }\r\n\r\n.cal-day-view .cal-hour-segment:hover,\r\n.cal-day-view .cal-drag-over .cal-hour-segment {\r\n  background-color: #ededed; }\r\n\r\n.cal-day-view .cal-event-container {\r\n  position: absolute; }\r\n\r\n.cal-day-view .cal-event {\r\n  border: solid 1px;\r\n  padding: 5px;\r\n  font-size: 12px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  height: 100%;\r\n  box-sizing: border-box; }\r\n\r\n.cal-day-view .cal-draggable {\r\n  cursor: move; }\r\n\r\n.cal-day-view .cal-event.cal-starts-within-day {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px; }\r\n\r\n.cal-day-view .cal-event.cal-ends-within-day {\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px; }\r\n\r\n.cal-day-view .cal-all-day-event {\r\n  padding: 8px;\r\n  border: solid 1px; }\r\n\r\n.btn-outline-primary {\r\n  background-color: white;\r\n}\r\n.chevron[_ngcontent-c10]::before{\r\n  color:white;\r\n}\r\n.form-control {\r\n  margin-top:15px;\r\n}\r\n.input-group-addon{\r\n  margin-top:15px;\r\n}\r\n.select-control{\r\n  margin-top:0px;\r\n}\r\n\r\n.form-group label{\r\n  margin-bottom: 0px;\r\n}\r\n.btn-danger {\r\n  margin-left:10px;\r\n}\r\n\r\n.form-control1 {\r\n      padding: 0.5rem 0.75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.25;\r\n    color: #464a4c;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: 0.25rem;\r\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n\r\n    color: #ffffff;\r\n    border: 1px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 5px;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n    height: calc(2.0rem + 2px);\r\n    width: 150px;\r\n}\r\n.completer-input {\r\n  /*background: transparent;  */\r\n  padding: 0.5rem 0.75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.25;\r\n    color: #464a4c;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: 0.25rem;\r\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n\r\n    color: #ffffff;\r\n    border: 1px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 5px;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n    height: calc(2.0rem + 2px);\r\n    width: 250px;\r\n    margin-top:50px;\r\n\r\n}\r\n.completer-dropdown {\r\n    width: 100% !important;\r\n    position: relative !important;\r\n    border: 1px solid black;\r\n    \r\n}\r\n\r\n.loader {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  width: 70px;\r\n  height: 70px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 8px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 10px solid #3498db;\r\n  width: 50px;\r\n  height: 50px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/appointments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_client_select_client_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/select-client/select-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_calendars_service__ = __webpack_require__("../../../../../src/app/services/calendars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_services_service__ = __webpack_require__("../../../../../src/app/services/services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_openinghours_service__ = __webpack_require__("../../../../../src/app/services/openinghours.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};















//import moment = require('moment');























var colors = {

    red: {

        primary: '#ad2121',

        secondary: '#FAE3E3'

    },

    blue: {

        primary: '#1e90ff',

        secondary: '#D1E8FF'

    },

    yellow: {

        primary: '#e3bc08',

        secondary: '#FDF1BA'

    }

};

var AppointmentComponent = (function () {

    function AppointmentComponent(modal, calendarService, servicesService, clientService, appointmentService, openingHoursService, completerService, slimLoader, zone, translate, router, _service, _langService) {

        var _this = this;

        this.modal = modal;

        this.calendarService = calendarService;

        this.servicesService = servicesService;

        this.clientService = clientService;

        this.appointmentService = appointmentService;

        this.openingHoursService = openingHoursService;

        this.completerService = completerService;

        this.slimLoader = slimLoader;

        this.zone = zone;

        this.translate = translate;

        this.router = router;

        this._service = _service;

        this._langService = _langService;

        this.view = 'day';

        this.viewDate = new Date();

        this.tempviewDate = new Date();

        this.CalendarServiceNew = [];

        this.actions = [{

                label: '<i class="fa fa-fw fa-pencil"></i>',

                onClick: function (_a) {

                    var event = _a.event;

                    _this.handleEvent('Edited', event);

                }

            }, {

                label: '<i class="fa fa-fw fa-times"></i>',

                onClick: function (_a) {

                    var event = _a.event;

                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });

                    _this.handleEvent('Deleted', event);

                }

            }];

        this.refresh = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();

        this.activeDayIsOpen = true;

        this.dropEvent = false;

        this.busyshow = true;

        this.eventEditTitle = '';

        this.options = {

            position: ["top", "right"],

            timeOut: 3000,

            lastOnBottom: true,

            clickToClose: true,

            animation: 'scale',

            showProgressBar: false,

            maxLength: 100

        };

        this.externalEvents = [

            {

                title: 'Event 1',

                color: colors.yellow,

                start: new Date(),

                draggable: true

            },

            {

                title: 'Event 2',

                color: colors.blue,

                start: new Date(),

                draggable: true

            }

        ];

        test = this;

        $(".cal-hour-segment").removeClass("active");

        $(document).on("click", ".cal-hour-segment", function () {

            $(".cal-hour-segment").removeClass("active");

            $(this).addClass('active');

        });

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.startHour = '9';

        this.startMinute = '30';

        this.endHour = '17';

        this.endMinute = '30';

        this.currentlang = localStorage.getItem('lang');

        this.translate.setDefaultLang(localStorage.getItem('lang'));

        if (localStorage.getItem('lang') == 'de') {

            this._langService.getDEJSON().then(function (data) {

                // //console.log("12345678", data);  

                _this.language = data;

            });

        }

        else {

            this._langService.getENJSON().then(function (data) {

                // //console.log("12345678", data);  

                _this.language = data;

            });

        }

    }

    AppointmentComponent.prototype.hotkeys = function (event) {

        // event.key

        // selectedService

        var selected_service = '';

        var selected_calendar = '';

        for (var i = 0; i < this.services.length; i++) {

            if (this.services[i].shortKey.toString().toLocaleLowerCase() == event.key) {

                selected_service = this.services[i]._id;

            }

        }

        for (var i = 0; i < this.calendars.length; i++) {

            if (this.calendars[i].shortKey.toString().toLocaleLowerCase() == event.key) {

                // this.selectedCalender = this.calendars[i]._id;

                selected_calendar = this.calendars[i]._id;

            }

        }

        if (selected_calendar) {

            // // //console.log("change Calendar");

            localStorage.setItem('selected_calendar', selected_calendar);

            // this.checkCalendarSelecter(selected_calendar);

            // this.onChangeCalender(selected_calendar);

        }

        else if (selected_service) {

            this.onChangeService(selected_service);

        }

        if (event.keyCode == 37) {

            // navigating to previous

            document.getElementById("prevNavMove").click();

        }

        if (event.keyCode == 39) {

            // navigating to next

            document.getElementById("nextNavMove").click();

        }

        if (event.keyCode == 38) {

            var curindex = this.getServiceIndex(this.selectedService);

            if (typeof this.services[(curindex - 1)] != 'undefined') {

                // this.selectedService = this.services[(curindex - 1)]._id;

                this.onChangeService(this.services[(curindex - 1)]._id);

            }

            else {

                this.onChangeService("");

            }

            event.preventDefault();

        }

        if (event.keyCode == 40) {

            var curindex = this.getServiceIndex(this.selectedService);

            if (typeof this.services[(curindex + 1)] != 'undefined') {

                this.onChangeService(this.services[(curindex + 1)]._id);

            }

            event.preventDefault();

        }

    };

    AppointmentComponent.prototype.getServiceIndex = function (service) {

        var index = 0;

        for (var i = 0; i < this.services.length; i++) {

            if (this.services[i]._id == service) {

                index = i;

            }

        }

        return index;

    };

    AppointmentComponent.prototype.dayClicked = function (_a) {

        var date = _a.date, events = _a.events;

        this.clickedDate = date;

        if (localStorage.getItem('lang') === "en") {

            this.eventEditTitle = "Edit Event";

        }

        else {

            this.eventEditTitle = "Termin Bearbeiten";

        }

        if (Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameMonth"])(date, this.viewDate)) {

            if ((Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||

                events.length === 0) {

                this.activeDayIsOpen = false;

            }

            else {

                this.viewDate = date;

            }

            //forcefull changes

            this.tempviewDate = date;

        }

        this.tempEvents = [];

        for (var i = 0; i < this.events.length; i++) {

            if (Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameMonth"])(date, this.events[i].start) && Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameDay"])(date, this.events[i].start)) {

                this.tempEvents.push(this.events[i]);

            }

        }

        this.refresh.next();

    };

    AppointmentComponent.prototype.ngOnInit = function () {

        if (this.currentUser == null || this.currentUser.user.role !== "company" || this.currentUser.user.active !== true) {

            this.router.navigate(['']);

        }

        this.initial();

        var THIS = this;

        setInterval(function () {

            THIS.checkCalendarSelecter();

        }, 1000);

    };

    AppointmentComponent.prototype.checkCalendarSelecter = function (cal) {

        if (cal === void 0) { cal = null; }

        if (typeof this.calendars != 'undefined' && this.calendars.length > 0 && typeof this.events != 'undefined') {

            if (cal) {

                this.selectedCalender = cal;

            }

            if (typeof this.selectedCalender == "undefined" || this.selectedCalender != localStorage.getItem('selected_calendar')) {

                if (localStorage.getItem('selected_calendar')) {

                    var THIS = this;

                    for (var k = 0; k < this.calendars.length; k++) {

                        if (localStorage.getItem('selected_calendar') == this.calendars[k]._id) {

                            this.selectedCalendarName = this.calendars[k].description;

                            this.selectedCalendarImage = this.calendars[k].image;

                        }

                    }

                    this.loading = true;

                    // this.selectedCalender=localStorage.getItem('selected_calendar');

                    setTimeout(function () {

                        THIS.loading = false;

                        THIS.onChangeCalender(localStorage.getItem('selected_calendar'));

                    }, 1000);

                }

            }

        }

    };

    AppointmentComponent.prototype.initial = function (refresh_calendar) {

        var _this = this;

        if (refresh_calendar === void 0) { refresh_calendar = false; }

        this.loading = true;

        if (!this.clickedDate) {

            this.clickedDate = new Date();

        }

        this.calendarService.getStatusCalendars(this.currentUser.user.companyID).then(function (data) {

            _this.calendars = data;

            _this.servicesService.getStatusServices(_this.currentUser.user.companyID).then(function (data) {

                _this.services = data;

                for (var p = 0; p < _this.services.length; p++) {

                    _this.services[p].draggable = true;

                    _this.services[p].showTime = false;

                    _this.services[p].height = 35;

                }

                _this.clientService.getAllClients().then(function (data) {

                    _this.clients = data;

                    _this.openingHoursService.getOpeningHourse(_this.currentUser.user.companyID)

                        .then(function (data) {

                        _this.openingHours = data;

                        _this.loading = false;

                        // // //console.log(this.openingHours);

                        _this.appointmentService.getAppointments(_this.currentUser.user.companyID)

                            .then(function (data) {

                            _this.appointments = data;

                            _this.analyAppointment(_this.appointments, refresh_calendar);

                            _this.weekSelected();

                            // // //console.log(this.appointments);

                        });

                    });

                });

            });

        });

        this.slimLoader.start();

    };

    AppointmentComponent.prototype.analyAppointment = function (appointment, refresh_calendar) {

        this.tempEvents = [];

        this.events = [];

        if (appointment.length == 0)

            return;

        for (var i = 0; i < appointment.length; i++) {

            // let t = "Calendar: ";

            var t = "";

            for (var j = 0; j < this.calendars.length; j++) {

                if (this.calendars[j]._id == appointment[i].calendarID) {

                    // t += this.calendars[j].description;

                }

            }

            for (var j = 0; j < this.clients.length; j++) {

                if (this.clients[j]._id == appointment[i].clientID) {

                    t += this.clients[j].lastName;

                }

            }

            t += " (" + this.getTimeFormatted(appointment[i].start) + ")<br>";

            for (var j = 0; j < this.services.length; j++) {

                if (this.services[j]._id == appointment[i].serviceID) {

                    t += "Service: " + this.services[j].description + "<br>";

                }

            }

            for (var j = 0; j < this.clients.length; j++) {

                if (this.clients[j]._id == appointment[i].clientID) {

                    t += "Client: " + this.clients[j].firstName + " " + this.clients[j].lastName;

                }

            }

            if (appointment[i].type == "Busy") {

                t = "Busy";

            }

            var result = this.clients.filter(function (obj) {

                return obj._id === appointment[i].clientID;

            });

            if (result.length == 0) {

                var c_email = '';

                var c_id = '';

            }

            else {

                c_email = result[0].email;

                c_id = result[0]._id;

            }

            this.events.push({

                _id: appointment[i]._id,

                selectedCalender: appointment[i].calendarID,

                selectedClientEmail: c_email,

                selectedClient: c_id,

                type: appointment[i].type,

                selectedService: appointment[i].serviceID,

                title: t,

                start: new Date(appointment[i].start),

                end: new Date(appointment[i].end),

                color: colors.red,

                draggable: false,

                resizable: {

                    beforeStart: true,

                    afterEnd: true,

                }

            });

        }

        if (refresh_calendar) {

            this.onChangeCalender(this.selectedCalender);

        }

        this.refresh.next();

    };

    AppointmentComponent.prototype.eventTimesChanged = function (_a) {

        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;

        event.start = newStart;

        event.end = newEnd;

        this.handleEvent('Dropped or resized', event);

        this.refresh.next();

    };

    AppointmentComponent.prototype.handleEvent = function (action, event) {

        // this.modalData = {event, action};

        // this.modal.open(this.modalContent, {size: 'lg'});

        // this.tempEvents = [];

        // // //console.log(action);

        // // //console.log(event);

        // this.selectedCalender = event.selectedCalender;

        // this.selectedService = event.selectedService;

        // if(action !== 'Clicked')

        // {

        //   this.saveAppointment(event);

        // }

        // this.tempEvents.push(event);

        this.editAppointment(event);

    };

    AppointmentComponent.prototype.addBusyTime = function () {

        var calendarName;

        for (var i = 0; i < this.calendars.length; i++) {

            if (this.selectedCalender == this.calendars[i]._id) {

                calendarName = this.calendars[i].description;

            }

        }

        if (calendarName === undefined) {

            this.showErrorToast(this.language.message.info, this.language.message.selectcalendar);

            return;

        }

        else {

            if (localStorage.getItem('lang') === "en") {

                this.eventEditTitle = "Add Busy Time (Calendar: " + calendarName + ")";

            }

            else {

                this.eventEditTitle = "Belegtzeit hinzufügen (Kalendar: " + calendarName + ")";

            }

            this.tempEvents = [];

            this.tempEvents.push({

                title: 'Busy',

                start: Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["startOfDay"])(this.clickedDate),

                end: Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["endOfDay"])(this.clickedDate),

                color: colors.red,

                type: 'Busy',

                editing: true,

                draggable: false,

                resizable: {

                    beforeStart: true,

                    afterEnd: true,

                }

            });

        }

    };

    AppointmentComponent.prototype.selectClient = function () {

        var _this = this;

        var activeModal = this.modal.open(__WEBPACK_IMPORTED_MODULE_2__select_client_select_client_component__["a" /* SelectClientComponent */], { size: 'lg' });

        activeModal.componentInstance.modalHeader = 'Select Client';

        activeModal.componentInstance.modalType = 'add';

        activeModal.componentInstance.modalData = {};

        activeModal.result.then(function (result) {

            if (result.length > 0) {

                _this.zone.run(function () {

                    _this.tempEvents[(_this.tempEvents.length - 1)].selectedClientEmail = result[0].email;

                    _this.tempEvents[(_this.tempEvents.length - 1)].selectedClient = result[0]._id;

                    if (_this.dropEvent) {

                        _this.saveAppointment(_this.tempEvents[(_this.tempEvents.length - 1)]);

                    }

                });

                _this.refresh.next();

            }

        })

            .catch(function () {

            if (_this.dropEvent) {

                // this.tempEvents.splice((this.tempEvents.length-1), 1);

                _this.selectedService = undefined;

                _this.refreshGetEvents();

            }

        });

    };

    AppointmentComponent.prototype.draggingService = function (itm) {

        this.dropEvent = false;

        if (this.curSegmentTime) {

            this.selectedService = itm._id;

            itm.showTime = true;

            itm.start = __WEBPACK_IMPORTED_MODULE_6_moment__(this.curSegmentTime).format("HH:mm");

            itm.end = __WEBPACK_IMPORTED_MODULE_6_moment__(this.curSegmentTime).add(itm.duration, 'minutes').format("HH:mm");

            itm.height = (((itm.duration / 5)) * 17);

        }

        else {

            itm.showTime = false;

            itm.height = 35;

        }

        // //console.log(itm);

    };

    AppointmentComponent.prototype.segmentHover = function (dta) {

        if (dta.isHover) {

            this.curSegmentTime = dta.segment;

        }

        else {

            this.curSegmentTime = false;

        }

    };

    AppointmentComponent.prototype.addEvent = function (fromweekdrop) {

        if (fromweekdrop === void 0) { fromweekdrop = false; }

        var calendarName;

        var serviceName;

        var serviceDuration;

        var servicePrice;

        for (var i = 0; i < this.calendars.length; i++) {

            if (this.selectedCalender == this.calendars[i]._id) {

                // //console.log(this.calendars[i]._id);

                // //console.log(this.selectedCalender);

                calendarName = this.calendars[i].description;

            }

        }

        for (var i = 0; i < this.services.length; i++) {

            if (this.selectedService == this.services[i]._id) {

                serviceName = this.services[i].description;

                serviceDuration = this.services[i].duration;

                servicePrice = this.services[i].price;

            }

        }

        if (calendarName === undefined) {

            this.showErrorToast(this.language.message.info, this.language.message.selectcalendar);

            return;

        }

        else if (serviceName === undefined) {

            this.showErrorToast(this.language.message.info, this.language.message.selectservice);

            return;

        }

        else {

            // changing to day view with selected day

            if (!fromweekdrop) {

                this.daySelected();

            }

            if (localStorage.getItem('lang') === "en") {

                this.eventEditTitle = "Add New Appointment (Calendar: " + calendarName +

                    ", Service: " + serviceName +

                    ", Price: " + servicePrice +

                    ", Duration: " + serviceDuration +

                    ")";

            }

            else {

                this.eventEditTitle = "Termin erstellen(Kalendar: " + calendarName +

                    ", Service(DE): " + serviceName +

                    ", Preis: " + servicePrice +

                    ", Dauer: " + serviceDuration +

                    ")";

            }

            // this.tempEvents = [];

            this.tempEvents.push({

                title: 'New Appointment',

                start: Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["startOfDay"])(this.clickedDate),

                end: Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["endOfDay"])(this.clickedDate),

                selectedClientEmail: this.language.appointment.selectclient,

                selectedClient: this.language.appointment.selectclient,

                color: colors.blue,

                type: 'Appointment',

                editing: true,

                draggable: false,

                resizable: {

                    beforeStart: true,

                    afterEnd: true,

                }

            });

        }

    };

    AppointmentComponent.prototype.saveAppointment = function (e) {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_13__services_appointment_service__["a" /* Appointment */]();

        var clientID;

        if (e.selectedClient === this.language.appointment.selectclient) {

            this.showErrorToast(this.language.message.info, this.language.message.selectclient);

            return;

        }

        var result = this.clients.filter(function (obj) {

            return obj.email === e.selectedClient;

        });

        // //console.log(result);

        if (result.length === 0) {

            clientID = e.selectedClient;

        }

        else {

            clientID = result[0]._id;

        }

        // //console.log(clientID);

        this.dropEvent = false;

        if (e.type == 'Busy') {

            saveData.companyID = this.currentUser.user.companyID;

            saveData.calendarID = this.selectedCalender;

            // saveData.serviceID = "";

            // saveData.clientID = "";

            saveData.start = e.start;

            saveData.end = e.end;

            saveData.type = "Busy";

        }

        else {

            saveData.companyID = this.currentUser.user.companyID;

            saveData.calendarID = this.selectedCalender;

            saveData.serviceID = this.selectedService;

            saveData.clientID = clientID;

            saveData.start = e.start;

            saveData.end = e.end;

            saveData.type = "Appointment";

        }

        if (e._id === undefined) {

            if (this.checkExistingEventTime(saveData.start)) {

                this.appointmentService.create(saveData).then(function (appointment) {

                    _this.initial(true);

                    _this.refresh.next();

                    _this.showSuccessToast(_this.language.message.success, _this.language.message.appointmentcreated);

                }, function (error) {

                    _this.selectedService = undefined;

                    _this.refreshGetEvents();

                    _this.showErrorToast(_this.language.message.info, _this.language.message.alreadyhaaveappointment);

                    return;

                });

            }

            else {

                this.showErrorToast(this.language.message.info, this.language.message.alreadyhaaveappointment);

            }

        }

        else {

            this.appointmentService.update(saveData, e._id, this.currentUser.user.companyID).then(function (appointment) {

                _this.initial(true);

                _this.refresh.next();

                _this.showSuccessToast(_this.language.message.success, _this.language.message.appointmentupdated);

            });

        }

    };

    AppointmentComponent.prototype.deleteAppointment = function (e, index) {

        if (window.confirm(this.language.message.deleteconfirm)) {

            this.appointmentService.delete(e._id, this.currentUser.user.companyID);

            if (index > -1) {

                for (var i = 0; i < this.events.length; i++) {

                    if (this.events[i]._id === e._id) {

                        this.events.splice(i, 1);

                    }

                }

                // this.tempEvents.splice(index, 1);

                // this.refresh.next();

                this.refreshGetEvents();

                this.showSuccessToast(this.language.message.success, this.language.message.appointmentremoved);

            }

        }

    };

    AppointmentComponent.prototype.onChangeCalender = function (calender) {

        // //console.log("selected", calender);

        this.selectedCalender = calender;

        this.tempEvents = [];

        for (var i = 0; i < this.events.length; i++) {

            // if ( this.selectedService === undefined ) {

            if (this.view === 'month') {

                if (this.selectedCalender === this.events[i].selectedCalender &&

                    Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameMonth"])(this.viewDate, this.events[i].start)) {

                    this.events[i].editing = false;

                    this.tempEvents.push(this.events[i]);

                }

            }

            if (this.view === 'week') {

                if (this.selectedCalender === this.events[i].selectedCalender &&

                    Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameWeek"])(this.viewDate, this.events[i].start)) {

                    this.events[i].editing = false;

                    this.tempEvents.push(this.events[i]);

                }

            }

            if (this.view === 'day') {

                if (this.selectedCalender === this.events[i].selectedCalender &&

                    Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameDay"])(this.viewDate, this.events[i].start)) {

                    this.events[i].editing = false;

                    this.tempEvents.push(this.events[i]);

                }

            }

        }

        // //console.log(this.tempEvents, "Events");

        this.refresh.next();

    };

    AppointmentComponent.prototype.getDateFormatted = function (time) {

        return __WEBPACK_IMPORTED_MODULE_6_moment__(time).format("DD-MM-YYYY");

    };

    AppointmentComponent.prototype.editAppointment = function (event) {

        event.editing = true;

        if (event.selectedService) {

            this.selectedService = event.selectedService;

        }

        this.refresh.next();

    };

    AppointmentComponent.prototype.getTimeFormatted = function (time) {

        return __WEBPACK_IMPORTED_MODULE_6_moment__(time).format("HH:mm");

    };

    AppointmentComponent.prototype.getEventService = function (event) {

        var THIS = this;

        if (typeof event.serviceName == "undefined") {

            var service = this.services.filter(function (obj) {

                return obj._id == event.selectedService;

            });

            if (service.length > 0) {

                event.serviceName = service[0].description + "<br/> <b>" + service[0].duration + " Minutes </b>";

            }

        }

        return event.serviceName;

    };

    AppointmentComponent.prototype.getClientHTML = function (client) {

        var THIS = this;

        var html = '';

        if (client) {

            var client = this.clients.filter(function (obj) {

                return obj._id == client;

            });

            if (client.length > 0) {

                // event.serviceName = service[0].description + "<br/> <b>" + service[0].duration + " Minutes </b>";

                html += '' + client[0].email + '<br/>' + client[0].firstName + ' ' + client[0].lastName + '<br/>' + client[0].phoneNumber;

            }

        }

        return html;

    };

    AppointmentComponent.prototype.onChangeService = function (service) {

        this.selectedService = service;

        this.refresh.next();

    };

    // eventDropped($event, segment, data) {

    //   // //console.log("Dropped In Segment");

    //   // //console.log($event);

    //   // //console.log(segment);

    //   // //console.log(data);

    //   // if($event)

    // }

    AppointmentComponent.prototype.checkExistingEventTime = function (start) {

        var starttime = start;

        var endtime = null;

        var serviceTemp = null;

        var allow = true;

        for (var i = 0; i < this.services.length; i++) {

            var serv = null;

            serv = this.selectedService;

            if (serv == this.services[i]._id) {

                serviceTemp = this.services[i];

                this.services[i].showTime = false;

            }

        }

        if (typeof serviceTemp != 'undefined') {

            var enddate = __WEBPACK_IMPORTED_MODULE_6_moment__(starttime).add(serviceTemp.duration, 'minutes').toDate();

            // this.tempEvents[0].end = enddate;

            endtime = enddate;

        }

        // console.log(starttime,"starttime");

        // console.log(endtime,"endtime");

        // console.log(this.tempEvents,"events");

        $.each(this.tempEvents, function (ind, elm) {

            if (this._id) {

                if (this.start.toString() == starttime.toString() || this.end.toString() == endtime.toString()) {

                    allow = false;

                }

                if ((this.start > starttime && this.start < endtime) || (this.end > starttime && this.end < endtime)) {

                    allow = false;

                }

                if (starttime > this.start && endtime < this.end) {

                    allow = false;

                }

                if (starttime < new Date(__WEBPACK_IMPORTED_MODULE_6_moment__(this.viewDate).format("DD-MM-YYYY") + " " + this.dayStart)) {

                    allow = false;

                }

                if (endtime > new Date(__WEBPACK_IMPORTED_MODULE_6_moment__(this.viewDate).format("DD-MM-YYYY") + " " + this.dayEnd)) {

                    allow = false;

                }

                if (starttime < this.start && endtime > this.end) {

                    allow = false;

                }

            }

        });

        return allow;

    };

    AppointmentComponent.prototype.eventDroppedOnTime = function ($evnt) {

        // //console.log($evnt, "Dropped");

        var event = $evnt.event;

        var newStart = $evnt.hour;

        var allow = false;

        this.dropEvent = true;

        if (this.checkExistingEventTime(newStart)) {

            this.selectedService = event['_id'];

            this.clickedDate = newStart;

            this.viewDate = newStart;

            this.setStartEndHour();

            this.addEvent(true);

            var THIS = this;

            this.curSegmentTime = false;

            setTimeout(function () {

                var indx = (THIS.tempEvents.length - 1);

                THIS.tempEvents[indx].start = newStart;

                THIS.dropEvent = true;

                setTimeout(function () {

                    THIS.startDateChange(THIS.tempEvents[indx], null);

                    setTimeout(function () {

                        THIS.startDateChange(THIS.tempEvents[indx], null);

                        THIS.selectClient();

                    }, 200);

                    // THIS.startDateChange(THIS.tempEvents[0], newStart);

                }, 100);

            }, 30);

        }

        else {

            this.showErrorToast(this.language.message.info, this.language.message.alreadyhaaveappointment);

        }

    };

    AppointmentComponent.prototype.eventDropped = function (_a) {

        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;

        // alert();

        // //console.log(event);

        // //console.log(newStart);

        this.selectedService = event['_id'];

        if (this.checkExistingEventTime(newStart)) {

            this.clickedDate = newStart;

            this.viewDate = newStart;

            this.setStartEndHour();

            this.addEvent();

            var THIS = this;

            setTimeout(function () {

                THIS.tempEvents[(THIS.tempEvents.length - 1)].start = newStart;

                THIS.dropEvent = true;

                setTimeout(function () {

                    THIS.startDateChange(THIS.tempEvents[(THIS.tempEvents.length - 1)], null);

                    setTimeout(function () {

                        THIS.startDateChange(THIS.tempEvents[(THIS.tempEvents.length - 1)], null);

                        THIS.selectClient();

                    }, 500);

                    // THIS.startDateChange(THIS.tempEvents[0], newStart);

                }, 500);

            }, 500);

        }

        else {

            this.showErrorToast(this.language.message.info, this.language.message.alreadyhaaveappointment);

        }

    };

    AppointmentComponent.prototype.showBusy = function (e) {

        if (e.target.checked) {

            this.busyshow = true;

            this.selectedService = undefined;

            this.refresh.next();

        }

        else {

            this.busyshow = false;

        }

    };

    AppointmentComponent.prototype.daySelected = function () {

        this.view = 'day';

        this.viewDate = this.tempviewDate;

        this.setStartEndHour();

        this.refreshGetEvents();

        // removing active from hours

        $(".cal-hour-segment").removeClass("active");

    };

    AppointmentComponent.prototype.weekSelected = function () {

        this.view = 'week';

        // this.refreshGetEvents();

        this.viewDate = this.tempviewDate;

        this.setStartEndHour();

        this.refreshGetEvents();

        // removing active from hours

        $(".cal-hour-segment").removeClass("active");

    };

    AppointmentComponent.prototype.monthSelected = function () {

        this.view = 'month';

        this.refreshGetEvents();

    };

    AppointmentComponent.prototype.nextDayClicked = function () {

        // //console.log("NEXT");

        this.setStartEndHour();

        this.refreshGetEvents();

    };

    AppointmentComponent.prototype.prevDayClicked = function () {

        this.setStartEndHour();

        this.refreshGetEvents();

    };

    AppointmentComponent.prototype.toDayClicked = function () {

        this.setStartEndHour();

        this.refreshGetEvents();

    };

    AppointmentComponent.prototype.setStartEndHour = function () {

        switch (this.viewDate.getDay().toString()) {

            case '0':

                this.dayStart = this.openingHours['sunfrom'];

                this.dayEnd = this.openingHours['sunto'];

                break;

            case '1':

                this.dayStart = this.openingHours['monfrom'];

                this.dayEnd = this.openingHours['monto'];

                break;

            case '2':

                this.dayStart = this.openingHours['tuefrom'];

                this.dayEnd = this.openingHours['tueto'];

                break;

            case '3':

                this.dayStart = this.openingHours['wedfrom'];

                this.dayEnd = this.openingHours['wedto'];

                break;

            case '4':

                this.dayStart = this.openingHours['thufrom'];

                this.dayEnd = this.openingHours['thuto'];

                break;

            case '5':

                this.dayStart = this.openingHours['frifrom'];

                this.dayEnd = this.openingHours['frito'];

                break;

            case '6':

                this.dayStart = this.openingHours['satfrom'];

                this.dayEnd = this.openingHours['satto'];

                break;

        }

        this.startHour = this.dayStart.split(":")[0];

        this.startMinute = this.dayStart.split(":")[1];

        this.endHour = this.dayEnd.split(":")[0];

        this.endMinute = this.dayEnd.split(":")[1];

        if (this.view === 'day' || this.view === 'week') {

            this.tempviewDate = this.viewDate;

            this.clickedDate = this.viewDate;

        }

    };

    AppointmentComponent.prototype.refreshGetEvents = function () {

        this.tempEvents = [];

        for (var i = 0; i < this.events.length; i++) {

            if (this.selectedCalender === undefined) {

                if (this.view === 'month') {

                    if ((this.selectedService === this.events[i].selectedService || 1 == 1) &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameMonth"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                }

                if (this.view === 'week') {

                    if ((this.selectedService === this.events[i].selectedService || 1 == 1) &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameWeek"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                }

                if (this.view === 'day') {

                    if ((this.selectedService === this.events[i].selectedService || 1 == 1) &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameDay"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                }

            }

            else if (this.selectedService === undefined) {

                if (this.view === 'month') {

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameMonth"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                }

                if (this.view === 'week') {

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameWeek"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                }

                if (this.view === 'day') {

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameDay"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                }

            }

            else {

                if (this.view === 'month') {

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        (this.selectedService === this.events[i].selectedService || 1 == 1) &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameMonth"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        this.events[i].title === 'Busy' &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameMonth"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                }

                if (this.view === 'week') {

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        (this.selectedService === this.events[i].selectedService || 1 == 1) &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameWeek"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        this.events[i].title === 'Busy' &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameWeek"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                    //console.log(this.tempEvents);

                }

                if (this.view === 'day') {

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        (this.selectedService === this.events[i].selectedService || 1 == 1) &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameDay"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                    if (this.selectedCalender === this.events[i].selectedCalender &&

                        this.events[i].title === 'Busy' &&

                        Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["isSameDay"])(this.viewDate, this.events[i].start)) {

                        this.tempEvents.push(this.events[i]);

                    }

                }

            }

        }

        this.refresh.next();

    };

    AppointmentComponent.prototype.ngOnDestroy = function () {

    };

    AppointmentComponent.prototype.showSuccessToast = function (title, content) {

        this._service.success(title, content, this.options);

    };

    AppointmentComponent.prototype.showErrorToast = function (title, content) {

        this._service.info(title, content, this.options);

    };

    AppointmentComponent.prototype.startDateChange = function (event, startDate) {

        //var enddate =  moment(startDate).add(2, 'hours');

        var _this = this;

        var _THIS = this;

        this.zone.run(function () {

            _THIS.refresh.next();

            var serviceTemp = null;

            for (var i = 0; i < _this.services.length; i++) {

                var serv = null;

                if (_this.selectedService) {

                    serv = _this.selectedService;

                }

                else {

                    serv = event.selectedService;

                }

                if (serv == _this.services[i]._id) {

                    serviceTemp = _this.services[i];

                }

            }

            if (typeof serviceTemp != 'undefined') {

                var enddate = __WEBPACK_IMPORTED_MODULE_6_moment__(event.start).add(serviceTemp.duration, 'minutes').toDate();

                // this.tempEvents[0].end = enddate;

                event.end = enddate;

            }

        });

        // this.refresh.next();

    };

    AppointmentComponent.prototype.handleHourClicked = function (event, event2) {

        // //console.log("Clicked on hour");

        if (this.tempEvents.length > 0) {

            this.tempEvents[0].start = event.date;

            this.startDateChange(this.tempEvents[0], null);

            this.refresh.next();

        }

    };

    AppointmentComponent.prototype.calculateEndDateTime = function (event) {

        var serviceTemp = null;

        for (var i = 0; i < this.services.length; i++) {

            if (this.selectedService == this.services[i]._id) {

                serviceTemp = this.services[i];

            }

        }

        var enddate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.tempEvents[0].start).add(serviceTemp.duration, 'minutes').toDate();

        // //console.log(event.start)

        // //console.log(serviceTemp.duration)

        // //console.log(enddate)

        this.tempEvents[0].end = enddate;

        // this.tempEvents[0] = event;

        this.refresh.next();

    };

    AppointmentComponent.prototype.endDateChange = function (event, startDate) {

        // //console.log("asf404ru3w4tyqwhyasdfahjlksdfna")

    };

    return AppointmentComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)

], AppointmentComponent.prototype, "modalContent", void 0);

AppointmentComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,

        selector: 'appointments-holder',

        template: __webpack_require__("../../../../../src/app/pages/user/appointments/appointments.html"),

        host: { '(window:keydown)': 'hotkeys($event)' },

        styles: [__webpack_require__("../../../../../src/app/pages/user/appointments/angular-calendar.css"), __webpack_require__("../../../../../src/app/pages/user/appointments/appointments.scss"), __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/styles.scss")],

        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None

    }),

    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__services_calendars_service__["b" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_calendars_service__["b" /* CalendarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__services_services_service__["b" /* ServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_services_service__["b" /* ServicesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__services_clients_service__["b" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_clients_service__["b" /* ClientsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_13__services_appointment_service__["b" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_appointment_service__["b" /* AppointmentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_14__services_openinghours_service__["a" /* OpeningHoursService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_openinghours_service__["a" /* OpeningHoursService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_completer__["a" /* CompleterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_completer__["a" /* CompleterService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_15_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_16__services_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__services_language_service__["a" /* LanguageService */]) === "function" && _p || Object])

], AppointmentComponent);



var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

//# sourceMappingURL=appointments.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/appointments.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appointment-holder\">\r\n  <simple-notifications [options]=\"options\"></simple-notifications>\r\n  <div *ngIf=\"loading == true\" class=\"loader\"></div>\r\n  <ng-template #modalContent let-close=\"close\" *ngIf=\"loading == false\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Event action occurred</h5>\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div>\r\n        Action:\r\n        <pre>{{ modalData?.action }}</pre>\r\n      </div>\r\n      <div>\r\n        Event:\r\n        <pre>{{ modalData?.event | json }}</pre>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">OK</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n\r\n\r\n  <div class=\"row\" *ngIf=\"loading == false\" style=\"margin-left:0;margin-right:0;margin-top: 5px;\">\r\n    <div class=\"col-md-12\" style=\"width:100%;background:linear-gradient(#fff,#fafafa);border:solid 1px rgba(229, 229, 229, 0.45);display:flex;border: 1px solid #2776f1;align-items:center;height: 56px;\">\r\n      <label for=\"exampleSelect2\" style=\"padding-left: 10px;padding-bottom: 5px; padding-top: 27px;background: linear-gradient(#fff,#fafafa);color: #444;box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.24);margin-bottom: 20px;border:none!important;flex:0 0 18%;\" translate>\r\n        <span class=\"top-img\" [ngClass]=\"{'hasimage': selectedCalendarImage }\">\r\n          <img *ngIf=\"!selectedCalendarImage\" src=\"assets/images/user-service.png\" />\r\n          <img *ngIf=\"selectedCalendarImage\" [src]=\"selectedCalendarImage\" />\r\n        </span>\r\n      {{selectedCalendarName}}\r\n    </label>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"btn-group\">\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          mwlCalendarPreviousView\r\n          [view]=\"view\"\r\n          (click) = \"prevDayClicked()\" id=\"prevNavMove\"\r\n          [(viewDate)]=\"viewDate\" translate>\r\n          {{'appointment.previous'}}\r\n        </div>\r\n        <div\r\n          class=\"btn btn-secondary\"\r\n          mwlCalendarToday\r\n          (click) = \"toDayClicked()\"\r\n          [(viewDate)]=\"viewDate\" translate>\r\n           {{'appointment.today'}}\r\n        </div>\r\n        <div\r\n          class=\"btn btn-primary\" id=\"nextNavMove\"\r\n          mwlCalendarNextView\r\n          (click) = \"nextDayClicked()\"\r\n          [view]=\"view\"\r\n          [(viewDate)]=\"viewDate\" translate>\r\n           {{'appointment.next'}}\r\n        </div>\r\n        <!-- <div >\r\n          <label for=\"exampleSelect1\" style=\"margin-left:20px\" translate>{{'appointment.calendar'}}</label>\r\n          <select class=\"form-control1\" [ngModel] = \"selectedCalender\" (ngModelChange)=\"onChangeCalender($event)\">\r\n              <option *ngFor=\"let item of calendars\" [ngValue]=\"item._id\">{{item.description}}</option>\r\n          </select>\r\n        </div> -->\r\n        <!--<div >\r\n          <label class=\"checkbox-inline\" style=\"margin-top:8px; margin-left:8px\">\r\n                <span>Busy</span> <input type=\"checkbox\" [(ngModel)] = 'busyshow' (change)=\"showBusy($event)\" [ngModelOptions]=\"{standalone: true}\" >\r\n          </label>\r\n        </div>-->\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4 text-center\" *ngIf=\"loading == false\">\r\n      <h3><span class=\"title-icon\"><img src=\"assets/images/icon-calendar-blu.png\" />&nbsp;</span>{{ viewDate | calendarDate:(view + 'ViewTitle'):currentlang }}</h3>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 text-right\" *ngIf=\"loading == false\">\r\n      <div class=\"btn-group\">\r\n        <!-- <div style=\"padding-right:20px\">\r\n          <label for=\"exampleSelect2\" style=\"margin-right:10px;\" translate>{{'appointment.service'}}</label>\r\n          <select class=\"form-control1\" [ngModel] = \"selectedService\"  (ngModelChange)=\"onChangeService($event)\">\r\n              <option *ngFor=\"let item of services\" [ngValue]=\"item._id\">{{item.description}}</option>\r\n          </select>\r\n        </div> -->\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          (click)=\"monthSelected()\"\r\n          [class.active]=\"view === 'month'\" translate>\r\n          {{'appointment.month'}}\r\n        </div>\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          (click)=\"weekSelected()\"\r\n          [class.active]=\"view === 'week'\" translate>\r\n          {{'appointment.week'}}\r\n        </div>\r\n        <div\r\n          class=\"btn btn-primary\"\r\n          (click)=\"daySelected()\"\r\n          [class.active]=\"view === 'day'\" translate>\r\n          {{'appointment.day'}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\" style=\"padding-left: 6px;padding-right:6px;\">\r\n      <!-- <ul class=\"serviceslist\">\r\n        <li *ngFor=\"let item of services\" (click)=\"onChangeService(item._id)\" >\r\n          <a mwlDraggable href=\"javascript:;\" style=\"position:relative; z-index: 10\" [dropData]=\"{event: item}\" class=\"btn\" [ngClass]=\"{'active': item._id==selectedService }\">{{item.description}}</a>\r\n        </li>\r\n      </ul> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"loading == false\" style=\"padding-left:2px;padding-right:2px;\">\r\n    \r\n      \r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n<!-- <label for=\"exampleSelect2\" style=\"margin-right:10px;\" translate>{{'appointment.service'}}</label>\r\n  <select class=\"form-control1\" [ngModel] = \"selectedService\"  (ngModelChange)=\"onChangeService($event)\">\r\n      <option *ngFor=\"let item of services\" [ngValue]=\"item._id\">{{item.description}}</option>\r\n  </select> -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n      <div [hidden]=\"loading == true\" [ngSwitch]=\"view\" >\r\n        <mwl-calendar-month-view\r\n          *ngSwitchCase=\"'month'\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"tempEvents\"\r\n          [refresh]=\"refresh\"\r\n          [activeDayIsOpen]=\"activeDayIsOpen\"\r\n          (dayClicked)=\"dayClicked($event.day)\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n        </mwl-calendar-month-view>\r\n        <mwl-calendar-scheduler-view\r\n          *ngSwitchCase=\"'week'\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"tempEvents\"\r\n          [refresh]=\"refresh\"\r\n          [showActions]=\"false\"\r\n          [hourSegments]=\"12\"\r\n          \r\n          [dayStartHour]=\"startHour\"\r\n          [dayStartMinute]=\"startMinute\"\r\n          [dayEndHour]=\"endHour\"\r\n          [dayEndMinute]=\"endMinute\"\r\n          (segmentHover)=\"segmentHover($event)\"\r\n          [weekStartsOn]=\"1\"\r\n          (eventDropped)=\"eventDroppedOnTime($event, $event.hour)\">\r\n        </mwl-calendar-scheduler-view>\r\n        <!-- \r\n        <mwl-calendar-week-view\r\n          *ngSwitchCase=\"'week'\"\r\n          precision=\"hours\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"tempEvents\"\r\n          [refresh]=\"refresh\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventDropped($event)\">\r\n        </mwl-calendar-week-view> -->\r\n        <mwl-calendar-day-view\r\n          *ngSwitchCase=\"'day'\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"tempEvents\"\r\n          [dayStartHour]=\"startHour\"\r\n          [dayStartMinute]=\"startMinute\"\r\n          [dayEndHour]=\"endHour\"\r\n          [dayEndMinute]=\"endMinute\"\r\n          [refresh]=\"refresh\"\r\n          (hourSegmentClicked)=\"handleHourClicked($event,$event)\"\r\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n          (eventTimesChanged)=\"eventDropped($event)\"\r\n          >\r\n        </mwl-calendar-day-view>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <ul class=\"serviceslist\">\r\n        <li *ngFor=\"let item of services\" (click)=\"onChangeService(item._id)\" >\r\n          \r\n          <a mwlDraggable href=\"javascript:;\" style=\"position:relative; z-index: 10\" [dropData]=\"{event: item}\" class=\"btn\" [ngClass]=\"{'active': item._id==selectedService }\" (dragging)=\"draggingService(item)\" [ngStyle]=\"{'height': curSegmentTime && !dropEvent && item.showTime ? item.height + 'px' : '35' + 'px'}\">\r\n            <span *ngIf=\"curSegmentTime && item.showTime && !dropEvent\" class=\"srv-start\">{{item.start}}</span>\r\n            <span class=\"srv-name\">\r\n              {{item.description}}\r\n            </span>\r\n            <span *ngIf=\"curSegmentTime && item.showTime && !dropEvent\" class=\"srv-end\">{{item.end}}</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <br><br>\r\n\r\n  <div class=\"alert alert-info\" *ngIf=\"loading == false\"  translate>\r\n    {{'appointment.dayclicktitle'}}\r\n    <strong *ngIf=\"clickedDate\" >{{ clickedDate | date:'medium' }}</strong>\r\n  </div>\r\n\r\n  <h4 *ngIf=\"loading == false\">\r\n    {{eventEditTitle}}\r\n  </h4>\r\n  <button *ngIf=\"loading == false\"\r\n    class=\"btn btn-primary pull-right orange-btn\"\r\n    (click)=\"addEvent()\" translate><span><img src=\"../assets/images/icon-appoint.png\" style=\"height:20px;padding-right:10px;\" /></span>\r\n    {{'appointment.newappointment'}}\r\n  </button>\r\n  <button *ngIf=\"loading == false\"\r\n    class=\"btn btn-warning pull-right\" style=\"margin-right:10px\"\r\n    (click)=\"addBusyTime()\" translate=\"\"><span><img src=\"../assets/images/icon-busy.png\" style=\"height:20px;padding-right:10px;\" /></span>\r\n    {{'appointment.busytime'}}\r\n  </button>\r\n\r\n<div class=\"clearfix\"></div>\r\n\r\n<br><br>\r\n\r\n<table class=\"table table-bordered table-striped\" *ngIf=\"loading == false\">\r\n\r\n  <thead>\r\n    <tr>\r\n      <th translate>{{'appointment.client'}}</th>\r\n      <th translate>{{'appointment.service'}}</th>\r\n      <th translate>{{'appointment.date'}}</th>\r\n      <th translate>{{'appointment.startsat'}}</th>\r\n      <th translate>{{'appointment.endsat'}}</th>\r\n      <th translate>{{'appointment.saveremove'}}</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let event of tempEvents; let index = index\">\r\n      <td class=\"pull-center\">\r\n          <div *ngIf=\"!event.editing\">\r\n            <div class=\"form-group\" *ngIf = \"event.type=='Busy'\" style=\"font-size:20px; color:red; \" translate>\r\n              {{'appointment.busy'}}\r\n            </div>\r\n            <span [innerHTML]=\"getClientHTML(event.selectedClient)\">\r\n              \r\n            </span>\r\n          </div>\r\n          <div *ngIf=\"event.editing\">\r\n            <div class=\"form-group\"  *ngIf = \"event.type=='Appointment'\">\r\n              <a  class=\"btn btn-info btn-md orange-btn\" [innerHTML]=\"event.selectedClientEmail\" (click) = \"selectClient()\"></a>\r\n            </div>\r\n            <div class=\"form-group\"  *ngIf = \"event.type=='Appointment'\">\r\n              <a  class=\"btn btn-info btn-md btn-dark-red\" style=\"padding: 9px 53px;\" routerLink=\"/pages/clients\" translate>  {{'appointment.addclient'}}</a>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf = \"event.type=='Busy'\" style=\"font-size:20px; color:red; \" translate>\r\n              {{'appointment.busy'}}\r\n            </div>\r\n          </div>\r\n      </td>\r\n      <td class=\"pull-center\">\r\n        <span [innerHTML]=\"getEventService(event)\"></span>\r\n        <!-- {{getEventService(event)}} -->\r\n      </td>\r\n      <td class=\"pull-center\">\r\n        {{getDateFormatted(event.start)}}\r\n      </td>\r\n      <td class=\"pull-center\">\r\n        <div *ngIf=\"!event.editing\">\r\n          {{getTimeFormatted(event.start)}}\r\n        </div>\r\n        <mwl-demo-utils-date-time-picker\r\n          [(date)]=\"event.start\"\r\n          (dateChange)=\"startDateChange(event)\"\r\n          placeholder=\"Not set\" [ngClass]=\"{'hide': !event.editing }\">\r\n        </mwl-demo-utils-date-time-picker>\r\n      </td>\r\n      <td class=\"pull-center\">\r\n        <div *ngIf=\"!event.editing\">\r\n          {{getTimeFormatted(event.end)}}\r\n        </div>\r\n        <mwl-demo-utils-date-time-picker\r\n          [(date)]=\"event.end\"\r\n          placeholder=\"Not set\" [ngClass]=\"{'hide': !event.editing }\">\r\n        </mwl-demo-utils-date-time-picker>\r\n      </td>\r\n      <td>\r\n        <div *ngIf=\"!event.editing\">\r\n          <button\r\n            class=\"btn btn-success\"\r\n            (click)=\"editAppointment(event)\" translate>\r\n            <!-- <img src=\"../assets/images/icon-save-web.png\" /> -->\r\n            <i class=\"fa fa-pencil fa-2x\"></i>\r\n            <!-- {{'appointment.save'}} -->\r\n          </button>\r\n          \r\n          <button\r\n            class=\"btn btn-danger\"\r\n            (click)=\"deleteAppointment(event, index)\" translate><img src=\"../assets/images/icon-delete.png\" />\r\n            <!-- {{'appointment.delete'}} -->\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"event.editing\">\r\n          <button\r\n            class=\"btn btn-success\"\r\n            (click)=\"saveAppointment(event)\" translate><img src=\"../assets/images/icon-save-web.png\" />\r\n            <!-- {{'appointment.save'}} -->\r\n          </button>\r\n          \r\n          <button\r\n            class=\"btn btn-danger\"\r\n            (click)=\"deleteAppointment(event, index)\" translate><img src=\"../assets/images/icon-delete.png\" />\r\n            <!-- {{'appointment.delete'}} -->\r\n          </button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>\r\n\r\n\r\n\r\n<!-- \r\n<table class=\"table table-bordered\" *ngIf=\"loading == false\">\r\n\r\n  <thead >\r\n    <tr>\r\n      <th translate>{{'appointment.client'}}</th>\r\n      <th translate>{{'appointment.startsat'}}</th>\r\n      <th translate>{{'appointment.endsat'}}</th>\r\n      <th translate>{{'appointment.saveremove'}}</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let event of tempEvents; let index = index\">\r\n      <td class=\"pull-center\">\r\n          <div class=\"form-group\"  *ngIf = \"event.title != 'Busy'\">\r\n            <a  class=\"btn btn-info btn-md orange-btn\" [innerHTML]=\"event.selectedClientEmail\" (click) = \"selectClient()\"></a>\r\n          </div>\r\n          <div class=\"form-group\"  *ngIf = \"event.title != 'Busy'\">\r\n            <a  class=\"btn btn-info btn-md btn-dark-red\" style=\"padding: 9px 53px;\" routerLink=\"/pages/clients\" translate>  {{'appointment.addclient'}}</a>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf = \"event.title == 'Busy'\" style=\"font-size:20px; color:red; \" translate>\r\n            {{'appointment.busy'}}\r\n          </div>\r\n      </td>\r\n      <td>\r\n        <mwl-demo-utils-date-time-picker\r\n          [(date)]=\"event.start\"\r\n          (dateChange)=\"startDateChange(event)\"\r\n          placeholder=\"Not set\">\r\n        </mwl-demo-utils-date-time-picker>\r\n      </td>\r\n      <td>\r\n        <mwl-demo-utils-date-time-picker\r\n          [(date)]=\"event.end\"\r\n          placeholder=\"Not set\">\r\n        </mwl-demo-utils-date-time-picker>\r\n      </td>\r\n      <td>\r\n        <button\r\n          class=\"btn btn-success\"\r\n          (click)=\"saveAppointment(event)\" translate><img src=\"../assets/images/icon-save-web.png\" />\r\n        </button>\r\n        \r\n        <button\r\n          class=\"btn btn-danger\"\r\n          (click)=\"deleteAppointment(event, index)\" translate><img src=\"../assets/images/icon-delete.png\" />\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table> -->\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/appointments.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".al-content {\n  padding: 8px 0px 0px 1px; }\n\n.al-main {\n  margin-left: 180px;\n  padding: 19px 0 0px 0;\n  min-height: 500px;\n  position: relative; }\n\n.card {\n  color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 0;\n  border-radius: 7px;\n  position: relative;\n  margin-bottom: 24px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  margin: 40px 42px; }\n\n.cal-hour-segment.active {\n  background-color: #ededed; }\n\n.hide {\n  display: none; }\n\n.pull-center {\n  text-align: center; }\n\n.cal-week-view .cal-events-row {\n  height: 100px;\n  margin-bottom: 2px; }\n\n.cal-week-view .cal-event.cal-ends-within-week {\n  height: 100px; }\n\n#appointment-holder .serviceslist {\n  padding: 0px;\n  margin: 0px; }\n\n#appointment-holder .serviceslist li {\n  float: left;\n  list-style: none;\n  width: auto;\n  margin: 0px 10px; }\n\n#appointment-holder .serviceslist li a {\n  display: block;\n  border: solid 1px #0275d8;\n  padding: 10px;\n  color: #0275d8;\n  text-align: center; }\n\n#appointment-holder .serviceslist li a:hover, #appointment-holder .serviceslist li a.active {\n  background: #0275d8;\n  color: #fff; }\n\n#appointment-holder .btn .btn-danger, #appointment-holder .btn .btn-success {\n  padding: 8px 19px; }\n\n#appointment-holder .btn {\n  cursor: pointer;\n  border-radius: 0px;\n  transition: all 0.1s ease;\n  padding: 19px 12px;\n  font-size: 0.9rem; }\n\nmain:first-child::before #appointment-holder {\n  content: '';\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: linear-gradient(#fff, #fafafa);\n  background-size: cover;\n  will-change: transform;\n  z-index: 0; }\n\nmain:first-child #appointment-holder {\n  min-height: 100%;\n  position: relative;\n  font: 14px/16px \"Roboto\", sans-serif;\n  color: #797979;\n  background-color: #F0F3F4;\n  padding: 10px; }\n\n#appointment-holder .cal-month-view .cal-event-title {\n  color: white;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n#appointment-holder .btn-next {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n#appointment-holder .cal-month-view .cal-day-cell {\n  min-height: auto; }\n\n#appointment-holder .cal-day-view .cal-event {\n  height: auto; }\n\n#appointment-holder .cal-month-view .cal-open-day-events {\n  padding: 15px 26px;\n  color: white;\n  background: linear-gradient(#58d, #4ac); }\n\n#appointment-holder .form-control {\n  color: #444 !important;\n  border-radius: 5px;\n  box-shadow: none !important;\n  font-size: 14px; }\n\n#appointment-holder .input-group .form-control {\n  position: relative;\n  z-index: 2;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n  border: 1px solid #ccc !important; }\n\n#appointment-holder .table > thead > tr > th {\n  border-bottom: none !important;\n  padding-bottom: 10px !important;\n  background: #1c5de9 !important;\n  font-size: 15pt !important;\n  font-weight: 800; }\n\n#appointment-holder .table td {\n  padding: 15px; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #0d63e9; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #0d63e9; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #0d63e9; }\n\nmain:first-child #appointment-holder {\n  color: #db491e; }\n\nmain:first-child .cal-cell-row.cal-header {\n  font-size: 14pt; }\n\nmain:first-child #appointment-holder .serviceslist li a:hover, #appointment-holder .serviceslist li a.active {\n  background: #f04f22;\n  color: #fff !important;\n  border: none;\n  font-weight: 600; }\n\nmain:first-child #appointment-holder .serviceslist li a {\n  border: 1px solid #f04f22;\n  color: #4e4e4e; }\n\nmain:first-child #appointment-holder .btn {\n  cursor: pointer;\n  border-radius: 0px;\n  transition: all 0.1s ease;\n  padding: 8px 12px;\n  font-size: 0.9rem; }\n\nmain:first-child label[for=exampleSelect2] {\n  border: 1px solid #2776f1 !important;\n  box-shadow: none !important;\n  background: transparent !important;\n  color: #6d6d6e !important;\n  font-weight: 400 !important;\n  font-size: 16.5pt !important; }\n\nmain:first-child #appointment-holder .cal-month-view .cal-day-badge {\n  background: linear-gradient(#3054d4, #89309e) !important; }\n\n.cal-month-view .cal-event {\n  background: linear-gradient(#3054d4, #89309e) !important; }\n\nmain:first-child #appointment-holder .col-md-4 h3 {\n  color: #0d63e9;\n  font-size: 20pt;\n  font-weight: 700;\n  margin-top: 10px; }\n\n.calselected[_ngcontent-c5] {\n  background: #f04f22 !important; }\n\nli.ba-sidebar-sublist-item[_ngcontent-c5] {\n  padding-left: 2px !important; }\n\n[_nghost-c1] a.al-sidebar-list-link {\n  padding-left: 28px !important; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.4em;\n  font-weight: 600;\n  opacity: 1;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  color: #0d63e9;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 2.4em;\n  font-weight: 800; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.2;\n  color: #0d63e9; }\n\nmain:first-child #appointment-holder .btn-warning {\n  background-color: #0e4af6 !important;\n  border-color: #0e4af6 !important; }\n\nmain:first-child #appointment-holder .orange-btn {\n  background-color: #f6860f;\n  border-color: #f6860f;\n  color: #fff !important; }\n\nmain:first-child #appointment-holder .table.table-bordered th {\n  color: #fff !important;\n  border-collapse: collapse;\n  text-align: center; }\n\nmain:first-child #appointment-holder .table > tbody > tr > td {\n  padding-top: 20px; }\n\nmain:first-child #appointment-holder .btn-dark-red {\n  background-color: #b75f44 !important;\n  border-color: #b75f44;\n  color: #fff; }\n\nmain:first-child #appointment-holder .input-group .form-control {\n  border: 1px solid #b75f44 !important;\n  padding: 12px 12px;\n  border-radius: 0px !important; }\n\nmain:first-child #appointment-holder .form-control + .input-group-addon:not(:first-child) {\n  border-left: 0;\n  border-radius: 0px !important;\n  padding: 12px 12px;\n  border: 1px solid #b75f44 !important;\n  background: #b75f44; }\n\nmain:first-child #appointment-holder .form-control + .input-group-addon:not(:first-child) i {\n  color: #fff;\n  font-size: 16pt; }\n\n.btn-link[_ngcontent-c11] {\n  margin-bottom: -26px;\n  margin-top: -14px; }\n\nspan.top-img {\n  background: linear-gradient(#3595fa, #1347e3);\n  padding: 9px 12px 12px;\n  margin-left: -10px;\n  margin-right: 23px; }\n\n.hasimage {\n  background: transparent !important; }\n\nspan.top-img img {\n  height: 38px; }\n\nspan.title-icon {\n  position: absolute;\n  margin-left: -29px;\n  top: 8px; }\n\nli.ba-sidebar-sublist-item[_ngcontent-c6] {\n  padding-left: 0px; }\n\nul.al-sidebar-sublist > li > a.al-sidebar-list-link {\n  padding-left: 64px !important; }\n\n.ngb-tp input[type=text] {\n  border: 1px solid #ccc !important; }\n\n.ngb-tp input[type=text]::-webkit-input-placeholder {\n  color: #888 !important; }\n\n.ngb-tp input[type=text]:-ms-input-placeholder {\n  color: #888 !important; }\n\n.ngb-tp input[type=text]::placeholder {\n  color: #888 !important; }\n\nmain:first-child #appointment-holder .form-inline {\n  margin-top: -16px; }\n\n#appointment-holder .cal-day-view .cal-event-container {\n  display: inline-block;\n  white-space: normal; }\n\n#appointment-holder .cal-day-view .cal-event {\n  height: auto;\n  display: block; }\n\nmwl-calendar-event-title[view=day] .cal-event-title br {\n  display: none; }\n\nmwl-calendar-event-title[view=week] .cal-event-title br {\n  content: '';\n  display: block;\n  margin: -8px 0px; }\n\n.cal-week-view .cal-event.cal-ends-within-week {\n  height: auto; }\n\n.cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour {\n  height: 15.25em !important; }\n\n#appointment-holder .cal-scheduler-segment.has-events.no-border {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  position: relative;\n  color: #fff; }\n\n#appointment-holder .cal-scheduler-segment.has-events.no-border .cal-scheduler-event-title {\n  font-weight: 400;\n  font-size: 14px; }\n\n.cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event.cal-starts-within-segment {\n  display: block !important;\n  white-space: normal !important;\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important; }\n\n.cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0;\n  display: block !important;\n  display: -ms-flexbox;\n  -ms-flex-flow: column wrap;\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important; }\n\n.cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event.cal-starts-within-segment {\n  border-top-left-radius: .3em;\n  border-top-right-radius: .3em;\n  margin-top: 2px;\n  position: absolute;\n  right: 0;\n  left: -2px;\n  width: 100%;\n  z-index: 99;\n  line-height: 1.2; }\n\n.cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour .cal-scheduler-time {\n  height: auto; }\n\n#appointment-holder .serviceslist li {\n  float: none;\n  list-style: none;\n  margin: 0px 10px 10px; }\n\n#appointment-holder .serviceslist li a {\n  display: inline-block; }\n\n#appointment-holder .col-md-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%; }\n\nmain {\n  overflow-x: hidden; }\n\n.loader {\n  top: 100%; }\n\n.cal-scheduler-hour .cal-scheduler-hour-segment:not(:first-child) {\n  color: transparent; }\n\n.cal-scheduler-hour .cal-scheduler-hour-segment:not(:first-child):hover {\n  color: transparent; }\n\n.cal-scheduler-hour .cal-scheduler-hour-segment:not(:first-child)::-moz-selection {\n  background: transparent;\n  color: transparent; }\n\n.cal-scheduler-hour .cal-scheduler-hour-segment:not(:first-child)::selection {\n  background: transparent;\n  color: transparent; }\n\n.cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment.no-border {\n  background-color: #ad2121; }\n\n.cal-scheduler-half-hour {\n  max-height: 102px; }\n\n#appointment-holder .cal-scheduler-segment.has-events.no-border {\n  background: transparent !important; }\n\n.cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment:not(:last-child) {\n  background: transparent !important; }\n\n.cal-scheduler-tottime-5 {\n  max-height: 17px; }\n\n.cal-scheduler-tottime-10 {\n  max-height: 34px; }\n\n.cal-scheduler-tottime-15 {\n  max-height: 51px; }\n\n.cal-scheduler-tottime-20 {\n  max-height: 68px; }\n\n.cal-scheduler-tottime-25 {\n  max-height: 85px; }\n\n.cal-scheduler-tottime-30 {\n  max-height: 102px; }\n\n.cal-scheduler-tottime-35 {\n  max-height: 119px; }\n\n.cal-scheduler-tottime-40 {\n  max-height: 136px; }\n\n.cal-scheduler-tottime-45 {\n  max-height: 153px; }\n\n.cal-scheduler-tottime-50 {\n  max-height: 170px; }\n\n.cal-scheduler-tottime-55 {\n  max-height: 187px; }\n\n.cal-scheduler-tottime-60 {\n  max-height: 204px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarSchedulerViewCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var CalendarSchedulerViewCellComponent = (function () {

    function CalendarSchedulerViewCellComponent() {

        this.showActions = true;

        this.highlightSegment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.highlightCell = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.unhighlightSegment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        // custom drag and drop helper

        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.segmentClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    CalendarSchedulerViewCellComponent.prototype.ngOnInit = function () {

        this.title = __WEBPACK_IMPORTED_MODULE_2_moment__(this.day.date).format('dddd L');

    };

    CalendarSchedulerViewCellComponent.prototype.onMouseEnter = function (mouseEvent, segment, event) {

        if (!event.isDisabled && !segment.isDisabled) {

            this.highlightSegment.emit({ event: event });

        }

    };

    CalendarSchedulerViewCellComponent.prototype.onMouseLeave = function (mouseEvent, segment, event) {

        if (!event.isDisabled && !segment.isDisabled) {

            this.unhighlightSegment.emit({ event: event });

        }

    };

    CalendarSchedulerViewCellComponent.prototype.eventDropped = function (dropEvent, segment) {

        //console.log("Dropped", segment);

        if (dropEvent.dropData && dropEvent.dropData.event) {

            this.eventTimesChanged.emit({ event: dropEvent.dropData.event, newStart: segment.date });

        }

    };

    ;

    /**

     * @hidden

     */

    CalendarSchedulerViewCellComponent.prototype.onSegmentHover = function (segment, isHover) {

        this.highlightCell.emit({ segment: segment.date, isHover: isHover });

    };

    /**

     * @hidden

     */

    CalendarSchedulerViewCellComponent.prototype.onSegmentClick = function (mouseEvent, segment) {

        if (mouseEvent.stopPropagation) {

            mouseEvent.stopPropagation();

        }

        if (segment.events.length === 0) {

            this.segmentClicked.emit({ segment: segment });

        }

    };

    /**

     * @hidden

     */

    CalendarSchedulerViewCellComponent.prototype.onEventClick = function (mouseEvent, event) {

        if (mouseEvent.stopPropagation) {

            mouseEvent.stopPropagation();

        }

        if (event.isClickable) {

            this.eventClicked.emit({ event: event });

        }

    };

    return CalendarSchedulerViewCellComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewCellComponent.prototype, "title", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewDay"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewDay"]) === "function" && _a || Object)

], CalendarSchedulerViewCellComponent.prototype, "day", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewHour"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewHour"]) === "function" && _b || Object)

], CalendarSchedulerViewCellComponent.prototype, "hour", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewCellComponent.prototype, "locale", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewCellComponent.prototype, "tooltipPlacement", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Boolean)

], CalendarSchedulerViewCellComponent.prototype, "showActions", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _c || Object)

], CalendarSchedulerViewCellComponent.prototype, "customTemplate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _d || Object)

], CalendarSchedulerViewCellComponent.prototype, "eventTemplate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)

], CalendarSchedulerViewCellComponent.prototype, "highlightSegment", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)

], CalendarSchedulerViewCellComponent.prototype, "highlightCell", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)

], CalendarSchedulerViewCellComponent.prototype, "unhighlightSegment", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)

], CalendarSchedulerViewCellComponent.prototype, "eventTimesChanged", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _j || Object)

], CalendarSchedulerViewCellComponent.prototype, "segmentClicked", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _k || Object)

], CalendarSchedulerViewCellComponent.prototype, "eventClicked", void 0);

CalendarSchedulerViewCellComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-calendar-scheduler-cell',

        template: "\n        <ng-template #defaultTemplate>\n            <div class=\"cal-scheduler-segments\" *ngIf=\"hour.segments.length > 0\" \n                \n                [class.no-border]=\"!hour.hasBorder\" [class.cal-scheduler-half-hour]=\"hour.segments.length < 7\">\n                <div class=\"cal-scheduler-segment\" \n                    *ngFor=\"let segment of hour.segments; let si = index\"\n                    [title]=\"title\"\n                    [ngClass]=\"segment?.cssClass\"\n                    [class.has-events]=\"segment.events.length > 0\"\n                    [class.cal-disabled]=\"segment.isDisabled\"\n                    [style.backgroundColor]=\"segment.backgroundColor\"\n                    [class.no-border]=\"!segment.hasBorder\"\n                    mwlDroppable\n                    (mouseenter)=\"onSegmentHover(segment, true)\"\n                    (mouseleave)=\"onSegmentHover(segment, false)\"\n                    (drop)=\"eventDropped($event, segment)\"\n                    (mwlClick)=\"onSegmentClick($event, segment)\">\n\n                    <div class=\"cal-scheduler-events\" *ngIf=\"segment.events.length > 0\">\n                        <mwl-calendar-scheduler-event\n                            *ngFor=\"let event of segment.events\"\n                            [day]=\"day\"\n                            [hour]=\"hour\"\n                            [segment]=\"segment\"\n                            [event]=\"event\"\n                            (mouseenter)=\"onMouseEnter($event, segment, event)\"\n                            (mouseleave)=\"onMouseLeave($event, segment, event)\"\n                            [tooltipPlacement]=\"tooltipPlacement\"\n                            [showActions]=\"showActions\"\n\n                            [customTemplate]=\"eventTemplate\"\n                            (drop)=\"eventDropped($event, segment)\"\n                            (eventClicked)=\"onEventClick($event, event)\">\n                        </mwl-calendar-scheduler-event>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template\n            [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n            [ngTemplateOutletContext]=\"{\n                day: day,\n                hour: hour,\n                locale: locale,\n                tooltipPlacement: tooltipPlacement,\n                showActions: showActions,\n                eventTemplate: eventTemplate,\n                highlightSegment: highlightSegment,\n                unhighlightSegment: unhighlightSegment,\n                segmentClicked: segmentClicked,\n                eventTimesChanged: eventTimesChanged,\n                eventClicked: eventClicked\n            }\">\n        </ng-template>\n    ",

        host: {

            'class': 'cal-scheduler-cell',

            '[class.cal-past]': 'day.isPast',

            '[class.cal-today]': 'day.isToday',

            '[class.cal-future]': 'day.isFuture',

            '[class.cal-weekend]': 'day.isWeekend',

            '[class.cal-in-month]': 'day.inMonth',

            '[class.cal-out-month]': '!day.inMonth',

            '[style.backgroundColor]': 'day.backgroundColor'

        }

    })

], CalendarSchedulerViewCellComponent);



var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

//# sourceMappingURL=calendar-scheduler-view-cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-event-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarSchedulerViewEventActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var CalendarSchedulerViewEventActionsComponent = (function () {

    function CalendarSchedulerViewEventActionsComponent() {

        this.actions = [];

    }

    CalendarSchedulerViewEventActionsComponent.prototype.ngOnInit = function () {

        // //console.log(this.event)

        /*

        this.actions = this.event.isDisabled ?

            this.event.actions.filter((a: CalendarSchedulerEventAction) => !a.when || a.when === 'disabled') :

            this.event.actions.filter((a: CalendarSchedulerEventAction) => !a.when || a.when === 'enabled');

            */

    };

    /**

     * @hidden

     */

    CalendarSchedulerViewEventActionsComponent.prototype.onActionClick = function (mouseEvent, action, event) {

        if (mouseEvent.stopPropagation) {

            mouseEvent.stopPropagation();

        }

        action.onClick(event);

    };

    return CalendarSchedulerViewEventActionsComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["CalendarSchedulerEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["CalendarSchedulerEvent"]) === "function" && _a || Object)

], CalendarSchedulerViewEventActionsComponent.prototype, "event", void 0);

CalendarSchedulerViewEventActionsComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-calendar-scheduler-event-actions',

        template: "\n        <span *ngIf=\"event.actions\" class=\"cal-scheduler-event-actions\">\n            <a\n                class=\"cal-scheduler-event-action\"\n                href=\"javascript:;\"\n                *ngFor=\"let action of actions\"\n                (mwlClick)=\"onActionClick($event, action, event)\"\n                [ngClass]=\"action.cssClass\"\n                [innerHtml]=\"action.label\"\n                [title]=\"action.title\">\n            </a>\n        </span>\n    ", host: {

            'class': 'cal-scheduler-event-actions-container'

        }

    })

], CalendarSchedulerViewEventActionsComponent);



var _a;

//# sourceMappingURL=calendar-scheduler-view-event-actions.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-event-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarSchedulerViewEventContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var CalendarSchedulerViewEventContentComponent = (function () {

    function CalendarSchedulerViewEventContentComponent() {

    }

    return CalendarSchedulerViewEventContentComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["CalendarSchedulerEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["CalendarSchedulerEvent"]) === "function" && _a || Object)

], CalendarSchedulerViewEventContentComponent.prototype, "event", void 0);

CalendarSchedulerViewEventContentComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-calendar-scheduler-event-content',

        template: "\n        <div *ngIf=\"event.content\" \n            class=\"cal-scheduler-event-content\"\n            [innerHTML]=\"event.content\">\n        </div>\n    ",

        host: {

            'class': 'cal-scheduler-event-content-container'

        }

    })

], CalendarSchedulerViewEventContentComponent);



var _a;

//# sourceMappingURL=calendar-scheduler-view-event-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-event-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarSchedulerViewEventTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var CalendarSchedulerViewEventTitleComponent = (function () {

    function CalendarSchedulerViewEventTitleComponent() {

    }

    return CalendarSchedulerViewEventTitleComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["CalendarSchedulerEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["CalendarSchedulerEvent"]) === "function" && _a || Object)

], CalendarSchedulerViewEventTitleComponent.prototype, "event", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewEventTitleComponent.prototype, "view", void 0);

CalendarSchedulerViewEventTitleComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-calendar-scheduler-event-title',

        template: "\n        <div\n            class=\"cal-scheduler-event-title\"\n            [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n        </div>\n        <div *ngIf=\"event.status\"\n            class=\"cal-scheduler-event-status\"\n            [class.ok]=\"event.status === 'ok'\"\n            [class.warning]=\"event.status === 'warning'\"\n            [class.danger]=\"event.status === 'danger'\">\n        </div>\n    ",

        host: {

            'class': 'cal-scheduler-event-title-container'

        }

    })

], CalendarSchedulerViewEventTitleComponent);



var _a;

//# sourceMappingURL=calendar-scheduler-view-event-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarSchedulerViewEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__ = __webpack_require__("../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









/**

 * [mwlCalendarTooltip]="event.title | calendarEventTitle:'weekTooltip':event"

 * [tooltipPlacement]="tooltipPlacement"

 */

var CalendarSchedulerViewEventComponent = (function () {

    function CalendarSchedulerViewEventComponent(renderer) {

        this.renderer = renderer;

        this.showActions = true;

        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    CalendarSchedulerViewEventComponent.prototype.ngOnInit = function () {

        this.segment.hasBorder = this.hour.hasBorder = !this.event.endsAfterSegment;

        this.title = __WEBPACK_IMPORTED_MODULE_3_moment__(this.event.start).format('dddd L');

        this.checkEnableState();

    };

    CalendarSchedulerViewEventComponent.prototype.checkEnableState = function () {

        var _this = this;

        if (this.segment.isDisabled) {

            this.day.hours.forEach(function (hour) {

                hour.segments.forEach(function (segment) {

                    segment.events.filter(function (event) { return event.id === _this.event.id && Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(event.start, _this.event.start); })

                        .forEach(function (event) {

                        event.isDisabled = true;

                    });

                });

            });

        }

    };

    CalendarSchedulerViewEventComponent.prototype.highlightEvent = function () {

        //let events: CalendarSchedulerEvent[] = this.day.hours

        //    .filter(h => h.segments.some(s => s.events.some(e => e.id === this.event.id)))

        //    .map(h =>

        //        h.segments.map(s =>

        //            s.events.filter(e => e.id === this.event.id)

        //        ).reduce((prev, curr) => prev.concat(curr))

        //    )

        //    .reduce((prev, curr) => prev.concat(curr));

        var _this = this;

        this.day.hours.forEach(function (hour) {

            hour.segments.forEach(function (segment) {

                segment.events.filter(function (event) { return event.id === _this.event.id && Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(event.start, _this.event.start); })

                    .forEach(function (event) {

                    event.isHovered = true;

                });

            });

        });

    };

    CalendarSchedulerViewEventComponent.prototype.unhighlightEvent = function () {

        var _this = this;

        this.day.hours.forEach(function (hour) {

            hour.segments.forEach(function (segment) {

                segment.events.filter(function (event) { return event.id === _this.event.id && Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(event.start, _this.event.start); })

                    .forEach(function (event) {

                    event.isHovered = false;

                });

            });

        });

    };

    return CalendarSchedulerViewEventComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewEventComponent.prototype, "title", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewDay"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewDay"]) === "function" && _a || Object)

], CalendarSchedulerViewEventComponent.prototype, "day", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewHour"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewHour"]) === "function" && _b || Object)

], CalendarSchedulerViewEventComponent.prototype, "hour", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewHourSegment"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["SchedulerViewHourSegment"]) === "function" && _c || Object)

], CalendarSchedulerViewEventComponent.prototype, "segment", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["CalendarSchedulerEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_scheduler_view_component__["CalendarSchedulerEvent"]) === "function" && _d || Object)

], CalendarSchedulerViewEventComponent.prototype, "event", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewEventComponent.prototype, "tooltipPlacement", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Boolean)

], CalendarSchedulerViewEventComponent.prototype, "showActions", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _e || Object)

], CalendarSchedulerViewEventComponent.prototype, "customTemplate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)

], CalendarSchedulerViewEventComponent.prototype, "eventClicked", void 0);

CalendarSchedulerViewEventComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-calendar-scheduler-event',

        template: "\n        <ng-template #defaultTemplate>\n            <div\n                class=\"cal-scheduler-event\"\n                [title]=\"title\"\n                [class.cal-starts-within-segment]=\"!event.startsBeforeSegment\"\n                [class.cal-ends-within-segment]=\"!event.endsAfterSegment\"\n                [class.hovered]=\"event.isHovered\"\n                [class.cal-disabled]=\"event.isDisabled || segment.isDisabled\"\n                [class.cal-not-clickable]=\"!event.isClickable\"\n                [style.backgroundColor]=\"event.color.primary\"\n                [ngClass]=\"event?.cssClass\"\n                (mwlClick)=\"eventClicked.emit({event: event})\"\n                (mouseenter)=\"highlightEvent()\"\n                (mouseleave)=\"unhighlightEvent()\">\n                <mwl-calendar-scheduler-event-title *ngIf=\"!event.startsBeforeSegment\"\n                    [event]=\"event\"\n                    view=\"week\">\n                </mwl-calendar-scheduler-event-title>\n                <mwl-calendar-scheduler-event-content *ngIf=\"!event.startsBeforeSegment\"\n                    [event]=\"event\">\n                </mwl-calendar-scheduler-event-content>\n                <mwl-calendar-scheduler-event-actions [event]=\"event\" *ngIf=\"showActions && event.isClickable && !event.endsAfterSegment\"></mwl-calendar-scheduler-event-actions>\n                <mwl-calendar-scheduler-event-actions [event]=\"event\" *ngIf=\"showActions && event.isDisabled && !event.endsAfterSegment\"></mwl-calendar-scheduler-event-actions>\n            </div>\n        </ng-template>\n        <ng-template\n            [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n            [ngTemplateOutletContext]=\"{\n                day: day,\n                hour: hour, \n                segment: segment, \n                event: event, \n                tooltipPlacement: tooltipPlacement,\n                showActions: showActions,\n                customTemplate: customTemplate,\n                eventClicked: eventClicked\n            }\">\n        </ng-template>\n    ",

        host: {

            'class': 'cal-scheduler-event-container'

        }

    }),

    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _g || Object])

], CalendarSchedulerViewEventComponent);



var _a, _b, _c, _d, _e, _f, _g;

//# sourceMappingURL=calendar-scheduler-view-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarSchedulerViewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



var CalendarSchedulerViewHeaderComponent = (function () {

    function CalendarSchedulerViewHeaderComponent() {

        this.dayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    return CalendarSchedulerViewHeaderComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Array)

], CalendarSchedulerViewHeaderComponent.prototype, "days", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewHeaderComponent.prototype, "locale", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)

], CalendarSchedulerViewHeaderComponent.prototype, "customTemplate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)

], CalendarSchedulerViewHeaderComponent.prototype, "dayClicked", void 0);

CalendarSchedulerViewHeaderComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-calendar-scheduler-header',

        template: "\n        <ng-template #defaultTemplate>\n            <div class=\"cal-scheduler-headers\">\n                <div class=\"cal-header aside cal-header-clock align-center\">\n                    <i class=\"material-icons md-32\" style=\"margin:auto;\">schedule</i>\n                </div>\n\n                <div class=\"cal-header-cols aside\">\n                    <div\n                        class=\"cal-header\"\n                        *ngFor=\"let day of days\"\n                        [class.cal-past]=\"day.isPast\"\n                        [class.cal-today]=\"day.isToday\"\n                        [class.cal-future]=\"day.isFuture\"\n                        [class.cal-weekend]=\"day.isWeekend\"\n                        [class.cal-drag-over]=\"day.dragOver\"\n                        (mwlClick)=\"dayClicked.emit({date: day.date})\">\n                        <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n                        <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template\n            [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n            [ngTemplateOutletContext]=\"{days: days, locale: locale, dayClicked: dayClicked}\">\n        </ng-template>\n  "

    })

], CalendarSchedulerViewHeaderComponent);



var _a, _b;

//# sourceMappingURL=calendar-scheduler-view-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-custom/calendar-scheduler-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarSchedulerViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};

var __param = (this && this.__param) || function (paramIndex, decorator) {

    return function (target, key) { decorator(target, key, paramIndex); }

};







var WEEKEND_DAY_NUMBERS = [0, 6];

var DAYS_IN_WEEK = 7;

var HOURS_IN_DAY = 24;

var MINUTES_IN_HOUR = 60;

var SECONDS_IN_DAY = 60 * 60 * 24;

// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

var CalendarSchedulerViewComponent = (function () {

    /**

     * @hidden

     */

    function CalendarSchedulerViewComponent(cdr, locale) {

        this.cdr = cdr;

        /**

         * An array of events to display on view

         */

        this.events = [];

        /**

         * The number of segments in an hour. Must be <= 6

         */

        this.hourSegments = 2;

        /**

         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view

         */

        this.excludeDays = [];

        /**

         * Specify if the first day of current scheduler view has to be today or the first day of the week

         */

        this.startsWithToday = false;

        /**

         * Specify if actions must be shown or not

         */

        this.showActions = true;

        /**

         * The placement of the event tooltip

         */

        this.tooltipPlacement = 'bottom';

        /**

         * The precision to display events.

         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding

         */

        this.precision = 'days';

        /**

         * The day start hours in 24 hour time. Must be 0-23

         */

        this.dayStartHour = 0;

        /**

         * The day start minutes. Must be 0-59

         */

        this.dayStartMinute = 0;

        /**

         * The day end hours in 24 hour time. Must be 0-23

         */

        this.dayEndHour = 23;

        /**

         * The day end minutes. Must be 0-59

         */

        this.dayEndMinute = 59;

        /**

         * Called when a header week day is clicked

         */

        this.dayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.eventDropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.segmentHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        /**

         * Called when the segment is clicked

         */

        this.segmentClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        /**

         * Called when the event is clicked

         */

        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        /**

         * @hidden

         */

        this.hours = [];

        this.locale = locale;

        //console.log(locale, "locale");

        var _this = this;

        setTimeout(function () {

            //console.log(_this.hours,"Hours");

        }, 10000);

    }

    /**

     * @hidden

     */

    CalendarSchedulerViewComponent.prototype.ngOnInit = function () {

        var _this = this;

        if (this.refresh) {

            this.refreshSubscription = this.refresh.subscribe(function () {

                _this.refreshAll();

                _this.cdr.markForCheck();

            });

        }

    };

    /**

     * @hidden

     */

    CalendarSchedulerViewComponent.prototype.ngOnChanges = function (changes) {

        //console.log(this.hourSegments, "hour segments");

        this.hours = this.getSchedulerViewHourGrid({

            viewDate: this.viewDate,

            hourSegments: this.hourSegments,

            dayStart: {

                hour: parseInt(this.dayStartHour.toString()),

                minute: parseInt(this.dayStartMinute.toString())

            },

            dayEnd: {

                hour: parseInt(this.dayEndHour.toString()),

                minute: parseInt(this.dayEndMinute.toString())

            }

        });

        if (changes.viewDate || changes.excludeDays) {

            this.refreshHeader();

        }

        if (changes.events || changes.viewDate || changes.excludeDays || changes.dayStartHour || changes.dayEndHour || changes.dayStartMinute || changes.dayEndMinute) {

            this.refreshBody();

        }

    };

    /**

     * @hidden

     */

    CalendarSchedulerViewComponent.prototype.ngOnDestroy = function () {

        if (this.refreshSubscription) {

            this.refreshSubscription.unsubscribe();

        }

    };

    /**

     * @hidden

     */

    CalendarSchedulerViewComponent.prototype.toggleSegmentHighlight = function (event, isHighlighted) {

        this.days.forEach(function (day) {

            day.hours.forEach(function (hour) {

                //hour.segments.forEach((segment: SchedulerViewHourSegment) => {

                //    if (isHighlighted && segment.events.indexOf(event) > -1) {

                //        segment.backgroundColor = event.color.secondary;

                //    } else {

                //        delete segment.backgroundColor;

                //    }

                //});

                hour.segments.filter(function (segment) { return segment.events.some(function (ev) { return ev.id === event.id && ev.start.getDay() === event.start.getDay(); }); })

                    .forEach(function (segment) {

                    segment.events.filter(function (ev) { return ev.id === event.id && ev.start.getDay() === event.start.getDay(); })

                        .forEach(function (event) {

                        if (isHighlighted) {

                            segment.backgroundColor = event.color.secondary;

                        }

                        else {

                            delete segment.backgroundColor;

                        }

                    });

                });

            });

        });

    };

    CalendarSchedulerViewComponent.prototype.refreshHeader = function () {

        this.headerDays = this.getSchedulerViewDays({

            viewDate: this.viewDate,

            weekStartsOn: this.weekStartsOn,

            startsWithToday: this.startsWithToday,

            excluded: this.excludeDays

        });

    };

    CalendarSchedulerViewComponent.prototype.refreshBody = function () {

        var _this = this;

        this.view = this.getSchedulerView({

            events: this.events,

            viewDate: this.viewDate,

            weekStartsOn: this.weekStartsOn,

            startsWithToday: this.startsWithToday,

            excluded: this.excludeDays

        });

        if (this.dayModifier) {

            this.days.forEach(function (day) { return _this.dayModifier(day); });

        }

        if (this.dayModifier || this.hourModifier || this.segmentModifier) {

            this.view.days.forEach(function (day) {

                if (_this.dayModifier) {

                    _this.dayModifier(day);

                }

                day.hours.forEach(function (hour) {

                    if (_this.hourModifier) {

                        _this.hourModifier(hour);

                    }

                    hour.segments.forEach(function (segment) {

                        if (_this.segmentModifier) {

                            _this.segmentModifier(segment);

                        }

                    });

                });

            });

        }

    };

    CalendarSchedulerViewComponent.prototype.refreshAll = function () {

        this.refreshHeader();

        this.refreshBody();

    };

    CalendarSchedulerViewComponent.prototype.getSchedulerView = function (args) {

        var _this = this;

        var events = args.events || [];

        var viewDate = args.viewDate;

        var weekStartsOn = args.weekStartsOn;

        var startsWithToday = args.startsWithToday;

        var excluded = args.excluded || [];

        var precision = args.precision || 'days';

        if (!events) {

            events = [];

        }

        var startOfViewWeek = startsWithToday ? Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"])(viewDate) : Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfWeek"])(viewDate, { weekStartsOn: weekStartsOn });

        var endOfViewWeek = startsWithToday ? Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfDay"])(viewDate), 6) : Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfWeek"])(viewDate, { weekStartsOn: weekStartsOn });

        //let maxRange: number = DAYS_IN_WEEK - excluded.length;

        var eventsInWeek = this.getEventsInPeriod({ events: events, periodStart: startOfViewWeek, periodEnd: endOfViewWeek });

        this.days = this.getSchedulerViewDays({

            viewDate: viewDate,

            weekStartsOn: weekStartsOn,

            startsWithToday: startsWithToday,

            excluded: excluded

        });

        this.days.forEach(function (day, index) {

            var hours = [];

            _this.hours.forEach(function (hour, index) {

                var segments = [];

                hour.segments.forEach(function (segment, index) {

                    segment.date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setDate"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setMonth"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setYear"])(segment.date, day.date.getFullYear()), day.date.getMonth()), day.date.getDate());

                    var startOfSegment = segment.date;

                    var endOfSegment = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addMinutes"])(segment.date, MINUTES_IN_HOUR / _this.hourSegments);

                    var events = _this.getEventsInPeriod({

                        events: eventsInWeek,

                        periodStart: startOfSegment,

                        periodEnd: endOfSegment

                    }).map(function (event) {

                        return ({

                            id: event.id,

                            start: event.start,

                            end: event.end,

                            title: event.title,

                            content: event.content,

                            color: event.color,

                            actions: event.actions,

                            status: event.status,

                            cssClass: event.cssClass,

                            startsBeforeSegment: event.start < startOfSegment,

                            endsAfterSegment: event.end > endOfSegment,

                            isHovered: false,

                            isDisabled: event.isDisabled || false,

                            isClickable: event.isClickable !== undefined && event.isClickable !== null ? event.isClickable : true

                        });

                    });

                    segments.push({

                        segment: segment,

                        date: new Date(segment.date),

                        events: events,

                        hasBorder: true

                    });

                });

                var hourDate = new Date(day.date.getFullYear(), day.date.getMonth(), day.date.getDate(), hour.segments[0].date.getHours());

                hours.push({ hour: hour, date: hourDate, segments: segments, hasBorder: true });

            });

            day.hours = hours;

        });

        return {

            days: this.days

        };

    };

    CalendarSchedulerViewComponent.prototype.isEventInPeriod = function (args) {

        var event = args.event, periodStart = args.periodStart, periodEnd = args.periodEnd;

        var eventStart = event.start;

        var eventEnd = event.end || event.start;

        if (eventStart > periodStart && eventStart < periodEnd) {

            return true;

        }

        if (eventEnd > periodStart && eventEnd < periodEnd) {

            return true;

        }

        if (eventStart < periodStart && eventEnd > periodEnd) {

            return true;

        }

        if (Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameSecond"])(eventStart, periodStart) || Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameSecond"])(eventStart, Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["subSeconds"])(periodEnd, 1))) {

            return true;

        }

        if (Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameSecond"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["subSeconds"])(eventEnd, 1), periodStart) || Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameSecond"])(eventEnd, periodEnd)) {

            return true;

        }

        return false;

    };

    CalendarSchedulerViewComponent.prototype.getEventsInPeriod = function (args) {

        var _this = this;

        var events = args.events, periodStart = args.periodStart, periodEnd = args.periodEnd;

        return events.filter(function (event) { return _this.isEventInPeriod({ event: event, periodStart: periodStart, periodEnd: periodEnd }); });

    };

    CalendarSchedulerViewComponent.prototype.getSchedulerViewDays = function (args) {

        var _this = this;

        var viewDate = args.viewDate;

        var weekStartsOn = args.weekStartsOn;

        var startsWithToday = args.startsWithToday;

        var excluded = args.excluded || [];

        var start = startsWithToday ? new Date(viewDate) : Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfWeek"])(viewDate, { weekStartsOn: weekStartsOn });

        var days = [];

        var loop = function (i) {

            var date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"])(start, i);

            if (!excluded.some(function (e) { return date.getDay() === e; })) {

                days.push(_this.getSchedulerDay({ date: date }));

            }

        };

        for (var i = 0; i < DAYS_IN_WEEK; i++) {

            loop(i);

        }

        return days;

    };

    CalendarSchedulerViewComponent.prototype.getSchedulerDay = function (args) {

        var date = args.date;

        var today = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"])(new Date());

        return {

            date: date,

            isPast: date < today,

            isToday: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(date, today),

            isFuture: date > today,

            isWeekend: WEEKEND_DAY_NUMBERS.indexOf(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getDay"])(date)) > -1,

            hours: []

        };

    };

    CalendarSchedulerViewComponent.prototype.getSchedulerViewHourGrid = function (args) {

        var viewDate = args.viewDate, hourSegments = args.hourSegments, dayStart = args.dayStart, dayEnd = args.dayEnd;

        var hours = [];

        var startOfView = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setMinutes"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setHours"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"])(viewDate), dayStart.hour), dayStart.minute);

        var endOfView = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setMinutes"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setHours"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfMinute"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfDay"])(viewDate)), dayEnd.hour), dayEnd.minute);

        var segmentDuration = MINUTES_IN_HOUR / hourSegments;

        // //console.log(segmentDuration, "Segment duration");

        var startOfViewDay = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"])(viewDate);

        var range = function (start, end) { return Array.from({ length: ((end + 1) - start) }, function (v, k) { return k + start; }); };

        var hoursInView = range(dayStart.hour, dayEnd.hour);

        //console.log(hoursInView, "hoursInView");

        //console.log(hourSegments, "hourSegments");

        //for (var i = 0; i < HOURS_IN_DAY; i++) {

        hoursInView.forEach(function (hour, i) {

            var segments = [];

            for (var j = 0; j < hourSegments; j++) {

                var date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addMinutes"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addHours"])(startOfViewDay, hour), j * segmentDuration);

                if (date >= startOfView && date < endOfView) {

                    segments.push({

                        date: date,

                        formatdate: moment(date).format('HH:mm'),

                        isStart: j === 0

                    });

                }

            }

            if (segments.length > 0) {

                hours.push({ segments: segments });

            }

        });

        return hours;

    };

    return CalendarSchedulerViewComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], CalendarSchedulerViewComponent.prototype, "viewDate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Array)

], CalendarSchedulerViewComponent.prototype, "events", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], CalendarSchedulerViewComponent.prototype, "hourSegments", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Array)

], CalendarSchedulerViewComponent.prototype, "excludeDays", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Boolean)

], CalendarSchedulerViewComponent.prototype, "startsWithToday", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Boolean)

], CalendarSchedulerViewComponent.prototype, "showActions", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], CalendarSchedulerViewComponent.prototype, "dayModifier", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], CalendarSchedulerViewComponent.prototype, "hourModifier", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], CalendarSchedulerViewComponent.prototype, "segmentModifier", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]) === "function" && _a || Object)

], CalendarSchedulerViewComponent.prototype, "refresh", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewComponent.prototype, "locale", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewComponent.prototype, "tooltipPlacement", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], CalendarSchedulerViewComponent.prototype, "weekStartsOn", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)

], CalendarSchedulerViewComponent.prototype, "headerTemplate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _c || Object)

], CalendarSchedulerViewComponent.prototype, "cellTemplate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _d || Object)

], CalendarSchedulerViewComponent.prototype, "eventTemplate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarSchedulerViewComponent.prototype, "precision", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], CalendarSchedulerViewComponent.prototype, "dayStartHour", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], CalendarSchedulerViewComponent.prototype, "dayStartMinute", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], CalendarSchedulerViewComponent.prototype, "dayEndHour", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], CalendarSchedulerViewComponent.prototype, "dayEndMinute", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)

], CalendarSchedulerViewComponent.prototype, "dayClicked", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)

], CalendarSchedulerViewComponent.prototype, "eventDropped", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)

], CalendarSchedulerViewComponent.prototype, "segmentHover", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)

], CalendarSchedulerViewComponent.prototype, "segmentClicked", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _j || Object)

], CalendarSchedulerViewComponent.prototype, "eventClicked", void 0);

CalendarSchedulerViewComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-calendar-scheduler-view',

        template: "\n        <div class=\"cal-scheduler-view\" #weekViewContainer>\n            <mwl-calendar-scheduler-header\n                [days]=\"headerDays\"\n                [locale]=\"locale\"\n                [customTemplate]=\"headerTemplate\"\n                (dayClicked)=\"dayClicked.emit($event)\">\n            </mwl-calendar-scheduler-header>\n\n            <div class=\"cal-scheduler\">\n                <div class=\"cal-scheduler-hour-rows aside\">\n                    <div class=\"cal-scheduler-hour align-center horizontal\" *ngFor=\"let hour of hours\" [class.cal-scheduler-half-hour]=\"hour.segments.length < 7\" [ngClass]=\"[1===1 ? ('cal-scheduler-tottime-' + (hour.segments.length * 5)) : 'asd']\">\n                      <div class=\"cal-scheduler-time\">\n                        <div class=\"cal-scheduler-hour-segment\" *ngFor=\"let segment of hour.segments\">\n                            {{segment.formatdate}}\n                            <!--{{ segment.date | calendarDate:'dayViewHour':locale }}-->\n                        </div>\n                      </div>\n                    </div>\n                </div>\n\n                <div class=\"cal-scheduler-cols aside\">\n                    <div class=\"cal-scheduler-col\" *ngFor=\"let day of view.days\">\n                        <mwl-calendar-scheduler-cell\n                            *ngFor=\"let hour of day.hours\"\n                            [ngClass]=\"[1===1 ? ('cal-scheduler-tottime-' + (hour.segments.length * 5)) : 'asd']\"\n                            [day]=\"day\"\n                            [hour]=\"hour\"\n                            [locale]=\"locale\"\n                            [tooltipPlacement]=\"tooltipPlacement\"\n                            [showActions]=\"showActions\"\n                            [customTemplate]=\"cellTemplate\"\n                            [eventTemplate]=\"eventTemplate\"\n                            (click)=\"dayClicked.emit({day: day})\"\n                            (highlightCell)=\"segmentHover.emit($event)\"\n                            (eventTimesChanged)=\"eventDropped.emit({event: $event.event, hour: $event.newStart})\"\n                            (highlightSegment)=\"toggleSegmentHighlight($event.event, true)\"\n                            (unhighlightSegment)=\"toggleSegmentHighlight($event.event, false)\"\n                            (segmentClicked)=\"segmentClicked.emit({segment: $event.segment})\"\n                            (eventClicked)=\"eventClicked.emit({event: $event.event})\" [class.cal-scheduler-half-hour]=\"hour.segments.length < 7\">\n                        </mwl-calendar-scheduler-cell>\n                    </div>\n                </div>\n            </div>\n        </div>\n  "

    }),

    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])),

    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _k || Object, String])

], CalendarSchedulerViewComponent);



var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

//# sourceMappingURL=calendar-scheduler-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-custom/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cal-scheduler-view .cal-scheduler-headers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1; }\n  .cal-scheduler-view .cal-scheduler-headers .aside {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0;\n            flex: 1 0; }\n    .cal-scheduler-view .cal-scheduler-headers .aside.cal-header-clock {\n      max-width: 5em; }\n  .cal-scheduler-view .cal-scheduler-headers .cal-header {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center;\n    padding: 5px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n    .cal-scheduler-view .cal-scheduler-headers .cal-header:not(:last-child) {\n      border-right: 1px solid #e1e1e1; }\n    .cal-scheduler-view .cal-scheduler-headers .cal-header:hover {\n      background-color: #ededed; }\n    .cal-scheduler-view .cal-scheduler-headers .cal-header.cal-today {\n      background-color: #e8fde7; }\n    .cal-scheduler-view .cal-scheduler-headers .cal-header.cal-weekend span {\n      color: #8b0000; }\n    .cal-scheduler-view .cal-scheduler-headers .cal-header span {\n      font-weight: 400;\n      opacity: 0.5; }\n  .cal-scheduler-view .cal-scheduler-headers .cal-header-cols {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n\n.cal-scheduler-view .cal-scheduler {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap; }\n  .cal-scheduler-view .cal-scheduler .aside {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0;\n            flex: 1 0; }\n    .cal-scheduler-view .cal-scheduler .aside.cal-scheduler-hour-rows {\n      max-width: 5em; }\n  .cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows {\n    width: auto !important;\n    border: solid 1px #e1e1e1;\n    overflow: hidden;\n    position: relative; }\n    .cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 7.25em; }\n      .cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour:nth-child(odd) {\n        background-color: #fafafa; }\n      .cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour:not(:last-child) {\n        border-bottom: 1px solid #e1e1e1; }\n      .cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour .cal-scheduler-time {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column wrap;\n                flex-flow: column wrap;\n        width: 100%;\n        font-weight: bold;\n        text-align: center; }\n        .cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour .cal-scheduler-time .cal-scheduler-hour-segment {\n          -webkit-box-flex: 1;\n              -ms-flex: 1 0;\n                  flex: 1 0; }\n          .cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour .cal-scheduler-time .cal-scheduler-hour-segment:hover {\n            background-color: #ededed; }\n          .cal-scheduler-view .cal-scheduler .cal-scheduler-hour-rows .cal-scheduler-hour .cal-scheduler-time .cal-scheduler-hour-segment:not(:last-child) {\n            border-bottom: thin dashed #e1e1e1; }\n  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    border-top: 1px solid #e1e1e1; }\n    .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column wrap;\n              flex-flow: column wrap;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0;\n              flex: 1 0;\n      border-right: 1px solid #e1e1e1;\n      /*&:hover {\n                    background-color: #fafafa;\n                }*/ }\n      .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column wrap;\n                flex-flow: column wrap;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0;\n                flex: 1 0; }\n        .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell.cal-today {\n          background-color: #e8fde7; }\n        .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell.cal-disabled {\n          background-color: #eee;\n          pointer-events: none; }\n          .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell.cal-disabled .cal-scheduler-events {\n            filter: opacity(50%);\n            -webkit-filter: opacity(50%); }\n        .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-flow: column wrap;\n                  flex-flow: column wrap;\n          -webkit-box-flex: 1;\n              -ms-flex: 1 0;\n                  flex: 1 0;\n          border-bottom: 1px solid #e1e1e1; }\n          .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments.no-border {\n            border-bottom: 0 !important; }\n          .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments.cal-disabled {\n            background-color: #eee;\n            pointer-events: none; }\n            .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments.cal-disabled .cal-scheduler-event {\n              filter: opacity(50%);\n              -webkit-filter: opacity(50%); }\n          .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment {\n            -webkit-box-flex: 1;\n                -ms-flex: 1 0;\n                    flex: 1 0;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-flow: column wrap;\n                    flex-flow: column wrap; }\n            .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment:not(.has-events):hover {\n              background-color: #ededed; }\n            .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment:not(:last-child) {\n              border-bottom: thin dashed #e1e1e1; }\n            .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment.no-border {\n              border-bottom: 0 !important; }\n            .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment.cal-disabled {\n              background-color: #eee;\n              pointer-events: none; }\n            .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events {\n              -webkit-box-flex: 1;\n                  -ms-flex: 1 0;\n                      flex: 1 0;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: vertical;\n              -webkit-box-direction: normal;\n                  -ms-flex-flow: column wrap;\n                      flex-flow: column wrap; }\n              .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container {\n                -webkit-box-flex: 1;\n                    -ms-flex: 1 0;\n                        flex: 1 0;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-flow: column wrap;\n                        flex-flow: column wrap; }\n                .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event {\n                  -webkit-box-flex: 1;\n                      -ms-flex: 1 0;\n                          flex: 1 0;\n                  display: -webkit-box;\n                  display: -ms-flexbox;\n                  display: flex;\n                  -webkit-box-orient: horizontal;\n                  -webkit-box-direction: normal;\n                      -ms-flex-flow: row wrap;\n                          flex-flow: row wrap;\n                  padding: 0 10px;\n                  font-size: 12px;\n                  margin: 0 2px;\n                  line-height: 30px;\n                  overflow: hidden;\n                  text-overflow: ellipsis;\n                  white-space: nowrap;\n                  transition: all ease-out 0.2s;\n                  filter: brightness(100%);\n                  -webkit-filter: brightness(100%);\n                  -webkit-backface-visibility: hidden;\n                  /* Fix for transition flickering */ }\n                  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event.cal-starts-within-segment {\n                    border-top-left-radius: .3em;\n                    border-top-right-radius: .3em;\n                    margin-top: 2px; }\n                  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event.cal-ends-within-segment {\n                    border-bottom-left-radius: .3em;\n                    border-bottom-right-radius: .3em;\n                    margin-bottom: 2px; }\n                  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event.cal-disabled {\n                    background-color: gray !important;\n                    filter: grayscale(100%);\n                    -webkit-filter: grayscale(100%); }\n                  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event.cal-not-clickable {\n                    cursor: not-allowed !important; }\n                  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event:not(.cal-disabled):hover, .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event:not(.cal-disabled).hovered {\n                    cursor: pointer;\n                    filter: brightness(80%);\n                    -webkit-filter: brightness(80%); }\n                  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-title-container {\n                    position: relative;\n                    width: 100%; }\n                    .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-title-container .cal-scheduler-event-title {\n                      font-size: 16px;\n                      font-weight: bold; }\n                    .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-title-container .cal-scheduler-event-status {\n                      position: absolute;\n                      top: 25%;\n                      right: 1%;\n                      width: 16px;\n                      height: 16px;\n                      background: grey;\n                      border-radius: 50px;\n                      border: 1px solid black; }\n                      .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-title-container .cal-scheduler-event-status.ok {\n                        background: green; }\n                      .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-title-container .cal-scheduler-event-status.warning {\n                        background: orange; }\n                      .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-title-container .cal-scheduler-event-status.danger {\n                        background: red; }\n                  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-content-container {\n                    width: 100%; }\n                  .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-actions-container {\n                    -webkit-box-flex: 1;\n                        -ms-flex: 1 0;\n                            flex: 1 0;\n                    position: relative; }\n                    .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-actions-container .cal-scheduler-event-actions {\n                      position: absolute;\n                      bottom: 5px;\n                      right: 0; }\n                      .cal-scheduler-view .cal-scheduler .cal-scheduler-cols .cal-scheduler-col .cal-scheduler-cell .cal-scheduler-segments .cal-scheduler-segment .cal-scheduler-events .cal-scheduler-event-container .cal-scheduler-event .cal-scheduler-event-actions-container .cal-scheduler-event-actions .cal-scheduler-event-action {\n                        text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/calendar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



var CalendarHeaderComponent = (function () {

    function CalendarHeaderComponent() {

        this.locale = 'en';

        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    return CalendarHeaderComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarHeaderComponent.prototype, "view", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], CalendarHeaderComponent.prototype, "viewDate", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], CalendarHeaderComponent.prototype, "locale", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)

], CalendarHeaderComponent.prototype, "viewChange", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)

], CalendarHeaderComponent.prototype, "viewDateChange", void 0);

CalendarHeaderComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-demo-utils-calendar-header',

        template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\">\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\">\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\">\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  "

    })

], CalendarHeaderComponent);



var _a, _b;

//# sourceMappingURL=calendar-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/date-time-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var DateTimePickerComponent = (function () {

    function DateTimePickerComponent(_zone) {

        this._zone = _zone;

        this.dateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    DateTimePickerComponent.prototype.ngOnChanges = function (changes) {

        var _this = this;

        this._zone.run(function () {

            if (changes['date']) {

                _this.dateStruct = {

                    day: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getDate"])(_this.date),

                    month: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMonth"])(_this.date) + 1,

                    year: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(_this.date)

                };

                _this.timeStruct = {

                    second: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getSeconds"])(_this.date),

                    minute: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMinutes"])(_this.date),

                    hour: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getHours"])(_this.date)

                };

            }

        });

    };

    DateTimePickerComponent.prototype.updateDate = function () {

        var _this = this;

        this._zone.run(function () {

            var newDate = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setYear"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMonth"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setDate"])(_this.date, _this.dateStruct.day), _this.dateStruct.month - 1), _this.dateStruct.year);

            _this.dateChange.next(newDate);

        });

    };

    DateTimePickerComponent.prototype.updateTime = function () {

        var _this = this;

        this._zone.run(function () {

            var newDate = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMinutes"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setSeconds"])(_this.date, _this.timeStruct.second), _this.timeStruct.minute), _this.timeStruct.hour);

            //console.log("newDate===>", newDate);

            _this.dateChange.next(newDate);

        });

    };

    return DateTimePickerComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], DateTimePickerComponent.prototype, "placeholder", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], DateTimePickerComponent.prototype, "date", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)

], DateTimePickerComponent.prototype, "dateChange", void 0);

DateTimePickerComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'mwl-demo-utils-date-time-picker',

        template: "\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            readonly\n            class=\"form-control\"\n            [placeholder]=\"placeholder\"\n            name=\"date\"\n            [(ngModel)]=\"dateStruct\"\n            (ngModelChange)=\"updateDate()\"\n            ngbDatepicker\n            #datePicker=\"ngbDatepicker\" />\n            <div class=\"input-group-addon\" (click)=\"datePicker.toggle()\" >\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n        </div>\n      </div>\n    </form>\n    <ngb-timepicker [(ngModel)]=\"timeStruct\" (ngModelChange)=\"updateTime()\" [meridian]=\"false\"></ngb-timepicker>\n  ",

        styles: ["\n    .form-group {\n      width: 100%;\n    }\n  "]

    }),

    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])

], DateTimePickerComponent);



var _a, _b;

//# sourceMappingURL=date-time-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/select-client/basicTables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



var BasicTablesService = (function () {

    function BasicTablesService() {

        this.smartTablePageSize = 10;

        this.smartTableData = [

            {

                id: 1,

                firstName: 'Mark',

                lastName: 'Otto',

                username: '@mdo',

                email: 'mdo@gmail.com',

                age: '28'

            },

            {

                id: 2,

                firstName: 'Jacob',

                lastName: 'Thornton',

                username: '@fat',

                email: 'fat@yandex.ru',

                age: '45'

            },

            {

                id: 3,

                firstName: 'Larry',

                lastName: 'Bird',

                username: '@twitter',

                email: 'twitter@outlook.com',

                age: '18'

            },

            {

                id: 4,

                firstName: 'John',

                lastName: 'Snow',

                username: '@snow',

                email: 'snow@gmail.com',

                age: '20'

            },

            {

                id: 5,

                firstName: 'Jack',

                lastName: 'Sparrow',

                username: '@jack',

                email: 'jack@yandex.ru',

                age: '30'

            },

            {

                id: 6,

                firstName: 'Ann',

                lastName: 'Smith',

                username: '@ann',

                email: 'ann@gmail.com',

                age: '21'

            },

            {

                id: 7,

                firstName: 'Barbara',

                lastName: 'Black',

                username: '@barbara',

                email: 'barbara@yandex.ru',

                age: '43'

            },

            {

                id: 8,

                firstName: 'Sevan',

                lastName: 'Bagrat',

                username: '@sevan',

                email: 'sevan@outlook.com',

                age: '13'

            },

            {

                id: 9,

                firstName: 'Ruben',

                lastName: 'Vardan',

                username: '@ruben',

                email: 'ruben@gmail.com',

                age: '22'

            },

            {

                id: 10,

                firstName: 'Karen',

                lastName: 'Sevan',

                username: '@karen',

                email: 'karen@yandex.ru',

                age: '33'

            },

            {

                id: 11,

                firstName: 'Mark',

                lastName: 'Otto',

                username: '@mark',

                email: 'mark@gmail.com',

                age: '38'

            },

            {

                id: 12,

                firstName: 'Jacob',

                lastName: 'Thornton',

                username: '@jacob',

                email: 'jacob@yandex.ru',

                age: '48'

            },

            {

                id: 13,

                firstName: 'Haik',

                lastName: 'Hakob',

                username: '@haik',

                email: 'haik@outlook.com',

                age: '48'

            },

            {

                id: 14,

                firstName: 'Garegin',

                lastName: 'Jirair',

                username: '@garegin',

                email: 'garegin@gmail.com',

                age: '40'

            },

            {

                id: 15,

                firstName: 'Krikor',

                lastName: 'Bedros',

                username: '@krikor',

                email: 'krikor@yandex.ru',

                age: '32'

            },

            {

                "id": 16,

                "firstName": "Francisca",

                "lastName": "Brady",

                "username": "@Gibson",

                "email": "franciscagibson@comtours.com",

                "age": 11

            },

            {

                "id": 17,

                "firstName": "Tillman",

                "lastName": "Figueroa",

                "username": "@Snow",

                "email": "tillmansnow@comtours.com",

                "age": 34

            },

            {

                "id": 18,

                "firstName": "Jimenez",

                "lastName": "Morris",

                "username": "@Bryant",

                "email": "jimenezbryant@comtours.com",

                "age": 45

            },

            {

                "id": 19,

                "firstName": "Sandoval",

                "lastName": "Jacobson",

                "username": "@Mcbride",

                "email": "sandovalmcbride@comtours.com",

                "age": 32

            },

            {

                "id": 20,

                "firstName": "Griffin",

                "lastName": "Torres",

                "username": "@Charles",

                "email": "griffincharles@comtours.com",

                "age": 19

            },

            {

                "id": 21,

                "firstName": "Cora",

                "lastName": "Parker",

                "username": "@Caldwell",

                "email": "coracaldwell@comtours.com",

                "age": 27

            },

            {

                "id": 22,

                "firstName": "Cindy",

                "lastName": "Bond",

                "username": "@Velez",

                "email": "cindyvelez@comtours.com",

                "age": 24

            },

            {

                "id": 23,

                "firstName": "Frieda",

                "lastName": "Tyson",

                "username": "@Craig",

                "email": "friedacraig@comtours.com",

                "age": 45

            },

            {

                "id": 24,

                "firstName": "Cote",

                "lastName": "Holcomb",

                "username": "@Rowe",

                "email": "coterowe@comtours.com",

                "age": 20

            },

            {

                "id": 25,

                "firstName": "Trujillo",

                "lastName": "Mejia",

                "username": "@Valenzuela",

                "email": "trujillovalenzuela@comtours.com",

                "age": 16

            },

            {

                "id": 26,

                "firstName": "Pruitt",

                "lastName": "Shepard",

                "username": "@Sloan",

                "email": "pruittsloan@comtours.com",

                "age": 44

            },

            {

                "id": 27,

                "firstName": "Sutton",

                "lastName": "Ortega",

                "username": "@Black",

                "email": "suttonblack@comtours.com",

                "age": 42

            },

            {

                "id": 28,

                "firstName": "Marion",

                "lastName": "Heath",

                "username": "@Espinoza",

                "email": "marionespinoza@comtours.com",

                "age": 47

            },

            {

                "id": 29,

                "firstName": "Newman",

                "lastName": "Hicks",

                "username": "@Keith",

                "email": "newmankeith@comtours.com",

                "age": 15

            },

            {

                "id": 30,

                "firstName": "Boyle",

                "lastName": "Larson",

                "username": "@Summers",

                "email": "boylesummers@comtours.com",

                "age": 32

            },

            {

                "id": 31,

                "firstName": "Haynes",

                "lastName": "Vinson",

                "username": "@Mckenzie",

                "email": "haynesmckenzie@comtours.com",

                "age": 15

            },

            {

                "id": 32,

                "firstName": "Miller",

                "lastName": "Acosta",

                "username": "@Young",

                "email": "milleryoung@comtours.com",

                "age": 55

            },

            {

                "id": 33,

                "firstName": "Johnston",

                "lastName": "Brown",

                "username": "@Knight",

                "email": "johnstonknight@comtours.com",

                "age": 29

            },

            {

                "id": 34,

                "firstName": "Lena",

                "lastName": "Pitts",

                "username": "@Forbes",

                "email": "lenaforbes@comtours.com",

                "age": 25

            },

            {

                "id": 35,

                "firstName": "Terrie",

                "lastName": "Kennedy",

                "username": "@Branch",

                "email": "terriebranch@comtours.com",

                "age": 37

            },

            {

                "id": 36,

                "firstName": "Louise",

                "lastName": "Aguirre",

                "username": "@Kirby",

                "email": "louisekirby@comtours.com",

                "age": 44

            },

            {

                "id": 37,

                "firstName": "David",

                "lastName": "Patton",

                "username": "@Sanders",

                "email": "davidsanders@comtours.com",

                "age": 26

            },

            {

                "id": 38,

                "firstName": "Holden",

                "lastName": "Barlow",

                "username": "@Mckinney",

                "email": "holdenmckinney@comtours.com",

                "age": 11

            },

            {

                "id": 39,

                "firstName": "Baker",

                "lastName": "Rivera",

                "username": "@Montoya",

                "email": "bakermontoya@comtours.com",

                "age": 47

            },

            {

                "id": 40,

                "firstName": "Belinda",

                "lastName": "Lloyd",

                "username": "@Calderon",

                "email": "belindacalderon@comtours.com",

                "age": 21

            },

            {

                "id": 41,

                "firstName": "Pearson",

                "lastName": "Patrick",

                "username": "@Clements",

                "email": "pearsonclements@comtours.com",

                "age": 42

            },

            {

                "id": 42,

                "firstName": "Alyce",

                "lastName": "Mckee",

                "username": "@Daugherty",

                "email": "alycedaugherty@comtours.com",

                "age": 55

            },

            {

                "id": 43,

                "firstName": "Valencia",

                "lastName": "Spence",

                "username": "@Olsen",

                "email": "valenciaolsen@comtours.com",

                "age": 20

            },

            {

                "id": 44,

                "firstName": "Leach",

                "lastName": "Holcomb",

                "username": "@Humphrey",

                "email": "leachhumphrey@comtours.com",

                "age": 28

            },

            {

                "id": 45,

                "firstName": "Moss",

                "lastName": "Baxter",

                "username": "@Fitzpatrick",

                "email": "mossfitzpatrick@comtours.com",

                "age": 51

            },

            {

                "id": 46,

                "firstName": "Jeanne",

                "lastName": "Cooke",

                "username": "@Ward",

                "email": "jeanneward@comtours.com",

                "age": 59

            },

            {

                "id": 47,

                "firstName": "Wilma",

                "lastName": "Briggs",

                "username": "@Kidd",

                "email": "wilmakidd@comtours.com",

                "age": 53

            },

            {

                "id": 48,

                "firstName": "Beatrice",

                "lastName": "Perry",

                "username": "@Gilbert",

                "email": "beatricegilbert@comtours.com",

                "age": 39

            },

            {

                "id": 49,

                "firstName": "Whitaker",

                "lastName": "Hyde",

                "username": "@Mcdonald",

                "email": "whitakermcdonald@comtours.com",

                "age": 35

            },

            {

                "id": 50,

                "firstName": "Rebekah",

                "lastName": "Duran",

                "username": "@Gross",

                "email": "rebekahgross@comtours.com",

                "age": 40

            },

            {

                "id": 51,

                "firstName": "Earline",

                "lastName": "Mayer",

                "username": "@Woodward",

                "email": "earlinewoodward@comtours.com",

                "age": 52

            },

            {

                "id": 52,

                "firstName": "Moran",

                "lastName": "Baxter",

                "username": "@Johns",

                "email": "moranjohns@comtours.com",

                "age": 20

            },

            {

                "id": 53,

                "firstName": "Nanette",

                "lastName": "Hubbard",

                "username": "@Cooke",

                "email": "nanettecooke@comtours.com",

                "age": 55

            },

            {

                "id": 54,

                "firstName": "Dalton",

                "lastName": "Walker",

                "username": "@Hendricks",

                "email": "daltonhendricks@comtours.com",

                "age": 25

            },

            {

                "id": 55,

                "firstName": "Bennett",

                "lastName": "Blake",

                "username": "@Pena",

                "email": "bennettpena@comtours.com",

                "age": 13

            },

            {

                "id": 56,

                "firstName": "Kellie",

                "lastName": "Horton",

                "username": "@Weiss",

                "email": "kellieweiss@comtours.com",

                "age": 48

            },

            {

                "id": 57,

                "firstName": "Hobbs",

                "lastName": "Talley",

                "username": "@Sanford",

                "email": "hobbssanford@comtours.com",

                "age": 28

            },

            {

                "id": 58,

                "firstName": "Mcguire",

                "lastName": "Donaldson",

                "username": "@Roman",

                "email": "mcguireroman@comtours.com",

                "age": 38

            },

            {

                "id": 59,

                "firstName": "Rodriquez",

                "lastName": "Saunders",

                "username": "@Harper",

                "email": "rodriquezharper@comtours.com",

                "age": 20

            },

            {

                "id": 60,

                "firstName": "Lou",

                "lastName": "Conner",

                "username": "@Sanchez",

                "email": "lousanchez@comtours.com",

                "age": 16

            }

        ];

        this.peopleTableData = [

            {

                id: 1,

                firstName: 'Mark',

                lastName: 'Otto',

                username: '@mdo',

                email: 'mdo@gmail.com',

                age: '28',

                status: 'info'

            },

            {

                id: 2,

                firstName: 'Jacob',

                lastName: 'Thornton',

                username: '@fat',

                email: 'fat@yandex.ru',

                age: '45',

                status: 'primary'

            },

            {

                id: 3,

                firstName: 'Larry',

                lastName: 'Bird',

                username: '@twitter',

                email: 'twitter@outlook.com',

                age: '18',

                status: 'success'

            },

            {

                id: 4,

                firstName: 'John',

                lastName: 'Snow',

                username: '@snow',

                email: 'snow@gmail.com',

                age: '20',

                status: 'danger'

            },

            {

                id: 5,

                firstName: 'Jack',

                lastName: 'Sparrow',

                username: '@jack',

                email: 'jack@yandex.ru',

                age: '30',

                status: 'warning'

            }

        ];

        this.metricsTableData = [

            {

                image: 'app/browsers/chrome.svg',

                browser: 'Google Chrome',

                visits: '10,392',

                isVisitsUp: true,

                purchases: '4,214',

                isPurchasesUp: true,

                percent: '45%',

                isPercentUp: true

            },

            {

                image: 'app/browsers/firefox.svg',

                browser: 'Mozilla Firefox',

                visits: '7,873',

                isVisitsUp: true,

                purchases: '3,031',

                isPurchasesUp: false,

                percent: '28%',

                isPercentUp: true

            },

            {

                image: 'app/browsers/ie.svg',

                browser: 'Internet Explorer',

                visits: '5,890',

                isVisitsUp: false,

                purchases: '2,102',

                isPurchasesUp: false,

                percent: '17%',

                isPercentUp: false

            },

            {

                image: 'app/browsers/safari.svg',

                browser: 'Safari',

                visits: '4,001',

                isVisitsUp: false,

                purchases: '1,001',

                isPurchasesUp: false,

                percent: '14%',

                isPercentUp: true

            },

            {

                image: 'app/browsers/opera.svg',

                browser: 'Opera',

                visits: '1,833',

                isVisitsUp: true,

                purchases: '83',

                isPurchasesUp: true,

                percent: '5%',

                isPercentUp: false

            }

        ];

        this.users = [

            {

                "id": 1,

                "name": "Esther Vang",

                "status": 4,

                "group": 3

            },

            {

                "id": 2,

                "name": "Leah Freeman",

                "status": 3,

                "group": 1

            },

            {

                "id": 3,

                "name": "Mathews Simpson",

                "status": 3,

                "group": 2

            },

            {

                "id": 4,

                "name": "Buckley Hopkins",

                "group": 4

            },

            {

                "id": 5,

                "name": "Buckley Schwartz",

                "status": 1,

                "group": 1

            },

            {

                "id": 6,

                "name": "Mathews Hopkins",

                "status": 4,

                "group": 2

            },

            {

                "id": 7,

                "name": "Leah Vang",

                "status": 4,

                "group": 1

            },

            {

                "id": 8,

                "name": "Vang Schwartz",

                "status": 4,

                "group": 2

            },

            {

                "id": 9,

                "name": "Hopkin Esther",

                "status": 1,

                "group": 2

            },

            {

                "id": 10,

                "name": "Mathews Schwartz",

                "status": 1,

                "group": 3

            }

        ];

        this.statuses = [

            { value: 1, text: 'Good' },

            { value: 2, text: 'Awesome' },

            { value: 3, text: 'Excellent' },

        ];

        this.groups = [

            { id: 1, text: 'user' },

            { id: 2, text: 'customer' },

            { id: 3, text: 'vip' },

            { id: 4, text: 'admin' }

        ];

        this.editableTableData = this.smartTableData.slice(0, 36);

    }

    return BasicTablesService;

}());

BasicTablesService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [])

], BasicTablesService);



//# sourceMappingURL=basicTables.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/select-client/select-client.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-content\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" translate>{{'appointment.modalHeader' }}</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\"  >\r\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\" (userRowSelect)=\"selectClient($event)\" (filterFunction)=\"onFilter($event)\"></ng2-smart-table>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success confirm-btn\" (click)=\"Select()\" translate>{{'appointment.selectclient' }}</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/select-client/select-client.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .smart-table-container {\n  width: 100%; }\n\n:host /deep/ ng2-smart-table {\n  color: #ffffff; }\n  :host /deep/ ng2-smart-table th, :host /deep/ ng2-smart-table td {\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  :host /deep/ ng2-smart-table table tr td {\n    padding: 0 8px; }\n  :host /deep/ ng2-smart-table input {\n    line-height: 1.5 !important; }\n  :host /deep/ ng2-smart-table ng2-smart-table-cell {\n    color: #ffffff;\n    line-height: 35px; }\n  :host /deep/ ng2-smart-table tbody tr {\n    color: #ffffff; }\n  :host /deep/ ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  :host /deep/ ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #ffffff;\n    font-weight: 500; }\n    :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 500 !important; }\n      :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #ffffff !important; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    :host /deep/ ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions-title-add {\n    text-align: center; }\n  :host /deep/ ng2-smart-table a.ng2-smart-action, :host /deep/ ng2-smart-table .ng2-smart-title {\n    font-size: 14px !important;\n    color: #ffffff;\n    padding: 0 5px;\n    display: inline-block; }\n    :host /deep/ ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add, :host /deep/ ng2-smart-table .ng2-smart-title.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n  :host /deep/ ng2-smart-table nav.ng2-smart-pagination-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.modal-body {\n  overflow: scroll; }\n\n.tb-height {\n  height: 700px; }\n\n.modal-buttons .btn {\n  margin-right: 20px; }\n\n.modal-content {\n  color: white;\n  background-color: #5491cb; }\n\n.checkbox {\n  display: inline-block;\n  margin-bottom: -12px;\n  margin-left: 12px; }\n\ndiv.category {\n  display: inherit; }\n  div.category select {\n    margin-left: 11px; }\n  div.category label {\n    padding: 5px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/select-client/select-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartTables_service__ = __webpack_require__("../../../../../src/app/pages/user/appointments/select-client/smartTables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};











var SelectClientComponent = (function () {

    function SelectClientComponent(activeModal, service, clientService) {

        var _this = this;

        this.activeModal = activeModal;

        this.service = service;

        this.clientService = clientService;

        this.query = '';

        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();

        this.selectedClient = [];

        // this.service.getData().then((data) => {

        //   this.source.load(data);

        // });

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.clientService.getAllClients().then(function (data) {

            _this.clients = data;

            _this.source.load(data);

            _this.source.setFilter([{ field: 'companyID', search: [_this.currentUser.user.companyID] }]);

            // //console.log("------", this.clients);

        });

        if (localStorage.getItem('lang') === 'en') {

            this.settings = {

                actions: true,

                columns: {

                    firstName: {

                        title: 'First Name',

                        type: 'string',

                        filter: false

                    },

                    lastName: {

                        title: 'Last Name',

                        type: 'string',

                        filter: false

                    },

                    email: {

                        title: 'E-mail',

                        type: 'string',

                        filter: false

                    },

                    country: {

                        title: 'Country',

                        type: 'string',

                        filter: false

                    }

                }

            };

        }

        else {

            this.settings = {

                actions: false,

                columns: {

                    firstName: {

                        title: 'Vorname',

                        type: 'string'

                    },

                    lastName: {

                        title: 'Nachname',

                        type: 'string'

                    },

                    email: {

                        title: 'E-mail',

                        type: 'string'

                    },

                    country: {

                        title: 'Land',

                        type: 'string'

                    }

                }

            };

        }

    }

    SelectClientComponent.prototype.onSearch = function (query) {

        if (query === void 0) { query = ''; }

        if (query) {

            this.source.reset(true);

            this.source.setFilter([

                // fields we want to inclue in the search

                {

                    field: 'firstName',

                    search: query,

                },

                {

                    field: 'lastName',

                    search: query,

                },

                {

                    field: 'email',

                    search: query,

                },

                {

                    field: 'country',

                    search: query,

                }

            ], false);

        }

        else {

            this.source.reset(true);

            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

            this.source.setFilter([{ field: 'companyID', search: [this.currentUser.user.companyID] }]);

        }

        // second parameter specifying whether to perform 'AND' or 'OR' search

        // (meaning all columns should contain search query or at least one)

        // 'AND' by default, so changing to 'OR' by setting false here

    };

    SelectClientComponent.prototype.onFilter = function (event) {

        //console.log(event);

    };

    SelectClientComponent.prototype.onDeleteConfirm = function (event) {

        if (window.confirm('Are you sure you want to delete?')) {

            event.confirm.resolve();

        }

        else {

            event.confirm.reject();

        }

    };

    SelectClientComponent.prototype.selectClient = function (event) {

        //console.log(event.data);

        this.selectedClient = [];

        this.selectedClient.push(event.data);

    };

    SelectClientComponent.prototype.Select = function () {

        if (this.selectedClient == undefined)

            return;

        this.activeModal.close(this.selectedClient);

    };

    SelectClientComponent.prototype.closeModal = function () {

        this.activeModal.close(undefined);

    };

    return SelectClientComponent;

}());

SelectClientComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'smart-tables',

        template: __webpack_require__("../../../../../src/app/pages/user/appointments/select-client/select-client.component.html"),

        styles: [__webpack_require__("../../../../../src/app/pages/user/appointments/select-client/select-client.component.scss")],

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__smartTables_service__["a" /* SmartTablesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__smartTables_service__["a" /* SmartTablesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_clients_service__["b" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_clients_service__["b" /* ClientsService */]) === "function" && _c || Object])

], SelectClientComponent);



var _a, _b, _c;

//# sourceMappingURL=select-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/appointments/select-client/smartTables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};



var SmartTablesService = (function () {

    function SmartTablesService() {

        this.smartTableData = [

            {

                id: 1,

                firstName: 'Mark',

                lastName: 'Otto',

                username: '@mdo',

                email: 'mdo@gmail.com',

                age: '28'

            },

            {

                id: 2,

                firstName: 'Jacob',

                lastName: 'Thornton',

                username: '@fat',

                email: 'fat@yandex.ru',

                age: '45'

            },

            {

                id: 3,

                firstName: 'Larry',

                lastName: 'Bird',

                username: '@twitter',

                email: 'twitter@outlook.com',

                age: '18'

            },

            {

                id: 4,

                firstName: 'John',

                lastName: 'Snow',

                username: '@snow',

                email: 'snow@gmail.com',

                age: '20'

            },

            {

                id: 5,

                firstName: 'Jack',

                lastName: 'Sparrow',

                username: '@jack',

                email: 'jack@yandex.ru',

                age: '30'

            },

            {

                id: 6,

                firstName: 'Ann',

                lastName: 'Smith',

                username: '@ann',

                email: 'ann@gmail.com',

                age: '21'

            },

            {

                id: 7,

                firstName: 'Barbara',

                lastName: 'Black',

                username: '@barbara',

                email: 'barbara@yandex.ru',

                age: '43'

            },

            {

                id: 8,

                firstName: 'Sevan',

                lastName: 'Bagrat',

                username: '@sevan',

                email: 'sevan@outlook.com',

                age: '13'

            },

            {

                id: 9,

                firstName: 'Ruben',

                lastName: 'Vardan',

                username: '@ruben',

                email: 'ruben@gmail.com',

                age: '22'

            },

            {

                id: 10,

                firstName: 'Karen',

                lastName: 'Sevan',

                username: '@karen',

                email: 'karen@yandex.ru',

                age: '33'

            },

            {

                id: 11,

                firstName: 'Mark',

                lastName: 'Otto',

                username: '@mark',

                email: 'mark@gmail.com',

                age: '38'

            },

            {

                id: 12,

                firstName: 'Jacob',

                lastName: 'Thornton',

                username: '@jacob',

                email: 'jacob@yandex.ru',

                age: '48'

            },

            {

                id: 13,

                firstName: 'Haik',

                lastName: 'Hakob',

                username: '@haik',

                email: 'haik@outlook.com',

                age: '48'

            },

            {

                id: 14,

                firstName: 'Garegin',

                lastName: 'Jirair',

                username: '@garegin',

                email: 'garegin@gmail.com',

                age: '40'

            },

            {

                id: 15,

                firstName: 'Krikor',

                lastName: 'Bedros',

                username: '@krikor',

                email: 'krikor@yandex.ru',

                age: '32',

            },

        ];

        this.metricsTableData = [

            {

                image: 'app/browsers/chrome.svg',

                browser: 'Google Chrome',

                visits: '10,392',

                isVisitsUp: true,

                purchases: '4,214',

                isPurchasesUp: true,

                percent: '45%',

                isPercentUp: true

            },

            {

                image: 'app/browsers/firefox.svg',

                browser: 'Mozilla Firefox',

                visits: '7,873',

                isVisitsUp: true,

                purchases: '3,031',

                isPurchasesUp: false,

                percent: '28%',

                isPercentUp: true

            },

            {

                image: 'app/browsers/ie.svg',

                browser: 'Internet Explorer',

                visits: '5,890',

                isVisitsUp: false,

                purchases: '2,102',

                isPurchasesUp: false,

                percent: '17%',

                isPercentUp: false

            },

            {

                image: 'app/browsers/safari.svg',

                browser: 'Safari',

                visits: '4,001',

                isVisitsUp: false,

                purchases: '1,001',

                isPurchasesUp: false,

                percent: '14%',

                isPercentUp: true

            },

            {

                image: 'app/browsers/opera.svg',

                browser: 'Opera',

                visits: '1,833',

                isVisitsUp: true,

                purchases: '83',

                isPurchasesUp: true,

                percent: '5%',

                isPercentUp: false

            }

        ];

    }

    SmartTablesService.prototype.getData = function () {

        var _this = this;

        return new Promise(function (resolve, reject) {

            setTimeout(function () {

                resolve(_this.smartTableData);

            }, 2000);

        });

    };

    return SmartTablesService;

}());

SmartTablesService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()

], SmartTablesService);



//# sourceMappingURL=smartTables.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/changepassword/changePassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__ = __webpack_require__("../../../../../src/app/services/calendars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_validators__ = __webpack_require__("../../../../../src/app/theme/validators/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};

















var ChangePassword = (function () {

    function ChangePassword(fb, _langService, userService, modalService, calendarService, _service) {

        var _this = this;

        this.userService = userService;

        this.modalService = modalService;

        this.calendarService = calendarService;

        this._service = _service;

        this.data = [];

        this.options = {

            position: ["top", "right"],

            timeOut: 3000,

            lastOnBottom: true,

            clickToClose: true,

            animation: 'scale',

            showProgressBar: false,

            maxLength: 100

        };

        this.submitted = false;

        this.sendStatus = false;

        this.form = fb.group({

            'currentpassword': ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].minLength(4)])],

            'passwords': fb.group({

                'password': ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].minLength(4)])],

                'repeatPassword': ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].minLength(4)])]

            }, { validator: __WEBPACK_IMPORTED_MODULE_6__theme_validators__["b" /* EqualPasswordsValidator */].validate('password', 'repeatPassword') })

        });

        this.currentpassword = this.form.controls['currentpassword'];

        this.passwords = this.form.controls['passwords'];

        this.password = this.passwords.controls['password'];

        this.repeatPassword = this.passwords.controls['repeatPassword'];

        if (localStorage.getItem('lang') == 'de') {

            _langService.getDEJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        else {

            _langService.getENJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

    }

    ChangePassword.prototype.ngOnInit = function () {

    };

    ChangePassword.prototype.saveOpeiningHours = function () {

        // //console.log(this.openingHours);

        // this.openinghourService.update(this.openingHours, this.currentUser.user.companyID).then((data) => {

        //     this.openingHours = data;

        //   this.showSuccessToast(this.language.message.success, this.language.message.openinghoursupdated);

        // });

    };

    ChangePassword.prototype.onSubmit = function (values) {

        var _this = this;

        this.submitted = true;

        if (this.form.valid) {

            this.userService.changepassword(this.currentpassword.value, this.password.value).then(function (data) {

                if (data['status']) {

                    _this.showSuccessToast(_this.language.message.success, _this.language.message.changepasswordsuccess);

                }

                else {

                    _this.showErrorToast(_this.language.message.info, _this.language.message.changepassworderror);

                }

            });

        }

    };

    ChangePassword.prototype.showSuccessToast = function (title, content) {

        this._service.success(title, content, this.options);

    };

    ChangePassword.prototype.showErrorToast = function (title, content) {

        this._service.info(title, content, this.options);

    };

    return ChangePassword;

}());

ChangePassword = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({

        selector: 'change-password',

        template: __webpack_require__("../../../../../src/app/pages/user/changepassword/changePassword.html"),

        styles: [__webpack_require__("../../../../../src/app/pages/user/changepassword/changePassword.scss")]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_language_service__["a" /* LanguageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_users_service__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_users_service__["b" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__["b" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__["b" /* CalendarService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _f || Object])

], ChangePassword);



var _a, _b, _c, _d, _e, _f;

//# sourceMappingURL=changePassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/changepassword/changePassword.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n<div *ngIf=\"loading == true\" class=\"loader\"></div>\r\n<div class=\"widgets text-center\">\r\n    <ba-card title=\"{{'changepassword.title' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n        <div class=\"row\">\r\n            <div class = 'container col-md-7 pull-center'>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n\r\n                  <div class=\"form-group row\" [ngClass]=\"{'has-error': (!currentpassword.valid && currentpassword.touched), 'has-success': (currentpassword.valid && currentpassword.touched)}\">\r\n                    <label translate for=\"inputCurrentPassword\" class=\"col-sm-4 control-label\">\r\n                      {{'changepassword.currentpassword'}}\r\n                    </label>\r\n\r\n                    <div class=\"col-sm-8\">\r\n                      <input [formControl]=\"currentpassword\" type=\"password\" class=\"form-control\" id=\"inputCurrentPassword\" placeholder=\"{{'changepassword.currentpassword' | translate}}\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n                    <label translate for=\"inputPassword3\" class=\"col-sm-4 control-label\">{{'changepassword.password'}}</label>\r\n\r\n                    <div class=\"col-sm-8\">\r\n                      <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"{{'changepassword.password' | translate}}\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\" [ngClass]=\"{'has-error': (!repeatPassword.valid && repeatPassword.touched), 'has-success': (repeatPassword.valid && repeatPassword.touched)}\">\r\n                    <label translate for=\"inputPassword4\" class=\"col-sm-4 control-label\">{{'changepassword.repeat'}}</label>\r\n\r\n                    <div class=\"col-sm-8\">\r\n                      <input [formControl]=\"repeatPassword\" type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"{{'changepassword.repeat' | translate}}\" >\r\n                      <span *ngIf=\"!passwords.valid && (password.touched || repeatPassword.touched)\" class=\"help-block sub-little-text\" translate>{{'changepassword.passwordnotmatch' | translate}}.</span>\r\n                    </div>\r\n                  </div>\r\n                   <div class=\"form-group row\">\r\n                    <div class=\"offset-sm-2 col-sm-10\">\r\n                      <div class=\"alert alert-success\" *ngIf = \"sendStatus==true\">\r\n                        {{'changepassword.success' | translate}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <div class=\"offset-sm-2 col-sm-10\">\r\n                      <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\">{{'changepassword.submit' | translate}}</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </ba-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/user/changepassword/changePassword.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n\n:host /deep/ .widgets th {\n  border-bottom: none;\n  text-align: center; }\n\n.time-format {\n  content: \"\";\n  background: #FFF;\n  height: 20px;\n  position: absolute;\n  margin: 0 -10px; }\n\n:host /deep/ .widgets .smart-table-container {\n  width: 100%; }\n\n:host /deep/ ng2-smart-table {\n  color: #ffffff; }\n  :host /deep/ ng2-smart-table th, :host /deep/ ng2-smart-table td {\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  :host /deep/ ng2-smart-table table tr td {\n    padding: 0 8px; }\n  :host /deep/ ng2-smart-table input {\n    line-height: 1.5 !important; }\n  :host /deep/ ng2-smart-table ng2-smart-table-cell {\n    color: #ffffff;\n    line-height: 35px; }\n  :host /deep/ ng2-smart-table tbody tr {\n    color: #ffffff; }\n  :host /deep/ ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  :host /deep/ ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #ffffff;\n    font-weight: 500; }\n    :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 500 !important; }\n      :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #ffffff !important; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    :host /deep/ ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions-title-add {\n    text-align: center; }\n  :host /deep/ ng2-smart-table a.ng2-smart-action, :host /deep/ ng2-smart-table .ng2-smart-title {\n    font-size: 14px !important;\n    color: #ffffff;\n    padding: 0 5px;\n    display: inline-block; }\n    :host /deep/ ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add, :host /deep/ ng2-smart-table .ng2-smart-title.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n  :host /deep/ ng2-smart-table nav.ng2-smart-pagination-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n:host /deep/ .wide {\n  width: 30%; }\n\n:host /deep/ .wide_calendar {\n  width: 80%; }\n\n.loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 70px;\n  height: 50px;\n  margin: -75px 0 0 -75px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/clients/clients-edit/clients-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalHeader}}</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" >\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"firstname\">First Name</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.firstName' name = 'firstname' class=\"form-control\" id=\"firstname\" placeholder=\"First Name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"lastname\">Last Name</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.lastName' name = 'lastname' class=\"form-control\" id=\"street\" placeholder=\"Last Name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"city\">Email</label>\r\n        <input type=\"email\" [(ngModel)] = 'modalData.email' name = 'email' class=\"form-control\" id=\"email\" placeholder=\"Email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"zip\">phoneNumber</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.phoneNumber' name = 'phoneNumber' class=\"form-control\" id=\"zip\" placeholder=\"Mobile\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"zip\">FAX</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.fax' name = 'fax' class=\"form-control\" id=\"fax\" placeholder=\"FAX\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"street\">Street</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.street' name = 'street' class=\"form-control\" id=\"phone\" placeholder=\"Street\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"zip\">ZIP Code</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.zip' name = 'zip' class=\"form-control\" id=\"zip\" placeholder=\"ZIP Code\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"city\">City</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.city' name = 'city' class=\"form-control\" id=\"city\" placeholder=\"City\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"country\">Country</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.country' name = 'country' class=\"form-control\" id=\"country\" placeholder=\"Country\">\r\n      </div>\r\n    \r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success confirm-btn\" (click)=\"saveModal()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/user/clients/clients-edit/clients-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var ClientsEdit = (function () {

    function ClientsEdit(activeModal, clientService) {

        this.activeModal = activeModal;

        this.clientService = clientService;

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        //console.log(this.currentUser.user);

    }

    ClientsEdit.prototype.ngOnInit = function () {

    };

    ClientsEdit.prototype.saveModal = function () {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["a" /* Client */]();

        saveData.firstName = this.modalData.firstName;

        saveData.lastName = this.modalData.lastName;

        saveData.email = this.modalData.email;

        saveData.phoneNumber = this.modalData.phoneNumber;

        saveData.street = this.modalData.street;

        saveData.zip = this.modalData.zip;

        saveData.city = this.modalData.city;

        saveData.country = this.modalData.country;

        saveData.fax = this.modalData.fax;

        saveData.status = this.modalData.status;

        saveData.companyID = this.currentUser.user.companyID;

        //console.log(saveData);

        if (this.modalType === 'edit') {

            var id = this.modalData._id;

            // //console.log("company id"+id);

            //this.dataService.update(saveData, id);

        }

        else {

            this.clientService.create(saveData).then(function (client) {

                _this.tableData.push(client);

            });

        }

        this.activeModal.close();

    };

    ClientsEdit.prototype.closeModal = function () {

        this.activeModal.close();

    };

    return ClientsEdit;

}());

ClientsEdit = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'edit-clients-modal',

        styles: [__webpack_require__(("../../../../../src/app/pages/user/clients/clients-edit/clients-edit.scss"))],

        template: __webpack_require__("../../../../../src/app/pages/user/clients/clients-edit/clients-edit.component.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["b" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["b" /* ClientsService */]) === "function" && _b || Object])

], ClientsEdit);



var _a, _b;

//# sourceMappingURL=clients-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/clients/clients-edit/clients-edit.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-buttons .btn {\n  margin-right: 20px; }\n\n.modal-content {\n  color: white;\n  background-color: #5491cb; }\n\n.checkbox {\n  display: inline-block;\n  margin-bottom: -12px;\n  margin-left: 12px; }\n\ndiv.category {\n  display: inherit; }\n  div.category select {\n    margin-left: 11px; }\n  div.category label {\n    padding: 5px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/clients/clientsTables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MultiSelectDropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsTables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clients_edit_clients_edit_component__ = __webpack_require__("../../../../../src/app/pages/user/clients/clients-edit/clients-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_companies_service__ = __webpack_require__("../../../../../src/app/services/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



















var MultiSelectDropdownComponent = (function () {

    function MultiSelectDropdownComponent() {

        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    MultiSelectDropdownComponent.prototype.ngOnInit = function () {

        this.renderValue = this.value.toString().toUpperCase();

    };

    MultiSelectDropdownComponent.prototype.onClick = function () {

        this.save.emit(this.rowData);

    };

    return MultiSelectDropdownComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], MultiSelectDropdownComponent.prototype, "value", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], MultiSelectDropdownComponent.prototype, "rowData", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)

], MultiSelectDropdownComponent.prototype, "save", void 0);

MultiSelectDropdownComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'button-view',

        template: "\n    <select><option>--Select--</option></select>\n  ",

    })

], MultiSelectDropdownComponent);



var ClientsTables = (function () {

    function ClientsTables(dataService, modalService, companyiesServices, translate, _service, _langService) {

        var _this = this;

        this.dataService = dataService;

        this.modalService = modalService;

        this.companyiesServices = companyiesServices;

        this.translate = translate;

        this._service = _service;

        this._langService = _langService;

        this.filterQuery = '';

        this.rowsOnPage = 10;

        this.sortBy = 'email';

        this.sortOrder = 'asc';

        this.options = {

            position: ["top", "right"],

            timeOut: 3000,

            lastOnBottom: true,

            clickToClose: true,

            animation: 'scale',

            showProgressBar: false,

            maxLength: 100

        };

        this.sortByWordLength = function (a) {

            return a.city.length;

        };

        this.loading = true;

        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (localStorage.getItem('lang') == 'de') {

            this._langService.getDEJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        else {

            this._langService.getENJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        if (this.currentUser.user.role == "admin") {

            this.dataService.getAllClients().then(function (data) {

                _this.data = data;

                //console.log(this.data);

                for (var i = 0; i < data.length; i++) {

                    if (data[i].companyID.indexOf(_this.currentUser.user.companyID) > -1) {

                        data[i]['companyName'] = _this.company_title;

                    }

                    else {

                        data[i]['companyName'] = "Other";

                    }

                }

                if (localStorage.getItem('lang') === 'en') {

                    _this.settings = {

                        add: {

                            addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                            createButtonContent: '<i class="ion-checkmark"></i>',

                            cancelButtonContent: '<i class="ion-close"></i>',

                            confirmCreate: true,

                        },

                        edit: {

                            editButtonContent: '<i class="ion-edit"></i>',

                            saveButtonContent: '<i class="ion-checkmark"></i>',

                            cancelButtonContent: '<i class="ion-close"></i>',

                            confirmSave: true,

                        },

                        delete: {

                            deleteButtonContent: '<i class="ion-trash-a"></i>',

                            confirmDelete: true,

                        },

                        columns: {

                            firstName: {

                                title: 'First Name',

                                type: 'string',

                            },

                            lastName: {

                                title: 'Last Name',

                                type: 'string',

                            },

                            email: {

                                title: 'E-mail',

                                type: 'string'

                            },

                            country: {

                                title: 'Country',

                                type: 'number'

                            },

                            phoneNumber: {

                                title: 'Phone Number',

                                type: 'string'

                            },

                            street: {

                                title: 'Street',

                                type: 'string'

                            },

                            city: {

                                title: 'City',

                                type: 'string'

                            },

                            zip: {

                                title: 'Zip Code',

                                type: 'string'

                            },

                        }

                    };

                }

                else {

                    _this.settings = {

                        add: {

                            addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                            createButtonContent: '<i class="ion-checkmark"></i>',

                            cancelButtonContent: '<i class="ion-close"></i>',

                            confirmCreate: true,

                        },

                        edit: {

                            editButtonContent: '<i class="ion-edit"></i>',

                            saveButtonContent: '<i class="ion-checkmark"></i>',

                            cancelButtonContent: '<i class="ion-close"></i>',

                            confirmSave: true,

                        },

                        delete: {

                            deleteButtonContent: '<i class="ion-trash-a"></i>',

                            confirmDelete: true,

                        },

                        columns: {

                            firstName: {

                                title: 'Vorname',

                                type: 'string',

                            },

                            lastName: {

                                title: 'Nachname',

                                type: 'string',

                            },

                            email: {

                                title: 'E-mail',

                                type: 'string'

                            },

                            country: {

                                title: 'Land',

                                type: 'number'

                            },

                            phoneNumber: {

                                title: 'Telefon',

                                type: 'string'

                            },

                            street: {

                                title: 'Straße',

                                type: 'string'

                            },

                            city: {

                                title: 'Ort',

                                type: 'string'

                            },

                            zip: {

                                title: 'PLZ',

                                type: 'string'

                            },

                        }

                    };

                }

                _this.source.load(data);

                _this.loading = false;

            });

        }

        if (this.currentUser.user.role == "company") {

            this.companyiesServices.getCompaniesByID(this.currentUser.user.companyID).then(function (data) {

                _this.company_title = data.name;

                _this.dataService.getClients(_this.currentUser.user.companyID).then(function (data) {

                    _this.data = data;

                    //console.log(this.data);

                    for (var i = 0; i < data.length; i++) {

                        if (data[i].companyID.indexOf(_this.currentUser.user.companyID) > -1) {

                            data[i]['companyName'] = _this.company_title;

                        }

                        else {

                            data[i]['companyName'] = "Other";

                        }

                    }

                    if (localStorage.getItem('lang') === 'en') {

                        _this.settings = {

                            add: {

                                addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                                createButtonContent: '<i class="ion-checkmark"></i>',

                                cancelButtonContent: '<i class="ion-close"></i>',

                                confirmCreate: true,

                            },

                            edit: {

                                editButtonContent: '<i class="ion-edit"></i>',

                                saveButtonContent: '<i class="ion-checkmark"></i>',

                                cancelButtonContent: '<i class="ion-close"></i>',

                                confirmSave: true,

                            },

                            delete: {

                                deleteButtonContent: '<i class="ion-trash-a"></i>',

                                confirmDelete: true,

                            },

                            columns: {

                                firstName: {

                                    title: 'First Name',

                                    type: 'string',

                                },

                                lastName: {

                                    title: 'Last Name',

                                    type: 'string',

                                },

                                email: {

                                    title: 'E-mail',

                                    type: 'string'

                                },

                                country: {

                                    title: 'Country',

                                    type: 'number'

                                },

                                phoneNumber: {

                                    title: 'Phone Number',

                                    type: 'string'

                                },

                                street: {

                                    title: 'Street',

                                    type: 'string'

                                },

                                city: {

                                    title: 'City',

                                    type: 'string'

                                },

                                zip: {

                                    title: 'Zip Code',

                                    type: 'string'

                                },

                                companyName: {

                                    title: 'Company',

                                    show: false,

                                    // renderComponent: MultiSelectDropdownComponent,

                                    filter: {

                                        type: 'list',

                                        config: {

                                            selectText: 'Select...',

                                            list: [

                                                { value: _this.company_title, title: _this.company_title },

                                            ],

                                        },

                                    },

                                    editor: {

                                        type: 'list',

                                        config: {

                                            selectText: 'Select...',

                                            list: [

                                                { value: _this.company_title, title: _this.company_title },

                                            ],

                                        },

                                    }

                                },

                            }

                        };

                    }

                    else {

                        _this.settings = {

                            add: {

                                addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                                createButtonContent: '<i class="ion-checkmark"></i>',

                                cancelButtonContent: '<i class="ion-close"></i>',

                                confirmCreate: true,

                            },

                            edit: {

                                editButtonContent: '<i class="ion-edit"></i>',

                                saveButtonContent: '<i class="ion-checkmark"></i>',

                                cancelButtonContent: '<i class="ion-close"></i>',

                                confirmSave: true,

                            },

                            delete: {

                                deleteButtonContent: '<i class="ion-trash-a"></i>',

                                confirmDelete: true,

                            },

                            columns: {

                                firstName: {

                                    title: 'Vorname',

                                    type: 'string',

                                },

                                lastName: {

                                    title: 'Nachname',

                                    type: 'string',

                                },

                                email: {

                                    title: 'E-mail',

                                    type: 'string'

                                },

                                country: {

                                    title: 'Land',

                                    type: 'number'

                                },

                                phoneNumber: {

                                    title: 'Telefon',

                                    type: 'string'

                                },

                                street: {

                                    title: 'Straße',

                                    type: 'string'

                                },

                                city: {

                                    title: 'Ort',

                                    type: 'string'

                                },

                                zip: {

                                    title: 'PLZ',

                                    type: 'string'

                                },

                                companyName: {

                                    title: 'Anbieter',

                                    show: false,

                                    filter: {

                                        type: 'list',

                                        config: {

                                            selectText: 'Select...',

                                            list: [

                                                { value: _this.company_title, title: _this.company_title },

                                            ],

                                        },

                                    },

                                    editor: {

                                        type: 'list',

                                        config: {

                                            selectText: 'Select...',

                                            list: [

                                                { value: _this.company_title, title: _this.company_title },

                                            ],

                                        },

                                    }

                                },

                            }

                        };

                    }

                    _this.source.load(data);

                    _this.loading = false;

                });

            });

        }

        // this.companyiesServices.getCompanies().then((data)=>{

        //   this.companies = data;

        // })

    }

    ClientsTables.prototype.ngOnInit = function () {

    };

    ClientsTables.prototype.toInt = function (num) {

        return +num;

    };

    ClientsTables.prototype.onDeleteConfirm = function (event) {

        if (window.confirm('Are you sure you want to delete?')) {

            event.confirm.resolve();

        }

        else {

            event.confirm.reject();

        }

    };

    ClientsTables.prototype.editClient = function (id) {

        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_1__clients_edit_clients_edit_component__["a" /* ClientsEdit */], { size: 'lg' });

        activeModal.componentInstance.modalHeader = 'Company Edit';

        var index = this.data.findIndex(function (obj) { return obj._id === id; });

        activeModal.componentInstance.modalData = this.data[index];

        activeModal.componentInstance.modalType = 'edit';

        //console.log(this.data[id]);

    };

    ClientsTables.prototype.addClient = function () {

        //  //console.log(id);

        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_1__clients_edit_clients_edit_component__["a" /* ClientsEdit */], { size: 'lg' });

        activeModal.componentInstance.modalHeader = 'Add Client';

        activeModal.componentInstance.modalType = 'add';

        activeModal.componentInstance.modalData = {};

        activeModal.componentInstance.tableData = this.data;

    };

    ClientsTables.prototype.removeClient = function (event) {

        var _this = this;

        if (event.data.companyName === "Other" && this.currentUser.user.role !== "admin") {

            this.showWaningToast(this.language.message.sorry, this.language.message.removepermission);

            return;

        }

        if (window.confirm(this.language.message.deleteconfirm)) {

            if (this.currentUser.user.role == "company") {

                var index = this.data.findIndex(function (obj) { return obj._id === event.data._id; });

                this.dataService.removeClientByCompany(this.currentUser.user.companyID, this.data[index]._id).then(function (client) {

                    for (var i = 0; i < _this.data.length; i++) {

                        if (_this.data[i]._id === client._id) {

                            _this.data[i] = client;

                            _this.data[i]['companyName'] = "Other";

                        }

                    }

                    _this.source.load(_this.data);

                    _this.showSuccessToast(_this.language.message.success, _this.language.message.clientremove);

                });

            }

            else if (this.currentUser.user.role == "admin") {

                var index = this.data.findIndex(function (obj) { return obj._id === event.data._id; });

                this.dataService.delete(this.data[index]._id);

                if (index > -1) {

                    this.data.splice(index, 1);

                    this.source.load(this.data);

                    this.showSuccessToast(this.language.message.success, this.language.message.clientremove);

                }

            }

        }

    };

    ClientsTables.prototype.validateEmail = function (email) {

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);

    };

    ClientsTables.prototype.onCreateConfirm = function (event) {

        if (event.newData.firstName === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputfirstname);

            return;

        }

        else if (event.newData.lastName === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputlastname);

            return;

        }

        else if (event.newData.email === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputemail);

            return;

        }

        else if (!this.validateEmail(event.newData.email)) {

            this.showErrorToast(this.language.message.info, this.language.message.emailcorrectly);

            return;

        }

        if (window.confirm('Are you sure you want to Create?')) {

            event.confirm.resolve();

            this.saveClient(event.newData);

        }

        else {

            event.confirm.reject();

        }

    };

    ClientsTables.prototype.onEditConfirm = function (event) {

        if (event.newData.firstName === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputfirstname);

            return;

        }

        else if (event.newData.lastName === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputlastname);

            return;

        }

        else if (event.newData.email === "") {

            this.showErrorToast(this.language.message.info, this.language.message.inputemail);

            return;

        }

        else if (!this.validateEmail(event.newData.email)) {

            this.showErrorToast(this.language.message.info, this.language.message.emailcorrectly);

            return;

        }

        if (event.newData.companyName === "Other") {

            if (this.currentUser.user.role !== 'admin') {

                window.alert(this.language.message.selectcompanyname);

                return;

            }

        }

        if (window.confirm(this.language.message.updateconfirm)) {

            event.confirm.resolve();

            this.saveClient(event.newData);

        }

        else {

            event.confirm.reject();

        }

    };

    ClientsTables.prototype.saveClient = function (newData) {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_4__services_clients_service__["a" /* Client */]();

        saveData.firstName = newData.firstName;

        saveData.lastName = newData.lastName;

        saveData.email = newData.email;

        saveData.phoneNumber = newData.phoneNumber;

        saveData.street = newData.street;

        saveData.zip = newData.zip;

        saveData.city = newData.city;

        saveData.country = newData.country;

        saveData.status = true;

        saveData.companyID = this.currentUser.user.companyID;

        if (newData._id == undefined) {

            this.dataService.create(saveData).then(function (client) {

                _this.data.shift();

                _this.data.unshift(client);

                _this.source.load(_this.data);

                _this.showSuccessToast(_this.language.message.success, _this.language.message.clientcreatemessage);

            }).catch(function (e) {

                alert(this.language.message.sorry + " " + this.language.message.clientcreatefailed);

                return;

            });

        }

        else {

            this.dataService.update(saveData, newData._id).then(function (client) {

                _this.showSuccessToast(_this.language.message.success, _this.language.message.clientupdatemessage);

                //console.log(client);

                // this.tableData.push(client);

            }, function (err) {

                _this.showErrorToast(_this.language.message.error, _this.language.message.clientcreatefailed);

            });

        }

    };

    ClientsTables.prototype.showSuccessToast = function (title, content) {

        this._service.success(title, content, this.options);

    };

    ClientsTables.prototype.showErrorToast = function (title, content) {

        this._service.info(title, content, this.options);

    };

    ClientsTables.prototype.showWaningToast = function (title, content) {

        this._service.warn(title, content, this.options);

    };

    return ClientsTables;

}());

ClientsTables = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'clients-tables',

        template: __webpack_require__("../../../../../src/app/pages/user/clients/clientsTables.html"),

        styles: [__webpack_require__("../../../../../src/app/pages/user/clients/clientsTables.scss")],

    }),

    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_clients_service__["b" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_clients_service__["b" /* ClientsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_companies_service__["a" /* CompaniesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__app_translation_module__["a" /* AppTranslationModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_translation_module__["a" /* AppTranslationModule */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["NotificationsService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_language_service__["a" /* LanguageService */]) === "function" && _g || Object])

], ClientsTables);



var _a, _b, _c, _d, _e, _f, _g;

//# sourceMappingURL=clientsTables.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/clients/clientsTables.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n<div *ngIf=\"loading == true\" class=\"loader\"></div>\r\n<div *ngIf=\"loading == false\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <ba-card title=\"{{'general.table.clienttable' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                <div class=\"row\">\r\n                    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"removeClient($event)\" \r\n                    (editConfirm)=\"onEditConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>\r\n                </div>\r\n        </ba-card>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/user/clients/clientsTables.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .smart-table-container {\n  width: 100%; }\n\n:host /deep/ ng2-smart-table {\n  color: #ffffff; }\n  :host /deep/ ng2-smart-table th, :host /deep/ ng2-smart-table td {\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  :host /deep/ ng2-smart-table table tr td {\n    padding: 0 8px; }\n  :host /deep/ ng2-smart-table input {\n    line-height: 1.5 !important; }\n  :host /deep/ ng2-smart-table ng2-smart-table-cell {\n    color: #ffffff;\n    line-height: 35px; }\n  :host /deep/ ng2-smart-table tbody tr {\n    color: #ffffff; }\n  :host /deep/ ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  :host /deep/ ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #ffffff;\n    font-weight: 500; }\n    :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 500 !important; }\n      :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #ffffff !important; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    :host /deep/ ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions-title-add {\n    text-align: center; }\n  :host /deep/ ng2-smart-table a.ng2-smart-action, :host /deep/ ng2-smart-table .ng2-smart-title {\n    font-size: 14px !important;\n    color: #ffffff;\n    padding: 0 5px;\n    display: inline-block; }\n    :host /deep/ ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add, :host /deep/ ng2-smart-table .ng2-smart-title.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n  :host /deep/ ng2-smart-table nav.ng2-smart-pagination-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n  margin: -75px 0 0 -75px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/clients/custom_company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_companies_service__ = __webpack_require__("../../../../../src/app/services/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clients_service__ = __webpack_require__("../../../../../src/app/services/clients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var CustomCompanyComponent = (function () {

    function CustomCompanyComponent(companiesService, clientsService) {

        this.companiesService = companiesService;

        this.clientsService = clientsService;

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    CustomCompanyComponent.prototype.ngOnInit = function () {

        var _this = this;

        this.companiesService.getCompaniesByID(this.currentUser.user.companyID).then(function (data) {

            _this.renderValue = data.name;

        });

    };

    return CustomCompanyComponent;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], CustomCompanyComponent.prototype, "value", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], CustomCompanyComponent.prototype, "rowData", void 0);

CustomCompanyComponent = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        template: "\n    {{renderValue}}\n  ",

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_companies_service__["a" /* CompaniesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["b" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["b" /* ClientsService */]) === "function" && _b || Object])

], CustomCompanyComponent);



var _a, _b;

//# sourceMappingURL=custom_company.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};





var DataFilterPipe = (function () {

    function DataFilterPipe() {

    }

    DataFilterPipe.prototype.transform = function (array, query) {

        if (query) {

            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });

        }

        return array;

    };

    return DataFilterPipe;

}());

DataFilterPipe = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({

        name: 'dataFilter'

    })

], DataFilterPipe);



//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settings-edit/calendar-edit/calendar-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalHeader}}</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" [ngSwitch] = 'modalType' >\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.description' name = 'description' class=\"form-control\" id=\"description\" placeholder=\"Description\">\r\n      </div>\r\n       <div class=\"col-sm-6\">\r\n          <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n            <input type=\"checkbox\" [(ngModel)] = 'modalData.status' [ngModelOptions]=\"{standalone: true}\" >\r\n            <span>Active</span>\r\n          </label>\r\n        </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success confirm-btn\" (click)=\"saveModal()\">Save changes</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settings-edit/calendar-edit/calendar-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__ = __webpack_require__("../../../../../src/app/services/calendars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var CalendarEdit = (function () {

    function CalendarEdit(activeModal, calendarService) {

        this.activeModal = activeModal;

        this.calendarService = calendarService;

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    CalendarEdit.prototype.ngOnInit = function () {

        //console.log(this.modalData);

    };

    CalendarEdit.prototype.saveModal = function () {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__["a" /* Calendar */]();

        saveData.description = this.modalData.description;

        saveData.status = this.modalData.status;

        saveData.companyID = this.currentUser.user.companyID;

        //console.log(saveData);

        if (this.modalType === 'edit') {

            var id = this.modalData._id;

            this.calendarService.update(saveData, id);

        }

        else {

            this.calendarService.create(saveData).then(function (calendar) {

                _this.tableData.push(calendar);

            });

        }

        this.activeModal.close();

    };

    CalendarEdit.prototype.closeModal = function () {

        this.activeModal.close();

    };

    return CalendarEdit;

}());

CalendarEdit = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'edit-calendar-modal',

        styles: [__webpack_require__(("../../../../../src/app/pages/user/settings/settings-edit/calendar-edit/calendar-edit.scss"))],

        template: __webpack_require__("../../../../../src/app/pages/user/settings/settings-edit/calendar-edit/calendar-edit.component.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__["b" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__["b" /* CalendarService */]) === "function" && _b || Object])

], CalendarEdit);



var _a, _b;

//# sourceMappingURL=calendar-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settings-edit/calendar-edit/calendar-edit.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-buttons .btn {\n  margin-right: 20px; }\n\n.modal-content {\n  color: white;\n  background-color: #5491cb; }\n\n.checkbox {\n  display: inline-block;\n  margin-bottom: -12px;\n  margin-left: 12px; }\n\ndiv.category {\n  display: inherit; }\n  div.category select {\n    margin-left: 11px; }\n  div.category label {\n    padding: 5px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settings-edit/service-edit/service-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalHeader}}</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" [ngSwitch] = 'modalType' >\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <input type=\"text\" [(ngModel)] = 'modalData.description' name = 'description' class=\"form-control\" id=\"description\" placeholder=\"Description\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Price</label>\r\n        <input type=\"number\" [(ngModel)] = 'modalData.price' name = 'price' class=\"form-control\" id=\"price\" placeholder=\"price\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Duration</label>\r\n        <input type=\"number\" [(ngModel)] = 'modalData.duration' name = 'duration' class=\"form-control\" id=\"duration\" placeholder=\"Duration\">\r\n      </div>\r\n      \r\n       <div class=\"col-sm-6\">\r\n          <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n            <input type=\"checkbox\" [(ngModel)] = 'modalData.status' [ngModelOptions]=\"{standalone: true}\" >\r\n            <span>Active</span>\r\n          </label>\r\n        </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success confirm-btn\" (click)=\"saveModal()\">Save changes</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settings-edit/service-edit/service-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services_service__ = __webpack_require__("../../../../../src/app/services/services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var ServiceEdit = (function () {

    function ServiceEdit(activeModal, servicesService) {

        this.activeModal = activeModal;

        this.servicesService = servicesService;

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    ServiceEdit.prototype.ngOnInit = function () {

        //console.log(this.modalData);

    };

    ServiceEdit.prototype.saveModal = function () {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_2__services_services_service__["a" /* Service */]();

        saveData.description = this.modalData.description;

        saveData.price = this.modalData.price;

        saveData.duration = this.modalData.duration;

        saveData.status = this.modalData.status;

        saveData.companyID = this.currentUser.user.companyID;

        //console.log(saveData);

        if (this.modalType === 'edit') {

            var id = this.modalData._id;

            this.servicesService.update(saveData, id);

        }

        else {

            this.servicesService.create(saveData).then(function (calendar) {

                _this.tableData.push(calendar);

            });

        }

        this.activeModal.close();

    };

    ServiceEdit.prototype.closeModal = function () {

        this.activeModal.close();

    };

    return ServiceEdit;

}());

ServiceEdit = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'edit-service-modal',

        styles: [__webpack_require__(("../../../../../src/app/pages/user/settings/settings-edit/service-edit/service-edit.scss"))],

        template: __webpack_require__("../../../../../src/app/pages/user/settings/settings-edit/service-edit/service-edit.component.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_services_service__["b" /* ServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_services_service__["b" /* ServicesService */]) === "function" && _b || Object])

], ServiceEdit);



var _a, _b;

//# sourceMappingURL=service-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settings-edit/service-edit/service-edit.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-buttons .btn {\n  margin-right: 20px; }\n\n.modal-content {\n  color: white;\n  background-color: #5491cb; }\n\n.checkbox {\n  display: inline-block;\n  margin-bottom: -12px;\n  margin-left: 12px; }\n\ndiv.category {\n  display: inherit; }\n  div.category select {\n    margin-left: 11px; }\n  div.category label {\n    padding: 5px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settingsTables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsTables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__ = __webpack_require__("../../../../../src/app/services/calendars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services_service__ = __webpack_require__("../../../../../src/app/services/services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_openinghours_service__ = __webpack_require__("../../../../../src/app/services/openinghours.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_companies_service__ = __webpack_require__("../../../../../src/app/services/companies.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



















var SettingsTables = (function () {

    function SettingsTables(modalService, calendarService, servicesService, openinghourService, _service, _langService, companyService) {

        var _this = this;

        this.modalService = modalService;

        this.calendarService = calendarService;

        this.servicesService = servicesService;

        this.openinghourService = openinghourService;

        this._service = _service;

        this._langService = _langService;

        this.companyService = companyService;

        this.data = [];

        this.filterQuery = "";

        this.rowsOnPage = 10;

        this.sortBy = "email";

        this.sortOrder = "asc";

        this.options = {

            position: ["top", "right"],

            timeOut: 3000,

            lastOnBottom: true,

            clickToClose: true,

            animation: 'scale',

            showProgressBar: false,

            maxLength: 100

        };

        this.appoconfemail = false;

        this.appoconfsms = false;

        this.apponotemail = false;

        this.apponotsms = false;

        this.openingHours = new Array();

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.openinghourService.getOpeningHourse(this.currentUser.user.companyID).then(function (data) {

            _this.openingHours = data;

            //console.log("22222==>", this.openingHours);

        });

        if (localStorage.getItem('lang') == 'de') {

            this._langService.getDEJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        else {

            this._langService.getENJSON().then(function (data) {

                //console.log("12345678", data);  

                _this.language = data;

            });

        }

        this.source_calendar = new __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["a" /* LocalDataSource */]();

        this.source_service = new __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["a" /* LocalDataSource */]();

        this.companyService.getCompaniesByID(this.currentUser.user.companyID).then(function (data) {

            if (data) {

                _this.appoconfemailtemplate = data['appoconftemplate'];

                _this.apponotemailtemplate = data['apponottemplate'];

                _this.appoconfemail = data['appoconfemail'];

                _this.appoconfsms = data['appoconfsms'];

                _this.apponotemail = data['apponotemail'];

                _this.apponotsms = data['apponotsms'];

            }

        });

    }

    SettingsTables.prototype.readURL = function (calendar, fileInput) {

        //console.log(calendar);

        if (fileInput.target.files && fileInput.target.files[0]) {

            var reader = new FileReader();

            reader.onload = function (e) {

                $('#preview').attr('src', e.target.result);

            };

            reader.readAsDataURL(fileInput.target.files[0]);

            var THIS = this;

            reader.addEventListener("load", function () {

                calendar.image = this.result;

                THIS.calendarService.updateimage({

                    image: this.result

                }, calendar._id);

            }, false);

        }

    };

    ;

    SettingsTables.prototype.ngOnInit = function () {

        var _this = this;

        this.loading = true;

        this.calendarService.getCalendars(this.currentUser.user.companyID).then(function (data) {

            _this.calendars = data;

            if (localStorage.getItem('lang') === "en") {

                _this.settings_calendar = {

                    add: {

                        addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                        createButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmCreate: true,

                    },

                    edit: {

                        editButtonContent: '<i class="ion-edit"></i>',

                        saveButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmSave: true,

                    },

                    delete: {

                        deleteButtonContent: '<i class="ion-trash-a"></i>',

                        confirmDelete: true,

                    },

                    columns: {

                        description: {

                            title: 'Calendar Name',

                            type: 'string',

                            class: 'wide_calendar'

                        },

                        shortKey: {

                            title: 'shortKey',

                            type: 'string',

                            class: 'wide',

                        },

                        status: {

                            title: 'Status',

                            filter: {

                                type: 'checkbox',

                                config: {

                                    true: 'true',

                                    false: 'false',

                                    resetText: 'clear',

                                },

                            },

                            editor: {

                                type: 'checkbox',

                                config: {

                                    true: true,

                                    false: false,

                                },

                            },

                        }

                    }

                };

            }

            else {

                _this.settings_calendar = {

                    add: {

                        addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                        createButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmCreate: true,

                    },

                    edit: {

                        editButtonContent: '<i class="ion-edit"></i>',

                        saveButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmSave: true,

                    },

                    delete: {

                        deleteButtonContent: '<i class="ion-trash-a"></i>',

                        confirmDelete: true,

                    },

                    columns: {

                        description: {

                            title: 'Kalendar',

                            type: 'string',

                            class: 'wide_calendar',

                        },

                        shortKey: {

                            title: 'Kurztaste',

                            type: 'string',

                            class: 'wide',

                        },

                        status: {

                            title: 'Aktiv',

                            filter: {

                                type: 'checkbox',

                                config: {

                                    true: 'true',

                                    false: 'false',

                                    resetText: 'clear',

                                },

                            },

                            editor: {

                                type: 'checkbox',

                                config: {

                                    true: true,

                                    false: false,

                                },

                            },

                        }

                    }

                };

            }

            _this.source_calendar.load(_this.calendars);

        });

        this.servicesService.getServices(this.currentUser.user.companyID).then(function (data) {

            _this.services = data;

            if (localStorage.getItem('lang') === "en") {

                _this.settings_service = {

                    add: {

                        addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                        createButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmCreate: true,

                    },

                    edit: {

                        editButtonContent: '<i class="ion-edit"></i>',

                        saveButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmSave: true,

                    },

                    delete: {

                        deleteButtonContent: '<i class="ion-trash-a"></i>',

                        confirmDelete: true,

                    },

                    columns: {

                        description: {

                            title: 'Service Name',

                            type: 'string',

                            class: 'wide',

                        },

                        price: {

                            title: 'Price',

                            type: 'number',

                            class: 'wide',

                        },

                        duration: {

                            title: 'Duration',

                            type: 'number',

                            class: 'wide',

                        },

                        shortKey: {

                            title: 'shortKey',

                            type: 'string',

                            class: 'wide',

                        },

                        status: {

                            title: 'Status',

                            filter: {

                                type: 'checkbox',

                                config: {

                                    true: 'true',

                                    false: 'false',

                                    resetText: 'clear',

                                },

                            },

                            editor: {

                                type: 'checkbox',

                                config: {

                                    true: true,

                                    false: false,

                                },

                            },

                        },

                    }

                };

            }

            else {

                _this.settings_service = {

                    add: {

                        addButtonContent: '<i class="ion-ios-plus-outline"></i>',

                        createButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmCreate: true,

                    },

                    edit: {

                        editButtonContent: '<i class="ion-edit"></i>',

                        saveButtonContent: '<i class="ion-checkmark"></i>',

                        cancelButtonContent: '<i class="ion-close"></i>',

                        confirmSave: true,

                    },

                    delete: {

                        deleteButtonContent: '<i class="ion-trash-a"></i>',

                        confirmDelete: true,

                    },

                    columns: {

                        description: {

                            title: 'Services',

                            type: 'string',

                            class: 'wide'

                        },

                        price: {

                            title: 'Preis',

                            type: 'number',

                            class: 'wide'

                        },

                        duration: {

                            title: 'Dauer',

                            type: 'number',

                            class: 'wide'

                        },

                        shortKey: {

                            title: 'Kurztaste',

                            type: 'string',

                            class: 'wide',

                        },

                        status: {

                            title: 'Aktiv',

                            width: '20%',

                            filter: {

                                type: 'checkbox',

                                config: {

                                    true: 'true',

                                    false: 'false',

                                    resetText: 'clear',

                                },

                            },

                            editor: {

                                type: 'checkbox',

                                config: {

                                    true: true,

                                    false: false,

                                },

                            },

                        },

                    }

                };

            }

            _this.source_service.load(_this.services);

            _this.loading = false;

        });

    };

    SettingsTables.prototype.saveNotificationreference = function () {

        // this.appoconfemail!=this.appoconfemail;

        // this.appoconfsms!=this.appoconfsms;

        // this.apponotemail!=this.apponotemail;

        // this.apponotsms!=this.apponotsms;

        var _this = this;

        var args = {

            company_id: this.currentUser.user.companyID,

            appoconfemailtemplate: this.appoconfemailtemplate,

            apponotemailtemplate: this.apponotemailtemplate

        };

        this.companyService.saveNotificationPref(args).then(function (data) {

            _this.showSuccessToast(_this.language.message.success, "Notification preference saved");

        });

    };

    SettingsTables.prototype.removeCalendar = function (event) {

        if (window.confirm(this.language.message.deleteconfirm)) {

            var index = this.calendars.findIndex(function (obj) { return obj._id === event.data._id; });

            this.calendarService.delete(this.calendars[index]._id);

            if (index > -1) {

                this.calendars.splice(index, 1);

                this.source_calendar.load(this.calendars);

                this.showSuccessToast(this.language.message.success, this.language.message.calendarremoved);

            }

        }

    };

    SettingsTables.prototype.onEditConfirm_Calendar = function (event) {

        if (event.newData.companyName === "Other") {

            window.alert(this.language.message.selectcompanyname);

            return;

        }

        if (window.confirm(this.language.message.updateconfirm)) {

            this.saveCalendar(event.newData, event);

        }

        else {

            event.confirm.reject();

        }

    };

    SettingsTables.prototype.onCreateConfirm_Calendar = function (event) {

        if (window.confirm(this.language.message.createconfirm)) {

            this.saveCalendar(event.newData, event);

        }

        else {

            event.confirm.reject();

        }

    };

    SettingsTables.prototype.saveCalendar = function (newData, event) {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__["a" /* Calendar */]();

        saveData.description = newData.description;

        saveData.status = newData.status;

        saveData.companyID = this.currentUser.user.companyID;

        saveData.shortKey = newData.shortKey;

        var short_key_available = true;

        if (newData.shortKey.length > 0) {

            if (newData._id == undefined) {

                for (var k = 0; k < this.calendars.length; k++) {

                    if (this.calendars[k].shortKey.toLowerCase() == newData.shortKey.toLowerCase()) {

                        short_key_available = false;

                    }

                }

            }

            else {

                for (var k = 0; k < this.calendars.length; k++) {

                    if (this.calendars[k]._id != newData._id) {

                        if (this.calendars[k].shortKey.toLowerCase() == newData.shortKey.toLowerCase()) {

                            short_key_available = false;

                        }

                    }

                }

            }

        }

        if (short_key_available == false) {

            this.showErrorToast(this.language.message.sorry, this.language.message.shortcutkeyexists);

            event.confirm.reject();

        }

        else {

            event.confirm.resolve();

            if (newData._id == undefined) {

                this.calendarService.create(saveData).then(function (calendar) {

                    //console.log(calendar)

                    _this.calendars.shift();

                    _this.calendars.unshift(calendar);

                    _this.source_calendar.load(_this.calendars);

                });

                this.showSuccessToast(this.language.message.success, this.language.message.calendarcreated);

            }

            else {

                this.calendarService.update(saveData, newData._id).then(function (calendar) {

                    _this.showSuccessToast(_this.language.message.success, _this.language.message.calendarupdated);

                });

            }

        }

    };

    SettingsTables.prototype.removeService = function (event) {

        if (window.confirm(this.language.message.deleteconfirm)) {

            var index = this.services.findIndex(function (obj) { return obj._id === event.data._id; });

            this.servicesService.delete(this.services[index]._id);

            if (index > -1) {

                this.services.splice(index, 1);

                this.source_service.load(this.services);

                this.showSuccessToast(this.language.message.success, this.language.message.serviceremoved);

            }

        }

    };

    SettingsTables.prototype.onEditConfirm_Service = function (event) {

        if (event.newData.companyName === "Other") {

            window.alert(this.language.message.selectcompanyname);

            return;

        }

        if (window.confirm(this.language.message.updateconfirm)) {

            this.saveService(event.newData, event);

        }

        else {

            event.confirm.reject();

        }

    };

    SettingsTables.prototype.onCreateConfirm_Service = function (event) {

        if (!(event.newData.price > 0)) {

            this.showErrorToast(this.language.message.info, this.language.message.inputnumberprice);

            return;

        }

        if (!(event.newData.duration > 0)) {

            this.showErrorToast(this.language.message.info, this.language.message.inputnumberduration);

            return;

        }

        if (window.confirm(this.language.message.createconfirm)) {

            this.saveService(event.newData, event);

        }

        else {

            event.confirm.reject();

        }

    };

    SettingsTables.prototype.saveService = function (newData, event) {

        var _this = this;

        var saveData = new __WEBPACK_IMPORTED_MODULE_3__services_services_service__["a" /* Service */]();

        saveData.description = newData.description;

        saveData.price = newData.price;

        saveData.duration = newData.duration;

        saveData.status = newData.status;

        saveData.companyID = this.currentUser.user.companyID;

        saveData.shortKey = newData.shortKey;

        var short_key_available = true;

        if (newData.shortKey.length > 0) {

            if (newData._id == undefined) {

                for (var k = 0; k < this.services.length; k++) {

                    if (this.services[k].shortKey.toLowerCase() == newData.shortKey.toLowerCase()) {

                        short_key_available = false;

                    }

                }

            }

            else {

                for (var k = 0; k < this.services.length; k++) {

                    if (this.services[k]._id != newData._id) {

                        if (this.services[k].shortKey.toLowerCase() == newData.shortKey.toLowerCase()) {

                            short_key_available = false;

                        }

                    }

                }

            }

        }

        if (short_key_available == false) {

            this.showErrorToast(this.language.message.sorry, this.language.message.shortcutkeyexists);

            event.confirm.reject();

        }

        else {

            event.confirm.resolve();

            if (newData._id == undefined) {

                this.servicesService.create(saveData).then(function (service) {

                    //console.log(service)

                    _this.services.shift();

                    _this.services.unshift(service);

                    _this.source_service.load(_this.services);

                    _this.showSuccessToast(_this.language.message.success, _this.language.message.servicecreated);

                });

            }

            else {

                this.servicesService.update(saveData, newData._id).then(function (service) {

                    _this.showSuccessToast(_this.language.message.success, _this.language.message.serviceupdated);

                });

            }

        }

    };

    SettingsTables.prototype.saveOpeiningHours = function () {

        var _this = this;

        //console.log(this.openingHours);

        this.openinghourService.update(this.openingHours, this.currentUser.user.companyID).then(function (data) {

            _this.openingHours = data;

            _this.showSuccessToast(_this.language.message.success, _this.language.message.openinghoursupdated);

        });

    };

    SettingsTables.prototype.showSuccessToast = function (title, content) {

        this._service.success(title, content, this.options);

    };

    SettingsTables.prototype.showErrorToast = function (title, content) {

        this._service.info(title, content, this.options);

    };

    return SettingsTables;

}());

SettingsTables = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({

        selector: 'settings-tables',

        template: __webpack_require__("../../../../../src/app/pages/user/settings/settingsTables.html"),

        styles: [__webpack_require__("../../../../../src/app/pages/user/settings/settingsTables.scss")]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__["b" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_calendars_service__["b" /* CalendarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_services_service__["b" /* ServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_services_service__["b" /* ServicesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_openinghours_service__["a" /* OpeningHoursService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_openinghours_service__["a" /* OpeningHoursService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_language_service__["a" /* LanguageService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_companies_service__["a" /* CompaniesService */]) === "function" && _g || Object])

], SettingsTables);



var _a, _b, _c, _d, _e, _f, _g;

//# sourceMappingURL=settingsTables.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settingsTables.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n<div *ngIf=\"loading == true\" class=\"loader\"></div>\r\n<div class=\"widgets text-center\" *ngIf=\"loading == false\">\r\n    <div class=\"row\">\r\n        <div class = 'col-md-5'>\r\n            <div class = 'col-md-12'>\r\n                <ba-card title=\"{{'general.table.calendartable' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                    <div class=\"row\">\r\n                        <ng2-smart-table [settings]=\"settings_calendar\" [source]=\"source_calendar\" (deleteConfirm)=\"removeCalendar($event)\" \r\n                        (editConfirm)=\"onEditConfirm_Calendar($event)\" (createConfirm)=\"onCreateConfirm_Calendar($event)\" ></ng2-smart-table>\r\n                    </div>\r\n                </ba-card>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <ba-card title=\"{{'appointment.userimage' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                    <div class=\"row\">\r\n                        <table class=\"table\">\r\n                            <tr>\r\n                                <th>Name</th>\r\n                                <th>Image</th>\r\n                                <th>Action</th>\r\n                            </tr>\r\n                            <tr *ngFor=\"let clnt of calendars\">\r\n                                <td>{{clnt.description}}</td>\r\n                                <td>\r\n                                    <img [src]=\"clnt.image\" *ngIf=\"clnt.image\" class=\"img\" />\r\n                                </td>\r\n                                <td>\r\n                                    <input type=\"file\" class=\"file\" (change)=\"readURL(clnt, $event)\" />\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n            </ba-card>\r\n            </div>\r\n            <div class='col-md-12'>\r\n                <ba-card title=\"{{'general.table.notificationsettings' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                      <div class=\"panel panel-default\">\r\n                        <table class=\"table\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td colspan=\"2\"><strong>{{'notifications.confemailtxt' | translate}}</strong></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>{{'notifications.notifications1' | translate}}</td>\r\n                                    <td>\r\n                                        {{appoconfemail ? 'Active' : 'Inactive'}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>{{'notifications.notifications2' | translate}}</td>\r\n                                    <td>\r\n                                        {{appoconfsms ? 'Active' : 'Inactive'}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td colspan=\"2\"><strong>{{'notifications.rememailtxt' | translate}}</strong></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>{{'notifications.notifications3' | translate}}</td>\r\n                                    <td>\r\n                                        {{apponotemail ? 'Active' : 'Inactive'}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>{{'notifications.notifications4' | translate}}</td>\r\n                                    <td>\r\n                                        {{apponotsms ? 'Active' : 'Inactive'}}\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <td colspan=\"2\">\r\n                                    \r\n                                </td>\r\n                            </tfoot>\r\n                        </table>\r\n                        <div class=\"form\">\r\n                            <div class=\"form-group\">\r\n                                <label>New Appointment Notification Template</label>\r\n                                <textarea type=\"text\" [(ngModel)]=\"appoconfemailtemplate\" class=\"form-control\" ></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Appointment Reminder Template</label>\r\n                                <textarea type=\"text\" [(ngModel)]=\"apponotemailtemplate\" class=\"form-control\" ></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button class=\"btn btn-primary\" value=\"Save\" (click)=\"saveNotificationreference()\">\r\n                                    Save\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <table class=\"table\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>{{'notifications.notifications1' | translate}}</td>\r\n                                    <td>\r\n                                        <input type=\"checkbox\" [checked]=\"appoconfemail\" (change)=\"appoconfemail=!appoconfemail\" />\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>{{'notifications.notifications2' | translate}}</td>\r\n                                    <td>\r\n                                        <input type=\"checkbox\" [checked]=\"appoconfsms\" (change)=\"appoconfsms=!appoconfsms\" />\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>{{'notifications.notifications3' | translate}}</td>\r\n                                    <td>\r\n                                        <input type=\"checkbox\" [checked]=\"apponotemail\" (change)=\"apponotemail=!apponotemail\" />\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>{{'notifications.notifications4' | translate}}</td>\r\n                                    <td>\r\n                                        <input type=\"checkbox\" [checked]=\"apponotsms\" (change)=\"apponotsms=!apponotsms\" />\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <td colspan=\"2\">\r\n                                    \r\n                                </td>\r\n                            </tfoot>\r\n                        </table> -->\r\n                    </div>\r\n                </ba-card>\r\n        </div>\r\n    </div>\r\n        <div class = 'col-md-7'>\r\n              <!--<div class=\"panel panel-default\">\r\n                <table class=\"table table-striped\" [mfData]=\"services | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 10%\">\r\n                                <mfDefaultSorter by=\"name\">ID</mfDefaultSorter>\r\n                            </th>\r\n                            <th style=\"width: 30%\">\r\n                                <mfDefaultSorter by=\"name\">Description</mfDefaultSorter>\r\n                            </th>\r\n                            <th style=\"width: 10%\">\r\n                                <mfDefaultSorter by=\"name\">Price</mfDefaultSorter>\r\n                            </th>\r\n                            <th style=\"width: 10%\">\r\n                                <mfDefaultSorter by=\"name\">Duration (min)</mfDefaultSorter>\r\n                            </th>\r\n                            <th style=\"width: 10%\">\r\n                                <mfDefaultSorter by=\"name\">Status</mfDefaultSorter>\r\n                            </th>\r\n                            <th style=\"width: 20%\">\r\n                                <mfDefaultSorter by=\"name\">Action</mfDefaultSorter>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of services; let i = index\">\r\n                            \r\n                            <td>{{i+1}}</td>\r\n                            <td>{{item.description}}</td>\r\n                            <td>{{item.price}}</td>\r\n                            <td>{{item.duration}}</td>\r\n                            <td *ngIf=\"item.status\" >Active</td>\r\n                            <td *ngIf=\"!item.status\">DeActive</td>\r\n                            <td class = \"text-center\">\r\n                                <button (click)=\"editServices(item._id)\" class=\"btn btn-success btn-icon\"><i class=\"icon ion-edit\"></i></button>\r\n                                <button (click)=\"deleteServices(item._id)\" class=\"btn btn-danger btn-icon\"><i class=\"ion-trash-a\"></i></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"6\">\r\n                                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n                <button type=\"button\" class=\"btn btn-primary btn-with-icon\" style=\"margin-left:75%;margin-bottom:10px;\" (click)=\"addServices()\"><i class=\"ion-person-add\"></i>Add Service</button>\r\n            </div>-->\r\n\r\n            <div class=\"widgets\">\r\n                <div class=\"row\">\r\n                    <ba-card title=\"{{'general.table.servicetable' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                            <div class=\"row\">\r\n                                <ng2-smart-table [settings]=\"settings_service\" [source]=\"source_service\" (deleteConfirm)=\"removeService($event)\" \r\n                                (editConfirm)=\"onEditConfirm_Service($event)\" (createConfirm)=\"onCreateConfirm_Service($event)\" ></ng2-smart-table>\r\n                            </div>\r\n                    </ba-card>\r\n                </div>\r\n            </div>\r\n            <div class = 'col-md-12 pull-left' >\r\n                <ba-card title=\"{{'general.table.openinghourstable' | translate}}\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n                      <div class=\"panel panel-default\">\r\n\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                   \r\n                                    <th style=\"width: 14%\" translate>\r\n                                        {{'other.day'}}\r\n                                    </th>\r\n                                    <th style=\"width: 14%\" translate>\r\n                                       {{'other.from'}}\r\n                                    </th>\r\n                                    <th style=\"width: 14%\" translate>\r\n                                         {{'other.to'}}\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr >\r\n                                    <td translate>{{'date.mon'}}</td>\r\n                                        <td><input type=\"time\" class=\"form-control input-sm\" [value]=\"this.openingHours.monfrom\" (input)=\"this.openingHours.monfrom = $event.target.value\" /></td>\r\n                                        <td><input type=\"time\" class=\"form-control input-sm\" [value]=\"openingHours.monto\" (input)=\"this.openingHours.monto = $event.target.value\" /></td>\r\n                                    </tr>\r\n                                <tr >\r\n                                    <td translate>{{'date.tue'}}</td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.tuefrom (input)=\"this.openingHours.tuefrom = $event.target.value\" /></td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.tueto (input)=\"this.openingHours.tueto = $event.target.value\" /></td>\r\n                                </tr>\r\n                                <tr >\r\n                                    <td translate>{{'date.wed'}}</td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.wedfrom (input)=\"this.openingHours.wedfrom = $event.target.value\" /></td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.wedto (input)=\"this.openingHours.wedto = $event.target.value\" /></td>\r\n                                </tr>\r\n                                <tr >\r\n                                    <td translate>{{'date.thr'}}</td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.thufrom (input)=\"this.openingHours.thufrom = $event.target.value\" /></td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.thuto (input)=\"this.openingHours.thuto = $event.target.value\" /></td>\r\n                                </tr>\r\n                                <tr >\r\n                                    <td translate>{{'date.frd'}}</td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.frifrom (input)=\"this.openingHours.frifrom = $event.target.value\" /></td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.frito (input)=\"this.openingHours.frito = $event.target.value\" /></td>\r\n                                </tr>\r\n                                <tr >\r\n                                    <td translate>{{'date.sat'}}</td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.satfrom (input)=\"this.openingHours.satfrom = $event.target.value\" /></td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.satto (input)=\"this.openingHours.satto = $event.target.value\" /></td>\r\n                                </tr>\r\n                                <tr >\r\n                                    <td translate>{{'date.sun'}}</td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.sunfrom (input)=\"this.openingHours.sunfrom = $event.target.value\" /></td>\r\n                                    <td><input type=\"time\" class=\"form-control input-sm\" [value]=openingHours.sunto (input)=\"this.openingHours.sunto = $event.target.value\" /></td>\r\n                                </tr>\r\n                            </tbody>\r\n                            \r\n                        </table>\r\n                        \r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-with-icon pull-right\" style=\"margin-top: 20px\"  (click)=\"saveOpeiningHours()\" translate><i class=\"ion-save\"></i>{{'other.save'}}</button>\r\n                </ba-card>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/user/settings/settingsTables.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table img {\n  width: 60px; }\n\ntable .file {\n  line-height: 16px; }\n\n:host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n\n:host /deep/ .widgets th {\n  border-bottom: none;\n  text-align: center; }\n\n.time-format {\n  content: \"\";\n  background: #FFF;\n  height: 20px;\n  position: absolute;\n  margin: 0 -10px; }\n\n:host /deep/ .widgets .smart-table-container {\n  width: 100%; }\n\n:host /deep/ ng2-smart-table {\n  color: #ffffff; }\n  :host /deep/ ng2-smart-table th, :host /deep/ ng2-smart-table td {\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  :host /deep/ ng2-smart-table table tr td {\n    padding: 0 8px; }\n  :host /deep/ ng2-smart-table input {\n    line-height: 1.5 !important; }\n  :host /deep/ ng2-smart-table ng2-smart-table-cell {\n    color: #ffffff;\n    line-height: 35px; }\n  :host /deep/ ng2-smart-table tbody tr {\n    color: #ffffff; }\n  :host /deep/ ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  :host /deep/ ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #ffffff;\n    font-weight: 500; }\n    :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 500 !important; }\n      :host /deep/ ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #ffffff !important; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    :host /deep/ ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  :host /deep/ ng2-smart-table .ng2-smart-actions-title-add {\n    text-align: center; }\n  :host /deep/ ng2-smart-table a.ng2-smart-action, :host /deep/ ng2-smart-table .ng2-smart-title {\n    font-size: 14px !important;\n    color: #ffffff;\n    padding: 0 5px;\n    display: inline-block; }\n    :host /deep/ ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add, :host /deep/ ng2-smart-table .ng2-smart-title.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n  :host /deep/ ng2-smart-table nav.ng2-smart-pagination-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n:host /deep/ .wide {\n  width: 30%; }\n\n:host /deep/ .wide_calendar {\n  width: 80%; }\n\n.loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 70px;\n  height: 50px;\n  margin: -75px 0 0 -75px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppointmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/services/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var Appointment = (function () {

    function Appointment() {

    }

    return Appointment;

}());



var AppointmentService = (function () {

    function AppointmentService(http) {

        this.http = http;

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        this.calendarUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + '/appointment'; // URL to web api

        this.body = {};

    }

    // getAppointments(id: string, calendarID: string, serviceID): Promise<Appointment[]> {

    //   let url = '';

    //   if (calendarID === undefined && serviceID === undefined) {

    //     url = `${this.calendarUrl}/${id}`;

    //   } else if (calendarID === undefined && serviceID !== undefined) {

    //     url = `${this.calendarUrl}/${id}/${serviceID}`;

    //   } else if ( calendarID !== undefined && serviceID === undefined ) {

    //     url = `${this.calendarUrl}/${id}/${calendarID}`;

    //   } else if ( calendarID !== undefined && serviceID !== undefined ) {

    //     url = `${this.calendarUrl}/${id}/${calendarID}/${serviceID}`;

    //   }

    //   return this.http.get(url)

    //              .toPromise()

    //              .then(response => response.json() as Appointment[])

    //              .catch(this.handleError);

    // }

    AppointmentService.prototype.getAppointments = function (id) {

        // let url = '';

        // if (calendarID === undefined && serviceID === undefined) {

        var url = this.calendarUrl + "/" + id;

        // } else if (calendarID === undefined && serviceID !== undefined) {

        //   calendarID = "abc";

        //   url = `${this.calendarUrl}/${id}/${calendarID}/${serviceID}`;

        // } else if ( calendarID !== undefined && serviceID === undefined ) {

        //   serviceID = "abc";

        //   url = `${this.calendarUrl}/${id}/${calendarID}/${serviceID}`;

        // } else if ( calendarID !== undefined && serviceID !== undefined ) {

        //   url = `${this.calendarUrl}/${id}/${calendarID}/${serviceID}`;

        // }

        // //console.log(url);

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    AppointmentService.prototype.delete = function (id, companyID) {

        var url = this.calendarUrl + "/" + id + "/" + companyID;

        return this.http.delete(url, { headers: this.headers })

            .toPromise()

            .then(function () { return function (res) { return res.json(); }; })

            .catch(this.handleError);

    };

    AppointmentService.prototype.create = function (object) {

        return this.http

            .post(this.calendarUrl, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    AppointmentService.prototype.update = function (object, id, companyID) {

        var url = this.calendarUrl + "/" + id + "/" + companyID;

        return this.http

            .put(url, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function () { return object; })

            .catch(this.handleError);

    };

    AppointmentService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return AppointmentService;

}());

AppointmentService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], AppointmentService);



var _a;

//# sourceMappingURL=appointment.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var AuthGuard = (function () {

    function AuthGuard(atvRoute, router) {

        this.atvRoute = atvRoute;

        this.router = router;

    }

    AuthGuard.prototype.canActivate = function (route, state) {

        var roles = route.data["roles"];

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        //console.log(this.currentUser)

        if (this.currentUser === null) {

            this.router.navigate(['login']);

        }

        else {

            if (roles === undefined) {

                return true;

            }

            if (this.currentUser.user.role === roles[0]) {

                return true;

            }

            else {

                return false;

            }

        }

        return true;

    };

    AuthGuard.prototype.canActivateChild = function () {

        //console.log('checking child route access');

        return true;

    };

    return AuthGuard;

}());

AuthGuard = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])

], AuthGuard);



var _a, _b;

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/calendars.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/services/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var Calendar = (function () {

    function Calendar() {

    }

    return Calendar;

}());



var CalendarService = (function () {

    function CalendarService(http) {

        this.http = http;

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        this.calendarUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + '/calendars'; // URL to web api

        this.body = {};

    }

    CalendarService.prototype.getCalendars = function (id) {

        var url = this.calendarUrl + "/" + id;

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    CalendarService.prototype.getStatusCalendars = function (id) {

        var url = this.calendarUrl + "/" + id + "/status";

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    CalendarService.prototype.updateimage = function (object, id) {

        var url = this.calendarUrl + "/image/update/" + id;

        return this.http

            .put(url, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function () { return object; })

            .catch(this.handleError);

    };

    CalendarService.prototype.delete = function (id) {

        var url = this.calendarUrl + "/" + id;

        return this.http.delete(url, { headers: this.headers })

            .toPromise()

            .then(function () { return function (res) { return res.json(); }; })

            .catch(this.handleError);

    };

    CalendarService.prototype.create = function (object) {

        return this.http

            .post(this.calendarUrl, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    CalendarService.prototype.update = function (object, id) {

        var url = this.calendarUrl + "/" + id;

        return this.http

            .put(url, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function () { return object; })

            .catch(this.handleError);

    };

    CalendarService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return CalendarService;

}());

CalendarService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], CalendarService);



var _a;

//# sourceMappingURL=calendars.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/services/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var Category = (function () {

    function Category() {

    }

    return Category;

}());



var CategoriesService = (function () {

    function CategoriesService(http) {

        this.http = http;

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        this.usersUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + '/categories'; // URL to web api

        this.body = {};

    }

    CategoriesService.prototype.getCategories = function () {

        return this.http.get(this.usersUrl, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    CategoriesService.prototype.getStatusCategories = function () {

        var url = this.usersUrl + "/status";

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    CategoriesService.prototype.delete = function (id) {

        var url = this.usersUrl + "/" + id;

        return this.http.delete(url, { headers: this.headers })

            .toPromise()

            .then(function () { return null; })

            .catch(this.handleError);

    };

    CategoriesService.prototype.create = function (object) {

        return this.http

            .post(this.usersUrl, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    CategoriesService.prototype.update = function (object, id) {

        var url = this.usersUrl + "/" + id;

        return this.http

            .put(url, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function () { return object; })

            .catch(this.handleError);

    };

    CategoriesService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return CategoriesService;

}());

CategoriesService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], CategoriesService);



var _a;

//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/clients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClientsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/services/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var Client = (function () {

    function Client() {

    }

    return Client;

}());



var ClientsService = (function () {

    function ClientsService(http) {

        // //console.log("2222222", JSON.parse(localStorage.getItem('currentUser')).token);

        this.http = http;

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        this.usersUrl = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].apiUrl + '/clients'; // URL to web api

        this.body = {};

    }

    ClientsService.prototype.getClients = function (id) {

        var url = this.usersUrl + "/" + id;

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    ClientsService.prototype.getAllClients = function () {

        return this.http.get(this.usersUrl, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    ClientsService.prototype.getClient = function (id) {

        var url = this.usersUrl + "/" + id;

        return this.http.get(url)

            .toPromise()

            .then(function (response) { return response.json().data; })

            .catch(this.handleError);

    };

    ClientsService.prototype.delete = function (id) {

        var url = this.usersUrl + "/" + id;

        return this.http.delete(url, { headers: this.headers })

            .toPromise()

            .then(function () { return null; })

            .catch(this.handleError);

    };

    ClientsService.prototype.create = function (Object) {

        return this.http

            .post(this.usersUrl, JSON.stringify(Object), { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    ClientsService.prototype.update = function (user, id) {

        var url = this.usersUrl + "/" + id;

        return this.http

            .put(url, JSON.stringify(user), { headers: this.headers })

            .toPromise()

            .then(function () { return user; })

            .catch(this.handleError);

    };

    ClientsService.prototype.removeClientByCompany = function (companyID, id) {

        var url = this.usersUrl + "/" + id + "/" + companyID;

        return this.http

            .put(url, '', { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    ClientsService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return ClientsService;

}());

ClientsService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], ClientsService);



var _a;

//# sourceMappingURL=clients.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/companies.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/services/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var Company = (function () {

    function Company() {

    }

    return Company;

}());



var CompaniesService = (function () {

    function CompaniesService(http) {

        this.http = http;

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        this.usersUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + '/companies'; // URL to web api

        this.body = {};

    }

    CompaniesService.prototype.getCompanies = function () {

        return this.http.get(this.usersUrl, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    CompaniesService.prototype.getCompany = function (email, password) {

        var url = "" + this.usersUrl;

        this.body = { 'email': email, 'password': password };

        return this.http.post(url, this.body, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    CompaniesService.prototype.getCompaniesByID = function (id) {

        var url = this.usersUrl + "/" + id;

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    CompaniesService.prototype.delete = function (id) {

        var url = this.usersUrl + "/" + id;

        return this.http.delete(url, { headers: this.headers })

            .toPromise()

            .then(function () { return function (res) { return res.json(); }; })

            .catch(this.handleError);

    };

    CompaniesService.prototype.create = function (object) {

        return this.http

            .post(this.usersUrl, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    CompaniesService.prototype.saveNotificationPref = function (object) {

        var url = this.usersUrl + "/savenotificationpref";

        return this.http

            .post(url, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    CompaniesService.prototype.update = function (object, id) {

        var url = this.usersUrl + "/" + id;

        return this.http

            .put(url, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function () { return object; })

            .catch(this.handleError);

    };

    CompaniesService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return CompaniesService;

}());

CompaniesService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], CompaniesService);



var _a;

//# sourceMappingURL=companies.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {

    function Config() {

    }

    return Config;

}());



//static apiUrl = "http://localhost:3000/api";

Config.apiUrl = "http://angular.ourdemoapp.com:3000/api";

Config.apptoken = null;

Config.approle = "";

Config.apptokenInfo = "apptoken1234";

Config.companyID = "";

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/services/language.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var LanguageService = (function () {

    function LanguageService(http) {

        this.http = http;

    }

    LanguageService.prototype.getDEJSON = function () {

        return this.http.get("../assets/i18n/DE/de.json")

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    LanguageService.prototype.getENJSON = function () {

        return this.http.get("../assets/i18n/DE/en.json")

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    LanguageService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return LanguageService;

}());

LanguageService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], LanguageService);



var _a;

//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/openinghours.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OpeningHours */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningHoursService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/services/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var OpeningHours = (function () {

    function OpeningHours() {

    }

    return OpeningHours;

}());



var OpeningHoursService = (function () {

    function OpeningHoursService(http) {

        this.http = http;

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        this.openinghoursUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + '/openinghours'; // URL to web api

        this.body = {};

    }

    OpeningHoursService.prototype.getOpeningHourse = function (id) {

        var url = this.openinghoursUrl + "/" + id;

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    // delete(id: number): Promise<void> {

    //   const url = `${this.serviceUrl}/${id}`;

    //   return this.http.delete(url, { headers: this.headers })

    //     .toPromise()

    //     .then(() => res => res.json() as OpeningHours)

    //     .catch(this.handleError);

    // }

    // create(object: OpeningHours): Promise<OpeningHours> {

    //   return this.http

    //     .post(this.serviceUrl, JSON.stringify(object), { headers: this.headers })

    //     .toPromise()

    //     .then(res => res.json() as OpeningHours)

    //     .catch(this.handleError);

    // }

    OpeningHoursService.prototype.update = function (object, id) {

        var url = this.openinghoursUrl + "/" + id;

        return this.http

            .put(url, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function () { return object; })

            .catch(this.handleError);

    };

    OpeningHoursService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return OpeningHoursService;

}());

OpeningHoursService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], OpeningHoursService);



var _a;

//# sourceMappingURL=openinghours.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/services/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var Service = (function () {

    function Service() {

    }

    return Service;

}());



var ServicesService = (function () {

    function ServicesService(http) {

        this.http = http;

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        this.serviceUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + '/services'; // URL to web api

        this.body = {};

    }

    ServicesService.prototype.getServices = function (id) {

        var url = this.serviceUrl + "/" + id;

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    ServicesService.prototype.getStatusServices = function (id) {

        var url = this.serviceUrl + "/" + id + "/status";

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    ServicesService.prototype.delete = function (id) {

        var url = this.serviceUrl + "/" + id;

        return this.http.delete(url, { headers: this.headers })

            .toPromise()

            .then(function () { return function (res) { return res.json(); }; })

            .catch(this.handleError);

    };

    ServicesService.prototype.create = function (object) {

        return this.http

            .post(this.serviceUrl, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    ServicesService.prototype.update = function (object, id) {

        var url = this.serviceUrl + "/" + id;

        return this.http

            .put(url, JSON.stringify(object), { headers: this.headers })

            .toPromise()

            .then(function () { return object; })

            .catch(this.handleError);

    };

    ServicesService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return ServicesService;

}());

ServicesService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], ServicesService);



var _a;

//# sourceMappingURL=services.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/services/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var User = (function () {

    function User() {

    }

    return User;

}());



var UsersService = (function () {

    function UsersService(http) {

        this.http = http;

        this.usersUrl = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].apiUrl + '/user'; // URL to web api

        this.body = {};

    }

    UsersService.prototype.getUsers = function () {

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        return this.http.get(this.usersUrl, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json().data; })

            .catch(this.handleError);

    };

    UsersService.prototype.login = function (email, password) {

        var url = this.usersUrl + "/login";

        //console.log(url);

        this.body = { 'email': email, 'password': password };

        return this.http.post(url, this.body).toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    UsersService.prototype.forgot = function (email) {

        //console.log(email);

        var url = this.usersUrl + "/forgot";

        this.body = { 'email': email };

        return this.http.post(url, this.body).toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    UsersService.prototype.forgotreset = function (email, password, code) {

        //console.log(email);

        var url = this.usersUrl + "/forgot/" + code + "/reset";

        this.body = { 'email': email, 'password': password };

        return this.http.post(url, this.body).toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    UsersService.prototype.changepassword = function (currentpassword, password) {

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        var url = this.usersUrl + "/changepassword";

        this.body = { 'id': JSON.parse(localStorage.getItem('currentUser')).user._id, 'currentpassword': currentpassword, 'password': password };

        return this.http.post(url, this.body, { headers: this.headers }).toPromise()

            .then(function (response) { return response.json(); })

            .catch(this.handleError);

    };

    UsersService.prototype.getAdminUsers = function () {

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        var url = this.usersUrl + "/adminusers";

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json().data; })

            .catch(this.handleError);

    };

    UsersService.prototype.getUser = function (id) {

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        var url = this.usersUrl + "/" + id;

        return this.http.get(url, { headers: this.headers })

            .toPromise()

            .then(function (response) { return response.json().data; })

            .catch(this.handleError);

    };

    UsersService.prototype.delete = function (id) {

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        var url = this.usersUrl + "/" + id;

        return this.http.delete(url, { headers: this.headers })

            .toPromise()

            .then(function () { return null; })

            .catch(this.handleError);

    };

    UsersService.prototype.create = function (obj) {

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        //console.log(obj);

        return this.http

            .post(this.usersUrl, JSON.stringify(obj), { headers: this.headers })

            .toPromise()

            .then(function (res) { return res.json(); })

            .catch(this.handleError);

    };

    UsersService.prototype.update = function (user, id) {

        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',

            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });

        var url = this.usersUrl + "/" + id;

        //console.log(user, id);

        return this.http

            .put(url, JSON.stringify(user), { headers: this.headers })

            .toPromise()

            .then(function () { return user; })

            .catch(this.handleError);

    };

    UsersService.prototype.handleError = function (error) {

        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);

    };

    return UsersService;

}());

UsersService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])

], UsersService);



var _a;

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/baAmChart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAmChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3__ = __webpack_require__("../../../../amcharts3/amcharts/amcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_amcharts3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js__ = __webpack_require__("../../../../amcharts3/amcharts/plugins/responsive/responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js__ = __webpack_require__("../../../../amcharts3/amcharts/serial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ammap3__ = __webpack_require__("../../../../ammap3/ammap/ammap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ammap3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ammap3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow__ = __webpack_require__("../../../../ammap3/ammap/maps/js/worldLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__ = __webpack_require__("../../../../../src/app/theme/components/baAmChart/baAmChartTheme.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};

















var BaAmChart = (function () {

    function BaAmChart(_baAmChartThemeService) {

        this._baAmChartThemeService = _baAmChartThemeService;

        this.onChartReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this._loadChartsLib();

    }

    BaAmChart.prototype.ngOnInit = function () {

        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();

    };

    BaAmChart.prototype.ngAfterViewInit = function () {

        var chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);

        this.onChartReady.emit(chart);

    };

    BaAmChart.prototype._loadChartsLib = function () {

        __WEBPACK_IMPORTED_MODULE_1__theme_services__["c" /* BaThemePreloader */].registerLoader(new Promise(function (resolve, reject) {

            var amChartsReadyMsg = 'AmCharts ready';

            if (AmCharts.isReady) {

                resolve(amChartsReadyMsg);

            }

            else {

                AmCharts.ready(function () {

                    resolve(amChartsReadyMsg);

                });

            }

        }));

    };

    return BaAmChart;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaAmChart.prototype, "baAmChartConfiguration", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaAmChart.prototype, "baAmChartClass", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaAmChart.prototype, "onChartReady", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('baAmChart'),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)

], BaAmChart.prototype, "_selector", void 0);

BaAmChart = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-am-chart',

        template: __webpack_require__("../../../../../src/app/theme/components/baAmChart/baAmChart.html"),

        styles: [__webpack_require__("../../../../../src/app/theme/components/baAmChart/baAmChart.scss")],

        providers: [__WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */]],

    }),

    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */]) === "function" && _b || Object])

], BaAmChart);



var _a, _b;

//# sourceMappingURL=baAmChart.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/baAmChart.html":
/***/ (function(module, exports) {

module.exports = "<div #baAmChart class=\"ba-am-chart {{baAmChartClass || ''}}\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/baAmChart.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ammapAlert {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-family: verdana,helvetica,arial,sans-serif;\n  font-size: 12px;\n  color: #CC0000; }\n\n.ammapDescriptionWindow {\n  font-size: 11px;\n  font-family: verdana,helvetica,arial,sans-serif;\n  background-color: #FFFFFF;\n  border-style: solid;\n  border-color: #DADADA;\n  border-width: 1px;\n  color: #000000;\n  padding: 8px;\n  box-sizing: border-box; }\n\n.ammapDescriptionTitle {\n  font-size: 12px;\n  font-weight: bold;\n  font-family: verdana,helvetica,arial,sans-serif;\n  padding-bottom: 5px; }\n\n.ammapObjectList ul {\n  padding-left: 20px;\n  list-style: square outside;\n  color: #999999;\n  font-family: verdana,helvetica,arial,sans-serif;\n  font-size: 12px; }\n\n.ammapObjectList ul ul {\n  padding-left: 14px; }\n\n.ammapObjectList a {\n  color: #000000; }\n\n.ammapObjectList a {\n  color: #000000;\n  text-decoration: none;\n  display: block;\n  padding: 2px; }\n\n.ammapObjectList a:hover {\n  color: #CC0000;\n  text-decoration: none;\n  background: #FFFFFF;\n  cursor: pointer;\n  display: block; }\n\n.ammapDescriptionText {\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/baAmChartTheme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAmChartThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaAmChartThemeService = (function () {

    function BaAmChartThemeService(_baConfig) {

        this._baConfig = _baConfig;

    }

    BaAmChartThemeService.prototype.getTheme = function () {

        var layoutColors = this._baConfig.get().colors;

        return {

            themeName: "blur",

            AmChart: {

                color: layoutColors.defaultText,

                backgroundColor: "#FFFFFF"

            },

            AmCoordinateChart: {

                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]

            },

            AmStockChart: {

                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]

            },

            AmSlicedChart: {

                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],

                labelTickColor: "#FFFFFF",

                labelTickAlpha: 0.3

            },

            AmRectangularChart: {

                zoomOutButtonColor: '#FFFFFF',

                zoomOutButtonRollOverAlpha: 0.15,

                zoomOutButtonImage: "lens.png"

            },

            AxisBase: {

                axisColor: "#FFFFFF",

                axisAlpha: 0.3,

                gridAlpha: 0.1,

                gridColor: "#FFFFFF"

            },

            ChartScrollbar: {

                backgroundColor: "#FFFFFF",

                backgroundAlpha: 0.12,

                graphFillAlpha: 0.5,

                graphLineAlpha: 0,

                selectedBackgroundColor: "#FFFFFF",

                selectedBackgroundAlpha: 0.4,

                gridAlpha: 0.15

            },

            ChartCursor: {

                cursorColor: layoutColors.primary,

                color: "#FFFFFF",

                cursorAlpha: 0.5

            },

            AmLegend: {

                color: "#FFFFFF"

            },

            AmGraph: {

                lineAlpha: 0.9

            },

            GaugeArrow: {

                color: "#FFFFFF",

                alpha: 0.8,

                nailAlpha: 0,

                innerRadius: "40%",

                nailRadius: 15,

                startWidth: 15,

                borderAlpha: 0.8,

                nailBorderAlpha: 0

            },

            GaugeAxis: {

                tickColor: "#FFFFFF",

                tickAlpha: 1,

                tickLength: 15,

                minorTickLength: 8,

                axisThickness: 3,

                axisColor: '#FFFFFF',

                axisAlpha: 1,

                bandAlpha: 0.8

            },

            TrendLine: {

                lineColor: layoutColors.danger,

                lineAlpha: 0.8

            },

            // ammap

            AreasSettings: {

                alpha: 0.8,

                color: layoutColors.info,

                colorSolid: layoutColors.primaryDark,

                unlistedAreasAlpha: 0.4,

                unlistedAreasColor: "#FFFFFF",

                outlineColor: "#FFFFFF",

                outlineAlpha: 0.5,

                outlineThickness: 0.5,

                rollOverColor: layoutColors.primary,

                rollOverOutlineColor: "#FFFFFF",

                selectedOutlineColor: "#FFFFFF",

                selectedColor: "#f15135",

                unlistedAreasOutlineColor: "#FFFFFF",

                unlistedAreasOutlineAlpha: 0.5

            },

            LinesSettings: {

                color: "#FFFFFF",

                alpha: 0.8

            },

            ImagesSettings: {

                alpha: 0.8,

                labelColor: "#FFFFFF",

                color: "#FFFFFF",

                labelRollOverColor: layoutColors.primaryDark

            },

            ZoomControl: {

                buttonFillAlpha: 0.8,

                buttonIconColor: layoutColors.default,

                buttonRollOverColor: layoutColors.danger,

                buttonFillColor: layoutColors.primaryDark,

                buttonBorderColor: layoutColors.primaryDark,

                buttonBorderAlpha: 0,

                buttonCornerRadius: 0,

                gridColor: "#FFFFFF",

                gridBackgroundColor: "#FFFFFF",

                buttonIconAlpha: 0.6,

                gridAlpha: 0.6,

                buttonSize: 20

            },

            SmallMap: {

                mapColor: "#000000",

                rectangleColor: layoutColors.danger,

                backgroundColor: "#FFFFFF",

                backgroundAlpha: 0.7,

                borderThickness: 1,

                borderAlpha: 0.8

            },

            // the defaults below are set using CSS syntax, you can use any existing css property

            // if you don't use Stock chart, you can delete lines below

            PeriodSelector: {

                color: "#FFFFFF"

            },

            PeriodButton: {

                color: "#FFFFFF",

                background: "transparent",

                opacity: 0.7,

                border: "1px solid rgba(0, 0, 0, .3)",

                MozBorderRadius: "5px",

                borderRadius: "5px",

                margin: "1px",

                outline: "none",

                boxSizing: "border-box"

            },

            PeriodButtonSelected: {

                color: "#FFFFFF",

                backgroundColor: "#b9cdf5",

                border: "1px solid rgba(0, 0, 0, .3)",

                MozBorderRadius: "5px",

                borderRadius: "5px",

                margin: "1px",

                outline: "none",

                opacity: 1,

                boxSizing: "border-box"

            },

            PeriodInputField: {

                color: "#FFFFFF",

                background: "transparent",

                border: "1px solid rgba(0, 0, 0, .3)",

                outline: "none"

            },

            DataSetSelector: {

                color: "#FFFFFF",

                selectedBackgroundColor: "#b9cdf5",

                rollOverBackgroundColor: "#a8b0e4"

            },

            DataSetCompareList: {

                color: "#FFFFFF",

                lineHeight: "100%",

                boxSizing: "initial",

                webkitBoxSizing: "initial",

                border: "1px solid rgba(0, 0, 0, .3)"

            },

            DataSetSelect: {

                border: "1px solid rgba(0, 0, 0, .3)",

                outline: "none"

            }

        };

    };

    return BaAmChartThemeService;

}());

BaAmChartThemeService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */]) === "function" && _a || Object])

], BaAmChartThemeService);



var _a;

//# sourceMappingURL=baAmChartTheme.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baAmChart_component__ = __webpack_require__("../../../../../src/app/theme/components/baAmChart/baAmChart.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baAmChart_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/baBackTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaBackTop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



var BaBackTop = (function () {

    function BaBackTop() {

        this.position = 400;

        this.showSpeed = 500;

        this.moveSpeed = 1000;

    }

    BaBackTop.prototype.ngAfterViewInit = function () {

        this._onWindowScroll();

    };

    BaBackTop.prototype._onClick = function () {

        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });

        return false;

    };

    BaBackTop.prototype._onWindowScroll = function () {

        var el = this._selector.nativeElement;

        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);

    };

    return BaBackTop;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], BaBackTop.prototype, "position", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], BaBackTop.prototype, "showSpeed", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], BaBackTop.prototype, "moveSpeed", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('baBackTop'),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)

], BaBackTop.prototype, "_selector", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),

    __metadata("design:type", Function),

    __metadata("design:paramtypes", []),

    __metadata("design:returntype", Boolean)

], BaBackTop.prototype, "_onClick", null);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),

    __metadata("design:type", Function),

    __metadata("design:paramtypes", []),

    __metadata("design:returntype", void 0)

], BaBackTop.prototype, "_onWindowScroll", null);

BaBackTop = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-back-top',

        styles: [__webpack_require__("../../../../../src/app/theme/components/baBackTop/baBackTop.scss")],

        template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "

    })

], BaBackTop);



var _a;

//# sourceMappingURL=baBackTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/baBackTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ba-back-top {\n  position: fixed;\n  width: 52px;\n  height: 52px;\n  cursor: pointer;\n  z-index: 9999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 45px;\n  text-align: center;\n  opacity: 0.4;\n  color: #00abff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  line-height: 46px; }\n  .ba-back-top:hover {\n    opacity: 0.8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baBackTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baBackTop/baBackTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baBackTop_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



var BaCard = (function () {

    function BaCard() {

    }

    return BaCard;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaCard.prototype, "title", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaCard.prototype, "baCardClass", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaCard.prototype, "cardType", void 0);

BaCard = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-card',

        template: __webpack_require__("../../../../../src/app/theme/components/baCard/baCard.html"),

    })

], BaCard);



//# sourceMappingURL=baCard.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCard.html":
/***/ (function(module, exports) {

module.exports = "<div baCardBlur class=\"animated fadeIn card {{cardType}} {{baCardClass || ''}}\" zoom-in>\r\n    <div *ngIf=\"title\" class=\"card-header clearfix\">\r\n        <h3 class=\"card-title\" translate>{{title}}</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCardBlur.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCardBlur; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCardBlurHelper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var BaCardBlur = (function () {

    function BaCardBlur(_baConfig, _baCardBlurHelper, _el) {

        this._baConfig = _baConfig;

        this._baCardBlurHelper = _baCardBlurHelper;

        this._el = _el;

        this.isEnabled = false;

        if (this._isEnabled()) {

            this._baCardBlurHelper.init();

            this._getBodyImageSizesOnBgLoad();

            this._recalculateCardStylesOnBgLoad();

            this.isEnabled = true;

        }

    }

    BaCardBlur.prototype._onWindowResize = function () {

        if (this._isEnabled()) {

            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();

            this._recalculateCardStyle();

        }

    };

    BaCardBlur.prototype._getBodyImageSizesOnBgLoad = function () {

        var _this = this;

        this._baCardBlurHelper.bodyBgLoad().subscribe(function () {

            _this._bodyBgSize = _this._baCardBlurHelper.getBodyBgImageSizes();

        });

    };

    BaCardBlur.prototype._recalculateCardStylesOnBgLoad = function () {

        var _this = this;

        this._baCardBlurHelper.bodyBgLoad().subscribe(function (event) {

            setTimeout(_this._recalculateCardStyle.bind(_this));

        });

    };

    BaCardBlur.prototype._recalculateCardStyle = function () {

        if (!this._bodyBgSize) {

            return;

        }

        this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';

        this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';

    };

    BaCardBlur.prototype._isEnabled = function () {

        return this._baConfig.get().theme.name == 'blur';

    };

    return BaCardBlur;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.card-blur'),

    __metadata("design:type", Boolean)

], BaCardBlur.prototype, "isEnabled", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),

    __metadata("design:type", Function),

    __metadata("design:paramtypes", []),

    __metadata("design:returntype", void 0)

], BaCardBlur.prototype, "_onWindowResize", null);

BaCardBlur = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({

        selector: '[baCardBlur]',

        providers: [__WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */]]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])

], BaCardBlur);



var _a, _b, _c;

//# sourceMappingURL=baCardBlur.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCardBlurHelper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCardBlurHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};





var BaCardBlurHelper = (function () {

    function BaCardBlurHelper() {

    }

    BaCardBlurHelper.prototype.init = function () {

        this._genBgImage();

        this._genImageLoadSubject();

    };

    BaCardBlurHelper.prototype.bodyBgLoad = function () {

        return this.imageLoadSubject;

    };

    BaCardBlurHelper.prototype.getBodyBgImageSizes = function () {

        var elemW = document.documentElement.clientWidth;

        var elemH = document.documentElement.clientHeight;

        if (elemW <= 640)

            return;

        var imgRatio = (this.image.height / this.image.width); // original img ratio

        var containerRatio = (elemH / elemW); // container ratio

        var finalHeight, finalWidth;

        if (containerRatio > imgRatio) {

            finalHeight = elemH;

            finalWidth = (elemH / imgRatio);

        }

        else {

            finalWidth = elemW;

            finalHeight = (elemW * imgRatio);

        }

        return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2 };

    };

    BaCardBlurHelper.prototype._genBgImage = function () {

        this.image = new Image();

        var computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');

        this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');

    };

    BaCardBlurHelper.prototype._genImageLoadSubject = function () {

        var _this = this;

        this.imageLoadSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();

        this.image.onerror = function (err) {

            _this.imageLoadSubject.complete();

        };

        this.image.onload = function () {

            _this.imageLoadSubject.next(null);

            _this.imageLoadSubject.complete();

        };

    };

    return BaCardBlurHelper;

}());

BaCardBlurHelper = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()

], BaCardBlurHelper);



//# sourceMappingURL=baCardBlurHelper.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baCard_component__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baCard_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baChartistChart/baChartistChart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaChartistChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaChartistChart = (function () {

    function BaChartistChart() {

        this.onChartReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    BaChartistChart.prototype.ngAfterViewInit = function () {

        this.chart = new __WEBPACK_IMPORTED_MODULE_1_chartist__[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);

        this.onChartReady.emit(this.chart);

    };

    BaChartistChart.prototype.ngOnChanges = function (changes) {

        if (this.chart) {

            this.chart.update(this.baChartistChartData, this.baChartistChartOptions);

        }

    };

    BaChartistChart.prototype.ngOnDestroy = function () {

        if (this.chart) {

            this.chart.detach();

        }

    };

    return BaChartistChart;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaChartistChart.prototype, "baChartistChartType", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaChartistChart.prototype, "baChartistChartData", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaChartistChart.prototype, "baChartistChartOptions", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaChartistChart.prototype, "baChartistChartResponsive", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaChartistChart.prototype, "baChartistChartClass", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaChartistChart.prototype, "onChartReady", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('baChartistChart'),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)

], BaChartistChart.prototype, "_selector", void 0);

BaChartistChart = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-chartist-chart',

        template: __webpack_require__("../../../../../src/app/theme/components/baChartistChart/baChartistChart.html"),

        providers: [],

    })

], BaChartistChart);



var _a;

//# sourceMappingURL=baChartistChart.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baChartistChart/baChartistChart.html":
/***/ (function(module, exports) {

module.exports = "<div #baChartistChart class=\"ba-chartist-chart {{baChartistChartClass || ''}}\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baChartistChart/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baChartistChart_component__ = __webpack_require__("../../../../../src/app/theme/components/baChartistChart/baChartistChart.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baChartistChart_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCheckbox/baCheckbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};

var __param = (this && this.__param) || function (paramIndex, decorator) {

    return function (target, key) { decorator(target, key, paramIndex); }

};





var BaCheckbox = (function () {

    function BaCheckbox(state) {

        this.model = state;

        state.valueAccessor = this;

    }

    BaCheckbox.prototype.onChange = function (value) {

    };

    BaCheckbox.prototype.onTouch = function (value) {

    };

    BaCheckbox.prototype.writeValue = function (state) {

        this.state = state;

    };

    BaCheckbox.prototype.registerOnChange = function (fn) {

        this.onChange = function (state) {

            this.writeValue(state);

            this.model.viewToModelUpdate(state);

        };

    };

    BaCheckbox.prototype.registerOnTouched = function (fn) {

        this.onTouch = fn;

    };

    return BaCheckbox;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Boolean)

], BaCheckbox.prototype, "disabled", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaCheckbox.prototype, "label", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaCheckbox.prototype, "value", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaCheckbox.prototype, "baCheckboxClass", void 0);

BaCheckbox = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-checkbox[ngModel]',

        styles: [__webpack_require__("../../../../../src/app/theme/components/baCheckbox/baCheckbox.scss")],

        template: __webpack_require__("../../../../../src/app/theme/components/baCheckbox/baCheckbox.html"),

        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgModel */]]

    }),

    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"])()),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgModel */]) === "function" && _a || Object])

], BaCheckbox);



var _a;

//# sourceMappingURL=baCheckbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCheckbox/baCheckbox.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baCheckboxClass}}\">\r\n  <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n    <input type=\"checkbox\" [checked]=state\r\n           (change)=\"onChange($event.target.checked)\"\r\n           [disabled]=\"disabled\" [value]=\"value\">\r\n    <span>{{label}}</span>\r\n  </label>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baCheckbox/baCheckbox.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".has-success {\n  position: relative; }\n  .has-success .control-label {\n    color: #ffffff; }\n  .has-success .form-control {\n    border: 1px solid #a2db59; }\n    .has-success .form-control:focus {\n      box-shadow: none;\n      border-color: #8bd22f; }\n  .has-success label.custom-checkbox {\n    color: #a2db59; }\n    .has-success label.custom-checkbox > span:before {\n      color: #a2db59; }\n    .has-success label.custom-checkbox > span:hover:before {\n      border-color: #a2db59; }\n  .has-success .form-control-feedback {\n    color: #a2db59; }\n  .has-success .input-group-addon {\n    background-color: #a2db59;\n    color: #ffffff; }\n\n.has-warning {\n  position: relative; }\n  .has-warning .control-label {\n    color: #ffffff; }\n  .has-warning .form-control {\n    border: 1px solid #ecc839; }\n    .has-warning .form-control:focus {\n      box-shadow: none;\n      border-color: #e7ba08; }\n  .has-warning label.custom-checkbox {\n    color: #ecc839; }\n    .has-warning label.custom-checkbox > span:before {\n      color: #ecc839; }\n    .has-warning label.custom-checkbox > span:hover:before {\n      border-color: #ecc839; }\n  .has-warning .form-control-feedback {\n    color: #ecc839; }\n  .has-warning .input-group-addon {\n    background-color: #ecc839;\n    color: #ffffff; }\n\n.has-error {\n  position: relative; }\n  .has-error .control-label {\n    color: #ffffff; }\n  .has-error .form-control {\n    border: 1px solid #fa758e; }\n    .has-error .form-control:focus {\n      box-shadow: none;\n      border-color: #f95372; }\n  .has-error label.custom-checkbox {\n    color: #fa758e; }\n    .has-error label.custom-checkbox > span:before {\n      color: #fa758e; }\n    .has-error label.custom-checkbox > span:hover:before {\n      border-color: #fa758e; }\n  .has-error .form-control-feedback {\n    color: #fa758e; }\n  .has-error .input-group-addon {\n    background-color: #fa758e;\n    color: #ffffff; }\n\nlabel.custom-checkbox {\n  margin-bottom: 12px; }\n  label.custom-checkbox > span {\n    display: block;\n    margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baCheckbox/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baCheckbox_component__ = __webpack_require__("../../../../../src/app/theme/components/baCheckbox/baCheckbox.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baCheckbox_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaContentTop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaContentTop = (function () {

    function BaContentTop(_state) {

        var _this = this;

        this._state = _state;

        this.activePageTitle = '';

        this._state.subscribe('menu.activeLink', function (activeLink) {

            if (activeLink) {

                _this.activePageTitle = activeLink.title;

                // //console.log(activeLink);

            }

        });

    }

    return BaContentTop;

}());

BaContentTop = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-content-top',

        styles: [__webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.scss")],

        template: __webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.html"),

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object])

], BaContentTop);



var _a;

//# sourceMappingURL=baContentTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-top clearfix\">\r\n  <h1 class=\"al-title\" translate>{{ activePageTitle }}</h1>\r\n  \r\n  <!--<ul class=\"breadcrumb al-breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a routerLink=\"/pages/dashboard\" translate>{{'general.home'}}</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" translate>{{ activePageTitle }}</li>\r\n  </ul>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-top {\n  padding-top: 13px;\n  padding-bottom: 27px; }\n\nh1.al-title {\n  font-weight: 700;\n  color: #ffffff;\n  float: left;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  text-transform: uppercase;\n  opacity: 0.9; }\n\n.al-breadcrumb {\n  background: none;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n  float: right;\n  padding-top: 11px; }\n  .al-breadcrumb li {\n    font-size: 18px;\n    font-weight: 400; }\n    .al-breadcrumb li a {\n      color: #4dc4ff; }\n    .al-breadcrumb li.breadcrumb-item.active {\n      color: #ffffff; }\n\n.al-look {\n  float: right;\n  margin-right: 10px;\n  padding-top: 10px; }\n  .al-look > a {\n    font-size: 19px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baContentTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baContentTop_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baFileUploader/baFileUploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaFileUploader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__ = __webpack_require__("../../../../ngx-uploader/ngx-uploader.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaFileUploader = (function () {

    function BaFileUploader(renderer) {

        this.renderer = renderer;

        this.fileUploaderOptions = { url: '' };

        this.onFileUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.onFileUploadCompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.defaultValue = '';

    }

    BaFileUploader.prototype.bringFileSelector = function () {

        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');

        return false;

    };

    BaFileUploader.prototype.beforeFileUpload = function (uploadingFile) {

        var files = this._fileUpload.nativeElement.files;

        if (files.length) {

            var file = files[0];

            this._onChangeFileSelect(files[0]);

            if (!this._canFleUploadOnServer()) {

                uploadingFile.setAbort();

            }

            else {

                this.uploadFileInProgress = true;

            }

        }

    };

    BaFileUploader.prototype._onChangeFileSelect = function (file) {

        this._inputText.nativeElement.value = file.name;

    };

    BaFileUploader.prototype._onFileUpload = function (data) {

        if (data['done'] || data['abort'] || data['error']) {

            this._onFileUploadCompleted(data);

        }

        else {

            this.onFileUpload.emit(data);

        }

    };

    BaFileUploader.prototype._onFileUploadCompleted = function (data) {

        this.uploadFileInProgress = false;

        this.onFileUploadCompleted.emit(data);

    };

    BaFileUploader.prototype._canFleUploadOnServer = function () {

        return !!this.fileUploaderOptions['url'];

    };

    return BaFileUploader;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */]) === "function" && _a || Object)

], BaFileUploader.prototype, "fileUploaderOptions", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaFileUploader.prototype, "onFileUpload", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaFileUploader.prototype, "onFileUploadCompleted", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaFileUploader.prototype, "defaultValue", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUpload'),

    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)

], BaFileUploader.prototype, "_fileUpload", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputText'),

    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)

], BaFileUploader.prototype, "_inputText", void 0);

BaFileUploader = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-file-uploader',

        styles: [__webpack_require__("../../../../../src/app/theme/components/baFileUploader/baFileUploader.scss")],

        template: __webpack_require__("../../../../../src/app/theme/components/baFileUploader/baFileUploader.html"),

    }),

    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])

], BaFileUploader);



var _a, _b, _c, _d;

//# sourceMappingURL=baFileUploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baFileUploader/baFileUploader.html":
/***/ (function(module, exports) {

module.exports = "<input #fileUpload ngFileSelect type=\"file\" [options]=\"fileUploaderOptions\" (onUpload)=\"_onFileUpload($event)\" (beforeUpload)=\"beforeFileUpload($event)\" hidden=\"true\">\r\n<div class=\"input-group\" [ngClass]=\"{uploading: uploadFileInProgress}\">\r\n    <input #inputText type=\"text\" [value]=\"defaultValue\" class=\"form-control\" readonly>\r\n    <span class=\"input-group-btn\">\r\n      <button class=\"btn btn-success\" type=\"button\" (click)=\"bringFileSelector();\">Browse</button>\r\n  </span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/baFileUploader/baFileUploader.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baFileUploader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baFileUploader_component__ = __webpack_require__("../../../../../src/app/theme/components/baFileUploader/baFileUploader.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baFileUploader_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baFullCalendar/baFullCalendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaFullCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar_dist_fullcalendar_js__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar_dist_fullcalendar_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fullcalendar_dist_fullcalendar_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var BaFullCalendar = (function () {

    function BaFullCalendar() {

        this.onCalendarReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    BaFullCalendar.prototype.ngAfterViewInit = function () {

        var calendar = __WEBPACK_IMPORTED_MODULE_2_jquery__(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);

        this.onCalendarReady.emit(calendar);

    };

    return BaFullCalendar;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaFullCalendar.prototype, "baFullCalendarConfiguration", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaFullCalendar.prototype, "baFullCalendarClass", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaFullCalendar.prototype, "onCalendarReady", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('baFullCalendar'),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)

], BaFullCalendar.prototype, "_selector", void 0);

BaFullCalendar = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-full-calendar',

        template: __webpack_require__("../../../../../src/app/theme/components/baFullCalendar/baFullCalendar.html")

    })

], BaFullCalendar);



var _a;

//# sourceMappingURL=baFullCalendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baFullCalendar/baFullCalendar.html":
/***/ (function(module, exports) {

module.exports = "<div #baFullCalendar class=\"ba-full-calendar {{baFullCalendarClass || ''}}\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baFullCalendar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baFullCalendar_component__ = __webpack_require__("../../../../../src/app/theme/components/baFullCalendar/baFullCalendar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baFullCalendar_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_calendars_service__ = __webpack_require__("../../../../../src/app/services/calendars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};











var BaMenu = (function () {

    function BaMenu(calendarService, _router, _service, _state) {

        var _this = this;

        this.calendarService = calendarService;

        this._router = _router;

        this._service = _service;

        this._state = _state;

        this.sidebarCollapsed = false;

        this.expandMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.calendars = [];

        this.calendarsexpanded = false;

        this.outOfArea = -200;

        this.showCompanyMenus = false;

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (this.currentUser.user.role == "company") {

            this.showCompanyMenus = true;

        }

        this.calendarService.getStatusCalendars(this.currentUser.user.companyID).then(function (data) {

            _this.calendars = data;

            //console.log(this.calendars);

        });

        var THIS = this;

        if (THIS._router.url != "/pages/appointments") {

            THIS.calendarsexpanded = false;

        }

        setInterval(function () {

            if (THIS._router.url == "/pages/appointments") {

                if (THIS.selectedCalendar != localStorage.getItem('selected_calendar')) {

                    THIS.chooseCalendar(localStorage.getItem('selected_calendar'));

                }

            }

            else {

                THIS.selectedCalendar = '';

                // THIS.calendarsexpanded = false;

            }

        }, 1000);

    }

    BaMenu.prototype.hotkeys = function (event) {

        // event.key

        // selectedService

        // var selected_calendar = '';

        // for(var i=0; i< this.calendars.length; i++){

        //   if(this.calendars[i].shortKey.toString().toLocaleLowerCase()==event.key) {

        //     this.selectedCalendar = this.calendars[i]._id;

        //     selected_calendar = this.calendars[i]._id;

        //   }

        // }

    };

    BaMenu.prototype.toggleExpand = function () {

        this.calendarsexpanded = !this.calendarsexpanded;

    };

    BaMenu.prototype.chooseCalendar = function (cal) {

        localStorage.setItem('selected_calendar', cal);

        this.selectedCalendar = cal;

        this.calendarsexpanded = true;

        this._router.navigate(['/appointments']);

    };

    BaMenu.prototype.updateMenu = function (newMenuItems) {

        this.menuItems = newMenuItems;

        this.selectMenuAndNotify();

    };

    BaMenu.prototype.selectMenuAndNotify = function () {

        if (this.menuItems) {

            this.menuItems = this._service.selectMenuItem(this.menuItems);

            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());

        }

    };

    BaMenu.prototype.ngOnInit = function () {

        var _this = this;

        this._onRouteChange = this._router.events.subscribe(function (event) {

            // for(let item in this.menuItems)

            //   //console.log(item);

            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {

                if (_this.menuItems) {

                    //  //console.log("BaMenu:" + this.menuItems);

                    _this.selectMenuAndNotify();

                }

                else {

                    // on page load we have to wait as event is fired before menu elements are prepared

                    setTimeout(function () { return _this.selectMenuAndNotify(); });

                }

            }

        });

        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));

        //console.log(this._menuItemsSub);

    };

    BaMenu.prototype.ngOnDestroy = function () {

        this._onRouteChange.unsubscribe();

        this._menuItemsSub.unsubscribe();

    };

    BaMenu.prototype.hoverItem = function ($event) {

        this.showHoverElem = true;

        this.hoverElemHeight = $event.currentTarget.clientHeight;

        // TODO: get rid of magic 66 constant

        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;

    };

    BaMenu.prototype.toggleSubMenu = function ($event) {

        var submenu = jQuery($event.currentTarget).next();

        if (this.sidebarCollapsed) {

            this.expandMenu.emit(null);

            if (!$event.item.expanded) {

                $event.item.expanded = true;

            }

        }

        else {

            $event.item.expanded = !$event.item.expanded;

            submenu.slideToggle();

        }

        return false;

    };

    return BaMenu;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Boolean)

], BaMenu.prototype, "sidebarCollapsed", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], BaMenu.prototype, "menuHeight", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaMenu.prototype, "expandMenu", void 0);

BaMenu = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-menu',

        template: __webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.html"),

        host: { '(window:keydown)': 'hotkeys($event)' },

        styles: [__webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.scss")]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_calendars_service__["b" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_calendars_service__["b" /* CalendarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* BaMenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */]) === "function" && _d || Object])

], BaMenu);



var _a, _b, _c, _d;

//# sourceMappingURL=baMenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"al-sidebar-list\" class=\"al-sidebar-list\" baSlimScroll [baSlimScrollOptions]=\"{height: menuHeight}\"\r\n    (mouseleave)=\"hoverElemTop=outOfArea\">\r\n  <ba-menu-item\r\n    [menuItem]=\"item\"\r\n    (itemHover)=\"hoverItem($event)\"\r\n    (toggleSubMenu)=\"toggleSubMenu($event)\"\r\n    *ngFor=\"let item of menuItems\"></ba-menu-item>\r\n\r\n    <li *ngIf=\"showCompanyMenus\" class=\"al-sidebar-list-item with-sub-menu\" [ngClass]=\"{'ba-sidebar-item-expanded': calendarsexpanded }\" title=\"Appointments\">\r\n\t  \t<a class=\"al-sidebar-list-link\" (click)=\"toggleExpand()\" href=\"javascript:;\" >\r\n\t    \t<i class=\"ion-ios-compose-outline\"></i>\r\n\t    \t<span translate=\"\">Appointments</span>\r\n\t    \t<b class=\"fa fa-angle-down fa-angle-up\"></b>\r\n\t  \t</a>\r\n\t  \t<ul class=\"al-sidebar-sublist\" [ngClass]=\"{'block': calendarsexpanded }\">\r\n\t    \t<li class=\"ba-sidebar-sublist-item\" *ngFor=\"let cal of calendars\" (click)=\"chooseCalendar(cal._id)\">\r\n\r\n\t\t\t  <a class=\"al-sidebar-list-link\" [ngClass]=\"{'calselected': cal._id==selectedCalendar}\" href=\"javascript:;\">\r\n\t\t\t    <!-- <i class=\"ion-ios-contact-outline\"></i> -->\r\n\t\t\t    <i class=\"fa fa-user size-18\"></i>\r\n\t\t\t    <span translate=\"\">{{cal.description}}</span>\r\n\t\t\t  </a>\r\n\t\t\t</li>\r\n\t  \t</ul>\r\n\t</li>\r\n\r\n\t<li *ngIf=\"showCompanyMenus\" class=\"al-sidebar-list-item\" title=\"Settings\" style=\"position: absolute; bottom: 0px;\">\r\n\t\t<a class=\"al-sidebar-list-link\" href=\"/#/settings\" >\r\n\t\t\t<i class=\"ion-ios-gear size-18\"></i>\r\n\t\t\t<span translate=\"\">Settings</span>\r\n\t\t</a>\r\n\t</li>\r\n\r\n</ul>\r\n<div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\"\r\n     [ngClass]=\"{'show-hover-elem': showHoverElem }\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li.ba-sidebar-sublist-item {\n  padding-left: 52px; }\n\n.block {\n  display: block !important; }\n\n.calselected {\n  background: red; }\n\n.size-18 {\n  font-size: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenuItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaMenuItem = (function () {

    function BaMenuItem(translate) {

        this.translate = translate;

        this.child = false;

        this.itemHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.toggleSubMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        var lang = localStorage.getItem('lang');

        this.translate.setDefaultLang(lang);

    }

    BaMenuItem.prototype.onHoverItem = function ($event) {

        this.itemHover.emit($event);

    };

    BaMenuItem.prototype.onToggleSubMenu = function ($event, item) {

        $event.item = item;

        this.toggleSubMenu.emit($event);

        return false;

    };

    return BaMenuItem;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaMenuItem.prototype, "menuItem", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Boolean)

], BaMenuItem.prototype, "child", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaMenuItem.prototype, "itemHover", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaMenuItem.prototype, "toggleSubMenu", void 0);

BaMenuItem = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-menu-item',

        template: __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html"),

        styles: [__webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss")]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_translation_module__["a" /* AppTranslationModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_translation_module__["a" /* AppTranslationModule */]) === "function" && _a || Object])

], BaMenuItem);



var _a;

//# sourceMappingURL=baMenuItem.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html":
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"!menuItem.hidden\" [title]=\"menuItem.title | translate\" [ngClass]=\"{'al-sidebar-list-item': !child, 'ba-sidebar-sublist-item': child, 'selected': menuItem.selected && !menuItem.expanded, 'with-sub-menu': menuItem.children, 'ba-sidebar-item-expanded': menuItem.expanded}\">\r\n\r\n  <a *ngIf=\"!menuItem.children && !menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [routerLink]=\"menuItem.route.paths\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"!menuItem.children && menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [routerLink]=\"menuItem.url\" [target]=\"menuItem.target\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.children\" (mouseenter)=\"onHoverItem($event, item)\" href (click)=\"onToggleSubMenu($event, menuItem)\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n    <b class=\"fa fa-angle-down\" [ngClass]=\"{'fa-angle-up': menuItem.expanded}\"></b>\r\n  </a>\r\n\r\n  <ul *ngIf=\"menuItem.children\" class=\"al-sidebar-sublist\" [ngClass]=\"{'slide-right': menuItem.slideRight}\">\r\n    <ba-menu-item [menuItem]=\"subItem\"\r\n                  [child]=\"true\"\r\n                  (itemHover)=\"onHoverItem($event)\"\r\n                  (toggleSubMenu)=\"onToggleSubMenu($event, subItem)\"\r\n                  *ngFor=\"let subItem of menuItem.children\"></ba-menu-item>\r\n  </ul>\r\n\r\n</li>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenuItem_component__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenuItem_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenu_component__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenu_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMsgCenter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__ = __webpack_require__("../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaMsgCenter = (function () {

    function BaMsgCenter(_baMsgCenterService) {

        this._baMsgCenterService = _baMsgCenterService;

        this.notifications = this._baMsgCenterService.getNotifications();

        this.messages = this._baMsgCenterService.getMessages();

    }

    return BaMsgCenter;

}());

BaMsgCenter = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-msg-center',

        providers: [__WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */]],

        styles: [__webpack_require__("../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.scss")],

        template: __webpack_require__("../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.html")

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */]) === "function" && _a || Object])

], BaMsgCenter);



var _a;

//# sourceMappingURL=baMsgCenter.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"al-msg-center clearfix\">\r\n  <li class=\"dropdown\">\r\n    <a href class=\"dropdown-toggle\" id=\"msg-dd1\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n      <i class=\"fa fa-bell-o\"></i><span>{{ notifications.length }}</span>\r\n\r\n      <div class=\"notification-ring\"></div>\r\n    </a>\r\n\r\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd1\">\r\n      <i class=\"dropdown-arr\"></i>\r\n\r\n      <div class=\"header clearfix\">\r\n        <strong>Notifications</strong>\r\n        <a href>Mark All as Read</a>\r\n        <a href>Settings</a>\r\n      </div>\r\n      <div class=\"msg-list\">\r\n        <a *ngFor=\"let msg of notifications\" href class=\"clearfix\">\r\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\r\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\r\n          <div class=\"msg-area\">\r\n            <div>{{ msg.text }}</div>\r\n            <span>{{ msg.time }}</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <a href>See all notifications</a>\r\n    </div>\r\n  </li>\r\n  <li class=\"dropdown\">\r\n    <a href class=\"msg dropdown-toggle\" id=\"msg-dd2\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n      <i class=\"fa fa-envelope-o\"></i><span>{{ messages.length }}</span>\r\n      <div class=\"notification-ring\"></div>\r\n    </a>\r\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd2\">\r\n      <i class=\"dropdown-arr\"></i>\r\n      <div class=\"header clearfix\">\r\n        <strong>Messages</strong>\r\n        <a href>Mark All as Read</a>\r\n        <a href>Settings</a>\r\n      </div>\r\n      <div class=\"msg-list\">\r\n        <a *ngFor=\"let msg of messages\" href class=\"clearfix\">\r\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\r\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\r\n          <div class=\"msg-area\">\r\n            <div>{{ msg.text }}</div>\r\n            <span>{{ msg.time }}</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <a href>See all messages</a>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n  .al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n    .al-msg-center li:first-child {\n      margin-left: 0; }\n    .al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n      .al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        -webkit-animation: pulsate 8s ease-out;\n                animation: pulsate 8s ease-out;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .al-msg-center li > a:hover {\n        color: #f95372; }\n        .al-msg-center li > a:hover.msg {\n          color: #00abff; }\n      .al-msg-center li > a.msg span {\n        background-color: #00abff; }\n      .al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n    .al-msg-center li.open > a {\n      color: #f95372; }\n      .al-msg-center li.open > a.msg {\n        color: #00abff; }\n\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n  .top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n  .top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n  .top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n    .top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n    .top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n      .top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n  .top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n      .top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n      .top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n        .top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n          .top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n        .top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n          .top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n      .top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n        .top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n      .top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n  .top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n    .top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n  .top-dropdown-menu.profile-dropdown {\n    width: 196px;\n    top: 55px;\n    right: -25px; }\n    .top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n      .top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n      .top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n      .top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n    .top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n    .top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMsgCenterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};



var BaMsgCenterService = (function () {

    function BaMsgCenterService() {

        this._notifications = [

            {

                name: 'Vlad',

                text: 'Vlad posted a new article.',

                time: '1 min ago'

            },

            {

                name: 'Kostya',

                text: 'Kostya changed his contact information.',

                time: '2 hrs ago'

            },

            {

                image: 'assets/img/shopping-cart.svg',

                text: 'New orders received.',

                time: '5 hrs ago'

            },

            {

                name: 'Andrey',

                text: 'Andrey replied to your comment.',

                time: '1 day ago'

            },

            {

                name: 'Nasta',

                text: 'Today is Nasta\'s birthday.',

                time: '2 days ago'

            },

            {

                image: 'assets/img/comments.svg',

                text: 'New comments on your post.',

                time: '3 days ago'

            },

            {

                name: 'Kostya',

                text: 'Kostya invited you to join the event.',

                time: '1 week ago'

            }

        ];

        this._messages = [

            {

                name: 'Nasta',

                text: 'After you get up and running, you can place Font Awesome icons just about...',

                time: '1 min ago'

            },

            {

                name: 'Vlad',

                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',

                time: '2 hrs ago'

            },

            {

                name: 'Kostya',

                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',

                time: '10 hrs ago'

            },

            {

                name: 'Andrey',

                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',

                time: '1 day ago'

            },

            {

                name: 'Nasta',

                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',

                time: '1 day ago'

            },

            {

                name: 'Kostya',

                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',

                time: '2 days ago'

            },

            {

                name: 'Vlad',

                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',

                time: '1 week ago'

            }

        ];

    }

    BaMsgCenterService.prototype.getMessages = function () {

        return this._messages;

    };

    BaMsgCenterService.prototype.getNotifications = function () {

        return this._notifications;

    };

    return BaMsgCenterService;

}());

BaMsgCenterService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()

], BaMsgCenterService);



//# sourceMappingURL=baMsgCenter.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMsgCenter_component__ = __webpack_require__("../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMsgCenter_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMultiCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};

var __param = (this && this.__param) || function (paramIndex, decorator) {

    return function (target, key) { decorator(target, key, paramIndex); }

};





var BaMultiCheckbox = (function () {

    function BaMultiCheckbox(state) {

        this.model = state;

        state.valueAccessor = this;

    }

    BaMultiCheckbox.prototype.getProp = function (item, propName) {

        var prop = this.propertiesMapping[propName];

        if (!prop) {

            return item[propName];

        }

        else if (typeof prop === 'function') {

            return prop(item);

        }

        return item[prop];

    };

    BaMultiCheckbox.prototype.onChange = function (value) { };

    BaMultiCheckbox.prototype.onTouch = function (value) { };

    BaMultiCheckbox.prototype.writeValue = function (state) {

        this.state = state;

    };

    BaMultiCheckbox.prototype.registerOnChange = function (fn) {

        this.onChange = function (state) {

            this.writeValue(state);

            this.model.viewToModelUpdate(state);

        };

    };

    BaMultiCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };

    return BaMultiCheckbox;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaMultiCheckbox.prototype, "baMultiCheckboxClass", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaMultiCheckbox.prototype, "propertiesMapping", void 0);

BaMultiCheckbox = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-multi-checkbox[ngModel]',

        template: __webpack_require__("../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.html"),

        styles: [__webpack_require__("../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.scss")],

        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgModel */]]

    }),

    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"])()),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgModel */]) === "function" && _a || Object])

], BaMultiCheckbox);



var _a;

//# sourceMappingURL=baMultiCheckbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baMultiCheckboxClass}} container-content\">\r\n  <ba-checkbox *ngFor=\"let item of state\"\r\n               [(ngModel)]=\"item[propertiesMapping.model]\"\r\n               [baCheckboxClass]=\"getProp(item, 'baCheckboxClass')\"\r\n               [label]=\"getProp(item, 'label')\"\r\n               [disabled]=\"getProp(item, 'disabled')\"\r\n               [value]=\"getProp(item, 'value')\"\r\n               id=\"{{getProp(item, 'id')}}\">\r\n  </ba-checkbox>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-content {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .container-content ba-checkbox {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMultiCheckbox/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMultiCheckbox_component__ = __webpack_require__("../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMultiCheckbox_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaPageTop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var BaPageTop = (function () {

    function BaPageTop(_state, router) {

        var _this = this;

        this._state = _state;

        this.router = router;

        this.isScrolled = false;

        this.isMenuCollapsed = false;

        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {

            _this.isMenuCollapsed = isCollapsed;

        });

    }

    BaPageTop.prototype.toggleMenu = function () {

        this.isMenuCollapsed = !this.isMenuCollapsed;

        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);

        return false;

    };

    BaPageTop.prototype.scrolledChanged = function (isScrolled) {

        this.isScrolled = isScrolled;

    };

    BaPageTop.prototype.signOut = function () {

        localStorage.removeItem('currentUser');

    };

    BaPageTop.prototype.changePassword = function () {

        this.router.navigate(['./pages/changepassword']);

    };

    return BaPageTop;

}());

BaPageTop = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-page-top',

        template: __webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.html"),

        styles: [__webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.scss")]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])

], BaPageTop);



var _a, _b;

//# sourceMappingURL=baPageTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top clearfix\" baScrollPosition maxHeight=\"50\" (scrollChange)=\"scrolledChanged($event)\"\r\n     [ngClass]=\"{scrolled: isScrolled}\">\r\n  <a routerLink=\"/clients\" class=\"al-logo clearfix\"><img src=\"assets/img/logo.png\" width=\"230\" height=\"50\"></a>\r\n  <a href (click)=\"toggleMenu()\" class=\"collapse-menu-link ion-navicon\"></a>\r\n\r\n  <!--<div class=\"search\">\r\n    <i class=\"ion-ios-search-strong\" ng-click=\"startSearch()\"></i>\r\n    <input id=\"searchInput\" type=\"text\" placeholder=\"Search for...\">\r\n  </div>-->\r\n\r\n  <div class=\"user-profile clearfix\">\r\n    <div class=\"dropdown al-user-profile\">\r\n      <a class=\"profile-toggle-link dropdown-toggle\" id=\"user-profile-dd\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n        <img src=\"{{ ( 'Nasta' | baProfilePicture ) }}\">\r\n      </a>\r\n      <ul class=\"dropdown-menu top-dropdown-menu profile-dropdown\" aria-labelledby=\"user-profile-dd\">\r\n        <li class=\"dropdown-item\"><a href=\"/#/pages/changepassword\" (click)=\"changePassword()\" class=\"changepassword\"><i class=\"fa fa-key\"></i>Change password</a></li>\r\n        <li class=\"dropdown-item\"><a href (click)=\"signOut()\" class=\"signout\"><i class=\"fa fa-power-off\"></i>Sign out</a></li>\r\n      </ul>\r\n    </div>\r\n    <!--<ba-msg-center></ba-msg-center>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n  .al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n    .al-msg-center li:first-child {\n      margin-left: 0; }\n    .al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n      .al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        -webkit-animation: pulsate 8s ease-out;\n                animation: pulsate 8s ease-out;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .al-msg-center li > a:hover {\n        color: #f95372; }\n        .al-msg-center li > a:hover.msg {\n          color: #00abff; }\n      .al-msg-center li > a.msg span {\n        background-color: #00abff; }\n      .al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n    .al-msg-center li.open > a {\n      color: #f95372; }\n      .al-msg-center li.open > a.msg {\n        color: #00abff; }\n\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n  .top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n  .top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n  .top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n    .top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n    .top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n      .top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n  .top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n      .top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n      .top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n        .top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n          .top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n        .top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n          .top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n      .top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n        .top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n      .top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n  .top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n    .top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n  .top-dropdown-menu.profile-dropdown {\n    width: 196px;\n    top: 55px;\n    right: -25px; }\n    .top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n      .top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n      .top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n      .top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n    .top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n    .top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n\n:host /deep/ .page-top {\n  background-color: #282828;\n  position: fixed;\n  z-index: 904;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n  height: 66px;\n  width: 100%;\n  min-width: 320px;\n  padding: 0 32px 0 40px; }\n  :host /deep/ .page-top .dropdown-toggle::after {\n    display: none; }\n\n:host /deep/ .blur .page-top.scrolled {\n  background-color: rgba(0, 0, 0, 0.85); }\n\n:host /deep/ a.al-logo {\n  color: #ffffff;\n  display: block;\n  font-size: 24px;\n  font-family: \"Roboto\", sans-serif;\n  white-space: nowrap;\n  float: left;\n  outline: none !important;\n  line-height: 60px; }\n  :host /deep/ a.al-logo span {\n    color: #00abff; }\n\n:host /deep/ a.al-logo:hover {\n  color: #00abff; }\n\n:host /deep/ .user-profile {\n  float: right;\n  min-width: 230px;\n  margin-top: 10px; }\n\n:host /deep/ .al-user-profile {\n  float: right;\n  margin-right: 12px;\n  transition: all .15s ease-in-out;\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  opacity: 1;\n  position: relative; }\n  :host /deep/ .al-user-profile ul.profile-dropdown:after {\n    bottom: 100%;\n    right: 0;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(255, 255, 255, 0);\n    border-bottom-color: #fff;\n    border-width: 10px;\n    margin-right: 28px; }\n  :host /deep/ .al-user-profile a {\n    display: block; }\n  :host /deep/ .al-user-profile img {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%; }\n\n:host /deep/ a.refresh-data {\n  color: #ffffff;\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 400;\n  float: right;\n  margin-top: 13px;\n  margin-right: 26px; }\n  :host /deep/ a.refresh-data:hover {\n    color: #e7ba08 !important; }\n\n:host /deep/ a.collapse-menu-link {\n  font-size: 31px;\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  line-height: 42px;\n  color: #ffffff;\n  padding: 0;\n  float: left;\n  margin: 11px 0 0 25px; }\n  :host /deep/ a.collapse-menu-link:hover {\n    text-decoration: none;\n    color: #e7ba08; }\n\n:host /deep/ .al-skin-dropdown {\n  float: right;\n  margin-top: 14px;\n  margin-right: 26px; }\n  :host /deep/ .al-skin-dropdown .tpl-skin-panel {\n    max-height: 300px;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n\n:host /deep/ .icon-palette {\n  display: inline-block;\n  width: 14px;\n  height: 13px;\n  background: url(\"/img/theme/palette.png\");\n  background-size: cover; }\n\n:host /deep/ .search {\n  text-shadow: none;\n  font-size: 13px;\n  line-height: 25px;\n  transition: all 0.5s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 162px;\n  float: left;\n  margin: 20px 0 0 30px; }\n  :host /deep/ .search label {\n    cursor: pointer; }\n  :host /deep/ .search i {\n    width: 16px;\n    display: inline-block;\n    cursor: pointer;\n    padding-left: 1px;\n    font-size: 16px;\n    margin-right: 13px; }\n  :host /deep/ .search input {\n    color: #ffffff;\n    background: none;\n    border: none;\n    outline: none;\n    width: 120px;\n    padding: 0;\n    margin: 0 0 0 -3px;\n    height: 27px; }\n\n@media screen and (max-width: 660px) {\n  :host /deep/ .search {\n    display: none; } }\n\n@media screen and (max-width: 500px) {\n  :host /deep/ .page-top {\n    padding: 0 20px; } }\n\n@media (max-width: 435px) {\n  :host /deep/ .user-profile {\n    min-width: 136px; }\n  :host /deep/ a.refresh-data {\n    margin-right: 10px; }\n  :host /deep/ a.collapse-menu-link {\n    margin-left: 10px; }\n  :host /deep/ .al-skin-dropdown {\n    display: none; } }\n\n:host /deep/ .profile-toggle-link {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPageTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baPageTop_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baPictureUploader/baPictureUploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaPictureUploader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__ = __webpack_require__("../../../../ngx-uploader/ngx-uploader.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaPictureUploader = (function () {

    function BaPictureUploader(renderer) {

        this.renderer = renderer;

        this.defaultPicture = '';

        this.picture = '';

        this.uploaderOptions = { url: '' };

        this.canDelete = true;

        this.onUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

        this.onUploadCompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    BaPictureUploader.prototype.beforeUpload = function (uploadingFile) {

        var files = this._fileUpload.nativeElement.files;

        if (files.length) {

            var file = files[0];

            this._changePicture(file);

            if (!this._canUploadOnServer()) {

                uploadingFile.setAbort();

            }

            else {

                this.uploadInProgress = true;

            }

        }

    };

    BaPictureUploader.prototype.bringFileSelector = function () {

        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');

        return false;

    };

    BaPictureUploader.prototype.removePicture = function () {

        this.picture = '';

        return false;

    };

    BaPictureUploader.prototype._changePicture = function (file) {

        var _this = this;

        var reader = new FileReader();

        reader.addEventListener('load', function (event) {

            _this.picture = event.target.result;

        }, false);

        reader.readAsDataURL(file);

    };

    BaPictureUploader.prototype._onUpload = function (data) {

        if (data['done'] || data['abort'] || data['error']) {

            this._onUploadCompleted(data);

        }

        else {

            this.onUpload.emit(data);

        }

    };

    BaPictureUploader.prototype._onUploadCompleted = function (data) {

        this.uploadInProgress = false;

        this.onUploadCompleted.emit(data);

    };

    BaPictureUploader.prototype._canUploadOnServer = function () {

        return !!this.uploaderOptions['url'];

    };

    return BaPictureUploader;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaPictureUploader.prototype, "defaultPicture", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", String)

], BaPictureUploader.prototype, "picture", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */]) === "function" && _a || Object)

], BaPictureUploader.prototype, "uploaderOptions", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Boolean)

], BaPictureUploader.prototype, "canDelete", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaPictureUploader.prototype, "onUpload", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", Object)

], BaPictureUploader.prototype, "onUploadCompleted", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUpload'),

    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)

], BaPictureUploader.prototype, "_fileUpload", void 0);

BaPictureUploader = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-picture-uploader',

        styles: [__webpack_require__("../../../../../src/app/theme/components/baPictureUploader/baPictureUploader.scss")],

        template: __webpack_require__("../../../../../src/app/theme/components/baPictureUploader/baPictureUploader.html"),

    }),

    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])

], BaPictureUploader);



var _a, _b, _c;

//# sourceMappingURL=baPictureUploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baPictureUploader/baPictureUploader.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"picture-group\" [ngClass]=\"{uploading: uploadInProgress}\">\r\n  <div class=\"picture-wrapper\" (click)=\"bringFileSelector();\">\r\n    <img [src]=\"picture\" *ngIf=\"picture\">\r\n    <img [src]=\"defaultPicture\" *ngIf=\"!!!picture && !!defaultPicture\">\r\n\r\n    <div class=\"loading\" *ngIf=\"uploadInProgress\">\r\n      <div class=\"spinner\">\r\n        <div class=\"double-bounce1\"></div>\r\n        <div class=\"double-bounce2\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <i class=\"ion-ios-close-outline\" (click)=\"removePicture();\" *ngIf=\"picture && canDelete\"></i>\r\n  <a href class=\"change-picture\" (click)=\"bringFileSelector();\">Change profile Picture</a>\r\n  <input #fileUpload ngFileSelect [options]=\"uploaderOptions\"\r\n         (onUpload)=\"_onUpload($event)\"\r\n         (beforeUpload)=\"beforeUpload($event)\"\r\n         type=\"file\" hidden=\"true\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baPictureUploader/baPictureUploader.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".picture-group {\n  border: 1px dashed #b8b8b8;\n  width: 202px;\n  height: 202px;\n  position: relative;\n  cursor: pointer; }\n  .picture-group .picture-wrapper {\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .picture-group img {\n    max-width: 100%;\n    max-height: 100%; }\n  .picture-group i {\n    display: none;\n    position: absolute;\n    font-size: 32px;\n    background: #ffffff;\n    cursor: pointer;\n    color: #00abff;\n    top: -11px;\n    right: -11px;\n    height: 26px;\n    border-radius: 50%; }\n    .picture-group i:before {\n      line-height: 26px; }\n    .picture-group i:hover {\n      color: #f95372; }\n  .picture-group a.change-picture {\n    display: none;\n    width: 202px;\n    background: rgba(0, 0, 0, 0.7);\n    transition: all 200ms ease-in-out;\n    color: #ffffff;\n    text-decoration: none;\n    position: absolute;\n    bottom: -1px;\n    left: -1px;\n    line-height: 32px;\n    text-align: center; }\n  .picture-group:hover i {\n    display: block; }\n  .picture-group:hover .change-picture {\n    display: block; }\n  .picture-group .loading {\n    width: 100%;\n    height: 100%;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .picture-group .spinner {\n    width: 60px;\n    height: 60px;\n    position: relative; }\n  .picture-group .double-bounce1, .picture-group .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #fff;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n    animation: sk-bounce 2.0s infinite ease-in-out; }\n  .picture-group .double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baPictureUploader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPictureUploader_component__ = __webpack_require__("../../../../../src/app/theme/components/baPictureUploader/baPictureUploader.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baPictureUploader_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaSidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var BaSidebar = (function () {

    function BaSidebar(_elementRef, _state) {

        var _this = this;

        this._elementRef = _elementRef;

        this._state = _state;

        this.isMenuCollapsed = false;

        this.isMenuShouldCollapsed = false;

        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {

            _this.isMenuCollapsed = isCollapsed;

        });

    }

    BaSidebar.prototype.ngOnInit = function () {

        if (this._shouldMenuCollapse()) {

            this.menuCollapse();

        }

    };

    BaSidebar.prototype.ngAfterViewInit = function () {

        var _this = this;

        setTimeout(function () { return _this.updateSidebarHeight(); });

    };

    BaSidebar.prototype.onWindowResize = function () {

        var isMenuShouldCollapsed = this._shouldMenuCollapse();

        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {

            this.menuCollapseStateChange(isMenuShouldCollapsed);

        }

        this.isMenuShouldCollapsed = isMenuShouldCollapsed;

        this.updateSidebarHeight();

    };

    BaSidebar.prototype.menuExpand = function () {

        this.menuCollapseStateChange(false);

    };

    BaSidebar.prototype.menuCollapse = function () {

        this.menuCollapseStateChange(true);

    };

    BaSidebar.prototype.menuCollapseStateChange = function (isCollapsed) {

        this.isMenuCollapsed = isCollapsed;

        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);

    };

    BaSidebar.prototype.updateSidebarHeight = function () {

        // TODO: get rid of magic 84 constant

        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;

    };

    BaSidebar.prototype._shouldMenuCollapse = function () {

        return window.innerWidth <= __WEBPACK_IMPORTED_MODULE_2__theme__["e" /* layoutSizes */].resWidthCollapseSidebar;

    };

    return BaSidebar;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),

    __metadata("design:type", Function),

    __metadata("design:paramtypes", []),

    __metadata("design:returntype", void 0)

], BaSidebar.prototype, "onWindowResize", null);

BaSidebar = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({

        selector: 'ba-sidebar',

        template: __webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.html"),

        styles: [__webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.scss")]

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _b || Object])

], BaSidebar);



var _a, _b;

//# sourceMappingURL=baSidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" sidebarResize>\r\n  <ba-menu [menuHeight]=\"menuHeight\"\r\n           [sidebarCollapsed]=\"isMenuCollapsed\"\r\n           (expandMenu)=\"menuExpand()\"></ba-menu>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n:host /deep/ .al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n:host /deep/ .al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n:host /deep/ .subitem-submenu-link .fa {\n  top: 7px; }\n\n:host /deep/ .al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n  :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n    :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n      :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n:host /deep/ .ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\n:host /deep/ a.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n  :host /deep/ a.al-sidebar-list-link:hover {\n    color: #00abff; }\n    :host /deep/ a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n  :host /deep/ a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n  :host /deep/ a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n\n:host /deep/ .slimScrollBar, :host /deep/ .slimScrollRail {\n  border-radius: 0 !important;\n  width: 4px !important;\n  left: 176px; }\n\n:host /deep/ .al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n  :host /deep/ .al-sidebar-sublist.expanded {\n    display: block; }\n  :host /deep/ .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n:host /deep/ .sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  transition: all 0.5s ease;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n:host /deep/ .sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n:host /deep/ .menu-collapsed .slimScrollBar, :host /deep/ .menu-collapsed .slimScrollRail {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baSidebar_component__ = __webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baSidebar_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPageTop__ = __webpack_require__("../../../../../src/app/theme/components/baPageTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__baPageTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMsgCenter__ = __webpack_require__("../../../../../src/app/theme/components/baMsgCenter/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__baMsgCenter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baSidebar__ = __webpack_require__("../../../../../src/app/theme/components/baSidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__baSidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baMenu_components_baMenuItem__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__baMenu_components_baMenuItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__baMenu__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__baMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__baContentTop__ = __webpack_require__("../../../../../src/app/theme/components/baContentTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__baContentTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__baCard__ = __webpack_require__("../../../../../src/app/theme/components/baCard/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__baCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__baAmChart__ = __webpack_require__("../../../../../src/app/theme/components/baAmChart/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__baAmChart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__baChartistChart__ = __webpack_require__("../../../../../src/app/theme/components/baChartistChart/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__baChartistChart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__baBackTop__ = __webpack_require__("../../../../../src/app/theme/components/baBackTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__baBackTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__baFullCalendar__ = __webpack_require__("../../../../../src/app/theme/components/baFullCalendar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_10__baFullCalendar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__baPictureUploader__ = __webpack_require__("../../../../../src/app/theme/components/baPictureUploader/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_11__baPictureUploader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__baCheckbox__ = __webpack_require__("../../../../../src/app/theme/components/baCheckbox/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_12__baCheckbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__baMultiCheckbox__ = __webpack_require__("../../../../../src/app/theme/components/baMultiCheckbox/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__baMultiCheckbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__baFileUploader__ = __webpack_require__("../../../../../src/app/theme/components/baFileUploader/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_14__baFileUploader__["a"]; });






























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaScrollPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



var BaScrollPosition = (function () {

    function BaScrollPosition() {

        this.scrollChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();

    }

    BaScrollPosition.prototype.ngOnInit = function () {

        this.onWindowScroll();

    };

    BaScrollPosition.prototype.onWindowScroll = function () {

        var isScrolled = window.scrollY > this.maxHeight;

        if (isScrolled !== this._isScrolled) {

            this._isScrolled = isScrolled;

            this.scrollChange.emit(isScrolled);

        }

    };

    return BaScrollPosition;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Number)

], BaScrollPosition.prototype, "maxHeight", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),

    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)

], BaScrollPosition.prototype, "scrollChange", void 0);

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),

    __metadata("design:type", Function),

    __metadata("design:paramtypes", []),

    __metadata("design:returntype", void 0)

], BaScrollPosition.prototype, "onWindowScroll", null);

BaScrollPosition = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({

        selector: '[baScrollPosition]'

    })

], BaScrollPosition);



var _a;

//# sourceMappingURL=baScrollPosition.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baScrollPosition/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baScrollPosition_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baScrollPosition_directive__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaSlimScroll; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__ = __webpack_require__("../../../../jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaSlimScroll = (function () {

    function BaSlimScroll(_elementRef) {

        this._elementRef = _elementRef;

    }

    BaSlimScroll.prototype.ngOnChanges = function (changes) {

        this._scroll();

    };

    BaSlimScroll.prototype._scroll = function () {

        this._destroy();

        this._init();

    };

    BaSlimScroll.prototype._init = function () {

        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);

    };

    BaSlimScroll.prototype._destroy = function () {

        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });

    };

    return BaSlimScroll;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),

    __metadata("design:type", Object)

], BaSlimScroll.prototype, "baSlimScrollOptions", void 0);

BaSlimScroll = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({

        selector: '[baSlimScroll]'

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])

], BaSlimScroll);



var _a;

//# sourceMappingURL=baSlimScroll.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baSlimScroll/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baSlimScroll_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baSlimScroll_directive__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baThemeRun/baThemeRun.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeRun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaThemeRun = (function () {

    function BaThemeRun(_baConfig) {

        this._baConfig = _baConfig;

        this._classes = [];

    }

    BaThemeRun.prototype.ngOnInit = function () {

        this._assignTheme();

        this._assignMobile();

    };

    BaThemeRun.prototype._assignTheme = function () {

        this._addClass(this._baConfig.get().theme.name);

    };

    BaThemeRun.prototype._assignMobile = function () {

        if (Object(__WEBPACK_IMPORTED_MODULE_1__theme__["c" /* isMobile */])()) {

            this._addClass('mobile');

        }

    };

    BaThemeRun.prototype._addClass = function (cls) {

        this._classes.push(cls);

        this.classesString = this._classes.join(' ');

    };

    return BaThemeRun;

}());

__decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),

    __metadata("design:type", String)

], BaThemeRun.prototype, "classesString", void 0);

BaThemeRun = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({

        selector: '[baThemeRun]'

    }),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */]) === "function" && _a || Object])

], BaThemeRun);



var _a;

//# sourceMappingURL=baThemeRun.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baThemeRun/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemeRun_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baThemeRun/baThemeRun.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemeRun_directive__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baScrollPosition__ = __webpack_require__("../../../../../src/app/theme/directives/baScrollPosition/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baScrollPosition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baThemeRun__ = __webpack_require__("../../../../../src/app/theme/directives/baThemeRun/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__baThemeRun__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baSlimScroll__ = __webpack_require__("../../../../../src/app/theme/directives/baSlimScroll/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__baSlimScroll__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_constants__ = __webpack_require__("../../../../../src/app/theme/theme.constants.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__theme_configProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/nga.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_uploader__ = __webpack_require__("../../../../ngx-uploader/ngx-uploader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__("../../../../../src/app/theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_baCard_baCardBlur_directive__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCardBlur.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives__ = __webpack_require__("../../../../../src/app/theme/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes__ = __webpack_require__("../../../../../src/app/theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validators__ = __webpack_require__("../../../../../src/app/theme/validators/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};





























var NGA_COMPONENTS = [

    __WEBPACK_IMPORTED_MODULE_8__components__["a" /* BaAmChart */],

    __WEBPACK_IMPORTED_MODULE_8__components__["b" /* BaBackTop */],

    __WEBPACK_IMPORTED_MODULE_8__components__["c" /* BaCard */],

    __WEBPACK_IMPORTED_MODULE_8__components__["d" /* BaChartistChart */],

    __WEBPACK_IMPORTED_MODULE_8__components__["e" /* BaCheckbox */],

    __WEBPACK_IMPORTED_MODULE_8__components__["f" /* BaContentTop */],

    __WEBPACK_IMPORTED_MODULE_8__components__["h" /* BaFullCalendar */],

    __WEBPACK_IMPORTED_MODULE_8__components__["j" /* BaMenuItem */],

    __WEBPACK_IMPORTED_MODULE_8__components__["i" /* BaMenu */],

    __WEBPACK_IMPORTED_MODULE_8__components__["k" /* BaMsgCenter */],

    __WEBPACK_IMPORTED_MODULE_8__components__["l" /* BaMultiCheckbox */],

    __WEBPACK_IMPORTED_MODULE_8__components__["m" /* BaPageTop */],

    __WEBPACK_IMPORTED_MODULE_8__components__["n" /* BaPictureUploader */],

    __WEBPACK_IMPORTED_MODULE_8__components__["o" /* BaSidebar */],

    __WEBPACK_IMPORTED_MODULE_8__components__["g" /* BaFileUploader */]

];

var NGA_DIRECTIVES = [

    __WEBPACK_IMPORTED_MODULE_10__directives__["a" /* BaScrollPosition */],

    __WEBPACK_IMPORTED_MODULE_10__directives__["b" /* BaSlimScroll */],

    __WEBPACK_IMPORTED_MODULE_10__directives__["c" /* BaThemeRun */],

    __WEBPACK_IMPORTED_MODULE_9__components_baCard_baCardBlur_directive__["a" /* BaCardBlur */]

];

var NGA_PIPES = [

    __WEBPACK_IMPORTED_MODULE_11__pipes__["a" /* BaAppPicturePipe */],

    __WEBPACK_IMPORTED_MODULE_11__pipes__["b" /* BaKameleonPicturePipe */],

    __WEBPACK_IMPORTED_MODULE_11__pipes__["c" /* BaProfilePicturePipe */]

];

var NGA_SERVICES = [

    __WEBPACK_IMPORTED_MODULE_12__services__["a" /* BaImageLoaderService */],

    __WEBPACK_IMPORTED_MODULE_12__services__["c" /* BaThemePreloader */],

    __WEBPACK_IMPORTED_MODULE_12__services__["d" /* BaThemeSpinner */],

    __WEBPACK_IMPORTED_MODULE_12__services__["b" /* BaMenuService */]

];

var NGA_VALIDATORS = [

    __WEBPACK_IMPORTED_MODULE_13__validators__["a" /* EmailValidator */],

    __WEBPACK_IMPORTED_MODULE_13__validators__["b" /* EqualPasswordsValidator */]

];

var NgaModule = NgaModule_1 = (function () {

    function NgaModule() {

    }

    NgaModule.forRoot = function () {

        return {

            ngModule: NgaModule_1,

            providers: [

                __WEBPACK_IMPORTED_MODULE_7__theme_configProvider__["a" /* BaThemeConfigProvider */],

                __WEBPACK_IMPORTED_MODULE_6__theme_config__["a" /* BaThemeConfig */]

            ].concat(NGA_VALIDATORS, NGA_SERVICES),

        };

    };

    return NgaModule;

}());

NgaModule = NgaModule_1 = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({

        declarations: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS),

        imports: [

            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],

            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],

            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],

            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],

            __WEBPACK_IMPORTED_MODULE_5__app_translation_module__["a" /* AppTranslationModule */],

            __WEBPACK_IMPORTED_MODULE_4_ngx_uploader__["a" /* NgUploaderModule */]

        ],

        exports: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS)

    })

], NgaModule);



var NgaModule_1;

//# sourceMappingURL=nga.module.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAppPicturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};





var BaAppPicturePipe = (function () {

    function BaAppPicturePipe() {

    }

    BaAppPicturePipe.prototype.transform = function (input) {

        return __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* layoutPaths */].images.root + input;

    };

    return BaAppPicturePipe;

}());

BaAppPicturePipe = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'baAppPicture' })

], BaAppPicturePipe);



//# sourceMappingURL=baAppPicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baAppPicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baAppPicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baAppPicture_pipe__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaKameleonPicturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};





var BaKameleonPicturePipe = (function () {

    function BaKameleonPicturePipe() {

    }

    BaKameleonPicturePipe.prototype.transform = function (input) {

        return __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* layoutPaths */].images.root + 'theme/icon/kameleon/' + input + '.svg';

    };

    return BaKameleonPicturePipe;

}());

BaKameleonPicturePipe = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'baKameleonPicture' })

], BaKameleonPicturePipe);



//# sourceMappingURL=baKameleonPicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baKameleonPicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baKameleonPicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baKameleonPicture_pipe__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaProfilePicturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};





var BaProfilePicturePipe = (function () {

    function BaProfilePicturePipe() {

    }

    BaProfilePicturePipe.prototype.transform = function (input, ext) {

        if (ext === void 0) { ext = 'png'; }

        return __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* layoutPaths */].images.profile + input + '.' + ext;

    };

    return BaProfilePicturePipe;

}());

BaProfilePicturePipe = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'baProfilePicture' })

], BaProfilePicturePipe);



//# sourceMappingURL=baProfilePicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baProfilePicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baProfilePicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baProfilePicture_pipe__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baProfilePicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baProfilePicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__baProfilePicture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baAppPicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baAppPicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__baAppPicture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baKameleonPicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baKameleonPicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__baKameleonPicture__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baImageLoader/baImageLoader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaImageLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};



var BaImageLoaderService = (function () {

    function BaImageLoaderService() {

    }

    BaImageLoaderService.prototype.load = function (src) {

        return new Promise(function (resolve, reject) {

            var img = new Image();

            img.src = src;

            img.onload = function () {

                resolve('Image with src ' + src + ' loaded successfully.');

            };

        });

    };

    return BaImageLoaderService;

}());

BaImageLoaderService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()

], BaImageLoaderService);



//# sourceMappingURL=baImageLoader.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baImageLoader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baImageLoader_service__ = __webpack_require__("../../../../../src/app/theme/services/baImageLoader/baImageLoader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baImageLoader_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baMenu/baMenu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};









var BaMenuService = (function () {

    function BaMenuService(_router) {

        this._router = _router;

        this.menuItems = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);

        this._currentMenuItem = {};

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        // if(this.currentUser===null){

        //   this._router.navigate(['/login']);

        // }

    }

    /**

     * Updates the routes in the menu

     *

     * @param {Routes} routes Type compatible with app.menu.ts

     */

    BaMenuService.prototype.updateMenuByRoutes = function (routes) {

        var convertedRoutes = this.convertRoutesToMenus(__WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](routes));

        // //console.log(convertedRoutes);

        this.menuItems.next(convertedRoutes);

    };

    BaMenuService.prototype.convertRoutesToMenus = function (routes) {

        var items = this._convertArrayToItems(routes);

        return this._skipEmpty(items);

    };

    BaMenuService.prototype.getCurrentItem = function () {

        return this._currentMenuItem;

    };

    BaMenuService.prototype.selectMenuItem = function (menuItems) {

        var _this = this;

        var items = [];

        // //console.log(menuItems);

        menuItems.forEach(function (item) {

            _this._selectItem(item);

            // //console.log(item);

            if (item.selected) {

                _this._currentMenuItem = item;

            }

            if (item.children && item.children.length > 0) {

                item.children = _this.selectMenuItem(item.children);

            }

            if (item.userType === _this.currentUser.user.role || item.userType === '')

                items.push(item);

        });

        // //console.log(items);

        return items;

    };

    BaMenuService.prototype._skipEmpty = function (items) {

        var menu = [];

        items.forEach(function (item) {

            var menuItem;

            if (item.skip) {

                if (item.children && item.children.length > 0) {

                    menuItem = item.children;

                }

            }

            else {

                menuItem = item;

            }

            if (menuItem) {

                menu.push(menuItem);

            }

        });

        return [].concat.apply([], menu);

    };

    BaMenuService.prototype._convertArrayToItems = function (routes, parent) {

        var _this = this;

        var items = [];

        routes.forEach(function (route) {

            items.push(_this._convertObjectToItem(route, parent));

        });

        return items;

    };

    BaMenuService.prototype._convertObjectToItem = function (object, parent) {

        var item = {};

        if (object.data && object.data.menu) {

            // this is a menu object

            item = object.data.menu;

            item.route = object;

            delete item.route.data.menu;

        }

        else {

            item.route = object;

            item.skip = true;

        }

        // we have to collect all paths to correctly build the url then

        if (Array.isArray(item.route.path)) {

            item.route.paths = item.route.path;

        }

        else {

            item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];

            if (!!item.route.path)

                item.route.paths.push(item.route.path);

            // //console.log(item.route.paths);

        }

        if (object.children && object.children.length > 0) {

            item.children = this._convertArrayToItems(object.children, item);

        }

        var prepared = this._prepareItem(item);

        // if current item is selected or expanded - then parent is expanded too

        if ((prepared.selected || prepared.expanded) && parent) {

            parent.expanded = true;

        }

        ////console.log(prepared);

        return prepared;

    };

    BaMenuService.prototype._prepareItem = function (object) {

        if (!object.skip) {

            object.target = object.target || '';

            object.pathMatch = object.pathMatch || 'full';

            return this._selectItem(object);

        }

        return object;

    };

    BaMenuService.prototype._selectItem = function (object) {

        object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');

        return object;

    };

    return BaMenuService;

}());

BaMenuService = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])

], BaMenuService);



var _a;

//# sourceMappingURL=baMenu.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baMenu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenu_service__ = __webpack_require__("../../../../../src/app/theme/services/baMenu/baMenu.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenu_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemePreloader/baThemePreloader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemePreloader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};



var BaThemePreloader = BaThemePreloader_1 = (function () {

    function BaThemePreloader() {

    }

    BaThemePreloader.registerLoader = function (method) {

        BaThemePreloader_1._loaders.push(method);

    };

    BaThemePreloader.clear = function () {

        BaThemePreloader_1._loaders = [];

    };

    BaThemePreloader.load = function () {

        return new Promise(function (resolve, reject) {

            BaThemePreloader_1._executeAll(resolve);

        });

    };

    BaThemePreloader._executeAll = function (done) {

        setTimeout(function () {

            Promise.all(BaThemePreloader_1._loaders).then(function (values) {

                done.call(null, values);

            }).catch(function (error) {

                console.error(error);

            });

        });

    };

    return BaThemePreloader;

}());

BaThemePreloader._loaders = [];

BaThemePreloader = BaThemePreloader_1 = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()

], BaThemePreloader);



var BaThemePreloader_1;

//# sourceMappingURL=baThemePreloader.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemePreloader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemePreloader_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemePreloader/baThemePreloader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemePreloader_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};



var BaThemeSpinner = (function () {

    function BaThemeSpinner() {

        this._selector = 'preloader';

        this._element = document.getElementById(this._selector);

    }

    BaThemeSpinner.prototype.show = function () {

        this._element.style['display'] = 'block';

    };

    BaThemeSpinner.prototype.hide = function (delay) {

        var _this = this;

        if (delay === void 0) { delay = 0; }

        setTimeout(function () {

            _this._element.style['display'] = 'none';

        }, delay);

    };

    return BaThemeSpinner;

}());

BaThemeSpinner = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [])

], BaThemeSpinner);



//# sourceMappingURL=baThemeSpinner.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemeSpinner/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemeSpinner_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baImageLoader__ = __webpack_require__("../../../../../src/app/theme/services/baImageLoader/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baImageLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMenu__ = __webpack_require__("../../../../../src/app/theme/services/baMenu/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__baMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baThemePreloader__ = __webpack_require__("../../../../../src/app/theme/services/baThemePreloader/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__baThemePreloader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baThemeSpinner__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__baThemeSpinner__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};





var BaThemeConfig = (function () {

    function BaThemeConfig(_baConfig) {

        this._baConfig = _baConfig;

    }

    BaThemeConfig.prototype.config = function () {

        // this._baConfig.changeTheme({ name: 'my-theme' });

        //

        // let colorScheme = {

        //   primary: '#209e91',

        //   info: '#2dacd1',

        //   success: '#90b900',

        //   warning: '#dfb81c',

        //   danger: '#e85656',

        // };

        //

        // this._baConfig.changeColors({

        //   default: '#4e4e55',

        //   defaultText: '#aaaaaa',

        //   border: '#dddddd',

        //   borderDark: '#aaaaaa',

        //

        //   primary: colorScheme.primary,

        //   info: colorScheme.info,

        //   success: colorScheme.success,

        //   warning: colorScheme.warning,

        //   danger: colorScheme.danger,

        //

        //   primaryLight: colorHelper.tint(colorScheme.primary, 30),

        //   infoLight: colorHelper.tint(colorScheme.info, 30),

        //   successLight: colorHelper.tint(colorScheme.success, 30),

        //   warningLight: colorHelper.tint(colorScheme.warning, 30),

        //   dangerLight: colorHelper.tint(colorScheme.danger, 30),

        //

        //   primaryDark: colorHelper.shade(colorScheme.primary, 15),

        //   infoDark: colorHelper.shade(colorScheme.info, 15),

        //   successDark: colorHelper.shade(colorScheme.success, 15),

        //   warningDark: colorHelper.shade(colorScheme.warning, 15),

        //   dangerDark: colorHelper.shade(colorScheme.danger, 15),

        //

        //   dashboard: {

        //     blueStone: '#005562',

        //     surfieGreen: '#0e8174',

        //     silverTree: '#6eba8c',

        //     gossip: '#b9f2a1',

        //     white: '#10c4b5',

        //   },

        //

        //   custom: {

        //     dashboardPieChart: colorHelper.hexToRgbA('#aaaaaa', 0.8),

        //     dashboardLineChart: '#6eba8c',

        //   },

        // });

    };

    return BaThemeConfig;

}());

BaThemeConfig = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__["a" /* BaThemeConfigProvider */]) === "function" && _a || Object])

], BaThemeConfig);



var _a;

//# sourceMappingURL=theme.config.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.configProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_constants__ = __webpack_require__("../../../../../src/app/theme/theme.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __metadata = (this && this.__metadata) || function (k, v) {

    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);

};







var BaThemeConfigProvider = (function () {

    function BaThemeConfigProvider() {

        this.basic = {

            default: '#ffffff',

            defaultText: '#ffffff',

            border: '#dddddd',

            borderDark: '#aaaaaa',

        };

        // main functional color scheme

        this.colorScheme = {

            primary: '#00abff',

            info: '#40daf1',

            success: '#8bd22f',

            warning: '#e7ba08',

            danger: '#f95372',

        };

        // dashboard colors for charts

        this.dashboardColors = {

            blueStone: '#40daf1',

            surfieGreen: '#00abff',

            silverTree: '#1b70ef',

            gossip: '#3c4eb9',

            white: '#ffffff',

        };

        this.conf = {

            theme: {

                name: 'ng2',

            },

            colors: {

                default: this.basic.default,

                defaultText: this.basic.defaultText,

                border: this.basic.border,

                borderDark: this.basic.borderDark,

                primary: this.colorScheme.primary,

                info: this.colorScheme.info,

                success: this.colorScheme.success,

                warning: this.colorScheme.warning,

                danger: this.colorScheme.danger,

                primaryLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.primary, 30),

                infoLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.info, 30),

                successLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.success, 30),

                warningLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.warning, 30),

                dangerLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.danger, 30),

                primaryDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.primary, 15),

                infoDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.info, 15),

                successDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.success, 15),

                warningDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.warning, 15),

                dangerDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.danger, 15),

                dashboard: {

                    blueStone: this.dashboardColors.blueStone,

                    surfieGreen: this.dashboardColors.surfieGreen,

                    silverTree: this.dashboardColors.silverTree,

                    gossip: this.dashboardColors.gossip,

                    white: this.dashboardColors.white,

                },

                custom: {

                    dashboardPieChart: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].hexToRgbA(this.basic.defaultText, 0.8),

                    dashboardLineChart: this.basic.defaultText,

                }

            }

        };

    }

    BaThemeConfigProvider.prototype.get = function () {

        return this.conf;

    };

    BaThemeConfigProvider.prototype.changeTheme = function (theme) {

        __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](this.get().theme, theme);

    };

    BaThemeConfigProvider.prototype.changeColors = function (colors) {

        __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](this.get().colors, colors);

    };

    return BaThemeConfigProvider;

}());

BaThemeConfigProvider = __decorate([

    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),

    __metadata("design:paramtypes", [])

], BaThemeConfigProvider);



//# sourceMappingURL=theme.configProvider.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IMAGES_ROOT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return layoutSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return layoutPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isMobile; });
var IMAGES_ROOT = 'assets/img/';

var layoutSizes = {

    resWidthCollapseSidebar: 1200,

    resWidthHideSidebar: 500

};

var layoutPaths = {

    images: {

        root: IMAGES_ROOT,

        profile: IMAGES_ROOT + 'app/profile/',

        amMap: 'assets/img/theme/vendor/ammap/',

        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'

    }

};

var colorHelper = (function () {

    function colorHelper() {

    }

    return colorHelper;

}());



colorHelper.shade = function (color, weight) {

    return colorHelper.mix('#000000', color, weight);

};

colorHelper.tint = function (color, weight) {

    return colorHelper.mix('#ffffff', color, weight);

};

colorHelper.hexToRgbA = function (hex, alpha) {

    var c;

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {

        c = hex.substring(1).split('');

        if (c.length == 3) {

            c = [c[0], c[0], c[1], c[1], c[2], c[2]];

        }

        c = '0x' + c.join('');

        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';

    }

    throw new Error('Bad Hex');

};

colorHelper.mix = function (color1, color2, weight) {

    var d2h = function (d) { return d.toString(16); };

    var h2d = function (h) { return parseInt(h, 16); };

    var result = "#";

    for (var i = 1; i < 7; i += 2) {

        var color1Part = h2d(color1.substr(i, 2));

        var color2Part = h2d(color2.substr(i, 2));

        var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));

        result += ('0' + resultPart).slice(-2);

    }

    return result;

};

var isMobile = function () { return (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase()); };

//# sourceMappingURL=theme.constants.js.map

/***/ }),

/***/ "../../../../../src/app/theme/validators/email.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {

    function EmailValidator() {

    }

    EmailValidator.validate = function (c) {

        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return EMAIL_REGEXP.test(c.value) ? null : {

            validateEmail: {

                valid: false

            }

        };

    };

    return EmailValidator;

}());



//# sourceMappingURL=email.validator.js.map

/***/ }),

/***/ "../../../../../src/app/theme/validators/equalPasswords.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualPasswordsValidator; });
var EqualPasswordsValidator = (function () {

    function EqualPasswordsValidator() {

    }

    EqualPasswordsValidator.validate = function (firstField, secondField) {

        return function (c) {

            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {

                passwordsEqual: {

                    valid: false

                }

            };

        };

    };

    return EqualPasswordsValidator;

}());



//# sourceMappingURL=equalPasswords.validator.js.map

/***/ }),

/***/ "../../../../../src/app/theme/validators/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_validator__ = __webpack_require__("../../../../../src/app/theme/validators/email.validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__email_validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equalPasswords_validator__ = __webpack_require__("../../../../../src/app/theme/validators/equalPasswords.validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__equalPasswords_validator__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map