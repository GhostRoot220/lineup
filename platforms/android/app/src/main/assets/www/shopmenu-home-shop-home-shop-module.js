(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopmenu-home-shop-home-shop-module"],{

/***/ "./src/app/page/mainmenu/shopmenu/home-shop/home-shop.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop/home-shop.module.ts ***!
  \**********************************************************************/
/*! exports provided: HomeShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeShopPageModule", function() { return HomeShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-shop.page */ "./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.ts");







var HomeShopPageModule = /** @class */ (function () {
    function HomeShopPageModule() {
    }
    HomeShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _home_shop_page__WEBPACK_IMPORTED_MODULE_6__["HomeShopPage"] }])
            ],
            declarations: [_home_shop_page__WEBPACK_IMPORTED_MODULE_6__["HomeShopPage"]]
        })
    ], HomeShopPageModule);
    return HomeShopPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding>\n  <div id=\"shop-search-bar\">\n    <ion-searchbar color=\"white\" placeholder=\"Search\" no-padding [(ngModel)]=\"itemSearchQuery\" (ionChange)=\"searchItems()\"></ion-searchbar>\n  </div>\n\n  <div id=\"shop-main-container\">\n    <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"segmentChanged()\">\n      <ion-segment-button value=\"0\">\n        <ion-label>All</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"1\">\n        <ion-label>My Items</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"2\">\n        <ion-label>Saved Items</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\" *ngFor=\"let item of searchResults\">\n          <div class=\"home-shop-item\" (click)=\"viewItemDetailPage(item.id)\">\n            <img [src]=\"item.imgs&&item.imgs[0]?item.imgs[0]:''\" />\n            <div class=\"home-shop-item-description\">\n              <p>{{item.title}}</p>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"viewNewSurfboardPage()\">\n      Post\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#shop-search-bar {\n  display: flex;\n  align-items: center;\n  padding: 16px 10px;\n  background-color: #84A1B3; }\n\nion-segment-button {\n  font-size: 12px;\n  flex: 1; }\n\n#home-shop-itemcontainer {\n  padding: 10px; }\n\n#home-shop-itemcontainer ion-col {\n    padding: 0 !important; }\n\n.home-shop-item {\n  height: 28vw;\n  overflow: hidden;\n  position: relative; }\n\n.home-shop-item img {\n    width: 100%;\n    min-height: 100%; }\n\n.home-shop-item-description {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.home-shop-item-description p {\n    color: white;\n    font-family: \"Open Sans Bold\"; }\n\nion-footer ion-toolbar {\n  text-align: center; }\n\n#home-shop-btn-myitem {\n  margin-left: 5vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9zaG9wbWVudS9ob21lLXNob3AvRTpcXHdvcmtzcGFjZVxcQW5kcm9pZFxcbGluZXVwKDA5LTE4KS9zcmNcXGFwcFxccGFnZVxcbWFpbm1lbnVcXHNob3BtZW51XFxob21lLXNob3BcXGhvbWUtc2hvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsT0FBTyxFQUFBOztBQUdYO0VBQ0ksYUFBYSxFQUFBOztBQURqQjtJQUdRLHFCQUFxQixFQUFBOztBQUk3QjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBSHRCO0lBS1EsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9DQUFvQyxFQUFBOztBQVB4QztJQVNRLFlBQVk7SUFDWiw2QkFBNkIsRUFBQTs7QUFJckM7RUFFUSxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbWFpbm1lbnUvc2hvcG1lbnUvaG9tZS1zaG9wL2hvbWUtc2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNzaG9wLXNlYXJjaC1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0QTFCMztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZmxleDogMTtcbn1cblxuI2hvbWUtc2hvcC1pdGVtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uaG9tZS1zaG9wLWl0ZW0ge1xuICAgIGhlaWdodDogMjh2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5ob21lLXNob3AtaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQm9sZFwiO1xuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4jaG9tZS1zaG9wLWJ0bi1teWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.ts ***!
  \********************************************************************/
