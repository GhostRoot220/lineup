(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-main-home-main-module"],{

/***/ "./src/app/page/mainmenu/home-main/home-main.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/page/mainmenu/home-main/home-main.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeMainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMainPageModule", function() { return HomeMainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_main_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-main.page */ "./src/app/page/mainmenu/home-main/home-main.page.ts");








var HomeMainPageModule = /** @class */ (function () {
    function HomeMainPageModule() {
    }
    HomeMainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _home_main_page__WEBPACK_IMPORTED_MODULE_7__["HomeMainPage"] }])
            ],
            declarations: [_home_main_page__WEBPACK_IMPORTED_MODULE_7__["HomeMainPage"]]
        })
    ], HomeMainPageModule);
    return HomeMainPageModule;
}());



/***/ }),

/***/ "./src/app/page/mainmenu/home-main/home-main.page.html":
/*!*************************************************************!*\
  !*** ./src/app/page/mainmenu/home-main/home-main.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title><span>LINEUP</span></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div id=\"home-maintab-header\">\n    <p>Latest Reports</p>\n  </div>\n\n  <!-- Weather Reports -->\n  <div id=\"home-maintab-weather-reports-container\">\n    <div class=\"home-main-tab-weather-reports\" *ngFor=\"let weatherItem of weatherReports; let i = index;\" (click)=\"onClickReportItem(i)\">\n      <div class=\"home-main-tab-weather-reports-location\">\n        <span>{{weatherItem.location.name}}</span>\n      </div>\n      <div class=\"home-main-tab-weather-reports-body\">\n        <div class=\"home-main-tab-weather-reports-weatherinfo\">\n          <div>\n            <p class=\"home-main-tab-weather-reports-waveheight\">\n              Height: {{weatherItem.waveHeight | round: true}}ft\n            </p>\n          </div>\n          <div>\n            <p class=\"home-main-tab-weather-reports-wavequality\">\n              Form: {{arrWaveQualities[weatherItem.waveQuality]}}\n            </p>\n          </div>\n        </div>\n        <div>\n          <p class=\"home-main-tab-weather-reports-reporttxt\">\n            &quot;{{weatherItem.reporttxt}}&quot;\n          </p>\n        </div>\n        <div class=\"home-main-tab-weather-reports-reporttime\">\n          <p>\n            {{weatherItem.username | formatname}}.&nbsp;{{weatherItem.createdat | millitotime: true}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Shop Reports -->\n  <div id=\"home-maintab-shop-reports-container\">\n    <div id=\"home-maintab-shop-reports-header\">\n      <p>Recent Offers</p>\n    </div>\n    <div id=\"home-maintab-shop-reports-body\" *ngIf=\"allNewSurfBoards.length\">\n      <div class=\"home-maintab-shop-reports-item\">\n        <ion-grid>\n          <ion-row nowrap id=\"home-maintab-shop-reports-img-container\">\n            <ion-col size=\"3\" *ngFor=\"let boardItem of allNewSurfBoards; let i = index;\">\n              <div class=\"home-maintab-shop-reports-itemimg\" (click)=\"viewItemDetail(i)\">\n                <img src=\"{{boardItem.imgs?boardItem.imgs[0]:'assets/imgs/img-surfboard.svg'}}\" />\n                <div class=\"home-maintab-shop-reports-itemimg-description\">\n                  <p>\n                    {{boardItem.title}}\n                  </p>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n\n  <!-- Recent Discussions -->\n  <div id=\"home-maintab-discussions-container\">\n    <div id=\"home-maintab-discussions-header\">\n      <p>Discussions</p>\n    </div>\n    <div id=\"home-maintab-discussions-body\">\n      <div class=\"home-maintab-discussion-item\" *ngFor=\"let discussion of arrDiscussions\" (click)=\"onClickDiscussionItem(discussion)\">\n        <div class=\"home-maintab-discussion-item-header\">\n          <span>\n            {{discussion.title}}\n          </span>\n        </div>\n        <div class=\"home-maintab-discussion-item-body\">\n          <p>\n            &quot;{{discussion.content}}&quot;\n          </p>\n        </div>\n        <div class=\"home-maintab-discussion-item-footer\">\n          <p>\n            {{discussion.postername | formatname}}.&nbsp;{{discussion.createdat | millitotime: true}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/mainmenu/home-main/home-main.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/mainmenu/home-main/home-main.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header {\n  --ion-background-color: #BCD9E6; }\n\nion-toolbar {\n  --background: #BCD9E6; }\n\nion-title {\n  text-align: center; }\n\nion-title > span {\n  color: #00B4F9;\n  font-family: \"Open Sans Bold\"; }\n\n#home-maintab-fav-beaches-body {\n  padding: 0 16px; }\n\n#home-maintab-header p {\n  font-size: 14pt;\n  font-weight: bold;\n  color: #426675; }\n\n.home-main-tab-weather-reports {\n  background-color: #F5F5F5;\n  margin-bottom: 10px;\n  box-shadow: 0 0 8px #a4a4a4; }\n\n.home-main-tab-weather-reports-location {\n  padding: 10px 0 10px 5px;\n  background-color: #dadada; }\n\n.home-main-tab-weather-reports-location span {\n    color: #2b2b2b; }\n\n.home-main-tab-weather-reports-body {\n  padding: 10px; }\n\n.home-main-tab-weather-reports-reporttxt {\n  color: #626262;\n  font-size: 12pt;\n  margin: 5px 0;\n  font-style: italic; }\n\n.home-main-tab-weather-reports-weatherinfo {\n  display: flex; }\n\n.home-main-tab-weather-reports-weatherinfo div {\n    flex: 1; }\n\n.home-main-tab-weather-reports-waveheight {\n  text-align: left;\n  color: #626262;\n  margin: 5px 0; }\n\n.home-main-tab-weather-reports-wavequality {\n  text-align: right;\n  color: #626262;\n  margin: 5px 0; }\n\n.home-main-tab-weather-reports-reporttime {\n  flex: 1;\n  text-align: right; }\n\n.home-main-tab-weather-reports-reporttime p {\n    font-size: 10pt;\n    color: #2e556e;\n    margin: 5px 0; }\n\n#home-maintab-shop-reports-header p, #home-maintab-fav-beachhes-header p, #home-maintab-discussions-header p {\n  font-size: 14pt;\n  font-weight: bold;\n  color: #426675; }\n\n#home-maintab-shop-reports-img-container {\n  overflow-x: scroll; }\n\n#home-maintab-shop-reports-img-container ion-col {\n    padding: 0; }\n\n.home-maintab-shop-reports-itemimg {\n  width: 100%;\n  height: 22vw;\n  overflow: hidden;\n  position: relative; }\n\n.home-maintab-shop-reports-itemimg img {\n    width: 100%;\n    min-height: 100%; }\n\n.home-maintab-shop-reports-itemimg-description {\n  position: absolute;\n  z-index: 2;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.home-maintab-shop-reports-itemimg-description p {\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    font-size: 9pt; }\n\n.home-maintab-discussion-item {\n  background-color: #F5F5F5;\n  margin-bottom: 10px;\n  box-shadow: 0 0 8px #a4a4a4; }\n\n.home-maintab-discussion-item-header {\n  padding: 10px 0 10px 5px;\n  background-color: #dadada; }\n\n.home-maintab-discussion-item-header span {\n    color: #2b2b2b; }\n\n.home-maintab-discussion-item-body, .home-maintab-discussion-item-footer {\n  padding: 8px; }\n\n.home-maintab-discussion-item-body p, .home-maintab-discussion-item-footer p {\n    margin: 5px 0; }\n\n.home-maintab-discussion-item-body p {\n  color: #565656;\n  font-style: italic; }\n\n.home-maintab-discussion-item-footer p {\n  text-align: right;\n  font-size: 10pt;\n  color: #2e556e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWlubWVudS9ob21lLW1haW4vRTpcXHdvcmtzcGFjZVxcQW5kcm9pZFxcbGluZXVwKDA5LTE4KS9zcmNcXGFwcFxccGFnZVxcbWFpbm1lbnVcXGhvbWUtbWFpblxcaG9tZS1tYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUF1QixFQUFBOztBQUczQjtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFFUSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHdCQUF3QjtFQUN4Qix5QkFBeUIsRUFBQTs7QUFGN0I7SUFJUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWEsRUFBQTs7QUFEakI7SUFHUSxPQUFPLEVBQUE7O0FBSWY7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxPQUFPO0VBQ1AsaUJBQWlCLEVBQUE7O0FBRnJCO0lBSVEsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhLEVBQUE7O0FBSXJCO0VBRVEsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsVUFBVSxFQUFBOztBQUlsQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLG9DQUFvQyxFQUFBOztBQU54QztJQVFRLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHdCQUF3QjtFQUN4Qix5QkFBeUIsRUFBQTs7QUFGN0I7SUFJUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksWUFBWSxFQUFBOztBQURoQjtJQUdRLGFBQWEsRUFBQTs7QUFJckI7RUFFUSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBSTFCO0VBRVEsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21haW5tZW51L2hvbWUtbWFpbi9ob21lLW1haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsIGlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNCQ0Q5RTY7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNCQ0Q5RTY7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdGl0bGUgPiBzcGFuIHtcbiAgICBjb2xvcjogIzAwQjRGOTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQm9sZFwiO1xufVxuXG4jaG9tZS1tYWludGFiLWZhdi1iZWFjaGVzLWJvZHkge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuI2hvbWUtbWFpbnRhYi1oZWFkZXIge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzQyNjY3NTtcbiAgICB9XG59XG5cbi5ob21lLW1haW4tdGFiLXdlYXRoZXItcmVwb3J0cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggI2E0YTRhNDtcbn1cblxuLmhvbWUtbWFpbi10YWItd2VhdGhlci1yZXBvcnRzLWxvY2F0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMyYjJiMmI7XG4gICAgfVxufVxuXG4uaG9tZS1tYWluLXRhYi13ZWF0aGVyLXJlcG9ydHMtYm9keSB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmhvbWUtbWFpbi10YWItd2VhdGhlci1yZXBvcnRzLXJlcG9ydHR4dCB7XG4gICAgY29sb3I6ICM2MjYyNjI7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaG9tZS1tYWluLXRhYi13ZWF0aGVyLXJlcG9ydHMtd2VhdGhlcmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGl2IHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG59XG5cbi5ob21lLW1haW4tdGFiLXdlYXRoZXItcmVwb3J0cy13YXZlaGVpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjNjI2MjYyO1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbi5ob21lLW1haW4tdGFiLXdlYXRoZXItcmVwb3J0cy13YXZlcXVhbGl0eSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICM2MjYyNjI7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmhvbWUtbWFpbi10YWItd2VhdGhlci1yZXBvcnRzLXJlcG9ydHRpbWUge1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgY29sb3I6ICMyZTU1NmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxufVxuXG4jaG9tZS1tYWludGFiLXNob3AtcmVwb3J0cy1oZWFkZXIsICNob21lLW1haW50YWItZmF2LWJlYWNoaGVzLWhlYWRlciwgI2hvbWUtbWFpbnRhYi1kaXNjdXNzaW9ucy1oZWFkZXIge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzQyNjY3NTtcbiAgICB9XG59XG5cbiNob21lLW1haW50YWItc2hvcC1yZXBvcnRzLWltZy1jb250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5ob21lLW1haW50YWItc2hvcC1yZXBvcnRzLWl0ZW1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjJ2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5ob21lLW1haW50YWItc2hvcC1yZXBvcnRzLWl0ZW1pbWctZGVzY3JpcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDlwdDtcbiAgICB9XG59XG5cbi5ob21lLW1haW50YWItZGlzY3Vzc2lvbi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjYTRhNGE0O1xufVxuXG4uaG9tZS1tYWludGFiLWRpc2N1c3Npb24taXRlbS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzJiMmIyYjtcbiAgICB9XG59XG5cbi5ob21lLW1haW50YWItZGlzY3Vzc2lvbi1pdGVtLWJvZHksIC5ob21lLW1haW50YWItZGlzY3Vzc2lvbi1pdGVtLWZvb3RlciB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgIH1cbn1cblxuLmhvbWUtbWFpbnRhYi1kaXNjdXNzaW9uLWl0ZW0tYm9keSB7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjNTY1NjU2O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxufVxuXG4uaG9tZS1tYWludGFiLWRpc2N1c3Npb24taXRlbS1mb290ZXIge1xuICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICBjb2xvcjogIzJlNTU2ZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/page/mainmenu/home-main/home-main.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/mainmenu/home-main/home-main.page.ts ***!
  \***********************************************************/
