(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activitymenu-home-activity-home-activity-module"],{

/***/ "./src/app/page/mainmenu/activitymenu/activitypopover/activitypopover.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/activitypopover/activitypopover.page.ts ***!
  \************************************************************************************/
/*! exports provided: ActivitypopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitypopoverPage", function() { return ActivitypopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ActivitypopoverPage = /** @class */ (function () {
    function ActivitypopoverPage(router, popoverCtrl) {
        this.router = router;
        this.popoverCtrl = popoverCtrl;
    }
    ActivitypopoverPage.prototype.ngOnInit = function () {
    };
    ActivitypopoverPage.prototype.openHidenList = function () {
        this.router.navigateByUrl('/hidelist');
        this.popoverCtrl.dismiss();
    };
    ActivitypopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n  <ion-list>\n    <ion-item button lines='none' (click)=\"openHidenList()\">\n      <ion-label>Hidden Messages</ion-label>\n    </ion-item>\n  </ion-list>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], ActivitypopoverPage);
    return ActivitypopoverPage;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/home-activity/home-activity.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/home-activity/home-activity.module.ts ***!
  \**********************************************************************************/
/*! exports provided: HomeActivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeActivityPageModule", function() { return HomeActivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../component/component.module */ "./src/app/component/component.module.ts");
/* harmony import */ var _home_activity_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-activity.page */ "./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.ts");
/* harmony import */ var _activitypopover_activitypopover_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../activitypopover/activitypopover.page */ "./src/app/page/mainmenu/activitymenu/activitypopover/activitypopover.page.ts");










var HomeActivityPageModule = /** @class */ (function () {
    function HomeActivityPageModule() {
    }
    HomeActivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _component_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _home_activity_page__WEBPACK_IMPORTED_MODULE_8__["HomeActivityPage"] }])
            ],
            declarations: [_home_activity_page__WEBPACK_IMPORTED_MODULE_8__["HomeActivityPage"], _activitypopover_activitypopover_page__WEBPACK_IMPORTED_MODULE_9__["ActivitypopoverPage"]],
            entryComponents: [_activitypopover_activitypopover_page__WEBPACK_IMPORTED_MODULE_9__["ActivitypopoverPage"]]
        })
    ], HomeActivityPageModule);
    return HomeActivityPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.html":
