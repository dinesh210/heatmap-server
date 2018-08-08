webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 600px;\n}\n\n\n* {\n  font-family: Lato;\n}\n\n\na {\n  color: darkblue;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<agm-map \n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"zoom\"\n  [disableDefaultUI]=\"false\"\n  [zoomControl]=\"false\"\n  (mapClick)=\"mapClicked($event)\">\n\n  <agm-marker \n      *ngFor=\"let m of markers; let i = index\"\n      (markerClick)=\"clickedMarker(m.label, i)\"\n      [latitude]=\"m.lat\"\n      [longitude]=\"m.lng\"\n      [label]=\"\"\n      [markerDraggable]=\"false\"\n      [iconUrl]=icon\n      >\n      \n    <agm-info-window>\n      <strong [innerHTML]=\"vehicleInfo\"></strong>\n    </agm-info-window>\n    \n  </agm-marker>\n  \n  <agm-circle *ngFor=\"let c of circles; let j = index\"\n  [latitude]=\"c.lat\" [longitude]=\"c.lng\" \n      [radius]=\"5000\"\n      [fillColor]=c.heat\n      [circleDraggable]=\"false\"\n      [editable]=\"false\">\n  </agm-circle>\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    // circles: HeatMap[] = [];
    function AppComponent(appService) {
        this.appService = appService;
        // google maps zoom level
        this.zoom = 9.4;
        this.icon = '/assets/vehicle.png';
        // initial center position for the map
        this.lat = 51.51502;
        this.lng = -0.204556;
        this.lat2 = 51.513465000000004;
        this.lng2 = -0.100127;
        this.vehicleInfo = '';
        this.color = 'red';
        this.markers = [];
        this.circles = [];
        this.alive = false;
        this.alive = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get our data immediately when the component inits
        this.appService.getHeatMap()
            .first() // only gets fired once
            .subscribe(function (data) {
            _this.circles = data;
        });
        this.appService.getVehicle()
            .first() // only gets fired once
            .subscribe(function (data) {
            _this.markers = data;
        });
        // get our data every subsequent 10 seconds
        __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(10000)
            .takeWhile(function () { return _this.alive; }) // only fires when component is alive
            .subscribe(function () {
            _this.appService.getHeatMap()
                .subscribe(function (data) {
                _this.circles = data;
            });
        });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(60000)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
            _this.appService.getVehicle()
                .subscribe(function (data) {
                _this.markers = data;
            });
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    AppComponent.prototype.clickedMarker = function (label, index) {
        console.log(index);
        this.vehicleInfo = 'Number: ' + label + ' <br/>' + ' Location: (' + this.markers[index].lat + ',' + this.markers[index].lng + ')';
    };
    AppComponent.prototype.mapClicked = function ($event) {
    };
    AppComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* APPRestService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_js_marker_clusterer__ = __webpack_require__("../../../../@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    // please get your own API key here:
                    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                    apiKey: 'AIzaSyBQO5BdoHgaOugb0f9L1NPqURZsNSL9imo' + '&libraries=visualization'
                }),
                __WEBPACK_IMPORTED_MODULE_6__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* APPRestService */]
            ]
            // schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPRestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var APPRestService = (function () {
    //   private url = 'https://heatmap.cfapps.io'; // full uri of the service to consume here
    function APPRestService(http) {
        this.http = http;
    }
    APPRestService.prototype.getHeatMap = function () {
        return this.http
            .get('/traffic/heatmaps')
            .map(function (res) { return res.json(); });
    };
    APPRestService.prototype.getVehicle = function () {
        return this.http
            .get('/traffic/vehicles')
            .map(function (res) { return res.json(); });
    };
    APPRestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], APPRestService);
    return APPRestService;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`. 


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map