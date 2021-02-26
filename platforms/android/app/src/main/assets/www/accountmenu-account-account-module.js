(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accountmenu-account-account-module"],{

/***/ "./src/app/page/mainmenu/accountmenu/account/account.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/account/account.module.ts ***!
  \*********************************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/page/mainmenu/accountmenu/account/account.page.ts");
/* harmony import */ var src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/page/modal/modal.module */ "./src/app/page/modal/modal.module.ts");








var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"] }])
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/account/account.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/account/account.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"navback\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Account Setting</ion-title>\n    <p *ngIf=\"isCurrentUser\" slot=\"end\" (click)=\"onClickSaveBtn()\">Save</p>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"account-profileimg\">\n    <div id=\"account-profileimg-container\">\n      <ng-container *ngIf=\"isCurrentUser; else otherUserImg\">\n        <img [src]=\"userData.profileimg!=''?userData.profileimg:'assets/imgs/icon-profile.svg'\" (click)=\"onClickProfileImg()\"/>\n      </ng-container>\n      <ng-template #otherUserImg>\n        <img [src]=\"userData.profileimg!=''?userData.profileimg:'assets/imgs/img-person.svg'\" />\n      </ng-template>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-input type=\"text\" [disabled]=\"!isCurrentUser\" placeholder=\"First Name\" [(ngModel)]=\"userData.fname\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-input type=\"text\" [disabled]=\"!isCurrentUser\" placeholder=\"Last Name\" [(ngModel)]=\"userData.lname\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"isCurrentUser\">\n      <ion-col>\n        <ion-item>\n          <ion-input type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"userEmail\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ng-container *ngIf=\"isCurrentUser==true; else otheruser\">\n    <div id=\"account-btn-changepwd\">\n      <ion-button expand=\"full\" (click)=\"onClickChangePwd()\">Change Password</ion-button>\n    </div>\n  \n    <div class=\"divider\"></div>\n  \n    <div>\n      <ion-button expand=\"full\" (click)=\"onClickNotiSettingBtn()\">Notification Settings</ion-button>\n    </div>\n  \n    <div class=\"divider\"></div>\n\n    <div id=\"account-btn-logout\">\n      <ion-button expand=\"full\" (click)=\"logOut()\">Log Out</ion-button>\n    </div>\n\n    <div class=\"divider\"></div>\n  \n    <div class=\"account-report\">\n      <p (click)=\"onClickReportBtn(0)\">Report Abuse</p>\n    </div>\n  \n    <div class=\"account-report\">\n      <p (click)=\"onClickReportBtn(1)\">Report User</p>\n    </div>\n\n    <div class=\"account-report\">\n      <p (click)=\"onClickReportBtn(2)\">Suggestions?</p>\n    </div>\n  </ng-container>\n  <ng-template #otheruser>\n    <div id=\"account-btn-send-message\">\n      <ion-button expand=\"full\" (click)=\"viewSendMessagePage()\">Send Message</ion-button>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <div id=\"account-view-profile-offers\">\n      <ion-grid>\n        <ion-row nowrap>\n          \n        </ion-row>\n      </ion-grid>\n    </div>\n  </ng-template>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/account/account.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/account/account.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n\nion-toolbar {\n  position: relative;\n  --background: #84A1B3; }\n\nion-toolbar p {\n    color: #CAE9F7;\n    font-family: \"Open Sans Bold\";\n    padding-right: 5px; }\n\nion-title {\n  color: #CAE9F7;\n  font-family: \"Open Sans Bold\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n#account-profileimg-container {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  overflow: hidden;\n  margin: auto; }\n\n#account-profileimg-container img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n#account-btn-changepwd {\n  margin-bottom: 3vh; }\n\n.account-report {\n  text-align: center; }\n\n.account-report p {\n    text-decoration: underline;\n    color: #427291;\n    font-weight: bold; }\n\n#account-btn-logout {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9hY2NvdW50bWVudS9hY2NvdW50L0U6XFx3b3Jrc3BhY2VcXEFuZHJvaWRcXGxpbmV1cCgwOS0xOCkvc3JjXFxhcHBcXHBhZ2VcXG1haW5tZW51XFxhY2NvdW50bWVudVxcYWNjb3VudFxcYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIscUJBQWEsRUFBQTs7QUFGakI7SUFJUSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBTmhCO0lBUVEsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDLEVBQUE7O0FBSXhDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbWFpbm1lbnUvYWNjb3VudG1lbnUvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM4NEExQjM7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjODRBMUIzO1xuICAgIHAge1xuICAgICAgICBjb2xvcjogI0NBRTlGNztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIEJvbGRcIjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI0NBRTlGNztcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQm9sZFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiNhY2NvdW50LXByb2ZpbGVpbWctY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG59XG5cbiNhY2NvdW50LWJ0bi1jaGFuZ2Vwd2Qge1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbn1cblxuLmFjY291bnQtcmVwb3J0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogIzQyNzI5MTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG4jYWNjb3VudC1idG4tbG9nb3V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/mainmenu/accountmenu/account/account.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page/mainmenu/accountmenu/account/account.page.ts ***!
  \*******************************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");