/*!**********************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title color=\"navback\">Conversations</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"onClickPopOver()\">\n        <ion-icon name=\"more\" color=\"navback\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div id=\"home-activity-contact-container\">\n    <div class=\"home-activity-contact-item\" *ngFor=\"let contact of contacts; let i = index;\" (click)=\"viewChatRoom(i)\">\n      <div class=\"home-activity-contact-img\">\n        <div class=\"home-activity-contact-boardimg\">\n          <img [src]=\"contact.boardImg\" />\n        </div>\n      </div>\n      <div class=\"home-activity-contact-main\">\n        <div>\n          <p>\n            {{contact.boardName}}\n          </p>\n          <p>\n            Item: {{contact.name | formatname}}\n          </p>\n          <p (click)=\"onClickMessageControlBtn($event, contact.itemid, 0)\">\n            Hide Conversation\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n\nion-toolbar {\n  --background: #84A1B3;\n  position: relative; }\n\nion-title {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\nion-segment-button {\n  font-size: 12px;\n  flex: 1; }\n\n#home-activity-contact-container, #home-activity-favcontact-container {\n  padding: 16px; }\n\n.home-activity-contact-item {\n  display: flex;\n  margin-bottom: 2vh;\n  padding: 10px;\n  box-shadow: 0 0 8px #eaeaea; }\n\n.home-activity-contact-img {\n  display: flex;\n  align-items: center; }\n\n.home-activity-contact-boardimg {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  position: relative; }\n\n.home-activity-contact-boardimg img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n.home-activity-contact-main {\n  flex: 6;\n  padding-left: 16px;\n  display: flex;\n  align-items: center; }\n\n.home-activity-contact-main p {\n    margin: 5px 0; }\n\n.home-activity-contact-main > div > p:first-child {\n  color: #5a5a5a;\n  font-size: 12pt; }\n\n.home-activity-contact-main > div > p:nth-child(2) {\n  color: #5a5a5a;\n  font-style: italic;\n  font-size: 10pt; }\n\n.home-activity-contact-main > div > p:nth-child(3) {\n  font-size: 10pt;\n  color: #3594d0;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9hY3Rpdml0eW1lbnUvaG9tZS1hY3Rpdml0eS9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxtYWlubWVudVxcYWN0aXZpdHltZW51XFxob21lLWFjdGl2aXR5XFxob21lLWFjdGl2aXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUF1QixFQUFBOztBQUczQjtFQUNJLHFCQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLGVBQWU7RUFDZixPQUFPLEVBQUE7O0FBR1g7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQyxFQUFBOztBQUl4QztFQUNJLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUp2QjtJQU1RLGFBQWEsRUFBQTs7QUFJckI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21haW5tZW51L2FjdGl2aXR5bWVudS9ob21lLWFjdGl2aXR5L2hvbWUtYWN0aXZpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzg0QTFCMztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzg0QTFCMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZsZXg6IDE7XG59XG5cbiNob21lLWFjdGl2aXR5LWNvbnRhY3QtY29udGFpbmVyLCAjaG9tZS1hY3Rpdml0eS1mYXZjb250YWN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmhvbWUtYWN0aXZpdHktY29udGFjdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggI2VhZWFlYTtcbn1cblxuLmhvbWUtYWN0aXZpdHktY29udGFjdC1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhvbWUtYWN0aXZpdHktY29udGFjdC1ib2FyZGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG59XG5cbi5ob21lLWFjdGl2aXR5LWNvbnRhY3QtbWFpbiB7XG4gICAgZmxleDogNjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgIH1cbn1cblxuLmhvbWUtYWN0aXZpdHktY29udGFjdC1tYWluID4gZGl2ID4gcDpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6ICM1YTVhNWE7XG4gICAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4uaG9tZS1hY3Rpdml0eS1jb250YWN0LW1haW4gPiBkaXYgPiBwOm50aC1jaGlsZCgyKSB7XG4gICAgY29sb3I6ICM1YTVhNWE7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmhvbWUtYWN0aXZpdHktY29udGFjdC1tYWluID4gZGl2ID4gcDpudGgtY2hpbGQoMykge1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBjb2xvcjogIzM1OTRkMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.ts ***!
  \********************************************************************************/
/*! exports provided: HomeActivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeActivityPage", function() { return HomeActivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var _activitypopover_activitypopover_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../activitypopover/activitypopover.page */ "./src/app/page/mainmenu/activitymenu/activitypopover/activitypopover.page.ts");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");






