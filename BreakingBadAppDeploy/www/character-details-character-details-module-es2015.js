(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\" defaultHref=\"/tabs/characters\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ character?.name }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"unfavoriteepisode()\" *ngIf=\"isFavorite\">\n        <ion-icon name=\"star\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"favoriteepisode()\" *ngIf=\"!isFavorite\">\n        <ion-icon name=\"star-outline\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-card *ngIf=\"character\" class=\"movie-card\">\n    <ion-card-header>Nickname: {{ character.nickname }}</ion-card-header>\n    <ion-card-content>\n      <img src=\"{{ character.img }}\" alt=\"{{ character.nickname }}\" width=\"300\" height=\"300\">\n    </ion-card-content>\n    <ion-item class=\"movie-info\" lines=\"none\">\n      <ion-icon name=\"recording-outline\" slot=\"start\"></ion-icon>\n      Seasons: {{ character.category }}\n    </ion-item>\n    <ion-item class=\"movie-info\" lines=\"none\">\n      <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>\n      Status: {{ character.status }}\n    </ion-item>\n    <ion-item class=\"movie-info\" lines=\"none\">\n      <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n      Occupation: {{ character.occupation }}\n    </ion-item>\n    <ion-item class=\"movie-info\" lines=\"none\">\n      <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n      Date of Birth: {{ character.birthday }}\n    </ion-item>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/character-details/character-details-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "./src/app/pages/character-details/character-details-routing.module.ts");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/pages/services/api.service.ts");




let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.characterId = null;
    }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get(`id`);
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-details.page.scss */ "./src/app/pages/character-details/character-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], CharacterDetailsPage);



/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module-es2015.js.map