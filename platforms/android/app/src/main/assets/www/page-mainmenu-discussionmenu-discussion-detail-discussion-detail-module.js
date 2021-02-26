(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-discussionmenu-discussion-detail-discussion-detail-module"],{

/***/ "./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.module.ts ***!
  \********************************************************************************************/
/*! exports provided: DiscussionDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionDetailPageModule", function() { return DiscussionDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../component/component.module */ "./src/app/component/component.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _discussion_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discussion-detail.page */ "./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.ts");









var routes = [
    {
        path: '',
        component: _discussion_detail_page__WEBPACK_IMPORTED_MODULE_8__["DiscussionDetailPage"]
    }
];
var DiscussionDetailPageModule = /** @class */ (function () {
    function DiscussionDetailPageModule() {
    }
    DiscussionDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _component_component_module__WEBPACK_IMPORTED_MODULE_6__["ComponentModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_discussion_detail_page__WEBPACK_IMPORTED_MODULE_8__["DiscussionDetailPage"]]
        })
    ], DiscussionDetailPageModule);
    return DiscussionDetailPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.html":
/*!********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"navback\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-icon slot=\"start\" color=\"navback\" name=\"arrow-back\" (click)=\"onClickBackBtn()\"></ion-icon> -->\n    <ion-title>{{discussionTitle}}</ion-title>\n    <ion-icon slot=\"end\" [color]=\"isFavDiscussion?'activestar':'light'\" name=\"star\" (click)=\"onToggleFavoriteBtn()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"discussion-detail-eventname\">\n    <p>{{discussionTitle}}</p>\n  </div>\n\n  <div id=\"discussion-detail-container\">\n    <div class=\"discussion-detail-item\" *ngFor=\"let item of detailItems\">\n      <div class=\"discussion-detail-body\">\n        <p class=\"discussion-detail-item-content\">\n          {{item.content}}\n        </p>\n        <p class=\"discussion-detail-item-time\">\n          {{item.postername | formatname}}.&nbsp;&nbsp;&nbsp;{{item.createdat | millitotime: true}}\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"discussionCommentTxt\" placeholder=\"Your Message here\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail\" (click)=\"postDiscussionComment()\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n  ion-header ion-toolbar {\n    position: relative;\n    --background: #84A1B3; }\n  ion-header ion-toolbar ion-icon {\n      font-size: 16pt;\n      margin: 0 16px; }\n  ion-title {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: #CAE9F7;\n  font-weight: bold; }\n  #discussion-detail-eventname {\n  color: #658696;\n  text-align: center; }\n  .discussion-detail-item {\n  box-shadow: 0 0 8px #e8e8e8;\n  margin-bottom: 2vh; }\n  .discussion-detail-body {\n  padding: 5px 10px 10px 10px; }\n  .discussion-detail-item-content, .discussion-detail-item-time {\n  margin: 5px 0; }\n  .discussion-detail-item-content {\n  color: #565656;\n  font-style: italic; }\n  .discussion-detail-item-time {\n  text-align: right;\n  font-size: 10pt;\n  color: #656565; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9kaXNjdXNzaW9ubWVudS9kaXNjdXNzaW9uLWRldGFpbC9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxtYWlubWVudVxcZGlzY3Vzc2lvbm1lbnVcXGRpc2N1c3Npb24tZGV0YWlsXFxkaXNjdXNzaW9uLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTtFQUQzQjtJQUdRLGtCQUFrQjtJQUNsQixxQkFBYSxFQUFBO0VBSnJCO01BTVksZUFBZTtNQUNmLGNBQWMsRUFBQTtFQUsxQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksMkJBQTJCLEVBQUE7RUFHL0I7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbWFpbm1lbnUvZGlzY3Vzc2lvbm1lbnUvZGlzY3Vzc2lvbi1kZXRhaWwvZGlzY3Vzc2lvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzg0QTFCMztcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjODRBMUIzO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0NBRTlGNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2Rpc2N1c3Npb24tZGV0YWlsLWV2ZW50bmFtZSB7XG4gICAgY29sb3I6ICM2NTg2OTY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzY3Vzc2lvbi1kZXRhaWwtaXRlbSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjZThlOGU4O1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLmRpc2N1c3Npb24tZGV0YWlsLWJvZHkge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLmRpc2N1c3Npb24tZGV0YWlsLWl0ZW0tY29udGVudCwgLmRpc2N1c3Npb24tZGV0YWlsLWl0ZW0tdGltZSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmRpc2N1c3Npb24tZGV0YWlsLWl0ZW0tY29udGVudCB7XG4gICAgY29sb3I6ICM1NjU2NTY7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZGlzY3Vzc2lvbi1kZXRhaWwtaXRlbS10aW1lIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgY29sb3I6ICM2NTY1NjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.ts ***!
  \******************************************************************************************/
