(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-register-register-module"],{

/***/ "./src/app/page/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/page/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/page/register/register.page.html":
/*!**************************************************!*\
  !*** ./src/app/page/register/register.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"register-header\">\n    <p>LINEUP</p>\n  </div>\n\n  <div id=\"register-subheader\">\n    <p>Create new account</p>\n  </div>\n\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"newFname\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"newLname\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"newEmail\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input [type]=\"inputNewpwdType\" placeholder=\"Password\" [(ngModel)]=\"newPwd\"></ion-input>\n    <ion-icon name=\"eye\" item-end (click)=\"onClickEyeIcon(0)\"></ion-icon>\n  </ion-item>\n\n  <ion-item>\n    <ion-input [type]=\"inputRepeatpwdType\" placeholder=\"Repeat Password\" [(ngModel)]=\"newRepeatPwd\"></ion-input>\n    <ion-icon name=\"eye\" item-end (click)=\"onClickEyeIcon(1)\"></ion-icon>\n  </ion-item>\n\n  <div class=\"btn-register\">\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"createNewAccount()\">Create account</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/register/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/page/register/register.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header {\n  --ion-background-color: #BCD9E6; }\n\n#register-header {\n  text-align: center;\n  margin: 3vh 0 6vh 0; }\n\n#register-header > p {\n  color: #00B4F9;\n  font-family: \"Open Sans Bold\";\n  font-size: 14pt; }\n\n#register-subheader {\n  text-align: center; }\n\n#register-subheader p {\n    color: #84A1B3;\n    font-weight: bold; }\n\n.btn-register {\n  margin-top: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yZWdpc3Rlci9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LCBpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjQkNEOUU2O1xufVxuXG4jcmVnaXN0ZXItaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzdmggMCA2dmggMDtcbn1cblxuI3JlZ2lzdGVyLWhlYWRlciA+IHAge1xuICAgIGNvbG9yOiAjMDBCNEY5O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBCb2xkXCI7XG4gICAgZm9udC1zaXplOiAxNHB0O1xufVxuXG4jcmVnaXN0ZXItc3ViaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjODRBMUIzO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5idG4tcmVnaXN0ZXIge1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/register/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/page/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");






/**
 * import custom services
 */


var RegisterPage = /** @class */ (function () {
    function RegisterPage(loadingCtrl, router, toastService, myUtils, event) {
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.toastService = toastService;
        this.myUtils = myUtils;
        this.event = event;
        this.inputNewpwdType = 'password';
        this.inputRepeatpwdType = 'password';
        this.newFname = '';
        this.newLname = '';
        this.newEmail = '';
        this.newPwd = '';
        this.newRepeatPwd = '';
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.onClickEyeIcon = function (type) {
        if (type == 0) {
            this.inputNewpwdType = this.inputNewpwdType == 'password' ? 'text' : 'password';
        }
        else {
            this.inputRepeatpwdType = this.inputRepeatpwdType == 'password' ? 'text' : 'password';
        }
    };
    RegisterPage.prototype.createNewAccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var createLoader, userinfo, currentLocation, userData, err_1, errmsg;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.newFname === '') {
                            alert('Please input First Name!');
                            return [2 /*return*/];
                        }
                        if (this.newLname === '') {
                            alert('Please input Last Name!');
                            return [2 /*return*/];
                        }
                        if (this.newEmail === '') {
                            alert('Please input Email Address');
                            return [2 /*return*/];
                        }
                        if (this.newPwd === '') {
                            alert('Please input Password');
                            return [2 /*return*/];
                        }
                        if (this.newRepeatPwd === '') {
                            alert('Please input Password again to confirm password is correct');
                            return [2 /*return*/];
                        }
                        if (this.newPwd !== this.newRepeatPwd) {
                            alert('Passwords do not match!');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait...'
                            })];
                    case 1:
                        createLoader = _a.sent();
                        return [4 /*yield*/, createLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 10, , 12]);
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(this.newEmail, this.newPwd)];
                    case 4:
                        userinfo = _a.sent();
                        currentLocation = this.myUtils.getCurrentLocation();
                        if (!(userinfo.additionalUserInfo.isNewUser == true)) return [3 /*break*/, 7];
                        userData = {
                            uid: userinfo.user.uid,
                            fname: this.newFname,
                            lname: this.newLname,
                            email: this.newEmail,
                            token: localStorage.getItem('token'),
                            password: this.newPwd,
                            phone: '',
                            profileimg: '',
                            noti: {
                                break: true,
                                product: true,
                                message: true,
                                range: 100,
                                start: '06:00',
                                end: '20:00',
                                type: '0'
                            },
                            favorite: {
                                beaches: '',
                                products: '',
                                discussions: ''
                            },
                            location: {
                                lat: currentLocation.lat ? currentLocation.lat : '',
                                long: currentLocation.long ? currentLocation.long : ''
                            },
                            review: 0,
                            adminrole: 0
                        };
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users/' + userinfo.user.uid).update(userData)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, createLoader.dismiss()];
                    case 6:
                        _a.sent();
                        this.event.publish('onAuth');
                        this.router.navigateByUrl('/home/main');
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, createLoader.dismiss()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        err_1 = _a.sent();
                        return [4 /*yield*/, createLoader.dismiss()];
                    case 11:
                        _a.sent();
                        errmsg = '';
                        if (err_1.code == 'auth/email-already-in-use') {
                            errmsg = 'Email address is already in use.';
                        }
                        else {
                            errmsg = err_1.message;
                        }
                        this.toastService.showToast(errmsg);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/page/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/page/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__["ShowtoastService"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_7__["MyutilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-register-register-module.js.map