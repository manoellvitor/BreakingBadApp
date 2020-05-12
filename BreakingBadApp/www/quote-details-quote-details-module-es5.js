function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-details-quote-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQuoteDetailsQuoteDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\" defaultHref=\"/tabs/episodes\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{ quote?.quote }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"unfavoriteepisode()\" *ngIf=\"isFavorite\">\n        <ion-icon name=\"star\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"favoriteepisode()\" *ngIf=\"!isFavorite\">\n        <ion-icon name=\"star-outline\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-card *ngIf=\"quote\" class=\"movie-card\">\n    <ion-card-header>Quote: {{ quote.quote }}</ion-card-header>\n    <ion-card-content>\n      {{ quote.title }}\n    </ion-card-content>\n    <ion-item class=\"movie-info\" lines=\"none\">\n      <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n        <ion-item>\n          Author: <br>{{ quote.author }}\n        </ion-item>\n    </ion-item>\n    <ion-item class=\"movie-info\" lines=\"none\">\n      <ion-icon name=\"videocam-outline\" slot=\"start\"></ion-icon>      Series: {{ quote.series }}\n    </ion-item>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: QuoteDetailsPageRoutingModule */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageRoutingModule", function () {
      return QuoteDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _quote_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quote-details.page */
    "./src/app/pages/quote-details/quote-details.page.ts");

    var routes = [{
      path: '',
      component: _quote_details_page__WEBPACK_IMPORTED_MODULE_3__["QuoteDetailsPage"]
    }];

    var QuoteDetailsPageRoutingModule = function QuoteDetailsPageRoutingModule() {
      _classCallCheck(this, QuoteDetailsPageRoutingModule);
    };

    QuoteDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuoteDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.module.ts ***!
    \*************************************************************/

  /*! exports provided: QuoteDetailsPageModule */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageModule", function () {
      return QuoteDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quote-details-routing.module */
    "./src/app/pages/quote-details/quote-details-routing.module.ts");
    /* harmony import */


    var _quote_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quote-details.page */
    "./src/app/pages/quote-details/quote-details.page.ts");

    var QuoteDetailsPageModule = function QuoteDetailsPageModule() {
      _classCallCheck(this, QuoteDetailsPageModule);
    };

    QuoteDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsPageRoutingModule"]],
      declarations: [_quote_details_page__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailsPage"]]
    })], QuoteDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.page.ts ***!
    \***********************************************************/

  /*! exports provided: QuoteDetailsPage */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPage", function () {
      return QuoteDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/pages/services/api.service.ts");

    var QuoteDetailsPage = /*#__PURE__*/function () {
      function QuoteDetailsPage(activatedRoute, api) {
        _classCallCheck(this, QuoteDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.quoteId = null;
      }

      _createClass(QuoteDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.quoteId = this.activatedRoute.snapshot.paramMap.get("id");
          this.api.getQuote(this.quoteId).subscribe(function (res) {
            _this.quote = res[0];
          });
        }
      }]);

      return QuoteDetailsPage;
    }();

    QuoteDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    QuoteDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quote-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quote-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quote-details.page.scss */
      "./src/app/pages/quote-details/quote-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], QuoteDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=quote-details-quote-details-module-es5.js.map