(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-activitymenu-activity-detail-activity-detail-module"],{

/***/ "./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ActivityDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailPageModule", function() { return ActivityDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../component/component.module */ "./src/app/component/component.module.ts");
/* harmony import */ var _activity_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity-detail.page */ "./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.ts");
/* harmony import */ var src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/page/modal/modal.module */ "./src/app/page/modal/modal.module.ts");









var routes = [
    {
        path: '',
        component: _activity_detail_page__WEBPACK_IMPORTED_MODULE_7__["ActivityDetailPage"]
    }
];
var ActivityDetailPageModule = /** @class */ (function () {
    function ActivityDetailPageModule() {
    }
    ActivityDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _component_component_module__WEBPACK_IMPORTED_MODULE_6__["ComponentModule"],
                src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activity_detail_page__WEBPACK_IMPORTED_MODULE_7__["ActivityDetailPage"]],
        })
    ], ActivityDetailPageModule);
    return ActivityDetailPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.html":
/*!**************************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"navback\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-icon color=\"navback\" slot=\"start\" name=\"arrow-back\" (click)=\"onClickBackBtn()\"></ion-icon> -->\n    <ion-title>{{boardInfo?.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"activity-detail-board-imgs\">\n    <ng-container *ngIf=\"boardInfo?.imgs.length > 0; else noBoardImage\">\n      <div id=\"activity-detail-board-img-container\">\n        <img [src]=\"boardInfo?.imgs[0]\" />\n      </div>\n    </ng-container>\n    <ng-template #noBoardImage>\n      <p>\n        No Image\n      </p>\n    </ng-template>\n  </div>\n\n  <div id=\"activity-detail-message-container\">\n    <ng-container *ngFor=\"let message of detailMessages\">\n      <messagebox [message]=\"message\" [currentUser]=\"currentUserInfo.uid\" [isDisableProfileClick]=\"true\"></messagebox>\n    </ng-container>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"messageTxt\" placeholder=\"Your Message\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail\" (click)=\"sendMessage()\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n  ion-header ion-toolbar {\n    --background: #84A1B3; }\n  ion-header ion-toolbar ion-icon {\n      font-size: 16pt;\n      margin-left: 16px; }\n  ion-header ion-toolbar ion-title {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      color: #CAE9F7; }\n  #activity-detail-board-imgs {\n  text-align: center; }\n  #activity-detail-board-img-container {\n  height: 100px;\n  overflow: hidden;\n  position: relative;\n  margin: 2vh 0 3vh 0; }\n  #activity-detail-board-img-container img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    max-width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9hY3Rpdml0eW1lbnUvYWN0aXZpdHktZGV0YWlsL0U6XFx3b3Jrc3BhY2VcXEFuZHJvaWRcXGxpbmV1cCgwOS0xOCkvc3JjXFxhcHBcXHBhZ2VcXG1haW5tZW51XFxhY3Rpdml0eW1lbnVcXGFjdGl2aXR5LWRldGFpbFxcYWN0aXZpdHktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUF1QixFQUFBO0VBRDNCO0lBR1EscUJBQWEsRUFBQTtFQUhyQjtNQUtZLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQU43QjtNQVNZLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLGdDQUFnQztNQUNoQyxjQUFjLEVBQUE7RUFLMUI7RUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBSnZCO0lBTVEsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9tYWlubWVudS9hY3Rpdml0eW1lbnUvYWN0aXZpdHktZGV0YWlsL2FjdGl2aXR5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjODRBMUIzO1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjODRBMUIzO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjQ0FFOUY3O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jYWN0aXZpdHktZGV0YWlsLWJvYXJkLWltZ3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2FjdGl2aXR5LWRldGFpbC1ib2FyZC1pbWctY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMnZoIDAgM3ZoIDA7XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.ts ***!
  \************************************************************************************/
