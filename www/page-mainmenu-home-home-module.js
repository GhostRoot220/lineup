(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-home-home-module"],{

/***/ "./src/app/page/mainmenu/home-popover/home-popover.ts":
/*!************************************************************!*\
  !*** ./src/app/page/mainmenu/home-popover/home-popover.ts ***!
  \************************************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");






var PopoverPage = /** @class */ (function () {
    function PopoverPage(popoverCtrl, navCtrl, firebaseService) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
    }
    PopoverPage.prototype.openDiscussionBoard = function () {
        this.navCtrl.navigateForward("/discussion");
        this.popoverCtrl.dismiss();
    };
    PopoverPage.prototype.openAccountPage = function () {
        var cuid = this.firebaseService.getUID();
        this.navCtrl.navigateForward("/account/" + cuid);
        this.popoverCtrl.dismiss();
    };
    PopoverPage.prototype.logoutUser = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut();
        this.popoverCtrl.dismiss();
    };
    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <ion-list>\n      <ion-item lines='none' button (click)=\"openAccountPage()\">\n        <ion-icon name=\"settings\"></ion-icon>&nbsp;<ion-label>Setting</ion-label>\n      </ion-item>\n      <ion-item lines='none' button (click)=\"logoutUser()\">\n        <ion-icon name=\"log-out\"></ion-icon>&nbsp;<ion-label>Logout</ion-label>\n      </ion-item>\n    </ion-list>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])
    ], PopoverPage);
    return PopoverPage;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/home/home.module.ts":
/*!***************************************************!*\
  !*** ./src/app/page/mainmenu/home/home.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.router.module */ "./src/app/page/mainmenu/home/home.router.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/page/mainmenu/home/home.page.ts");
/* harmony import */ var _home_popover_home_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home-popover/home-popover */ "./src/app/page/mainmenu/home-popover/home-popover.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _home_router_module__WEBPACK_IMPORTED_MODULE_4__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _home_popover_home_popover__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"]],
            entryComponents: [_home_popover_home_popover__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/home/home.page.html":
/*!***************************************************!*\
  !*** ./src/app/page/mainmenu/home/home.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-tabs>\n    <!-- Tab bar -->\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"main\">\n        <ion-icon name=\"home\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"explore\">\n        <ion-icon name=\"map\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"activity\">\n        <ion-icon name=\"chatbubbles\"></ion-icon>\n        <ion-badge color=\"danger\" *ngIf=\"numNoti>0\">{{numNoti}}</ion-badge>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"shop\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"discussion\">\n        <ion-icon name=\"text\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"showPopOver()\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n"

/***/ }),

/***/ "./src/app/page/mainmenu/home/home.page.scss":
/*!***************************************************!*\
  !*** ./src/app/page/mainmenu/home/home.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color-selected: #2b4854; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9ob21lL0U6XFx3b3Jrc3BhY2VcXEFuZHJvaWRcXGxpbmV1cCgwOS0xOCkvc3JjXFxhcHBcXHBhZ2VcXG1haW5tZW51XFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9tYWlubWVudS9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b24ge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICMyYjQ4NTQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/mainmenu/home/home.page.ts":
/*!*************************************************!*\
  !*** ./src/app/page/mainmenu/home/home.page.ts ***!
  \*************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_popover_home_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-popover/home-popover */ "./src/app/page/mainmenu/home-popover/home-popover.ts");
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");





/**
 * import custom services
 */

var HomePage = /** @class */ (function () {
    function HomePage(popoverCtrl, route, firebaseService, event) {
        this.popoverCtrl = popoverCtrl;
        this.route = route;
        this.firebaseService = firebaseService;
        this.event = event;
        this.event.subscribe("onReceiveNotification", function (data) {
            // this.numNoti = data.badgeNum;
            // console.log(this.numNoti);
        });
    }
    HomePage.prototype.ngOnInit = function () {
        this.initPage();
    };
    HomePage.prototype.initPage = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.updateDeviceToken();
    };
    HomePage.prototype.updateDeviceToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(localStorage.getItem("token") !== null && localStorage.getItem("token") !== "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseService.updateDeviceToken(localStorage.getItem("token"))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showPopOver = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _home_popover_home_popover__WEBPACK_IMPORTED_MODULE_4__["PopoverPage"],
                            event: event
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/page/mainmenu/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/page/mainmenu/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/home/home.router.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/page/mainmenu/home/home.router.module.ts ***!
  \**********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/page/mainmenu/home/home.page.ts");
/* harmony import */ var src_app_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/auth.guard */ "./src/app/services/user/auth.guard.ts");
/* harmony import */ var src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/page/modal/modal.module */ "./src/app/page/modal/modal.module.ts");






var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: '../home-main/home-main.module#HomeMainPageModule',
                        canActivate: [src_app_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                    }
                ]
            },
            {
                path: 'explore',
                children: [
                    {
                        path: '',
                        loadChildren: '../exploremenu/home-explore/home-explore.module#HomeExplorePageModule',
                        canActivate: [src_app_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                    }
                ]
            },
            {
                path: 'activity',
                children: [
                    {
                        path: '',
                        loadChildren: '../activitymenu/home-activity/home-activity.module#HomeActivityPageModule',
                        canActivate: [src_app_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                    }
                ]
            },
            {
                path: 'shop',
                children: [
                    {
                        path: '',
                        loadChildren: '../shopmenu/home-shop/home-shop.module#HomeShopPageModule',
                        canActivate: [src_app_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                    }
                ]
            },
            {
                path: 'setting',
                children: [
                    {
                        path: '',
                        loadChildren: '../accountmenu/account/account.module#AccountPageModule',
                        canActivate: [src_app_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                    }
                ]
            },
            {
                path: 'discussion',
                children: [
                    {
                        path: '',
                        loadChildren: '../discussionmenu/discussion/discussion.module#DiscussionPageModule',
                        canActivate: [src_app_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                    }
                ]
            }
        ]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-home-home-module.js.map