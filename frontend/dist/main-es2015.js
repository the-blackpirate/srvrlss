(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n  <span class=\"title\" [routerLink]=\"['']\">Srvrlss Discussions</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button mat-raised-button class=\"google\" *ngIf=\"!loading && !loggedIn\" (click)=\"login()\">\r\n    <span>Login with </span> <span class=\"padding\"></span>\r\n    <mat-icon class=\"logo\">\r\n      <svg width=\"25\" height=\"25\">\r\n        <g fill=\"none\" fill-rule=\"evenodd\">\r\n          <path\r\n            d=\"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z\"\r\n            fill=\"#4285F4\"\r\n          ></path>\r\n          <path\r\n            d=\"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z\"\r\n            fill=\"#34A853\"\r\n          ></path>\r\n          <path\r\n            d=\"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z\"\r\n            fill=\"#FBBC05\"\r\n          ></path>\r\n          <path\r\n            d=\"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z\"\r\n            fill=\"#EA4335\"\r\n          ></path>\r\n        </g>\r\n      </svg>\r\n    </mat-icon>\r\n  </button>\r\n\r\n  <button mat-raised-button *ngIf=\"!loading && loggedIn\" (click)=\"logout()\">Logout</button>\r\n</mat-toolbar>\r\n\r\n<mat-progress-bar color=\"warn\" mode=\"indeterminate\" *ngIf=\"progressBarLoading\"></mat-progress-bar>\r\n\r\n<div class=\"spinner\" [ngClass]=\"{ hidden: !loading }\">\r\n  <mat-spinner [diameter]=\"60\"></mat-spinner>\r\n</div>\r\n\r\n<div [ngClass]=\"{ hidden: loading }\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner\" [ngClass]=\"{ hidden: !loading }\">\r\n  <mat-spinner [diameter]=\"60\"></mat-spinner>\r\n</div>\r\n\r\n<main [ngClass]=\"{ hidden: loading }\">\r\n  <div class=\"top-header\">\r\n    <h1 class=\"mat-display-2 heading\">Topics</h1>\r\n  </div>\r\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\">\r\n    <ng-container matColumnDef=\"title\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <!-- <button mat-flat-button>Title</button> -->\r\n        Title\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"topics \">\r\n        <a [routerLink]=\"['/', 'topic', element.topicID]\" class=\"mat-display-1\">\r\n          {{ element.title }}\r\n        </a>\r\n        <div>\r\n          <span *ngFor=\"let tag of element.tags\" class=\"tags\">\r\n            <a [routerLink]=\"['/']\" [queryParams]=\"{ filter: tag }\"\r\n              >#{{ tag }}</a\r\n            >\r\n          </span>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"time\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <!-- <button mat-flat-button>Last Activity</button> -->\r\n        Last Activity\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\"\r\n        matTooltip=\"{{ element.lastActivity | date: 'medium' }}\"\r\n        class=\"time\"\r\n      >\r\n        {{ element.lastActivity | timeAgo }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"replies\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <!-- <button mat-flat-button>Replies</button> -->\r\n        Replies\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"replies\">\r\n        <a [routerLink]=\"['/', 'topic', element.topicID]\">\r\n          {{ element.replyCount }}\r\n        </a>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n</main>\r\n\r\n<button\r\n  [ngClass]=\"{ hidden: loading }\"\r\n  mat-fab\r\n  matTooltip=\"Create New Topic\"\r\n  aria-label=\"Button that displays a tooltip when focused or hovered over\"\r\n  (click)=\"openNewTopicDialog()\"\r\n  class=\"create-button\"\r\n>\r\n  <mat-icon>add</mat-icon>\r\n</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reply-dialog/reply-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reply-dialog/reply-dialog.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\r\n  {{ data.topicTitle }}\r\n</h1>\r\n<div mat-dialog-content class=\"content\">\r\n  <form [formGroup]=\"addReplyForm\" (ngSubmit)=\"addReply()\">\r\n    <mat-form-field>\r\n      <mat-label>Type your message here</mat-label>\r\n      <textarea matInput formControlName=\"message\" cdkTextareaAutosize=\"true\"></textarea>\r\n      <mat-error *ngIf=\"message.value.length === 0\">Message is required</mat-error>\r\n    </mat-form-field>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button cdkFocusInitial (click)=\"addReply()\">\r\n    <mat-icon class=\"mat-icon-rtl-mirror\">reply</mat-icon>\r\n    Reply\r\n  </button>\r\n  <button mat-button (click)=\"dialogRef.close()\">Cancel</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic-dialog/topic-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topic-dialog/topic-dialog.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\r\n  New Topic\r\n</h1>\r\n<div mat-dialog-content class=\"content\">\r\n  <form [formGroup]=\"newTopicForm\" (ngSubmit)=\"createNewTopic()\">\r\n    <mat-form-field>\r\n      <mat-label>Topic title</mat-label>\r\n      <input matInput cdkFocusInitial type=\"text\" formControlName=\"title\" required />\r\n      <mat-error *ngIf=\"title.value.length === 0\">Title is required</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-chip-list #chipList>\r\n        <mat-chip\r\n          *ngFor=\"let tag of tags\"\r\n          [selectable]=\"true\"\r\n          [removable]=\"true\"\r\n          (removed)=\"remove(tag)\"\r\n        >\r\n          {{ tag }}\r\n          <mat-icon matChipRemove>cancel</mat-icon>\r\n        </mat-chip>\r\n        <input\r\n          placeholder=\"Category tags\"\r\n          [matChipInputFor]=\"chipList\"\r\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n          [matChipInputAddOnBlur]=\"true\"\r\n          (matChipInputTokenEnd)=\"add($event)\"\r\n        />\r\n        <mat-error *ngIf=\"tags.length === 0\">Atleast one tag is required</mat-error>\r\n      </mat-chip-list>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Type your message here</mat-label>\r\n      <textarea matInput formControlName=\"message\" cdkTextareaAutosize=\"true\"></textarea>\r\n      <mat-error *ngIf=\"message.value.length === 0\">Message is required</mat-error>\r\n    </mat-form-field>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-flat-button (click)=\"createNewTopic()\">\r\n    <mat-icon>add</mat-icon> Create New Topic\r\n  </button>\r\n  <button mat-button (click)=\"dialogRef.close()\">Cancel</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner\" [ngClass]=\"{ hidden: !loading }\">\r\n  <mat-spinner [diameter]=\"60\"></mat-spinner>\r\n</div>\r\n\r\n<main [ngClass]=\"{ hidden: loading }\">\r\n  <div *ngIf=\"topic\" class=\"grid\">\r\n    <div class=\"header\">\r\n      <h1 class=\"topic-title mat-display-1\">{{ topic.title }}</h1>\r\n    </div>\r\n    <mat-chip-list class=\"topic-tag\">\r\n      <mat-chip *ngFor=\"let tag of topic.tags\">{{ tag }}</mat-chip>\r\n    </mat-chip-list>\r\n\r\n    <div *ngIf=\"replies\" class=\"replies\">\r\n      <mat-card class=\"reply-card\" *ngFor=\"let reply of replies\">\r\n        <mat-card-header>\r\n          <div\r\n            mat-card-avatar\r\n            class=\"user-image\"\r\n            [ngStyle]=\"{\r\n              'background-image':\r\n                'url(' + reply.authorImage + '), url(/assets/default.png)'\r\n            }\"\r\n          ></div>\r\n          <mat-card-title>{{ reply.author }}</mat-card-title>\r\n          <mat-card-subtitle\r\n            matTooltip=\"{{ reply.timestamp | date: 'medium' }}\"\r\n          >\r\n            {{ reply.timestamp | timeAgo }}\r\n          </mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n          <p class=\"mat-body-2 reply-content\">{{ reply.message }}</p>\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\">\r\n          <label>\r\n            {{ reply.likes }}\r\n            <button\r\n              (click)=\"likeReply(reply.replyID)\"\r\n              mat-icon-button\r\n              matTooltip=\"Like\"\r\n              aria-label=\"Button that displays a tooltip when focused or hovered over\"\r\n              *ngIf=\"!reply.liked; else liked\"\r\n            >\r\n              <mat-icon>favorite_border</mat-icon>\r\n            </button>\r\n            <ng-template #liked>\r\n              <button\r\n                (click)=\"unlikeReply(reply.replyID)\"\r\n                mat-icon-button\r\n                matTooltip=\"Unlike\"\r\n                aria-label=\"Button that displays a tooltip when focused or hovered over\"\r\n              >\r\n                <mat-icon>favorite</mat-icon>\r\n              </button>\r\n            </ng-template>\r\n          </label>\r\n\r\n          <button\r\n            (click)=\"deleteReply(reply.replyID)\"\r\n            *ngIf=\"\r\n              afAuth.auth.currentUser &&\r\n              afAuth.auth.currentUser.uid === reply.authorUID &&\r\n              !reply.first\r\n            \"\r\n            mat-icon-button\r\n            matTooltip=\"Delete\"\r\n            aria-label=\"Button that displays a tooltip when focused or hovered over\"\r\n          >\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<button\r\n  [ngClass]=\"{ hidden: loading }\"\r\n  (click)=\"openDialog()\"\r\n  class=\"reply-button\"\r\n  mat-fab\r\n  matTooltip=\"Reply\"\r\n  aria-label=\"Button that displays a tooltip when focused or hovered over\"\r\n>\r\n  <mat-icon>reply</mat-icon>\r\n</button>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/topic/topic.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'topic/:topicID', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_3__["TopicComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.title:hover {\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnRpdGxlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");





let AppComponent = class AppComponent {
    constructor(afAuth, appService) {
        this.afAuth = afAuth;
        this.appService = appService;
        this.progressBarLoading = false;
        this.loggedIn = false;
        this.loading = true;
        this.afAuth.authState.subscribe(user => {
            this.loading = false;
            if (!user) {
                return;
            }
            this.loggedIn = true;
        });
        this.appService.progressBarStatus.subscribe(status => {
            this.progressBarLoading = status;
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.auth.signOut();
            location.reload();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/topic/topic.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reply_dialog_reply_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reply-dialog/reply-dialog.component */ "./src/app/reply-dialog/reply-dialog.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _topic_dialog_topic_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./topic-dialog/topic-dialog.component */ "./src/app/topic-dialog/topic-dialog.component.ts");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _topic_topic_component__WEBPACK_IMPORTED_MODULE_8__["TopicComponent"],
            _reply_dialog_reply_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ReplyDialogComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"],
            _topic_dialog_topic_dialog_component__WEBPACK_IMPORTED_MODULE_28__["TopicDialogComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"].enablePersistence({ experimentalTabSynchronization: true }),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__["AngularFireAuthModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [_reply_dialog_reply_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ReplyDialogComponent"], _topic_dialog_topic_dialog_component__WEBPACK_IMPORTED_MODULE_28__["TopicDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AppService = class AppService {
    constructor() {
        this.progressBarStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    setProgressBarStatus(status) {
        this.progressBarStatus.next(status);
    }
};
AppService.API = "http://localhost:3000";
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\r\n  display: grid;\r\n  justify-items: center;\r\n}\r\n\r\n.top-header {\r\n  width: 100%;\r\n  margin-top: 5%;\r\n  margin-left: 5%;\r\n  margin-bottom: 3%;\r\n  max-width: 800px;\r\n}\r\n\r\n.heading {\r\n  -webkit-margin-after: 0.1em;\r\n          margin-block-end: 0.1em;\r\n  -webkit-margin-before: 0.1em;\r\n          margin-block-start: 0.1em;\r\n}\r\n\r\n.create-button {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 20px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  max-width: 800px;\r\n}\r\n\r\n.mat-flat-button {\r\n  width: 100%;\r\n}\r\n\r\n.topics {\r\n  text-align: start;\r\n  max-width: 120px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tags {\r\n  margin-right: 16px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3AtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuMWVtO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC4xZW07XHJcbn1cclxuXHJcbi5jcmVhdGUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLm1hdC1mbGF0LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b3BpY3Mge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIG1heC13aWR0aDogMTIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGFncyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _topic_dialog_topic_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topic-dialog/topic-dialog.component */ "./src/app/topic-dialog/topic-dialog.component.ts");








let HomeComponent = class HomeComponent {
    constructor(afAuth, snackBar, dialog) {
        this.afAuth = afAuth;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.topics = [];
        this.loading = true;
        this.subs = [];
        this.displayedColumns = ["title", "time", "replies"];
    }
    ngOnInit() {
        this.subs.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(0, 3000).subscribe(() => this.getTopics()));
    }
    ngOnDestroy() {
        for (const sub of this.subs) {
            sub.unsubscribe();
        }
    }
    getTopics() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const res = yield fetch("http://localhost:3000/GetTopics");
                this.topics = yield res.json();
                console.log(this.topics);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.topics);
            }
            catch (e) {
                console.error(e);
            }
            finally {
                this.loading = false;
            }
        });
    }
    openNewTopicDialog() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.afAuth.auth.currentUser) {
                this.snackBar.open("Please login first", "OK");
                return;
            }
            this.dialog.open(_topic_dialog_topic_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TopicDialogComponent"], {
                width: "90%",
                maxWidth: "800px"
            });
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/reply-dialog/reply-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/reply-dialog/reply-dialog.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwbHktZGlhbG9nL3JlcGx5LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVwbHktZGlhbG9nL3JlcGx5LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/reply-dialog/reply-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/reply-dialog/reply-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: ReplyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyDialogComponent", function() { return ReplyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");






