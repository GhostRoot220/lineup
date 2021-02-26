(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-exploremenu-explore-report-explore-report-module"],{

/***/ "./src/app/page/mainmenu/exploremenu/explore-report/explore-report.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/explore-report/explore-report.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ExploreReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreReportPageModule", function() { return ExploreReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _explore_report_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore-report.page */ "./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.ts");








var routes = [
    {
        path: '',
        component: _explore_report_page__WEBPACK_IMPORTED_MODULE_7__["ExploreReportPage"]
    }
];
var ExploreReportPageModule = /** @class */ (function () {
    function ExploreReportPageModule() {
    }
    ExploreReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_explore_report_page__WEBPACK_IMPORTED_MODULE_7__["ExploreReportPage"]]
        })
    ], ExploreReportPageModule);
    return ExploreReportPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"navback\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{locationName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Predicted Wave Size</ion-label>\n    <ion-input type=\"text\" disabled value=\"{{reportWaveSize | round: false}}ft\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Predicted Wave Quality</ion-label>\n    <ion-input type=\"text\" disabled [value]=\"waveQualities[reportWaveQuality]\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"camera\" (click)=\"onClickCameraIcon()\"></ion-icon>\n    <ion-textarea [(ngModel)]=\"reportTxt\" placeholder=\"Comment on surf conditions\"></ion-textarea>\n  </ion-item>\n\n  <div *ngIf=\"postFile!=''\" class=\"explore-report-postimg\">\n    <ng-container *ngIf=\"fileType==0; else videoContainer\">\n      <img src=\"{{postFile}}\" />\n    </ng-container>\n    <ng-template #videoContainer>\n      <p (click)=\"onClickPlayVideo()\">{{videoFile.name}}</p>\n    </ng-template>\n  </div>\n\n  <div id=\"explore-report-btnpost\">\n    <ion-button (click)=\"postReport()\">Post</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n\nion-toolbar {\n  --background: #84A1B3; }\n\nion-toolbar p {\n    color: #CAE9F7;\n    font-weight: bold;\n    padding-right: 5px;\n    position: relative; }\n\nion-title {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #CAE9F7;\n  font-weight: bold; }\n\n#explore-report-waveheight,\n#explore-report-wavequality {\n  display: flex;\n  padding: 0 10vw; }\n\n#explore-report-waveheight div,\n  #explore-report-wavequality div {\n    flex: 1; }\n\n#explore-report-waveheight > div:nth-child(2) > p,\n#explore-report-wavequality > div:nth-child(2) > p {\n  color: white; }\n\n#explore-report-wavequality {\n  margin-top: 2vh; }\n\n#explore-report-waveheight > div:first-child,\n#explore-report-wavequality > div:first-child {\n  margin-left: 20px; }\n\n#explore-report-waveheight > div:nth-child(2),\n#explore-report-wavequality > div:nth-child(2) {\n  background-color: #77a0b3;\n  border-radius: 6px;\n  margin: 10px; }\n\n#explore-report-waveheight > div:nth-child(2) p,\n  #explore-report-wavequality > div:nth-child(2) p {\n    margin: 5px;\n    text-align: center; }\n\n#explore-report-btnpost {\n  text-align: center;\n  margin-top: 3vh; }\n\n.explore-report-postimg {\n  margin-top: 2vh;\n  width: 100%;\n  height: 80px;\n  overflow: hidden;\n  text-align: center; }\n\n.explore-report-postimg img {\n    width: 80px;\n    min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9leHBsb3JlbWVudS9leHBsb3JlLXJlcG9ydC9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxtYWlubWVudVxcZXhwbG9yZW1lbnVcXGV4cGxvcmUtcmVwb3J0XFxleHBsb3JlLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxxQkFBYSxFQUFBOztBQURqQjtJQUdRLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCOztFQUVJLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBSG5COztJQU1RLE9BQU8sRUFBQTs7QUFJZjs7RUFFSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjs7RUFFSSxpQkFBaUIsRUFBQTs7QUFHckI7O0VBRUkseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBSmhCOztJQU9RLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFMdEI7SUFRUSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21haW5tZW51L2V4cGxvcmVtZW51L2V4cGxvcmUtcmVwb3J0L2V4cGxvcmUtcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM4NEExQjM7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM4NEExQjM7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjQ0FFOUY3O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgY29sb3I6ICNDQUU5Rjc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNleHBsb3JlLXJlcG9ydC13YXZlaGVpZ2h0LFxuI2V4cGxvcmUtcmVwb3J0LXdhdmVxdWFsaXR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgMTB2dztcblxuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxufVxuXG4jZXhwbG9yZS1yZXBvcnQtd2F2ZWhlaWdodD5kaXY6bnRoLWNoaWxkKDIpPnAsXG4jZXhwbG9yZS1yZXBvcnQtd2F2ZXF1YWxpdHk+ZGl2Om50aC1jaGlsZCgyKT5wIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNleHBsb3JlLXJlcG9ydC13YXZlcXVhbGl0eSB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4jZXhwbG9yZS1yZXBvcnQtd2F2ZWhlaWdodD5kaXY6Zmlyc3QtY2hpbGQsXG4jZXhwbG9yZS1yZXBvcnQtd2F2ZXF1YWxpdHk+ZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuI2V4cGxvcmUtcmVwb3J0LXdhdmVoZWlnaHQ+ZGl2Om50aC1jaGlsZCgyKSxcbiNleHBsb3JlLXJlcG9ydC13YXZlcXVhbGl0eT5kaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdhMGIzO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDEwcHg7XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbiNleHBsb3JlLXJlcG9ydC1idG5wb3N0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xufVxuXG4uZXhwbG9yZS1yZXBvcnQtcG9zdGltZyB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ExploreReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreReportPage", function() { return ExploreReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");














var ExploreReportPage = /** @class */ (function () {
    function ExploreReportPage(route, navCtrl, firebaseService, myUtils, loadingCtrl, actionSheetCtrl, toastService, file, camera, mediaCapture, media, streamingMedia, changeDetector) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.myUtils = myUtils;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastService = toastService;
        this.file = file;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.media = media;
        this.streamingMedia = streamingMedia;
        this.changeDetector = changeDetector;
        this.currentUserInfo = {};
        this.waveQualities = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_11__["WAVEQUALITIES"];
        this.reportWaveQuality = '';
        this.reportWaveSize = '';
        this.reportTxt = '';
        this.postFile = '';
        /**
           * type
           *  0: Image
           *  1: Video
           */
        this.fileType = 0;
        this.videoFile = {
            name: '',
            path: ''
        };
    }
    ExploreReportPage.prototype.ngOnInit = function () {
        this.locationId = this.route.snapshot.paramMap.get('locationid');
        this.locationName = this.route.snapshot.paramMap.get('name');
        this.reportWaveSize = (Number(this.route.snapshot.paramMap.get('wavesize')) * src_app_constants_constants__WEBPACK_IMPORTED_MODULE_11__["MTOFRATIO"]).toString();
        this.reportWaveQuality = this.route.snapshot.paramMap.get('wavequality');
        this.initPage();
    };
    ExploreReportPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pageLoader, profileInfoSnapshot, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        pageLoader = _a.sent();
                        return [4 /*yield*/, pageLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.getUserProfile(this.firebaseService.getUID())];
                    case 4:
                        profileInfoSnapshot = _a.sent();
                        this.currentUserInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, profileInfoSnapshot.val());
                        pageLoader.dismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        pageLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ExploreReportPage.prototype.postReport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reportData, reportLoader, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reportData = {
                            id: '',
                            uid: this.currentUserInfo.uid,
                            username: this.currentUserInfo.fname + ' ' + this.currentUserInfo.lname,
                            reporttxt: this.reportTxt,
                            location: {
                                lat: this.myUtils.currentUserLocation.lat,
                                long: this.myUtils.currentUserLocation.long,
                                name: this.locationName,
                            },
                            locationId: this.locationId,
                            reporterLoc: {
                                lat: this.myUtils.currentUserLocation.lat,
                                long: this.myUtils.currentUserLocation.long
                            },
                            waveHeight: this.reportWaveSize,
                            waveQuality: this.reportWaveQuality,
                            createdat: firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP,
                            postfile: {
                                data: '',
                                type: this.fileType
                            },
                            review: 0
                        };
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait...'
                            })];
                    case 1:
                        reportLoader = _a.sent();
                        return [4 /*yield*/, reportLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.setWeatherReport(this.postFile, reportData)];
                    case 4:
                        _a.sent();
                        this.postFile = '';
                        reportLoader.dismiss();
                        this.toastService.showToast('Report is posted');
                        this.navCtrl.pop();
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        reportLoader.dismiss();
                        this.toastService.showToast(err_2.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ExploreReportPage.prototype.onClickCameraIcon = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fileType = 0;
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'File',
                                buttons: [{
                                        text: 'Take Picture',
                                        icon: 'aperture',
                                        handler: function () {
                                            _this.fileType = 0;
                                            _this.takePicture();
                                        }
                                    }, {
                                        text: 'Record Video',
                                        icon: 'videocam',
                                        handler: function () {
                                            _this.fileType = 1;
                                            _this.videoFile = {
                                                name: '',
                                                path: ''
                                            };
                                            _this.captureVideo();
                                        }
                                    }, {
                                        text: 'Cancel',
                                        icon: 'close',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExploreReportPage.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, imageData, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            correctOrientation: true
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        imageData = _a.sent();
                        this.postFile = 'data:image/jpeg;base64,' + imageData;
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExploreReportPage.prototype.captureVideo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var videoLoader, capturedOptions, res, capturedFile, dir, fromDirectory, streamingOptions, _a, err_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        videoLoader = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, , 9]);
                        capturedOptions = {
                            limit: 1,
                            quality: 0
                        };
                        return [4 /*yield*/, this.mediaCapture.captureVideo(capturedOptions)];
                    case 3:
                        res = _b.sent();
                        return [4 /*yield*/, videoLoader.present()];
                    case 4:
                        _b.sent();
                        capturedFile = res[0];
                        this.videoFile = {
                            name: capturedFile.name,
                            path: capturedFile.fullPath
                        };
                        console.log(capturedFile);
                        dir = capturedFile['localURL'].split('/');
                        dir.pop();
                        fromDirectory = dir.join('/');
                        console.log(this.videoFile);
                        this.changeDetector.detectChanges();
                        streamingOptions = {
                            successCallback: function () { console.log('Video played'); },
                            errorCallback: function (e) { console.log('Error streaming'); },
                            orientation: 'landscape',
                            shouldAutoClose: true,
                            controls: false
                        };
                        _a = this;
                        return [4 /*yield*/, this.file.readAsDataURL(fromDirectory, this.videoFile.name)];
                    case 5:
                        _a.postFile = _b.sent();
                        return [4 /*yield*/, videoLoader.dismiss()];
                    case 6:
                        _b.sent();
                        this.streamingMedia.playVideo(capturedFile.fullPath, streamingOptions);
                        return [3 /*break*/, 9];
                    case 7:
                        err_4 = _b.sent();
                        return [4 /*yield*/, videoLoader.dismiss()];
                    case 8:
                        _b.sent();
                        console.log(err_4);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ExploreReportPage.prototype.onClickPlayVideo = function () {
        var streamingOptions = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: false
        };
        this.streamingMedia.playVideo(this.videoFile.path, streamingOptions);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myVideo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExploreReportPage.prototype, "myVideo", void 0);
    ExploreReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explore-report',
            template: __webpack_require__(/*! ./explore-report.page.html */ "./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.html"),
            styles: [__webpack_require__(/*! ./explore-report.page.scss */ "./src/app/page/mainmenu/exploremenu/explore-report/explore-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_13__["MyutilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            src_app_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_12__["ShowtoastService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__["MediaCapture"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_7__["Media"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_8__["StreamingMedia"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ExploreReportPage);
    return ExploreReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-exploremenu-explore-report-explore-report-module.js.map