var HomeActivityPage = /** @class */ (function () {
    function HomeActivityPage(navCtrl, firebaseService, myUtils, loadingCtrl, popoverCtrl, event) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.myUtils = myUtils;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.event = event;
        this.currentUserInfo = {};
        this.messageDataRef = null;
        this.messageDataListener = null;
        this.allContacts = [];
        this.contacts = [];
        this.historyLoader = null;
        this.arrHideLists = [];
        this.event.subscribe('onchangehidelist', function (data) {
            _this.initPage();
        });
    }
    HomeActivityPage.prototype.ngOnInit = function () {
        this.currentUserId = this.firebaseService.getUID();
    };
    HomeActivityPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    HomeActivityPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var strHideLists;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.messageDataRef = null;
                        this.messageDataListener = null;
                        this.arrHideLists = [];
                        if (localStorage.getItem("hidelist") !== null && localStorage.getItem("hidelist") !== "") {
                            strHideLists = localStorage.getItem("hidelist");
                            this.arrHideLists = strHideLists.split(",");
                        }
                        return [4 /*yield*/, this.getCurrentUserInfo()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getChatHistory()];
                    case 2:
                        _a.sent();
                        this.event.publish("onReceiveNotification", { isClear: true });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeActivityPage.prototype.getCurrentUserInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, currentUserSnapshot, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        _a.historyLoader = _b.sent();
                        return [4 /*yield*/, this.historyLoader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.getUserProfile(this.currentUserId)];
                    case 4:
                        currentUserSnapshot = _b.sent();
                        this.currentUserInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, currentUserSnapshot.val());
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        this.historyLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HomeActivityPage.prototype.getChatHistory = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                this.messageDataRef = this.firebaseService.getAllChatHistoryRef();
                this.messageDataListener = this.messageDataRef.on("value", function (snapshot) {
                    self.contacts = [];
                    self.allContacts = [];
                    snapshot.forEach(function (childSnapshot) {
                        childSnapshot.forEach(function (valueSnapshot) {
                            var users = valueSnapshot.key.split("-");
                            var tmpCUIndex = users.findIndex(function (item) { return item == self.currentUserId; });
                            var tmpMessageObj = valueSnapshot.val();
                            var boardName = "";
                            var boardImg = "";
                            if (tmpMessageObj !== null) {
                                boardName = tmpMessageObj[Object.keys(tmpMessageObj)[0]].boardName;
                                boardImg = tmpMessageObj[Object.keys(tmpMessageObj)[0]].contentimg;
                            }
                            if (tmpCUIndex > -1) {
                                var otherUID_1 = tmpCUIndex == 0 ? users[1] : users[0];
                                var isExists = self.contacts.findIndex(function (item) { return item == otherUID_1; });
                                if (isExists == -1) {
                                    self.getUserData(otherUID_1, childSnapshot.key, boardName, boardImg);
                                }
                            }
                        });
                    });
                    self.myUtils.setChatHistory(_this.allContacts);
                    self.historyLoader.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    HomeActivityPage.prototype.getUserData = function (uid, itemid, boardName, boardImg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userInfoSnapshot, isHidden, isAllExists, isContactExists, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.firebaseService.getUserProfile(uid)];
                    case 1:
                        userInfoSnapshot = _a.sent();
                        isHidden = this.arrHideLists.indexOf(itemid);
                        isAllExists = this.allContacts.findIndex(function (x) { return x.itemid === itemid; });
                        isContactExists = this.contacts.findIndex(function (x) { return x.itemid === itemid; });
                        if (isAllExists == -1) {
                            this.allContacts.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, userInfoSnapshot.val(), { itemid: itemid, boardName: boardName, boardImg: boardImg, name: userInfoSnapshot.val().fname + " " + userInfoSnapshot.val().lname }));
                        }
                        if (isHidden == -1 && isContactExists == -1) {
                            this.contacts.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, userInfoSnapshot.val(), { itemid: itemid, boardName: boardName, boardImg: boardImg, name: userInfoSnapshot.val().fname + " " + userInfoSnapshot.val().lname }));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomeActivityPage.prototype.viewChatRoom = function (contactid) {
        this.stopActivityListener();
        this.navCtrl.navigateForward('/chat/' + this.contacts[contactid].itemid + "/" + this.contacts[contactid].uid);
    };
    HomeActivityPage.prototype.onClickMessageControlBtn = function (evt, itemid) {
        evt.stopPropagation();
        this.arrHideLists.push(itemid);
        var index = this.contacts.findIndex(function (x) { return x.itemid == itemid; });
        if (index > -1) {
            this.contacts.splice(index, 1);
        }
        localStorage.setItem("hidelist", this.arrHideLists.join(","));
    };
    HomeActivityPage.prototype.onClickPopOver = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _activitypopover_activitypopover_page__WEBPACK_IMPORTED_MODULE_4__["ActivitypopoverPage"],
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
    HomeActivityPage.prototype.ionViewWillLeave = function () {
        this.stopActivityListener();
    };
    HomeActivityPage.prototype.stopActivityListener = function () {
        if (this.messageDataListener != null) {
            this.messageDataRef.off("value", this.messageDataListener);
            this.messageDataListener = null;
            this.messageDataRef = null;
        }
    };
    HomeActivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-activity',
            template: __webpack_require__(/*! ./home-activity.page.html */ "./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.html"),
            styles: [__webpack_require__(/*! ./home-activity.page.scss */ "./src/app/page/mainmenu/activitymenu/home-activity/home-activity.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_5__["MyutilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], HomeActivityPage);
    return HomeActivityPage;
}());



/***/ })

}]);
//# sourceMappingURL=activitymenu-home-activity-home-activity-module.js.map