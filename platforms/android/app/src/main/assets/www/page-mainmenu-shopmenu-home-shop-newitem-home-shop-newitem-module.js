(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-mainmenu-shopmenu-home-shop-newitem-home-shop-newitem-module"],{

/***/ "./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.module.ts ***!
  \**************************************************************************************/
/*! exports provided: HomeShopNewitemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeShopNewitemPageModule", function() { return HomeShopNewitemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_shop_newitem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-shop-newitem.page */ "./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.ts");







var routes = [
    {
        path: '',
        component: _home_shop_newitem_page__WEBPACK_IMPORTED_MODULE_6__["HomeShopNewitemPage"]
    }
];
var HomeShopNewitemPageModule = /** @class */ (function () {
    function HomeShopNewitemPageModule() {
    }
    HomeShopNewitemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_shop_newitem_page__WEBPACK_IMPORTED_MODULE_6__["HomeShopNewitemPage"]]
        })
    ], HomeShopNewitemPageModule);
    return HomeShopNewitemPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.html":
/*!**************************************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"navback\" (click)=\"closeNewItemPage()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Create Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"offerTitle\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"boardDescription\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>$</ion-label>\n    <ion-input type=\"number\" placeholder=\"Price\" [(ngModel)]=\"boardPrice\"></ion-input>\n  </ion-item>\n\n  <div id=\"home-shopnewitem-managephoto-controllers\">\n    <p>Photos</p>\n  </div>\n\n  <ion-grid>\n    <ion-row nowrap id=\"home-shopnewitem-imgrow\">\n      <ion-col *ngFor=\"let itemImg of tmpItemImgs; let i = index;\" size=\"4\">\n        <div class=\"home-shopnewitem-emptyimg-container\" (click)=\"getFile(i)\">\n          <div class=\"home-shopnewitem-emptyimg\">\n            <img [src]=\"itemImg == ''?'assets/imgs/img-plus.svg': itemImg\" [class]=\"itemImg==''?'home-shopnewitem-noimg':'home-shopnewitem-itemimg'\" />\n            <p *ngIf=\"itemImg==''\">Upload Image</p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div>\n    <ion-button expand=\"full\" (click)=\"addNewItem()\">Submit</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #84A1B3; }\n\nion-toolbar p {\n  color: #CAE9F7;\n  font-weight: bold;\n  padding-right: 5px; }\n\nion-title {\n  text-align: center;\n  color: #CAE9F7;\n  font-weight: bold; }\n\n#home-shopnewitem-map {\n  height: 40vh;\n  width: 100%; }\n\n#home-shopnewitem-managephoto-controllers {\n  text-align: left; }\n\n#home-shopnewitem-managephoto-controllers p {\n    color: #658696;\n    font-weight: bold; }\n\n#home-shopnewitem-imgrow {\n  overflow-x: scroll; }\n\n#home-shopnewitem-imgrow ion-col {\n    text-align: center; }\n\n.home-shopnewitem-emptyimg-container {\n  width: 100px;\n  height: 100px;\n  background-color: #d6d6d6;\n  position: relative;\n  overflow: hidden; }\n\n.home-shopnewitem-emptyimg {\n  text-align: center;\n  position: absolute;\n  width: 100px;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%; }\n\n.home-shopnewitem-emptyimg p {\n    font-size: 11pt; }\n\n.home-shopnewitem-noimg {\n  width: 14px; }\n\n.home-shopnewitem-itemimg {\n  width: 100%; }\n\n.home-shopnewitem-img {\n  height: 15vh; }\n\nion-list {\n  position: absolute;\n  width: 100%;\n  z-index: 2; }\n\nbutton.gm-control-active {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9zaG9wbWVudS9ob21lLXNob3AtbmV3aXRlbS9FOlxcd29ya3NwYWNlXFxBbmRyb2lkXFxsaW5ldXAoMDktMTgpL3NyY1xcYXBwXFxwYWdlXFxtYWlubWVudVxcc2hvcG1lbnVcXGhvbWUtc2hvcC1uZXdpdGVtXFxob21lLXNob3AtbmV3aXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNRLGdCQUFnQixFQUFBOztBQUR4QjtJQUdZLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFJN0I7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTLEVBQUE7O0FBTmI7SUFRUSxlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdkO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9tYWlubWVudS9zaG9wbWVudS9ob21lLXNob3AtbmV3aXRlbS9ob21lLXNob3AtbmV3aXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjODRBMUIzO1xufVxuXG5pb24tdG9vbGJhciBwIHtcbiAgICBjb2xvcjogI0NBRTlGNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjQ0FFOUY3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jaG9tZS1zaG9wbmV3aXRlbS1tYXAge1xuICAgIGhlaWdodDogNDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2hvbWUtc2hvcG5ld2l0ZW0tbWFuYWdlcGhvdG8tY29udHJvbGxlcnMge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjU4Njk2O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbn1cblxuI2hvbWUtc2hvcG5ld2l0ZW0taW1ncm93IHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5ob21lLXNob3BuZXdpdGVtLWVtcHR5aW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhvbWUtc2hvcG5ld2l0ZW0tZW1wdHlpbWcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB0O1xuICAgIH1cbn1cblxuLmhvbWUtc2hvcG5ld2l0ZW0tbm9pbWcge1xuICAgIHdpZHRoOiAxNHB4O1xufVxuXG4uaG9tZS1zaG9wbmV3aXRlbS1pdGVtaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhvbWUtc2hvcG5ld2l0ZW0taW1nIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG5cbmlvbi1saXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbn1cblxuYnV0dG9uLmdtLWNvbnRyb2wtYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.ts ***!
  \************************************************************************************/
