/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_comp_account_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__central_comp_central_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_comp_header_comp_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_comp_list_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logo_comp_logo_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_comp_menu_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__statistic_comp_statistic_component__ = __webpack_require__(7);
/**
 * Created by amurav on 23.03.2017.
 */










const compApp = angular.module('spApp.components',[])
    .component('listComp', __WEBPACK_IMPORTED_MODULE_3__list_comp_list_component__["a" /* listComp */])
    .component('headerComp', __WEBPACK_IMPORTED_MODULE_2__header_comp_header_comp_component__["a" /* headerComp */])
    .component('accountComp', __WEBPACK_IMPORTED_MODULE_0__account_comp_account_component__["a" /* accountComp */])
    .component('logoComp', __WEBPACK_IMPORTED_MODULE_4__logo_comp_logo_component__["a" /* logoComp */])
    .component('menuComp', __WEBPACK_IMPORTED_MODULE_5__menu_comp_menu_component__["a" /* menuComp */])
    .component('statisticComp', __WEBPACK_IMPORTED_MODULE_6__statistic_comp_statistic_component__["a" /* statisticComp */])
    .component('centralComp', __WEBPACK_IMPORTED_MODULE_1__central_comp_central_component__["a" /* centralComp */]).name;
/* harmony export (immutable) */ __webpack_exports__["a"] = compApp;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const accountComp = {
    templateUrl:'components/account-comp/account.template.html',
    controller: function AccountCompController(){
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = accountComp;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */

const centralComp = {
    templateUrl:'components/central-comp/central.template.html',
    controller: function CentralCompController(){
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = centralComp;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 22.03.2017.
 */
const headerComp ={
    templateUrl:'components/header-comp/header-comp.template.html',
    controller: function HeaderCompController(){
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = headerComp;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 22.03.2017.
 */
const listComp = {
    templateUrl: 'components/list-comp/list.template.html',
    controller: function DocListController($http){
        var self = this;
        self.docs = [
            {
                name: 'Doc 1',
                type: '.txt'
            },
            {
                name: 'Doc 2',
                type: '.txt'
            },
            {
                name: 'Doc 3',
                type: '.txt'
            },
            {
                name: 'Doc 4',
                type: '.txt'
            },
            {
                name: 'Doc 1',
                type: '.jpg'
            },
            {
                name: 'Doc 2',
                type: '.jpg'
            },
            {
                name: 'Doc 3',
                type: '.jpg'
            },
            {
                name: 'Doc 4',
                type: '.jpg'
            },
            {
                name: 'Doc 1',
                type: '.req'
            },
            {
                name: 'Doc 2',
                type: '.req'
            },
            {
                name: 'Doc 3',
                type: '.req'
            },
            {
                name: 'Doc 4',
                type: '.req'
            }
        ];

    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = listComp;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const logoComp = {
    templateUrl:'components/logo-comp/logo.template.html',
    controller: function LogoCompController(){
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = logoComp;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const menuComp = {
    templateUrl:'components/menu-comp/menu.template.html',
    controller: function MenuCompController(){
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = menuComp;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const statisticComp = {
    templateUrl:'components/statistic-comp/statistic.template.html',
    controller: function StatisticCompController(){
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = statisticComp;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index_js__ = __webpack_require__(0);
/**
 * Created by amurav on 23.03.2017.
 */



angular.module('spApp',[__WEBPACK_IMPORTED_MODULE_0__components_index_js__["a" /* compApp */]]);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5NTYyNjcyYzYzZmEyNDBjZDQ3OSIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hY2NvdW50LWNvbXAvYWNjb3VudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY2VudHJhbC1jb21wL2NlbnRyYWwuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci1jb21wL2hlYWRlci1jb21wLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9saXN0LWNvbXAvbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbG9nby1jb21wL2xvZ28uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUtY29tcC9tZW51LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWMtY29tcC9zdGF0aXN0aWMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NTYyNjcyYzYzZmEyNDBjZDQ3OSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHthY2NvdW50Q29tcH0gZnJvbSAnLi9hY2NvdW50LWNvbXAvYWNjb3VudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge2NlbnRyYWxDb21wfSBmcm9tICcuL2NlbnRyYWwtY29tcC9jZW50cmFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7aGVhZGVyQ29tcH0gZnJvbSAnLi9oZWFkZXItY29tcC9oZWFkZXItY29tcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge2xpc3RDb21wfSBmcm9tICcuL2xpc3QtY29tcC9saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7bG9nb0NvbXB9IGZyb20gJy4vbG9nby1jb21wL2xvZ28uY29tcG9uZW50JztcclxuaW1wb3J0IHttZW51Q29tcH0gZnJvbSAnLi9tZW51LWNvbXAvbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQge3N0YXRpc3RpY0NvbXB9IGZyb20gJy4vc3RhdGlzdGljLWNvbXAvc3RhdGlzdGljLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb21wQXBwID0gYW5ndWxhci5tb2R1bGUoJ3NwQXBwLmNvbXBvbmVudHMnLFtdKVxyXG4gICAgLmNvbXBvbmVudCgnbGlzdENvbXAnLCBsaXN0Q29tcClcclxuICAgIC5jb21wb25lbnQoJ2hlYWRlckNvbXAnLCBoZWFkZXJDb21wKVxyXG4gICAgLmNvbXBvbmVudCgnYWNjb3VudENvbXAnLCBhY2NvdW50Q29tcClcclxuICAgIC5jb21wb25lbnQoJ2xvZ29Db21wJywgbG9nb0NvbXApXHJcbiAgICAuY29tcG9uZW50KCdtZW51Q29tcCcsIG1lbnVDb21wKVxyXG4gICAgLmNvbXBvbmVudCgnc3RhdGlzdGljQ29tcCcsIHN0YXRpc3RpY0NvbXApXHJcbiAgICAuY29tcG9uZW50KCdjZW50cmFsQ29tcCcsIGNlbnRyYWxDb21wKS5uYW1lO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFjY291bnRDb21wID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6J2NvbXBvbmVudHMvYWNjb3VudC1jb21wL2FjY291bnQudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBBY2NvdW50Q29tcENvbnRyb2xsZXIoKXtcclxuICAgIH1cclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL2FjY291bnQtY29tcC9hY2NvdW50LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjMuMDMuMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgY2VudHJhbENvbXAgPSB7XHJcbiAgICB0ZW1wbGF0ZVVybDonY29tcG9uZW50cy9jZW50cmFsLWNvbXAvY2VudHJhbC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIENlbnRyYWxDb21wQ29udHJvbGxlcigpe1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL2NlbnRyYWwtY29tcC9jZW50cmFsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjIuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJDb21wID17XHJcbiAgICB0ZW1wbGF0ZVVybDonY29tcG9uZW50cy9oZWFkZXItY29tcC9oZWFkZXItY29tcC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIEhlYWRlckNvbXBDb250cm9sbGVyKCl7XHJcbiAgICB9XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9oZWFkZXItY29tcC9oZWFkZXItY29tcC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDIyLjAzLjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlzdENvbXAgPSB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvbGlzdC1jb21wL2xpc3QudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBEb2NMaXN0Q29udHJvbGxlcigkaHR0cCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuZG9jcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAxJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcudHh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDInLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy50eHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnR4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyA0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcudHh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDEnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5qcGcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLmpwZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAzJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcuanBnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5qcGcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMScsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnJlcSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAyJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcucmVxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDMnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5yZXEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgNCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnJlcSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgfVxyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvbGlzdC1jb21wL2xpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvZ29Db21wID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6J2NvbXBvbmVudHMvbG9nby1jb21wL2xvZ28udGVtcGxhdGUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBMb2dvQ29tcENvbnRyb2xsZXIoKXtcclxuICAgIH1cclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL2xvZ28tY29tcC9sb2dvLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjMuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBtZW51Q29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL21lbnUtY29tcC9tZW51LnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gTWVudUNvbXBDb250cm9sbGVyKCl7XHJcbiAgICB9XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9tZW51LWNvbXAvbWVudS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDIzLjAzLjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RhdGlzdGljQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL3N0YXRpc3RpYy1jb21wL3N0YXRpc3RpYy50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIFN0YXRpc3RpY0NvbXBDb250cm9sbGVyKCl7XHJcbiAgICB9XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWMtY29tcC9zdGF0aXN0aWMuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQge2NvbXBBcHB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleC5qcyc7XHJcbmFuZ3VsYXIubW9kdWxlKCdzcEFwcCcsW2NvbXBBcHBdKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Iiwic291cmNlUm9vdCI6IiJ9