function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-episodes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEpisodesEpisodesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Episodes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item button detail lines=\"inset\" *ngFor=\"let episode of episodes | async\" (click)=\"openDetails(episode)\">\n      {{ episode?.title}}\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/episodes/episodes-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EpisodesPageRoutingModule */

  /***/
  function srcAppPagesEpisodesEpisodesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPageRoutingModule", function () {
      return EpisodesPageRoutingModule;
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


    var _episodes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episodes.page */
    "./src/app/pages/episodes/episodes.page.ts");

    var routes = [{
      path: '',
      component: _episodes_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesPage"]
    }];

    var EpisodesPageRoutingModule = function EpisodesPageRoutingModule() {
      _classCallCheck(this, EpisodesPageRoutingModule);
    };

    EpisodesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EpisodesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/episodes/episodes.module.ts ***!
    \***************************************************/

  /*! exports provided: EpisodesPageModule */

  /***/
  function srcAppPagesEpisodesEpisodesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPageModule", function () {
      return EpisodesPageModule;
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


    var _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./episodes-routing.module */
    "./src/app/pages/episodes/episodes-routing.module.ts");
    /* harmony import */


    var _episodes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episodes.page */
    "./src/app/pages/episodes/episodes.page.ts");

    var EpisodesPageModule = function EpisodesPageModule() {
      _classCallCheck(this, EpisodesPageModule);
    };

    EpisodesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesPageRoutingModule"]],
      declarations: [_episodes_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesPage"]]
    })], EpisodesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/episodes/episodes.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEpisodesEpisodesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/episodes/episodes.page.ts ***!
    \*************************************************/

  /*! exports provided: EpisodesPage */

  /***/
  function srcAppPagesEpisodesEpisodesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPage", function () {
      return EpisodesPage;
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

    var EpisodesPage = /*#__PURE__*/function () {
      function EpisodesPage(router, api) {
        _classCallCheck(this, EpisodesPage);

        this.router = router;
        this.api = api;
      }

      _createClass(EpisodesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.episodes = this.api.getEpisodes();
        }
      }, {
        key: "openDetails",
        value: function openDetails(episode) {
          var episodeId = episode.episode_id;
          this.router.navigateByUrl("/tabs/episodes/".concat(episodeId));
        }
      }]);

      return EpisodesPage;
    }();

    EpisodesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    EpisodesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-episodes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./episodes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./episodes.page.scss */
      "./src/app/pages/episodes/episodes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], EpisodesPage);
    /***/
  }
}]);
//# sourceMappingURL=episodes-episodes-module-es5.js.map