/*! exports provided: HomeShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeShopPage", function() { return HomeShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");





var HomeShopPage = /** @class */ (function () {
    function HomeShopPage(router, firebaseService, loadingCtrl, event) {
        var _this = this;
        this.router = router;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.event = event;
        this.itemSearchQuery = '';
        this.userInfo = {};
        this.boardLoader = null;
        /**
         * selected segments
         *  0: All
         *  1: My Items
         *  2: Saved Items
         */
        this.selectedSegment = '0';
        this.arrMyItems = [];
        this.arrMyFavItems = [];
        this.shopItems = [];
        this.event.subscribe('onfavchange', function (data) {
            _this.initPage();
        });
    }
    HomeShopPage.prototype.ngOnInit = function () {
    };
    HomeShopPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    HomeShopPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.shopItems = [];
                        this.searchResults = [];
                        this.arrMyItems = [];
                        this.arrMyFavItems = [];
                        this.selectedSegment = '0';
                        return [4 /*yield*/, this.getUserProfile()];
                    case 1:
                        _a.sent();
                        this.getAllSurfBoards();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeShopPage.prototype.getUserProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, uid, userInfoSnapshot, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        _a.boardLoader = _b.sent();
                        return [4 /*yield*/, this.boardLoader.present()];
                    case 2:
                        _b.sent();
                        uid = this.firebaseService.getUID();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.getUserProfile(uid)];
                    case 4:
                        userInfoSnapshot = _b.sent();
                        this.userInfo = userInfoSnapshot.val();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopPage.prototype.getAllSurfBoards = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, allBoardsSnapshot, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.firebaseService.getAllSurfBoard()];
                    case 2:
                        allBoardsSnapshot = _a.sent();
                        allBoardsSnapshot.forEach(function (items) {
                            self.shopItems.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, items.val(), { id: items.key }));
                        });
                        self.searchResults = self.shopItems;
                        this.boardLoader.dismiss();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        console.log(err_2);
                        this.boardLoader.dismiss();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopPage.prototype.searchItems = function () {
        var keyWord = this.itemSearchQuery.toLowerCase();
        var arrItems = [];
        if (this.selectedSegment === '0') {
            arrItems = this.shopItems;
        }
        else if (this.selectedSegment === '1') {
            arrItems = this.arrMyItems;
        }
        else if (this.selectedSegment === '2') {
            arrItems = this.arrMyFavItems;
        }
        if (keyWord === '') {
            this.searchResults = arrItems;
        }
        else {
            if (this.shopItems.length > 0) {
                this.searchResults = [];
                for (var i = 0; i < arrItems.length; i++) {
                    var itemDescription = arrItems[i].title.toLowerCase();
                    if (itemDescription.includes(keyWord) === true) {
                        this.searchResults.push(arrItems[i]);
                    }
                }
            }
        }
    };
    HomeShopPage.prototype.viewNewSurfboardPage = function () {
        this.router.navigateByUrl('/home-shop-newitem');
    };
    HomeShopPage.prototype.viewItemDetailPage = function (itemid) {
        this.router.navigateByUrl('/shopitemdetail/' + itemid + '/shopmain');
    };
    HomeShopPage.prototype.segmentChanged = function () {
        var arrUserFavItems = this.userInfo.favorite.products.split(',');
        var uid = this.userInfo.uid;
        if (this.selectedSegment === '0') {
            this.searchResults = this.shopItems;
        }
        else if (this.selectedSegment === '1') {
            this.searchResults = this.shopItems.filter(function (x) { return x.ownerid === uid; });
            this.arrMyItems = this.searchResults;
        }
        else if (this.selectedSegment === '2') {
            this.searchResults = this.shopItems.filter(function (x) { return arrUserFavItems.indexOf(x.id) > -1; });
            this.arrMyFavItems = this.searchResults;
        }
    };
    HomeShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-shop',
            template: __webpack_require__(/*! ./home-shop.page.html */ "./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.html"),
            styles: [__webpack_require__(/*! ./home-shop.page.scss */ "./src/app/page/mainmenu/shopmenu/home-shop/home-shop.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], HomeShopPage);
    return HomeShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopmenu-home-shop-home-shop-module.js.map