webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_list_list_component__ = __webpack_require__("../../../../../src/app/dashboard/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_new_new_component__ = __webpack_require__("../../../../../src/app/dashboard/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_show_show_component__ = __webpack_require__("../../../../../src/app/dashboard/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_update_update_component__ = __webpack_require__("../../../../../src/app/dashboard/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_new_new_component__["a" /* NewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_show_show_component__["a" /* ShowComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_update_update_component__["a" /* UpdateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__dashboard_service__["a" /* DashboardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_list_list_component__ = __webpack_require__("../../../../../src/app/dashboard/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_new_new_component__ = __webpack_require__("../../../../../src/app/dashboard/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_show_show_component__ = __webpack_require__("../../../../../src/app/dashboard/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_update_update_component__ = __webpack_require__("../../../../../src/app/dashboard/update/update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        children: []
    },
    {
        path: 'questions',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [{ path: 'all', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_list_list_component__["a" /* ListComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_new_new_component__["a" /* NewComponent */] },
            { path: 'update/:id', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_update_update_component__["a" /* UpdateComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_show_show_component__["a" /* ShowComponent */] }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = (function () {
    function DashboardService(_http, router, route) {
        this._http = _http;
        this.router = router;
        this.route = route;
        this.user = '';
    }
    DashboardService.prototype.getUser = function (user, callback) {
        this.user = user;
        console.log(this.user);
        callback(user);
    };
    DashboardService.prototype.showUser = function (callback) {
        console.log(this.user);
        callback(this.user);
    };
    DashboardService.prototype.logoutUser = function () {
        this.user = '';
        this.router.navigate(['/']);
    };
    DashboardService.prototype.goToList = function () {
        console.log(this.user);
        this.router.navigate(['/questions', 'all']);
    };
    DashboardService.prototype.goToShow = function (id) {
        this.router.navigate(['/questions', id]);
    };
    DashboardService.prototype.createQuestion = function (question, callback) {
        this._http.post('/questions', question).subscribe(function (response) {
            console.log("The recipie has left the service and entered the database");
            callback(response);
        }, function (error) {
            console.log('The recipie could not leave the service and did not enter the database');
        });
    };
    DashboardService.prototype.getQuestions = function (callback) {
        this._http.get('/all').subscribe(function (response) {
            console.log(response.json());
            var x = response.json();
            callback(x);
        }, function (error) {
            console.log('error');
        });
    };
    DashboardService.prototype.showQuestion = function (id, callback) {
        this._http.get('/question/' + id).subscribe(function (response) {
            console.log("Attempting to get the specific question in the server side");
            callback(response);
        }, function (error) {
            console.log("Didn't even leave the front-end bro!");
        });
    };
    DashboardService.prototype.updateQuestion = function (id, answer, callback) {
        this._http.post('/questions/update/' + id, answer).subscribe(function (response) {
            console.log("Attempting to send the specific answer in the server side for update");
            callback(response);
        }, function (error) {
            console.log("Didn't even leave the front-end bro!");
        });
    };
    DashboardService.prototype.likeAnswer = function (id, callback) {
        this._http.post('/questions/like/' + id, id).subscribe(function (response) {
            console.log("Attempting to like the answer in the server side");
            callback(response);
        }, function (error) {
            console.log("Didn't even leave the front-end bro!");
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"justify-content: space-between;\">\n<h1>Welcome, {{username}}</h1>\n<form (submit)='onSubmit()'>\n\t<input type=\"submit\" value=\"Logout\">\n</form>\n</div>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_DashboardService) {
        this._DashboardService = _DashboardService;
        this.username = '';
    }
    DashboardComponent.prototype.onSubmit = function () {
        this._DashboardService.logoutUser();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DashboardService.showUser(function (response) { _this.username = response; console.log(_this.username); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/questions','new']\">Add A Question!</a>\n<br> <br> \n\n<table style=\"width: 50%;\">\n  <tr>\n    <th>Question</th>\n    <th>Answers</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let x of questions\">\n    <td>{{x.question}}</td>\n    <td>{{x.answers.length}}</td>\n    <td><a [routerLink]=\"['/questions/update/'+ x._id]\">Answer</a> <a [routerLink]=\"['/questions', x._id ]\">Show</a></td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(_DashboardService) {
        this._DashboardService = _DashboardService;
        this.questions = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DashboardService.getQuestions(function (callback) {
            _this.questions = (callback);
        });
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/dashboard/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/questions','all']\">Home</a>\n\n<h1>New Question</h1>\n\n<form (submit)=\"onSubmit()\" #formData='ngForm'>\n\tQuestion: <input type=\"text\" name=\"question\" [(ngModel)]=\"question.question\" required minlength=\"10\" #question_question='ngModel'>\n\tDescription: <input type=\"text\" name=\"description\" [(ngModel)]=\"question.description\" #question_description='ngModel'>\n\t<input type=\"submit\" value=\"Add question\" [disabled]=\"formData.invalid\">\n</form>\n\n\n<span style=\"color: red\" *ngIf=\"question_question.errors?.required && question_question.dirty\">Question is required, bro.</span>\n\n<span style=\"color: red\" *ngIf=\"question_question.errors?.minlength && question_question.dirty\">Question should be more than 10 characters, bro!</span>"

/***/ }),

/***/ "../../../../../src/app/dashboard/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewComponent = (function () {
    function NewComponent(_DashboardService) {
        this._DashboardService = _DashboardService;
        this.question = { question: '', description: '' };
    }
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._DashboardService.createQuestion(this.question, function (response) {
            console.log("Question created on ServerSide");
            _this._DashboardService.goToList();
        });
    };
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/dashboard/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/questions','all']\">Home</a>\n<a [routerLink]=\"['/questions/update/'+ question._id]\">Answer this Question!</a>\n\n\n<h1>{{question.question}}</h1>\n<h2>{{question.description}}</h2>\n<br><hr>\n\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Answer</th>\n    <th>Detail</th>\n    <th>Likes</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let x of question.answers\">\n    <td>{{x.user}}</td>\n    <td>{{x.answer}}</td>\n    <td>{{x.detail}}</td>\n    <td>{{x.likes}}</td>\n    <td> <form (submit)=\"onSubmit(x._id)\" #formData='ngForm'>\n \t<input type=\"submit\" value=\"Like\">\n </form></td>\n\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = (function () {
    function ShowComponent(_DashboardService, _route) {
        this._DashboardService = _DashboardService;
        this._route = _route;
        this.question = {};
        this.answer = { answer: '', detail: '', user: '' };
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this._DashboardService.showQuestion(id, function (response) {
                console.log(response);
                _this.question = response.json();
            });
        });
    };
    ShowComponent.prototype.onSubmit = function (id) {
        var _this = this;
        this._DashboardService.likeAnswer(id, function (response) {
            _this._DashboardService.showQuestion(_this.question._id, function (response) {
                _this.question = response.json();
            });
        });
    };
    ShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show',
            template: __webpack_require__("../../../../../src/app/dashboard/show/show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/update/update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/questions','all']\">Home</a>\n<a [routerLink]=\"['/questions/', question._id]\">Go back to question</a>\n\n<h1>\n  {{question.question}}\n</h1>\n\n<h3>\n\t{{question.description}}\n</h3>\n\n<form (submit)=\"onSubmit()\" #formData='ngForm'>\n\tYour Answer: <input type=\"text\" name=\"answer\" [(ngModel)]=\"answer.answer\" required minlength=\"5\" #answer_answer='ngModel'> <br><br><br>\n\tSupporting details for your answer (optional): <input type=\"text\" name=\"detail\" [(ngModel)]=\"answer.detail\" #answer_detail='ngModel'>\n\t<input type=\"submit\" value=\"Add question\" [disabled]=\"formData.invalid\">\n\t<button [routerLink]=\"['/questions/', question._id]\"> Cancel</button>\n</form>\n\n\n\n<span style=\"color: red\" *ngIf=\"answer_answer.errors?.required && answer_answer.dirty\">Answer is required, bro.</span>\n\n<span style=\"color: red\" *ngIf=\"answer_answer.errors?.minlength && answer_answer.dirty\">Answer should be more than 5 characters, bro!</span>"

/***/ }),

/***/ "../../../../../src/app/dashboard/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateComponent = (function () {
    function UpdateComponent(_DashboardService, _route) {
        this._DashboardService = _DashboardService;
        this._route = _route;
        this.question = {};
        this.answer = { answer: '', detail: '', user: '', likes: 0 };
    }
    UpdateComponent.prototype.onSubmit = function () {
        var _this = this;
        this._DashboardService.updateQuestion(this.question._id, this.answer, function (response) {
            _this.question = response.json();
            console.log("Question Added on the Backend....Refreshing info.");
            _this._DashboardService.goToList();
        });
    };
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this._DashboardService.showQuestion(id, function (response) {
                console.log(response);
                _this.question = response.json();
            });
        });
        this._DashboardService.showUser(function (response) { _this.answer.user = response; });
    };
    UpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update',
            template: __webpack_require__("../../../../../src/app/dashboard/update/update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)='onSubmit()'>\n\t<label for=\"username\">Username:</label>\n\t<input type=\"text\" \n\tname=\"username\" \n\t[(ngModel)]=\"username\"\n\t>\n\t<input type=\"submit\" value=\"Login\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_DashboardService) {
        this._DashboardService = _DashboardService;
        this.username = "";
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('running');
        this._DashboardService.getUser(this.username, function (callback) {
            console.log('Username was passed to the Service.');
            _this._DashboardService.goToList();
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map