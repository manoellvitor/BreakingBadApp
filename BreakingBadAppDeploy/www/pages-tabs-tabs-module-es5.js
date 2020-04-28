function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"episodes\">\n      <ion-icon name=\"film-outline\"  color=\"dark\"></ion-icon>\n      <ion-label>Episodes</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"characters\">\n      <ion-icon name=\"people-outline\"  color=\"dark\"></ion-icon>\n      <ion-label>Characters</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"quotes\">\n      <ion-icon name=\"megaphone-outline\"  color=\"dark\"></ion-icon>\n      <ion-label>Quotes</ion-label>\n    </ion-tab-button>\n     <ion-tab-button tab=\"deaths\">\n      <ion-icon name=\"skull-outline\"  color=\"danger\"></ion-icon>\n      <ion-label  color=\"danger\">Deaths</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPagesTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/pages/tabs/tabs.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'episodes',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | episodes-episodes-module */
            [__webpack_require__.e("common"), __webpack_require__.e("episodes-episodes-module")]).then(__webpack_require__.bind(null,
            /*! ../episodes/episodes.module */
            "./src/app/pages/episodes/episodes.module.ts")).then(function (m) {
              return m.EpisodesPageModule;
            });
          }
        }, {
          path: ':id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | episode-details-episode-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("episode-details-episode-details-module")]).then(__webpack_require__.bind(null,
            /*! ../episode-details/episode-details.module */
            "./src/app/pages/episode-details/episode-details.module.ts")).then(function (m) {
              return m.EpisodeDetailsPageModule;
            });
          }
        }]
      }, {
        path: 'characters',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | characters-characters-module */
            [__webpack_require__.e("common"), __webpack_require__.e("characters-characters-module")]).then(__webpack_require__.bind(null,
            /*! ../characters/characters.module */
            "./src/app/pages/characters/characters.module.ts")).then(function (m) {
              return m.CharactersPageModule;
            });
          }
        }, {
          path: ':id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | character-details-character-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("character-details-character-details-module")]).then(__webpack_require__.bind(null,
            /*! ../character-details/character-details.module */
            "./src/app/pages/character-details/character-details.module.ts")).then(function (m) {
              return m.CharacterDetailsPageModule;
            });
          }
        }]
      }, {
        path: 'quotes',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | quotes-quotes-module */
            [__webpack_require__.e("common"), __webpack_require__.e("quotes-quotes-module")]).then(__webpack_require__.bind(null,
            /*! ../quotes/quotes.module */
            "./src/app/pages/quotes/quotes.module.ts")).then(function (m) {
              return m.QuotesPageModule;
            });
          }
        }, {
          path: ':id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | quote-details-quote-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("quote-details-quote-details-module")]).then(__webpack_require__.bind(null,
            /*! ../quote-details/quote-details.module */
            "./src/app/pages/quote-details/quote-details.module.ts")).then(function (m) {
              return m.QuoteDetailsPageModule;
            });
          }
        }]
      }, {
        path: 'deaths',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | deaths-deaths-module */
            [__webpack_require__.e("common"), __webpack_require__.e("deaths-deaths-module")]).then(__webpack_require__.bind(null,
            /*! ../deaths/deaths.module */
            "./src/app/pages/deaths/deaths.module.ts")).then(function (m) {
              return m.DeathsPageModule;
            });
          }
        }]
      }]
    }, {
      path: '',
      redirectTo: '/tabs/episodes',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tabs/tabs.module.ts ***!
    \*******************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppPagesTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
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


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/pages/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/pages/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tabs/tabs.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tabs/tabs.page.ts ***!
    \*****************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPagesTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage() {
        _classCallCheck(this, TabsPage);
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabsPage;
    }();

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/pages/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map