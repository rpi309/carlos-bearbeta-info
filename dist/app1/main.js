(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/carlosxiong/Documents/Programs/app1/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Stage, AnimationStatus, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return Stage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationStatus", function() { return AnimationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx_r0.resultMsg == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.resultMsg, " ");
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.HigherLowerClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Higher Lower Game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.findIPClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "About You");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.aboutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.UserIP);
} }
function AppComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx_r14.UserIP == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" You are on a ", ctx_r14.UserOS, " Browsing The Internet With ", ctx_r14.UserBrowser, " ");
} }
function AppComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx_r15.UserCity == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" You Live In the State/Region of ", ctx_r15.UserState, " Located in the ", ctx_r15.UserPostal, " ");
} }
function AppComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx_r16.UserCity == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Your Public IP of ", ctx_r16.UserIP, " is from the Internet Provider: ", ctx_r16.UserCarrier, " ");
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_5_div_1_Template, 2, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_5_div_2_Template, 2, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_5_div_3_Template, 2, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stage == ctx_r2.StageType.findIP);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stage == ctx_r2.StageType.findIP);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stage == ctx_r2.StageType.findIP);
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "How To Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "1. Press the 'Start Button'");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " 2. Wait for the computer to genarate the Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "3. Enter Your Guess Between 1-100");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " 4. The computer will then return too high, too low, or correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " PS. There is a maximum limit of 10 attempts to guess the number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Side Note: Press the 'Home' icon on the top left-hand corner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " corner to go to the home page anytime in the game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Higher Lower Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.startClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.infoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "How To Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "iframe", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.versionClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Version 1.8");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_9_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.rateClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Rate This Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx_r7.loadMessage == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.loadMessage, " ");
} }
function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function AppComponent_div_12_Template_input_keyup_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.sumbitClick(); })("change", function AppComponent_div_12_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.guessNumber = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_12_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.sumbitClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r8.guessNumber);
} }
function AppComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Version 1.0: 2/8/2018");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bought Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Text at that time: \"hi\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Version 1.1: 5/8/2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Made Higher Lower Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Version 1.5: 9/1/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Bug Fixes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Added Resources Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Added IP Data Concept");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Added Home Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Version 1.6: 9/24/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Game Bug Fixes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Improved Upon IP Data; No Longer Concept");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Moved About Page From Game to Resources Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Removed Promo Code Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " No Longer Alerts if You Have the Correct Anwser, 'Too High' or 'Too Low' Text Will Show If You Have the Correct Anwser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " You Can Press The 'Enter' Key to Submit Your Guess Instead of Clicking 'Submit' On the Screen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Added Version History Page(What You Are On Right Now) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Version 1.7: 10/31/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Bouncing Pumpkins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Happy Halloween!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Version 1.8: 2/19/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Game Bug Fixes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Removed Bouncing Pumpkins, yes, ik, so late");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var Stage;
(function (Stage) {
    Stage[Stage["switchGame"] = 0] = "switchGame";
    Stage[Stage["stage1"] = 1] = "stage1";
    Stage[Stage["stage2"] = 2] = "stage2";
    Stage[Stage["howToPlay"] = 3] = "howToPlay";
    Stage[Stage["results"] = 4] = "results";
    Stage[Stage["about"] = 5] = "about";
    Stage[Stage["form1"] = 6] = "form1";
    Stage[Stage["findIP"] = 7] = "findIP";
    Stage[Stage["VersionBlog"] = 8] = "VersionBlog";
})(Stage || (Stage = {}));
var AnimationStatus;
(function (AnimationStatus) {
    AnimationStatus[AnimationStatus["AS_Started"] = 0] = "AS_Started";
    AnimationStatus[AnimationStatus["AS_Done"] = 1] = "AS_Done";
})(AnimationStatus || (AnimationStatus = {}));
class AppComponent {
    constructor(http, router, activeRouter) {
        this.http = http;
        this.router = router;
        this.activeRouter = activeRouter;
        this.title = 'HigherLower';
        //Start Stage
        this.stage = Stage.switchGame;
        this.StageType = Stage;
        //Define/Initiate Animation
        this.AnimationStatusType = AnimationStatus;
        //Set Load Message
        this.loadMessage = 'Computer Is Genarating Number';
        //Place To Store IP Geolocation
        this.UserIP = '';
        this.UserCity = '';
        this.UserState = '';
        this.UserStateAB = '';
        this.UserCountry = '';
        this.UserContinent = '';
        this.UserPostal = '';
        this.UserCarrier = '';
        this.UserLanguage = '';
        this.UserCurrency = '';
        this.UserTimeZone = '';
        this.UserTime = '';
        this.IsProxy = '';
        this.UserOS = '';
        this.UserBrowser = '';
        this.resultMsg = 'Loading...';
        //Initiates Animation
        this.animationStatus = AnimationStatus.AS_Started;
        //Sets Random and Input Number
        this.guessNumber = 0;
        this.randomNumber = 0;
        //Sets Count to Limit Amount of Tries
        this.count = 0;
    }
    //Run On Start
    ngOnInit() {
        this.getIPAddress();
        this.getOS();
        this.getBrowserName();
    }
    //From Stage One => Stage Two
    startClick() {
        let i = 2;
        this.stage = Stage.stage2;
        this.randomNumber = getRandomNumberBetween(1, 100);
        this.appendingDot(0);
        console.log('Hi, I Will Tell You The Anwsers');
        console.log('The Anwser is:', this.randomNumber);
        console.log('Dont Mind The Negitive Symbol InFront Of It');
    }
    //Go To Version Blog
    versionClick() {
        this.stage = Stage.VersionBlog;
    }
    //Go To How TO Play Page
    infoClick() {
        this.stage = Stage.howToPlay;
    }
    //Go TO FInd Ip Page
    findIPClick() {
        this.getIPAddress();
        this.getBrowserName();
        this.stage = Stage.findIP;
    }
    //Go To Stage One
    HigherLowerClick() {
        this.stage = Stage.stage1;
    }
    //Go To Resources Page
    homeClick() {
        this.resultMsg = 'Please Enter Number';
        this.stage = Stage.switchGame;
    }
    //Go To About Stage
    aboutClick() {
        this.stage = Stage.about;
    }
    //GO TO Google Form
    rateClick() {
        this.stage = Stage.form1;
    }
    //Submit
    sumbitClick() {
        this.stage = Stage.results;
        if (this.count == 10) {
            alert('You have reached the maximum amount of tries');
            this.stage = Stage.stage1;
            this.count -= 10;
        }
        this.count += 1;
        if (this.guessNumber < this.randomNumber) {
            setTimeout(() => {
                this.resultMsg = 'Too Low';
            }, 100);
            this.resultMsg = 'Checking';
        }
        if (this.guessNumber > this.randomNumber) {
            setTimeout(() => {
                this.resultMsg = 'Too High';
            }, 100);
            this.resultMsg = 'Checking';
        }
        if (this.guessNumber == this.randomNumber) {
            this.resultMsg = 'You Got It Correct!!';
            setTimeout(() => {
                this.stage = Stage.stage1;
            }, 1250);
            this.loadMessage = 'Computer Is Genarating Number';
            this.guessNumber = 0;
        }
    }
    // Get User GeoLocation Information
    getIPAddress() {
        this.http
            .get('https://extreme-ip-lookup.com/json/')
            .subscribe((res) => {
            this.UserIP = res.query;
            this.UserState = res.region;
            this.UserContinent = res.continent;
            this.UserPostal = res.country;
            this.UserCarrier = res.isp;
        });
    }
    // Get User Browser Name
    getBrowserName() {
        // Get Server Side Data Of User Agent
        let userAgentString = navigator.userAgent.toLowerCase();
        // Set Agent Dectecter Standered/ Search Keywords
        let chromeAgent = userAgentString.indexOf('chrome') > -1;
        let IExplorerAgent = userAgentString.indexOf('msie') > -1 ||
            userAgentString.indexOf('rv:') > -1;
        let firefoxAgent = userAgentString.indexOf('firefox') > -1;
        let edgeAgent = userAgentString.indexOf('edg') > -1;
        let safariAgent = userAgentString.indexOf('safari') > -1;
        // If String Overlaps
        if (chromeAgent && safariAgent)
            safariAgent = false;
        let operaAgent = userAgentString.indexOf('op') > -1;
        if (chromeAgent && operaAgent)
            chromeAgent = false;
        if (chromeAgent && safariAgent && edgeAgent) {
            chromeAgent = false;
            safariAgent = false;
        }
        //Set this.UserBrowser to Current Browser
        if (firefoxAgent)
            this.UserBrowser = 'FireFox';
        if (chromeAgent)
            this.UserBrowser = 'Chrome';
        if (safariAgent)
            this.UserBrowser = 'Safari';
        if (IExplorerAgent)
            this.UserBrowser = 'Internet Explorer';
        if (operaAgent)
            this.UserBrowser = 'Opera';
        if (edgeAgent)
            this.UserBrowser = 'Edge';
    }
    //Get Operating System Of User
    getOS() {
        var userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'], iosPlatforms = ['iPhone', 'iPad', 'iPod'];
        if (macosPlatforms.indexOf(platform) !== -1)
            this.UserOS = 'Mac';
        if (iosPlatforms.indexOf(platform) !== -1)
            this.UserOS = 'iOS Machine';
        if (windowsPlatforms.indexOf(platform) !== -1)
            this.UserOS = 'Windows Machine';
        if (/Android/.test(userAgent))
            this.UserOS = 'Android Device';
        if (!this.UserOS && /Linux/.test(platform))
            this.UserOS = 'Linux Machine';
    }
    //Appending Dot Animation
    appendingDot(num) {
        if (num >= 9) {
            this.loadMessage = 'Genarating Complete';
            return;
        }
        setTimeout(() => {
            if (num % 4 == 0) {
                while (this.loadMessage.endsWith('.')) {
                    this.loadMessage = this.loadMessage.substr(0, this.loadMessage.length - 1);
                }
            }
            else {
                this.loadMessage = this.loadMessage + '.';
            }
            this.appendingDot(num + 1);
        }, 100);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 10, consts: [[1, "game"], [1, "home-btn", 3, "click"], ["class", "results", 3, "hidden", 4, "ngIf"], ["class", "switch", 4, "ngIf"], ["class", "WhatsIp", 4, "ngIf"], ["class", "howToPlay", 4, "ngIf"], ["class", "stage1", 4, "ngIf"], [4, "ngIf"], ["class", "about", 4, "ngIf"], ["class", "loadMessage", 3, "hidden", 4, "ngIf"], ["class", "always_appear", "class", "stage1", 4, "ngIf"], ["class", "VersionBlog", 4, "ngIf"], [1, "copyright"], [1, "results"], [1, "switch"], [1, "chooseGame-title"], [1, "higherLower-btn", 3, "click"], [1, "WhatsIp"], ["class", "UserIP", 3, "hidden", 4, "ngIf"], [1, "UserIP"], [1, "howToPlay"], [1, "IntructionHeader"], [1, "intructions"], [1, "intructions1"], [1, "stage1"], [1, "game-title"], [1, "start-btn", 3, "click"], [1, "info-btn", 3, "click"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSczhGYcxC4D6OpvIy4SD3LnKwjB3nst8FlzcAnYIOUa9w8Img/viewform?embedded=true", "width", "640", "height", "1000", "frameborder", "0", "marginheight", "0", "marginwidth", "0"], [1, "about"], [1, "loadMessage"], [1, "input"], ["type", "number", 1, "input", 3, "value", "keyup.enter", "change"], [1, "submit-btn", 3, "click"], [1, "VersionBlog"], [1, "versionHeader"], [1, "points"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.homeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_4_Template, 9, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_6_Template, 17, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_div_7_Template, 7, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_div_8_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_div_9_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_div_11_Template, 2, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_div_12_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_div_13_Template, 49, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A9 2020 Carlos Xiong V1.8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.results);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.switchGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.findIP);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.howToPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.stage1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.form1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.stage2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage != ctx.StageType.stage1 && ctx.stage != ctx.StageType.howToPlay && ctx.stage != ctx.StageType.about && ctx.stage != ctx.StageType.form1 && ctx.stage != ctx.StageType.switchGame && ctx.stage != ctx.StageType.findIP && ctx.stage != ctx.StageType.VersionBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stage == ctx.StageType.VersionBlog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".game[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(45deg, blue, red);\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n  border: solid 6pt white;\n  color: white !important;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.switch[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n.chooseGame-title[_ngcontent-%COMP%] {\n  margin-top: 150pt;\n  margin-bottom: 5pt;\n  font-size: 40pt;\n}\n\n.chooseGame-subTitle[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 10pt;\n  font-size: 20pt;\n}\n\n.WhatsIp[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  margin: 20% auto;\n  font-size: 20pt;\n}\n\n.UserIP[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  margin: 0px auto;\n}\n\n.higherLower-btn[_ngcontent-%COMP%] {\n  margin: 0pt auto 10pt;\n  line-height: 1.5;\n  font-size: 10pt;\n  font-weight: 800;\n  justify-content: center;\n  border-radius: 100pt;\n  width: 120pt;\n  height: 20pt;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #ffffff;\n  border: solid 2pt white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.higherLower-btn[_ngcontent-%COMP%]:hover {\n  border: solid 2pt #14a8ff;\n  background-color: #14a8ff;\n}\n\n.versionHeader[_ngcontent-%COMP%] {\n  margin-left: 60px;\n  font-size: 30pt;\n  margin-top: 10pt;\n}\n\n.points[_ngcontent-%COMP%] {\n  margin-left: 120px;\n  margin-bottom: 5px;\n}\n\n.stage1[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n.game-title[_ngcontent-%COMP%] {\n  margin-top: 200pt;\n  margin-bottom: 0pt;\n  font-size: 40pt;\n}\n\n.start-btn[_ngcontent-%COMP%] {\n  margin: 10pt auto 0pt;\n  line-height: 1.5;\n  font-size: 40pt;\n  font-weight: 200;\n  justify-content: center;\n  border-radius: 100pt;\n  width: 200pt;\n  height: 200pt;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #ffffff;\n  border: solid 2pt white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.start-btn[_ngcontent-%COMP%]:hover {\n  border: solid 2pt #14a8ff;\n  background-color: #14a8ff;\n}\n\n.info-btn[_ngcontent-%COMP%] {\n  margin: 10pt auto 0pt;\n  line-height: 1.5;\n  font-size: 10pt;\n  font-weight: 800;\n  justify-content: center;\n  border-radius: 100pt;\n  width: 100pt;\n  height: 20pt;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #ffffff;\n  border: solid 2pt white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.info-btn[_ngcontent-%COMP%]:hover {\n  border: solid 2pt #14a8ff;\n  background-color: #14a8ff;\n}\n\n.loadMessage[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 50px;\n  margin-top: 200pt;\n  font-size: 30pt;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.input[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  width: auto;\n  height: 40pt;\n  border-radius: 15px;\n  font-size: 25pt;\n  margin-bottom: 40px;\n  text-align: center;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  margin: 10pt auto 0pt;\n  line-height: 1.5;\n  font-size: 25pt;\n  font-weight: 800;\n  justify-content: center;\n  border-radius: 100pt;\n  width: 100pt;\n  height: 50pt;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #ffffff;\n  border: solid 2pt white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover {\n  border: solid 2pt #14a8ff;\n  background-color: #14a8ff;\n}\n\n.howToPlay[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n.intructions[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 50px;\n}\n\n.intructions1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 0px;\n}\n\n.IntructionHeader[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin: 0px auto;\n  margin-top: 20px;\n  margin-bottom: 70px;\n}\n\n.results[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  margin: 0px auto;\n  margin-bottom: 50px;\n  margin-top: 250px;\n}\n\n.about[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  margin-top: 200px;\n  font-size: 20pt;\n}\n\n.about-btn[_ngcontent-%COMP%] {\n  margin: 10pt auto 0pt;\n  line-height: 1.5;\n  font-size: 10pt;\n  font-weight: 800;\n  justify-content: center;\n  border-radius: 100pt;\n  width: 100pt;\n  height: 18pt;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #ffffff;\n  border: solid 2pt white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.home-btn[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  font-size: 10pt;\n  font-weight: 800;\n  justify-content: center;\n  width: 40pt;\n  height: 40pt;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #ffffff;\n  border: solid 2pt #14a8ff;\n  background-color: #14a8ff;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.home-btn[_ngcontent-%COMP%]:hover {\n  border: solid 2pt #000000;\n}\n\n.about-btn[_ngcontent-%COMP%]:hover {\n  border: solid 2pt #14a8ff;\n  background-color: #14a8ff;\n}\n\n.rate-btn[_ngcontent-%COMP%] {\n  margin: 10pt auto 0pt;\n  line-height: 1.5;\n  font-size: 10pt;\n  font-weight: 800;\n  justify-content: center;\n  border-radius: 100pt;\n  width: 100pt;\n  height: 18pt;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #ffffff;\n  border: solid 2pt white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.rate-btn[_ngcontent-%COMP%]:hover {\n  border: #14a8ff;\n  background-color: #14a8ff;\n}\n\n.form1[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0px;\n  right: 0px;\n}\n\n.form2[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBd0VBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFyRUY7O0FBdUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXBFRjs7QUFzRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQW5FRjs7QUFzRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBbkVGOztBQXNFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0E1SGtCO0VBNkhsQix1QkFBQTtFQUNBLHFJQUFBO0FBbkVGOztBQXVFQTtFQUNFLHlCQUFBO0VBQ0EseUJBbElpQjtBQThEbkI7O0FBdUVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFwRUY7O0FBdUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQXBFRjs7QUF3RUE7RUFDRSxnQkFBQTtBQXJFRjs7QUF3RUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXJFRjs7QUF3RUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBektrQjtFQTBLbEIsdUJBQUE7RUFDQSxxSUFBQTtBQXJFRjs7QUF5RUE7RUFDRSx5QkFBQTtFQUNBLHlCQS9LaUI7QUF5R25COztBQXlFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FoTWtCO0VBaU1sQix1QkFBQTtFQUNBLHFJQUFBO0FBdEVGOztBQTBFQTtFQUNFLHlCQUFBO0VBQ0EseUJBdE1pQjtBQStIbkI7O0FBNEVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBekVGOztBQTRFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekVGOztBQTRFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0E1T2tCO0VBNk9sQix1QkFBQTtFQUNBLHFJQUFBO0FBekVGOztBQTZFQTtFQUNFLHlCQUFBO0VBQ0EseUJBbFBpQjtBQXdLbkI7O0FBOEVBO0VBQ0UsZ0JBQUE7QUEzRUY7O0FBOEVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBM0VGOztBQThFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTNFRjs7QUE4RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBM0VGOztBQThFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUEzRUY7O0FBOEVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUEzRUY7O0FBOEVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQXRTa0I7RUF1U2xCLHVCQUFBO0VBQ0EscUlBQUE7QUEzRUY7O0FBK0VBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBdFRrQjtFQXVUbEIseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFJQUFBO0FBNUVGOztBQWdGQTtFQUNFLHlCQUFBO0FBN0VGOztBQWdGQTtFQUNFLHlCQUFBO0VBQ0EseUJBalVpQjtBQW9QbkI7O0FBZ0ZBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQWxWa0I7RUFtVmxCLHVCQUFBO0VBQ0EscUlBQUE7QUE3RUY7O0FBaUZBO0VBQ0UsZUF2VmlCO0VBd1ZqQix5QkF4VmlCO0FBMFFuQjs7QUFpRkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQTlFRjs7QUFpRkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQTlFRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrR3JvdW5kQ29sb3IxOiBibHVlO1xuJGJhY2tHcm91bmRDb2xvcjI6IHJlZDtcbiR0ZXh0Q29sb3I6IHdoaXRlO1xuJGJ1dHRvbkxldHRlckNvbG9yOiAjZmZmZmZmO1xuJGJ1dHRvbkJvcmRlckNvbG9yOiB3aGl0ZTtcbiRidXR0b25Ib3ZlckNvbG9yOiAjMTRhOGZmO1xuLmdhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICRiYWNrR3JvdW5kQ29sb3IxLCAkYmFja0dyb3VuZENvbG9yMik7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IHNvbGlkIDZwdCB3aGl0ZTtcbiAgY29sb3I6ICR0ZXh0Q29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uc3dpdGNoIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLy9DaG9vc2UgR2FtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC5wdW1raW5Qbmcge1xuLy8gICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4vLyAgICAgbGVmdDogMjBweDtcbi8vICAgICBoZWlnaHQ6IDEyMHB4O1xuLy8gICAgIGJvdHRvbTogLTIwcHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMjBweDtcbi8vICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuLy8gICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuLy8gICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbi8vICAgICBhbmltYXRpb24tbmFtZTogYm91bmNlLTU7XG4vLyAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbi8vIH1cblxuLy8gLnB1bWtpblBuZzEge1xuLy8gICAgIHJpZ2h0OiAyMHB4O1xuLy8gICAgIGhlaWdodDogMTIwcHg7XG4vLyAgICAgYm90dG9tOiAtMjBweDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEyMHB4O1xuLy8gICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4vLyAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4vLyAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuLy8gICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2UtNTtcbi8vICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIG5ldy1pdGVtLWFuaW1hdGlvbiB7XG4vLyAgICAgZnJvbSB7XG4vLyAgICAgICAgIG9wYWNpdHk6IDA7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbi8vICAgICB9XG4vLyAgICAgdG8ge1xuLy8gICAgICAgICBvcGFjaXR5OiAxO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzYwcHgpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQGtleWZyYW1lcyBib3VuY2UtNSB7XG4vLyAgICAgMCUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4vLyAgICAgfVxuLy8gICAgIDEwJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAuOSkgdHJhbnNsYXRlWSgwKTtcbi8vICAgICB9XG4vLyAgICAgMzAlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSwgMS4xKSB0cmFuc2xhdGVZKC0xMDBweCk7XG4vLyAgICAgfVxuLy8gICAgIDUwJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAwLjkpIHRyYW5zbGF0ZVkoMCk7XG4vLyAgICAgfVxuLy8gICAgIDU3JSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAuOSkgdHJhbnNsYXRlWSgtN3B4KTtcbi8vICAgICB9XG4vLyAgICAgNjQlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIC45KSB0cmFuc2xhdGVZKDApO1xuLy8gICAgIH1oXG4vLyAgICAgMTAwJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vU1RBR0UgT05FLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmNob29zZUdhbWUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNTBwdDtcbiAgbWFyZ2luLWJvdHRvbTogNXB0O1xuICBmb250LXNpemU6IDQwcHQ7XG59XG4uY2hvb3NlR2FtZS1zdWJUaXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBwdDtcbiAgZm9udC1zaXplOiAyMHB0O1xufVxuLldoYXRzSXAge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW46IDIwJSBhdXRvO1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5Vc2VySVAge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uaGlnaGVyTG93ZXItYnRuIHtcbiAgbWFyZ2luOiAwcHQgYXV0byAxMHB0O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMDBwdDtcbiAgd2lkdGg6IDEyMHB0O1xuICBoZWlnaHQ6IDIwcHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICRidXR0b25MZXR0ZXJDb2xvcjtcbiAgYm9yZGVyOiBzb2xpZCAycHQgJGJ1dHRvbkJvcmRlckNvbG9yO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oaWdoZXJMb3dlci1idG46aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIDJwdCAkYnV0dG9uSG92ZXJDb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkhvdmVyQ29sb3I7XG59XG5cbi52ZXJzaW9uSGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgbWFyZ2luLXRvcDogMTBwdDtcbn1cblxuLnBvaW50cyB7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vL1NUQUdFIE9ORS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5zdGFnZTEge1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIwMHB0O1xuICBtYXJnaW4tYm90dG9tOiAwcHQ7XG4gIGZvbnQtc2l6ZTogNDBwdDtcbn1cblxuLnN0YXJ0LWJ0biB7XG4gIG1hcmdpbjogMTBwdCBhdXRvIDBwdDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiA0MHB0O1xuICBmb250LXdlaWdodDogMjAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHQ7XG4gIHdpZHRoOiAyMDBwdDtcbiAgaGVpZ2h0OiAyMDBwdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJGJ1dHRvbkxldHRlckNvbG9yO1xuICBib3JkZXI6IHNvbGlkIDJwdCAkYnV0dG9uQm9yZGVyQ29sb3I7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLnN0YXJ0LWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogc29saWQgMnB0ICRidXR0b25Ib3ZlckNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uSG92ZXJDb2xvcjtcbn1cblxuLmluZm8tYnRuIHtcbiAgbWFyZ2luOiAxMHB0IGF1dG8gMHB0O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMDBwdDtcbiAgd2lkdGg6IDEwMHB0O1xuICBoZWlnaHQ6IDIwcHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICRidXR0b25MZXR0ZXJDb2xvcjtcbiAgYm9yZGVyOiBzb2xpZCAycHQgJGJ1dHRvbkJvcmRlckNvbG9yO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvLWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogc29saWQgMnB0ICRidXR0b25Ib3ZlckNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uSG92ZXJDb2xvcjtcbn1cblxuLy9TVEFHRSBPTkUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1NUQUdFIFRXTy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5sb2FkTWVzc2FnZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyMDBwdDtcbiAgZm9udC1zaXplOiAzMHB0O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5pbnB1dCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDQwcHQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjVwdDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMTBwdCBhdXRvIDBwdDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAyNXB0O1xuICBmb250LXdlaWdodDogODAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHQ7XG4gIHdpZHRoOiAxMDBwdDtcbiAgaGVpZ2h0OiA1MHB0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAkYnV0dG9uTGV0dGVyQ29sb3I7XG4gIGJvcmRlcjogc29saWQgMnB0ICRidXR0b25Cb3JkZXJDb2xvcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3VibWl0LWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogc29saWQgMnB0ICRidXR0b25Ib3ZlckNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uSG92ZXJDb2xvcjtcbn1cblxuLy9TVEFHRSBUV08tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uaG93VG9QbGF5IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmludHJ1Y3Rpb25zIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uaW50cnVjdGlvbnMxIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5JbnRydWN0aW9uSGVhZGVyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4ucmVzdWx0cyB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMjUwcHg7XG59XG5cbi5hYm91dCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5hYm91dC1idG4ge1xuICBtYXJnaW46IDEwcHQgYXV0byAwcHQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB0O1xuICB3aWR0aDogMTAwcHQ7XG4gIGhlaWdodDogMThwdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJGJ1dHRvbkxldHRlckNvbG9yO1xuICBib3JkZXI6IHNvbGlkIDJwdCAkYnV0dG9uQm9yZGVyQ29sb3I7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLmhvbWUtYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBmb250LXdlaWdodDogODAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcHQ7XG4gIGhlaWdodDogNDBwdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJGJ1dHRvbkxldHRlckNvbG9yO1xuICBib3JkZXI6IHNvbGlkIDJwdCAjMTRhOGZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRhOGZmO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob21lLWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogc29saWQgMnB0ICMwMDAwMDA7XG59XG5cbi5hYm91dC1idG46aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIDJwdCAkYnV0dG9uSG92ZXJDb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkhvdmVyQ29sb3I7XG59XG5cbi5yYXRlLWJ0biB7XG4gIG1hcmdpbjogMTBwdCBhdXRvIDBwdDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBmb250LXdlaWdodDogODAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHQ7XG4gIHdpZHRoOiAxMDBwdDtcbiAgaGVpZ2h0OiAxOHB0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAkYnV0dG9uTGV0dGVyQ29sb3I7XG4gIGJvcmRlcjogc29saWQgMnB0ICRidXR0b25Cb3JkZXJDb2xvcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmF0ZS1idG46aG92ZXIge1xuICBib3JkZXI6ICRidXR0b25Ib3ZlckNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uSG92ZXJDb2xvcjtcbn1cblxuLmZvcm0xIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4uZm9ybTIge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();
//Get Random Number
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Delay Time
function delay(milliseconds) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(resolve, milliseconds);
        });
    });
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map