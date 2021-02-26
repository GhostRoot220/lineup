(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discussionmenu-discussion-discussion-module"],{

/***/ "./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.html":
/*!********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div id=\"discussion-create-modal-btnclose\">\n    <ion-icon name=\"close\" (click)=\"closeDiscussionCreate()\"></ion-icon>\n  </div>\n\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Topic\" [(ngModel)]=\"txtTopic\"></ion-input>\n  </ion-item>\n\n  <div id=\"discussion-create-modal-btncreate\">\n    <ion-button (click)=\"createTopic()\">Create</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#discussion-create-modal-btnclose {\n  width: 100%;\n  text-align: right;\n  padding-top: 12px; }\n  #discussion-create-modal-btnclose ion-icon {\n    font-size: 24px; }\n  #discussion-create-modal-btncreate {\n  width: 100%;\n  text-align: center;\n  margin-top: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9kaXNjdXNzaW9ubWVudS9kaXNjdXNzaW9uLWNyZWF0ZS9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxtYWlubWVudVxcZGlzY3Vzc2lvbm1lbnVcXGRpc2N1c3Npb24tY3JlYXRlXFxkaXNjdXNzaW9uLWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBSHJCO0lBS1EsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21haW5tZW51L2Rpc2N1c3Npb25tZW51L2Rpc2N1c3Npb24tY3JlYXRlL2Rpc2N1c3Npb24tY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXNjdXNzaW9uLWNyZWF0ZS1tb2RhbC1idG5jbG9zZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxufVxuXG4jZGlzY3Vzc2lvbi1jcmVhdGUtbW9kYWwtYnRuY3JlYXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.ts ***!
  \******************************************************************************************/
/*! exports provided: DiscussionCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionCreatePage", function() { return DiscussionCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var src_app_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");





var DiscussionCreatePage = /** @class */ (function () {
    function DiscussionCreatePage(modalCtrl, firebaseService, loadingCtrl, toastService) {
        this.modalCtrl = modalCtrl;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.toastService = toastService;
        this.isFavoritePage = false;
        this.txtTopic = '';
        this.posterInfo = {};
    }
    DiscussionCreatePage.prototype.ngOnInit = function () {
        this.posterInfo = {};
        this.getPosterInfo();
    };
    DiscussionCreatePage.prototype.getPosterInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cuid, profileLoader, profileSnapshot, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cuid = this.firebaseService.getUID();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        profileLoader = _a.sent();
                        return [4 /*yield*/, profileLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.getUserProfile(cuid)];
                    case 4:
                        profileSnapshot = _a.sent();
                        this.posterInfo = profileSnapshot.val();
                        profileLoader.dismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        profileLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DiscussionCreatePage.prototype.createTopic = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var saveLoader, item, _a, strFavorites, arrFavorites, favLocIndex, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        saveLoader = _b.sent();
                        return [4 /*yield*/, saveLoader.present()];
                    case 2:
                        _b.sent();
                        item = {
                            discussionid: '',
                            discussionname: this.txtTopic,
                            posterid: this.posterInfo.uid,
                            postername: this.posterInfo.fname,
                            createdat: null,
                        };
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        _a = item;
                        return [4 /*yield*/, this.firebaseService.addDiscussionTopic(item)];
                    case 4:
                        _a.discussionid = _b.sent();
                        this.isFavoritePage = !this.isFavoritePage;
                        strFavorites = localStorage.getItem('favDiscussion');
                        arrFavorites = [];
                        if (!this.isFavoritePage) {
                            arrFavorites = strFavorites.split(',');
                            favLocIndex = arrFavorites.findIndex(function (x) { return x == item.discussionid; });
                            arrFavorites.splice(favLocIndex, 1);
                            localStorage.setItem('favDiscussion', arrFavorites.join(','));
                            this.firebaseService.addFavDiscussions(localStorage.getItem('favDiscussion'));
                        }
                        else {
                            if (localStorage.getItem('favDiscussion') !== null && localStorage.getItem('favDiscussion') !== '') {
                                arrFavorites = strFavorites.split(',');
                                arrFavorites.push(item.discussionid);
                                localStorage.setItem('favDiscussion', arrFavorites.join(','));
                                this.firebaseService.addFavDiscussions(localStorage.getItem('favDiscussion'));
                            }
                            else {
                                localStorage.setItem('favDiscussion', item.discussionid);
                                this.firebaseService.addFavDiscussions(localStorage.getItem('favDiscussion'));
                            }
                        }
                        saveLoader.dismiss();
                        this.toastService.showToast('Topic is created successfully!');
                        this.modalCtrl.dismiss(item);
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _b.sent();
                        saveLoader.dismiss();
                        this.toastService.showToast(err_2.message);
                        this.modalCtrl.dismiss(null);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DiscussionCreatePage.prototype.closeDiscussionCreate = function () {
        this.modalCtrl.dismiss(null);
    };
    DiscussionCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discussion-create',
            template: __webpack_require__(/*! ./discussion-create.page.html */ "./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.html"),
            styles: [__webpack_require__(/*! ./discussion-create.page.scss */ "./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_4__["ShowtoastService"]])
    ], DiscussionCreatePage);
    return DiscussionCreatePage;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion/discussion.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion/discussion.module.ts ***!
  \******************************************************************************/
/*! exports provided: DiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPageModule", function() { return DiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discussion.page */ "./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.ts");
/* harmony import */ var _discussion_create_discussion_create_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../discussion-create/discussion-create.page */ "./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.ts");









var routes = [
    {
        path: '',
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_7__["DiscussionPage"]
    }
];
var DiscussionPageModule = /** @class */ (function () {
    function DiscussionPageModule() {
    }
    DiscussionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_discussion_page__WEBPACK_IMPORTED_MODULE_7__["DiscussionPage"], _discussion_create_discussion_create_page__WEBPACK_IMPORTED_MODULE_8__["DiscussionCreatePage"]],
            entryComponents: [_discussion_create_discussion_create_page__WEBPACK_IMPORTED_MODULE_8__["DiscussionCreatePage"]]
        })
    ], DiscussionPageModule);
    return DiscussionPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"searchKeyword\" (ionChange)=\"searchDiscussion()\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div id=\"discussion-item-container\">\n    <div class=\"discussion-item\" *ngFor=\"let result of arrResult\" (click)=\"onClickDiscussion(result.discussionid, result.discussionname)\">\n      <div class=\"discussion-item-name\">\n        <p>{{result.discussionname}}</p>\n      </div>\n      <img class=\"discussion-item-detail\" src=\"assets/imgs/icon/icon-left-arrow.svg\" />\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"addDiscussion()\">\n      Add Discussion\n      <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#discussion-item-container {\n  margin-top: 3vh; }\n\n.discussion-item {\n  position: relative;\n  padding: 5px 10px;\n  border-bottom: 1px solid #000; }\n\n.discussion-item-name p {\n  color: #658696;\n  font-weight: bold; }\n\n.discussion-item-detail {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translate(0, -50%);\n  width: 14px; }\n\nion-footer ion-toolbar {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9kaXNjdXNzaW9ubWVudS9kaXNjdXNzaW9uL0U6XFx3b3Jrc3BhY2VcXEFuZHJvaWRcXGxpbmV1cCgwOS0xOCkvc3JjXFxhcHBcXHBhZ2VcXG1haW5tZW51XFxkaXNjdXNzaW9ubWVudVxcZGlzY3Vzc2lvblxcZGlzY3Vzc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLFdBQVcsRUFBQTs7QUFJZjtFQUVRLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9tYWlubWVudS9kaXNjdXNzaW9ubWVudS9kaXNjdXNzaW9uL2Rpc2N1c3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rpc2N1c3Npb24taXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbn1cblxuLmRpc2N1c3Npb24taXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufVxuXG4uZGlzY3Vzc2lvbi1pdGVtLW5hbWUgcCB7XG4gICAgY29sb3I6ICM2NTg2OTY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXNjdXNzaW9uLWl0ZW0tZGV0YWlsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgd2lkdGg6IDE0cHg7XG59XG5cblxuaW9uLWZvb3RlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.ts ***!
  \****************************************************************************/
