(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-accountmenu-account-noti-setting-account-noti-setting-module"],{

/***/ "./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AccountNotiSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNotiSettingPageModule", function() { return AccountNotiSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_noti_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-noti-setting.page */ "./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.ts");







var routes = [
    {
        path: '',
        component: _account_noti_setting_page__WEBPACK_IMPORTED_MODULE_6__["AccountNotiSettingPage"]
    }
];
var AccountNotiSettingPageModule = /** @class */ (function () {
    function AccountNotiSettingPageModule() {
    }
    AccountNotiSettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_noti_setting_page__WEBPACK_IMPORTED_MODULE_6__["AccountNotiSettingPage"]]
        })
    ], AccountNotiSettingPageModule);
    return AccountNotiSettingPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"navback\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-icon slot=\"start\" name=\"arrow-back\" color=\"navback\" (click)=\"onClickNavBack()\"></ion-icon> -->\n    <ion-title>Notification Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Favorite Breaks Notification</ion-label>\n    <ion-toggle [(ngModel)]=\"notiSettings.break\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Product Notification</ion-label>\n    <ion-toggle [(ngModel)]=\"notiSettings.product\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Favorite Message Board Notification</ion-label>\n    <ion-toggle [(ngModel)]=\"notiSettings.message\"></ion-toggle>\n  </ion-item>\n\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label color=\"dark\">Radius of items for sale:</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-range min=\"0\" max=\"200\" color=\"secondary\" [(ngModel)]=\"notiSettings.range\" pin=true>\n        <ion-label slot=\"start\">0</ion-label>\n        <ion-label slot=\"end\">200miles</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-item-group>\n<!-- \n  <ion-grid>\n    <ion-row radio-group align-items-center>\n      <ion-col size=\"4\">\n        <ion-item lines=\"none\">\n          <ion-label>Notification Times</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item lines=\"none\">\n          <ion-label>Anytime</ion-label>\n          <ion-radio mode=\"md\" item-left value=\"A\"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item lines=\"none\">\n          <ion-label>Custom</ion-label>\n          <ion-radio mode=\"md\" item-left value=\"A\"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-item>\n    <ion-label>Notification times</ion-label>\n    <ion-select [(ngModel)]=\"notiSettings.type\">\n      <ion-select-option value=\"0\">Anytime</ion-select-option>\n      <ion-select-option value=\"1\">Custom</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item-group *ngIf=\"notiSettings.type=='1'\">\n    <ion-item>\n      <ion-item>\n        <ion-label>Start</ion-label>\n        <ion-datetime display-format=\"HH:mm\" min=\"00:00\" max=\"11:59\" picker-format=\"HH/mm\"\n          [(ngModel)]=\"notiSettings.start\"></ion-datetime>\n      </ion-item>\n    </ion-item>\n\n    <ion-item>\n      <ion-item>\n        <ion-label>End</ion-label>\n        <ion-datetime display-format=\"HH:mm\" min=\"12:00\" max=\"23:59\" picker-format=\"HH/mm\"\n          [(ngModel)]=\"notiSettings.end\"></ion-datetime>\n      </ion-item>\n    </ion-item>\n  </ion-item-group>\n\n  <div id=\"noti-setting-btnsave\">\n    <ion-button (click)=\"onClickSaveBtn()\">Save</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n\nion-toolbar {\n  --background: #84A1B3;\n  position: relative; }\n\nion-toolbar ion-icon {\n    font-size: 16pt;\n    margin-left: 16px; }\n\nion-title {\n  color: #CAE9F7;\n  font-weight: bold;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\nion-item ion-label {\n  font-size: 9pt; }\n\n#noti-setting-btnsave {\n  width: 100%;\n  text-align: center;\n  margin-top: 2vh; }\n\n#noti-setting-btnsave ion-button {\n    width: 80%; }\n\nion-item-group ion-item {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9hY2NvdW50bWVudS9hY2NvdW50LW5vdGktc2V0dGluZy9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxtYWlubWVudVxcYWNjb3VudG1lbnVcXGFjY291bnQtbm90aS1zZXR0aW5nXFxhY2NvdW50LW5vdGktc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxxQkFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUZ0QjtJQUlRLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQyxFQUFBOztBQUdwQztFQUVRLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFIbkI7SUFLUSxVQUFVLEVBQUE7O0FBSWxCO0VBRVEsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9tYWlubWVudS9hY2NvdW50bWVudS9hY2NvdW50LW5vdGktc2V0dGluZy9hY2NvdW50LW5vdGktc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjODRBMUIzO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjODRBMUIzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiAjQ0FFOUY3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDlwdDtcbiAgICB9XG59XG5cbiNub3RpLXNldHRpbmctYnRuc2F2ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59XG5cbmlvbi1pdGVtLWdyb3VwIHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: AccountNotiSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNotiSettingPage", function() { return AccountNotiSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");
/* harmony import */ var src_app_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");



/**
 * import custom services
 */



var AccountNotiSettingPage = /** @class */ (function () {
    function AccountNotiSettingPage(firebaseService, loadingCtrl, myUtil, toastService, navCtrl) {
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.myUtil = myUtil;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.notiSettings = {
            break: false,
            message: false,
            product: false,
            range: 100,
            start: "06:00",
            end: "20:00",
            type: '0'
        };
    }
    AccountNotiSettingPage.prototype.ngOnInit = function () {
        this.initPage();
    };
    AccountNotiSettingPage.prototype.initPage = function () {
        if (this.myUtil.getUserData().noti !== undefined && this.myUtil.getUserData().noti !== null) {
            this.notiSettings = this.myUtil.getUserData().noti;
            console.log(this.notiSettings);
        }
    };
    AccountNotiSettingPage.prototype.onClickNavBack = function () {
        this.navCtrl.back();
    };
    AccountNotiSettingPage.prototype.onClickSaveBtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var saveLoader, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        saveLoader = _a.sent();
                        return [4 /*yield*/, saveLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.updateNotiSetting(this.notiSettings)];
                    case 4:
                        _a.sent();
                        saveLoader.dismiss();
                        this.toastService.showToast("Settings updated!");
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        saveLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AccountNotiSettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-noti-setting',
            template: __webpack_require__(/*! ./account-noti-setting.page.html */ "./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.html"),
            styles: [__webpack_require__(/*! ./account-noti-setting.page.scss */ "./src/app/page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_4__["MyutilsService"],
            src_app_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_5__["ShowtoastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AccountNotiSettingPage);
    return AccountNotiSettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-accountmenu-account-noti-setting-account-noti-setting-module.js.map