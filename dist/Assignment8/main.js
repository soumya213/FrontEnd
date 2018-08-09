(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiServiceService = /** @class */ (function () {
    // public baseUrl:"https://www.anapioficeandfire.com/api/"
    function ApiServiceService(_http) {
        this._http = _http;
    }
    ApiServiceService.prototype.getAllBooks = function () {
        var allBooks = this._http.get("https://www.anapioficeandfire.com/api/books");
        return allBooks;
    }; // end get all books
    ApiServiceService.prototype.getPerticularBook = function (url) {
        var perticularBook = this._http.get(url);
        return perticularBook;
    }; //end get perticularBook
    ApiServiceService.prototype.getAllCharacter = function () {
        var allCharacter = this._http.get("https://www.anapioficeandfire.com/api/characters");
        return allCharacter;
    }; //end getAllCharacter
    ApiServiceService.prototype.getPerticularCharacter = function (url) {
        var perticularcharacter = this._http.get(url);
        return perticularcharacter;
    }; //end getPerticularCharacter
    ApiServiceService.prototype.getAllHouses = function () {
        var allHouses = this._http.get("https://www.anapioficeandfire.com/api/houses");
        return allHouses;
    }; //end getAllHouses
    ApiServiceService.prototype.getperticularHouse = function (url) {
        var perticularHouse = this._http.get(url);
        return perticularHouse;
    }; //end getAllHouses
    ApiServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n<nav class=\"navbar navbar-default\">\n  <a class=\"navbar-brand\" href=\"#\">An API of Ice And Fire</a>\n</nav>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Assignment8';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./house-view/house-view.component */ "./src/app/house-view/house-view.component.ts");
/* harmony import */ var _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-view/character-view.component */ "./src/app/character-view/character-view.component.ts");
/* harmony import */ var _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-view/book-view.component */ "./src/app/book-view/book-view.component.ts");
/* harmony import */ var _notfound_view_notfound_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notfound-view/notfound-view.component */ "./src/app/notfound-view/notfound-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-service.service */ "./src/app/api-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_4__["HouseViewComponent"],
                _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_5__["CharacterViewComponent"],
                _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_6__["BookViewComponent"],
                _notfound_view_notfound_view_component__WEBPACK_IMPORTED_MODULE_7__["NotfoundViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                    { path: 'bookView/:bookUrl', component: _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_6__["BookViewComponent"] },
                    { path: 'houseView/:houseUrl', component: _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_4__["HouseViewComponent"] },
                    { path: 'characterView/:characterUrl', component: _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_5__["CharacterViewComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: _notfound_view_notfound_view_component__WEBPACK_IMPORTED_MODULE_7__["NotfoundViewComponent"] }
                ])
            ],
            providers: [_api_service_service__WEBPACK_IMPORTED_MODULE_10__["ApiServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-view/book-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-view/book-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    padding-top: 8vh;\r\n    text-align: center\r\n}"

/***/ }),

/***/ "./src/app/book-view/book-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-view/book-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"col-md-4\">\n  \n      <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back </a>\n    </div>\n  \n    <ul class=\"list-group\">\n      <li class=\"list-group-item card-body\"></li>\n    </ul>\n  \n  \n  </div>"

/***/ }),

/***/ "./src/app/book-view/book-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-view/book-view.component.ts ***!
  \**************************************************/
/*! exports provided: BookViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookViewComponent", function() { return BookViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookViewComponent = /** @class */ (function () {
    function BookViewComponent(_location, _route, router, apiService) {
        this._location = _location;
        this._route = _route;
        this.router = router;
        this.apiService = apiService;
    }
    BookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var blogUrl = this._route.snapshot.paramMap.get("bookUrl");
        console.log(blogUrl);
        this.apiService.getPerticularBook(blogUrl).subscribe(function (data) {
            _this.perticularBookData = data;
            console.log(_this.perticularBookData);
            for (var key in _this.perticularBookData) {
                if (typeof (_this.perticularBookData[key]) === 'object') {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append("<strong>" + key.toUpperCase() + "</strong><br>");
                    for (var x in _this.perticularBookData[key]) {
                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append(_this.perticularBookData[key][x] + "<br>");
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append("<strong>" + key.toUpperCase() + "</strong> : " + _this.perticularBookData[key] + "<br>");
                }
            }
            return _this.perticularBookData;
        }, function (error) {
            console.log("something went wrong");
            console.log(error.errormessage);
        });
    };
    BookViewComponent.prototype.goBackToPreviousPage = function () {
        this._location.back();
    };
    BookViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-view',
            template: __webpack_require__(/*! ./book-view.component.html */ "./src/app/book-view/book-view.component.html"),
            styles: [__webpack_require__(/*! ./book-view.component.css */ "./src/app/book-view/book-view.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], BookViewComponent);
    return BookViewComponent;
}());



/***/ }),

