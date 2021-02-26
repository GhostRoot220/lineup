(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-shopmenu-home-shop-item-detail-home-shop-item-detail-module"],{

/***/ "./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: HomeShopItemDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeShopItemDetailPageModule", function() { return HomeShopItemDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_shop_item_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-shop-item-detail.page */ "./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.ts");
/* harmony import */ var src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/page/modal/modal.module */ "./src/app/page/modal/modal.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _home_shop_item_detail_page__WEBPACK_IMPORTED_MODULE_6__["HomeShopItemDetailPage"]
    }
];
var HomeShopItemDetailPageModule = /** @class */ (function () {
    function HomeShopItemDetailPageModule() {
    }
    HomeShopItemDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_page_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_shop_item_detail_page__WEBPACK_IMPORTED_MODULE_6__["HomeShopItemDetailPage"]],
        })
    ], HomeShopItemDetailPageModule);
    return HomeShopItemDetailPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"navback\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-icon color=\"navback\" name=\"arrow-back\" (click)=\"onClickBackBtn()\"></ion-icon> -->\n    <ion-title>{{itemTitle}}</ion-title>\n    <ion-icon slot=\"end\" [color]=\"isFavoriteProd?'activestar':'light'\" name=\"star\" (click)=\"onToggleFavoriteBtn()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager=\"true\" [options]=\"slideOptions\">\n    <ion-slide *ngFor=\"let img of selectedItem.imgs\">\n      <img [src]=\"img\" (click)=\"onClickItemImage()\"/>\n    </ion-slide>\n  </ion-slides>\n\n  <div id=\"home-shop-item-owner-header\">\n    <p>Owner</p>\n  </div>\n\n  <div id=\"home-shop-item-owner-info\">\n    <img src=\"assets/imgs/img-person.svg\" />\n    <span>{{selectedItem.ownername | formatname}}</span>\n  </div>\n\n  <ion-item-divider>\n      <ion-label>\n        Board Info\n      </ion-label>\n    </ion-item-divider>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Description</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"selectedItem.description\" [disabled]=\"!isCurrentUser\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Price($)</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"selectedItem.price\" [disabled]=\"!isCurrentUser\"></ion-input>\n  </ion-item>\n\n  <div id=\"home-shop-item-btnsendmessage\" *ngIf=\"!isCurrentUser\">\n    <ion-button color=\"primary\" (click)=\"sendMessageToOwner()\">Send Message</ion-button>\n  </div>\n  <div id=\"home-shop-item-btncontainer\" *ngIf=\"isCurrentUser\">\n    <div>\n      <ion-button color=\"primary\" (click)=\"onClickSaveBtn()\">Save</ion-button>\n    </div>\n    <div>\n      <ion-button color=\"primary\" (click)=\"onClickItemDelete()\">Delete Item</ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n\nion-toolbar {\n  position: relative;\n  --background: #84A1B3; }\n\nion-toolbar ion-icon {\n    font-size: 18pt;\n    margin: 0 16px; }\n\nion-toolbar p {\n    font-weight: bold;\n    padding-right: 5px; }\n\nion-title {\n  text-align: center;\n  color: #CAE9F7;\n  font-weight: bold;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\nion-slide img {\n  height: 35vh;\n  width: auto; }\n\n#home-shop-item-owner-header {\n  margin-top: 6vh; }\n\n#home-shop-item-owner-header p {\n    font-size: .85em;\n    padding-left: 16px; }\n\n#home-shop-item-owner-info {\n  display: flex;\n  padding: 5px 20px; }\n\n#home-shop-item-owner-info span {\n    margin-left: 10px; }\n\n#home-shop-item-owner-info img {\n    width: 24px;\n    height: 24px; }\n\n.home-shop-item-info-header p {\n  color: #658696;\n  font-weight: bold; }\n\n#home-shop-item-board-description p {\n  margin: 5px 20px; }\n\n#home-shop-item-btnsendmessage {\n  margin-top: 3vh;\n  text-align: center; }\n\n#home-shop-item-btncontainer {\n  display: flex;\n  margin-top: 3vh; }\n\n#home-shop-item-btncontainer div {\n    flex: 1;\n    text-align: center; }\n\n#home-shop-item-btncontainer div ion-button {\n      width: 70%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9zaG9wbWVudS9ob21lLXNob3AtaXRlbS1kZXRhaWwvRTpcXHdvcmtzcGFjZVxcQW5kcm9pZFxcbGluZXVwKDA5LTE4KS9zcmNcXGFwcFxccGFnZVxcbWFpbm1lbnVcXHNob3BtZW51XFxob21lLXNob3AtaXRlbS1kZXRhaWxcXGhvbWUtc2hvcC1pdGVtLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIscUJBQWEsRUFBQTs7QUFGakI7SUFJUSxlQUFlO0lBQ2YsY0FBYyxFQUFBOztBQUx0QjtJQVFRLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFFUSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUluQjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUZyQjtJQUlRLGlCQUFpQixFQUFBOztBQUp6QjtJQU9RLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBSXBCO0VBRVEsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUl6QjtFQUVRLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUZuQjtJQUlRLE9BQU87SUFDUCxrQkFBa0IsRUFBQTs7QUFMMUI7TUFPWSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21haW5tZW51L3Nob3BtZW51L2hvbWUtc2hvcC1pdGVtLWRldGFpbC9ob21lLXNob3AtaXRlbS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzg0QTFCMztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWJhY2tncm91bmQ6ICM4NEExQjM7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHQ7XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjQ0FFOUY3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmlvbi1zbGlkZSB7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG5cbiNob21lLXNob3AtaXRlbS1vd25lci1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDZ2aDtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAuODVlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIH1cbn1cblxuI2hvbWUtc2hvcC1pdGVtLW93bmVyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cbn1cblxuLmhvbWUtc2hvcC1pdGVtLWluZm8taGVhZGVyIHtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM2NTg2OTY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuI2hvbWUtc2hvcC1pdGVtLWJvYXJkLWRlc2NyaXB0aW9uIHtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMjBweDtcbiAgICB9XG59XG5cbiNob21lLXNob3AtaXRlbS1idG5zZW5kbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2hvbWUtc2hvcC1pdGVtLWJ0bmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgZGl2IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.ts ***!
  \********************************************************************************************/
