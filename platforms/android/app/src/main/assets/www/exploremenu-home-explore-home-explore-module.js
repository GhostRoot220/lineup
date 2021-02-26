(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exploremenu-home-explore-home-explore-module"],{

/***/ "./src/app/page/mainmenu/exploremenu/home-explore/home-explore.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/home-explore/home-explore.module.ts ***!
  \*******************************************************************************/
/*! exports provided: HomeExplorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeExplorePageModule", function() { return HomeExplorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_explore_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-explore.page */ "./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.ts");








var HomeExplorePageModule = /** @class */ (function () {
    function HomeExplorePageModule() {
    }
    HomeExplorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _home_explore_page__WEBPACK_IMPORTED_MODULE_7__["HomeExplorePage"] }])
            ],
            declarations: [_home_explore_page__WEBPACK_IMPORTED_MODULE_7__["HomeExplorePage"]]
        })
    ], HomeExplorePageModule);
    return HomeExplorePageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-searchbar style=\"z-index:2;\" [(ngModel)]=\"locationQuery\" (ionChange)=\"searchPlace()\" placeholder=\"Search the beach\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list class=\"ion-no-padding\">\n    <ion-item *ngFor=\"let place of places\" (click)=\"selectPlace(place)\">{{place.name}}</ion-item>\n  </ion-list>\n\n  <div #exploremap id=\"home-explore-map\"></div>\n  <div id=\"home-explore-selected-location\">\n    <p *ngIf=\"waveInfo.location.name!=''\">\n      {{waveInfo.location.name}}\n    </p>\n  </div>\n  <ion-row>\n    <ion-col size=\"12\" (click)=\"onClickDetail()\">\n      <div class=\"home-explore-mapinfo-waveheight\">\n        <p>Wave height: <span>{{waveInfo.waveHeight | round: false}}ft</span></p>\n      </div>\n      <div class=\"home-explore-mapinfo-wavequality\">\n        <p>Wave form: <span>{{arrWaveQualities[waveInfo.waveForm]}}</span></p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <a (click)=\"onClickMissingReport()\">Missing Beach?</a>\n    </ion-col>\n  </ion-row>\n  <div class=\"home-explore-mapinfo\">\n\n<!--    <div class=\"home-explore-mapinfo-container\" (click)=\"onClickDetail()\">-->\n<!--      -->\n<!--    </div>-->\n<!--    <div class=\"home-explore-mapinfo-report-container\">-->\n<!--      -->\n<!--    </div>-->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #84A1B3; }\n\nion-searchbar {\n  --background: var(--ion-color-primary-contrast); }\n\nion-list {\n  position: absolute;\n  width: 100%;\n  z-index: 2; }\n\n#home-explore-map {\n  width: 100%;\n  height: 60vh; }\n\n#home-explore-selected-location {\n  background-color: #7dc7ff; }\n\n#home-explore-selected-location p {\n    padding: 5px 16px;\n    margin: 0;\n    color: white;\n    font-weight: bold; }\n\n.home-explore-mapinfo {\n  margin-top: 1.5vh;\n  position: relative;\n  display: flex; }\n\n.home-explore-mapinfo img {\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    transform: translate(0, -50%); }\n\n.home-explore-mapinfo-container {\n  flex: 2;\n  padding: 10px; }\n\n.home-explore-mapinfo-container p {\n    margin: 3px; }\n\n.home-explore-mapinfo-waveheight, .home-explore-mapinfo-wavequality {\n  color: #2f2f2f; }\n\n.home-explore-mapinfo-report-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9leHBsb3JlbWVudS9ob21lLWV4cGxvcmUvRTpcXHdvcmtzcGFjZVxcQW5kcm9pZFxcbGluZXVwKDA5LTE4KS9zcmNcXGFwcFxccGFnZVxcbWFpbm1lbnVcXGV4cGxvcmVtZW51XFxob21lLWV4cGxvcmVcXGhvbWUtZXhwbG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxxQkFBYSxFQUFBOztBQUlyQjtFQUNJLCtDQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QixFQUFBOztBQUQ3QjtJQUdRLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUhqQjtJQUtRLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLDZCQUE2QixFQUFBOztBQUlyQztFQUNJLE9BQU87RUFDUCxhQUFhLEVBQUE7O0FBRmpCO0lBSVEsV0FBVyxFQUFBOztBQUluQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbWFpbm1lbnUvZXhwbG9yZW1lbnUvaG9tZS1leHBsb3JlL2hvbWUtZXhwbG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzg0QTFCMztcbiAgICB9XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuXG5pb24tbGlzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7ICAgXG59XG5cbiNob21lLWV4cGxvcmUtbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwdmg7XG59XG5cbiNob21lLWV4cGxvcmUtc2VsZWN0ZWQtbG9jYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZGM3ZmY7XG4gICAgcCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG4uaG9tZS1leHBsb3JlLW1hcGluZm8ge1xuICAgIG1hcmdpbi10b3A6IDEuNXZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICB9XG59XG5cbi5ob21lLWV4cGxvcmUtbWFwaW5mby1jb250YWluZXIge1xuICAgIGZsZXg6IDI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgfVxufVxuXG4uaG9tZS1leHBsb3JlLW1hcGluZm8td2F2ZWhlaWdodCwgLmhvbWUtZXhwbG9yZS1tYXBpbmZvLXdhdmVxdWFsaXR5IHtcbiAgICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLmhvbWUtZXhwbG9yZS1tYXBpbmZvLXJlcG9ydC1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.ts ***!
  \*****************************************************************************/