let ReplyDialogComponent = class ReplyDialogComponent {
    constructor(dialogRef, afAuth, appService, data) {
        this.dialogRef = dialogRef;
        this.afAuth = afAuth;
        this.appService = appService;
        this.data = data;
        this.addReplyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            })
        });
        this.loading = false;
    }
    get message() {
        return this.addReplyForm.get("message");
    }
    addReply() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.addReplyForm.valid) {
                return;
            }
            if (this.loading) {
                return;
            }
            this.loading = true;
            this.appService.setProgressBarStatus(true);
            try {
                const uid = this.afAuth.auth.currentUser.uid;
                yield fetch(`${_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"].API}/CreateReply`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        topicID: this.data.topicID,
                        message: this.message.value,
                        author: uid
                    })
                });
            }
            finally {
                this.loading = false;
                this.appService.setProgressBarStatus(false);
                this.dialogRef.close();
            }
        });
    }
};
ReplyDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ReplyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-reply-dialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reply-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reply-dialog/reply-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reply-dialog.component.css */ "./src/app/reply-dialog/reply-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], Object])
], ReplyDialogComponent);



/***/ }),

/***/ "./src/app/topic-dialog/topic-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/topic-dialog/topic-dialog.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMtZGlhbG9nL3RvcGljLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdG9waWMtZGlhbG9nL3RvcGljLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/topic-dialog/topic-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/topic-dialog/topic-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: TopicDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDialogComponent", function() { return TopicDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");







let TopicDialogComponent = class TopicDialogComponent {
    constructor(dialogRef, afAuth, appService) {
        this.dialogRef = dialogRef;
        this.afAuth = afAuth;
        this.appService = appService;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.tags = ["general"];
        this.loading = false;
        this.newTopicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            })
        });
    }
    get title() {
        return this.newTopicForm.get("title");
    }
    get message() {
        return this.newTopicForm.get("message");
    }
    ngOnInit() { }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || "").trim()) {
            this.tags.push(value.trim());
        }
        if (input) {
            input.value = "";
        }
    }
    remove(tag) {
        const index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
    createNewTopic() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.newTopicForm.valid || this.tags.length === 0) {
                return;
            }
            if (this.loading) {
                return;
            }
            this.loading = true;
            this.appService.setProgressBarStatus(true);
            try {
                const uid = this.afAuth.auth.currentUser.uid;
                yield fetch(`${_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"].API}/CreateTopic`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        author: uid,
                        tags: this.tags,
                        title: this.title.value,
                        message: this.message.value
                    })
                });
            }
            finally {
                this.loading = false;
                this.appService.setProgressBarStatus(false);
                this.dialogRef.close();
            }
        });
    }
};
TopicDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] }
];
TopicDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-topic-dialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic-dialog/topic-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topic-dialog.component.css */ "./src/app/topic-dialog/topic-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]])
], TopicDialogComponent);



