(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-exploremenu-reportitems-reportitems-module"],{

/***/ "./src/app/page/mainmenu/exploremenu/reportitems/reportitems.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/reportitems/reportitems.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ReportitemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportitemsPageModule", function() { return ReportitemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/page/modal/modal.module */ "./src/app/page/modal/modal.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _reportitems_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reportitems.page */ "./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.ts");









var routes = [
    {
        path: '',
        component: _reportitems_page__WEBPACK_IMPORTED_MODULE_8__["ReportitemsPage"]
    }
];
var ReportitemsPageModule = /** @class */ (function () {
    function ReportitemsPageModule() {
    }
    ReportitemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reportitems_page__WEBPACK_IMPORTED_MODULE_8__["ReportitemsPage"]]
        })
    ], ReportitemsPageModule);
    return ReportitemsPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"navback\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{locationTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"home-location-detail-reports-item\" *ngFor=\"let report of arrReports\">\n    <div class=\"home-location-detail-reports\"></div>\n    <div class=\"home-location-detail-reports-content\">\n      <div class=\"home-location-detail-reports-img\">\n        <img *ngIf=\"report.postfile.data!=''\" [src]=\"report.postfile.data\" (click)=\"viewReportImage(report.postfile.data)\"/>\n        <img *ngIf=\"report.postfile.data==''\" src=\"assets/imgs/app_icon.png\" (click)=\"viewReportImage('assets/imgs/app_icon.png')\"/>\n      </div>\n      <div class=\"home-location-detail-reports-txt\">\n        <p>{{report.reporttxt}}</p>\n      </div>\n    </div>\n    <div class=\"home-location-detail-reports-footer\">\n      <div>\n        <p>{{report.username | formatname}}</p>\n      </div>\n      <div>\n        <p>\n          {{report.createdat | millitotime: true}}\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  position: relative;\n  --background: #84A1B3; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16pt;\n    margin-left: 16px; }\n  ion-header ion-toolbar ion-title {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #CAE9F7; }\n  .home-location-detail-reports-item {\n  margin-bottom: 2vh;\n  box-shadow: 0 0 5px #cbcbcb; }\n  .home-location-detail-reports-header {\n  display: flex;\n  padding: 0 5px;\n  background-color: #7dc7ff; }\n  .home-location-detail-reports-header div {\n    flex: 1; }\n  .home-location-detail-reports-header div p {\n      margin: 5px; }\n  .home-location-detail-reports-content {\n  padding: 10px;\n  display: flex; }\n  .home-location-detail-reports-img {\n  flex: 1; }\n  .home-location-detail-reports-txt {\n  flex: 4;\n  padding: 10px; }\n  .home-location-detail-reports-txt p {\n    color: #5e5e5e;\n    margin: 5px 0; }\n  .home-location-detail-reports-img {\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  text-align: center; }\n  .home-location-detail-reports-img img {\n    width: 100%;\n    min-height: 100%; }\n  .home-location-detail-reports-footer {\n  display: flex;\n  padding: 0 5px; }\n  .home-location-detail-reports-footer div p {\n    font-size: 11pt;\n    margin: 10px;\n    color: #2f7bab; }\n  .home-location-detail-reports-footer > div:first-child {\n  flex: 2; }\n  .home-location-detail-reports-footer > div:nth-child(2) {\n  flex: 3.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9leHBsb3JlbWVudS9yZXBvcnRpdGVtcy9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxtYWlubWVudVxcZXhwbG9yZW1lbnVcXHJlcG9ydGl0ZW1zXFxyZXBvcnRpdGVtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0I7RUFDbEIscUJBQWEsRUFBQTtFQUhyQjtJQUtZLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQU43QjtJQVNZLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxjQUFjLEVBQUE7RUFLMUI7RUFDSSxrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7RUFHL0I7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLHlCQUF5QixFQUFBO0VBSDdCO0lBS1EsT0FBTyxFQUFBO0VBTGY7TUFPWSxXQUFXLEVBQUE7RUFLdkI7RUFDSSxhQUFhO0VBQ2IsYUFBYSxFQUFBO0VBR2pCO0VBQ0ksT0FBTyxFQUFBO0VBR1g7RUFDSSxPQUFPO0VBQ1AsYUFBYSxFQUFBO0VBRmpCO0lBSVEsY0FBYztJQUNkLGFBQWEsRUFBQTtFQUlyQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBSnRCO0lBTVEsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBSXhCO0VBQ0ksYUFBYTtFQUNiLGNBQWMsRUFBQTtFQUZsQjtJQUtZLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYyxFQUFBO0VBSzFCO0VBQ0ksT0FBTyxFQUFBO0VBR1g7RUFDSSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21haW5tZW51L2V4cGxvcmVtZW51L3JlcG9ydGl0ZW1zL3JlcG9ydGl0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM4NEExQjM7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgY29sb3I6ICNDQUU5Rjc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ob21lLWxvY2F0aW9uLWRldGFpbC1yZXBvcnRzLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjYmNiY2I7XG59XG5cbi5ob21lLWxvY2F0aW9uLWRldGFpbC1yZXBvcnRzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2RjN2ZmO1xuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ob21lLWxvY2F0aW9uLWRldGFpbC1yZXBvcnRzLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmhvbWUtbG9jYXRpb24tZGV0YWlsLXJlcG9ydHMtaW1nIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uaG9tZS1sb2NhdGlvbi1kZXRhaWwtcmVwb3J0cy10eHQge1xuICAgIGZsZXg6IDQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM1ZTVlNWU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxufVxuXG4uaG9tZS1sb2NhdGlvbi1kZXRhaWwtcmVwb3J0cy1pbWcge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5ob21lLWxvY2F0aW9uLWRldGFpbC1yZXBvcnRzLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBkaXYge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMmY3YmFiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaG9tZS1sb2NhdGlvbi1kZXRhaWwtcmVwb3J0cy1mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGZsZXg6IDI7XG59XG5cbi5ob21lLWxvY2F0aW9uLWRldGFpbC1yZXBvcnRzLWZvb3RlciA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGZsZXg6IDMuNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.ts ***!
  \***************************************************************************/