/* harmony import */ var _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");
/* harmony import */ var src_app_page_modal_writemessage_writemessage_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/page/modal/writemessage/writemessage.page */ "./src/app/page/modal/writemessage/writemessage.page.ts");






/**
 * import custom services
 */




var AccountPage = /** @class */ (function () {
    function AccountPage(router, route, loadingCtrl, altCtrl, modalCtrl, toastService, firebaseService, myUtil, camera) {
        this.router = router;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.altCtrl = altCtrl;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.firebaseService = firebaseService;
        this.myUtil = myUtil;
        this.camera = camera;
        this.isCurrentUser = true;
        this.userData = {};
        this.userEmail = "";
        this.selectedUID = this.route.snapshot.paramMap.get("userid");
        this.userData = {};
    }
    AccountPage.prototype.ngOnInit = function () {
        this.isCurrentUser = this.firebaseService.checkIfCurrentUser(this.selectedUID);
        this.getUserData();
    };
    AccountPage.prototype.getUserData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userInfoLoader, userProfileSnapshot;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Loading..."
                        })];
                    case 1:
                        userInfoLoader = _a.sent();
                        return [4 /*yield*/, userInfoLoader.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.firebaseService.getUserProfile(this.selectedUID)];
                    case 3:
                        userProfileSnapshot = _a.sent();
                        this.userData = userProfileSnapshot.val();
                        this.userEmail = this.userData.email;
                        this.myUtil.setUserData(this.userData);
                        userInfoLoader.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.onClickSaveBtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isEmailChanged;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                isEmailChanged = this.userData.email !== this.userEmail ? true : false;
                if (isEmailChanged) {
                    this.openReAuthWindow(0);
                }
                else {
                    this.saveUpdatedValue();
                }
                return [2 /*return*/];
            });
        });
    };
    AccountPage.prototype.onClickProfileImg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, imgSelectLoader, selectedImg, _a, _b, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            sourceType: 1,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                        };
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        imgSelectLoader = _c.sent();
                        _a = 'data:image/jpeg;base64,';
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        selectedImg = _a + (_c.sent());
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 9, , 10]);
                        return [4 /*yield*/, imgSelectLoader.present()];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.firebaseService.uploadProfileImage(selectedImg, this.selectedUID)];
                    case 5:
                        _c.sent();
                        _b = this.userData;
                        return [4 /*yield*/, this.firebaseService.getProfileImage(this.selectedUID)];
                    case 6:
                        _b.profileimg = _c.sent();
                        return [4 /*yield*/, this.firebaseService.updateProfileImageOnDB(this.selectedUID, this.userData.profileimg)];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, imgSelectLoader.dismiss()];
                    case 8:
                        _c.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        err_1 = _c.sent();
                        imgSelectLoader.dismiss();
                        console.error(err_1);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.onClickChangePwd = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.openReAuthWindow(1);
                return [2 /*return*/];
            });
        });
    };
    AccountPage.prototype.updatePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, pwdUpdateLoader, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.firebaseService.getAuthUser();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Please wait..."
                            })];
                    case 1:
                        pwdUpdateLoader = _a.sent();
                        return [4 /*yield*/, pwdUpdateLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, user.updatePassword(this.newPwd)];
                    case 4:
                        _a.sent();
                        pwdUpdateLoader.dismiss();
                        this.toastService.showToast("Password updated successfully!");
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        console.log(err_2);
                        pwdUpdateLoader.dismiss();
                        this.toastService.showToast(err_2.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.openReAuthWindow = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputs, header, reauthAlt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputs = [];
                        header = "Confirm User";
                        if (type == 0) {
                            inputs = [
                                {
                                    name: 'value',
                                    type: 'password',
                                    placeholder: 'Please input password'
                                }
                            ];
                        }
                        else {
                            header = "Change Password";
                            inputs = [
                                {
                                    name: 'value',
                                    type: 'password',
                                    placeholder: 'Current password'
                                },
                                {
                                    name: 'value1',
                                    type: 'password',
                                    placeholder: 'New password'
                                },
                                {
                                    name: 'value2',
                                    type: 'password',
                                    placeholder: 'Confirm New password'
                                }
                            ];
                        }
                        return [4 /*yield*/, this.altCtrl.create({
                                header: header,
                                inputs: inputs,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function (data) {
                                            if (type == 1) {
                                                if (data.value1 == data.value2) {
                                                    _this.newPwd = data.value1;
                                                }
                                                else {
                                                    _this.toastService.showToast("New password doesn't match!");
                                                    return;
                                                }
                                            }
                                            _this.reAuthUser(type, data.value);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        reauthAlt = _a.sent();
                        return [4 /*yield*/, reauthAlt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.reAuthUser = function (type, pwd) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, userCredential, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.firebaseService.getAuthUser();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        userCredential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].EmailAuthProvider.credential(user.email, pwd);
                        return [4 /*yield*/, user.reauthenticateWithCredential(userCredential)];
                    case 2:
                        _a.sent();
                        if (type == 0) {
                            this.userData.email = this.userEmail;
                            this.saveUpdatedValue();
                        }
                        else {
                            this.updatePassword();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        console.log(err_3);
                        this.toastService.showToast(err_3.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.onClickNotiSettingBtn = function () {
        this.router.navigateByUrl("/account-noti-setting");
    };
    AccountPage.prototype.onClickReportBtn = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reportModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_page_modal_writemessage_writemessage_page__WEBPACK_IMPORTED_MODULE_9__["WritemessagePage"],
                            cssClass: "report-modal",
                            componentProps: {
                                reporttype: type
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
    AccountPage.prototype.viewSendMessagePage = function () {
        this.router.navigateByUrl("/chat/" + this.selectedUID);
    };
    AccountPage.prototype.saveUpdatedValue = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var saveLoader, authUser, err_4;
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
                        _a.trys.push([3, 7, , 9]);
                        authUser = this.firebaseService.getAuthUser();
                        return [4 /*yield*/, authUser.updateEmail(this.userEmail)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("users/" + this.userData.uid).update(this.userData)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, saveLoader.dismiss()];
                    case 6:
                        _a.sent();
                        this.toastService.showToast("Account setting updated!");
                        return [3 /*break*/, 9];
                    case 7:
                        err_4 = _a.sent();
                        return [4 /*yield*/, saveLoader.dismiss()];
                    case 8:
                        _a.sent();
                        this.toastService.showToast(err_4.message);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.logOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebaseService.logOutUser()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/page/mainmenu/accountmenu/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/page/mainmenu/accountmenu/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__["ShowtoastService"],
            _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_8__["MyutilsService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=accountmenu-account-account-module.js.map