/*! exports provided: HomeShopItemDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeShopItemDetailPage", function() { return HomeShopItemDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var src_app_page_modal_gallery_gallery_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/page/modal/gallery/gallery.page */ "./src/app/page/modal/gallery/gallery.page.ts");
/* harmony import */ var src_app_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");







var HomeShopItemDetailPage = /** @class */ (function () {
    function HomeShopItemDetailPage(route, toastService, loadingCtrl, modalCtrl, altCtrl, firebaseService, navCtrl, event) {
        this.route = route;
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.altCtrl = altCtrl;
        this.firebaseService = firebaseService;
        this.navCtrl = navCtrl;
        this.event = event;
        this.isCurrentUser = false;
        this.isFavoriteProd = false;
        this.arrFavProds = [];
        this.itemTitle = '';
        this.detailInfoLoader = null;
        this.backPage = '';
        this.slideOptions = {
            effect: 'flip'
        };
        this.selectedItem = {
            id: '',
            title: '',
            description: '',
            condition: null,
            price: 0,
            imgs: [],
            location: {
                lat: null,
                long: null,
                name: '',
                state: '',
                country: ''
            },
            ownerid: '',
            ownername: ''
        };
    }
    HomeShopItemDetailPage.prototype.ngOnInit = function () {
        this.initPage();
    };
    HomeShopItemDetailPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.itemid = this.route.snapshot.paramMap.get('itemid');
                        this.backPage = this.route.snapshot.paramMap.get('backpage');
                        this.arrFavProds = [];
                        return [4 /*yield*/, this.checkIfFavProd()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.findItem()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeShopItemDetailPage.prototype.checkIfFavProd = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, currentUserSnapshot, strFavProds, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        _a.detailInfoLoader = _b.sent();
                        return [4 /*yield*/, this.detailInfoLoader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.getUserProfile(this.firebaseService.getUID())];
                    case 4:
                        currentUserSnapshot = _b.sent();
                        strFavProds = currentUserSnapshot.val().favorite.products;
                        if (strFavProds !== '') {
                            this.arrFavProds = strFavProds.split(',');
                            this.isFavoriteProd = this.arrFavProds.indexOf(this.itemid) > -1 ? true : false;
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        this.detailInfoLoader.dismiss();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopItemDetailPage.prototype.findItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var boardInfoSnapshot, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.firebaseService.getSpecificBoardInfo(this.itemid)];
                    case 1:
                        boardInfoSnapshot = _a.sent();
                        this.selectedItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, boardInfoSnapshot.val());
                        this.itemTitle = this.selectedItem.title;
                        this.isCurrentUser = this.firebaseService.checkIfCurrentUser(this.selectedItem.ownerid);
                        this.detailInfoLoader.dismiss();
                        console.log(this.selectedItem);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        this.detailInfoLoader.dismiss();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopItemDetailPage.prototype.onClickItemImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var galleryModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_page_modal_gallery_gallery_page__WEBPACK_IMPORTED_MODULE_5__["GalleryPage"],
                            componentProps: {
                                imgs: this.selectedItem.imgs
                            },
                            cssClass: 'gallery-modal'
                        })];
                    case 1:
                        galleryModal = _a.sent();
                        return [4 /*yield*/, galleryModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeShopItemDetailPage.prototype.sendMessageToOwner = function () {
        this.navCtrl.navigateForward('/chat/' + this.itemid + '/' + this.selectedItem.ownerid);
    };
    HomeShopItemDetailPage.prototype.onClickItemDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirmAlt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: 'Delete Item?',
                            subHeader: '',
                            message: 'Do you really want to delete this item?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (data) {
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.deleteItem();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirmAlt = _a.sent();
                        return [4 /*yield*/, confirmAlt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeShopItemDetailPage.prototype.deleteItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deleteLoader, index, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        deleteLoader = _a.sent();
                        return [4 /*yield*/, deleteLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.firebaseService.deleteItem(this.itemid)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.firebaseService.deleteMessage(this.itemid)];
                    case 5:
                        _a.sent();
                        if (this.isFavoriteProd == true) {
                            index = this.arrFavProds.indexOf(this.itemid);
                            if (index > -1) {
                                this.arrFavProds.splice(index, 1);
                            }
                        }
                        deleteLoader.dismiss();
                        this.toastService.showToast('Successfully Deleted!');
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _a.sent();
                        deleteLoader.dismiss();
                        console.log(err_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopItemDetailPage.prototype.onClickSaveBtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateLoader, err_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        updateLoader = _a.sent();
                        return [4 /*yield*/, updateLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 7]);
                        this.firebaseService.updateItemInfo(this.selectedItem);
                        return [4 /*yield*/, updateLoader.dismiss()];
                    case 4:
                        _a.sent();
                        this.toastService.showToast('Updated Successfully!');
                        return [3 /*break*/, 7];
                    case 5:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [4 /*yield*/, updateLoader.dismiss()];
                    case 6:
                        _a.sent();
                        this.toastService.showToast(err_4.message);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopItemDetailPage.prototype.onToggleFavoriteBtn = function () {
        this.isFavoriteProd = !this.isFavoriteProd;
        if (this.isFavoriteProd == true) {
            this.arrFavProds.push(this.itemid);
        }
        else {
            var index = this.arrFavProds.indexOf(this.itemid);
            if (index > -1) {
                this.arrFavProds.splice(index, 1);
            }
        }
    };
    HomeShopItemDetailPage.prototype.onClickBackBtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var chatUserId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebaseService.addFavoriteProducts(this.arrFavProds.join(','))];
                    case 1:
                        _a.sent();
                        this.event.publish('onfavchange');
                        if (this.backPage == 'shopmain') {
                            this.navCtrl.navigateBack('/home/shop');
                        }
                        else if (this.backPage == 'main') {
                            this.navCtrl.navigateBack('/home/main');
                        }
                        else if (this.backPage == 'chat') {
                            chatUserId = localStorage.getItem('posterid');
                            localStorage.removeItem('posterid');
                            this.navCtrl.navigateBack('chat/' + this.itemid + '/' + chatUserId);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeShopItemDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-shop-item-detail',
            template: __webpack_require__(/*! ./home-shop-item-detail.page.html */ "./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.html"),
            styles: [__webpack_require__(/*! ./home-shop-item-detail.page.scss */ "./src/app/page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__["ShowtoastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], HomeShopItemDetailPage);
    return HomeShopItemDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-shopmenu-home-shop-item-detail-home-shop-item-detail-module.js.map