/*! exports provided: ReportitemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportitemsPage", function() { return ReportitemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var src_app_page_modal_gallery_gallery_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/page/modal/gallery/gallery.page */ "./src/app/page/modal/gallery/gallery.page.ts");






var ReportitemsPage = /** @class */ (function () {
    function ReportitemsPage(router, route, loadingCtrl, modalCtrl, firebaseService) {
        this.router = router;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.firebaseService = firebaseService;
        this.arrReports = [];
        this.locationid = "";
        this.locationTitle = "";
    }
    ReportitemsPage.prototype.ngOnInit = function () {
        this.initPage();
    };
    ReportitemsPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataLoader, self, reportsSnapshot, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.locationid = this.route.snapshot.paramMap.get("locationid");
                        this.locationTitle = this.route.snapshot.paramMap.get("locationtitle");
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        dataLoader = _a.sent();
                        return [4 /*yield*/, dataLoader.present()];
                    case 2:
                        _a.sent();
                        self = this;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.getAllWeatherReportsForLocation(this.locationid)];
                    case 4:
                        reportsSnapshot = _a.sent();
                        reportsSnapshot.forEach(function (valueSnapshot) {
                            self.arrReports.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, valueSnapshot.val()));
                        });
                        dataLoader.dismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        dataLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ReportitemsPage.prototype.viewReportImage = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var galleryModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_page_modal_gallery_gallery_page__WEBPACK_IMPORTED_MODULE_5__["GalleryPage"],
                            componentProps: {
                                imgs: [url]
                            },
                            cssClass: 'gallery-modal'
                        })];
                    case 1:
                        galleryModal = _a.sent();
                        return [4 /*yield*/, galleryModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportitemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportitems',
            template: __webpack_require__(/*! ./reportitems.page.html */ "./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.html"),
            styles: [__webpack_require__(/*! ./reportitems.page.scss */ "./src/app/page/mainmenu/exploremenu/reportitems/reportitems.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], ReportitemsPage);
    return ReportitemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-exploremenu-reportitems-reportitems-module.js.map