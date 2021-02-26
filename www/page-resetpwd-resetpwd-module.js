(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-resetpwd-resetpwd-module"],{

/***/ "./src/app/page/resetpwd/resetpwd.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/resetpwd/resetpwd.module.ts ***!
  \**************************************************/
/*! exports provided: ResetpwdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwdPageModule", function() { return ResetpwdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resetpwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpwd.page */ "./src/app/page/resetpwd/resetpwd.page.ts");







var routes = [
    {
        path: '',
        component: _resetpwd_page__WEBPACK_IMPORTED_MODULE_6__["ResetpwdPage"]
    }
];
var ResetpwdPageModule = /** @class */ (function () {
    function ResetpwdPageModule() {
    }
    ResetpwdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resetpwd_page__WEBPACK_IMPORTED_MODULE_6__["ResetpwdPage"]]
        })
    ], ResetpwdPageModule);
    return ResetpwdPageModule;
}());



/***/ }),

/***/ "./src/app/page/resetpwd/resetpwd.page.html":
/*!**************************************************!*\
  !*** ./src/app/page/resetpwd/resetpwd.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"resetpwd-header\">\n    <p>LINEUP</p>\n  </div>\n\n  <div id=\"resetpwd-subheader\">\n    <p>Reset Password</p>\n  </div>\n\n  <ion-item>\n    <ion-icon name=\"person\" item-start></ion-icon>\n    <ion-input type=\"email\" placeholder=\"email address\" [(ngModel)]=\"resetEmail\"></ion-input>\n  </ion-item>\n\n  <div class=\"btn-resetpwd\">\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"resetPassword()\">Reset Password</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/resetpwd/resetpwd.page.scss":
/*!**************************************************!*\
  !*** ./src/app/page/resetpwd/resetpwd.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header {\n  --ion-background-color: #BCD9E6; }\n\n#resetpwd-header {\n  text-align: center;\n  margin: 6vh 0; }\n\n#resetpwd-header > p {\n  color: #00B4F9;\n  font-family: \"Open Sans Bold\";\n  font-size: 14pt; }\n\n#resetpwd-subheader {\n  text-align: center;\n  margin-bottom: 6vh; }\n\n#resetpwd-subheader p {\n    color: #84A1B3;\n    font-weight: bold; }\n\n.btn-resetpwd {\n  margin-top: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yZXNldHB3ZC9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxyZXNldHB3ZFxccmVzZXRwd2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsY0FBYztJQUNkLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcmVzZXRwd2QvcmVzZXRwd2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsIGlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNCQ0Q5RTY7XG59XG5cbiNyZXNldHB3ZC1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDZ2aCAwO1xufVxuXG4jcmVzZXRwd2QtaGVhZGVyID4gcCB7XG4gICAgY29sb3I6ICMwMEI0Rjk7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIEJvbGRcIjtcbiAgICBmb250LXNpemU6IDE0cHQ7XG59XG5cbiNyZXNldHB3ZC1zdWJoZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA2dmg7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjODRBMUIzO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5idG4tcmVzZXRwd2Qge1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/resetpwd/resetpwd.page.ts":
/*!************************************************!*\
  !*** ./src/app/page/resetpwd/resetpwd.page.ts ***!
  \************************************************/
/*! exports provided: ResetpwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwdPage", function() { return ResetpwdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");






/**
 * import custom services
 */

var ResetpwdPage = /** @class */ (function () {
    function ResetpwdPage(toastService, loadingCtrl, router) {
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.resetEmail = "";
    }
    ResetpwdPage.prototype.ngOnInit = function () {
    };
    ResetpwdPage.prototype.resetPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resetLoader, err_1, errmsg;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        resetLoader = _a.sent();
                        return [4 /*yield*/, resetLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 8]);
                        return [4 /*yield*/, firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().sendPasswordResetEmail(this.resetEmail)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, resetLoader.dismiss()];
                    case 5:
                        _a.sent();
                        this.toastService.showToast("Reset email sent to your email. Please check your inbox!");
                        this.router.navigateByUrl('');
                        return [3 /*break*/, 8];
                    case 6:
                        err_1 = _a.sent();
                        return [4 /*yield*/, resetLoader.dismiss()];
                    case 7:
                        _a.sent();
                        errmsg = "";
                        if (err_1.code == "auth/user-not-found") {
                            errmsg = "There is no record corresponding to this email address.";
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
    ResetpwdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetpwd',
            template: __webpack_require__(/*! ./resetpwd.page.html */ "./src/app/page/resetpwd/resetpwd.page.html"),
            styles: [__webpack_require__(/*! ./resetpwd.page.scss */ "./src/app/page/resetpwd/resetpwd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__["ShowtoastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetpwdPage);
    return ResetpwdPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-resetpwd-resetpwd-module.js.map