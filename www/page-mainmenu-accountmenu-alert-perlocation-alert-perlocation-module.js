(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-accountmenu-alert-perlocation-alert-perlocation-module"],{

/***/ "./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AlertPerlocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPerlocationPageModule", function() { return AlertPerlocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alert_perlocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-perlocation.page */ "./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.ts");







var routes = [
    {
        path: '',
        component: _alert_perlocation_page__WEBPACK_IMPORTED_MODULE_6__["AlertPerlocationPage"]
    }
];
var AlertPerlocationPageModule = /** @class */ (function () {
    function AlertPerlocationPageModule() {
    }
    AlertPerlocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alert_perlocation_page__WEBPACK_IMPORTED_MODULE_6__["AlertPerlocationPage"]]
        })
    ], AlertPerlocationPageModule);
    return AlertPerlocationPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"navback\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Configure Alerts</ion-title>\n    <p slot=\"end\" (click)=\"saveAlertSettings()\">Save</p>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Enable Per Location Notifications</ion-label>\n    <ion-toggle></ion-toggle>\n  </ion-item>\n\n  <div class=\"divider\"></div>\n\n  <ion-item>\n    <ion-img slot=\"start\" src=\"assets/imgs/img-delete.png\"></ion-img>\n    <ion-label>Santa Barbara, California</ion-label>\n    <ion-toggle></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-img slot=\"start\" src=\"assets/imgs/img-delete.png\"></ion-img>\n    <ion-label>North Shore, California</ion-label>\n    <ion-toggle></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-img slot=\"start\" src=\"assets/imgs/img-delete.png\"></ion-img>\n    <ion-label>South Shore, California</ion-label>\n    <ion-toggle></ion-toggle>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n\nion-title {\n  text-align: center;\n  color: #CAE9F7;\n  font-weight: bold; }\n\nion-toolbar > p {\n  color: #CAE9F7;\n  font-weight: bold;\n  padding-right: 5px; }\n\nion-img {\n  width: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9hY2NvdW50bWVudS9hbGVydC1wZXJsb2NhdGlvbi9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxtYWlubWVudVxcYWNjb3VudG1lbnVcXGFsZXJ0LXBlcmxvY2F0aW9uXFxhbGVydC1wZXJsb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9tYWlubWVudS9hY2NvdW50bWVudS9hbGVydC1wZXJsb2NhdGlvbi9hbGVydC1wZXJsb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjODRBMUIzO1xufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0NBRTlGNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXRvb2xiYXIgPiBwIHtcbiAgICBjb2xvcjogI0NBRTlGNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi1pbWcge1xuICAgIHdpZHRoOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.ts ***!
  \***************************************************************************************/
/*! exports provided: AlertPerlocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPerlocationPage", function() { return AlertPerlocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertPerlocationPage = /** @class */ (function () {
    function AlertPerlocationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AlertPerlocationPage.prototype.ngOnInit = function () {
    };
    AlertPerlocationPage.prototype.saveAlertSettings = function () {
        this.navCtrl.navigateBack("/configure-alert");
    };
    AlertPerlocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-perlocation',
            template: __webpack_require__(/*! ./alert-perlocation.page.html */ "./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.html"),
            styles: [__webpack_require__(/*! ./alert-perlocation.page.scss */ "./src/app/page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AlertPerlocationPage);
    return AlertPerlocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-accountmenu-alert-perlocation-alert-perlocation-module.js.map