/***/ }),

/***/ "./src/app/topic/topic.component.css":
/*!*******************************************!*\
  !*** ./src/app/topic/topic.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\r\n  display: grid;\r\n  justify-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.header {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n}\r\n\r\n.header button {\r\n  justify-self: self-end;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  max-width: 800px;\r\n  width: 90%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.topic-title {\r\n  -webkit-margin-after: 0.1em;\r\n          margin-block-end: 0.1em;\r\n  -webkit-margin-before: 0.1em;\r\n          margin-block-start: 0.1em;\r\n}\r\n\r\n.topic-tag {\r\n  -webkit-padding-start: 16px;\r\n          padding-inline-start: 16px;\r\n}\r\n\r\n.user-image {\r\n  background-size: cover;\r\n}\r\n\r\n.reply-content {\r\n  padding-top: 10px;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.reply-card {\r\n  margin: 10px 0 10px 0;\r\n}\r\n\r\n.reply-button {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMvdG9waWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdG9waWMvdG9waWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIgYnV0dG9uIHtcclxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi50b3BpYy10aXRsZSB7XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC4xZW07XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjFlbTtcclxufVxyXG5cclxuLnRvcGljLXRhZyB7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE2cHg7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucmVwbHktY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5yZXBseS1jYXJkIHtcclxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbi5yZXBseS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/topic/topic.component.ts":
/*!******************************************!*\
  !*** ./src/app/topic/topic.component.ts ***!
  \******************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _reply_dialog_reply_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reply-dialog/reply-dialog.component */ "./src/app/reply-dialog/reply-dialog.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");