/*! exports provided: HomeExplorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeExplorePage", function() { return HomeExplorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_rest_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/rest/weather.service */ "./src/app/services/rest/weather.service.ts");
/* harmony import */ var src_app_services_map_map_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/map/map-service.service */ "./src/app/services/map/map-service.service.ts");
/* harmony import */ var src_app_page_modal_writemessage_writemessage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/page/modal/writemessage/writemessage.page */ "./src/app/page/modal/writemessage/writemessage.page.ts");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");










var HomeExplorePage = /** @class */ (function () {
    function HomeExplorePage(router, weatherService, loadingCtrl, mapService, modalCtrl, firebaseService, myUtils) {
        this.router = router;
        this.weatherService = weatherService;
        this.loadingCtrl = loadingCtrl;
        this.mapService = mapService;
        this.modalCtrl = modalCtrl;
        this.firebaseService = firebaseService;
        this.myUtils = myUtils;
        this.resorts = [];
        this.waveInfo = {
            waveHeight: '',
            waveForm: null,
            location: {
                lat: null,
                long: null,
                name: ''
            }
        };
        this.locationQuery = '';
        this.places = [];
        this.arrWaveQualities = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_8__["WAVEQUALITIES"];
    }
    HomeExplorePage.prototype.ngOnInit = function () {
        this.initMapElement();
    };
    HomeExplorePage.prototype.initMapElement = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentLoc, mapLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentLoc = this.myUtils.currentUserLocation;
                        if (currentLoc.lat == null && currentLoc.long == null) {
                            alert('Please enable geolocation to get Correct Location!');
                        }
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Initializing map...'
                            })];
                    case 1:
                        mapLoader = _a.sent();
                        return [4 /*yield*/, mapLoader.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.mapService.loadGoogleMaps(this.exploreMapRef.nativeElement)];
                    case 3:
                        _a.sent();
                        setTimeout(function () {
                            mapLoader.dismiss();
                            _this.addMarkers();
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeExplorePage.prototype.addMarkers = function () {
        var self = this;
        var img = {
            url: 'assets/imgs/img-map-marker.svg',
            size: new google.maps.Size(32, 32)
        };
        var locationsRef = this.firebaseService.getAllLocations();
        var locationsRefListener = locationsRef.on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var location = childSnapshot.val();
                location.itemid = childSnapshot.key;
                if (location.location.lat !== '' && location.location.long !== '') {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(location.location.lat, location.location.long),
                        icon: img,
                        map: self.mapService.map
                    });
                    // tslint:disable-next-line:no-shadowed-variable
                    google.maps.event.addListener(marker, 'click', (function (marker) {
                        return function () {
                            self.getWeatherInfoForlocation(location);
                        };
                    })(marker));
                }
                self.resorts.push(location);
            });
        });
    };
    HomeExplorePage.prototype.getWeatherInfoForlocation = function (location) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var infoLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.myUtils.setCurrentLocation(location.location.lat, location.location.long);
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        infoLoader = _a.sent();
                        return [4 /*yield*/, infoLoader.present()];
                    case 2:
                        _a.sent();
                        this.weatherService.getWeatherInfo(location.location)
                            .subscribe(function (weather) {
                            // console.log(weather);
                            if (weather && weather.data.weather) {
                                _this.myUtils.setWeatherInfo(weather.data.weather);
                                var currentLocalTime_1 = _this.myUtils.getLocationLocalTime(location.location);
                                // tslint:disable-next-line:max-line-length
                                var currentWeatherId = weather.data.weather[0].hourly.findIndex(function (x) { return Number(x.time) / 100 === Number(currentLocalTime_1); });
                                var tmpWeather = weather.data.weather[0].hourly[currentWeatherId];
                                _this.waveInfo.location.name = location.name;
                                _this.waveInfo.waveHeight = (Number(tmpWeather.sigHeight_m) * src_app_constants_constants__WEBPACK_IMPORTED_MODULE_8__["MTOFRATIO"]).toString();
                                // tslint:disable-next-line:max-line-length
                                _this.waveInfo.waveForm = _this.myUtils.getWaveQuality(tmpWeather.sigHeight_m, tmpWeather.swellPeriod_secs, _this.myUtils.convertKPHtoMPS(Number(tmpWeather.windspeedKmph)));
                                _this.selectedItem = location;
                            }
                            else {
                                _this.waveInfo.waveHeight = '';
                                _this.waveInfo.waveForm = '';
                                _this.waveInfo.location.name = '';
                                _this.selectedItem = null;
                            }
                            infoLoader.dismiss();
                        }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeExplorePage.prototype.searchPlace = function () {
        if (this.locationQuery !== '') {
            this.places = this.myUtils.filterResorts(this.resorts, this.locationQuery);
        }
        else {
            this.places = [];
        }
    };
    HomeExplorePage.prototype.selectPlace = function (place) {
        this.places = [];
        this.mapService.map.setCenter({ lat: Number(place.location.lat), lng: Number(place.location.long) });
        this.getWeatherInfoForlocation(place);
    };
    HomeExplorePage.prototype.onClickDetail = function () {
        if (this.waveInfo.location.name === '') {
            alert('Location is not selected!');
        }
        else {
            // tslint:disable-next-line:max-line-length
            this.router.navigateByUrl('/locationdetail/' + this.selectedItem.itemid + '/' + this.selectedItem.name);
        }
    };
    HomeExplorePage.prototype.onClickMissingReport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reportModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_page_modal_writemessage_writemessage_page__WEBPACK_IMPORTED_MODULE_6__["WritemessagePage"],
                            cssClass: 'report-modal',
                            componentProps: {
                                reporttype: 3
                            }
                        })];
                    case 1:
                        reportModal = _a.sent();
                        return [4 /*yield*/, reportModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('exploremap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeExplorePage.prototype, "exploreMapRef", void 0);
    HomeExplorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-explore',
            template: __webpack_require__(/*! ./home-explore.page.html */ "./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.html"),
            styles: [__webpack_require__(/*! ./home-explore.page.scss */ "./src/app/page/mainmenu/exploremenu/home-explore/home-explore.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_rest_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_map_map_service_service__WEBPACK_IMPORTED_MODULE_5__["MapServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_7__["MyutilsService"]])
    ], HomeExplorePage);
    return HomeExplorePage;
}());