/***/ "./src/app/character-view/character-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/character-view/character-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    padding-top: 8vh;\r\n    text-align: center\r\n}"

/***/ }),

/***/ "./src/app/character-view/character-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/character-view/character-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"col-md-4\">\n  \n      <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back </a>\n    </div>\n  \n    <ul class=\"list-group\">\n      <li class=\"list-group-item card-body\"></li>\n    </ul>\n  \n  \n  </div>"

/***/ }),

/***/ "./src/app/character-view/character-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/character-view/character-view.component.ts ***!
  \************************************************************/
/*! exports provided: CharacterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterViewComponent", function() { return CharacterViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CharacterViewComponent = /** @class */ (function () {
    function CharacterViewComponent(_location, _route, router, apiService) {
        this._location = _location;
        this._route = _route;
        this.router = router;
        this.apiService = apiService;
        this.perticularCharacter = [];
    }
    CharacterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var characterUrl = this._route.snapshot.paramMap.get("characterUrl");
        this.apiService.getperticularHouse(characterUrl).subscribe(function (data) {
            _this.perticularCharacter = data;
            console.log(_this.perticularCharacter);
            for (var key in _this.perticularCharacter) {
                if (typeof (_this.perticularCharacter[key]) === 'object') {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append("<strong>" + key.toUpperCase() + "</strong><br>");
                    for (var x in _this.perticularCharacter[key]) {
                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append(_this.perticularCharacter[key][x] + "<br>");
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append("<strong>" + key.toUpperCase() + "</strong> : " + _this.perticularCharacter[key] + "<br>");
                }
            }
            return _this.perticularCharacter;
        }, function (error) {
            console.log("something went wrong");
            console.log(error.errormessage);
        });
    };
    CharacterViewComponent.prototype.goBackToPreviousPage = function () {
        this._location.back();
    };
    CharacterViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-view',
            template: __webpack_require__(/*! ./character-view.component.html */ "./src/app/character-view/character-view.component.html"),
            styles: [__webpack_require__(/*! ./character-view.component.css */ "./src/app/character-view/character-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], CharacterViewComponent);
    return CharacterViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-book{\r\n    border:1px solid green;\r\n    padding: 2px;\r\n}\r\n\r\n.border{\r\n    border: 1px solid black;\r\n    padding-bottom: 2vh;\r\n}\r\n\r\n.card-body{\r\n    height: 35vh ;\r\n    overflow-y: scroll;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <h2>Books</h2>\n  <div class=\"row row-horizon\" style=\"text-align:center\">\n    <div *ngFor=\"let book of allBooks\" class=\"col-sm-3 com-md-3 col-12\">\n      <div class=\"card text-center\">\n        <div class=\"card-body border\">\n          <h4 class=\"card-title\">{{book.name}}</h4>\n          <p class=\"card-text\">\n            <strong>Authors:</strong> {{book.authors}}\n            <br>\n            <strong>MediaType:</strong> {{book.mediaType}}\n            <br>\n            <strong>Number of Pages:</strong> {{book.numberOfPages}}\n            <br>\n            <strong>Published By:</strong>{{book.publisher}}\n            <br>\n            <strong>Release Date:</strong> {{book.released | date}}\n          </p>\n          <a [routerLink]=\"['/bookView',book.url]\" class=\" btn btn-primary\">See More</a>\n        </div>\n      </div>\n      <br/>\n    </div>\n  </div>\n\n<!-- Houses -->\n<h2>Houses</h2>\n<div class=\"row row-horizon\" style=\"text-align:center\">\n  <div *ngFor=\"let house of allHouses\" class=\"col-sm-3 com-md-3 col-12\">\n    <div class=\"card text-center\">\n      <div class=\"card-body border\">\n        <h4 class=\"card-title\">{{house.name}}</h4>\n        <p class=\"card-text\">\n          <strong>Region:</strong> {{house.region}}\n          <br>\n          <strong>Coat Of Arms:</strong> {{house.coatOfArms==''?'Not Mentioned':house.seats}}\n          <br>\n          <strong>Seats:</strong> {{house.seats==''?'Not Mentioned':house.seats}}\n          <br>\n          <strong>Founded:</strong> {{house.founded==''?'Not Mentioned':house.founded}}\n        </p>        \n        <a [routerLink]=\"['/houseView',house.url]\" class=\"btn btn-primary\">See More</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n  <!-- Charcter -->\n\n  <h2>Characters</h2>\n  <div class=\"row row-horizon\" style=\"text-align:center\">\n    <div *ngFor=\"let character of allCharacter\" class=\"col-sm-3 com-md-3 col-12\">\n      <div class=\"card text-center\">\n        <div class=\"card-body border\">\n          <h4 class=\"card-title\">{{character.aliases}}</h4>\n          <p class=\"card-text\">\n            <strong>Gender:</strong> {{character.gender }}\n            <br>\n            <strong>Culture:</strong> {{character.culture==''?'Not Mentioned':character.culture}}\n            <br>\n            <strong>Born:</strong> {{character.born==''?'Not Mentioned':character.born}}\n            <br>\n            <strong>Died:</strong>{{character.died==''?'Not Mentioned':character.died}}\n            <br>\n            <strong>Titles:</strong> {{character.titles==''?'Not Mentioned':character.titles}}\n          </p>\n          <a [routerLink]=\"['/characterView',character.url]\" class=\"btn btn-primary\">See More</a>\n        </div>\n      </div>\n      <br/>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService) {
        this.apiService = apiService;
        this.allBooks = [];
        this.allCharacter = [];
        this.allHouses = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllBooks().subscribe(function (data) {
            _this.allBooks = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        this.apiService.getAllCharacter().subscribe(function (data) {
            _this.allCharacter = data;
            return _this.allCharacter;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        this.apiService.getAllHouses().subscribe(function (data) {
            _this.allHouses = data;
            return _this.allHouses;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/house-view/house-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/house-view/house-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    padding-top: 8vh;\r\n    text-align: center\r\n}"

/***/ }),

/***/ "./src/app/house-view/house-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/house-view/house-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"col-md-4\">\n\n    <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back </a>\n  </div>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item card-body\"></li>\n  </ul>\n\n\n</div>"

/***/ }),

/***/ "./src/app/house-view/house-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/house-view/house-view.component.ts ***!
  \****************************************************/
/*! exports provided: HouseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseViewComponent", function() { return HouseViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HouseViewComponent = /** @class */ (function () {
    function HouseViewComponent(_location, _route, router, apiService) {
        this._location = _location;
        this._route = _route;
        this.router = router;
        this.apiService = apiService;
        this.perticularHouse = [];
    }
    HouseViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var houseUrl = this._route.snapshot.paramMap.get("houseUrl");
        this.apiService.getperticularHouse(houseUrl).subscribe(function (data) {
            _this.perticularHouse = data;
            console.log(_this.perticularHouse);
            for (var key in _this.perticularHouse) {
                if (typeof (_this.perticularHouse[key]) === 'object') {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append("<strong>" + key.toUpperCase() + ":</strong><br>");
                    for (var x in _this.perticularHouse[key]) {
                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append(_this.perticularHouse[key][x] + "<br>");
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".card-body").append("<strong>" + key.toUpperCase() + "</strong> : " + _this.perticularHouse[key] + "<br>");
                }
            }
            return _this.perticularHouse;
        }, function (error) {
            console.log("something went wrong");
            console.log(error.errormessage);
        });
    };
    HouseViewComponent.prototype.goBackToPreviousPage = function () {
        this._location.back();
    };
    HouseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house-view',
            template: __webpack_require__(/*! ./house-view.component.html */ "./src/app/house-view/house-view.component.html"),
            styles: [__webpack_require__(/*! ./house-view.component.css */ "./src/app/house-view/house-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], HouseViewComponent);
    return HouseViewComponent;
}());



/***/ }),

/***/ "./src/app/notfound-view/notfound-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notfound-view/notfound-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\r\n.error-template {padding: 40px 15px;text-align: center;}\r\n.error-actions {margin-top:15px;margin-bottom:15px;}\r\n.error-actions .btn { margin-right:10px; }"

/***/ }),

/***/ "./src/app/notfound-view/notfound-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/notfound-view/notfound-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"error-template\">\n              <h1>\n                  Oops!</h1>\n              <h2>\n                  404 Not Found</h2>\n              <div class=\"error-details\">\n                  Sorry, an error has occured, Requested page not found!\n              </div>\n              <div class=\"error-actions\">\n                  <a [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                      Take Me Home </a>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/notfound-view/notfound-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notfound-view/notfound-view.component.ts ***!
  \**********************************************************/
/*! exports provided: NotfoundViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundViewComponent", function() { return NotfoundViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundViewComponent = /** @class */ (function () {
    function NotfoundViewComponent() {
    }
    NotfoundViewComponent.prototype.ngOnInit = function () {
    };
    NotfoundViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound-view',
            template: __webpack_require__(/*! ./notfound-view.component.html */ "./src/app/notfound-view/notfound-view.component.html"),
            styles: [__webpack_require__(/*! ./notfound-view.component.css */ "./src/app/notfound-view/notfound-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundViewComponent);
    return NotfoundViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Soumya Dhar\Desktop\Front-end\Github\FrontEnd\Assignment8\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map