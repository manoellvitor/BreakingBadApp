function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-deaths-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeathsDeathsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Deaths</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"danger\">\n    <ion-searchbar placeholder=\"Search Quote\" animated autocomplete=\"on\" (ionChange)=\"onSearchChange($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let death of deaths | async\">\n      <h6>Number of Deaths</h6>\n      <ion-badge color=\"danger\" slot=\"end\">{{ death.deathCount }}</ion-badge>\n      \n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/deaths/deaths-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DeathsPageRoutingModule */

  /***/
  function srcAppPagesDeathsDeathsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPageRoutingModule", function () {
      return DeathsPageRoutingModule;
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


    var _deaths_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deaths.page */
    "./src/app/pages/deaths/deaths.page.ts");

    var routes = [{
      path: '',
      component: _deaths_page__WEBPACK_IMPORTED_MODULE_3__["DeathsPage"]
    }];

    var DeathsPageRoutingModule = function DeathsPageRoutingModule() {
      _classCallCheck(this, DeathsPageRoutingModule);
    };

    DeathsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeathsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/deaths/deaths.module.ts ***!
    \***********************************************/

  /*! exports provided: DeathsPageModule */

  /***/
  function srcAppPagesDeathsDeathsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPageModule", function () {
      return DeathsPageModule;
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


    var _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./deaths-routing.module */
    "./src/app/pages/deaths/deaths-routing.module.ts");
    /* harmony import */


    var _deaths_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deaths.page */
    "./src/app/pages/deaths/deaths.page.ts");

    var DeathsPageModule = function DeathsPageModule() {
      _classCallCheck(this, DeathsPageModule);
    };

    DeathsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsPageRoutingModule"]],
      declarations: [_deaths_page__WEBPACK_IMPORTED_MODULE_6__["DeathsPage"]]
    })], DeathsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/deaths/deaths.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeathsDeathsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRocy9kZWF0aHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/deaths/deaths.page.ts ***!
    \*********************************************/

  /*! exports provided: DeathsPage */

  /***/
  function srcAppPagesDeathsDeathsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPage", function () {
      return DeathsPage;
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

    var DeathsPage = /*#__PURE__*/function () {
      function DeathsPage(router, api) {
        _classCallCheck(this, DeathsPage);

        this.router = router;
        this.api = api;
      }

      _createClass(DeathsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.deaths = this.api.getDeaths();
        }
      }, {
        key: "openDetails",
        value: function openDetails(deaths) {
          var deathId = deaths.deaths_id;
          this.router.navigateByUrl("/tabs/deaths/".concat(deathId));
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(e) {
          var id = e.detail.value;

          if (id == '') {
            return;
          } else {
            this.router.navigateByUrl("/tabs/deaths/".concat(id));
          }
        }
      }]);

      return DeathsPage;
    }();

    DeathsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    DeathsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deaths',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deaths.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deaths.page.scss */
      "./src/app/pages/deaths/deaths.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], DeathsPage);
    /***/
  }
}]);
//# sourceMappingURL=deaths-deaths-module-es5.js.map