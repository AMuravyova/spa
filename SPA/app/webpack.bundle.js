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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 30.03.2017.
 */
class ParentFile {
    constructor() {}
    // download = () => {
    // };
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ParentFile;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_comp_account_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_comp_header_comp_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_comp_list_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logo_comp_logo_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_comp_menu_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__statistic_comp_statistic_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__singin_comp_singin_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_form_comp_accountform_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_comp_common_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_file_comp_addfile_component__ = __webpack_require__(18);
/**
 * Created by amurav on 23.03.2017.
 */











const compApp = angular.module('spApp.components', []).component('listComp', __WEBPACK_IMPORTED_MODULE_2__list_comp_list_component__["a" /* listComp */]).component('headerComp', __WEBPACK_IMPORTED_MODULE_1__header_comp_header_comp_component__["a" /* headerComp */]).component('accountComp', __WEBPACK_IMPORTED_MODULE_0__account_comp_account_component__["a" /* accountComp */]).component('logoComp', __WEBPACK_IMPORTED_MODULE_3__logo_comp_logo_component__["a" /* logoComp */]).component('menuComp', __WEBPACK_IMPORTED_MODULE_4__menu_comp_menu_component__["a" /* menuComp */]).component('statisticComp', __WEBPACK_IMPORTED_MODULE_5__statistic_comp_statistic_component__["a" /* statisticComp */]).component('singinComp', __WEBPACK_IMPORTED_MODULE_6__singin_comp_singin_component__["a" /* singinComp */]).component('accountformComp', __WEBPACK_IMPORTED_MODULE_7__account_form_comp_accountform_component__["a" /* accountformComp */]).component('commonComp', __WEBPACK_IMPORTED_MODULE_8__common_comp_common_component__["a" /* commonComp */]).component('addfileComp', __WEBPACK_IMPORTED_MODULE_9__add_file_comp_addfile_component__["a" /* addfileComp */]).name;
/* harmony export (immutable) */ __webpack_exports__["a"] = compApp;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_image_file_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document_document_file_component__ = __webpack_require__(14);
/**
 * Created by amurav on 29.03.2017.
 */



//import {serviceFile} from './service.file.js';

const filesApp = angular.module('spApp.files', []).component('imagefileComp', __WEBPACK_IMPORTED_MODULE_0__image_image_file_component__["a" /* imagefileComp */]).component('docfileComp', __WEBPACK_IMPORTED_MODULE_1__document_document_file_component__["a" /* docfileComp */])
//.provider('serviceFile', serviceFile)
.name;
/* harmony export (immutable) */ __webpack_exports__["a"] = filesApp;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 28.03.2017.
 */
const Routes = ($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('page', {
        abstract: true,
        templateUrl: '../index.html'
    }).state('page.home', {
        url: '/home',
        templateUrl: '../pages/home-page/home.html'

    }).state('page.home.dashboard', {
        url: '/dashboard',
        templateUrl: '../pages/dashboard-page/dashboard.html'

    }).state('page.home.documents', {
        url: '/documents',
        templateUrl: '../pages/documents-page/documents.html'

    }).state('page.home.images', {
        url: '/images',
        templateUrl: '../pages/images-page/images.html'

    }).state('page.home.team', {
        url: '/team',
        templateUrl: '../pages/team-page/team.html'

    }).state('page.home.account', {
        url: '/account',
        templateUrl: '../pages/account-page/account.html'
    }).state('page.sing', {
        url: '/sing',
        templateUrl: '../pages/sing-page/sing.html'
    });

    //     .state('page.images.image', {
    //         url: '/:pageName',
    //         templateUrl: function ($stateParams) {
    //             return '/app/images/' +
    //                 $stateParams.pageName + '.html';
    //         }
    //     })
    //
    //     .state('page.requests.request', {
    //         url: '/:pageName',
    //         templateUrl: function ($stateParams) {
    //             return '/app/requests/' +
    //                 $stateParams.pageName + '.html';
    //         }
    //     })
    //
    //     .state('page.documents.document', {
    //     url: '/:pageName',
    //     templateUrl: function ($stateParams) {
    //         return '/app/documents/' +
    //             $stateParams.pageName + '.html';
    //     }
    // });

    $urlRouterProvider.when('', '/sing');
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Routes;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * State-based routing for AngularJS
 * @version v0.4.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
  module.exports = 'ui.router';
}

(function (window, angular, undefined) {
  /*jshint globalstrict:true*/
  /*global angular:false*/
  'use strict';

  var isDefined = angular.isDefined,
      isFunction = angular.isFunction,
      isString = angular.isString,
      isObject = angular.isObject,
      isArray = angular.isArray,
      forEach = angular.forEach,
      extend = angular.extend,
      copy = angular.copy,
      toJson = angular.toJson;

  function inherit(parent, extra) {
    return extend(new (extend(function () {}, { prototype: parent }))(), extra);
  }

  function merge(dst) {
    forEach(arguments, function (obj) {
      if (obj !== dst) {
        forEach(obj, function (value, key) {
          if (!dst.hasOwnProperty(key)) dst[key] = value;
        });
      }
    });
    return dst;
  }

  /**
   * Finds the common ancestor path between two states.
   *
   * @param {Object} first The first state.
   * @param {Object} second The second state.
   * @return {Array} Returns an array of state names in descending order, not including the root.
   */
  function ancestors(first, second) {
    var path = [];

    for (var n in first.path) {
      if (first.path[n] !== second.path[n]) break;
      path.push(first.path[n]);
    }
    return path;
  }

  /**
   * IE8-safe wrapper for `Object.keys()`.
   *
   * @param {Object} object A JavaScript object.
   * @return {Array} Returns the keys of the object as an array.
   */
  function objectKeys(object) {
    if (Object.keys) {
      return Object.keys(object);
    }
    var result = [];

    forEach(object, function (val, key) {
      result.push(key);
    });
    return result;
  }

  /**
   * IE8-safe wrapper for `Array.prototype.indexOf()`.
   *
   * @param {Array} array A JavaScript array.
   * @param {*} value A value to search the array for.
   * @return {Number} Returns the array index value of `value`, or `-1` if not present.
   */
  function indexOf(array, value) {
    if (Array.prototype.indexOf) {
      return array.indexOf(value, Number(arguments[2]) || 0);
    }
    var len = array.length >>> 0,
        from = Number(arguments[2]) || 0;
    from = from < 0 ? Math.ceil(from) : Math.floor(from);

    if (from < 0) from += len;

    for (; from < len; from++) {
      if (from in array && array[from] === value) return from;
    }
    return -1;
  }

  /**
   * Merges a set of parameters with all parameters inherited between the common parents of the
   * current state and a given destination state.
   *
   * @param {Object} currentParams The value of the current state parameters ($stateParams).
   * @param {Object} newParams The set of parameters which will be composited with inherited params.
   * @param {Object} $current Internal definition of object representing the current state.
   * @param {Object} $to Internal definition of object representing state to transition to.
   */
  function inheritParams(currentParams, newParams, $current, $to) {
    var parents = ancestors($current, $to),
        parentParams,
        inherited = {},
        inheritList = [];

    for (var i in parents) {
      if (!parents[i] || !parents[i].params) continue;
      parentParams = objectKeys(parents[i].params);
      if (!parentParams.length) continue;

      for (var j in parentParams) {
        if (indexOf(inheritList, parentParams[j]) >= 0) continue;
        inheritList.push(parentParams[j]);
        inherited[parentParams[j]] = currentParams[parentParams[j]];
      }
    }
    return extend({}, inherited, newParams);
  }

  /**
   * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
   *
   * @param {Object} a The first object.
   * @param {Object} b The second object.
   * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
   *                     it defaults to the list of keys in `a`.
   * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
   */
  function equalForKeys(a, b, keys) {
    if (!keys) {
      keys = [];
      for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
    }

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
    }
    return true;
  }

  /**
   * Returns the subset of an object, based on a list of keys.
   *
   * @param {Array} keys
   * @param {Object} values
   * @return {Boolean} Returns a subset of `values`.
   */
  function filterByKeys(keys, values) {
    var filtered = {};

    forEach(keys, function (name) {
      filtered[name] = values[name];
    });
    return filtered;
  }

  // like _.indexBy
  // when you know that your index values will be unique, or you want last-one-in to win
  function indexBy(array, propName) {
    var result = {};
    forEach(array, function (item) {
      result[item[propName]] = item;
    });
    return result;
  }

  // extracted from underscore.js
  // Return a copy of the object only containing the whitelisted properties.
  function pick(obj) {
    var copy = {};
    var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    forEach(keys, function (key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  }

  // extracted from underscore.js
  // Return a copy of the object omitting the blacklisted properties.
  function omit(obj) {
    var copy = {};
    var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    for (var key in obj) {
      if (indexOf(keys, key) == -1) copy[key] = obj[key];
    }
    return copy;
  }

  function pluck(collection, key) {
    var result = isArray(collection) ? [] : {};

    forEach(collection, function (val, i) {
      result[i] = isFunction(key) ? key(val) : val[key];
    });
    return result;
  }

  function filter(collection, callback) {
    var array = isArray(collection);
    var result = array ? [] : {};
    forEach(collection, function (val, i) {
      if (callback(val, i)) {
        result[array ? result.length : i] = val;
      }
    });
    return result;
  }

  function map(collection, callback) {
    var result = isArray(collection) ? [] : {};

    forEach(collection, function (val, i) {
      result[i] = callback(val, i);
    });
    return result;
  }

  // issue #2676 #2889
  function silenceUncaughtInPromise(promise) {
    return promise.then(undefined, function () {}) && promise;
  }

  /**
   * @ngdoc overview
   * @name ui.router.util
   *
   * @description
   * # ui.router.util sub-module
   *
   * This module is a dependency of other sub-modules. Do not include this module as a dependency
   * in your angular app (use {@link ui.router} module instead).
   *
   */
  angular.module('ui.router.util', ['ng']);

  /**
   * @ngdoc overview
   * @name ui.router.router
   * 
   * @requires ui.router.util
   *
   * @description
   * # ui.router.router sub-module
   *
   * This module is a dependency of other sub-modules. Do not include this module as a dependency
   * in your angular app (use {@link ui.router} module instead).
   */
  angular.module('ui.router.router', ['ui.router.util']);

  /**
   * @ngdoc overview
   * @name ui.router.state
   * 
   * @requires ui.router.router
   * @requires ui.router.util
   *
   * @description
   * # ui.router.state sub-module
   *
   * This module is a dependency of the main ui.router module. Do not include this module as a dependency
   * in your angular app (use {@link ui.router} module instead).
   * 
   */
  angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

  /**
   * @ngdoc overview
   * @name ui.router
   *
   * @requires ui.router.state
   *
   * @description
   * # ui.router
   * 
   * ## The main module for ui.router 
   * There are several sub-modules included with the ui.router module, however only this module is needed
   * as a dependency within your angular app. The other modules are for organization purposes. 
   *
   * The modules are:
   * * ui.router - the main "umbrella" module
   * * ui.router.router - 
   * 
   * *You'll need to include **only** this module as the dependency within your angular app.*
   * 
   * <pre>
   * <!doctype html>
   * <html ng-app="myApp">
   * <head>
   *   <script src="js/angular.js"></script>
   *   <!-- Include the ui-router script -->
   *   <script src="js/angular-ui-router.min.js"></script>
   *   <script>
   *     // ...and add 'ui.router' as a dependency
   *     var myApp = angular.module('myApp', ['ui.router']);
   *   </script>
   * </head>
   * <body>
   * </body>
   * </html>
   * </pre>
   */
  angular.module('ui.router', ['ui.router.state']);

  angular.module('ui.router.compat', ['ui.router']);

  /**
   * @ngdoc object
   * @name ui.router.util.$resolve
   *
   * @requires $q
   * @requires $injector
   *
   * @description
   * Manages resolution of (acyclic) graphs of promises.
   */
  $Resolve.$inject = ['$q', '$injector'];
  function $Resolve($q, $injector) {

    var VISIT_IN_PROGRESS = 1,
        VISIT_DONE = 2,
        NOTHING = {},
        NO_DEPENDENCIES = [],
        NO_LOCALS = NOTHING,
        NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });

    /**
     * @ngdoc function
     * @name ui.router.util.$resolve#study
     * @methodOf ui.router.util.$resolve
     *
     * @description
     * Studies a set of invocables that are likely to be used multiple times.
     * <pre>
     * $resolve.study(invocables)(locals, parent, self)
     * </pre>
     * is equivalent to
     * <pre>
     * $resolve.resolve(invocables, locals, parent, self)
     * </pre>
     * but the former is more efficient (in fact `resolve` just calls `study` 
     * internally).
     *
     * @param {object} invocables Invocable objects
     * @return {function} a function to pass in locals, parent and self
     */
    this.study = function (invocables) {
      if (!isObject(invocables)) throw new Error("'invocables' must be an object");
      var invocableKeys = objectKeys(invocables || {});

      // Perform a topological sort of invocables to build an ordered plan
      var plan = [],
          cycle = [],
          visited = {};
      function visit(value, key) {
        if (visited[key] === VISIT_DONE) return;

        cycle.push(key);
        if (visited[key] === VISIT_IN_PROGRESS) {
          cycle.splice(0, indexOf(cycle, key));
          throw new Error("Cyclic dependency: " + cycle.join(" -> "));
        }
        visited[key] = VISIT_IN_PROGRESS;

        if (isString(value)) {
          plan.push(key, [function () {
            return $injector.get(value);
          }], NO_DEPENDENCIES);
        } else {
          var params = $injector.annotate(value);
          forEach(params, function (param) {
            if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
          });
          plan.push(key, value, params);
        }

        cycle.pop();
        visited[key] = VISIT_DONE;
      }
      forEach(invocables, visit);
      invocables = cycle = visited = null; // plan is all that's required

      function isResolve(value) {
        return isObject(value) && value.then && value.$$promises;
      }

      return function (locals, parent, self) {
        if (isResolve(locals) && self === undefined) {
          self = parent;parent = locals;locals = null;
        }
        if (!locals) locals = NO_LOCALS;else if (!isObject(locals)) {
          throw new Error("'locals' must be an object");
        }
        if (!parent) parent = NO_PARENT;else if (!isResolve(parent)) {
          throw new Error("'parent' must be a promise returned by $resolve.resolve()");
        }

        // To complete the overall resolution, we have to wait for the parent
        // promise and for the promise for each invokable in our plan.
        var resolution = $q.defer(),
            result = silenceUncaughtInPromise(resolution.promise),
            promises = result.$$promises = {},
            values = extend({}, locals),
            wait = 1 + plan.length / 3,
            merged = false;

        silenceUncaughtInPromise(result);

        function done() {
          // Merge parent values we haven't got yet and publish our own $$values
          if (! --wait) {
            if (!merged) merge(values, parent.$$values);
            result.$$values = values;
            result.$$promises = result.$$promises || true; // keep for isResolve()
            delete result.$$inheritedValues;
            resolution.resolve(values);
          }
        }

        function fail(reason) {
          result.$$failure = reason;
          resolution.reject(reason);
        }

        // Short-circuit if parent has already failed
        if (isDefined(parent.$$failure)) {
          fail(parent.$$failure);
          return result;
        }

        if (parent.$$inheritedValues) {
          merge(values, omit(parent.$$inheritedValues, invocableKeys));
        }

        // Merge parent values if the parent has already resolved, or merge
        // parent promises and wait if the parent resolve is still in progress.
        extend(promises, parent.$$promises);
        if (parent.$$values) {
          merged = merge(values, omit(parent.$$values, invocableKeys));
          result.$$inheritedValues = omit(parent.$$values, invocableKeys);
          done();
        } else {
          if (parent.$$inheritedValues) {
            result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
          }
          parent.then(done, fail);
        }

        // Process each invocable in the plan, but ignore any where a local of the same name exists.
        for (var i = 0, ii = plan.length; i < ii; i += 3) {
          if (locals.hasOwnProperty(plan[i])) done();else invoke(plan[i], plan[i + 1], plan[i + 2]);
        }

        function invoke(key, invocable, params) {
          // Create a deferred for this invocation. Failures will propagate to the resolution as well.
          var invocation = $q.defer(),
              waitParams = 0;
          function onfailure(reason) {
            invocation.reject(reason);
            fail(reason);
          }
          // Wait for any parameter that we have a promise for (either from parent or from this
          // resolve; in that case study() will have made sure it's ordered before us in the plan).
          forEach(params, function (dep) {
            if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
              waitParams++;
              promises[dep].then(function (result) {
                values[dep] = result;
                if (! --waitParams) proceed();
              }, onfailure);
            }
          });
          if (!waitParams) proceed();
          function proceed() {
            if (isDefined(result.$$failure)) return;
            try {
              invocation.resolve($injector.invoke(invocable, self, values));
              invocation.promise.then(function (result) {
                values[key] = result;
                done();
              }, onfailure);
            } catch (e) {
              onfailure(e);
            }
          }
          // Publish promise synchronously; invocations further down in the plan may depend on it.
          promises[key] = silenceUncaughtInPromise(invocation.promise);
        }

        return result;
      };
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$resolve#resolve
     * @methodOf ui.router.util.$resolve
     *
     * @description
     * Resolves a set of invocables. An invocable is a function to be invoked via 
     * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
     * An invocable can either return a value directly,
     * or a `$q` promise. If a promise is returned it will be resolved and the 
     * resulting value will be used instead. Dependencies of invocables are resolved 
     * (in this order of precedence)
     *
     * - from the specified `locals`
     * - from another invocable that is part of this `$resolve` call
     * - from an invocable that is inherited from a `parent` call to `$resolve` 
     *   (or recursively
     * - from any ancestor `$resolve` of that parent).
     *
     * The return value of `$resolve` is a promise for an object that contains 
     * (in this order of precedence)
     *
     * - any `locals` (if specified)
     * - the resolved return values of all injectables
     * - any values inherited from a `parent` call to `$resolve` (if specified)
     *
     * The promise will resolve after the `parent` promise (if any) and all promises 
     * returned by injectables have been resolved. If any invocable 
     * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
     * invocable is rejected, the `$resolve` promise is immediately rejected with the 
     * same error. A rejection of a `parent` promise (if specified) will likewise be 
     * propagated immediately. Once the `$resolve` promise has been rejected, no 
     * further invocables will be called.
     * 
     * Cyclic dependencies between invocables are not permitted and will cause `$resolve`
     * to throw an error. As a special case, an injectable can depend on a parameter 
     * with the same name as the injectable, which will be fulfilled from the `parent` 
     * injectable of the same name. This allows inherited values to be decorated. 
     * Note that in this case any other injectable in the same `$resolve` with the same
     * dependency would see the decorated value, not the inherited value.
     *
     * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
     * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
     * exception.
     *
     * Invocables are invoked eagerly as soon as all dependencies are available. 
     * This is true even for dependencies inherited from a `parent` call to `$resolve`.
     *
     * As a special case, an invocable can be a string, in which case it is taken to 
     * be a service name to be passed to `$injector.get()`. This is supported primarily 
     * for backwards-compatibility with the `resolve` property of `$routeProvider` 
     * routes.
     *
     * @param {object} invocables functions to invoke or 
     * `$injector` services to fetch.
     * @param {object} locals  values to make available to the injectables
     * @param {object} parent  a promise returned by another call to `$resolve`.
     * @param {object} self  the `this` for the invoked methods
     * @return {object} Promise for an object that contains the resolved return value
     * of all invocables, as well as any inherited and local values.
     */
    this.resolve = function (invocables, locals, parent, self) {
      return this.study(invocables)(locals, parent, self);
    };
  }

  angular.module('ui.router.util').service('$resolve', $Resolve);

  /**
   * @ngdoc object
   * @name ui.router.util.$templateFactoryProvider
   *
   * @description
   * Provider for $templateFactory. Manages which template-loading mechanism to
   * use, and will default to the most recent one ($templateRequest on Angular
   * versions starting from 1.3, $http otherwise).
   */
  function TemplateFactoryProvider() {
    var shouldUnsafelyUseHttp = angular.version.minor < 3;

    /**
     * @ngdoc function
     * @name ui.router.util.$templateFactoryProvider#shouldUnsafelyUseHttp
     * @methodOf ui.router.util.$templateFactoryProvider
     *
     * @description
     * Forces $templateFactory to use $http instead of $templateRequest. This
     * might cause XSS, as $http doesn't enforce the regular security checks for
     * templates that have been introduced in Angular 1.3. Note that setting this
     * to false on Angular older than 1.3.x will crash, as the $templateRequest
     * service (and the security checks) are not implemented on these versions.
     *
     * See the $sce documentation, section
     * <a href="https://docs.angularjs.org/api/ng/service/$sce#impact-on-loading-templates">
     * Impact on loading templates</a> for more details about this mechanism.
     *
     * @param {boolean} value
     */
    this.shouldUnsafelyUseHttp = function (value) {
      shouldUnsafelyUseHttp = !!value;
    };

    /**
     * @ngdoc object
     * @name ui.router.util.$templateFactory
     *
     * @requires $http
     * @requires $templateCache
     * @requires $injector
     *
     * @description
     * Service. Manages loading of templates.
     */
    this.$get = ['$http', '$templateCache', '$injector', function ($http, $templateCache, $injector) {
      return new TemplateFactory($http, $templateCache, $injector, shouldUnsafelyUseHttp);
    }];
  }

  /**
   * @ngdoc object
   * @name ui.router.util.$templateFactory
   *
   * @requires $http
   * @requires $templateCache
   * @requires $injector
   *
   * @description
   * Service. Manages loading of templates.
   */
  function TemplateFactory($http, $templateCache, $injector, shouldUnsafelyUseHttp) {

    /**
     * @ngdoc function
     * @name ui.router.util.$templateFactory#fromConfig
     * @methodOf ui.router.util.$templateFactory
     *
     * @description
     * Creates a template from a configuration object. 
     *
     * @param {object} config Configuration object for which to load a template. 
     * The following properties are search in the specified order, and the first one 
     * that is defined is used to create the template:
     *
     * @param {string|object} config.template html string template or function to 
     * load via {@link ui.router.util.$templateFactory#fromString fromString}.
     * @param {string|object} config.templateUrl url to load or a function returning 
     * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
     * @param {Function} config.templateProvider function to invoke via 
     * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
     * @param {object} params  Parameters to pass to the template function.
     * @param {object} locals Locals to pass to `invoke` if the template is loaded 
     * via a `templateProvider`. Defaults to `{ params: params }`.
     *
     * @return {string|object}  The template html as a string, or a promise for 
     * that string,or `null` if no template is configured.
     */
    this.fromConfig = function (config, params, locals) {
      return isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$templateFactory#fromString
     * @methodOf ui.router.util.$templateFactory
     *
     * @description
     * Creates a template from a string or a function returning a string.
     *
     * @param {string|object} template html template as a string or function that 
     * returns an html template as a string.
     * @param {object} params Parameters to pass to the template function.
     *
     * @return {string|object} The template html as a string, or a promise for that 
     * string.
     */
    this.fromString = function (template, params) {
      return isFunction(template) ? template(params) : template;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$templateFactory#fromUrl
     * @methodOf ui.router.util.$templateFactory
     * 
     * @description
     * Loads a template from the a URL via `$http` and `$templateCache`.
     *
     * @param {string|Function} url url of the template to load, or a function 
     * that returns a url.
     * @param {Object} params Parameters to pass to the url function.
     * @return {string|Promise.<string>} The template html as a string, or a promise 
     * for that string.
     */
    this.fromUrl = function (url, params) {
      if (isFunction(url)) url = url(params);
      if (url == null) return null;else {
        if (!shouldUnsafelyUseHttp) {
          return $injector.get('$templateRequest')(url);
        } else {
          return $http.get(url, { cache: $templateCache, headers: { Accept: 'text/html' } }).then(function (response) {
            return response.data;
          });
        }
      }
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$templateFactory#fromProvider
     * @methodOf ui.router.util.$templateFactory
     *
     * @description
     * Creates a template by invoking an injectable provider function.
     *
     * @param {Function} provider Function to invoke via `$injector.invoke`
     * @param {Object} params Parameters for the template.
     * @param {Object} locals Locals to pass to `invoke`. Defaults to 
     * `{ params: params }`.
     * @return {string|Promise.<string>} The template html as a string, or a promise 
     * for that string.
     */
    this.fromProvider = function (provider, params, locals) {
      return $injector.invoke(provider, null, locals || { params: params });
    };
  }

  angular.module('ui.router.util').provider('$templateFactory', TemplateFactoryProvider);

  var $$UMFP; // reference to $UrlMatcherFactoryProvider

  /**
   * @ngdoc object
   * @name ui.router.util.type:UrlMatcher
   *
   * @description
   * Matches URLs against patterns and extracts named parameters from the path or the search
   * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
   * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
   * do not influence whether or not a URL is matched, but their values are passed through into
   * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
   *
   * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
   * syntax, which optionally allows a regular expression for the parameter to be specified:
   *
   * * `':'` name - colon placeholder
   * * `'*'` name - catch-all placeholder
   * * `'{' name '}'` - curly placeholder
   * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
   *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
   *
   * Parameter names may contain only word characters (latin letters, digits, and underscore) and
   * must be unique within the pattern (across both path and search parameters). For colon
   * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
   * number of characters other than '/'. For catch-all placeholders the path parameter matches
   * any number of characters.
   *
   * Examples:
   *
   * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
   *   trailing slashes, and patterns have to match the entire path, not just a prefix.
   * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
   *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
   * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
   * * `'/user/{id:[^/]*}'` - Same as the previous example.
   * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
   *   parameter consists of 1 to 8 hex digits.
   * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
   *   path into the parameter 'path'.
   * * `'/files/*path'` - ditto.
   * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
   *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
   *
   * @param {string} pattern  The pattern to compile into a matcher.
   * @param {Object} config  A configuration object hash:
   * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
   *   an existing UrlMatcher
   *
   * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
   * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
   *
   * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
   *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
   *   non-null) will start with this prefix.
   *
   * @property {string} source  The pattern that was passed into the constructor
   *
   * @property {string} sourcePath  The path portion of the source property
   *
   * @property {string} sourceSearch  The search portion of the source property
   *
   * @property {string} regex  The constructed regex that will be used to match against the url when
   *   it is time to determine which url will match.
   *
   * @returns {Object}  New `UrlMatcher` object
   */
  function UrlMatcher(pattern, config, parentMatcher) {
    config = extend({ params: {} }, isObject(config) ? config : {});

    // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
    //   '*' name
    //   ':' name
    //   '{' name '}'
    //   '{' name ':' regexp '}'
    // The regular expression is somewhat complicated due to the need to allow curly braces
    // inside the regular expression. The placeholder regexp breaks down as follows:
    //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
    //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
    //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
    //    [^{}\\]+                       - anything other than curly braces or backslash
    //    \\.                            - a backslash escape
    //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
    var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        compiled = '^',
        last = 0,
        m,
        segments = this.segments = [],
        parentParams = parentMatcher ? parentMatcher.params : {},
        params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
        paramNames = [];

    function addParameter(id, type, config, location) {
      paramNames.push(id);
      if (parentParams[id]) return parentParams[id];
      if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
      if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
      params[id] = new $$UMFP.Param(id, type, config, location);
      return params[id];
    }

    function quoteRegExp(string, pattern, squash, optional) {
      var surroundPattern = ['', ''],
          result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
      if (!pattern) return result;
      switch (squash) {
        case false:
          surroundPattern = ['(', ')' + (optional ? "?" : "")];break;
        case true:
          result = result.replace(/\/$/, '');
          surroundPattern = ['(?:\/(', ')|\/)?'];
          break;
        default:
          surroundPattern = ['(' + squash + "|", ')?'];break;
      }
      return result + surroundPattern[0] + pattern + surroundPattern[1];
    }

    this.source = pattern;

    // Split into static segments separated by path parameter placeholders.
    // The number of segments is always 1 more than the number of parameters.
    function matchDetails(m, isSearch) {
      var id, regexp, segment, type, cfg, arrayMode;
      id = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
      cfg = config.params[id];
      segment = pattern.substring(last, m.index);
      regexp = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);

      if (regexp) {
        type = $$UMFP.type(regexp) || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
      }

      return {
        id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
      };
    }

    var p, param, segment;
    while (m = placeholder.exec(pattern)) {
      p = matchDetails(m, false);
      if (p.segment.indexOf('?') >= 0) break; // we're into the search part

      param = addParameter(p.id, p.type, p.cfg, "path");
      compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
      segments.push(p.segment);
      last = placeholder.lastIndex;
    }
    segment = pattern.substring(last);

    // Find any search parameter names and remove them from the last segment
    var i = segment.indexOf('?');

    if (i >= 0) {
      var search = this.sourceSearch = segment.substring(i);
      segment = segment.substring(0, i);
      this.sourcePath = pattern.substring(0, last + i);

      if (search.length > 0) {
        last = 0;
        while (m = searchPlaceholder.exec(search)) {
          p = matchDetails(m, true);
          param = addParameter(p.id, p.type, p.cfg, "search");
          last = placeholder.lastIndex;
          // check if ?&
        }
      }
    } else {
      this.sourcePath = pattern;
      this.sourceSearch = '';
    }

    compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
    segments.push(segment);

    this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
    this.prefix = segments[0];
    this.$$paramNames = paramNames;
  }

  /**
   * @ngdoc function
   * @name ui.router.util.type:UrlMatcher#concat
   * @methodOf ui.router.util.type:UrlMatcher
   *
   * @description
   * Returns a new matcher for a pattern constructed by appending the path part and adding the
   * search parameters of the specified pattern to this pattern. The current pattern is not
   * modified. This can be understood as creating a pattern for URLs that are relative to (or
   * suffixes of) the current pattern.
   *
   * @example
   * The following two matchers are equivalent:
   * <pre>
   * new UrlMatcher('/user/{id}?q').concat('/details?date');
   * new UrlMatcher('/user/{id}/details?q&date');
   * </pre>
   *
   * @param {string} pattern  The pattern to append.
   * @param {Object} config  An object hash of the configuration for the matcher.
   * @returns {UrlMatcher}  A matcher for the concatenated pattern.
   */
  UrlMatcher.prototype.concat = function (pattern, config) {
    // Because order of search parameters is irrelevant, we can add our own search
    // parameters to the end of the new pattern. Parse the new pattern by itself
    // and then join the bits together, but it's much easier to do this on a string level.
    var defaultConfig = {
      caseInsensitive: $$UMFP.caseInsensitive(),
      strict: $$UMFP.strictMode(),
      squash: $$UMFP.defaultSquashPolicy()
    };
    return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
  };

  UrlMatcher.prototype.toString = function () {
    return this.source;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.type:UrlMatcher#exec
   * @methodOf ui.router.util.type:UrlMatcher
   *
   * @description
   * Tests the specified path against this matcher, and returns an object containing the captured
   * parameter values, or null if the path does not match. The returned object contains the values
   * of any search parameters that are mentioned in the pattern, but their value may be null if
   * they are not present in `searchParams`. This means that search parameters are always treated
   * as optional.
   *
   * @example
   * <pre>
   * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
   *   x: '1', q: 'hello'
   * });
   * // returns { id: 'bob', q: 'hello', r: null }
   * </pre>
   *
   * @param {string} path  The URL path to match, e.g. `$location.path()`.
   * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
   * @returns {Object}  The captured parameter values.
   */
  UrlMatcher.prototype.exec = function (path, searchParams) {
    var m = this.regexp.exec(path);
    if (!m) return null;
    searchParams = searchParams || {};

    var paramNames = this.parameters(),
        nTotal = paramNames.length,
        nPath = this.segments.length - 1,
        values = {},
        i,
        j,
        cfg,
        paramName;

    if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

    function decodePathArray(string) {
      function reverseString(str) {
        return str.split("").reverse().join("");
      }
      function unquoteDashes(str) {
        return str.replace(/\\-/g, "-");
      }

      var split = reverseString(string).split(/-(?!\\)/);
      var allReversed = map(split, reverseString);
      return map(allReversed, unquoteDashes).reverse();
    }

    var param, paramVal;
    for (i = 0; i < nPath; i++) {
      paramName = paramNames[i];
      param = this.params[paramName];
      paramVal = m[i + 1];
      // if the param value matches a pre-replace pair, replace the value before decoding.
      for (j = 0; j < param.replace.length; j++) {
        if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
      }
      if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
      if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
      values[paramName] = param.value(paramVal);
    }
    for (; /**/i < nTotal; i++) {
      paramName = paramNames[i];
      values[paramName] = this.params[paramName].value(searchParams[paramName]);
      param = this.params[paramName];
      paramVal = searchParams[paramName];
      for (j = 0; j < param.replace.length; j++) {
        if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
      }
      if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
      values[paramName] = param.value(paramVal);
    }

    return values;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.type:UrlMatcher#parameters
   * @methodOf ui.router.util.type:UrlMatcher
   *
   * @description
   * Returns the names of all path and search parameters of this pattern in an unspecified order.
   *
   * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
   *    pattern has no parameters, an empty array is returned.
   */
  UrlMatcher.prototype.parameters = function (param) {
    if (!isDefined(param)) return this.$$paramNames;
    return this.params[param] || null;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.type:UrlMatcher#validates
   * @methodOf ui.router.util.type:UrlMatcher
   *
   * @description
   * Checks an object hash of parameters to validate their correctness according to the parameter
   * types of this `UrlMatcher`.
   *
   * @param {Object} params The object hash of parameters to validate.
   * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
   */
  UrlMatcher.prototype.validates = function (params) {
    return this.params.$$validates(params);
  };

  /**
   * @ngdoc function
   * @name ui.router.util.type:UrlMatcher#format
   * @methodOf ui.router.util.type:UrlMatcher
   *
   * @description
   * Creates a URL that matches this pattern by substituting the specified values
   * for the path and search parameters. Null values for path parameters are
   * treated as empty strings.
   *
   * @example
   * <pre>
   * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
   * // returns '/user/bob?q=yes'
   * </pre>
   *
   * @param {Object} values  the values to substitute for the parameters in this pattern.
   * @returns {string}  the formatted URL (path and optionally search part).
   */
  UrlMatcher.prototype.format = function (values) {
    values = values || {};
    var segments = this.segments,
        params = this.parameters(),
        paramset = this.params;
    if (!this.validates(values)) return null;

    var i,
        search = false,
        nPath = segments.length - 1,
        nTotal = params.length,
        result = segments[0];

    function encodeDashes(str) {
      // Replace dashes with encoded "\-"
      return encodeURIComponent(str).replace(/-/g, function (c) {
        return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }

    for (i = 0; i < nTotal; i++) {
      var isPathParam = i < nPath;
      var name = params[i],
          param = paramset[name],
          value = param.value(values[name]);
      var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
      var squash = isDefaultValue ? param.squash : false;
      var encoded = param.type.encode(value);

      if (isPathParam) {
        var nextSegment = segments[i + 1];
        var isFinalPathParam = i + 1 === nPath;

        if (squash === false) {
          if (encoded != null) {
            if (isArray(encoded)) {
              result += map(encoded, encodeDashes).join("-");
            } else {
              result += encodeURIComponent(encoded);
            }
          }
          result += nextSegment;
        } else if (squash === true) {
          var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
          result += nextSegment.match(capture)[1];
        } else if (isString(squash)) {
          result += squash + nextSegment;
        }

        if (isFinalPathParam && param.squash === true && result.slice(-1) === '/') result = result.slice(0, -1);
      } else {
        if (encoded == null || isDefaultValue && squash !== false) continue;
        if (!isArray(encoded)) encoded = [encoded];
        if (encoded.length === 0) continue;
        encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
        result += (search ? '&' : '?') + (name + '=' + encoded);
        search = true;
      }
    }

    return result;
  };

  /**
   * @ngdoc object
   * @name ui.router.util.type:Type
   *
   * @description
   * Implements an interface to define custom parameter types that can be decoded from and encoded to
   * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
   * objects when matching or formatting URLs, or comparing or validating parameter values.
   *
   * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
   * information on registering custom types.
   *
   * @param {Object} config  A configuration object which contains the custom type definition.  The object's
   *        properties will override the default methods and/or pattern in `Type`'s public interface.
   * @example
   * <pre>
   * {
   *   decode: function(val) { return parseInt(val, 10); },
   *   encode: function(val) { return val && val.toString(); },
   *   equals: function(a, b) { return this.is(a) && a === b; },
   *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
   *   pattern: /\d+/
   * }
   * </pre>
   *
   * @property {RegExp} pattern The regular expression pattern used to match values of this type when
   *           coming from a substring of a URL.
   *
   * @returns {Object}  Returns a new `Type` object.
   */
  function Type(config) {
    extend(this, config);
  }

  /**
   * @ngdoc function
   * @name ui.router.util.type:Type#is
   * @methodOf ui.router.util.type:Type
   *
   * @description
   * Detects whether a value is of a particular type. Accepts a native (decoded) value
   * and determines whether it matches the current `Type` object.
   *
   * @param {*} val  The value to check.
   * @param {string} key  Optional. If the type check is happening in the context of a specific
   *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
   *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
   * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
   */
  Type.prototype.is = function (val, key) {
    return true;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.type:Type#encode
   * @methodOf ui.router.util.type:Type
   *
   * @description
   * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
   * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
   * only needs to be a representation of `val` that has been coerced to a string.
   *
   * @param {*} val  The value to encode.
   * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
   *        meta-programming of `Type` objects.
   * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
   */
  Type.prototype.encode = function (val, key) {
    return val;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.type:Type#decode
   * @methodOf ui.router.util.type:Type
   *
   * @description
   * Converts a parameter value (from URL string or transition param) to a custom/native value.
   *
   * @param {string} val  The URL parameter value to decode.
   * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
   *        meta-programming of `Type` objects.
   * @returns {*}  Returns a custom representation of the URL parameter value.
   */
  Type.prototype.decode = function (val, key) {
    return val;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.type:Type#equals
   * @methodOf ui.router.util.type:Type
   *
   * @description
   * Determines whether two decoded values are equivalent.
   *
   * @param {*} a  A value to compare against.
   * @param {*} b  A value to compare against.
   * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
   */
  Type.prototype.equals = function (a, b) {
    return a == b;
  };

  Type.prototype.$subPattern = function () {
    var sub = this.pattern.toString();
    return sub.substr(1, sub.length - 2);
  };

  Type.prototype.pattern = /.*/;

  Type.prototype.toString = function () {
    return "{Type:" + this.name + "}";
  };

  /** Given an encoded string, or a decoded object, returns a decoded object */
  Type.prototype.$normalize = function (val) {
    return this.is(val) ? val : this.decode(val);
  };

  /*
   * Wraps an existing custom Type as an array of Type, depending on 'mode'.
   * e.g.:
   * - urlmatcher pattern "/path?{queryParam[]:int}"
   * - url: "/path?queryParam=1&queryParam=2
   * - $stateParams.queryParam will be [1, 2]
   * if `mode` is "auto", then
   * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
   * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
   */
  Type.prototype.$asArray = function (mode, isSearch) {
    if (!mode) return this;
    if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

    function ArrayType(type, mode) {
      function bindTo(type, callbackName) {
        return function () {
          return type[callbackName].apply(type, arguments);
        };
      }

      // Wrap non-array value as array
      function arrayWrap(val) {
        return isArray(val) ? val : isDefined(val) ? [val] : [];
      }
      // Unwrap array value for "auto" mode. Return undefined for empty array.
      function arrayUnwrap(val) {
        switch (val.length) {
          case 0:
            return undefined;
          case 1:
            return mode === "auto" ? val[0] : val;
          default:
            return val;
        }
      }
      function falsey(val) {
        return !val;
      }

      // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
      function arrayHandler(callback, allTruthyMode) {
        return function handleArray(val) {
          if (isArray(val) && val.length === 0) return val;
          val = arrayWrap(val);
          var result = map(val, callback);
          if (allTruthyMode === true) return filter(result, falsey).length === 0;
          return arrayUnwrap(result);
        };
      }

      // Wraps type (.equals) functions to operate on each value of an array
      function arrayEqualsHandler(callback) {
        return function handleArray(val1, val2) {
          var left = arrayWrap(val1),
              right = arrayWrap(val2);
          if (left.length !== right.length) return false;
          for (var i = 0; i < left.length; i++) {
            if (!callback(left[i], right[i])) return false;
          }
          return true;
        };
      }

      this.encode = arrayHandler(bindTo(type, 'encode'));
      this.decode = arrayHandler(bindTo(type, 'decode'));
      this.is = arrayHandler(bindTo(type, 'is'), true);
      this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
      this.pattern = type.pattern;
      this.$normalize = arrayHandler(bindTo(type, '$normalize'));
      this.name = type.name;
      this.$arrayMode = mode;
    }

    return new ArrayType(this, mode);
  };

  /**
   * @ngdoc object
   * @name ui.router.util.$urlMatcherFactory
   *
   * @description
   * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
   * is also available to providers under the name `$urlMatcherFactoryProvider`.
   */
  function $UrlMatcherFactory() {
    $$UMFP = this;

    var isCaseInsensitive = false,
        isStrictMode = true,
        defaultSquashPolicy = false;

    // Use tildes to pre-encode slashes.
    // If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
    // and bidirectional encoding/decoding fails.
    // Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
    function valToString(val) {
      return val != null ? val.toString().replace(/(~|\/)/g, function (m) {
        return { '~': '~~', '/': '~2F' }[m];
      }) : val;
    }
    function valFromString(val) {
      return val != null ? val.toString().replace(/(~~|~2F)/g, function (m) {
        return { '~~': '~', '~2F': '/' }[m];
      }) : val;
    }

    var $types = {},
        enqueue = true,
        typeQueue = [],
        injector,
        defaultTypes = {
      "string": {
        encode: valToString,
        decode: valFromString,
        // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
        // In 0.2.x, string params are optional by default for backwards compat
        is: function (val) {
          return val == null || !isDefined(val) || typeof val === "string";
        },
        pattern: /[^/]*/
      },
      "int": {
        encode: valToString,
        decode: function (val) {
          return parseInt(val, 10);
        },
        is: function (val) {
          return val !== undefined && val !== null && this.decode(val.toString()) === val;
        },
        pattern: /\d+/
      },
      "bool": {
        encode: function (val) {
          return val ? 1 : 0;
        },
        decode: function (val) {
          return parseInt(val, 10) !== 0;
        },
        is: function (val) {
          return val === true || val === false;
        },
        pattern: /0|1/
      },
      "date": {
        encode: function (val) {
          if (!this.is(val)) return undefined;
          return [val.getFullYear(), ('0' + (val.getMonth() + 1)).slice(-2), ('0' + val.getDate()).slice(-2)].join("-");
        },
        decode: function (val) {
          if (this.is(val)) return val;
          var match = this.capture.exec(val);
          return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
        },
        is: function (val) {
          return val instanceof Date && !isNaN(val.valueOf());
        },
        equals: function (a, b) {
          return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
        },
        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
      },
      "json": {
        encode: angular.toJson,
        decode: angular.fromJson,
        is: angular.isObject,
        equals: angular.equals,
        pattern: /[^/]*/
      },
      "any": { // does not encode/decode
        encode: angular.identity,
        decode: angular.identity,
        equals: angular.equals,
        pattern: /.*/
      }
    };

    function getDefaultConfig() {
      return {
        strict: isStrictMode,
        caseInsensitive: isCaseInsensitive
      };
    }

    function isInjectable(value) {
      return isFunction(value) || isArray(value) && isFunction(value[value.length - 1]);
    }

    /**
     * [Internal] Get the default value of a parameter, which may be an injectable function.
     */
    $UrlMatcherFactory.$$getDefaultValue = function (config) {
      if (!isInjectable(config.value)) return config.value;
      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
      return injector.invoke(config.value);
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$urlMatcherFactory#caseInsensitive
     * @methodOf ui.router.util.$urlMatcherFactory
     *
     * @description
     * Defines whether URL matching should be case sensitive (the default behavior), or not.
     *
     * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
     * @returns {boolean} the current value of caseInsensitive
     */
    this.caseInsensitive = function (value) {
      if (isDefined(value)) isCaseInsensitive = value;
      return isCaseInsensitive;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$urlMatcherFactory#strictMode
     * @methodOf ui.router.util.$urlMatcherFactory
     *
     * @description
     * Defines whether URLs should match trailing slashes, or not (the default behavior).
     *
     * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
     * @returns {boolean} the current value of strictMode
     */
    this.strictMode = function (value) {
      if (isDefined(value)) isStrictMode = value;
      return isStrictMode;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
     * @methodOf ui.router.util.$urlMatcherFactory
     *
     * @description
     * Sets the default behavior when generating or matching URLs with default parameter values.
     *
     * @param {string} value A string that defines the default parameter URL squashing behavior.
     *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
     *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
     *             parameter is surrounded by slashes, squash (remove) one slash from the URL
     *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
     *             the parameter value from the URL and replace it with this string.
     */
    this.defaultSquashPolicy = function (value) {
      if (!isDefined(value)) return defaultSquashPolicy;
      if (value !== true && value !== false && !isString(value)) throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
      defaultSquashPolicy = value;
      return value;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$urlMatcherFactory#compile
     * @methodOf ui.router.util.$urlMatcherFactory
     *
     * @description
     * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
     *
     * @param {string} pattern  The URL pattern.
     * @param {Object} config  The config object hash.
     * @returns {UrlMatcher}  The UrlMatcher.
     */
    this.compile = function (pattern, config) {
      return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$urlMatcherFactory#isMatcher
     * @methodOf ui.router.util.$urlMatcherFactory
     *
     * @description
     * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
     *
     * @param {Object} object  The object to perform the type check against.
     * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
     *          implementing all the same methods.
     */
    this.isMatcher = function (o) {
      if (!isObject(o)) return false;
      var result = true;

      forEach(UrlMatcher.prototype, function (val, name) {
        if (isFunction(val)) {
          result = result && isDefined(o[name]) && isFunction(o[name]);
        }
      });
      return result;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.$urlMatcherFactory#type
     * @methodOf ui.router.util.$urlMatcherFactory
     *
     * @description
     * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
     * generate URLs with typed parameters.
     *
     * @param {string} name  The type name.
     * @param {Object|Function} definition   The type definition. See
     *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
     * @param {Object|Function} definitionFn (optional) A function that is injected before the app
     *        runtime starts.  The result of this function is merged into the existing `definition`.
     *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
     *
     * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
     *
     * @example
     * This is a simple example of a custom type that encodes and decodes items from an
     * array, using the array index as the URL-encoded value:
     *
     * <pre>
     * var list = ['John', 'Paul', 'George', 'Ringo'];
     *
     * $urlMatcherFactoryProvider.type('listItem', {
     *   encode: function(item) {
     *     // Represent the list item in the URL using its corresponding index
     *     return list.indexOf(item);
     *   },
     *   decode: function(item) {
     *     // Look up the list item by index
     *     return list[parseInt(item, 10)];
     *   },
     *   is: function(item) {
     *     // Ensure the item is valid by checking to see that it appears
     *     // in the list
     *     return list.indexOf(item) > -1;
     *   }
     * });
     *
     * $stateProvider.state('list', {
     *   url: "/list/{item:listItem}",
     *   controller: function($scope, $stateParams) {
     *     console.log($stateParams.item);
     *   }
     * });
     *
     * // ...
     *
     * // Changes URL to '/list/3', logs "Ringo" to the console
     * $state.go('list', { item: "Ringo" });
     * </pre>
     *
     * This is a more complex example of a type that relies on dependency injection to
     * interact with services, and uses the parameter name from the URL to infer how to
     * handle encoding and decoding parameter values:
     *
     * <pre>
     * // Defines a custom type that gets a value from a service,
     * // where each service gets different types of values from
     * // a backend API:
     * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
     *
     *   // Matches up services to URL parameter names
     *   var services = {
     *     user: Users,
     *     post: Posts
     *   };
     *
     *   return {
     *     encode: function(object) {
     *       // Represent the object in the URL using its unique ID
     *       return object.id;
     *     },
     *     decode: function(value, key) {
     *       // Look up the object by ID, using the parameter
     *       // name (key) to call the correct service
     *       return services[key].findById(value);
     *     },
     *     is: function(object, key) {
     *       // Check that object is a valid dbObject
     *       return angular.isObject(object) && object.id && services[key];
     *     }
     *     equals: function(a, b) {
     *       // Check the equality of decoded objects by comparing
     *       // their unique IDs
     *       return a.id === b.id;
     *     }
     *   };
     * });
     *
     * // In a config() block, you can then attach URLs with
     * // type-annotated parameters:
     * $stateProvider.state('users', {
     *   url: "/users",
     *   // ...
     * }).state('users.item', {
     *   url: "/{user:dbObject}",
     *   controller: function($scope, $stateParams) {
     *     // $stateParams.user will now be an object returned from
     *     // the Users service
     *   },
     *   // ...
     * });
     * </pre>
     */
    this.type = function (name, definition, definitionFn) {
      if (!isDefined(definition)) return $types[name];
      if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

      $types[name] = new Type(extend({ name: name }, definition));
      if (definitionFn) {
        typeQueue.push({ name: name, def: definitionFn });
        if (!enqueue) flushTypeQueue();
      }
      return this;
    };

    // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
    function flushTypeQueue() {
      while (typeQueue.length) {
        var type = typeQueue.shift();
        if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
        angular.extend($types[type.name], injector.invoke(type.def));
      }
    }

    // Register default types. Store them in the prototype of $types.
    forEach(defaultTypes, function (type, name) {
      $types[name] = new Type(extend({ name: name }, type));
    });
    $types = inherit($types, {});

    /* No need to document $get, since it returns this */
    this.$get = ['$injector', function ($injector) {
      injector = $injector;
      enqueue = false;
      flushTypeQueue();

      forEach(defaultTypes, function (type, name) {
        if (!$types[name]) $types[name] = new Type(type);
      });
      return this;
    }];

    this.Param = function Param(id, type, config, location) {
      var self = this;
      config = unwrapShorthand(config);
      type = getType(config, type, location);
      var arrayMode = getArrayMode();
      type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
      if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined) config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
      var isOptional = config.value !== undefined;
      var squash = getSquashPolicy(config, isOptional);
      var replace = getReplace(config, arrayMode, isOptional, squash);

      function unwrapShorthand(config) {
        var keys = isObject(config) ? objectKeys(config) : [];
        var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 && indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
        if (isShorthand) config = { value: config };
        config.$$fn = isInjectable(config.value) ? config.value : function () {
          return config.value;
        };
        return config;
      }

      function getType(config, urlType, location) {
        if (config.type && urlType) throw new Error("Param '" + id + "' has two type configurations.");
        if (urlType) return urlType;
        if (!config.type) return location === "config" ? $types.any : $types.string;

        if (angular.isString(config.type)) return $types[config.type];
        if (config.type instanceof Type) return config.type;
        return new Type(config.type);
      }

      // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
      function getArrayMode() {
        var arrayDefaults = { array: location === "search" ? "auto" : false };
        var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
        return extend(arrayDefaults, arrayParamNomenclature, config).array;
      }

      /**
       * returns false, true, or the squash value to indicate the "default parameter url squash policy".
       */
      function getSquashPolicy(config, isOptional) {
        var squash = config.squash;
        if (!isOptional || squash === false) return false;
        if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
        if (squash === true || isString(squash)) return squash;
        throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
      }

      function getReplace(config, arrayMode, isOptional, squash) {
        var replace,
            configuredKeys,
            defaultPolicy = [{ from: "", to: isOptional || arrayMode ? undefined : "" }, { from: null, to: isOptional || arrayMode ? undefined : "" }];
        replace = isArray(config.replace) ? config.replace : [];
        if (isString(squash)) replace.push({ from: squash, to: undefined });
        configuredKeys = map(replace, function (item) {
          return item.from;
        });
        return filter(defaultPolicy, function (item) {
          return indexOf(configuredKeys, item.from) === -1;
        }).concat(replace);
      }

      /**
       * [Internal] Get the default value of a parameter, which may be an injectable function.
       */
      function $$getDefaultValue() {
        if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
        var defaultValue = injector.invoke(config.$$fn);
        if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue)) throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
        return defaultValue;
      }

      /**
       * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
       * default value, which may be the result of an injectable function.
       */
      function $value(value) {
        function hasReplaceVal(val) {
          return function (obj) {
            return obj.from === val;
          };
        }
        function $replace(value) {
          var replacement = map(filter(self.replace, hasReplaceVal(value)), function (obj) {
            return obj.to;
          });
          return replacement.length ? replacement[0] : value;
        }
        value = $replace(value);
        return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
      }

      function toString() {
        return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}";
      }

      extend(this, {
        id: id,
        type: type,
        location: location,
        array: arrayMode,
        squash: squash,
        replace: replace,
        isOptional: isOptional,
        value: $value,
        dynamic: undefined,
        config: config,
        toString: toString
      });
    };

    function ParamSet(params) {
      extend(this, params || {});
    }

    ParamSet.prototype = {
      $$new: function () {
        return inherit(this, extend(new ParamSet(), { $$parent: this }));
      },
      $$keys: function () {
        var keys = [],
            chain = [],
            parent = this,
            ignore = objectKeys(ParamSet.prototype);
        while (parent) {
          chain.push(parent);parent = parent.$$parent;
        }
        chain.reverse();
        forEach(chain, function (paramset) {
          forEach(objectKeys(paramset), function (key) {
            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
          });
        });
        return keys;
      },
      $$values: function (paramValues) {
        var values = {},
            self = this;
        forEach(self.$$keys(), function (key) {
          values[key] = self[key].value(paramValues && paramValues[key]);
        });
        return values;
      },
      $$equals: function (paramValues1, paramValues2) {
        var equal = true,
            self = this;
        forEach(self.$$keys(), function (key) {
          var left = paramValues1 && paramValues1[key],
              right = paramValues2 && paramValues2[key];
          if (!self[key].type.equals(left, right)) equal = false;
        });
        return equal;
      },
      $$validates: function $$validate(paramValues) {
        var keys = this.$$keys(),
            i,
            param,
            rawVal,
            normalized,
            encoded;
        for (i = 0; i < keys.length; i++) {
          param = this[keys[i]];
          rawVal = paramValues[keys[i]];
          if ((rawVal === undefined || rawVal === null) && param.isOptional) break; // There was no parameter value, but the param is optional
          normalized = param.type.$normalize(rawVal);
          if (!param.type.is(normalized)) return false; // The value was not of the correct Type, and could not be decoded to the correct Type
          encoded = param.type.encode(normalized);
          if (angular.isString(encoded) && !param.type.pattern.exec(encoded)) return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
        }
        return true;
      },
      $$parent: undefined
    };

    this.ParamSet = ParamSet;
  }

  // Register as a provider so it's available to other providers
  angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
  angular.module('ui.router.util').run(['$urlMatcherFactory', function ($urlMatcherFactory) {}]);

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider
   *
   * @requires ui.router.util.$urlMatcherFactoryProvider
   * @requires $locationProvider
   *
   * @description
   * `$urlRouterProvider` has the responsibility of watching `$location`. 
   * When `$location` changes it runs through a list of rules one by one until a 
   * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
   * a url in a state configuration. All urls are compiled into a UrlMatcher object.
   *
   * There are several methods on `$urlRouterProvider` that make it useful to use directly
   * in your module config.
   */
  $UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
  function $UrlRouterProvider($locationProvider, $urlMatcherFactory) {
    var rules = [],
        otherwise = null,
        interceptDeferred = false,
        listener;

    // Returns a string that is a prefix of all strings matching the RegExp
    function regExpPrefix(re) {
      var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
      return prefix != null ? prefix[1].replace(/\\(.)/g, "$1") : '';
    }

    // Interpolates matched values into a String.replace()-style pattern
    function interpolate(pattern, match) {
      return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
        return match[what === '$' ? 0 : Number(what)];
      });
    }

    /**
     * @ngdoc function
     * @name ui.router.router.$urlRouterProvider#rule
     * @methodOf ui.router.router.$urlRouterProvider
     *
     * @description
     * Defines rules that are used by `$urlRouterProvider` to find matches for
     * specific URLs.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router.router']);
     *
     * app.config(function ($urlRouterProvider) {
     *   // Here's an example of how you might allow case insensitive urls
     *   $urlRouterProvider.rule(function ($injector, $location) {
     *     var path = $location.path(),
     *         normalized = path.toLowerCase();
     *
     *     if (path !== normalized) {
     *       return normalized;
     *     }
     *   });
     * });
     * </pre>
     *
     * @param {function} rule Handler function that takes `$injector` and `$location`
     * services as arguments. You can use them to return a valid path as a string.
     *
     * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
     */
    this.rule = function (rule) {
      if (!isFunction(rule)) throw new Error("'rule' must be a function");
      rules.push(rule);
      return this;
    };

    /**
     * @ngdoc object
     * @name ui.router.router.$urlRouterProvider#otherwise
     * @methodOf ui.router.router.$urlRouterProvider
     *
     * @description
     * Defines a path that is used when an invalid route is requested.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router.router']);
     *
     * app.config(function ($urlRouterProvider) {
     *   // if the path doesn't match any of the urls you configured
     *   // otherwise will take care of routing the user to the
     *   // specified url
     *   $urlRouterProvider.otherwise('/index');
     *
     *   // Example of using function rule as param
     *   $urlRouterProvider.otherwise(function ($injector, $location) {
     *     return '/a/valid/url';
     *   });
     * });
     * </pre>
     *
     * @param {string|function} rule The url path you want to redirect to or a function 
     * rule that returns the url path. The function version is passed two params: 
     * `$injector` and `$location` services, and must return a url string.
     *
     * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
     */
    this.otherwise = function (rule) {
      if (isString(rule)) {
        var redirect = rule;
        rule = function () {
          return redirect;
        };
      } else if (!isFunction(rule)) throw new Error("'rule' must be a function");
      otherwise = rule;
      return this;
    };

    function handleIfMatch($injector, handler, match) {
      if (!match) return false;
      var result = $injector.invoke(handler, handler, { $match: match });
      return isDefined(result) ? result : true;
    }

    /**
     * @ngdoc function
     * @name ui.router.router.$urlRouterProvider#when
     * @methodOf ui.router.router.$urlRouterProvider
     *
     * @description
     * Registers a handler for a given url matching. 
     * 
     * If the handler is a string, it is
     * treated as a redirect, and is interpolated according to the syntax of match
     * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
     *
     * If the handler is a function, it is injectable. It gets invoked if `$location`
     * matches. You have the option of inject the match object as `$match`.
     *
     * The handler can return
     *
     * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
     *   will continue trying to find another one that matches.
     * - **string** which is treated as a redirect and passed to `$location.url()`
     * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router.router']);
     *
     * app.config(function ($urlRouterProvider) {
     *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
     *     if ($state.$current.navigable !== state ||
     *         !equalForKeys($match, $stateParams) {
     *      $state.transitionTo(state, $match, false);
     *     }
     *   });
     * });
     * </pre>
     *
     * @param {string|object} what The incoming path that you want to redirect.
     * @param {string|function} handler The path you want to redirect your user to.
     */
    this.when = function (what, handler) {
      var redirect,
          handlerIsString = isString(handler);
      if (isString(what)) what = $urlMatcherFactory.compile(what);

      if (!handlerIsString && !isFunction(handler) && !isArray(handler)) throw new Error("invalid 'handler' in when()");

      var strategies = {
        matcher: function (what, handler) {
          if (handlerIsString) {
            redirect = $urlMatcherFactory.compile(handler);
            handler = ['$match', function ($match) {
              return redirect.format($match);
            }];
          }
          return extend(function ($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
          }, {
            prefix: isString(what.prefix) ? what.prefix : ''
          });
        },
        regex: function (what, handler) {
          if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

          if (handlerIsString) {
            redirect = handler;
            handler = ['$match', function ($match) {
              return interpolate(redirect, $match);
            }];
          }
          return extend(function ($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path()));
          }, {
            prefix: regExpPrefix(what)
          });
        }
      };

      var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

      for (var n in check) {
        if (check[n]) return this.rule(strategies[n](what, handler));
      }

      throw new Error("invalid 'what' in when()");
    };

    /**
     * @ngdoc function
     * @name ui.router.router.$urlRouterProvider#deferIntercept
     * @methodOf ui.router.router.$urlRouterProvider
     *
     * @description
     * Disables (or enables) deferring location change interception.
     *
     * If you wish to customize the behavior of syncing the URL (for example, if you wish to
     * defer a transition but maintain the current URL), call this method at configuration time.
     * Then, at run time, call `$urlRouter.listen()` after you have configured your own
     * `$locationChangeSuccess` event handler.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router.router']);
     *
     * app.config(function ($urlRouterProvider) {
     *
     *   // Prevent $urlRouter from automatically intercepting URL changes;
     *   // this allows you to configure custom behavior in between
     *   // location changes and route synchronization:
     *   $urlRouterProvider.deferIntercept();
     *
     * }).run(function ($rootScope, $urlRouter, UserService) {
     *
     *   $rootScope.$on('$locationChangeSuccess', function(e) {
     *     // UserService is an example service for managing user state
     *     if (UserService.isLoggedIn()) return;
     *
     *     // Prevent $urlRouter's default handler from firing
     *     e.preventDefault();
     *
     *     UserService.handleLogin().then(function() {
     *       // Once the user has logged in, sync the current URL
     *       // to the router:
     *       $urlRouter.sync();
     *     });
     *   });
     *
     *   // Configures $urlRouter's listener *after* your custom listener
     *   $urlRouter.listen();
     * });
     * </pre>
     *
     * @param {boolean} defer Indicates whether to defer location change interception. Passing
              no parameter is equivalent to `true`.
     */
    this.deferIntercept = function (defer) {
      if (defer === undefined) defer = true;
      interceptDeferred = defer;
    };

    /**
     * @ngdoc object
     * @name ui.router.router.$urlRouter
     *
     * @requires $location
     * @requires $rootScope
     * @requires $injector
     * @requires $browser
     *
     * @description
     *
     */
    this.$get = $get;
    $get.$inject = ['$location', '$rootScope', '$injector', '$browser', '$sniffer'];
    function $get($location, $rootScope, $injector, $browser, $sniffer) {

      var baseHref = $browser.baseHref(),
          location = $location.url(),
          lastPushedUrl;

      function appendBasePath(url, isHtml5, absolute) {
        if (baseHref === '/') return url;
        if (isHtml5) return baseHref.slice(0, -1) + url;
        if (absolute) return baseHref.slice(1) + url;
        return url;
      }

      // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
      function update(evt) {
        if (evt && evt.defaultPrevented) return;
        var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
        lastPushedUrl = undefined;
        // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
        //if (ignoreUpdate) return true;

        function check(rule) {
          var handled = rule($injector, $location);

          if (!handled) return false;
          if (isString(handled)) $location.replace().url(handled);
          return true;
        }
        var n = rules.length,
            i;

        for (i = 0; i < n; i++) {
          if (check(rules[i])) return;
        }
        // always check otherwise last to allow dynamic updates to the set of rules
        if (otherwise) check(otherwise);
      }

      function listen() {
        listener = listener || $rootScope.$on('$locationChangeSuccess', update);
        return listener;
      }

      if (!interceptDeferred) listen();

      return {
        /**
         * @ngdoc function
         * @name ui.router.router.$urlRouter#sync
         * @methodOf ui.router.router.$urlRouter
         *
         * @description
         * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
         * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
         * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
         * with the transition by calling `$urlRouter.sync()`.
         *
         * @example
         * <pre>
         * angular.module('app', ['ui.router'])
         *   .run(function($rootScope, $urlRouter) {
         *     $rootScope.$on('$locationChangeSuccess', function(evt) {
         *       // Halt state change from even starting
         *       evt.preventDefault();
         *       // Perform custom logic
         *       var meetsRequirement = ...
         *       // Continue with the update and state transition if logic allows
         *       if (meetsRequirement) $urlRouter.sync();
         *     });
         * });
         * </pre>
         */
        sync: function () {
          update();
        },

        listen: function () {
          return listen();
        },

        update: function (read) {
          if (read) {
            location = $location.url();
            return;
          }
          if ($location.url() === location) return;

          $location.url(location);
          $location.replace();
        },

        push: function (urlMatcher, params, options) {
          var url = urlMatcher.format(params || {});

          // Handle the special hash param, if needed
          if (url !== null && params && params['#']) {
            url += '#' + params['#'];
          }

          $location.url(url);
          lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
          if (options && options.replace) $location.replace();
        },

        /**
         * @ngdoc function
         * @name ui.router.router.$urlRouter#href
         * @methodOf ui.router.router.$urlRouter
         *
         * @description
         * A URL generation method that returns the compiled URL for a given
         * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
         *
         * @example
         * <pre>
         * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
         *   person: "bob"
         * });
         * // $bob == "/about/bob";
         * </pre>
         *
         * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
         * @param {object=} params An object of parameter values to fill the matcher's required parameters.
         * @param {object=} options Options object. The options are:
         *
         * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
         *
         * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
         */
        href: function (urlMatcher, params, options) {
          if (!urlMatcher.validates(params)) return null;

          var isHtml5 = $locationProvider.html5Mode();
          if (angular.isObject(isHtml5)) {
            isHtml5 = isHtml5.enabled;
          }

          isHtml5 = isHtml5 && $sniffer.history;

          var url = urlMatcher.format(params);
          options = options || {};

          if (!isHtml5 && url !== null) {
            url = "#" + $locationProvider.hashPrefix() + url;
          }

          // Handle special hash param, if needed
          if (url !== null && params && params['#']) {
            url += '#' + params['#'];
          }

          url = appendBasePath(url, isHtml5, options.absolute);

          if (!options.absolute || !url) {
            return url;
          }

          var slash = !isHtml5 && url ? '/' : '',
              port = $location.port();
          port = port === 80 || port === 443 ? '' : ':' + port;

          return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
        }
      };
    }
  }

  angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

  /**
   * @ngdoc object
   * @name ui.router.state.$stateProvider
   *
   * @requires ui.router.router.$urlRouterProvider
   * @requires ui.router.util.$urlMatcherFactoryProvider
   *
   * @description
   * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
   * on state.
   *
   * A state corresponds to a "place" in the application in terms of the overall UI and
   * navigation. A state describes (via the controller / template / view properties) what
   * the UI looks like and does at that place.
   *
   * States often have things in common, and the primary way of factoring out these
   * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
   * nested states.
   *
   * The `$stateProvider` provides interfaces to declare these states for your app.
   */
  $StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
  function $StateProvider($urlRouterProvider, $urlMatcherFactory) {

    var root,
        states = {},
        $state,
        queue = {},
        abstractKey = 'abstract';

    // Builds state properties from definition passed to registerState()
    var stateBuilder = {

      // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
      // state.children = [];
      // if (parent) parent.children.push(state);
      parent: function (state) {
        if (isDefined(state.parent) && state.parent) return findState(state.parent);
        // regex matches any valid composite state name
        // would match "contact.list" but not "contacts"
        var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
        return compositeName ? findState(compositeName[1]) : root;
      },

      // inherit 'data' from parent and override by own values (if any)
      data: function (state) {
        if (state.parent && state.parent.data) {
          state.data = state.self.data = inherit(state.parent.data, state.data);
        }
        return state.data;
      },

      // Build a URLMatcher if necessary, either via a relative or absolute URL
      url: function (state) {
        var url = state.url,
            config = { params: state.params || {} };

        if (isString(url)) {
          if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
          return (state.parent.navigable || root).url.concat(url, config);
        }

        if (!url || $urlMatcherFactory.isMatcher(url)) return url;
        throw new Error("Invalid url '" + url + "' in state '" + state + "'");
      },

      // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
      navigable: function (state) {
        return state.url ? state : state.parent ? state.parent.navigable : null;
      },

      // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
      ownParams: function (state) {
        var params = state.url && state.url.params || new $$UMFP.ParamSet();
        forEach(state.params || {}, function (config, id) {
          if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
        });
        return params;
      },

      // Derive parameters for this state and ensure they're a super-set of parent's parameters
      params: function (state) {
        var ownParams = pick(state.ownParams, state.ownParams.$$keys());
        return state.parent && state.parent.params ? extend(state.parent.params.$$new(), ownParams) : new $$UMFP.ParamSet();
      },

      // If there is no explicit multi-view configuration, make one up so we don't have
      // to handle both cases in the view directive later. Note that having an explicit
      // 'views' property will mean the default unnamed view properties are ignored. This
      // is also a good time to resolve view names to absolute names, so everything is a
      // straight lookup at link time.
      views: function (state) {
        var views = {};

        forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
          if (name.indexOf('@') < 0) name += '@' + state.parent.name;
          view.resolveAs = view.resolveAs || state.resolveAs || '$resolve';
          views[name] = view;
        });
        return views;
      },

      // Keep a full path from the root down to this state as this is needed for state activation.
      path: function (state) {
        return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
      },

      // Speed up $state.contains() as it's used a lot
      includes: function (state) {
        var includes = state.parent ? extend({}, state.parent.includes) : {};
        includes[state.name] = true;
        return includes;
      },

      $delegates: {}
    };

    function isRelative(stateName) {
      return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
    }

    function findState(stateOrName, base) {
      if (!stateOrName) return undefined;

      var isStr = isString(stateOrName),
          name = isStr ? stateOrName : stateOrName.name,
          path = isRelative(name);

      if (path) {
        if (!base) throw new Error("No reference point given for path '" + name + "'");
        base = findState(base);

        var rel = name.split("."),
            i = 0,
            pathLength = rel.length,
            current = base;

        for (; i < pathLength; i++) {
          if (rel[i] === "" && i === 0) {
            current = base;
            continue;
          }
          if (rel[i] === "^") {
            if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
            current = current.parent;
            continue;
          }
          break;
        }
        rel = rel.slice(i).join(".");
        name = current.name + (current.name && rel ? "." : "") + rel;
      }
      var state = states[name];

      if (state && (isStr || !isStr && (state === stateOrName || state.self === stateOrName))) {
        return state;
      }
      return undefined;
    }

    function queueState(parentName, state) {
      if (!queue[parentName]) {
        queue[parentName] = [];
      }
      queue[parentName].push(state);
    }

    function flushQueuedChildren(parentName) {
      var queued = queue[parentName] || [];
      while (queued.length) {
        registerState(queued.shift());
      }
    }

    function registerState(state) {
      // Wrap a new object around the state so we can store our private details easily.
      state = inherit(state, {
        self: state,
        resolve: state.resolve || {},
        toString: function () {
          return this.name;
        }
      });

      var name = state.name;
      if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
      if (states.hasOwnProperty(name)) throw new Error("State '" + name + "' is already defined");

      // Get parent name
      var parentName = name.indexOf('.') !== -1 ? name.substring(0, name.lastIndexOf('.')) : isString(state.parent) ? state.parent : isObject(state.parent) && isString(state.parent.name) ? state.parent.name : '';

      // If parent is not registered yet, add state to queue and register later
      if (parentName && !states[parentName]) {
        return queueState(parentName, state.self);
      }

      for (var key in stateBuilder) {
        if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
      }
      states[name] = state;

      // Register the state in the global state list and with $urlRouter if necessary.
      if (!state[abstractKey] && state.url) {
        $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
          if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
            $state.transitionTo(state, $match, { inherit: true, location: false });
          }
        }]);
      }

      // Register any queued children
      flushQueuedChildren(name);

      return state;
    }

    // Checks text to see if it looks like a glob.
    function isGlob(text) {
      return text.indexOf('*') > -1;
    }

    // Returns true if glob matches current $state name.
    function doesStateMatchGlob(glob) {
      var globSegments = glob.split('.'),
          segments = $state.$current.name.split('.');

      //match single stars
      for (var i = 0, l = globSegments.length; i < l; i++) {
        if (globSegments[i] === '*') {
          segments[i] = '*';
        }
      }

      //match greedy starts
      if (globSegments[0] === '**') {
        segments = segments.slice(indexOf(segments, globSegments[1]));
        segments.unshift('**');
      }
      //match greedy ends
      if (globSegments[globSegments.length - 1] === '**') {
        segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
        segments.push('**');
      }

      if (globSegments.length != segments.length) {
        return false;
      }

      return segments.join('') === globSegments.join('');
    }

    // Implicit root state that is always active
    root = registerState({
      name: '',
      url: '^',
      views: null,
      'abstract': true
    });
    root.navigable = null;

    /**
     * @ngdoc function
     * @name ui.router.state.$stateProvider#decorator
     * @methodOf ui.router.state.$stateProvider
     *
     * @description
     * Allows you to extend (carefully) or override (at your own peril) the 
     * `stateBuilder` object used internally by `$stateProvider`. This can be used 
     * to add custom functionality to ui-router, for example inferring templateUrl 
     * based on the state name.
     *
     * When passing only a name, it returns the current (original or decorated) builder
     * function that matches `name`.
     *
     * The builder functions that can be decorated are listed below. Though not all
     * necessarily have a good use case for decoration, that is up to you to decide.
     *
     * In addition, users can attach custom decorators, which will generate new 
     * properties within the state's internal definition. There is currently no clear 
     * use-case for this beyond accessing internal states (i.e. $state.$current), 
     * however, expect this to become increasingly relevant as we introduce additional 
     * meta-programming features.
     *
     * **Warning**: Decorators should not be interdependent because the order of 
     * execution of the builder functions in non-deterministic. Builder functions 
     * should only be dependent on the state definition object and super function.
     *
     *
     * Existing builder functions and current return values:
     *
     * - **parent** `{object}` - returns the parent state object.
     * - **data** `{object}` - returns state data, including any inherited data that is not
     *   overridden by own values (if any).
     * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
     *   or `null`.
     * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
     *   navigable).
     * - **params** `{object}` - returns an array of state params that are ensured to 
     *   be a super-set of parent's params.
     * - **views** `{object}` - returns a views object where each key is an absolute view 
     *   name (i.e. "viewName@stateName") and each value is the config object 
     *   (template, controller) for the view. Even when you don't use the views object 
     *   explicitly on a state config, one is still created for you internally.
     *   So by decorating this builder function you have access to decorating template 
     *   and controller properties.
     * - **ownParams** `{object}` - returns an array of params that belong to the state, 
     *   not including any params defined by ancestor states.
     * - **path** `{string}` - returns the full path from the root down to this state. 
     *   Needed for state activation.
     * - **includes** `{object}` - returns an object that includes every state that 
     *   would pass a `$state.includes()` test.
     *
     * @example
     * <pre>
     * // Override the internal 'views' builder with a function that takes the state
     * // definition, and a reference to the internal function being overridden:
     * $stateProvider.decorator('views', function (state, parent) {
     *   var result = {},
     *       views = parent(state);
     *
     *   angular.forEach(views, function (config, name) {
     *     var autoName = (state.name + '.' + name).replace('.', '/');
     *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
     *     result[name] = config;
     *   });
     *   return result;
     * });
     *
     * $stateProvider.state('home', {
     *   views: {
     *     'contact.list': { controller: 'ListController' },
     *     'contact.item': { controller: 'ItemController' }
     *   }
     * });
     *
     * // ...
     *
     * $state.go('home');
     * // Auto-populates list and item views with /partials/home/contact/list.html,
     * // and /partials/home/contact/item.html, respectively.
     * </pre>
     *
     * @param {string} name The name of the builder function to decorate. 
     * @param {object} func A function that is responsible for decorating the original 
     * builder function. The function receives two parameters:
     *
     *   - `{object}` - state - The state config object.
     *   - `{object}` - super - The original builder function.
     *
     * @return {object} $stateProvider - $stateProvider instance
     */
    this.decorator = decorator;
    function decorator(name, func) {
      /*jshint validthis: true */
      if (isString(name) && !isDefined(func)) {
        return stateBuilder[name];
      }
      if (!isFunction(func) || !isString(name)) {
        return this;
      }
      if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
        stateBuilder.$delegates[name] = stateBuilder[name];
      }
      stateBuilder[name] = func;
      return this;
    }

    /**
     * @ngdoc function
     * @name ui.router.state.$stateProvider#state
     * @methodOf ui.router.state.$stateProvider
     *
     * @description
     * Registers a state configuration under a given state name. The stateConfig object
     * has the following acceptable properties.
     *
     * @param {string} name A unique state name, e.g. "home", "about", "contacts".
     * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
     * @param {object} stateConfig State configuration object.
     * @param {string|function=} stateConfig.template
     * <a id='template'></a>
     *   html template as a string or a function that returns
     *   an html template as a string which should be used by the uiView directives. This property 
     *   takes precedence over templateUrl.
     *   
     *   If `template` is a function, it will be called with the following parameters:
     *
     *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
     *     applying the current state
     *
     * <pre>template:
     *   "<h1>inline template definition</h1>" +
     *   "<div ui-view></div>"</pre>
     * <pre>template: function(params) {
     *       return "<h1>generated template</h1>"; }</pre>
     * </div>
     *
     * @param {string|function=} stateConfig.templateUrl
     * <a id='templateUrl'></a>
     *
     *   path or function that returns a path to an html
     *   template that should be used by uiView.
     *   
     *   If `templateUrl` is a function, it will be called with the following parameters:
     *
     *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
     *     applying the current state
     *
     * <pre>templateUrl: "home.html"</pre>
     * <pre>templateUrl: function(params) {
     *     return myTemplates[params.pageId]; }</pre>
     *
     * @param {function=} stateConfig.templateProvider
     * <a id='templateProvider'></a>
     *    Provider function that returns HTML content string.
     * <pre> templateProvider:
     *       function(MyTemplateService, params) {
     *         return MyTemplateService.getTemplate(params.pageId);
     *       }</pre>
     *
     * @param {string|function=} stateConfig.controller
     * <a id='controller'></a>
     *
     *  Controller fn that should be associated with newly
     *   related scope or the name of a registered controller if passed as a string.
     *   Optionally, the ControllerAs may be declared here.
     * <pre>controller: "MyRegisteredController"</pre>
     * <pre>controller:
     *     "MyRegisteredController as fooCtrl"}</pre>
     * <pre>controller: function($scope, MyService) {
     *     $scope.data = MyService.getData(); }</pre>
     *
     * @param {function=} stateConfig.controllerProvider
     * <a id='controllerProvider'></a>
     *
     * Injectable provider function that returns the actual controller or string.
     * <pre>controllerProvider:
     *   function(MyResolveData) {
     *     if (MyResolveData.foo)
     *       return "FooCtrl"
     *     else if (MyResolveData.bar)
     *       return "BarCtrl";
     *     else return function($scope) {
     *       $scope.baz = "Qux";
     *     }
     *   }</pre>
     *
     * @param {string=} stateConfig.controllerAs
     * <a id='controllerAs'></a>
     * 
     * A controller alias name. If present the controller will be
     *   published to scope under the controllerAs name.
     * <pre>controllerAs: "myCtrl"</pre>
     *
     * @param {string|object=} stateConfig.parent
     * <a id='parent'></a>
     * Optionally specifies the parent state of this state.
     *
     * <pre>parent: 'parentState'</pre>
     * <pre>parent: parentState // JS variable</pre>
     *
     * @param {object=} stateConfig.resolve
     * <a id='resolve'></a>
     *
     * An optional map&lt;string, function&gt; of dependencies which
     *   should be injected into the controller. If any of these dependencies are promises, 
     *   the router will wait for them all to be resolved before the controller is instantiated.
     *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
     *   and the values of the resolved promises are injected into any controllers that reference them.
     *   If any  of the promises are rejected the $stateChangeError event is fired.
     *
     *   The map object is:
     *   
     *   - key - {string}: name of dependency to be injected into controller
     *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
     *     it is injected and return value it treated as dependency. If result is a promise, it is 
     *     resolved before its value is injected into controller.
     *
     * <pre>resolve: {
     *     myResolve1:
     *       function($http, $stateParams) {
     *         return $http.get("/api/foos/"+stateParams.fooID);
     *       }
     *     }</pre>
     *
     * @param {string=} stateConfig.url
     * <a id='url'></a>
     *
     *   A url fragment with optional parameters. When a state is navigated or
     *   transitioned to, the `$stateParams` service will be populated with any 
     *   parameters that were passed.
     *
     *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
     *   more details on acceptable patterns )
     *
     * examples:
     * <pre>url: "/home"
     * url: "/users/:userid"
     * url: "/books/{bookid:[a-zA-Z_-]}"
     * url: "/books/{categoryid:int}"
     * url: "/books/{publishername:string}/{categoryid:int}"
     * url: "/messages?before&after"
     * url: "/messages?{before:date}&{after:date}"
     * url: "/messages/:mailboxid?{before:date}&{after:date}"
     * </pre>
     *
     * @param {object=} stateConfig.views
     * <a id='views'></a>
     * an optional map&lt;string, object&gt; which defined multiple views, or targets views
     * manually/explicitly.
     *
     * Examples:
     *
     * Targets three named `ui-view`s in the parent state's template
     * <pre>views: {
     *     header: {
     *       controller: "headerCtrl",
     *       templateUrl: "header.html"
     *     }, body: {
     *       controller: "bodyCtrl",
     *       templateUrl: "body.html"
     *     }, footer: {
     *       controller: "footCtrl",
     *       templateUrl: "footer.html"
     *     }
     *   }</pre>
     *
     * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
     * <pre>views: {
     *     'header@top': {
     *       controller: "msgHeaderCtrl",
     *       templateUrl: "msgHeader.html"
     *     }, 'body': {
     *       controller: "messagesCtrl",
     *       templateUrl: "messages.html"
     *     }
     *   }</pre>
     *
     * @param {boolean=} [stateConfig.abstract=false]
     * <a id='abstract'></a>
     * An abstract state will never be directly activated,
     *   but can provide inherited properties to its common children states.
     * <pre>abstract: true</pre>
     *
     * @param {function=} stateConfig.onEnter
     * <a id='onEnter'></a>
     *
     * Callback function for when a state is entered. Good way
     *   to trigger an action or dispatch an event, such as opening a dialog.
     * If minifying your scripts, make sure to explicitly annotate this function,
     * because it won't be automatically annotated by your build tools.
     *
     * <pre>onEnter: function(MyService, $stateParams) {
     *     MyService.foo($stateParams.myParam);
     * }</pre>
     *
     * @param {function=} stateConfig.onExit
     * <a id='onExit'></a>
     *
     * Callback function for when a state is exited. Good way to
     *   trigger an action or dispatch an event, such as opening a dialog.
     * If minifying your scripts, make sure to explicitly annotate this function,
     * because it won't be automatically annotated by your build tools.
     *
     * <pre>onExit: function(MyService, $stateParams) {
     *     MyService.cleanup($stateParams.myParam);
     * }</pre>
     *
     * @param {boolean=} [stateConfig.reloadOnSearch=true]
     * <a id='reloadOnSearch'></a>
     *
     * If `false`, will not retrigger the same state
     *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
     *   Useful for when you'd like to modify $location.search() without triggering a reload.
     * <pre>reloadOnSearch: false</pre>
     *
     * @param {object=} stateConfig.data
     * <a id='data'></a>
     *
     * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
     *   prototypally inherited.  In other words, adding a data property to a state adds it to
     *   the entire subtree via prototypal inheritance.
     *
     * <pre>data: {
     *     requiredRole: 'foo'
     * } </pre>
     *
     * @param {object=} stateConfig.params
     * <a id='params'></a>
     *
     * A map which optionally configures parameters declared in the `url`, or
     *   defines additional non-url parameters.  For each parameter being
     *   configured, add a configuration object keyed to the name of the parameter.
     *
     *   Each parameter configuration object may contain the following properties:
     *
     *   - ** value ** - {object|function=}: specifies the default value for this
     *     parameter.  This implicitly sets this parameter as optional.
     *
     *     When UI-Router routes to a state and no value is
     *     specified for this parameter in the URL or transition, the
     *     default value will be used instead.  If `value` is a function,
     *     it will be injected and invoked, and the return value used.
     *
     *     *Note*: `undefined` is treated as "no default value" while `null`
     *     is treated as "the default value is `null`".
     *
     *     *Shorthand*: If you only need to configure the default value of the
     *     parameter, you may use a shorthand syntax.   In the **`params`**
     *     map, instead mapping the param name to a full parameter configuration
     *     object, simply set map it to the default parameter value, e.g.:
     *
     * <pre>// define a parameter's default value
     * params: {
     *     param1: { value: "defaultValue" }
     * }
     * // shorthand default values
     * params: {
     *     param1: "defaultValue",
     *     param2: "param2Default"
     * }</pre>
     *
     *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
     *     treated as an array of values.  If you specified a Type, the value will be
     *     treated as an array of the specified Type.  Note: query parameter values
     *     default to a special `"auto"` mode.
     *
     *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
     *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
     *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
     *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
     *     value (e.g.: `{ foo: '1' }`).
     *
     * <pre>params: {
     *     param1: { array: true }
     * }</pre>
     *
     *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
     *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
     *     configured default squash policy.
     *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
     *
     *   There are three squash settings:
     *
     *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
     *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
     *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
     *       This can allow for cleaner looking URLs.
     *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
     *
     * <pre>params: {
     *     param1: {
     *       value: "defaultId",
     *       squash: true
     * } }
     * // squash "defaultValue" to "~"
     * params: {
     *     param1: {
     *       value: "defaultValue",
     *       squash: "~"
     * } }
     * </pre>
     *
     *
     * @example
     * <pre>
     * // Some state name examples
     *
     * // stateName can be a single top-level name (must be unique).
     * $stateProvider.state("home", {});
     *
     * // Or it can be a nested state name. This state is a child of the
     * // above "home" state.
     * $stateProvider.state("home.newest", {});
     *
     * // Nest states as deeply as needed.
     * $stateProvider.state("home.newest.abc.xyz.inception", {});
     *
     * // state() returns $stateProvider, so you can chain state declarations.
     * $stateProvider
     *   .state("home", {})
     *   .state("about", {})
     *   .state("contacts", {});
     * </pre>
     *
     */
    this.state = state;
    function state(name, definition) {
      /*jshint validthis: true */
      if (isObject(name)) definition = name;else definition.name = name;
      registerState(definition);
      return this;
    }

    /**
     * @ngdoc object
     * @name ui.router.state.$state
     *
     * @requires $rootScope
     * @requires $q
     * @requires ui.router.state.$view
     * @requires $injector
     * @requires ui.router.util.$resolve
     * @requires ui.router.state.$stateParams
     * @requires ui.router.router.$urlRouter
     *
     * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
     * you'd like to test against the current active state.
     * @property {object} current A reference to the state's config object. However 
     * you passed it in. Useful for accessing custom data.
     * @property {object} transition Currently pending transition. A promise that'll 
     * resolve or reject.
     *
     * @description
     * `$state` service is responsible for representing states as well as transitioning
     * between them. It also provides interfaces to ask for current state or even states
     * you're coming from.
     */
    this.$get = $get;
    $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
    function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $urlRouter, $location, $urlMatcherFactory) {

      var TransitionSupersededError = new Error('transition superseded');

      var TransitionSuperseded = silenceUncaughtInPromise($q.reject(TransitionSupersededError));
      var TransitionPrevented = silenceUncaughtInPromise($q.reject(new Error('transition prevented')));
      var TransitionAborted = silenceUncaughtInPromise($q.reject(new Error('transition aborted')));
      var TransitionFailed = silenceUncaughtInPromise($q.reject(new Error('transition failed')));

      // Handles the case where a state which is the target of a transition is not found, and the user
      // can optionally retry or defer the transition
      function handleRedirect(redirect, state, params, options) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateNotFound
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when a requested state **cannot be found** using the provided state name during transition.
         * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
         * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
         * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
         * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
         *
         * @param {Object} event Event object.
         * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
         * @param {State} fromState Current state object.
         * @param {Object} fromParams Current state params.
         *
         * @example
         *
         * <pre>
         * // somewhere, assume lazy.state has not been defined
         * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
         *
         * // somewhere else
         * $scope.$on('$stateNotFound',
         * function(event, unfoundState, fromState, fromParams){
         *     console.log(unfoundState.to); // "lazy.state"
         *     console.log(unfoundState.toParams); // {a:1, b:2}
         *     console.log(unfoundState.options); // {inherit:false} + default options
         * })
         * </pre>
         */
        var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

        if (evt.defaultPrevented) {
          $urlRouter.update();
          return TransitionAborted;
        }

        if (!evt.retry) {
          return null;
        }

        // Allow the handler to return a promise to defer state lookup retry
        if (options.$retry) {
          $urlRouter.update();
          return TransitionFailed;
        }
        var retryTransition = $state.transition = $q.when(evt.retry);

        retryTransition.then(function () {
          if (retryTransition !== $state.transition) {
            $rootScope.$broadcast('$stateChangeCancel', redirect.to, redirect.toParams, state, params);
            return TransitionSuperseded;
          }
          redirect.options.$retry = true;
          return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
        }, function () {
          return TransitionAborted;
        });
        $urlRouter.update();

        return retryTransition;
      }

      root.locals = { resolve: null, globals: { $stateParams: {} } };

      $state = {
        params: {},
        current: root.self,
        $current: root,
        transition: null
      };

      /**
       * @ngdoc function
       * @name ui.router.state.$state#reload
       * @methodOf ui.router.state.$state
       *
       * @description
       * A method that force reloads the current state. All resolves are re-resolved,
       * controllers reinstantiated, and events re-fired.
       *
       * @example
       * <pre>
       * var app angular.module('app', ['ui.router']);
       *
       * app.controller('ctrl', function ($scope, $state) {
       *   $scope.reload = function(){
       *     $state.reload();
       *   }
       * });
       * </pre>
       *
       * `reload()` is just an alias for:
       * <pre>
       * $state.transitionTo($state.current, $stateParams, { 
       *   reload: true, inherit: false, notify: true
       * });
       * </pre>
       *
       * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
       * @example
       * <pre>
       * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
       * //and current state is 'contacts.detail.item'
       * var app angular.module('app', ['ui.router']);
       *
       * app.controller('ctrl', function ($scope, $state) {
       *   $scope.reload = function(){
       *     //will reload 'contact.detail' and 'contact.detail.item' states
       *     $state.reload('contact.detail');
       *   }
       * });
       * </pre>
       *
       * `reload()` is just an alias for:
       * <pre>
       * $state.transitionTo($state.current, $stateParams, { 
       *   reload: true, inherit: false, notify: true
       * });
       * </pre>
        * @returns {promise} A promise representing the state of the new transition. See
       * {@link ui.router.state.$state#methods_go $state.go}.
       */
      $state.reload = function reload(state) {
        return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true });
      };

      /**
       * @ngdoc function
       * @name ui.router.state.$state#go
       * @methodOf ui.router.state.$state
       *
       * @description
       * Convenience method for transitioning to a new state. `$state.go` calls 
       * `$state.transitionTo` internally but automatically sets options to 
       * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
       * This allows you to easily use an absolute or relative to path and specify 
       * only the parameters you'd like to update (while letting unspecified parameters 
       * inherit from the currently active ancestor states).
       *
       * @example
       * <pre>
       * var app = angular.module('app', ['ui.router']);
       *
       * app.controller('ctrl', function ($scope, $state) {
       *   $scope.changeState = function () {
       *     $state.go('contact.detail');
       *   };
       * });
       * </pre>
       * <img src='../ngdoc_assets/StateGoExamples.png'/>
       *
       * @param {string} to Absolute state name or relative state path. Some examples:
       *
       * - `$state.go('contact.detail')` - will go to the `contact.detail` state
       * - `$state.go('^')` - will go to a parent state
       * - `$state.go('^.sibling')` - will go to a sibling state
       * - `$state.go('.child.grandchild')` - will go to grandchild state
       *
       * @param {object=} params A map of the parameters that will be sent to the state, 
       * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
       * defined parameters. Only parameters specified in the state definition can be overridden, new 
       * parameters will be ignored. This allows, for example, going to a sibling state that shares parameters
       * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
       * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
       * will get you all current parameters, etc.
       * @param {object=} options Options object. The options are:
       *
       * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
       *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
       * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
       * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
       *    defines which state to be relative from.
       * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
       * - **`reload`** (v0.2.5) - {boolean=false|string|object}, If `true` will force transition even if no state or params
       *    have changed.  It will reload the resolves and views of the current state and parent states.
       *    If `reload` is a string (or state object), the state object is fetched (by name, or object reference); and \
       *    the transition reloads the resolves and views for that matched state, and all its children states.
       *
       * @returns {promise} A promise representing the state of the new transition.
       *
       * Possible success values:
       *
       * - $state.current
       *
       * <br/>Possible rejection values:
       *
       * - 'transition superseded' - when a newer transition has been started after this one
       * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
       * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
       *   when a `$stateNotFound` `event.retry` promise errors.
       * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
       * - *resolve error* - when an error has occurred with a `resolve`
       *
       */
      $state.go = function go(to, params, options) {
        return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
      };

      /**
       * @ngdoc function
       * @name ui.router.state.$state#transitionTo
       * @methodOf ui.router.state.$state
       *
       * @description
       * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
       * uses `transitionTo` internally. `$state.go` is recommended in most situations.
       *
       * @example
       * <pre>
       * var app = angular.module('app', ['ui.router']);
       *
       * app.controller('ctrl', function ($scope, $state) {
       *   $scope.changeState = function () {
       *     $state.transitionTo('contact.detail');
       *   };
       * });
       * </pre>
       *
       * @param {string} to State name.
       * @param {object=} toParams A map of the parameters that will be sent to the state,
       * will populate $stateParams.
       * @param {object=} options Options object. The options are:
       *
       * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
       *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
       * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
       * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
       *    defines which state to be relative from.
       * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
       * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
       *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
       *    use this when you want to force a reload when *everything* is the same, including search params.
       *    if String, then will reload the state with the name given in reload, and any children.
       *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
       *
       * @returns {promise} A promise representing the state of the new transition. See
       * {@link ui.router.state.$state#methods_go $state.go}.
       */
      $state.transitionTo = function transitionTo(to, toParams, options) {
        toParams = toParams || {};
        options = extend({
          location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
        }, options || {});

        var from = $state.$current,
            fromParams = $state.params,
            fromPath = from.path;
        var evt,
            toState = findState(to, options.relative);

        // Store the hash param for later (since it will be stripped out by various methods)
        var hash = toParams['#'];

        if (!isDefined(toState)) {
          var redirect = { to: to, toParams: toParams, options: options };
          var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

          if (redirectResult) {
            return redirectResult;
          }

          // Always retry once if the $stateNotFound was not prevented
          // (handles either redirect changed or state lazy-definition)
          to = redirect.to;
          toParams = redirect.toParams;
          options = redirect.options;
          toState = findState(to, options.relative);

          if (!isDefined(toState)) {
            if (!options.relative) throw new Error("No such state '" + to + "'");
            throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
          }
        }
        if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
        if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
        if (!toState.params.$$validates(toParams)) return TransitionFailed;

        toParams = toState.params.$$values(toParams);
        to = toState;

        var toPath = to.path;

        // Starting from the root of the path, keep all levels that haven't changed
        var keep = 0,
            state = toPath[keep],
            locals = root.locals,
            toLocals = [];

        if (!options.reload) {
          while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
            locals = toLocals[keep] = state.locals;
            keep++;
            state = toPath[keep];
          }
        } else if (isString(options.reload) || isObject(options.reload)) {
          if (isObject(options.reload) && !options.reload.name) {
            throw new Error('Invalid reload state object');
          }

          var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
          if (options.reload && !reloadState) {
            throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
          }

          while (state && state === fromPath[keep] && state !== reloadState) {
            locals = toLocals[keep] = state.locals;
            keep++;
            state = toPath[keep];
          }
        }

        // If we're going to the same state and all locals are kept, we've got nothing to do.
        // But clear 'transition', as we still want to cancel any other pending transitions.
        // TODO: We may not want to bump 'transition' if we're called from a location change
        // that we've initiated ourselves, because we might accidentally abort a legitimate
        // transition initiated from code?
        if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
          if (hash) toParams['#'] = hash;
          $state.params = toParams;
          copy($state.params, $stateParams);
          copy(filterByKeys(to.params.$$keys(), $stateParams), to.locals.globals.$stateParams);
          if (options.location && to.navigable && to.navigable.url) {
            $urlRouter.push(to.navigable.url, toParams, {
              $$avoidResync: true, replace: options.location === 'replace'
            });
            $urlRouter.update(true);
          }
          $state.transition = null;
          return $q.when($state.current);
        }

        // Filter parameters before we pass them to event handlers etc.
        toParams = filterByKeys(to.params.$$keys(), toParams || {});

        // Re-add the saved hash before we start returning things or broadcasting $stateChangeStart
        if (hash) toParams['#'] = hash;

        // Broadcast start event and cancel the transition if requested
        if (options.notify) {
          /**
           * @ngdoc event
           * @name ui.router.state.$state#$stateChangeStart
           * @eventOf ui.router.state.$state
           * @eventType broadcast on root scope
           * @description
           * Fired when the state transition **begins**. You can use `event.preventDefault()`
           * to prevent the transition from happening and then the transition promise will be
           * rejected with a `'transition prevented'` value.
           *
           * @param {Object} event Event object.
           * @param {State} toState The state being transitioned to.
           * @param {Object} toParams The params supplied to the `toState`.
           * @param {State} fromState The current state, pre-transition.
           * @param {Object} fromParams The params supplied to the `fromState`.
           *
           * @example
           *
           * <pre>
           * $rootScope.$on('$stateChangeStart',
           * function(event, toState, toParams, fromState, fromParams){
           *     event.preventDefault();
           *     // transitionTo() promise will be rejected with
           *     // a 'transition prevented' error
           * })
           * </pre>
           */
          if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams, options).defaultPrevented) {
            $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
            //Don't update and resync url if there's been a new transition started. see issue #2238, #600
            if ($state.transition == null) $urlRouter.update();
            return TransitionPrevented;
          }
        }

        // Resolve locals for the remaining states, but don't update any global state just
        // yet -- if anything fails to resolve the current state needs to remain untouched.
        // We also set up an inheritance chain for the locals here. This allows the view directive
        // to quickly look up the correct definition for each view in the current state. Even
        // though we create the locals object itself outside resolveState(), it is initially
        // empty and gets filled asynchronously. We need to keep track of the promise for the
        // (fully resolved) current locals, and pass this down the chain.
        var resolved = $q.when(locals);

        for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
          locals = toLocals[l] = inherit(locals);
          resolved = resolveState(state, toParams, state === to, resolved, locals, options);
        }

        // Once everything is resolved, we are ready to perform the actual transition
        // and return a promise for the new state. We also keep track of what the
        // current promise is, so that we can detect overlapping transitions and
        // keep only the outcome of the last transition.
        var transition = $state.transition = resolved.then(function () {
          var l, entering, exiting;

          if ($state.transition !== transition) {
            $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
            return TransitionSuperseded;
          }

          // Exit 'from' states not kept
          for (l = fromPath.length - 1; l >= keep; l--) {
            exiting = fromPath[l];
            if (exiting.self.onExit) {
              $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
            }
            exiting.locals = null;
          }

          // Enter 'to' states not kept
          for (l = keep; l < toPath.length; l++) {
            entering = toPath[l];
            entering.locals = toLocals[l];
            if (entering.self.onEnter) {
              $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
            }
          }

          // Run it again, to catch any transitions in callbacks
          if ($state.transition !== transition) {
            $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
            return TransitionSuperseded;
          }

          // Update globals in $state
          $state.$current = to;
          $state.current = to.self;
          $state.params = toParams;
          copy($state.params, $stateParams);
          $state.transition = null;

          if (options.location && to.navigable) {
            $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
              $$avoidResync: true, replace: options.location === 'replace'
            });
          }

          if (options.notify) {
            /**
             * @ngdoc event
             * @name ui.router.state.$state#$stateChangeSuccess
             * @eventOf ui.router.state.$state
             * @eventType broadcast on root scope
             * @description
             * Fired once the state transition is **complete**.
             *
             * @param {Object} event Event object.
             * @param {State} toState The state being transitioned to.
             * @param {Object} toParams The params supplied to the `toState`.
             * @param {State} fromState The current state, pre-transition.
             * @param {Object} fromParams The params supplied to the `fromState`.
             */
            $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
          }
          $urlRouter.update(true);

          return $state.current;
        }).then(null, function (error) {
          // propagate TransitionSuperseded error without emitting $stateChangeCancel
          // as it was already emitted in the success handler above
          if (error === TransitionSupersededError) return TransitionSuperseded;

          if ($state.transition !== transition) {
            $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
            return TransitionSuperseded;
          }

          $state.transition = null;
          /**
           * @ngdoc event
           * @name ui.router.state.$state#$stateChangeError
           * @eventOf ui.router.state.$state
           * @eventType broadcast on root scope
           * @description
           * Fired when an **error occurs** during transition. It's important to note that if you
           * have any errors in your resolve functions (javascript errors, non-existent services, etc)
           * they will not throw traditionally. You must listen for this $stateChangeError event to
           * catch **ALL** errors.
           *
           * @param {Object} event Event object.
           * @param {State} toState The state being transitioned to.
           * @param {Object} toParams The params supplied to the `toState`.
           * @param {State} fromState The current state, pre-transition.
           * @param {Object} fromParams The params supplied to the `fromState`.
           * @param {Error} error The resolve error object.
           */
          evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

          if (!evt.defaultPrevented) {
            $urlRouter.update();
          }

          return $q.reject(error);
        });

        silenceUncaughtInPromise(transition);
        return transition;
      };

      /**
       * @ngdoc function
       * @name ui.router.state.$state#is
       * @methodOf ui.router.state.$state
       *
       * @description
       * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
       * but only checks for the full state name. If params is supplied then it will be
       * tested for strict equality against the current active params object, so all params
       * must match with none missing and no extras.
       *
       * @example
       * <pre>
       * $state.$current.name = 'contacts.details.item';
       *
       * // absolute name
       * $state.is('contact.details.item'); // returns true
       * $state.is(contactDetailItemStateObject); // returns true
       *
       * // relative name (. and ^), typically from a template
       * // E.g. from the 'contacts.details' template
       * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
       * </pre>
       *
       * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
       * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
       * to test against the current active state.
       * @param {object=} options An options object.  The options are:
       *
       * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
       * test relative to `options.relative` state (or name).
       *
       * @returns {boolean} Returns true if it is the state.
       */
      $state.is = function is(stateOrName, params, options) {
        options = extend({ relative: $state.$current }, options || {});
        var state = findState(stateOrName, options.relative);

        if (!isDefined(state)) {
          return undefined;
        }
        if ($state.$current !== state) {
          return false;
        }

        return !params || objectKeys(params).reduce(function (acc, key) {
          var paramDef = state.params[key];
          return acc && !paramDef || paramDef.type.equals($stateParams[key], params[key]);
        }, true);
      };

      /**
       * @ngdoc function
       * @name ui.router.state.$state#includes
       * @methodOf ui.router.state.$state
       *
       * @description
       * A method to determine if the current active state is equal to or is the child of the
       * state stateName. If any params are passed then they will be tested for a match as well.
       * Not all the parameters need to be passed, just the ones you'd like to test for equality.
       *
       * @example
       * Partial and relative names
       * <pre>
       * $state.$current.name = 'contacts.details.item';
       *
       * // Using partial names
       * $state.includes("contacts"); // returns true
       * $state.includes("contacts.details"); // returns true
       * $state.includes("contacts.details.item"); // returns true
       * $state.includes("contacts.list"); // returns false
       * $state.includes("about"); // returns false
       *
       * // Using relative names (. and ^), typically from a template
       * // E.g. from the 'contacts.details' template
       * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
       * </pre>
       *
       * Basic globbing patterns
       * <pre>
       * $state.$current.name = 'contacts.details.item.url';
       *
       * $state.includes("*.details.*.*"); // returns true
       * $state.includes("*.details.**"); // returns true
       * $state.includes("**.item.**"); // returns true
       * $state.includes("*.details.item.url"); // returns true
       * $state.includes("*.details.*.url"); // returns true
       * $state.includes("*.details.*"); // returns false
       * $state.includes("item.**"); // returns false
       * </pre>
       *
       * @param {string} stateOrName A partial name, relative name, or glob pattern
       * to be searched for within the current state name.
       * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
       * that you'd like to test against the current active state.
       * @param {object=} options An options object.  The options are:
       *
       * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
       * .includes will test relative to `options.relative` state (or name).
       *
       * @returns {boolean} Returns true if it does include the state
       */
      $state.includes = function includes(stateOrName, params, options) {
        options = extend({ relative: $state.$current }, options || {});
        if (isString(stateOrName) && isGlob(stateOrName)) {
          if (!doesStateMatchGlob(stateOrName)) {
            return false;
          }
          stateOrName = $state.$current.name;
        }

        var state = findState(stateOrName, options.relative);
        if (!isDefined(state)) {
          return undefined;
        }
        if (!isDefined($state.$current.includes[state.name])) {
          return false;
        }
        if (!params) {
          return true;
        }

        var keys = objectKeys(params);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i],
              paramDef = state.params[key];
          if (paramDef && !paramDef.type.equals($stateParams[key], params[key])) {
            return false;
          }
        }

        return objectKeys(params).reduce(function (acc, key) {
          var paramDef = state.params[key];
          return acc && !paramDef || paramDef.type.equals($stateParams[key], params[key]);
        }, true);
      };

      /**
       * @ngdoc function
       * @name ui.router.state.$state#href
       * @methodOf ui.router.state.$state
       *
       * @description
       * A url generation method that returns the compiled url for the given state populated with the given params.
       *
       * @example
       * <pre>
       * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
       * </pre>
       *
       * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
       * @param {object=} params An object of parameter values to fill the state's required parameters.
       * @param {object=} options Options object. The options are:
       *
       * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
       *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
       *    ancestor with a valid url).
       * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
       * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
       *    defines which state to be relative from.
       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
       * 
       * @returns {string} compiled state url
       */
      $state.href = function href(stateOrName, params, options) {
        options = extend({
          lossy: true,
          inherit: true,
          absolute: false,
          relative: $state.$current
        }, options || {});

        var state = findState(stateOrName, options.relative);

        if (!isDefined(state)) return null;
        if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);

        var nav = state && options.lossy ? state.navigable : state;

        if (!nav || nav.url === undefined || nav.url === null) {
          return null;
        }
        return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
          absolute: options.absolute
        });
      };

      /**
       * @ngdoc function
       * @name ui.router.state.$state#get
       * @methodOf ui.router.state.$state
       *
       * @description
       * Returns the state configuration object for any specific state or all states.
       *
       * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
       * the requested state. If not provided, returns an array of ALL state configs.
       * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
       * @returns {Object|Array} State configuration object or array of all objects.
       */
      $state.get = function (stateOrName, context) {
        if (arguments.length === 0) return map(objectKeys(states), function (name) {
          return states[name].self;
        });
        var state = findState(stateOrName, context || $state.$current);
        return state && state.self ? state.self : null;
      };

      function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
        // Make a restricted $stateParams with only the parameters that apply to this state if
        // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
        // we also need $stateParams to be available for any $injector calls we make during the
        // dependency resolution process.
        var $stateParams = paramsAreFiltered ? params : filterByKeys(state.params.$$keys(), params);
        var locals = { $stateParams: $stateParams };

        // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
        // We're also including $stateParams in this; that way the parameters are restricted
        // to the set that should be visible to the state, and are independent of when we update
        // the global $state and $stateParams values.
        dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
        var promises = [dst.resolve.then(function (globals) {
          dst.globals = globals;
        })];
        if (inherited) promises.push(inherited);

        function resolveViews() {
          var viewsPromises = [];

          // Resolve template and dependencies for all views.
          forEach(state.views, function (view, name) {
            var injectables = view.resolve && view.resolve !== state.resolve ? view.resolve : {};
            injectables.$template = [function () {
              return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
            }];

            viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
              // References to the controller (only instantiated at link time)
              if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
                var injectLocals = angular.extend({}, injectables, dst.globals);
                result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
              } else {
                result.$$controller = view.controller;
              }
              // Provide access to the state itself for internal use
              result.$$state = state;
              result.$$controllerAs = view.controllerAs;
              result.$$resolveAs = view.resolveAs;
              dst[name] = result;
            }));
          });

          return $q.all(viewsPromises).then(function () {
            return dst.globals;
          });
        }

        // Wait for all the promises and then return the activation object
        return $q.all(promises).then(resolveViews).then(function (values) {
          return dst;
        });
      }

      return $state;
    }

    function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
      // Return true if there are no differences in non-search (path/object) params, false if there are differences
      function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
        // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
        function notSearchParam(key) {
          return fromAndToState.params[key].location != "search";
        }
        var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
        var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
        var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
        return nonQueryParamSet.$$equals(fromParams, toParams);
      }

      // If reload was not explicitly requested
      // and we're transitioning to the same state we're already in
      // and    the locals didn't change
      //     or they changed in a way that doesn't merit reloading
      //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
      // Then return true.
      if (!options.reload && to === from && (locals === from.locals || to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams))) {
        return true;
      }
    }
  }

  angular.module('ui.router.state').factory('$stateParams', function () {
    return {};
  }).constant("$state.runtime", { autoinject: true }).provider('$state', $StateProvider)
  // Inject $state to initialize when entering runtime. #2574
  .run(['$injector', function ($injector) {
    // Allow tests (stateSpec.js) to turn this off by defining this constant
    if ($injector.get("$state.runtime").autoinject) {
      $injector.get('$state');
    }
  }]);

  $ViewProvider.$inject = [];
  function $ViewProvider() {

    this.$get = $get;
    /**
     * @ngdoc object
     * @name ui.router.state.$view
     *
     * @requires ui.router.util.$templateFactory
     * @requires $rootScope
     *
     * @description
     *
     */
    $get.$inject = ['$rootScope', '$templateFactory'];
    function $get($rootScope, $templateFactory) {
      return {
        // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
        /**
         * @ngdoc function
         * @name ui.router.state.$view#load
         * @methodOf ui.router.state.$view
         *
         * @description
         *
         * @param {string} name name
         * @param {object} options option object.
         */
        load: function load(name, options) {
          var result,
              defaults = {
            template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
          };
          options = extend(defaults, options);

          if (options.view) {
            result = $templateFactory.fromConfig(options.view, options.params, options.locals);
          }
          return result;
        }
      };
    }
  }

  angular.module('ui.router.state').provider('$view', $ViewProvider);

  /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
   */
  function $ViewScrollProvider() {

    var useAnchorScroll = false;

    /**
     * @ngdoc function
     * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
     * @methodOf ui.router.state.$uiViewScrollProvider
     *
     * @description
     * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
     * scrolling based on the url anchor.
     */
    this.useAnchorScroll = function () {
      useAnchorScroll = true;
    };

    /**
     * @ngdoc object
     * @name ui.router.state.$uiViewScroll
     *
     * @requires $anchorScroll
     * @requires $timeout
     *
     * @description
     * When called with a jqLite element, it scrolls the element into view (after a
     * `$timeout` so the DOM has time to refresh).
     *
     * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
     * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
     */
    this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
      if (useAnchorScroll) {
        return $anchorScroll;
      }

      return function ($element) {
        return $timeout(function () {
          $element[0].scrollIntoView();
        }, 0, false);
      };
    }];
  }

  angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

  /**
   * @ngdoc directive
   * @name ui.router.state.directive:ui-view
   *
   * @requires ui.router.state.$state
   * @requires $compile
   * @requires $controller
   * @requires $injector
   * @requires ui.router.state.$uiViewScroll
   * @requires $document
   *
   * @restrict ECA
   *
   * @description
   * The ui-view directive tells $state where to place your templates.
   *
   * @param {string=} name A view name. The name should be unique amongst the other views in the
   * same state. You can have views of the same name that live in different states.
   *
   * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
   * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
   * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
   * scroll ui-view elements into view when they are populated during a state activation.
   *
   * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
   * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
   *
   * @param {string=} onload Expression to evaluate whenever the view updates.
   *
   * @example
   * A view can be unnamed or named.
   * <pre>
   * <!-- Unnamed -->
   * <div ui-view></div>
   *
   * <!-- Named -->
   * <div ui-view="viewName"></div>
   * </pre>
   *
   * You can only have one unnamed view within any template (or root html). If you are only using a
   * single view and it is unnamed then you can populate it like so:
   * <pre>
   * <div ui-view></div>
   * $stateProvider.state("home", {
   *   template: "<h1>HELLO!</h1>"
   * })
   * </pre>
   *
   * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#methods_state `views`}
   * config property, by name, in this case an empty name:
   * <pre>
   * $stateProvider.state("home", {
   *   views: {
   *     "": {
   *       template: "<h1>HELLO!</h1>"
   *     }
   *   }    
   * })
   * </pre>
   *
   * But typically you'll only use the views property if you name your view or have more than one view
   * in the same template. There's not really a compelling reason to name a view if its the only one,
   * but you could if you wanted, like so:
   * <pre>
   * <div ui-view="main"></div>
   * </pre>
   * <pre>
   * $stateProvider.state("home", {
   *   views: {
   *     "main": {
   *       template: "<h1>HELLO!</h1>"
   *     }
   *   }    
   * })
   * </pre>
   *
   * Really though, you'll use views to set up multiple views:
   * <pre>
   * <div ui-view></div>
   * <div ui-view="chart"></div>
   * <div ui-view="data"></div>
   * </pre>
   *
   * <pre>
   * $stateProvider.state("home", {
   *   views: {
   *     "": {
   *       template: "<h1>HELLO!</h1>"
   *     },
   *     "chart": {
   *       template: "<chart_thing/>"
   *     },
   *     "data": {
   *       template: "<data_thing/>"
   *     }
   *   }    
   * })
   * </pre>
   *
   * Examples for `autoscroll`:
   *
   * <pre>
   * <!-- If autoscroll present with no expression,
   *      then scroll ui-view into view -->
   * <ui-view autoscroll/>
   *
   * <!-- If autoscroll present with valid expression,
   *      then scroll ui-view into view if expression evaluates to true -->
   * <ui-view autoscroll='true'/>
   * <ui-view autoscroll='false'/>
   * <ui-view autoscroll='scopeVariable'/>
   * </pre>
   *
   * Resolve data:
   *
   * The resolved data from the state's `resolve` block is placed on the scope as `$resolve` (this
   * can be customized using [[ViewDeclaration.resolveAs]]).  This can be then accessed from the template.
   *
   * Note that when `controllerAs` is being used, `$resolve` is set on the controller instance *after* the
   * controller is instantiated.  The `$onInit()` hook can be used to perform initialization code which
   * depends on `$resolve` data.
   *
   * Example usage of $resolve in a view template
   * <pre>
   * $stateProvider.state('home', {
   *   template: '<my-component user="$resolve.user"></my-component>',
   *   resolve: {
   *     user: function(UserService) { return UserService.fetchUser(); }
   *   }
   * });
   * </pre>
   */
  $ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate', '$q'];
  function $ViewDirective($state, $injector, $uiViewScroll, $interpolate, $q) {

    function getService() {
      return $injector.has ? function (service) {
        return $injector.has(service) ? $injector.get(service) : null;
      } : function (service) {
        try {
          return $injector.get(service);
        } catch (e) {
          return null;
        }
      };
    }

    var service = getService(),
        $animator = service('$animator'),
        $animate = service('$animate');

    // Returns a set of DOM manipulation functions based on which Angular version
    // it should use
    function getRenderer(attrs, scope) {
      var statics = function () {
        return {
          enter: function (element, target, cb) {
            target.after(element);cb();
          },
          leave: function (element, cb) {
            element.remove();cb();
          }
        };
      };

      if ($animate) {
        return {
          enter: function (element, target, cb) {
            if (angular.version.minor > 2) {
              $animate.enter(element, null, target).then(cb);
            } else {
              $animate.enter(element, null, target, cb);
            }
          },
          leave: function (element, cb) {
            if (angular.version.minor > 2) {
              $animate.leave(element).then(cb);
            } else {
              $animate.leave(element, cb);
            }
          }
        };
      }

      if ($animator) {
        var animate = $animator && $animator(scope, attrs);

        return {
          enter: function (element, target, cb) {
            animate.enter(element, null, target);cb();
          },
          leave: function (element, cb) {
            animate.leave(element);cb();
          }
        };
      }

      return statics();
    }

    var directive = {
      restrict: 'ECA',
      terminal: true,
      priority: 400,
      transclude: 'element',
      compile: function (tElement, tAttrs, $transclude) {
        return function (scope, $element, attrs) {
          var previousEl,
              currentEl,
              currentScope,
              latestLocals,
              onloadExp = attrs.onload || '',
              autoScrollExp = attrs.autoscroll,
              renderer = getRenderer(attrs, scope),
              inherited = $element.inheritedData('$uiView');

          scope.$on('$stateChangeSuccess', function () {
            updateView(false);
          });

          updateView(true);

          function cleanupLastView() {
            if (previousEl) {
              previousEl.remove();
              previousEl = null;
            }

            if (currentScope) {
              currentScope.$destroy();
              currentScope = null;
            }

            if (currentEl) {
              var $uiViewData = currentEl.data('$uiViewAnim');
              renderer.leave(currentEl, function () {
                $uiViewData.$$animLeave.resolve();
                previousEl = null;
              });

              previousEl = currentEl;
              currentEl = null;
            }
          }

          function updateView(firstTime) {
            var newScope,
                name = getUiViewName(scope, attrs, $element, $interpolate),
                previousLocals = name && $state.$current && $state.$current.locals[name];

            if (!firstTime && previousLocals === latestLocals) return; // nothing to do
            newScope = scope.$new();
            latestLocals = $state.$current.locals[name];

            /**
             * @ngdoc event
             * @name ui.router.state.directive:ui-view#$viewContentLoading
             * @eventOf ui.router.state.directive:ui-view
             * @eventType emits on ui-view directive scope
             * @description
             *
             * Fired once the view **begins loading**, *before* the DOM is rendered.
             *
             * @param {Object} event Event object.
             * @param {string} viewName Name of the view.
             */
            newScope.$emit('$viewContentLoading', name);

            var clone = $transclude(newScope, function (clone) {
              var animEnter = $q.defer(),
                  animLeave = $q.defer();
              var viewAnimData = {
                $animEnter: animEnter.promise,
                $animLeave: animLeave.promise,
                $$animLeave: animLeave
              };

              clone.data('$uiViewAnim', viewAnimData);
              renderer.enter(clone, $element, function onUiViewEnter() {
                animEnter.resolve();
                if (currentScope) {
                  currentScope.$emit('$viewContentAnimationEnded');
                }

                if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                  $uiViewScroll(clone);
                }
              });
              cleanupLastView();
            });

            currentEl = clone;
            currentScope = newScope;
            /**
             * @ngdoc event
             * @name ui.router.state.directive:ui-view#$viewContentLoaded
             * @eventOf ui.router.state.directive:ui-view
             * @eventType emits on ui-view directive scope
             * @description
             * Fired once the view is **loaded**, *after* the DOM is rendered.
             *
             * @param {Object} event Event object.
             * @param {string} viewName Name of the view.
             */
            currentScope.$emit('$viewContentLoaded', name);
            currentScope.$eval(onloadExp);
          }
        };
      }
    };

    return directive;
  }

  $ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
  function $ViewDirectiveFill($compile, $controller, $state, $interpolate) {
    return {
      restrict: 'ECA',
      priority: -400,
      compile: function (tElement) {
        var initial = tElement.html();
        if (tElement.empty) {
          tElement.empty();
        } else {
          // ng 1.0.0 doesn't have empty(), which cleans up data and handlers
          tElement[0].innerHTML = null;
        }

        return function (scope, $element, attrs) {
          var current = $state.$current,
              name = getUiViewName(scope, attrs, $element, $interpolate),
              locals = current && current.locals[name];

          if (!locals) {
            $element.html(initial);
            $compile($element.contents())(scope);
            return;
          }

          $element.data('$uiView', { name: name, state: locals.$$state });
          $element.html(locals.$template ? locals.$template : initial);

          var resolveData = angular.extend({}, locals);
          scope[locals.$$resolveAs] = resolveData;

          var link = $compile($element.contents());

          if (locals.$$controller) {
            locals.$scope = scope;
            locals.$element = $element;
            var controller = $controller(locals.$$controller, locals);
            if (locals.$$controllerAs) {
              scope[locals.$$controllerAs] = controller;
              scope[locals.$$controllerAs][locals.$$resolveAs] = resolveData;
            }
            if (isFunction(controller.$onInit)) controller.$onInit();
            $element.data('$ngControllerController', controller);
            $element.children().data('$ngControllerController', controller);
          }

          link(scope);
        };
      }
    };
  }

  /**
   * Shared ui-view code for both directives:
   * Given scope, element, and its attributes, return the view's name
   */
  function getUiViewName(scope, attrs, element, $interpolate) {
    var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
    var uiViewCreatedBy = element.inheritedData('$uiView');
    return name.indexOf('@') >= 0 ? name : name + '@' + (uiViewCreatedBy ? uiViewCreatedBy.state.name : '');
  }

  angular.module('ui.router.state').directive('uiView', $ViewDirective);
  angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

  function parseStateRef(ref, current) {
    var preparsed = ref.match(/^\s*({[^}]*})\s*$/),
        parsed;
    if (preparsed) ref = current + '(' + preparsed[1] + ')';
    parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
    if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
    return { state: parsed[1], paramExpr: parsed[3] || null };
  }

  function stateContext(el) {
    var stateData = el.parent().inheritedData('$uiView');

    if (stateData && stateData.state && stateData.state.name) {
      return stateData.state;
    }
  }

  function getTypeInfo(el) {
    // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
    var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
    var isForm = el[0].nodeName === "FORM";

    return {
      attr: isForm ? "action" : isSvg ? 'xlink:href' : 'href',
      isAnchor: el.prop("tagName").toUpperCase() === "A",
      clickable: !isForm
    };
  }

  function clickHook(el, $state, $timeout, type, current) {
    return function (e) {
      var button = e.which || e.button,
          target = current();

      if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
        // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
        var transition = $timeout(function () {
          $state.go(target.state, target.params, target.options);
        });
        e.preventDefault();

        // if the state has no URL, ignore one preventDefault from the <a> directive.
        var ignorePreventDefaultCount = type.isAnchor && !target.href ? 1 : 0;

        e.preventDefault = function () {
          if (ignorePreventDefaultCount-- <= 0) $timeout.cancel(transition);
        };
      }
    };
  }

  function defaultOpts(el, $state) {
    return { relative: stateContext(el) || $state.$current, inherit: true };
  }

  /**
   * @ngdoc directive
   * @name ui.router.state.directive:ui-sref
   *
   * @requires ui.router.state.$state
   * @requires $timeout
   *
   * @restrict A
   *
   * @description
   * A directive that binds a link (`<a>` tag) to a state. If the state has an associated
   * URL, the directive will automatically generate & update the `href` attribute via
   * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking
   * the link will trigger a state transition with optional parameters.
   *
   * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be
   * handled natively by the browser.
   *
   * You can also use relative state paths within ui-sref, just like the relative
   * paths passed to `$state.go()`. You just need to be aware that the path is relative
   * to the state that the link lives in, in other words the state that loaded the
   * template containing the link.
   *
   * You can specify options to pass to {@link ui.router.state.$state#methods_go $state.go()}
   * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
   * and `reload`.
   *
   * @example
   * Here's an example of how you'd use ui-sref and how it would compile. If you have the
   * following template:
   * <pre>
   * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
   *
   * <ul>
   *     <li ng-repeat="contact in contacts">
   *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
   *     </li>
   * </ul>
   * </pre>
   *
   * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
   * <pre>
   * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
   *
   * <ul>
   *     <li ng-repeat="contact in contacts">
   *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
   *     </li>
   *     <li ng-repeat="contact in contacts">
   *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
   *     </li>
   *     <li ng-repeat="contact in contacts">
   *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
   *     </li>
   * </ul>
   *
   * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
   * </pre>
   *
   * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
   * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#methods_go $state.go()}
   */
  $StateRefDirective.$inject = ['$state', '$timeout'];
  function $StateRefDirective($state, $timeout) {
    return {
      restrict: 'A',
      require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
      link: function (scope, element, attrs, uiSrefActive) {
        var ref = parseStateRef(attrs.uiSref, $state.current.name);
        var def = { state: ref.state, href: null, params: null };
        var type = getTypeInfo(element);
        var active = uiSrefActive[1] || uiSrefActive[0];
        var unlinkInfoFn = null;
        var hookFn;

        def.options = extend(defaultOpts(element, $state), attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {});

        var update = function (val) {
          if (val) def.params = angular.copy(val);
          def.href = $state.href(ref.state, def.params, def.options);

          if (unlinkInfoFn) unlinkInfoFn();
          if (active) unlinkInfoFn = active.$$addStateInfo(ref.state, def.params);
          if (def.href !== null) attrs.$set(type.attr, def.href);
        };

        if (ref.paramExpr) {
          scope.$watch(ref.paramExpr, function (val) {
            if (val !== def.params) update(val);
          }, true);
          def.params = angular.copy(scope.$eval(ref.paramExpr));
        }
        update();

        if (!type.clickable) return;
        hookFn = clickHook(element, $state, $timeout, type, function () {
          return def;
        });
        element[element.on ? 'on' : 'bind']("click", hookFn);
        scope.$on('$destroy', function () {
          element[element.off ? 'off' : 'unbind']("click", hookFn);
        });
      }
    };
  }

  /**
   * @ngdoc directive
   * @name ui.router.state.directive:ui-state
   *
   * @requires ui.router.state.uiSref
   *
   * @restrict A
   *
   * @description
   * Much like ui-sref, but will accept named $scope properties to evaluate for a state definition,
   * params and override options.
   *
   * @param {string} ui-state 'stateName' can be any valid absolute or relative state
   * @param {Object} ui-state-params params to pass to {@link ui.router.state.$state#methods_href $state.href()}
   * @param {Object} ui-state-opts options to pass to {@link ui.router.state.$state#methods_go $state.go()}
   */
  $StateRefDynamicDirective.$inject = ['$state', '$timeout'];
  function $StateRefDynamicDirective($state, $timeout) {
    return {
      restrict: 'A',
      require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
      link: function (scope, element, attrs, uiSrefActive) {
        var type = getTypeInfo(element);
        var active = uiSrefActive[1] || uiSrefActive[0];
        var group = [attrs.uiState, attrs.uiStateParams || null, attrs.uiStateOpts || null];
        var watch = '[' + group.map(function (val) {
          return val || 'null';
        }).join(', ') + ']';
        var def = { state: null, params: null, options: null, href: null };
        var unlinkInfoFn = null;
        var hookFn;

        function runStateRefLink(group) {
          def.state = group[0];def.params = group[1];def.options = group[2];
          def.href = $state.href(def.state, def.params, def.options);

          if (unlinkInfoFn) unlinkInfoFn();
          if (active) unlinkInfoFn = active.$$addStateInfo(def.state, def.params);
          if (def.href) attrs.$set(type.attr, def.href);
        }

        scope.$watch(watch, runStateRefLink, true);
        runStateRefLink(scope.$eval(watch));

        if (!type.clickable) return;
        hookFn = clickHook(element, $state, $timeout, type, function () {
          return def;
        });
        element[element.on ? 'on' : 'bind']("click", hookFn);
        scope.$on('$destroy', function () {
          element[element.off ? 'off' : 'unbind']("click", hookFn);
        });
      }
    };
  }

  /**
   * @ngdoc directive
   * @name ui.router.state.directive:ui-sref-active
   *
   * @requires ui.router.state.$state
   * @requires ui.router.state.$stateParams
   * @requires $interpolate
   *
   * @restrict A
   *
   * @description
   * A directive working alongside ui-sref to add classes to an element when the
   * related ui-sref directive's state is active, and removing them when it is inactive.
   * The primary use-case is to simplify the special appearance of navigation menus
   * relying on `ui-sref`, by having the "active" state's menu button appear different,
   * distinguishing it from the inactive menu items.
   *
   * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
   * ui-sref-active found at the same level or above the ui-sref will be used.
   *
   * Will activate when the ui-sref's target state or any child state is active. If you
   * need to activate only when the ui-sref target state is active and *not* any of
   * it's children, then you will use
   * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
   *
   * @example
   * Given the following template:
   * <pre>
   * <ul>
   *   <li ui-sref-active="active" class="item">
   *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
   *   </li>
   * </ul>
   * </pre>
   *
   *
   * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
   * the resulting HTML will appear as (note the 'active' class):
   * <pre>
   * <ul>
   *   <li ui-sref-active="active" class="item active">
   *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
   *   </li>
   * </ul>
   * </pre>
   *
   * The class name is interpolated **once** during the directives link time (any further changes to the
   * interpolated value are ignored).
   *
   * Multiple classes may be specified in a space-separated format:
   * <pre>
   * <ul>
   *   <li ui-sref-active='class1 class2 class3'>
   *     <a ui-sref="app.user">link</a>
   *   </li>
   * </ul>
   * </pre>
   *
   * It is also possible to pass ui-sref-active an expression that evaluates
   * to an object hash, whose keys represent active class names and whose
   * values represent the respective state names/globs.
   * ui-sref-active will match if the current active state **includes** any of
   * the specified state names/globs, even the abstract ones.
   *
   * @Example
   * Given the following template, with "admin" being an abstract state:
   * <pre>
   * <div ui-sref-active="{'active': 'admin.*'}">
   *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
   * </div>
   * </pre>
   *
   * When the current state is "admin.roles" the "active" class will be applied
   * to both the <div> and <a> elements. It is important to note that the state
   * names/globs passed to ui-sref-active shadow the state provided by ui-sref.
   */

  /**
   * @ngdoc directive
   * @name ui.router.state.directive:ui-sref-active-eq
   *
   * @requires ui.router.state.$state
   * @requires ui.router.state.$stateParams
   * @requires $interpolate
   *
   * @restrict A
   *
   * @description
   * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
   * when the exact target state used in the `ui-sref` is active; no child states.
   *
   */
  $StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
  function $StateRefActiveDirective($state, $stateParams, $interpolate) {
    return {
      restrict: "A",
      controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
        var states = [],
            activeClasses = {},
            activeEqClass,
            uiSrefActive;

        // There probably isn't much point in $observing this
        // uiSrefActive and uiSrefActiveEq share the same directive object with some
        // slight difference in logic routing
        activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);

        try {
          uiSrefActive = $scope.$eval($attrs.uiSrefActive);
        } catch (e) {
          // Do nothing. uiSrefActive is not a valid expression.
          // Fall back to using $interpolate below
        }
        uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
        if (isObject(uiSrefActive)) {
          forEach(uiSrefActive, function (stateOrName, activeClass) {
            if (isString(stateOrName)) {
              var ref = parseStateRef(stateOrName, $state.current.name);
              addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
            }
          });
        }

        // Allow uiSref to communicate with uiSrefActive[Equals]
        this.$$addStateInfo = function (newState, newParams) {
          // we already got an explicit state provided by ui-sref-active, so we
          // shadow the one that comes from ui-sref
          if (isObject(uiSrefActive) && states.length > 0) {
            return;
          }
          var deregister = addState(newState, newParams, uiSrefActive);
          update();
          return deregister;
        };

        $scope.$on('$stateChangeSuccess', update);

        function addState(stateName, stateParams, activeClass) {
          var state = $state.get(stateName, stateContext($element));
          var stateHash = createStateHash(stateName, stateParams);

          var stateInfo = {
            state: state || { name: stateName },
            params: stateParams,
            hash: stateHash
          };

          states.push(stateInfo);
          activeClasses[stateHash] = activeClass;

          return function removeState() {
            var idx = states.indexOf(stateInfo);
            if (idx !== -1) states.splice(idx, 1);
          };
        }

        /**
         * @param {string} state
         * @param {Object|string} [params]
         * @return {string}
         */
        function createStateHash(state, params) {
          if (!isString(state)) {
            throw new Error('state should be a string');
          }
          if (isObject(params)) {
            return state + toJson(params);
          }
          params = $scope.$eval(params);
          if (isObject(params)) {
            return state + toJson(params);
          }
          return state;
        }

        // Update route state
        function update() {
          for (var i = 0; i < states.length; i++) {
            if (anyMatch(states[i].state, states[i].params)) {
              addClass($element, activeClasses[states[i].hash]);
            } else {
              removeClass($element, activeClasses[states[i].hash]);
            }

            if (exactMatch(states[i].state, states[i].params)) {
              addClass($element, activeEqClass);
            } else {
              removeClass($element, activeEqClass);
            }
          }
        }

        function addClass(el, className) {
          $timeout(function () {
            el.addClass(className);
          });
        }
        function removeClass(el, className) {
          el.removeClass(className);
        }
        function anyMatch(state, params) {
          return $state.includes(state.name, params);
        }
        function exactMatch(state, params) {
          return $state.is(state.name, params);
        }

        update();
      }]
    };
  }

  angular.module('ui.router.state').directive('uiSref', $StateRefDirective).directive('uiSrefActive', $StateRefActiveDirective).directive('uiSrefActiveEq', $StateRefActiveDirective).directive('uiState', $StateRefDynamicDirective);

  /**
   * @ngdoc filter
   * @name ui.router.state.filter:isState
   *
   * @requires ui.router.state.$state
   *
   * @description
   * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
   */
  $IsStateFilter.$inject = ['$state'];
  function $IsStateFilter($state) {
    var isFilter = function (state, params) {
      return $state.is(state, params);
    };
    isFilter.$stateful = true;
    return isFilter;
  }

  /**
   * @ngdoc filter
   * @name ui.router.state.filter:includedByState
   *
   * @requires ui.router.state.$state
   *
   * @description
   * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
   */
  $IncludedByStateFilter.$inject = ['$state'];
  function $IncludedByStateFilter($state) {
    var includesFilter = function (state, params, options) {
      return $state.includes(state, params, options);
    };
    includesFilter.$stateful = true;
    return includesFilter;
  }

  angular.module('ui.router.state').filter('isState', $IsStateFilter).filter('includedByState', $IncludedByStateFilter);
})(window, window.angular);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const accountComp = {
  templateUrl: 'components/account-comp/account.template.html'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = accountComp;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 29.03.2017.
 */

class AccountFormController {
    constructor($state) {
        this.$state = $state;
        this.addNewUser = (userDetails, isvalid) => {
            if (isvalid) {
                this.message = userDetails.login + " " + userDetails.email + " " + userDetails.password;
            } else {
                this.message = "Error";
                this.showError = true;
            }
        };

        this.getError = error => {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Поле не должно быть пустым";
                } else if (error.email) {
                    return "Введите правильный email";
                }
            }
        };
    }

    clickHandler() {
        //  this.$state.go('page.home.dashboard');
    }
}
const accountformComp = {
    templateUrl: './components/account-form-comp/accountform.template.html',
    controllerAs: 'vm',
    controller: AccountFormController
};
/* harmony export (immutable) */ __webpack_exports__["a"] = accountformComp;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const commonComp = {
  templateUrl: 'components/common-comp/common.template.html'

};
/* harmony export (immutable) */ __webpack_exports__["a"] = commonComp;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 22.03.2017.
 */
const headerComp = {
  templateUrl: 'components/header-comp/header-comp.template.html'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = headerComp;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 22.03.2017.
 */

const listComp = {
    templateUrl: './components/list-comp/list.template.html',
    controller: function DocListController($http) {
        var self = this;
        self.docs = [{
            name: 'Doc 1',
            type: '.txt'
        }, {
            name: 'Doc 2',
            type: '.txt'
        }, {
            name: 'Doc 3',
            type: '.txt'
        }, {
            name: 'Doc 4',
            type: '.txt'
        }, {
            name: 'Doc 1',
            type: '.jpg'
        }, {
            name: 'Doc 2',
            type: '.jpg'
        }, {
            name: 'Doc 3',
            type: '.jpg'
        }, {
            name: 'Doc 4',
            type: '.jpg'
        }, {
            name: 'Doc 1',
            type: '.req'
        }, {
            name: 'Doc 2',
            type: '.req'
        }, {
            name: 'Doc 3',
            type: '.req'
        }, {
            name: 'Doc 4',
            type: '.req'
        }];
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = listComp;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const logoComp = {
  templateUrl: 'components/logo-comp/logo.template.html'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = logoComp;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */

const menuComp = {
  templateUrl: 'components/menu-comp/menu.template.html'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = menuComp;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 29.03.2017.
 */

class LogFormController {
    constructor($state) {
        this.$state = $state;
        this.addNewUser = (userDetails, isvalid) => {
            if (isvalid) {
                this.message = userDetails.login + " " + userDetails.email + " " + userDetails.password;
            } else {
                this.message = "Error";
                this.showError = true;
            }
        };
        this.message;

        this.getError = error => {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Поле не должно быть пустым";
                } else if (error.email) {
                    return "Введите правильный email";
                }
            }
        };
    }

    clickHandler() {
        this.$state.go('page.home.dashboard');
    }
}

const singinComp = {
    templateUrl: './components/singin-comp/singin.template.html',
    controllerAs: 'vm',
    controller: LogFormController

};
/* harmony export (immutable) */ __webpack_exports__["a"] = singinComp;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const statisticComp = {
  templateUrl: './components/statistic-comp/statistic.template.html'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = statisticComp;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parent_file_js__ = __webpack_require__(0);
/**
 * Created by amurav on 30.03.2017.
 */
/**
 * Created by amurav on 29.03.2017.
 */


class DocumentFileController extends __WEBPACK_IMPORTED_MODULE_0__parent_file_js__["a" /* ParentFile */] {
    constructor() {
        super();

        this.arrDocuments = [{
            userFirstName: 'userName',
            userTeam: 'userTeam',
            userPassword: 'userPassword',
            title: 'title',
            type: 'type',
            path: 'path',
            data: 'data'
        }];
        this.countDocuments = this.arrDocuments.length;
    }
    // handlerEvent=()=>{
    //
    // };
    getCountDocuments() {
        return this.countDocuments;
    }

}

const docfileComp = {
    templateUrl: './files/document/document.file.template.html',
    controller: DocumentFileController,
    controllerAs: 'docCtrl'

};
/* harmony export (immutable) */ __webpack_exports__["a"] = docfileComp;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parent_file_js__ = __webpack_require__(0);
/**
 * Created by amurav on 29.03.2017.
 */


class ImageFileController extends __WEBPACK_IMPORTED_MODULE_0__parent_file_js__["a" /* ParentFile */] {
    constructor() {
        super();
        this.arrImages = [{
            userFirstName: '',
            userTeam: '',
            userPassword: '',
            title: '',
            type: '',
            path: '',
            data: ''
        }];
        this.countImages = this.arrImages.length;
    }
    // handlerEvent(){
    //     //затемнение и две кнопки: delete и download
    // }

    getCountImages() {
        return this.countImages;
    }

}

const imagefileComp = {
    templateUrl: './files/image/image.file.template.html',
    controller: ImageFileController,
    controllerAs: 'imageCtrl'

};
/* harmony export (immutable) */ __webpack_exports__["a"] = imagefileComp;


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_ui_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_ui_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_ui_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__files_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routers_config__ = __webpack_require__(3);
/**
 * Created by amurav on 23.03.2017.
 */





const spApp = angular.module('spApp', [__WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* compApp */], __WEBPACK_IMPORTED_MODULE_2__files_index__["a" /* filesApp */], __WEBPACK_IMPORTED_MODULE_0_angular_ui_router___default.a, 'ngResource']).config(['$stateProvider', '$urlRouterProvider', __WEBPACK_IMPORTED_MODULE_3__routers_config__["a" /* Routes */]]);
/* harmony export (immutable) */ __webpack_exports__["spApp"] = spApp;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 29.03.2017.
 */

class AddFileController {
    constructor($state) {
        this.$state = $state;
        this.addNewUser = (userDetails, isvalid) => {
            if (isvalid) {
                this.message = userDetails.login + " " + userDetails.email + " " + userDetails.password;
            } else {
                this.message = "Error";
                this.showError = true;
            }
        };
        this.message;

        this.getError = error => {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Поле не должно быть пустым";
                } else if (error.email) {
                    return "Введите правильный email";
                }
            }
        };
    }

    clickHandler() {
        this.$state.go('page.home.dashboard');
    }
}

const addfileComp = {
    templateUrl: './components/add-file-comp/addfile.template.html',
    controllerAs: 'vm',
    controller: AddFileController

};
/* harmony export (immutable) */ __webpack_exports__["a"] = addfileComp;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvd2VicGFjay5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmViZDFiYzFhMWNmZWM4YWFlODEiLCJ3ZWJwYWNrOi8vL2FwcC9maWxlcy9wYXJlbnQuZmlsZS5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9maWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL3JvdXRlcnMuY29uZmlnLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvYW5ndWxhci11aS1yb3V0ZXIvcmVsZWFzZS9hbmd1bGFyLXVpLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvYWNjb3VudC1jb21wL2FjY291bnQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWZvcm0tY29tcC9hY2NvdW50Zm9ybS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL2NvbW1vbi1jb21wL2NvbW1vbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL2hlYWRlci1jb21wL2hlYWRlci1jb21wLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvbGlzdC1jb21wL2xpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9sb2dvLWNvbXAvbG9nby5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL21lbnUtY29tcC9tZW51LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvc2luZ2luLWNvbXAvc2luZ2luLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvc3RhdGlzdGljLWNvbXAvc3RhdGlzdGljLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vYXBwL2ZpbGVzL2RvY3VtZW50L2RvY3VtZW50LmZpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy9hcHAvZmlsZXMvaW1hZ2UvaW1hZ2UuZmlsZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvYWRkLWZpbGUtY29tcC9hZGRmaWxlLmNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmViZDFiYzFhMWNmZWM4YWFlODEiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMzAuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXJlbnRGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gZG93bmxvYWQgPSAoKSA9PiB7XHJcbiAgICAvLyB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9maWxlcy9wYXJlbnQuZmlsZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHthY2NvdW50Q29tcH0gZnJvbSAnLi9hY2NvdW50LWNvbXAvYWNjb3VudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge2hlYWRlckNvbXB9IGZyb20gJy4vaGVhZGVyLWNvbXAvaGVhZGVyLWNvbXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtsaXN0Q29tcH0gZnJvbSAnLi9saXN0LWNvbXAvbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge2xvZ29Db21wfSBmcm9tICcuL2xvZ28tY29tcC9sb2dvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7bWVudUNvbXB9IGZyb20gJy4vbWVudS1jb21wL21lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHtzdGF0aXN0aWNDb21wfSBmcm9tICcuL3N0YXRpc3RpYy1jb21wL3N0YXRpc3RpYy5jb21wb25lbnQnO1xyXG5pbXBvcnQge3NpbmdpbkNvbXB9IGZyb20gJy4vc2luZ2luLWNvbXAvc2luZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7YWNjb3VudGZvcm1Db21wfSBmcm9tICcuL2FjY291bnQtZm9ybS1jb21wL2FjY291bnRmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Y29tbW9uQ29tcH0gZnJvbSAnLi9jb21tb24tY29tcC9jb21tb24uY29tcG9uZW50JztcclxuaW1wb3J0IHthZGRmaWxlQ29tcH0gZnJvbSAnLi9hZGQtZmlsZS1jb21wL2FkZGZpbGUuY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29tcEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzcEFwcC5jb21wb25lbnRzJyxbXSlcclxuICAgIC5jb21wb25lbnQoJ2xpc3RDb21wJywgbGlzdENvbXApXHJcbiAgICAuY29tcG9uZW50KCdoZWFkZXJDb21wJywgaGVhZGVyQ29tcClcclxuICAgIC5jb21wb25lbnQoJ2FjY291bnRDb21wJywgYWNjb3VudENvbXApXHJcbiAgICAuY29tcG9uZW50KCdsb2dvQ29tcCcsIGxvZ29Db21wKVxyXG4gICAgLmNvbXBvbmVudCgnbWVudUNvbXAnLCBtZW51Q29tcClcclxuICAgIC5jb21wb25lbnQoJ3N0YXRpc3RpY0NvbXAnLCBzdGF0aXN0aWNDb21wKVxyXG4gICAgLmNvbXBvbmVudCgnc2luZ2luQ29tcCcsIHNpbmdpbkNvbXApXHJcbiAgICAuY29tcG9uZW50KCdhY2NvdW50Zm9ybUNvbXAnLCBhY2NvdW50Zm9ybUNvbXApXHJcbiAgICAuY29tcG9uZW50KCdjb21tb25Db21wJywgY29tbW9uQ29tcClcclxuICAgIC5jb21wb25lbnQoJ2FkZGZpbGVDb21wJywgYWRkZmlsZUNvbXApLm5hbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9pbmRleC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyOS4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7aW1hZ2VmaWxlQ29tcH0gZnJvbSAnLi9pbWFnZS9pbWFnZS5maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7ZG9jZmlsZUNvbXB9IGZyb20gJy4vZG9jdW1lbnQvZG9jdW1lbnQuZmlsZS5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7c2VydmljZUZpbGV9IGZyb20gJy4vc2VydmljZS5maWxlLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBmaWxlc0FwcCA9IGFuZ3VsYXIubW9kdWxlKCdzcEFwcC5maWxlcycsW10pXHJcbiAgICAuY29tcG9uZW50KCdpbWFnZWZpbGVDb21wJywgaW1hZ2VmaWxlQ29tcClcclxuICAgIC5jb21wb25lbnQoJ2RvY2ZpbGVDb21wJywgZG9jZmlsZUNvbXApXHJcbiAgICAvLy5wcm92aWRlcignc2VydmljZUZpbGUnLCBzZXJ2aWNlRmlsZSlcclxuLm5hbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9maWxlcy9pbmRleC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyOC4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJvdXRlcyA9ICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSA9PiB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgncGFnZScse1xyXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi9pbmRleC5odG1sJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdwYWdlLmhvbWUnLHtcclxuICAgICAgICAgICAgdXJsOiAnL2hvbWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL2hvbWUtcGFnZS9ob21lLmh0bWwnXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdwYWdlLmhvbWUuZGFzaGJvYXJkJyx7XHJcbiAgICAgICAgICAgIHVybDogJy9kYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC5odG1sJ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgncGFnZS5ob21lLmRvY3VtZW50cycse1xyXG4gICAgICAgICAgICB1cmw6ICcvZG9jdW1lbnRzJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi9wYWdlcy9kb2N1bWVudHMtcGFnZS9kb2N1bWVudHMuaHRtbCdcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ3BhZ2UuaG9tZS5pbWFnZXMnLHtcclxuICAgICAgICAgICAgdXJsOiAnL2ltYWdlcycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vcGFnZXMvaW1hZ2VzLXBhZ2UvaW1hZ2VzLmh0bWwnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zdGF0ZSgncGFnZS5ob21lLnRlYW0nLHtcclxuICAgICAgICAgICAgdXJsOiAnL3RlYW0nLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL3RlYW0tcGFnZS90ZWFtLmh0bWwnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zdGF0ZSgncGFnZS5ob21lLmFjY291bnQnLHtcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnQnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL2FjY291bnQtcGFnZS9hY2NvdW50Lmh0bWwnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLnN0YXRlKCdwYWdlLnNpbmcnLHtcclxuICAgICAgICAgICAgdXJsOiAnL3NpbmcnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL3NpbmctcGFnZS9zaW5nLmh0bWwnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIC5zdGF0ZSgncGFnZS5pbWFnZXMuaW1hZ2UnLCB7XHJcbiAgICAvLyAgICAgICAgIHVybDogJy86cGFnZU5hbWUnLFxyXG4gICAgLy8gICAgICAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcykge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuICcvYXBwL2ltYWdlcy8nICtcclxuICAgIC8vICAgICAgICAgICAgICAgICAkc3RhdGVQYXJhbXMucGFnZU5hbWUgKyAnLmh0bWwnO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLnN0YXRlKCdwYWdlLnJlcXVlc3RzLnJlcXVlc3QnLCB7XHJcbiAgICAvLyAgICAgICAgIHVybDogJy86cGFnZU5hbWUnLFxyXG4gICAgLy8gICAgICAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcykge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuICcvYXBwL3JlcXVlc3RzLycgK1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICRzdGF0ZVBhcmFtcy5wYWdlTmFtZSArICcuaHRtbCc7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KVxyXG4gICAgLy9cclxuICAgIC8vICAgICAuc3RhdGUoJ3BhZ2UuZG9jdW1lbnRzLmRvY3VtZW50Jywge1xyXG4gICAgLy8gICAgIHVybDogJy86cGFnZU5hbWUnLFxyXG4gICAgLy8gICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbiAoJHN0YXRlUGFyYW1zKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiAnL2FwcC9kb2N1bWVudHMvJyArXHJcbiAgICAvLyAgICAgICAgICAgICAkc3RhdGVQYXJhbXMucGFnZU5hbWUgKyAnLmh0bWwnO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci53aGVuKCcnLCcvc2luZycpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3JvdXRlcnMuY29uZmlnLmpzIiwiLyoqXG4gKiBTdGF0ZS1iYXNlZCByb3V0aW5nIGZvciBBbmd1bGFySlNcbiAqIEB2ZXJzaW9uIHYwLjQuMlxuICogQGxpbmsgaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmNvbS9cbiAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlLCBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qIGNvbW1vbmpzIHBhY2thZ2UgbWFuYWdlciBzdXBwb3J0IChlZyBjb21wb25lbnRqcykgKi9cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzID09PSBleHBvcnRzKXtcbiAgbW9kdWxlLmV4cG9ydHMgPSAndWkucm91dGVyJztcbn1cblxuKGZ1bmN0aW9uICh3aW5kb3csIGFuZ3VsYXIsIHVuZGVmaW5lZCkge1xuLypqc2hpbnQgZ2xvYmFsc3RyaWN0OnRydWUqL1xuLypnbG9iYWwgYW5ndWxhcjpmYWxzZSovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0RlZmluZWQgPSBhbmd1bGFyLmlzRGVmaW5lZCxcbiAgICBpc0Z1bmN0aW9uID0gYW5ndWxhci5pc0Z1bmN0aW9uLFxuICAgIGlzU3RyaW5nID0gYW5ndWxhci5pc1N0cmluZyxcbiAgICBpc09iamVjdCA9IGFuZ3VsYXIuaXNPYmplY3QsXG4gICAgaXNBcnJheSA9IGFuZ3VsYXIuaXNBcnJheSxcbiAgICBmb3JFYWNoID0gYW5ndWxhci5mb3JFYWNoLFxuICAgIGV4dGVuZCA9IGFuZ3VsYXIuZXh0ZW5kLFxuICAgIGNvcHkgPSBhbmd1bGFyLmNvcHksXG4gICAgdG9Kc29uID0gYW5ndWxhci50b0pzb247XG5cbmZ1bmN0aW9uIGluaGVyaXQocGFyZW50LCBleHRyYSkge1xuICByZXR1cm4gZXh0ZW5kKG5ldyAoZXh0ZW5kKGZ1bmN0aW9uKCkge30sIHsgcHJvdG90eXBlOiBwYXJlbnQgfSkpKCksIGV4dHJhKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UoZHN0KSB7XG4gIGZvckVhY2goYXJndW1lbnRzLCBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqICE9PSBkc3QpIHtcbiAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICghZHN0Lmhhc093blByb3BlcnR5KGtleSkpIGRzdFtrZXldID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjb21tb24gYW5jZXN0b3IgcGF0aCBiZXR3ZWVuIHR3byBzdGF0ZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGZpcnN0IFRoZSBmaXJzdCBzdGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWNvbmQgVGhlIHNlY29uZCBzdGF0ZS5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIHN0YXRlIG5hbWVzIGluIGRlc2NlbmRpbmcgb3JkZXIsIG5vdCBpbmNsdWRpbmcgdGhlIHJvb3QuXG4gKi9cbmZ1bmN0aW9uIGFuY2VzdG9ycyhmaXJzdCwgc2Vjb25kKSB7XG4gIHZhciBwYXRoID0gW107XG5cbiAgZm9yICh2YXIgbiBpbiBmaXJzdC5wYXRoKSB7XG4gICAgaWYgKGZpcnN0LnBhdGhbbl0gIT09IHNlY29uZC5wYXRoW25dKSBicmVhaztcbiAgICBwYXRoLnB1c2goZmlyc3QucGF0aFtuXSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbi8qKlxuICogSUU4LXNhZmUgd3JhcHBlciBmb3IgYE9iamVjdC5rZXlzKClgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgQSBKYXZhU2NyaXB0IG9iamVjdC5cbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QgYXMgYW4gYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdEtleXMob2JqZWN0KSB7XG4gIGlmIChPYmplY3Qua2V5cykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3JFYWNoKG9iamVjdCwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICByZXN1bHQucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJRTgtc2FmZSB3cmFwcGVyIGZvciBgQXJyYXkucHJvdG90eXBlLmluZGV4T2YoKWAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQSBKYXZhU2NyaXB0IGFycmF5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBBIHZhbHVlIHRvIHNlYXJjaCB0aGUgYXJyYXkgZm9yLlxuICogQHJldHVybiB7TnVtYmVyfSBSZXR1cm5zIHRoZSBhcnJheSBpbmRleCB2YWx1ZSBvZiBgdmFsdWVgLCBvciBgLTFgIGlmIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSwgTnVtYmVyKGFyZ3VtZW50c1syXSkgfHwgMCk7XG4gIH1cbiAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aCA+Pj4gMCwgZnJvbSA9IE51bWJlcihhcmd1bWVudHNbMl0pIHx8IDA7XG4gIGZyb20gPSAoZnJvbSA8IDApID8gTWF0aC5jZWlsKGZyb20pIDogTWF0aC5mbG9vcihmcm9tKTtcblxuICBpZiAoZnJvbSA8IDApIGZyb20gKz0gbGVuO1xuXG4gIGZvciAoOyBmcm9tIDwgbGVuOyBmcm9tKyspIHtcbiAgICBpZiAoZnJvbSBpbiBhcnJheSAmJiBhcnJheVtmcm9tXSA9PT0gdmFsdWUpIHJldHVybiBmcm9tO1xuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgYSBzZXQgb2YgcGFyYW1ldGVycyB3aXRoIGFsbCBwYXJhbWV0ZXJzIGluaGVyaXRlZCBiZXR3ZWVuIHRoZSBjb21tb24gcGFyZW50cyBvZiB0aGVcbiAqIGN1cnJlbnQgc3RhdGUgYW5kIGEgZ2l2ZW4gZGVzdGluYXRpb24gc3RhdGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGN1cnJlbnRQYXJhbXMgVGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IHN0YXRlIHBhcmFtZXRlcnMgKCRzdGF0ZVBhcmFtcykuXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3UGFyYW1zIFRoZSBzZXQgb2YgcGFyYW1ldGVycyB3aGljaCB3aWxsIGJlIGNvbXBvc2l0ZWQgd2l0aCBpbmhlcml0ZWQgcGFyYW1zLlxuICogQHBhcmFtIHtPYmplY3R9ICRjdXJyZW50IEludGVybmFsIGRlZmluaXRpb24gb2Ygb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSAkdG8gSW50ZXJuYWwgZGVmaW5pdGlvbiBvZiBvYmplY3QgcmVwcmVzZW50aW5nIHN0YXRlIHRvIHRyYW5zaXRpb24gdG8uXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXRQYXJhbXMoY3VycmVudFBhcmFtcywgbmV3UGFyYW1zLCAkY3VycmVudCwgJHRvKSB7XG4gIHZhciBwYXJlbnRzID0gYW5jZXN0b3JzKCRjdXJyZW50LCAkdG8pLCBwYXJlbnRQYXJhbXMsIGluaGVyaXRlZCA9IHt9LCBpbmhlcml0TGlzdCA9IFtdO1xuXG4gIGZvciAodmFyIGkgaW4gcGFyZW50cykge1xuICAgIGlmICghcGFyZW50c1tpXSB8fCAhcGFyZW50c1tpXS5wYXJhbXMpIGNvbnRpbnVlO1xuICAgIHBhcmVudFBhcmFtcyA9IG9iamVjdEtleXMocGFyZW50c1tpXS5wYXJhbXMpO1xuICAgIGlmICghcGFyZW50UGFyYW1zLmxlbmd0aCkgY29udGludWU7XG5cbiAgICBmb3IgKHZhciBqIGluIHBhcmVudFBhcmFtcykge1xuICAgICAgaWYgKGluZGV4T2YoaW5oZXJpdExpc3QsIHBhcmVudFBhcmFtc1tqXSkgPj0gMCkgY29udGludWU7XG4gICAgICBpbmhlcml0TGlzdC5wdXNoKHBhcmVudFBhcmFtc1tqXSk7XG4gICAgICBpbmhlcml0ZWRbcGFyZW50UGFyYW1zW2pdXSA9IGN1cnJlbnRQYXJhbXNbcGFyZW50UGFyYW1zW2pdXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4dGVuZCh7fSwgaW5oZXJpdGVkLCBuZXdQYXJhbXMpO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbm9uLXN0cmljdCBjb21wYXJpc29uIG9mIHRoZSBzdWJzZXQgb2YgdHdvIG9iamVjdHMsIGRlZmluZWQgYnkgYSBsaXN0IG9mIGtleXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIGZpcnN0IG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBzZWNvbmQgb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheX0ga2V5cyBUaGUgbGlzdCBvZiBrZXlzIHdpdGhpbiBlYWNoIG9iamVjdCB0byBjb21wYXJlLiBJZiB0aGUgbGlzdCBpcyBlbXB0eSBvciBub3Qgc3BlY2lmaWVkLFxuICogICAgICAgICAgICAgICAgICAgICBpdCBkZWZhdWx0cyB0byB0aGUgbGlzdCBvZiBrZXlzIGluIGBhYC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBrZXlzIG1hdGNoLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxGb3JLZXlzKGEsIGIsIGtleXMpIHtcbiAgaWYgKCFrZXlzKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIG4gaW4gYSkga2V5cy5wdXNoKG4pOyAvLyBVc2VkIGluc3RlYWQgb2YgT2JqZWN0LmtleXMoKSBmb3IgSUU4IGNvbXBhdGliaWxpdHlcbiAgfVxuXG4gIGZvciAodmFyIGk9MDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGsgPSBrZXlzW2ldO1xuICAgIGlmIChhW2tdICE9IGJba10pIHJldHVybiBmYWxzZTsgLy8gTm90ICc9PT0nLCB2YWx1ZXMgYXJlbid0IG5lY2Vzc2FyaWx5IG5vcm1hbGl6ZWRcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdWJzZXQgb2YgYW4gb2JqZWN0LCBiYXNlZCBvbiBhIGxpc3Qgb2Yga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBrZXlzXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzXG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIGEgc3Vic2V0IG9mIGB2YWx1ZXNgLlxuICovXG5mdW5jdGlvbiBmaWx0ZXJCeUtleXMoa2V5cywgdmFsdWVzKSB7XG4gIHZhciBmaWx0ZXJlZCA9IHt9O1xuXG4gIGZvckVhY2goa2V5cywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBmaWx0ZXJlZFtuYW1lXSA9IHZhbHVlc1tuYW1lXTtcbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZDtcbn1cblxuLy8gbGlrZSBfLmluZGV4Qnlcbi8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZSwgb3IgeW91IHdhbnQgbGFzdC1vbmUtaW4gdG8gd2luXG5mdW5jdGlvbiBpbmRleEJ5KGFycmF5LCBwcm9wTmFtZSkge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXN1bHRbaXRlbVtwcm9wTmFtZV1dID0gaXRlbTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4dHJhY3RlZCBmcm9tIHVuZGVyc2NvcmUuanNcbi8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG5mdW5jdGlvbiBwaWNrKG9iaikge1xuICB2YXIgY29weSA9IHt9O1xuICB2YXIga2V5cyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoQXJyYXkucHJvdG90eXBlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgZm9yRWFjaChrZXlzLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoa2V5IGluIG9iaikgY29weVtrZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gY29weTtcbn1cblxuLy8gZXh0cmFjdGVkIGZyb20gdW5kZXJzY29yZS5qc1xuLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9taXR0aW5nIHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuZnVuY3Rpb24gb21pdChvYmopIHtcbiAgdmFyIGNvcHkgPSB7fTtcbiAgdmFyIGtleXMgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KEFycmF5LnByb3RvdHlwZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaW5kZXhPZihrZXlzLCBrZXkpID09IC0xKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgfVxuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gcGx1Y2soY29sbGVjdGlvbiwga2V5KSB7XG4gIHZhciByZXN1bHQgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gW10gOiB7fTtcblxuICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbCwgaSkge1xuICAgIHJlc3VsdFtpXSA9IGlzRnVuY3Rpb24oa2V5KSA/IGtleSh2YWwpIDogdmFsW2tleV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoY29sbGVjdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIGFycmF5ID0gaXNBcnJheShjb2xsZWN0aW9uKTtcbiAgdmFyIHJlc3VsdCA9IGFycmF5ID8gW10gOiB7fTtcbiAgZm9yRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWwsIGkpIHtcbiAgICBpZiAoY2FsbGJhY2sodmFsLCBpKSkge1xuICAgICAgcmVzdWx0W2FycmF5ID8gcmVzdWx0Lmxlbmd0aCA6IGldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IFtdIDoge307XG5cbiAgZm9yRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWwsIGkpIHtcbiAgICByZXN1bHRbaV0gPSBjYWxsYmFjayh2YWwsIGkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gaXNzdWUgIzI2NzYgIzI4ODlcbmZ1bmN0aW9uIHNpbGVuY2VVbmNhdWdodEluUHJvbWlzZSAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7fSkgJiYgcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiAjIHVpLnJvdXRlci51dGlsIHN1Yi1tb2R1bGVcbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBhIGRlcGVuZGVuY3kgb2Ygb3RoZXIgc3ViLW1vZHVsZXMuIERvIG5vdCBpbmNsdWRlIHRoaXMgbW9kdWxlIGFzIGEgZGVwZW5kZW5jeVxuICogaW4geW91ciBhbmd1bGFyIGFwcCAodXNlIHtAbGluayB1aS5yb3V0ZXJ9IG1vZHVsZSBpbnN0ZWFkKS5cbiAqXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIudXRpbCcsIFsnbmcnXSk7XG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSB1aS5yb3V0ZXIucm91dGVyXG4gKiBcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIudXRpbFxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogIyB1aS5yb3V0ZXIucm91dGVyIHN1Yi1tb2R1bGVcbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBhIGRlcGVuZGVuY3kgb2Ygb3RoZXIgc3ViLW1vZHVsZXMuIERvIG5vdCBpbmNsdWRlIHRoaXMgbW9kdWxlIGFzIGEgZGVwZW5kZW5jeVxuICogaW4geW91ciBhbmd1bGFyIGFwcCAodXNlIHtAbGluayB1aS5yb3V0ZXJ9IG1vZHVsZSBpbnN0ZWFkKS5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci5yb3V0ZXInLCBbJ3VpLnJvdXRlci51dGlsJ10pO1xuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgdWkucm91dGVyLnN0YXRlXG4gKiBcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIucm91dGVyXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnV0aWxcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqICMgdWkucm91dGVyLnN0YXRlIHN1Yi1tb2R1bGVcbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBhIGRlcGVuZGVuY3kgb2YgdGhlIG1haW4gdWkucm91dGVyIG1vZHVsZS4gRG8gbm90IGluY2x1ZGUgdGhpcyBtb2R1bGUgYXMgYSBkZXBlbmRlbmN5XG4gKiBpbiB5b3VyIGFuZ3VsYXIgYXBwICh1c2Uge0BsaW5rIHVpLnJvdXRlcn0gbW9kdWxlIGluc3RlYWQpLlxuICogXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIuc3RhdGUnLCBbJ3VpLnJvdXRlci5yb3V0ZXInLCAndWkucm91dGVyLnV0aWwnXSk7XG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSB1aS5yb3V0ZXJcbiAqXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnN0YXRlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiAjIHVpLnJvdXRlclxuICogXG4gKiAjIyBUaGUgbWFpbiBtb2R1bGUgZm9yIHVpLnJvdXRlciBcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIHN1Yi1tb2R1bGVzIGluY2x1ZGVkIHdpdGggdGhlIHVpLnJvdXRlciBtb2R1bGUsIGhvd2V2ZXIgb25seSB0aGlzIG1vZHVsZSBpcyBuZWVkZWRcbiAqIGFzIGEgZGVwZW5kZW5jeSB3aXRoaW4geW91ciBhbmd1bGFyIGFwcC4gVGhlIG90aGVyIG1vZHVsZXMgYXJlIGZvciBvcmdhbml6YXRpb24gcHVycG9zZXMuIFxuICpcbiAqIFRoZSBtb2R1bGVzIGFyZTpcbiAqICogdWkucm91dGVyIC0gdGhlIG1haW4gXCJ1bWJyZWxsYVwiIG1vZHVsZVxuICogKiB1aS5yb3V0ZXIucm91dGVyIC0gXG4gKiBcbiAqICpZb3UnbGwgbmVlZCB0byBpbmNsdWRlICoqb25seSoqIHRoaXMgbW9kdWxlIGFzIHRoZSBkZXBlbmRlbmN5IHdpdGhpbiB5b3VyIGFuZ3VsYXIgYXBwLipcbiAqIFxuICogPHByZT5cbiAqIDwhZG9jdHlwZSBodG1sPlxuICogPGh0bWwgbmctYXBwPVwibXlBcHBcIj5cbiAqIDxoZWFkPlxuICogICA8c2NyaXB0IHNyYz1cImpzL2FuZ3VsYXIuanNcIj48L3NjcmlwdD5cbiAqICAgPCEtLSBJbmNsdWRlIHRoZSB1aS1yb3V0ZXIgc2NyaXB0IC0tPlxuICogICA8c2NyaXB0IHNyYz1cImpzL2FuZ3VsYXItdWktcm91dGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxuICogICA8c2NyaXB0PlxuICogICAgIC8vIC4uLmFuZCBhZGQgJ3VpLnJvdXRlcicgYXMgYSBkZXBlbmRlbmN5XG4gKiAgICAgdmFyIG15QXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyd1aS5yb3V0ZXInXSk7XG4gKiAgIDwvc2NyaXB0PlxuICogPC9oZWFkPlxuICogPGJvZHk+XG4gKiA8L2JvZHk+XG4gKiA8L2h0bWw+XG4gKiA8L3ByZT5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlcicsIFsndWkucm91dGVyLnN0YXRlJ10pO1xuXG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLmNvbXBhdCcsIFsndWkucm91dGVyJ10pO1xuXG4vKipcbiAqIEBuZ2RvYyBvYmplY3RcbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiRyZXNvbHZlXG4gKlxuICogQHJlcXVpcmVzICRxXG4gKiBAcmVxdWlyZXMgJGluamVjdG9yXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBNYW5hZ2VzIHJlc29sdXRpb24gb2YgKGFjeWNsaWMpIGdyYXBocyBvZiBwcm9taXNlcy5cbiAqL1xuJFJlc29sdmUuJGluamVjdCA9IFsnJHEnLCAnJGluamVjdG9yJ107XG5mdW5jdGlvbiAkUmVzb2x2ZSggICRxLCAgICAkaW5qZWN0b3IpIHtcbiAgXG4gIHZhciBWSVNJVF9JTl9QUk9HUkVTUyA9IDEsXG4gICAgICBWSVNJVF9ET05FID0gMixcbiAgICAgIE5PVEhJTkcgPSB7fSxcbiAgICAgIE5PX0RFUEVOREVOQ0lFUyA9IFtdLFxuICAgICAgTk9fTE9DQUxTID0gTk9USElORyxcbiAgICAgIE5PX1BBUkVOVCA9IGV4dGVuZCgkcS53aGVuKE5PVEhJTkcpLCB7ICQkcHJvbWlzZXM6IE5PVEhJTkcsICQkdmFsdWVzOiBOT1RISU5HIH0pO1xuICBcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiRyZXNvbHZlI3N0dWR5XG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kcmVzb2x2ZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU3R1ZGllcyBhIHNldCBvZiBpbnZvY2FibGVzIHRoYXQgYXJlIGxpa2VseSB0byBiZSB1c2VkIG11bHRpcGxlIHRpbWVzLlxuICAgKiA8cHJlPlxuICAgKiAkcmVzb2x2ZS5zdHVkeShpbnZvY2FibGVzKShsb2NhbHMsIHBhcmVudCwgc2VsZilcbiAgICogPC9wcmU+XG4gICAqIGlzIGVxdWl2YWxlbnQgdG9cbiAgICogPHByZT5cbiAgICogJHJlc29sdmUucmVzb2x2ZShpbnZvY2FibGVzLCBsb2NhbHMsIHBhcmVudCwgc2VsZilcbiAgICogPC9wcmU+XG4gICAqIGJ1dCB0aGUgZm9ybWVyIGlzIG1vcmUgZWZmaWNpZW50IChpbiBmYWN0IGByZXNvbHZlYCBqdXN0IGNhbGxzIGBzdHVkeWAgXG4gICAqIGludGVybmFsbHkpLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gaW52b2NhYmxlcyBJbnZvY2FibGUgb2JqZWN0c1xuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gYSBmdW5jdGlvbiB0byBwYXNzIGluIGxvY2FscywgcGFyZW50IGFuZCBzZWxmXG4gICAqL1xuICB0aGlzLnN0dWR5ID0gZnVuY3Rpb24gKGludm9jYWJsZXMpIHtcbiAgICBpZiAoIWlzT2JqZWN0KGludm9jYWJsZXMpKSB0aHJvdyBuZXcgRXJyb3IoXCInaW52b2NhYmxlcycgbXVzdCBiZSBhbiBvYmplY3RcIik7XG4gICAgdmFyIGludm9jYWJsZUtleXMgPSBvYmplY3RLZXlzKGludm9jYWJsZXMgfHwge30pO1xuICAgIFxuICAgIC8vIFBlcmZvcm0gYSB0b3BvbG9naWNhbCBzb3J0IG9mIGludm9jYWJsZXMgdG8gYnVpbGQgYW4gb3JkZXJlZCBwbGFuXG4gICAgdmFyIHBsYW4gPSBbXSwgY3ljbGUgPSBbXSwgdmlzaXRlZCA9IHt9O1xuICAgIGZ1bmN0aW9uIHZpc2l0KHZhbHVlLCBrZXkpIHtcbiAgICAgIGlmICh2aXNpdGVkW2tleV0gPT09IFZJU0lUX0RPTkUpIHJldHVybjtcbiAgICAgIFxuICAgICAgY3ljbGUucHVzaChrZXkpO1xuICAgICAgaWYgKHZpc2l0ZWRba2V5XSA9PT0gVklTSVRfSU5fUFJPR1JFU1MpIHtcbiAgICAgICAgY3ljbGUuc3BsaWNlKDAsIGluZGV4T2YoY3ljbGUsIGtleSkpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDeWNsaWMgZGVwZW5kZW5jeTogXCIgKyBjeWNsZS5qb2luKFwiIC0+IFwiKSk7XG4gICAgICB9XG4gICAgICB2aXNpdGVkW2tleV0gPSBWSVNJVF9JTl9QUk9HUkVTUztcbiAgICAgIFxuICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICBwbGFuLnB1c2goa2V5LCBbIGZ1bmN0aW9uKCkgeyByZXR1cm4gJGluamVjdG9yLmdldCh2YWx1ZSk7IH1dLCBOT19ERVBFTkRFTkNJRVMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9ICRpbmplY3Rvci5hbm5vdGF0ZSh2YWx1ZSk7XG4gICAgICAgIGZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICBpZiAocGFyYW0gIT09IGtleSAmJiBpbnZvY2FibGVzLmhhc093blByb3BlcnR5KHBhcmFtKSkgdmlzaXQoaW52b2NhYmxlc1twYXJhbV0sIHBhcmFtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYW4ucHVzaChrZXksIHZhbHVlLCBwYXJhbXMpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjeWNsZS5wb3AoKTtcbiAgICAgIHZpc2l0ZWRba2V5XSA9IFZJU0lUX0RPTkU7XG4gICAgfVxuICAgIGZvckVhY2goaW52b2NhYmxlcywgdmlzaXQpO1xuICAgIGludm9jYWJsZXMgPSBjeWNsZSA9IHZpc2l0ZWQgPSBudWxsOyAvLyBwbGFuIGlzIGFsbCB0aGF0J3MgcmVxdWlyZWRcbiAgICBcbiAgICBmdW5jdGlvbiBpc1Jlc29sdmUodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUudGhlbiAmJiB2YWx1ZS4kJHByb21pc2VzO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxvY2FscywgcGFyZW50LCBzZWxmKSB7XG4gICAgICBpZiAoaXNSZXNvbHZlKGxvY2FscykgJiYgc2VsZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNlbGYgPSBwYXJlbnQ7IHBhcmVudCA9IGxvY2FsczsgbG9jYWxzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICghbG9jYWxzKSBsb2NhbHMgPSBOT19MT0NBTFM7XG4gICAgICBlbHNlIGlmICghaXNPYmplY3QobG9jYWxzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInbG9jYWxzJyBtdXN0IGJlIGFuIG9iamVjdFwiKTtcbiAgICAgIH0gICAgICAgXG4gICAgICBpZiAoIXBhcmVudCkgcGFyZW50ID0gTk9fUEFSRU5UO1xuICAgICAgZWxzZSBpZiAoIWlzUmVzb2x2ZShwYXJlbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIidwYXJlbnQnIG11c3QgYmUgYSBwcm9taXNlIHJldHVybmVkIGJ5ICRyZXNvbHZlLnJlc29sdmUoKVwiKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gVG8gY29tcGxldGUgdGhlIG92ZXJhbGwgcmVzb2x1dGlvbiwgd2UgaGF2ZSB0byB3YWl0IGZvciB0aGUgcGFyZW50XG4gICAgICAvLyBwcm9taXNlIGFuZCBmb3IgdGhlIHByb21pc2UgZm9yIGVhY2ggaW52b2thYmxlIGluIG91ciBwbGFuLlxuICAgICAgdmFyIHJlc29sdXRpb24gPSAkcS5kZWZlcigpLFxuICAgICAgICAgIHJlc3VsdCA9IHNpbGVuY2VVbmNhdWdodEluUHJvbWlzZShyZXNvbHV0aW9uLnByb21pc2UpLFxuICAgICAgICAgIHByb21pc2VzID0gcmVzdWx0LiQkcHJvbWlzZXMgPSB7fSxcbiAgICAgICAgICB2YWx1ZXMgPSBleHRlbmQoe30sIGxvY2FscyksXG4gICAgICAgICAgd2FpdCA9IDEgKyBwbGFuLmxlbmd0aC8zLFxuICAgICAgICAgIG1lcmdlZCA9IGZhbHNlO1xuXG4gICAgICBzaWxlbmNlVW5jYXVnaHRJblByb21pc2UocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmVudCB2YWx1ZXMgd2UgaGF2ZW4ndCBnb3QgeWV0IGFuZCBwdWJsaXNoIG91ciBvd24gJCR2YWx1ZXNcbiAgICAgICAgaWYgKCEtLXdhaXQpIHtcbiAgICAgICAgICBpZiAoIW1lcmdlZCkgbWVyZ2UodmFsdWVzLCBwYXJlbnQuJCR2YWx1ZXMpOyBcbiAgICAgICAgICByZXN1bHQuJCR2YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgICAgcmVzdWx0LiQkcHJvbWlzZXMgPSByZXN1bHQuJCRwcm9taXNlcyB8fCB0cnVlOyAvLyBrZWVwIGZvciBpc1Jlc29sdmUoKVxuICAgICAgICAgIGRlbGV0ZSByZXN1bHQuJCRpbmhlcml0ZWRWYWx1ZXM7XG4gICAgICAgICAgcmVzb2x1dGlvbi5yZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZnVuY3Rpb24gZmFpbChyZWFzb24pIHtcbiAgICAgICAgcmVzdWx0LiQkZmFpbHVyZSA9IHJlYXNvbjtcbiAgICAgICAgcmVzb2x1dGlvbi5yZWplY3QocmVhc29uKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2hvcnQtY2lyY3VpdCBpZiBwYXJlbnQgaGFzIGFscmVhZHkgZmFpbGVkXG4gICAgICBpZiAoaXNEZWZpbmVkKHBhcmVudC4kJGZhaWx1cmUpKSB7XG4gICAgICAgIGZhaWwocGFyZW50LiQkZmFpbHVyZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChwYXJlbnQuJCRpbmhlcml0ZWRWYWx1ZXMpIHtcbiAgICAgICAgbWVyZ2UodmFsdWVzLCBvbWl0KHBhcmVudC4kJGluaGVyaXRlZFZhbHVlcywgaW52b2NhYmxlS2V5cykpO1xuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSBwYXJlbnQgdmFsdWVzIGlmIHRoZSBwYXJlbnQgaGFzIGFscmVhZHkgcmVzb2x2ZWQsIG9yIG1lcmdlXG4gICAgICAvLyBwYXJlbnQgcHJvbWlzZXMgYW5kIHdhaXQgaWYgdGhlIHBhcmVudCByZXNvbHZlIGlzIHN0aWxsIGluIHByb2dyZXNzLlxuICAgICAgZXh0ZW5kKHByb21pc2VzLCBwYXJlbnQuJCRwcm9taXNlcyk7XG4gICAgICBpZiAocGFyZW50LiQkdmFsdWVzKSB7XG4gICAgICAgIG1lcmdlZCA9IG1lcmdlKHZhbHVlcywgb21pdChwYXJlbnQuJCR2YWx1ZXMsIGludm9jYWJsZUtleXMpKTtcbiAgICAgICAgcmVzdWx0LiQkaW5oZXJpdGVkVmFsdWVzID0gb21pdChwYXJlbnQuJCR2YWx1ZXMsIGludm9jYWJsZUtleXMpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFyZW50LiQkaW5oZXJpdGVkVmFsdWVzKSB7XG4gICAgICAgICAgcmVzdWx0LiQkaW5oZXJpdGVkVmFsdWVzID0gb21pdChwYXJlbnQuJCRpbmhlcml0ZWRWYWx1ZXMsIGludm9jYWJsZUtleXMpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgcGFyZW50LnRoZW4oZG9uZSwgZmFpbCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFByb2Nlc3MgZWFjaCBpbnZvY2FibGUgaW4gdGhlIHBsYW4sIGJ1dCBpZ25vcmUgYW55IHdoZXJlIGEgbG9jYWwgb2YgdGhlIHNhbWUgbmFtZSBleGlzdHMuXG4gICAgICBmb3IgKHZhciBpPTAsIGlpPXBsYW4ubGVuZ3RoOyBpPGlpOyBpKz0zKSB7XG4gICAgICAgIGlmIChsb2NhbHMuaGFzT3duUHJvcGVydHkocGxhbltpXSkpIGRvbmUoKTtcbiAgICAgICAgZWxzZSBpbnZva2UocGxhbltpXSwgcGxhbltpKzFdLCBwbGFuW2krMl0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmdW5jdGlvbiBpbnZva2Uoa2V5LCBpbnZvY2FibGUsIHBhcmFtcykge1xuICAgICAgICAvLyBDcmVhdGUgYSBkZWZlcnJlZCBmb3IgdGhpcyBpbnZvY2F0aW9uLiBGYWlsdXJlcyB3aWxsIHByb3BhZ2F0ZSB0byB0aGUgcmVzb2x1dGlvbiBhcyB3ZWxsLlxuICAgICAgICB2YXIgaW52b2NhdGlvbiA9ICRxLmRlZmVyKCksIHdhaXRQYXJhbXMgPSAwO1xuICAgICAgICBmdW5jdGlvbiBvbmZhaWx1cmUocmVhc29uKSB7XG4gICAgICAgICAgaW52b2NhdGlvbi5yZWplY3QocmVhc29uKTtcbiAgICAgICAgICBmYWlsKHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2FpdCBmb3IgYW55IHBhcmFtZXRlciB0aGF0IHdlIGhhdmUgYSBwcm9taXNlIGZvciAoZWl0aGVyIGZyb20gcGFyZW50IG9yIGZyb20gdGhpc1xuICAgICAgICAvLyByZXNvbHZlOyBpbiB0aGF0IGNhc2Ugc3R1ZHkoKSB3aWxsIGhhdmUgbWFkZSBzdXJlIGl0J3Mgb3JkZXJlZCBiZWZvcmUgdXMgaW4gdGhlIHBsYW4pLlxuICAgICAgICBmb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gKGRlcCkge1xuICAgICAgICAgIGlmIChwcm9taXNlcy5oYXNPd25Qcm9wZXJ0eShkZXApICYmICFsb2NhbHMuaGFzT3duUHJvcGVydHkoZGVwKSkge1xuICAgICAgICAgICAgd2FpdFBhcmFtcysrO1xuICAgICAgICAgICAgcHJvbWlzZXNbZGVwXS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgdmFsdWVzW2RlcF0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgIGlmICghKC0td2FpdFBhcmFtcykpIHByb2NlZWQoKTtcbiAgICAgICAgICAgIH0sIG9uZmFpbHVyZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF3YWl0UGFyYW1zKSBwcm9jZWVkKCk7XG4gICAgICAgIGZ1bmN0aW9uIHByb2NlZWQoKSB7XG4gICAgICAgICAgaWYgKGlzRGVmaW5lZChyZXN1bHQuJCRmYWlsdXJlKSkgcmV0dXJuO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbnZvY2F0aW9uLnJlc29sdmUoJGluamVjdG9yLmludm9rZShpbnZvY2FibGUsIHNlbGYsIHZhbHVlcykpO1xuICAgICAgICAgICAgaW52b2NhdGlvbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSwgb25mYWlsdXJlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBvbmZhaWx1cmUoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFB1Ymxpc2ggcHJvbWlzZSBzeW5jaHJvbm91c2x5OyBpbnZvY2F0aW9ucyBmdXJ0aGVyIGRvd24gaW4gdGhlIHBsYW4gbWF5IGRlcGVuZCBvbiBpdC5cbiAgICAgICAgcHJvbWlzZXNba2V5XSA9IHNpbGVuY2VVbmNhdWdodEluUHJvbWlzZShpbnZvY2F0aW9uLnByb21pc2UpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG4gIFxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiRyZXNvbHZlI3Jlc29sdmVcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiRyZXNvbHZlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXNvbHZlcyBhIHNldCBvZiBpbnZvY2FibGVzLiBBbiBpbnZvY2FibGUgaXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIHZpYSBcbiAgICogYCRpbmplY3Rvci5pbnZva2UoKWAsIGFuZCBjYW4gaGF2ZSBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mIGRlcGVuZGVuY2llcy4gXG4gICAqIEFuIGludm9jYWJsZSBjYW4gZWl0aGVyIHJldHVybiBhIHZhbHVlIGRpcmVjdGx5LFxuICAgKiBvciBhIGAkcWAgcHJvbWlzZS4gSWYgYSBwcm9taXNlIGlzIHJldHVybmVkIGl0IHdpbGwgYmUgcmVzb2x2ZWQgYW5kIHRoZSBcbiAgICogcmVzdWx0aW5nIHZhbHVlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLiBEZXBlbmRlbmNpZXMgb2YgaW52b2NhYmxlcyBhcmUgcmVzb2x2ZWQgXG4gICAqIChpbiB0aGlzIG9yZGVyIG9mIHByZWNlZGVuY2UpXG4gICAqXG4gICAqIC0gZnJvbSB0aGUgc3BlY2lmaWVkIGBsb2NhbHNgXG4gICAqIC0gZnJvbSBhbm90aGVyIGludm9jYWJsZSB0aGF0IGlzIHBhcnQgb2YgdGhpcyBgJHJlc29sdmVgIGNhbGxcbiAgICogLSBmcm9tIGFuIGludm9jYWJsZSB0aGF0IGlzIGluaGVyaXRlZCBmcm9tIGEgYHBhcmVudGAgY2FsbCB0byBgJHJlc29sdmVgIFxuICAgKiAgIChvciByZWN1cnNpdmVseVxuICAgKiAtIGZyb20gYW55IGFuY2VzdG9yIGAkcmVzb2x2ZWAgb2YgdGhhdCBwYXJlbnQpLlxuICAgKlxuICAgKiBUaGUgcmV0dXJuIHZhbHVlIG9mIGAkcmVzb2x2ZWAgaXMgYSBwcm9taXNlIGZvciBhbiBvYmplY3QgdGhhdCBjb250YWlucyBcbiAgICogKGluIHRoaXMgb3JkZXIgb2YgcHJlY2VkZW5jZSlcbiAgICpcbiAgICogLSBhbnkgYGxvY2Fsc2AgKGlmIHNwZWNpZmllZClcbiAgICogLSB0aGUgcmVzb2x2ZWQgcmV0dXJuIHZhbHVlcyBvZiBhbGwgaW5qZWN0YWJsZXNcbiAgICogLSBhbnkgdmFsdWVzIGluaGVyaXRlZCBmcm9tIGEgYHBhcmVudGAgY2FsbCB0byBgJHJlc29sdmVgIChpZiBzcGVjaWZpZWQpXG4gICAqXG4gICAqIFRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSBhZnRlciB0aGUgYHBhcmVudGAgcHJvbWlzZSAoaWYgYW55KSBhbmQgYWxsIHByb21pc2VzIFxuICAgKiByZXR1cm5lZCBieSBpbmplY3RhYmxlcyBoYXZlIGJlZW4gcmVzb2x2ZWQuIElmIGFueSBpbnZvY2FibGUgXG4gICAqIChvciBgJGluamVjdG9yLmludm9rZWApIHRocm93cyBhbiBleGNlcHRpb24sIG9yIGlmIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhbiBcbiAgICogaW52b2NhYmxlIGlzIHJlamVjdGVkLCB0aGUgYCRyZXNvbHZlYCBwcm9taXNlIGlzIGltbWVkaWF0ZWx5IHJlamVjdGVkIHdpdGggdGhlIFxuICAgKiBzYW1lIGVycm9yLiBBIHJlamVjdGlvbiBvZiBhIGBwYXJlbnRgIHByb21pc2UgKGlmIHNwZWNpZmllZCkgd2lsbCBsaWtld2lzZSBiZSBcbiAgICogcHJvcGFnYXRlZCBpbW1lZGlhdGVseS4gT25jZSB0aGUgYCRyZXNvbHZlYCBwcm9taXNlIGhhcyBiZWVuIHJlamVjdGVkLCBubyBcbiAgICogZnVydGhlciBpbnZvY2FibGVzIHdpbGwgYmUgY2FsbGVkLlxuICAgKiBcbiAgICogQ3ljbGljIGRlcGVuZGVuY2llcyBiZXR3ZWVuIGludm9jYWJsZXMgYXJlIG5vdCBwZXJtaXR0ZWQgYW5kIHdpbGwgY2F1c2UgYCRyZXNvbHZlYFxuICAgKiB0byB0aHJvdyBhbiBlcnJvci4gQXMgYSBzcGVjaWFsIGNhc2UsIGFuIGluamVjdGFibGUgY2FuIGRlcGVuZCBvbiBhIHBhcmFtZXRlciBcbiAgICogd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBpbmplY3RhYmxlLCB3aGljaCB3aWxsIGJlIGZ1bGZpbGxlZCBmcm9tIHRoZSBgcGFyZW50YCBcbiAgICogaW5qZWN0YWJsZSBvZiB0aGUgc2FtZSBuYW1lLiBUaGlzIGFsbG93cyBpbmhlcml0ZWQgdmFsdWVzIHRvIGJlIGRlY29yYXRlZC4gXG4gICAqIE5vdGUgdGhhdCBpbiB0aGlzIGNhc2UgYW55IG90aGVyIGluamVjdGFibGUgaW4gdGhlIHNhbWUgYCRyZXNvbHZlYCB3aXRoIHRoZSBzYW1lXG4gICAqIGRlcGVuZGVuY3kgd291bGQgc2VlIHRoZSBkZWNvcmF0ZWQgdmFsdWUsIG5vdCB0aGUgaW5oZXJpdGVkIHZhbHVlLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgbWlzc2luZyBkZXBlbmRlbmNpZXMgLS0gdW5saWtlIGN5Y2xpYyBkZXBlbmRlbmNpZXMgLS0gd2lsbCBjYXVzZSBhbiBcbiAgICogKGFzeW5jaHJvbm91cykgcmVqZWN0aW9uIG9mIHRoZSBgJHJlc29sdmVgIHByb21pc2UgcmF0aGVyIHRoYW4gYSAoc3luY2hyb25vdXMpIFxuICAgKiBleGNlcHRpb24uXG4gICAqXG4gICAqIEludm9jYWJsZXMgYXJlIGludm9rZWQgZWFnZXJseSBhcyBzb29uIGFzIGFsbCBkZXBlbmRlbmNpZXMgYXJlIGF2YWlsYWJsZS4gXG4gICAqIFRoaXMgaXMgdHJ1ZSBldmVuIGZvciBkZXBlbmRlbmNpZXMgaW5oZXJpdGVkIGZyb20gYSBgcGFyZW50YCBjYWxsIHRvIGAkcmVzb2x2ZWAuXG4gICAqXG4gICAqIEFzIGEgc3BlY2lhbCBjYXNlLCBhbiBpbnZvY2FibGUgY2FuIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGlzIHRha2VuIHRvIFxuICAgKiBiZSBhIHNlcnZpY2UgbmFtZSB0byBiZSBwYXNzZWQgdG8gYCRpbmplY3Rvci5nZXQoKWAuIFRoaXMgaXMgc3VwcG9ydGVkIHByaW1hcmlseSBcbiAgICogZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IHdpdGggdGhlIGByZXNvbHZlYCBwcm9wZXJ0eSBvZiBgJHJvdXRlUHJvdmlkZXJgIFxuICAgKiByb3V0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbnZvY2FibGVzIGZ1bmN0aW9ucyB0byBpbnZva2Ugb3IgXG4gICAqIGAkaW5qZWN0b3JgIHNlcnZpY2VzIHRvIGZldGNoLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbG9jYWxzICB2YWx1ZXMgdG8gbWFrZSBhdmFpbGFibGUgdG8gdGhlIGluamVjdGFibGVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnQgIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhbm90aGVyIGNhbGwgdG8gYCRyZXNvbHZlYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHNlbGYgIHRoZSBgdGhpc2AgZm9yIHRoZSBpbnZva2VkIG1ldGhvZHNcbiAgICogQHJldHVybiB7b2JqZWN0fSBQcm9taXNlIGZvciBhbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgcmVzb2x2ZWQgcmV0dXJuIHZhbHVlXG4gICAqIG9mIGFsbCBpbnZvY2FibGVzLCBhcyB3ZWxsIGFzIGFueSBpbmhlcml0ZWQgYW5kIGxvY2FsIHZhbHVlcy5cbiAgICovXG4gIHRoaXMucmVzb2x2ZSA9IGZ1bmN0aW9uIChpbnZvY2FibGVzLCBsb2NhbHMsIHBhcmVudCwgc2VsZikge1xuICAgIHJldHVybiB0aGlzLnN0dWR5KGludm9jYWJsZXMpKGxvY2FscywgcGFyZW50LCBzZWxmKTtcbiAgfTtcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci51dGlsJykuc2VydmljZSgnJHJlc29sdmUnLCAkUmVzb2x2ZSk7XG5cblxuXG4vKipcbiAqIEBuZ2RvYyBvYmplY3RcbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnlQcm92aWRlclxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUHJvdmlkZXIgZm9yICR0ZW1wbGF0ZUZhY3RvcnkuIE1hbmFnZXMgd2hpY2ggdGVtcGxhdGUtbG9hZGluZyBtZWNoYW5pc20gdG9cbiAqIHVzZSwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbW9zdCByZWNlbnQgb25lICgkdGVtcGxhdGVSZXF1ZXN0IG9uIEFuZ3VsYXJcbiAqIHZlcnNpb25zIHN0YXJ0aW5nIGZyb20gMS4zLCAkaHR0cCBvdGhlcndpc2UpLlxuICovXG5mdW5jdGlvbiBUZW1wbGF0ZUZhY3RvcnlQcm92aWRlcigpIHtcbiAgdmFyIHNob3VsZFVuc2FmZWx5VXNlSHR0cCA9IGFuZ3VsYXIudmVyc2lvbi5taW5vciA8IDM7XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5UHJvdmlkZXIjc2hvdWxkVW5zYWZlbHlVc2VIdHRwXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5UHJvdmlkZXJcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEZvcmNlcyAkdGVtcGxhdGVGYWN0b3J5IHRvIHVzZSAkaHR0cCBpbnN0ZWFkIG9mICR0ZW1wbGF0ZVJlcXVlc3QuIFRoaXNcbiAgICogbWlnaHQgY2F1c2UgWFNTLCBhcyAkaHR0cCBkb2Vzbid0IGVuZm9yY2UgdGhlIHJlZ3VsYXIgc2VjdXJpdHkgY2hlY2tzIGZvclxuICAgKiB0ZW1wbGF0ZXMgdGhhdCBoYXZlIGJlZW4gaW50cm9kdWNlZCBpbiBBbmd1bGFyIDEuMy4gTm90ZSB0aGF0IHNldHRpbmcgdGhpc1xuICAgKiB0byBmYWxzZSBvbiBBbmd1bGFyIG9sZGVyIHRoYW4gMS4zLnggd2lsbCBjcmFzaCwgYXMgdGhlICR0ZW1wbGF0ZVJlcXVlc3RcbiAgICogc2VydmljZSAoYW5kIHRoZSBzZWN1cml0eSBjaGVja3MpIGFyZSBub3QgaW1wbGVtZW50ZWQgb24gdGhlc2UgdmVyc2lvbnMuXG4gICAqXG4gICAqIFNlZSB0aGUgJHNjZSBkb2N1bWVudGF0aW9uLCBzZWN0aW9uXG4gICAqIDxhIGhyZWY9XCJodHRwczovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmcvc2VydmljZS8kc2NlI2ltcGFjdC1vbi1sb2FkaW5nLXRlbXBsYXRlc1wiPlxuICAgKiBJbXBhY3Qgb24gbG9hZGluZyB0ZW1wbGF0ZXM8L2E+IGZvciBtb3JlIGRldGFpbHMgYWJvdXQgdGhpcyBtZWNoYW5pc20uXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHRoaXMuc2hvdWxkVW5zYWZlbHlVc2VIdHRwID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBzaG91bGRVbnNhZmVseVVzZUh0dHAgPSAhIXZhbHVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbmdkb2Mgb2JqZWN0XG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnlcbiAgICpcbiAgICogQHJlcXVpcmVzICRodHRwXG4gICAqIEByZXF1aXJlcyAkdGVtcGxhdGVDYWNoZVxuICAgKiBAcmVxdWlyZXMgJGluamVjdG9yXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTZXJ2aWNlLiBNYW5hZ2VzIGxvYWRpbmcgb2YgdGVtcGxhdGVzLlxuICAgKi9cbiAgdGhpcy4kZ2V0ID0gWyckaHR0cCcsICckdGVtcGxhdGVDYWNoZScsICckaW5qZWN0b3InLCBmdW5jdGlvbigkaHR0cCwgJHRlbXBsYXRlQ2FjaGUsICRpbmplY3Rvcil7XG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZUZhY3RvcnkoJGh0dHAsICR0ZW1wbGF0ZUNhY2hlLCAkaW5qZWN0b3IsIHNob3VsZFVuc2FmZWx5VXNlSHR0cCk7fV07XG59XG5cblxuLyoqXG4gKiBAbmdkb2Mgb2JqZWN0XG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5XG4gKlxuICogQHJlcXVpcmVzICRodHRwXG4gKiBAcmVxdWlyZXMgJHRlbXBsYXRlQ2FjaGVcbiAqIEByZXF1aXJlcyAkaW5qZWN0b3JcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNlcnZpY2UuIE1hbmFnZXMgbG9hZGluZyBvZiB0ZW1wbGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIFRlbXBsYXRlRmFjdG9yeSgkaHR0cCwgJHRlbXBsYXRlQ2FjaGUsICRpbmplY3Rvciwgc2hvdWxkVW5zYWZlbHlVc2VIdHRwKSB7XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5I2Zyb21Db25maWdcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIENyZWF0ZXMgYSB0ZW1wbGF0ZSBmcm9tIGEgY29uZmlndXJhdGlvbiBvYmplY3QuIFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIENvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciB3aGljaCB0byBsb2FkIGEgdGVtcGxhdGUuIFxuICAgKiBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIHNlYXJjaCBpbiB0aGUgc3BlY2lmaWVkIG9yZGVyLCBhbmQgdGhlIGZpcnN0IG9uZSBcbiAgICogdGhhdCBpcyBkZWZpbmVkIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSB0ZW1wbGF0ZTpcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBjb25maWcudGVtcGxhdGUgaHRtbCBzdHJpbmcgdGVtcGxhdGUgb3IgZnVuY3Rpb24gdG8gXG4gICAqIGxvYWQgdmlhIHtAbGluayB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5I2Zyb21TdHJpbmcgZnJvbVN0cmluZ30uXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gY29uZmlnLnRlbXBsYXRlVXJsIHVybCB0byBsb2FkIG9yIGEgZnVuY3Rpb24gcmV0dXJuaW5nIFxuICAgKiB0aGUgdXJsIHRvIGxvYWQgdmlhIHtAbGluayB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5I2Zyb21VcmwgZnJvbVVybH0uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmZpZy50ZW1wbGF0ZVByb3ZpZGVyIGZ1bmN0aW9uIHRvIGludm9rZSB2aWEgXG4gICAqIHtAbGluayB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5I2Zyb21Qcm92aWRlciBmcm9tUHJvdmlkZXJ9LlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zICBQYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbG9jYWxzIExvY2FscyB0byBwYXNzIHRvIGBpbnZva2VgIGlmIHRoZSB0ZW1wbGF0ZSBpcyBsb2FkZWQgXG4gICAqIHZpYSBhIGB0ZW1wbGF0ZVByb3ZpZGVyYC4gRGVmYXVsdHMgdG8gYHsgcGFyYW1zOiBwYXJhbXMgfWAuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ3xvYmplY3R9ICBUaGUgdGVtcGxhdGUgaHRtbCBhcyBhIHN0cmluZywgb3IgYSBwcm9taXNlIGZvciBcbiAgICogdGhhdCBzdHJpbmcsb3IgYG51bGxgIGlmIG5vIHRlbXBsYXRlIGlzIGNvbmZpZ3VyZWQuXG4gICAqL1xuICB0aGlzLmZyb21Db25maWcgPSBmdW5jdGlvbiAoY29uZmlnLCBwYXJhbXMsIGxvY2Fscykge1xuICAgIHJldHVybiAoXG4gICAgICBpc0RlZmluZWQoY29uZmlnLnRlbXBsYXRlKSA/IHRoaXMuZnJvbVN0cmluZyhjb25maWcudGVtcGxhdGUsIHBhcmFtcykgOlxuICAgICAgaXNEZWZpbmVkKGNvbmZpZy50ZW1wbGF0ZVVybCkgPyB0aGlzLmZyb21VcmwoY29uZmlnLnRlbXBsYXRlVXJsLCBwYXJhbXMpIDpcbiAgICAgIGlzRGVmaW5lZChjb25maWcudGVtcGxhdGVQcm92aWRlcikgPyB0aGlzLmZyb21Qcm92aWRlcihjb25maWcudGVtcGxhdGVQcm92aWRlciwgcGFyYW1zLCBsb2NhbHMpIDpcbiAgICAgIG51bGxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeSNmcm9tU3RyaW5nXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDcmVhdGVzIGEgdGVtcGxhdGUgZnJvbSBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIHJldHVybmluZyBhIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSB0ZW1wbGF0ZSBodG1sIHRlbXBsYXRlIGFzIGEgc3RyaW5nIG9yIGZ1bmN0aW9uIHRoYXQgXG4gICAqIHJldHVybnMgYW4gaHRtbCB0ZW1wbGF0ZSBhcyBhIHN0cmluZy5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBQYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8b2JqZWN0fSBUaGUgdGVtcGxhdGUgaHRtbCBhcyBhIHN0cmluZywgb3IgYSBwcm9taXNlIGZvciB0aGF0IFxuICAgKiBzdHJpbmcuXG4gICAqL1xuICB0aGlzLmZyb21TdHJpbmcgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHBhcmFtcykge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHRlbXBsYXRlKSA/IHRlbXBsYXRlKHBhcmFtcykgOiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnkjZnJvbVVybFxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeVxuICAgKiBcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIExvYWRzIGEgdGVtcGxhdGUgZnJvbSB0aGUgYSBVUkwgdmlhIGAkaHR0cGAgYW5kIGAkdGVtcGxhdGVDYWNoZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfEZ1bmN0aW9ufSB1cmwgdXJsIG9mIHRoZSB0ZW1wbGF0ZSB0byBsb2FkLCBvciBhIGZ1bmN0aW9uIFxuICAgKiB0aGF0IHJldHVybnMgYSB1cmwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgUGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSB1cmwgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge3N0cmluZ3xQcm9taXNlLjxzdHJpbmc+fSBUaGUgdGVtcGxhdGUgaHRtbCBhcyBhIHN0cmluZywgb3IgYSBwcm9taXNlIFxuICAgKiBmb3IgdGhhdCBzdHJpbmcuXG4gICAqL1xuICB0aGlzLmZyb21VcmwgPSBmdW5jdGlvbiAodXJsLCBwYXJhbXMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih1cmwpKSB1cmwgPSB1cmwocGFyYW1zKTtcbiAgICBpZiAodXJsID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgaWYoIXNob3VsZFVuc2FmZWx5VXNlSHR0cCkge1xuICAgICAgICByZXR1cm4gJGluamVjdG9yLmdldCgnJHRlbXBsYXRlUmVxdWVzdCcpKHVybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgICAuZ2V0KHVybCwgeyBjYWNoZTogJHRlbXBsYXRlQ2FjaGUsIGhlYWRlcnM6IHsgQWNjZXB0OiAndGV4dC9odG1sJyB9fSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuZGF0YTsgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeSNmcm9tUHJvdmlkZXJcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIENyZWF0ZXMgYSB0ZW1wbGF0ZSBieSBpbnZva2luZyBhbiBpbmplY3RhYmxlIHByb3ZpZGVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm92aWRlciBGdW5jdGlvbiB0byBpbnZva2UgdmlhIGAkaW5qZWN0b3IuaW52b2tlYFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIFBhcmFtZXRlcnMgZm9yIHRoZSB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGxvY2FscyBMb2NhbHMgdG8gcGFzcyB0byBgaW52b2tlYC4gRGVmYXVsdHMgdG8gXG4gICAqIGB7IHBhcmFtczogcGFyYW1zIH1gLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8UHJvbWlzZS48c3RyaW5nPn0gVGhlIHRlbXBsYXRlIGh0bWwgYXMgYSBzdHJpbmcsIG9yIGEgcHJvbWlzZSBcbiAgICogZm9yIHRoYXQgc3RyaW5nLlxuICAgKi9cbiAgdGhpcy5mcm9tUHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvdmlkZXIsIHBhcmFtcywgbG9jYWxzKSB7XG4gICAgcmV0dXJuICRpbmplY3Rvci5pbnZva2UocHJvdmlkZXIsIG51bGwsIGxvY2FscyB8fCB7IHBhcmFtczogcGFyYW1zIH0pO1xuICB9O1xufVxuXG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnV0aWwnKS5wcm92aWRlcignJHRlbXBsYXRlRmFjdG9yeScsIFRlbXBsYXRlRmFjdG9yeVByb3ZpZGVyKTtcblxudmFyICQkVU1GUDsgLy8gcmVmZXJlbmNlIHRvICRVcmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyXG5cbi8qKlxuICogQG5nZG9jIG9iamVjdFxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBNYXRjaGVzIFVSTHMgYWdhaW5zdCBwYXR0ZXJucyBhbmQgZXh0cmFjdHMgbmFtZWQgcGFyYW1ldGVycyBmcm9tIHRoZSBwYXRoIG9yIHRoZSBzZWFyY2hcbiAqIHBhcnQgb2YgdGhlIFVSTC4gQSBVUkwgcGF0dGVybiBjb25zaXN0cyBvZiBhIHBhdGggcGF0dGVybiwgb3B0aW9uYWxseSBmb2xsb3dlZCBieSAnPycgYW5kIGEgbGlzdFxuICogb2Ygc2VhcmNoIHBhcmFtZXRlcnMuIE11bHRpcGxlIHNlYXJjaCBwYXJhbWV0ZXIgbmFtZXMgYXJlIHNlcGFyYXRlZCBieSAnJicuIFNlYXJjaCBwYXJhbWV0ZXJzXG4gKiBkbyBub3QgaW5mbHVlbmNlIHdoZXRoZXIgb3Igbm90IGEgVVJMIGlzIG1hdGNoZWQsIGJ1dCB0aGVpciB2YWx1ZXMgYXJlIHBhc3NlZCB0aHJvdWdoIGludG9cbiAqIHRoZSBtYXRjaGVkIHBhcmFtZXRlcnMgcmV0dXJuZWQgYnkge0BsaW5rIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlciNtZXRob2RzX2V4ZWMgZXhlY30uXG4gKlxuICogUGF0aCBwYXJhbWV0ZXIgcGxhY2Vob2xkZXJzIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgc2ltcGxlIGNvbG9uL2NhdGNoLWFsbCBzeW50YXggb3IgY3VybHkgYnJhY2VcbiAqIHN5bnRheCwgd2hpY2ggb3B0aW9uYWxseSBhbGxvd3MgYSByZWd1bGFyIGV4cHJlc3Npb24gZm9yIHRoZSBwYXJhbWV0ZXIgdG8gYmUgc3BlY2lmaWVkOlxuICpcbiAqICogYCc6J2AgbmFtZSAtIGNvbG9uIHBsYWNlaG9sZGVyXG4gKiAqIGAnKidgIG5hbWUgLSBjYXRjaC1hbGwgcGxhY2Vob2xkZXJcbiAqICogYCd7JyBuYW1lICd9J2AgLSBjdXJseSBwbGFjZWhvbGRlclxuICogKiBgJ3snIG5hbWUgJzonIHJlZ2V4cHx0eXBlICd9J2AgLSBjdXJseSBwbGFjZWhvbGRlciB3aXRoIHJlZ2V4cCBvciB0eXBlIG5hbWUuIFNob3VsZCB0aGVcbiAqICAgcmVnZXhwIGl0c2VsZiBjb250YWluIGN1cmx5IGJyYWNlcywgdGhleSBtdXN0IGJlIGluIG1hdGNoZWQgcGFpcnMgb3IgZXNjYXBlZCB3aXRoIGEgYmFja3NsYXNoLlxuICpcbiAqIFBhcmFtZXRlciBuYW1lcyBtYXkgY29udGFpbiBvbmx5IHdvcmQgY2hhcmFjdGVycyAobGF0aW4gbGV0dGVycywgZGlnaXRzLCBhbmQgdW5kZXJzY29yZSkgYW5kXG4gKiBtdXN0IGJlIHVuaXF1ZSB3aXRoaW4gdGhlIHBhdHRlcm4gKGFjcm9zcyBib3RoIHBhdGggYW5kIHNlYXJjaCBwYXJhbWV0ZXJzKS4gRm9yIGNvbG9uXG4gKiBwbGFjZWhvbGRlcnMgb3IgY3VybHkgcGxhY2Vob2xkZXJzIHdpdGhvdXQgYW4gZXhwbGljaXQgcmVnZXhwLCBhIHBhdGggcGFyYW1ldGVyIG1hdGNoZXMgYW55XG4gKiBudW1iZXIgb2YgY2hhcmFjdGVycyBvdGhlciB0aGFuICcvJy4gRm9yIGNhdGNoLWFsbCBwbGFjZWhvbGRlcnMgdGhlIHBhdGggcGFyYW1ldGVyIG1hdGNoZXNcbiAqIGFueSBudW1iZXIgb2YgY2hhcmFjdGVycy5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAqIGAnL2hlbGxvLydgIC0gTWF0Y2hlcyBvbmx5IGlmIHRoZSBwYXRoIGlzIGV4YWN0bHkgJy9oZWxsby8nLiBUaGVyZSBpcyBubyBzcGVjaWFsIHRyZWF0bWVudCBmb3JcbiAqICAgdHJhaWxpbmcgc2xhc2hlcywgYW5kIHBhdHRlcm5zIGhhdmUgdG8gbWF0Y2ggdGhlIGVudGlyZSBwYXRoLCBub3QganVzdCBhIHByZWZpeC5cbiAqICogYCcvdXNlci86aWQnYCAtIE1hdGNoZXMgJy91c2VyL2JvYicgb3IgJy91c2VyLzEyMzQhISEnIG9yIGV2ZW4gJy91c2VyLycgYnV0IG5vdCAnL3VzZXInIG9yXG4gKiAgICcvdXNlci9ib2IvZGV0YWlscycuIFRoZSBzZWNvbmQgcGF0aCBzZWdtZW50IHdpbGwgYmUgY2FwdHVyZWQgYXMgdGhlIHBhcmFtZXRlciAnaWQnLlxuICogKiBgJy91c2VyL3tpZH0nYCAtIFNhbWUgYXMgdGhlIHByZXZpb3VzIGV4YW1wbGUsIGJ1dCB1c2luZyBjdXJseSBicmFjZSBzeW50YXguXG4gKiAqIGAnL3VzZXIve2lkOlteL10qfSdgIC0gU2FtZSBhcyB0aGUgcHJldmlvdXMgZXhhbXBsZS5cbiAqICogYCcvdXNlci97aWQ6WzAtOWEtZkEtRl17MSw4fX0nYCAtIFNpbWlsYXIgdG8gdGhlIHByZXZpb3VzIGV4YW1wbGUsIGJ1dCBvbmx5IG1hdGNoZXMgaWYgdGhlIGlkXG4gKiAgIHBhcmFtZXRlciBjb25zaXN0cyBvZiAxIHRvIDggaGV4IGRpZ2l0cy5cbiAqICogYCcvZmlsZXMve3BhdGg6Lip9J2AgLSBNYXRjaGVzIGFueSBVUkwgc3RhcnRpbmcgd2l0aCAnL2ZpbGVzLycgYW5kIGNhcHR1cmVzIHRoZSByZXN0IG9mIHRoZVxuICogICBwYXRoIGludG8gdGhlIHBhcmFtZXRlciAncGF0aCcuXG4gKiAqIGAnL2ZpbGVzLypwYXRoJ2AgLSBkaXR0by5cbiAqICogYCcvY2FsZW5kYXIve3N0YXJ0OmRhdGV9J2AgLSBNYXRjaGVzIFwiL2NhbGVuZGFyLzIwMTQtMTEtMTJcIiAoYmVjYXVzZSB0aGUgcGF0dGVybiBkZWZpbmVkXG4gKiAgIGluIHRoZSBidWlsdC1pbiAgYGRhdGVgIFR5cGUgbWF0Y2hlcyBgMjAxNC0xMS0xMmApIGFuZCBwcm92aWRlcyBhIERhdGUgb2JqZWN0IGluICRzdGF0ZVBhcmFtcy5zdGFydFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuICBUaGUgcGF0dGVybiB0byBjb21waWxlIGludG8gYSBtYXRjaGVyLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAgQSBjb25maWd1cmF0aW9uIG9iamVjdCBoYXNoOlxuICogQHBhcmFtIHtPYmplY3Q9fSBwYXJlbnRNYXRjaGVyIFVzZWQgdG8gY29uY2F0ZW5hdGUgdGhlIHBhdHRlcm4vY29uZmlnIG9udG9cbiAqICAgYW4gZXhpc3RpbmcgVXJsTWF0Y2hlclxuICpcbiAqICogYGNhc2VJbnNlbnNpdGl2ZWAgLSBgdHJ1ZWAgaWYgVVJMIG1hdGNoaW5nIHNob3VsZCBiZSBjYXNlIGluc2Vuc2l0aXZlLCBvdGhlcndpc2UgYGZhbHNlYCwgdGhlIGRlZmF1bHQgdmFsdWUgKGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KSBpcyBgZmFsc2VgLlxuICogKiBgc3RyaWN0YCAtIGBmYWxzZWAgaWYgbWF0Y2hpbmcgYWdhaW5zdCBhIFVSTCB3aXRoIGEgdHJhaWxpbmcgc2xhc2ggc2hvdWxkIGJlIHRyZWF0ZWQgYXMgZXF1aXZhbGVudCB0byBhIFVSTCB3aXRob3V0IGEgdHJhaWxpbmcgc2xhc2gsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcHJlZml4ICBBIHN0YXRpYyBwcmVmaXggb2YgdGhpcyBwYXR0ZXJuLiBUaGUgbWF0Y2hlciBndWFyYW50ZWVzIHRoYXQgYW55XG4gKiAgIFVSTCBtYXRjaGluZyB0aGlzIG1hdGNoZXIgKGkuZS4gYW55IHN0cmluZyBmb3Igd2hpY2gge0BsaW5rIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlciNtZXRob2RzX2V4ZWMgZXhlYygpfSByZXR1cm5zXG4gKiAgIG5vbi1udWxsKSB3aWxsIHN0YXJ0IHdpdGggdGhpcyBwcmVmaXguXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNvdXJjZSAgVGhlIHBhdHRlcm4gdGhhdCB3YXMgcGFzc2VkIGludG8gdGhlIGNvbnN0cnVjdG9yXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNvdXJjZVBhdGggIFRoZSBwYXRoIHBvcnRpb24gb2YgdGhlIHNvdXJjZSBwcm9wZXJ0eVxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzb3VyY2VTZWFyY2ggIFRoZSBzZWFyY2ggcG9ydGlvbiBvZiB0aGUgc291cmNlIHByb3BlcnR5XG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlZ2V4ICBUaGUgY29uc3RydWN0ZWQgcmVnZXggdGhhdCB3aWxsIGJlIHVzZWQgdG8gbWF0Y2ggYWdhaW5zdCB0aGUgdXJsIHdoZW5cbiAqICAgaXQgaXMgdGltZSB0byBkZXRlcm1pbmUgd2hpY2ggdXJsIHdpbGwgbWF0Y2guXG4gKlxuICogQHJldHVybnMge09iamVjdH0gIE5ldyBgVXJsTWF0Y2hlcmAgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIFVybE1hdGNoZXIocGF0dGVybiwgY29uZmlnLCBwYXJlbnRNYXRjaGVyKSB7XG4gIGNvbmZpZyA9IGV4dGVuZCh7IHBhcmFtczoge30gfSwgaXNPYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9KTtcblxuICAvLyBGaW5kIGFsbCBwbGFjZWhvbGRlcnMgYW5kIGNyZWF0ZSBhIGNvbXBpbGVkIHBhdHRlcm4sIHVzaW5nIGVpdGhlciBjbGFzc2ljIG9yIGN1cmx5IHN5bnRheDpcbiAgLy8gICAnKicgbmFtZVxuICAvLyAgICc6JyBuYW1lXG4gIC8vICAgJ3snIG5hbWUgJ30nXG4gIC8vICAgJ3snIG5hbWUgJzonIHJlZ2V4cCAnfSdcbiAgLy8gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBzb21ld2hhdCBjb21wbGljYXRlZCBkdWUgdG8gdGhlIG5lZWQgdG8gYWxsb3cgY3VybHkgYnJhY2VzXG4gIC8vIGluc2lkZSB0aGUgcmVndWxhciBleHByZXNzaW9uLiBUaGUgcGxhY2Vob2xkZXIgcmVnZXhwIGJyZWFrcyBkb3duIGFzIGZvbGxvd3M6XG4gIC8vICAgIChbOipdKShbXFx3XFxbXFxdXSspICAgICAgICAgICAgICAtIGNsYXNzaWMgcGxhY2Vob2xkZXIgKCQxIC8gJDIpIChzZWFyY2ggdmVyc2lvbiBoYXMgLSBmb3Igc25ha2UtY2FzZSlcbiAgLy8gICAgXFx7KFtcXHdcXFtcXF1dKykoPzpcXDpcXHMqKCAuLi4gKSk/XFx9ICAtIGN1cmx5IGJyYWNlIHBsYWNlaG9sZGVyICgkMykgd2l0aCBvcHRpb25hbCByZWdleHAvdHlwZSAuLi4gKCQ0KSAoc2VhcmNoIHZlcnNpb24gaGFzIC0gZm9yIHNuYWtlLWNhc2VcbiAgLy8gICAgKD86IC4uLiB8IC4uLiB8IC4uLiApKyAgICAgICAgIC0gdGhlIHJlZ2V4cCBjb25zaXN0cyBvZiBhbnkgbnVtYmVyIG9mIGF0b21zLCBhbiBhdG9tIGJlaW5nIGVpdGhlclxuICAvLyAgICBbXnt9XFxcXF0rICAgICAgICAgICAgICAgICAgICAgICAtIGFueXRoaW5nIG90aGVyIHRoYW4gY3VybHkgYnJhY2VzIG9yIGJhY2tzbGFzaFxuICAvLyAgICBcXFxcLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGEgYmFja3NsYXNoIGVzY2FwZVxuICAvLyAgICBcXHsoPzpbXnt9XFxcXF0rfFxcXFwuKSpcXH0gICAgICAgICAgLSBhIG1hdGNoZWQgc2V0IG9mIGN1cmx5IGJyYWNlcyBjb250YWluaW5nIG90aGVyIGF0b21zXG4gIHZhciBwbGFjZWhvbGRlciAgICAgICA9IC8oWzoqXSkoW1xcd1xcW1xcXV0rKXxcXHsoW1xcd1xcW1xcXV0rKSg/OlxcOlxccyooKD86W157fVxcXFxdK3xcXFxcLnxcXHsoPzpbXnt9XFxcXF0rfFxcXFwuKSpcXH0pKykpP1xcfS9nLFxuICAgICAgc2VhcmNoUGxhY2Vob2xkZXIgPSAvKFs6XT8pKFtcXHdcXFtcXF0uLV0rKXxcXHsoW1xcd1xcW1xcXS4tXSspKD86XFw6XFxzKigoPzpbXnt9XFxcXF0rfFxcXFwufFxceyg/Oltee31cXFxcXSt8XFxcXC4pKlxcfSkrKSk/XFx9L2csXG4gICAgICBjb21waWxlZCA9ICdeJywgbGFzdCA9IDAsIG0sXG4gICAgICBzZWdtZW50cyA9IHRoaXMuc2VnbWVudHMgPSBbXSxcbiAgICAgIHBhcmVudFBhcmFtcyA9IHBhcmVudE1hdGNoZXIgPyBwYXJlbnRNYXRjaGVyLnBhcmFtcyA6IHt9LFxuICAgICAgcGFyYW1zID0gdGhpcy5wYXJhbXMgPSBwYXJlbnRNYXRjaGVyID8gcGFyZW50TWF0Y2hlci5wYXJhbXMuJCRuZXcoKSA6IG5ldyAkJFVNRlAuUGFyYW1TZXQoKSxcbiAgICAgIHBhcmFtTmFtZXMgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRQYXJhbWV0ZXIoaWQsIHR5cGUsIGNvbmZpZywgbG9jYXRpb24pIHtcbiAgICBwYXJhbU5hbWVzLnB1c2goaWQpO1xuICAgIGlmIChwYXJlbnRQYXJhbXNbaWRdKSByZXR1cm4gcGFyZW50UGFyYW1zW2lkXTtcbiAgICBpZiAoIS9eXFx3KyhbLS5dK1xcdyspKig/OlxcW1xcXSk/JC8udGVzdChpZCkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVyIG5hbWUgJ1wiICsgaWQgKyBcIicgaW4gcGF0dGVybiAnXCIgKyBwYXR0ZXJuICsgXCInXCIpO1xuICAgIGlmIChwYXJhbXNbaWRdKSB0aHJvdyBuZXcgRXJyb3IoXCJEdXBsaWNhdGUgcGFyYW1ldGVyIG5hbWUgJ1wiICsgaWQgKyBcIicgaW4gcGF0dGVybiAnXCIgKyBwYXR0ZXJuICsgXCInXCIpO1xuICAgIHBhcmFtc1tpZF0gPSBuZXcgJCRVTUZQLlBhcmFtKGlkLCB0eXBlLCBjb25maWcsIGxvY2F0aW9uKTtcbiAgICByZXR1cm4gcGFyYW1zW2lkXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1b3RlUmVnRXhwKHN0cmluZywgcGF0dGVybiwgc3F1YXNoLCBvcHRpb25hbCkge1xuICAgIHZhciBzdXJyb3VuZFBhdHRlcm4gPSBbJycsJyddLCByZXN1bHQgPSBzdHJpbmcucmVwbGFjZSgvW1xcXFxcXFtcXF1cXF4kKis/LigpfHt9XS9nLCBcIlxcXFwkJlwiKTtcbiAgICBpZiAoIXBhdHRlcm4pIHJldHVybiByZXN1bHQ7XG4gICAgc3dpdGNoKHNxdWFzaCkge1xuICAgICAgY2FzZSBmYWxzZTogc3Vycm91bmRQYXR0ZXJuID0gWycoJywgJyknICsgKG9wdGlvbmFsID8gXCI/XCIgOiBcIlwiKV07IGJyZWFrO1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICAgICAgc3Vycm91bmRQYXR0ZXJuID0gWycoPzpcXC8oJywgJyl8XFwvKT8nXTtcbiAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogICAgc3Vycm91bmRQYXR0ZXJuID0gWycoJyArIHNxdWFzaCArIFwifFwiLCAnKT8nXTsgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgKyBzdXJyb3VuZFBhdHRlcm5bMF0gKyBwYXR0ZXJuICsgc3Vycm91bmRQYXR0ZXJuWzFdO1xuICB9XG5cbiAgdGhpcy5zb3VyY2UgPSBwYXR0ZXJuO1xuXG4gIC8vIFNwbGl0IGludG8gc3RhdGljIHNlZ21lbnRzIHNlcGFyYXRlZCBieSBwYXRoIHBhcmFtZXRlciBwbGFjZWhvbGRlcnMuXG4gIC8vIFRoZSBudW1iZXIgb2Ygc2VnbWVudHMgaXMgYWx3YXlzIDEgbW9yZSB0aGFuIHRoZSBudW1iZXIgb2YgcGFyYW1ldGVycy5cbiAgZnVuY3Rpb24gbWF0Y2hEZXRhaWxzKG0sIGlzU2VhcmNoKSB7XG4gICAgdmFyIGlkLCByZWdleHAsIHNlZ21lbnQsIHR5cGUsIGNmZywgYXJyYXlNb2RlO1xuICAgIGlkICAgICAgICAgID0gbVsyXSB8fCBtWzNdOyAvLyBJRVs3OF0gcmV0dXJucyAnJyBmb3IgdW5tYXRjaGVkIGdyb3VwcyBpbnN0ZWFkIG9mIG51bGxcbiAgICBjZmcgICAgICAgICA9IGNvbmZpZy5wYXJhbXNbaWRdO1xuICAgIHNlZ21lbnQgICAgID0gcGF0dGVybi5zdWJzdHJpbmcobGFzdCwgbS5pbmRleCk7XG4gICAgcmVnZXhwICAgICAgPSBpc1NlYXJjaCA/IG1bNF0gOiBtWzRdIHx8IChtWzFdID09ICcqJyA/ICcuKicgOiBudWxsKTtcblxuICAgIGlmIChyZWdleHApIHtcbiAgICAgIHR5cGUgICAgICA9ICQkVU1GUC50eXBlKHJlZ2V4cCkgfHwgaW5oZXJpdCgkJFVNRlAudHlwZShcInN0cmluZ1wiKSwgeyBwYXR0ZXJuOiBuZXcgUmVnRXhwKHJlZ2V4cCwgY29uZmlnLmNhc2VJbnNlbnNpdGl2ZSA/ICdpJyA6IHVuZGVmaW5lZCkgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpZCwgcmVnZXhwOiByZWdleHAsIHNlZ21lbnQ6IHNlZ21lbnQsIHR5cGU6IHR5cGUsIGNmZzogY2ZnXG4gICAgfTtcbiAgfVxuXG4gIHZhciBwLCBwYXJhbSwgc2VnbWVudDtcbiAgd2hpbGUgKChtID0gcGxhY2Vob2xkZXIuZXhlYyhwYXR0ZXJuKSkpIHtcbiAgICBwID0gbWF0Y2hEZXRhaWxzKG0sIGZhbHNlKTtcbiAgICBpZiAocC5zZWdtZW50LmluZGV4T2YoJz8nKSA+PSAwKSBicmVhazsgLy8gd2UncmUgaW50byB0aGUgc2VhcmNoIHBhcnRcblxuICAgIHBhcmFtID0gYWRkUGFyYW1ldGVyKHAuaWQsIHAudHlwZSwgcC5jZmcsIFwicGF0aFwiKTtcbiAgICBjb21waWxlZCArPSBxdW90ZVJlZ0V4cChwLnNlZ21lbnQsIHBhcmFtLnR5cGUucGF0dGVybi5zb3VyY2UsIHBhcmFtLnNxdWFzaCwgcGFyYW0uaXNPcHRpb25hbCk7XG4gICAgc2VnbWVudHMucHVzaChwLnNlZ21lbnQpO1xuICAgIGxhc3QgPSBwbGFjZWhvbGRlci5sYXN0SW5kZXg7XG4gIH1cbiAgc2VnbWVudCA9IHBhdHRlcm4uc3Vic3RyaW5nKGxhc3QpO1xuXG4gIC8vIEZpbmQgYW55IHNlYXJjaCBwYXJhbWV0ZXIgbmFtZXMgYW5kIHJlbW92ZSB0aGVtIGZyb20gdGhlIGxhc3Qgc2VnbWVudFxuICB2YXIgaSA9IHNlZ21lbnQuaW5kZXhPZignPycpO1xuXG4gIGlmIChpID49IDApIHtcbiAgICB2YXIgc2VhcmNoID0gdGhpcy5zb3VyY2VTZWFyY2ggPSBzZWdtZW50LnN1YnN0cmluZyhpKTtcbiAgICBzZWdtZW50ID0gc2VnbWVudC5zdWJzdHJpbmcoMCwgaSk7XG4gICAgdGhpcy5zb3VyY2VQYXRoID0gcGF0dGVybi5zdWJzdHJpbmcoMCwgbGFzdCArIGkpO1xuXG4gICAgaWYgKHNlYXJjaC5sZW5ndGggPiAwKSB7XG4gICAgICBsYXN0ID0gMDtcbiAgICAgIHdoaWxlICgobSA9IHNlYXJjaFBsYWNlaG9sZGVyLmV4ZWMoc2VhcmNoKSkpIHtcbiAgICAgICAgcCA9IG1hdGNoRGV0YWlscyhtLCB0cnVlKTtcbiAgICAgICAgcGFyYW0gPSBhZGRQYXJhbWV0ZXIocC5pZCwgcC50eXBlLCBwLmNmZywgXCJzZWFyY2hcIik7XG4gICAgICAgIGxhc3QgPSBwbGFjZWhvbGRlci5sYXN0SW5kZXg7XG4gICAgICAgIC8vIGNoZWNrIGlmID8mXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuc291cmNlUGF0aCA9IHBhdHRlcm47XG4gICAgdGhpcy5zb3VyY2VTZWFyY2ggPSAnJztcbiAgfVxuXG4gIGNvbXBpbGVkICs9IHF1b3RlUmVnRXhwKHNlZ21lbnQpICsgKGNvbmZpZy5zdHJpY3QgPT09IGZhbHNlID8gJ1xcLz8nIDogJycpICsgJyQnO1xuICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuXG4gIHRoaXMucmVnZXhwID0gbmV3IFJlZ0V4cChjb21waWxlZCwgY29uZmlnLmNhc2VJbnNlbnNpdGl2ZSA/ICdpJyA6IHVuZGVmaW5lZCk7XG4gIHRoaXMucHJlZml4ID0gc2VnbWVudHNbMF07XG4gIHRoaXMuJCRwYXJhbU5hbWVzID0gcGFyYW1OYW1lcztcbn1cblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlciNjb25jYXRcbiAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgYSBuZXcgbWF0Y2hlciBmb3IgYSBwYXR0ZXJuIGNvbnN0cnVjdGVkIGJ5IGFwcGVuZGluZyB0aGUgcGF0aCBwYXJ0IGFuZCBhZGRpbmcgdGhlXG4gKiBzZWFyY2ggcGFyYW1ldGVycyBvZiB0aGUgc3BlY2lmaWVkIHBhdHRlcm4gdG8gdGhpcyBwYXR0ZXJuLiBUaGUgY3VycmVudCBwYXR0ZXJuIGlzIG5vdFxuICogbW9kaWZpZWQuIFRoaXMgY2FuIGJlIHVuZGVyc3Rvb2QgYXMgY3JlYXRpbmcgYSBwYXR0ZXJuIGZvciBVUkxzIHRoYXQgYXJlIHJlbGF0aXZlIHRvIChvclxuICogc3VmZml4ZXMgb2YpIHRoZSBjdXJyZW50IHBhdHRlcm4uXG4gKlxuICogQGV4YW1wbGVcbiAqIFRoZSBmb2xsb3dpbmcgdHdvIG1hdGNoZXJzIGFyZSBlcXVpdmFsZW50OlxuICogPHByZT5cbiAqIG5ldyBVcmxNYXRjaGVyKCcvdXNlci97aWR9P3EnKS5jb25jYXQoJy9kZXRhaWxzP2RhdGUnKTtcbiAqIG5ldyBVcmxNYXRjaGVyKCcvdXNlci97aWR9L2RldGFpbHM/cSZkYXRlJyk7XG4gKiA8L3ByZT5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAgVGhlIHBhdHRlcm4gdG8gYXBwZW5kLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAgQW4gb2JqZWN0IGhhc2ggb2YgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBtYXRjaGVyLlxuICogQHJldHVybnMge1VybE1hdGNoZXJ9ICBBIG1hdGNoZXIgZm9yIHRoZSBjb25jYXRlbmF0ZWQgcGF0dGVybi5cbiAqL1xuVXJsTWF0Y2hlci5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKHBhdHRlcm4sIGNvbmZpZykge1xuICAvLyBCZWNhdXNlIG9yZGVyIG9mIHNlYXJjaCBwYXJhbWV0ZXJzIGlzIGlycmVsZXZhbnQsIHdlIGNhbiBhZGQgb3VyIG93biBzZWFyY2hcbiAgLy8gcGFyYW1ldGVycyB0byB0aGUgZW5kIG9mIHRoZSBuZXcgcGF0dGVybi4gUGFyc2UgdGhlIG5ldyBwYXR0ZXJuIGJ5IGl0c2VsZlxuICAvLyBhbmQgdGhlbiBqb2luIHRoZSBiaXRzIHRvZ2V0aGVyLCBidXQgaXQncyBtdWNoIGVhc2llciB0byBkbyB0aGlzIG9uIGEgc3RyaW5nIGxldmVsLlxuICB2YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBjYXNlSW5zZW5zaXRpdmU6ICQkVU1GUC5jYXNlSW5zZW5zaXRpdmUoKSxcbiAgICBzdHJpY3Q6ICQkVU1GUC5zdHJpY3RNb2RlKCksXG4gICAgc3F1YXNoOiAkJFVNRlAuZGVmYXVsdFNxdWFzaFBvbGljeSgpXG4gIH07XG4gIHJldHVybiBuZXcgVXJsTWF0Y2hlcih0aGlzLnNvdXJjZVBhdGggKyBwYXR0ZXJuICsgdGhpcy5zb3VyY2VTZWFyY2gsIGV4dGVuZChkZWZhdWx0Q29uZmlnLCBjb25maWcpLCB0aGlzKTtcbn07XG5cblVybE1hdGNoZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5zb3VyY2U7XG59O1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyI2V4ZWNcbiAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRlc3RzIHRoZSBzcGVjaWZpZWQgcGF0aCBhZ2FpbnN0IHRoaXMgbWF0Y2hlciwgYW5kIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGNhcHR1cmVkXG4gKiBwYXJhbWV0ZXIgdmFsdWVzLCBvciBudWxsIGlmIHRoZSBwYXRoIGRvZXMgbm90IG1hdGNoLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGNvbnRhaW5zIHRoZSB2YWx1ZXNcbiAqIG9mIGFueSBzZWFyY2ggcGFyYW1ldGVycyB0aGF0IGFyZSBtZW50aW9uZWQgaW4gdGhlIHBhdHRlcm4sIGJ1dCB0aGVpciB2YWx1ZSBtYXkgYmUgbnVsbCBpZlxuICogdGhleSBhcmUgbm90IHByZXNlbnQgaW4gYHNlYXJjaFBhcmFtc2AuIFRoaXMgbWVhbnMgdGhhdCBzZWFyY2ggcGFyYW1ldGVycyBhcmUgYWx3YXlzIHRyZWF0ZWRcbiAqIGFzIG9wdGlvbmFsLlxuICpcbiAqIEBleGFtcGxlXG4gKiA8cHJlPlxuICogbmV3IFVybE1hdGNoZXIoJy91c2VyL3tpZH0/cSZyJykuZXhlYygnL3VzZXIvYm9iJywge1xuICogICB4OiAnMScsIHE6ICdoZWxsbydcbiAqIH0pO1xuICogLy8gcmV0dXJucyB7IGlkOiAnYm9iJywgcTogJ2hlbGxvJywgcjogbnVsbCB9XG4gKiA8L3ByZT5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgVGhlIFVSTCBwYXRoIHRvIG1hdGNoLCBlLmcuIGAkbG9jYXRpb24ucGF0aCgpYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWFyY2hQYXJhbXMgIFVSTCBzZWFyY2ggcGFyYW1ldGVycywgZS5nLiBgJGxvY2F0aW9uLnNlYXJjaCgpYC5cbiAqIEByZXR1cm5zIHtPYmplY3R9ICBUaGUgY2FwdHVyZWQgcGFyYW1ldGVyIHZhbHVlcy5cbiAqL1xuVXJsTWF0Y2hlci5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChwYXRoLCBzZWFyY2hQYXJhbXMpIHtcbiAgdmFyIG0gPSB0aGlzLnJlZ2V4cC5leGVjKHBhdGgpO1xuICBpZiAoIW0pIHJldHVybiBudWxsO1xuICBzZWFyY2hQYXJhbXMgPSBzZWFyY2hQYXJhbXMgfHwge307XG5cbiAgdmFyIHBhcmFtTmFtZXMgPSB0aGlzLnBhcmFtZXRlcnMoKSwgblRvdGFsID0gcGFyYW1OYW1lcy5sZW5ndGgsXG4gICAgblBhdGggPSB0aGlzLnNlZ21lbnRzLmxlbmd0aCAtIDEsXG4gICAgdmFsdWVzID0ge30sIGksIGosIGNmZywgcGFyYW1OYW1lO1xuXG4gIGlmIChuUGF0aCAhPT0gbS5sZW5ndGggLSAxKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmJhbGFuY2VkIGNhcHR1cmUgZ3JvdXAgaW4gcm91dGUgJ1wiICsgdGhpcy5zb3VyY2UgKyBcIidcIik7XG5cbiAgZnVuY3Rpb24gZGVjb2RlUGF0aEFycmF5KHN0cmluZykge1xuICAgIGZ1bmN0aW9uIHJldmVyc2VTdHJpbmcoc3RyKSB7IHJldHVybiBzdHIuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7IH1cbiAgICBmdW5jdGlvbiB1bnF1b3RlRGFzaGVzKHN0cikgeyByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFwtL2csIFwiLVwiKTsgfVxuXG4gICAgdmFyIHNwbGl0ID0gcmV2ZXJzZVN0cmluZyhzdHJpbmcpLnNwbGl0KC8tKD8hXFxcXCkvKTtcbiAgICB2YXIgYWxsUmV2ZXJzZWQgPSBtYXAoc3BsaXQsIHJldmVyc2VTdHJpbmcpO1xuICAgIHJldHVybiBtYXAoYWxsUmV2ZXJzZWQsIHVucXVvdGVEYXNoZXMpLnJldmVyc2UoKTtcbiAgfVxuXG4gIHZhciBwYXJhbSwgcGFyYW1WYWw7XG4gIGZvciAoaSA9IDA7IGkgPCBuUGF0aDsgaSsrKSB7XG4gICAgcGFyYW1OYW1lID0gcGFyYW1OYW1lc1tpXTtcbiAgICBwYXJhbSA9IHRoaXMucGFyYW1zW3BhcmFtTmFtZV07XG4gICAgcGFyYW1WYWwgPSBtW2krMV07XG4gICAgLy8gaWYgdGhlIHBhcmFtIHZhbHVlIG1hdGNoZXMgYSBwcmUtcmVwbGFjZSBwYWlyLCByZXBsYWNlIHRoZSB2YWx1ZSBiZWZvcmUgZGVjb2RpbmcuXG4gICAgZm9yIChqID0gMDsgaiA8IHBhcmFtLnJlcGxhY2UubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChwYXJhbS5yZXBsYWNlW2pdLmZyb20gPT09IHBhcmFtVmFsKSBwYXJhbVZhbCA9IHBhcmFtLnJlcGxhY2Vbal0udG87XG4gICAgfVxuICAgIGlmIChwYXJhbVZhbCAmJiBwYXJhbS5hcnJheSA9PT0gdHJ1ZSkgcGFyYW1WYWwgPSBkZWNvZGVQYXRoQXJyYXkocGFyYW1WYWwpO1xuICAgIGlmIChpc0RlZmluZWQocGFyYW1WYWwpKSBwYXJhbVZhbCA9IHBhcmFtLnR5cGUuZGVjb2RlKHBhcmFtVmFsKTtcbiAgICB2YWx1ZXNbcGFyYW1OYW1lXSA9IHBhcmFtLnZhbHVlKHBhcmFtVmFsKTtcbiAgfVxuICBmb3IgKC8qKi87IGkgPCBuVG90YWw7IGkrKykge1xuICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZXNbaV07XG4gICAgdmFsdWVzW3BhcmFtTmFtZV0gPSB0aGlzLnBhcmFtc1twYXJhbU5hbWVdLnZhbHVlKHNlYXJjaFBhcmFtc1twYXJhbU5hbWVdKTtcbiAgICBwYXJhbSA9IHRoaXMucGFyYW1zW3BhcmFtTmFtZV07XG4gICAgcGFyYW1WYWwgPSBzZWFyY2hQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBmb3IgKGogPSAwOyBqIDwgcGFyYW0ucmVwbGFjZS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHBhcmFtLnJlcGxhY2Vbal0uZnJvbSA9PT0gcGFyYW1WYWwpIHBhcmFtVmFsID0gcGFyYW0ucmVwbGFjZVtqXS50bztcbiAgICB9XG4gICAgaWYgKGlzRGVmaW5lZChwYXJhbVZhbCkpIHBhcmFtVmFsID0gcGFyYW0udHlwZS5kZWNvZGUocGFyYW1WYWwpO1xuICAgIHZhbHVlc1twYXJhbU5hbWVdID0gcGFyYW0udmFsdWUocGFyYW1WYWwpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcbn07XG5cbi8qKlxuICogQG5nZG9jIGZ1bmN0aW9uXG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIjcGFyYW1ldGVyc1xuICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlclxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0aGUgbmFtZXMgb2YgYWxsIHBhdGggYW5kIHNlYXJjaCBwYXJhbWV0ZXJzIG9mIHRoaXMgcGF0dGVybiBpbiBhbiB1bnNwZWNpZmllZCBvcmRlci5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXkuPHN0cmluZz59ICBBbiBhcnJheSBvZiBwYXJhbWV0ZXIgbmFtZXMuIE11c3QgYmUgdHJlYXRlZCBhcyByZWFkLW9ubHkuIElmIHRoZVxuICogICAgcGF0dGVybiBoYXMgbm8gcGFyYW1ldGVycywgYW4gZW1wdHkgYXJyYXkgaXMgcmV0dXJuZWQuXG4gKi9cblVybE1hdGNoZXIucHJvdG90eXBlLnBhcmFtZXRlcnMgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgaWYgKCFpc0RlZmluZWQocGFyYW0pKSByZXR1cm4gdGhpcy4kJHBhcmFtTmFtZXM7XG4gIHJldHVybiB0aGlzLnBhcmFtc1twYXJhbV0gfHwgbnVsbDtcbn07XG5cbi8qKlxuICogQG5nZG9jIGZ1bmN0aW9uXG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIjdmFsaWRhdGVzXG4gKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgYW4gb2JqZWN0IGhhc2ggb2YgcGFyYW1ldGVycyB0byB2YWxpZGF0ZSB0aGVpciBjb3JyZWN0bmVzcyBhY2NvcmRpbmcgdG8gdGhlIHBhcmFtZXRlclxuICogdHlwZXMgb2YgdGhpcyBgVXJsTWF0Y2hlcmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBUaGUgb2JqZWN0IGhhc2ggb2YgcGFyYW1ldGVycyB0byB2YWxpZGF0ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGFyYW1zYCB2YWxpZGF0ZXMsIG90aGVyd2lzZSBgZmFsc2VgLlxuICovXG5VcmxNYXRjaGVyLnByb3RvdHlwZS52YWxpZGF0ZXMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHJldHVybiB0aGlzLnBhcmFtcy4kJHZhbGlkYXRlcyhwYXJhbXMpO1xufTtcblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlciNmb3JtYXRcbiAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZXMgYSBVUkwgdGhhdCBtYXRjaGVzIHRoaXMgcGF0dGVybiBieSBzdWJzdGl0dXRpbmcgdGhlIHNwZWNpZmllZCB2YWx1ZXNcbiAqIGZvciB0aGUgcGF0aCBhbmQgc2VhcmNoIHBhcmFtZXRlcnMuIE51bGwgdmFsdWVzIGZvciBwYXRoIHBhcmFtZXRlcnMgYXJlXG4gKiB0cmVhdGVkIGFzIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQGV4YW1wbGVcbiAqIDxwcmU+XG4gKiBuZXcgVXJsTWF0Y2hlcignL3VzZXIve2lkfT9xJykuZm9ybWF0KHsgaWQ6J2JvYicsIHE6J3llcycgfSk7XG4gKiAvLyByZXR1cm5zICcvdXNlci9ib2I/cT15ZXMnXG4gKiA8L3ByZT5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzICB0aGUgdmFsdWVzIHRvIHN1YnN0aXR1dGUgZm9yIHRoZSBwYXJhbWV0ZXJzIGluIHRoaXMgcGF0dGVybi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9ICB0aGUgZm9ybWF0dGVkIFVSTCAocGF0aCBhbmQgb3B0aW9uYWxseSBzZWFyY2ggcGFydCkuXG4gKi9cblVybE1hdGNoZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgdmFsdWVzID0gdmFsdWVzIHx8IHt9O1xuICB2YXIgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnRzLCBwYXJhbXMgPSB0aGlzLnBhcmFtZXRlcnMoKSwgcGFyYW1zZXQgPSB0aGlzLnBhcmFtcztcbiAgaWYgKCF0aGlzLnZhbGlkYXRlcyh2YWx1ZXMpKSByZXR1cm4gbnVsbDtcblxuICB2YXIgaSwgc2VhcmNoID0gZmFsc2UsIG5QYXRoID0gc2VnbWVudHMubGVuZ3RoIC0gMSwgblRvdGFsID0gcGFyYW1zLmxlbmd0aCwgcmVzdWx0ID0gc2VnbWVudHNbMF07XG5cbiAgZnVuY3Rpb24gZW5jb2RlRGFzaGVzKHN0cikgeyAvLyBSZXBsYWNlIGRhc2hlcyB3aXRoIGVuY29kZWQgXCJcXC1cIlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8tL2csIGZ1bmN0aW9uKGMpIHsgcmV0dXJuICclNUMlJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgfSk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgblRvdGFsOyBpKyspIHtcbiAgICB2YXIgaXNQYXRoUGFyYW0gPSBpIDwgblBhdGg7XG4gICAgdmFyIG5hbWUgPSBwYXJhbXNbaV0sIHBhcmFtID0gcGFyYW1zZXRbbmFtZV0sIHZhbHVlID0gcGFyYW0udmFsdWUodmFsdWVzW25hbWVdKTtcbiAgICB2YXIgaXNEZWZhdWx0VmFsdWUgPSBwYXJhbS5pc09wdGlvbmFsICYmIHBhcmFtLnR5cGUuZXF1YWxzKHBhcmFtLnZhbHVlKCksIHZhbHVlKTtcbiAgICB2YXIgc3F1YXNoID0gaXNEZWZhdWx0VmFsdWUgPyBwYXJhbS5zcXVhc2ggOiBmYWxzZTtcbiAgICB2YXIgZW5jb2RlZCA9IHBhcmFtLnR5cGUuZW5jb2RlKHZhbHVlKTtcblxuICAgIGlmIChpc1BhdGhQYXJhbSkge1xuICAgICAgdmFyIG5leHRTZWdtZW50ID0gc2VnbWVudHNbaSArIDFdO1xuICAgICAgdmFyIGlzRmluYWxQYXRoUGFyYW0gPSBpICsgMSA9PT0gblBhdGg7XG5cbiAgICAgIGlmIChzcXVhc2ggPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChlbmNvZGVkICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShlbmNvZGVkKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IG1hcChlbmNvZGVkLCBlbmNvZGVEYXNoZXMpLmpvaW4oXCItXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGVuY29kZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gbmV4dFNlZ21lbnQ7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFzaCA9PT0gdHJ1ZSkge1xuICAgICAgICB2YXIgY2FwdHVyZSA9IHJlc3VsdC5tYXRjaCgvXFwvJC8pID8gL1xcLz8oLiopLyA6IC8oLiopLztcbiAgICAgICAgcmVzdWx0ICs9IG5leHRTZWdtZW50Lm1hdGNoKGNhcHR1cmUpWzFdO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyhzcXVhc2gpKSB7XG4gICAgICAgIHJlc3VsdCArPSBzcXVhc2ggKyBuZXh0U2VnbWVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRmluYWxQYXRoUGFyYW0gJiYgcGFyYW0uc3F1YXNoID09PSB0cnVlICYmIHJlc3VsdC5zbGljZSgtMSkgPT09ICcvJykgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIC0xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVuY29kZWQgPT0gbnVsbCB8fCAoaXNEZWZhdWx0VmFsdWUgJiYgc3F1YXNoICE9PSBmYWxzZSkpIGNvbnRpbnVlO1xuICAgICAgaWYgKCFpc0FycmF5KGVuY29kZWQpKSBlbmNvZGVkID0gWyBlbmNvZGVkIF07XG4gICAgICBpZiAoZW5jb2RlZC5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuICAgICAgZW5jb2RlZCA9IG1hcChlbmNvZGVkLCBlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJyYnICsgbmFtZSArICc9Jyk7XG4gICAgICByZXN1bHQgKz0gKHNlYXJjaCA/ICcmJyA6ICc/JykgKyAobmFtZSArICc9JyArIGVuY29kZWQpO1xuICAgICAgc2VhcmNoID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbmdkb2Mgb2JqZWN0XG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC50eXBlOlR5cGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEltcGxlbWVudHMgYW4gaW50ZXJmYWNlIHRvIGRlZmluZSBjdXN0b20gcGFyYW1ldGVyIHR5cGVzIHRoYXQgY2FuIGJlIGRlY29kZWQgZnJvbSBhbmQgZW5jb2RlZCB0b1xuICogc3RyaW5nIHBhcmFtZXRlcnMgbWF0Y2hlZCBpbiBhIFVSTC4gVXNlZCBieSB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyIGBVcmxNYXRjaGVyYH1cbiAqIG9iamVjdHMgd2hlbiBtYXRjaGluZyBvciBmb3JtYXR0aW5nIFVSTHMsIG9yIGNvbXBhcmluZyBvciB2YWxpZGF0aW5nIHBhcmFtZXRlciB2YWx1ZXMuXG4gKlxuICogU2VlIHtAbGluayB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnkjbWV0aG9kc190eXBlIGAkdXJsTWF0Y2hlckZhY3RvcnkjdHlwZSgpYH0gZm9yIG1vcmVcbiAqIGluZm9ybWF0aW9uIG9uIHJlZ2lzdGVyaW5nIGN1c3RvbSB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnICBBIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHdoaWNoIGNvbnRhaW5zIHRoZSBjdXN0b20gdHlwZSBkZWZpbml0aW9uLiAgVGhlIG9iamVjdCdzXG4gKiAgICAgICAgcHJvcGVydGllcyB3aWxsIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG1ldGhvZHMgYW5kL29yIHBhdHRlcm4gaW4gYFR5cGVgJ3MgcHVibGljIGludGVyZmFjZS5cbiAqIEBleGFtcGxlXG4gKiA8cHJlPlxuICoge1xuICogICBkZWNvZGU6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7IH0sXG4gKiAgIGVuY29kZTogZnVuY3Rpb24odmFsKSB7IHJldHVybiB2YWwgJiYgdmFsLnRvU3RyaW5nKCk7IH0sXG4gKiAgIGVxdWFsczogZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gdGhpcy5pcyhhKSAmJiBhID09PSBiOyB9LFxuICogICBpczogZnVuY3Rpb24odmFsKSB7IHJldHVybiBhbmd1bGFyLmlzTnVtYmVyKHZhbCkgaXNGaW5pdGUodmFsKSAmJiB2YWwgJSAxID09PSAwOyB9LFxuICogICBwYXR0ZXJuOiAvXFxkKy9cbiAqIH1cbiAqIDwvcHJlPlxuICpcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBwYXR0ZXJuIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiB1c2VkIHRvIG1hdGNoIHZhbHVlcyBvZiB0aGlzIHR5cGUgd2hlblxuICogICAgICAgICAgIGNvbWluZyBmcm9tIGEgc3Vic3RyaW5nIG9mIGEgVVJMLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9ICBSZXR1cm5zIGEgbmV3IGBUeXBlYCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFR5cGUoY29uZmlnKSB7XG4gIGV4dGVuZCh0aGlzLCBjb25maWcpO1xufVxuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpUeXBlI2lzXG4gKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwudHlwZTpUeXBlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSB2YWx1ZSBpcyBvZiBhIHBhcnRpY3VsYXIgdHlwZS4gQWNjZXB0cyBhIG5hdGl2ZSAoZGVjb2RlZCkgdmFsdWVcbiAqIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgaXQgbWF0Y2hlcyB0aGUgY3VycmVudCBgVHlwZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsICBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5ICBPcHRpb25hbC4gSWYgdGhlIHR5cGUgY2hlY2sgaXMgaGFwcGVuaW5nIGluIHRoZSBjb250ZXh0IG9mIGEgc3BlY2lmaWNcbiAqICAgICAgICB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyIGBVcmxNYXRjaGVyYH0gb2JqZWN0LCB0aGlzIGlzIHRoZSBuYW1lIG9mIHRoZVxuICogICAgICAgIHBhcmFtZXRlciBpbiB3aGljaCBgdmFsYCBpcyBzdG9yZWQuIENhbiBiZSB1c2VkIGZvciBtZXRhLXByb2dyYW1taW5nIG9mIGBUeXBlYCBvYmplY3RzLlxuICogQHJldHVybnMge0Jvb2xlYW59ICBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgbWF0Y2hlcyB0aGUgdHlwZSwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gKi9cblR5cGUucHJvdG90eXBlLmlzID0gZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpUeXBlI2VuY29kZVxuICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogRW5jb2RlcyBhIGN1c3RvbS9uYXRpdmUgdHlwZSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IGNhbiBiZSBlbWJlZGRlZCBpbiBhIFVSTC4gTm90ZSB0aGF0IHRoZVxuICogcmV0dXJuIHZhbHVlIGRvZXMgKm5vdCogbmVlZCB0byBiZSBVUkwtc2FmZSAoaS5lLiBwYXNzZWQgdGhyb3VnaCBgZW5jb2RlVVJJQ29tcG9uZW50KClgKSwgaXRcbiAqIG9ubHkgbmVlZHMgdG8gYmUgYSByZXByZXNlbnRhdGlvbiBvZiBgdmFsYCB0aGF0IGhhcyBiZWVuIGNvZXJjZWQgdG8gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgIFRoZSB2YWx1ZSB0byBlbmNvZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5ICBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIGluIHdoaWNoIGB2YWxgIGlzIHN0b3JlZC4gQ2FuIGJlIHVzZWQgZm9yXG4gKiAgICAgICAgbWV0YS1wcm9ncmFtbWluZyBvZiBgVHlwZWAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9ICBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGB2YWxgIHRoYXQgY2FuIGJlIGVuY29kZWQgaW4gYSBVUkwuXG4gKi9cblR5cGUucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gIHJldHVybiB2YWw7XG59O1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpUeXBlI2RlY29kZVxuICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydHMgYSBwYXJhbWV0ZXIgdmFsdWUgKGZyb20gVVJMIHN0cmluZyBvciB0cmFuc2l0aW9uIHBhcmFtKSB0byBhIGN1c3RvbS9uYXRpdmUgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbCAgVGhlIFVSTCBwYXJhbWV0ZXIgdmFsdWUgdG8gZGVjb2RlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAgVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlciBpbiB3aGljaCBgdmFsYCBpcyBzdG9yZWQuIENhbiBiZSB1c2VkIGZvclxuICogICAgICAgIG1ldGEtcHJvZ3JhbW1pbmcgb2YgYFR5cGVgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Kn0gIFJldHVybnMgYSBjdXN0b20gcmVwcmVzZW50YXRpb24gb2YgdGhlIFVSTCBwYXJhbWV0ZXIgdmFsdWUuXG4gKi9cblR5cGUucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gIHJldHVybiB2YWw7XG59O1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpUeXBlI2VxdWFsc1xuICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHR3byBkZWNvZGVkIHZhbHVlcyBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAcGFyYW0geyp9IGEgIEEgdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0LlxuICogQHBhcmFtIHsqfSBiICBBIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSAgUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudC9lcXVhbCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gKi9cblR5cGUucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT0gYjtcbn07XG5cblR5cGUucHJvdG90eXBlLiRzdWJQYXR0ZXJuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdWIgPSB0aGlzLnBhdHRlcm4udG9TdHJpbmcoKTtcbiAgcmV0dXJuIHN1Yi5zdWJzdHIoMSwgc3ViLmxlbmd0aCAtIDIpO1xufTtcblxuVHlwZS5wcm90b3R5cGUucGF0dGVybiA9IC8uKi87XG5cblR5cGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIntUeXBlOlwiICsgdGhpcy5uYW1lICsgXCJ9XCI7IH07XG5cbi8qKiBHaXZlbiBhbiBlbmNvZGVkIHN0cmluZywgb3IgYSBkZWNvZGVkIG9iamVjdCwgcmV0dXJucyBhIGRlY29kZWQgb2JqZWN0ICovXG5UeXBlLnByb3RvdHlwZS4kbm9ybWFsaXplID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0aGlzLmlzKHZhbCkgPyB2YWwgOiB0aGlzLmRlY29kZSh2YWwpO1xufTtcblxuLypcbiAqIFdyYXBzIGFuIGV4aXN0aW5nIGN1c3RvbSBUeXBlIGFzIGFuIGFycmF5IG9mIFR5cGUsIGRlcGVuZGluZyBvbiAnbW9kZScuXG4gKiBlLmcuOlxuICogLSB1cmxtYXRjaGVyIHBhdHRlcm4gXCIvcGF0aD97cXVlcnlQYXJhbVtdOmludH1cIlxuICogLSB1cmw6IFwiL3BhdGg/cXVlcnlQYXJhbT0xJnF1ZXJ5UGFyYW09MlxuICogLSAkc3RhdGVQYXJhbXMucXVlcnlQYXJhbSB3aWxsIGJlIFsxLCAyXVxuICogaWYgYG1vZGVgIGlzIFwiYXV0b1wiLCB0aGVuXG4gKiAtIHVybDogXCIvcGF0aD9xdWVyeVBhcmFtPTEgd2lsbCBjcmVhdGUgJHN0YXRlUGFyYW1zLnF1ZXJ5UGFyYW06IDFcbiAqIC0gdXJsOiBcIi9wYXRoP3F1ZXJ5UGFyYW09MSZxdWVyeVBhcmFtPTIgd2lsbCBjcmVhdGUgJHN0YXRlUGFyYW1zLnF1ZXJ5UGFyYW06IFsxLCAyXVxuICovXG5UeXBlLnByb3RvdHlwZS4kYXNBcnJheSA9IGZ1bmN0aW9uKG1vZGUsIGlzU2VhcmNoKSB7XG4gIGlmICghbW9kZSkgcmV0dXJuIHRoaXM7XG4gIGlmIChtb2RlID09PSBcImF1dG9cIiAmJiAhaXNTZWFyY2gpIHRocm93IG5ldyBFcnJvcihcIidhdXRvJyBhcnJheSBtb2RlIGlzIGZvciBxdWVyeSBwYXJhbWV0ZXJzIG9ubHlcIik7XG5cbiAgZnVuY3Rpb24gQXJyYXlUeXBlKHR5cGUsIG1vZGUpIHtcbiAgICBmdW5jdGlvbiBiaW5kVG8odHlwZSwgY2FsbGJhY2tOYW1lKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0eXBlW2NhbGxiYWNrTmFtZV0uYXBwbHkodHlwZSwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gV3JhcCBub24tYXJyYXkgdmFsdWUgYXMgYXJyYXlcbiAgICBmdW5jdGlvbiBhcnJheVdyYXAodmFsKSB7IHJldHVybiBpc0FycmF5KHZhbCkgPyB2YWwgOiAoaXNEZWZpbmVkKHZhbCkgPyBbIHZhbCBdIDogW10pOyB9XG4gICAgLy8gVW53cmFwIGFycmF5IHZhbHVlIGZvciBcImF1dG9cIiBtb2RlLiBSZXR1cm4gdW5kZWZpbmVkIGZvciBlbXB0eSBhcnJheS5cbiAgICBmdW5jdGlvbiBhcnJheVVud3JhcCh2YWwpIHtcbiAgICAgIHN3aXRjaCh2YWwubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbW9kZSA9PT0gXCJhdXRvXCIgPyB2YWxbMF0gOiB2YWw7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZhbHNleSh2YWwpIHsgcmV0dXJuICF2YWw7IH1cblxuICAgIC8vIFdyYXBzIHR5cGUgKC5pcy8uZW5jb2RlLy5kZWNvZGUpIGZ1bmN0aW9ucyB0byBvcGVyYXRlIG9uIGVhY2ggdmFsdWUgb2YgYW4gYXJyYXlcbiAgICBmdW5jdGlvbiBhcnJheUhhbmRsZXIoY2FsbGJhY2ssIGFsbFRydXRoeU1vZGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVBcnJheSh2YWwpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAwKSByZXR1cm4gdmFsO1xuICAgICAgICB2YWwgPSBhcnJheVdyYXAodmFsKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG1hcCh2YWwsIGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGFsbFRydXRoeU1vZGUgPT09IHRydWUpXG4gICAgICAgICAgcmV0dXJuIGZpbHRlcihyZXN1bHQsIGZhbHNleSkubGVuZ3RoID09PSAwO1xuICAgICAgICByZXR1cm4gYXJyYXlVbndyYXAocmVzdWx0KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gV3JhcHMgdHlwZSAoLmVxdWFscykgZnVuY3Rpb25zIHRvIG9wZXJhdGUgb24gZWFjaCB2YWx1ZSBvZiBhbiBhcnJheVxuICAgIGZ1bmN0aW9uIGFycmF5RXF1YWxzSGFuZGxlcihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZUFycmF5KHZhbDEsIHZhbDIpIHtcbiAgICAgICAgdmFyIGxlZnQgPSBhcnJheVdyYXAodmFsMSksIHJpZ2h0ID0gYXJyYXlXcmFwKHZhbDIpO1xuICAgICAgICBpZiAobGVmdC5sZW5ndGggIT09IHJpZ2h0Lmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlZnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWNhbGxiYWNrKGxlZnRbaV0sIHJpZ2h0W2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmVuY29kZSA9IGFycmF5SGFuZGxlcihiaW5kVG8odHlwZSwgJ2VuY29kZScpKTtcbiAgICB0aGlzLmRlY29kZSA9IGFycmF5SGFuZGxlcihiaW5kVG8odHlwZSwgJ2RlY29kZScpKTtcbiAgICB0aGlzLmlzICAgICA9IGFycmF5SGFuZGxlcihiaW5kVG8odHlwZSwgJ2lzJyksIHRydWUpO1xuICAgIHRoaXMuZXF1YWxzID0gYXJyYXlFcXVhbHNIYW5kbGVyKGJpbmRUbyh0eXBlLCAnZXF1YWxzJykpO1xuICAgIHRoaXMucGF0dGVybiA9IHR5cGUucGF0dGVybjtcbiAgICB0aGlzLiRub3JtYWxpemUgPSBhcnJheUhhbmRsZXIoYmluZFRvKHR5cGUsICckbm9ybWFsaXplJykpO1xuICAgIHRoaXMubmFtZSA9IHR5cGUubmFtZTtcbiAgICB0aGlzLiRhcnJheU1vZGUgPSBtb2RlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBBcnJheVR5cGUodGhpcywgbW9kZSk7XG59O1xuXG5cblxuLyoqXG4gKiBAbmdkb2Mgb2JqZWN0XG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnlcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEZhY3RvcnkgZm9yIHtAbGluayB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIgYFVybE1hdGNoZXJgfSBpbnN0YW5jZXMuIFRoZSBmYWN0b3J5XG4gKiBpcyBhbHNvIGF2YWlsYWJsZSB0byBwcm92aWRlcnMgdW5kZXIgdGhlIG5hbWUgYCR1cmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyYC5cbiAqL1xuZnVuY3Rpb24gJFVybE1hdGNoZXJGYWN0b3J5KCkge1xuICAkJFVNRlAgPSB0aGlzO1xuXG4gIHZhciBpc0Nhc2VJbnNlbnNpdGl2ZSA9IGZhbHNlLCBpc1N0cmljdE1vZGUgPSB0cnVlLCBkZWZhdWx0U3F1YXNoUG9saWN5ID0gZmFsc2U7XG5cbiAgLy8gVXNlIHRpbGRlcyB0byBwcmUtZW5jb2RlIHNsYXNoZXMuXG4gIC8vIElmIHRoZSBzbGFzaGVzIGFyZSBzaW1wbHkgVVJMRW5jb2RlZCwgdGhlIGJyb3dzZXIgY2FuIGNob29zZSB0byBwcmUtZGVjb2RlIHRoZW0sXG4gIC8vIGFuZCBiaWRpcmVjdGlvbmFsIGVuY29kaW5nL2RlY29kaW5nIGZhaWxzLlxuICAvLyBUaWxkZSB3YXMgY2hvc2VuIGJlY2F1c2UgaXQncyBub3QgYSBSRkMgMzk4NiBzZWN0aW9uIDIuMiBSZXNlcnZlZCBDaGFyYWN0ZXJcbiAgZnVuY3Rpb24gdmFsVG9TdHJpbmcodmFsKSB7IHJldHVybiB2YWwgIT0gbnVsbCA/IHZhbC50b1N0cmluZygpLnJlcGxhY2UoLyh+fFxcLykvZywgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIHsnfic6J35+JywgJy8nOid+MkYnfVttXTsgfSkgOiB2YWw7IH1cbiAgZnVuY3Rpb24gdmFsRnJvbVN0cmluZyh2YWwpIHsgcmV0dXJuIHZhbCAhPSBudWxsID8gdmFsLnRvU3RyaW5nKCkucmVwbGFjZSgvKH5+fH4yRikvZywgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIHsnfn4nOid+JywgJ34yRic6Jy8nfVttXTsgfSkgOiB2YWw7IH1cblxuICB2YXIgJHR5cGVzID0ge30sIGVucXVldWUgPSB0cnVlLCB0eXBlUXVldWUgPSBbXSwgaW5qZWN0b3IsIGRlZmF1bHRUeXBlcyA9IHtcbiAgICBcInN0cmluZ1wiOiB7XG4gICAgICBlbmNvZGU6IHZhbFRvU3RyaW5nLFxuICAgICAgZGVjb2RlOiB2YWxGcm9tU3RyaW5nLFxuICAgICAgLy8gVE9ETzogaW4gMS4wLCBtYWtlIHN0cmluZyAuaXMoKSByZXR1cm4gZmFsc2UgaWYgdmFsdWUgaXMgdW5kZWZpbmVkL251bGwgYnkgZGVmYXVsdC5cbiAgICAgIC8vIEluIDAuMi54LCBzdHJpbmcgcGFyYW1zIGFyZSBvcHRpb25hbCBieSBkZWZhdWx0IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgICBpczogZnVuY3Rpb24odmFsKSB7IHJldHVybiB2YWwgPT0gbnVsbCB8fCAhaXNEZWZpbmVkKHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjsgfSxcbiAgICAgIHBhdHRlcm46IC9bXi9dKi9cbiAgICB9LFxuICAgIFwiaW50XCI6IHtcbiAgICAgIGVuY29kZTogdmFsVG9TdHJpbmcsXG4gICAgICBkZWNvZGU6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7IH0sXG4gICAgICBpczogZnVuY3Rpb24odmFsKSB7IHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdGhpcy5kZWNvZGUodmFsLnRvU3RyaW5nKCkpID09PSB2YWw7IH0sXG4gICAgICBwYXR0ZXJuOiAvXFxkKy9cbiAgICB9LFxuICAgIFwiYm9vbFwiOiB7XG4gICAgICBlbmNvZGU6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gdmFsID8gMSA6IDA7IH0sXG4gICAgICBkZWNvZGU6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCkgIT09IDA7IH0sXG4gICAgICBpczogZnVuY3Rpb24odmFsKSB7IHJldHVybiB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZTsgfSxcbiAgICAgIHBhdHRlcm46IC8wfDEvXG4gICAgfSxcbiAgICBcImRhdGVcIjoge1xuICAgICAgZW5jb2RlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICghdGhpcy5pcyh2YWwpKVxuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBbIHZhbC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICgnMCcgKyAodmFsLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpLFxuICAgICAgICAgICgnMCcgKyB2YWwuZ2V0RGF0ZSgpKS5zbGljZSgtMilcbiAgICAgICAgXS5qb2luKFwiLVwiKTtcbiAgICAgIH0sXG4gICAgICBkZWNvZGU6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXModmFsKSkgcmV0dXJuIHZhbDtcbiAgICAgICAgdmFyIG1hdGNoID0gdGhpcy5jYXB0dXJlLmV4ZWModmFsKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoID8gbmV3IERhdGUobWF0Y2hbMV0sIG1hdGNoWzJdIC0gMSwgbWF0Y2hbM10pIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGlzOiBmdW5jdGlvbih2YWwpIHsgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKHZhbC52YWx1ZU9mKCkpOyB9LFxuICAgICAgZXF1YWxzOiBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gdGhpcy5pcyhhKSAmJiB0aGlzLmlzKGIpICYmIGEudG9JU09TdHJpbmcoKSA9PT0gYi50b0lTT1N0cmluZygpOyB9LFxuICAgICAgcGF0dGVybjogL1swLTldezR9LSg/OjBbMS05XXwxWzAtMl0pLSg/OjBbMS05XXxbMS0yXVswLTldfDNbMC0xXSkvLFxuICAgICAgY2FwdHVyZTogLyhbMC05XXs0fSktKDBbMS05XXwxWzAtMl0pLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pL1xuICAgIH0sXG4gICAgXCJqc29uXCI6IHtcbiAgICAgIGVuY29kZTogYW5ndWxhci50b0pzb24sXG4gICAgICBkZWNvZGU6IGFuZ3VsYXIuZnJvbUpzb24sXG4gICAgICBpczogYW5ndWxhci5pc09iamVjdCxcbiAgICAgIGVxdWFsczogYW5ndWxhci5lcXVhbHMsXG4gICAgICBwYXR0ZXJuOiAvW14vXSovXG4gICAgfSxcbiAgICBcImFueVwiOiB7IC8vIGRvZXMgbm90IGVuY29kZS9kZWNvZGVcbiAgICAgIGVuY29kZTogYW5ndWxhci5pZGVudGl0eSxcbiAgICAgIGRlY29kZTogYW5ndWxhci5pZGVudGl0eSxcbiAgICAgIGVxdWFsczogYW5ndWxhci5lcXVhbHMsXG4gICAgICBwYXR0ZXJuOiAvLiovXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0cmljdDogaXNTdHJpY3RNb2RlLFxuICAgICAgY2FzZUluc2Vuc2l0aXZlOiBpc0Nhc2VJbnNlbnNpdGl2ZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc0luamVjdGFibGUodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzRnVuY3Rpb24odmFsdWUpIHx8IChpc0FycmF5KHZhbHVlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFtJbnRlcm5hbF0gR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcGFyYW1ldGVyLCB3aGljaCBtYXkgYmUgYW4gaW5qZWN0YWJsZSBmdW5jdGlvbi5cbiAgICovXG4gICRVcmxNYXRjaGVyRmFjdG9yeS4kJGdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIGlmICghaXNJbmplY3RhYmxlKGNvbmZpZy52YWx1ZSkpIHJldHVybiBjb25maWcudmFsdWU7XG4gICAgaWYgKCFpbmplY3RvcikgdGhyb3cgbmV3IEVycm9yKFwiSW5qZWN0YWJsZSBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhdCBjb25maWd1cmF0aW9uIHRpbWVcIik7XG4gICAgcmV0dXJuIGluamVjdG9yLmludm9rZShjb25maWcudmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5I2Nhc2VJbnNlbnNpdGl2ZVxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBEZWZpbmVzIHdoZXRoZXIgVVJMIG1hdGNoaW5nIHNob3VsZCBiZSBjYXNlIHNlbnNpdGl2ZSAodGhlIGRlZmF1bHQgYmVoYXZpb3IpLCBvciBub3QuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgYGZhbHNlYCB0byBtYXRjaCBVUkwgaW4gYSBjYXNlIHNlbnNpdGl2ZSBtYW5uZXI7IG90aGVyd2lzZSBgdHJ1ZWA7XG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0aGUgY3VycmVudCB2YWx1ZSBvZiBjYXNlSW5zZW5zaXRpdmVcbiAgICovXG4gIHRoaXMuY2FzZUluc2Vuc2l0aXZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSlcbiAgICAgIGlzQ2FzZUluc2Vuc2l0aXZlID0gdmFsdWU7XG4gICAgcmV0dXJuIGlzQ2FzZUluc2Vuc2l0aXZlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5I3N0cmljdE1vZGVcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRGVmaW5lcyB3aGV0aGVyIFVSTHMgc2hvdWxkIG1hdGNoIHRyYWlsaW5nIHNsYXNoZXMsIG9yIG5vdCAodGhlIGRlZmF1bHQgYmVoYXZpb3IpLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSB2YWx1ZSBgZmFsc2VgIHRvIG1hdGNoIHRyYWlsaW5nIHNsYXNoZXMgaW4gVVJMcywgb3RoZXJ3aXNlIGB0cnVlYC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRoZSBjdXJyZW50IHZhbHVlIG9mIHN0cmljdE1vZGVcbiAgICovXG4gIHRoaXMuc3RyaWN0TW9kZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpXG4gICAgICBpc1N0cmljdE1vZGUgPSB2YWx1ZTtcbiAgICByZXR1cm4gaXNTdHJpY3RNb2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5I2RlZmF1bHRTcXVhc2hQb2xpY3lcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2V0cyB0aGUgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGdlbmVyYXRpbmcgb3IgbWF0Y2hpbmcgVVJMcyB3aXRoIGRlZmF1bHQgcGFyYW1ldGVyIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIEEgc3RyaW5nIHRoYXQgZGVmaW5lcyB0aGUgZGVmYXVsdCBwYXJhbWV0ZXIgVVJMIHNxdWFzaGluZyBiZWhhdmlvci5cbiAgICogICAgYG5vc3F1YXNoYDogV2hlbiBnZW5lcmF0aW5nIGFuIGhyZWYgd2l0aCBhIGRlZmF1bHQgcGFyYW1ldGVyIHZhbHVlLCBkbyBub3Qgc3F1YXNoIHRoZSBwYXJhbWV0ZXIgdmFsdWUgZnJvbSB0aGUgVVJMXG4gICAqICAgIGBzbGFzaGA6IFdoZW4gZ2VuZXJhdGluZyBhbiBocmVmIHdpdGggYSBkZWZhdWx0IHBhcmFtZXRlciB2YWx1ZSwgc3F1YXNoIChyZW1vdmUpIHRoZSBwYXJhbWV0ZXIgdmFsdWUsIGFuZCwgaWYgdGhlXG4gICAqICAgICAgICAgICAgIHBhcmFtZXRlciBpcyBzdXJyb3VuZGVkIGJ5IHNsYXNoZXMsIHNxdWFzaCAocmVtb3ZlKSBvbmUgc2xhc2ggZnJvbSB0aGUgVVJMXG4gICAqICAgIGFueSBvdGhlciBzdHJpbmcsIGUuZy4gXCJ+XCI6IFdoZW4gZ2VuZXJhdGluZyBhbiBocmVmIHdpdGggYSBkZWZhdWx0IHBhcmFtZXRlciB2YWx1ZSwgc3F1YXNoIChyZW1vdmUpXG4gICAqICAgICAgICAgICAgIHRoZSBwYXJhbWV0ZXIgdmFsdWUgZnJvbSB0aGUgVVJMIGFuZCByZXBsYWNlIGl0IHdpdGggdGhpcyBzdHJpbmcuXG4gICAqL1xuICB0aGlzLmRlZmF1bHRTcXVhc2hQb2xpY3kgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkgcmV0dXJuIGRlZmF1bHRTcXVhc2hQb2xpY3k7XG4gICAgaWYgKHZhbHVlICE9PSB0cnVlICYmIHZhbHVlICE9PSBmYWxzZSAmJiAhaXNTdHJpbmcodmFsdWUpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzcXVhc2ggcG9saWN5OiBcIiArIHZhbHVlICsgXCIuIFZhbGlkIHBvbGljaWVzOiBmYWxzZSwgdHJ1ZSwgYXJiaXRyYXJ5LXN0cmluZ1wiKTtcbiAgICBkZWZhdWx0U3F1YXNoUG9saWN5ID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5I2NvbXBpbGVcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQ3JlYXRlcyBhIHtAbGluayB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIgYFVybE1hdGNoZXJgfSBmb3IgdGhlIHNwZWNpZmllZCBwYXR0ZXJuLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAgVGhlIFVSTCBwYXR0ZXJuLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnICBUaGUgY29uZmlnIG9iamVjdCBoYXNoLlxuICAgKiBAcmV0dXJucyB7VXJsTWF0Y2hlcn0gIFRoZSBVcmxNYXRjaGVyLlxuICAgKi9cbiAgdGhpcy5jb21waWxlID0gZnVuY3Rpb24gKHBhdHRlcm4sIGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgVXJsTWF0Y2hlcihwYXR0ZXJuLCBleHRlbmQoZ2V0RGVmYXVsdENvbmZpZygpLCBjb25maWcpKTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeSNpc01hdGNoZXJcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgb2JqZWN0IGlzIGEgYFVybE1hdGNoZXJgLCBvciBmYWxzZSBvdGhlcndpc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgIFRoZSBvYmplY3QgdG8gcGVyZm9ybSB0aGUgdHlwZSBjaGVjayBhZ2FpbnN0LlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gIFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3QgbWF0Y2hlcyB0aGUgYFVybE1hdGNoZXJgIGludGVyZmFjZSwgYnlcbiAgICogICAgICAgICAgaW1wbGVtZW50aW5nIGFsbCB0aGUgc2FtZSBtZXRob2RzLlxuICAgKi9cbiAgdGhpcy5pc01hdGNoZXIgPSBmdW5jdGlvbiAobykge1xuICAgIGlmICghaXNPYmplY3QobykpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGZvckVhY2goVXJsTWF0Y2hlci5wcm90b3R5cGUsIGZ1bmN0aW9uKHZhbCwgbmFtZSkge1xuICAgICAgaWYgKGlzRnVuY3Rpb24odmFsKSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgKGlzRGVmaW5lZChvW25hbWVdKSAmJiBpc0Z1bmN0aW9uKG9bbmFtZV0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5I3R5cGVcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVnaXN0ZXJzIGEgY3VzdG9tIHtAbGluayB1aS5yb3V0ZXIudXRpbC50eXBlOlR5cGUgYFR5cGVgfSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiBnZW5lcmF0ZSBVUkxzIHdpdGggdHlwZWQgcGFyYW1ldGVycy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIFRoZSB0eXBlIG5hbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBkZWZpbml0aW9uICAgVGhlIHR5cGUgZGVmaW5pdGlvbi4gU2VlXG4gICAqICAgICAgICB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpUeXBlIGBUeXBlYH0gZm9yIGluZm9ybWF0aW9uIG9uIHRoZSB2YWx1ZXMgYWNjZXB0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBkZWZpbml0aW9uRm4gKG9wdGlvbmFsKSBBIGZ1bmN0aW9uIHRoYXQgaXMgaW5qZWN0ZWQgYmVmb3JlIHRoZSBhcHBcbiAgICogICAgICAgIHJ1bnRpbWUgc3RhcnRzLiAgVGhlIHJlc3VsdCBvZiB0aGlzIGZ1bmN0aW9uIGlzIG1lcmdlZCBpbnRvIHRoZSBleGlzdGluZyBgZGVmaW5pdGlvbmAuXG4gICAqICAgICAgICBTZWUge0BsaW5rIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZSBgVHlwZWB9IGZvciBpbmZvcm1hdGlvbiBvbiB0aGUgdmFsdWVzIGFjY2VwdGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSAgUmV0dXJucyBgJHVybE1hdGNoZXJGYWN0b3J5UHJvdmlkZXJgLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBUaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYSBjdXN0b20gdHlwZSB0aGF0IGVuY29kZXMgYW5kIGRlY29kZXMgaXRlbXMgZnJvbSBhblxuICAgKiBhcnJheSwgdXNpbmcgdGhlIGFycmF5IGluZGV4IGFzIHRoZSBVUkwtZW5jb2RlZCB2YWx1ZTpcbiAgICpcbiAgICogPHByZT5cbiAgICogdmFyIGxpc3QgPSBbJ0pvaG4nLCAnUGF1bCcsICdHZW9yZ2UnLCAnUmluZ28nXTtcbiAgICpcbiAgICogJHVybE1hdGNoZXJGYWN0b3J5UHJvdmlkZXIudHlwZSgnbGlzdEl0ZW0nLCB7XG4gICAqICAgZW5jb2RlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAqICAgICAvLyBSZXByZXNlbnQgdGhlIGxpc3QgaXRlbSBpbiB0aGUgVVJMIHVzaW5nIGl0cyBjb3JyZXNwb25kaW5nIGluZGV4XG4gICAqICAgICByZXR1cm4gbGlzdC5pbmRleE9mKGl0ZW0pO1xuICAgKiAgIH0sXG4gICAqICAgZGVjb2RlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAqICAgICAvLyBMb29rIHVwIHRoZSBsaXN0IGl0ZW0gYnkgaW5kZXhcbiAgICogICAgIHJldHVybiBsaXN0W3BhcnNlSW50KGl0ZW0sIDEwKV07XG4gICAqICAgfSxcbiAgICogICBpczogZnVuY3Rpb24oaXRlbSkge1xuICAgKiAgICAgLy8gRW5zdXJlIHRoZSBpdGVtIGlzIHZhbGlkIGJ5IGNoZWNraW5nIHRvIHNlZSB0aGF0IGl0IGFwcGVhcnNcbiAgICogICAgIC8vIGluIHRoZSBsaXN0XG4gICAqICAgICByZXR1cm4gbGlzdC5pbmRleE9mKGl0ZW0pID4gLTE7XG4gICAqICAgfVxuICAgKiB9KTtcbiAgICpcbiAgICogJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2xpc3QnLCB7XG4gICAqICAgdXJsOiBcIi9saXN0L3tpdGVtOmxpc3RJdGVtfVwiLFxuICAgKiAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAqICAgICBjb25zb2xlLmxvZygkc3RhdGVQYXJhbXMuaXRlbSk7XG4gICAqICAgfVxuICAgKiB9KTtcbiAgICpcbiAgICogLy8gLi4uXG4gICAqXG4gICAqIC8vIENoYW5nZXMgVVJMIHRvICcvbGlzdC8zJywgbG9ncyBcIlJpbmdvXCIgdG8gdGhlIGNvbnNvbGVcbiAgICogJHN0YXRlLmdvKCdsaXN0JywgeyBpdGVtOiBcIlJpbmdvXCIgfSk7XG4gICAqIDwvcHJlPlxuICAgKlxuICAgKiBUaGlzIGlzIGEgbW9yZSBjb21wbGV4IGV4YW1wbGUgb2YgYSB0eXBlIHRoYXQgcmVsaWVzIG9uIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHRvXG4gICAqIGludGVyYWN0IHdpdGggc2VydmljZXMsIGFuZCB1c2VzIHRoZSBwYXJhbWV0ZXIgbmFtZSBmcm9tIHRoZSBVUkwgdG8gaW5mZXIgaG93IHRvXG4gICAqIGhhbmRsZSBlbmNvZGluZyBhbmQgZGVjb2RpbmcgcGFyYW1ldGVyIHZhbHVlczpcbiAgICpcbiAgICogPHByZT5cbiAgICogLy8gRGVmaW5lcyBhIGN1c3RvbSB0eXBlIHRoYXQgZ2V0cyBhIHZhbHVlIGZyb20gYSBzZXJ2aWNlLFxuICAgKiAvLyB3aGVyZSBlYWNoIHNlcnZpY2UgZ2V0cyBkaWZmZXJlbnQgdHlwZXMgb2YgdmFsdWVzIGZyb21cbiAgICogLy8gYSBiYWNrZW5kIEFQSTpcbiAgICogJHVybE1hdGNoZXJGYWN0b3J5UHJvdmlkZXIudHlwZSgnZGJPYmplY3QnLCB7fSwgZnVuY3Rpb24oVXNlcnMsIFBvc3RzKSB7XG4gICAqXG4gICAqICAgLy8gTWF0Y2hlcyB1cCBzZXJ2aWNlcyB0byBVUkwgcGFyYW1ldGVyIG5hbWVzXG4gICAqICAgdmFyIHNlcnZpY2VzID0ge1xuICAgKiAgICAgdXNlcjogVXNlcnMsXG4gICAqICAgICBwb3N0OiBQb3N0c1xuICAgKiAgIH07XG4gICAqXG4gICAqICAgcmV0dXJuIHtcbiAgICogICAgIGVuY29kZTogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAqICAgICAgIC8vIFJlcHJlc2VudCB0aGUgb2JqZWN0IGluIHRoZSBVUkwgdXNpbmcgaXRzIHVuaXF1ZSBJRFxuICAgKiAgICAgICByZXR1cm4gb2JqZWN0LmlkO1xuICAgKiAgICAgfSxcbiAgICogICAgIGRlY29kZTogZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgKiAgICAgICAvLyBMb29rIHVwIHRoZSBvYmplY3QgYnkgSUQsIHVzaW5nIHRoZSBwYXJhbWV0ZXJcbiAgICogICAgICAgLy8gbmFtZSAoa2V5KSB0byBjYWxsIHRoZSBjb3JyZWN0IHNlcnZpY2VcbiAgICogICAgICAgcmV0dXJuIHNlcnZpY2VzW2tleV0uZmluZEJ5SWQodmFsdWUpO1xuICAgKiAgICAgfSxcbiAgICogICAgIGlzOiBmdW5jdGlvbihvYmplY3QsIGtleSkge1xuICAgKiAgICAgICAvLyBDaGVjayB0aGF0IG9iamVjdCBpcyBhIHZhbGlkIGRiT2JqZWN0XG4gICAqICAgICAgIHJldHVybiBhbmd1bGFyLmlzT2JqZWN0KG9iamVjdCkgJiYgb2JqZWN0LmlkICYmIHNlcnZpY2VzW2tleV07XG4gICAqICAgICB9XG4gICAqICAgICBlcXVhbHM6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICogICAgICAgLy8gQ2hlY2sgdGhlIGVxdWFsaXR5IG9mIGRlY29kZWQgb2JqZWN0cyBieSBjb21wYXJpbmdcbiAgICogICAgICAgLy8gdGhlaXIgdW5pcXVlIElEc1xuICAgKiAgICAgICByZXR1cm4gYS5pZCA9PT0gYi5pZDtcbiAgICogICAgIH1cbiAgICogICB9O1xuICAgKiB9KTtcbiAgICpcbiAgICogLy8gSW4gYSBjb25maWcoKSBibG9jaywgeW91IGNhbiB0aGVuIGF0dGFjaCBVUkxzIHdpdGhcbiAgICogLy8gdHlwZS1hbm5vdGF0ZWQgcGFyYW1ldGVyczpcbiAgICogJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3VzZXJzJywge1xuICAgKiAgIHVybDogXCIvdXNlcnNcIixcbiAgICogICAvLyAuLi5cbiAgICogfSkuc3RhdGUoJ3VzZXJzLml0ZW0nLCB7XG4gICAqICAgdXJsOiBcIi97dXNlcjpkYk9iamVjdH1cIixcbiAgICogICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcykge1xuICAgKiAgICAgLy8gJHN0YXRlUGFyYW1zLnVzZXIgd2lsbCBub3cgYmUgYW4gb2JqZWN0IHJldHVybmVkIGZyb21cbiAgICogICAgIC8vIHRoZSBVc2VycyBzZXJ2aWNlXG4gICAqICAgfSxcbiAgICogICAvLyAuLi5cbiAgICogfSk7XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgdGhpcy50eXBlID0gZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24sIGRlZmluaXRpb25Gbikge1xuICAgIGlmICghaXNEZWZpbmVkKGRlZmluaXRpb24pKSByZXR1cm4gJHR5cGVzW25hbWVdO1xuICAgIGlmICgkdHlwZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHRocm93IG5ldyBFcnJvcihcIkEgdHlwZSBuYW1lZCAnXCIgKyBuYW1lICsgXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5cIik7XG5cbiAgICAkdHlwZXNbbmFtZV0gPSBuZXcgVHlwZShleHRlbmQoeyBuYW1lOiBuYW1lIH0sIGRlZmluaXRpb24pKTtcbiAgICBpZiAoZGVmaW5pdGlvbkZuKSB7XG4gICAgICB0eXBlUXVldWUucHVzaCh7IG5hbWU6IG5hbWUsIGRlZjogZGVmaW5pdGlvbkZuIH0pO1xuICAgICAgaWYgKCFlbnF1ZXVlKSBmbHVzaFR5cGVRdWV1ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBgZmx1c2hUeXBlUXVldWUoKWAgd2FpdHMgdW50aWwgYCR1cmxNYXRjaGVyRmFjdG9yeWAgaXMgaW5qZWN0ZWQgYmVmb3JlIGludm9raW5nIHRoZSBxdWV1ZWQgYGRlZmluaXRpb25GbmBzXG4gIGZ1bmN0aW9uIGZsdXNoVHlwZVF1ZXVlKCkge1xuICAgIHdoaWxlKHR5cGVRdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZVF1ZXVlLnNoaWZ0KCk7XG4gICAgICBpZiAodHlwZS5wYXR0ZXJuKSB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IG92ZXJyaWRlIGEgdHlwZSdzIC5wYXR0ZXJuIGF0IHJ1bnRpbWUuXCIpO1xuICAgICAgYW5ndWxhci5leHRlbmQoJHR5cGVzW3R5cGUubmFtZV0sIGluamVjdG9yLmludm9rZSh0eXBlLmRlZikpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlZ2lzdGVyIGRlZmF1bHQgdHlwZXMuIFN0b3JlIHRoZW0gaW4gdGhlIHByb3RvdHlwZSBvZiAkdHlwZXMuXG4gIGZvckVhY2goZGVmYXVsdFR5cGVzLCBmdW5jdGlvbih0eXBlLCBuYW1lKSB7ICR0eXBlc1tuYW1lXSA9IG5ldyBUeXBlKGV4dGVuZCh7bmFtZTogbmFtZX0sIHR5cGUpKTsgfSk7XG4gICR0eXBlcyA9IGluaGVyaXQoJHR5cGVzLCB7fSk7XG5cbiAgLyogTm8gbmVlZCB0byBkb2N1bWVudCAkZ2V0LCBzaW5jZSBpdCByZXR1cm5zIHRoaXMgKi9cbiAgdGhpcy4kZ2V0ID0gWyckaW5qZWN0b3InLCBmdW5jdGlvbiAoJGluamVjdG9yKSB7XG4gICAgaW5qZWN0b3IgPSAkaW5qZWN0b3I7XG4gICAgZW5xdWV1ZSA9IGZhbHNlO1xuICAgIGZsdXNoVHlwZVF1ZXVlKCk7XG5cbiAgICBmb3JFYWNoKGRlZmF1bHRUeXBlcywgZnVuY3Rpb24odHlwZSwgbmFtZSkge1xuICAgICAgaWYgKCEkdHlwZXNbbmFtZV0pICR0eXBlc1tuYW1lXSA9IG5ldyBUeXBlKHR5cGUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XTtcblxuICB0aGlzLlBhcmFtID0gZnVuY3Rpb24gUGFyYW0oaWQsIHR5cGUsIGNvbmZpZywgbG9jYXRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgY29uZmlnID0gdW53cmFwU2hvcnRoYW5kKGNvbmZpZyk7XG4gICAgdHlwZSA9IGdldFR5cGUoY29uZmlnLCB0eXBlLCBsb2NhdGlvbik7XG4gICAgdmFyIGFycmF5TW9kZSA9IGdldEFycmF5TW9kZSgpO1xuICAgIHR5cGUgPSBhcnJheU1vZGUgPyB0eXBlLiRhc0FycmF5KGFycmF5TW9kZSwgbG9jYXRpb24gPT09IFwic2VhcmNoXCIpIDogdHlwZTtcbiAgICBpZiAodHlwZS5uYW1lID09PSBcInN0cmluZ1wiICYmICFhcnJheU1vZGUgJiYgbG9jYXRpb24gPT09IFwicGF0aFwiICYmIGNvbmZpZy52YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgY29uZmlnLnZhbHVlID0gXCJcIjsgLy8gZm9yIDAuMi54OyBpbiAwLjMuMCsgZG8gbm90IGF1dG9tYXRpY2FsbHkgZGVmYXVsdCB0byBcIlwiXG4gICAgdmFyIGlzT3B0aW9uYWwgPSBjb25maWcudmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgc3F1YXNoID0gZ2V0U3F1YXNoUG9saWN5KGNvbmZpZywgaXNPcHRpb25hbCk7XG4gICAgdmFyIHJlcGxhY2UgPSBnZXRSZXBsYWNlKGNvbmZpZywgYXJyYXlNb2RlLCBpc09wdGlvbmFsLCBzcXVhc2gpO1xuXG4gICAgZnVuY3Rpb24gdW53cmFwU2hvcnRoYW5kKGNvbmZpZykge1xuICAgICAgdmFyIGtleXMgPSBpc09iamVjdChjb25maWcpID8gb2JqZWN0S2V5cyhjb25maWcpIDogW107XG4gICAgICB2YXIgaXNTaG9ydGhhbmQgPSBpbmRleE9mKGtleXMsIFwidmFsdWVcIikgPT09IC0xICYmIGluZGV4T2Yoa2V5cywgXCJ0eXBlXCIpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhPZihrZXlzLCBcInNxdWFzaFwiKSA9PT0gLTEgJiYgaW5kZXhPZihrZXlzLCBcImFycmF5XCIpID09PSAtMTtcbiAgICAgIGlmIChpc1Nob3J0aGFuZCkgY29uZmlnID0geyB2YWx1ZTogY29uZmlnIH07XG4gICAgICBjb25maWcuJCRmbiA9IGlzSW5qZWN0YWJsZShjb25maWcudmFsdWUpID8gY29uZmlnLnZhbHVlIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnLnZhbHVlOyB9O1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUeXBlKGNvbmZpZywgdXJsVHlwZSwgbG9jYXRpb24pIHtcbiAgICAgIGlmIChjb25maWcudHlwZSAmJiB1cmxUeXBlKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbSAnXCIraWQrXCInIGhhcyB0d28gdHlwZSBjb25maWd1cmF0aW9ucy5cIik7XG4gICAgICBpZiAodXJsVHlwZSkgcmV0dXJuIHVybFR5cGU7XG4gICAgICBpZiAoIWNvbmZpZy50eXBlKSByZXR1cm4gKGxvY2F0aW9uID09PSBcImNvbmZpZ1wiID8gJHR5cGVzLmFueSA6ICR0eXBlcy5zdHJpbmcpO1xuXG4gICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhjb25maWcudHlwZSkpXG4gICAgICAgIHJldHVybiAkdHlwZXNbY29uZmlnLnR5cGVdO1xuICAgICAgaWYgKGNvbmZpZy50eXBlIGluc3RhbmNlb2YgVHlwZSlcbiAgICAgICAgcmV0dXJuIGNvbmZpZy50eXBlO1xuICAgICAgcmV0dXJuIG5ldyBUeXBlKGNvbmZpZy50eXBlKTtcbiAgICB9XG5cbiAgICAvLyBhcnJheSBjb25maWc6IHBhcmFtIG5hbWUgKHBhcmFtW10pIG92ZXJyaWRlcyBkZWZhdWx0IHNldHRpbmdzLiAgZXhwbGljaXQgY29uZmlnIG92ZXJyaWRlcyBwYXJhbSBuYW1lLlxuICAgIGZ1bmN0aW9uIGdldEFycmF5TW9kZSgpIHtcbiAgICAgIHZhciBhcnJheURlZmF1bHRzID0geyBhcnJheTogKGxvY2F0aW9uID09PSBcInNlYXJjaFwiID8gXCJhdXRvXCIgOiBmYWxzZSkgfTtcbiAgICAgIHZhciBhcnJheVBhcmFtTm9tZW5jbGF0dXJlID0gaWQubWF0Y2goL1xcW1xcXSQvKSA/IHsgYXJyYXk6IHRydWUgfSA6IHt9O1xuICAgICAgcmV0dXJuIGV4dGVuZChhcnJheURlZmF1bHRzLCBhcnJheVBhcmFtTm9tZW5jbGF0dXJlLCBjb25maWcpLmFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgZmFsc2UsIHRydWUsIG9yIHRoZSBzcXVhc2ggdmFsdWUgdG8gaW5kaWNhdGUgdGhlIFwiZGVmYXVsdCBwYXJhbWV0ZXIgdXJsIHNxdWFzaCBwb2xpY3lcIi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTcXVhc2hQb2xpY3koY29uZmlnLCBpc09wdGlvbmFsKSB7XG4gICAgICB2YXIgc3F1YXNoID0gY29uZmlnLnNxdWFzaDtcbiAgICAgIGlmICghaXNPcHRpb25hbCB8fCBzcXVhc2ggPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIWlzRGVmaW5lZChzcXVhc2gpIHx8IHNxdWFzaCA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFNxdWFzaFBvbGljeTtcbiAgICAgIGlmIChzcXVhc2ggPT09IHRydWUgfHwgaXNTdHJpbmcoc3F1YXNoKSkgcmV0dXJuIHNxdWFzaDtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3F1YXNoIHBvbGljeTogJ1wiICsgc3F1YXNoICsgXCInLiBWYWxpZCBwb2xpY2llczogZmFsc2UsIHRydWUsIG9yIGFyYml0cmFyeSBzdHJpbmdcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVwbGFjZShjb25maWcsIGFycmF5TW9kZSwgaXNPcHRpb25hbCwgc3F1YXNoKSB7XG4gICAgICB2YXIgcmVwbGFjZSwgY29uZmlndXJlZEtleXMsIGRlZmF1bHRQb2xpY3kgPSBbXG4gICAgICAgIHsgZnJvbTogXCJcIiwgICB0bzogKGlzT3B0aW9uYWwgfHwgYXJyYXlNb2RlID8gdW5kZWZpbmVkIDogXCJcIikgfSxcbiAgICAgICAgeyBmcm9tOiBudWxsLCB0bzogKGlzT3B0aW9uYWwgfHwgYXJyYXlNb2RlID8gdW5kZWZpbmVkIDogXCJcIikgfVxuICAgICAgXTtcbiAgICAgIHJlcGxhY2UgPSBpc0FycmF5KGNvbmZpZy5yZXBsYWNlKSA/IGNvbmZpZy5yZXBsYWNlIDogW107XG4gICAgICBpZiAoaXNTdHJpbmcoc3F1YXNoKSlcbiAgICAgICAgcmVwbGFjZS5wdXNoKHsgZnJvbTogc3F1YXNoLCB0bzogdW5kZWZpbmVkIH0pO1xuICAgICAgY29uZmlndXJlZEtleXMgPSBtYXAocmVwbGFjZSwgZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbS5mcm9tOyB9ICk7XG4gICAgICByZXR1cm4gZmlsdGVyKGRlZmF1bHRQb2xpY3ksIGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGluZGV4T2YoY29uZmlndXJlZEtleXMsIGl0ZW0uZnJvbSkgPT09IC0xOyB9KS5jb25jYXQocmVwbGFjZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogW0ludGVybmFsXSBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwYXJhbWV0ZXIsIHdoaWNoIG1heSBiZSBhbiBpbmplY3RhYmxlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uICQkZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgaWYgKCFpbmplY3RvcikgdGhyb3cgbmV3IEVycm9yKFwiSW5qZWN0YWJsZSBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhdCBjb25maWd1cmF0aW9uIHRpbWVcIik7XG4gICAgICB2YXIgZGVmYXVsdFZhbHVlID0gaW5qZWN0b3IuaW52b2tlKGNvbmZpZy4kJGZuKTtcbiAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwgJiYgZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIXNlbGYudHlwZS5pcyhkZWZhdWx0VmFsdWUpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZWZhdWx0IHZhbHVlIChcIiArIGRlZmF1bHRWYWx1ZSArIFwiKSBmb3IgcGFyYW1ldGVyICdcIiArIHNlbGYuaWQgKyBcIicgaXMgbm90IGFuIGluc3RhbmNlIG9mIFR5cGUgKFwiICsgc2VsZi50eXBlLm5hbWUgKyBcIilcIik7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFtJbnRlcm5hbF0gR2V0cyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiBhIHZhbHVlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkLCBvdGhlcndpc2UsIHJldHVybnMgdGhlXG4gICAgICogZGVmYXVsdCB2YWx1ZSwgd2hpY2ggbWF5IGJlIHRoZSByZXN1bHQgb2YgYW4gaW5qZWN0YWJsZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAkdmFsdWUodmFsdWUpIHtcbiAgICAgIGZ1bmN0aW9uIGhhc1JlcGxhY2VWYWwodmFsKSB7IHJldHVybiBmdW5jdGlvbihvYmopIHsgcmV0dXJuIG9iai5mcm9tID09PSB2YWw7IH07IH1cbiAgICAgIGZ1bmN0aW9uICRyZXBsYWNlKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXBsYWNlbWVudCA9IG1hcChmaWx0ZXIoc2VsZi5yZXBsYWNlLCBoYXNSZXBsYWNlVmFsKHZhbHVlKSksIGZ1bmN0aW9uKG9iaikgeyByZXR1cm4gb2JqLnRvOyB9KTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VtZW50Lmxlbmd0aCA/IHJlcGxhY2VtZW50WzBdIDogdmFsdWU7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9ICRyZXBsYWNlKHZhbHVlKTtcbiAgICAgIHJldHVybiAhaXNEZWZpbmVkKHZhbHVlKSA/ICQkZ2V0RGVmYXVsdFZhbHVlKCkgOiBzZWxmLnR5cGUuJG5vcm1hbGl6ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoKSB7IHJldHVybiBcIntQYXJhbTpcIiArIGlkICsgXCIgXCIgKyB0eXBlICsgXCIgc3F1YXNoOiAnXCIgKyBzcXVhc2ggKyBcIicgb3B0aW9uYWw6IFwiICsgaXNPcHRpb25hbCArIFwifVwiOyB9XG5cbiAgICBleHRlbmQodGhpcywge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgIGFycmF5OiBhcnJheU1vZGUsXG4gICAgICBzcXVhc2g6IHNxdWFzaCxcbiAgICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgICBpc09wdGlvbmFsOiBpc09wdGlvbmFsLFxuICAgICAgdmFsdWU6ICR2YWx1ZSxcbiAgICAgIGR5bmFtaWM6IHVuZGVmaW5lZCxcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgdG9TdHJpbmc6IHRvU3RyaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gUGFyYW1TZXQocGFyYW1zKSB7XG4gICAgZXh0ZW5kKHRoaXMsIHBhcmFtcyB8fCB7fSk7XG4gIH1cblxuICBQYXJhbVNldC5wcm90b3R5cGUgPSB7XG4gICAgJCRuZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGluaGVyaXQodGhpcywgZXh0ZW5kKG5ldyBQYXJhbVNldCgpLCB7ICQkcGFyZW50OiB0aGlzfSkpO1xuICAgIH0sXG4gICAgJCRrZXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIga2V5cyA9IFtdLCBjaGFpbiA9IFtdLCBwYXJlbnQgPSB0aGlzLFxuICAgICAgICBpZ25vcmUgPSBvYmplY3RLZXlzKFBhcmFtU2V0LnByb3RvdHlwZSk7XG4gICAgICB3aGlsZSAocGFyZW50KSB7IGNoYWluLnB1c2gocGFyZW50KTsgcGFyZW50ID0gcGFyZW50LiQkcGFyZW50OyB9XG4gICAgICBjaGFpbi5yZXZlcnNlKCk7XG4gICAgICBmb3JFYWNoKGNoYWluLCBmdW5jdGlvbihwYXJhbXNldCkge1xuICAgICAgICBmb3JFYWNoKG9iamVjdEtleXMocGFyYW1zZXQpLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGlmIChpbmRleE9mKGtleXMsIGtleSkgPT09IC0xICYmIGluZGV4T2YoaWdub3JlLCBrZXkpID09PSAtMSkga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ga2V5cztcbiAgICB9LFxuICAgICQkdmFsdWVzOiBmdW5jdGlvbihwYXJhbVZhbHVlcykge1xuICAgICAgdmFyIHZhbHVlcyA9IHt9LCBzZWxmID0gdGhpcztcbiAgICAgIGZvckVhY2goc2VsZi4kJGtleXMoKSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhbHVlc1trZXldID0gc2VsZltrZXldLnZhbHVlKHBhcmFtVmFsdWVzICYmIHBhcmFtVmFsdWVzW2tleV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH0sXG4gICAgJCRlcXVhbHM6IGZ1bmN0aW9uKHBhcmFtVmFsdWVzMSwgcGFyYW1WYWx1ZXMyKSB7XG4gICAgICB2YXIgZXF1YWwgPSB0cnVlLCBzZWxmID0gdGhpcztcbiAgICAgIGZvckVhY2goc2VsZi4kJGtleXMoKSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBsZWZ0ID0gcGFyYW1WYWx1ZXMxICYmIHBhcmFtVmFsdWVzMVtrZXldLCByaWdodCA9IHBhcmFtVmFsdWVzMiAmJiBwYXJhbVZhbHVlczJba2V5XTtcbiAgICAgICAgaWYgKCFzZWxmW2tleV0udHlwZS5lcXVhbHMobGVmdCwgcmlnaHQpKSBlcXVhbCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZXF1YWw7XG4gICAgfSxcbiAgICAkJHZhbGlkYXRlczogZnVuY3Rpb24gJCR2YWxpZGF0ZShwYXJhbVZhbHVlcykge1xuICAgICAgdmFyIGtleXMgPSB0aGlzLiQka2V5cygpLCBpLCBwYXJhbSwgcmF3VmFsLCBub3JtYWxpemVkLCBlbmNvZGVkO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyYW0gPSB0aGlzW2tleXNbaV1dO1xuICAgICAgICByYXdWYWwgPSBwYXJhbVZhbHVlc1trZXlzW2ldXTtcbiAgICAgICAgaWYgKChyYXdWYWwgPT09IHVuZGVmaW5lZCB8fCByYXdWYWwgPT09IG51bGwpICYmIHBhcmFtLmlzT3B0aW9uYWwpXG4gICAgICAgICAgYnJlYWs7IC8vIFRoZXJlIHdhcyBubyBwYXJhbWV0ZXIgdmFsdWUsIGJ1dCB0aGUgcGFyYW0gaXMgb3B0aW9uYWxcbiAgICAgICAgbm9ybWFsaXplZCA9IHBhcmFtLnR5cGUuJG5vcm1hbGl6ZShyYXdWYWwpO1xuICAgICAgICBpZiAoIXBhcmFtLnR5cGUuaXMobm9ybWFsaXplZCkpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBUaGUgdmFsdWUgd2FzIG5vdCBvZiB0aGUgY29ycmVjdCBUeXBlLCBhbmQgY291bGQgbm90IGJlIGRlY29kZWQgdG8gdGhlIGNvcnJlY3QgVHlwZVxuICAgICAgICBlbmNvZGVkID0gcGFyYW0udHlwZS5lbmNvZGUobm9ybWFsaXplZCk7XG4gICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKGVuY29kZWQpICYmICFwYXJhbS50eXBlLnBhdHRlcm4uZXhlYyhlbmNvZGVkKSlcbiAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFRoZSB2YWx1ZSB3YXMgb2YgdGhlIGNvcnJlY3QgdHlwZSwgYnV0IHdoZW4gZW5jb2RlZCwgZGlkIG5vdCBtYXRjaCB0aGUgVHlwZSdzIHJlZ2V4cFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICAkJHBhcmVudDogdW5kZWZpbmVkXG4gIH07XG5cbiAgdGhpcy5QYXJhbVNldCA9IFBhcmFtU2V0O1xufVxuXG4vLyBSZWdpc3RlciBhcyBhIHByb3ZpZGVyIHNvIGl0J3MgYXZhaWxhYmxlIHRvIG90aGVyIHByb3ZpZGVyc1xuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci51dGlsJykucHJvdmlkZXIoJyR1cmxNYXRjaGVyRmFjdG9yeScsICRVcmxNYXRjaGVyRmFjdG9yeSk7XG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnV0aWwnKS5ydW4oWyckdXJsTWF0Y2hlckZhY3RvcnknLCBmdW5jdGlvbigkdXJsTWF0Y2hlckZhY3RvcnkpIHsgfV0pO1xuXG4vKipcbiAqIEBuZ2RvYyBvYmplY3RcbiAqIEBuYW1lIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclByb3ZpZGVyXG4gKlxuICogQHJlcXVpcmVzIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyXG4gKiBAcmVxdWlyZXMgJGxvY2F0aW9uUHJvdmlkZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIGAkdXJsUm91dGVyUHJvdmlkZXJgIGhhcyB0aGUgcmVzcG9uc2liaWxpdHkgb2Ygd2F0Y2hpbmcgYCRsb2NhdGlvbmAuIFxuICogV2hlbiBgJGxvY2F0aW9uYCBjaGFuZ2VzIGl0IHJ1bnMgdGhyb3VnaCBhIGxpc3Qgb2YgcnVsZXMgb25lIGJ5IG9uZSB1bnRpbCBhIFxuICogbWF0Y2ggaXMgZm91bmQuIGAkdXJsUm91dGVyUHJvdmlkZXJgIGlzIHVzZWQgYmVoaW5kIHRoZSBzY2VuZXMgYW55dGltZSB5b3Ugc3BlY2lmeSBcbiAqIGEgdXJsIGluIGEgc3RhdGUgY29uZmlndXJhdGlvbi4gQWxsIHVybHMgYXJlIGNvbXBpbGVkIGludG8gYSBVcmxNYXRjaGVyIG9iamVjdC5cbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBtZXRob2RzIG9uIGAkdXJsUm91dGVyUHJvdmlkZXJgIHRoYXQgbWFrZSBpdCB1c2VmdWwgdG8gdXNlIGRpcmVjdGx5XG4gKiBpbiB5b3VyIG1vZHVsZSBjb25maWcuXG4gKi9cbiRVcmxSb3V0ZXJQcm92aWRlci4kaW5qZWN0ID0gWyckbG9jYXRpb25Qcm92aWRlcicsICckdXJsTWF0Y2hlckZhY3RvcnlQcm92aWRlciddO1xuZnVuY3Rpb24gJFVybFJvdXRlclByb3ZpZGVyKCAgICRsb2NhdGlvblByb3ZpZGVyLCAgICR1cmxNYXRjaGVyRmFjdG9yeSkge1xuICB2YXIgcnVsZXMgPSBbXSwgb3RoZXJ3aXNlID0gbnVsbCwgaW50ZXJjZXB0RGVmZXJyZWQgPSBmYWxzZSwgbGlzdGVuZXI7XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIGEgcHJlZml4IG9mIGFsbCBzdHJpbmdzIG1hdGNoaW5nIHRoZSBSZWdFeHBcbiAgZnVuY3Rpb24gcmVnRXhwUHJlZml4KHJlKSB7XG4gICAgdmFyIHByZWZpeCA9IC9eXFxeKCg/OlxcXFxbXmEtekEtWjAtOV18W15cXFxcXFxbXFxdXFxeJCorPy4oKXx7fV0rKSopLy5leGVjKHJlLnNvdXJjZSk7XG4gICAgcmV0dXJuIChwcmVmaXggIT0gbnVsbCkgPyBwcmVmaXhbMV0ucmVwbGFjZSgvXFxcXCguKS9nLCBcIiQxXCIpIDogJyc7XG4gIH1cblxuICAvLyBJbnRlcnBvbGF0ZXMgbWF0Y2hlZCB2YWx1ZXMgaW50byBhIFN0cmluZy5yZXBsYWNlKCktc3R5bGUgcGF0dGVyblxuICBmdW5jdGlvbiBpbnRlcnBvbGF0ZShwYXR0ZXJuLCBtYXRjaCkge1xuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UoL1xcJChcXCR8XFxkezEsMn0pLywgZnVuY3Rpb24gKG0sIHdoYXQpIHtcbiAgICAgIHJldHVybiBtYXRjaFt3aGF0ID09PSAnJCcgPyAwIDogTnVtYmVyKHdoYXQpXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyUHJvdmlkZXIjcnVsZVxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyUHJvdmlkZXJcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIERlZmluZXMgcnVsZXMgdGhhdCBhcmUgdXNlZCBieSBgJHVybFJvdXRlclByb3ZpZGVyYCB0byBmaW5kIG1hdGNoZXMgZm9yXG4gICAqIHNwZWNpZmljIFVSTHMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDxwcmU+XG4gICAqIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXIucm91dGVyJ10pO1xuICAgKlxuICAgKiBhcHAuY29uZmlnKGZ1bmN0aW9uICgkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICogICAvLyBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBob3cgeW91IG1pZ2h0IGFsbG93IGNhc2UgaW5zZW5zaXRpdmUgdXJsc1xuICAgKiAgICR1cmxSb3V0ZXJQcm92aWRlci5ydWxlKGZ1bmN0aW9uICgkaW5qZWN0b3IsICRsb2NhdGlvbikge1xuICAgKiAgICAgdmFyIHBhdGggPSAkbG9jYXRpb24ucGF0aCgpLFxuICAgKiAgICAgICAgIG5vcm1hbGl6ZWQgPSBwYXRoLnRvTG93ZXJDYXNlKCk7XG4gICAqXG4gICAqICAgICBpZiAocGF0aCAhPT0gbm9ybWFsaXplZCkge1xuICAgKiAgICAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgICogICAgIH1cbiAgICogICB9KTtcbiAgICogfSk7XG4gICAqIDwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBydWxlIEhhbmRsZXIgZnVuY3Rpb24gdGhhdCB0YWtlcyBgJGluamVjdG9yYCBhbmQgYCRsb2NhdGlvbmBcbiAgICogc2VydmljZXMgYXMgYXJndW1lbnRzLiBZb3UgY2FuIHVzZSB0aGVtIHRvIHJldHVybiBhIHZhbGlkIHBhdGggYXMgYSBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gYCR1cmxSb3V0ZXJQcm92aWRlcmAgLSBgJHVybFJvdXRlclByb3ZpZGVyYCBpbnN0YW5jZVxuICAgKi9cbiAgdGhpcy5ydWxlID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24ocnVsZSkpIHRocm93IG5ldyBFcnJvcihcIidydWxlJyBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgcnVsZXMucHVzaChydWxlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIG9iamVjdFxuICAgKiBAbmFtZSB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJQcm92aWRlciNvdGhlcndpc2VcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclByb3ZpZGVyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBEZWZpbmVzIGEgcGF0aCB0aGF0IGlzIHVzZWQgd2hlbiBhbiBpbnZhbGlkIHJvdXRlIGlzIHJlcXVlc3RlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPHByZT5cbiAgICogdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlci5yb3V0ZXInXSk7XG4gICAqXG4gICAqIGFwcC5jb25maWcoZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgKiAgIC8vIGlmIHRoZSBwYXRoIGRvZXNuJ3QgbWF0Y2ggYW55IG9mIHRoZSB1cmxzIHlvdSBjb25maWd1cmVkXG4gICAqICAgLy8gb3RoZXJ3aXNlIHdpbGwgdGFrZSBjYXJlIG9mIHJvdXRpbmcgdGhlIHVzZXIgdG8gdGhlXG4gICAqICAgLy8gc3BlY2lmaWVkIHVybFxuICAgKiAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9pbmRleCcpO1xuICAgKlxuICAgKiAgIC8vIEV4YW1wbGUgb2YgdXNpbmcgZnVuY3Rpb24gcnVsZSBhcyBwYXJhbVxuICAgKiAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoZnVuY3Rpb24gKCRpbmplY3RvciwgJGxvY2F0aW9uKSB7XG4gICAqICAgICByZXR1cm4gJy9hL3ZhbGlkL3VybCc7XG4gICAqICAgfSk7XG4gICAqIH0pO1xuICAgKiA8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHJ1bGUgVGhlIHVybCBwYXRoIHlvdSB3YW50IHRvIHJlZGlyZWN0IHRvIG9yIGEgZnVuY3Rpb24gXG4gICAqIHJ1bGUgdGhhdCByZXR1cm5zIHRoZSB1cmwgcGF0aC4gVGhlIGZ1bmN0aW9uIHZlcnNpb24gaXMgcGFzc2VkIHR3byBwYXJhbXM6IFxuICAgKiBgJGluamVjdG9yYCBhbmQgYCRsb2NhdGlvbmAgc2VydmljZXMsIGFuZCBtdXN0IHJldHVybiBhIHVybCBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gYCR1cmxSb3V0ZXJQcm92aWRlcmAgLSBgJHVybFJvdXRlclByb3ZpZGVyYCBpbnN0YW5jZVxuICAgKi9cbiAgdGhpcy5vdGhlcndpc2UgPSBmdW5jdGlvbiAocnVsZSkge1xuICAgIGlmIChpc1N0cmluZyhydWxlKSkge1xuICAgICAgdmFyIHJlZGlyZWN0ID0gcnVsZTtcbiAgICAgIHJ1bGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWRpcmVjdDsgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzRnVuY3Rpb24ocnVsZSkpIHRocm93IG5ldyBFcnJvcihcIidydWxlJyBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgb3RoZXJ3aXNlID0gcnVsZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIGZ1bmN0aW9uIGhhbmRsZUlmTWF0Y2goJGluamVjdG9yLCBoYW5kbGVyLCBtYXRjaCkge1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcmVzdWx0ID0gJGluamVjdG9yLmludm9rZShoYW5kbGVyLCBoYW5kbGVyLCB7ICRtYXRjaDogbWF0Y2ggfSk7XG4gICAgcmV0dXJuIGlzRGVmaW5lZChyZXN1bHQpID8gcmVzdWx0IDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyUHJvdmlkZXIjd2hlblxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyUHJvdmlkZXJcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgZm9yIGEgZ2l2ZW4gdXJsIG1hdGNoaW5nLiBcbiAgICogXG4gICAqIElmIHRoZSBoYW5kbGVyIGlzIGEgc3RyaW5nLCBpdCBpc1xuICAgKiB0cmVhdGVkIGFzIGEgcmVkaXJlY3QsIGFuZCBpcyBpbnRlcnBvbGF0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzeW50YXggb2YgbWF0Y2hcbiAgICogKGkuZS4gbGlrZSBgU3RyaW5nLnJlcGxhY2UoKWAgZm9yIGBSZWdFeHBgLCBvciBsaWtlIGEgYFVybE1hdGNoZXJgIHBhdHRlcm4gb3RoZXJ3aXNlKS5cbiAgICpcbiAgICogSWYgdGhlIGhhbmRsZXIgaXMgYSBmdW5jdGlvbiwgaXQgaXMgaW5qZWN0YWJsZS4gSXQgZ2V0cyBpbnZva2VkIGlmIGAkbG9jYXRpb25gXG4gICAqIG1hdGNoZXMuIFlvdSBoYXZlIHRoZSBvcHRpb24gb2YgaW5qZWN0IHRoZSBtYXRjaCBvYmplY3QgYXMgYCRtYXRjaGAuXG4gICAqXG4gICAqIFRoZSBoYW5kbGVyIGNhbiByZXR1cm5cbiAgICpcbiAgICogLSAqKmZhbHN5KiogdG8gaW5kaWNhdGUgdGhhdCB0aGUgcnVsZSBkaWRuJ3QgbWF0Y2ggYWZ0ZXIgYWxsLCB0aGVuIGAkdXJsUm91dGVyYFxuICAgKiAgIHdpbGwgY29udGludWUgdHJ5aW5nIHRvIGZpbmQgYW5vdGhlciBvbmUgdGhhdCBtYXRjaGVzLlxuICAgKiAtICoqc3RyaW5nKiogd2hpY2ggaXMgdHJlYXRlZCBhcyBhIHJlZGlyZWN0IGFuZCBwYXNzZWQgdG8gYCRsb2NhdGlvbi51cmwoKWBcbiAgICogLSAqKnZvaWQqKiBvciBhbnkgKip0cnV0aHkqKiB2YWx1ZSB0ZWxscyBgJHVybFJvdXRlcmAgdGhhdCB0aGUgdXJsIHdhcyBoYW5kbGVkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8cHJlPlxuICAgKiB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyLnJvdXRlciddKTtcbiAgICpcbiAgICogYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAqICAgJHVybFJvdXRlclByb3ZpZGVyLndoZW4oJHN0YXRlLnVybCwgZnVuY3Rpb24gKCRtYXRjaCwgJHN0YXRlUGFyYW1zKSB7XG4gICAqICAgICBpZiAoJHN0YXRlLiRjdXJyZW50Lm5hdmlnYWJsZSAhPT0gc3RhdGUgfHxcbiAgICogICAgICAgICAhZXF1YWxGb3JLZXlzKCRtYXRjaCwgJHN0YXRlUGFyYW1zKSB7XG4gICAqICAgICAgJHN0YXRlLnRyYW5zaXRpb25UbyhzdGF0ZSwgJG1hdGNoLCBmYWxzZSk7XG4gICAqICAgICB9XG4gICAqICAgfSk7XG4gICAqIH0pO1xuICAgKiA8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSB3aGF0IFRoZSBpbmNvbWluZyBwYXRoIHRoYXQgeW91IHdhbnQgdG8gcmVkaXJlY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBoYW5kbGVyIFRoZSBwYXRoIHlvdSB3YW50IHRvIHJlZGlyZWN0IHlvdXIgdXNlciB0by5cbiAgICovXG4gIHRoaXMud2hlbiA9IGZ1bmN0aW9uICh3aGF0LCBoYW5kbGVyKSB7XG4gICAgdmFyIHJlZGlyZWN0LCBoYW5kbGVySXNTdHJpbmcgPSBpc1N0cmluZyhoYW5kbGVyKTtcbiAgICBpZiAoaXNTdHJpbmcod2hhdCkpIHdoYXQgPSAkdXJsTWF0Y2hlckZhY3RvcnkuY29tcGlsZSh3aGF0KTtcblxuICAgIGlmICghaGFuZGxlcklzU3RyaW5nICYmICFpc0Z1bmN0aW9uKGhhbmRsZXIpICYmICFpc0FycmF5KGhhbmRsZXIpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCAnaGFuZGxlcicgaW4gd2hlbigpXCIpO1xuXG4gICAgdmFyIHN0cmF0ZWdpZXMgPSB7XG4gICAgICBtYXRjaGVyOiBmdW5jdGlvbiAod2hhdCwgaGFuZGxlcikge1xuICAgICAgICBpZiAoaGFuZGxlcklzU3RyaW5nKSB7XG4gICAgICAgICAgcmVkaXJlY3QgPSAkdXJsTWF0Y2hlckZhY3RvcnkuY29tcGlsZShoYW5kbGVyKTtcbiAgICAgICAgICBoYW5kbGVyID0gWyckbWF0Y2gnLCBmdW5jdGlvbiAoJG1hdGNoKSB7IHJldHVybiByZWRpcmVjdC5mb3JtYXQoJG1hdGNoKTsgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dGVuZChmdW5jdGlvbiAoJGluamVjdG9yLCAkbG9jYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSWZNYXRjaCgkaW5qZWN0b3IsIGhhbmRsZXIsIHdoYXQuZXhlYygkbG9jYXRpb24ucGF0aCgpLCAkbG9jYXRpb24uc2VhcmNoKCkpKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgIHByZWZpeDogaXNTdHJpbmcod2hhdC5wcmVmaXgpID8gd2hhdC5wcmVmaXggOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZWdleDogZnVuY3Rpb24gKHdoYXQsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHdoYXQuZ2xvYmFsIHx8IHdoYXQuc3RpY2t5KSB0aHJvdyBuZXcgRXJyb3IoXCJ3aGVuKCkgUmVnRXhwIG11c3Qgbm90IGJlIGdsb2JhbCBvciBzdGlja3lcIik7XG5cbiAgICAgICAgaWYgKGhhbmRsZXJJc1N0cmluZykge1xuICAgICAgICAgIHJlZGlyZWN0ID0gaGFuZGxlcjtcbiAgICAgICAgICBoYW5kbGVyID0gWyckbWF0Y2gnLCBmdW5jdGlvbiAoJG1hdGNoKSB7IHJldHVybiBpbnRlcnBvbGF0ZShyZWRpcmVjdCwgJG1hdGNoKTsgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dGVuZChmdW5jdGlvbiAoJGluamVjdG9yLCAkbG9jYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSWZNYXRjaCgkaW5qZWN0b3IsIGhhbmRsZXIsIHdoYXQuZXhlYygkbG9jYXRpb24ucGF0aCgpKSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwcmVmaXg6IHJlZ0V4cFByZWZpeCh3aGF0KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrID0geyBtYXRjaGVyOiAkdXJsTWF0Y2hlckZhY3RvcnkuaXNNYXRjaGVyKHdoYXQpLCByZWdleDogd2hhdCBpbnN0YW5jZW9mIFJlZ0V4cCB9O1xuXG4gICAgZm9yICh2YXIgbiBpbiBjaGVjaykge1xuICAgICAgaWYgKGNoZWNrW25dKSByZXR1cm4gdGhpcy5ydWxlKHN0cmF0ZWdpZXNbbl0od2hhdCwgaGFuZGxlcikpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgJ3doYXQnIGluIHdoZW4oKVwiKTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclByb3ZpZGVyI2RlZmVySW50ZXJjZXB0XG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJQcm92aWRlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRGlzYWJsZXMgKG9yIGVuYWJsZXMpIGRlZmVycmluZyBsb2NhdGlvbiBjaGFuZ2UgaW50ZXJjZXB0aW9uLlxuICAgKlxuICAgKiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgdGhlIGJlaGF2aW9yIG9mIHN5bmNpbmcgdGhlIFVSTCAoZm9yIGV4YW1wbGUsIGlmIHlvdSB3aXNoIHRvXG4gICAqIGRlZmVyIGEgdHJhbnNpdGlvbiBidXQgbWFpbnRhaW4gdGhlIGN1cnJlbnQgVVJMKSwgY2FsbCB0aGlzIG1ldGhvZCBhdCBjb25maWd1cmF0aW9uIHRpbWUuXG4gICAqIFRoZW4sIGF0IHJ1biB0aW1lLCBjYWxsIGAkdXJsUm91dGVyLmxpc3RlbigpYCBhZnRlciB5b3UgaGF2ZSBjb25maWd1cmVkIHlvdXIgb3duXG4gICAqIGAkbG9jYXRpb25DaGFuZ2VTdWNjZXNzYCBldmVudCBoYW5kbGVyLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8cHJlPlxuICAgKiB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyLnJvdXRlciddKTtcbiAgICpcbiAgICogYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAqXG4gICAqICAgLy8gUHJldmVudCAkdXJsUm91dGVyIGZyb20gYXV0b21hdGljYWxseSBpbnRlcmNlcHRpbmcgVVJMIGNoYW5nZXM7XG4gICAqICAgLy8gdGhpcyBhbGxvd3MgeW91IHRvIGNvbmZpZ3VyZSBjdXN0b20gYmVoYXZpb3IgaW4gYmV0d2VlblxuICAgKiAgIC8vIGxvY2F0aW9uIGNoYW5nZXMgYW5kIHJvdXRlIHN5bmNocm9uaXphdGlvbjpcbiAgICogICAkdXJsUm91dGVyUHJvdmlkZXIuZGVmZXJJbnRlcmNlcHQoKTtcbiAgICpcbiAgICogfSkucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdXJsUm91dGVyLCBVc2VyU2VydmljZSkge1xuICAgKlxuICAgKiAgICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24oZSkge1xuICAgKiAgICAgLy8gVXNlclNlcnZpY2UgaXMgYW4gZXhhbXBsZSBzZXJ2aWNlIGZvciBtYW5hZ2luZyB1c2VyIHN0YXRlXG4gICAqICAgICBpZiAoVXNlclNlcnZpY2UuaXNMb2dnZWRJbigpKSByZXR1cm47XG4gICAqXG4gICAqICAgICAvLyBQcmV2ZW50ICR1cmxSb3V0ZXIncyBkZWZhdWx0IGhhbmRsZXIgZnJvbSBmaXJpbmdcbiAgICogICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICpcbiAgICogICAgIFVzZXJTZXJ2aWNlLmhhbmRsZUxvZ2luKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICogICAgICAgLy8gT25jZSB0aGUgdXNlciBoYXMgbG9nZ2VkIGluLCBzeW5jIHRoZSBjdXJyZW50IFVSTFxuICAgKiAgICAgICAvLyB0byB0aGUgcm91dGVyOlxuICAgKiAgICAgICAkdXJsUm91dGVyLnN5bmMoKTtcbiAgICogICAgIH0pO1xuICAgKiAgIH0pO1xuICAgKlxuICAgKiAgIC8vIENvbmZpZ3VyZXMgJHVybFJvdXRlcidzIGxpc3RlbmVyICphZnRlciogeW91ciBjdXN0b20gbGlzdGVuZXJcbiAgICogICAkdXJsUm91dGVyLmxpc3RlbigpO1xuICAgKiB9KTtcbiAgICogPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVmZXIgSW5kaWNhdGVzIHdoZXRoZXIgdG8gZGVmZXIgbG9jYXRpb24gY2hhbmdlIGludGVyY2VwdGlvbi4gUGFzc2luZ1xuICAgICAgICAgICAgbm8gcGFyYW1ldGVyIGlzIGVxdWl2YWxlbnQgdG8gYHRydWVgLlxuICAgKi9cbiAgdGhpcy5kZWZlckludGVyY2VwdCA9IGZ1bmN0aW9uIChkZWZlcikge1xuICAgIGlmIChkZWZlciA9PT0gdW5kZWZpbmVkKSBkZWZlciA9IHRydWU7XG4gICAgaW50ZXJjZXB0RGVmZXJyZWQgPSBkZWZlcjtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIG9iamVjdFxuICAgKiBAbmFtZSB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJcbiAgICpcbiAgICogQHJlcXVpcmVzICRsb2NhdGlvblxuICAgKiBAcmVxdWlyZXMgJHJvb3RTY29wZVxuICAgKiBAcmVxdWlyZXMgJGluamVjdG9yXG4gICAqIEByZXF1aXJlcyAkYnJvd3NlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICpcbiAgICovXG4gIHRoaXMuJGdldCA9ICRnZXQ7XG4gICRnZXQuJGluamVjdCA9IFsnJGxvY2F0aW9uJywgJyRyb290U2NvcGUnLCAnJGluamVjdG9yJywgJyRicm93c2VyJywgJyRzbmlmZmVyJ107XG4gIGZ1bmN0aW9uICRnZXQoICAgJGxvY2F0aW9uLCAgICRyb290U2NvcGUsICAgJGluamVjdG9yLCAgICRicm93c2VyLCAgICRzbmlmZmVyKSB7XG5cbiAgICB2YXIgYmFzZUhyZWYgPSAkYnJvd3Nlci5iYXNlSHJlZigpLCBsb2NhdGlvbiA9ICRsb2NhdGlvbi51cmwoKSwgbGFzdFB1c2hlZFVybDtcblxuICAgIGZ1bmN0aW9uIGFwcGVuZEJhc2VQYXRoKHVybCwgaXNIdG1sNSwgYWJzb2x1dGUpIHtcbiAgICAgIGlmIChiYXNlSHJlZiA9PT0gJy8nKSByZXR1cm4gdXJsO1xuICAgICAgaWYgKGlzSHRtbDUpIHJldHVybiBiYXNlSHJlZi5zbGljZSgwLCAtMSkgKyB1cmw7XG4gICAgICBpZiAoYWJzb2x1dGUpIHJldHVybiBiYXNlSHJlZi5zbGljZSgxKSArIHVybDtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogT3B0aW1pemUgZ3JvdXBzIG9mIHJ1bGVzIHdpdGggbm9uLWVtcHR5IHByZWZpeCBpbnRvIHNvbWUgc29ydCBvZiBkZWNpc2lvbiB0cmVlXG4gICAgZnVuY3Rpb24gdXBkYXRlKGV2dCkge1xuICAgICAgaWYgKGV2dCAmJiBldnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgICAgdmFyIGlnbm9yZVVwZGF0ZSA9IGxhc3RQdXNoZWRVcmwgJiYgJGxvY2F0aW9uLnVybCgpID09PSBsYXN0UHVzaGVkVXJsO1xuICAgICAgbGFzdFB1c2hlZFVybCA9IHVuZGVmaW5lZDtcbiAgICAgIC8vIFRPRE86IFJlLWltcGxlbWVudCB0aGlzIGluIDEuMCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy8xNTczXG4gICAgICAvL2lmIChpZ25vcmVVcGRhdGUpIHJldHVybiB0cnVlO1xuXG4gICAgICBmdW5jdGlvbiBjaGVjayhydWxlKSB7XG4gICAgICAgIHZhciBoYW5kbGVkID0gcnVsZSgkaW5qZWN0b3IsICRsb2NhdGlvbik7XG5cbiAgICAgICAgaWYgKCFoYW5kbGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChpc1N0cmluZyhoYW5kbGVkKSkgJGxvY2F0aW9uLnJlcGxhY2UoKS51cmwoaGFuZGxlZCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIG4gPSBydWxlcy5sZW5ndGgsIGk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaWYgKGNoZWNrKHJ1bGVzW2ldKSkgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gYWx3YXlzIGNoZWNrIG90aGVyd2lzZSBsYXN0IHRvIGFsbG93IGR5bmFtaWMgdXBkYXRlcyB0byB0aGUgc2V0IG9mIHJ1bGVzXG4gICAgICBpZiAob3RoZXJ3aXNlKSBjaGVjayhvdGhlcndpc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIgfHwgJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCB1cGRhdGUpO1xuICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGlmICghaW50ZXJjZXB0RGVmZXJyZWQpIGxpc3RlbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAgICAgKiBAbmFtZSB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXIjc3luY1xuICAgICAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclxuICAgICAgICpcbiAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICogVHJpZ2dlcnMgYW4gdXBkYXRlOyB0aGUgc2FtZSB1cGRhdGUgdGhhdCBoYXBwZW5zIHdoZW4gdGhlIGFkZHJlc3MgYmFyIHVybCBjaGFuZ2VzLCBha2EgYCRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NgLlxuICAgICAgICogVGhpcyBtZXRob2QgaXMgdXNlZnVsIHdoZW4geW91IG5lZWQgdG8gdXNlIGBwcmV2ZW50RGVmYXVsdCgpYCBvbiB0aGUgYCRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NgIGV2ZW50LFxuICAgICAgICogcGVyZm9ybSBzb21lIGN1c3RvbSBsb2dpYyAocm91dGUgcHJvdGVjdGlvbiwgYXV0aCwgY29uZmlnLCByZWRpcmVjdGlvbiwgZXRjKSBhbmQgdGhlbiBmaW5hbGx5IHByb2NlZWRcbiAgICAgICAqIHdpdGggdGhlIHRyYW5zaXRpb24gYnkgY2FsbGluZyBgJHVybFJvdXRlci5zeW5jKClgLlxuICAgICAgICpcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKiA8cHJlPlxuICAgICAgICogYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJ10pXG4gICAgICAgKiAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHVybFJvdXRlcikge1xuICAgICAgICogICAgICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgKiAgICAgICAvLyBIYWx0IHN0YXRlIGNoYW5nZSBmcm9tIGV2ZW4gc3RhcnRpbmdcbiAgICAgICAqICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICogICAgICAgLy8gUGVyZm9ybSBjdXN0b20gbG9naWNcbiAgICAgICAqICAgICAgIHZhciBtZWV0c1JlcXVpcmVtZW50ID0gLi4uXG4gICAgICAgKiAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSB1cGRhdGUgYW5kIHN0YXRlIHRyYW5zaXRpb24gaWYgbG9naWMgYWxsb3dzXG4gICAgICAgKiAgICAgICBpZiAobWVldHNSZXF1aXJlbWVudCkgJHVybFJvdXRlci5zeW5jKCk7XG4gICAgICAgKiAgICAgfSk7XG4gICAgICAgKiB9KTtcbiAgICAgICAqIDwvcHJlPlxuICAgICAgICovXG4gICAgICBzeW5jOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICB9LFxuXG4gICAgICBsaXN0ZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuKCk7XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKHJlYWQpIHtcbiAgICAgICAgaWYgKHJlYWQpIHtcbiAgICAgICAgICBsb2NhdGlvbiA9ICRsb2NhdGlvbi51cmwoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRsb2NhdGlvbi51cmwoKSA9PT0gbG9jYXRpb24pIHJldHVybjtcblxuICAgICAgICAkbG9jYXRpb24udXJsKGxvY2F0aW9uKTtcbiAgICAgICAgJGxvY2F0aW9uLnJlcGxhY2UoKTtcbiAgICAgIH0sXG5cbiAgICAgIHB1c2g6IGZ1bmN0aW9uKHVybE1hdGNoZXIsIHBhcmFtcywgb3B0aW9ucykge1xuICAgICAgICAgdmFyIHVybCA9IHVybE1hdGNoZXIuZm9ybWF0KHBhcmFtcyB8fCB7fSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIHRoZSBzcGVjaWFsIGhhc2ggcGFyYW0sIGlmIG5lZWRlZFxuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHBhcmFtcyAmJiBwYXJhbXNbJyMnXSkge1xuICAgICAgICAgICAgdXJsICs9ICcjJyArIHBhcmFtc1snIyddO1xuICAgICAgICB9XG5cbiAgICAgICAgJGxvY2F0aW9uLnVybCh1cmwpO1xuICAgICAgICBsYXN0UHVzaGVkVXJsID0gb3B0aW9ucyAmJiBvcHRpb25zLiQkYXZvaWRSZXN5bmMgPyAkbG9jYXRpb24udXJsKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVwbGFjZSkgJGxvY2F0aW9uLnJlcGxhY2UoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAgICAgKiBAbmFtZSB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXIjaHJlZlxuICAgICAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclxuICAgICAgICpcbiAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICogQSBVUkwgZ2VuZXJhdGlvbiBtZXRob2QgdGhhdCByZXR1cm5zIHRoZSBjb21waWxlZCBVUkwgZm9yIGEgZ2l2ZW5cbiAgICAgICAqIHtAbGluayB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIgYFVybE1hdGNoZXJgfSwgcG9wdWxhdGVkIHdpdGggdGhlIHByb3ZpZGVkIHBhcmFtZXRlcnMuXG4gICAgICAgKlxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqIDxwcmU+XG4gICAgICAgKiAkYm9iID0gJHVybFJvdXRlci5ocmVmKG5ldyBVcmxNYXRjaGVyKFwiL2Fib3V0LzpwZXJzb25cIiksIHtcbiAgICAgICAqICAgcGVyc29uOiBcImJvYlwiXG4gICAgICAgKiB9KTtcbiAgICAgICAqIC8vICRib2IgPT0gXCIvYWJvdXQvYm9iXCI7XG4gICAgICAgKiA8L3ByZT5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge1VybE1hdGNoZXJ9IHVybE1hdGNoZXIgVGhlIGBVcmxNYXRjaGVyYCBvYmplY3Qgd2hpY2ggaXMgdXNlZCBhcyB0aGUgdGVtcGxhdGUgb2YgdGhlIFVSTCB0byBnZW5lcmF0ZS5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0PX0gcGFyYW1zIEFuIG9iamVjdCBvZiBwYXJhbWV0ZXIgdmFsdWVzIHRvIGZpbGwgdGhlIG1hdGNoZXIncyByZXF1aXJlZCBwYXJhbWV0ZXJzLlxuICAgICAgICogQHBhcmFtIHtvYmplY3Q9fSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0LiBUaGUgb3B0aW9ucyBhcmU6XG4gICAgICAgKlxuICAgICAgICogLSAqKmBhYnNvbHV0ZWAqKiAtIHtib29sZWFuPWZhbHNlfSwgIElmIHRydWUgd2lsbCBnZW5lcmF0ZSBhbiBhYnNvbHV0ZSB1cmwsIGUuZy4gXCJodHRwOi8vd3d3LmV4YW1wbGUuY29tL2Z1bGx1cmxcIi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBmdWxseSBjb21waWxlZCBVUkwsIG9yIGBudWxsYCBpZiBgcGFyYW1zYCBmYWlsIHZhbGlkYXRpb24gYWdhaW5zdCBgdXJsTWF0Y2hlcmBcbiAgICAgICAqL1xuICAgICAgaHJlZjogZnVuY3Rpb24odXJsTWF0Y2hlciwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghdXJsTWF0Y2hlci52YWxpZGF0ZXMocGFyYW1zKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgdmFyIGlzSHRtbDUgPSAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoKTtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QoaXNIdG1sNSkpIHtcbiAgICAgICAgICBpc0h0bWw1ID0gaXNIdG1sNS5lbmFibGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNIdG1sNSA9IGlzSHRtbDUgJiYgJHNuaWZmZXIuaGlzdG9yeTtcbiAgICAgICAgXG4gICAgICAgIHZhciB1cmwgPSB1cmxNYXRjaGVyLmZvcm1hdChwYXJhbXMpO1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoIWlzSHRtbDUgJiYgdXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgdXJsID0gXCIjXCIgKyAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCkgKyB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgc3BlY2lhbCBoYXNoIHBhcmFtLCBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiBwYXJhbXMgJiYgcGFyYW1zWycjJ10pIHtcbiAgICAgICAgICB1cmwgKz0gJyMnICsgcGFyYW1zWycjJ107XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgPSBhcHBlbmRCYXNlUGF0aCh1cmwsIGlzSHRtbDUsIG9wdGlvbnMuYWJzb2x1dGUpO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5hYnNvbHV0ZSB8fCAhdXJsKSB7XG4gICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzbGFzaCA9ICghaXNIdG1sNSAmJiB1cmwgPyAnLycgOiAnJyksIHBvcnQgPSAkbG9jYXRpb24ucG9ydCgpO1xuICAgICAgICBwb3J0ID0gKHBvcnQgPT09IDgwIHx8IHBvcnQgPT09IDQ0MyA/ICcnIDogJzonICsgcG9ydCk7XG5cbiAgICAgICAgcmV0dXJuIFskbG9jYXRpb24ucHJvdG9jb2woKSwgJzovLycsICRsb2NhdGlvbi5ob3N0KCksIHBvcnQsIHNsYXNoLCB1cmxdLmpvaW4oJycpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci5yb3V0ZXInKS5wcm92aWRlcignJHVybFJvdXRlcicsICRVcmxSb3V0ZXJQcm92aWRlcik7XG5cbi8qKlxuICogQG5nZG9jIG9iamVjdFxuICogQG5hbWUgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVByb3ZpZGVyXG4gKlxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclByb3ZpZGVyXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5UHJvdmlkZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBuZXcgYCRzdGF0ZVByb3ZpZGVyYCB3b3JrcyBzaW1pbGFyIHRvIEFuZ3VsYXIncyB2MSByb3V0ZXIsIGJ1dCBpdCBmb2N1c2VzIHB1cmVseVxuICogb24gc3RhdGUuXG4gKlxuICogQSBzdGF0ZSBjb3JyZXNwb25kcyB0byBhIFwicGxhY2VcIiBpbiB0aGUgYXBwbGljYXRpb24gaW4gdGVybXMgb2YgdGhlIG92ZXJhbGwgVUkgYW5kXG4gKiBuYXZpZ2F0aW9uLiBBIHN0YXRlIGRlc2NyaWJlcyAodmlhIHRoZSBjb250cm9sbGVyIC8gdGVtcGxhdGUgLyB2aWV3IHByb3BlcnRpZXMpIHdoYXRcbiAqIHRoZSBVSSBsb29rcyBsaWtlIGFuZCBkb2VzIGF0IHRoYXQgcGxhY2UuXG4gKlxuICogU3RhdGVzIG9mdGVuIGhhdmUgdGhpbmdzIGluIGNvbW1vbiwgYW5kIHRoZSBwcmltYXJ5IHdheSBvZiBmYWN0b3Jpbmcgb3V0IHRoZXNlXG4gKiBjb21tb25hbGl0aWVzIGluIHRoaXMgbW9kZWwgaXMgdmlhIHRoZSBzdGF0ZSBoaWVyYXJjaHksIGkuZS4gcGFyZW50L2NoaWxkIHN0YXRlcyBha2FcbiAqIG5lc3RlZCBzdGF0ZXMuXG4gKlxuICogVGhlIGAkc3RhdGVQcm92aWRlcmAgcHJvdmlkZXMgaW50ZXJmYWNlcyB0byBkZWNsYXJlIHRoZXNlIHN0YXRlcyBmb3IgeW91ciBhcHAuXG4gKi9cbiRTdGF0ZVByb3ZpZGVyLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlcicsICckdXJsTWF0Y2hlckZhY3RvcnlQcm92aWRlciddO1xuZnVuY3Rpb24gJFN0YXRlUHJvdmlkZXIoICAgJHVybFJvdXRlclByb3ZpZGVyLCAgICR1cmxNYXRjaGVyRmFjdG9yeSkge1xuXG4gIHZhciByb290LCBzdGF0ZXMgPSB7fSwgJHN0YXRlLCBxdWV1ZSA9IHt9LCBhYnN0cmFjdEtleSA9ICdhYnN0cmFjdCc7XG5cbiAgLy8gQnVpbGRzIHN0YXRlIHByb3BlcnRpZXMgZnJvbSBkZWZpbml0aW9uIHBhc3NlZCB0byByZWdpc3RlclN0YXRlKClcbiAgdmFyIHN0YXRlQnVpbGRlciA9IHtcblxuICAgIC8vIERlcml2ZSBwYXJlbnQgc3RhdGUgZnJvbSBhIGhpZXJhcmNoaWNhbCBuYW1lIG9ubHkgaWYgJ3BhcmVudCcgaXMgbm90IGV4cGxpY2l0bHkgZGVmaW5lZC5cbiAgICAvLyBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICAgIC8vIGlmIChwYXJlbnQpIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgICBwYXJlbnQ6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICBpZiAoaXNEZWZpbmVkKHN0YXRlLnBhcmVudCkgJiYgc3RhdGUucGFyZW50KSByZXR1cm4gZmluZFN0YXRlKHN0YXRlLnBhcmVudCk7XG4gICAgICAvLyByZWdleCBtYXRjaGVzIGFueSB2YWxpZCBjb21wb3NpdGUgc3RhdGUgbmFtZVxuICAgICAgLy8gd291bGQgbWF0Y2ggXCJjb250YWN0Lmxpc3RcIiBidXQgbm90IFwiY29udGFjdHNcIlxuICAgICAgdmFyIGNvbXBvc2l0ZU5hbWUgPSAvXiguKylcXC5bXi5dKyQvLmV4ZWMoc3RhdGUubmFtZSk7XG4gICAgICByZXR1cm4gY29tcG9zaXRlTmFtZSA/IGZpbmRTdGF0ZShjb21wb3NpdGVOYW1lWzFdKSA6IHJvb3Q7XG4gICAgfSxcblxuICAgIC8vIGluaGVyaXQgJ2RhdGEnIGZyb20gcGFyZW50IGFuZCBvdmVycmlkZSBieSBvd24gdmFsdWVzIChpZiBhbnkpXG4gICAgZGF0YTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5wYXJlbnQgJiYgc3RhdGUucGFyZW50LmRhdGEpIHtcbiAgICAgICAgc3RhdGUuZGF0YSA9IHN0YXRlLnNlbGYuZGF0YSA9IGluaGVyaXQoc3RhdGUucGFyZW50LmRhdGEsIHN0YXRlLmRhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlLmRhdGE7XG4gICAgfSxcblxuICAgIC8vIEJ1aWxkIGEgVVJMTWF0Y2hlciBpZiBuZWNlc3NhcnksIGVpdGhlciB2aWEgYSByZWxhdGl2ZSBvciBhYnNvbHV0ZSBVUkxcbiAgICB1cmw6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICB2YXIgdXJsID0gc3RhdGUudXJsLCBjb25maWcgPSB7IHBhcmFtczogc3RhdGUucGFyYW1zIHx8IHt9IH07XG5cbiAgICAgIGlmIChpc1N0cmluZyh1cmwpKSB7XG4gICAgICAgIGlmICh1cmwuY2hhckF0KDApID09ICdeJykgcmV0dXJuICR1cmxNYXRjaGVyRmFjdG9yeS5jb21waWxlKHVybC5zdWJzdHJpbmcoMSksIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiAoc3RhdGUucGFyZW50Lm5hdmlnYWJsZSB8fCByb290KS51cmwuY29uY2F0KHVybCwgY29uZmlnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1cmwgfHwgJHVybE1hdGNoZXJGYWN0b3J5LmlzTWF0Y2hlcih1cmwpKSByZXR1cm4gdXJsO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB1cmwgJ1wiICsgdXJsICsgXCInIGluIHN0YXRlICdcIiArIHN0YXRlICsgXCInXCIpO1xuICAgIH0sXG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHN0YXRlIHRoYXQgaGFzIGEgVVJMIChpLmUuIGlzIG5hdmlnYWJsZSlcbiAgICBuYXZpZ2FibGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUudXJsID8gc3RhdGUgOiAoc3RhdGUucGFyZW50ID8gc3RhdGUucGFyZW50Lm5hdmlnYWJsZSA6IG51bGwpO1xuICAgIH0sXG5cbiAgICAvLyBPd24gcGFyYW1ldGVycyBmb3IgdGhpcyBzdGF0ZS4gc3RhdGUudXJsLnBhcmFtcyBpcyBhbHJlYWR5IGJ1aWx0IGF0IHRoaXMgcG9pbnQuIENyZWF0ZSBhbmQgYWRkIG5vbi11cmwgcGFyYW1zXG4gICAgb3duUGFyYW1zOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgdmFyIHBhcmFtcyA9IHN0YXRlLnVybCAmJiBzdGF0ZS51cmwucGFyYW1zIHx8IG5ldyAkJFVNRlAuUGFyYW1TZXQoKTtcbiAgICAgIGZvckVhY2goc3RhdGUucGFyYW1zIHx8IHt9LCBmdW5jdGlvbihjb25maWcsIGlkKSB7XG4gICAgICAgIGlmICghcGFyYW1zW2lkXSkgcGFyYW1zW2lkXSA9IG5ldyAkJFVNRlAuUGFyYW0oaWQsIG51bGwsIGNvbmZpZywgXCJjb25maWdcIik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcblxuICAgIC8vIERlcml2ZSBwYXJhbWV0ZXJzIGZvciB0aGlzIHN0YXRlIGFuZCBlbnN1cmUgdGhleSdyZSBhIHN1cGVyLXNldCBvZiBwYXJlbnQncyBwYXJhbWV0ZXJzXG4gICAgcGFyYW1zOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgdmFyIG93blBhcmFtcyA9IHBpY2soc3RhdGUub3duUGFyYW1zLCBzdGF0ZS5vd25QYXJhbXMuJCRrZXlzKCkpO1xuICAgICAgcmV0dXJuIHN0YXRlLnBhcmVudCAmJiBzdGF0ZS5wYXJlbnQucGFyYW1zID8gZXh0ZW5kKHN0YXRlLnBhcmVudC5wYXJhbXMuJCRuZXcoKSwgb3duUGFyYW1zKSA6IG5ldyAkJFVNRlAuUGFyYW1TZXQoKTtcbiAgICB9LFxuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gZXhwbGljaXQgbXVsdGktdmlldyBjb25maWd1cmF0aW9uLCBtYWtlIG9uZSB1cCBzbyB3ZSBkb24ndCBoYXZlXG4gICAgLy8gdG8gaGFuZGxlIGJvdGggY2FzZXMgaW4gdGhlIHZpZXcgZGlyZWN0aXZlIGxhdGVyLiBOb3RlIHRoYXQgaGF2aW5nIGFuIGV4cGxpY2l0XG4gICAgLy8gJ3ZpZXdzJyBwcm9wZXJ0eSB3aWxsIG1lYW4gdGhlIGRlZmF1bHQgdW5uYW1lZCB2aWV3IHByb3BlcnRpZXMgYXJlIGlnbm9yZWQuIFRoaXNcbiAgICAvLyBpcyBhbHNvIGEgZ29vZCB0aW1lIHRvIHJlc29sdmUgdmlldyBuYW1lcyB0byBhYnNvbHV0ZSBuYW1lcywgc28gZXZlcnl0aGluZyBpcyBhXG4gICAgLy8gc3RyYWlnaHQgbG9va3VwIGF0IGxpbmsgdGltZS5cbiAgICB2aWV3czogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHZhciB2aWV3cyA9IHt9O1xuXG4gICAgICBmb3JFYWNoKGlzRGVmaW5lZChzdGF0ZS52aWV3cykgPyBzdGF0ZS52aWV3cyA6IHsgJyc6IHN0YXRlIH0sIGZ1bmN0aW9uICh2aWV3LCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lLmluZGV4T2YoJ0AnKSA8IDApIG5hbWUgKz0gJ0AnICsgc3RhdGUucGFyZW50Lm5hbWU7XG4gICAgICAgIHZpZXcucmVzb2x2ZUFzID0gdmlldy5yZXNvbHZlQXMgfHwgc3RhdGUucmVzb2x2ZUFzIHx8ICckcmVzb2x2ZSc7XG4gICAgICAgIHZpZXdzW25hbWVdID0gdmlldztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZpZXdzO1xuICAgIH0sXG5cbiAgICAvLyBLZWVwIGEgZnVsbCBwYXRoIGZyb20gdGhlIHJvb3QgZG93biB0byB0aGlzIHN0YXRlIGFzIHRoaXMgaXMgbmVlZGVkIGZvciBzdGF0ZSBhY3RpdmF0aW9uLlxuICAgIHBhdGg6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUucGFyZW50ID8gc3RhdGUucGFyZW50LnBhdGguY29uY2F0KHN0YXRlKSA6IFtdOyAvLyBleGNsdWRlIHJvb3QgZnJvbSBwYXRoXG4gICAgfSxcblxuICAgIC8vIFNwZWVkIHVwICRzdGF0ZS5jb250YWlucygpIGFzIGl0J3MgdXNlZCBhIGxvdFxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgdmFyIGluY2x1ZGVzID0gc3RhdGUucGFyZW50ID8gZXh0ZW5kKHt9LCBzdGF0ZS5wYXJlbnQuaW5jbHVkZXMpIDoge307XG4gICAgICBpbmNsdWRlc1tzdGF0ZS5uYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gaW5jbHVkZXM7XG4gICAgfSxcblxuICAgICRkZWxlZ2F0ZXM6IHt9XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNSZWxhdGl2ZShzdGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gc3RhdGVOYW1lLmluZGV4T2YoXCIuXCIpID09PSAwIHx8IHN0YXRlTmFtZS5pbmRleE9mKFwiXlwiKSA9PT0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRTdGF0ZShzdGF0ZU9yTmFtZSwgYmFzZSkge1xuICAgIGlmICghc3RhdGVPck5hbWUpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgaXNTdHIgPSBpc1N0cmluZyhzdGF0ZU9yTmFtZSksXG4gICAgICAgIG5hbWUgID0gaXNTdHIgPyBzdGF0ZU9yTmFtZSA6IHN0YXRlT3JOYW1lLm5hbWUsXG4gICAgICAgIHBhdGggID0gaXNSZWxhdGl2ZShuYW1lKTtcblxuICAgIGlmIChwYXRoKSB7XG4gICAgICBpZiAoIWJhc2UpIHRocm93IG5ldyBFcnJvcihcIk5vIHJlZmVyZW5jZSBwb2ludCBnaXZlbiBmb3IgcGF0aCAnXCIgICsgbmFtZSArIFwiJ1wiKTtcbiAgICAgIGJhc2UgPSBmaW5kU3RhdGUoYmFzZSk7XG4gICAgICBcbiAgICAgIHZhciByZWwgPSBuYW1lLnNwbGl0KFwiLlwiKSwgaSA9IDAsIHBhdGhMZW5ndGggPSByZWwubGVuZ3RoLCBjdXJyZW50ID0gYmFzZTtcblxuICAgICAgZm9yICg7IGkgPCBwYXRoTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJlbFtpXSA9PT0gXCJcIiAmJiBpID09PSAwKSB7XG4gICAgICAgICAgY3VycmVudCA9IGJhc2U7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbFtpXSA9PT0gXCJeXCIpIHtcbiAgICAgICAgICBpZiAoIWN1cnJlbnQucGFyZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoICdcIiArIG5hbWUgKyBcIicgbm90IHZhbGlkIGZvciBzdGF0ZSAnXCIgKyBiYXNlLm5hbWUgKyBcIidcIik7XG4gICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVsID0gcmVsLnNsaWNlKGkpLmpvaW4oXCIuXCIpO1xuICAgICAgbmFtZSA9IGN1cnJlbnQubmFtZSArIChjdXJyZW50Lm5hbWUgJiYgcmVsID8gXCIuXCIgOiBcIlwiKSArIHJlbDtcbiAgICB9XG4gICAgdmFyIHN0YXRlID0gc3RhdGVzW25hbWVdO1xuXG4gICAgaWYgKHN0YXRlICYmIChpc1N0ciB8fCAoIWlzU3RyICYmIChzdGF0ZSA9PT0gc3RhdGVPck5hbWUgfHwgc3RhdGUuc2VsZiA9PT0gc3RhdGVPck5hbWUpKSkpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1ZXVlU3RhdGUocGFyZW50TmFtZSwgc3RhdGUpIHtcbiAgICBpZiAoIXF1ZXVlW3BhcmVudE5hbWVdKSB7XG4gICAgICBxdWV1ZVtwYXJlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBxdWV1ZVtwYXJlbnROYW1lXS5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoUXVldWVkQ2hpbGRyZW4ocGFyZW50TmFtZSkge1xuICAgIHZhciBxdWV1ZWQgPSBxdWV1ZVtwYXJlbnROYW1lXSB8fCBbXTtcbiAgICB3aGlsZShxdWV1ZWQubGVuZ3RoKSB7XG4gICAgICByZWdpc3RlclN0YXRlKHF1ZXVlZC5zaGlmdCgpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclN0YXRlKHN0YXRlKSB7XG4gICAgLy8gV3JhcCBhIG5ldyBvYmplY3QgYXJvdW5kIHRoZSBzdGF0ZSBzbyB3ZSBjYW4gc3RvcmUgb3VyIHByaXZhdGUgZGV0YWlscyBlYXNpbHkuXG4gICAgc3RhdGUgPSBpbmhlcml0KHN0YXRlLCB7XG4gICAgICBzZWxmOiBzdGF0ZSxcbiAgICAgIHJlc29sdmU6IHN0YXRlLnJlc29sdmUgfHwge30sXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbiAgICB9KTtcblxuICAgIHZhciBuYW1lID0gc3RhdGUubmFtZTtcbiAgICBpZiAoIWlzU3RyaW5nKG5hbWUpIHx8IG5hbWUuaW5kZXhPZignQCcpID49IDApIHRocm93IG5ldyBFcnJvcihcIlN0YXRlIG11c3QgaGF2ZSBhIHZhbGlkIG5hbWVcIik7XG4gICAgaWYgKHN0YXRlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgdGhyb3cgbmV3IEVycm9yKFwiU3RhdGUgJ1wiICsgbmFtZSArIFwiJyBpcyBhbHJlYWR5IGRlZmluZWRcIik7XG5cbiAgICAvLyBHZXQgcGFyZW50IG5hbWVcbiAgICB2YXIgcGFyZW50TmFtZSA9IChuYW1lLmluZGV4T2YoJy4nKSAhPT0gLTEpID8gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sYXN0SW5kZXhPZignLicpKVxuICAgICAgICA6IChpc1N0cmluZyhzdGF0ZS5wYXJlbnQpKSA/IHN0YXRlLnBhcmVudFxuICAgICAgICA6IChpc09iamVjdChzdGF0ZS5wYXJlbnQpICYmIGlzU3RyaW5nKHN0YXRlLnBhcmVudC5uYW1lKSkgPyBzdGF0ZS5wYXJlbnQubmFtZVxuICAgICAgICA6ICcnO1xuXG4gICAgLy8gSWYgcGFyZW50IGlzIG5vdCByZWdpc3RlcmVkIHlldCwgYWRkIHN0YXRlIHRvIHF1ZXVlIGFuZCByZWdpc3RlciBsYXRlclxuICAgIGlmIChwYXJlbnROYW1lICYmICFzdGF0ZXNbcGFyZW50TmFtZV0pIHtcbiAgICAgIHJldHVybiBxdWV1ZVN0YXRlKHBhcmVudE5hbWUsIHN0YXRlLnNlbGYpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZUJ1aWxkZXIpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHN0YXRlQnVpbGRlcltrZXldKSkgc3RhdGVba2V5XSA9IHN0YXRlQnVpbGRlcltrZXldKHN0YXRlLCBzdGF0ZUJ1aWxkZXIuJGRlbGVnYXRlc1trZXldKTtcbiAgICB9XG4gICAgc3RhdGVzW25hbWVdID0gc3RhdGU7XG5cbiAgICAvLyBSZWdpc3RlciB0aGUgc3RhdGUgaW4gdGhlIGdsb2JhbCBzdGF0ZSBsaXN0IGFuZCB3aXRoICR1cmxSb3V0ZXIgaWYgbmVjZXNzYXJ5LlxuICAgIGlmICghc3RhdGVbYWJzdHJhY3RLZXldICYmIHN0YXRlLnVybCkge1xuICAgICAgJHVybFJvdXRlclByb3ZpZGVyLndoZW4oc3RhdGUudXJsLCBbJyRtYXRjaCcsICckc3RhdGVQYXJhbXMnLCBmdW5jdGlvbiAoJG1hdGNoLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgaWYgKCRzdGF0ZS4kY3VycmVudC5uYXZpZ2FibGUgIT0gc3RhdGUgfHwgIWVxdWFsRm9yS2V5cygkbWF0Y2gsICRzdGF0ZVBhcmFtcykpIHtcbiAgICAgICAgICAkc3RhdGUudHJhbnNpdGlvblRvKHN0YXRlLCAkbWF0Y2gsIHsgaW5oZXJpdDogdHJ1ZSwgbG9jYXRpb246IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9XSk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgYW55IHF1ZXVlZCBjaGlsZHJlblxuICAgIGZsdXNoUXVldWVkQ2hpbGRyZW4obmFtZSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvLyBDaGVja3MgdGV4dCB0byBzZWUgaWYgaXQgbG9va3MgbGlrZSBhIGdsb2IuXG4gIGZ1bmN0aW9uIGlzR2xvYiAodGV4dCkge1xuICAgIHJldHVybiB0ZXh0LmluZGV4T2YoJyonKSA+IC0xO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIGdsb2IgbWF0Y2hlcyBjdXJyZW50ICRzdGF0ZSBuYW1lLlxuICBmdW5jdGlvbiBkb2VzU3RhdGVNYXRjaEdsb2IgKGdsb2IpIHtcbiAgICB2YXIgZ2xvYlNlZ21lbnRzID0gZ2xvYi5zcGxpdCgnLicpLFxuICAgICAgICBzZWdtZW50cyA9ICRzdGF0ZS4kY3VycmVudC5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgICAvL21hdGNoIHNpbmdsZSBzdGFyc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2xvYlNlZ21lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGdsb2JTZWdtZW50c1tpXSA9PT0gJyonKSB7XG4gICAgICAgIHNlZ21lbnRzW2ldID0gJyonO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vbWF0Y2ggZ3JlZWR5IHN0YXJ0c1xuICAgIGlmIChnbG9iU2VnbWVudHNbMF0gPT09ICcqKicpIHtcbiAgICAgICBzZWdtZW50cyA9IHNlZ21lbnRzLnNsaWNlKGluZGV4T2Yoc2VnbWVudHMsIGdsb2JTZWdtZW50c1sxXSkpO1xuICAgICAgIHNlZ21lbnRzLnVuc2hpZnQoJyoqJyk7XG4gICAgfVxuICAgIC8vbWF0Y2ggZ3JlZWR5IGVuZHNcbiAgICBpZiAoZ2xvYlNlZ21lbnRzW2dsb2JTZWdtZW50cy5sZW5ndGggLSAxXSA9PT0gJyoqJykge1xuICAgICAgIHNlZ21lbnRzLnNwbGljZShpbmRleE9mKHNlZ21lbnRzLCBnbG9iU2VnbWVudHNbZ2xvYlNlZ21lbnRzLmxlbmd0aCAtIDJdKSArIDEsIE51bWJlci5NQVhfVkFMVUUpO1xuICAgICAgIHNlZ21lbnRzLnB1c2goJyoqJyk7XG4gICAgfVxuXG4gICAgaWYgKGdsb2JTZWdtZW50cy5sZW5ndGggIT0gc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ21lbnRzLmpvaW4oJycpID09PSBnbG9iU2VnbWVudHMuam9pbignJyk7XG4gIH1cblxuXG4gIC8vIEltcGxpY2l0IHJvb3Qgc3RhdGUgdGhhdCBpcyBhbHdheXMgYWN0aXZlXG4gIHJvb3QgPSByZWdpc3RlclN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICB1cmw6ICdeJyxcbiAgICB2aWV3czogbnVsbCxcbiAgICAnYWJzdHJhY3QnOiB0cnVlXG4gIH0pO1xuICByb290Lm5hdmlnYWJsZSA9IG51bGw7XG5cblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQcm92aWRlciNkZWNvcmF0b3JcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQcm92aWRlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQWxsb3dzIHlvdSB0byBleHRlbmQgKGNhcmVmdWxseSkgb3Igb3ZlcnJpZGUgKGF0IHlvdXIgb3duIHBlcmlsKSB0aGUgXG4gICAqIGBzdGF0ZUJ1aWxkZXJgIG9iamVjdCB1c2VkIGludGVybmFsbHkgYnkgYCRzdGF0ZVByb3ZpZGVyYC4gVGhpcyBjYW4gYmUgdXNlZCBcbiAgICogdG8gYWRkIGN1c3RvbSBmdW5jdGlvbmFsaXR5IHRvIHVpLXJvdXRlciwgZm9yIGV4YW1wbGUgaW5mZXJyaW5nIHRlbXBsYXRlVXJsIFxuICAgKiBiYXNlZCBvbiB0aGUgc3RhdGUgbmFtZS5cbiAgICpcbiAgICogV2hlbiBwYXNzaW5nIG9ubHkgYSBuYW1lLCBpdCByZXR1cm5zIHRoZSBjdXJyZW50IChvcmlnaW5hbCBvciBkZWNvcmF0ZWQpIGJ1aWxkZXJcbiAgICogZnVuY3Rpb24gdGhhdCBtYXRjaGVzIGBuYW1lYC5cbiAgICpcbiAgICogVGhlIGJ1aWxkZXIgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIGRlY29yYXRlZCBhcmUgbGlzdGVkIGJlbG93LiBUaG91Z2ggbm90IGFsbFxuICAgKiBuZWNlc3NhcmlseSBoYXZlIGEgZ29vZCB1c2UgY2FzZSBmb3IgZGVjb3JhdGlvbiwgdGhhdCBpcyB1cCB0byB5b3UgdG8gZGVjaWRlLlxuICAgKlxuICAgKiBJbiBhZGRpdGlvbiwgdXNlcnMgY2FuIGF0dGFjaCBjdXN0b20gZGVjb3JhdG9ycywgd2hpY2ggd2lsbCBnZW5lcmF0ZSBuZXcgXG4gICAqIHByb3BlcnRpZXMgd2l0aGluIHRoZSBzdGF0ZSdzIGludGVybmFsIGRlZmluaXRpb24uIFRoZXJlIGlzIGN1cnJlbnRseSBubyBjbGVhciBcbiAgICogdXNlLWNhc2UgZm9yIHRoaXMgYmV5b25kIGFjY2Vzc2luZyBpbnRlcm5hbCBzdGF0ZXMgKGkuZS4gJHN0YXRlLiRjdXJyZW50KSwgXG4gICAqIGhvd2V2ZXIsIGV4cGVjdCB0aGlzIHRvIGJlY29tZSBpbmNyZWFzaW5nbHkgcmVsZXZhbnQgYXMgd2UgaW50cm9kdWNlIGFkZGl0aW9uYWwgXG4gICAqIG1ldGEtcHJvZ3JhbW1pbmcgZmVhdHVyZXMuXG4gICAqXG4gICAqICoqV2FybmluZyoqOiBEZWNvcmF0b3JzIHNob3VsZCBub3QgYmUgaW50ZXJkZXBlbmRlbnQgYmVjYXVzZSB0aGUgb3JkZXIgb2YgXG4gICAqIGV4ZWN1dGlvbiBvZiB0aGUgYnVpbGRlciBmdW5jdGlvbnMgaW4gbm9uLWRldGVybWluaXN0aWMuIEJ1aWxkZXIgZnVuY3Rpb25zIFxuICAgKiBzaG91bGQgb25seSBiZSBkZXBlbmRlbnQgb24gdGhlIHN0YXRlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBzdXBlciBmdW5jdGlvbi5cbiAgICpcbiAgICpcbiAgICogRXhpc3RpbmcgYnVpbGRlciBmdW5jdGlvbnMgYW5kIGN1cnJlbnQgcmV0dXJuIHZhbHVlczpcbiAgICpcbiAgICogLSAqKnBhcmVudCoqIGB7b2JqZWN0fWAgLSByZXR1cm5zIHRoZSBwYXJlbnQgc3RhdGUgb2JqZWN0LlxuICAgKiAtICoqZGF0YSoqIGB7b2JqZWN0fWAgLSByZXR1cm5zIHN0YXRlIGRhdGEsIGluY2x1ZGluZyBhbnkgaW5oZXJpdGVkIGRhdGEgdGhhdCBpcyBub3RcbiAgICogICBvdmVycmlkZGVuIGJ5IG93biB2YWx1ZXMgKGlmIGFueSkuXG4gICAqIC0gKip1cmwqKiBge29iamVjdH1gIC0gcmV0dXJucyBhIHtAbGluayB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIgVXJsTWF0Y2hlcn1cbiAgICogICBvciBgbnVsbGAuXG4gICAqIC0gKipuYXZpZ2FibGUqKiBge29iamVjdH1gIC0gcmV0dXJucyBjbG9zZXN0IGFuY2VzdG9yIHN0YXRlIHRoYXQgaGFzIGEgVVJMIChha2EgaXMgXG4gICAqICAgbmF2aWdhYmxlKS5cbiAgICogLSAqKnBhcmFtcyoqIGB7b2JqZWN0fWAgLSByZXR1cm5zIGFuIGFycmF5IG9mIHN0YXRlIHBhcmFtcyB0aGF0IGFyZSBlbnN1cmVkIHRvIFxuICAgKiAgIGJlIGEgc3VwZXItc2V0IG9mIHBhcmVudCdzIHBhcmFtcy5cbiAgICogLSAqKnZpZXdzKiogYHtvYmplY3R9YCAtIHJldHVybnMgYSB2aWV3cyBvYmplY3Qgd2hlcmUgZWFjaCBrZXkgaXMgYW4gYWJzb2x1dGUgdmlldyBcbiAgICogICBuYW1lIChpLmUuIFwidmlld05hbWVAc3RhdGVOYW1lXCIpIGFuZCBlYWNoIHZhbHVlIGlzIHRoZSBjb25maWcgb2JqZWN0IFxuICAgKiAgICh0ZW1wbGF0ZSwgY29udHJvbGxlcikgZm9yIHRoZSB2aWV3LiBFdmVuIHdoZW4geW91IGRvbid0IHVzZSB0aGUgdmlld3Mgb2JqZWN0IFxuICAgKiAgIGV4cGxpY2l0bHkgb24gYSBzdGF0ZSBjb25maWcsIG9uZSBpcyBzdGlsbCBjcmVhdGVkIGZvciB5b3UgaW50ZXJuYWxseS5cbiAgICogICBTbyBieSBkZWNvcmF0aW5nIHRoaXMgYnVpbGRlciBmdW5jdGlvbiB5b3UgaGF2ZSBhY2Nlc3MgdG8gZGVjb3JhdGluZyB0ZW1wbGF0ZSBcbiAgICogICBhbmQgY29udHJvbGxlciBwcm9wZXJ0aWVzLlxuICAgKiAtICoqb3duUGFyYW1zKiogYHtvYmplY3R9YCAtIHJldHVybnMgYW4gYXJyYXkgb2YgcGFyYW1zIHRoYXQgYmVsb25nIHRvIHRoZSBzdGF0ZSwgXG4gICAqICAgbm90IGluY2x1ZGluZyBhbnkgcGFyYW1zIGRlZmluZWQgYnkgYW5jZXN0b3Igc3RhdGVzLlxuICAgKiAtICoqcGF0aCoqIGB7c3RyaW5nfWAgLSByZXR1cm5zIHRoZSBmdWxsIHBhdGggZnJvbSB0aGUgcm9vdCBkb3duIHRvIHRoaXMgc3RhdGUuIFxuICAgKiAgIE5lZWRlZCBmb3Igc3RhdGUgYWN0aXZhdGlvbi5cbiAgICogLSAqKmluY2x1ZGVzKiogYHtvYmplY3R9YCAtIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaW5jbHVkZXMgZXZlcnkgc3RhdGUgdGhhdCBcbiAgICogICB3b3VsZCBwYXNzIGEgYCRzdGF0ZS5pbmNsdWRlcygpYCB0ZXN0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8cHJlPlxuICAgKiAvLyBPdmVycmlkZSB0aGUgaW50ZXJuYWwgJ3ZpZXdzJyBidWlsZGVyIHdpdGggYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBzdGF0ZVxuICAgKiAvLyBkZWZpbml0aW9uLCBhbmQgYSByZWZlcmVuY2UgdG8gdGhlIGludGVybmFsIGZ1bmN0aW9uIGJlaW5nIG92ZXJyaWRkZW46XG4gICAqICRzdGF0ZVByb3ZpZGVyLmRlY29yYXRvcigndmlld3MnLCBmdW5jdGlvbiAoc3RhdGUsIHBhcmVudCkge1xuICAgKiAgIHZhciByZXN1bHQgPSB7fSxcbiAgICogICAgICAgdmlld3MgPSBwYXJlbnQoc3RhdGUpO1xuICAgKlxuICAgKiAgIGFuZ3VsYXIuZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKGNvbmZpZywgbmFtZSkge1xuICAgKiAgICAgdmFyIGF1dG9OYW1lID0gKHN0YXRlLm5hbWUgKyAnLicgKyBuYW1lKS5yZXBsYWNlKCcuJywgJy8nKTtcbiAgICogICAgIGNvbmZpZy50ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCAnL3BhcnRpYWxzLycgKyBhdXRvTmFtZSArICcuaHRtbCc7XG4gICAqICAgICByZXN1bHRbbmFtZV0gPSBjb25maWc7XG4gICAqICAgfSk7XG4gICAqICAgcmV0dXJuIHJlc3VsdDtcbiAgICogfSk7XG4gICAqXG4gICAqICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuICAgKiAgIHZpZXdzOiB7XG4gICAqICAgICAnY29udGFjdC5saXN0JzogeyBjb250cm9sbGVyOiAnTGlzdENvbnRyb2xsZXInIH0sXG4gICAqICAgICAnY29udGFjdC5pdGVtJzogeyBjb250cm9sbGVyOiAnSXRlbUNvbnRyb2xsZXInIH1cbiAgICogICB9XG4gICAqIH0pO1xuICAgKlxuICAgKiAvLyAuLi5cbiAgICpcbiAgICogJHN0YXRlLmdvKCdob21lJyk7XG4gICAqIC8vIEF1dG8tcG9wdWxhdGVzIGxpc3QgYW5kIGl0ZW0gdmlld3Mgd2l0aCAvcGFydGlhbHMvaG9tZS9jb250YWN0L2xpc3QuaHRtbCxcbiAgICogLy8gYW5kIC9wYXJ0aWFscy9ob21lL2NvbnRhY3QvaXRlbS5odG1sLCByZXNwZWN0aXZlbHkuXG4gICAqIDwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYnVpbGRlciBmdW5jdGlvbiB0byBkZWNvcmF0ZS4gXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmdW5jIEEgZnVuY3Rpb24gdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgZGVjb3JhdGluZyB0aGUgb3JpZ2luYWwgXG4gICAqIGJ1aWxkZXIgZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0d28gcGFyYW1ldGVyczpcbiAgICpcbiAgICogICAtIGB7b2JqZWN0fWAgLSBzdGF0ZSAtIFRoZSBzdGF0ZSBjb25maWcgb2JqZWN0LlxuICAgKiAgIC0gYHtvYmplY3R9YCAtIHN1cGVyIC0gVGhlIG9yaWdpbmFsIGJ1aWxkZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gJHN0YXRlUHJvdmlkZXIgLSAkc3RhdGVQcm92aWRlciBpbnN0YW5jZVxuICAgKi9cbiAgdGhpcy5kZWNvcmF0b3IgPSBkZWNvcmF0b3I7XG4gIGZ1bmN0aW9uIGRlY29yYXRvcihuYW1lLCBmdW5jKSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4gICAgaWYgKGlzU3RyaW5nKG5hbWUpICYmICFpc0RlZmluZWQoZnVuYykpIHtcbiAgICAgIHJldHVybiBzdGF0ZUJ1aWxkZXJbbmFtZV07XG4gICAgfVxuICAgIGlmICghaXNGdW5jdGlvbihmdW5jKSB8fCAhaXNTdHJpbmcobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoc3RhdGVCdWlsZGVyW25hbWVdICYmICFzdGF0ZUJ1aWxkZXIuJGRlbGVnYXRlc1tuYW1lXSkge1xuICAgICAgc3RhdGVCdWlsZGVyLiRkZWxlZ2F0ZXNbbmFtZV0gPSBzdGF0ZUJ1aWxkZXJbbmFtZV07XG4gICAgfVxuICAgIHN0YXRlQnVpbGRlcltuYW1lXSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQcm92aWRlciNzdGF0ZVxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVByb3ZpZGVyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZWdpc3RlcnMgYSBzdGF0ZSBjb25maWd1cmF0aW9uIHVuZGVyIGEgZ2l2ZW4gc3RhdGUgbmFtZS4gVGhlIHN0YXRlQ29uZmlnIG9iamVjdFxuICAgKiBoYXMgdGhlIGZvbGxvd2luZyBhY2NlcHRhYmxlIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIEEgdW5pcXVlIHN0YXRlIG5hbWUsIGUuZy4gXCJob21lXCIsIFwiYWJvdXRcIiwgXCJjb250YWN0c1wiLlxuICAgKiBUbyBjcmVhdGUgYSBwYXJlbnQvY2hpbGQgc3RhdGUgdXNlIGEgZG90LCBlLmcuIFwiYWJvdXQuc2FsZXNcIiwgXCJob21lLm5ld2VzdFwiLlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGVDb25maWcgU3RhdGUgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9uPX0gc3RhdGVDb25maWcudGVtcGxhdGVcbiAgICogPGEgaWQ9J3RlbXBsYXRlJz48L2E+XG4gICAqICAgaHRtbCB0ZW1wbGF0ZSBhcyBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJuc1xuICAgKiAgIGFuIGh0bWwgdGVtcGxhdGUgYXMgYSBzdHJpbmcgd2hpY2ggc2hvdWxkIGJlIHVzZWQgYnkgdGhlIHVpVmlldyBkaXJlY3RpdmVzLiBUaGlzIHByb3BlcnR5IFxuICAgKiAgIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0ZW1wbGF0ZVVybC5cbiAgICogICBcbiAgICogICBJZiBgdGVtcGxhdGVgIGlzIGEgZnVuY3Rpb24sIGl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICAgKlxuICAgKiAgIC0ge2FycmF5LiZsdDtvYmplY3QmZ3Q7fSAtIHN0YXRlIHBhcmFtZXRlcnMgZXh0cmFjdGVkIGZyb20gdGhlIGN1cnJlbnQgJGxvY2F0aW9uLnBhdGgoKSBieVxuICAgKiAgICAgYXBwbHlpbmcgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICpcbiAgICogPHByZT50ZW1wbGF0ZTpcbiAgICogICBcIjxoMT5pbmxpbmUgdGVtcGxhdGUgZGVmaW5pdGlvbjwvaDE+XCIgK1xuICAgKiAgIFwiPGRpdiB1aS12aWV3PjwvZGl2PlwiPC9wcmU+XG4gICAqIDxwcmU+dGVtcGxhdGU6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgKiAgICAgICByZXR1cm4gXCI8aDE+Z2VuZXJhdGVkIHRlbXBsYXRlPC9oMT5cIjsgfTwvcHJlPlxuICAgKiA8L2Rpdj5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb249fSBzdGF0ZUNvbmZpZy50ZW1wbGF0ZVVybFxuICAgKiA8YSBpZD0ndGVtcGxhdGVVcmwnPjwvYT5cbiAgICpcbiAgICogICBwYXRoIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHBhdGggdG8gYW4gaHRtbFxuICAgKiAgIHRlbXBsYXRlIHRoYXQgc2hvdWxkIGJlIHVzZWQgYnkgdWlWaWV3LlxuICAgKiAgIFxuICAgKiAgIElmIGB0ZW1wbGF0ZVVybGAgaXMgYSBmdW5jdGlvbiwgaXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gICAqXG4gICAqICAgLSB7YXJyYXkuJmx0O29iamVjdCZndDt9IC0gc3RhdGUgcGFyYW1ldGVycyBleHRyYWN0ZWQgZnJvbSB0aGUgY3VycmVudCAkbG9jYXRpb24ucGF0aCgpIGJ5IFxuICAgKiAgICAgYXBwbHlpbmcgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICpcbiAgICogPHByZT50ZW1wbGF0ZVVybDogXCJob21lLmh0bWxcIjwvcHJlPlxuICAgKiA8cHJlPnRlbXBsYXRlVXJsOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICogICAgIHJldHVybiBteVRlbXBsYXRlc1twYXJhbXMucGFnZUlkXTsgfTwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uPX0gc3RhdGVDb25maWcudGVtcGxhdGVQcm92aWRlclxuICAgKiA8YSBpZD0ndGVtcGxhdGVQcm92aWRlcic+PC9hPlxuICAgKiAgICBQcm92aWRlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgSFRNTCBjb250ZW50IHN0cmluZy5cbiAgICogPHByZT4gdGVtcGxhdGVQcm92aWRlcjpcbiAgICogICAgICAgZnVuY3Rpb24oTXlUZW1wbGF0ZVNlcnZpY2UsIHBhcmFtcykge1xuICAgKiAgICAgICAgIHJldHVybiBNeVRlbXBsYXRlU2VydmljZS5nZXRUZW1wbGF0ZShwYXJhbXMucGFnZUlkKTtcbiAgICogICAgICAgfTwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbj19IHN0YXRlQ29uZmlnLmNvbnRyb2xsZXJcbiAgICogPGEgaWQ9J2NvbnRyb2xsZXInPjwvYT5cbiAgICpcbiAgICogIENvbnRyb2xsZXIgZm4gdGhhdCBzaG91bGQgYmUgYXNzb2NpYXRlZCB3aXRoIG5ld2x5XG4gICAqICAgcmVsYXRlZCBzY29wZSBvciB0aGUgbmFtZSBvZiBhIHJlZ2lzdGVyZWQgY29udHJvbGxlciBpZiBwYXNzZWQgYXMgYSBzdHJpbmcuXG4gICAqICAgT3B0aW9uYWxseSwgdGhlIENvbnRyb2xsZXJBcyBtYXkgYmUgZGVjbGFyZWQgaGVyZS5cbiAgICogPHByZT5jb250cm9sbGVyOiBcIk15UmVnaXN0ZXJlZENvbnRyb2xsZXJcIjwvcHJlPlxuICAgKiA8cHJlPmNvbnRyb2xsZXI6XG4gICAqICAgICBcIk15UmVnaXN0ZXJlZENvbnRyb2xsZXIgYXMgZm9vQ3RybFwifTwvcHJlPlxuICAgKiA8cHJlPmNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgTXlTZXJ2aWNlKSB7XG4gICAqICAgICAkc2NvcGUuZGF0YSA9IE15U2VydmljZS5nZXREYXRhKCk7IH08L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbj19IHN0YXRlQ29uZmlnLmNvbnRyb2xsZXJQcm92aWRlclxuICAgKiA8YSBpZD0nY29udHJvbGxlclByb3ZpZGVyJz48L2E+XG4gICAqXG4gICAqIEluamVjdGFibGUgcHJvdmlkZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBhY3R1YWwgY29udHJvbGxlciBvciBzdHJpbmcuXG4gICAqIDxwcmU+Y29udHJvbGxlclByb3ZpZGVyOlxuICAgKiAgIGZ1bmN0aW9uKE15UmVzb2x2ZURhdGEpIHtcbiAgICogICAgIGlmIChNeVJlc29sdmVEYXRhLmZvbylcbiAgICogICAgICAgcmV0dXJuIFwiRm9vQ3RybFwiXG4gICAqICAgICBlbHNlIGlmIChNeVJlc29sdmVEYXRhLmJhcilcbiAgICogICAgICAgcmV0dXJuIFwiQmFyQ3RybFwiO1xuICAgKiAgICAgZWxzZSByZXR1cm4gZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAqICAgICAgICRzY29wZS5iYXogPSBcIlF1eFwiO1xuICAgKiAgICAgfVxuICAgKiAgIH08L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBzdGF0ZUNvbmZpZy5jb250cm9sbGVyQXNcbiAgICogPGEgaWQ9J2NvbnRyb2xsZXJBcyc+PC9hPlxuICAgKiBcbiAgICogQSBjb250cm9sbGVyIGFsaWFzIG5hbWUuIElmIHByZXNlbnQgdGhlIGNvbnRyb2xsZXIgd2lsbCBiZVxuICAgKiAgIHB1Ymxpc2hlZCB0byBzY29wZSB1bmRlciB0aGUgY29udHJvbGxlckFzIG5hbWUuXG4gICAqIDxwcmU+Y29udHJvbGxlckFzOiBcIm15Q3RybFwiPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdD19IHN0YXRlQ29uZmlnLnBhcmVudFxuICAgKiA8YSBpZD0ncGFyZW50Jz48L2E+XG4gICAqIE9wdGlvbmFsbHkgc3BlY2lmaWVzIHRoZSBwYXJlbnQgc3RhdGUgb2YgdGhpcyBzdGF0ZS5cbiAgICpcbiAgICogPHByZT5wYXJlbnQ6ICdwYXJlbnRTdGF0ZSc8L3ByZT5cbiAgICogPHByZT5wYXJlbnQ6IHBhcmVudFN0YXRlIC8vIEpTIHZhcmlhYmxlPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0PX0gc3RhdGVDb25maWcucmVzb2x2ZVxuICAgKiA8YSBpZD0ncmVzb2x2ZSc+PC9hPlxuICAgKlxuICAgKiBBbiBvcHRpb25hbCBtYXAmbHQ7c3RyaW5nLCBmdW5jdGlvbiZndDsgb2YgZGVwZW5kZW5jaWVzIHdoaWNoXG4gICAqICAgc2hvdWxkIGJlIGluamVjdGVkIGludG8gdGhlIGNvbnRyb2xsZXIuIElmIGFueSBvZiB0aGVzZSBkZXBlbmRlbmNpZXMgYXJlIHByb21pc2VzLCBcbiAgICogICB0aGUgcm91dGVyIHdpbGwgd2FpdCBmb3IgdGhlbSBhbGwgdG8gYmUgcmVzb2x2ZWQgYmVmb3JlIHRoZSBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZC5cbiAgICogICBJZiBhbGwgdGhlIHByb21pc2VzIGFyZSByZXNvbHZlZCBzdWNjZXNzZnVsbHksIHRoZSAkc3RhdGVDaGFuZ2VTdWNjZXNzIGV2ZW50IGlzIGZpcmVkXG4gICAqICAgYW5kIHRoZSB2YWx1ZXMgb2YgdGhlIHJlc29sdmVkIHByb21pc2VzIGFyZSBpbmplY3RlZCBpbnRvIGFueSBjb250cm9sbGVycyB0aGF0IHJlZmVyZW5jZSB0aGVtLlxuICAgKiAgIElmIGFueSAgb2YgdGhlIHByb21pc2VzIGFyZSByZWplY3RlZCB0aGUgJHN0YXRlQ2hhbmdlRXJyb3IgZXZlbnQgaXMgZmlyZWQuXG4gICAqXG4gICAqICAgVGhlIG1hcCBvYmplY3QgaXM6XG4gICAqICAgXG4gICAqICAgLSBrZXkgLSB7c3RyaW5nfTogbmFtZSBvZiBkZXBlbmRlbmN5IHRvIGJlIGluamVjdGVkIGludG8gY29udHJvbGxlclxuICAgKiAgIC0gZmFjdG9yeSAtIHtzdHJpbmd8ZnVuY3Rpb259OiBJZiBzdHJpbmcgdGhlbiBpdCBpcyBhbGlhcyBmb3Igc2VydmljZS4gT3RoZXJ3aXNlIGlmIGZ1bmN0aW9uLCBcbiAgICogICAgIGl0IGlzIGluamVjdGVkIGFuZCByZXR1cm4gdmFsdWUgaXQgdHJlYXRlZCBhcyBkZXBlbmRlbmN5LiBJZiByZXN1bHQgaXMgYSBwcm9taXNlLCBpdCBpcyBcbiAgICogICAgIHJlc29sdmVkIGJlZm9yZSBpdHMgdmFsdWUgaXMgaW5qZWN0ZWQgaW50byBjb250cm9sbGVyLlxuICAgKlxuICAgKiA8cHJlPnJlc29sdmU6IHtcbiAgICogICAgIG15UmVzb2x2ZTE6XG4gICAqICAgICAgIGZ1bmN0aW9uKCRodHRwLCAkc3RhdGVQYXJhbXMpIHtcbiAgICogICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9mb29zL1wiK3N0YXRlUGFyYW1zLmZvb0lEKTtcbiAgICogICAgICAgfVxuICAgKiAgICAgfTwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZz19IHN0YXRlQ29uZmlnLnVybFxuICAgKiA8YSBpZD0ndXJsJz48L2E+XG4gICAqXG4gICAqICAgQSB1cmwgZnJhZ21lbnQgd2l0aCBvcHRpb25hbCBwYXJhbWV0ZXJzLiBXaGVuIGEgc3RhdGUgaXMgbmF2aWdhdGVkIG9yXG4gICAqICAgdHJhbnNpdGlvbmVkIHRvLCB0aGUgYCRzdGF0ZVBhcmFtc2Agc2VydmljZSB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGFueSBcbiAgICogICBwYXJhbWV0ZXJzIHRoYXQgd2VyZSBwYXNzZWQuXG4gICAqXG4gICAqICAgKFNlZSB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyIFVybE1hdGNoZXJ9IGBVcmxNYXRjaGVyYH0gZm9yXG4gICAqICAgbW9yZSBkZXRhaWxzIG9uIGFjY2VwdGFibGUgcGF0dGVybnMgKVxuICAgKlxuICAgKiBleGFtcGxlczpcbiAgICogPHByZT51cmw6IFwiL2hvbWVcIlxuICAgKiB1cmw6IFwiL3VzZXJzLzp1c2VyaWRcIlxuICAgKiB1cmw6IFwiL2Jvb2tzL3tib29raWQ6W2EtekEtWl8tXX1cIlxuICAgKiB1cmw6IFwiL2Jvb2tzL3tjYXRlZ29yeWlkOmludH1cIlxuICAgKiB1cmw6IFwiL2Jvb2tzL3twdWJsaXNoZXJuYW1lOnN0cmluZ30ve2NhdGVnb3J5aWQ6aW50fVwiXG4gICAqIHVybDogXCIvbWVzc2FnZXM/YmVmb3JlJmFmdGVyXCJcbiAgICogdXJsOiBcIi9tZXNzYWdlcz97YmVmb3JlOmRhdGV9JnthZnRlcjpkYXRlfVwiXG4gICAqIHVybDogXCIvbWVzc2FnZXMvOm1haWxib3hpZD97YmVmb3JlOmRhdGV9JnthZnRlcjpkYXRlfVwiXG4gICAqIDwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdD19IHN0YXRlQ29uZmlnLnZpZXdzXG4gICAqIDxhIGlkPSd2aWV3cyc+PC9hPlxuICAgKiBhbiBvcHRpb25hbCBtYXAmbHQ7c3RyaW5nLCBvYmplY3QmZ3Q7IHdoaWNoIGRlZmluZWQgbXVsdGlwbGUgdmlld3MsIG9yIHRhcmdldHMgdmlld3NcbiAgICogbWFudWFsbHkvZXhwbGljaXRseS5cbiAgICpcbiAgICogRXhhbXBsZXM6XG4gICAqXG4gICAqIFRhcmdldHMgdGhyZWUgbmFtZWQgYHVpLXZpZXdgcyBpbiB0aGUgcGFyZW50IHN0YXRlJ3MgdGVtcGxhdGVcbiAgICogPHByZT52aWV3czoge1xuICAgKiAgICAgaGVhZGVyOiB7XG4gICAqICAgICAgIGNvbnRyb2xsZXI6IFwiaGVhZGVyQ3RybFwiLFxuICAgKiAgICAgICB0ZW1wbGF0ZVVybDogXCJoZWFkZXIuaHRtbFwiXG4gICAqICAgICB9LCBib2R5OiB7XG4gICAqICAgICAgIGNvbnRyb2xsZXI6IFwiYm9keUN0cmxcIixcbiAgICogICAgICAgdGVtcGxhdGVVcmw6IFwiYm9keS5odG1sXCJcbiAgICogICAgIH0sIGZvb3Rlcjoge1xuICAgKiAgICAgICBjb250cm9sbGVyOiBcImZvb3RDdHJsXCIsXG4gICAqICAgICAgIHRlbXBsYXRlVXJsOiBcImZvb3Rlci5odG1sXCJcbiAgICogICAgIH1cbiAgICogICB9PC9wcmU+XG4gICAqXG4gICAqIFRhcmdldHMgbmFtZWQgYHVpLXZpZXc9XCJoZWFkZXJcImAgZnJvbSBncmFuZHBhcmVudCBzdGF0ZSAndG9wJydzIHRlbXBsYXRlLCBhbmQgbmFtZWQgYHVpLXZpZXc9XCJib2R5XCIgZnJvbSBwYXJlbnQgc3RhdGUncyB0ZW1wbGF0ZS5cbiAgICogPHByZT52aWV3czoge1xuICAgKiAgICAgJ2hlYWRlckB0b3AnOiB7XG4gICAqICAgICAgIGNvbnRyb2xsZXI6IFwibXNnSGVhZGVyQ3RybFwiLFxuICAgKiAgICAgICB0ZW1wbGF0ZVVybDogXCJtc2dIZWFkZXIuaHRtbFwiXG4gICAqICAgICB9LCAnYm9keSc6IHtcbiAgICogICAgICAgY29udHJvbGxlcjogXCJtZXNzYWdlc0N0cmxcIixcbiAgICogICAgICAgdGVtcGxhdGVVcmw6IFwibWVzc2FnZXMuaHRtbFwiXG4gICAqICAgICB9XG4gICAqICAgfTwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBbc3RhdGVDb25maWcuYWJzdHJhY3Q9ZmFsc2VdXG4gICAqIDxhIGlkPSdhYnN0cmFjdCc+PC9hPlxuICAgKiBBbiBhYnN0cmFjdCBzdGF0ZSB3aWxsIG5ldmVyIGJlIGRpcmVjdGx5IGFjdGl2YXRlZCxcbiAgICogICBidXQgY2FuIHByb3ZpZGUgaW5oZXJpdGVkIHByb3BlcnRpZXMgdG8gaXRzIGNvbW1vbiBjaGlsZHJlbiBzdGF0ZXMuXG4gICAqIDxwcmU+YWJzdHJhY3Q6IHRydWU8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbj19IHN0YXRlQ29uZmlnLm9uRW50ZXJcbiAgICogPGEgaWQ9J29uRW50ZXInPjwvYT5cbiAgICpcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIHdoZW4gYSBzdGF0ZSBpcyBlbnRlcmVkLiBHb29kIHdheVxuICAgKiAgIHRvIHRyaWdnZXIgYW4gYWN0aW9uIG9yIGRpc3BhdGNoIGFuIGV2ZW50LCBzdWNoIGFzIG9wZW5pbmcgYSBkaWFsb2cuXG4gICAqIElmIG1pbmlmeWluZyB5b3VyIHNjcmlwdHMsIG1ha2Ugc3VyZSB0byBleHBsaWNpdGx5IGFubm90YXRlIHRoaXMgZnVuY3Rpb24sXG4gICAqIGJlY2F1c2UgaXQgd29uJ3QgYmUgYXV0b21hdGljYWxseSBhbm5vdGF0ZWQgYnkgeW91ciBidWlsZCB0b29scy5cbiAgICpcbiAgICogPHByZT5vbkVudGVyOiBmdW5jdGlvbihNeVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgKiAgICAgTXlTZXJ2aWNlLmZvbygkc3RhdGVQYXJhbXMubXlQYXJhbSk7XG4gICAqIH08L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbj19IHN0YXRlQ29uZmlnLm9uRXhpdFxuICAgKiA8YSBpZD0nb25FeGl0Jz48L2E+XG4gICAqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZvciB3aGVuIGEgc3RhdGUgaXMgZXhpdGVkLiBHb29kIHdheSB0b1xuICAgKiAgIHRyaWdnZXIgYW4gYWN0aW9uIG9yIGRpc3BhdGNoIGFuIGV2ZW50LCBzdWNoIGFzIG9wZW5pbmcgYSBkaWFsb2cuXG4gICAqIElmIG1pbmlmeWluZyB5b3VyIHNjcmlwdHMsIG1ha2Ugc3VyZSB0byBleHBsaWNpdGx5IGFubm90YXRlIHRoaXMgZnVuY3Rpb24sXG4gICAqIGJlY2F1c2UgaXQgd29uJ3QgYmUgYXV0b21hdGljYWxseSBhbm5vdGF0ZWQgYnkgeW91ciBidWlsZCB0b29scy5cbiAgICpcbiAgICogPHByZT5vbkV4aXQ6IGZ1bmN0aW9uKE15U2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAqICAgICBNeVNlcnZpY2UuY2xlYW51cCgkc3RhdGVQYXJhbXMubXlQYXJhbSk7XG4gICAqIH08L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFuPX0gW3N0YXRlQ29uZmlnLnJlbG9hZE9uU2VhcmNoPXRydWVdXG4gICAqIDxhIGlkPSdyZWxvYWRPblNlYXJjaCc+PC9hPlxuICAgKlxuICAgKiBJZiBgZmFsc2VgLCB3aWxsIG5vdCByZXRyaWdnZXIgdGhlIHNhbWUgc3RhdGVcbiAgICogICBqdXN0IGJlY2F1c2UgYSBzZWFyY2gvcXVlcnkgcGFyYW1ldGVyIGhhcyBjaGFuZ2VkICh2aWEgJGxvY2F0aW9uLnNlYXJjaCgpIG9yICRsb2NhdGlvbi5oYXNoKCkpLiBcbiAgICogICBVc2VmdWwgZm9yIHdoZW4geW91J2QgbGlrZSB0byBtb2RpZnkgJGxvY2F0aW9uLnNlYXJjaCgpIHdpdGhvdXQgdHJpZ2dlcmluZyBhIHJlbG9hZC5cbiAgICogPHByZT5yZWxvYWRPblNlYXJjaDogZmFsc2U8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3Q9fSBzdGF0ZUNvbmZpZy5kYXRhXG4gICAqIDxhIGlkPSdkYXRhJz48L2E+XG4gICAqXG4gICAqIEFyYml0cmFyeSBkYXRhIG9iamVjdCwgdXNlZnVsIGZvciBjdXN0b20gY29uZmlndXJhdGlvbi4gIFRoZSBwYXJlbnQgc3RhdGUncyBgZGF0YWAgaXNcbiAgICogICBwcm90b3R5cGFsbHkgaW5oZXJpdGVkLiAgSW4gb3RoZXIgd29yZHMsIGFkZGluZyBhIGRhdGEgcHJvcGVydHkgdG8gYSBzdGF0ZSBhZGRzIGl0IHRvXG4gICAqICAgdGhlIGVudGlyZSBzdWJ0cmVlIHZpYSBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuICAgKlxuICAgKiA8cHJlPmRhdGE6IHtcbiAgICogICAgIHJlcXVpcmVkUm9sZTogJ2ZvbydcbiAgICogfSA8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3Q9fSBzdGF0ZUNvbmZpZy5wYXJhbXNcbiAgICogPGEgaWQ9J3BhcmFtcyc+PC9hPlxuICAgKlxuICAgKiBBIG1hcCB3aGljaCBvcHRpb25hbGx5IGNvbmZpZ3VyZXMgcGFyYW1ldGVycyBkZWNsYXJlZCBpbiB0aGUgYHVybGAsIG9yXG4gICAqICAgZGVmaW5lcyBhZGRpdGlvbmFsIG5vbi11cmwgcGFyYW1ldGVycy4gIEZvciBlYWNoIHBhcmFtZXRlciBiZWluZ1xuICAgKiAgIGNvbmZpZ3VyZWQsIGFkZCBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGtleWVkIHRvIHRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAqXG4gICAqICAgRWFjaCBwYXJhbWV0ZXIgY29uZmlndXJhdGlvbiBvYmplY3QgbWF5IGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgKlxuICAgKiAgIC0gKiogdmFsdWUgKiogLSB7b2JqZWN0fGZ1bmN0aW9uPX06IHNwZWNpZmllcyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpc1xuICAgKiAgICAgcGFyYW1ldGVyLiAgVGhpcyBpbXBsaWNpdGx5IHNldHMgdGhpcyBwYXJhbWV0ZXIgYXMgb3B0aW9uYWwuXG4gICAqXG4gICAqICAgICBXaGVuIFVJLVJvdXRlciByb3V0ZXMgdG8gYSBzdGF0ZSBhbmQgbm8gdmFsdWUgaXNcbiAgICogICAgIHNwZWNpZmllZCBmb3IgdGhpcyBwYXJhbWV0ZXIgaW4gdGhlIFVSTCBvciB0cmFuc2l0aW9uLCB0aGVcbiAgICogICAgIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIGluc3RlYWQuICBJZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sXG4gICAqICAgICBpdCB3aWxsIGJlIGluamVjdGVkIGFuZCBpbnZva2VkLCBhbmQgdGhlIHJldHVybiB2YWx1ZSB1c2VkLlxuICAgKlxuICAgKiAgICAgKk5vdGUqOiBgdW5kZWZpbmVkYCBpcyB0cmVhdGVkIGFzIFwibm8gZGVmYXVsdCB2YWx1ZVwiIHdoaWxlIGBudWxsYFxuICAgKiAgICAgaXMgdHJlYXRlZCBhcyBcInRoZSBkZWZhdWx0IHZhbHVlIGlzIGBudWxsYFwiLlxuICAgKlxuICAgKiAgICAgKlNob3J0aGFuZCo6IElmIHlvdSBvbmx5IG5lZWQgdG8gY29uZmlndXJlIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZVxuICAgKiAgICAgcGFyYW1ldGVyLCB5b3UgbWF5IHVzZSBhIHNob3J0aGFuZCBzeW50YXguICAgSW4gdGhlICoqYHBhcmFtc2AqKlxuICAgKiAgICAgbWFwLCBpbnN0ZWFkIG1hcHBpbmcgdGhlIHBhcmFtIG5hbWUgdG8gYSBmdWxsIHBhcmFtZXRlciBjb25maWd1cmF0aW9uXG4gICAqICAgICBvYmplY3QsIHNpbXBseSBzZXQgbWFwIGl0IHRvIHRoZSBkZWZhdWx0IHBhcmFtZXRlciB2YWx1ZSwgZS5nLjpcbiAgICpcbiAgICogPHByZT4vLyBkZWZpbmUgYSBwYXJhbWV0ZXIncyBkZWZhdWx0IHZhbHVlXG4gICAqIHBhcmFtczoge1xuICAgKiAgICAgcGFyYW0xOiB7IHZhbHVlOiBcImRlZmF1bHRWYWx1ZVwiIH1cbiAgICogfVxuICAgKiAvLyBzaG9ydGhhbmQgZGVmYXVsdCB2YWx1ZXNcbiAgICogcGFyYW1zOiB7XG4gICAqICAgICBwYXJhbTE6IFwiZGVmYXVsdFZhbHVlXCIsXG4gICAqICAgICBwYXJhbTI6IFwicGFyYW0yRGVmYXVsdFwiXG4gICAqIH08L3ByZT5cbiAgICpcbiAgICogICAtICoqIGFycmF5ICoqIC0ge2Jvb2xlYW49fTogKihkZWZhdWx0OiBmYWxzZSkqIElmIHRydWUsIHRoZSBwYXJhbSB2YWx1ZSB3aWxsIGJlXG4gICAqICAgICB0cmVhdGVkIGFzIGFuIGFycmF5IG9mIHZhbHVlcy4gIElmIHlvdSBzcGVjaWZpZWQgYSBUeXBlLCB0aGUgdmFsdWUgd2lsbCBiZVxuICAgKiAgICAgdHJlYXRlZCBhcyBhbiBhcnJheSBvZiB0aGUgc3BlY2lmaWVkIFR5cGUuICBOb3RlOiBxdWVyeSBwYXJhbWV0ZXIgdmFsdWVzXG4gICAqICAgICBkZWZhdWx0IHRvIGEgc3BlY2lhbCBgXCJhdXRvXCJgIG1vZGUuXG4gICAqXG4gICAqICAgICBGb3IgcXVlcnkgcGFyYW1ldGVycyBpbiBgXCJhdXRvXCJgIG1vZGUsIGlmIG11bHRpcGxlICB2YWx1ZXMgZm9yIGEgc2luZ2xlIHBhcmFtZXRlclxuICAgKiAgICAgYXJlIHByZXNlbnQgaW4gdGhlIFVSTCAoZS5nLjogYC9mb28/YmFyPTEmYmFyPTImYmFyPTNgKSB0aGVuIHRoZSB2YWx1ZXNcbiAgICogICAgIGFyZSBtYXBwZWQgdG8gYW4gYXJyYXkgKGUuZy46IGB7IGZvbzogWyAnMScsICcyJywgJzMnIF0gfWApLiAgSG93ZXZlciwgaWZcbiAgICogICAgIG9ubHkgb25lIHZhbHVlIGlzIHByZXNlbnQgKGUuZy46IGAvZm9vP2Jhcj0xYCkgdGhlbiB0aGUgdmFsdWUgaXMgdHJlYXRlZCBhcyBzaW5nbGVcbiAgICogICAgIHZhbHVlIChlLmcuOiBgeyBmb286ICcxJyB9YCkuXG4gICAqXG4gICAqIDxwcmU+cGFyYW1zOiB7XG4gICAqICAgICBwYXJhbTE6IHsgYXJyYXk6IHRydWUgfVxuICAgKiB9PC9wcmU+XG4gICAqXG4gICAqICAgLSAqKiBzcXVhc2ggKiogLSB7Ym9vbHxzdHJpbmc9fTogYHNxdWFzaGAgY29uZmlndXJlcyBob3cgYSBkZWZhdWx0IHBhcmFtZXRlciB2YWx1ZSBpcyByZXByZXNlbnRlZCBpbiB0aGUgVVJMIHdoZW5cbiAgICogICAgIHRoZSBjdXJyZW50IHBhcmFtZXRlciB2YWx1ZSBpcyB0aGUgc2FtZSBhcyB0aGUgZGVmYXVsdCB2YWx1ZS4gSWYgYHNxdWFzaGAgaXMgbm90IHNldCwgaXQgdXNlcyB0aGVcbiAgICogICAgIGNvbmZpZ3VyZWQgZGVmYXVsdCBzcXVhc2ggcG9saWN5LlxuICAgKiAgICAgKFNlZSB7QGxpbmsgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5I21ldGhvZHNfZGVmYXVsdFNxdWFzaFBvbGljeSBgZGVmYXVsdFNxdWFzaFBvbGljeSgpYH0pXG4gICAqXG4gICAqICAgVGhlcmUgYXJlIHRocmVlIHNxdWFzaCBzZXR0aW5nczpcbiAgICpcbiAgICogICAgIC0gZmFsc2U6IFRoZSBwYXJhbWV0ZXIncyBkZWZhdWx0IHZhbHVlIGlzIG5vdCBzcXVhc2hlZC4gIEl0IGlzIGVuY29kZWQgYW5kIGluY2x1ZGVkIGluIHRoZSBVUkxcbiAgICogICAgIC0gdHJ1ZTogVGhlIHBhcmFtZXRlcidzIGRlZmF1bHQgdmFsdWUgaXMgb21pdHRlZCBmcm9tIHRoZSBVUkwuICBJZiB0aGUgcGFyYW1ldGVyIGlzIHByZWNlZWRlZCBhbmQgZm9sbG93ZWRcbiAgICogICAgICAgYnkgc2xhc2hlcyBpbiB0aGUgc3RhdGUncyBgdXJsYCBkZWNsYXJhdGlvbiwgdGhlbiBvbmUgb2YgdGhvc2Ugc2xhc2hlcyBhcmUgb21pdHRlZC5cbiAgICogICAgICAgVGhpcyBjYW4gYWxsb3cgZm9yIGNsZWFuZXIgbG9va2luZyBVUkxzLlxuICAgKiAgICAgLSBgXCI8YXJiaXRyYXJ5IHN0cmluZz5cImA6IFRoZSBwYXJhbWV0ZXIncyBkZWZhdWx0IHZhbHVlIGlzIHJlcGxhY2VkIHdpdGggYW4gYXJiaXRyYXJ5IHBsYWNlaG9sZGVyIG9mICB5b3VyIGNob2ljZS5cbiAgICpcbiAgICogPHByZT5wYXJhbXM6IHtcbiAgICogICAgIHBhcmFtMToge1xuICAgKiAgICAgICB2YWx1ZTogXCJkZWZhdWx0SWRcIixcbiAgICogICAgICAgc3F1YXNoOiB0cnVlXG4gICAqIH0gfVxuICAgKiAvLyBzcXVhc2ggXCJkZWZhdWx0VmFsdWVcIiB0byBcIn5cIlxuICAgKiBwYXJhbXM6IHtcbiAgICogICAgIHBhcmFtMToge1xuICAgKiAgICAgICB2YWx1ZTogXCJkZWZhdWx0VmFsdWVcIixcbiAgICogICAgICAgc3F1YXNoOiBcIn5cIlxuICAgKiB9IH1cbiAgICogPC9wcmU+XG4gICAqXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDxwcmU+XG4gICAqIC8vIFNvbWUgc3RhdGUgbmFtZSBleGFtcGxlc1xuICAgKlxuICAgKiAvLyBzdGF0ZU5hbWUgY2FuIGJlIGEgc2luZ2xlIHRvcC1sZXZlbCBuYW1lIChtdXN0IGJlIHVuaXF1ZSkuXG4gICAqICRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiaG9tZVwiLCB7fSk7XG4gICAqXG4gICAqIC8vIE9yIGl0IGNhbiBiZSBhIG5lc3RlZCBzdGF0ZSBuYW1lLiBUaGlzIHN0YXRlIGlzIGEgY2hpbGQgb2YgdGhlXG4gICAqIC8vIGFib3ZlIFwiaG9tZVwiIHN0YXRlLlxuICAgKiAkc3RhdGVQcm92aWRlci5zdGF0ZShcImhvbWUubmV3ZXN0XCIsIHt9KTtcbiAgICpcbiAgICogLy8gTmVzdCBzdGF0ZXMgYXMgZGVlcGx5IGFzIG5lZWRlZC5cbiAgICogJHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJob21lLm5ld2VzdC5hYmMueHl6LmluY2VwdGlvblwiLCB7fSk7XG4gICAqXG4gICAqIC8vIHN0YXRlKCkgcmV0dXJucyAkc3RhdGVQcm92aWRlciwgc28geW91IGNhbiBjaGFpbiBzdGF0ZSBkZWNsYXJhdGlvbnMuXG4gICAqICRzdGF0ZVByb3ZpZGVyXG4gICAqICAgLnN0YXRlKFwiaG9tZVwiLCB7fSlcbiAgICogICAuc3RhdGUoXCJhYm91dFwiLCB7fSlcbiAgICogICAuc3RhdGUoXCJjb250YWN0c1wiLCB7fSk7XG4gICAqIDwvcHJlPlxuICAgKlxuICAgKi9cbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICBmdW5jdGlvbiBzdGF0ZShuYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4gICAgaWYgKGlzT2JqZWN0KG5hbWUpKSBkZWZpbml0aW9uID0gbmFtZTtcbiAgICBlbHNlIGRlZmluaXRpb24ubmFtZSA9IG5hbWU7XG4gICAgcmVnaXN0ZXJTdGF0ZShkZWZpbml0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmdkb2Mgb2JqZWN0XG4gICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAgICpcbiAgICogQHJlcXVpcmVzICRyb290U2NvcGVcbiAgICogQHJlcXVpcmVzICRxXG4gICAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUuJHZpZXdcbiAgICogQHJlcXVpcmVzICRpbmplY3RvclxuICAgKiBAcmVxdWlyZXMgdWkucm91dGVyLnV0aWwuJHJlc29sdmVcbiAgICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQYXJhbXNcbiAgICogQHJlcXVpcmVzIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclxuICAgKlxuICAgKiBAcHJvcGVydHkge29iamVjdH0gcGFyYW1zIEEgcGFyYW0gb2JqZWN0LCBlLmcuIHtzZWN0aW9uSWQ6IHNlY3Rpb24uaWQpfSwgdGhhdCBcbiAgICogeW91J2QgbGlrZSB0byB0ZXN0IGFnYWluc3QgdGhlIGN1cnJlbnQgYWN0aXZlIHN0YXRlLlxuICAgKiBAcHJvcGVydHkge29iamVjdH0gY3VycmVudCBBIHJlZmVyZW5jZSB0byB0aGUgc3RhdGUncyBjb25maWcgb2JqZWN0LiBIb3dldmVyIFxuICAgKiB5b3UgcGFzc2VkIGl0IGluLiBVc2VmdWwgZm9yIGFjY2Vzc2luZyBjdXN0b20gZGF0YS5cbiAgICogQHByb3BlcnR5IHtvYmplY3R9IHRyYW5zaXRpb24gQ3VycmVudGx5IHBlbmRpbmcgdHJhbnNpdGlvbi4gQSBwcm9taXNlIHRoYXQnbGwgXG4gICAqIHJlc29sdmUgb3IgcmVqZWN0LlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogYCRzdGF0ZWAgc2VydmljZSBpcyByZXNwb25zaWJsZSBmb3IgcmVwcmVzZW50aW5nIHN0YXRlcyBhcyB3ZWxsIGFzIHRyYW5zaXRpb25pbmdcbiAgICogYmV0d2VlbiB0aGVtLiBJdCBhbHNvIHByb3ZpZGVzIGludGVyZmFjZXMgdG8gYXNrIGZvciBjdXJyZW50IHN0YXRlIG9yIGV2ZW4gc3RhdGVzXG4gICAqIHlvdSdyZSBjb21pbmcgZnJvbS5cbiAgICovXG4gIHRoaXMuJGdldCA9ICRnZXQ7XG4gICRnZXQuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckcScsICckdmlldycsICckaW5qZWN0b3InLCAnJHJlc29sdmUnLCAnJHN0YXRlUGFyYW1zJywgJyR1cmxSb3V0ZXInLCAnJGxvY2F0aW9uJywgJyR1cmxNYXRjaGVyRmFjdG9yeSddO1xuICBmdW5jdGlvbiAkZ2V0KCAgICRyb290U2NvcGUsICAgJHEsICAgJHZpZXcsICAgJGluamVjdG9yLCAgICRyZXNvbHZlLCAgICRzdGF0ZVBhcmFtcywgICAkdXJsUm91dGVyLCAgICRsb2NhdGlvbiwgICAkdXJsTWF0Y2hlckZhY3RvcnkpIHtcblxuICAgIHZhciBUcmFuc2l0aW9uU3VwZXJzZWRlZEVycm9yID0gbmV3IEVycm9yKCd0cmFuc2l0aW9uIHN1cGVyc2VkZWQnKTtcblxuICAgIHZhciBUcmFuc2l0aW9uU3VwZXJzZWRlZCA9IHNpbGVuY2VVbmNhdWdodEluUHJvbWlzZSgkcS5yZWplY3QoVHJhbnNpdGlvblN1cGVyc2VkZWRFcnJvcikpO1xuICAgIHZhciBUcmFuc2l0aW9uUHJldmVudGVkID0gc2lsZW5jZVVuY2F1Z2h0SW5Qcm9taXNlKCRxLnJlamVjdChuZXcgRXJyb3IoJ3RyYW5zaXRpb24gcHJldmVudGVkJykpKTtcbiAgICB2YXIgVHJhbnNpdGlvbkFib3J0ZWQgPSBzaWxlbmNlVW5jYXVnaHRJblByb21pc2UoJHEucmVqZWN0KG5ldyBFcnJvcigndHJhbnNpdGlvbiBhYm9ydGVkJykpKTtcbiAgICB2YXIgVHJhbnNpdGlvbkZhaWxlZCA9IHNpbGVuY2VVbmNhdWdodEluUHJvbWlzZSgkcS5yZWplY3QobmV3IEVycm9yKCd0cmFuc2l0aW9uIGZhaWxlZCcpKSk7XG5cbiAgICAvLyBIYW5kbGVzIHRoZSBjYXNlIHdoZXJlIGEgc3RhdGUgd2hpY2ggaXMgdGhlIHRhcmdldCBvZiBhIHRyYW5zaXRpb24gaXMgbm90IGZvdW5kLCBhbmQgdGhlIHVzZXJcbiAgICAvLyBjYW4gb3B0aW9uYWxseSByZXRyeSBvciBkZWZlciB0aGUgdHJhbnNpdGlvblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlZGlyZWN0KHJlZGlyZWN0LCBzdGF0ZSwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBuZ2RvYyBldmVudFxuICAgICAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSMkc3RhdGVOb3RGb3VuZFxuICAgICAgICogQGV2ZW50T2YgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICAgICAgICogQGV2ZW50VHlwZSBicm9hZGNhc3Qgb24gcm9vdCBzY29wZVxuICAgICAgICogQGRlc2NyaXB0aW9uXG4gICAgICAgKiBGaXJlZCB3aGVuIGEgcmVxdWVzdGVkIHN0YXRlICoqY2Fubm90IGJlIGZvdW5kKiogdXNpbmcgdGhlIHByb3ZpZGVkIHN0YXRlIG5hbWUgZHVyaW5nIHRyYW5zaXRpb24uXG4gICAgICAgKiBUaGUgZXZlbnQgaXMgYnJvYWRjYXN0IGFsbG93aW5nIGFueSBoYW5kbGVycyBhIHNpbmdsZSBjaGFuY2UgdG8gZGVhbCB3aXRoIHRoZSBlcnJvciAodXN1YWxseSBieVxuICAgICAgICogbGF6eS1sb2FkaW5nIHRoZSB1bmZvdW5kIHN0YXRlKS4gQSBzcGVjaWFsIGB1bmZvdW5kU3RhdGVgIG9iamVjdCBpcyBwYXNzZWQgdG8gdGhlIGxpc3RlbmVyIGhhbmRsZXIsXG4gICAgICAgKiB5b3UgY2FuIHNlZSBpdHMgdGhyZWUgcHJvcGVydGllcyBpbiB0aGUgZXhhbXBsZS4gWW91IGNhbiB1c2UgYGV2ZW50LnByZXZlbnREZWZhdWx0KClgIHRvIGFib3J0IHRoZVxuICAgICAgICogdHJhbnNpdGlvbiBhbmQgdGhlIHByb21pc2UgcmV0dXJuZWQgZnJvbSBgZ29gIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCBhIGAndHJhbnNpdGlvbiBhYm9ydGVkJ2AgdmFsdWUuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50IG9iamVjdC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bmZvdW5kU3RhdGUgVW5mb3VuZCBTdGF0ZSBpbmZvcm1hdGlvbi4gQ29udGFpbnM6IGB0bywgdG9QYXJhbXMsIG9wdGlvbnNgIHByb3BlcnRpZXMuXG4gICAgICAgKiBAcGFyYW0ge1N0YXRlfSBmcm9tU3RhdGUgQ3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZnJvbVBhcmFtcyBDdXJyZW50IHN0YXRlIHBhcmFtcy5cbiAgICAgICAqXG4gICAgICAgKiBAZXhhbXBsZVxuICAgICAgICpcbiAgICAgICAqIDxwcmU+XG4gICAgICAgKiAvLyBzb21ld2hlcmUsIGFzc3VtZSBsYXp5LnN0YXRlIGhhcyBub3QgYmVlbiBkZWZpbmVkXG4gICAgICAgKiAkc3RhdGUuZ28oXCJsYXp5LnN0YXRlXCIsIHthOjEsIGI6Mn0sIHtpbmhlcml0OmZhbHNlfSk7XG4gICAgICAgKlxuICAgICAgICogLy8gc29tZXdoZXJlIGVsc2VcbiAgICAgICAqICRzY29wZS4kb24oJyRzdGF0ZU5vdEZvdW5kJyxcbiAgICAgICAqIGZ1bmN0aW9uKGV2ZW50LCB1bmZvdW5kU3RhdGUsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcyl7XG4gICAgICAgKiAgICAgY29uc29sZS5sb2codW5mb3VuZFN0YXRlLnRvKTsgLy8gXCJsYXp5LnN0YXRlXCJcbiAgICAgICAqICAgICBjb25zb2xlLmxvZyh1bmZvdW5kU3RhdGUudG9QYXJhbXMpOyAvLyB7YToxLCBiOjJ9XG4gICAgICAgKiAgICAgY29uc29sZS5sb2codW5mb3VuZFN0YXRlLm9wdGlvbnMpOyAvLyB7aW5oZXJpdDpmYWxzZX0gKyBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAqIH0pXG4gICAgICAgKiA8L3ByZT5cbiAgICAgICAqL1xuICAgICAgdmFyIGV2dCA9ICRyb290U2NvcGUuJGJyb2FkY2FzdCgnJHN0YXRlTm90Rm91bmQnLCByZWRpcmVjdCwgc3RhdGUsIHBhcmFtcyk7XG5cbiAgICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAkdXJsUm91dGVyLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gVHJhbnNpdGlvbkFib3J0ZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghZXZ0LnJldHJ5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBBbGxvdyB0aGUgaGFuZGxlciB0byByZXR1cm4gYSBwcm9taXNlIHRvIGRlZmVyIHN0YXRlIGxvb2t1cCByZXRyeVxuICAgICAgaWYgKG9wdGlvbnMuJHJldHJ5KSB7XG4gICAgICAgICR1cmxSb3V0ZXIudXBkYXRlKCk7XG4gICAgICAgIHJldHVybiBUcmFuc2l0aW9uRmFpbGVkO1xuICAgICAgfVxuICAgICAgdmFyIHJldHJ5VHJhbnNpdGlvbiA9ICRzdGF0ZS50cmFuc2l0aW9uID0gJHEud2hlbihldnQucmV0cnkpO1xuXG4gICAgICByZXRyeVRyYW5zaXRpb24udGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHJldHJ5VHJhbnNpdGlvbiAhPT0gJHN0YXRlLnRyYW5zaXRpb24pIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRzdGF0ZUNoYW5nZUNhbmNlbCcsIHJlZGlyZWN0LnRvLCByZWRpcmVjdC50b1BhcmFtcywgc3RhdGUsIHBhcmFtcyk7XG4gICAgICAgICAgcmV0dXJuIFRyYW5zaXRpb25TdXBlcnNlZGVkO1xuICAgICAgICB9XG4gICAgICAgIHJlZGlyZWN0Lm9wdGlvbnMuJHJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICRzdGF0ZS50cmFuc2l0aW9uVG8ocmVkaXJlY3QudG8sIHJlZGlyZWN0LnRvUGFyYW1zLCByZWRpcmVjdC5vcHRpb25zKTtcbiAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gVHJhbnNpdGlvbkFib3J0ZWQ7XG4gICAgICB9KTtcbiAgICAgICR1cmxSb3V0ZXIudXBkYXRlKCk7XG5cbiAgICAgIHJldHVybiByZXRyeVRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgcm9vdC5sb2NhbHMgPSB7IHJlc29sdmU6IG51bGwsIGdsb2JhbHM6IHsgJHN0YXRlUGFyYW1zOiB7fSB9IH07XG5cbiAgICAkc3RhdGUgPSB7XG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgY3VycmVudDogcm9vdC5zZWxmLFxuICAgICAgJGN1cnJlbnQ6IHJvb3QsXG4gICAgICB0cmFuc2l0aW9uOiBudWxsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjcmVsb2FkXG4gICAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAgICAgKlxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIEEgbWV0aG9kIHRoYXQgZm9yY2UgcmVsb2FkcyB0aGUgY3VycmVudCBzdGF0ZS4gQWxsIHJlc29sdmVzIGFyZSByZS1yZXNvbHZlZCxcbiAgICAgKiBjb250cm9sbGVycyByZWluc3RhbnRpYXRlZCwgYW5kIGV2ZW50cyByZS1maXJlZC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogPHByZT5cbiAgICAgKiB2YXIgYXBwIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlciddKTtcbiAgICAgKlxuICAgICAqIGFwcC5jb250cm9sbGVyKCdjdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICogICAkc2NvcGUucmVsb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgKiAgICAgJHN0YXRlLnJlbG9hZCgpO1xuICAgICAqICAgfVxuICAgICAqIH0pO1xuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogYHJlbG9hZCgpYCBpcyBqdXN0IGFuIGFsaWFzIGZvcjpcbiAgICAgKiA8cHJlPlxuICAgICAqICRzdGF0ZS50cmFuc2l0aW9uVG8oJHN0YXRlLmN1cnJlbnQsICRzdGF0ZVBhcmFtcywgeyBcbiAgICAgKiAgIHJlbG9hZDogdHJ1ZSwgaW5oZXJpdDogZmFsc2UsIG5vdGlmeTogdHJ1ZVxuICAgICAqIH0pO1xuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fG9iamVjdD19IHN0YXRlIC0gQSBzdGF0ZSBuYW1lIG9yIGEgc3RhdGUgb2JqZWN0LCB3aGljaCBpcyB0aGUgcm9vdCBvZiB0aGUgcmVzb2x2ZXMgdG8gYmUgcmUtcmVzb2x2ZWQuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiA8cHJlPlxuICAgICAqIC8vYXNzdW1pbmcgYXBwIGFwcGxpY2F0aW9uIGNvbnNpc3RzIG9mIDMgc3RhdGVzOiAnY29udGFjdHMnLCAnY29udGFjdHMuZGV0YWlsJywgJ2NvbnRhY3RzLmRldGFpbC5pdGVtJyBcbiAgICAgKiAvL2FuZCBjdXJyZW50IHN0YXRlIGlzICdjb250YWN0cy5kZXRhaWwuaXRlbSdcbiAgICAgKiB2YXIgYXBwIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlciddKTtcbiAgICAgKlxuICAgICAqIGFwcC5jb250cm9sbGVyKCdjdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICogICAkc2NvcGUucmVsb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgKiAgICAgLy93aWxsIHJlbG9hZCAnY29udGFjdC5kZXRhaWwnIGFuZCAnY29udGFjdC5kZXRhaWwuaXRlbScgc3RhdGVzXG4gICAgICogICAgICRzdGF0ZS5yZWxvYWQoJ2NvbnRhY3QuZGV0YWlsJyk7XG4gICAgICogICB9XG4gICAgICogfSk7XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBgcmVsb2FkKClgIGlzIGp1c3QgYW4gYWxpYXMgZm9yOlxuICAgICAqIDxwcmU+XG4gICAgICogJHN0YXRlLnRyYW5zaXRpb25Ubygkc3RhdGUuY3VycmVudCwgJHN0YXRlUGFyYW1zLCB7IFxuICAgICAqICAgcmVsb2FkOiB0cnVlLCBpbmhlcml0OiBmYWxzZSwgbm90aWZ5OiB0cnVlXG4gICAgICogfSk7XG4gICAgICogPC9wcmU+XG5cbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX0gQSBwcm9taXNlIHJlcHJlc2VudGluZyB0aGUgc3RhdGUgb2YgdGhlIG5ldyB0cmFuc2l0aW9uLiBTZWVcbiAgICAgKiB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2dvICRzdGF0ZS5nb30uXG4gICAgICovXG4gICAgJHN0YXRlLnJlbG9hZCA9IGZ1bmN0aW9uIHJlbG9hZChzdGF0ZSkge1xuICAgICAgcmV0dXJuICRzdGF0ZS50cmFuc2l0aW9uVG8oJHN0YXRlLmN1cnJlbnQsICRzdGF0ZVBhcmFtcywgeyByZWxvYWQ6IHN0YXRlIHx8IHRydWUsIGluaGVyaXQ6IGZhbHNlLCBub3RpZnk6IHRydWV9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNnb1xuICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIHRyYW5zaXRpb25pbmcgdG8gYSBuZXcgc3RhdGUuIGAkc3RhdGUuZ29gIGNhbGxzIFxuICAgICAqIGAkc3RhdGUudHJhbnNpdGlvblRvYCBpbnRlcm5hbGx5IGJ1dCBhdXRvbWF0aWNhbGx5IHNldHMgb3B0aW9ucyB0byBcbiAgICAgKiBgeyBsb2NhdGlvbjogdHJ1ZSwgaW5oZXJpdDogdHJ1ZSwgcmVsYXRpdmU6ICRzdGF0ZS4kY3VycmVudCwgbm90aWZ5OiB0cnVlIH1gLiBcbiAgICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gZWFzaWx5IHVzZSBhbiBhYnNvbHV0ZSBvciByZWxhdGl2ZSB0byBwYXRoIGFuZCBzcGVjaWZ5IFxuICAgICAqIG9ubHkgdGhlIHBhcmFtZXRlcnMgeW91J2QgbGlrZSB0byB1cGRhdGUgKHdoaWxlIGxldHRpbmcgdW5zcGVjaWZpZWQgcGFyYW1ldGVycyBcbiAgICAgKiBpbmhlcml0IGZyb20gdGhlIGN1cnJlbnRseSBhY3RpdmUgYW5jZXN0b3Igc3RhdGVzKS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogPHByZT5cbiAgICAgKiB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJ10pO1xuICAgICAqXG4gICAgICogYXBwLmNvbnRyb2xsZXIoJ2N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUpIHtcbiAgICAgKiAgICRzY29wZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgJHN0YXRlLmdvKCdjb250YWN0LmRldGFpbCcpO1xuICAgICAqICAgfTtcbiAgICAgKiB9KTtcbiAgICAgKiA8L3ByZT5cbiAgICAgKiA8aW1nIHNyYz0nLi4vbmdkb2NfYXNzZXRzL1N0YXRlR29FeGFtcGxlcy5wbmcnLz5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0byBBYnNvbHV0ZSBzdGF0ZSBuYW1lIG9yIHJlbGF0aXZlIHN0YXRlIHBhdGguIFNvbWUgZXhhbXBsZXM6XG4gICAgICpcbiAgICAgKiAtIGAkc3RhdGUuZ28oJ2NvbnRhY3QuZGV0YWlsJylgIC0gd2lsbCBnbyB0byB0aGUgYGNvbnRhY3QuZGV0YWlsYCBzdGF0ZVxuICAgICAqIC0gYCRzdGF0ZS5nbygnXicpYCAtIHdpbGwgZ28gdG8gYSBwYXJlbnQgc3RhdGVcbiAgICAgKiAtIGAkc3RhdGUuZ28oJ14uc2libGluZycpYCAtIHdpbGwgZ28gdG8gYSBzaWJsaW5nIHN0YXRlXG4gICAgICogLSBgJHN0YXRlLmdvKCcuY2hpbGQuZ3JhbmRjaGlsZCcpYCAtIHdpbGwgZ28gdG8gZ3JhbmRjaGlsZCBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3Q9fSBwYXJhbXMgQSBtYXAgb2YgdGhlIHBhcmFtZXRlcnMgdGhhdCB3aWxsIGJlIHNlbnQgdG8gdGhlIHN0YXRlLCBcbiAgICAgKiB3aWxsIHBvcHVsYXRlICRzdGF0ZVBhcmFtcy4gQW55IHBhcmFtZXRlcnMgdGhhdCBhcmUgbm90IHNwZWNpZmllZCB3aWxsIGJlIGluaGVyaXRlZCBmcm9tIGN1cnJlbnRseSBcbiAgICAgKiBkZWZpbmVkIHBhcmFtZXRlcnMuIE9ubHkgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gdGhlIHN0YXRlIGRlZmluaXRpb24gY2FuIGJlIG92ZXJyaWRkZW4sIG5ldyBcbiAgICAgKiBwYXJhbWV0ZXJzIHdpbGwgYmUgaWdub3JlZC4gVGhpcyBhbGxvd3MsIGZvciBleGFtcGxlLCBnb2luZyB0byBhIHNpYmxpbmcgc3RhdGUgdGhhdCBzaGFyZXMgcGFyYW1ldGVyc1xuICAgICAqIHNwZWNpZmllZCBpbiBhIHBhcmVudCBzdGF0ZS4gUGFyYW1ldGVyIGluaGVyaXRhbmNlIG9ubHkgd29ya3MgYmV0d2VlbiBjb21tb24gYW5jZXN0b3Igc3RhdGVzLCBJLmUuXG4gICAgICogdHJhbnNpdGlvbmluZyB0byBhIHNpYmxpbmcgd2lsbCBnZXQgeW91IHRoZSBwYXJhbWV0ZXJzIGZvciBhbGwgcGFyZW50cywgdHJhbnNpdGlvbmluZyB0byBhIGNoaWxkXG4gICAgICogd2lsbCBnZXQgeW91IGFsbCBjdXJyZW50IHBhcmFtZXRlcnMsIGV0Yy5cbiAgICAgKiBAcGFyYW0ge29iamVjdD19IG9wdGlvbnMgT3B0aW9ucyBvYmplY3QuIFRoZSBvcHRpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gKipgbG9jYXRpb25gKiogLSB7Ym9vbGVhbj10cnVlfHN0cmluZz19IC0gSWYgYHRydWVgIHdpbGwgdXBkYXRlIHRoZSB1cmwgaW4gdGhlIGxvY2F0aW9uIGJhciwgaWYgYGZhbHNlYFxuICAgICAqICAgIHdpbGwgbm90LiBJZiBzdHJpbmcsIG11c3QgYmUgYFwicmVwbGFjZVwiYCwgd2hpY2ggd2lsbCB1cGRhdGUgdXJsIGFuZCBhbHNvIHJlcGxhY2UgbGFzdCBoaXN0b3J5IHJlY29yZC5cbiAgICAgKiAtICoqYGluaGVyaXRgKiogLSB7Ym9vbGVhbj10cnVlfSwgSWYgYHRydWVgIHdpbGwgaW5oZXJpdCB1cmwgcGFyYW1ldGVycyBmcm9tIGN1cnJlbnQgdXJsLlxuICAgICAqIC0gKipgcmVsYXRpdmVgKiogLSB7b2JqZWN0PSRzdGF0ZS4kY3VycmVudH0sIFdoZW4gdHJhbnNpdGlvbmluZyB3aXRoIHJlbGF0aXZlIHBhdGggKGUuZyAnXicpLCBcbiAgICAgKiAgICBkZWZpbmVzIHdoaWNoIHN0YXRlIHRvIGJlIHJlbGF0aXZlIGZyb20uXG4gICAgICogLSAqKmBub3RpZnlgKiogLSB7Ym9vbGVhbj10cnVlfSwgSWYgYHRydWVgIHdpbGwgYnJvYWRjYXN0ICRzdGF0ZUNoYW5nZVN0YXJ0IGFuZCAkc3RhdGVDaGFuZ2VTdWNjZXNzIGV2ZW50cy5cbiAgICAgKiAtICoqYHJlbG9hZGAqKiAodjAuMi41KSAtIHtib29sZWFuPWZhbHNlfHN0cmluZ3xvYmplY3R9LCBJZiBgdHJ1ZWAgd2lsbCBmb3JjZSB0cmFuc2l0aW9uIGV2ZW4gaWYgbm8gc3RhdGUgb3IgcGFyYW1zXG4gICAgICogICAgaGF2ZSBjaGFuZ2VkLiAgSXQgd2lsbCByZWxvYWQgdGhlIHJlc29sdmVzIGFuZCB2aWV3cyBvZiB0aGUgY3VycmVudCBzdGF0ZSBhbmQgcGFyZW50IHN0YXRlcy5cbiAgICAgKiAgICBJZiBgcmVsb2FkYCBpcyBhIHN0cmluZyAob3Igc3RhdGUgb2JqZWN0KSwgdGhlIHN0YXRlIG9iamVjdCBpcyBmZXRjaGVkIChieSBuYW1lLCBvciBvYmplY3QgcmVmZXJlbmNlKTsgYW5kIFxcXG4gICAgICogICAgdGhlIHRyYW5zaXRpb24gcmVsb2FkcyB0aGUgcmVzb2x2ZXMgYW5kIHZpZXdzIGZvciB0aGF0IG1hdGNoZWQgc3RhdGUsIGFuZCBhbGwgaXRzIGNoaWxkcmVuIHN0YXRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtwcm9taXNlfSBBIHByb21pc2UgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBvZiB0aGUgbmV3IHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSBzdWNjZXNzIHZhbHVlczpcbiAgICAgKlxuICAgICAqIC0gJHN0YXRlLmN1cnJlbnRcbiAgICAgKlxuICAgICAqIDxici8+UG9zc2libGUgcmVqZWN0aW9uIHZhbHVlczpcbiAgICAgKlxuICAgICAqIC0gJ3RyYW5zaXRpb24gc3VwZXJzZWRlZCcgLSB3aGVuIGEgbmV3ZXIgdHJhbnNpdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFmdGVyIHRoaXMgb25lXG4gICAgICogLSAndHJhbnNpdGlvbiBwcmV2ZW50ZWQnIC0gd2hlbiBgZXZlbnQucHJldmVudERlZmF1bHQoKWAgaGFzIGJlZW4gY2FsbGVkIGluIGEgYCRzdGF0ZUNoYW5nZVN0YXJ0YCBsaXN0ZW5lclxuICAgICAqIC0gJ3RyYW5zaXRpb24gYWJvcnRlZCcgLSB3aGVuIGBldmVudC5wcmV2ZW50RGVmYXVsdCgpYCBoYXMgYmVlbiBjYWxsZWQgaW4gYSBgJHN0YXRlTm90Rm91bmRgIGxpc3RlbmVyIG9yXG4gICAgICogICB3aGVuIGEgYCRzdGF0ZU5vdEZvdW5kYCBgZXZlbnQucmV0cnlgIHByb21pc2UgZXJyb3JzLlxuICAgICAqIC0gJ3RyYW5zaXRpb24gZmFpbGVkJyAtIHdoZW4gYSBzdGF0ZSBoYXMgYmVlbiB1bnN1Y2Nlc3NmdWxseSBmb3VuZCBhZnRlciAyIHRyaWVzLlxuICAgICAqIC0gKnJlc29sdmUgZXJyb3IqIC0gd2hlbiBhbiBlcnJvciBoYXMgb2NjdXJyZWQgd2l0aCBhIGByZXNvbHZlYFxuICAgICAqXG4gICAgICovXG4gICAgJHN0YXRlLmdvID0gZnVuY3Rpb24gZ28odG8sIHBhcmFtcywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuICRzdGF0ZS50cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgZXh0ZW5kKHsgaW5oZXJpdDogdHJ1ZSwgcmVsYXRpdmU6ICRzdGF0ZS4kY3VycmVudCB9LCBvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjdHJhbnNpdGlvblRvXG4gICAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAgICAgKlxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIExvdy1sZXZlbCBtZXRob2QgZm9yIHRyYW5zaXRpb25pbmcgdG8gYSBuZXcgc3RhdGUuIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfZ28gJHN0YXRlLmdvfVxuICAgICAqIHVzZXMgYHRyYW5zaXRpb25Ub2AgaW50ZXJuYWxseS4gYCRzdGF0ZS5nb2AgaXMgcmVjb21tZW5kZWQgaW4gbW9zdCBzaXR1YXRpb25zLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiA8cHJlPlxuICAgICAqIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInXSk7XG4gICAgICpcbiAgICAgKiBhcHAuY29udHJvbGxlcignY3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSkge1xuICAgICAqICAgJHNjb3BlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAkc3RhdGUudHJhbnNpdGlvblRvKCdjb250YWN0LmRldGFpbCcpO1xuICAgICAqICAgfTtcbiAgICAgKiB9KTtcbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0byBTdGF0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0PX0gdG9QYXJhbXMgQSBtYXAgb2YgdGhlIHBhcmFtZXRlcnMgdGhhdCB3aWxsIGJlIHNlbnQgdG8gdGhlIHN0YXRlLFxuICAgICAqIHdpbGwgcG9wdWxhdGUgJHN0YXRlUGFyYW1zLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0PX0gb3B0aW9ucyBPcHRpb25zIG9iamVjdC4gVGhlIG9wdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSAqKmBsb2NhdGlvbmAqKiAtIHtib29sZWFuPXRydWV8c3RyaW5nPX0gLSBJZiBgdHJ1ZWAgd2lsbCB1cGRhdGUgdGhlIHVybCBpbiB0aGUgbG9jYXRpb24gYmFyLCBpZiBgZmFsc2VgXG4gICAgICogICAgd2lsbCBub3QuIElmIHN0cmluZywgbXVzdCBiZSBgXCJyZXBsYWNlXCJgLCB3aGljaCB3aWxsIHVwZGF0ZSB1cmwgYW5kIGFsc28gcmVwbGFjZSBsYXN0IGhpc3RvcnkgcmVjb3JkLlxuICAgICAqIC0gKipgaW5oZXJpdGAqKiAtIHtib29sZWFuPWZhbHNlfSwgSWYgYHRydWVgIHdpbGwgaW5oZXJpdCB1cmwgcGFyYW1ldGVycyBmcm9tIGN1cnJlbnQgdXJsLlxuICAgICAqIC0gKipgcmVsYXRpdmVgKiogLSB7b2JqZWN0PX0sIFdoZW4gdHJhbnNpdGlvbmluZyB3aXRoIHJlbGF0aXZlIHBhdGggKGUuZyAnXicpLCBcbiAgICAgKiAgICBkZWZpbmVzIHdoaWNoIHN0YXRlIHRvIGJlIHJlbGF0aXZlIGZyb20uXG4gICAgICogLSAqKmBub3RpZnlgKiogLSB7Ym9vbGVhbj10cnVlfSwgSWYgYHRydWVgIHdpbGwgYnJvYWRjYXN0ICRzdGF0ZUNoYW5nZVN0YXJ0IGFuZCAkc3RhdGVDaGFuZ2VTdWNjZXNzIGV2ZW50cy5cbiAgICAgKiAtICoqYHJlbG9hZGAqKiAodjAuMi41KSAtIHtib29sZWFuPWZhbHNlfHN0cmluZz18b2JqZWN0PX0sIElmIGB0cnVlYCB3aWxsIGZvcmNlIHRyYW5zaXRpb24gZXZlbiBpZiB0aGUgc3RhdGUgb3IgcGFyYW1zIFxuICAgICAqICAgIGhhdmUgbm90IGNoYW5nZWQsIGFrYSBhIHJlbG9hZCBvZiB0aGUgc2FtZSBzdGF0ZS4gSXQgZGlmZmVycyBmcm9tIHJlbG9hZE9uU2VhcmNoIGJlY2F1c2UgeW91J2RcbiAgICAgKiAgICB1c2UgdGhpcyB3aGVuIHlvdSB3YW50IHRvIGZvcmNlIGEgcmVsb2FkIHdoZW4gKmV2ZXJ5dGhpbmcqIGlzIHRoZSBzYW1lLCBpbmNsdWRpbmcgc2VhcmNoIHBhcmFtcy5cbiAgICAgKiAgICBpZiBTdHJpbmcsIHRoZW4gd2lsbCByZWxvYWQgdGhlIHN0YXRlIHdpdGggdGhlIG5hbWUgZ2l2ZW4gaW4gcmVsb2FkLCBhbmQgYW55IGNoaWxkcmVuLlxuICAgICAqICAgIGlmIE9iamVjdCwgdGhlbiBhIHN0YXRlT2JqIGlzIGV4cGVjdGVkLCB3aWxsIHJlbG9hZCB0aGUgc3RhdGUgZm91bmQgaW4gc3RhdGVPYmosIGFuZCBhbnkgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX0gQSBwcm9taXNlIHJlcHJlc2VudGluZyB0aGUgc3RhdGUgb2YgdGhlIG5ldyB0cmFuc2l0aW9uLiBTZWVcbiAgICAgKiB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2dvICRzdGF0ZS5nb30uXG4gICAgICovXG4gICAgJHN0YXRlLnRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIHRyYW5zaXRpb25Ubyh0bywgdG9QYXJhbXMsIG9wdGlvbnMpIHtcbiAgICAgIHRvUGFyYW1zID0gdG9QYXJhbXMgfHwge307XG4gICAgICBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgbG9jYXRpb246IHRydWUsIGluaGVyaXQ6IGZhbHNlLCByZWxhdGl2ZTogbnVsbCwgbm90aWZ5OiB0cnVlLCByZWxvYWQ6IGZhbHNlLCAkcmV0cnk6IGZhbHNlXG4gICAgICB9LCBvcHRpb25zIHx8IHt9KTtcblxuICAgICAgdmFyIGZyb20gPSAkc3RhdGUuJGN1cnJlbnQsIGZyb21QYXJhbXMgPSAkc3RhdGUucGFyYW1zLCBmcm9tUGF0aCA9IGZyb20ucGF0aDtcbiAgICAgIHZhciBldnQsIHRvU3RhdGUgPSBmaW5kU3RhdGUodG8sIG9wdGlvbnMucmVsYXRpdmUpO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgaGFzaCBwYXJhbSBmb3IgbGF0ZXIgKHNpbmNlIGl0IHdpbGwgYmUgc3RyaXBwZWQgb3V0IGJ5IHZhcmlvdXMgbWV0aG9kcylcbiAgICAgIHZhciBoYXNoID0gdG9QYXJhbXNbJyMnXTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQodG9TdGF0ZSkpIHtcbiAgICAgICAgdmFyIHJlZGlyZWN0ID0geyB0bzogdG8sIHRvUGFyYW1zOiB0b1BhcmFtcywgb3B0aW9uczogb3B0aW9ucyB9O1xuICAgICAgICB2YXIgcmVkaXJlY3RSZXN1bHQgPSBoYW5kbGVSZWRpcmVjdChyZWRpcmVjdCwgZnJvbS5zZWxmLCBmcm9tUGFyYW1zLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAocmVkaXJlY3RSZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVkaXJlY3RSZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbHdheXMgcmV0cnkgb25jZSBpZiB0aGUgJHN0YXRlTm90Rm91bmQgd2FzIG5vdCBwcmV2ZW50ZWRcbiAgICAgICAgLy8gKGhhbmRsZXMgZWl0aGVyIHJlZGlyZWN0IGNoYW5nZWQgb3Igc3RhdGUgbGF6eS1kZWZpbml0aW9uKVxuICAgICAgICB0byA9IHJlZGlyZWN0LnRvO1xuICAgICAgICB0b1BhcmFtcyA9IHJlZGlyZWN0LnRvUGFyYW1zO1xuICAgICAgICBvcHRpb25zID0gcmVkaXJlY3Qub3B0aW9ucztcbiAgICAgICAgdG9TdGF0ZSA9IGZpbmRTdGF0ZSh0bywgb3B0aW9ucy5yZWxhdGl2ZSk7XG5cbiAgICAgICAgaWYgKCFpc0RlZmluZWQodG9TdGF0ZSkpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMucmVsYXRpdmUpIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggc3RhdGUgJ1wiICsgdG8gKyBcIidcIik7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlc29sdmUgJ1wiICsgdG8gKyBcIicgZnJvbSBzdGF0ZSAnXCIgKyBvcHRpb25zLnJlbGF0aXZlICsgXCInXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodG9TdGF0ZVthYnN0cmFjdEtleV0pIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB0cmFuc2l0aW9uIHRvIGFic3RyYWN0IHN0YXRlICdcIiArIHRvICsgXCInXCIpO1xuICAgICAgaWYgKG9wdGlvbnMuaW5oZXJpdCkgdG9QYXJhbXMgPSBpbmhlcml0UGFyYW1zKCRzdGF0ZVBhcmFtcywgdG9QYXJhbXMgfHwge30sICRzdGF0ZS4kY3VycmVudCwgdG9TdGF0ZSk7XG4gICAgICBpZiAoIXRvU3RhdGUucGFyYW1zLiQkdmFsaWRhdGVzKHRvUGFyYW1zKSkgcmV0dXJuIFRyYW5zaXRpb25GYWlsZWQ7XG5cbiAgICAgIHRvUGFyYW1zID0gdG9TdGF0ZS5wYXJhbXMuJCR2YWx1ZXModG9QYXJhbXMpO1xuICAgICAgdG8gPSB0b1N0YXRlO1xuXG4gICAgICB2YXIgdG9QYXRoID0gdG8ucGF0aDtcblxuICAgICAgLy8gU3RhcnRpbmcgZnJvbSB0aGUgcm9vdCBvZiB0aGUgcGF0aCwga2VlcCBhbGwgbGV2ZWxzIHRoYXQgaGF2ZW4ndCBjaGFuZ2VkXG4gICAgICB2YXIga2VlcCA9IDAsIHN0YXRlID0gdG9QYXRoW2tlZXBdLCBsb2NhbHMgPSByb290LmxvY2FscywgdG9Mb2NhbHMgPSBbXTtcblxuICAgICAgaWYgKCFvcHRpb25zLnJlbG9hZCkge1xuICAgICAgICB3aGlsZSAoc3RhdGUgJiYgc3RhdGUgPT09IGZyb21QYXRoW2tlZXBdICYmIHN0YXRlLm93blBhcmFtcy4kJGVxdWFscyh0b1BhcmFtcywgZnJvbVBhcmFtcykpIHtcbiAgICAgICAgICBsb2NhbHMgPSB0b0xvY2Fsc1trZWVwXSA9IHN0YXRlLmxvY2FscztcbiAgICAgICAgICBrZWVwKys7XG4gICAgICAgICAgc3RhdGUgPSB0b1BhdGhba2VlcF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcob3B0aW9ucy5yZWxvYWQpIHx8IGlzT2JqZWN0KG9wdGlvbnMucmVsb2FkKSkge1xuICAgICAgICBpZiAoaXNPYmplY3Qob3B0aW9ucy5yZWxvYWQpICYmICFvcHRpb25zLnJlbG9hZC5uYW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbG9hZCBzdGF0ZSBvYmplY3QnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIHJlbG9hZFN0YXRlID0gb3B0aW9ucy5yZWxvYWQgPT09IHRydWUgPyBmcm9tUGF0aFswXSA6IGZpbmRTdGF0ZShvcHRpb25zLnJlbG9hZCk7XG4gICAgICAgIGlmIChvcHRpb25zLnJlbG9hZCAmJiAhcmVsb2FkU3RhdGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIHJlbG9hZCBzdGF0ZSAnXCIgKyAoaXNTdHJpbmcob3B0aW9ucy5yZWxvYWQpID8gb3B0aW9ucy5yZWxvYWQgOiBvcHRpb25zLnJlbG9hZC5uYW1lKSArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChzdGF0ZSAmJiBzdGF0ZSA9PT0gZnJvbVBhdGhba2VlcF0gJiYgc3RhdGUgIT09IHJlbG9hZFN0YXRlKSB7XG4gICAgICAgICAgbG9jYWxzID0gdG9Mb2NhbHNba2VlcF0gPSBzdGF0ZS5sb2NhbHM7XG4gICAgICAgICAga2VlcCsrO1xuICAgICAgICAgIHN0YXRlID0gdG9QYXRoW2tlZXBdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlJ3JlIGdvaW5nIHRvIHRoZSBzYW1lIHN0YXRlIGFuZCBhbGwgbG9jYWxzIGFyZSBrZXB0LCB3ZSd2ZSBnb3Qgbm90aGluZyB0byBkby5cbiAgICAgIC8vIEJ1dCBjbGVhciAndHJhbnNpdGlvbicsIGFzIHdlIHN0aWxsIHdhbnQgdG8gY2FuY2VsIGFueSBvdGhlciBwZW5kaW5nIHRyYW5zaXRpb25zLlxuICAgICAgLy8gVE9ETzogV2UgbWF5IG5vdCB3YW50IHRvIGJ1bXAgJ3RyYW5zaXRpb24nIGlmIHdlJ3JlIGNhbGxlZCBmcm9tIGEgbG9jYXRpb24gY2hhbmdlXG4gICAgICAvLyB0aGF0IHdlJ3ZlIGluaXRpYXRlZCBvdXJzZWx2ZXMsIGJlY2F1c2Ugd2UgbWlnaHQgYWNjaWRlbnRhbGx5IGFib3J0IGEgbGVnaXRpbWF0ZVxuICAgICAgLy8gdHJhbnNpdGlvbiBpbml0aWF0ZWQgZnJvbSBjb2RlP1xuICAgICAgaWYgKHNob3VsZFNraXBSZWxvYWQodG8sIHRvUGFyYW1zLCBmcm9tLCBmcm9tUGFyYW1zLCBsb2NhbHMsIG9wdGlvbnMpKSB7XG4gICAgICAgIGlmIChoYXNoKSB0b1BhcmFtc1snIyddID0gaGFzaDtcbiAgICAgICAgJHN0YXRlLnBhcmFtcyA9IHRvUGFyYW1zO1xuICAgICAgICBjb3B5KCRzdGF0ZS5wYXJhbXMsICRzdGF0ZVBhcmFtcyk7XG4gICAgICAgIGNvcHkoZmlsdGVyQnlLZXlzKHRvLnBhcmFtcy4kJGtleXMoKSwgJHN0YXRlUGFyYW1zKSwgdG8ubG9jYWxzLmdsb2JhbHMuJHN0YXRlUGFyYW1zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9jYXRpb24gJiYgdG8ubmF2aWdhYmxlICYmIHRvLm5hdmlnYWJsZS51cmwpIHtcbiAgICAgICAgICAkdXJsUm91dGVyLnB1c2godG8ubmF2aWdhYmxlLnVybCwgdG9QYXJhbXMsIHtcbiAgICAgICAgICAgICQkYXZvaWRSZXN5bmM6IHRydWUsIHJlcGxhY2U6IG9wdGlvbnMubG9jYXRpb24gPT09ICdyZXBsYWNlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICR1cmxSb3V0ZXIudXBkYXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgICRzdGF0ZS50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgcmV0dXJuICRxLndoZW4oJHN0YXRlLmN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBGaWx0ZXIgcGFyYW1ldGVycyBiZWZvcmUgd2UgcGFzcyB0aGVtIHRvIGV2ZW50IGhhbmRsZXJzIGV0Yy5cbiAgICAgIHRvUGFyYW1zID0gZmlsdGVyQnlLZXlzKHRvLnBhcmFtcy4kJGtleXMoKSwgdG9QYXJhbXMgfHwge30pO1xuICAgICAgXG4gICAgICAvLyBSZS1hZGQgdGhlIHNhdmVkIGhhc2ggYmVmb3JlIHdlIHN0YXJ0IHJldHVybmluZyB0aGluZ3Mgb3IgYnJvYWRjYXN0aW5nICRzdGF0ZUNoYW5nZVN0YXJ0XG4gICAgICBpZiAoaGFzaCkgdG9QYXJhbXNbJyMnXSA9IGhhc2g7XG4gICAgICBcbiAgICAgIC8vIEJyb2FkY2FzdCBzdGFydCBldmVudCBhbmQgY2FuY2VsIHRoZSB0cmFuc2l0aW9uIGlmIHJlcXVlc3RlZFxuICAgICAgaWYgKG9wdGlvbnMubm90aWZ5KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbmdkb2MgZXZlbnRcbiAgICAgICAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSMkc3RhdGVDaGFuZ2VTdGFydFxuICAgICAgICAgKiBAZXZlbnRPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAgICAgICAqIEBldmVudFR5cGUgYnJvYWRjYXN0IG9uIHJvb3Qgc2NvcGVcbiAgICAgICAgICogQGRlc2NyaXB0aW9uXG4gICAgICAgICAqIEZpcmVkIHdoZW4gdGhlIHN0YXRlIHRyYW5zaXRpb24gKipiZWdpbnMqKi4gWW91IGNhbiB1c2UgYGV2ZW50LnByZXZlbnREZWZhdWx0KClgXG4gICAgICAgICAqIHRvIHByZXZlbnQgdGhlIHRyYW5zaXRpb24gZnJvbSBoYXBwZW5pbmcgYW5kIHRoZW4gdGhlIHRyYW5zaXRpb24gcHJvbWlzZSB3aWxsIGJlXG4gICAgICAgICAqIHJlamVjdGVkIHdpdGggYSBgJ3RyYW5zaXRpb24gcHJldmVudGVkJ2AgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7U3RhdGV9IHRvU3RhdGUgVGhlIHN0YXRlIGJlaW5nIHRyYW5zaXRpb25lZCB0by5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHRvUGFyYW1zIFRoZSBwYXJhbXMgc3VwcGxpZWQgdG8gdGhlIGB0b1N0YXRlYC5cbiAgICAgICAgICogQHBhcmFtIHtTdGF0ZX0gZnJvbVN0YXRlIFRoZSBjdXJyZW50IHN0YXRlLCBwcmUtdHJhbnNpdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGZyb21QYXJhbXMgVGhlIHBhcmFtcyBzdXBwbGllZCB0byB0aGUgYGZyb21TdGF0ZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIDxwcmU+XG4gICAgICAgICAqICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsXG4gICAgICAgICAqIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKXtcbiAgICAgICAgICogICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAqICAgICAvLyB0cmFuc2l0aW9uVG8oKSBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aFxuICAgICAgICAgKiAgICAgLy8gYSAndHJhbnNpdGlvbiBwcmV2ZW50ZWQnIGVycm9yXG4gICAgICAgICAqIH0pXG4gICAgICAgICAqIDwvcHJlPlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCRyb290U2NvcGUuJGJyb2FkY2FzdCgnJHN0YXRlQ2hhbmdlU3RhcnQnLCB0by5zZWxmLCB0b1BhcmFtcywgZnJvbS5zZWxmLCBmcm9tUGFyYW1zLCBvcHRpb25zKS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCckc3RhdGVDaGFuZ2VDYW5jZWwnLCB0by5zZWxmLCB0b1BhcmFtcywgZnJvbS5zZWxmLCBmcm9tUGFyYW1zKTtcbiAgICAgICAgICAvL0Rvbid0IHVwZGF0ZSBhbmQgcmVzeW5jIHVybCBpZiB0aGVyZSdzIGJlZW4gYSBuZXcgdHJhbnNpdGlvbiBzdGFydGVkLiBzZWUgaXNzdWUgIzIyMzgsICM2MDBcbiAgICAgICAgICBpZiAoJHN0YXRlLnRyYW5zaXRpb24gPT0gbnVsbCkgJHVybFJvdXRlci51cGRhdGUoKTtcbiAgICAgICAgICByZXR1cm4gVHJhbnNpdGlvblByZXZlbnRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZXNvbHZlIGxvY2FscyBmb3IgdGhlIHJlbWFpbmluZyBzdGF0ZXMsIGJ1dCBkb24ndCB1cGRhdGUgYW55IGdsb2JhbCBzdGF0ZSBqdXN0XG4gICAgICAvLyB5ZXQgLS0gaWYgYW55dGhpbmcgZmFpbHMgdG8gcmVzb2x2ZSB0aGUgY3VycmVudCBzdGF0ZSBuZWVkcyB0byByZW1haW4gdW50b3VjaGVkLlxuICAgICAgLy8gV2UgYWxzbyBzZXQgdXAgYW4gaW5oZXJpdGFuY2UgY2hhaW4gZm9yIHRoZSBsb2NhbHMgaGVyZS4gVGhpcyBhbGxvd3MgdGhlIHZpZXcgZGlyZWN0aXZlXG4gICAgICAvLyB0byBxdWlja2x5IGxvb2sgdXAgdGhlIGNvcnJlY3QgZGVmaW5pdGlvbiBmb3IgZWFjaCB2aWV3IGluIHRoZSBjdXJyZW50IHN0YXRlLiBFdmVuXG4gICAgICAvLyB0aG91Z2ggd2UgY3JlYXRlIHRoZSBsb2NhbHMgb2JqZWN0IGl0c2VsZiBvdXRzaWRlIHJlc29sdmVTdGF0ZSgpLCBpdCBpcyBpbml0aWFsbHlcbiAgICAgIC8vIGVtcHR5IGFuZCBnZXRzIGZpbGxlZCBhc3luY2hyb25vdXNseS4gV2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwcm9taXNlIGZvciB0aGVcbiAgICAgIC8vIChmdWxseSByZXNvbHZlZCkgY3VycmVudCBsb2NhbHMsIGFuZCBwYXNzIHRoaXMgZG93biB0aGUgY2hhaW4uXG4gICAgICB2YXIgcmVzb2x2ZWQgPSAkcS53aGVuKGxvY2Fscyk7XG5cbiAgICAgIGZvciAodmFyIGwgPSBrZWVwOyBsIDwgdG9QYXRoLmxlbmd0aDsgbCsrLCBzdGF0ZSA9IHRvUGF0aFtsXSkge1xuICAgICAgICBsb2NhbHMgPSB0b0xvY2Fsc1tsXSA9IGluaGVyaXQobG9jYWxzKTtcbiAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlU3RhdGUoc3RhdGUsIHRvUGFyYW1zLCBzdGF0ZSA9PT0gdG8sIHJlc29sdmVkLCBsb2NhbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmNlIGV2ZXJ5dGhpbmcgaXMgcmVzb2x2ZWQsIHdlIGFyZSByZWFkeSB0byBwZXJmb3JtIHRoZSBhY3R1YWwgdHJhbnNpdGlvblxuICAgICAgLy8gYW5kIHJldHVybiBhIHByb21pc2UgZm9yIHRoZSBuZXcgc3RhdGUuIFdlIGFsc28ga2VlcCB0cmFjayBvZiB3aGF0IHRoZVxuICAgICAgLy8gY3VycmVudCBwcm9taXNlIGlzLCBzbyB0aGF0IHdlIGNhbiBkZXRlY3Qgb3ZlcmxhcHBpbmcgdHJhbnNpdGlvbnMgYW5kXG4gICAgICAvLyBrZWVwIG9ubHkgdGhlIG91dGNvbWUgb2YgdGhlIGxhc3QgdHJhbnNpdGlvbi5cbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJHN0YXRlLnRyYW5zaXRpb24gPSByZXNvbHZlZC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGwsIGVudGVyaW5nLCBleGl0aW5nO1xuXG4gICAgICAgIGlmICgkc3RhdGUudHJhbnNpdGlvbiAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnJHN0YXRlQ2hhbmdlQ2FuY2VsJywgdG8uc2VsZiwgdG9QYXJhbXMsIGZyb20uc2VsZiwgZnJvbVBhcmFtcyk7XG4gICAgICAgICAgcmV0dXJuIFRyYW5zaXRpb25TdXBlcnNlZGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhpdCAnZnJvbScgc3RhdGVzIG5vdCBrZXB0XG4gICAgICAgIGZvciAobCA9IGZyb21QYXRoLmxlbmd0aCAtIDE7IGwgPj0ga2VlcDsgbC0tKSB7XG4gICAgICAgICAgZXhpdGluZyA9IGZyb21QYXRoW2xdO1xuICAgICAgICAgIGlmIChleGl0aW5nLnNlbGYub25FeGl0KSB7XG4gICAgICAgICAgICAkaW5qZWN0b3IuaW52b2tlKGV4aXRpbmcuc2VsZi5vbkV4aXQsIGV4aXRpbmcuc2VsZiwgZXhpdGluZy5sb2NhbHMuZ2xvYmFscyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4aXRpbmcubG9jYWxzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVudGVyICd0bycgc3RhdGVzIG5vdCBrZXB0XG4gICAgICAgIGZvciAobCA9IGtlZXA7IGwgPCB0b1BhdGgubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICBlbnRlcmluZyA9IHRvUGF0aFtsXTtcbiAgICAgICAgICBlbnRlcmluZy5sb2NhbHMgPSB0b0xvY2Fsc1tsXTtcbiAgICAgICAgICBpZiAoZW50ZXJpbmcuc2VsZi5vbkVudGVyKSB7XG4gICAgICAgICAgICAkaW5qZWN0b3IuaW52b2tlKGVudGVyaW5nLnNlbGYub25FbnRlciwgZW50ZXJpbmcuc2VsZiwgZW50ZXJpbmcubG9jYWxzLmdsb2JhbHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biBpdCBhZ2FpbiwgdG8gY2F0Y2ggYW55IHRyYW5zaXRpb25zIGluIGNhbGxiYWNrc1xuICAgICAgICBpZiAoJHN0YXRlLnRyYW5zaXRpb24gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRzdGF0ZUNoYW5nZUNhbmNlbCcsIHRvLnNlbGYsIHRvUGFyYW1zLCBmcm9tLnNlbGYsIGZyb21QYXJhbXMpO1xuICAgICAgICAgIHJldHVybiBUcmFuc2l0aW9uU3VwZXJzZWRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBnbG9iYWxzIGluICRzdGF0ZVxuICAgICAgICAkc3RhdGUuJGN1cnJlbnQgPSB0bztcbiAgICAgICAgJHN0YXRlLmN1cnJlbnQgPSB0by5zZWxmO1xuICAgICAgICAkc3RhdGUucGFyYW1zID0gdG9QYXJhbXM7XG4gICAgICAgIGNvcHkoJHN0YXRlLnBhcmFtcywgJHN0YXRlUGFyYW1zKTtcbiAgICAgICAgJHN0YXRlLnRyYW5zaXRpb24gPSBudWxsO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmxvY2F0aW9uICYmIHRvLm5hdmlnYWJsZSkge1xuICAgICAgICAgICR1cmxSb3V0ZXIucHVzaCh0by5uYXZpZ2FibGUudXJsLCB0by5uYXZpZ2FibGUubG9jYWxzLmdsb2JhbHMuJHN0YXRlUGFyYW1zLCB7XG4gICAgICAgICAgICAkJGF2b2lkUmVzeW5jOiB0cnVlLCByZXBsYWNlOiBvcHRpb25zLmxvY2F0aW9uID09PSAncmVwbGFjZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLm5vdGlmeSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG5nZG9jIGV2ZW50XG4gICAgICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjJHN0YXRlQ2hhbmdlU3VjY2Vzc1xuICAgICAgICAgKiBAZXZlbnRPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAgICAgICAqIEBldmVudFR5cGUgYnJvYWRjYXN0IG9uIHJvb3Qgc2NvcGVcbiAgICAgICAgICogQGRlc2NyaXB0aW9uXG4gICAgICAgICAqIEZpcmVkIG9uY2UgdGhlIHN0YXRlIHRyYW5zaXRpb24gaXMgKipjb21wbGV0ZSoqLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0ge1N0YXRlfSB0b1N0YXRlIFRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0b1BhcmFtcyBUaGUgcGFyYW1zIHN1cHBsaWVkIHRvIHRoZSBgdG9TdGF0ZWAuXG4gICAgICAgICAqIEBwYXJhbSB7U3RhdGV9IGZyb21TdGF0ZSBUaGUgY3VycmVudCBzdGF0ZSwgcHJlLXRyYW5zaXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tUGFyYW1zIFRoZSBwYXJhbXMgc3VwcGxpZWQgdG8gdGhlIGBmcm9tU3RhdGVgLlxuICAgICAgICAgKi9cbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCB0by5zZWxmLCB0b1BhcmFtcywgZnJvbS5zZWxmLCBmcm9tUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICAkdXJsUm91dGVyLnVwZGF0ZSh0cnVlKTtcblxuICAgICAgICByZXR1cm4gJHN0YXRlLmN1cnJlbnQ7XG4gICAgICB9KS50aGVuKG51bGwsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAvLyBwcm9wYWdhdGUgVHJhbnNpdGlvblN1cGVyc2VkZWQgZXJyb3Igd2l0aG91dCBlbWl0dGluZyAkc3RhdGVDaGFuZ2VDYW5jZWxcbiAgICAgICAgLy8gYXMgaXQgd2FzIGFscmVhZHkgZW1pdHRlZCBpbiB0aGUgc3VjY2VzcyBoYW5kbGVyIGFib3ZlXG4gICAgICAgIGlmIChlcnJvciA9PT0gVHJhbnNpdGlvblN1cGVyc2VkZWRFcnJvcikgcmV0dXJuIFRyYW5zaXRpb25TdXBlcnNlZGVkO1xuXG4gICAgICAgIGlmICgkc3RhdGUudHJhbnNpdGlvbiAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnJHN0YXRlQ2hhbmdlQ2FuY2VsJywgdG8uc2VsZiwgdG9QYXJhbXMsIGZyb20uc2VsZiwgZnJvbVBhcmFtcyk7XG4gICAgICAgICAgcmV0dXJuIFRyYW5zaXRpb25TdXBlcnNlZGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgJHN0YXRlLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQG5nZG9jIGV2ZW50XG4gICAgICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjJHN0YXRlQ2hhbmdlRXJyb3JcbiAgICAgICAgICogQGV2ZW50T2YgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICAgICAgICAgKiBAZXZlbnRUeXBlIGJyb2FkY2FzdCBvbiByb290IHNjb3BlXG4gICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAgKiBGaXJlZCB3aGVuIGFuICoqZXJyb3Igb2NjdXJzKiogZHVyaW5nIHRyYW5zaXRpb24uIEl0J3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCBpZiB5b3VcbiAgICAgICAgICogaGF2ZSBhbnkgZXJyb3JzIGluIHlvdXIgcmVzb2x2ZSBmdW5jdGlvbnMgKGphdmFzY3JpcHQgZXJyb3JzLCBub24tZXhpc3RlbnQgc2VydmljZXMsIGV0YylcbiAgICAgICAgICogdGhleSB3aWxsIG5vdCB0aHJvdyB0cmFkaXRpb25hbGx5LiBZb3UgbXVzdCBsaXN0ZW4gZm9yIHRoaXMgJHN0YXRlQ2hhbmdlRXJyb3IgZXZlbnQgdG9cbiAgICAgICAgICogY2F0Y2ggKipBTEwqKiBlcnJvcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7U3RhdGV9IHRvU3RhdGUgVGhlIHN0YXRlIGJlaW5nIHRyYW5zaXRpb25lZCB0by5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHRvUGFyYW1zIFRoZSBwYXJhbXMgc3VwcGxpZWQgdG8gdGhlIGB0b1N0YXRlYC5cbiAgICAgICAgICogQHBhcmFtIHtTdGF0ZX0gZnJvbVN0YXRlIFRoZSBjdXJyZW50IHN0YXRlLCBwcmUtdHJhbnNpdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGZyb21QYXJhbXMgVGhlIHBhcmFtcyBzdXBwbGllZCB0byB0aGUgYGZyb21TdGF0ZWAuXG4gICAgICAgICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSByZXNvbHZlIGVycm9yIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGV2dCA9ICRyb290U2NvcGUuJGJyb2FkY2FzdCgnJHN0YXRlQ2hhbmdlRXJyb3InLCB0by5zZWxmLCB0b1BhcmFtcywgZnJvbS5zZWxmLCBmcm9tUGFyYW1zLCBlcnJvcik7XG5cbiAgICAgICAgaWYgKCFldnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICR1cmxSb3V0ZXIudXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJHEucmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICBzaWxlbmNlVW5jYXVnaHRJblByb21pc2UodHJhbnNpdGlvbik7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNpc1xuICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBTaW1pbGFyIHRvIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfaW5jbHVkZXMgJHN0YXRlLmluY2x1ZGVzfSxcbiAgICAgKiBidXQgb25seSBjaGVja3MgZm9yIHRoZSBmdWxsIHN0YXRlIG5hbWUuIElmIHBhcmFtcyBpcyBzdXBwbGllZCB0aGVuIGl0IHdpbGwgYmVcbiAgICAgKiB0ZXN0ZWQgZm9yIHN0cmljdCBlcXVhbGl0eSBhZ2FpbnN0IHRoZSBjdXJyZW50IGFjdGl2ZSBwYXJhbXMgb2JqZWN0LCBzbyBhbGwgcGFyYW1zXG4gICAgICogbXVzdCBtYXRjaCB3aXRoIG5vbmUgbWlzc2luZyBhbmQgbm8gZXh0cmFzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiA8cHJlPlxuICAgICAqICRzdGF0ZS4kY3VycmVudC5uYW1lID0gJ2NvbnRhY3RzLmRldGFpbHMuaXRlbSc7XG4gICAgICpcbiAgICAgKiAvLyBhYnNvbHV0ZSBuYW1lXG4gICAgICogJHN0YXRlLmlzKCdjb250YWN0LmRldGFpbHMuaXRlbScpOyAvLyByZXR1cm5zIHRydWVcbiAgICAgKiAkc3RhdGUuaXMoY29udGFjdERldGFpbEl0ZW1TdGF0ZU9iamVjdCk7IC8vIHJldHVybnMgdHJ1ZVxuICAgICAqXG4gICAgICogLy8gcmVsYXRpdmUgbmFtZSAoLiBhbmQgXiksIHR5cGljYWxseSBmcm9tIGEgdGVtcGxhdGVcbiAgICAgKiAvLyBFLmcuIGZyb20gdGhlICdjb250YWN0cy5kZXRhaWxzJyB0ZW1wbGF0ZVxuICAgICAqIDxkaXYgbmctY2xhc3M9XCJ7aGlnaGxpZ2h0ZWQ6ICRzdGF0ZS5pcygnLml0ZW0nKX1cIj5JdGVtPC9kaXY+XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHN0YXRlT3JOYW1lIFRoZSBzdGF0ZSBuYW1lIChhYnNvbHV0ZSBvciByZWxhdGl2ZSkgb3Igc3RhdGUgb2JqZWN0IHlvdSdkIGxpa2UgdG8gY2hlY2suXG4gICAgICogQHBhcmFtIHtvYmplY3Q9fSBwYXJhbXMgQSBwYXJhbSBvYmplY3QsIGUuZy4gYHtzZWN0aW9uSWQ6IHNlY3Rpb24uaWR9YCwgdGhhdCB5b3UnZCBsaWtlXG4gICAgICogdG8gdGVzdCBhZ2FpbnN0IHRoZSBjdXJyZW50IGFjdGl2ZSBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdD19IG9wdGlvbnMgQW4gb3B0aW9ucyBvYmplY3QuICBUaGUgb3B0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtICoqYHJlbGF0aXZlYCoqIC0ge3N0cmluZ3xvYmplY3R9IC0gIElmIGBzdGF0ZU9yTmFtZWAgaXMgYSByZWxhdGl2ZSBzdGF0ZSBuYW1lIGFuZCBgb3B0aW9ucy5yZWxhdGl2ZWAgaXMgc2V0LCAuaXMgd2lsbFxuICAgICAqIHRlc3QgcmVsYXRpdmUgdG8gYG9wdGlvbnMucmVsYXRpdmVgIHN0YXRlIChvciBuYW1lKS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgaXQgaXMgdGhlIHN0YXRlLlxuICAgICAqL1xuICAgICRzdGF0ZS5pcyA9IGZ1bmN0aW9uIGlzKHN0YXRlT3JOYW1lLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoeyByZWxhdGl2ZTogJHN0YXRlLiRjdXJyZW50IH0sIG9wdGlvbnMgfHwge30pO1xuICAgICAgdmFyIHN0YXRlID0gZmluZFN0YXRlKHN0YXRlT3JOYW1lLCBvcHRpb25zLnJlbGF0aXZlKTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQoc3RhdGUpKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cbiAgICAgIGlmICgkc3RhdGUuJGN1cnJlbnQgIT09IHN0YXRlKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICByZXR1cm4gIXBhcmFtcyB8fCBvYmplY3RLZXlzKHBhcmFtcykucmVkdWNlKGZ1bmN0aW9uKGFjYywga2V5KSB7XG4gICAgICAgIHZhciBwYXJhbURlZiA9IHN0YXRlLnBhcmFtc1trZXldO1xuICAgICAgICByZXR1cm4gYWNjICYmICFwYXJhbURlZiB8fCBwYXJhbURlZi50eXBlLmVxdWFscygkc3RhdGVQYXJhbXNba2V5XSwgcGFyYW1zW2tleV0pO1xuICAgICAgfSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjaW5jbHVkZXNcbiAgICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICAgICAqXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogQSBtZXRob2QgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IGFjdGl2ZSBzdGF0ZSBpcyBlcXVhbCB0byBvciBpcyB0aGUgY2hpbGQgb2YgdGhlXG4gICAgICogc3RhdGUgc3RhdGVOYW1lLiBJZiBhbnkgcGFyYW1zIGFyZSBwYXNzZWQgdGhlbiB0aGV5IHdpbGwgYmUgdGVzdGVkIGZvciBhIG1hdGNoIGFzIHdlbGwuXG4gICAgICogTm90IGFsbCB0aGUgcGFyYW1ldGVycyBuZWVkIHRvIGJlIHBhc3NlZCwganVzdCB0aGUgb25lcyB5b3UnZCBsaWtlIHRvIHRlc3QgZm9yIGVxdWFsaXR5LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBQYXJ0aWFsIGFuZCByZWxhdGl2ZSBuYW1lc1xuICAgICAqIDxwcmU+XG4gICAgICogJHN0YXRlLiRjdXJyZW50Lm5hbWUgPSAnY29udGFjdHMuZGV0YWlscy5pdGVtJztcbiAgICAgKlxuICAgICAqIC8vIFVzaW5nIHBhcnRpYWwgbmFtZXNcbiAgICAgKiAkc3RhdGUuaW5jbHVkZXMoXCJjb250YWN0c1wiKTsgLy8gcmV0dXJucyB0cnVlXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiY29udGFjdHMuZGV0YWlsc1wiKTsgLy8gcmV0dXJucyB0cnVlXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiY29udGFjdHMuZGV0YWlscy5pdGVtXCIpOyAvLyByZXR1cm5zIHRydWVcbiAgICAgKiAkc3RhdGUuaW5jbHVkZXMoXCJjb250YWN0cy5saXN0XCIpOyAvLyByZXR1cm5zIGZhbHNlXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiYWJvdXRcIik7IC8vIHJldHVybnMgZmFsc2VcbiAgICAgKlxuICAgICAqIC8vIFVzaW5nIHJlbGF0aXZlIG5hbWVzICguIGFuZCBeKSwgdHlwaWNhbGx5IGZyb20gYSB0ZW1wbGF0ZVxuICAgICAqIC8vIEUuZy4gZnJvbSB0aGUgJ2NvbnRhY3RzLmRldGFpbHMnIHRlbXBsYXRlXG4gICAgICogPGRpdiBuZy1jbGFzcz1cIntoaWdobGlnaHRlZDogJHN0YXRlLmluY2x1ZGVzKCcuaXRlbScpfVwiPkl0ZW08L2Rpdj5cbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEJhc2ljIGdsb2JiaW5nIHBhdHRlcm5zXG4gICAgICogPHByZT5cbiAgICAgKiAkc3RhdGUuJGN1cnJlbnQubmFtZSA9ICdjb250YWN0cy5kZXRhaWxzLml0ZW0udXJsJztcbiAgICAgKlxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcIiouZGV0YWlscy4qLipcIik7IC8vIHJldHVybnMgdHJ1ZVxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcIiouZGV0YWlscy4qKlwiKTsgLy8gcmV0dXJucyB0cnVlXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiKiouaXRlbS4qKlwiKTsgLy8gcmV0dXJucyB0cnVlXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiKi5kZXRhaWxzLml0ZW0udXJsXCIpOyAvLyByZXR1cm5zIHRydWVcbiAgICAgKiAkc3RhdGUuaW5jbHVkZXMoXCIqLmRldGFpbHMuKi51cmxcIik7IC8vIHJldHVybnMgdHJ1ZVxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcIiouZGV0YWlscy4qXCIpOyAvLyByZXR1cm5zIGZhbHNlXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiaXRlbS4qKlwiKTsgLy8gcmV0dXJucyBmYWxzZVxuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlT3JOYW1lIEEgcGFydGlhbCBuYW1lLCByZWxhdGl2ZSBuYW1lLCBvciBnbG9iIHBhdHRlcm5cbiAgICAgKiB0byBiZSBzZWFyY2hlZCBmb3Igd2l0aGluIHRoZSBjdXJyZW50IHN0YXRlIG5hbWUuXG4gICAgICogQHBhcmFtIHtvYmplY3Q9fSBwYXJhbXMgQSBwYXJhbSBvYmplY3QsIGUuZy4gYHtzZWN0aW9uSWQ6IHNlY3Rpb24uaWR9YCxcbiAgICAgKiB0aGF0IHlvdSdkIGxpa2UgdG8gdGVzdCBhZ2FpbnN0IHRoZSBjdXJyZW50IGFjdGl2ZSBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdD19IG9wdGlvbnMgQW4gb3B0aW9ucyBvYmplY3QuICBUaGUgb3B0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtICoqYHJlbGF0aXZlYCoqIC0ge3N0cmluZ3xvYmplY3Q9fSAtICBJZiBgc3RhdGVPck5hbWVgIGlzIGEgcmVsYXRpdmUgc3RhdGUgcmVmZXJlbmNlIGFuZCBgb3B0aW9ucy5yZWxhdGl2ZWAgaXMgc2V0LFxuICAgICAqIC5pbmNsdWRlcyB3aWxsIHRlc3QgcmVsYXRpdmUgdG8gYG9wdGlvbnMucmVsYXRpdmVgIHN0YXRlIChvciBuYW1lKS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgaXQgZG9lcyBpbmNsdWRlIHRoZSBzdGF0ZVxuICAgICAqL1xuICAgICRzdGF0ZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKHN0YXRlT3JOYW1lLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoeyByZWxhdGl2ZTogJHN0YXRlLiRjdXJyZW50IH0sIG9wdGlvbnMgfHwge30pO1xuICAgICAgaWYgKGlzU3RyaW5nKHN0YXRlT3JOYW1lKSAmJiBpc0dsb2Ioc3RhdGVPck5hbWUpKSB7XG4gICAgICAgIGlmICghZG9lc1N0YXRlTWF0Y2hHbG9iKHN0YXRlT3JOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZU9yTmFtZSA9ICRzdGF0ZS4kY3VycmVudC5uYW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSBmaW5kU3RhdGUoc3RhdGVPck5hbWUsIG9wdGlvbnMucmVsYXRpdmUpO1xuICAgICAgaWYgKCFpc0RlZmluZWQoc3RhdGUpKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cbiAgICAgIGlmICghaXNEZWZpbmVkKCRzdGF0ZS4kY3VycmVudC5pbmNsdWRlc1tzdGF0ZS5uYW1lXSkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBpZiAoIXBhcmFtcykgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICB2YXIga2V5cyA9IG9iamVjdEtleXMocGFyYW1zKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXSwgcGFyYW1EZWYgPSBzdGF0ZS5wYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKHBhcmFtRGVmICYmICFwYXJhbURlZi50eXBlLmVxdWFscygkc3RhdGVQYXJhbXNba2V5XSwgcGFyYW1zW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmplY3RLZXlzKHBhcmFtcykucmVkdWNlKGZ1bmN0aW9uKGFjYywga2V5KSB7XG4gICAgICAgIHZhciBwYXJhbURlZiA9IHN0YXRlLnBhcmFtc1trZXldO1xuICAgICAgICByZXR1cm4gYWNjICYmICFwYXJhbURlZiB8fCBwYXJhbURlZi50eXBlLmVxdWFscygkc3RhdGVQYXJhbXNba2V5XSwgcGFyYW1zW2tleV0pO1xuICAgICAgfSwgdHJ1ZSk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNocmVmXG4gICAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAgICAgKlxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIEEgdXJsIGdlbmVyYXRpb24gbWV0aG9kIHRoYXQgcmV0dXJucyB0aGUgY29tcGlsZWQgdXJsIGZvciB0aGUgZ2l2ZW4gc3RhdGUgcG9wdWxhdGVkIHdpdGggdGhlIGdpdmVuIHBhcmFtcy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogPHByZT5cbiAgICAgKiBleHBlY3QoJHN0YXRlLmhyZWYoXCJhYm91dC5wZXJzb25cIiwgeyBwZXJzb246IFwiYm9iXCIgfSkpLnRvRXF1YWwoXCIvYWJvdXQvYm9iXCIpO1xuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBzdGF0ZU9yTmFtZSBUaGUgc3RhdGUgbmFtZSBvciBzdGF0ZSBvYmplY3QgeW91J2QgbGlrZSB0byBnZW5lcmF0ZSBhIHVybCBmcm9tLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0PX0gcGFyYW1zIEFuIG9iamVjdCBvZiBwYXJhbWV0ZXIgdmFsdWVzIHRvIGZpbGwgdGhlIHN0YXRlJ3MgcmVxdWlyZWQgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge29iamVjdD19IG9wdGlvbnMgT3B0aW9ucyBvYmplY3QuIFRoZSBvcHRpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gKipgbG9zc3lgKiogLSB7Ym9vbGVhbj10cnVlfSAtICBJZiB0cnVlLCBhbmQgaWYgdGhlcmUgaXMgbm8gdXJsIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3RhdGUgcHJvdmlkZWQgaW4gdGhlXG4gICAgICogICAgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIHRoZSBjb25zdHJ1Y3RlZCBocmVmIHVybCB3aWxsIGJlIGJ1aWx0IGZyb20gdGhlIGZpcnN0IG5hdmlnYWJsZSBhbmNlc3RvciAoYWthXG4gICAgICogICAgYW5jZXN0b3Igd2l0aCBhIHZhbGlkIHVybCkuXG4gICAgICogLSAqKmBpbmhlcml0YCoqIC0ge2Jvb2xlYW49dHJ1ZX0sIElmIGB0cnVlYCB3aWxsIGluaGVyaXQgdXJsIHBhcmFtZXRlcnMgZnJvbSBjdXJyZW50IHVybC5cbiAgICAgKiAtICoqYHJlbGF0aXZlYCoqIC0ge29iamVjdD0kc3RhdGUuJGN1cnJlbnR9LCBXaGVuIHRyYW5zaXRpb25pbmcgd2l0aCByZWxhdGl2ZSBwYXRoIChlLmcgJ14nKSwgXG4gICAgICogICAgZGVmaW5lcyB3aGljaCBzdGF0ZSB0byBiZSByZWxhdGl2ZSBmcm9tLlxuICAgICAqIC0gKipgYWJzb2x1dGVgKiogLSB7Ym9vbGVhbj1mYWxzZX0sICBJZiB0cnVlIHdpbGwgZ2VuZXJhdGUgYW4gYWJzb2x1dGUgdXJsLCBlLmcuIFwiaHR0cDovL3d3dy5leGFtcGxlLmNvbS9mdWxsdXJsXCIuXG4gICAgICogXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY29tcGlsZWQgc3RhdGUgdXJsXG4gICAgICovXG4gICAgJHN0YXRlLmhyZWYgPSBmdW5jdGlvbiBocmVmKHN0YXRlT3JOYW1lLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoe1xuICAgICAgICBsb3NzeTogICAgdHJ1ZSxcbiAgICAgICAgaW5oZXJpdDogIHRydWUsXG4gICAgICAgIGFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgcmVsYXRpdmU6ICRzdGF0ZS4kY3VycmVudFxuICAgICAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICAgIHZhciBzdGF0ZSA9IGZpbmRTdGF0ZShzdGF0ZU9yTmFtZSwgb3B0aW9ucy5yZWxhdGl2ZSk7XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKHN0YXRlKSkgcmV0dXJuIG51bGw7XG4gICAgICBpZiAob3B0aW9ucy5pbmhlcml0KSBwYXJhbXMgPSBpbmhlcml0UGFyYW1zKCRzdGF0ZVBhcmFtcywgcGFyYW1zIHx8IHt9LCAkc3RhdGUuJGN1cnJlbnQsIHN0YXRlKTtcbiAgICAgIFxuICAgICAgdmFyIG5hdiA9IChzdGF0ZSAmJiBvcHRpb25zLmxvc3N5KSA/IHN0YXRlLm5hdmlnYWJsZSA6IHN0YXRlO1xuXG4gICAgICBpZiAoIW5hdiB8fCBuYXYudXJsID09PSB1bmRlZmluZWQgfHwgbmF2LnVybCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkdXJsUm91dGVyLmhyZWYobmF2LnVybCwgZmlsdGVyQnlLZXlzKHN0YXRlLnBhcmFtcy4kJGtleXMoKS5jb25jYXQoJyMnKSwgcGFyYW1zIHx8IHt9KSwge1xuICAgICAgICBhYnNvbHV0ZTogb3B0aW9ucy5hYnNvbHV0ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjZ2V0XG4gICAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAgICAgKlxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIFJldHVybnMgdGhlIHN0YXRlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBhbnkgc3BlY2lmaWMgc3RhdGUgb3IgYWxsIHN0YXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdD19IHN0YXRlT3JOYW1lIChhYnNvbHV0ZSBvciByZWxhdGl2ZSkgSWYgcHJvdmlkZWQsIHdpbGwgb25seSBnZXQgdGhlIGNvbmZpZyBmb3JcbiAgICAgKiB0aGUgcmVxdWVzdGVkIHN0YXRlLiBJZiBub3QgcHJvdmlkZWQsIHJldHVybnMgYW4gYXJyYXkgb2YgQUxMIHN0YXRlIGNvbmZpZ3MuXG4gICAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0PX0gY29udGV4dCBXaGVuIHN0YXRlT3JOYW1lIGlzIGEgcmVsYXRpdmUgc3RhdGUgcmVmZXJlbmNlLCB0aGUgc3RhdGUgd2lsbCBiZSByZXRyaWV2ZWQgcmVsYXRpdmUgdG8gY29udGV4dC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fEFycmF5fSBTdGF0ZSBjb25maWd1cmF0aW9uIG9iamVjdCBvciBhcnJheSBvZiBhbGwgb2JqZWN0cy5cbiAgICAgKi9cbiAgICAkc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKHN0YXRlT3JOYW1lLCBjb250ZXh0KSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG1hcChvYmplY3RLZXlzKHN0YXRlcyksIGZ1bmN0aW9uKG5hbWUpIHsgcmV0dXJuIHN0YXRlc1tuYW1lXS5zZWxmOyB9KTtcbiAgICAgIHZhciBzdGF0ZSA9IGZpbmRTdGF0ZShzdGF0ZU9yTmFtZSwgY29udGV4dCB8fCAkc3RhdGUuJGN1cnJlbnQpO1xuICAgICAgcmV0dXJuIChzdGF0ZSAmJiBzdGF0ZS5zZWxmKSA/IHN0YXRlLnNlbGYgOiBudWxsO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlU3RhdGUoc3RhdGUsIHBhcmFtcywgcGFyYW1zQXJlRmlsdGVyZWQsIGluaGVyaXRlZCwgZHN0LCBvcHRpb25zKSB7XG4gICAgICAvLyBNYWtlIGEgcmVzdHJpY3RlZCAkc3RhdGVQYXJhbXMgd2l0aCBvbmx5IHRoZSBwYXJhbWV0ZXJzIHRoYXQgYXBwbHkgdG8gdGhpcyBzdGF0ZSBpZlxuICAgICAgLy8gbmVjZXNzYXJ5LiBJbiBhZGRpdGlvbiB0byBiZWluZyBhdmFpbGFibGUgdG8gdGhlIGNvbnRyb2xsZXIgYW5kIG9uRW50ZXIvb25FeGl0IGNhbGxiYWNrcyxcbiAgICAgIC8vIHdlIGFsc28gbmVlZCAkc3RhdGVQYXJhbXMgdG8gYmUgYXZhaWxhYmxlIGZvciBhbnkgJGluamVjdG9yIGNhbGxzIHdlIG1ha2UgZHVyaW5nIHRoZVxuICAgICAgLy8gZGVwZW5kZW5jeSByZXNvbHV0aW9uIHByb2Nlc3MuXG4gICAgICB2YXIgJHN0YXRlUGFyYW1zID0gKHBhcmFtc0FyZUZpbHRlcmVkKSA/IHBhcmFtcyA6IGZpbHRlckJ5S2V5cyhzdGF0ZS5wYXJhbXMuJCRrZXlzKCksIHBhcmFtcyk7XG4gICAgICB2YXIgbG9jYWxzID0geyAkc3RhdGVQYXJhbXM6ICRzdGF0ZVBhcmFtcyB9O1xuXG4gICAgICAvLyBSZXNvbHZlICdnbG9iYWwnIGRlcGVuZGVuY2llcyBmb3IgdGhlIHN0YXRlLCBpLmUuIHRob3NlIG5vdCBzcGVjaWZpYyB0byBhIHZpZXcuXG4gICAgICAvLyBXZSdyZSBhbHNvIGluY2x1ZGluZyAkc3RhdGVQYXJhbXMgaW4gdGhpczsgdGhhdCB3YXkgdGhlIHBhcmFtZXRlcnMgYXJlIHJlc3RyaWN0ZWRcbiAgICAgIC8vIHRvIHRoZSBzZXQgdGhhdCBzaG91bGQgYmUgdmlzaWJsZSB0byB0aGUgc3RhdGUsIGFuZCBhcmUgaW5kZXBlbmRlbnQgb2Ygd2hlbiB3ZSB1cGRhdGVcbiAgICAgIC8vIHRoZSBnbG9iYWwgJHN0YXRlIGFuZCAkc3RhdGVQYXJhbXMgdmFsdWVzLlxuICAgICAgZHN0LnJlc29sdmUgPSAkcmVzb2x2ZS5yZXNvbHZlKHN0YXRlLnJlc29sdmUsIGxvY2FscywgZHN0LnJlc29sdmUsIHN0YXRlKTtcbiAgICAgIHZhciBwcm9taXNlcyA9IFtkc3QucmVzb2x2ZS50aGVuKGZ1bmN0aW9uIChnbG9iYWxzKSB7XG4gICAgICAgIGRzdC5nbG9iYWxzID0gZ2xvYmFscztcbiAgICAgIH0pXTtcbiAgICAgIGlmIChpbmhlcml0ZWQpIHByb21pc2VzLnB1c2goaW5oZXJpdGVkKTtcblxuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVZpZXdzKCkge1xuICAgICAgICB2YXIgdmlld3NQcm9taXNlcyA9IFtdO1xuXG4gICAgICAgIC8vIFJlc29sdmUgdGVtcGxhdGUgYW5kIGRlcGVuZGVuY2llcyBmb3IgYWxsIHZpZXdzLlxuICAgICAgICBmb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywgbmFtZSkge1xuICAgICAgICAgIHZhciBpbmplY3RhYmxlcyA9ICh2aWV3LnJlc29sdmUgJiYgdmlldy5yZXNvbHZlICE9PSBzdGF0ZS5yZXNvbHZlID8gdmlldy5yZXNvbHZlIDoge30pO1xuICAgICAgICAgIGluamVjdGFibGVzLiR0ZW1wbGF0ZSA9IFsgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICR2aWV3LmxvYWQobmFtZSwgeyB2aWV3OiB2aWV3LCBsb2NhbHM6IGRzdC5nbG9iYWxzLCBwYXJhbXM6ICRzdGF0ZVBhcmFtcywgbm90aWZ5OiBvcHRpb25zLm5vdGlmeSB9KSB8fCAnJztcbiAgICAgICAgICB9XTtcblxuICAgICAgICAgIHZpZXdzUHJvbWlzZXMucHVzaCgkcmVzb2x2ZS5yZXNvbHZlKGluamVjdGFibGVzLCBkc3QuZ2xvYmFscywgZHN0LnJlc29sdmUsIHN0YXRlKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIC8vIFJlZmVyZW5jZXMgdG8gdGhlIGNvbnRyb2xsZXIgKG9ubHkgaW5zdGFudGlhdGVkIGF0IGxpbmsgdGltZSlcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHZpZXcuY29udHJvbGxlclByb3ZpZGVyKSB8fCBpc0FycmF5KHZpZXcuY29udHJvbGxlclByb3ZpZGVyKSkge1xuICAgICAgICAgICAgICB2YXIgaW5qZWN0TG9jYWxzID0gYW5ndWxhci5leHRlbmQoe30sIGluamVjdGFibGVzLCBkc3QuZ2xvYmFscyk7XG4gICAgICAgICAgICAgIHJlc3VsdC4kJGNvbnRyb2xsZXIgPSAkaW5qZWN0b3IuaW52b2tlKHZpZXcuY29udHJvbGxlclByb3ZpZGVyLCBudWxsLCBpbmplY3RMb2NhbHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0LiQkY29udHJvbGxlciA9IHZpZXcuY29udHJvbGxlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByb3ZpZGUgYWNjZXNzIHRvIHRoZSBzdGF0ZSBpdHNlbGYgZm9yIGludGVybmFsIHVzZVxuICAgICAgICAgICAgcmVzdWx0LiQkc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIHJlc3VsdC4kJGNvbnRyb2xsZXJBcyA9IHZpZXcuY29udHJvbGxlckFzO1xuICAgICAgICAgICAgcmVzdWx0LiQkcmVzb2x2ZUFzID0gdmlldy5yZXNvbHZlQXM7XG4gICAgICAgICAgICBkc3RbbmFtZV0gPSByZXN1bHQ7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gJHEuYWxsKHZpZXdzUHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICByZXR1cm4gZHN0Lmdsb2JhbHM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBXYWl0IGZvciBhbGwgdGhlIHByb21pc2VzIGFuZCB0aGVuIHJldHVybiB0aGUgYWN0aXZhdGlvbiBvYmplY3RcbiAgICAgIHJldHVybiAkcS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzb2x2ZVZpZXdzKS50aGVuKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGRzdDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAkc3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRTa2lwUmVsb2FkKHRvLCB0b1BhcmFtcywgZnJvbSwgZnJvbVBhcmFtcywgbG9jYWxzLCBvcHRpb25zKSB7XG4gICAgLy8gUmV0dXJuIHRydWUgaWYgdGhlcmUgYXJlIG5vIGRpZmZlcmVuY2VzIGluIG5vbi1zZWFyY2ggKHBhdGgvb2JqZWN0KSBwYXJhbXMsIGZhbHNlIGlmIHRoZXJlIGFyZSBkaWZmZXJlbmNlc1xuICAgIGZ1bmN0aW9uIG5vblNlYXJjaFBhcmFtc0VxdWFsKGZyb21BbmRUb1N0YXRlLCBmcm9tUGFyYW1zLCB0b1BhcmFtcykge1xuICAgICAgLy8gSWRlbnRpZnkgd2hldGhlciBhbGwgdGhlIHBhcmFtZXRlcnMgdGhhdCBkaWZmZXIgYmV0d2VlbiBgZnJvbVBhcmFtc2AgYW5kIGB0b1BhcmFtc2Agd2VyZSBzZWFyY2ggcGFyYW1zLlxuICAgICAgZnVuY3Rpb24gbm90U2VhcmNoUGFyYW0oa2V5KSB7XG4gICAgICAgIHJldHVybiBmcm9tQW5kVG9TdGF0ZS5wYXJhbXNba2V5XS5sb2NhdGlvbiAhPSBcInNlYXJjaFwiO1xuICAgICAgfVxuICAgICAgdmFyIG5vblF1ZXJ5UGFyYW1LZXlzID0gZnJvbUFuZFRvU3RhdGUucGFyYW1zLiQka2V5cygpLmZpbHRlcihub3RTZWFyY2hQYXJhbSk7XG4gICAgICB2YXIgbm9uUXVlcnlQYXJhbXMgPSBwaWNrLmFwcGx5KHt9LCBbZnJvbUFuZFRvU3RhdGUucGFyYW1zXS5jb25jYXQobm9uUXVlcnlQYXJhbUtleXMpKTtcbiAgICAgIHZhciBub25RdWVyeVBhcmFtU2V0ID0gbmV3ICQkVU1GUC5QYXJhbVNldChub25RdWVyeVBhcmFtcyk7XG4gICAgICByZXR1cm4gbm9uUXVlcnlQYXJhbVNldC4kJGVxdWFscyhmcm9tUGFyYW1zLCB0b1BhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSWYgcmVsb2FkIHdhcyBub3QgZXhwbGljaXRseSByZXF1ZXN0ZWRcbiAgICAvLyBhbmQgd2UncmUgdHJhbnNpdGlvbmluZyB0byB0aGUgc2FtZSBzdGF0ZSB3ZSdyZSBhbHJlYWR5IGluXG4gICAgLy8gYW5kICAgIHRoZSBsb2NhbHMgZGlkbid0IGNoYW5nZVxuICAgIC8vICAgICBvciB0aGV5IGNoYW5nZWQgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IG1lcml0IHJlbG9hZGluZ1xuICAgIC8vICAgICAgICAocmVsb2FkT25QYXJhbXM6ZmFsc2UsIG9yIHJlbG9hZE9uU2VhcmNoLmZhbHNlIGFuZCBvbmx5IHNlYXJjaCBwYXJhbXMgY2hhbmdlZClcbiAgICAvLyBUaGVuIHJldHVybiB0cnVlLlxuICAgIGlmICghb3B0aW9ucy5yZWxvYWQgJiYgdG8gPT09IGZyb20gJiZcbiAgICAgIChsb2NhbHMgPT09IGZyb20ubG9jYWxzIHx8ICh0by5zZWxmLnJlbG9hZE9uU2VhcmNoID09PSBmYWxzZSAmJiBub25TZWFyY2hQYXJhbXNFcXVhbChmcm9tLCBmcm9tUGFyYW1zLCB0b1BhcmFtcykpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIuc3RhdGUnKVxuICAuZmFjdG9yeSgnJHN0YXRlUGFyYW1zJywgZnVuY3Rpb24gKCkgeyByZXR1cm4ge307IH0pXG4gIC5jb25zdGFudChcIiRzdGF0ZS5ydW50aW1lXCIsIHsgYXV0b2luamVjdDogdHJ1ZSB9KVxuICAucHJvdmlkZXIoJyRzdGF0ZScsICRTdGF0ZVByb3ZpZGVyKVxuICAvLyBJbmplY3QgJHN0YXRlIHRvIGluaXRpYWxpemUgd2hlbiBlbnRlcmluZyBydW50aW1lLiAjMjU3NFxuICAucnVuKFsnJGluamVjdG9yJywgZnVuY3Rpb24gKCRpbmplY3Rvcikge1xuICAgIC8vIEFsbG93IHRlc3RzIChzdGF0ZVNwZWMuanMpIHRvIHR1cm4gdGhpcyBvZmYgYnkgZGVmaW5pbmcgdGhpcyBjb25zdGFudFxuICAgIGlmICgkaW5qZWN0b3IuZ2V0KFwiJHN0YXRlLnJ1bnRpbWVcIikuYXV0b2luamVjdCkge1xuICAgICAgJGluamVjdG9yLmdldCgnJHN0YXRlJyk7XG4gICAgfVxuICB9XSk7XG5cblxuJFZpZXdQcm92aWRlci4kaW5qZWN0ID0gW107XG5mdW5jdGlvbiAkVmlld1Byb3ZpZGVyKCkge1xuXG4gIHRoaXMuJGdldCA9ICRnZXQ7XG4gIC8qKlxuICAgKiBAbmdkb2Mgb2JqZWN0XG4gICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kdmlld1xuICAgKlxuICAgKiBAcmVxdWlyZXMgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeVxuICAgKiBAcmVxdWlyZXMgJHJvb3RTY29wZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICpcbiAgICovXG4gICRnZXQuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckdGVtcGxhdGVGYWN0b3J5J107XG4gIGZ1bmN0aW9uICRnZXQoICAgJHJvb3RTY29wZSwgICAkdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vICR2aWV3LmxvYWQoJ2Z1bGwudmlld05hbWUnLCB7IHRlbXBsYXRlOiAuLi4sIGNvbnRyb2xsZXI6IC4uLiwgcmVzb2x2ZTogLi4uLCBhc3luYzogZmFsc2UsIHBhcmFtczogLi4uIH0pXG4gICAgICAvKipcbiAgICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLiR2aWV3I2xvYWRcbiAgICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHZpZXdcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb24gb2JqZWN0LlxuICAgICAgICovXG4gICAgICBsb2FkOiBmdW5jdGlvbiBsb2FkKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCwgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgdGVtcGxhdGU6IG51bGwsIGNvbnRyb2xsZXI6IG51bGwsIHZpZXc6IG51bGwsIGxvY2FsczogbnVsbCwgbm90aWZ5OiB0cnVlLCBhc3luYzogdHJ1ZSwgcGFyYW1zOiB7fVxuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAob3B0aW9ucy52aWV3KSB7XG4gICAgICAgICAgcmVzdWx0ID0gJHRlbXBsYXRlRmFjdG9yeS5mcm9tQ29uZmlnKG9wdGlvbnMudmlldywgb3B0aW9ucy5wYXJhbXMsIG9wdGlvbnMubG9jYWxzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci5zdGF0ZScpLnByb3ZpZGVyKCckdmlldycsICRWaWV3UHJvdmlkZXIpO1xuXG4vKipcbiAqIEBuZ2RvYyBvYmplY3RcbiAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kdWlWaWV3U2Nyb2xsUHJvdmlkZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS4kdWlWaWV3U2Nyb2xsfSBzZXJ2aWNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiAkVmlld1Njcm9sbFByb3ZpZGVyKCkge1xuXG4gIHZhciB1c2VBbmNob3JTY3JvbGwgPSBmYWxzZTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kdWlWaWV3U2Nyb2xsUHJvdmlkZXIjdXNlQW5jaG9yU2Nyb2xsXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHVpVmlld1Njcm9sbFByb3ZpZGVyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXZlcnRzIGJhY2sgdG8gdXNpbmcgdGhlIGNvcmUgW2AkYW5jaG9yU2Nyb2xsYF0oaHR0cDovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmcuJGFuY2hvclNjcm9sbCkgc2VydmljZSBmb3JcbiAgICogc2Nyb2xsaW5nIGJhc2VkIG9uIHRoZSB1cmwgYW5jaG9yLlxuICAgKi9cbiAgdGhpcy51c2VBbmNob3JTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdXNlQW5jaG9yU2Nyb2xsID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIG9iamVjdFxuICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHVpVmlld1Njcm9sbFxuICAgKlxuICAgKiBAcmVxdWlyZXMgJGFuY2hvclNjcm9sbFxuICAgKiBAcmVxdWlyZXMgJHRpbWVvdXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFdoZW4gY2FsbGVkIHdpdGggYSBqcUxpdGUgZWxlbWVudCwgaXQgc2Nyb2xscyB0aGUgZWxlbWVudCBpbnRvIHZpZXcgKGFmdGVyIGFcbiAgICogYCR0aW1lb3V0YCBzbyB0aGUgRE9NIGhhcyB0aW1lIHRvIHJlZnJlc2gpLlxuICAgKlxuICAgKiBJZiB5b3UgcHJlZmVyIHRvIHJlbHkgb24gYCRhbmNob3JTY3JvbGxgIHRvIHNjcm9sbCB0aGUgdmlldyB0byB0aGUgYW5jaG9yLFxuICAgKiB0aGlzIGNhbiBiZSBlbmFibGVkIGJ5IGNhbGxpbmcge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS4kdWlWaWV3U2Nyb2xsUHJvdmlkZXIjbWV0aG9kc191c2VBbmNob3JTY3JvbGwgYCR1aVZpZXdTY3JvbGxQcm92aWRlci51c2VBbmNob3JTY3JvbGwoKWB9LlxuICAgKi9cbiAgdGhpcy4kZ2V0ID0gWyckYW5jaG9yU2Nyb2xsJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRhbmNob3JTY3JvbGwsICR0aW1lb3V0KSB7XG4gICAgaWYgKHVzZUFuY2hvclNjcm9sbCkge1xuICAgICAgcmV0dXJuICRhbmNob3JTY3JvbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICAgcmV0dXJuICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGVsZW1lbnRbMF0uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH0sIDAsIGZhbHNlKTtcbiAgICB9O1xuICB9XTtcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci5zdGF0ZScpLnByb3ZpZGVyKCckdWlWaWV3U2Nyb2xsJywgJFZpZXdTY3JvbGxQcm92aWRlcik7XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgdWkucm91dGVyLnN0YXRlLmRpcmVjdGl2ZTp1aS12aWV3XG4gKlxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAqIEByZXF1aXJlcyAkY29tcGlsZVxuICogQHJlcXVpcmVzICRjb250cm9sbGVyXG4gKiBAcmVxdWlyZXMgJGluamVjdG9yXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnN0YXRlLiR1aVZpZXdTY3JvbGxcbiAqIEByZXF1aXJlcyAkZG9jdW1lbnRcbiAqXG4gKiBAcmVzdHJpY3QgRUNBXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgdWktdmlldyBkaXJlY3RpdmUgdGVsbHMgJHN0YXRlIHdoZXJlIHRvIHBsYWNlIHlvdXIgdGVtcGxhdGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbmFtZSBBIHZpZXcgbmFtZS4gVGhlIG5hbWUgc2hvdWxkIGJlIHVuaXF1ZSBhbW9uZ3N0IHRoZSBvdGhlciB2aWV3cyBpbiB0aGVcbiAqIHNhbWUgc3RhdGUuIFlvdSBjYW4gaGF2ZSB2aWV3cyBvZiB0aGUgc2FtZSBuYW1lIHRoYXQgbGl2ZSBpbiBkaWZmZXJlbnQgc3RhdGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gYXV0b3Njcm9sbCBJdCBhbGxvd3MgeW91IHRvIHNldCB0aGUgc2Nyb2xsIGJlaGF2aW9yIG9mIHRoZSBicm93c2VyIHdpbmRvd1xuICogd2hlbiBhIHZpZXcgaXMgcG9wdWxhdGVkLiBCeSBkZWZhdWx0LCAkYW5jaG9yU2Nyb2xsIGlzIG92ZXJyaWRkZW4gYnkgdWktcm91dGVyJ3MgY3VzdG9tIHNjcm9sbFxuICogc2VydmljZSwge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS4kdWlWaWV3U2Nyb2xsfS4gVGhpcyBjdXN0b20gc2VydmljZSBsZXQncyB5b3VcbiAqIHNjcm9sbCB1aS12aWV3IGVsZW1lbnRzIGludG8gdmlldyB3aGVuIHRoZXkgYXJlIHBvcHVsYXRlZCBkdXJpbmcgYSBzdGF0ZSBhY3RpdmF0aW9uLlxuICpcbiAqICpOb3RlOiBUbyByZXZlcnQgYmFjayB0byBvbGQgW2AkYW5jaG9yU2Nyb2xsYF0oaHR0cDovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmcuJGFuY2hvclNjcm9sbClcbiAqIGZ1bmN0aW9uYWxpdHksIGNhbGwgYCR1aVZpZXdTY3JvbGxQcm92aWRlci51c2VBbmNob3JTY3JvbGwoKWAuKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gb25sb2FkIEV4cHJlc3Npb24gdG8gZXZhbHVhdGUgd2hlbmV2ZXIgdGhlIHZpZXcgdXBkYXRlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogQSB2aWV3IGNhbiBiZSB1bm5hbWVkIG9yIG5hbWVkLlxuICogPHByZT5cbiAqIDwhLS0gVW5uYW1lZCAtLT5cbiAqIDxkaXYgdWktdmlldz48L2Rpdj5cbiAqXG4gKiA8IS0tIE5hbWVkIC0tPlxuICogPGRpdiB1aS12aWV3PVwidmlld05hbWVcIj48L2Rpdj5cbiAqIDwvcHJlPlxuICpcbiAqIFlvdSBjYW4gb25seSBoYXZlIG9uZSB1bm5hbWVkIHZpZXcgd2l0aGluIGFueSB0ZW1wbGF0ZSAob3Igcm9vdCBodG1sKS4gSWYgeW91IGFyZSBvbmx5IHVzaW5nIGFcbiAqIHNpbmdsZSB2aWV3IGFuZCBpdCBpcyB1bm5hbWVkIHRoZW4geW91IGNhbiBwb3B1bGF0ZSBpdCBsaWtlIHNvOlxuICogPHByZT5cbiAqIDxkaXYgdWktdmlldz48L2Rpdj5cbiAqICRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiaG9tZVwiLCB7XG4gKiAgIHRlbXBsYXRlOiBcIjxoMT5IRUxMTyE8L2gxPlwiXG4gKiB9KVxuICogPC9wcmU+XG4gKlxuICogVGhlIGFib3ZlIGlzIGEgY29udmVuaWVudCBzaG9ydGN1dCBlcXVpdmFsZW50IHRvIHNwZWNpZnlpbmcgeW91ciB2aWV3IGV4cGxpY2l0bHkgd2l0aCB0aGUge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQcm92aWRlciNtZXRob2RzX3N0YXRlIGB2aWV3c2B9XG4gKiBjb25maWcgcHJvcGVydHksIGJ5IG5hbWUsIGluIHRoaXMgY2FzZSBhbiBlbXB0eSBuYW1lOlxuICogPHByZT5cbiAqICRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiaG9tZVwiLCB7XG4gKiAgIHZpZXdzOiB7XG4gKiAgICAgXCJcIjoge1xuICogICAgICAgdGVtcGxhdGU6IFwiPGgxPkhFTExPITwvaDE+XCJcbiAqICAgICB9XG4gKiAgIH0gICAgXG4gKiB9KVxuICogPC9wcmU+XG4gKlxuICogQnV0IHR5cGljYWxseSB5b3UnbGwgb25seSB1c2UgdGhlIHZpZXdzIHByb3BlcnR5IGlmIHlvdSBuYW1lIHlvdXIgdmlldyBvciBoYXZlIG1vcmUgdGhhbiBvbmUgdmlld1xuICogaW4gdGhlIHNhbWUgdGVtcGxhdGUuIFRoZXJlJ3Mgbm90IHJlYWxseSBhIGNvbXBlbGxpbmcgcmVhc29uIHRvIG5hbWUgYSB2aWV3IGlmIGl0cyB0aGUgb25seSBvbmUsXG4gKiBidXQgeW91IGNvdWxkIGlmIHlvdSB3YW50ZWQsIGxpa2Ugc286XG4gKiA8cHJlPlxuICogPGRpdiB1aS12aWV3PVwibWFpblwiPjwvZGl2PlxuICogPC9wcmU+XG4gKiA8cHJlPlxuICogJHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJob21lXCIsIHtcbiAqICAgdmlld3M6IHtcbiAqICAgICBcIm1haW5cIjoge1xuICogICAgICAgdGVtcGxhdGU6IFwiPGgxPkhFTExPITwvaDE+XCJcbiAqICAgICB9XG4gKiAgIH0gICAgXG4gKiB9KVxuICogPC9wcmU+XG4gKlxuICogUmVhbGx5IHRob3VnaCwgeW91J2xsIHVzZSB2aWV3cyB0byBzZXQgdXAgbXVsdGlwbGUgdmlld3M6XG4gKiA8cHJlPlxuICogPGRpdiB1aS12aWV3PjwvZGl2PlxuICogPGRpdiB1aS12aWV3PVwiY2hhcnRcIj48L2Rpdj5cbiAqIDxkaXYgdWktdmlldz1cImRhdGFcIj48L2Rpdj5cbiAqIDwvcHJlPlxuICpcbiAqIDxwcmU+XG4gKiAkc3RhdGVQcm92aWRlci5zdGF0ZShcImhvbWVcIiwge1xuICogICB2aWV3czoge1xuICogICAgIFwiXCI6IHtcbiAqICAgICAgIHRlbXBsYXRlOiBcIjxoMT5IRUxMTyE8L2gxPlwiXG4gKiAgICAgfSxcbiAqICAgICBcImNoYXJ0XCI6IHtcbiAqICAgICAgIHRlbXBsYXRlOiBcIjxjaGFydF90aGluZy8+XCJcbiAqICAgICB9LFxuICogICAgIFwiZGF0YVwiOiB7XG4gKiAgICAgICB0ZW1wbGF0ZTogXCI8ZGF0YV90aGluZy8+XCJcbiAqICAgICB9XG4gKiAgIH0gICAgXG4gKiB9KVxuICogPC9wcmU+XG4gKlxuICogRXhhbXBsZXMgZm9yIGBhdXRvc2Nyb2xsYDpcbiAqXG4gKiA8cHJlPlxuICogPCEtLSBJZiBhdXRvc2Nyb2xsIHByZXNlbnQgd2l0aCBubyBleHByZXNzaW9uLFxuICogICAgICB0aGVuIHNjcm9sbCB1aS12aWV3IGludG8gdmlldyAtLT5cbiAqIDx1aS12aWV3IGF1dG9zY3JvbGwvPlxuICpcbiAqIDwhLS0gSWYgYXV0b3Njcm9sbCBwcmVzZW50IHdpdGggdmFsaWQgZXhwcmVzc2lvbixcbiAqICAgICAgdGhlbiBzY3JvbGwgdWktdmlldyBpbnRvIHZpZXcgaWYgZXhwcmVzc2lvbiBldmFsdWF0ZXMgdG8gdHJ1ZSAtLT5cbiAqIDx1aS12aWV3IGF1dG9zY3JvbGw9J3RydWUnLz5cbiAqIDx1aS12aWV3IGF1dG9zY3JvbGw9J2ZhbHNlJy8+XG4gKiA8dWktdmlldyBhdXRvc2Nyb2xsPSdzY29wZVZhcmlhYmxlJy8+XG4gKiA8L3ByZT5cbiAqXG4gKiBSZXNvbHZlIGRhdGE6XG4gKlxuICogVGhlIHJlc29sdmVkIGRhdGEgZnJvbSB0aGUgc3RhdGUncyBgcmVzb2x2ZWAgYmxvY2sgaXMgcGxhY2VkIG9uIHRoZSBzY29wZSBhcyBgJHJlc29sdmVgICh0aGlzXG4gKiBjYW4gYmUgY3VzdG9taXplZCB1c2luZyBbW1ZpZXdEZWNsYXJhdGlvbi5yZXNvbHZlQXNdXSkuICBUaGlzIGNhbiBiZSB0aGVuIGFjY2Vzc2VkIGZyb20gdGhlIHRlbXBsYXRlLlxuICpcbiAqIE5vdGUgdGhhdCB3aGVuIGBjb250cm9sbGVyQXNgIGlzIGJlaW5nIHVzZWQsIGAkcmVzb2x2ZWAgaXMgc2V0IG9uIHRoZSBjb250cm9sbGVyIGluc3RhbmNlICphZnRlciogdGhlXG4gKiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZC4gIFRoZSBgJG9uSW5pdCgpYCBob29rIGNhbiBiZSB1c2VkIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gY29kZSB3aGljaFxuICogZGVwZW5kcyBvbiBgJHJlc29sdmVgIGRhdGEuXG4gKlxuICogRXhhbXBsZSB1c2FnZSBvZiAkcmVzb2x2ZSBpbiBhIHZpZXcgdGVtcGxhdGVcbiAqIDxwcmU+XG4gKiAkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcbiAqICAgdGVtcGxhdGU6ICc8bXktY29tcG9uZW50IHVzZXI9XCIkcmVzb2x2ZS51c2VyXCI+PC9teS1jb21wb25lbnQ+JyxcbiAqICAgcmVzb2x2ZToge1xuICogICAgIHVzZXI6IGZ1bmN0aW9uKFVzZXJTZXJ2aWNlKSB7IHJldHVybiBVc2VyU2VydmljZS5mZXRjaFVzZXIoKTsgfVxuICogICB9XG4gKiB9KTtcbiAqIDwvcHJlPlxuICovXG4kVmlld0RpcmVjdGl2ZS4kaW5qZWN0ID0gWyckc3RhdGUnLCAnJGluamVjdG9yJywgJyR1aVZpZXdTY3JvbGwnLCAnJGludGVycG9sYXRlJywgJyRxJ107XG5mdW5jdGlvbiAkVmlld0RpcmVjdGl2ZSggICAkc3RhdGUsICAgJGluamVjdG9yLCAgICR1aVZpZXdTY3JvbGwsICAgJGludGVycG9sYXRlLCAgICRxKSB7XG5cbiAgZnVuY3Rpb24gZ2V0U2VydmljZSgpIHtcbiAgICByZXR1cm4gKCRpbmplY3Rvci5oYXMpID8gZnVuY3Rpb24oc2VydmljZSkge1xuICAgICAgcmV0dXJuICRpbmplY3Rvci5oYXMoc2VydmljZSkgPyAkaW5qZWN0b3IuZ2V0KHNlcnZpY2UpIDogbnVsbDtcbiAgICB9IDogZnVuY3Rpb24oc2VydmljZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICRpbmplY3Rvci5nZXQoc2VydmljZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgc2VydmljZSA9IGdldFNlcnZpY2UoKSxcbiAgICAgICRhbmltYXRvciA9IHNlcnZpY2UoJyRhbmltYXRvcicpLFxuICAgICAgJGFuaW1hdGUgPSBzZXJ2aWNlKCckYW5pbWF0ZScpO1xuXG4gIC8vIFJldHVybnMgYSBzZXQgb2YgRE9NIG1hbmlwdWxhdGlvbiBmdW5jdGlvbnMgYmFzZWQgb24gd2hpY2ggQW5ndWxhciB2ZXJzaW9uXG4gIC8vIGl0IHNob3VsZCB1c2VcbiAgZnVuY3Rpb24gZ2V0UmVuZGVyZXIoYXR0cnMsIHNjb3BlKSB7XG4gICAgdmFyIHN0YXRpY3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAoZWxlbWVudCwgdGFyZ2V0LCBjYikgeyB0YXJnZXQuYWZ0ZXIoZWxlbWVudCk7IGNiKCk7IH0sXG4gICAgICAgIGxlYXZlOiBmdW5jdGlvbiAoZWxlbWVudCwgY2IpIHsgZWxlbWVudC5yZW1vdmUoKTsgY2IoKTsgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgaWYgKCRhbmltYXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbnRlcjogZnVuY3Rpb24oZWxlbWVudCwgdGFyZ2V0LCBjYikge1xuICAgICAgICAgIGlmIChhbmd1bGFyLnZlcnNpb24ubWlub3IgPiAyKSB7XG4gICAgICAgICAgICAkYW5pbWF0ZS5lbnRlcihlbGVtZW50LCBudWxsLCB0YXJnZXQpLnRoZW4oY2IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYW5pbWF0ZS5lbnRlcihlbGVtZW50LCBudWxsLCB0YXJnZXQsIGNiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxlYXZlOiBmdW5jdGlvbihlbGVtZW50LCBjYikge1xuICAgICAgICAgIGlmIChhbmd1bGFyLnZlcnNpb24ubWlub3IgPiAyKSB7XG4gICAgICAgICAgICAkYW5pbWF0ZS5sZWF2ZShlbGVtZW50KS50aGVuKGNiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGFuaW1hdGUubGVhdmUoZWxlbWVudCwgY2IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoJGFuaW1hdG9yKSB7XG4gICAgICB2YXIgYW5pbWF0ZSA9ICRhbmltYXRvciAmJiAkYW5pbWF0b3Ioc2NvcGUsIGF0dHJzKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uKGVsZW1lbnQsIHRhcmdldCwgY2IpIHthbmltYXRlLmVudGVyKGVsZW1lbnQsIG51bGwsIHRhcmdldCk7IGNiKCk7IH0sXG4gICAgICAgIGxlYXZlOiBmdW5jdGlvbihlbGVtZW50LCBjYikgeyBhbmltYXRlLmxlYXZlKGVsZW1lbnQpOyBjYigpOyB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0aWNzKCk7XG4gIH1cblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRUNBJyxcbiAgICB0ZXJtaW5hbDogdHJ1ZSxcbiAgICBwcmlvcml0eTogNDAwLFxuICAgIHRyYW5zY2x1ZGU6ICdlbGVtZW50JyxcbiAgICBjb21waWxlOiBmdW5jdGlvbiAodEVsZW1lbnQsIHRBdHRycywgJHRyYW5zY2x1ZGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUsICRlbGVtZW50LCBhdHRycykge1xuICAgICAgICB2YXIgcHJldmlvdXNFbCwgY3VycmVudEVsLCBjdXJyZW50U2NvcGUsIGxhdGVzdExvY2FscyxcbiAgICAgICAgICAgIG9ubG9hZEV4cCAgICAgPSBhdHRycy5vbmxvYWQgfHwgJycsXG4gICAgICAgICAgICBhdXRvU2Nyb2xsRXhwID0gYXR0cnMuYXV0b3Njcm9sbCxcbiAgICAgICAgICAgIHJlbmRlcmVyICAgICAgPSBnZXRSZW5kZXJlcihhdHRycywgc2NvcGUpLFxuICAgICAgICAgICAgaW5oZXJpdGVkICAgICA9ICRlbGVtZW50LmluaGVyaXRlZERhdGEoJyR1aVZpZXcnKTtcblxuICAgICAgICBzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB1cGRhdGVWaWV3KGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlVmlldyh0cnVlKTtcblxuICAgICAgICBmdW5jdGlvbiBjbGVhbnVwTGFzdFZpZXcoKSB7XG4gICAgICAgICAgaWYgKHByZXZpb3VzRWwpIHtcbiAgICAgICAgICAgIHByZXZpb3VzRWwucmVtb3ZlKCk7XG4gICAgICAgICAgICBwcmV2aW91c0VsID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY3VycmVudFNjb3BlKSB7XG4gICAgICAgICAgICBjdXJyZW50U2NvcGUuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY29wZSA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGN1cnJlbnRFbCkge1xuICAgICAgICAgICAgdmFyICR1aVZpZXdEYXRhID0gY3VycmVudEVsLmRhdGEoJyR1aVZpZXdBbmltJyk7XG4gICAgICAgICAgICByZW5kZXJlci5sZWF2ZShjdXJyZW50RWwsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkdWlWaWV3RGF0YS4kJGFuaW1MZWF2ZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgIHByZXZpb3VzRWwgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByZXZpb3VzRWwgPSBjdXJyZW50RWw7XG4gICAgICAgICAgICBjdXJyZW50RWwgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoZmlyc3RUaW1lKSB7XG4gICAgICAgICAgdmFyIG5ld1Njb3BlLFxuICAgICAgICAgICAgICBuYW1lICAgICAgICAgICAgPSBnZXRVaVZpZXdOYW1lKHNjb3BlLCBhdHRycywgJGVsZW1lbnQsICRpbnRlcnBvbGF0ZSksXG4gICAgICAgICAgICAgIHByZXZpb3VzTG9jYWxzICA9IG5hbWUgJiYgJHN0YXRlLiRjdXJyZW50ICYmICRzdGF0ZS4kY3VycmVudC5sb2NhbHNbbmFtZV07XG5cbiAgICAgICAgICBpZiAoIWZpcnN0VGltZSAmJiBwcmV2aW91c0xvY2FscyA9PT0gbGF0ZXN0TG9jYWxzKSByZXR1cm47IC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICBuZXdTY29wZSA9IHNjb3BlLiRuZXcoKTtcbiAgICAgICAgICBsYXRlc3RMb2NhbHMgPSAkc3RhdGUuJGN1cnJlbnQubG9jYWxzW25hbWVdO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQG5nZG9jIGV2ZW50XG4gICAgICAgICAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLmRpcmVjdGl2ZTp1aS12aWV3IyR2aWV3Q29udGVudExvYWRpbmdcbiAgICAgICAgICAgKiBAZXZlbnRPZiB1aS5yb3V0ZXIuc3RhdGUuZGlyZWN0aXZlOnVpLXZpZXdcbiAgICAgICAgICAgKiBAZXZlbnRUeXBlIGVtaXRzIG9uIHVpLXZpZXcgZGlyZWN0aXZlIHNjb3BlXG4gICAgICAgICAgICogQGRlc2NyaXB0aW9uXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBGaXJlZCBvbmNlIHRoZSB2aWV3ICoqYmVnaW5zIGxvYWRpbmcqKiwgKmJlZm9yZSogdGhlIERPTSBpcyByZW5kZXJlZC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudCBvYmplY3QuXG4gICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZpZXdOYW1lIE5hbWUgb2YgdGhlIHZpZXcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgbmV3U2NvcGUuJGVtaXQoJyR2aWV3Q29udGVudExvYWRpbmcnLCBuYW1lKTtcblxuICAgICAgICAgIHZhciBjbG9uZSA9ICR0cmFuc2NsdWRlKG5ld1Njb3BlLCBmdW5jdGlvbihjbG9uZSkge1xuICAgICAgICAgICAgdmFyIGFuaW1FbnRlciA9ICRxLmRlZmVyKCksIGFuaW1MZWF2ZSA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdmlld0FuaW1EYXRhID0ge1xuICAgICAgICAgICAgICAkYW5pbUVudGVyOiBhbmltRW50ZXIucHJvbWlzZSxcbiAgICAgICAgICAgICAgJGFuaW1MZWF2ZTogYW5pbUxlYXZlLnByb21pc2UsXG4gICAgICAgICAgICAgICQkYW5pbUxlYXZlOiBhbmltTGVhdmVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNsb25lLmRhdGEoJyR1aVZpZXdBbmltJywgdmlld0FuaW1EYXRhKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmVudGVyKGNsb25lLCAkZWxlbWVudCwgZnVuY3Rpb24gb25VaVZpZXdFbnRlcigpIHtcbiAgICAgICAgICAgICAgYW5pbUVudGVyLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgaWYoY3VycmVudFNjb3BlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjb3BlLiRlbWl0KCckdmlld0NvbnRlbnRBbmltYXRpb25FbmRlZCcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF1dG9TY3JvbGxFeHApICYmICFhdXRvU2Nyb2xsRXhwIHx8IHNjb3BlLiRldmFsKGF1dG9TY3JvbGxFeHApKSB7XG4gICAgICAgICAgICAgICAgJHVpVmlld1Njcm9sbChjbG9uZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2xlYW51cExhc3RWaWV3KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjdXJyZW50RWwgPSBjbG9uZTtcbiAgICAgICAgICBjdXJyZW50U2NvcGUgPSBuZXdTY29wZTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBAbmdkb2MgZXZlbnRcbiAgICAgICAgICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuZGlyZWN0aXZlOnVpLXZpZXcjJHZpZXdDb250ZW50TG9hZGVkXG4gICAgICAgICAgICogQGV2ZW50T2YgdWkucm91dGVyLnN0YXRlLmRpcmVjdGl2ZTp1aS12aWV3XG4gICAgICAgICAgICogQGV2ZW50VHlwZSBlbWl0cyBvbiB1aS12aWV3IGRpcmVjdGl2ZSBzY29wZVxuICAgICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAgICAqIEZpcmVkIG9uY2UgdGhlIHZpZXcgaXMgKipsb2FkZWQqKiwgKmFmdGVyKiB0aGUgRE9NIGlzIHJlbmRlcmVkLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50IG9iamVjdC5cbiAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmlld05hbWUgTmFtZSBvZiB0aGUgdmlldy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjdXJyZW50U2NvcGUuJGVtaXQoJyR2aWV3Q29udGVudExvYWRlZCcsIG5hbWUpO1xuICAgICAgICAgIGN1cnJlbnRTY29wZS4kZXZhbChvbmxvYWRFeHApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG4kVmlld0RpcmVjdGl2ZUZpbGwuJGluamVjdCA9IFsnJGNvbXBpbGUnLCAnJGNvbnRyb2xsZXInLCAnJHN0YXRlJywgJyRpbnRlcnBvbGF0ZSddO1xuZnVuY3Rpb24gJFZpZXdEaXJlY3RpdmVGaWxsICggICRjb21waWxlLCAgICRjb250cm9sbGVyLCAgICRzdGF0ZSwgICAkaW50ZXJwb2xhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VDQScsXG4gICAgcHJpb3JpdHk6IC00MDAsXG4gICAgY29tcGlsZTogZnVuY3Rpb24gKHRFbGVtZW50KSB7XG4gICAgICB2YXIgaW5pdGlhbCA9IHRFbGVtZW50Lmh0bWwoKTtcbiAgICAgIGlmICh0RWxlbWVudC5lbXB0eSkge1xuICAgICAgICB0RWxlbWVudC5lbXB0eSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbmcgMS4wLjAgZG9lc24ndCBoYXZlIGVtcHR5KCksIHdoaWNoIGNsZWFucyB1cCBkYXRhIGFuZCBoYW5kbGVyc1xuICAgICAgICB0RWxlbWVudFswXS5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHNjb3BlLCAkZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAkc3RhdGUuJGN1cnJlbnQsXG4gICAgICAgICAgICBuYW1lID0gZ2V0VWlWaWV3TmFtZShzY29wZSwgYXR0cnMsICRlbGVtZW50LCAkaW50ZXJwb2xhdGUpLFxuICAgICAgICAgICAgbG9jYWxzICA9IGN1cnJlbnQgJiYgY3VycmVudC5sb2NhbHNbbmFtZV07XG5cbiAgICAgICAgaWYgKCEgbG9jYWxzKSB7XG4gICAgICAgICAgJGVsZW1lbnQuaHRtbChpbml0aWFsKTtcbiAgICAgICAgICAkY29tcGlsZSgkZWxlbWVudC5jb250ZW50cygpKShzY29wZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsZW1lbnQuZGF0YSgnJHVpVmlldycsIHsgbmFtZTogbmFtZSwgc3RhdGU6IGxvY2Fscy4kJHN0YXRlIH0pO1xuICAgICAgICAkZWxlbWVudC5odG1sKGxvY2Fscy4kdGVtcGxhdGUgPyBsb2NhbHMuJHRlbXBsYXRlIDogaW5pdGlhbCk7XG5cbiAgICAgICAgdmFyIHJlc29sdmVEYXRhID0gYW5ndWxhci5leHRlbmQoe30sIGxvY2Fscyk7XG4gICAgICAgIHNjb3BlW2xvY2Fscy4kJHJlc29sdmVBc10gPSByZXNvbHZlRGF0YTtcblxuICAgICAgICB2YXIgbGluayA9ICRjb21waWxlKCRlbGVtZW50LmNvbnRlbnRzKCkpO1xuXG4gICAgICAgIGlmIChsb2NhbHMuJCRjb250cm9sbGVyKSB7XG4gICAgICAgICAgbG9jYWxzLiRzY29wZSA9IHNjb3BlO1xuICAgICAgICAgIGxvY2Fscy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgICAgICAgIHZhciBjb250cm9sbGVyID0gJGNvbnRyb2xsZXIobG9jYWxzLiQkY29udHJvbGxlciwgbG9jYWxzKTtcbiAgICAgICAgICBpZiAobG9jYWxzLiQkY29udHJvbGxlckFzKSB7XG4gICAgICAgICAgICBzY29wZVtsb2NhbHMuJCRjb250cm9sbGVyQXNdID0gY29udHJvbGxlcjtcbiAgICAgICAgICAgIHNjb3BlW2xvY2Fscy4kJGNvbnRyb2xsZXJBc11bbG9jYWxzLiQkcmVzb2x2ZUFzXSA9IHJlc29sdmVEYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjb250cm9sbGVyLiRvbkluaXQpKSBjb250cm9sbGVyLiRvbkluaXQoKTtcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKCckbmdDb250cm9sbGVyQ29udHJvbGxlcicsIGNvbnRyb2xsZXIpO1xuICAgICAgICAgICRlbGVtZW50LmNoaWxkcmVuKCkuZGF0YSgnJG5nQ29udHJvbGxlckNvbnRyb2xsZXInLCBjb250cm9sbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmsoc2NvcGUpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogU2hhcmVkIHVpLXZpZXcgY29kZSBmb3IgYm90aCBkaXJlY3RpdmVzOlxuICogR2l2ZW4gc2NvcGUsIGVsZW1lbnQsIGFuZCBpdHMgYXR0cmlidXRlcywgcmV0dXJuIHRoZSB2aWV3J3MgbmFtZVxuICovXG5mdW5jdGlvbiBnZXRVaVZpZXdOYW1lKHNjb3BlLCBhdHRycywgZWxlbWVudCwgJGludGVycG9sYXRlKSB7XG4gIHZhciBuYW1lID0gJGludGVycG9sYXRlKGF0dHJzLnVpVmlldyB8fCBhdHRycy5uYW1lIHx8ICcnKShzY29wZSk7XG4gIHZhciB1aVZpZXdDcmVhdGVkQnkgPSBlbGVtZW50LmluaGVyaXRlZERhdGEoJyR1aVZpZXcnKTtcbiAgcmV0dXJuIG5hbWUuaW5kZXhPZignQCcpID49IDAgPyAgbmFtZSA6ICAobmFtZSArICdAJyArICh1aVZpZXdDcmVhdGVkQnkgPyB1aVZpZXdDcmVhdGVkQnkuc3RhdGUubmFtZSA6ICcnKSk7XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIuc3RhdGUnKS5kaXJlY3RpdmUoJ3VpVmlldycsICRWaWV3RGlyZWN0aXZlKTtcbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIuc3RhdGUnKS5kaXJlY3RpdmUoJ3VpVmlldycsICRWaWV3RGlyZWN0aXZlRmlsbCk7XG5cbmZ1bmN0aW9uIHBhcnNlU3RhdGVSZWYocmVmLCBjdXJyZW50KSB7XG4gIHZhciBwcmVwYXJzZWQgPSByZWYubWF0Y2goL15cXHMqKHtbXn1dKn0pXFxzKiQvKSwgcGFyc2VkO1xuICBpZiAocHJlcGFyc2VkKSByZWYgPSBjdXJyZW50ICsgJygnICsgcHJlcGFyc2VkWzFdICsgJyknO1xuICBwYXJzZWQgPSByZWYucmVwbGFjZSgvXFxuL2csIFwiIFwiKS5tYXRjaCgvXihbXihdKz8pXFxzKihcXCgoLiopXFwpKT8kLyk7XG4gIGlmICghcGFyc2VkIHx8IHBhcnNlZC5sZW5ndGggIT09IDQpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RhdGUgcmVmICdcIiArIHJlZiArIFwiJ1wiKTtcbiAgcmV0dXJuIHsgc3RhdGU6IHBhcnNlZFsxXSwgcGFyYW1FeHByOiBwYXJzZWRbM10gfHwgbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBzdGF0ZUNvbnRleHQoZWwpIHtcbiAgdmFyIHN0YXRlRGF0YSA9IGVsLnBhcmVudCgpLmluaGVyaXRlZERhdGEoJyR1aVZpZXcnKTtcblxuICBpZiAoc3RhdGVEYXRhICYmIHN0YXRlRGF0YS5zdGF0ZSAmJiBzdGF0ZURhdGEuc3RhdGUubmFtZSkge1xuICAgIHJldHVybiBzdGF0ZURhdGEuc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZm8oZWwpIHtcbiAgLy8gU1ZHQUVsZW1lbnQgZG9lcyBub3QgdXNlIHRoZSBocmVmIGF0dHJpYnV0ZSwgYnV0IHJhdGhlciB0aGUgJ3hsaW5rSHJlZicgYXR0cmlidXRlLlxuICB2YXIgaXNTdmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWwucHJvcCgnaHJlZicpKSA9PT0gJ1tvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddJztcbiAgdmFyIGlzRm9ybSA9IGVsWzBdLm5vZGVOYW1lID09PSBcIkZPUk1cIjtcblxuICByZXR1cm4ge1xuICAgIGF0dHI6IGlzRm9ybSA/IFwiYWN0aW9uXCIgOiAoaXNTdmcgPyAneGxpbms6aHJlZicgOiAnaHJlZicpLFxuICAgIGlzQW5jaG9yOiBlbC5wcm9wKFwidGFnTmFtZVwiKS50b1VwcGVyQ2FzZSgpID09PSBcIkFcIixcbiAgICBjbGlja2FibGU6ICFpc0Zvcm1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xpY2tIb29rKGVsLCAkc3RhdGUsICR0aW1lb3V0LCB0eXBlLCBjdXJyZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGJ1dHRvbiA9IGUud2hpY2ggfHwgZS5idXR0b24sIHRhcmdldCA9IGN1cnJlbnQoKTtcblxuICAgIGlmICghKGJ1dHRvbiA+IDEgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLnNoaWZ0S2V5IHx8IGVsLmF0dHIoJ3RhcmdldCcpKSkge1xuICAgICAgLy8gSEFDSzogVGhpcyBpcyB0byBhbGxvdyBuZy1jbGlja3MgdG8gYmUgcHJvY2Vzc2VkIGJlZm9yZSB0aGUgdHJhbnNpdGlvbiBpcyBpbml0aWF0ZWQ6XG4gICAgICB2YXIgdHJhbnNpdGlvbiA9ICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkc3RhdGUuZ28odGFyZ2V0LnN0YXRlLCB0YXJnZXQucGFyYW1zLCB0YXJnZXQub3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gaWYgdGhlIHN0YXRlIGhhcyBubyBVUkwsIGlnbm9yZSBvbmUgcHJldmVudERlZmF1bHQgZnJvbSB0aGUgPGE+IGRpcmVjdGl2ZS5cbiAgICAgIHZhciBpZ25vcmVQcmV2ZW50RGVmYXVsdENvdW50ID0gdHlwZS5pc0FuY2hvciAmJiAhdGFyZ2V0LmhyZWYgPyAxOiAwO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpZ25vcmVQcmV2ZW50RGVmYXVsdENvdW50LS0gPD0gMCkgJHRpbWVvdXQuY2FuY2VsKHRyYW5zaXRpb24pO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRPcHRzKGVsLCAkc3RhdGUpIHtcbiAgcmV0dXJuIHsgcmVsYXRpdmU6IHN0YXRlQ29udGV4dChlbCkgfHwgJHN0YXRlLiRjdXJyZW50LCBpbmhlcml0OiB0cnVlIH07XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgdWkucm91dGVyLnN0YXRlLmRpcmVjdGl2ZTp1aS1zcmVmXG4gKlxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAqIEByZXF1aXJlcyAkdGltZW91dFxuICpcbiAqIEByZXN0cmljdCBBXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGEgbGluayAoYDxhPmAgdGFnKSB0byBhIHN0YXRlLiBJZiB0aGUgc3RhdGUgaGFzIGFuIGFzc29jaWF0ZWRcbiAqIFVSTCwgdGhlIGRpcmVjdGl2ZSB3aWxsIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgJiB1cGRhdGUgdGhlIGBocmVmYCBhdHRyaWJ1dGUgdmlhXG4gKiB0aGUge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjbWV0aG9kc19ocmVmICRzdGF0ZS5ocmVmKCl9IG1ldGhvZC4gQ2xpY2tpbmdcbiAqIHRoZSBsaW5rIHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24gd2l0aCBvcHRpb25hbCBwYXJhbWV0ZXJzLlxuICpcbiAqIEFsc28gbWlkZGxlLWNsaWNraW5nLCByaWdodC1jbGlja2luZywgYW5kIGN0cmwtY2xpY2tpbmcgb24gdGhlIGxpbmsgd2lsbCBiZVxuICogaGFuZGxlZCBuYXRpdmVseSBieSB0aGUgYnJvd3Nlci5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIHJlbGF0aXZlIHN0YXRlIHBhdGhzIHdpdGhpbiB1aS1zcmVmLCBqdXN0IGxpa2UgdGhlIHJlbGF0aXZlXG4gKiBwYXRocyBwYXNzZWQgdG8gYCRzdGF0ZS5nbygpYC4gWW91IGp1c3QgbmVlZCB0byBiZSBhd2FyZSB0aGF0IHRoZSBwYXRoIGlzIHJlbGF0aXZlXG4gKiB0byB0aGUgc3RhdGUgdGhhdCB0aGUgbGluayBsaXZlcyBpbiwgaW4gb3RoZXIgd29yZHMgdGhlIHN0YXRlIHRoYXQgbG9hZGVkIHRoZVxuICogdGVtcGxhdGUgY29udGFpbmluZyB0aGUgbGluay5cbiAqXG4gKiBZb3UgY2FuIHNwZWNpZnkgb3B0aW9ucyB0byBwYXNzIHRvIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfZ28gJHN0YXRlLmdvKCl9XG4gKiB1c2luZyB0aGUgYHVpLXNyZWYtb3B0c2AgYXR0cmlidXRlLiBPcHRpb25zIGFyZSByZXN0cmljdGVkIHRvIGBsb2NhdGlvbmAsIGBpbmhlcml0YCxcbiAqIGFuZCBgcmVsb2FkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogSGVyZSdzIGFuIGV4YW1wbGUgb2YgaG93IHlvdSdkIHVzZSB1aS1zcmVmIGFuZCBob3cgaXQgd291bGQgY29tcGlsZS4gSWYgeW91IGhhdmUgdGhlXG4gKiBmb2xsb3dpbmcgdGVtcGxhdGU6XG4gKiA8cHJlPlxuICogPGEgdWktc3JlZj1cImhvbWVcIj5Ib21lPC9hPiB8IDxhIHVpLXNyZWY9XCJhYm91dFwiPkFib3V0PC9hPiB8IDxhIHVpLXNyZWY9XCJ7cGFnZTogMn1cIj5OZXh0IHBhZ2U8L2E+XG4gKlxuICogPHVsPlxuICogICAgIDxsaSBuZy1yZXBlYXQ9XCJjb250YWN0IGluIGNvbnRhY3RzXCI+XG4gKiAgICAgICAgIDxhIHVpLXNyZWY9XCJjb250YWN0cy5kZXRhaWwoeyBpZDogY29udGFjdC5pZCB9KVwiPnt7IGNvbnRhY3QubmFtZSB9fTwvYT5cbiAqICAgICA8L2xpPlxuICogPC91bD5cbiAqIDwvcHJlPlxuICpcbiAqIFRoZW4gdGhlIGNvbXBpbGVkIGh0bWwgd291bGQgYmUgKGFzc3VtaW5nIEh0bWw1TW9kZSBpcyBvZmYgYW5kIGN1cnJlbnQgc3RhdGUgaXMgY29udGFjdHMpOlxuICogPHByZT5cbiAqIDxhIGhyZWY9XCIjL2hvbWVcIiB1aS1zcmVmPVwiaG9tZVwiPkhvbWU8L2E+IHwgPGEgaHJlZj1cIiMvYWJvdXRcIiB1aS1zcmVmPVwiYWJvdXRcIj5BYm91dDwvYT4gfCA8YSBocmVmPVwiIy9jb250YWN0cz9wYWdlPTJcIiB1aS1zcmVmPVwie3BhZ2U6IDJ9XCI+TmV4dCBwYWdlPC9hPlxuICpcbiAqIDx1bD5cbiAqICAgICA8bGkgbmctcmVwZWF0PVwiY29udGFjdCBpbiBjb250YWN0c1wiPlxuICogICAgICAgICA8YSBocmVmPVwiIy9jb250YWN0cy8xXCIgdWktc3JlZj1cImNvbnRhY3RzLmRldGFpbCh7IGlkOiBjb250YWN0LmlkIH0pXCI+Sm9lPC9hPlxuICogICAgIDwvbGk+XG4gKiAgICAgPGxpIG5nLXJlcGVhdD1cImNvbnRhY3QgaW4gY29udGFjdHNcIj5cbiAqICAgICAgICAgPGEgaHJlZj1cIiMvY29udGFjdHMvMlwiIHVpLXNyZWY9XCJjb250YWN0cy5kZXRhaWwoeyBpZDogY29udGFjdC5pZCB9KVwiPkFsaWNlPC9hPlxuICogICAgIDwvbGk+XG4gKiAgICAgPGxpIG5nLXJlcGVhdD1cImNvbnRhY3QgaW4gY29udGFjdHNcIj5cbiAqICAgICAgICAgPGEgaHJlZj1cIiMvY29udGFjdHMvM1wiIHVpLXNyZWY9XCJjb250YWN0cy5kZXRhaWwoeyBpZDogY29udGFjdC5pZCB9KVwiPkJvYjwvYT5cbiAqICAgICA8L2xpPlxuICogPC91bD5cbiAqXG4gKiA8YSB1aS1zcmVmPVwiaG9tZVwiIHVpLXNyZWYtb3B0cz1cIntyZWxvYWQ6IHRydWV9XCI+SG9tZTwvYT5cbiAqIDwvcHJlPlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1aS1zcmVmICdzdGF0ZU5hbWUnIGNhbiBiZSBhbnkgdmFsaWQgYWJzb2x1dGUgb3IgcmVsYXRpdmUgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1aS1zcmVmLW9wdHMgb3B0aW9ucyB0byBwYXNzIHRvIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfZ28gJHN0YXRlLmdvKCl9XG4gKi9cbiRTdGF0ZVJlZkRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckc3RhdGUnLCAnJHRpbWVvdXQnXTtcbmZ1bmN0aW9uICRTdGF0ZVJlZkRpcmVjdGl2ZSgkc3RhdGUsICR0aW1lb3V0KSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiBbJz9edWlTcmVmQWN0aXZlJywgJz9edWlTcmVmQWN0aXZlRXEnXSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIHVpU3JlZkFjdGl2ZSkge1xuICAgICAgdmFyIHJlZiAgICA9IHBhcnNlU3RhdGVSZWYoYXR0cnMudWlTcmVmLCAkc3RhdGUuY3VycmVudC5uYW1lKTtcbiAgICAgIHZhciBkZWYgICAgPSB7IHN0YXRlOiByZWYuc3RhdGUsIGhyZWY6IG51bGwsIHBhcmFtczogbnVsbCB9O1xuICAgICAgdmFyIHR5cGUgICA9IGdldFR5cGVJbmZvKGVsZW1lbnQpO1xuICAgICAgdmFyIGFjdGl2ZSA9IHVpU3JlZkFjdGl2ZVsxXSB8fCB1aVNyZWZBY3RpdmVbMF07XG4gICAgICB2YXIgdW5saW5rSW5mb0ZuID0gbnVsbDtcbiAgICAgIHZhciBob29rRm47XG5cbiAgICAgIGRlZi5vcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRPcHRzKGVsZW1lbnQsICRzdGF0ZSksIGF0dHJzLnVpU3JlZk9wdHMgPyBzY29wZS4kZXZhbChhdHRycy51aVNyZWZPcHRzKSA6IHt9KTtcblxuICAgICAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBpZiAodmFsKSBkZWYucGFyYW1zID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgIGRlZi5ocmVmID0gJHN0YXRlLmhyZWYocmVmLnN0YXRlLCBkZWYucGFyYW1zLCBkZWYub3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHVubGlua0luZm9GbikgdW5saW5rSW5mb0ZuKCk7XG4gICAgICAgIGlmIChhY3RpdmUpIHVubGlua0luZm9GbiA9IGFjdGl2ZS4kJGFkZFN0YXRlSW5mbyhyZWYuc3RhdGUsIGRlZi5wYXJhbXMpO1xuICAgICAgICBpZiAoZGVmLmhyZWYgIT09IG51bGwpIGF0dHJzLiRzZXQodHlwZS5hdHRyLCBkZWYuaHJlZik7XG4gICAgICB9O1xuXG4gICAgICBpZiAocmVmLnBhcmFtRXhwcikge1xuICAgICAgICBzY29wZS4kd2F0Y2gocmVmLnBhcmFtRXhwciwgZnVuY3Rpb24odmFsKSB7IGlmICh2YWwgIT09IGRlZi5wYXJhbXMpIHVwZGF0ZSh2YWwpOyB9LCB0cnVlKTtcbiAgICAgICAgZGVmLnBhcmFtcyA9IGFuZ3VsYXIuY29weShzY29wZS4kZXZhbChyZWYucGFyYW1FeHByKSk7XG4gICAgICB9XG4gICAgICB1cGRhdGUoKTtcblxuICAgICAgaWYgKCF0eXBlLmNsaWNrYWJsZSkgcmV0dXJuO1xuICAgICAgaG9va0ZuID0gY2xpY2tIb29rKGVsZW1lbnQsICRzdGF0ZSwgJHRpbWVvdXQsIHR5cGUsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZGVmOyB9KTtcbiAgICAgIGVsZW1lbnRbZWxlbWVudC5vbiA/ICdvbicgOiAnYmluZCddKFwiY2xpY2tcIiwgaG9va0ZuKTtcbiAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudFtlbGVtZW50Lm9mZiA/ICdvZmYnIDogJ3VuYmluZCddKFwiY2xpY2tcIiwgaG9va0ZuKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuZGlyZWN0aXZlOnVpLXN0YXRlXG4gKlxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS51aVNyZWZcbiAqXG4gKiBAcmVzdHJpY3QgQVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogTXVjaCBsaWtlIHVpLXNyZWYsIGJ1dCB3aWxsIGFjY2VwdCBuYW1lZCAkc2NvcGUgcHJvcGVydGllcyB0byBldmFsdWF0ZSBmb3IgYSBzdGF0ZSBkZWZpbml0aW9uLFxuICogcGFyYW1zIGFuZCBvdmVycmlkZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1aS1zdGF0ZSAnc3RhdGVOYW1lJyBjYW4gYmUgYW55IHZhbGlkIGFic29sdXRlIG9yIHJlbGF0aXZlIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdWktc3RhdGUtcGFyYW1zIHBhcmFtcyB0byBwYXNzIHRvIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfaHJlZiAkc3RhdGUuaHJlZigpfVxuICogQHBhcmFtIHtPYmplY3R9IHVpLXN0YXRlLW9wdHMgb3B0aW9ucyB0byBwYXNzIHRvIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfZ28gJHN0YXRlLmdvKCl9XG4gKi9cbiRTdGF0ZVJlZkR5bmFtaWNEaXJlY3RpdmUuJGluamVjdCA9IFsnJHN0YXRlJywgJyR0aW1lb3V0J107XG5mdW5jdGlvbiAkU3RhdGVSZWZEeW5hbWljRGlyZWN0aXZlKCRzdGF0ZSwgJHRpbWVvdXQpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6IFsnP151aVNyZWZBY3RpdmUnLCAnP151aVNyZWZBY3RpdmVFcSddLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdWlTcmVmQWN0aXZlKSB7XG4gICAgICB2YXIgdHlwZSAgID0gZ2V0VHlwZUluZm8oZWxlbWVudCk7XG4gICAgICB2YXIgYWN0aXZlID0gdWlTcmVmQWN0aXZlWzFdIHx8IHVpU3JlZkFjdGl2ZVswXTtcbiAgICAgIHZhciBncm91cCAgPSBbYXR0cnMudWlTdGF0ZSwgYXR0cnMudWlTdGF0ZVBhcmFtcyB8fCBudWxsLCBhdHRycy51aVN0YXRlT3B0cyB8fCBudWxsXTtcbiAgICAgIHZhciB3YXRjaCAgPSAnWycgKyBncm91cC5tYXAoZnVuY3Rpb24odmFsKSB7IHJldHVybiB2YWwgfHwgJ251bGwnOyB9KS5qb2luKCcsICcpICsgJ10nO1xuICAgICAgdmFyIGRlZiAgICA9IHsgc3RhdGU6IG51bGwsIHBhcmFtczogbnVsbCwgb3B0aW9uczogbnVsbCwgaHJlZjogbnVsbCB9O1xuICAgICAgdmFyIHVubGlua0luZm9GbiA9IG51bGw7XG4gICAgICB2YXIgaG9va0ZuO1xuXG4gICAgICBmdW5jdGlvbiBydW5TdGF0ZVJlZkxpbmsgKGdyb3VwKSB7XG4gICAgICAgIGRlZi5zdGF0ZSA9IGdyb3VwWzBdOyBkZWYucGFyYW1zID0gZ3JvdXBbMV07IGRlZi5vcHRpb25zID0gZ3JvdXBbMl07XG4gICAgICAgIGRlZi5ocmVmID0gJHN0YXRlLmhyZWYoZGVmLnN0YXRlLCBkZWYucGFyYW1zLCBkZWYub3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHVubGlua0luZm9GbikgdW5saW5rSW5mb0ZuKCk7XG4gICAgICAgIGlmIChhY3RpdmUpIHVubGlua0luZm9GbiA9IGFjdGl2ZS4kJGFkZFN0YXRlSW5mbyhkZWYuc3RhdGUsIGRlZi5wYXJhbXMpO1xuICAgICAgICBpZiAoZGVmLmhyZWYpIGF0dHJzLiRzZXQodHlwZS5hdHRyLCBkZWYuaHJlZik7XG4gICAgICB9XG5cbiAgICAgIHNjb3BlLiR3YXRjaCh3YXRjaCwgcnVuU3RhdGVSZWZMaW5rLCB0cnVlKTtcbiAgICAgIHJ1blN0YXRlUmVmTGluayhzY29wZS4kZXZhbCh3YXRjaCkpO1xuXG4gICAgICBpZiAoIXR5cGUuY2xpY2thYmxlKSByZXR1cm47XG4gICAgICBob29rRm4gPSBjbGlja0hvb2soZWxlbWVudCwgJHN0YXRlLCAkdGltZW91dCwgdHlwZSwgZnVuY3Rpb24oKSB7IHJldHVybiBkZWY7IH0pO1xuICAgICAgZWxlbWVudFtlbGVtZW50Lm9uID8gJ29uJyA6ICdiaW5kJ10oXCJjbGlja1wiLCBob29rRm4pO1xuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50W2VsZW1lbnQub2ZmID8gJ29mZicgOiAndW5iaW5kJ10oXCJjbGlja1wiLCBob29rRm4pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgdWkucm91dGVyLnN0YXRlLmRpcmVjdGl2ZTp1aS1zcmVmLWFjdGl2ZVxuICpcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVBhcmFtc1xuICogQHJlcXVpcmVzICRpbnRlcnBvbGF0ZVxuICpcbiAqIEByZXN0cmljdCBBXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGRpcmVjdGl2ZSB3b3JraW5nIGFsb25nc2lkZSB1aS1zcmVmIHRvIGFkZCBjbGFzc2VzIHRvIGFuIGVsZW1lbnQgd2hlbiB0aGVcbiAqIHJlbGF0ZWQgdWktc3JlZiBkaXJlY3RpdmUncyBzdGF0ZSBpcyBhY3RpdmUsIGFuZCByZW1vdmluZyB0aGVtIHdoZW4gaXQgaXMgaW5hY3RpdmUuXG4gKiBUaGUgcHJpbWFyeSB1c2UtY2FzZSBpcyB0byBzaW1wbGlmeSB0aGUgc3BlY2lhbCBhcHBlYXJhbmNlIG9mIG5hdmlnYXRpb24gbWVudXNcbiAqIHJlbHlpbmcgb24gYHVpLXNyZWZgLCBieSBoYXZpbmcgdGhlIFwiYWN0aXZlXCIgc3RhdGUncyBtZW51IGJ1dHRvbiBhcHBlYXIgZGlmZmVyZW50LFxuICogZGlzdGluZ3Vpc2hpbmcgaXQgZnJvbSB0aGUgaW5hY3RpdmUgbWVudSBpdGVtcy5cbiAqXG4gKiB1aS1zcmVmLWFjdGl2ZSBjYW4gbGl2ZSBvbiB0aGUgc2FtZSBlbGVtZW50IGFzIHVpLXNyZWYgb3Igb24gYSBwYXJlbnQgZWxlbWVudC4gVGhlIGZpcnN0XG4gKiB1aS1zcmVmLWFjdGl2ZSBmb3VuZCBhdCB0aGUgc2FtZSBsZXZlbCBvciBhYm92ZSB0aGUgdWktc3JlZiB3aWxsIGJlIHVzZWQuXG4gKlxuICogV2lsbCBhY3RpdmF0ZSB3aGVuIHRoZSB1aS1zcmVmJ3MgdGFyZ2V0IHN0YXRlIG9yIGFueSBjaGlsZCBzdGF0ZSBpcyBhY3RpdmUuIElmIHlvdVxuICogbmVlZCB0byBhY3RpdmF0ZSBvbmx5IHdoZW4gdGhlIHVpLXNyZWYgdGFyZ2V0IHN0YXRlIGlzIGFjdGl2ZSBhbmQgKm5vdCogYW55IG9mXG4gKiBpdCdzIGNoaWxkcmVuLCB0aGVuIHlvdSB3aWxsIHVzZVxuICoge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS5kaXJlY3RpdmU6dWktc3JlZi1hY3RpdmUtZXEgdWktc3JlZi1hY3RpdmUtZXF9XG4gKlxuICogQGV4YW1wbGVcbiAqIEdpdmVuIHRoZSBmb2xsb3dpbmcgdGVtcGxhdGU6XG4gKiA8cHJlPlxuICogPHVsPlxuICogICA8bGkgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIiBjbGFzcz1cIml0ZW1cIj5cbiAqICAgICA8YSBocmVmIHVpLXNyZWY9XCJhcHAudXNlcih7dXNlcjogJ2JpbGJvYmFnZ2lucyd9KVwiPkBiaWxib2JhZ2dpbnM8L2E+XG4gKiAgIDwvbGk+XG4gKiA8L3VsPlxuICogPC9wcmU+XG4gKlxuICpcbiAqIFdoZW4gdGhlIGFwcCBzdGF0ZSBpcyBcImFwcC51c2VyXCIgKG9yIGFueSBjaGlsZHJlbiBzdGF0ZXMpLCBhbmQgY29udGFpbnMgdGhlIHN0YXRlIHBhcmFtZXRlciBcInVzZXJcIiB3aXRoIHZhbHVlIFwiYmlsYm9iYWdnaW5zXCIsXG4gKiB0aGUgcmVzdWx0aW5nIEhUTUwgd2lsbCBhcHBlYXIgYXMgKG5vdGUgdGhlICdhY3RpdmUnIGNsYXNzKTpcbiAqIDxwcmU+XG4gKiA8dWw+XG4gKiAgIDxsaSB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiIGNsYXNzPVwiaXRlbSBhY3RpdmVcIj5cbiAqICAgICA8YSB1aS1zcmVmPVwiYXBwLnVzZXIoe3VzZXI6ICdiaWxib2JhZ2dpbnMnfSlcIiBocmVmPVwiL3VzZXJzL2JpbGJvYmFnZ2luc1wiPkBiaWxib2JhZ2dpbnM8L2E+XG4gKiAgIDwvbGk+XG4gKiA8L3VsPlxuICogPC9wcmU+XG4gKlxuICogVGhlIGNsYXNzIG5hbWUgaXMgaW50ZXJwb2xhdGVkICoqb25jZSoqIGR1cmluZyB0aGUgZGlyZWN0aXZlcyBsaW5rIHRpbWUgKGFueSBmdXJ0aGVyIGNoYW5nZXMgdG8gdGhlXG4gKiBpbnRlcnBvbGF0ZWQgdmFsdWUgYXJlIGlnbm9yZWQpLlxuICpcbiAqIE11bHRpcGxlIGNsYXNzZXMgbWF5IGJlIHNwZWNpZmllZCBpbiBhIHNwYWNlLXNlcGFyYXRlZCBmb3JtYXQ6XG4gKiA8cHJlPlxuICogPHVsPlxuICogICA8bGkgdWktc3JlZi1hY3RpdmU9J2NsYXNzMSBjbGFzczIgY2xhc3MzJz5cbiAqICAgICA8YSB1aS1zcmVmPVwiYXBwLnVzZXJcIj5saW5rPC9hPlxuICogICA8L2xpPlxuICogPC91bD5cbiAqIDwvcHJlPlxuICpcbiAqIEl0IGlzIGFsc28gcG9zc2libGUgdG8gcGFzcyB1aS1zcmVmLWFjdGl2ZSBhbiBleHByZXNzaW9uIHRoYXQgZXZhbHVhdGVzXG4gKiB0byBhbiBvYmplY3QgaGFzaCwgd2hvc2Uga2V5cyByZXByZXNlbnQgYWN0aXZlIGNsYXNzIG5hbWVzIGFuZCB3aG9zZVxuICogdmFsdWVzIHJlcHJlc2VudCB0aGUgcmVzcGVjdGl2ZSBzdGF0ZSBuYW1lcy9nbG9icy5cbiAqIHVpLXNyZWYtYWN0aXZlIHdpbGwgbWF0Y2ggaWYgdGhlIGN1cnJlbnQgYWN0aXZlIHN0YXRlICoqaW5jbHVkZXMqKiBhbnkgb2ZcbiAqIHRoZSBzcGVjaWZpZWQgc3RhdGUgbmFtZXMvZ2xvYnMsIGV2ZW4gdGhlIGFic3RyYWN0IG9uZXMuXG4gKlxuICogQEV4YW1wbGVcbiAqIEdpdmVuIHRoZSBmb2xsb3dpbmcgdGVtcGxhdGUsIHdpdGggXCJhZG1pblwiIGJlaW5nIGFuIGFic3RyYWN0IHN0YXRlOlxuICogPHByZT5cbiAqIDxkaXYgdWktc3JlZi1hY3RpdmU9XCJ7J2FjdGl2ZSc6ICdhZG1pbi4qJ31cIj5cbiAqICAgPGEgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIiB1aS1zcmVmPVwiYWRtaW4ucm9sZXNcIj5Sb2xlczwvYT5cbiAqIDwvZGl2PlxuICogPC9wcmU+XG4gKlxuICogV2hlbiB0aGUgY3VycmVudCBzdGF0ZSBpcyBcImFkbWluLnJvbGVzXCIgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgd2lsbCBiZSBhcHBsaWVkXG4gKiB0byBib3RoIHRoZSA8ZGl2PiBhbmQgPGE+IGVsZW1lbnRzLiBJdCBpcyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHRoZSBzdGF0ZVxuICogbmFtZXMvZ2xvYnMgcGFzc2VkIHRvIHVpLXNyZWYtYWN0aXZlIHNoYWRvdyB0aGUgc3RhdGUgcHJvdmlkZWQgYnkgdWktc3JlZi5cbiAqL1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS5kaXJlY3RpdmU6dWktc3JlZi1hY3RpdmUtZXFcbiAqXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQYXJhbXNcbiAqIEByZXF1aXJlcyAkaW50ZXJwb2xhdGVcbiAqXG4gKiBAcmVzdHJpY3QgQVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIHNhbWUgYXMge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS5kaXJlY3RpdmU6dWktc3JlZi1hY3RpdmUgdWktc3JlZi1hY3RpdmV9IGJ1dCB3aWxsIG9ubHkgYWN0aXZhdGVcbiAqIHdoZW4gdGhlIGV4YWN0IHRhcmdldCBzdGF0ZSB1c2VkIGluIHRoZSBgdWktc3JlZmAgaXMgYWN0aXZlOyBubyBjaGlsZCBzdGF0ZXMuXG4gKlxuICovXG4kU3RhdGVSZWZBY3RpdmVEaXJlY3RpdmUuJGluamVjdCA9IFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckaW50ZXJwb2xhdGUnXTtcbmZ1bmN0aW9uICRTdGF0ZVJlZkFjdGl2ZURpcmVjdGl2ZSgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGludGVycG9sYXRlKSB7XG4gIHJldHVybiAge1xuICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICckZWxlbWVudCcsICckYXR0cnMnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkdGltZW91dCkge1xuICAgICAgdmFyIHN0YXRlcyA9IFtdLCBhY3RpdmVDbGFzc2VzID0ge30sIGFjdGl2ZUVxQ2xhc3MsIHVpU3JlZkFjdGl2ZTtcblxuICAgICAgLy8gVGhlcmUgcHJvYmFibHkgaXNuJ3QgbXVjaCBwb2ludCBpbiAkb2JzZXJ2aW5nIHRoaXNcbiAgICAgIC8vIHVpU3JlZkFjdGl2ZSBhbmQgdWlTcmVmQWN0aXZlRXEgc2hhcmUgdGhlIHNhbWUgZGlyZWN0aXZlIG9iamVjdCB3aXRoIHNvbWVcbiAgICAgIC8vIHNsaWdodCBkaWZmZXJlbmNlIGluIGxvZ2ljIHJvdXRpbmdcbiAgICAgIGFjdGl2ZUVxQ2xhc3MgPSAkaW50ZXJwb2xhdGUoJGF0dHJzLnVpU3JlZkFjdGl2ZUVxIHx8ICcnLCBmYWxzZSkoJHNjb3BlKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdWlTcmVmQWN0aXZlID0gJHNjb3BlLiRldmFsKCRhdHRycy51aVNyZWZBY3RpdmUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBEbyBub3RoaW5nLiB1aVNyZWZBY3RpdmUgaXMgbm90IGEgdmFsaWQgZXhwcmVzc2lvbi5cbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIHVzaW5nICRpbnRlcnBvbGF0ZSBiZWxvd1xuICAgICAgfVxuICAgICAgdWlTcmVmQWN0aXZlID0gdWlTcmVmQWN0aXZlIHx8ICRpbnRlcnBvbGF0ZSgkYXR0cnMudWlTcmVmQWN0aXZlIHx8ICcnLCBmYWxzZSkoJHNjb3BlKTtcbiAgICAgIGlmIChpc09iamVjdCh1aVNyZWZBY3RpdmUpKSB7XG4gICAgICAgIGZvckVhY2godWlTcmVmQWN0aXZlLCBmdW5jdGlvbihzdGF0ZU9yTmFtZSwgYWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICBpZiAoaXNTdHJpbmcoc3RhdGVPck5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgcmVmID0gcGFyc2VTdGF0ZVJlZihzdGF0ZU9yTmFtZSwgJHN0YXRlLmN1cnJlbnQubmFtZSk7XG4gICAgICAgICAgICBhZGRTdGF0ZShyZWYuc3RhdGUsICRzY29wZS4kZXZhbChyZWYucGFyYW1FeHByKSwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFsbG93IHVpU3JlZiB0byBjb21tdW5pY2F0ZSB3aXRoIHVpU3JlZkFjdGl2ZVtFcXVhbHNdXG4gICAgICB0aGlzLiQkYWRkU3RhdGVJbmZvID0gZnVuY3Rpb24gKG5ld1N0YXRlLCBuZXdQYXJhbXMpIHtcbiAgICAgICAgLy8gd2UgYWxyZWFkeSBnb3QgYW4gZXhwbGljaXQgc3RhdGUgcHJvdmlkZWQgYnkgdWktc3JlZi1hY3RpdmUsIHNvIHdlXG4gICAgICAgIC8vIHNoYWRvdyB0aGUgb25lIHRoYXQgY29tZXMgZnJvbSB1aS1zcmVmXG4gICAgICAgIGlmIChpc09iamVjdCh1aVNyZWZBY3RpdmUpICYmIHN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZXJlZ2lzdGVyID0gYWRkU3RhdGUobmV3U3RhdGUsIG5ld1BhcmFtcywgdWlTcmVmQWN0aXZlKTtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIHJldHVybiBkZXJlZ2lzdGVyO1xuICAgICAgfTtcblxuICAgICAgJHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIHVwZGF0ZSk7XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFN0YXRlKHN0YXRlTmFtZSwgc3RhdGVQYXJhbXMsIGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5nZXQoc3RhdGVOYW1lLCBzdGF0ZUNvbnRleHQoJGVsZW1lbnQpKTtcbiAgICAgICAgdmFyIHN0YXRlSGFzaCA9IGNyZWF0ZVN0YXRlSGFzaChzdGF0ZU5hbWUsIHN0YXRlUGFyYW1zKTtcblxuICAgICAgICB2YXIgc3RhdGVJbmZvID0ge1xuICAgICAgICAgIHN0YXRlOiBzdGF0ZSB8fCB7IG5hbWU6IHN0YXRlTmFtZSB9LFxuICAgICAgICAgIHBhcmFtczogc3RhdGVQYXJhbXMsXG4gICAgICAgICAgaGFzaDogc3RhdGVIYXNoXG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhdGVzLnB1c2goc3RhdGVJbmZvKTtcbiAgICAgICAgYWN0aXZlQ2xhc3Nlc1tzdGF0ZUhhc2hdID0gYWN0aXZlQ2xhc3M7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZVN0YXRlKCkge1xuICAgICAgICAgIHZhciBpZHggPSBzdGF0ZXMuaW5kZXhPZihzdGF0ZUluZm8pO1xuICAgICAgICAgIGlmIChpZHggIT09IC0xKSBzdGF0ZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXG4gICAgICAgKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IFtwYXJhbXNdXG4gICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZVN0YXRlSGFzaChzdGF0ZSwgcGFyYW1zKSB7XG4gICAgICAgIGlmICghaXNTdHJpbmcoc3RhdGUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzdGF0ZSBzaG91bGQgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNPYmplY3QocGFyYW1zKSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZSArIHRvSnNvbihwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcyA9ICRzY29wZS4kZXZhbChwYXJhbXMpO1xuICAgICAgICBpZiAoaXNPYmplY3QocGFyYW1zKSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZSArIHRvSnNvbihwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHJvdXRlIHN0YXRlXG4gICAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFueU1hdGNoKHN0YXRlc1tpXS5zdGF0ZSwgc3RhdGVzW2ldLnBhcmFtcykpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKCRlbGVtZW50LCBhY3RpdmVDbGFzc2VzW3N0YXRlc1tpXS5oYXNoXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKCRlbGVtZW50LCBhY3RpdmVDbGFzc2VzW3N0YXRlc1tpXS5oYXNoXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV4YWN0TWF0Y2goc3RhdGVzW2ldLnN0YXRlLCBzdGF0ZXNbaV0ucGFyYW1zKSkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoJGVsZW1lbnQsIGFjdGl2ZUVxQ2xhc3MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcygkZWxlbWVudCwgYWN0aXZlRXFDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHsgJHRpbWVvdXQoZnVuY3Rpb24gKCkgeyBlbC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9KTsgfVxuICAgICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkgeyBlbC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG4gICAgICBmdW5jdGlvbiBhbnlNYXRjaChzdGF0ZSwgcGFyYW1zKSB7IHJldHVybiAkc3RhdGUuaW5jbHVkZXMoc3RhdGUubmFtZSwgcGFyYW1zKTsgfVxuICAgICAgZnVuY3Rpb24gZXhhY3RNYXRjaChzdGF0ZSwgcGFyYW1zKSB7IHJldHVybiAkc3RhdGUuaXMoc3RhdGUubmFtZSwgcGFyYW1zKTsgfVxuXG4gICAgICB1cGRhdGUoKTtcbiAgICB9XVxuICB9O1xufVxuXG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnN0YXRlJylcbiAgLmRpcmVjdGl2ZSgndWlTcmVmJywgJFN0YXRlUmVmRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCd1aVNyZWZBY3RpdmUnLCAkU3RhdGVSZWZBY3RpdmVEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ3VpU3JlZkFjdGl2ZUVxJywgJFN0YXRlUmVmQWN0aXZlRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCd1aVN0YXRlJywgJFN0YXRlUmVmRHluYW1pY0RpcmVjdGl2ZSk7XG5cbi8qKlxuICogQG5nZG9jIGZpbHRlclxuICogQG5hbWUgdWkucm91dGVyLnN0YXRlLmZpbHRlcjppc1N0YXRlXG4gKlxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRyYW5zbGF0ZXMgdG8ge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjbWV0aG9kc19pcyAkc3RhdGUuaXMoXCJzdGF0ZU5hbWVcIil9LlxuICovXG4kSXNTdGF0ZUZpbHRlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcbmZ1bmN0aW9uICRJc1N0YXRlRmlsdGVyKCRzdGF0ZSkge1xuICB2YXIgaXNGaWx0ZXIgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcykge1xuICAgIHJldHVybiAkc3RhdGUuaXMoc3RhdGUsIHBhcmFtcyk7XG4gIH07XG4gIGlzRmlsdGVyLiRzdGF0ZWZ1bCA9IHRydWU7XG4gIHJldHVybiBpc0ZpbHRlcjtcbn1cblxuLyoqXG4gKiBAbmdkb2MgZmlsdGVyXG4gKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuZmlsdGVyOmluY2x1ZGVkQnlTdGF0ZVxuICpcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUcmFuc2xhdGVzIHRvIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfaW5jbHVkZXMgJHN0YXRlLmluY2x1ZGVzKCdmdWxsT3JQYXJ0aWFsU3RhdGVOYW1lJyl9LlxuICovXG4kSW5jbHVkZWRCeVN0YXRlRmlsdGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xuZnVuY3Rpb24gJEluY2x1ZGVkQnlTdGF0ZUZpbHRlcigkc3RhdGUpIHtcbiAgdmFyIGluY2x1ZGVzRmlsdGVyID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gJHN0YXRlLmluY2x1ZGVzKHN0YXRlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICB9O1xuICBpbmNsdWRlc0ZpbHRlci4kc3RhdGVmdWwgPSB0cnVlO1xuICByZXR1cm4gIGluY2x1ZGVzRmlsdGVyO1xufVxuXG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnN0YXRlJylcbiAgLmZpbHRlcignaXNTdGF0ZScsICRJc1N0YXRlRmlsdGVyKVxuICAuZmlsdGVyKCdpbmNsdWRlZEJ5U3RhdGUnLCAkSW5jbHVkZWRCeVN0YXRlRmlsdGVyKTtcbn0pKHdpbmRvdywgd2luZG93LmFuZ3VsYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhci11aS1yb3V0ZXIvcmVsZWFzZS9hbmd1bGFyLXVpLXJvdXRlci5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFjY291bnRDb21wID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6J2NvbXBvbmVudHMvYWNjb3VudC1jb21wL2FjY291bnQudGVtcGxhdGUuaHRtbCdcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvYWNjb3VudC1jb21wL2FjY291bnQuY29tcG9uZW50LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDI5LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuY2xhc3MgQWNjb3VudEZvcm1Db250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMuYWRkTmV3VXNlciA9ICh1c2VyRGV0YWlscywgaXN2YWxpZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXN2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdXNlckRldGFpbHMubG9naW4gKyBcIiBcIiArIHVzZXJEZXRhaWxzLmVtYWlsICsgXCIgXCIgKyB1c2VyRGV0YWlscy5wYXNzd29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0RXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvci5lbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcItCS0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5IGVtYWlsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrSGFuZGxlcigpIHtcclxuICAgICAgLy8gIHRoaXMuJHN0YXRlLmdvKCdwYWdlLmhvbWUuZGFzaGJvYXJkJyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGFjY291bnRmb3JtQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2FjY291bnQtZm9ybS1jb21wL2FjY291bnRmb3JtLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgY29udHJvbGxlcjogQWNjb3VudEZvcm1Db250cm9sbGVyXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL2FjY291bnQtZm9ybS1jb21wL2FjY291bnRmb3JtLmNvbXBvbmVudC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbW1vbkNvbXAgPSB7XHJcbiAgICB0ZW1wbGF0ZVVybDonY29tcG9uZW50cy9jb21tb24tY29tcC9jb21tb24udGVtcGxhdGUuaHRtbCdcclxuXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL2NvbW1vbi1jb21wL2NvbW1vbi5jb21wb25lbnQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjIuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJDb21wID17XHJcbiAgICB0ZW1wbGF0ZVVybDonY29tcG9uZW50cy9oZWFkZXItY29tcC9oZWFkZXItY29tcC50ZW1wbGF0ZS5odG1sJ1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9oZWFkZXItY29tcC9oZWFkZXItY29tcC5jb21wb25lbnQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjIuMDMuMjAxNy5cclxuICovXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RDb21wID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvbGlzdC1jb21wL2xpc3QudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBEb2NMaXN0Q29udHJvbGxlcigkaHR0cCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuZG9jcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAxJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcudHh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDInLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy50eHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnR4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyA0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcudHh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDEnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5qcGcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLmpwZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAzJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcuanBnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5qcGcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMScsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnJlcSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAyJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcucmVxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDMnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5yZXEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgNCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnJlcSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9saXN0LWNvbXAvbGlzdC5jb21wb25lbnQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjMuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2dvQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL2xvZ28tY29tcC9sb2dvLnRlbXBsYXRlLmh0bWwnLFxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9sb2dvLWNvbXAvbG9nby5jb21wb25lbnQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjMuMDMuMjAxNy5cclxuICovXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVDb21wID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6J2NvbXBvbmVudHMvbWVudS1jb21wL21lbnUudGVtcGxhdGUuaHRtbCcsXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL21lbnUtY29tcC9tZW51LmNvbXBvbmVudC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyOS4wMy4yMDE3LlxyXG4gKi9cclxuXHJcblxyXG5jbGFzcyBMb2dGb3JtQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGUpIHtcclxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgICAgICB0aGlzLmFkZE5ld1VzZXIgPSAodXNlckRldGFpbHMsIGlzdmFsaWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHVzZXJEZXRhaWxzLmxvZ2luICsgXCIgXCIgKyB1c2VyRGV0YWlscy5lbWFpbCArIFwiIFwiICsgdXNlckRldGFpbHMucGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCLQn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9GD0YHRgtGL0LxcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwi0JLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0LkgZW1haWxcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuJHN0YXRlLmdvKCdwYWdlLmhvbWUuZGFzaGJvYXJkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2luQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Npbmdpbi1jb21wL3Npbmdpbi50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgIGNvbnRyb2xsZXI6IExvZ0Zvcm1Db250cm9sbGVyXHJcblxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9zaW5naW4tY29tcC9zaW5naW4uY29tcG9uZW50LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDIzLjAzLjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RhdGlzdGljQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOicuL2NvbXBvbmVudHMvc3RhdGlzdGljLWNvbXAvc3RhdGlzdGljLnRlbXBsYXRlLmh0bWwnXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL3N0YXRpc3RpYy1jb21wL3N0YXRpc3RpYy5jb21wb25lbnQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMzAuMDMuMjAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyOS4wMy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtQYXJlbnRGaWxlfSBmcm9tICcuLi9wYXJlbnQuZmlsZS5qcyc7XHJcblxyXG5jbGFzcyBEb2N1bWVudEZpbGVDb250cm9sbGVyIGV4dGVuZHMgUGFyZW50RmlsZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJEb2N1bWVudHMgPSBbe1xyXG4gICAgICAgICAgICB1c2VyRmlyc3ROYW1lOiAndXNlck5hbWUnLFxyXG4gICAgICAgICAgICB1c2VyVGVhbTogJ3VzZXJUZWFtJyxcclxuICAgICAgICAgICAgdXNlclBhc3N3b3JkOiAndXNlclBhc3N3b3JkJyxcclxuICAgICAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0eXBlJyxcclxuICAgICAgICAgICAgcGF0aDogJ3BhdGgnLFxyXG4gICAgICAgICAgICBkYXRhOiAnZGF0YSdcclxuICAgICAgICB9XTtcclxuICAgICAgICB0aGlzLmNvdW50RG9jdW1lbnRzPSB0aGlzLmFyckRvY3VtZW50cy5sZW5ndGg7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gaGFuZGxlckV2ZW50PSgpPT57XHJcbiAgICAvL1xyXG4gICAgLy8gfTtcclxuICAgIGdldENvdW50RG9jdW1lbnRzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnREb2N1bWVudHM7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZG9jZmlsZUNvbXAgPSB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmlsZXMvZG9jdW1lbnQvZG9jdW1lbnQuZmlsZS50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IERvY3VtZW50RmlsZUNvbnRyb2xsZXIsXHJcbiAgICBjb250cm9sbGVyQXM6ICdkb2NDdHJsJ1xyXG5cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2ZpbGVzL2RvY3VtZW50L2RvY3VtZW50LmZpbGUuY29tcG9uZW50LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDI5LjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge1BhcmVudEZpbGV9IGZyb20gJy4uL3BhcmVudC5maWxlLmpzJztcclxuXHJcbmNsYXNzIEltYWdlRmlsZUNvbnRyb2xsZXIgZXh0ZW5kcyBQYXJlbnRGaWxle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXJySW1hZ2VzID0gW3tcclxuICAgICAgICAgICAgdXNlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIHVzZXJUZWFtOiAnJyxcclxuICAgICAgICAgICAgdXNlclBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgICAgIGRhdGE6ICcnXHJcbiAgICAgICAgfV07XHJcbiAgICAgICAgdGhpcy5jb3VudEltYWdlcyA9IHRoaXMuYXJySW1hZ2VzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8vIGhhbmRsZXJFdmVudCgpe1xyXG4gICAgLy8gICAgIC8v0LfQsNGC0LXQvNC90LXQvdC40LUg0Lgg0LTQstC1INC60L3QvtC/0LrQuDogZGVsZXRlINC4IGRvd25sb2FkXHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0Q291bnRJbWFnZXMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudEltYWdlcztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbWFnZWZpbGVDb21wID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZpbGVzL2ltYWdlL2ltYWdlLmZpbGUudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBJbWFnZUZpbGVDb250cm9sbGVyLFxyXG4gICAgY29udHJvbGxlckFzOiAnaW1hZ2VDdHJsJ1xyXG5cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2ZpbGVzL2ltYWdlL2ltYWdlLmZpbGUuY29tcG9uZW50LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDIzLjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgdWlSb3V0ZXIgZnJvbSAnYW5ndWxhci11aS1yb3V0ZXInO1xyXG5pbXBvcnQge2NvbXBBcHB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7ZmlsZXNBcHB9IGZyb20gJy4vZmlsZXMvaW5kZXgnO1xyXG5pbXBvcnQge1JvdXRlc30gZnJvbSAnLi9yb3V0ZXJzLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3BBcHAgPSBhbmd1bGFyLm1vZHVsZSgnc3BBcHAnLCBbY29tcEFwcCwgZmlsZXNBcHAsIHVpUm91dGVyLCAnbmdSZXNvdXJjZSddKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIFJvdXRlc10pO1xyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2luZGV4LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDI5LjAzLjIwMTcuXHJcbiAqL1xyXG5cclxuXHJcbmNsYXNzIEFkZEZpbGVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMuYWRkTmV3VXNlciA9ICh1c2VyRGV0YWlscywgaXN2YWxpZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXN2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdXNlckRldGFpbHMubG9naW4gKyBcIiBcIiArIHVzZXJEZXRhaWxzLmVtYWlsICsgXCIgXCIgKyB1c2VyRGV0YWlscy5wYXNzd29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlO1xyXG5cclxuICAgICAgICB0aGlzLmdldEVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChlcnJvcikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC/0YPRgdGC0YvQvFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IuZW1haWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCLQktCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kc3RhdGUuZ28oJ3BhZ2UuaG9tZS5kYXNoYm9hcmQnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRmaWxlQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2FkZC1maWxlLWNvbXAvYWRkZmlsZS50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgIGNvbnRyb2xsZXI6IEFkZEZpbGVDb250cm9sbGVyXHJcblxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9hZGQtZmlsZS1jb21wL2FkZGZpbGUuY29tcG9uZW50LmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hFQTs7O0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFMQTs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTs7Ozs7Ozs7O0FDUkE7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBL0NBO0FBQ0E7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBL0NBO0FBQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBeEJBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwSEE7QUFzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsRkE7QUFDQTtBQW9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStUQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhHQTtBQUNBO0FBMEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBZ0RBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFvQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBZ0NBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBckdBO0FBdUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7O0FDM2tKQTs7O0FBR0E7QUFDQTtBQURBOzs7Ozs7Ozs7QUNIQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7O0FDakNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7O0FDSEE7OztBQUdBO0FBQ0E7QUFEQTs7Ozs7Ozs7O0FDSEE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUF2REE7Ozs7Ozs7OztBQ0xBOzs7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7OztBQ0hBOzs7O0FBS0E7QUFDQTtBQURBOzs7Ozs7Ozs7QUNMQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQUNBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7O0FDckNBOzs7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7OztBQ0hBO0FBQUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7OztBQ2pDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUkE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1QkE7QUFDQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9