/*! exports provided: HomeShopNewitemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeShopNewitemPage", function() { return HomeShopNewitemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/showtoast/showtoast.service */ "./src/app/services/showtoast/showtoast.service.ts");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");








var HomeShopNewitemPage = /** @class */ (function () {
    function HomeShopNewitemPage(camera, loadingCtrl, firebaseService, myUtils, toastService, router) {
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.firebaseService = firebaseService;
        this.myUtils = myUtils;
        this.toastService = toastService;
        this.router = router;
        this.locationQuery = '';
        this.places = [];
        this.isvaluechanged = false;
        this.selectedLocation = null;
        this.prev_marker = null;
        this.ownerAddress = '';
        /**
         * Item info
         */
        this.offerTitle = '';
        this.boardDescription = '';
        this.boardPrice = null;
        // private boardCondition = 0;
        /**
         * selected images for board
         */
        this.tmpItemImgs = ['', '', '', '', '', ''];
        this.isImageSelected = false;
        this.newItem = {
            id: '',
            title: '',
            description: '',
            condition: null,
            price: 0,
            location: {
                lat: null,
                long: null,
                name: '',
                state: '',
                country: ''
            },
            imgs: [],
            ownerid: '',
            ownername: '',
            createdat: null
        };
    }
    HomeShopNewitemPage.prototype.ngOnInit = function () {
        this.getOwnerInfo();
    };
    HomeShopNewitemPage.prototype.getOwnerInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userInfoSnapshot, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ownerId = this.firebaseService.getUID();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.firebaseService.getUserProfile(this.ownerId)];
                    case 2:
                        userInfoSnapshot = _a.sent();
                        this.ownerName = userInfoSnapshot.val().fname + ' ' + userInfoSnapshot.val().lname;
                        this.ownerAddress = userInfoSnapshot.val().address;
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopNewitemPage.prototype.getFile = function (imgId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, imgSelectLoader, selectedImg, _a, imgref, _b, _c, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        imgSelectLoader = _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 8, , 9]);
                        _a = 'data:image/jpeg;base64,';
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 3:
                        selectedImg = _a + (_d.sent());
                        imgref = 'img' + imgId;
                        return [4 /*yield*/, imgSelectLoader.present()];
                    case 4:
                        _d.sent();
                        return [4 /*yield*/, this.firebaseService.uploadBoardImage(selectedImg, this.ownerId, imgref)];
                    case 5:
                        _d.sent();
                        _b = this.tmpItemImgs;
                        _c = imgId;
                        return [4 /*yield*/, this.firebaseService.getBoardImgUrl(this.ownerId, imgref)];
                    case 6:
                        _b[_c] = _d.sent();
                        this.isImageSelected = true;
                        return [4 /*yield*/, imgSelectLoader.dismiss()];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        err_2 = _d.sent();
                        imgSelectLoader.dismiss();
                        console.error(err_2);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopNewitemPage.prototype.addNewItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var itemSaveloader, i, newKey, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isImageSelected === false) {
                            alert('Please select Board Image!');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Adding new item...'
                            })];
                    case 1:
                        itemSaveloader = _a.sent();
                        return [4 /*yield*/, itemSaveloader.present()];
                    case 2:
                        _a.sent();
                        this.newItem.ownerid = this.ownerId;
                        this.newItem.ownername = this.ownerName;
                        this.newItem.description = this.boardDescription;
                        this.newItem.price = this.boardPrice == null ? 0 : this.boardPrice;
                        this.newItem.title = this.offerTitle;
                        this.newItem.location = {
                            lat: this.myUtils.currentUserLocation.lat !== null ? this.myUtils.currentUserLocation.lat : 32.7,
                            long: this.myUtils.currentUserLocation.long !== null ? this.myUtils.currentUserLocation.long : -117,
                            name: '',
                            state: '',
                            country: ''
                        };
                        for (i = 0; i < this.tmpItemImgs.length; i++) {
                            if (this.tmpItemImgs[i] !== '') {
                                this.newItem.imgs.push(this.tmpItemImgs[i]);
                            }
                        }
                        newKey = this.firebaseService.getNewBoardItemKey();
                        this.newItem.id = newKey;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 8]);
                        return [4 /*yield*/, this.firebaseService.addNewBoardItem(newKey, this.newItem)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, itemSaveloader.dismiss()];
                    case 5:
                        _a.sent();
                        this.toastService.showToast('New Item is added successfully!');
                        return [3 /*break*/, 8];
                    case 6:
                        err_3 = _a.sent();
                        return [4 /*yield*/, itemSaveloader.dismiss()];
                    case 7:
                        _a.sent();
                        this.toastService.showToast(err_3.message);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    HomeShopNewitemPage.prototype.closeNewItemPage = function () {
        this.router.navigateByUrl('/home/shop');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shopmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeShopNewitemPage.prototype, "shopMapRef", void 0);
    HomeShopNewitemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-shop-newitem',
            template: __webpack_require__(/*! ./home-shop-newitem.page.html */ "./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.html"),
            styles: [__webpack_require__(/*! ./home-shop-newitem.page.scss */ "./src/app/page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_7__["MyutilsService"],
            _services_showtoast_showtoast_service__WEBPACK_IMPORTED_MODULE_6__["ShowtoastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeShopNewitemPage);
    return HomeShopNewitemPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-mainmenu-shopmenu-home-shop-newitem-home-shop-newitem-module.js.map