/***/ }),

/***/ "./src/app/services/map/map-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/map/map-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MapServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapServiceService", function() { return MapServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myutils_myutils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");





var MapServiceService = /** @class */ (function () {
    function MapServiceService(http, geolocation, myUtils) {
        this.http = http;
        this.geolocation = geolocation;
        this.myUtils = myUtils;
        this.mapInitialised = false;
        this.currentPosition = null;
        this.locationWatcher = null;
        this.contentHeader = new Headers({ 'Content-Type': 'application/json' });
        this.google_api_key = 'AIzaSyAbgf69ga2QJDlfL6KMMg9yzdB8IAPkuOw';
    }
    MapServiceService.prototype.getAddress = function (params) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long;
        return this.GET(url);
    };
    MapServiceService.prototype.getStreetAddress = function (params) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long + '&result_type=street_address';
        return this.GET(url);
    };
    MapServiceService.prototype.GET = function (url) {
        return this.http.get(url);
    };
    MapServiceService.prototype.loadGoogleMaps = function (mapElement) {
        var _this = this;
        this.mapElement = mapElement;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                window['mapInit'] = function () {
                    // this.initMap().then(() => {
                    //   resolve(true);
                    // });
                    _this.initMap();
                    resolve(true);
                };
                var script = document.createElement("script");
                script.id = "googleMaps";
                if (_this.google_api_key) {
                    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _this.google_api_key + '&callback=mapInit&libraries=places';
                }
                else {
                    script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
                }
                document.body.appendChild(script);
            }
            else {
                // this.initMap().then(() => {
                //   resolve(true);
                // });
                _this.initMap();
                resolve(true);
            }
        });
    };
    MapServiceService.prototype.initMap = function () {
        this.mapInitialised = true;
        var currentLocation = this.myUtils.currentUserLocation;
        if (currentLocation.lat == null && currentLocation.long == null) {
            currentLocation.lat = 39.0564309;
            currentLocation.long = -100.553916;
        }
        var latLng = new google.maps.LatLng(Number(currentLocation.lat), Number(currentLocation.long));
        var mapOptions = {
            center: latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement, mapOptions);
        // return new Promise((resolve) => {
        //   this.geolocation.getCurrentPosition().then((position) => {
        //     this.currentPosition = {
        //       lat: position.coords.latitude,
        //       lon: position.coords.longitude
        //     };
        // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // let mapOptions = {
        //   center: latLng,
        //   zoom: 10,
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // }
        // this.map = new google.maps.Map(this.mapElement, mapOptions);
        //     resolve(true);
        //   });
        // });
    };
    MapServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _myutils_myutils_service__WEBPACK_IMPORTED_MODULE_4__["MyutilsService"]])
    ], MapServiceService);
    return MapServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=exploremenu-home-explore-home-explore-module.js.map