(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-activitymenu-hidelist-hidelist-module"],{

/***/ "./src/app/page/mainmenu/activitymenu/hidelist/hidelist.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/hidelist/hidelist.module.ts ***!
  \************************************************************************/
/*! exports provided: HidelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HidelistPageModule", function() { return HidelistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _hidelist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hidelist.page */ "./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.ts");








var routes = [
    {
        path: '',
        component: _hidelist_page__WEBPACK_IMPORTED_MODULE_7__["HidelistPage"]
    }
];
var HidelistPageModule = /** @class */ (function () {
    function HidelistPageModule() {
    }
    HidelistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hidelist_page__WEBPACK_IMPORTED_MODULE_7__["HidelistPage"]]
        })
    ], HidelistPageModule);
    return HidelistPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.html":
/*!************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div id=\"hidelist-btnclose\">\n    <ion-icon name=\"close\" (click)=\"onClickBackBtn()\"></ion-icon>\n  </div>\n\n  <ion-list padding>\n    <div id=\"hidelist-contact-container\">\n      <div class=\"home-activity-contact-item\" *ngFor=\"let contact of arrHideItems; let i = index;\">\n        <div class=\"home-activity-contact-img\">\n          <div class=\"home-activity-contact-boardimg\">\n            <img [src]=\"contact.boardImg\" />\n          </div>\n        </div>\n        <div class=\"home-activity-contact-main\">\n          <div>\n            <p>\n              {{contact.boardName}}\n            </p>\n            <p>\n              Item: {{contact.name | formatname}}\n            </p>\n            <p (click)=\"onClickMessageControlBtn($event, contact.itemid)\">\n              UnHide\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hidelist-btnclose {\n  text-align: right;\n  width: 100%;\n  padding: 24px 16px 16px 16px; }\n  #hidelist-btnclose ion-icon {\n    font-size: 16pt; }\n  .home-activity-contact-item {\n  display: flex;\n  margin-bottom: 2vh;\n  padding: 10px;\n  box-shadow: 0 0 8px #eaeaea; }\n  .home-activity-contact-img {\n  display: flex;\n  align-items: center; }\n  .home-activity-contact-boardimg {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  position: relative; }\n  .home-activity-contact-boardimg img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  .home-activity-contact-main {\n  flex: 6;\n  padding-left: 16px;\n  display: flex;\n  align-items: center; }\n  .home-activity-contact-main p {\n    margin: 5px 0; }\n  .home-activity-contact-main > div > p:first-child {\n  color: #5a5a5a;\n  font-size: 12pt; }\n  .home-activity-contact-main > div > p:nth-child(2) {\n  color: #5a5a5a;\n  font-style: italic;\n  font-size: 10pt; }\n  .home-activity-contact-main > div > p:nth-child(3) {\n  font-size: 10pt;\n  color: #3594d0;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9hY3Rpdml0eW1lbnUvaGlkZWxpc3QvRTpcXHdvcmtzcGFjZVxcQW5kcm9pZFxcbGluZXVwKDA5LTE4KS9zcmNcXGFwcFxccGFnZVxcbWFpbm1lbnVcXGFjdGl2aXR5bWVudVxcaGlkZWxpc3RcXGhpZGVsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNEJBQTRCLEVBQUE7RUFIaEM7SUFLUSxlQUFlLEVBQUE7RUFJdkI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTtFQUcvQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBSnRCO0lBTVEsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDLEVBQUE7RUFJeEM7RUFDSSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUp2QjtJQU1RLGFBQWEsRUFBQTtFQUlyQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7RUFHbkI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUduQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21haW5tZW51L2FjdGl2aXR5bWVudS9oaWRlbGlzdC9oaWRlbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGlkZWxpc3QtYnRuY2xvc2Uge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4IDE2cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgfVxufVxuXG4uaG9tZS1hY3Rpdml0eS1jb250YWN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjZWFlYWVhO1xufVxuXG4uaG9tZS1hY3Rpdml0eS1jb250YWN0LWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZS1hY3Rpdml0eS1jb250YWN0LWJvYXJkaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cblxuLmhvbWUtYWN0aXZpdHktY29udGFjdC1tYWluIHtcbiAgICBmbGV4OiA2O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxufVxuXG4uaG9tZS1hY3Rpdml0eS1jb250YWN0LW1haW4gPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogIzVhNWE1YTtcbiAgICBmb250LXNpemU6IDEycHQ7XG59XG5cbi5ob21lLWFjdGl2aXR5LWNvbnRhY3QtbWFpbiA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcbiAgICBjb2xvcjogIzVhNWE1YTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uaG9tZS1hY3Rpdml0eS1jb250YWN0LW1haW4gPiBkaXYgPiBwOm50aC1jaGlsZCgzKSB7XG4gICAgZm9udC1zaXplOiAxMHB0O1xuICAgIGNvbG9yOiAjMzU5NGQwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.ts ***!
  \**********************************************************************/
/*! exports provided: HidelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HidelistPage", function() { return HidelistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");




var HidelistPage = /** @class */ (function () {
    function HidelistPage(navCtrl, myUtils, event) {
        this.navCtrl = navCtrl;
        this.myUtils = myUtils;
        this.event = event;
        this.arrContacts = [];
        this.arrHideLists = [];
        this.arrHideItems = [];
    }
    HidelistPage.prototype.ngOnInit = function () {
    };
    HidelistPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    HidelistPage.prototype.initPage = function () {
        var _this = this;
        this.arrHideLists = [];
        this.arrContacts = this.myUtils.getChatHistory();
        if (localStorage.getItem("hidelist") !== null && localStorage.getItem("hidelist") !== "") {
            var strHideList = localStorage.getItem("hidelist");
            this.arrHideLists = strHideList.split(",");
        }
        this.arrHideItems = this.arrContacts.filter(function (x) {
            return _this.arrHideLists.indexOf(x.itemid) > -1;
        });
    };
    HidelistPage.prototype.onClickMessageControlBtn = function (evt, itemid) {
        var arrIndex = this.arrHideLists.indexOf(itemid);
        var itemIndex = this.arrHideItems.findIndex(function (x) { return x.itemid == itemid; });
        if (arrIndex > -1) {
            this.arrHideLists.splice(arrIndex, 1);
        }
        if (itemIndex > -1) {
            this.arrHideItems.splice(itemIndex, 1);
        }
        if (this.arrHideLists.length > 0) {
            localStorage.setItem("hidelist", this.arrHideLists.join(","));
        }
        else {
            localStorage.setItem("hidelist", "");
        }
    };
    HidelistPage.prototype.onClickBackBtn = function () {
        this.event.publish("onchangehidelist");
        this.navCtrl.navigateBack('home/activity');
    };
    HidelistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hidelist',
            template: __webpack_require__(/*! ./hidelist.page.html */ "./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.html"),
            styles: [__webpack_require__(/*! ./hidelist.page.scss */ "./src/app/page/mainmenu/activitymenu/hidelist/hidelist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_3__["MyutilsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], HidelistPage);
    return HidelistPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-activitymenu-hidelist-hidelist-module.js.map