/*! exports provided: DiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPage", function() { return DiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var _discussion_create_discussion_create_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../discussion-create/discussion-create.page */ "./src/app/page/mainmenu/discussionmenu/discussion-create/discussion-create.page.ts");



/**
 * import custom services
 */


var DiscussionPage = /** @class */ (function () {
    function DiscussionPage(loadingCtrl, modalCtrl, firebaseService, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.firebaseService = firebaseService;
        this.navCtrl = navCtrl;
        this.searchKeyword = '';
        this.arrDiscussions = [];
        this.arrResult = [];
    }
    DiscussionPage.prototype.ngOnInit = function () {
    };
    DiscussionPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    DiscussionPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var discussionLoader, self, discussioSnapshot, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        discussionLoader = _a.sent();
                        return [4 /*yield*/, discussionLoader.present()];
                    case 2:
                        _a.sent();
                        self = this;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.getDiscussions()];
                    case 4:
                        discussioSnapshot = _a.sent();
                        self.arrDiscussions = [];
                        self.arrResult = [];
                        discussioSnapshot.forEach(function (childSnapshot) {
                            self.arrDiscussions.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, childSnapshot.val()));
                        });
                        self.arrResult = self.arrDiscussions;
                        discussionLoader.dismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        discussionLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DiscussionPage.prototype.searchDiscussion = function () {
        var _this = this;
        if (this.searchKeyword != '') {
            this.arrResult = this.arrDiscussions.filter(function (item) { return item.discussionname.toLowerCase().includes(_this.searchKeyword.toLowerCase()); });
            console.log(this.arrResult);
        }
        else {
            this.arrResult = this.arrDiscussions;
        }
    };
    DiscussionPage.prototype.onClickDiscussion = function (discussionid, discussiontitle) {
        this.navCtrl.navigateForward('/discussion-detail/' + discussionid + '/' + discussiontitle + '/main/1');
    };
    DiscussionPage.prototype.addDiscussion = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var discussionCreateModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _discussion_create_discussion_create_page__WEBPACK_IMPORTED_MODULE_4__["DiscussionCreatePage"]
                        })];
                    case 1:
                        discussionCreateModal = _a.sent();
                        return [4 /*yield*/, discussionCreateModal.present()];
                    case 2:
                        _a.sent();
                        discussionCreateModal.onDidDismiss()
                            .then(function (data) {
                            if (data.data != null) {
                                _this.navCtrl.navigateForward('/discussion-detail/' + data.data.discussionid + '/' + data.data.discussionname + '/main/0');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscussionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discussion',
            template: __webpack_require__(/*! ./discussion.page.html */ "./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.html"),
            styles: [__webpack_require__(/*! ./discussion.page.scss */ "./src/app/page/mainmenu/discussionmenu/discussion/discussion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], DiscussionPage);
    return DiscussionPage;
}());



/***/ })

}]);
//# sourceMappingURL=discussionmenu-discussion-discussion-module.js.map