let TopicComponent = class TopicComponent {
    constructor(afAuth, appService, router, route, snackBar, dialog) {
        this.afAuth = afAuth;
        this.appService = appService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.replies = [];
        this.loading = true;
        this.buttonDisabled = false;
        this.subscriptions = [];
        this.subscriptions.push(this.router.events.subscribe((event) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                yield this.loadPostDetails();
            }
        })));
    }
    loadPostDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const topicID = this.route.snapshot.paramMap.get("topicID");
            try {
                const res = yield fetch(`${_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"].API}/GetTopic?topic=${topicID}`);
                this.topic = (yield res.json());
                this.topic.topicID = topicID;
            }
            catch (error) {
                console.error(error);
            }
            this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(0, 3000).subscribe(() => this.loadReplies()));
        });
    }
    loadReplies() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"].API}/GetReplies?topic=${this.topic.topicID}`);
                const replies = yield res.json();
                replies.map((reply, i) => {
                    const liked = this.isLikingReply(reply.likers);
                    replies[i] = Object.assign({}, reply, { liked: liked });
                });
                this.replies = replies;
            }
            catch (error) {
                console.error(error);
            }
            finally {
                this.loading = false;
            }
        });
    }
    isLikingReply(likers) {
        if (!this.afAuth.auth.currentUser) {
            return false;
        }
        if (likers.includes(this.afAuth.auth.currentUser.uid)) {
            return true;
        }
        return false;
    }
    likeReply(replyID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.afAuth.auth.currentUser) {
                this.snackBar.open("Please login first", "OK");
                return;
            }
            if (this.buttonDisabled) {
                return;
            }
            this.buttonDisabled = true;
            this.appService.setProgressBarStatus(true);
            try {
                const uid = this.afAuth.auth.currentUser.uid;
                yield fetch(`${_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"].API}/LikeReply?uid=${uid}&replyID=${replyID}`);
                let i = this.replies.length;
                while (i--) {
                    if (this.replies[i]["replyID"] == replyID) {
                        this.replies[i].likes++;
                        this.replies[i].likers.push(uid);
                    }
                }
            }
            finally {
                this.buttonDisabled = false;
                this.appService.setProgressBarStatus(false);
            }
        });
    }
    unlikeReply(replyID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.afAuth.auth.currentUser) {
                this.snackBar.open("Please login first", "OK");
                return;
            }
            if (this.buttonDisabled) {
                return;
            }
            this.buttonDisabled = true;
            this.appService.setProgressBarStatus(true);
            try {
                const uid = this.afAuth.auth.currentUser.uid;
                yield fetch(`${_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"].API}/UnlikeReply?uid=${uid}&replyID=${replyID}`);
                let i = this.replies.length;
                while (i--) {
                    if (this.replies[i]["replyID"] == replyID) {
                        this.replies[i].likes--;
                        this.replies[i].likers = this.replies[i].likers.filter(e => e !== uid);
                    }
                }
            }
            finally {
                this.buttonDisabled = false;
                this.appService.setProgressBarStatus(false);
            }
        });
    }
    openDialog() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.afAuth.auth.currentUser) {
                this.snackBar.open("Please login first", "OK");
                return;
            }
            this.dialog.open(_reply_dialog_reply_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ReplyDialogComponent"], {
                data: { topicTitle: this.topic.title, topicID: this.topic.topicID },
                width: "90%",
                maxWidth: "800px"
            });
        });
    }
    deleteReply(replyID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.buttonDisabled) {
                return;
            }
            this.buttonDisabled = true;
            this.appService.setProgressBarStatus(true);
            try {
                yield fetch(`${_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"].API}/DeleteReply?replyID=${replyID}&topicID=${this.topic.topicID}`);
                let i = this.replies.length;
                while (i--) {
                    if (this.replies[i]["replyID"] == replyID) {
                        this.replies.splice(i, 1);
                    }
                }
            }
            finally {
                this.buttonDisabled = false;
                this.appService.setProgressBarStatus(false);
            }
        });
    }
    ngOnDestroy() {
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
};
TopicComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-topic",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topic.component.css */ "./src/app/topic/topic.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], TopicComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCDvidpnyRGO3iFL6rfOQ6nCfzMfvWlOzg',
        authDomain: 'srvrlss.firebaseapp.com',
        databaseURL: 'https://srvrlss.firebaseio.com',
        projectId: 'srvrlss',
        storageBucket: 'srvrlss.appspot.com',
        messagingSenderId: '921622006438'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rajveer0malviya/srvrlss/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map