/*! exports provided: DiscussionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionDetailPage", function() { return DiscussionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");





var DiscussionDetailPage = /** @class */ (function () {
    function DiscussionDetailPage(route, navCtrl, firebaseService, loadingCtrl, event) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.event = event;
        this.discussionId = '';
        this.discussionTitle = '';
        this.arrFavDiscussions = [];
        this.currentUserid = '';
        this.userInfo = {};
        this.discussionCommentTxt = '';
        this.discussionDataRef = null;
        this.discussionDataListener = null;
        this.detailItems = [];
    }
    DiscussionDetailPage.prototype.ngOnInit = function () {
        this.currentUserid = this.firebaseService.getUID();
        this.discussionId = this.route.snapshot.paramMap.get('discussionid');
        this.discussionTitle = this.route.snapshot.paramMap.get('discussiontitle');
        this.backPage = this.route.snapshot.paramMap.get('backpage');
        this.isnew = this.route.snapshot.paramMap.get('isnew') == '0' ? true : false;
    };
    DiscussionDetailPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    DiscussionDetailPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isFavDiscussion = true;
                        this.arrFavDiscussions = [];
                        return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        if (!(this.userInfo.favorite.discussions !== '')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.checkIfFavDiscussion()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.getAllDiscussionData();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscussionDetailPage.prototype.checkIfFavDiscussion = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var strFavDiscussion;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                strFavDiscussion = this.userInfo.favorite.discussions;
                this.arrFavDiscussions = strFavDiscussion.split(',');
                if (this.isnew) {
                    this.arrFavDiscussions.push(this.discussionId);
                }
                else {
                    this.isFavDiscussion = this.arrFavDiscussions.indexOf(this.discussionId) > -1 ? true : false;
                }
                return [2 /*return*/];
            });
        });
    };
    DiscussionDetailPage.prototype.getUserData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userDataSnapshot;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebaseService.getUserProfile(this.currentUserid)];
                    case 1:
                        userDataSnapshot = _a.sent();
                        this.userInfo = userDataSnapshot.val();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscussionDetailPage.prototype.getAllDiscussionData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, detailLoader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        detailLoader = _a.sent();
                        return [4 /*yield*/, detailLoader.present()];
                    case 2:
                        _a.sent();
                        this.discussionDataRef = this.firebaseService.getDiscussionContentsById(this.discussionId);
                        this.discussionDataListener = this.discussionDataRef.on('value', function (snapshot) {
                            self.detailItems = [];
                            snapshot.forEach(function (childsnapshot) {
                                self.detailItems.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, childsnapshot.val()));
                            });
                            detailLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscussionDetailPage.prototype.postDiscussionComment = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var commentItem, saveLoader, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.discussionCommentTxt == '')) return [3 /*break*/, 1];
                        alert('Please input your text');
                        return [2 /*return*/];
                    case 1:
                        commentItem = {
                            id: '',
                            posterid: this.currentUserid,
                            postername: this.userInfo.fname + ' ' + this.userInfo.lname,
                            content: this.discussionCommentTxt,
                            createdat: '',
                            title: this.discussionTitle,
                            review: 0
                        };
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait...'
                            })];
                    case 2:
                        saveLoader = _a.sent();
                        return [4 /*yield*/, saveLoader.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.firebaseService.setDiscussionComment(this.discussionId, commentItem)];
                    case 5:
                        _a.sent();
                        saveLoader.dismiss();
                        this.discussionCommentTxt = '';
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        saveLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DiscussionDetailPage.prototype.onToggleFavoriteBtn = function () {
        this.isFavDiscussion = !this.isFavDiscussion;
        if (this.isFavDiscussion == true) {
            this.arrFavDiscussions.push(this.discussionId);
        }
        else {
            var index = this.arrFavDiscussions.indexOf(this.discussionId);
            if (index > -1) {
                this.arrFavDiscussions.splice(index, 1);
            }
        }
        this.firebaseService.addFavDiscussions(this.arrFavDiscussions.join(','));
    };
    DiscussionDetailPage.prototype.onClickBackBtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var favLoader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.discussionDataListener !== null) {
                            this.discussionDataRef.off('value', this.discussionDataListener);
                            this.discussionDataListener = null;
                            this.discussionDataRef = null;
                        }
                        return [4 /*yield*/, this.loadingCtrl.create({
                                spinner: 'bubbles'
                            })];
                    case 1:
                        favLoader = _a.sent();
                        return [4 /*yield*/, favLoader.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.firebaseService.addFavDiscussions(this.arrFavDiscussions.join(','))];
                    case 3:
                        _a.sent();
                        favLoader.dismiss();
                        if (this.backPage == 'home') {
                            this.navCtrl.navigateBack('/home/main');
                        }
                        else {
                            this.event.publish('onloaddiscussion');
                            this.navCtrl.navigateBack('/home/discussion');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscussionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discussion-detail',
            template: __webpack_require__(/*! ./discussion-detail.page.html */ "./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.html"),
            styles: [__webpack_require__(/*! ./discussion-detail.page.scss */ "./src/app/page/mainmenu/discussionmenu/discussion-detail/discussion-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], DiscussionDetailPage);
    return DiscussionDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-discussionmenu-discussion-detail-discussion-detail-module.js.map