/*! exports provided: ActivityDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailPage", function() { return ActivityDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");







var ActivityDetailPage = /** @class */ (function () {
    function ActivityDetailPage(router, route, firebaseService, myUtils, loadingCtrl) {
        this.router = router;
        this.route = route;
        this.firebaseService = firebaseService;
        this.myUtils = myUtils;
        this.loadingCtrl = loadingCtrl;
        this.boardInfo = null;
        this.itemId = '';
        this.chatDataRef = null;
        this.chatDataListener = null;
        this.currentUserInfo = {};
        this.messageTxt = '';
        this.chatRoom = '';
        this.detailMessages = [];
    }
    ActivityDetailPage.prototype.ngOnInit = function () { };
    ActivityDetailPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    ActivityDetailPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.itemId = this.route.snapshot.paramMap.get('itemid');
                        this.chatUserId = this.route.snapshot.paramMap.get('poster');
                        return [4 /*yield*/, this.getChatHistory()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActivityDetailPage.prototype.getChatHistory = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var messageLoader, cuid, userProfileSnapshot, self, boardInfoSnapshot, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        messageLoader = _a.sent();
                        return [4 /*yield*/, messageLoader.present()];
                    case 2:
                        _a.sent();
                        cuid = this.firebaseService.getUID();
                        return [4 /*yield*/, this.firebaseService.getUserProfile(cuid)];
                    case 3:
                        userProfileSnapshot = _a.sent();
                        this.currentUserInfo = userProfileSnapshot.val();
                        if (cuid >= this.chatUserId) {
                            this.chatRoom = this.chatUserId + '-' + cuid;
                        }
                        else {
                            this.chatRoom = cuid + '-' + this.chatUserId;
                        }
                        console.log(cuid, this.chatUserId, this.chatRoom);
                        self = this;
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.firebaseService.getSpecificBoardInfo(this.itemId)];
                    case 5:
                        boardInfoSnapshot = _a.sent();
                        this.boardInfo = boardInfoSnapshot.val();
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        messageLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 7];
                    case 7:
                        this.chatDataRef = this.firebaseService.getMessageDataRef(this.itemId, this.chatRoom);
                        this.chatDataListener = this.chatDataRef.on('value', function (snapshot) {
                            self.detailMessages = [];
                            snapshot.forEach(function (chidlsnapshot) {
                                self.detailMessages.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, chidlsnapshot.val()));
                            });
                            if (messageLoader !== null) {
                                messageLoader.dismiss();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActivityDetailPage.prototype.onClickBoardImage = function () {
        this.clearDataListener();
        localStorage.setItem('posterid', this.chatUserId);
        this.router.navigateByUrl('/shopitemdetail/' + this.itemId + '/chat');
    };
    ActivityDetailPage.prototype.sendMessage = function () {
        if (this.messageTxt !== '') {
            var messageItem = {
                uid: this.firebaseService.getUID(),
                name: this.currentUserInfo.fname + ' ' + this.currentUserInfo.lname,
                photo: '',
                content: this.messageTxt,
                time: firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP,
                contentimg: this.boardInfo.imgs[0],
                boardName: this.boardInfo.title,
                isRead: false,
                location: {
                    lat: this.myUtils.currentUserLocation.lat,
                    long: this.myUtils.currentUserLocation.long
                },
                review: 0
            };
            this.firebaseService.sendMessage(this.itemId, this.chatRoom, messageItem);
            this.messageTxt = '';
        }
    };
    ActivityDetailPage.prototype.clearDataListener = function () {
        if (this.chatDataListener !== null) {
            this.chatDataRef.off('value', this.chatDataListener);
            this.chatDataListener = null;
            this.chatDataRef = null;
        }
    };
    ActivityDetailPage.prototype.onClickBackBtn = function () {
        this.clearDataListener();
        this.router.navigateByUrl('/home/activity');
    };
    ActivityDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity-detail',
            template: __webpack_require__(/*! ./activity-detail.page.html */ "./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.html"),
            styles: [__webpack_require__(/*! ./activity-detail.page.scss */ "./src/app/page/mainmenu/activitymenu/activity-detail/activity-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_6__["MyutilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], ActivityDetailPage);
    return ActivityDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-activitymenu-activity-detail-activity-detail-module.js.map