/*! exports provided: HomeMainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMainPage", function() { return HomeMainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase-service/firebase.service */ "./src/app/services/firebase-service/firebase.service.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/myutils/myutils.service */ "./src/app/services/myutils/myutils.service.ts");







var HomeMainPage = /** @class */ (function () {
    function HomeMainPage(firebaseService, router, event, loadingCtrl, myUtils) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        this.event = event;
        this.loadingCtrl = loadingCtrl;
        this.myUtils = myUtils;
        this.currentUserId = '';
        this.arrWaveQualities = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__["WAVEQUALITIES"];
        /**
         * Weather Reports
         */
        this.weatherReportdataRef = null;
        this.weatherReportdataListener = null;
        /**
         * Board Reports
         */
        this.boardDataRef = null;
        this.boardDataListener = null;
        this.allNewSurfBoards = [];
        /**
         * Recent Discussions
         */
        this.discussionDetailRef = null;
        this.discussionDetailListener = null;
        this.arrDiscussions = [];
        /**
         * User Info
         */
        this.userInfo = {};
        this.arrFavBeachesId = [];
        /**
         * Event Listener
         */
        this.authListener = null;
        this.countLoader = 0;
        this.dataLoader = null;
        this.authListener = this.event.subscribe('onAuth', function (data) {
            console.log('Auth Called!');
            _this.initPage();
        });
    }
    HomeMainPage.prototype.ngOnInit = function () {
    };
    HomeMainPage.prototype.ionViewWillEnter = function () {
        /**
         * Init page
         */
        this.initPage();
    };
    HomeMainPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.countLoader = 0;
                        this.currentUserId = this.firebaseService.getUID();
                        /**
                         * Weather
                         */
                        this.weatherReportdataRef = null;
                        this.weatherReportdataListener = null;
                        this.weatherReports = [];
                        /**
                         * Board
                         */
                        this.boardDataRef = null;
                        this.boardDataListener = null;
                        this.allNewSurfBoards = [];
                        /**
                         * Discussion
                         */
                        this.discussionDetailRef = null;
                        this.discussionDetailListener = null;
                        return [4 /*yield*/, this.getUserInfo()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait...'
                            })];
                    case 2:
                        _a.dataLoader = _b.sent();
                        return [4 /*yield*/, this.dataLoader.present()];
                    case 3:
                        _b.sent();
                        this.getAllLocationReports();
                        this.getNewBoardItems();
                        this.getDiscussionContents();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeMainPage.prototype.getUserInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userInfoSnapshot;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebaseService.getUserProfile(this.currentUserId)];
                    case 1:
                        userInfoSnapshot = _a.sent();
                        this.userInfo = userInfoSnapshot.val();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeMainPage.prototype.getAllLocationReports = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                this.arrFavBeachesId = this.userInfo.favorite.beaches.split(',');
                this.weatherReportdataRef = this.firebaseService.getAllWeatherReports();
                this.weatherReportdataListener = this.weatherReportdataRef.on('value', function (snapshot) {
                    self.weatherReports = [];
                    var tmpArr = [];
                    snapshot.forEach(function (childSnapshot) {
                        var favIndex = self.arrFavBeachesId.indexOf(childSnapshot.key);
                        if (favIndex > -1) {
                            childSnapshot.forEach(function (valueSnapshot) {
                                tmpArr.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, valueSnapshot.val()));
                            });
                        }
                    });
                    tmpArr.reverse();
                    tmpArr.filter(function (item) {
                        var i = self.weatherReports.findIndex(function (x) { return (x.uid == item.uid); });
                        if (i <= -1) {
                            self.weatherReports.push(item);
                        }
                        return null;
                    });
                    self.countLoader++;
                    if (self.countLoader == 2) {
                        self.dismissDataLoader();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HomeMainPage.prototype.getNewBoardItems = function () {
        var self = this;
        var itemRange = Number(this.userInfo.noti.range);
        this.boardDataRef = this.firebaseService.getAllSurfBoardRealtime();
        this.boardDataListener = this.boardDataRef.on('value', function (snapshot) {
            self.allNewSurfBoards = [];
            snapshot.forEach(function (boardSnapshot) {
                var distance = self.myUtils.distance(self.userInfo.location.lat, self.userInfo.location.long, boardSnapshot.val().location.lat, boardSnapshot.val().location.long, 'N');
                // if (itemRange >= Number(distance)) {
                self.allNewSurfBoards.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, boardSnapshot.val()));
                // }
            });
            self.countLoader++;
            if (self.countLoader == 2) {
                self.dismissDataLoader();
            }
        });
    };
    HomeMainPage.prototype.getDiscussionContents = function () {
        var _this = this;
        var self = this;
        var favDiscussions = this.userInfo.favorite.discussions.split(',');
        this.discussionDetailRef = this.firebaseService.getAllDiscussionContents();
        this.discussionDetailListener = this.discussionDetailRef.on('value', function (snapshot) {
            _this.arrDiscussions = [];
            snapshot.forEach(function (childSnapshot) {
                var isFavDiscussion = favDiscussions.indexOf(childSnapshot.key);
                if (isFavDiscussion > -1) {
                    var tmpArr_1 = [];
                    childSnapshot.forEach(function (valSnapshot) {
                        tmpArr_1.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, valSnapshot.val(), { discussionid: childSnapshot.key }));
                    });
                    if (tmpArr_1.length > 0) {
                        self.arrDiscussions.push(tmpArr_1[tmpArr_1.length - 1]);
                    }
                }
            });
        });
    };
    HomeMainPage.prototype.onClickDiscussionItem = function (item) {
        this.router.navigateByUrl('/discussion-detail/' + item.discussionid + '/' + item.title + '/home/1');
    };
    HomeMainPage.prototype.dismissDataLoader = function () {
        if (this.dataLoader !== null) {
            this.dataLoader.dismiss();
            this.dataLoader = null;
        }
    };
    HomeMainPage.prototype.viewItemDetail = function (itemid) {
        this.router.navigateByUrl('/shopitemdetail/' + this.allNewSurfBoards[itemid].id + '/main');
    };
    HomeMainPage.prototype.onClickReportItem = function (reportIndex) {
        this.router.navigateByUrl('/locationdetail/' + this.weatherReports[reportIndex].locationId);
    };
    HomeMainPage.prototype.onClickFavBeach = function (beachIndex) {
        this.router.navigateByUrl('/locationdetail/' + this.arrFavBeachesId[beachIndex]);
    };
    HomeMainPage.prototype.ionViewWillLeave = function () {
        if (this.weatherReportdataListener !== null) {
            this.weatherReportdataRef.off('value', this.weatherReportdataListener);
            this.weatherReportdataListener = null;
            this.weatherReportdataRef = null;
        }
        if (this.boardDataListener !== null) {
            this.boardDataRef.off('value', this.boardDataListener);
            this.boardDataListener = null;
            this.boardDataRef = null;
        }
        if (this.authListener !== null) {
            this.event.unsubscribe('onAuth', this.authListener);
        }
    };
    HomeMainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-main',
            template: __webpack_require__(/*! ./home-main.page.html */ "./src/app/page/mainmenu/home-main/home-main.page.html"),
            styles: [__webpack_require__(/*! ./home-main.page.scss */ "./src/app/page/mainmenu/home-main/home-main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            src_app_services_myutils_myutils_service__WEBPACK_IMPORTED_MODULE_6__["MyutilsService"]])
    ], HomeMainPage);
    return HomeMainPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-main-home-main-module.js.map