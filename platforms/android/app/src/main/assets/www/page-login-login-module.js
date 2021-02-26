(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-login-login-module"],{

/***/ "./src/app/page/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/page/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/page/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/page/login/login.page.html":
/*!********************************************!*\
  !*** ./src/app/page/login/login.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n  <div id=\"login-header\">\n    <p>LINEUP</p>\n  </div>\n\n  <ion-item id=\"login_usr_email\">\n      <ion-icon name=\"person\" item-start></ion-icon>\n      <ion-input type=\"email\" placeholder=\"email address\" [(ngModel)]=\"usr_email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-icon name=\"lock\" item-start></ion-icon>\n      <ion-input type=\"password\" placeholder=\"password\" [(ngModel)]=\"usr_pwd\"></ion-input>\n  </ion-item>\n\n  <div class=\"btn-center\" id=\"btn-login-normal\">\n    <ion-button color=\"primary\" (click)=\"login()\">Sign In</ion-button>\n  </div>\n\n  <div id=\"login_devider\"></div>\n\n  <div id=\"login-page-footer\">\n    <div>\n      <div (click)=\"viewResetPwdPage()\">Forgot Password?</div>\n    </div>\n    <div>\n      <div (click)=\"viewRegisterPage()\">Register</div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/page/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #BCD9E6; }\n\n#login-header {\n  margin: 10vh 0 5vh 0;\n  width: 100%;\n  text-align: center; }\n\n#login-header > p {\n  color: #00B4F9;\n  font-family: \"Open Sans Bold\";\n  font-size: 14pt; }\n\n#btn-login-normal, #btn-login-google {\n  margin-top: 3vh; }\n\n#login_devider {\n  border-bottom: 1px solid #a1b8c4;\n  margin: 5vh 0; }\n\n.btn-center {\n  text-align: center; }\n\n#login-page-footer {\n  display: flex;\n  margin-top: 4vh; }\n\n#login-page-footer div {\n    flex: 1; }\n\n#login-page-footer > div:first-child {\n  text-align: left; }\n\n#login-page-footer > div:first-child div {\n    color: #86A3B3;\n    font-weight: bold; }\n\n#login-page-footer > div:nth-child(2) {\n  text-align: right; }\n\n#login-page-footer > div:nth-child(2) div {\n    color: #86A3B3;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9sb2dpbi9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0NBQWdDO0VBQ2hDLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUZuQjtJQUlRLE9BQU8sRUFBQTs7QUFJZjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUdRLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxjQUFjO0lBQ2QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjQkNEOUU2O1xufVxuXG4jbG9naW4taGVhZGVyIHtcbiAgICBtYXJnaW46IDEwdmggMCA1dmggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsb2dpbi1oZWFkZXIgPiBwIHtcbiAgICBjb2xvcjogIzAwQjRGOTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuI2J0bi1sb2dpbi1ub3JtYWwsICNidG4tbG9naW4tZ29vZ2xlIHtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG59XG5cbiNsb2dpbl9kZXZpZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ExYjhjNDtcbiAgICBtYXJnaW46IDV2aCAwO1xufVxuXG4uYnRuLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbG9naW4tcGFnZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNHZoO1xuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxufVxuXG4jbG9naW4tcGFnZS1mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGl2IHtcbiAgICAgICAgY29sb3I6ICM4NkEzQjM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuI2xvZ2luLXBhZ2UtZm9vdGVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGl2IHtcbiAgICAgICAgY29sb3I6ICM4NkEzQjM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/page/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");





/**
 * import custom services
 */


var LoginPage = /** @class */ (function () {
    function LoginPage(router, loadingCtrl, toastService, firebaseService, navCtrl, event) {
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastService = toastService;
        this.firebaseService = firebaseService;
        this.navCtrl = navCtrl;
        this.event = event;
        this.usr_email = '';
        this.usr_pwd = '';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.usr_email = '';
        this.usr_pwd = '';
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loginLoader, err_1, errmsg;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.usr_email === '') {
                            alert('Please input email address!');
                            return [2 /*return*/];
                        }
                        if (this.usr_pwd === '') {
                            alert('Please input password!');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait...'
                            })];
                    case 1:
                        loginLoader = _a.sent();
                        return [4 /*yield*/, loginLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 8]);
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(this.usr_email, this.usr_pwd)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, loginLoader.dismiss()];
                    case 5:
                        _a.sent();
                        this.event.publish('onAuth');
                        this.navCtrl.navigateRoot('/home/main');
                        return [3 /*break*/, 8];
                    case 6:
                        err_1 = _a.sent();
                        return [4 /*yield*/, loginLoader.dismiss()];
                    case 7:
                        _a.sent();
                        errmsg = '';
                        if (err_1.code === 'auth/user-not-found') {
                            errmsg = 'There is no record corresponding to this email address.';
                        }
                        else {
                            errmsg = err_1.message;
                        }
                        this.toastService.showToast(errmsg);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.viewResetPwdPage = function () {
        this.router.navigateByUrl('/resetpwd');
    };
    LoginPage.prototype.viewRegisterPage = function () {
        this.router.navigateByUrl('/register');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/page/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/page/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_5__["ShowtoastService"],
            src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-login-login-module.js.map