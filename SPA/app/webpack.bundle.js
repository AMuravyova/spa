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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_comp_account_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__central_comp_central_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_comp_header_comp_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_comp_list_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logo_comp_logo_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_comp_menu_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__statistic_comp_statistic_component__ = __webpack_require__(9);
/**
 * Created by amurav on 23.03.2017.
 */








const compApp = angular.module('spApp.components', []).component('listComp', __WEBPACK_IMPORTED_MODULE_3__list_comp_list_component__["a" /* listComp */]).component('headerComp', __WEBPACK_IMPORTED_MODULE_2__header_comp_header_comp_component__["a" /* headerComp */]).component('accountComp', __WEBPACK_IMPORTED_MODULE_0__account_comp_account_component__["a" /* accountComp */]).component('logoComp', __WEBPACK_IMPORTED_MODULE_4__logo_comp_logo_component__["a" /* logoComp */]).component('menuComp', __WEBPACK_IMPORTED_MODULE_5__menu_comp_menu_component__["a" /* menuComp */]).component('statisticComp', __WEBPACK_IMPORTED_MODULE_6__statistic_comp_statistic_component__["a" /* statisticComp */]).component('centralComp', __WEBPACK_IMPORTED_MODULE_1__central_comp_central_component__["a" /* centralComp */]).name;
/* harmony export (immutable) */ __webpack_exports__["a"] = compApp;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Routes;
/**
 * Created by amurav on 28.03.2017.
 */
function Routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state('page', {
        abstract: true,
        templateUrl: '../index.html'
    }).state('page.home', {
        url: '/home',
        templateUrl: '../pages/home-page/home.html'

    }).state('page.dashboard', {
        url: '/dashboard',
        templateUrl: '../pages/dashboard-page/dashboard.html'

    }).state('page.documents', {
        url: '/documents',
        templateUrl: '../pages/documents-page/documents.html'

    }).state('page.images', {
        url: '/images',
        templateUrl: '../pages/images-page/images.html'

    }).state('page.requests', {
        url: '/requests',
        templateUrl: '../pages/requests-page/requests.html'

    }).state('page.account', {
        url: '/account',
        controller: 'accountCtrl',
        templateUrl: '../pages/account-page/account.html'
    }).state('page.logout', {
        url: '/logout',
        controller: 'logoutCtrl',
        templateUrl: '../pages/logout-page/logout.html'
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

    $urlRouterProvider.when('', '/home');
};

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const accountComp = {
    templateUrl: 'components/account-comp/account.template.html',
    controller: function AccountCompController() {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = accountComp;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */

const centralComp = {
    templateUrl: 'components/central-comp/central.template.html',
    controller: function CentralCompController() {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = centralComp;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 22.03.2017.
 */
const headerComp = {
    templateUrl: 'components/header-comp/header-comp.template.html',
    controller: function HeaderCompController() {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = headerComp;


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const logoComp = {
    templateUrl: 'components/logo-comp/logo.template.html',
    controller: function LogoCompController() {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = logoComp;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const menuComp = {
    templateUrl: 'components/menu-comp/menu.template.html',
    controller: function MenuCompController() {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = menuComp;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by amurav on 23.03.2017.
 */
const statisticComp = {
    templateUrl: 'components/statistic-comp/statistic.template.html',
    controller: function StatisticCompController() {}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = statisticComp;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_ui_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_ui_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_ui_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routers_config__ = __webpack_require__(1);
/**
 * Created by amurav on 23.03.2017.
 */




const spApp = angular.module('spApp', [__WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* compApp */], __WEBPACK_IMPORTED_MODULE_0_angular_ui_router___default.a, 'ngResource']).controller('spCtrl', function spCtrl() {}).config(['$stateProvider', '$urlRouterProvider', __WEBPACK_IMPORTED_MODULE_2__routers_config__["a" /* Routes */]]);
/* harmony export (immutable) */ __webpack_exports__["spApp"] = spApp;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvd2VicGFjay5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTM4YTllY2EzYWFiMTNmNWI0ODMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvcm91dGVycy5jb25maWcuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9hbmd1bGFyLXVpLXJvdXRlci9yZWxlYXNlL2FuZ3VsYXItdWktcm91dGVyLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWNvbXAvYWNjb3VudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL2NlbnRyYWwtY29tcC9jZW50cmFsLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvaGVhZGVyLWNvbXAvaGVhZGVyLWNvbXAuY29tcG9uZW50LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9saXN0LWNvbXAvbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL2xvZ28tY29tcC9sb2dvLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvbWVudS1jb21wL21lbnUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWMtY29tcC9zdGF0aXN0aWMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy9hcHAvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEzOGE5ZWNhM2FhYjEzZjViNDgzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDIzLjAzLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge2FjY291bnRDb21wfSBmcm9tICcuL2FjY291bnQtY29tcC9hY2NvdW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Y2VudHJhbENvbXB9IGZyb20gJy4vY2VudHJhbC1jb21wL2NlbnRyYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtoZWFkZXJDb21wfSBmcm9tICcuL2hlYWRlci1jb21wL2hlYWRlci1jb21wLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7bGlzdENvbXB9IGZyb20gJy4vbGlzdC1jb21wL2xpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtsb2dvQ29tcH0gZnJvbSAnLi9sb2dvLWNvbXAvbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQge21lbnVDb21wfSBmcm9tICcuL21lbnUtY29tcC9tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7c3RhdGlzdGljQ29tcH0gZnJvbSAnLi9zdGF0aXN0aWMtY29tcC9zdGF0aXN0aWMuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnc3BBcHAuY29tcG9uZW50cycsW10pXHJcbiAgICAuY29tcG9uZW50KCdsaXN0Q29tcCcsIGxpc3RDb21wKVxyXG4gICAgLmNvbXBvbmVudCgnaGVhZGVyQ29tcCcsIGhlYWRlckNvbXApXHJcbiAgICAuY29tcG9uZW50KCdhY2NvdW50Q29tcCcsIGFjY291bnRDb21wKVxyXG4gICAgLmNvbXBvbmVudCgnbG9nb0NvbXAnLCBsb2dvQ29tcClcclxuICAgIC5jb21wb25lbnQoJ21lbnVDb21wJywgbWVudUNvbXApXHJcbiAgICAuY29tcG9uZW50KCdzdGF0aXN0aWNDb21wJywgc3RhdGlzdGljQ29tcClcclxuICAgIC5jb21wb25lbnQoJ2NlbnRyYWxDb21wJywgY2VudHJhbENvbXApLm5hbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9pbmRleC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyOC4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdXRlcyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgncGFnZScse1xyXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi9pbmRleC5odG1sJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdwYWdlLmhvbWUnLHtcclxuICAgICAgICAgICAgdXJsOiAnL2hvbWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL2hvbWUtcGFnZS9ob21lLmh0bWwnXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdwYWdlLmRhc2hib2FyZCcse1xyXG4gICAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi9wYWdlcy9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQuaHRtbCdcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ3BhZ2UuZG9jdW1lbnRzJyx7XHJcbiAgICAgICAgICAgIHVybDogJy9kb2N1bWVudHMnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL2RvY3VtZW50cy1wYWdlL2RvY3VtZW50cy5odG1sJ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgncGFnZS5pbWFnZXMnLHtcclxuICAgICAgICAgICAgdXJsOiAnL2ltYWdlcycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vcGFnZXMvaW1hZ2VzLXBhZ2UvaW1hZ2VzLmh0bWwnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zdGF0ZSgncGFnZS5yZXF1ZXN0cycse1xyXG4gICAgICAgICAgICB1cmw6ICcvcmVxdWVzdHMnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL3JlcXVlc3RzLXBhZ2UvcmVxdWVzdHMuaHRtbCdcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLnN0YXRlKCdwYWdlLmFjY291bnQnLHtcclxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnQnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnYWNjb3VudEN0cmwnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL2FjY291bnQtcGFnZS9hY2NvdW50Lmh0bWwnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLnN0YXRlKCdwYWdlLmxvZ291dCcse1xyXG4gICAgICAgICAgICB1cmw6ICcvbG9nb3V0JyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ2xvZ291dEN0cmwnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3BhZ2VzL2xvZ291dC1wYWdlL2xvZ291dC5odG1sJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAuc3RhdGUoJ3BhZ2UuaW1hZ2VzLmltYWdlJywge1xyXG4gICAgLy8gICAgICAgICB1cmw6ICcvOnBhZ2VOYW1lJyxcclxuICAgIC8vICAgICAgICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMpIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiAnL2FwcC9pbWFnZXMvJyArXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJHN0YXRlUGFyYW1zLnBhZ2VOYW1lICsgJy5odG1sJztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC5zdGF0ZSgncGFnZS5yZXF1ZXN0cy5yZXF1ZXN0Jywge1xyXG4gICAgLy8gICAgICAgICB1cmw6ICcvOnBhZ2VOYW1lJyxcclxuICAgIC8vICAgICAgICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMpIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiAnL2FwcC9yZXF1ZXN0cy8nICtcclxuICAgIC8vICAgICAgICAgICAgICAgICAkc3RhdGVQYXJhbXMucGFnZU5hbWUgKyAnLmh0bWwnO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLnN0YXRlKCdwYWdlLmRvY3VtZW50cy5kb2N1bWVudCcsIHtcclxuICAgIC8vICAgICB1cmw6ICcvOnBhZ2VOYW1lJyxcclxuICAgIC8vICAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcykge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gJy9hcHAvZG9jdW1lbnRzLycgK1xyXG4gICAgLy8gICAgICAgICAgICAgJHN0YXRlUGFyYW1zLnBhZ2VOYW1lICsgJy5odG1sJztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIud2hlbignJywnL2hvbWUnKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9yb3V0ZXJzLmNvbmZpZy5qcyIsIi8qKlxuICogU3RhdGUtYmFzZWQgcm91dGluZyBmb3IgQW5ndWxhckpTXG4gKiBAdmVyc2lvbiB2MC40LjJcbiAqIEBsaW5rIGh0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5jb20vXG4gKiBAbGljZW5zZSBNSVQgTGljZW5zZSwgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKiBjb21tb25qcyBwYWNrYWdlIG1hbmFnZXIgc3VwcG9ydCAoZWcgY29tcG9uZW50anMpICovXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyA9PT0gZXhwb3J0cyl7XG4gIG1vZHVsZS5leHBvcnRzID0gJ3VpLnJvdXRlcic7XG59XG5cbihmdW5jdGlvbiAod2luZG93LCBhbmd1bGFyLCB1bmRlZmluZWQpIHtcbi8qanNoaW50IGdsb2JhbHN0cmljdDp0cnVlKi9cbi8qZ2xvYmFsIGFuZ3VsYXI6ZmFsc2UqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNEZWZpbmVkID0gYW5ndWxhci5pc0RlZmluZWQsXG4gICAgaXNGdW5jdGlvbiA9IGFuZ3VsYXIuaXNGdW5jdGlvbixcbiAgICBpc1N0cmluZyA9IGFuZ3VsYXIuaXNTdHJpbmcsXG4gICAgaXNPYmplY3QgPSBhbmd1bGFyLmlzT2JqZWN0LFxuICAgIGlzQXJyYXkgPSBhbmd1bGFyLmlzQXJyYXksXG4gICAgZm9yRWFjaCA9IGFuZ3VsYXIuZm9yRWFjaCxcbiAgICBleHRlbmQgPSBhbmd1bGFyLmV4dGVuZCxcbiAgICBjb3B5ID0gYW5ndWxhci5jb3B5LFxuICAgIHRvSnNvbiA9IGFuZ3VsYXIudG9Kc29uO1xuXG5mdW5jdGlvbiBpbmhlcml0KHBhcmVudCwgZXh0cmEpIHtcbiAgcmV0dXJuIGV4dGVuZChuZXcgKGV4dGVuZChmdW5jdGlvbigpIHt9LCB7IHByb3RvdHlwZTogcGFyZW50IH0pKSgpLCBleHRyYSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKGRzdCkge1xuICBmb3JFYWNoKGFyZ3VtZW50cywgZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiAhPT0gZHN0KSB7XG4gICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoIWRzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBkc3Rba2V5XSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY29tbW9uIGFuY2VzdG9yIHBhdGggYmV0d2VlbiB0d28gc3RhdGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBmaXJzdCBUaGUgZmlyc3Qgc3RhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gc2Vjb25kIFRoZSBzZWNvbmQgc3RhdGUuXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBzdGF0ZSBuYW1lcyBpbiBkZXNjZW5kaW5nIG9yZGVyLCBub3QgaW5jbHVkaW5nIHRoZSByb290LlxuICovXG5mdW5jdGlvbiBhbmNlc3RvcnMoZmlyc3QsIHNlY29uZCkge1xuICB2YXIgcGF0aCA9IFtdO1xuXG4gIGZvciAodmFyIG4gaW4gZmlyc3QucGF0aCkge1xuICAgIGlmIChmaXJzdC5wYXRoW25dICE9PSBzZWNvbmQucGF0aFtuXSkgYnJlYWs7XG4gICAgcGF0aC5wdXNoKGZpcnN0LnBhdGhbbl0pO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuXG4vKipcbiAqIElFOC1zYWZlIHdyYXBwZXIgZm9yIGBPYmplY3Qua2V5cygpYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IEEgSmF2YVNjcmlwdCBvYmplY3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyB0aGUga2V5cyBvZiB0aGUgb2JqZWN0IGFzIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiBvYmplY3RLZXlzKG9iamVjdCkge1xuICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yRWFjaChvYmplY3QsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogSUU4LXNhZmUgd3JhcHBlciBmb3IgYEFycmF5LnByb3RvdHlwZS5pbmRleE9mKClgLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEEgSmF2YVNjcmlwdCBhcnJheS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQSB2YWx1ZSB0byBzZWFyY2ggdGhlIGFycmF5IGZvci5cbiAqIEByZXR1cm4ge051bWJlcn0gUmV0dXJucyB0aGUgYXJyYXkgaW5kZXggdmFsdWUgb2YgYHZhbHVlYCwgb3IgYC0xYCBpZiBub3QgcHJlc2VudC5cbiAqL1xuZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUsIE51bWJlcihhcmd1bWVudHNbMl0pIHx8IDApO1xuICB9XG4gIHZhciBsZW4gPSBhcnJheS5sZW5ndGggPj4+IDAsIGZyb20gPSBOdW1iZXIoYXJndW1lbnRzWzJdKSB8fCAwO1xuICBmcm9tID0gKGZyb20gPCAwKSA/IE1hdGguY2VpbChmcm9tKSA6IE1hdGguZmxvb3IoZnJvbSk7XG5cbiAgaWYgKGZyb20gPCAwKSBmcm9tICs9IGxlbjtcblxuICBmb3IgKDsgZnJvbSA8IGxlbjsgZnJvbSsrKSB7XG4gICAgaWYgKGZyb20gaW4gYXJyYXkgJiYgYXJyYXlbZnJvbV0gPT09IHZhbHVlKSByZXR1cm4gZnJvbTtcbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgc2V0IG9mIHBhcmFtZXRlcnMgd2l0aCBhbGwgcGFyYW1ldGVycyBpbmhlcml0ZWQgYmV0d2VlbiB0aGUgY29tbW9uIHBhcmVudHMgb2YgdGhlXG4gKiBjdXJyZW50IHN0YXRlIGFuZCBhIGdpdmVuIGRlc3RpbmF0aW9uIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdXJyZW50UGFyYW1zIFRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCBzdGF0ZSBwYXJhbWV0ZXJzICgkc3RhdGVQYXJhbXMpLlxuICogQHBhcmFtIHtPYmplY3R9IG5ld1BhcmFtcyBUaGUgc2V0IG9mIHBhcmFtZXRlcnMgd2hpY2ggd2lsbCBiZSBjb21wb3NpdGVkIHdpdGggaW5oZXJpdGVkIHBhcmFtcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSAkY3VycmVudCBJbnRlcm5hbCBkZWZpbml0aW9uIG9mIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gJHRvIEludGVybmFsIGRlZmluaXRpb24gb2Ygb2JqZWN0IHJlcHJlc2VudGluZyBzdGF0ZSB0byB0cmFuc2l0aW9uIHRvLlxuICovXG5mdW5jdGlvbiBpbmhlcml0UGFyYW1zKGN1cnJlbnRQYXJhbXMsIG5ld1BhcmFtcywgJGN1cnJlbnQsICR0bykge1xuICB2YXIgcGFyZW50cyA9IGFuY2VzdG9ycygkY3VycmVudCwgJHRvKSwgcGFyZW50UGFyYW1zLCBpbmhlcml0ZWQgPSB7fSwgaW5oZXJpdExpc3QgPSBbXTtcblxuICBmb3IgKHZhciBpIGluIHBhcmVudHMpIHtcbiAgICBpZiAoIXBhcmVudHNbaV0gfHwgIXBhcmVudHNbaV0ucGFyYW1zKSBjb250aW51ZTtcbiAgICBwYXJlbnRQYXJhbXMgPSBvYmplY3RLZXlzKHBhcmVudHNbaV0ucGFyYW1zKTtcbiAgICBpZiAoIXBhcmVudFBhcmFtcy5sZW5ndGgpIGNvbnRpbnVlO1xuXG4gICAgZm9yICh2YXIgaiBpbiBwYXJlbnRQYXJhbXMpIHtcbiAgICAgIGlmIChpbmRleE9mKGluaGVyaXRMaXN0LCBwYXJlbnRQYXJhbXNbal0pID49IDApIGNvbnRpbnVlO1xuICAgICAgaW5oZXJpdExpc3QucHVzaChwYXJlbnRQYXJhbXNbal0pO1xuICAgICAgaW5oZXJpdGVkW3BhcmVudFBhcmFtc1tqXV0gPSBjdXJyZW50UGFyYW1zW3BhcmVudFBhcmFtc1tqXV07XG4gICAgfVxuICB9XG4gIHJldHVybiBleHRlbmQoe30sIGluaGVyaXRlZCwgbmV3UGFyYW1zKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIG5vbi1zdHJpY3QgY29tcGFyaXNvbiBvZiB0aGUgc3Vic2V0IG9mIHR3byBvYmplY3RzLCBkZWZpbmVkIGJ5IGEgbGlzdCBvZiBrZXlzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBmaXJzdCBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgc2Vjb25kIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGtleXMgVGhlIGxpc3Qgb2Yga2V5cyB3aXRoaW4gZWFjaCBvYmplY3QgdG8gY29tcGFyZS4gSWYgdGhlIGxpc3QgaXMgZW1wdHkgb3Igbm90IHNwZWNpZmllZCxcbiAqICAgICAgICAgICAgICAgICAgICAgaXQgZGVmYXVsdHMgdG8gdGhlIGxpc3Qgb2Yga2V5cyBpbiBgYWAuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUga2V5cyBtYXRjaCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsRm9yS2V5cyhhLCBiLCBrZXlzKSB7XG4gIGlmICgha2V5cykge1xuICAgIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBuIGluIGEpIGtleXMucHVzaChuKTsgLy8gVXNlZCBpbnN0ZWFkIG9mIE9iamVjdC5rZXlzKCkgZm9yIElFOCBjb21wYXRpYmlsaXR5XG4gIH1cblxuICBmb3IgKHZhciBpPTA7IGk8a2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrID0ga2V5c1tpXTtcbiAgICBpZiAoYVtrXSAhPSBiW2tdKSByZXR1cm4gZmFsc2U7IC8vIE5vdCAnPT09JywgdmFsdWVzIGFyZW4ndCBuZWNlc3NhcmlseSBub3JtYWxpemVkXG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3Vic2V0IG9mIGFuIG9iamVjdCwgYmFzZWQgb24gYSBsaXN0IG9mIGtleXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0ga2V5c1xuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlc1xuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyBhIHN1YnNldCBvZiBgdmFsdWVzYC5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyQnlLZXlzKGtleXMsIHZhbHVlcykge1xuICB2YXIgZmlsdGVyZWQgPSB7fTtcblxuICBmb3JFYWNoKGtleXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgZmlsdGVyZWRbbmFtZV0gPSB2YWx1ZXNbbmFtZV07XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWQ7XG59XG5cbi8vIGxpa2UgXy5pbmRleEJ5XG4vLyB3aGVuIHlvdSBrbm93IHRoYXQgeW91ciBpbmRleCB2YWx1ZXMgd2lsbCBiZSB1bmlxdWUsIG9yIHlvdSB3YW50IGxhc3Qtb25lLWluIHRvIHdpblxuZnVuY3Rpb24gaW5kZXhCeShhcnJheSwgcHJvcE5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmVzdWx0W2l0ZW1bcHJvcE5hbWVdXSA9IGl0ZW07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHRyYWN0ZWQgZnJvbSB1bmRlcnNjb3JlLmpzXG4vLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuZnVuY3Rpb24gcGljayhvYmopIHtcbiAgdmFyIGNvcHkgPSB7fTtcbiAgdmFyIGtleXMgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KEFycmF5LnByb3RvdHlwZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIGZvckVhY2goa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmopIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbi8vIGV4dHJhY3RlZCBmcm9tIHVuZGVyc2NvcmUuanNcbi8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbWl0dGluZyB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbmZ1bmN0aW9uIG9taXQob2JqKSB7XG4gIHZhciBjb3B5ID0ge307XG4gIHZhciBrZXlzID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShBcnJheS5wcm90b3R5cGUsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGluZGV4T2Yoa2V5cywga2V5KSA9PSAtMSkgY29weVtrZXldID0gb2JqW2tleV07XG4gIH1cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHBsdWNrKGNvbGxlY3Rpb24sIGtleSkge1xuICB2YXIgcmVzdWx0ID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IFtdIDoge307XG5cbiAgZm9yRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWwsIGkpIHtcbiAgICByZXN1bHRbaV0gPSBpc0Z1bmN0aW9uKGtleSkgPyBrZXkodmFsKSA6IHZhbFtrZXldO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGNvbGxlY3Rpb24sIGNhbGxiYWNrKSB7XG4gIHZhciBhcnJheSA9IGlzQXJyYXkoY29sbGVjdGlvbik7XG4gIHZhciByZXN1bHQgPSBhcnJheSA/IFtdIDoge307XG4gIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsLCBpKSB7XG4gICAgaWYgKGNhbGxiYWNrKHZhbCwgaSkpIHtcbiAgICAgIHJlc3VsdFthcnJheSA/IHJlc3VsdC5sZW5ndGggOiBpXSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdCA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBbXSA6IHt9O1xuXG4gIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsLCBpKSB7XG4gICAgcmVzdWx0W2ldID0gY2FsbGJhY2sodmFsLCBpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGlzc3VlICMyNjc2ICMyODg5XG5mdW5jdGlvbiBzaWxlbmNlVW5jYXVnaHRJblByb21pc2UgKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UudGhlbih1bmRlZmluZWQsIGZ1bmN0aW9uKCkge30pICYmIHByb21pc2U7XG59XG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbFxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogIyB1aS5yb3V0ZXIudXRpbCBzdWItbW9kdWxlXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgYSBkZXBlbmRlbmN5IG9mIG90aGVyIHN1Yi1tb2R1bGVzLiBEbyBub3QgaW5jbHVkZSB0aGlzIG1vZHVsZSBhcyBhIGRlcGVuZGVuY3lcbiAqIGluIHlvdXIgYW5ndWxhciBhcHAgKHVzZSB7QGxpbmsgdWkucm91dGVyfSBtb2R1bGUgaW5zdGVhZCkuXG4gKlxuICovXG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnV0aWwnLCBbJ25nJ10pO1xuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgdWkucm91dGVyLnJvdXRlclxuICogXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnV0aWxcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqICMgdWkucm91dGVyLnJvdXRlciBzdWItbW9kdWxlXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgYSBkZXBlbmRlbmN5IG9mIG90aGVyIHN1Yi1tb2R1bGVzLiBEbyBub3QgaW5jbHVkZSB0aGlzIG1vZHVsZSBhcyBhIGRlcGVuZGVuY3lcbiAqIGluIHlvdXIgYW5ndWxhciBhcHAgKHVzZSB7QGxpbmsgdWkucm91dGVyfSBtb2R1bGUgaW5zdGVhZCkuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIucm91dGVyJywgWyd1aS5yb3V0ZXIudXRpbCddKTtcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZVxuICogXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnJvdXRlclxuICogQHJlcXVpcmVzIHVpLnJvdXRlci51dGlsXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiAjIHVpLnJvdXRlci5zdGF0ZSBzdWItbW9kdWxlXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgYSBkZXBlbmRlbmN5IG9mIHRoZSBtYWluIHVpLnJvdXRlciBtb2R1bGUuIERvIG5vdCBpbmNsdWRlIHRoaXMgbW9kdWxlIGFzIGEgZGVwZW5kZW5jeVxuICogaW4geW91ciBhbmd1bGFyIGFwcCAodXNlIHtAbGluayB1aS5yb3V0ZXJ9IG1vZHVsZSBpbnN0ZWFkKS5cbiAqIFxuICovXG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnN0YXRlJywgWyd1aS5yb3V0ZXIucm91dGVyJywgJ3VpLnJvdXRlci51dGlsJ10pO1xuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgdWkucm91dGVyXG4gKlxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogIyB1aS5yb3V0ZXJcbiAqIFxuICogIyMgVGhlIG1haW4gbW9kdWxlIGZvciB1aS5yb3V0ZXIgXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBzdWItbW9kdWxlcyBpbmNsdWRlZCB3aXRoIHRoZSB1aS5yb3V0ZXIgbW9kdWxlLCBob3dldmVyIG9ubHkgdGhpcyBtb2R1bGUgaXMgbmVlZGVkXG4gKiBhcyBhIGRlcGVuZGVuY3kgd2l0aGluIHlvdXIgYW5ndWxhciBhcHAuIFRoZSBvdGhlciBtb2R1bGVzIGFyZSBmb3Igb3JnYW5pemF0aW9uIHB1cnBvc2VzLiBcbiAqXG4gKiBUaGUgbW9kdWxlcyBhcmU6XG4gKiAqIHVpLnJvdXRlciAtIHRoZSBtYWluIFwidW1icmVsbGFcIiBtb2R1bGVcbiAqICogdWkucm91dGVyLnJvdXRlciAtIFxuICogXG4gKiAqWW91J2xsIG5lZWQgdG8gaW5jbHVkZSAqKm9ubHkqKiB0aGlzIG1vZHVsZSBhcyB0aGUgZGVwZW5kZW5jeSB3aXRoaW4geW91ciBhbmd1bGFyIGFwcC4qXG4gKiBcbiAqIDxwcmU+XG4gKiA8IWRvY3R5cGUgaHRtbD5cbiAqIDxodG1sIG5nLWFwcD1cIm15QXBwXCI+XG4gKiA8aGVhZD5cbiAqICAgPHNjcmlwdCBzcmM9XCJqcy9hbmd1bGFyLmpzXCI+PC9zY3JpcHQ+XG4gKiAgIDwhLS0gSW5jbHVkZSB0aGUgdWktcm91dGVyIHNjcmlwdCAtLT5cbiAqICAgPHNjcmlwdCBzcmM9XCJqcy9hbmd1bGFyLXVpLXJvdXRlci5taW4uanNcIj48L3NjcmlwdD5cbiAqICAgPHNjcmlwdD5cbiAqICAgICAvLyAuLi5hbmQgYWRkICd1aS5yb3V0ZXInIGFzIGEgZGVwZW5kZW5jeVxuICogICAgIHZhciBteUFwcCA9IGFuZ3VsYXIubW9kdWxlKCdteUFwcCcsIFsndWkucm91dGVyJ10pO1xuICogICA8L3NjcmlwdD5cbiAqIDwvaGVhZD5cbiAqIDxib2R5PlxuICogPC9ib2R5PlxuICogPC9odG1sPlxuICogPC9wcmU+XG4gKi9cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXInLCBbJ3VpLnJvdXRlci5zdGF0ZSddKTtcblxuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci5jb21wYXQnLCBbJ3VpLnJvdXRlciddKTtcblxuLyoqXG4gKiBAbmdkb2Mgb2JqZWN0XG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kcmVzb2x2ZVxuICpcbiAqIEByZXF1aXJlcyAkcVxuICogQHJlcXVpcmVzICRpbmplY3RvclxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogTWFuYWdlcyByZXNvbHV0aW9uIG9mIChhY3ljbGljKSBncmFwaHMgb2YgcHJvbWlzZXMuXG4gKi9cbiRSZXNvbHZlLiRpbmplY3QgPSBbJyRxJywgJyRpbmplY3RvciddO1xuZnVuY3Rpb24gJFJlc29sdmUoICAkcSwgICAgJGluamVjdG9yKSB7XG4gIFxuICB2YXIgVklTSVRfSU5fUFJPR1JFU1MgPSAxLFxuICAgICAgVklTSVRfRE9ORSA9IDIsXG4gICAgICBOT1RISU5HID0ge30sXG4gICAgICBOT19ERVBFTkRFTkNJRVMgPSBbXSxcbiAgICAgIE5PX0xPQ0FMUyA9IE5PVEhJTkcsXG4gICAgICBOT19QQVJFTlQgPSBleHRlbmQoJHEud2hlbihOT1RISU5HKSwgeyAkJHByb21pc2VzOiBOT1RISU5HLCAkJHZhbHVlczogTk9USElORyB9KTtcbiAgXG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kcmVzb2x2ZSNzdHVkeVxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwuJHJlc29sdmVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFN0dWRpZXMgYSBzZXQgb2YgaW52b2NhYmxlcyB0aGF0IGFyZSBsaWtlbHkgdG8gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcy5cbiAgICogPHByZT5cbiAgICogJHJlc29sdmUuc3R1ZHkoaW52b2NhYmxlcykobG9jYWxzLCBwYXJlbnQsIHNlbGYpXG4gICAqIDwvcHJlPlxuICAgKiBpcyBlcXVpdmFsZW50IHRvXG4gICAqIDxwcmU+XG4gICAqICRyZXNvbHZlLnJlc29sdmUoaW52b2NhYmxlcywgbG9jYWxzLCBwYXJlbnQsIHNlbGYpXG4gICAqIDwvcHJlPlxuICAgKiBidXQgdGhlIGZvcm1lciBpcyBtb3JlIGVmZmljaWVudCAoaW4gZmFjdCBgcmVzb2x2ZWAganVzdCBjYWxscyBgc3R1ZHlgIFxuICAgKiBpbnRlcm5hbGx5KS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGludm9jYWJsZXMgSW52b2NhYmxlIG9iamVjdHNcbiAgICogQHJldHVybiB7ZnVuY3Rpb259IGEgZnVuY3Rpb24gdG8gcGFzcyBpbiBsb2NhbHMsIHBhcmVudCBhbmQgc2VsZlxuICAgKi9cbiAgdGhpcy5zdHVkeSA9IGZ1bmN0aW9uIChpbnZvY2FibGVzKSB7XG4gICAgaWYgKCFpc09iamVjdChpbnZvY2FibGVzKSkgdGhyb3cgbmV3IEVycm9yKFwiJ2ludm9jYWJsZXMnIG11c3QgYmUgYW4gb2JqZWN0XCIpO1xuICAgIHZhciBpbnZvY2FibGVLZXlzID0gb2JqZWN0S2V5cyhpbnZvY2FibGVzIHx8IHt9KTtcbiAgICBcbiAgICAvLyBQZXJmb3JtIGEgdG9wb2xvZ2ljYWwgc29ydCBvZiBpbnZvY2FibGVzIHRvIGJ1aWxkIGFuIG9yZGVyZWQgcGxhblxuICAgIHZhciBwbGFuID0gW10sIGN5Y2xlID0gW10sIHZpc2l0ZWQgPSB7fTtcbiAgICBmdW5jdGlvbiB2aXNpdCh2YWx1ZSwga2V5KSB7XG4gICAgICBpZiAodmlzaXRlZFtrZXldID09PSBWSVNJVF9ET05FKSByZXR1cm47XG4gICAgICBcbiAgICAgIGN5Y2xlLnB1c2goa2V5KTtcbiAgICAgIGlmICh2aXNpdGVkW2tleV0gPT09IFZJU0lUX0lOX1BST0dSRVNTKSB7XG4gICAgICAgIGN5Y2xlLnNwbGljZSgwLCBpbmRleE9mKGN5Y2xlLCBrZXkpKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3ljbGljIGRlcGVuZGVuY3k6IFwiICsgY3ljbGUuam9pbihcIiAtPiBcIikpO1xuICAgICAgfVxuICAgICAgdmlzaXRlZFtrZXldID0gVklTSVRfSU5fUFJPR1JFU1M7XG4gICAgICBcbiAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgcGxhbi5wdXNoKGtleSwgWyBmdW5jdGlvbigpIHsgcmV0dXJuICRpbmplY3Rvci5nZXQodmFsdWUpOyB9XSwgTk9fREVQRU5ERU5DSUVTKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSAkaW5qZWN0b3IuYW5ub3RhdGUodmFsdWUpO1xuICAgICAgICBmb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgaWYgKHBhcmFtICE9PSBrZXkgJiYgaW52b2NhYmxlcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHZpc2l0KGludm9jYWJsZXNbcGFyYW1dLCBwYXJhbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwbGFuLnB1c2goa2V5LCB2YWx1ZSwgcGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY3ljbGUucG9wKCk7XG4gICAgICB2aXNpdGVkW2tleV0gPSBWSVNJVF9ET05FO1xuICAgIH1cbiAgICBmb3JFYWNoKGludm9jYWJsZXMsIHZpc2l0KTtcbiAgICBpbnZvY2FibGVzID0gY3ljbGUgPSB2aXNpdGVkID0gbnVsbDsgLy8gcGxhbiBpcyBhbGwgdGhhdCdzIHJlcXVpcmVkXG4gICAgXG4gICAgZnVuY3Rpb24gaXNSZXNvbHZlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLnRoZW4gJiYgdmFsdWUuJCRwcm9taXNlcztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsb2NhbHMsIHBhcmVudCwgc2VsZikge1xuICAgICAgaWYgKGlzUmVzb2x2ZShsb2NhbHMpICYmIHNlbGYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxmID0gcGFyZW50OyBwYXJlbnQgPSBsb2NhbHM7IGxvY2FscyA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoIWxvY2FscykgbG9jYWxzID0gTk9fTE9DQUxTO1xuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KGxvY2FscykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2xvY2FscycgbXVzdCBiZSBhbiBvYmplY3RcIik7XG4gICAgICB9ICAgICAgIFxuICAgICAgaWYgKCFwYXJlbnQpIHBhcmVudCA9IE5PX1BBUkVOVDtcbiAgICAgIGVsc2UgaWYgKCFpc1Jlc29sdmUocGFyZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIncGFyZW50JyBtdXN0IGJlIGEgcHJvbWlzZSByZXR1cm5lZCBieSAkcmVzb2x2ZS5yZXNvbHZlKClcIik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFRvIGNvbXBsZXRlIHRoZSBvdmVyYWxsIHJlc29sdXRpb24sIHdlIGhhdmUgdG8gd2FpdCBmb3IgdGhlIHBhcmVudFxuICAgICAgLy8gcHJvbWlzZSBhbmQgZm9yIHRoZSBwcm9taXNlIGZvciBlYWNoIGludm9rYWJsZSBpbiBvdXIgcGxhbi5cbiAgICAgIHZhciByZXNvbHV0aW9uID0gJHEuZGVmZXIoKSxcbiAgICAgICAgICByZXN1bHQgPSBzaWxlbmNlVW5jYXVnaHRJblByb21pc2UocmVzb2x1dGlvbi5wcm9taXNlKSxcbiAgICAgICAgICBwcm9taXNlcyA9IHJlc3VsdC4kJHByb21pc2VzID0ge30sXG4gICAgICAgICAgdmFsdWVzID0gZXh0ZW5kKHt9LCBsb2NhbHMpLFxuICAgICAgICAgIHdhaXQgPSAxICsgcGxhbi5sZW5ndGgvMyxcbiAgICAgICAgICBtZXJnZWQgPSBmYWxzZTtcblxuICAgICAgc2lsZW5jZVVuY2F1Z2h0SW5Qcm9taXNlKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgICAvLyBNZXJnZSBwYXJlbnQgdmFsdWVzIHdlIGhhdmVuJ3QgZ290IHlldCBhbmQgcHVibGlzaCBvdXIgb3duICQkdmFsdWVzXG4gICAgICAgIGlmICghLS13YWl0KSB7XG4gICAgICAgICAgaWYgKCFtZXJnZWQpIG1lcmdlKHZhbHVlcywgcGFyZW50LiQkdmFsdWVzKTsgXG4gICAgICAgICAgcmVzdWx0LiQkdmFsdWVzID0gdmFsdWVzO1xuICAgICAgICAgIHJlc3VsdC4kJHByb21pc2VzID0gcmVzdWx0LiQkcHJvbWlzZXMgfHwgdHJ1ZTsgLy8ga2VlcCBmb3IgaXNSZXNvbHZlKClcbiAgICAgICAgICBkZWxldGUgcmVzdWx0LiQkaW5oZXJpdGVkVmFsdWVzO1xuICAgICAgICAgIHJlc29sdXRpb24ucmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGZhaWwocmVhc29uKSB7XG4gICAgICAgIHJlc3VsdC4kJGZhaWx1cmUgPSByZWFzb247XG4gICAgICAgIHJlc29sdXRpb24ucmVqZWN0KHJlYXNvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgcGFyZW50IGhhcyBhbHJlYWR5IGZhaWxlZFxuICAgICAgaWYgKGlzRGVmaW5lZChwYXJlbnQuJCRmYWlsdXJlKSkge1xuICAgICAgICBmYWlsKHBhcmVudC4kJGZhaWx1cmUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAocGFyZW50LiQkaW5oZXJpdGVkVmFsdWVzKSB7XG4gICAgICAgIG1lcmdlKHZhbHVlcywgb21pdChwYXJlbnQuJCRpbmhlcml0ZWRWYWx1ZXMsIGludm9jYWJsZUtleXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWVyZ2UgcGFyZW50IHZhbHVlcyBpZiB0aGUgcGFyZW50IGhhcyBhbHJlYWR5IHJlc29sdmVkLCBvciBtZXJnZVxuICAgICAgLy8gcGFyZW50IHByb21pc2VzIGFuZCB3YWl0IGlmIHRoZSBwYXJlbnQgcmVzb2x2ZSBpcyBzdGlsbCBpbiBwcm9ncmVzcy5cbiAgICAgIGV4dGVuZChwcm9taXNlcywgcGFyZW50LiQkcHJvbWlzZXMpO1xuICAgICAgaWYgKHBhcmVudC4kJHZhbHVlcykge1xuICAgICAgICBtZXJnZWQgPSBtZXJnZSh2YWx1ZXMsIG9taXQocGFyZW50LiQkdmFsdWVzLCBpbnZvY2FibGVLZXlzKSk7XG4gICAgICAgIHJlc3VsdC4kJGluaGVyaXRlZFZhbHVlcyA9IG9taXQocGFyZW50LiQkdmFsdWVzLCBpbnZvY2FibGVLZXlzKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhcmVudC4kJGluaGVyaXRlZFZhbHVlcykge1xuICAgICAgICAgIHJlc3VsdC4kJGluaGVyaXRlZFZhbHVlcyA9IG9taXQocGFyZW50LiQkaW5oZXJpdGVkVmFsdWVzLCBpbnZvY2FibGVLZXlzKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIHBhcmVudC50aGVuKGRvbmUsIGZhaWwpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBQcm9jZXNzIGVhY2ggaW52b2NhYmxlIGluIHRoZSBwbGFuLCBidXQgaWdub3JlIGFueSB3aGVyZSBhIGxvY2FsIG9mIHRoZSBzYW1lIG5hbWUgZXhpc3RzLlxuICAgICAgZm9yICh2YXIgaT0wLCBpaT1wbGFuLmxlbmd0aDsgaTxpaTsgaSs9Mykge1xuICAgICAgICBpZiAobG9jYWxzLmhhc093blByb3BlcnR5KHBsYW5baV0pKSBkb25lKCk7XG4gICAgICAgIGVsc2UgaW52b2tlKHBsYW5baV0sIHBsYW5baSsxXSwgcGxhbltpKzJdKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZnVuY3Rpb24gaW52b2tlKGtleSwgaW52b2NhYmxlLCBwYXJhbXMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgZGVmZXJyZWQgZm9yIHRoaXMgaW52b2NhdGlvbi4gRmFpbHVyZXMgd2lsbCBwcm9wYWdhdGUgdG8gdGhlIHJlc29sdXRpb24gYXMgd2VsbC5cbiAgICAgICAgdmFyIGludm9jYXRpb24gPSAkcS5kZWZlcigpLCB3YWl0UGFyYW1zID0gMDtcbiAgICAgICAgZnVuY3Rpb24gb25mYWlsdXJlKHJlYXNvbikge1xuICAgICAgICAgIGludm9jYXRpb24ucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgZmFpbChyZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdhaXQgZm9yIGFueSBwYXJhbWV0ZXIgdGhhdCB3ZSBoYXZlIGEgcHJvbWlzZSBmb3IgKGVpdGhlciBmcm9tIHBhcmVudCBvciBmcm9tIHRoaXNcbiAgICAgICAgLy8gcmVzb2x2ZTsgaW4gdGhhdCBjYXNlIHN0dWR5KCkgd2lsbCBoYXZlIG1hZGUgc3VyZSBpdCdzIG9yZGVyZWQgYmVmb3JlIHVzIGluIHRoZSBwbGFuKS5cbiAgICAgICAgZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIChkZXApIHtcbiAgICAgICAgICBpZiAocHJvbWlzZXMuaGFzT3duUHJvcGVydHkoZGVwKSAmJiAhbG9jYWxzLmhhc093blByb3BlcnR5KGRlcCkpIHtcbiAgICAgICAgICAgIHdhaXRQYXJhbXMrKztcbiAgICAgICAgICAgIHByb21pc2VzW2RlcF0udGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIHZhbHVlc1tkZXBdID0gcmVzdWx0O1xuICAgICAgICAgICAgICBpZiAoISgtLXdhaXRQYXJhbXMpKSBwcm9jZWVkKCk7XG4gICAgICAgICAgICB9LCBvbmZhaWx1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghd2FpdFBhcmFtcykgcHJvY2VlZCgpO1xuICAgICAgICBmdW5jdGlvbiBwcm9jZWVkKCkge1xuICAgICAgICAgIGlmIChpc0RlZmluZWQocmVzdWx0LiQkZmFpbHVyZSkpIHJldHVybjtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW52b2NhdGlvbi5yZXNvbHZlKCRpbmplY3Rvci5pbnZva2UoaW52b2NhYmxlLCBzZWxmLCB2YWx1ZXMpKTtcbiAgICAgICAgICAgIGludm9jYXRpb24ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgdmFsdWVzW2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0sIG9uZmFpbHVyZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgb25mYWlsdXJlKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBQdWJsaXNoIHByb21pc2Ugc3luY2hyb25vdXNseTsgaW52b2NhdGlvbnMgZnVydGhlciBkb3duIGluIHRoZSBwbGFuIG1heSBkZXBlbmQgb24gaXQuXG4gICAgICAgIHByb21pc2VzW2tleV0gPSBzaWxlbmNlVW5jYXVnaHRJblByb21pc2UoaW52b2NhdGlvbi5wcm9taXNlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuICBcbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kcmVzb2x2ZSNyZXNvbHZlXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kcmVzb2x2ZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVzb2x2ZXMgYSBzZXQgb2YgaW52b2NhYmxlcy4gQW4gaW52b2NhYmxlIGlzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCB2aWEgXG4gICAqIGAkaW5qZWN0b3IuaW52b2tlKClgLCBhbmQgY2FuIGhhdmUgYW4gYXJiaXRyYXJ5IG51bWJlciBvZiBkZXBlbmRlbmNpZXMuIFxuICAgKiBBbiBpbnZvY2FibGUgY2FuIGVpdGhlciByZXR1cm4gYSB2YWx1ZSBkaXJlY3RseSxcbiAgICogb3IgYSBgJHFgIHByb21pc2UuIElmIGEgcHJvbWlzZSBpcyByZXR1cm5lZCBpdCB3aWxsIGJlIHJlc29sdmVkIGFuZCB0aGUgXG4gICAqIHJlc3VsdGluZyB2YWx1ZSB3aWxsIGJlIHVzZWQgaW5zdGVhZC4gRGVwZW5kZW5jaWVzIG9mIGludm9jYWJsZXMgYXJlIHJlc29sdmVkIFxuICAgKiAoaW4gdGhpcyBvcmRlciBvZiBwcmVjZWRlbmNlKVxuICAgKlxuICAgKiAtIGZyb20gdGhlIHNwZWNpZmllZCBgbG9jYWxzYFxuICAgKiAtIGZyb20gYW5vdGhlciBpbnZvY2FibGUgdGhhdCBpcyBwYXJ0IG9mIHRoaXMgYCRyZXNvbHZlYCBjYWxsXG4gICAqIC0gZnJvbSBhbiBpbnZvY2FibGUgdGhhdCBpcyBpbmhlcml0ZWQgZnJvbSBhIGBwYXJlbnRgIGNhbGwgdG8gYCRyZXNvbHZlYCBcbiAgICogICAob3IgcmVjdXJzaXZlbHlcbiAgICogLSBmcm9tIGFueSBhbmNlc3RvciBgJHJlc29sdmVgIG9mIHRoYXQgcGFyZW50KS5cbiAgICpcbiAgICogVGhlIHJldHVybiB2YWx1ZSBvZiBgJHJlc29sdmVgIGlzIGEgcHJvbWlzZSBmb3IgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgXG4gICAqIChpbiB0aGlzIG9yZGVyIG9mIHByZWNlZGVuY2UpXG4gICAqXG4gICAqIC0gYW55IGBsb2NhbHNgIChpZiBzcGVjaWZpZWQpXG4gICAqIC0gdGhlIHJlc29sdmVkIHJldHVybiB2YWx1ZXMgb2YgYWxsIGluamVjdGFibGVzXG4gICAqIC0gYW55IHZhbHVlcyBpbmhlcml0ZWQgZnJvbSBhIGBwYXJlbnRgIGNhbGwgdG8gYCRyZXNvbHZlYCAoaWYgc3BlY2lmaWVkKVxuICAgKlxuICAgKiBUaGUgcHJvbWlzZSB3aWxsIHJlc29sdmUgYWZ0ZXIgdGhlIGBwYXJlbnRgIHByb21pc2UgKGlmIGFueSkgYW5kIGFsbCBwcm9taXNlcyBcbiAgICogcmV0dXJuZWQgYnkgaW5qZWN0YWJsZXMgaGF2ZSBiZWVuIHJlc29sdmVkLiBJZiBhbnkgaW52b2NhYmxlIFxuICAgKiAob3IgYCRpbmplY3Rvci5pbnZva2VgKSB0aHJvd3MgYW4gZXhjZXB0aW9uLCBvciBpZiBhIHByb21pc2UgcmV0dXJuZWQgYnkgYW4gXG4gICAqIGludm9jYWJsZSBpcyByZWplY3RlZCwgdGhlIGAkcmVzb2x2ZWAgcHJvbWlzZSBpcyBpbW1lZGlhdGVseSByZWplY3RlZCB3aXRoIHRoZSBcbiAgICogc2FtZSBlcnJvci4gQSByZWplY3Rpb24gb2YgYSBgcGFyZW50YCBwcm9taXNlIChpZiBzcGVjaWZpZWQpIHdpbGwgbGlrZXdpc2UgYmUgXG4gICAqIHByb3BhZ2F0ZWQgaW1tZWRpYXRlbHkuIE9uY2UgdGhlIGAkcmVzb2x2ZWAgcHJvbWlzZSBoYXMgYmVlbiByZWplY3RlZCwgbm8gXG4gICAqIGZ1cnRoZXIgaW52b2NhYmxlcyB3aWxsIGJlIGNhbGxlZC5cbiAgICogXG4gICAqIEN5Y2xpYyBkZXBlbmRlbmNpZXMgYmV0d2VlbiBpbnZvY2FibGVzIGFyZSBub3QgcGVybWl0dGVkIGFuZCB3aWxsIGNhdXNlIGAkcmVzb2x2ZWBcbiAgICogdG8gdGhyb3cgYW4gZXJyb3IuIEFzIGEgc3BlY2lhbCBjYXNlLCBhbiBpbmplY3RhYmxlIGNhbiBkZXBlbmQgb24gYSBwYXJhbWV0ZXIgXG4gICAqIHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGUgaW5qZWN0YWJsZSwgd2hpY2ggd2lsbCBiZSBmdWxmaWxsZWQgZnJvbSB0aGUgYHBhcmVudGAgXG4gICAqIGluamVjdGFibGUgb2YgdGhlIHNhbWUgbmFtZS4gVGhpcyBhbGxvd3MgaW5oZXJpdGVkIHZhbHVlcyB0byBiZSBkZWNvcmF0ZWQuIFxuICAgKiBOb3RlIHRoYXQgaW4gdGhpcyBjYXNlIGFueSBvdGhlciBpbmplY3RhYmxlIGluIHRoZSBzYW1lIGAkcmVzb2x2ZWAgd2l0aCB0aGUgc2FtZVxuICAgKiBkZXBlbmRlbmN5IHdvdWxkIHNlZSB0aGUgZGVjb3JhdGVkIHZhbHVlLCBub3QgdGhlIGluaGVyaXRlZCB2YWx1ZS5cbiAgICpcbiAgICogTm90ZSB0aGF0IG1pc3NpbmcgZGVwZW5kZW5jaWVzIC0tIHVubGlrZSBjeWNsaWMgZGVwZW5kZW5jaWVzIC0tIHdpbGwgY2F1c2UgYW4gXG4gICAqIChhc3luY2hyb25vdXMpIHJlamVjdGlvbiBvZiB0aGUgYCRyZXNvbHZlYCBwcm9taXNlIHJhdGhlciB0aGFuIGEgKHN5bmNocm9ub3VzKSBcbiAgICogZXhjZXB0aW9uLlxuICAgKlxuICAgKiBJbnZvY2FibGVzIGFyZSBpbnZva2VkIGVhZ2VybHkgYXMgc29vbiBhcyBhbGwgZGVwZW5kZW5jaWVzIGFyZSBhdmFpbGFibGUuIFxuICAgKiBUaGlzIGlzIHRydWUgZXZlbiBmb3IgZGVwZW5kZW5jaWVzIGluaGVyaXRlZCBmcm9tIGEgYHBhcmVudGAgY2FsbCB0byBgJHJlc29sdmVgLlxuICAgKlxuICAgKiBBcyBhIHNwZWNpYWwgY2FzZSwgYW4gaW52b2NhYmxlIGNhbiBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBpcyB0YWtlbiB0byBcbiAgICogYmUgYSBzZXJ2aWNlIG5hbWUgdG8gYmUgcGFzc2VkIHRvIGAkaW5qZWN0b3IuZ2V0KClgLiBUaGlzIGlzIHN1cHBvcnRlZCBwcmltYXJpbHkgXG4gICAqIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBgcmVzb2x2ZWAgcHJvcGVydHkgb2YgYCRyb3V0ZVByb3ZpZGVyYCBcbiAgICogcm91dGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gaW52b2NhYmxlcyBmdW5jdGlvbnMgdG8gaW52b2tlIG9yIFxuICAgKiBgJGluamVjdG9yYCBzZXJ2aWNlcyB0byBmZXRjaC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGxvY2FscyAgdmFsdWVzIHRvIG1ha2UgYXZhaWxhYmxlIHRvIHRoZSBpbmplY3RhYmxlc1xuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50ICBhIHByb21pc2UgcmV0dXJuZWQgYnkgYW5vdGhlciBjYWxsIHRvIGAkcmVzb2x2ZWAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzZWxmICB0aGUgYHRoaXNgIGZvciB0aGUgaW52b2tlZCBtZXRob2RzXG4gICAqIEByZXR1cm4ge29iamVjdH0gUHJvbWlzZSBmb3IgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHJlc29sdmVkIHJldHVybiB2YWx1ZVxuICAgKiBvZiBhbGwgaW52b2NhYmxlcywgYXMgd2VsbCBhcyBhbnkgaW5oZXJpdGVkIGFuZCBsb2NhbCB2YWx1ZXMuXG4gICAqL1xuICB0aGlzLnJlc29sdmUgPSBmdW5jdGlvbiAoaW52b2NhYmxlcywgbG9jYWxzLCBwYXJlbnQsIHNlbGYpIHtcbiAgICByZXR1cm4gdGhpcy5zdHVkeShpbnZvY2FibGVzKShsb2NhbHMsIHBhcmVudCwgc2VsZik7XG4gIH07XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIudXRpbCcpLnNlcnZpY2UoJyRyZXNvbHZlJywgJFJlc29sdmUpO1xuXG5cblxuLyoqXG4gKiBAbmdkb2Mgb2JqZWN0XG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5UHJvdmlkZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFByb3ZpZGVyIGZvciAkdGVtcGxhdGVGYWN0b3J5LiBNYW5hZ2VzIHdoaWNoIHRlbXBsYXRlLWxvYWRpbmcgbWVjaGFuaXNtIHRvXG4gKiB1c2UsIGFuZCB3aWxsIGRlZmF1bHQgdG8gdGhlIG1vc3QgcmVjZW50IG9uZSAoJHRlbXBsYXRlUmVxdWVzdCBvbiBBbmd1bGFyXG4gKiB2ZXJzaW9ucyBzdGFydGluZyBmcm9tIDEuMywgJGh0dHAgb3RoZXJ3aXNlKS5cbiAqL1xuZnVuY3Rpb24gVGVtcGxhdGVGYWN0b3J5UHJvdmlkZXIoKSB7XG4gIHZhciBzaG91bGRVbnNhZmVseVVzZUh0dHAgPSBhbmd1bGFyLnZlcnNpb24ubWlub3IgPCAzO1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeVByb3ZpZGVyI3Nob3VsZFVuc2FmZWx5VXNlSHR0cFxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeVByb3ZpZGVyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBGb3JjZXMgJHRlbXBsYXRlRmFjdG9yeSB0byB1c2UgJGh0dHAgaW5zdGVhZCBvZiAkdGVtcGxhdGVSZXF1ZXN0LiBUaGlzXG4gICAqIG1pZ2h0IGNhdXNlIFhTUywgYXMgJGh0dHAgZG9lc24ndCBlbmZvcmNlIHRoZSByZWd1bGFyIHNlY3VyaXR5IGNoZWNrcyBmb3JcbiAgICogdGVtcGxhdGVzIHRoYXQgaGF2ZSBiZWVuIGludHJvZHVjZWQgaW4gQW5ndWxhciAxLjMuIE5vdGUgdGhhdCBzZXR0aW5nIHRoaXNcbiAgICogdG8gZmFsc2Ugb24gQW5ndWxhciBvbGRlciB0aGFuIDEuMy54IHdpbGwgY3Jhc2gsIGFzIHRoZSAkdGVtcGxhdGVSZXF1ZXN0XG4gICAqIHNlcnZpY2UgKGFuZCB0aGUgc2VjdXJpdHkgY2hlY2tzKSBhcmUgbm90IGltcGxlbWVudGVkIG9uIHRoZXNlIHZlcnNpb25zLlxuICAgKlxuICAgKiBTZWUgdGhlICRzY2UgZG9jdW1lbnRhdGlvbiwgc2VjdGlvblxuICAgKiA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmFuZ3VsYXJqcy5vcmcvYXBpL25nL3NlcnZpY2UvJHNjZSNpbXBhY3Qtb24tbG9hZGluZy10ZW1wbGF0ZXNcIj5cbiAgICogSW1wYWN0IG9uIGxvYWRpbmcgdGVtcGxhdGVzPC9hPiBmb3IgbW9yZSBkZXRhaWxzIGFib3V0IHRoaXMgbWVjaGFuaXNtLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICB0aGlzLnNob3VsZFVuc2FmZWx5VXNlSHR0cCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgc2hvdWxkVW5zYWZlbHlVc2VIdHRwID0gISF2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIG9iamVjdFxuICAgKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5XG4gICAqXG4gICAqIEByZXF1aXJlcyAkaHR0cFxuICAgKiBAcmVxdWlyZXMgJHRlbXBsYXRlQ2FjaGVcbiAgICogQHJlcXVpcmVzICRpbmplY3RvclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2VydmljZS4gTWFuYWdlcyBsb2FkaW5nIG9mIHRlbXBsYXRlcy5cbiAgICovXG4gIHRoaXMuJGdldCA9IFsnJGh0dHAnLCAnJHRlbXBsYXRlQ2FjaGUnLCAnJGluamVjdG9yJywgZnVuY3Rpb24oJGh0dHAsICR0ZW1wbGF0ZUNhY2hlLCAkaW5qZWN0b3Ipe1xuICAgIHJldHVybiBuZXcgVGVtcGxhdGVGYWN0b3J5KCRodHRwLCAkdGVtcGxhdGVDYWNoZSwgJGluamVjdG9yLCBzaG91bGRVbnNhZmVseVVzZUh0dHApO31dO1xufVxuXG5cbi8qKlxuICogQG5nZG9jIG9iamVjdFxuICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeVxuICpcbiAqIEByZXF1aXJlcyAkaHR0cFxuICogQHJlcXVpcmVzICR0ZW1wbGF0ZUNhY2hlXG4gKiBAcmVxdWlyZXMgJGluamVjdG9yXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXJ2aWNlLiBNYW5hZ2VzIGxvYWRpbmcgb2YgdGVtcGxhdGVzLlxuICovXG5mdW5jdGlvbiBUZW1wbGF0ZUZhY3RvcnkoJGh0dHAsICR0ZW1wbGF0ZUNhY2hlLCAkaW5qZWN0b3IsIHNob3VsZFVuc2FmZWx5VXNlSHR0cCkge1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeSNmcm9tQ29uZmlnXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDcmVhdGVzIGEgdGVtcGxhdGUgZnJvbSBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0LiBcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBDb25maWd1cmF0aW9uIG9iamVjdCBmb3Igd2hpY2ggdG8gbG9hZCBhIHRlbXBsYXRlLiBcbiAgICogVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBzZWFyY2ggaW4gdGhlIHNwZWNpZmllZCBvcmRlciwgYW5kIHRoZSBmaXJzdCBvbmUgXG4gICAqIHRoYXQgaXMgZGVmaW5lZCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgdGVtcGxhdGU6XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gY29uZmlnLnRlbXBsYXRlIGh0bWwgc3RyaW5nIHRlbXBsYXRlIG9yIGZ1bmN0aW9uIHRvIFxuICAgKiBsb2FkIHZpYSB7QGxpbmsgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeSNmcm9tU3RyaW5nIGZyb21TdHJpbmd9LlxuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGNvbmZpZy50ZW1wbGF0ZVVybCB1cmwgdG8gbG9hZCBvciBhIGZ1bmN0aW9uIHJldHVybmluZyBcbiAgICogdGhlIHVybCB0byBsb2FkIHZpYSB7QGxpbmsgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeSNmcm9tVXJsIGZyb21Vcmx9LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcudGVtcGxhdGVQcm92aWRlciBmdW5jdGlvbiB0byBpbnZva2UgdmlhIFxuICAgKiB7QGxpbmsgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeSNmcm9tUHJvdmlkZXIgZnJvbVByb3ZpZGVyfS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAgUGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtvYmplY3R9IGxvY2FscyBMb2NhbHMgdG8gcGFzcyB0byBgaW52b2tlYCBpZiB0aGUgdGVtcGxhdGUgaXMgbG9hZGVkIFxuICAgKiB2aWEgYSBgdGVtcGxhdGVQcm92aWRlcmAuIERlZmF1bHRzIHRvIGB7IHBhcmFtczogcGFyYW1zIH1gLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8b2JqZWN0fSAgVGhlIHRlbXBsYXRlIGh0bWwgYXMgYSBzdHJpbmcsIG9yIGEgcHJvbWlzZSBmb3IgXG4gICAqIHRoYXQgc3RyaW5nLG9yIGBudWxsYCBpZiBubyB0ZW1wbGF0ZSBpcyBjb25maWd1cmVkLlxuICAgKi9cbiAgdGhpcy5mcm9tQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZywgcGFyYW1zLCBsb2NhbHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXNEZWZpbmVkKGNvbmZpZy50ZW1wbGF0ZSkgPyB0aGlzLmZyb21TdHJpbmcoY29uZmlnLnRlbXBsYXRlLCBwYXJhbXMpIDpcbiAgICAgIGlzRGVmaW5lZChjb25maWcudGVtcGxhdGVVcmwpID8gdGhpcy5mcm9tVXJsKGNvbmZpZy50ZW1wbGF0ZVVybCwgcGFyYW1zKSA6XG4gICAgICBpc0RlZmluZWQoY29uZmlnLnRlbXBsYXRlUHJvdmlkZXIpID8gdGhpcy5mcm9tUHJvdmlkZXIoY29uZmlnLnRlbXBsYXRlUHJvdmlkZXIsIHBhcmFtcywgbG9jYWxzKSA6XG4gICAgICBudWxsXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnkjZnJvbVN0cmluZ1xuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwuJHRlbXBsYXRlRmFjdG9yeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQ3JlYXRlcyBhIHRlbXBsYXRlIGZyb20gYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiByZXR1cm5pbmcgYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gdGVtcGxhdGUgaHRtbCB0ZW1wbGF0ZSBhcyBhIHN0cmluZyBvciBmdW5jdGlvbiB0aGF0IFxuICAgKiByZXR1cm5zIGFuIGh0bWwgdGVtcGxhdGUgYXMgYSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgUGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfG9iamVjdH0gVGhlIHRlbXBsYXRlIGh0bWwgYXMgYSBzdHJpbmcsIG9yIGEgcHJvbWlzZSBmb3IgdGhhdCBcbiAgICogc3RyaW5nLlxuICAgKi9cbiAgdGhpcy5mcm9tU3RyaW5nID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbih0ZW1wbGF0ZSkgPyB0ZW1wbGF0ZShwYXJhbXMpIDogdGVtcGxhdGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5I2Zyb21VcmxcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnlcbiAgICogXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBMb2FkcyBhIHRlbXBsYXRlIGZyb20gdGhlIGEgVVJMIHZpYSBgJGh0dHBgIGFuZCBgJHRlbXBsYXRlQ2FjaGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xGdW5jdGlvbn0gdXJsIHVybCBvZiB0aGUgdGVtcGxhdGUgdG8gbG9hZCwgb3IgYSBmdW5jdGlvbiBcbiAgICogdGhhdCByZXR1cm5zIGEgdXJsLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgdXJsIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8UHJvbWlzZS48c3RyaW5nPn0gVGhlIHRlbXBsYXRlIGh0bWwgYXMgYSBzdHJpbmcsIG9yIGEgcHJvbWlzZSBcbiAgICogZm9yIHRoYXQgc3RyaW5nLlxuICAgKi9cbiAgdGhpcy5mcm9tVXJsID0gZnVuY3Rpb24gKHVybCwgcGFyYW1zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odXJsKSkgdXJsID0gdXJsKHBhcmFtcyk7XG4gICAgaWYgKHVybCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBlbHNlIHtcbiAgICAgIGlmKCFzaG91bGRVbnNhZmVseVVzZUh0dHApIHtcbiAgICAgICAgcmV0dXJuICRpbmplY3Rvci5nZXQoJyR0ZW1wbGF0ZVJlcXVlc3QnKSh1cmwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgICAgLmdldCh1cmwsIHsgY2FjaGU6ICR0ZW1wbGF0ZUNhY2hlLCBoZWFkZXJzOiB7IEFjY2VwdDogJ3RleHQvaHRtbCcgfX0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmRhdGE7IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnkjZnJvbVByb3ZpZGVyXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdGVtcGxhdGVGYWN0b3J5XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDcmVhdGVzIGEgdGVtcGxhdGUgYnkgaW52b2tpbmcgYW4gaW5qZWN0YWJsZSBwcm92aWRlciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvdmlkZXIgRnVuY3Rpb24gdG8gaW52b2tlIHZpYSBgJGluamVjdG9yLmludm9rZWBcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBQYXJhbWV0ZXJzIGZvciB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsb2NhbHMgTG9jYWxzIHRvIHBhc3MgdG8gYGludm9rZWAuIERlZmF1bHRzIHRvIFxuICAgKiBgeyBwYXJhbXM6IHBhcmFtcyB9YC5cbiAgICogQHJldHVybiB7c3RyaW5nfFByb21pc2UuPHN0cmluZz59IFRoZSB0ZW1wbGF0ZSBodG1sIGFzIGEgc3RyaW5nLCBvciBhIHByb21pc2UgXG4gICAqIGZvciB0aGF0IHN0cmluZy5cbiAgICovXG4gIHRoaXMuZnJvbVByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyLCBwYXJhbXMsIGxvY2Fscykge1xuICAgIHJldHVybiAkaW5qZWN0b3IuaW52b2tlKHByb3ZpZGVyLCBudWxsLCBsb2NhbHMgfHwgeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgfTtcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci51dGlsJykucHJvdmlkZXIoJyR0ZW1wbGF0ZUZhY3RvcnknLCBUZW1wbGF0ZUZhY3RvcnlQcm92aWRlcik7XG5cbnZhciAkJFVNRlA7IC8vIHJlZmVyZW5jZSB0byAkVXJsTWF0Y2hlckZhY3RvcnlQcm92aWRlclxuXG4vKipcbiAqIEBuZ2RvYyBvYmplY3RcbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlclxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogTWF0Y2hlcyBVUkxzIGFnYWluc3QgcGF0dGVybnMgYW5kIGV4dHJhY3RzIG5hbWVkIHBhcmFtZXRlcnMgZnJvbSB0aGUgcGF0aCBvciB0aGUgc2VhcmNoXG4gKiBwYXJ0IG9mIHRoZSBVUkwuIEEgVVJMIHBhdHRlcm4gY29uc2lzdHMgb2YgYSBwYXRoIHBhdHRlcm4sIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnkgJz8nIGFuZCBhIGxpc3RcbiAqIG9mIHNlYXJjaCBwYXJhbWV0ZXJzLiBNdWx0aXBsZSBzZWFyY2ggcGFyYW1ldGVyIG5hbWVzIGFyZSBzZXBhcmF0ZWQgYnkgJyYnLiBTZWFyY2ggcGFyYW1ldGVyc1xuICogZG8gbm90IGluZmx1ZW5jZSB3aGV0aGVyIG9yIG5vdCBhIFVSTCBpcyBtYXRjaGVkLCBidXQgdGhlaXIgdmFsdWVzIGFyZSBwYXNzZWQgdGhyb3VnaCBpbnRvXG4gKiB0aGUgbWF0Y2hlZCBwYXJhbWV0ZXJzIHJldHVybmVkIGJ5IHtAbGluayB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIjbWV0aG9kc19leGVjIGV4ZWN9LlxuICpcbiAqIFBhdGggcGFyYW1ldGVyIHBsYWNlaG9sZGVycyBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHNpbXBsZSBjb2xvbi9jYXRjaC1hbGwgc3ludGF4IG9yIGN1cmx5IGJyYWNlXG4gKiBzeW50YXgsIHdoaWNoIG9wdGlvbmFsbHkgYWxsb3dzIGEgcmVndWxhciBleHByZXNzaW9uIGZvciB0aGUgcGFyYW1ldGVyIHRvIGJlIHNwZWNpZmllZDpcbiAqXG4gKiAqIGAnOidgIG5hbWUgLSBjb2xvbiBwbGFjZWhvbGRlclxuICogKiBgJyonYCBuYW1lIC0gY2F0Y2gtYWxsIHBsYWNlaG9sZGVyXG4gKiAqIGAneycgbmFtZSAnfSdgIC0gY3VybHkgcGxhY2Vob2xkZXJcbiAqICogYCd7JyBuYW1lICc6JyByZWdleHB8dHlwZSAnfSdgIC0gY3VybHkgcGxhY2Vob2xkZXIgd2l0aCByZWdleHAgb3IgdHlwZSBuYW1lLiBTaG91bGQgdGhlXG4gKiAgIHJlZ2V4cCBpdHNlbGYgY29udGFpbiBjdXJseSBicmFjZXMsIHRoZXkgbXVzdCBiZSBpbiBtYXRjaGVkIHBhaXJzIG9yIGVzY2FwZWQgd2l0aCBhIGJhY2tzbGFzaC5cbiAqXG4gKiBQYXJhbWV0ZXIgbmFtZXMgbWF5IGNvbnRhaW4gb25seSB3b3JkIGNoYXJhY3RlcnMgKGxhdGluIGxldHRlcnMsIGRpZ2l0cywgYW5kIHVuZGVyc2NvcmUpIGFuZFxuICogbXVzdCBiZSB1bmlxdWUgd2l0aGluIHRoZSBwYXR0ZXJuIChhY3Jvc3MgYm90aCBwYXRoIGFuZCBzZWFyY2ggcGFyYW1ldGVycykuIEZvciBjb2xvblxuICogcGxhY2Vob2xkZXJzIG9yIGN1cmx5IHBsYWNlaG9sZGVycyB3aXRob3V0IGFuIGV4cGxpY2l0IHJlZ2V4cCwgYSBwYXRoIHBhcmFtZXRlciBtYXRjaGVzIGFueVxuICogbnVtYmVyIG9mIGNoYXJhY3RlcnMgb3RoZXIgdGhhbiAnLycuIEZvciBjYXRjaC1hbGwgcGxhY2Vob2xkZXJzIHRoZSBwYXRoIHBhcmFtZXRlciBtYXRjaGVzXG4gKiBhbnkgbnVtYmVyIG9mIGNoYXJhY3RlcnMuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogKiBgJy9oZWxsby8nYCAtIE1hdGNoZXMgb25seSBpZiB0aGUgcGF0aCBpcyBleGFjdGx5ICcvaGVsbG8vJy4gVGhlcmUgaXMgbm8gc3BlY2lhbCB0cmVhdG1lbnQgZm9yXG4gKiAgIHRyYWlsaW5nIHNsYXNoZXMsIGFuZCBwYXR0ZXJucyBoYXZlIHRvIG1hdGNoIHRoZSBlbnRpcmUgcGF0aCwgbm90IGp1c3QgYSBwcmVmaXguXG4gKiAqIGAnL3VzZXIvOmlkJ2AgLSBNYXRjaGVzICcvdXNlci9ib2InIG9yICcvdXNlci8xMjM0ISEhJyBvciBldmVuICcvdXNlci8nIGJ1dCBub3QgJy91c2VyJyBvclxuICogICAnL3VzZXIvYm9iL2RldGFpbHMnLiBUaGUgc2Vjb25kIHBhdGggc2VnbWVudCB3aWxsIGJlIGNhcHR1cmVkIGFzIHRoZSBwYXJhbWV0ZXIgJ2lkJy5cbiAqICogYCcvdXNlci97aWR9J2AgLSBTYW1lIGFzIHRoZSBwcmV2aW91cyBleGFtcGxlLCBidXQgdXNpbmcgY3VybHkgYnJhY2Ugc3ludGF4LlxuICogKiBgJy91c2VyL3tpZDpbXi9dKn0nYCAtIFNhbWUgYXMgdGhlIHByZXZpb3VzIGV4YW1wbGUuXG4gKiAqIGAnL3VzZXIve2lkOlswLTlhLWZBLUZdezEsOH19J2AgLSBTaW1pbGFyIHRvIHRoZSBwcmV2aW91cyBleGFtcGxlLCBidXQgb25seSBtYXRjaGVzIGlmIHRoZSBpZFxuICogICBwYXJhbWV0ZXIgY29uc2lzdHMgb2YgMSB0byA4IGhleCBkaWdpdHMuXG4gKiAqIGAnL2ZpbGVzL3twYXRoOi4qfSdgIC0gTWF0Y2hlcyBhbnkgVVJMIHN0YXJ0aW5nIHdpdGggJy9maWxlcy8nIGFuZCBjYXB0dXJlcyB0aGUgcmVzdCBvZiB0aGVcbiAqICAgcGF0aCBpbnRvIHRoZSBwYXJhbWV0ZXIgJ3BhdGgnLlxuICogKiBgJy9maWxlcy8qcGF0aCdgIC0gZGl0dG8uXG4gKiAqIGAnL2NhbGVuZGFyL3tzdGFydDpkYXRlfSdgIC0gTWF0Y2hlcyBcIi9jYWxlbmRhci8yMDE0LTExLTEyXCIgKGJlY2F1c2UgdGhlIHBhdHRlcm4gZGVmaW5lZFxuICogICBpbiB0aGUgYnVpbHQtaW4gIGBkYXRlYCBUeXBlIG1hdGNoZXMgYDIwMTQtMTEtMTJgKSBhbmQgcHJvdmlkZXMgYSBEYXRlIG9iamVjdCBpbiAkc3RhdGVQYXJhbXMuc3RhcnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAgVGhlIHBhdHRlcm4gdG8gY29tcGlsZSBpbnRvIGEgbWF0Y2hlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgIEEgY29uZmlndXJhdGlvbiBvYmplY3QgaGFzaDpcbiAqIEBwYXJhbSB7T2JqZWN0PX0gcGFyZW50TWF0Y2hlciBVc2VkIHRvIGNvbmNhdGVuYXRlIHRoZSBwYXR0ZXJuL2NvbmZpZyBvbnRvXG4gKiAgIGFuIGV4aXN0aW5nIFVybE1hdGNoZXJcbiAqXG4gKiAqIGBjYXNlSW5zZW5zaXRpdmVgIC0gYHRydWVgIGlmIFVSTCBtYXRjaGluZyBzaG91bGQgYmUgY2FzZSBpbnNlbnNpdGl2ZSwgb3RoZXJ3aXNlIGBmYWxzZWAsIHRoZSBkZWZhdWx0IHZhbHVlIChmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSkgaXMgYGZhbHNlYC5cbiAqICogYHN0cmljdGAgLSBgZmFsc2VgIGlmIG1hdGNoaW5nIGFnYWluc3QgYSBVUkwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoIHNob3VsZCBiZSB0cmVhdGVkIGFzIGVxdWl2YWxlbnQgdG8gYSBVUkwgd2l0aG91dCBhIHRyYWlsaW5nIHNsYXNoLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHByZWZpeCAgQSBzdGF0aWMgcHJlZml4IG9mIHRoaXMgcGF0dGVybi4gVGhlIG1hdGNoZXIgZ3VhcmFudGVlcyB0aGF0IGFueVxuICogICBVUkwgbWF0Y2hpbmcgdGhpcyBtYXRjaGVyIChpLmUuIGFueSBzdHJpbmcgZm9yIHdoaWNoIHtAbGluayB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIjbWV0aG9kc19leGVjIGV4ZWMoKX0gcmV0dXJuc1xuICogICBub24tbnVsbCkgd2lsbCBzdGFydCB3aXRoIHRoaXMgcHJlZml4LlxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzb3VyY2UgIFRoZSBwYXR0ZXJuIHRoYXQgd2FzIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3RvclxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzb3VyY2VQYXRoICBUaGUgcGF0aCBwb3J0aW9uIG9mIHRoZSBzb3VyY2UgcHJvcGVydHlcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc291cmNlU2VhcmNoICBUaGUgc2VhcmNoIHBvcnRpb24gb2YgdGhlIHNvdXJjZSBwcm9wZXJ0eVxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWdleCAgVGhlIGNvbnN0cnVjdGVkIHJlZ2V4IHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlIHVybCB3aGVuXG4gKiAgIGl0IGlzIHRpbWUgdG8gZGV0ZXJtaW5lIHdoaWNoIHVybCB3aWxsIG1hdGNoLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9ICBOZXcgYFVybE1hdGNoZXJgIG9iamVjdFxuICovXG5mdW5jdGlvbiBVcmxNYXRjaGVyKHBhdHRlcm4sIGNvbmZpZywgcGFyZW50TWF0Y2hlcikge1xuICBjb25maWcgPSBleHRlbmQoeyBwYXJhbXM6IHt9IH0sIGlzT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fSk7XG5cbiAgLy8gRmluZCBhbGwgcGxhY2Vob2xkZXJzIGFuZCBjcmVhdGUgYSBjb21waWxlZCBwYXR0ZXJuLCB1c2luZyBlaXRoZXIgY2xhc3NpYyBvciBjdXJseSBzeW50YXg6XG4gIC8vICAgJyonIG5hbWVcbiAgLy8gICAnOicgbmFtZVxuICAvLyAgICd7JyBuYW1lICd9J1xuICAvLyAgICd7JyBuYW1lICc6JyByZWdleHAgJ30nXG4gIC8vIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gaXMgc29tZXdoYXQgY29tcGxpY2F0ZWQgZHVlIHRvIHRoZSBuZWVkIHRvIGFsbG93IGN1cmx5IGJyYWNlc1xuICAvLyBpbnNpZGUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbi4gVGhlIHBsYWNlaG9sZGVyIHJlZ2V4cCBicmVha3MgZG93biBhcyBmb2xsb3dzOlxuICAvLyAgICAoWzoqXSkoW1xcd1xcW1xcXV0rKSAgICAgICAgICAgICAgLSBjbGFzc2ljIHBsYWNlaG9sZGVyICgkMSAvICQyKSAoc2VhcmNoIHZlcnNpb24gaGFzIC0gZm9yIHNuYWtlLWNhc2UpXG4gIC8vICAgIFxceyhbXFx3XFxbXFxdXSspKD86XFw6XFxzKiggLi4uICkpP1xcfSAgLSBjdXJseSBicmFjZSBwbGFjZWhvbGRlciAoJDMpIHdpdGggb3B0aW9uYWwgcmVnZXhwL3R5cGUgLi4uICgkNCkgKHNlYXJjaCB2ZXJzaW9uIGhhcyAtIGZvciBzbmFrZS1jYXNlXG4gIC8vICAgICg/OiAuLi4gfCAuLi4gfCAuLi4gKSsgICAgICAgICAtIHRoZSByZWdleHAgY29uc2lzdHMgb2YgYW55IG51bWJlciBvZiBhdG9tcywgYW4gYXRvbSBiZWluZyBlaXRoZXJcbiAgLy8gICAgW157fVxcXFxdKyAgICAgICAgICAgICAgICAgICAgICAgLSBhbnl0aGluZyBvdGhlciB0aGFuIGN1cmx5IGJyYWNlcyBvciBiYWNrc2xhc2hcbiAgLy8gICAgXFxcXC4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBhIGJhY2tzbGFzaCBlc2NhcGVcbiAgLy8gICAgXFx7KD86W157fVxcXFxdK3xcXFxcLikqXFx9ICAgICAgICAgIC0gYSBtYXRjaGVkIHNldCBvZiBjdXJseSBicmFjZXMgY29udGFpbmluZyBvdGhlciBhdG9tc1xuICB2YXIgcGxhY2Vob2xkZXIgICAgICAgPSAvKFs6Kl0pKFtcXHdcXFtcXF1dKyl8XFx7KFtcXHdcXFtcXF1dKykoPzpcXDpcXHMqKCg/Oltee31cXFxcXSt8XFxcXC58XFx7KD86W157fVxcXFxdK3xcXFxcLikqXFx9KSspKT9cXH0vZyxcbiAgICAgIHNlYXJjaFBsYWNlaG9sZGVyID0gLyhbOl0/KShbXFx3XFxbXFxdLi1dKyl8XFx7KFtcXHdcXFtcXF0uLV0rKSg/OlxcOlxccyooKD86W157fVxcXFxdK3xcXFxcLnxcXHsoPzpbXnt9XFxcXF0rfFxcXFwuKSpcXH0pKykpP1xcfS9nLFxuICAgICAgY29tcGlsZWQgPSAnXicsIGxhc3QgPSAwLCBtLFxuICAgICAgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnRzID0gW10sXG4gICAgICBwYXJlbnRQYXJhbXMgPSBwYXJlbnRNYXRjaGVyID8gcGFyZW50TWF0Y2hlci5wYXJhbXMgOiB7fSxcbiAgICAgIHBhcmFtcyA9IHRoaXMucGFyYW1zID0gcGFyZW50TWF0Y2hlciA/IHBhcmVudE1hdGNoZXIucGFyYW1zLiQkbmV3KCkgOiBuZXcgJCRVTUZQLlBhcmFtU2V0KCksXG4gICAgICBwYXJhbU5hbWVzID0gW107XG5cbiAgZnVuY3Rpb24gYWRkUGFyYW1ldGVyKGlkLCB0eXBlLCBjb25maWcsIGxvY2F0aW9uKSB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKGlkKTtcbiAgICBpZiAocGFyZW50UGFyYW1zW2lkXSkgcmV0dXJuIHBhcmVudFBhcmFtc1tpZF07XG4gICAgaWYgKCEvXlxcdysoWy0uXStcXHcrKSooPzpcXFtcXF0pPyQvLnRlc3QoaWQpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlciBuYW1lICdcIiArIGlkICsgXCInIGluIHBhdHRlcm4gJ1wiICsgcGF0dGVybiArIFwiJ1wiKTtcbiAgICBpZiAocGFyYW1zW2lkXSkgdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlIHBhcmFtZXRlciBuYW1lICdcIiArIGlkICsgXCInIGluIHBhdHRlcm4gJ1wiICsgcGF0dGVybiArIFwiJ1wiKTtcbiAgICBwYXJhbXNbaWRdID0gbmV3ICQkVU1GUC5QYXJhbShpZCwgdHlwZSwgY29uZmlnLCBsb2NhdGlvbik7XG4gICAgcmV0dXJuIHBhcmFtc1tpZF07XG4gIH1cblxuICBmdW5jdGlvbiBxdW90ZVJlZ0V4cChzdHJpbmcsIHBhdHRlcm4sIHNxdWFzaCwgb3B0aW9uYWwpIHtcbiAgICB2YXIgc3Vycm91bmRQYXR0ZXJuID0gWycnLCcnXSwgcmVzdWx0ID0gc3RyaW5nLnJlcGxhY2UoL1tcXFxcXFxbXFxdXFxeJCorPy4oKXx7fV0vZywgXCJcXFxcJCZcIik7XG4gICAgaWYgKCFwYXR0ZXJuKSByZXR1cm4gcmVzdWx0O1xuICAgIHN3aXRjaChzcXVhc2gpIHtcbiAgICAgIGNhc2UgZmFsc2U6IHN1cnJvdW5kUGF0dGVybiA9IFsnKCcsICcpJyArIChvcHRpb25hbCA/IFwiP1wiIDogXCJcIildOyBicmVhaztcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgICAgIHN1cnJvdW5kUGF0dGVybiA9IFsnKD86XFwvKCcsICcpfFxcLyk/J107XG4gICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6ICAgIHN1cnJvdW5kUGF0dGVybiA9IFsnKCcgKyBzcXVhc2ggKyBcInxcIiwgJyk/J107IGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ICsgc3Vycm91bmRQYXR0ZXJuWzBdICsgcGF0dGVybiArIHN1cnJvdW5kUGF0dGVyblsxXTtcbiAgfVxuXG4gIHRoaXMuc291cmNlID0gcGF0dGVybjtcblxuICAvLyBTcGxpdCBpbnRvIHN0YXRpYyBzZWdtZW50cyBzZXBhcmF0ZWQgYnkgcGF0aCBwYXJhbWV0ZXIgcGxhY2Vob2xkZXJzLlxuICAvLyBUaGUgbnVtYmVyIG9mIHNlZ21lbnRzIGlzIGFsd2F5cyAxIG1vcmUgdGhhbiB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMuXG4gIGZ1bmN0aW9uIG1hdGNoRGV0YWlscyhtLCBpc1NlYXJjaCkge1xuICAgIHZhciBpZCwgcmVnZXhwLCBzZWdtZW50LCB0eXBlLCBjZmcsIGFycmF5TW9kZTtcbiAgICBpZCAgICAgICAgICA9IG1bMl0gfHwgbVszXTsgLy8gSUVbNzhdIHJldHVybnMgJycgZm9yIHVubWF0Y2hlZCBncm91cHMgaW5zdGVhZCBvZiBudWxsXG4gICAgY2ZnICAgICAgICAgPSBjb25maWcucGFyYW1zW2lkXTtcbiAgICBzZWdtZW50ICAgICA9IHBhdHRlcm4uc3Vic3RyaW5nKGxhc3QsIG0uaW5kZXgpO1xuICAgIHJlZ2V4cCAgICAgID0gaXNTZWFyY2ggPyBtWzRdIDogbVs0XSB8fCAobVsxXSA9PSAnKicgPyAnLionIDogbnVsbCk7XG5cbiAgICBpZiAocmVnZXhwKSB7XG4gICAgICB0eXBlICAgICAgPSAkJFVNRlAudHlwZShyZWdleHApIHx8IGluaGVyaXQoJCRVTUZQLnR5cGUoXCJzdHJpbmdcIiksIHsgcGF0dGVybjogbmV3IFJlZ0V4cChyZWdleHAsIGNvbmZpZy5jYXNlSW5zZW5zaXRpdmUgPyAnaScgOiB1bmRlZmluZWQpIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogaWQsIHJlZ2V4cDogcmVnZXhwLCBzZWdtZW50OiBzZWdtZW50LCB0eXBlOiB0eXBlLCBjZmc6IGNmZ1xuICAgIH07XG4gIH1cblxuICB2YXIgcCwgcGFyYW0sIHNlZ21lbnQ7XG4gIHdoaWxlICgobSA9IHBsYWNlaG9sZGVyLmV4ZWMocGF0dGVybikpKSB7XG4gICAgcCA9IG1hdGNoRGV0YWlscyhtLCBmYWxzZSk7XG4gICAgaWYgKHAuc2VnbWVudC5pbmRleE9mKCc/JykgPj0gMCkgYnJlYWs7IC8vIHdlJ3JlIGludG8gdGhlIHNlYXJjaCBwYXJ0XG5cbiAgICBwYXJhbSA9IGFkZFBhcmFtZXRlcihwLmlkLCBwLnR5cGUsIHAuY2ZnLCBcInBhdGhcIik7XG4gICAgY29tcGlsZWQgKz0gcXVvdGVSZWdFeHAocC5zZWdtZW50LCBwYXJhbS50eXBlLnBhdHRlcm4uc291cmNlLCBwYXJhbS5zcXVhc2gsIHBhcmFtLmlzT3B0aW9uYWwpO1xuICAgIHNlZ21lbnRzLnB1c2gocC5zZWdtZW50KTtcbiAgICBsYXN0ID0gcGxhY2Vob2xkZXIubGFzdEluZGV4O1xuICB9XG4gIHNlZ21lbnQgPSBwYXR0ZXJuLnN1YnN0cmluZyhsYXN0KTtcblxuICAvLyBGaW5kIGFueSBzZWFyY2ggcGFyYW1ldGVyIG5hbWVzIGFuZCByZW1vdmUgdGhlbSBmcm9tIHRoZSBsYXN0IHNlZ21lbnRcbiAgdmFyIGkgPSBzZWdtZW50LmluZGV4T2YoJz8nKTtcblxuICBpZiAoaSA+PSAwKSB7XG4gICAgdmFyIHNlYXJjaCA9IHRoaXMuc291cmNlU2VhcmNoID0gc2VnbWVudC5zdWJzdHJpbmcoaSk7XG4gICAgc2VnbWVudCA9IHNlZ21lbnQuc3Vic3RyaW5nKDAsIGkpO1xuICAgIHRoaXMuc291cmNlUGF0aCA9IHBhdHRlcm4uc3Vic3RyaW5nKDAsIGxhc3QgKyBpKTtcblxuICAgIGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xuICAgICAgbGFzdCA9IDA7XG4gICAgICB3aGlsZSAoKG0gPSBzZWFyY2hQbGFjZWhvbGRlci5leGVjKHNlYXJjaCkpKSB7XG4gICAgICAgIHAgPSBtYXRjaERldGFpbHMobSwgdHJ1ZSk7XG4gICAgICAgIHBhcmFtID0gYWRkUGFyYW1ldGVyKHAuaWQsIHAudHlwZSwgcC5jZmcsIFwic2VhcmNoXCIpO1xuICAgICAgICBsYXN0ID0gcGxhY2Vob2xkZXIubGFzdEluZGV4O1xuICAgICAgICAvLyBjaGVjayBpZiA/JlxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNvdXJjZVBhdGggPSBwYXR0ZXJuO1xuICAgIHRoaXMuc291cmNlU2VhcmNoID0gJyc7XG4gIH1cblxuICBjb21waWxlZCArPSBxdW90ZVJlZ0V4cChzZWdtZW50KSArIChjb25maWcuc3RyaWN0ID09PSBmYWxzZSA/ICdcXC8/JyA6ICcnKSArICckJztcbiAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcblxuICB0aGlzLnJlZ2V4cCA9IG5ldyBSZWdFeHAoY29tcGlsZWQsIGNvbmZpZy5jYXNlSW5zZW5zaXRpdmUgPyAnaScgOiB1bmRlZmluZWQpO1xuICB0aGlzLnByZWZpeCA9IHNlZ21lbnRzWzBdO1xuICB0aGlzLiQkcGFyYW1OYW1lcyA9IHBhcmFtTmFtZXM7XG59XG5cbi8qKlxuICogQG5nZG9jIGZ1bmN0aW9uXG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIjY29uY2F0XG4gKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGEgbmV3IG1hdGNoZXIgZm9yIGEgcGF0dGVybiBjb25zdHJ1Y3RlZCBieSBhcHBlbmRpbmcgdGhlIHBhdGggcGFydCBhbmQgYWRkaW5nIHRoZVxuICogc2VhcmNoIHBhcmFtZXRlcnMgb2YgdGhlIHNwZWNpZmllZCBwYXR0ZXJuIHRvIHRoaXMgcGF0dGVybi4gVGhlIGN1cnJlbnQgcGF0dGVybiBpcyBub3RcbiAqIG1vZGlmaWVkLiBUaGlzIGNhbiBiZSB1bmRlcnN0b29kIGFzIGNyZWF0aW5nIGEgcGF0dGVybiBmb3IgVVJMcyB0aGF0IGFyZSByZWxhdGl2ZSB0byAob3JcbiAqIHN1ZmZpeGVzIG9mKSB0aGUgY3VycmVudCBwYXR0ZXJuLlxuICpcbiAqIEBleGFtcGxlXG4gKiBUaGUgZm9sbG93aW5nIHR3byBtYXRjaGVycyBhcmUgZXF1aXZhbGVudDpcbiAqIDxwcmU+XG4gKiBuZXcgVXJsTWF0Y2hlcignL3VzZXIve2lkfT9xJykuY29uY2F0KCcvZGV0YWlscz9kYXRlJyk7XG4gKiBuZXcgVXJsTWF0Y2hlcignL3VzZXIve2lkfS9kZXRhaWxzP3EmZGF0ZScpO1xuICogPC9wcmU+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gIFRoZSBwYXR0ZXJuIHRvIGFwcGVuZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgIEFuIG9iamVjdCBoYXNoIG9mIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgbWF0Y2hlci5cbiAqIEByZXR1cm5zIHtVcmxNYXRjaGVyfSAgQSBtYXRjaGVyIGZvciB0aGUgY29uY2F0ZW5hdGVkIHBhdHRlcm4uXG4gKi9cblVybE1hdGNoZXIucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBjb25maWcpIHtcbiAgLy8gQmVjYXVzZSBvcmRlciBvZiBzZWFyY2ggcGFyYW1ldGVycyBpcyBpcnJlbGV2YW50LCB3ZSBjYW4gYWRkIG91ciBvd24gc2VhcmNoXG4gIC8vIHBhcmFtZXRlcnMgdG8gdGhlIGVuZCBvZiB0aGUgbmV3IHBhdHRlcm4uIFBhcnNlIHRoZSBuZXcgcGF0dGVybiBieSBpdHNlbGZcbiAgLy8gYW5kIHRoZW4gam9pbiB0aGUgYml0cyB0b2dldGhlciwgYnV0IGl0J3MgbXVjaCBlYXNpZXIgdG8gZG8gdGhpcyBvbiBhIHN0cmluZyBsZXZlbC5cbiAgdmFyIGRlZmF1bHRDb25maWcgPSB7XG4gICAgY2FzZUluc2Vuc2l0aXZlOiAkJFVNRlAuY2FzZUluc2Vuc2l0aXZlKCksXG4gICAgc3RyaWN0OiAkJFVNRlAuc3RyaWN0TW9kZSgpLFxuICAgIHNxdWFzaDogJCRVTUZQLmRlZmF1bHRTcXVhc2hQb2xpY3koKVxuICB9O1xuICByZXR1cm4gbmV3IFVybE1hdGNoZXIodGhpcy5zb3VyY2VQYXRoICsgcGF0dGVybiArIHRoaXMuc291cmNlU2VhcmNoLCBleHRlbmQoZGVmYXVsdENvbmZpZywgY29uZmlnKSwgdGhpcyk7XG59O1xuXG5VcmxNYXRjaGVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc291cmNlO1xufTtcblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlciNleGVjXG4gKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUZXN0cyB0aGUgc3BlY2lmaWVkIHBhdGggYWdhaW5zdCB0aGlzIG1hdGNoZXIsIGFuZCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBjYXB0dXJlZFxuICogcGFyYW1ldGVyIHZhbHVlcywgb3IgbnVsbCBpZiB0aGUgcGF0aCBkb2VzIG5vdCBtYXRjaC4gVGhlIHJldHVybmVkIG9iamVjdCBjb250YWlucyB0aGUgdmFsdWVzXG4gKiBvZiBhbnkgc2VhcmNoIHBhcmFtZXRlcnMgdGhhdCBhcmUgbWVudGlvbmVkIGluIHRoZSBwYXR0ZXJuLCBidXQgdGhlaXIgdmFsdWUgbWF5IGJlIG51bGwgaWZcbiAqIHRoZXkgYXJlIG5vdCBwcmVzZW50IGluIGBzZWFyY2hQYXJhbXNgLiBUaGlzIG1lYW5zIHRoYXQgc2VhcmNoIHBhcmFtZXRlcnMgYXJlIGFsd2F5cyB0cmVhdGVkXG4gKiBhcyBvcHRpb25hbC5cbiAqXG4gKiBAZXhhbXBsZVxuICogPHByZT5cbiAqIG5ldyBVcmxNYXRjaGVyKCcvdXNlci97aWR9P3EmcicpLmV4ZWMoJy91c2VyL2JvYicsIHtcbiAqICAgeDogJzEnLCBxOiAnaGVsbG8nXG4gKiB9KTtcbiAqIC8vIHJldHVybnMgeyBpZDogJ2JvYicsIHE6ICdoZWxsbycsIHI6IG51bGwgfVxuICogPC9wcmU+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIFRoZSBVUkwgcGF0aCB0byBtYXRjaCwgZS5nLiBgJGxvY2F0aW9uLnBhdGgoKWAuXG4gKiBAcGFyYW0ge09iamVjdH0gc2VhcmNoUGFyYW1zICBVUkwgc2VhcmNoIHBhcmFtZXRlcnMsIGUuZy4gYCRsb2NhdGlvbi5zZWFyY2goKWAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAgVGhlIGNhcHR1cmVkIHBhcmFtZXRlciB2YWx1ZXMuXG4gKi9cblVybE1hdGNoZXIucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAocGF0aCwgc2VhcmNoUGFyYW1zKSB7XG4gIHZhciBtID0gdGhpcy5yZWdleHAuZXhlYyhwYXRoKTtcbiAgaWYgKCFtKSByZXR1cm4gbnVsbDtcbiAgc2VhcmNoUGFyYW1zID0gc2VhcmNoUGFyYW1zIHx8IHt9O1xuXG4gIHZhciBwYXJhbU5hbWVzID0gdGhpcy5wYXJhbWV0ZXJzKCksIG5Ub3RhbCA9IHBhcmFtTmFtZXMubGVuZ3RoLFxuICAgIG5QYXRoID0gdGhpcy5zZWdtZW50cy5sZW5ndGggLSAxLFxuICAgIHZhbHVlcyA9IHt9LCBpLCBqLCBjZmcsIHBhcmFtTmFtZTtcblxuICBpZiAoblBhdGggIT09IG0ubGVuZ3RoIC0gMSkgdGhyb3cgbmV3IEVycm9yKFwiVW5iYWxhbmNlZCBjYXB0dXJlIGdyb3VwIGluIHJvdXRlICdcIiArIHRoaXMuc291cmNlICsgXCInXCIpO1xuXG4gIGZ1bmN0aW9uIGRlY29kZVBhdGhBcnJheShzdHJpbmcpIHtcbiAgICBmdW5jdGlvbiByZXZlcnNlU3RyaW5nKHN0cikgeyByZXR1cm4gc3RyLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpOyB9XG4gICAgZnVuY3Rpb24gdW5xdW90ZURhc2hlcyhzdHIpIHsgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcLS9nLCBcIi1cIik7IH1cblxuICAgIHZhciBzcGxpdCA9IHJldmVyc2VTdHJpbmcoc3RyaW5nKS5zcGxpdCgvLSg/IVxcXFwpLyk7XG4gICAgdmFyIGFsbFJldmVyc2VkID0gbWFwKHNwbGl0LCByZXZlcnNlU3RyaW5nKTtcbiAgICByZXR1cm4gbWFwKGFsbFJldmVyc2VkLCB1bnF1b3RlRGFzaGVzKS5yZXZlcnNlKCk7XG4gIH1cblxuICB2YXIgcGFyYW0sIHBhcmFtVmFsO1xuICBmb3IgKGkgPSAwOyBpIDwgblBhdGg7IGkrKykge1xuICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZXNbaV07XG4gICAgcGFyYW0gPSB0aGlzLnBhcmFtc1twYXJhbU5hbWVdO1xuICAgIHBhcmFtVmFsID0gbVtpKzFdO1xuICAgIC8vIGlmIHRoZSBwYXJhbSB2YWx1ZSBtYXRjaGVzIGEgcHJlLXJlcGxhY2UgcGFpciwgcmVwbGFjZSB0aGUgdmFsdWUgYmVmb3JlIGRlY29kaW5nLlxuICAgIGZvciAoaiA9IDA7IGogPCBwYXJhbS5yZXBsYWNlLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAocGFyYW0ucmVwbGFjZVtqXS5mcm9tID09PSBwYXJhbVZhbCkgcGFyYW1WYWwgPSBwYXJhbS5yZXBsYWNlW2pdLnRvO1xuICAgIH1cbiAgICBpZiAocGFyYW1WYWwgJiYgcGFyYW0uYXJyYXkgPT09IHRydWUpIHBhcmFtVmFsID0gZGVjb2RlUGF0aEFycmF5KHBhcmFtVmFsKTtcbiAgICBpZiAoaXNEZWZpbmVkKHBhcmFtVmFsKSkgcGFyYW1WYWwgPSBwYXJhbS50eXBlLmRlY29kZShwYXJhbVZhbCk7XG4gICAgdmFsdWVzW3BhcmFtTmFtZV0gPSBwYXJhbS52YWx1ZShwYXJhbVZhbCk7XG4gIH1cbiAgZm9yICgvKiovOyBpIDwgblRvdGFsOyBpKyspIHtcbiAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuICAgIHZhbHVlc1twYXJhbU5hbWVdID0gdGhpcy5wYXJhbXNbcGFyYW1OYW1lXS52YWx1ZShzZWFyY2hQYXJhbXNbcGFyYW1OYW1lXSk7XG4gICAgcGFyYW0gPSB0aGlzLnBhcmFtc1twYXJhbU5hbWVdO1xuICAgIHBhcmFtVmFsID0gc2VhcmNoUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgZm9yIChqID0gMDsgaiA8IHBhcmFtLnJlcGxhY2UubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChwYXJhbS5yZXBsYWNlW2pdLmZyb20gPT09IHBhcmFtVmFsKSBwYXJhbVZhbCA9IHBhcmFtLnJlcGxhY2Vbal0udG87XG4gICAgfVxuICAgIGlmIChpc0RlZmluZWQocGFyYW1WYWwpKSBwYXJhbVZhbCA9IHBhcmFtLnR5cGUuZGVjb2RlKHBhcmFtVmFsKTtcbiAgICB2YWx1ZXNbcGFyYW1OYW1lXSA9IHBhcmFtLnZhbHVlKHBhcmFtVmFsKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXM7XG59O1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyI3BhcmFtZXRlcnNcbiAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXJcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdGhlIG5hbWVzIG9mIGFsbCBwYXRoIGFuZCBzZWFyY2ggcGFyYW1ldGVycyBvZiB0aGlzIHBhdHRlcm4gaW4gYW4gdW5zcGVjaWZpZWQgb3JkZXIuXG4gKlxuICogQHJldHVybnMge0FycmF5LjxzdHJpbmc+fSAgQW4gYXJyYXkgb2YgcGFyYW1ldGVyIG5hbWVzLiBNdXN0IGJlIHRyZWF0ZWQgYXMgcmVhZC1vbmx5LiBJZiB0aGVcbiAqICAgIHBhdHRlcm4gaGFzIG5vIHBhcmFtZXRlcnMsIGFuIGVtcHR5IGFycmF5IGlzIHJldHVybmVkLlxuICovXG5VcmxNYXRjaGVyLnByb3RvdHlwZS5wYXJhbWV0ZXJzID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gIGlmICghaXNEZWZpbmVkKHBhcmFtKSkgcmV0dXJuIHRoaXMuJCRwYXJhbU5hbWVzO1xuICByZXR1cm4gdGhpcy5wYXJhbXNbcGFyYW1dIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEBuZ2RvYyBmdW5jdGlvblxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyI3ZhbGlkYXRlc1xuICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlclxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIGFuIG9iamVjdCBoYXNoIG9mIHBhcmFtZXRlcnMgdG8gdmFsaWRhdGUgdGhlaXIgY29ycmVjdG5lc3MgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbWV0ZXJcbiAqIHR5cGVzIG9mIHRoaXMgYFVybE1hdGNoZXJgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgVGhlIG9iamVjdCBoYXNoIG9mIHBhcmFtZXRlcnMgdG8gdmFsaWRhdGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhcmFtc2AgdmFsaWRhdGVzLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqL1xuVXJsTWF0Y2hlci5wcm90b3R5cGUudmFsaWRhdGVzID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICByZXR1cm4gdGhpcy5wYXJhbXMuJCR2YWxpZGF0ZXMocGFyYW1zKTtcbn07XG5cbi8qKlxuICogQG5nZG9jIGZ1bmN0aW9uXG4gKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC50eXBlOlVybE1hdGNoZXIjZm9ybWF0XG4gKiBAbWV0aG9kT2YgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGVzIGEgVVJMIHRoYXQgbWF0Y2hlcyB0aGlzIHBhdHRlcm4gYnkgc3Vic3RpdHV0aW5nIHRoZSBzcGVjaWZpZWQgdmFsdWVzXG4gKiBmb3IgdGhlIHBhdGggYW5kIHNlYXJjaCBwYXJhbWV0ZXJzLiBOdWxsIHZhbHVlcyBmb3IgcGF0aCBwYXJhbWV0ZXJzIGFyZVxuICogdHJlYXRlZCBhcyBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBleGFtcGxlXG4gKiA8cHJlPlxuICogbmV3IFVybE1hdGNoZXIoJy91c2VyL3tpZH0/cScpLmZvcm1hdCh7IGlkOidib2InLCBxOid5ZXMnIH0pO1xuICogLy8gcmV0dXJucyAnL3VzZXIvYm9iP3E9eWVzJ1xuICogPC9wcmU+XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAgdGhlIHZhbHVlcyB0byBzdWJzdGl0dXRlIGZvciB0aGUgcGFyYW1ldGVycyBpbiB0aGlzIHBhdHRlcm4uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAgdGhlIGZvcm1hdHRlZCBVUkwgKHBhdGggYW5kIG9wdGlvbmFsbHkgc2VhcmNoIHBhcnQpLlxuICovXG5VcmxNYXRjaGVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHZhbHVlcyA9IHZhbHVlcyB8fCB7fTtcbiAgdmFyIHNlZ21lbnRzID0gdGhpcy5zZWdtZW50cywgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzKCksIHBhcmFtc2V0ID0gdGhpcy5wYXJhbXM7XG4gIGlmICghdGhpcy52YWxpZGF0ZXModmFsdWVzKSkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIGksIHNlYXJjaCA9IGZhbHNlLCBuUGF0aCA9IHNlZ21lbnRzLmxlbmd0aCAtIDEsIG5Ub3RhbCA9IHBhcmFtcy5sZW5ndGgsIHJlc3VsdCA9IHNlZ21lbnRzWzBdO1xuXG4gIGZ1bmN0aW9uIGVuY29kZURhc2hlcyhzdHIpIHsgLy8gUmVwbGFjZSBkYXNoZXMgd2l0aCBlbmNvZGVkIFwiXFwtXCJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvLS9nLCBmdW5jdGlvbihjKSB7IHJldHVybiAnJTVDJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7IH0pO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IG5Ub3RhbDsgaSsrKSB7XG4gICAgdmFyIGlzUGF0aFBhcmFtID0gaSA8IG5QYXRoO1xuICAgIHZhciBuYW1lID0gcGFyYW1zW2ldLCBwYXJhbSA9IHBhcmFtc2V0W25hbWVdLCB2YWx1ZSA9IHBhcmFtLnZhbHVlKHZhbHVlc1tuYW1lXSk7XG4gICAgdmFyIGlzRGVmYXVsdFZhbHVlID0gcGFyYW0uaXNPcHRpb25hbCAmJiBwYXJhbS50eXBlLmVxdWFscyhwYXJhbS52YWx1ZSgpLCB2YWx1ZSk7XG4gICAgdmFyIHNxdWFzaCA9IGlzRGVmYXVsdFZhbHVlID8gcGFyYW0uc3F1YXNoIDogZmFsc2U7XG4gICAgdmFyIGVuY29kZWQgPSBwYXJhbS50eXBlLmVuY29kZSh2YWx1ZSk7XG5cbiAgICBpZiAoaXNQYXRoUGFyYW0pIHtcbiAgICAgIHZhciBuZXh0U2VnbWVudCA9IHNlZ21lbnRzW2kgKyAxXTtcbiAgICAgIHZhciBpc0ZpbmFsUGF0aFBhcmFtID0gaSArIDEgPT09IG5QYXRoO1xuXG4gICAgICBpZiAoc3F1YXNoID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZW5jb2RlZCAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoZW5jb2RlZCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBtYXAoZW5jb2RlZCwgZW5jb2RlRGFzaGVzKS5qb2luKFwiLVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IG5leHRTZWdtZW50O1xuICAgICAgfSBlbHNlIGlmIChzcXVhc2ggPT09IHRydWUpIHtcbiAgICAgICAgdmFyIGNhcHR1cmUgPSByZXN1bHQubWF0Y2goL1xcLyQvKSA/IC9cXC8/KC4qKS8gOiAvKC4qKS87XG4gICAgICAgIHJlc3VsdCArPSBuZXh0U2VnbWVudC5tYXRjaChjYXB0dXJlKVsxXTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoc3F1YXNoKSkge1xuICAgICAgICByZXN1bHQgKz0gc3F1YXNoICsgbmV4dFNlZ21lbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0ZpbmFsUGF0aFBhcmFtICYmIHBhcmFtLnNxdWFzaCA9PT0gdHJ1ZSAmJiByZXN1bHQuc2xpY2UoLTEpID09PSAnLycpIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCAtMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmNvZGVkID09IG51bGwgfHwgKGlzRGVmYXVsdFZhbHVlICYmIHNxdWFzaCAhPT0gZmFsc2UpKSBjb250aW51ZTtcbiAgICAgIGlmICghaXNBcnJheShlbmNvZGVkKSkgZW5jb2RlZCA9IFsgZW5jb2RlZCBdO1xuICAgICAgaWYgKGVuY29kZWQubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgIGVuY29kZWQgPSBtYXAoZW5jb2RlZCwgZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCcmJyArIG5hbWUgKyAnPScpO1xuICAgICAgcmVzdWx0ICs9IChzZWFyY2ggPyAnJicgOiAnPycpICsgKG5hbWUgKyAnPScgKyBlbmNvZGVkKTtcbiAgICAgIHNlYXJjaCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG5nZG9jIG9iamVjdFxuICogQG5hbWUgdWkucm91dGVyLnV0aWwudHlwZTpUeXBlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJbXBsZW1lbnRzIGFuIGludGVyZmFjZSB0byBkZWZpbmUgY3VzdG9tIHBhcmFtZXRlciB0eXBlcyB0aGF0IGNhbiBiZSBkZWNvZGVkIGZyb20gYW5kIGVuY29kZWQgdG9cbiAqIHN0cmluZyBwYXJhbWV0ZXJzIG1hdGNoZWQgaW4gYSBVUkwuIFVzZWQgYnkge0BsaW5rIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlciBgVXJsTWF0Y2hlcmB9XG4gKiBvYmplY3RzIHdoZW4gbWF0Y2hpbmcgb3IgZm9ybWF0dGluZyBVUkxzLCBvciBjb21wYXJpbmcgb3IgdmFsaWRhdGluZyBwYXJhbWV0ZXIgdmFsdWVzLlxuICpcbiAqIFNlZSB7QGxpbmsgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5I21ldGhvZHNfdHlwZSBgJHVybE1hdGNoZXJGYWN0b3J5I3R5cGUoKWB9IGZvciBtb3JlXG4gKiBpbmZvcm1hdGlvbiBvbiByZWdpc3RlcmluZyBjdXN0b20gdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAgQSBjb25maWd1cmF0aW9uIG9iamVjdCB3aGljaCBjb250YWlucyB0aGUgY3VzdG9tIHR5cGUgZGVmaW5pdGlvbi4gIFRoZSBvYmplY3Qnc1xuICogICAgICAgIHByb3BlcnRpZXMgd2lsbCBvdmVycmlkZSB0aGUgZGVmYXVsdCBtZXRob2RzIGFuZC9vciBwYXR0ZXJuIGluIGBUeXBlYCdzIHB1YmxpYyBpbnRlcmZhY2UuXG4gKiBAZXhhbXBsZVxuICogPHByZT5cbiAqIHtcbiAqICAgZGVjb2RlOiBmdW5jdGlvbih2YWwpIHsgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApOyB9LFxuICogICBlbmNvZGU6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gdmFsICYmIHZhbC50b1N0cmluZygpOyB9LFxuICogICBlcXVhbHM6IGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIHRoaXMuaXMoYSkgJiYgYSA9PT0gYjsgfSxcbiAqICAgaXM6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gYW5ndWxhci5pc051bWJlcih2YWwpIGlzRmluaXRlKHZhbCkgJiYgdmFsICUgMSA9PT0gMDsgfSxcbiAqICAgcGF0dGVybjogL1xcZCsvXG4gKiB9XG4gKiA8L3ByZT5cbiAqXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gcGF0dGVybiBUaGUgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4gdXNlZCB0byBtYXRjaCB2YWx1ZXMgb2YgdGhpcyB0eXBlIHdoZW5cbiAqICAgICAgICAgICBjb21pbmcgZnJvbSBhIHN1YnN0cmluZyBvZiBhIFVSTC5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAgUmV0dXJucyBhIG5ldyBgVHlwZWAgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBUeXBlKGNvbmZpZykge1xuICBleHRlbmQodGhpcywgY29uZmlnKTtcbn1cblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZSNpc1xuICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogRGV0ZWN0cyB3aGV0aGVyIGEgdmFsdWUgaXMgb2YgYSBwYXJ0aWN1bGFyIHR5cGUuIEFjY2VwdHMgYSBuYXRpdmUgKGRlY29kZWQpIHZhbHVlXG4gKiBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgYFR5cGVgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCAgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAgT3B0aW9uYWwuIElmIHRoZSB0eXBlIGNoZWNrIGlzIGhhcHBlbmluZyBpbiB0aGUgY29udGV4dCBvZiBhIHNwZWNpZmljXG4gKiAgICAgICAge0BsaW5rIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlciBgVXJsTWF0Y2hlcmB9IG9iamVjdCwgdGhpcyBpcyB0aGUgbmFtZSBvZiB0aGVcbiAqICAgICAgICBwYXJhbWV0ZXIgaW4gd2hpY2ggYHZhbGAgaXMgc3RvcmVkLiBDYW4gYmUgdXNlZCBmb3IgbWV0YS1wcm9ncmFtbWluZyBvZiBgVHlwZWAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtCb29sZWFufSAgUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIG1hdGNoZXMgdGhlIHR5cGUsIG90aGVyd2lzZSBgZmFsc2VgLlxuICovXG5UeXBlLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZSNlbmNvZGVcbiAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC50eXBlOlR5cGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVuY29kZXMgYSBjdXN0b20vbmF0aXZlIHR5cGUgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBjYW4gYmUgZW1iZWRkZWQgaW4gYSBVUkwuIE5vdGUgdGhhdCB0aGVcbiAqIHJldHVybiB2YWx1ZSBkb2VzICpub3QqIG5lZWQgdG8gYmUgVVJMLXNhZmUgKGkuZS4gcGFzc2VkIHRocm91Z2ggYGVuY29kZVVSSUNvbXBvbmVudCgpYCksIGl0XG4gKiBvbmx5IG5lZWRzIHRvIGJlIGEgcmVwcmVzZW50YXRpb24gb2YgYHZhbGAgdGhhdCBoYXMgYmVlbiBjb2VyY2VkIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsICBUaGUgdmFsdWUgdG8gZW5jb2RlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAgVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlciBpbiB3aGljaCBgdmFsYCBpcyBzdG9yZWQuIENhbiBiZSB1c2VkIGZvclxuICogICAgICAgIG1ldGEtcHJvZ3JhbW1pbmcgb2YgYFR5cGVgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAgUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBgdmFsYCB0aGF0IGNhbiBiZSBlbmNvZGVkIGluIGEgVVJMLlxuICovXG5UeXBlLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbih2YWwsIGtleSkge1xuICByZXR1cm4gdmFsO1xufTtcblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZSNkZWNvZGVcbiAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC50eXBlOlR5cGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnRzIGEgcGFyYW1ldGVyIHZhbHVlIChmcm9tIFVSTCBzdHJpbmcgb3IgdHJhbnNpdGlvbiBwYXJhbSkgdG8gYSBjdXN0b20vbmF0aXZlIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgIFRoZSBVUkwgcGFyYW1ldGVyIHZhbHVlIHRvIGRlY29kZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgaW4gd2hpY2ggYHZhbGAgaXMgc3RvcmVkLiBDYW4gYmUgdXNlZCBmb3JcbiAqICAgICAgICBtZXRhLXByb2dyYW1taW5nIG9mIGBUeXBlYCBvYmplY3RzLlxuICogQHJldHVybnMgeyp9ICBSZXR1cm5zIGEgY3VzdG9tIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBVUkwgcGFyYW1ldGVyIHZhbHVlLlxuICovXG5UeXBlLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbih2YWwsIGtleSkge1xuICByZXR1cm4gdmFsO1xufTtcblxuLyoqXG4gKiBAbmdkb2MgZnVuY3Rpb25cbiAqIEBuYW1lIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZSNlcXVhbHNcbiAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC50eXBlOlR5cGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIERldGVybWluZXMgd2hldGhlciB0d28gZGVjb2RlZCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHBhcmFtIHsqfSBhICBBIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdC5cbiAqIEBwYXJhbSB7Kn0gYiAgQSB2YWx1ZSB0byBjb21wYXJlIGFnYWluc3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQvZXF1YWwsIG90aGVyd2lzZSBgZmFsc2VgLlxuICovXG5UeXBlLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID09IGI7XG59O1xuXG5UeXBlLnByb3RvdHlwZS4kc3ViUGF0dGVybiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3ViID0gdGhpcy5wYXR0ZXJuLnRvU3RyaW5nKCk7XG4gIHJldHVybiBzdWIuc3Vic3RyKDEsIHN1Yi5sZW5ndGggLSAyKTtcbn07XG5cblR5cGUucHJvdG90eXBlLnBhdHRlcm4gPSAvLiovO1xuXG5UeXBlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJ7VHlwZTpcIiArIHRoaXMubmFtZSArIFwifVwiOyB9O1xuXG4vKiogR2l2ZW4gYW4gZW5jb2RlZCBzdHJpbmcsIG9yIGEgZGVjb2RlZCBvYmplY3QsIHJldHVybnMgYSBkZWNvZGVkIG9iamVjdCAqL1xuVHlwZS5wcm90b3R5cGUuJG5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdGhpcy5pcyh2YWwpID8gdmFsIDogdGhpcy5kZWNvZGUodmFsKTtcbn07XG5cbi8qXG4gKiBXcmFwcyBhbiBleGlzdGluZyBjdXN0b20gVHlwZSBhcyBhbiBhcnJheSBvZiBUeXBlLCBkZXBlbmRpbmcgb24gJ21vZGUnLlxuICogZS5nLjpcbiAqIC0gdXJsbWF0Y2hlciBwYXR0ZXJuIFwiL3BhdGg/e3F1ZXJ5UGFyYW1bXTppbnR9XCJcbiAqIC0gdXJsOiBcIi9wYXRoP3F1ZXJ5UGFyYW09MSZxdWVyeVBhcmFtPTJcbiAqIC0gJHN0YXRlUGFyYW1zLnF1ZXJ5UGFyYW0gd2lsbCBiZSBbMSwgMl1cbiAqIGlmIGBtb2RlYCBpcyBcImF1dG9cIiwgdGhlblxuICogLSB1cmw6IFwiL3BhdGg/cXVlcnlQYXJhbT0xIHdpbGwgY3JlYXRlICRzdGF0ZVBhcmFtcy5xdWVyeVBhcmFtOiAxXG4gKiAtIHVybDogXCIvcGF0aD9xdWVyeVBhcmFtPTEmcXVlcnlQYXJhbT0yIHdpbGwgY3JlYXRlICRzdGF0ZVBhcmFtcy5xdWVyeVBhcmFtOiBbMSwgMl1cbiAqL1xuVHlwZS5wcm90b3R5cGUuJGFzQXJyYXkgPSBmdW5jdGlvbihtb2RlLCBpc1NlYXJjaCkge1xuICBpZiAoIW1vZGUpIHJldHVybiB0aGlzO1xuICBpZiAobW9kZSA9PT0gXCJhdXRvXCIgJiYgIWlzU2VhcmNoKSB0aHJvdyBuZXcgRXJyb3IoXCInYXV0bycgYXJyYXkgbW9kZSBpcyBmb3IgcXVlcnkgcGFyYW1ldGVycyBvbmx5XCIpO1xuXG4gIGZ1bmN0aW9uIEFycmF5VHlwZSh0eXBlLCBtb2RlKSB7XG4gICAgZnVuY3Rpb24gYmluZFRvKHR5cGUsIGNhbGxiYWNrTmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdHlwZVtjYWxsYmFja05hbWVdLmFwcGx5KHR5cGUsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFdyYXAgbm9uLWFycmF5IHZhbHVlIGFzIGFycmF5XG4gICAgZnVuY3Rpb24gYXJyYXlXcmFwKHZhbCkgeyByZXR1cm4gaXNBcnJheSh2YWwpID8gdmFsIDogKGlzRGVmaW5lZCh2YWwpID8gWyB2YWwgXSA6IFtdKTsgfVxuICAgIC8vIFVud3JhcCBhcnJheSB2YWx1ZSBmb3IgXCJhdXRvXCIgbW9kZS4gUmV0dXJuIHVuZGVmaW5lZCBmb3IgZW1wdHkgYXJyYXkuXG4gICAgZnVuY3Rpb24gYXJyYXlVbndyYXAodmFsKSB7XG4gICAgICBzd2l0Y2godmFsLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG1vZGUgPT09IFwiYXV0b1wiID8gdmFsWzBdIDogdmFsO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBmYWxzZXkodmFsKSB7IHJldHVybiAhdmFsOyB9XG5cbiAgICAvLyBXcmFwcyB0eXBlICguaXMvLmVuY29kZS8uZGVjb2RlKSBmdW5jdGlvbnMgdG8gb3BlcmF0ZSBvbiBlYWNoIHZhbHVlIG9mIGFuIGFycmF5XG4gICAgZnVuY3Rpb24gYXJyYXlIYW5kbGVyKGNhbGxiYWNrLCBhbGxUcnV0aHlNb2RlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlQXJyYXkodmFsKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHZhbDtcbiAgICAgICAgdmFsID0gYXJyYXlXcmFwKHZhbCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBtYXAodmFsLCBjYWxsYmFjayk7XG4gICAgICAgIGlmIChhbGxUcnV0aHlNb2RlID09PSB0cnVlKVxuICAgICAgICAgIHJldHVybiBmaWx0ZXIocmVzdWx0LCBmYWxzZXkpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgcmV0dXJuIGFycmF5VW53cmFwKHJlc3VsdCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFdyYXBzIHR5cGUgKC5lcXVhbHMpIGZ1bmN0aW9ucyB0byBvcGVyYXRlIG9uIGVhY2ggdmFsdWUgb2YgYW4gYXJyYXlcbiAgICBmdW5jdGlvbiBhcnJheUVxdWFsc0hhbmRsZXIoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVBcnJheSh2YWwxLCB2YWwyKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gYXJyYXlXcmFwKHZhbDEpLCByaWdodCA9IGFycmF5V3JhcCh2YWwyKTtcbiAgICAgICAgaWYgKGxlZnQubGVuZ3RoICE9PSByaWdodC5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZWZ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFjYWxsYmFjayhsZWZ0W2ldLCByaWdodFtpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5lbmNvZGUgPSBhcnJheUhhbmRsZXIoYmluZFRvKHR5cGUsICdlbmNvZGUnKSk7XG4gICAgdGhpcy5kZWNvZGUgPSBhcnJheUhhbmRsZXIoYmluZFRvKHR5cGUsICdkZWNvZGUnKSk7XG4gICAgdGhpcy5pcyAgICAgPSBhcnJheUhhbmRsZXIoYmluZFRvKHR5cGUsICdpcycpLCB0cnVlKTtcbiAgICB0aGlzLmVxdWFscyA9IGFycmF5RXF1YWxzSGFuZGxlcihiaW5kVG8odHlwZSwgJ2VxdWFscycpKTtcbiAgICB0aGlzLnBhdHRlcm4gPSB0eXBlLnBhdHRlcm47XG4gICAgdGhpcy4kbm9ybWFsaXplID0gYXJyYXlIYW5kbGVyKGJpbmRUbyh0eXBlLCAnJG5vcm1hbGl6ZScpKTtcbiAgICB0aGlzLm5hbWUgPSB0eXBlLm5hbWU7XG4gICAgdGhpcy4kYXJyYXlNb2RlID0gbW9kZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgQXJyYXlUeXBlKHRoaXMsIG1vZGUpO1xufTtcblxuXG5cbi8qKlxuICogQG5nZG9jIG9iamVjdFxuICogQG5hbWUgdWkucm91dGVyLnV0aWwuJHVybE1hdGNoZXJGYWN0b3J5XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBGYWN0b3J5IGZvciB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyIGBVcmxNYXRjaGVyYH0gaW5zdGFuY2VzLiBUaGUgZmFjdG9yeVxuICogaXMgYWxzbyBhdmFpbGFibGUgdG8gcHJvdmlkZXJzIHVuZGVyIHRoZSBuYW1lIGAkdXJsTWF0Y2hlckZhY3RvcnlQcm92aWRlcmAuXG4gKi9cbmZ1bmN0aW9uICRVcmxNYXRjaGVyRmFjdG9yeSgpIHtcbiAgJCRVTUZQID0gdGhpcztcblxuICB2YXIgaXNDYXNlSW5zZW5zaXRpdmUgPSBmYWxzZSwgaXNTdHJpY3RNb2RlID0gdHJ1ZSwgZGVmYXVsdFNxdWFzaFBvbGljeSA9IGZhbHNlO1xuXG4gIC8vIFVzZSB0aWxkZXMgdG8gcHJlLWVuY29kZSBzbGFzaGVzLlxuICAvLyBJZiB0aGUgc2xhc2hlcyBhcmUgc2ltcGx5IFVSTEVuY29kZWQsIHRoZSBicm93c2VyIGNhbiBjaG9vc2UgdG8gcHJlLWRlY29kZSB0aGVtLFxuICAvLyBhbmQgYmlkaXJlY3Rpb25hbCBlbmNvZGluZy9kZWNvZGluZyBmYWlscy5cbiAgLy8gVGlsZGUgd2FzIGNob3NlbiBiZWNhdXNlIGl0J3Mgbm90IGEgUkZDIDM5ODYgc2VjdGlvbiAyLjIgUmVzZXJ2ZWQgQ2hhcmFjdGVyXG4gIGZ1bmN0aW9uIHZhbFRvU3RyaW5nKHZhbCkgeyByZXR1cm4gdmFsICE9IG51bGwgPyB2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC8ofnxcXC8pL2csIGZ1bmN0aW9uIChtKSB7IHJldHVybiB7J34nOid+ficsICcvJzonfjJGJ31bbV07IH0pIDogdmFsOyB9XG4gIGZ1bmN0aW9uIHZhbEZyb21TdHJpbmcodmFsKSB7IHJldHVybiB2YWwgIT0gbnVsbCA/IHZhbC50b1N0cmluZygpLnJlcGxhY2UoLyh+fnx+MkYpL2csIGZ1bmN0aW9uIChtKSB7IHJldHVybiB7J35+JzonficsICd+MkYnOicvJ31bbV07IH0pIDogdmFsOyB9XG5cbiAgdmFyICR0eXBlcyA9IHt9LCBlbnF1ZXVlID0gdHJ1ZSwgdHlwZVF1ZXVlID0gW10sIGluamVjdG9yLCBkZWZhdWx0VHlwZXMgPSB7XG4gICAgXCJzdHJpbmdcIjoge1xuICAgICAgZW5jb2RlOiB2YWxUb1N0cmluZyxcbiAgICAgIGRlY29kZTogdmFsRnJvbVN0cmluZyxcbiAgICAgIC8vIFRPRE86IGluIDEuMCwgbWFrZSBzdHJpbmcgLmlzKCkgcmV0dXJuIGZhbHNlIGlmIHZhbHVlIGlzIHVuZGVmaW5lZC9udWxsIGJ5IGRlZmF1bHQuXG4gICAgICAvLyBJbiAwLjIueCwgc3RyaW5nIHBhcmFtcyBhcmUgb3B0aW9uYWwgYnkgZGVmYXVsdCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgICAgaXM6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gdmFsID09IG51bGwgfHwgIWlzRGVmaW5lZCh2YWwpIHx8IHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7IH0sXG4gICAgICBwYXR0ZXJuOiAvW14vXSovXG4gICAgfSxcbiAgICBcImludFwiOiB7XG4gICAgICBlbmNvZGU6IHZhbFRvU3RyaW5nLFxuICAgICAgZGVjb2RlOiBmdW5jdGlvbih2YWwpIHsgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApOyB9LFxuICAgICAgaXM6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmIHRoaXMuZGVjb2RlKHZhbC50b1N0cmluZygpKSA9PT0gdmFsOyB9LFxuICAgICAgcGF0dGVybjogL1xcZCsvXG4gICAgfSxcbiAgICBcImJvb2xcIjoge1xuICAgICAgZW5jb2RlOiBmdW5jdGlvbih2YWwpIHsgcmV0dXJuIHZhbCA/IDEgOiAwOyB9LFxuICAgICAgZGVjb2RlOiBmdW5jdGlvbih2YWwpIHsgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApICE9PSAwOyB9LFxuICAgICAgaXM6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gdmFsID09PSB0cnVlIHx8IHZhbCA9PT0gZmFsc2U7IH0sXG4gICAgICBwYXR0ZXJuOiAvMHwxL1xuICAgIH0sXG4gICAgXCJkYXRlXCI6IHtcbiAgICAgIGVuY29kZTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBpZiAoIXRoaXMuaXModmFsKSlcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gWyB2YWwuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAoJzAnICsgKHZhbC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSxcbiAgICAgICAgICAoJzAnICsgdmFsLmdldERhdGUoKSkuc2xpY2UoLTIpXG4gICAgICAgIF0uam9pbihcIi1cIik7XG4gICAgICB9LFxuICAgICAgZGVjb2RlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzKHZhbCkpIHJldHVybiB2YWw7XG4gICAgICAgIHZhciBtYXRjaCA9IHRoaXMuY2FwdHVyZS5leGVjKHZhbCk7XG4gICAgICAgIHJldHVybiBtYXRjaCA/IG5ldyBEYXRlKG1hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdKSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBpczogZnVuY3Rpb24odmFsKSB7IHJldHVybiB2YWwgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTih2YWwudmFsdWVPZigpKTsgfSxcbiAgICAgIGVxdWFsczogZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIHRoaXMuaXMoYSkgJiYgdGhpcy5pcyhiKSAmJiBhLnRvSVNPU3RyaW5nKCkgPT09IGIudG9JU09TdHJpbmcoKTsgfSxcbiAgICAgIHBhdHRlcm46IC9bMC05XXs0fS0oPzowWzEtOV18MVswLTJdKS0oPzowWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pLyxcbiAgICAgIGNhcHR1cmU6IC8oWzAtOV17NH0pLSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKS9cbiAgICB9LFxuICAgIFwianNvblwiOiB7XG4gICAgICBlbmNvZGU6IGFuZ3VsYXIudG9Kc29uLFxuICAgICAgZGVjb2RlOiBhbmd1bGFyLmZyb21Kc29uLFxuICAgICAgaXM6IGFuZ3VsYXIuaXNPYmplY3QsXG4gICAgICBlcXVhbHM6IGFuZ3VsYXIuZXF1YWxzLFxuICAgICAgcGF0dGVybjogL1teL10qL1xuICAgIH0sXG4gICAgXCJhbnlcIjogeyAvLyBkb2VzIG5vdCBlbmNvZGUvZGVjb2RlXG4gICAgICBlbmNvZGU6IGFuZ3VsYXIuaWRlbnRpdHksXG4gICAgICBkZWNvZGU6IGFuZ3VsYXIuaWRlbnRpdHksXG4gICAgICBlcXVhbHM6IGFuZ3VsYXIuZXF1YWxzLFxuICAgICAgcGF0dGVybjogLy4qL1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZXREZWZhdWx0Q29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHJpY3Q6IGlzU3RyaWN0TW9kZSxcbiAgICAgIGNhc2VJbnNlbnNpdGl2ZTogaXNDYXNlSW5zZW5zaXRpdmVcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJbmplY3RhYmxlKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc0Z1bmN0aW9uKHZhbHVlKSB8fCAoaXNBcnJheSh2YWx1ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbSW50ZXJuYWxdIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHBhcmFtZXRlciwgd2hpY2ggbWF5IGJlIGFuIGluamVjdGFibGUgZnVuY3Rpb24uXG4gICAqL1xuICAkVXJsTWF0Y2hlckZhY3RvcnkuJCRnZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICBpZiAoIWlzSW5qZWN0YWJsZShjb25maWcudmFsdWUpKSByZXR1cm4gY29uZmlnLnZhbHVlO1xuICAgIGlmICghaW5qZWN0b3IpIHRocm93IG5ldyBFcnJvcihcIkluamVjdGFibGUgZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYXQgY29uZmlndXJhdGlvbiB0aW1lXCIpO1xuICAgIHJldHVybiBpbmplY3Rvci5pbnZva2UoY29uZmlnLnZhbHVlKTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeSNjYXNlSW5zZW5zaXRpdmVcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRGVmaW5lcyB3aGV0aGVyIFVSTCBtYXRjaGluZyBzaG91bGQgYmUgY2FzZSBzZW5zaXRpdmUgKHRoZSBkZWZhdWx0IGJlaGF2aW9yKSwgb3Igbm90LlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIGBmYWxzZWAgdG8gbWF0Y2ggVVJMIGluIGEgY2FzZSBzZW5zaXRpdmUgbWFubmVyOyBvdGhlcndpc2UgYHRydWVgO1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdGhlIGN1cnJlbnQgdmFsdWUgb2YgY2FzZUluc2Vuc2l0aXZlXG4gICAqL1xuICB0aGlzLmNhc2VJbnNlbnNpdGl2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpXG4gICAgICBpc0Nhc2VJbnNlbnNpdGl2ZSA9IHZhbHVlO1xuICAgIHJldHVybiBpc0Nhc2VJbnNlbnNpdGl2ZTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeSNzdHJpY3RNb2RlXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIERlZmluZXMgd2hldGhlciBVUkxzIHNob3VsZCBtYXRjaCB0cmFpbGluZyBzbGFzaGVzLCBvciBub3QgKHRoZSBkZWZhdWx0IGJlaGF2aW9yKS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFuPX0gdmFsdWUgYGZhbHNlYCB0byBtYXRjaCB0cmFpbGluZyBzbGFzaGVzIGluIFVSTHMsIG90aGVyd2lzZSBgdHJ1ZWAuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0aGUgY3VycmVudCB2YWx1ZSBvZiBzdHJpY3RNb2RlXG4gICAqL1xuICB0aGlzLnN0cmljdE1vZGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmIChpc0RlZmluZWQodmFsdWUpKVxuICAgICAgaXNTdHJpY3RNb2RlID0gdmFsdWU7XG4gICAgcmV0dXJuIGlzU3RyaWN0TW9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeSNkZWZhdWx0U3F1YXNoUG9saWN5XG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBnZW5lcmF0aW5nIG9yIG1hdGNoaW5nIFVSTHMgd2l0aCBkZWZhdWx0IHBhcmFtZXRlciB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBBIHN0cmluZyB0aGF0IGRlZmluZXMgdGhlIGRlZmF1bHQgcGFyYW1ldGVyIFVSTCBzcXVhc2hpbmcgYmVoYXZpb3IuXG4gICAqICAgIGBub3NxdWFzaGA6IFdoZW4gZ2VuZXJhdGluZyBhbiBocmVmIHdpdGggYSBkZWZhdWx0IHBhcmFtZXRlciB2YWx1ZSwgZG8gbm90IHNxdWFzaCB0aGUgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxuICAgKiAgICBgc2xhc2hgOiBXaGVuIGdlbmVyYXRpbmcgYW4gaHJlZiB3aXRoIGEgZGVmYXVsdCBwYXJhbWV0ZXIgdmFsdWUsIHNxdWFzaCAocmVtb3ZlKSB0aGUgcGFyYW1ldGVyIHZhbHVlLCBhbmQsIGlmIHRoZVxuICAgKiAgICAgICAgICAgICBwYXJhbWV0ZXIgaXMgc3Vycm91bmRlZCBieSBzbGFzaGVzLCBzcXVhc2ggKHJlbW92ZSkgb25lIHNsYXNoIGZyb20gdGhlIFVSTFxuICAgKiAgICBhbnkgb3RoZXIgc3RyaW5nLCBlLmcuIFwiflwiOiBXaGVuIGdlbmVyYXRpbmcgYW4gaHJlZiB3aXRoIGEgZGVmYXVsdCBwYXJhbWV0ZXIgdmFsdWUsIHNxdWFzaCAocmVtb3ZlKVxuICAgKiAgICAgICAgICAgICB0aGUgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTCBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoaXMgc3RyaW5nLlxuICAgKi9cbiAgdGhpcy5kZWZhdWx0U3F1YXNoUG9saWN5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHJldHVybiBkZWZhdWx0U3F1YXNoUG9saWN5O1xuICAgIGlmICh2YWx1ZSAhPT0gdHJ1ZSAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgIWlzU3RyaW5nKHZhbHVlKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3F1YXNoIHBvbGljeTogXCIgKyB2YWx1ZSArIFwiLiBWYWxpZCBwb2xpY2llczogZmFsc2UsIHRydWUsIGFyYml0cmFyeS1zdHJpbmdcIik7XG4gICAgZGVmYXVsdFNxdWFzaFBvbGljeSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeSNjb21waWxlXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIENyZWF0ZXMgYSB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyIGBVcmxNYXRjaGVyYH0gZm9yIHRoZSBzcGVjaWZpZWQgcGF0dGVybi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gIFRoZSBVUkwgcGF0dGVybi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAgVGhlIGNvbmZpZyBvYmplY3QgaGFzaC5cbiAgICogQHJldHVybnMge1VybE1hdGNoZXJ9ICBUaGUgVXJsTWF0Y2hlci5cbiAgICovXG4gIHRoaXMuY29tcGlsZSA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBjb25maWcpIHtcbiAgICByZXR1cm4gbmV3IFVybE1hdGNoZXIocGF0dGVybiwgZXh0ZW5kKGdldERlZmF1bHRDb25maWcoKSwgY29uZmlnKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnkjaXNNYXRjaGVyXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIG9iamVjdCBpcyBhIGBVcmxNYXRjaGVyYCwgb3IgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0ICBUaGUgb2JqZWN0IHRvIHBlcmZvcm0gdGhlIHR5cGUgY2hlY2sgYWdhaW5zdC5cbiAgICogQHJldHVybnMge0Jvb2xlYW59ICBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0IG1hdGNoZXMgdGhlIGBVcmxNYXRjaGVyYCBpbnRlcmZhY2UsIGJ5XG4gICAqICAgICAgICAgIGltcGxlbWVudGluZyBhbGwgdGhlIHNhbWUgbWV0aG9kcy5cbiAgICovXG4gIHRoaXMuaXNNYXRjaGVyID0gZnVuY3Rpb24gKG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KG8pKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBmb3JFYWNoKFVybE1hdGNoZXIucHJvdG90eXBlLCBmdW5jdGlvbih2YWwsIG5hbWUpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbCkpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIChpc0RlZmluZWQob1tuYW1lXSkgJiYgaXNGdW5jdGlvbihvW25hbWVdKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeSN0eXBlXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlZ2lzdGVycyBhIGN1c3RvbSB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpUeXBlIGBUeXBlYH0gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogZ2VuZXJhdGUgVVJMcyB3aXRoIHR5cGVkIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBUaGUgdHlwZSBuYW1lLlxuICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gZGVmaW5pdGlvbiAgIFRoZSB0eXBlIGRlZmluaXRpb24uIFNlZVxuICAgKiAgICAgICAge0BsaW5rIHVpLnJvdXRlci51dGlsLnR5cGU6VHlwZSBgVHlwZWB9IGZvciBpbmZvcm1hdGlvbiBvbiB0aGUgdmFsdWVzIGFjY2VwdGVkLlxuICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gZGVmaW5pdGlvbkZuIChvcHRpb25hbCkgQSBmdW5jdGlvbiB0aGF0IGlzIGluamVjdGVkIGJlZm9yZSB0aGUgYXBwXG4gICAqICAgICAgICBydW50aW1lIHN0YXJ0cy4gIFRoZSByZXN1bHQgb2YgdGhpcyBmdW5jdGlvbiBpcyBtZXJnZWQgaW50byB0aGUgZXhpc3RpbmcgYGRlZmluaXRpb25gLlxuICAgKiAgICAgICAgU2VlIHtAbGluayB1aS5yb3V0ZXIudXRpbC50eXBlOlR5cGUgYFR5cGVgfSBmb3IgaW5mb3JtYXRpb24gb24gdGhlIHZhbHVlcyBhY2NlcHRlZC5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gIFJldHVybnMgYCR1cmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyYC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogVGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGEgY3VzdG9tIHR5cGUgdGhhdCBlbmNvZGVzIGFuZCBkZWNvZGVzIGl0ZW1zIGZyb20gYW5cbiAgICogYXJyYXksIHVzaW5nIHRoZSBhcnJheSBpbmRleCBhcyB0aGUgVVJMLWVuY29kZWQgdmFsdWU6XG4gICAqXG4gICAqIDxwcmU+XG4gICAqIHZhciBsaXN0ID0gWydKb2huJywgJ1BhdWwnLCAnR2VvcmdlJywgJ1JpbmdvJ107XG4gICAqXG4gICAqICR1cmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyLnR5cGUoJ2xpc3RJdGVtJywge1xuICAgKiAgIGVuY29kZTogZnVuY3Rpb24oaXRlbSkge1xuICAgKiAgICAgLy8gUmVwcmVzZW50IHRoZSBsaXN0IGl0ZW0gaW4gdGhlIFVSTCB1c2luZyBpdHMgY29ycmVzcG9uZGluZyBpbmRleFxuICAgKiAgICAgcmV0dXJuIGxpc3QuaW5kZXhPZihpdGVtKTtcbiAgICogICB9LFxuICAgKiAgIGRlY29kZTogZnVuY3Rpb24oaXRlbSkge1xuICAgKiAgICAgLy8gTG9vayB1cCB0aGUgbGlzdCBpdGVtIGJ5IGluZGV4XG4gICAqICAgICByZXR1cm4gbGlzdFtwYXJzZUludChpdGVtLCAxMCldO1xuICAgKiAgIH0sXG4gICAqICAgaXM6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICogICAgIC8vIEVuc3VyZSB0aGUgaXRlbSBpcyB2YWxpZCBieSBjaGVja2luZyB0byBzZWUgdGhhdCBpdCBhcHBlYXJzXG4gICAqICAgICAvLyBpbiB0aGUgbGlzdFxuICAgKiAgICAgcmV0dXJuIGxpc3QuaW5kZXhPZihpdGVtKSA+IC0xO1xuICAgKiAgIH1cbiAgICogfSk7XG4gICAqXG4gICAqICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsaXN0Jywge1xuICAgKiAgIHVybDogXCIvbGlzdC97aXRlbTpsaXN0SXRlbX1cIixcbiAgICogICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcykge1xuICAgKiAgICAgY29uc29sZS5sb2coJHN0YXRlUGFyYW1zLml0ZW0pO1xuICAgKiAgIH1cbiAgICogfSk7XG4gICAqXG4gICAqIC8vIC4uLlxuICAgKlxuICAgKiAvLyBDaGFuZ2VzIFVSTCB0byAnL2xpc3QvMycsIGxvZ3MgXCJSaW5nb1wiIHRvIHRoZSBjb25zb2xlXG4gICAqICRzdGF0ZS5nbygnbGlzdCcsIHsgaXRlbTogXCJSaW5nb1wiIH0pO1xuICAgKiA8L3ByZT5cbiAgICpcbiAgICogVGhpcyBpcyBhIG1vcmUgY29tcGxleCBleGFtcGxlIG9mIGEgdHlwZSB0aGF0IHJlbGllcyBvbiBkZXBlbmRlbmN5IGluamVjdGlvbiB0b1xuICAgKiBpbnRlcmFjdCB3aXRoIHNlcnZpY2VzLCBhbmQgdXNlcyB0aGUgcGFyYW1ldGVyIG5hbWUgZnJvbSB0aGUgVVJMIHRvIGluZmVyIGhvdyB0b1xuICAgKiBoYW5kbGUgZW5jb2RpbmcgYW5kIGRlY29kaW5nIHBhcmFtZXRlciB2YWx1ZXM6XG4gICAqXG4gICAqIDxwcmU+XG4gICAqIC8vIERlZmluZXMgYSBjdXN0b20gdHlwZSB0aGF0IGdldHMgYSB2YWx1ZSBmcm9tIGEgc2VydmljZSxcbiAgICogLy8gd2hlcmUgZWFjaCBzZXJ2aWNlIGdldHMgZGlmZmVyZW50IHR5cGVzIG9mIHZhbHVlcyBmcm9tXG4gICAqIC8vIGEgYmFja2VuZCBBUEk6XG4gICAqICR1cmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyLnR5cGUoJ2RiT2JqZWN0Jywge30sIGZ1bmN0aW9uKFVzZXJzLCBQb3N0cykge1xuICAgKlxuICAgKiAgIC8vIE1hdGNoZXMgdXAgc2VydmljZXMgdG8gVVJMIHBhcmFtZXRlciBuYW1lc1xuICAgKiAgIHZhciBzZXJ2aWNlcyA9IHtcbiAgICogICAgIHVzZXI6IFVzZXJzLFxuICAgKiAgICAgcG9zdDogUG9zdHNcbiAgICogICB9O1xuICAgKlxuICAgKiAgIHJldHVybiB7XG4gICAqICAgICBlbmNvZGU6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgKiAgICAgICAvLyBSZXByZXNlbnQgdGhlIG9iamVjdCBpbiB0aGUgVVJMIHVzaW5nIGl0cyB1bmlxdWUgSURcbiAgICogICAgICAgcmV0dXJuIG9iamVjdC5pZDtcbiAgICogICAgIH0sXG4gICAqICAgICBkZWNvZGU6IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICogICAgICAgLy8gTG9vayB1cCB0aGUgb2JqZWN0IGJ5IElELCB1c2luZyB0aGUgcGFyYW1ldGVyXG4gICAqICAgICAgIC8vIG5hbWUgKGtleSkgdG8gY2FsbCB0aGUgY29ycmVjdCBzZXJ2aWNlXG4gICAqICAgICAgIHJldHVybiBzZXJ2aWNlc1trZXldLmZpbmRCeUlkKHZhbHVlKTtcbiAgICogICAgIH0sXG4gICAqICAgICBpczogZnVuY3Rpb24ob2JqZWN0LCBrZXkpIHtcbiAgICogICAgICAgLy8gQ2hlY2sgdGhhdCBvYmplY3QgaXMgYSB2YWxpZCBkYk9iamVjdFxuICAgKiAgICAgICByZXR1cm4gYW5ndWxhci5pc09iamVjdChvYmplY3QpICYmIG9iamVjdC5pZCAmJiBzZXJ2aWNlc1trZXldO1xuICAgKiAgICAgfVxuICAgKiAgICAgZXF1YWxzOiBmdW5jdGlvbihhLCBiKSB7XG4gICAqICAgICAgIC8vIENoZWNrIHRoZSBlcXVhbGl0eSBvZiBkZWNvZGVkIG9iamVjdHMgYnkgY29tcGFyaW5nXG4gICAqICAgICAgIC8vIHRoZWlyIHVuaXF1ZSBJRHNcbiAgICogICAgICAgcmV0dXJuIGEuaWQgPT09IGIuaWQ7XG4gICAqICAgICB9XG4gICAqICAgfTtcbiAgICogfSk7XG4gICAqXG4gICAqIC8vIEluIGEgY29uZmlnKCkgYmxvY2ssIHlvdSBjYW4gdGhlbiBhdHRhY2ggVVJMcyB3aXRoXG4gICAqIC8vIHR5cGUtYW5ub3RhdGVkIHBhcmFtZXRlcnM6XG4gICAqICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCd1c2VycycsIHtcbiAgICogICB1cmw6IFwiL3VzZXJzXCIsXG4gICAqICAgLy8gLi4uXG4gICAqIH0pLnN0YXRlKCd1c2Vycy5pdGVtJywge1xuICAgKiAgIHVybDogXCIve3VzZXI6ZGJPYmplY3R9XCIsXG4gICAqICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICogICAgIC8vICRzdGF0ZVBhcmFtcy51c2VyIHdpbGwgbm93IGJlIGFuIG9iamVjdCByZXR1cm5lZCBmcm9tXG4gICAqICAgICAvLyB0aGUgVXNlcnMgc2VydmljZVxuICAgKiAgIH0sXG4gICAqICAgLy8gLi4uXG4gICAqIH0pO1xuICAgKiA8L3ByZT5cbiAgICovXG4gIHRoaXMudHlwZSA9IGZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uLCBkZWZpbml0aW9uRm4pIHtcbiAgICBpZiAoIWlzRGVmaW5lZChkZWZpbml0aW9uKSkgcmV0dXJuICR0eXBlc1tuYW1lXTtcbiAgICBpZiAoJHR5cGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB0aHJvdyBuZXcgRXJyb3IoXCJBIHR5cGUgbmFtZWQgJ1wiICsgbmFtZSArIFwiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO1xuXG4gICAgJHR5cGVzW25hbWVdID0gbmV3IFR5cGUoZXh0ZW5kKHsgbmFtZTogbmFtZSB9LCBkZWZpbml0aW9uKSk7XG4gICAgaWYgKGRlZmluaXRpb25Gbikge1xuICAgICAgdHlwZVF1ZXVlLnB1c2goeyBuYW1lOiBuYW1lLCBkZWY6IGRlZmluaXRpb25GbiB9KTtcbiAgICAgIGlmICghZW5xdWV1ZSkgZmx1c2hUeXBlUXVldWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gYGZsdXNoVHlwZVF1ZXVlKClgIHdhaXRzIHVudGlsIGAkdXJsTWF0Y2hlckZhY3RvcnlgIGlzIGluamVjdGVkIGJlZm9yZSBpbnZva2luZyB0aGUgcXVldWVkIGBkZWZpbml0aW9uRm5gc1xuICBmdW5jdGlvbiBmbHVzaFR5cGVRdWV1ZSgpIHtcbiAgICB3aGlsZSh0eXBlUXVldWUubGVuZ3RoKSB7XG4gICAgICB2YXIgdHlwZSA9IHR5cGVRdWV1ZS5zaGlmdCgpO1xuICAgICAgaWYgKHR5cGUucGF0dGVybikgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBvdmVycmlkZSBhIHR5cGUncyAucGF0dGVybiBhdCBydW50aW1lLlwiKTtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKCR0eXBlc1t0eXBlLm5hbWVdLCBpbmplY3Rvci5pbnZva2UodHlwZS5kZWYpKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZWdpc3RlciBkZWZhdWx0IHR5cGVzLiBTdG9yZSB0aGVtIGluIHRoZSBwcm90b3R5cGUgb2YgJHR5cGVzLlxuICBmb3JFYWNoKGRlZmF1bHRUeXBlcywgZnVuY3Rpb24odHlwZSwgbmFtZSkgeyAkdHlwZXNbbmFtZV0gPSBuZXcgVHlwZShleHRlbmQoe25hbWU6IG5hbWV9LCB0eXBlKSk7IH0pO1xuICAkdHlwZXMgPSBpbmhlcml0KCR0eXBlcywge30pO1xuXG4gIC8qIE5vIG5lZWQgdG8gZG9jdW1lbnQgJGdldCwgc2luY2UgaXQgcmV0dXJucyB0aGlzICovXG4gIHRoaXMuJGdldCA9IFsnJGluamVjdG9yJywgZnVuY3Rpb24gKCRpbmplY3Rvcikge1xuICAgIGluamVjdG9yID0gJGluamVjdG9yO1xuICAgIGVucXVldWUgPSBmYWxzZTtcbiAgICBmbHVzaFR5cGVRdWV1ZSgpO1xuXG4gICAgZm9yRWFjaChkZWZhdWx0VHlwZXMsIGZ1bmN0aW9uKHR5cGUsIG5hbWUpIHtcbiAgICAgIGlmICghJHR5cGVzW25hbWVdKSAkdHlwZXNbbmFtZV0gPSBuZXcgVHlwZSh0eXBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfV07XG5cbiAgdGhpcy5QYXJhbSA9IGZ1bmN0aW9uIFBhcmFtKGlkLCB0eXBlLCBjb25maWcsIGxvY2F0aW9uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGNvbmZpZyA9IHVud3JhcFNob3J0aGFuZChjb25maWcpO1xuICAgIHR5cGUgPSBnZXRUeXBlKGNvbmZpZywgdHlwZSwgbG9jYXRpb24pO1xuICAgIHZhciBhcnJheU1vZGUgPSBnZXRBcnJheU1vZGUoKTtcbiAgICB0eXBlID0gYXJyYXlNb2RlID8gdHlwZS4kYXNBcnJheShhcnJheU1vZGUsIGxvY2F0aW9uID09PSBcInNlYXJjaFwiKSA6IHR5cGU7XG4gICAgaWYgKHR5cGUubmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAhYXJyYXlNb2RlICYmIGxvY2F0aW9uID09PSBcInBhdGhcIiAmJiBjb25maWcudmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgIGNvbmZpZy52YWx1ZSA9IFwiXCI7IC8vIGZvciAwLjIueDsgaW4gMC4zLjArIGRvIG5vdCBhdXRvbWF0aWNhbGx5IGRlZmF1bHQgdG8gXCJcIlxuICAgIHZhciBpc09wdGlvbmFsID0gY29uZmlnLnZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIHNxdWFzaCA9IGdldFNxdWFzaFBvbGljeShjb25maWcsIGlzT3B0aW9uYWwpO1xuICAgIHZhciByZXBsYWNlID0gZ2V0UmVwbGFjZShjb25maWcsIGFycmF5TW9kZSwgaXNPcHRpb25hbCwgc3F1YXNoKTtcblxuICAgIGZ1bmN0aW9uIHVud3JhcFNob3J0aGFuZChjb25maWcpIHtcbiAgICAgIHZhciBrZXlzID0gaXNPYmplY3QoY29uZmlnKSA/IG9iamVjdEtleXMoY29uZmlnKSA6IFtdO1xuICAgICAgdmFyIGlzU2hvcnRoYW5kID0gaW5kZXhPZihrZXlzLCBcInZhbHVlXCIpID09PSAtMSAmJiBpbmRleE9mKGtleXMsIFwidHlwZVwiKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4T2Yoa2V5cywgXCJzcXVhc2hcIikgPT09IC0xICYmIGluZGV4T2Yoa2V5cywgXCJhcnJheVwiKSA9PT0gLTE7XG4gICAgICBpZiAoaXNTaG9ydGhhbmQpIGNvbmZpZyA9IHsgdmFsdWU6IGNvbmZpZyB9O1xuICAgICAgY29uZmlnLiQkZm4gPSBpc0luamVjdGFibGUoY29uZmlnLnZhbHVlKSA/IGNvbmZpZy52YWx1ZSA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmZpZy52YWx1ZTsgfTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZShjb25maWcsIHVybFR5cGUsIGxvY2F0aW9uKSB7XG4gICAgICBpZiAoY29uZmlnLnR5cGUgJiYgdXJsVHlwZSkgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW0gJ1wiK2lkK1wiJyBoYXMgdHdvIHR5cGUgY29uZmlndXJhdGlvbnMuXCIpO1xuICAgICAgaWYgKHVybFR5cGUpIHJldHVybiB1cmxUeXBlO1xuICAgICAgaWYgKCFjb25maWcudHlwZSkgcmV0dXJuIChsb2NhdGlvbiA9PT0gXCJjb25maWdcIiA/ICR0eXBlcy5hbnkgOiAkdHlwZXMuc3RyaW5nKTtcblxuICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoY29uZmlnLnR5cGUpKVxuICAgICAgICByZXR1cm4gJHR5cGVzW2NvbmZpZy50eXBlXTtcbiAgICAgIGlmIChjb25maWcudHlwZSBpbnN0YW5jZW9mIFR5cGUpXG4gICAgICAgIHJldHVybiBjb25maWcudHlwZTtcbiAgICAgIHJldHVybiBuZXcgVHlwZShjb25maWcudHlwZSk7XG4gICAgfVxuXG4gICAgLy8gYXJyYXkgY29uZmlnOiBwYXJhbSBuYW1lIChwYXJhbVtdKSBvdmVycmlkZXMgZGVmYXVsdCBzZXR0aW5ncy4gIGV4cGxpY2l0IGNvbmZpZyBvdmVycmlkZXMgcGFyYW0gbmFtZS5cbiAgICBmdW5jdGlvbiBnZXRBcnJheU1vZGUoKSB7XG4gICAgICB2YXIgYXJyYXlEZWZhdWx0cyA9IHsgYXJyYXk6IChsb2NhdGlvbiA9PT0gXCJzZWFyY2hcIiA/IFwiYXV0b1wiIDogZmFsc2UpIH07XG4gICAgICB2YXIgYXJyYXlQYXJhbU5vbWVuY2xhdHVyZSA9IGlkLm1hdGNoKC9cXFtcXF0kLykgPyB7IGFycmF5OiB0cnVlIH0gOiB7fTtcbiAgICAgIHJldHVybiBleHRlbmQoYXJyYXlEZWZhdWx0cywgYXJyYXlQYXJhbU5vbWVuY2xhdHVyZSwgY29uZmlnKS5hcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGZhbHNlLCB0cnVlLCBvciB0aGUgc3F1YXNoIHZhbHVlIHRvIGluZGljYXRlIHRoZSBcImRlZmF1bHQgcGFyYW1ldGVyIHVybCBzcXVhc2ggcG9saWN5XCIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0U3F1YXNoUG9saWN5KGNvbmZpZywgaXNPcHRpb25hbCkge1xuICAgICAgdmFyIHNxdWFzaCA9IGNvbmZpZy5zcXVhc2g7XG4gICAgICBpZiAoIWlzT3B0aW9uYWwgfHwgc3F1YXNoID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFpc0RlZmluZWQoc3F1YXNoKSB8fCBzcXVhc2ggPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRTcXVhc2hQb2xpY3k7XG4gICAgICBpZiAoc3F1YXNoID09PSB0cnVlIHx8IGlzU3RyaW5nKHNxdWFzaCkpIHJldHVybiBzcXVhc2g7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNxdWFzaCBwb2xpY3k6ICdcIiArIHNxdWFzaCArIFwiJy4gVmFsaWQgcG9saWNpZXM6IGZhbHNlLCB0cnVlLCBvciBhcmJpdHJhcnkgc3RyaW5nXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlcGxhY2UoY29uZmlnLCBhcnJheU1vZGUsIGlzT3B0aW9uYWwsIHNxdWFzaCkge1xuICAgICAgdmFyIHJlcGxhY2UsIGNvbmZpZ3VyZWRLZXlzLCBkZWZhdWx0UG9saWN5ID0gW1xuICAgICAgICB7IGZyb206IFwiXCIsICAgdG86IChpc09wdGlvbmFsIHx8IGFycmF5TW9kZSA/IHVuZGVmaW5lZCA6IFwiXCIpIH0sXG4gICAgICAgIHsgZnJvbTogbnVsbCwgdG86IChpc09wdGlvbmFsIHx8IGFycmF5TW9kZSA/IHVuZGVmaW5lZCA6IFwiXCIpIH1cbiAgICAgIF07XG4gICAgICByZXBsYWNlID0gaXNBcnJheShjb25maWcucmVwbGFjZSkgPyBjb25maWcucmVwbGFjZSA6IFtdO1xuICAgICAgaWYgKGlzU3RyaW5nKHNxdWFzaCkpXG4gICAgICAgIHJlcGxhY2UucHVzaCh7IGZyb206IHNxdWFzaCwgdG86IHVuZGVmaW5lZCB9KTtcbiAgICAgIGNvbmZpZ3VyZWRLZXlzID0gbWFwKHJlcGxhY2UsIGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uZnJvbTsgfSApO1xuICAgICAgcmV0dXJuIGZpbHRlcihkZWZhdWx0UG9saWN5LCBmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpbmRleE9mKGNvbmZpZ3VyZWRLZXlzLCBpdGVtLmZyb20pID09PSAtMTsgfSkuY29uY2F0KHJlcGxhY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFtJbnRlcm5hbF0gR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcGFyYW1ldGVyLCB3aGljaCBtYXkgYmUgYW4gaW5qZWN0YWJsZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAkJGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgIGlmICghaW5qZWN0b3IpIHRocm93IG5ldyBFcnJvcihcIkluamVjdGFibGUgZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYXQgY29uZmlndXJhdGlvbiB0aW1lXCIpO1xuICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGluamVjdG9yLmludm9rZShjb25maWcuJCRmbik7XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICFzZWxmLnR5cGUuaXMoZGVmYXVsdFZhbHVlKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGVmYXVsdCB2YWx1ZSAoXCIgKyBkZWZhdWx0VmFsdWUgKyBcIikgZm9yIHBhcmFtZXRlciAnXCIgKyBzZWxmLmlkICsgXCInIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBUeXBlIChcIiArIHNlbGYudHlwZS5uYW1lICsgXCIpXCIpO1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBbSW50ZXJuYWxdIEdldHMgdGhlIGRlY29kZWQgcmVwcmVzZW50YXRpb24gb2YgYSB2YWx1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCwgb3RoZXJ3aXNlLCByZXR1cm5zIHRoZVxuICAgICAqIGRlZmF1bHQgdmFsdWUsIHdoaWNoIG1heSBiZSB0aGUgcmVzdWx0IG9mIGFuIGluamVjdGFibGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gJHZhbHVlKHZhbHVlKSB7XG4gICAgICBmdW5jdGlvbiBoYXNSZXBsYWNlVmFsKHZhbCkgeyByZXR1cm4gZnVuY3Rpb24ob2JqKSB7IHJldHVybiBvYmouZnJvbSA9PT0gdmFsOyB9OyB9XG4gICAgICBmdW5jdGlvbiAkcmVwbGFjZSh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBtYXAoZmlsdGVyKHNlbGYucmVwbGFjZSwgaGFzUmVwbGFjZVZhbCh2YWx1ZSkpLCBmdW5jdGlvbihvYmopIHsgcmV0dXJuIG9iai50bzsgfSk7XG4gICAgICAgIHJldHVybiByZXBsYWNlbWVudC5sZW5ndGggPyByZXBsYWNlbWVudFswXSA6IHZhbHVlO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSAkcmVwbGFjZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gIWlzRGVmaW5lZCh2YWx1ZSkgPyAkJGdldERlZmF1bHRWYWx1ZSgpIDogc2VsZi50eXBlLiRub3JtYWxpemUodmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKCkgeyByZXR1cm4gXCJ7UGFyYW06XCIgKyBpZCArIFwiIFwiICsgdHlwZSArIFwiIHNxdWFzaDogJ1wiICsgc3F1YXNoICsgXCInIG9wdGlvbmFsOiBcIiArIGlzT3B0aW9uYWwgKyBcIn1cIjsgfVxuXG4gICAgZXh0ZW5kKHRoaXMsIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBhcnJheTogYXJyYXlNb2RlLFxuICAgICAgc3F1YXNoOiBzcXVhc2gsXG4gICAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgICAgaXNPcHRpb25hbDogaXNPcHRpb25hbCxcbiAgICAgIHZhbHVlOiAkdmFsdWUsXG4gICAgICBkeW5hbWljOiB1bmRlZmluZWQsXG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIHRvU3RyaW5nOiB0b1N0cmluZ1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFBhcmFtU2V0KHBhcmFtcykge1xuICAgIGV4dGVuZCh0aGlzLCBwYXJhbXMgfHwge30pO1xuICB9XG5cbiAgUGFyYW1TZXQucHJvdG90eXBlID0ge1xuICAgICQkbmV3OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbmhlcml0KHRoaXMsIGV4dGVuZChuZXcgUGFyYW1TZXQoKSwgeyAkJHBhcmVudDogdGhpc30pKTtcbiAgICB9LFxuICAgICQka2V5czogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGtleXMgPSBbXSwgY2hhaW4gPSBbXSwgcGFyZW50ID0gdGhpcyxcbiAgICAgICAgaWdub3JlID0gb2JqZWN0S2V5cyhQYXJhbVNldC5wcm90b3R5cGUpO1xuICAgICAgd2hpbGUgKHBhcmVudCkgeyBjaGFpbi5wdXNoKHBhcmVudCk7IHBhcmVudCA9IHBhcmVudC4kJHBhcmVudDsgfVxuICAgICAgY2hhaW4ucmV2ZXJzZSgpO1xuICAgICAgZm9yRWFjaChjaGFpbiwgZnVuY3Rpb24ocGFyYW1zZXQpIHtcbiAgICAgICAgZm9yRWFjaChvYmplY3RLZXlzKHBhcmFtc2V0KSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhPZihrZXlzLCBrZXkpID09PSAtMSAmJiBpbmRleE9mKGlnbm9yZSwga2V5KSA9PT0gLTEpIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGtleXM7XG4gICAgfSxcbiAgICAkJHZhbHVlczogZnVuY3Rpb24ocGFyYW1WYWx1ZXMpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSB7fSwgc2VsZiA9IHRoaXM7XG4gICAgICBmb3JFYWNoKHNlbGYuJCRrZXlzKCksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YWx1ZXNba2V5XSA9IHNlbGZba2V5XS52YWx1ZShwYXJhbVZhbHVlcyAmJiBwYXJhbVZhbHVlc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9LFxuICAgICQkZXF1YWxzOiBmdW5jdGlvbihwYXJhbVZhbHVlczEsIHBhcmFtVmFsdWVzMikge1xuICAgICAgdmFyIGVxdWFsID0gdHJ1ZSwgc2VsZiA9IHRoaXM7XG4gICAgICBmb3JFYWNoKHNlbGYuJCRrZXlzKCksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgbGVmdCA9IHBhcmFtVmFsdWVzMSAmJiBwYXJhbVZhbHVlczFba2V5XSwgcmlnaHQgPSBwYXJhbVZhbHVlczIgJiYgcGFyYW1WYWx1ZXMyW2tleV07XG4gICAgICAgIGlmICghc2VsZltrZXldLnR5cGUuZXF1YWxzKGxlZnQsIHJpZ2h0KSkgZXF1YWwgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGVxdWFsO1xuICAgIH0sXG4gICAgJCR2YWxpZGF0ZXM6IGZ1bmN0aW9uICQkdmFsaWRhdGUocGFyYW1WYWx1ZXMpIHtcbiAgICAgIHZhciBrZXlzID0gdGhpcy4kJGtleXMoKSwgaSwgcGFyYW0sIHJhd1ZhbCwgbm9ybWFsaXplZCwgZW5jb2RlZDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcmFtID0gdGhpc1trZXlzW2ldXTtcbiAgICAgICAgcmF3VmFsID0gcGFyYW1WYWx1ZXNba2V5c1tpXV07XG4gICAgICAgIGlmICgocmF3VmFsID09PSB1bmRlZmluZWQgfHwgcmF3VmFsID09PSBudWxsKSAmJiBwYXJhbS5pc09wdGlvbmFsKVxuICAgICAgICAgIGJyZWFrOyAvLyBUaGVyZSB3YXMgbm8gcGFyYW1ldGVyIHZhbHVlLCBidXQgdGhlIHBhcmFtIGlzIG9wdGlvbmFsXG4gICAgICAgIG5vcm1hbGl6ZWQgPSBwYXJhbS50eXBlLiRub3JtYWxpemUocmF3VmFsKTtcbiAgICAgICAgaWYgKCFwYXJhbS50eXBlLmlzKG5vcm1hbGl6ZWQpKVxuICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gVGhlIHZhbHVlIHdhcyBub3Qgb2YgdGhlIGNvcnJlY3QgVHlwZSwgYW5kIGNvdWxkIG5vdCBiZSBkZWNvZGVkIHRvIHRoZSBjb3JyZWN0IFR5cGVcbiAgICAgICAgZW5jb2RlZCA9IHBhcmFtLnR5cGUuZW5jb2RlKG5vcm1hbGl6ZWQpO1xuICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhlbmNvZGVkKSAmJiAhcGFyYW0udHlwZS5wYXR0ZXJuLmV4ZWMoZW5jb2RlZCkpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBUaGUgdmFsdWUgd2FzIG9mIHRoZSBjb3JyZWN0IHR5cGUsIGJ1dCB3aGVuIGVuY29kZWQsIGRpZCBub3QgbWF0Y2ggdGhlIFR5cGUncyByZWdleHBcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgJCRwYXJlbnQ6IHVuZGVmaW5lZFxuICB9O1xuXG4gIHRoaXMuUGFyYW1TZXQgPSBQYXJhbVNldDtcbn1cblxuLy8gUmVnaXN0ZXIgYXMgYSBwcm92aWRlciBzbyBpdCdzIGF2YWlsYWJsZSB0byBvdGhlciBwcm92aWRlcnNcbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIudXRpbCcpLnByb3ZpZGVyKCckdXJsTWF0Y2hlckZhY3RvcnknLCAkVXJsTWF0Y2hlckZhY3RvcnkpO1xuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci51dGlsJykucnVuKFsnJHVybE1hdGNoZXJGYWN0b3J5JywgZnVuY3Rpb24oJHVybE1hdGNoZXJGYWN0b3J5KSB7IH1dKTtcblxuLyoqXG4gKiBAbmdkb2Mgb2JqZWN0XG4gKiBAbmFtZSB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJQcm92aWRlclxuICpcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIudXRpbC4kdXJsTWF0Y2hlckZhY3RvcnlQcm92aWRlclxuICogQHJlcXVpcmVzICRsb2NhdGlvblByb3ZpZGVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBgJHVybFJvdXRlclByb3ZpZGVyYCBoYXMgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHdhdGNoaW5nIGAkbG9jYXRpb25gLiBcbiAqIFdoZW4gYCRsb2NhdGlvbmAgY2hhbmdlcyBpdCBydW5zIHRocm91Z2ggYSBsaXN0IG9mIHJ1bGVzIG9uZSBieSBvbmUgdW50aWwgYSBcbiAqIG1hdGNoIGlzIGZvdW5kLiBgJHVybFJvdXRlclByb3ZpZGVyYCBpcyB1c2VkIGJlaGluZCB0aGUgc2NlbmVzIGFueXRpbWUgeW91IHNwZWNpZnkgXG4gKiBhIHVybCBpbiBhIHN0YXRlIGNvbmZpZ3VyYXRpb24uIEFsbCB1cmxzIGFyZSBjb21waWxlZCBpbnRvIGEgVXJsTWF0Y2hlciBvYmplY3QuXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgbWV0aG9kcyBvbiBgJHVybFJvdXRlclByb3ZpZGVyYCB0aGF0IG1ha2UgaXQgdXNlZnVsIHRvIHVzZSBkaXJlY3RseVxuICogaW4geW91ciBtb2R1bGUgY29uZmlnLlxuICovXG4kVXJsUm91dGVyUHJvdmlkZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uUHJvdmlkZXInLCAnJHVybE1hdGNoZXJGYWN0b3J5UHJvdmlkZXInXTtcbmZ1bmN0aW9uICRVcmxSb3V0ZXJQcm92aWRlciggICAkbG9jYXRpb25Qcm92aWRlciwgICAkdXJsTWF0Y2hlckZhY3RvcnkpIHtcbiAgdmFyIHJ1bGVzID0gW10sIG90aGVyd2lzZSA9IG51bGwsIGludGVyY2VwdERlZmVycmVkID0gZmFsc2UsIGxpc3RlbmVyO1xuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBhIHByZWZpeCBvZiBhbGwgc3RyaW5ncyBtYXRjaGluZyB0aGUgUmVnRXhwXG4gIGZ1bmN0aW9uIHJlZ0V4cFByZWZpeChyZSkge1xuICAgIHZhciBwcmVmaXggPSAvXlxcXigoPzpcXFxcW15hLXpBLVowLTldfFteXFxcXFxcW1xcXVxcXiQqKz8uKCl8e31dKykqKS8uZXhlYyhyZS5zb3VyY2UpO1xuICAgIHJldHVybiAocHJlZml4ICE9IG51bGwpID8gcHJlZml4WzFdLnJlcGxhY2UoL1xcXFwoLikvZywgXCIkMVwiKSA6ICcnO1xuICB9XG5cbiAgLy8gSW50ZXJwb2xhdGVzIG1hdGNoZWQgdmFsdWVzIGludG8gYSBTdHJpbmcucmVwbGFjZSgpLXN0eWxlIHBhdHRlcm5cbiAgZnVuY3Rpb24gaW50ZXJwb2xhdGUocGF0dGVybiwgbWF0Y2gpIHtcbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKC9cXCQoXFwkfFxcZHsxLDJ9KS8sIGZ1bmN0aW9uIChtLCB3aGF0KSB7XG4gICAgICByZXR1cm4gbWF0Y2hbd2hhdCA9PT0gJyQnID8gMCA6IE51bWJlcih3aGF0KV07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclByb3ZpZGVyI3J1bGVcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclByb3ZpZGVyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBEZWZpbmVzIHJ1bGVzIHRoYXQgYXJlIHVzZWQgYnkgYCR1cmxSb3V0ZXJQcm92aWRlcmAgdG8gZmluZCBtYXRjaGVzIGZvclxuICAgKiBzcGVjaWZpYyBVUkxzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8cHJlPlxuICAgKiB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyLnJvdXRlciddKTtcbiAgICpcbiAgICogYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAqICAgLy8gSGVyZSdzIGFuIGV4YW1wbGUgb2YgaG93IHlvdSBtaWdodCBhbGxvdyBjYXNlIGluc2Vuc2l0aXZlIHVybHNcbiAgICogICAkdXJsUm91dGVyUHJvdmlkZXIucnVsZShmdW5jdGlvbiAoJGluamVjdG9yLCAkbG9jYXRpb24pIHtcbiAgICogICAgIHZhciBwYXRoID0gJGxvY2F0aW9uLnBhdGgoKSxcbiAgICogICAgICAgICBub3JtYWxpemVkID0gcGF0aC50b0xvd2VyQ2FzZSgpO1xuICAgKlxuICAgKiAgICAgaWYgKHBhdGggIT09IG5vcm1hbGl6ZWQpIHtcbiAgICogICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gICAqICAgICB9XG4gICAqICAgfSk7XG4gICAqIH0pO1xuICAgKiA8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gcnVsZSBIYW5kbGVyIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYCRpbmplY3RvcmAgYW5kIGAkbG9jYXRpb25gXG4gICAqIHNlcnZpY2VzIGFzIGFyZ3VtZW50cy4gWW91IGNhbiB1c2UgdGhlbSB0byByZXR1cm4gYSB2YWxpZCBwYXRoIGFzIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IGAkdXJsUm91dGVyUHJvdmlkZXJgIC0gYCR1cmxSb3V0ZXJQcm92aWRlcmAgaW5zdGFuY2VcbiAgICovXG4gIHRoaXMucnVsZSA9IGZ1bmN0aW9uIChydWxlKSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKHJ1bGUpKSB0aHJvdyBuZXcgRXJyb3IoXCIncnVsZScgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIHJ1bGVzLnB1c2gocnVsZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBvYmplY3RcbiAgICogQG5hbWUgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyUHJvdmlkZXIjb3RoZXJ3aXNlXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJQcm92aWRlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRGVmaW5lcyBhIHBhdGggdGhhdCBpcyB1c2VkIHdoZW4gYW4gaW52YWxpZCByb3V0ZSBpcyByZXF1ZXN0ZWQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDxwcmU+XG4gICAqIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXIucm91dGVyJ10pO1xuICAgKlxuICAgKiBhcHAuY29uZmlnKGZ1bmN0aW9uICgkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICogICAvLyBpZiB0aGUgcGF0aCBkb2Vzbid0IG1hdGNoIGFueSBvZiB0aGUgdXJscyB5b3UgY29uZmlndXJlZFxuICAgKiAgIC8vIG90aGVyd2lzZSB3aWxsIHRha2UgY2FyZSBvZiByb3V0aW5nIHRoZSB1c2VyIHRvIHRoZVxuICAgKiAgIC8vIHNwZWNpZmllZCB1cmxcbiAgICogICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaW5kZXgnKTtcbiAgICpcbiAgICogICAvLyBFeGFtcGxlIG9mIHVzaW5nIGZ1bmN0aW9uIHJ1bGUgYXMgcGFyYW1cbiAgICogICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKGZ1bmN0aW9uICgkaW5qZWN0b3IsICRsb2NhdGlvbikge1xuICAgKiAgICAgcmV0dXJuICcvYS92YWxpZC91cmwnO1xuICAgKiAgIH0pO1xuICAgKiB9KTtcbiAgICogPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBydWxlIFRoZSB1cmwgcGF0aCB5b3Ugd2FudCB0byByZWRpcmVjdCB0byBvciBhIGZ1bmN0aW9uIFxuICAgKiBydWxlIHRoYXQgcmV0dXJucyB0aGUgdXJsIHBhdGguIFRoZSBmdW5jdGlvbiB2ZXJzaW9uIGlzIHBhc3NlZCB0d28gcGFyYW1zOiBcbiAgICogYCRpbmplY3RvcmAgYW5kIGAkbG9jYXRpb25gIHNlcnZpY2VzLCBhbmQgbXVzdCByZXR1cm4gYSB1cmwgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IGAkdXJsUm91dGVyUHJvdmlkZXJgIC0gYCR1cmxSb3V0ZXJQcm92aWRlcmAgaW5zdGFuY2VcbiAgICovXG4gIHRoaXMub3RoZXJ3aXNlID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBpZiAoaXNTdHJpbmcocnVsZSkpIHtcbiAgICAgIHZhciByZWRpcmVjdCA9IHJ1bGU7XG4gICAgICBydWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVkaXJlY3Q7IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc0Z1bmN0aW9uKHJ1bGUpKSB0aHJvdyBuZXcgRXJyb3IoXCIncnVsZScgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIG90aGVyd2lzZSA9IHJ1bGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICBmdW5jdGlvbiBoYW5kbGVJZk1hdGNoKCRpbmplY3RvciwgaGFuZGxlciwgbWF0Y2gpIHtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHJlc3VsdCA9ICRpbmplY3Rvci5pbnZva2UoaGFuZGxlciwgaGFuZGxlciwgeyAkbWF0Y2g6IG1hdGNoIH0pO1xuICAgIHJldHVybiBpc0RlZmluZWQocmVzdWx0KSA/IHJlc3VsdCA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQG5nZG9jIGZ1bmN0aW9uXG4gICAqIEBuYW1lIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclByb3ZpZGVyI3doZW5cbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5yb3V0ZXIuJHVybFJvdXRlclByb3ZpZGVyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciBhIGdpdmVuIHVybCBtYXRjaGluZy4gXG4gICAqIFxuICAgKiBJZiB0aGUgaGFuZGxlciBpcyBhIHN0cmluZywgaXQgaXNcbiAgICogdHJlYXRlZCBhcyBhIHJlZGlyZWN0LCBhbmQgaXMgaW50ZXJwb2xhdGVkIGFjY29yZGluZyB0byB0aGUgc3ludGF4IG9mIG1hdGNoXG4gICAqIChpLmUuIGxpa2UgYFN0cmluZy5yZXBsYWNlKClgIGZvciBgUmVnRXhwYCwgb3IgbGlrZSBhIGBVcmxNYXRjaGVyYCBwYXR0ZXJuIG90aGVyd2lzZSkuXG4gICAqXG4gICAqIElmIHRoZSBoYW5kbGVyIGlzIGEgZnVuY3Rpb24sIGl0IGlzIGluamVjdGFibGUuIEl0IGdldHMgaW52b2tlZCBpZiBgJGxvY2F0aW9uYFxuICAgKiBtYXRjaGVzLiBZb3UgaGF2ZSB0aGUgb3B0aW9uIG9mIGluamVjdCB0aGUgbWF0Y2ggb2JqZWN0IGFzIGAkbWF0Y2hgLlxuICAgKlxuICAgKiBUaGUgaGFuZGxlciBjYW4gcmV0dXJuXG4gICAqXG4gICAqIC0gKipmYWxzeSoqIHRvIGluZGljYXRlIHRoYXQgdGhlIHJ1bGUgZGlkbid0IG1hdGNoIGFmdGVyIGFsbCwgdGhlbiBgJHVybFJvdXRlcmBcbiAgICogICB3aWxsIGNvbnRpbnVlIHRyeWluZyB0byBmaW5kIGFub3RoZXIgb25lIHRoYXQgbWF0Y2hlcy5cbiAgICogLSAqKnN0cmluZyoqIHdoaWNoIGlzIHRyZWF0ZWQgYXMgYSByZWRpcmVjdCBhbmQgcGFzc2VkIHRvIGAkbG9jYXRpb24udXJsKClgXG4gICAqIC0gKip2b2lkKiogb3IgYW55ICoqdHJ1dGh5KiogdmFsdWUgdGVsbHMgYCR1cmxSb3V0ZXJgIHRoYXQgdGhlIHVybCB3YXMgaGFuZGxlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPHByZT5cbiAgICogdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlci5yb3V0ZXInXSk7XG4gICAqXG4gICAqIGFwcC5jb25maWcoZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgKiAgICR1cmxSb3V0ZXJQcm92aWRlci53aGVuKCRzdGF0ZS51cmwsIGZ1bmN0aW9uICgkbWF0Y2gsICRzdGF0ZVBhcmFtcykge1xuICAgKiAgICAgaWYgKCRzdGF0ZS4kY3VycmVudC5uYXZpZ2FibGUgIT09IHN0YXRlIHx8XG4gICAqICAgICAgICAgIWVxdWFsRm9yS2V5cygkbWF0Y2gsICRzdGF0ZVBhcmFtcykge1xuICAgKiAgICAgICRzdGF0ZS50cmFuc2l0aW9uVG8oc3RhdGUsICRtYXRjaCwgZmFsc2UpO1xuICAgKiAgICAgfVxuICAgKiAgIH0pO1xuICAgKiB9KTtcbiAgICogPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gd2hhdCBUaGUgaW5jb21pbmcgcGF0aCB0aGF0IHlvdSB3YW50IHRvIHJlZGlyZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gaGFuZGxlciBUaGUgcGF0aCB5b3Ugd2FudCB0byByZWRpcmVjdCB5b3VyIHVzZXIgdG8uXG4gICAqL1xuICB0aGlzLndoZW4gPSBmdW5jdGlvbiAod2hhdCwgaGFuZGxlcikge1xuICAgIHZhciByZWRpcmVjdCwgaGFuZGxlcklzU3RyaW5nID0gaXNTdHJpbmcoaGFuZGxlcik7XG4gICAgaWYgKGlzU3RyaW5nKHdoYXQpKSB3aGF0ID0gJHVybE1hdGNoZXJGYWN0b3J5LmNvbXBpbGUod2hhdCk7XG5cbiAgICBpZiAoIWhhbmRsZXJJc1N0cmluZyAmJiAhaXNGdW5jdGlvbihoYW5kbGVyKSAmJiAhaXNBcnJheShoYW5kbGVyKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgJ2hhbmRsZXInIGluIHdoZW4oKVwiKTtcblxuICAgIHZhciBzdHJhdGVnaWVzID0ge1xuICAgICAgbWF0Y2hlcjogZnVuY3Rpb24gKHdoYXQsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKGhhbmRsZXJJc1N0cmluZykge1xuICAgICAgICAgIHJlZGlyZWN0ID0gJHVybE1hdGNoZXJGYWN0b3J5LmNvbXBpbGUoaGFuZGxlcik7XG4gICAgICAgICAgaGFuZGxlciA9IFsnJG1hdGNoJywgZnVuY3Rpb24gKCRtYXRjaCkgeyByZXR1cm4gcmVkaXJlY3QuZm9ybWF0KCRtYXRjaCk7IH1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHRlbmQoZnVuY3Rpb24gKCRpbmplY3RvciwgJGxvY2F0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUlmTWF0Y2goJGluamVjdG9yLCBoYW5kbGVyLCB3aGF0LmV4ZWMoJGxvY2F0aW9uLnBhdGgoKSwgJGxvY2F0aW9uLnNlYXJjaCgpKSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwcmVmaXg6IGlzU3RyaW5nKHdoYXQucHJlZml4KSA/IHdoYXQucHJlZml4IDogJydcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVnZXg6IGZ1bmN0aW9uICh3aGF0LCBoYW5kbGVyKSB7XG4gICAgICAgIGlmICh3aGF0Lmdsb2JhbCB8fCB3aGF0LnN0aWNreSkgdGhyb3cgbmV3IEVycm9yKFwid2hlbigpIFJlZ0V4cCBtdXN0IG5vdCBiZSBnbG9iYWwgb3Igc3RpY2t5XCIpO1xuXG4gICAgICAgIGlmIChoYW5kbGVySXNTdHJpbmcpIHtcbiAgICAgICAgICByZWRpcmVjdCA9IGhhbmRsZXI7XG4gICAgICAgICAgaGFuZGxlciA9IFsnJG1hdGNoJywgZnVuY3Rpb24gKCRtYXRjaCkgeyByZXR1cm4gaW50ZXJwb2xhdGUocmVkaXJlY3QsICRtYXRjaCk7IH1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHRlbmQoZnVuY3Rpb24gKCRpbmplY3RvciwgJGxvY2F0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUlmTWF0Y2goJGluamVjdG9yLCBoYW5kbGVyLCB3aGF0LmV4ZWMoJGxvY2F0aW9uLnBhdGgoKSkpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcHJlZml4OiByZWdFeHBQcmVmaXgod2hhdClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBjaGVjayA9IHsgbWF0Y2hlcjogJHVybE1hdGNoZXJGYWN0b3J5LmlzTWF0Y2hlcih3aGF0KSwgcmVnZXg6IHdoYXQgaW5zdGFuY2VvZiBSZWdFeHAgfTtcblxuICAgIGZvciAodmFyIG4gaW4gY2hlY2spIHtcbiAgICAgIGlmIChjaGVja1tuXSkgcmV0dXJuIHRoaXMucnVsZShzdHJhdGVnaWVzW25dKHdoYXQsIGhhbmRsZXIpKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkICd3aGF0JyBpbiB3aGVuKClcIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJQcm92aWRlciNkZWZlckludGVyY2VwdFxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyUHJvdmlkZXJcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIERpc2FibGVzIChvciBlbmFibGVzKSBkZWZlcnJpbmcgbG9jYXRpb24gY2hhbmdlIGludGVyY2VwdGlvbi5cbiAgICpcbiAgICogSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIHRoZSBiZWhhdmlvciBvZiBzeW5jaW5nIHRoZSBVUkwgKGZvciBleGFtcGxlLCBpZiB5b3Ugd2lzaCB0b1xuICAgKiBkZWZlciBhIHRyYW5zaXRpb24gYnV0IG1haW50YWluIHRoZSBjdXJyZW50IFVSTCksIGNhbGwgdGhpcyBtZXRob2QgYXQgY29uZmlndXJhdGlvbiB0aW1lLlxuICAgKiBUaGVuLCBhdCBydW4gdGltZSwgY2FsbCBgJHVybFJvdXRlci5saXN0ZW4oKWAgYWZ0ZXIgeW91IGhhdmUgY29uZmlndXJlZCB5b3VyIG93blxuICAgKiBgJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc2AgZXZlbnQgaGFuZGxlci5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPHByZT5cbiAgICogdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlci5yb3V0ZXInXSk7XG4gICAqXG4gICAqIGFwcC5jb25maWcoZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgKlxuICAgKiAgIC8vIFByZXZlbnQgJHVybFJvdXRlciBmcm9tIGF1dG9tYXRpY2FsbHkgaW50ZXJjZXB0aW5nIFVSTCBjaGFuZ2VzO1xuICAgKiAgIC8vIHRoaXMgYWxsb3dzIHlvdSB0byBjb25maWd1cmUgY3VzdG9tIGJlaGF2aW9yIGluIGJldHdlZW5cbiAgICogICAvLyBsb2NhdGlvbiBjaGFuZ2VzIGFuZCByb3V0ZSBzeW5jaHJvbml6YXRpb246XG4gICAqICAgJHVybFJvdXRlclByb3ZpZGVyLmRlZmVySW50ZXJjZXB0KCk7XG4gICAqXG4gICAqIH0pLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHVybFJvdXRlciwgVXNlclNlcnZpY2UpIHtcbiAgICpcbiAgICogICAkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICogICAgIC8vIFVzZXJTZXJ2aWNlIGlzIGFuIGV4YW1wbGUgc2VydmljZSBmb3IgbWFuYWdpbmcgdXNlciBzdGF0ZVxuICAgKiAgICAgaWYgKFVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkgcmV0dXJuO1xuICAgKlxuICAgKiAgICAgLy8gUHJldmVudCAkdXJsUm91dGVyJ3MgZGVmYXVsdCBoYW5kbGVyIGZyb20gZmlyaW5nXG4gICAqICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAqXG4gICAqICAgICBVc2VyU2VydmljZS5oYW5kbGVMb2dpbigpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAqICAgICAgIC8vIE9uY2UgdGhlIHVzZXIgaGFzIGxvZ2dlZCBpbiwgc3luYyB0aGUgY3VycmVudCBVUkxcbiAgICogICAgICAgLy8gdG8gdGhlIHJvdXRlcjpcbiAgICogICAgICAgJHVybFJvdXRlci5zeW5jKCk7XG4gICAqICAgICB9KTtcbiAgICogICB9KTtcbiAgICpcbiAgICogICAvLyBDb25maWd1cmVzICR1cmxSb3V0ZXIncyBsaXN0ZW5lciAqYWZ0ZXIqIHlvdXIgY3VzdG9tIGxpc3RlbmVyXG4gICAqICAgJHVybFJvdXRlci5saXN0ZW4oKTtcbiAgICogfSk7XG4gICAqIDwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZmVyIEluZGljYXRlcyB3aGV0aGVyIHRvIGRlZmVyIGxvY2F0aW9uIGNoYW5nZSBpbnRlcmNlcHRpb24uIFBhc3NpbmdcbiAgICAgICAgICAgIG5vIHBhcmFtZXRlciBpcyBlcXVpdmFsZW50IHRvIGB0cnVlYC5cbiAgICovXG4gIHRoaXMuZGVmZXJJbnRlcmNlcHQgPSBmdW5jdGlvbiAoZGVmZXIpIHtcbiAgICBpZiAoZGVmZXIgPT09IHVuZGVmaW5lZCkgZGVmZXIgPSB0cnVlO1xuICAgIGludGVyY2VwdERlZmVycmVkID0gZGVmZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBvYmplY3RcbiAgICogQG5hbWUgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyXG4gICAqXG4gICAqIEByZXF1aXJlcyAkbG9jYXRpb25cbiAgICogQHJlcXVpcmVzICRyb290U2NvcGVcbiAgICogQHJlcXVpcmVzICRpbmplY3RvclxuICAgKiBAcmVxdWlyZXMgJGJyb3dzZXJcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqXG4gICAqL1xuICB0aGlzLiRnZXQgPSAkZ2V0O1xuICAkZ2V0LiRpbmplY3QgPSBbJyRsb2NhdGlvbicsICckcm9vdFNjb3BlJywgJyRpbmplY3RvcicsICckYnJvd3NlcicsICckc25pZmZlciddO1xuICBmdW5jdGlvbiAkZ2V0KCAgICRsb2NhdGlvbiwgICAkcm9vdFNjb3BlLCAgICRpbmplY3RvciwgICAkYnJvd3NlciwgICAkc25pZmZlcikge1xuXG4gICAgdmFyIGJhc2VIcmVmID0gJGJyb3dzZXIuYmFzZUhyZWYoKSwgbG9jYXRpb24gPSAkbG9jYXRpb24udXJsKCksIGxhc3RQdXNoZWRVcmw7XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRCYXNlUGF0aCh1cmwsIGlzSHRtbDUsIGFic29sdXRlKSB7XG4gICAgICBpZiAoYmFzZUhyZWYgPT09ICcvJykgcmV0dXJuIHVybDtcbiAgICAgIGlmIChpc0h0bWw1KSByZXR1cm4gYmFzZUhyZWYuc2xpY2UoMCwgLTEpICsgdXJsO1xuICAgICAgaWYgKGFic29sdXRlKSByZXR1cm4gYmFzZUhyZWYuc2xpY2UoMSkgKyB1cmw7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8vIFRPRE86IE9wdGltaXplIGdyb3VwcyBvZiBydWxlcyB3aXRoIG5vbi1lbXB0eSBwcmVmaXggaW50byBzb21lIHNvcnQgb2YgZGVjaXNpb24gdHJlZVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShldnQpIHtcbiAgICAgIGlmIChldnQgJiYgZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHJldHVybjtcbiAgICAgIHZhciBpZ25vcmVVcGRhdGUgPSBsYXN0UHVzaGVkVXJsICYmICRsb2NhdGlvbi51cmwoKSA9PT0gbGFzdFB1c2hlZFVybDtcbiAgICAgIGxhc3RQdXNoZWRVcmwgPSB1bmRlZmluZWQ7XG4gICAgICAvLyBUT0RPOiBSZS1pbXBsZW1lbnQgdGhpcyBpbiAxLjAgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvMTU3M1xuICAgICAgLy9pZiAoaWdub3JlVXBkYXRlKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgZnVuY3Rpb24gY2hlY2socnVsZSkge1xuICAgICAgICB2YXIgaGFuZGxlZCA9IHJ1bGUoJGluamVjdG9yLCAkbG9jYXRpb24pO1xuXG4gICAgICAgIGlmICghaGFuZGxlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoaXNTdHJpbmcoaGFuZGxlZCkpICRsb2NhdGlvbi5yZXBsYWNlKCkudXJsKGhhbmRsZWQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gcnVsZXMubGVuZ3RoLCBpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGlmIChjaGVjayhydWxlc1tpXSkpIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGFsd2F5cyBjaGVjayBvdGhlcndpc2UgbGFzdCB0byBhbGxvdyBkeW5hbWljIHVwZGF0ZXMgdG8gdGhlIHNldCBvZiBydWxlc1xuICAgICAgaWYgKG90aGVyd2lzZSkgY2hlY2sob3RoZXJ3aXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyIHx8ICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgdXBkYXRlKTtcbiAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBpZiAoIWludGVyY2VwdERlZmVycmVkKSBsaXN0ZW4oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAgICogQG5hbWUgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyI3N5bmNcbiAgICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFRyaWdnZXJzIGFuIHVwZGF0ZTsgdGhlIHNhbWUgdXBkYXRlIHRoYXQgaGFwcGVucyB3aGVuIHRoZSBhZGRyZXNzIGJhciB1cmwgY2hhbmdlcywgYWthIGAkbG9jYXRpb25DaGFuZ2VTdWNjZXNzYC5cbiAgICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWZ1bCB3aGVuIHlvdSBuZWVkIHRvIHVzZSBgcHJldmVudERlZmF1bHQoKWAgb24gdGhlIGAkbG9jYXRpb25DaGFuZ2VTdWNjZXNzYCBldmVudCxcbiAgICAgICAqIHBlcmZvcm0gc29tZSBjdXN0b20gbG9naWMgKHJvdXRlIHByb3RlY3Rpb24sIGF1dGgsIGNvbmZpZywgcmVkaXJlY3Rpb24sIGV0YykgYW5kIHRoZW4gZmluYWxseSBwcm9jZWVkXG4gICAgICAgKiB3aXRoIHRoZSB0cmFuc2l0aW9uIGJ5IGNhbGxpbmcgYCR1cmxSb3V0ZXIuc3luYygpYC5cbiAgICAgICAqXG4gICAgICAgKiBAZXhhbXBsZVxuICAgICAgICogPHByZT5cbiAgICAgICAqIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlciddKVxuICAgICAgICogICAucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICR1cmxSb3V0ZXIpIHtcbiAgICAgICAqICAgICAkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICogICAgICAgLy8gSGFsdCBzdGF0ZSBjaGFuZ2UgZnJvbSBldmVuIHN0YXJ0aW5nXG4gICAgICAgKiAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAqICAgICAgIC8vIFBlcmZvcm0gY3VzdG9tIGxvZ2ljXG4gICAgICAgKiAgICAgICB2YXIgbWVldHNSZXF1aXJlbWVudCA9IC4uLlxuICAgICAgICogICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgdXBkYXRlIGFuZCBzdGF0ZSB0cmFuc2l0aW9uIGlmIGxvZ2ljIGFsbG93c1xuICAgICAgICogICAgICAgaWYgKG1lZXRzUmVxdWlyZW1lbnQpICR1cmxSb3V0ZXIuc3luYygpO1xuICAgICAgICogICAgIH0pO1xuICAgICAgICogfSk7XG4gICAgICAgKiA8L3ByZT5cbiAgICAgICAqL1xuICAgICAgc3luYzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZSgpO1xuICAgICAgfSxcblxuICAgICAgbGlzdGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbigpO1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlOiBmdW5jdGlvbihyZWFkKSB7XG4gICAgICAgIGlmIChyZWFkKSB7XG4gICAgICAgICAgbG9jYXRpb24gPSAkbG9jYXRpb24udXJsKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkbG9jYXRpb24udXJsKCkgPT09IGxvY2F0aW9uKSByZXR1cm47XG5cbiAgICAgICAgJGxvY2F0aW9uLnVybChsb2NhdGlvbik7XG4gICAgICAgICRsb2NhdGlvbi5yZXBsYWNlKCk7XG4gICAgICB9LFxuXG4gICAgICBwdXNoOiBmdW5jdGlvbih1cmxNYXRjaGVyLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICAgICAgIHZhciB1cmwgPSB1cmxNYXRjaGVyLmZvcm1hdChwYXJhbXMgfHwge30pO1xuXG4gICAgICAgIC8vIEhhbmRsZSB0aGUgc3BlY2lhbCBoYXNoIHBhcmFtLCBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiBwYXJhbXMgJiYgcGFyYW1zWycjJ10pIHtcbiAgICAgICAgICAgIHVybCArPSAnIycgKyBwYXJhbXNbJyMnXTtcbiAgICAgICAgfVxuXG4gICAgICAgICRsb2NhdGlvbi51cmwodXJsKTtcbiAgICAgICAgbGFzdFB1c2hlZFVybCA9IG9wdGlvbnMgJiYgb3B0aW9ucy4kJGF2b2lkUmVzeW5jID8gJGxvY2F0aW9uLnVybCgpIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlcGxhY2UpICRsb2NhdGlvbi5yZXBsYWNlKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAgICogQG5hbWUgdWkucm91dGVyLnJvdXRlci4kdXJsUm91dGVyI2hyZWZcbiAgICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIEEgVVJMIGdlbmVyYXRpb24gbWV0aG9kIHRoYXQgcmV0dXJucyB0aGUgY29tcGlsZWQgVVJMIGZvciBhIGdpdmVuXG4gICAgICAgKiB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyIGBVcmxNYXRjaGVyYH0sIHBvcHVsYXRlZCB3aXRoIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXJzLlxuICAgICAgICpcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKiA8cHJlPlxuICAgICAgICogJGJvYiA9ICR1cmxSb3V0ZXIuaHJlZihuZXcgVXJsTWF0Y2hlcihcIi9hYm91dC86cGVyc29uXCIpLCB7XG4gICAgICAgKiAgIHBlcnNvbjogXCJib2JcIlxuICAgICAgICogfSk7XG4gICAgICAgKiAvLyAkYm9iID09IFwiL2Fib3V0L2JvYlwiO1xuICAgICAgICogPC9wcmU+XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtVcmxNYXRjaGVyfSB1cmxNYXRjaGVyIFRoZSBgVXJsTWF0Y2hlcmAgb2JqZWN0IHdoaWNoIGlzIHVzZWQgYXMgdGhlIHRlbXBsYXRlIG9mIHRoZSBVUkwgdG8gZ2VuZXJhdGUuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdD19IHBhcmFtcyBBbiBvYmplY3Qgb2YgcGFyYW1ldGVyIHZhbHVlcyB0byBmaWxsIHRoZSBtYXRjaGVyJ3MgcmVxdWlyZWQgcGFyYW1ldGVycy5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0PX0gb3B0aW9ucyBPcHRpb25zIG9iamVjdC4gVGhlIG9wdGlvbnMgYXJlOlxuICAgICAgICpcbiAgICAgICAqIC0gKipgYWJzb2x1dGVgKiogLSB7Ym9vbGVhbj1mYWxzZX0sICBJZiB0cnVlIHdpbGwgZ2VuZXJhdGUgYW4gYWJzb2x1dGUgdXJsLCBlLmcuIFwiaHR0cDovL3d3dy5leGFtcGxlLmNvbS9mdWxsdXJsXCIuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZnVsbHkgY29tcGlsZWQgVVJMLCBvciBgbnVsbGAgaWYgYHBhcmFtc2AgZmFpbCB2YWxpZGF0aW9uIGFnYWluc3QgYHVybE1hdGNoZXJgXG4gICAgICAgKi9cbiAgICAgIGhyZWY6IGZ1bmN0aW9uKHVybE1hdGNoZXIsIHBhcmFtcywgb3B0aW9ucykge1xuICAgICAgICBpZiAoIXVybE1hdGNoZXIudmFsaWRhdGVzKHBhcmFtcykpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHZhciBpc0h0bWw1ID0gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKCk7XG4gICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGlzSHRtbDUpKSB7XG4gICAgICAgICAgaXNIdG1sNSA9IGlzSHRtbDUuZW5hYmxlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzSHRtbDUgPSBpc0h0bWw1ICYmICRzbmlmZmVyLmhpc3Rvcnk7XG4gICAgICAgIFxuICAgICAgICB2YXIgdXJsID0gdXJsTWF0Y2hlci5mb3JtYXQocGFyYW1zKTtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgaWYgKCFpc0h0bWw1ICYmIHVybCAhPT0gbnVsbCkge1xuICAgICAgICAgIHVybCA9IFwiI1wiICsgJGxvY2F0aW9uUHJvdmlkZXIuaGFzaFByZWZpeCgpICsgdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgaGFzaCBwYXJhbSwgaWYgbmVlZGVkXG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgcGFyYW1zICYmIHBhcmFtc1snIyddKSB7XG4gICAgICAgICAgdXJsICs9ICcjJyArIHBhcmFtc1snIyddO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsID0gYXBwZW5kQmFzZVBhdGgodXJsLCBpc0h0bWw1LCBvcHRpb25zLmFic29sdXRlKTtcblxuICAgICAgICBpZiAoIW9wdGlvbnMuYWJzb2x1dGUgfHwgIXVybCkge1xuICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2xhc2ggPSAoIWlzSHRtbDUgJiYgdXJsID8gJy8nIDogJycpLCBwb3J0ID0gJGxvY2F0aW9uLnBvcnQoKTtcbiAgICAgICAgcG9ydCA9IChwb3J0ID09PSA4MCB8fCBwb3J0ID09PSA0NDMgPyAnJyA6ICc6JyArIHBvcnQpO1xuXG4gICAgICAgIHJldHVybiBbJGxvY2F0aW9uLnByb3RvY29sKCksICc6Ly8nLCAkbG9jYXRpb24uaG9zdCgpLCBwb3J0LCBzbGFzaCwgdXJsXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIucm91dGVyJykucHJvdmlkZXIoJyR1cmxSb3V0ZXInLCAkVXJsUm91dGVyUHJvdmlkZXIpO1xuXG4vKipcbiAqIEBuZ2RvYyBvYmplY3RcbiAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQcm92aWRlclxuICpcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJQcm92aWRlclxuICogQHJlcXVpcmVzIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgbmV3IGAkc3RhdGVQcm92aWRlcmAgd29ya3Mgc2ltaWxhciB0byBBbmd1bGFyJ3MgdjEgcm91dGVyLCBidXQgaXQgZm9jdXNlcyBwdXJlbHlcbiAqIG9uIHN0YXRlLlxuICpcbiAqIEEgc3RhdGUgY29ycmVzcG9uZHMgdG8gYSBcInBsYWNlXCIgaW4gdGhlIGFwcGxpY2F0aW9uIGluIHRlcm1zIG9mIHRoZSBvdmVyYWxsIFVJIGFuZFxuICogbmF2aWdhdGlvbi4gQSBzdGF0ZSBkZXNjcmliZXMgKHZpYSB0aGUgY29udHJvbGxlciAvIHRlbXBsYXRlIC8gdmlldyBwcm9wZXJ0aWVzKSB3aGF0XG4gKiB0aGUgVUkgbG9va3MgbGlrZSBhbmQgZG9lcyBhdCB0aGF0IHBsYWNlLlxuICpcbiAqIFN0YXRlcyBvZnRlbiBoYXZlIHRoaW5ncyBpbiBjb21tb24sIGFuZCB0aGUgcHJpbWFyeSB3YXkgb2YgZmFjdG9yaW5nIG91dCB0aGVzZVxuICogY29tbW9uYWxpdGllcyBpbiB0aGlzIG1vZGVsIGlzIHZpYSB0aGUgc3RhdGUgaGllcmFyY2h5LCBpLmUuIHBhcmVudC9jaGlsZCBzdGF0ZXMgYWthXG4gKiBuZXN0ZWQgc3RhdGVzLlxuICpcbiAqIFRoZSBgJHN0YXRlUHJvdmlkZXJgIHByb3ZpZGVzIGludGVyZmFjZXMgdG8gZGVjbGFyZSB0aGVzZSBzdGF0ZXMgZm9yIHlvdXIgYXBwLlxuICovXG4kU3RhdGVQcm92aWRlci4kaW5qZWN0ID0gWyckdXJsUm91dGVyUHJvdmlkZXInLCAnJHVybE1hdGNoZXJGYWN0b3J5UHJvdmlkZXInXTtcbmZ1bmN0aW9uICRTdGF0ZVByb3ZpZGVyKCAgICR1cmxSb3V0ZXJQcm92aWRlciwgICAkdXJsTWF0Y2hlckZhY3RvcnkpIHtcblxuICB2YXIgcm9vdCwgc3RhdGVzID0ge30sICRzdGF0ZSwgcXVldWUgPSB7fSwgYWJzdHJhY3RLZXkgPSAnYWJzdHJhY3QnO1xuXG4gIC8vIEJ1aWxkcyBzdGF0ZSBwcm9wZXJ0aWVzIGZyb20gZGVmaW5pdGlvbiBwYXNzZWQgdG8gcmVnaXN0ZXJTdGF0ZSgpXG4gIHZhciBzdGF0ZUJ1aWxkZXIgPSB7XG5cbiAgICAvLyBEZXJpdmUgcGFyZW50IHN0YXRlIGZyb20gYSBoaWVyYXJjaGljYWwgbmFtZSBvbmx5IGlmICdwYXJlbnQnIGlzIG5vdCBleHBsaWNpdGx5IGRlZmluZWQuXG4gICAgLy8gc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgICAvLyBpZiAocGFyZW50KSBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgcGFyZW50OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgaWYgKGlzRGVmaW5lZChzdGF0ZS5wYXJlbnQpICYmIHN0YXRlLnBhcmVudCkgcmV0dXJuIGZpbmRTdGF0ZShzdGF0ZS5wYXJlbnQpO1xuICAgICAgLy8gcmVnZXggbWF0Y2hlcyBhbnkgdmFsaWQgY29tcG9zaXRlIHN0YXRlIG5hbWVcbiAgICAgIC8vIHdvdWxkIG1hdGNoIFwiY29udGFjdC5saXN0XCIgYnV0IG5vdCBcImNvbnRhY3RzXCJcbiAgICAgIHZhciBjb21wb3NpdGVOYW1lID0gL14oLispXFwuW14uXSskLy5leGVjKHN0YXRlLm5hbWUpO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0ZU5hbWUgPyBmaW5kU3RhdGUoY29tcG9zaXRlTmFtZVsxXSkgOiByb290O1xuICAgIH0sXG5cbiAgICAvLyBpbmhlcml0ICdkYXRhJyBmcm9tIHBhcmVudCBhbmQgb3ZlcnJpZGUgYnkgb3duIHZhbHVlcyAoaWYgYW55KVxuICAgIGRhdGE6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUucGFyZW50ICYmIHN0YXRlLnBhcmVudC5kYXRhKSB7XG4gICAgICAgIHN0YXRlLmRhdGEgPSBzdGF0ZS5zZWxmLmRhdGEgPSBpbmhlcml0KHN0YXRlLnBhcmVudC5kYXRhLCBzdGF0ZS5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZS5kYXRhO1xuICAgIH0sXG5cbiAgICAvLyBCdWlsZCBhIFVSTE1hdGNoZXIgaWYgbmVjZXNzYXJ5LCBlaXRoZXIgdmlhIGEgcmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMXG4gICAgdXJsOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgdmFyIHVybCA9IHN0YXRlLnVybCwgY29uZmlnID0geyBwYXJhbXM6IHN0YXRlLnBhcmFtcyB8fCB7fSB9O1xuXG4gICAgICBpZiAoaXNTdHJpbmcodXJsKSkge1xuICAgICAgICBpZiAodXJsLmNoYXJBdCgwKSA9PSAnXicpIHJldHVybiAkdXJsTWF0Y2hlckZhY3RvcnkuY29tcGlsZSh1cmwuc3Vic3RyaW5nKDEpLCBjb25maWcpO1xuICAgICAgICByZXR1cm4gKHN0YXRlLnBhcmVudC5uYXZpZ2FibGUgfHwgcm9vdCkudXJsLmNvbmNhdCh1cmwsIGNvbmZpZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXJsIHx8ICR1cmxNYXRjaGVyRmFjdG9yeS5pc01hdGNoZXIodXJsKSkgcmV0dXJuIHVybDtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXJsICdcIiArIHVybCArIFwiJyBpbiBzdGF0ZSAnXCIgKyBzdGF0ZSArIFwiJ1wiKTtcbiAgICB9LFxuXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgY2xvc2VzdCBhbmNlc3RvciBzdGF0ZSB0aGF0IGhhcyBhIFVSTCAoaS5lLiBpcyBuYXZpZ2FibGUpXG4gICAgbmF2aWdhYmxlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnVybCA/IHN0YXRlIDogKHN0YXRlLnBhcmVudCA/IHN0YXRlLnBhcmVudC5uYXZpZ2FibGUgOiBudWxsKTtcbiAgICB9LFxuXG4gICAgLy8gT3duIHBhcmFtZXRlcnMgZm9yIHRoaXMgc3RhdGUuIHN0YXRlLnVybC5wYXJhbXMgaXMgYWxyZWFkeSBidWlsdCBhdCB0aGlzIHBvaW50LiBDcmVhdGUgYW5kIGFkZCBub24tdXJsIHBhcmFtc1xuICAgIG93blBhcmFtczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBzdGF0ZS51cmwgJiYgc3RhdGUudXJsLnBhcmFtcyB8fCBuZXcgJCRVTUZQLlBhcmFtU2V0KCk7XG4gICAgICBmb3JFYWNoKHN0YXRlLnBhcmFtcyB8fCB7fSwgZnVuY3Rpb24oY29uZmlnLCBpZCkge1xuICAgICAgICBpZiAoIXBhcmFtc1tpZF0pIHBhcmFtc1tpZF0gPSBuZXcgJCRVTUZQLlBhcmFtKGlkLCBudWxsLCBjb25maWcsIFwiY29uZmlnXCIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH0sXG5cbiAgICAvLyBEZXJpdmUgcGFyYW1ldGVycyBmb3IgdGhpcyBzdGF0ZSBhbmQgZW5zdXJlIHRoZXkncmUgYSBzdXBlci1zZXQgb2YgcGFyZW50J3MgcGFyYW1ldGVyc1xuICAgIHBhcmFtczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHZhciBvd25QYXJhbXMgPSBwaWNrKHN0YXRlLm93blBhcmFtcywgc3RhdGUub3duUGFyYW1zLiQka2V5cygpKTtcbiAgICAgIHJldHVybiBzdGF0ZS5wYXJlbnQgJiYgc3RhdGUucGFyZW50LnBhcmFtcyA/IGV4dGVuZChzdGF0ZS5wYXJlbnQucGFyYW1zLiQkbmV3KCksIG93blBhcmFtcykgOiBuZXcgJCRVTUZQLlBhcmFtU2V0KCk7XG4gICAgfSxcblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIGV4cGxpY2l0IG11bHRpLXZpZXcgY29uZmlndXJhdGlvbiwgbWFrZSBvbmUgdXAgc28gd2UgZG9uJ3QgaGF2ZVxuICAgIC8vIHRvIGhhbmRsZSBib3RoIGNhc2VzIGluIHRoZSB2aWV3IGRpcmVjdGl2ZSBsYXRlci4gTm90ZSB0aGF0IGhhdmluZyBhbiBleHBsaWNpdFxuICAgIC8vICd2aWV3cycgcHJvcGVydHkgd2lsbCBtZWFuIHRoZSBkZWZhdWx0IHVubmFtZWQgdmlldyBwcm9wZXJ0aWVzIGFyZSBpZ25vcmVkLiBUaGlzXG4gICAgLy8gaXMgYWxzbyBhIGdvb2QgdGltZSB0byByZXNvbHZlIHZpZXcgbmFtZXMgdG8gYWJzb2x1dGUgbmFtZXMsIHNvIGV2ZXJ5dGhpbmcgaXMgYVxuICAgIC8vIHN0cmFpZ2h0IGxvb2t1cCBhdCBsaW5rIHRpbWUuXG4gICAgdmlld3M6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICB2YXIgdmlld3MgPSB7fTtcblxuICAgICAgZm9yRWFjaChpc0RlZmluZWQoc3RhdGUudmlld3MpID8gc3RhdGUudmlld3MgOiB7ICcnOiBzdGF0ZSB9LCBmdW5jdGlvbiAodmlldywgbmFtZSkge1xuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCdAJykgPCAwKSBuYW1lICs9ICdAJyArIHN0YXRlLnBhcmVudC5uYW1lO1xuICAgICAgICB2aWV3LnJlc29sdmVBcyA9IHZpZXcucmVzb2x2ZUFzIHx8IHN0YXRlLnJlc29sdmVBcyB8fCAnJHJlc29sdmUnO1xuICAgICAgICB2aWV3c1tuYW1lXSA9IHZpZXc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB2aWV3cztcbiAgICB9LFxuXG4gICAgLy8gS2VlcCBhIGZ1bGwgcGF0aCBmcm9tIHRoZSByb290IGRvd24gdG8gdGhpcyBzdGF0ZSBhcyB0aGlzIGlzIG5lZWRlZCBmb3Igc3RhdGUgYWN0aXZhdGlvbi5cbiAgICBwYXRoOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnBhcmVudCA/IHN0YXRlLnBhcmVudC5wYXRoLmNvbmNhdChzdGF0ZSkgOiBbXTsgLy8gZXhjbHVkZSByb290IGZyb20gcGF0aFxuICAgIH0sXG5cbiAgICAvLyBTcGVlZCB1cCAkc3RhdGUuY29udGFpbnMoKSBhcyBpdCdzIHVzZWQgYSBsb3RcbiAgICBpbmNsdWRlczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHZhciBpbmNsdWRlcyA9IHN0YXRlLnBhcmVudCA/IGV4dGVuZCh7fSwgc3RhdGUucGFyZW50LmluY2x1ZGVzKSA6IHt9O1xuICAgICAgaW5jbHVkZXNbc3RhdGUubmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIGluY2x1ZGVzO1xuICAgIH0sXG5cbiAgICAkZGVsZWdhdGVzOiB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzUmVsYXRpdmUoc3RhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHN0YXRlTmFtZS5pbmRleE9mKFwiLlwiKSA9PT0gMCB8fCBzdGF0ZU5hbWUuaW5kZXhPZihcIl5cIikgPT09IDA7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kU3RhdGUoc3RhdGVPck5hbWUsIGJhc2UpIHtcbiAgICBpZiAoIXN0YXRlT3JOYW1lKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgdmFyIGlzU3RyID0gaXNTdHJpbmcoc3RhdGVPck5hbWUpLFxuICAgICAgICBuYW1lICA9IGlzU3RyID8gc3RhdGVPck5hbWUgOiBzdGF0ZU9yTmFtZS5uYW1lLFxuICAgICAgICBwYXRoICA9IGlzUmVsYXRpdmUobmFtZSk7XG5cbiAgICBpZiAocGF0aCkge1xuICAgICAgaWYgKCFiYXNlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyByZWZlcmVuY2UgcG9pbnQgZ2l2ZW4gZm9yIHBhdGggJ1wiICArIG5hbWUgKyBcIidcIik7XG4gICAgICBiYXNlID0gZmluZFN0YXRlKGJhc2UpO1xuICAgICAgXG4gICAgICB2YXIgcmVsID0gbmFtZS5zcGxpdChcIi5cIiksIGkgPSAwLCBwYXRoTGVuZ3RoID0gcmVsLmxlbmd0aCwgY3VycmVudCA9IGJhc2U7XG5cbiAgICAgIGZvciAoOyBpIDwgcGF0aExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyZWxbaV0gPT09IFwiXCIgJiYgaSA9PT0gMCkge1xuICAgICAgICAgIGN1cnJlbnQgPSBiYXNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWxbaV0gPT09IFwiXlwiKSB7XG4gICAgICAgICAgaWYgKCFjdXJyZW50LnBhcmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUGF0aCAnXCIgKyBuYW1lICsgXCInIG5vdCB2YWxpZCBmb3Igc3RhdGUgJ1wiICsgYmFzZS5uYW1lICsgXCInXCIpO1xuICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlbCA9IHJlbC5zbGljZShpKS5qb2luKFwiLlwiKTtcbiAgICAgIG5hbWUgPSBjdXJyZW50Lm5hbWUgKyAoY3VycmVudC5uYW1lICYmIHJlbCA/IFwiLlwiIDogXCJcIikgKyByZWw7XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9IHN0YXRlc1tuYW1lXTtcblxuICAgIGlmIChzdGF0ZSAmJiAoaXNTdHIgfHwgKCFpc1N0ciAmJiAoc3RhdGUgPT09IHN0YXRlT3JOYW1lIHx8IHN0YXRlLnNlbGYgPT09IHN0YXRlT3JOYW1lKSkpKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBxdWV1ZVN0YXRlKHBhcmVudE5hbWUsIHN0YXRlKSB7XG4gICAgaWYgKCFxdWV1ZVtwYXJlbnROYW1lXSkge1xuICAgICAgcXVldWVbcGFyZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcXVldWVbcGFyZW50TmFtZV0ucHVzaChzdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaFF1ZXVlZENoaWxkcmVuKHBhcmVudE5hbWUpIHtcbiAgICB2YXIgcXVldWVkID0gcXVldWVbcGFyZW50TmFtZV0gfHwgW107XG4gICAgd2hpbGUocXVldWVkLmxlbmd0aCkge1xuICAgICAgcmVnaXN0ZXJTdGF0ZShxdWV1ZWQuc2hpZnQoKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJTdGF0ZShzdGF0ZSkge1xuICAgIC8vIFdyYXAgYSBuZXcgb2JqZWN0IGFyb3VuZCB0aGUgc3RhdGUgc28gd2UgY2FuIHN0b3JlIG91ciBwcml2YXRlIGRldGFpbHMgZWFzaWx5LlxuICAgIHN0YXRlID0gaW5oZXJpdChzdGF0ZSwge1xuICAgICAgc2VsZjogc3RhdGUsXG4gICAgICByZXNvbHZlOiBzdGF0ZS5yZXNvbHZlIHx8IHt9LFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9XG4gICAgfSk7XG5cbiAgICB2YXIgbmFtZSA9IHN0YXRlLm5hbWU7XG4gICAgaWYgKCFpc1N0cmluZyhuYW1lKSB8fCBuYW1lLmluZGV4T2YoJ0AnKSA+PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJTdGF0ZSBtdXN0IGhhdmUgYSB2YWxpZCBuYW1lXCIpO1xuICAgIGlmIChzdGF0ZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHRocm93IG5ldyBFcnJvcihcIlN0YXRlICdcIiArIG5hbWUgKyBcIicgaXMgYWxyZWFkeSBkZWZpbmVkXCIpO1xuXG4gICAgLy8gR2V0IHBhcmVudCBuYW1lXG4gICAgdmFyIHBhcmVudE5hbWUgPSAobmFtZS5pbmRleE9mKCcuJykgIT09IC0xKSA/IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGFzdEluZGV4T2YoJy4nKSlcbiAgICAgICAgOiAoaXNTdHJpbmcoc3RhdGUucGFyZW50KSkgPyBzdGF0ZS5wYXJlbnRcbiAgICAgICAgOiAoaXNPYmplY3Qoc3RhdGUucGFyZW50KSAmJiBpc1N0cmluZyhzdGF0ZS5wYXJlbnQubmFtZSkpID8gc3RhdGUucGFyZW50Lm5hbWVcbiAgICAgICAgOiAnJztcblxuICAgIC8vIElmIHBhcmVudCBpcyBub3QgcmVnaXN0ZXJlZCB5ZXQsIGFkZCBzdGF0ZSB0byBxdWV1ZSBhbmQgcmVnaXN0ZXIgbGF0ZXJcbiAgICBpZiAocGFyZW50TmFtZSAmJiAhc3RhdGVzW3BhcmVudE5hbWVdKSB7XG4gICAgICByZXR1cm4gcXVldWVTdGF0ZShwYXJlbnROYW1lLCBzdGF0ZS5zZWxmKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGVCdWlsZGVyKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihzdGF0ZUJ1aWxkZXJba2V5XSkpIHN0YXRlW2tleV0gPSBzdGF0ZUJ1aWxkZXJba2V5XShzdGF0ZSwgc3RhdGVCdWlsZGVyLiRkZWxlZ2F0ZXNba2V5XSk7XG4gICAgfVxuICAgIHN0YXRlc1tuYW1lXSA9IHN0YXRlO1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIHN0YXRlIGluIHRoZSBnbG9iYWwgc3RhdGUgbGlzdCBhbmQgd2l0aCAkdXJsUm91dGVyIGlmIG5lY2Vzc2FyeS5cbiAgICBpZiAoIXN0YXRlW2Fic3RyYWN0S2V5XSAmJiBzdGF0ZS51cmwpIHtcbiAgICAgICR1cmxSb3V0ZXJQcm92aWRlci53aGVuKHN0YXRlLnVybCwgWyckbWF0Y2gnLCAnJHN0YXRlUGFyYW1zJywgZnVuY3Rpb24gKCRtYXRjaCwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICgkc3RhdGUuJGN1cnJlbnQubmF2aWdhYmxlICE9IHN0YXRlIHx8ICFlcXVhbEZvcktleXMoJG1hdGNoLCAkc3RhdGVQYXJhbXMpKSB7XG4gICAgICAgICAgJHN0YXRlLnRyYW5zaXRpb25UbyhzdGF0ZSwgJG1hdGNoLCB7IGluaGVyaXQ6IHRydWUsIGxvY2F0aW9uOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGFueSBxdWV1ZWQgY2hpbGRyZW5cbiAgICBmbHVzaFF1ZXVlZENoaWxkcmVuKG5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgLy8gQ2hlY2tzIHRleHQgdG8gc2VlIGlmIGl0IGxvb2tzIGxpa2UgYSBnbG9iLlxuICBmdW5jdGlvbiBpc0dsb2IgKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC5pbmRleE9mKCcqJykgPiAtMTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBnbG9iIG1hdGNoZXMgY3VycmVudCAkc3RhdGUgbmFtZS5cbiAgZnVuY3Rpb24gZG9lc1N0YXRlTWF0Y2hHbG9iIChnbG9iKSB7XG4gICAgdmFyIGdsb2JTZWdtZW50cyA9IGdsb2Iuc3BsaXQoJy4nKSxcbiAgICAgICAgc2VnbWVudHMgPSAkc3RhdGUuJGN1cnJlbnQubmFtZS5zcGxpdCgnLicpO1xuXG4gICAgLy9tYXRjaCBzaW5nbGUgc3RhcnNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGdsb2JTZWdtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChnbG9iU2VnbWVudHNbaV0gPT09ICcqJykge1xuICAgICAgICBzZWdtZW50c1tpXSA9ICcqJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL21hdGNoIGdyZWVkeSBzdGFydHNcbiAgICBpZiAoZ2xvYlNlZ21lbnRzWzBdID09PSAnKionKSB7XG4gICAgICAgc2VnbWVudHMgPSBzZWdtZW50cy5zbGljZShpbmRleE9mKHNlZ21lbnRzLCBnbG9iU2VnbWVudHNbMV0pKTtcbiAgICAgICBzZWdtZW50cy51bnNoaWZ0KCcqKicpO1xuICAgIH1cbiAgICAvL21hdGNoIGdyZWVkeSBlbmRzXG4gICAgaWYgKGdsb2JTZWdtZW50c1tnbG9iU2VnbWVudHMubGVuZ3RoIC0gMV0gPT09ICcqKicpIHtcbiAgICAgICBzZWdtZW50cy5zcGxpY2UoaW5kZXhPZihzZWdtZW50cywgZ2xvYlNlZ21lbnRzW2dsb2JTZWdtZW50cy5sZW5ndGggLSAyXSkgKyAxLCBOdW1iZXIuTUFYX1ZBTFVFKTtcbiAgICAgICBzZWdtZW50cy5wdXNoKCcqKicpO1xuICAgIH1cblxuICAgIGlmIChnbG9iU2VnbWVudHMubGVuZ3RoICE9IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBzZWdtZW50cy5qb2luKCcnKSA9PT0gZ2xvYlNlZ21lbnRzLmpvaW4oJycpO1xuICB9XG5cblxuICAvLyBJbXBsaWNpdCByb290IHN0YXRlIHRoYXQgaXMgYWx3YXlzIGFjdGl2ZVxuICByb290ID0gcmVnaXN0ZXJTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgdXJsOiAnXicsXG4gICAgdmlld3M6IG51bGwsXG4gICAgJ2Fic3RyYWN0JzogdHJ1ZVxuICB9KTtcbiAgcm9vdC5uYXZpZ2FibGUgPSBudWxsO1xuXG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlUHJvdmlkZXIjZGVjb3JhdG9yXG4gICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlUHJvdmlkZXJcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEFsbG93cyB5b3UgdG8gZXh0ZW5kIChjYXJlZnVsbHkpIG9yIG92ZXJyaWRlIChhdCB5b3VyIG93biBwZXJpbCkgdGhlIFxuICAgKiBgc3RhdGVCdWlsZGVyYCBvYmplY3QgdXNlZCBpbnRlcm5hbGx5IGJ5IGAkc3RhdGVQcm92aWRlcmAuIFRoaXMgY2FuIGJlIHVzZWQgXG4gICAqIHRvIGFkZCBjdXN0b20gZnVuY3Rpb25hbGl0eSB0byB1aS1yb3V0ZXIsIGZvciBleGFtcGxlIGluZmVycmluZyB0ZW1wbGF0ZVVybCBcbiAgICogYmFzZWQgb24gdGhlIHN0YXRlIG5hbWUuXG4gICAqXG4gICAqIFdoZW4gcGFzc2luZyBvbmx5IGEgbmFtZSwgaXQgcmV0dXJucyB0aGUgY3VycmVudCAob3JpZ2luYWwgb3IgZGVjb3JhdGVkKSBidWlsZGVyXG4gICAqIGZ1bmN0aW9uIHRoYXQgbWF0Y2hlcyBgbmFtZWAuXG4gICAqXG4gICAqIFRoZSBidWlsZGVyIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBkZWNvcmF0ZWQgYXJlIGxpc3RlZCBiZWxvdy4gVGhvdWdoIG5vdCBhbGxcbiAgICogbmVjZXNzYXJpbHkgaGF2ZSBhIGdvb2QgdXNlIGNhc2UgZm9yIGRlY29yYXRpb24sIHRoYXQgaXMgdXAgdG8geW91IHRvIGRlY2lkZS5cbiAgICpcbiAgICogSW4gYWRkaXRpb24sIHVzZXJzIGNhbiBhdHRhY2ggY3VzdG9tIGRlY29yYXRvcnMsIHdoaWNoIHdpbGwgZ2VuZXJhdGUgbmV3IFxuICAgKiBwcm9wZXJ0aWVzIHdpdGhpbiB0aGUgc3RhdGUncyBpbnRlcm5hbCBkZWZpbml0aW9uLiBUaGVyZSBpcyBjdXJyZW50bHkgbm8gY2xlYXIgXG4gICAqIHVzZS1jYXNlIGZvciB0aGlzIGJleW9uZCBhY2Nlc3NpbmcgaW50ZXJuYWwgc3RhdGVzIChpLmUuICRzdGF0ZS4kY3VycmVudCksIFxuICAgKiBob3dldmVyLCBleHBlY3QgdGhpcyB0byBiZWNvbWUgaW5jcmVhc2luZ2x5IHJlbGV2YW50IGFzIHdlIGludHJvZHVjZSBhZGRpdGlvbmFsIFxuICAgKiBtZXRhLXByb2dyYW1taW5nIGZlYXR1cmVzLlxuICAgKlxuICAgKiAqKldhcm5pbmcqKjogRGVjb3JhdG9ycyBzaG91bGQgbm90IGJlIGludGVyZGVwZW5kZW50IGJlY2F1c2UgdGhlIG9yZGVyIG9mIFxuICAgKiBleGVjdXRpb24gb2YgdGhlIGJ1aWxkZXIgZnVuY3Rpb25zIGluIG5vbi1kZXRlcm1pbmlzdGljLiBCdWlsZGVyIGZ1bmN0aW9ucyBcbiAgICogc2hvdWxkIG9ubHkgYmUgZGVwZW5kZW50IG9uIHRoZSBzdGF0ZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgc3VwZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqXG4gICAqIEV4aXN0aW5nIGJ1aWxkZXIgZnVuY3Rpb25zIGFuZCBjdXJyZW50IHJldHVybiB2YWx1ZXM6XG4gICAqXG4gICAqIC0gKipwYXJlbnQqKiBge29iamVjdH1gIC0gcmV0dXJucyB0aGUgcGFyZW50IHN0YXRlIG9iamVjdC5cbiAgICogLSAqKmRhdGEqKiBge29iamVjdH1gIC0gcmV0dXJucyBzdGF0ZSBkYXRhLCBpbmNsdWRpbmcgYW55IGluaGVyaXRlZCBkYXRhIHRoYXQgaXMgbm90XG4gICAqICAgb3ZlcnJpZGRlbiBieSBvd24gdmFsdWVzIChpZiBhbnkpLlxuICAgKiAtICoqdXJsKiogYHtvYmplY3R9YCAtIHJldHVybnMgYSB7QGxpbmsgdWkucm91dGVyLnV0aWwudHlwZTpVcmxNYXRjaGVyIFVybE1hdGNoZXJ9XG4gICAqICAgb3IgYG51bGxgLlxuICAgKiAtICoqbmF2aWdhYmxlKiogYHtvYmplY3R9YCAtIHJldHVybnMgY2xvc2VzdCBhbmNlc3RvciBzdGF0ZSB0aGF0IGhhcyBhIFVSTCAoYWthIGlzIFxuICAgKiAgIG5hdmlnYWJsZSkuXG4gICAqIC0gKipwYXJhbXMqKiBge29iamVjdH1gIC0gcmV0dXJucyBhbiBhcnJheSBvZiBzdGF0ZSBwYXJhbXMgdGhhdCBhcmUgZW5zdXJlZCB0byBcbiAgICogICBiZSBhIHN1cGVyLXNldCBvZiBwYXJlbnQncyBwYXJhbXMuXG4gICAqIC0gKip2aWV3cyoqIGB7b2JqZWN0fWAgLSByZXR1cm5zIGEgdmlld3Mgb2JqZWN0IHdoZXJlIGVhY2gga2V5IGlzIGFuIGFic29sdXRlIHZpZXcgXG4gICAqICAgbmFtZSAoaS5lLiBcInZpZXdOYW1lQHN0YXRlTmFtZVwiKSBhbmQgZWFjaCB2YWx1ZSBpcyB0aGUgY29uZmlnIG9iamVjdCBcbiAgICogICAodGVtcGxhdGUsIGNvbnRyb2xsZXIpIGZvciB0aGUgdmlldy4gRXZlbiB3aGVuIHlvdSBkb24ndCB1c2UgdGhlIHZpZXdzIG9iamVjdCBcbiAgICogICBleHBsaWNpdGx5IG9uIGEgc3RhdGUgY29uZmlnLCBvbmUgaXMgc3RpbGwgY3JlYXRlZCBmb3IgeW91IGludGVybmFsbHkuXG4gICAqICAgU28gYnkgZGVjb3JhdGluZyB0aGlzIGJ1aWxkZXIgZnVuY3Rpb24geW91IGhhdmUgYWNjZXNzIHRvIGRlY29yYXRpbmcgdGVtcGxhdGUgXG4gICAqICAgYW5kIGNvbnRyb2xsZXIgcHJvcGVydGllcy5cbiAgICogLSAqKm93blBhcmFtcyoqIGB7b2JqZWN0fWAgLSByZXR1cm5zIGFuIGFycmF5IG9mIHBhcmFtcyB0aGF0IGJlbG9uZyB0byB0aGUgc3RhdGUsIFxuICAgKiAgIG5vdCBpbmNsdWRpbmcgYW55IHBhcmFtcyBkZWZpbmVkIGJ5IGFuY2VzdG9yIHN0YXRlcy5cbiAgICogLSAqKnBhdGgqKiBge3N0cmluZ31gIC0gcmV0dXJucyB0aGUgZnVsbCBwYXRoIGZyb20gdGhlIHJvb3QgZG93biB0byB0aGlzIHN0YXRlLiBcbiAgICogICBOZWVkZWQgZm9yIHN0YXRlIGFjdGl2YXRpb24uXG4gICAqIC0gKippbmNsdWRlcyoqIGB7b2JqZWN0fWAgLSByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGluY2x1ZGVzIGV2ZXJ5IHN0YXRlIHRoYXQgXG4gICAqICAgd291bGQgcGFzcyBhIGAkc3RhdGUuaW5jbHVkZXMoKWAgdGVzdC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPHByZT5cbiAgICogLy8gT3ZlcnJpZGUgdGhlIGludGVybmFsICd2aWV3cycgYnVpbGRlciB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgc3RhdGVcbiAgICogLy8gZGVmaW5pdGlvbiwgYW5kIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnRlcm5hbCBmdW5jdGlvbiBiZWluZyBvdmVycmlkZGVuOlxuICAgKiAkc3RhdGVQcm92aWRlci5kZWNvcmF0b3IoJ3ZpZXdzJywgZnVuY3Rpb24gKHN0YXRlLCBwYXJlbnQpIHtcbiAgICogICB2YXIgcmVzdWx0ID0ge30sXG4gICAqICAgICAgIHZpZXdzID0gcGFyZW50KHN0YXRlKTtcbiAgICpcbiAgICogICBhbmd1bGFyLmZvckVhY2godmlld3MsIGZ1bmN0aW9uIChjb25maWcsIG5hbWUpIHtcbiAgICogICAgIHZhciBhdXRvTmFtZSA9IChzdGF0ZS5uYW1lICsgJy4nICsgbmFtZSkucmVwbGFjZSgnLicsICcvJyk7XG4gICAqICAgICBjb25maWcudGVtcGxhdGVVcmwgPSBjb25maWcudGVtcGxhdGVVcmwgfHwgJy9wYXJ0aWFscy8nICsgYXV0b05hbWUgKyAnLmh0bWwnO1xuICAgKiAgICAgcmVzdWx0W25hbWVdID0gY29uZmlnO1xuICAgKiAgIH0pO1xuICAgKiAgIHJldHVybiByZXN1bHQ7XG4gICAqIH0pO1xuICAgKlxuICAgKiAkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcbiAgICogICB2aWV3czoge1xuICAgKiAgICAgJ2NvbnRhY3QubGlzdCc6IHsgY29udHJvbGxlcjogJ0xpc3RDb250cm9sbGVyJyB9LFxuICAgKiAgICAgJ2NvbnRhY3QuaXRlbSc6IHsgY29udHJvbGxlcjogJ0l0ZW1Db250cm9sbGVyJyB9XG4gICAqICAgfVxuICAgKiB9KTtcbiAgICpcbiAgICogLy8gLi4uXG4gICAqXG4gICAqICRzdGF0ZS5nbygnaG9tZScpO1xuICAgKiAvLyBBdXRvLXBvcHVsYXRlcyBsaXN0IGFuZCBpdGVtIHZpZXdzIHdpdGggL3BhcnRpYWxzL2hvbWUvY29udGFjdC9saXN0Lmh0bWwsXG4gICAqIC8vIGFuZCAvcGFydGlhbHMvaG9tZS9jb250YWN0L2l0ZW0uaHRtbCwgcmVzcGVjdGl2ZWx5LlxuICAgKiA8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGJ1aWxkZXIgZnVuY3Rpb24gdG8gZGVjb3JhdGUuIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZnVuYyBBIGZ1bmN0aW9uIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGRlY29yYXRpbmcgdGhlIG9yaWdpbmFsIFxuICAgKiBidWlsZGVyIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgdHdvIHBhcmFtZXRlcnM6XG4gICAqXG4gICAqICAgLSBge29iamVjdH1gIC0gc3RhdGUgLSBUaGUgc3RhdGUgY29uZmlnIG9iamVjdC5cbiAgICogICAtIGB7b2JqZWN0fWAgLSBzdXBlciAtIFRoZSBvcmlnaW5hbCBidWlsZGVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9ICRzdGF0ZVByb3ZpZGVyIC0gJHN0YXRlUHJvdmlkZXIgaW5zdGFuY2VcbiAgICovXG4gIHRoaXMuZGVjb3JhdG9yID0gZGVjb3JhdG9yO1xuICBmdW5jdGlvbiBkZWNvcmF0b3IobmFtZSwgZnVuYykge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuICAgIGlmIChpc1N0cmluZyhuYW1lKSAmJiAhaXNEZWZpbmVkKGZ1bmMpKSB7XG4gICAgICByZXR1cm4gc3RhdGVCdWlsZGVyW25hbWVdO1xuICAgIH1cbiAgICBpZiAoIWlzRnVuY3Rpb24oZnVuYykgfHwgIWlzU3RyaW5nKG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKHN0YXRlQnVpbGRlcltuYW1lXSAmJiAhc3RhdGVCdWlsZGVyLiRkZWxlZ2F0ZXNbbmFtZV0pIHtcbiAgICAgIHN0YXRlQnVpbGRlci4kZGVsZWdhdGVzW25hbWVdID0gc3RhdGVCdWlsZGVyW25hbWVdO1xuICAgIH1cbiAgICBzdGF0ZUJ1aWxkZXJbbmFtZV0gPSBmdW5jO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlUHJvdmlkZXIjc3RhdGVcbiAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQcm92aWRlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVnaXN0ZXJzIGEgc3RhdGUgY29uZmlndXJhdGlvbiB1bmRlciBhIGdpdmVuIHN0YXRlIG5hbWUuIFRoZSBzdGF0ZUNvbmZpZyBvYmplY3RcbiAgICogaGFzIHRoZSBmb2xsb3dpbmcgYWNjZXB0YWJsZSBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBBIHVuaXF1ZSBzdGF0ZSBuYW1lLCBlLmcuIFwiaG9tZVwiLCBcImFib3V0XCIsIFwiY29udGFjdHNcIi5cbiAgICogVG8gY3JlYXRlIGEgcGFyZW50L2NoaWxkIHN0YXRlIHVzZSBhIGRvdCwgZS5nLiBcImFib3V0LnNhbGVzXCIsIFwiaG9tZS5uZXdlc3RcIi5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlQ29uZmlnIFN0YXRlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbj19IHN0YXRlQ29uZmlnLnRlbXBsYXRlXG4gICAqIDxhIGlkPSd0ZW1wbGF0ZSc+PC9hPlxuICAgKiAgIGh0bWwgdGVtcGxhdGUgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnNcbiAgICogICBhbiBodG1sIHRlbXBsYXRlIGFzIGEgc3RyaW5nIHdoaWNoIHNob3VsZCBiZSB1c2VkIGJ5IHRoZSB1aVZpZXcgZGlyZWN0aXZlcy4gVGhpcyBwcm9wZXJ0eSBcbiAgICogICB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGVtcGxhdGVVcmwuXG4gICAqICAgXG4gICAqICAgSWYgYHRlbXBsYXRlYCBpcyBhIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAgICpcbiAgICogICAtIHthcnJheS4mbHQ7b2JqZWN0Jmd0O30gLSBzdGF0ZSBwYXJhbWV0ZXJzIGV4dHJhY3RlZCBmcm9tIHRoZSBjdXJyZW50ICRsb2NhdGlvbi5wYXRoKCkgYnlcbiAgICogICAgIGFwcGx5aW5nIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqXG4gICAqIDxwcmU+dGVtcGxhdGU6XG4gICAqICAgXCI8aDE+aW5saW5lIHRlbXBsYXRlIGRlZmluaXRpb248L2gxPlwiICtcbiAgICogICBcIjxkaXYgdWktdmlldz48L2Rpdj5cIjwvcHJlPlxuICAgKiA8cHJlPnRlbXBsYXRlOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICogICAgICAgcmV0dXJuIFwiPGgxPmdlbmVyYXRlZCB0ZW1wbGF0ZTwvaDE+XCI7IH08L3ByZT5cbiAgICogPC9kaXY+XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9uPX0gc3RhdGVDb25maWcudGVtcGxhdGVVcmxcbiAgICogPGEgaWQ9J3RlbXBsYXRlVXJsJz48L2E+XG4gICAqXG4gICAqICAgcGF0aCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwYXRoIHRvIGFuIGh0bWxcbiAgICogICB0ZW1wbGF0ZSB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IHVpVmlldy5cbiAgICogICBcbiAgICogICBJZiBgdGVtcGxhdGVVcmxgIGlzIGEgZnVuY3Rpb24sIGl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICAgKlxuICAgKiAgIC0ge2FycmF5LiZsdDtvYmplY3QmZ3Q7fSAtIHN0YXRlIHBhcmFtZXRlcnMgZXh0cmFjdGVkIGZyb20gdGhlIGN1cnJlbnQgJGxvY2F0aW9uLnBhdGgoKSBieSBcbiAgICogICAgIGFwcGx5aW5nIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqXG4gICAqIDxwcmU+dGVtcGxhdGVVcmw6IFwiaG9tZS5odG1sXCI8L3ByZT5cbiAgICogPHByZT50ZW1wbGF0ZVVybDogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAqICAgICByZXR1cm4gbXlUZW1wbGF0ZXNbcGFyYW1zLnBhZ2VJZF07IH08L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbj19IHN0YXRlQ29uZmlnLnRlbXBsYXRlUHJvdmlkZXJcbiAgICogPGEgaWQ9J3RlbXBsYXRlUHJvdmlkZXInPjwvYT5cbiAgICogICAgUHJvdmlkZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIEhUTUwgY29udGVudCBzdHJpbmcuXG4gICAqIDxwcmU+IHRlbXBsYXRlUHJvdmlkZXI6XG4gICAqICAgICAgIGZ1bmN0aW9uKE15VGVtcGxhdGVTZXJ2aWNlLCBwYXJhbXMpIHtcbiAgICogICAgICAgICByZXR1cm4gTXlUZW1wbGF0ZVNlcnZpY2UuZ2V0VGVtcGxhdGUocGFyYW1zLnBhZ2VJZCk7XG4gICAqICAgICAgIH08L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb249fSBzdGF0ZUNvbmZpZy5jb250cm9sbGVyXG4gICAqIDxhIGlkPSdjb250cm9sbGVyJz48L2E+XG4gICAqXG4gICAqICBDb250cm9sbGVyIGZuIHRoYXQgc2hvdWxkIGJlIGFzc29jaWF0ZWQgd2l0aCBuZXdseVxuICAgKiAgIHJlbGF0ZWQgc2NvcGUgb3IgdGhlIG5hbWUgb2YgYSByZWdpc3RlcmVkIGNvbnRyb2xsZXIgaWYgcGFzc2VkIGFzIGEgc3RyaW5nLlxuICAgKiAgIE9wdGlvbmFsbHksIHRoZSBDb250cm9sbGVyQXMgbWF5IGJlIGRlY2xhcmVkIGhlcmUuXG4gICAqIDxwcmU+Y29udHJvbGxlcjogXCJNeVJlZ2lzdGVyZWRDb250cm9sbGVyXCI8L3ByZT5cbiAgICogPHByZT5jb250cm9sbGVyOlxuICAgKiAgICAgXCJNeVJlZ2lzdGVyZWRDb250cm9sbGVyIGFzIGZvb0N0cmxcIn08L3ByZT5cbiAgICogPHByZT5jb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIE15U2VydmljZSkge1xuICAgKiAgICAgJHNjb3BlLmRhdGEgPSBNeVNlcnZpY2UuZ2V0RGF0YSgpOyB9PC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb249fSBzdGF0ZUNvbmZpZy5jb250cm9sbGVyUHJvdmlkZXJcbiAgICogPGEgaWQ9J2NvbnRyb2xsZXJQcm92aWRlcic+PC9hPlxuICAgKlxuICAgKiBJbmplY3RhYmxlIHByb3ZpZGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYWN0dWFsIGNvbnRyb2xsZXIgb3Igc3RyaW5nLlxuICAgKiA8cHJlPmNvbnRyb2xsZXJQcm92aWRlcjpcbiAgICogICBmdW5jdGlvbihNeVJlc29sdmVEYXRhKSB7XG4gICAqICAgICBpZiAoTXlSZXNvbHZlRGF0YS5mb28pXG4gICAqICAgICAgIHJldHVybiBcIkZvb0N0cmxcIlxuICAgKiAgICAgZWxzZSBpZiAoTXlSZXNvbHZlRGF0YS5iYXIpXG4gICAqICAgICAgIHJldHVybiBcIkJhckN0cmxcIjtcbiAgICogICAgIGVsc2UgcmV0dXJuIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgKiAgICAgICAkc2NvcGUuYmF6ID0gXCJRdXhcIjtcbiAgICogICAgIH1cbiAgICogICB9PC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc3RhdGVDb25maWcuY29udHJvbGxlckFzXG4gICAqIDxhIGlkPSdjb250cm9sbGVyQXMnPjwvYT5cbiAgICogXG4gICAqIEEgY29udHJvbGxlciBhbGlhcyBuYW1lLiBJZiBwcmVzZW50IHRoZSBjb250cm9sbGVyIHdpbGwgYmVcbiAgICogICBwdWJsaXNoZWQgdG8gc2NvcGUgdW5kZXIgdGhlIGNvbnRyb2xsZXJBcyBuYW1lLlxuICAgKiA8cHJlPmNvbnRyb2xsZXJBczogXCJteUN0cmxcIjwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3Q9fSBzdGF0ZUNvbmZpZy5wYXJlbnRcbiAgICogPGEgaWQ9J3BhcmVudCc+PC9hPlxuICAgKiBPcHRpb25hbGx5IHNwZWNpZmllcyB0aGUgcGFyZW50IHN0YXRlIG9mIHRoaXMgc3RhdGUuXG4gICAqXG4gICAqIDxwcmU+cGFyZW50OiAncGFyZW50U3RhdGUnPC9wcmU+XG4gICAqIDxwcmU+cGFyZW50OiBwYXJlbnRTdGF0ZSAvLyBKUyB2YXJpYWJsZTwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdD19IHN0YXRlQ29uZmlnLnJlc29sdmVcbiAgICogPGEgaWQ9J3Jlc29sdmUnPjwvYT5cbiAgICpcbiAgICogQW4gb3B0aW9uYWwgbWFwJmx0O3N0cmluZywgZnVuY3Rpb24mZ3Q7IG9mIGRlcGVuZGVuY2llcyB3aGljaFxuICAgKiAgIHNob3VsZCBiZSBpbmplY3RlZCBpbnRvIHRoZSBjb250cm9sbGVyLiBJZiBhbnkgb2YgdGhlc2UgZGVwZW5kZW5jaWVzIGFyZSBwcm9taXNlcywgXG4gICAqICAgdGhlIHJvdXRlciB3aWxsIHdhaXQgZm9yIHRoZW0gYWxsIHRvIGJlIHJlc29sdmVkIGJlZm9yZSB0aGUgY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQuXG4gICAqICAgSWYgYWxsIHRoZSBwcm9taXNlcyBhcmUgcmVzb2x2ZWQgc3VjY2Vzc2Z1bGx5LCB0aGUgJHN0YXRlQ2hhbmdlU3VjY2VzcyBldmVudCBpcyBmaXJlZFxuICAgKiAgIGFuZCB0aGUgdmFsdWVzIG9mIHRoZSByZXNvbHZlZCBwcm9taXNlcyBhcmUgaW5qZWN0ZWQgaW50byBhbnkgY29udHJvbGxlcnMgdGhhdCByZWZlcmVuY2UgdGhlbS5cbiAgICogICBJZiBhbnkgIG9mIHRoZSBwcm9taXNlcyBhcmUgcmVqZWN0ZWQgdGhlICRzdGF0ZUNoYW5nZUVycm9yIGV2ZW50IGlzIGZpcmVkLlxuICAgKlxuICAgKiAgIFRoZSBtYXAgb2JqZWN0IGlzOlxuICAgKiAgIFxuICAgKiAgIC0ga2V5IC0ge3N0cmluZ306IG5hbWUgb2YgZGVwZW5kZW5jeSB0byBiZSBpbmplY3RlZCBpbnRvIGNvbnRyb2xsZXJcbiAgICogICAtIGZhY3RvcnkgLSB7c3RyaW5nfGZ1bmN0aW9ufTogSWYgc3RyaW5nIHRoZW4gaXQgaXMgYWxpYXMgZm9yIHNlcnZpY2UuIE90aGVyd2lzZSBpZiBmdW5jdGlvbiwgXG4gICAqICAgICBpdCBpcyBpbmplY3RlZCBhbmQgcmV0dXJuIHZhbHVlIGl0IHRyZWF0ZWQgYXMgZGVwZW5kZW5jeS4gSWYgcmVzdWx0IGlzIGEgcHJvbWlzZSwgaXQgaXMgXG4gICAqICAgICByZXNvbHZlZCBiZWZvcmUgaXRzIHZhbHVlIGlzIGluamVjdGVkIGludG8gY29udHJvbGxlci5cbiAgICpcbiAgICogPHByZT5yZXNvbHZlOiB7XG4gICAqICAgICBteVJlc29sdmUxOlxuICAgKiAgICAgICBmdW5jdGlvbigkaHR0cCwgJHN0YXRlUGFyYW1zKSB7XG4gICAqICAgICAgICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvZm9vcy9cIitzdGF0ZVBhcmFtcy5mb29JRCk7XG4gICAqICAgICAgIH1cbiAgICogICAgIH08L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBzdGF0ZUNvbmZpZy51cmxcbiAgICogPGEgaWQ9J3VybCc+PC9hPlxuICAgKlxuICAgKiAgIEEgdXJsIGZyYWdtZW50IHdpdGggb3B0aW9uYWwgcGFyYW1ldGVycy4gV2hlbiBhIHN0YXRlIGlzIG5hdmlnYXRlZCBvclxuICAgKiAgIHRyYW5zaXRpb25lZCB0bywgdGhlIGAkc3RhdGVQYXJhbXNgIHNlcnZpY2Ugd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBhbnkgXG4gICAqICAgcGFyYW1ldGVycyB0aGF0IHdlcmUgcGFzc2VkLlxuICAgKlxuICAgKiAgIChTZWUge0BsaW5rIHVpLnJvdXRlci51dGlsLnR5cGU6VXJsTWF0Y2hlciBVcmxNYXRjaGVyfSBgVXJsTWF0Y2hlcmB9IGZvclxuICAgKiAgIG1vcmUgZGV0YWlscyBvbiBhY2NlcHRhYmxlIHBhdHRlcm5zIClcbiAgICpcbiAgICogZXhhbXBsZXM6XG4gICAqIDxwcmU+dXJsOiBcIi9ob21lXCJcbiAgICogdXJsOiBcIi91c2Vycy86dXNlcmlkXCJcbiAgICogdXJsOiBcIi9ib29rcy97Ym9va2lkOlthLXpBLVpfLV19XCJcbiAgICogdXJsOiBcIi9ib29rcy97Y2F0ZWdvcnlpZDppbnR9XCJcbiAgICogdXJsOiBcIi9ib29rcy97cHVibGlzaGVybmFtZTpzdHJpbmd9L3tjYXRlZ29yeWlkOmludH1cIlxuICAgKiB1cmw6IFwiL21lc3NhZ2VzP2JlZm9yZSZhZnRlclwiXG4gICAqIHVybDogXCIvbWVzc2FnZXM/e2JlZm9yZTpkYXRlfSZ7YWZ0ZXI6ZGF0ZX1cIlxuICAgKiB1cmw6IFwiL21lc3NhZ2VzLzptYWlsYm94aWQ/e2JlZm9yZTpkYXRlfSZ7YWZ0ZXI6ZGF0ZX1cIlxuICAgKiA8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3Q9fSBzdGF0ZUNvbmZpZy52aWV3c1xuICAgKiA8YSBpZD0ndmlld3MnPjwvYT5cbiAgICogYW4gb3B0aW9uYWwgbWFwJmx0O3N0cmluZywgb2JqZWN0Jmd0OyB3aGljaCBkZWZpbmVkIG11bHRpcGxlIHZpZXdzLCBvciB0YXJnZXRzIHZpZXdzXG4gICAqIG1hbnVhbGx5L2V4cGxpY2l0bHkuXG4gICAqXG4gICAqIEV4YW1wbGVzOlxuICAgKlxuICAgKiBUYXJnZXRzIHRocmVlIG5hbWVkIGB1aS12aWV3YHMgaW4gdGhlIHBhcmVudCBzdGF0ZSdzIHRlbXBsYXRlXG4gICAqIDxwcmU+dmlld3M6IHtcbiAgICogICAgIGhlYWRlcjoge1xuICAgKiAgICAgICBjb250cm9sbGVyOiBcImhlYWRlckN0cmxcIixcbiAgICogICAgICAgdGVtcGxhdGVVcmw6IFwiaGVhZGVyLmh0bWxcIlxuICAgKiAgICAgfSwgYm9keToge1xuICAgKiAgICAgICBjb250cm9sbGVyOiBcImJvZHlDdHJsXCIsXG4gICAqICAgICAgIHRlbXBsYXRlVXJsOiBcImJvZHkuaHRtbFwiXG4gICAqICAgICB9LCBmb290ZXI6IHtcbiAgICogICAgICAgY29udHJvbGxlcjogXCJmb290Q3RybFwiLFxuICAgKiAgICAgICB0ZW1wbGF0ZVVybDogXCJmb290ZXIuaHRtbFwiXG4gICAqICAgICB9XG4gICAqICAgfTwvcHJlPlxuICAgKlxuICAgKiBUYXJnZXRzIG5hbWVkIGB1aS12aWV3PVwiaGVhZGVyXCJgIGZyb20gZ3JhbmRwYXJlbnQgc3RhdGUgJ3RvcCcncyB0ZW1wbGF0ZSwgYW5kIG5hbWVkIGB1aS12aWV3PVwiYm9keVwiIGZyb20gcGFyZW50IHN0YXRlJ3MgdGVtcGxhdGUuXG4gICAqIDxwcmU+dmlld3M6IHtcbiAgICogICAgICdoZWFkZXJAdG9wJzoge1xuICAgKiAgICAgICBjb250cm9sbGVyOiBcIm1zZ0hlYWRlckN0cmxcIixcbiAgICogICAgICAgdGVtcGxhdGVVcmw6IFwibXNnSGVhZGVyLmh0bWxcIlxuICAgKiAgICAgfSwgJ2JvZHknOiB7XG4gICAqICAgICAgIGNvbnRyb2xsZXI6IFwibWVzc2FnZXNDdHJsXCIsXG4gICAqICAgICAgIHRlbXBsYXRlVXJsOiBcIm1lc3NhZ2VzLmh0bWxcIlxuICAgKiAgICAgfVxuICAgKiAgIH08L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFuPX0gW3N0YXRlQ29uZmlnLmFic3RyYWN0PWZhbHNlXVxuICAgKiA8YSBpZD0nYWJzdHJhY3QnPjwvYT5cbiAgICogQW4gYWJzdHJhY3Qgc3RhdGUgd2lsbCBuZXZlciBiZSBkaXJlY3RseSBhY3RpdmF0ZWQsXG4gICAqICAgYnV0IGNhbiBwcm92aWRlIGluaGVyaXRlZCBwcm9wZXJ0aWVzIHRvIGl0cyBjb21tb24gY2hpbGRyZW4gc3RhdGVzLlxuICAgKiA8cHJlPmFic3RyYWN0OiB0cnVlPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb249fSBzdGF0ZUNvbmZpZy5vbkVudGVyXG4gICAqIDxhIGlkPSdvbkVudGVyJz48L2E+XG4gICAqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZvciB3aGVuIGEgc3RhdGUgaXMgZW50ZXJlZC4gR29vZCB3YXlcbiAgICogICB0byB0cmlnZ2VyIGFuIGFjdGlvbiBvciBkaXNwYXRjaCBhbiBldmVudCwgc3VjaCBhcyBvcGVuaW5nIGEgZGlhbG9nLlxuICAgKiBJZiBtaW5pZnlpbmcgeW91ciBzY3JpcHRzLCBtYWtlIHN1cmUgdG8gZXhwbGljaXRseSBhbm5vdGF0ZSB0aGlzIGZ1bmN0aW9uLFxuICAgKiBiZWNhdXNlIGl0IHdvbid0IGJlIGF1dG9tYXRpY2FsbHkgYW5ub3RhdGVkIGJ5IHlvdXIgYnVpbGQgdG9vbHMuXG4gICAqXG4gICAqIDxwcmU+b25FbnRlcjogZnVuY3Rpb24oTXlTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICogICAgIE15U2VydmljZS5mb28oJHN0YXRlUGFyYW1zLm15UGFyYW0pO1xuICAgKiB9PC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb249fSBzdGF0ZUNvbmZpZy5vbkV4aXRcbiAgICogPGEgaWQ9J29uRXhpdCc+PC9hPlxuICAgKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiBhIHN0YXRlIGlzIGV4aXRlZC4gR29vZCB3YXkgdG9cbiAgICogICB0cmlnZ2VyIGFuIGFjdGlvbiBvciBkaXNwYXRjaCBhbiBldmVudCwgc3VjaCBhcyBvcGVuaW5nIGEgZGlhbG9nLlxuICAgKiBJZiBtaW5pZnlpbmcgeW91ciBzY3JpcHRzLCBtYWtlIHN1cmUgdG8gZXhwbGljaXRseSBhbm5vdGF0ZSB0aGlzIGZ1bmN0aW9uLFxuICAgKiBiZWNhdXNlIGl0IHdvbid0IGJlIGF1dG9tYXRpY2FsbHkgYW5ub3RhdGVkIGJ5IHlvdXIgYnVpbGQgdG9vbHMuXG4gICAqXG4gICAqIDxwcmU+b25FeGl0OiBmdW5jdGlvbihNeVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgKiAgICAgTXlTZXJ2aWNlLmNsZWFudXAoJHN0YXRlUGFyYW1zLm15UGFyYW0pO1xuICAgKiB9PC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IFtzdGF0ZUNvbmZpZy5yZWxvYWRPblNlYXJjaD10cnVlXVxuICAgKiA8YSBpZD0ncmVsb2FkT25TZWFyY2gnPjwvYT5cbiAgICpcbiAgICogSWYgYGZhbHNlYCwgd2lsbCBub3QgcmV0cmlnZ2VyIHRoZSBzYW1lIHN0YXRlXG4gICAqICAganVzdCBiZWNhdXNlIGEgc2VhcmNoL3F1ZXJ5IHBhcmFtZXRlciBoYXMgY2hhbmdlZCAodmlhICRsb2NhdGlvbi5zZWFyY2goKSBvciAkbG9jYXRpb24uaGFzaCgpKS4gXG4gICAqICAgVXNlZnVsIGZvciB3aGVuIHlvdSdkIGxpa2UgdG8gbW9kaWZ5ICRsb2NhdGlvbi5zZWFyY2goKSB3aXRob3V0IHRyaWdnZXJpbmcgYSByZWxvYWQuXG4gICAqIDxwcmU+cmVsb2FkT25TZWFyY2g6IGZhbHNlPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0PX0gc3RhdGVDb25maWcuZGF0YVxuICAgKiA8YSBpZD0nZGF0YSc+PC9hPlxuICAgKlxuICAgKiBBcmJpdHJhcnkgZGF0YSBvYmplY3QsIHVzZWZ1bCBmb3IgY3VzdG9tIGNvbmZpZ3VyYXRpb24uICBUaGUgcGFyZW50IHN0YXRlJ3MgYGRhdGFgIGlzXG4gICAqICAgcHJvdG90eXBhbGx5IGluaGVyaXRlZC4gIEluIG90aGVyIHdvcmRzLCBhZGRpbmcgYSBkYXRhIHByb3BlcnR5IHRvIGEgc3RhdGUgYWRkcyBpdCB0b1xuICAgKiAgIHRoZSBlbnRpcmUgc3VidHJlZSB2aWEgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cbiAgICpcbiAgICogPHByZT5kYXRhOiB7XG4gICAqICAgICByZXF1aXJlZFJvbGU6ICdmb28nXG4gICAqIH0gPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0PX0gc3RhdGVDb25maWcucGFyYW1zXG4gICAqIDxhIGlkPSdwYXJhbXMnPjwvYT5cbiAgICpcbiAgICogQSBtYXAgd2hpY2ggb3B0aW9uYWxseSBjb25maWd1cmVzIHBhcmFtZXRlcnMgZGVjbGFyZWQgaW4gdGhlIGB1cmxgLCBvclxuICAgKiAgIGRlZmluZXMgYWRkaXRpb25hbCBub24tdXJsIHBhcmFtZXRlcnMuICBGb3IgZWFjaCBwYXJhbWV0ZXIgYmVpbmdcbiAgICogICBjb25maWd1cmVkLCBhZGQgYSBjb25maWd1cmF0aW9uIG9iamVjdCBrZXllZCB0byB0aGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyLlxuICAgKlxuICAgKiAgIEVhY2ggcGFyYW1ldGVyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IG1heSBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICpcbiAgICogICAtICoqIHZhbHVlICoqIC0ge29iamVjdHxmdW5jdGlvbj19OiBzcGVjaWZpZXMgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXNcbiAgICogICAgIHBhcmFtZXRlci4gIFRoaXMgaW1wbGljaXRseSBzZXRzIHRoaXMgcGFyYW1ldGVyIGFzIG9wdGlvbmFsLlxuICAgKlxuICAgKiAgICAgV2hlbiBVSS1Sb3V0ZXIgcm91dGVzIHRvIGEgc3RhdGUgYW5kIG5vIHZhbHVlIGlzXG4gICAqICAgICBzcGVjaWZpZWQgZm9yIHRoaXMgcGFyYW1ldGVyIGluIHRoZSBVUkwgb3IgdHJhbnNpdGlvbiwgdGhlXG4gICAqICAgICBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLiAgSWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLFxuICAgKiAgICAgaXQgd2lsbCBiZSBpbmplY3RlZCBhbmQgaW52b2tlZCwgYW5kIHRoZSByZXR1cm4gdmFsdWUgdXNlZC5cbiAgICpcbiAgICogICAgICpOb3RlKjogYHVuZGVmaW5lZGAgaXMgdHJlYXRlZCBhcyBcIm5vIGRlZmF1bHQgdmFsdWVcIiB3aGlsZSBgbnVsbGBcbiAgICogICAgIGlzIHRyZWF0ZWQgYXMgXCJ0aGUgZGVmYXVsdCB2YWx1ZSBpcyBgbnVsbGBcIi5cbiAgICpcbiAgICogICAgICpTaG9ydGhhbmQqOiBJZiB5b3Ugb25seSBuZWVkIHRvIGNvbmZpZ3VyZSB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGVcbiAgICogICAgIHBhcmFtZXRlciwgeW91IG1heSB1c2UgYSBzaG9ydGhhbmQgc3ludGF4LiAgIEluIHRoZSAqKmBwYXJhbXNgKipcbiAgICogICAgIG1hcCwgaW5zdGVhZCBtYXBwaW5nIHRoZSBwYXJhbSBuYW1lIHRvIGEgZnVsbCBwYXJhbWV0ZXIgY29uZmlndXJhdGlvblxuICAgKiAgICAgb2JqZWN0LCBzaW1wbHkgc2V0IG1hcCBpdCB0byB0aGUgZGVmYXVsdCBwYXJhbWV0ZXIgdmFsdWUsIGUuZy46XG4gICAqXG4gICAqIDxwcmU+Ly8gZGVmaW5lIGEgcGFyYW1ldGVyJ3MgZGVmYXVsdCB2YWx1ZVxuICAgKiBwYXJhbXM6IHtcbiAgICogICAgIHBhcmFtMTogeyB2YWx1ZTogXCJkZWZhdWx0VmFsdWVcIiB9XG4gICAqIH1cbiAgICogLy8gc2hvcnRoYW5kIGRlZmF1bHQgdmFsdWVzXG4gICAqIHBhcmFtczoge1xuICAgKiAgICAgcGFyYW0xOiBcImRlZmF1bHRWYWx1ZVwiLFxuICAgKiAgICAgcGFyYW0yOiBcInBhcmFtMkRlZmF1bHRcIlxuICAgKiB9PC9wcmU+XG4gICAqXG4gICAqICAgLSAqKiBhcnJheSAqKiAtIHtib29sZWFuPX06ICooZGVmYXVsdDogZmFsc2UpKiBJZiB0cnVlLCB0aGUgcGFyYW0gdmFsdWUgd2lsbCBiZVxuICAgKiAgICAgdHJlYXRlZCBhcyBhbiBhcnJheSBvZiB2YWx1ZXMuICBJZiB5b3Ugc3BlY2lmaWVkIGEgVHlwZSwgdGhlIHZhbHVlIHdpbGwgYmVcbiAgICogICAgIHRyZWF0ZWQgYXMgYW4gYXJyYXkgb2YgdGhlIHNwZWNpZmllZCBUeXBlLiAgTm90ZTogcXVlcnkgcGFyYW1ldGVyIHZhbHVlc1xuICAgKiAgICAgZGVmYXVsdCB0byBhIHNwZWNpYWwgYFwiYXV0b1wiYCBtb2RlLlxuICAgKlxuICAgKiAgICAgRm9yIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gYFwiYXV0b1wiYCBtb2RlLCBpZiBtdWx0aXBsZSAgdmFsdWVzIGZvciBhIHNpbmdsZSBwYXJhbWV0ZXJcbiAgICogICAgIGFyZSBwcmVzZW50IGluIHRoZSBVUkwgKGUuZy46IGAvZm9vP2Jhcj0xJmJhcj0yJmJhcj0zYCkgdGhlbiB0aGUgdmFsdWVzXG4gICAqICAgICBhcmUgbWFwcGVkIHRvIGFuIGFycmF5IChlLmcuOiBgeyBmb286IFsgJzEnLCAnMicsICczJyBdIH1gKS4gIEhvd2V2ZXIsIGlmXG4gICAqICAgICBvbmx5IG9uZSB2YWx1ZSBpcyBwcmVzZW50IChlLmcuOiBgL2Zvbz9iYXI9MWApIHRoZW4gdGhlIHZhbHVlIGlzIHRyZWF0ZWQgYXMgc2luZ2xlXG4gICAqICAgICB2YWx1ZSAoZS5nLjogYHsgZm9vOiAnMScgfWApLlxuICAgKlxuICAgKiA8cHJlPnBhcmFtczoge1xuICAgKiAgICAgcGFyYW0xOiB7IGFycmF5OiB0cnVlIH1cbiAgICogfTwvcHJlPlxuICAgKlxuICAgKiAgIC0gKiogc3F1YXNoICoqIC0ge2Jvb2x8c3RyaW5nPX06IGBzcXVhc2hgIGNvbmZpZ3VyZXMgaG93IGEgZGVmYXVsdCBwYXJhbWV0ZXIgdmFsdWUgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIFVSTCB3aGVuXG4gICAqICAgICB0aGUgY3VycmVudCBwYXJhbWV0ZXIgdmFsdWUgaXMgdGhlIHNhbWUgYXMgdGhlIGRlZmF1bHQgdmFsdWUuIElmIGBzcXVhc2hgIGlzIG5vdCBzZXQsIGl0IHVzZXMgdGhlXG4gICAqICAgICBjb25maWd1cmVkIGRlZmF1bHQgc3F1YXNoIHBvbGljeS5cbiAgICogICAgIChTZWUge0BsaW5rIHVpLnJvdXRlci51dGlsLiR1cmxNYXRjaGVyRmFjdG9yeSNtZXRob2RzX2RlZmF1bHRTcXVhc2hQb2xpY3kgYGRlZmF1bHRTcXVhc2hQb2xpY3koKWB9KVxuICAgKlxuICAgKiAgIFRoZXJlIGFyZSB0aHJlZSBzcXVhc2ggc2V0dGluZ3M6XG4gICAqXG4gICAqICAgICAtIGZhbHNlOiBUaGUgcGFyYW1ldGVyJ3MgZGVmYXVsdCB2YWx1ZSBpcyBub3Qgc3F1YXNoZWQuICBJdCBpcyBlbmNvZGVkIGFuZCBpbmNsdWRlZCBpbiB0aGUgVVJMXG4gICAqICAgICAtIHRydWU6IFRoZSBwYXJhbWV0ZXIncyBkZWZhdWx0IHZhbHVlIGlzIG9taXR0ZWQgZnJvbSB0aGUgVVJMLiAgSWYgdGhlIHBhcmFtZXRlciBpcyBwcmVjZWVkZWQgYW5kIGZvbGxvd2VkXG4gICAqICAgICAgIGJ5IHNsYXNoZXMgaW4gdGhlIHN0YXRlJ3MgYHVybGAgZGVjbGFyYXRpb24sIHRoZW4gb25lIG9mIHRob3NlIHNsYXNoZXMgYXJlIG9taXR0ZWQuXG4gICAqICAgICAgIFRoaXMgY2FuIGFsbG93IGZvciBjbGVhbmVyIGxvb2tpbmcgVVJMcy5cbiAgICogICAgIC0gYFwiPGFyYml0cmFyeSBzdHJpbmc+XCJgOiBUaGUgcGFyYW1ldGVyJ3MgZGVmYXVsdCB2YWx1ZSBpcyByZXBsYWNlZCB3aXRoIGFuIGFyYml0cmFyeSBwbGFjZWhvbGRlciBvZiAgeW91ciBjaG9pY2UuXG4gICAqXG4gICAqIDxwcmU+cGFyYW1zOiB7XG4gICAqICAgICBwYXJhbTE6IHtcbiAgICogICAgICAgdmFsdWU6IFwiZGVmYXVsdElkXCIsXG4gICAqICAgICAgIHNxdWFzaDogdHJ1ZVxuICAgKiB9IH1cbiAgICogLy8gc3F1YXNoIFwiZGVmYXVsdFZhbHVlXCIgdG8gXCJ+XCJcbiAgICogcGFyYW1zOiB7XG4gICAqICAgICBwYXJhbTE6IHtcbiAgICogICAgICAgdmFsdWU6IFwiZGVmYXVsdFZhbHVlXCIsXG4gICAqICAgICAgIHNxdWFzaDogXCJ+XCJcbiAgICogfSB9XG4gICAqIDwvcHJlPlxuICAgKlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8cHJlPlxuICAgKiAvLyBTb21lIHN0YXRlIG5hbWUgZXhhbXBsZXNcbiAgICpcbiAgICogLy8gc3RhdGVOYW1lIGNhbiBiZSBhIHNpbmdsZSB0b3AtbGV2ZWwgbmFtZSAobXVzdCBiZSB1bmlxdWUpLlxuICAgKiAkc3RhdGVQcm92aWRlci5zdGF0ZShcImhvbWVcIiwge30pO1xuICAgKlxuICAgKiAvLyBPciBpdCBjYW4gYmUgYSBuZXN0ZWQgc3RhdGUgbmFtZS4gVGhpcyBzdGF0ZSBpcyBhIGNoaWxkIG9mIHRoZVxuICAgKiAvLyBhYm92ZSBcImhvbWVcIiBzdGF0ZS5cbiAgICogJHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJob21lLm5ld2VzdFwiLCB7fSk7XG4gICAqXG4gICAqIC8vIE5lc3Qgc3RhdGVzIGFzIGRlZXBseSBhcyBuZWVkZWQuXG4gICAqICRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiaG9tZS5uZXdlc3QuYWJjLnh5ei5pbmNlcHRpb25cIiwge30pO1xuICAgKlxuICAgKiAvLyBzdGF0ZSgpIHJldHVybnMgJHN0YXRlUHJvdmlkZXIsIHNvIHlvdSBjYW4gY2hhaW4gc3RhdGUgZGVjbGFyYXRpb25zLlxuICAgKiAkc3RhdGVQcm92aWRlclxuICAgKiAgIC5zdGF0ZShcImhvbWVcIiwge30pXG4gICAqICAgLnN0YXRlKFwiYWJvdXRcIiwge30pXG4gICAqICAgLnN0YXRlKFwiY29udGFjdHNcIiwge30pO1xuICAgKiA8L3ByZT5cbiAgICpcbiAgICovXG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgZnVuY3Rpb24gc3RhdGUobmFtZSwgZGVmaW5pdGlvbikge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuICAgIGlmIChpc09iamVjdChuYW1lKSkgZGVmaW5pdGlvbiA9IG5hbWU7XG4gICAgZWxzZSBkZWZpbml0aW9uLm5hbWUgPSBuYW1lO1xuICAgIHJlZ2lzdGVyU3RhdGUoZGVmaW5pdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQG5nZG9jIG9iamVjdFxuICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAqXG4gICAqIEByZXF1aXJlcyAkcm9vdFNjb3BlXG4gICAqIEByZXF1aXJlcyAkcVxuICAgKiBAcmVxdWlyZXMgdWkucm91dGVyLnN0YXRlLiR2aWV3XG4gICAqIEByZXF1aXJlcyAkaW5qZWN0b3JcbiAgICogQHJlcXVpcmVzIHVpLnJvdXRlci51dGlsLiRyZXNvbHZlXG4gICAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlUGFyYW1zXG4gICAqIEByZXF1aXJlcyB1aS5yb3V0ZXIucm91dGVyLiR1cmxSb3V0ZXJcbiAgICpcbiAgICogQHByb3BlcnR5IHtvYmplY3R9IHBhcmFtcyBBIHBhcmFtIG9iamVjdCwgZS5nLiB7c2VjdGlvbklkOiBzZWN0aW9uLmlkKX0sIHRoYXQgXG4gICAqIHlvdSdkIGxpa2UgdG8gdGVzdCBhZ2FpbnN0IHRoZSBjdXJyZW50IGFjdGl2ZSBzdGF0ZS5cbiAgICogQHByb3BlcnR5IHtvYmplY3R9IGN1cnJlbnQgQSByZWZlcmVuY2UgdG8gdGhlIHN0YXRlJ3MgY29uZmlnIG9iamVjdC4gSG93ZXZlciBcbiAgICogeW91IHBhc3NlZCBpdCBpbi4gVXNlZnVsIGZvciBhY2Nlc3NpbmcgY3VzdG9tIGRhdGEuXG4gICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSB0cmFuc2l0aW9uIEN1cnJlbnRseSBwZW5kaW5nIHRyYW5zaXRpb24uIEEgcHJvbWlzZSB0aGF0J2xsIFxuICAgKiByZXNvbHZlIG9yIHJlamVjdC5cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGAkc3RhdGVgIHNlcnZpY2UgaXMgcmVzcG9uc2libGUgZm9yIHJlcHJlc2VudGluZyBzdGF0ZXMgYXMgd2VsbCBhcyB0cmFuc2l0aW9uaW5nXG4gICAqIGJldHdlZW4gdGhlbS4gSXQgYWxzbyBwcm92aWRlcyBpbnRlcmZhY2VzIHRvIGFzayBmb3IgY3VycmVudCBzdGF0ZSBvciBldmVuIHN0YXRlc1xuICAgKiB5b3UncmUgY29taW5nIGZyb20uXG4gICAqL1xuICB0aGlzLiRnZXQgPSAkZ2V0O1xuICAkZ2V0LiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHEnLCAnJHZpZXcnLCAnJGluamVjdG9yJywgJyRyZXNvbHZlJywgJyRzdGF0ZVBhcmFtcycsICckdXJsUm91dGVyJywgJyRsb2NhdGlvbicsICckdXJsTWF0Y2hlckZhY3RvcnknXTtcbiAgZnVuY3Rpb24gJGdldCggICAkcm9vdFNjb3BlLCAgICRxLCAgICR2aWV3LCAgICRpbmplY3RvciwgICAkcmVzb2x2ZSwgICAkc3RhdGVQYXJhbXMsICAgJHVybFJvdXRlciwgICAkbG9jYXRpb24sICAgJHVybE1hdGNoZXJGYWN0b3J5KSB7XG5cbiAgICB2YXIgVHJhbnNpdGlvblN1cGVyc2VkZWRFcnJvciA9IG5ldyBFcnJvcigndHJhbnNpdGlvbiBzdXBlcnNlZGVkJyk7XG5cbiAgICB2YXIgVHJhbnNpdGlvblN1cGVyc2VkZWQgPSBzaWxlbmNlVW5jYXVnaHRJblByb21pc2UoJHEucmVqZWN0KFRyYW5zaXRpb25TdXBlcnNlZGVkRXJyb3IpKTtcbiAgICB2YXIgVHJhbnNpdGlvblByZXZlbnRlZCA9IHNpbGVuY2VVbmNhdWdodEluUHJvbWlzZSgkcS5yZWplY3QobmV3IEVycm9yKCd0cmFuc2l0aW9uIHByZXZlbnRlZCcpKSk7XG4gICAgdmFyIFRyYW5zaXRpb25BYm9ydGVkID0gc2lsZW5jZVVuY2F1Z2h0SW5Qcm9taXNlKCRxLnJlamVjdChuZXcgRXJyb3IoJ3RyYW5zaXRpb24gYWJvcnRlZCcpKSk7XG4gICAgdmFyIFRyYW5zaXRpb25GYWlsZWQgPSBzaWxlbmNlVW5jYXVnaHRJblByb21pc2UoJHEucmVqZWN0KG5ldyBFcnJvcigndHJhbnNpdGlvbiBmYWlsZWQnKSkpO1xuXG4gICAgLy8gSGFuZGxlcyB0aGUgY2FzZSB3aGVyZSBhIHN0YXRlIHdoaWNoIGlzIHRoZSB0YXJnZXQgb2YgYSB0cmFuc2l0aW9uIGlzIG5vdCBmb3VuZCwgYW5kIHRoZSB1c2VyXG4gICAgLy8gY2FuIG9wdGlvbmFsbHkgcmV0cnkgb3IgZGVmZXIgdGhlIHRyYW5zaXRpb25cbiAgICBmdW5jdGlvbiBoYW5kbGVSZWRpcmVjdChyZWRpcmVjdCwgc3RhdGUsIHBhcmFtcywgb3B0aW9ucykge1xuICAgICAgLyoqXG4gICAgICAgKiBAbmdkb2MgZXZlbnRcbiAgICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjJHN0YXRlTm90Rm91bmRcbiAgICAgICAqIEBldmVudE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAgICAgICAqIEBldmVudFR5cGUgYnJvYWRjYXN0IG9uIHJvb3Qgc2NvcGVcbiAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICogRmlyZWQgd2hlbiBhIHJlcXVlc3RlZCBzdGF0ZSAqKmNhbm5vdCBiZSBmb3VuZCoqIHVzaW5nIHRoZSBwcm92aWRlZCBzdGF0ZSBuYW1lIGR1cmluZyB0cmFuc2l0aW9uLlxuICAgICAgICogVGhlIGV2ZW50IGlzIGJyb2FkY2FzdCBhbGxvd2luZyBhbnkgaGFuZGxlcnMgYSBzaW5nbGUgY2hhbmNlIHRvIGRlYWwgd2l0aCB0aGUgZXJyb3IgKHVzdWFsbHkgYnlcbiAgICAgICAqIGxhenktbG9hZGluZyB0aGUgdW5mb3VuZCBzdGF0ZSkuIEEgc3BlY2lhbCBgdW5mb3VuZFN0YXRlYCBvYmplY3QgaXMgcGFzc2VkIHRvIHRoZSBsaXN0ZW5lciBoYW5kbGVyLFxuICAgICAgICogeW91IGNhbiBzZWUgaXRzIHRocmVlIHByb3BlcnRpZXMgaW4gdGhlIGV4YW1wbGUuIFlvdSBjYW4gdXNlIGBldmVudC5wcmV2ZW50RGVmYXVsdCgpYCB0byBhYm9ydCB0aGVcbiAgICAgICAqIHRyYW5zaXRpb24gYW5kIHRoZSBwcm9taXNlIHJldHVybmVkIGZyb20gYGdvYCB3aWxsIGJlIHJlamVjdGVkIHdpdGggYSBgJ3RyYW5zaXRpb24gYWJvcnRlZCdgIHZhbHVlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudCBvYmplY3QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5mb3VuZFN0YXRlIFVuZm91bmQgU3RhdGUgaW5mb3JtYXRpb24uIENvbnRhaW5zOiBgdG8sIHRvUGFyYW1zLCBvcHRpb25zYCBwcm9wZXJ0aWVzLlxuICAgICAgICogQHBhcmFtIHtTdGF0ZX0gZnJvbVN0YXRlIEN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IGZyb21QYXJhbXMgQ3VycmVudCBzdGF0ZSBwYXJhbXMuXG4gICAgICAgKlxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqXG4gICAgICAgKiA8cHJlPlxuICAgICAgICogLy8gc29tZXdoZXJlLCBhc3N1bWUgbGF6eS5zdGF0ZSBoYXMgbm90IGJlZW4gZGVmaW5lZFxuICAgICAgICogJHN0YXRlLmdvKFwibGF6eS5zdGF0ZVwiLCB7YToxLCBiOjJ9LCB7aW5oZXJpdDpmYWxzZX0pO1xuICAgICAgICpcbiAgICAgICAqIC8vIHNvbWV3aGVyZSBlbHNlXG4gICAgICAgKiAkc2NvcGUuJG9uKCckc3RhdGVOb3RGb3VuZCcsXG4gICAgICAgKiBmdW5jdGlvbihldmVudCwgdW5mb3VuZFN0YXRlLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpe1xuICAgICAgICogICAgIGNvbnNvbGUubG9nKHVuZm91bmRTdGF0ZS50byk7IC8vIFwibGF6eS5zdGF0ZVwiXG4gICAgICAgKiAgICAgY29uc29sZS5sb2codW5mb3VuZFN0YXRlLnRvUGFyYW1zKTsgLy8ge2E6MSwgYjoyfVxuICAgICAgICogICAgIGNvbnNvbGUubG9nKHVuZm91bmRTdGF0ZS5vcHRpb25zKTsgLy8ge2luaGVyaXQ6ZmFsc2V9ICsgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgKiB9KVxuICAgICAgICogPC9wcmU+XG4gICAgICAgKi9cbiAgICAgIHZhciBldnQgPSAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRzdGF0ZU5vdEZvdW5kJywgcmVkaXJlY3QsIHN0YXRlLCBwYXJhbXMpO1xuXG4gICAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgJHVybFJvdXRlci51cGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIFRyYW5zaXRpb25BYm9ydGVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWV2dC5yZXRyeSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gQWxsb3cgdGhlIGhhbmRsZXIgdG8gcmV0dXJuIGEgcHJvbWlzZSB0byBkZWZlciBzdGF0ZSBsb29rdXAgcmV0cnlcbiAgICAgIGlmIChvcHRpb25zLiRyZXRyeSkge1xuICAgICAgICAkdXJsUm91dGVyLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gVHJhbnNpdGlvbkZhaWxlZDtcbiAgICAgIH1cbiAgICAgIHZhciByZXRyeVRyYW5zaXRpb24gPSAkc3RhdGUudHJhbnNpdGlvbiA9ICRxLndoZW4oZXZ0LnJldHJ5KTtcblxuICAgICAgcmV0cnlUcmFuc2l0aW9uLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChyZXRyeVRyYW5zaXRpb24gIT09ICRzdGF0ZS50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCckc3RhdGVDaGFuZ2VDYW5jZWwnLCByZWRpcmVjdC50bywgcmVkaXJlY3QudG9QYXJhbXMsIHN0YXRlLCBwYXJhbXMpO1xuICAgICAgICAgIHJldHVybiBUcmFuc2l0aW9uU3VwZXJzZWRlZDtcbiAgICAgICAgfVxuICAgICAgICByZWRpcmVjdC5vcHRpb25zLiRyZXRyeSA9IHRydWU7XG4gICAgICAgIHJldHVybiAkc3RhdGUudHJhbnNpdGlvblRvKHJlZGlyZWN0LnRvLCByZWRpcmVjdC50b1BhcmFtcywgcmVkaXJlY3Qub3B0aW9ucyk7XG4gICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zaXRpb25BYm9ydGVkO1xuICAgICAgfSk7XG4gICAgICAkdXJsUm91dGVyLnVwZGF0ZSgpO1xuXG4gICAgICByZXR1cm4gcmV0cnlUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIHJvb3QubG9jYWxzID0geyByZXNvbHZlOiBudWxsLCBnbG9iYWxzOiB7ICRzdGF0ZVBhcmFtczoge30gfSB9O1xuXG4gICAgJHN0YXRlID0ge1xuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIGN1cnJlbnQ6IHJvb3Quc2VsZixcbiAgICAgICRjdXJyZW50OiByb290LFxuICAgICAgdHJhbnNpdGlvbjogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI3JlbG9hZFxuICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBBIG1ldGhvZCB0aGF0IGZvcmNlIHJlbG9hZHMgdGhlIGN1cnJlbnQgc3RhdGUuIEFsbCByZXNvbHZlcyBhcmUgcmUtcmVzb2x2ZWQsXG4gICAgICogY29udHJvbGxlcnMgcmVpbnN0YW50aWF0ZWQsIGFuZCBldmVudHMgcmUtZmlyZWQuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIDxwcmU+XG4gICAgICogdmFyIGFwcCBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInXSk7XG4gICAgICpcbiAgICAgKiBhcHAuY29udHJvbGxlcignY3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSkge1xuICAgICAqICAgJHNjb3BlLnJlbG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICogICAgICRzdGF0ZS5yZWxvYWQoKTtcbiAgICAgKiAgIH1cbiAgICAgKiB9KTtcbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIGByZWxvYWQoKWAgaXMganVzdCBhbiBhbGlhcyBmb3I6XG4gICAgICogPHByZT5cbiAgICAgKiAkc3RhdGUudHJhbnNpdGlvblRvKCRzdGF0ZS5jdXJyZW50LCAkc3RhdGVQYXJhbXMsIHsgXG4gICAgICogICByZWxvYWQ6IHRydWUsIGluaGVyaXQ6IGZhbHNlLCBub3RpZnk6IHRydWVcbiAgICAgKiB9KTtcbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nPXxvYmplY3Q9fSBzdGF0ZSAtIEEgc3RhdGUgbmFtZSBvciBhIHN0YXRlIG9iamVjdCwgd2hpY2ggaXMgdGhlIHJvb3Qgb2YgdGhlIHJlc29sdmVzIHRvIGJlIHJlLXJlc29sdmVkLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogPHByZT5cbiAgICAgKiAvL2Fzc3VtaW5nIGFwcCBhcHBsaWNhdGlvbiBjb25zaXN0cyBvZiAzIHN0YXRlczogJ2NvbnRhY3RzJywgJ2NvbnRhY3RzLmRldGFpbCcsICdjb250YWN0cy5kZXRhaWwuaXRlbScgXG4gICAgICogLy9hbmQgY3VycmVudCBzdGF0ZSBpcyAnY29udGFjdHMuZGV0YWlsLml0ZW0nXG4gICAgICogdmFyIGFwcCBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInXSk7XG4gICAgICpcbiAgICAgKiBhcHAuY29udHJvbGxlcignY3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSkge1xuICAgICAqICAgJHNjb3BlLnJlbG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICogICAgIC8vd2lsbCByZWxvYWQgJ2NvbnRhY3QuZGV0YWlsJyBhbmQgJ2NvbnRhY3QuZGV0YWlsLml0ZW0nIHN0YXRlc1xuICAgICAqICAgICAkc3RhdGUucmVsb2FkKCdjb250YWN0LmRldGFpbCcpO1xuICAgICAqICAgfVxuICAgICAqIH0pO1xuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogYHJlbG9hZCgpYCBpcyBqdXN0IGFuIGFsaWFzIGZvcjpcbiAgICAgKiA8cHJlPlxuICAgICAqICRzdGF0ZS50cmFuc2l0aW9uVG8oJHN0YXRlLmN1cnJlbnQsICRzdGF0ZVBhcmFtcywgeyBcbiAgICAgKiAgIHJlbG9hZDogdHJ1ZSwgaW5oZXJpdDogZmFsc2UsIG5vdGlmeTogdHJ1ZVxuICAgICAqIH0pO1xuICAgICAqIDwvcHJlPlxuXG4gICAgICogQHJldHVybnMge3Byb21pc2V9IEEgcHJvbWlzZSByZXByZXNlbnRpbmcgdGhlIHN0YXRlIG9mIHRoZSBuZXcgdHJhbnNpdGlvbi4gU2VlXG4gICAgICoge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjbWV0aG9kc19nbyAkc3RhdGUuZ299LlxuICAgICAqL1xuICAgICRzdGF0ZS5yZWxvYWQgPSBmdW5jdGlvbiByZWxvYWQoc3RhdGUpIHtcbiAgICAgIHJldHVybiAkc3RhdGUudHJhbnNpdGlvblRvKCRzdGF0ZS5jdXJyZW50LCAkc3RhdGVQYXJhbXMsIHsgcmVsb2FkOiBzdGF0ZSB8fCB0cnVlLCBpbmhlcml0OiBmYWxzZSwgbm90aWZ5OiB0cnVlfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjZ29cbiAgICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICAgICAqXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciB0cmFuc2l0aW9uaW5nIHRvIGEgbmV3IHN0YXRlLiBgJHN0YXRlLmdvYCBjYWxscyBcbiAgICAgKiBgJHN0YXRlLnRyYW5zaXRpb25Ub2AgaW50ZXJuYWxseSBidXQgYXV0b21hdGljYWxseSBzZXRzIG9wdGlvbnMgdG8gXG4gICAgICogYHsgbG9jYXRpb246IHRydWUsIGluaGVyaXQ6IHRydWUsIHJlbGF0aXZlOiAkc3RhdGUuJGN1cnJlbnQsIG5vdGlmeTogdHJ1ZSB9YC4gXG4gICAgICogVGhpcyBhbGxvd3MgeW91IHRvIGVhc2lseSB1c2UgYW4gYWJzb2x1dGUgb3IgcmVsYXRpdmUgdG8gcGF0aCBhbmQgc3BlY2lmeSBcbiAgICAgKiBvbmx5IHRoZSBwYXJhbWV0ZXJzIHlvdSdkIGxpa2UgdG8gdXBkYXRlICh3aGlsZSBsZXR0aW5nIHVuc3BlY2lmaWVkIHBhcmFtZXRlcnMgXG4gICAgICogaW5oZXJpdCBmcm9tIHRoZSBjdXJyZW50bHkgYWN0aXZlIGFuY2VzdG9yIHN0YXRlcykuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIDxwcmU+XG4gICAgICogdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlciddKTtcbiAgICAgKlxuICAgICAqIGFwcC5jb250cm9sbGVyKCdjdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICogICAkc2NvcGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICogICAgICRzdGF0ZS5nbygnY29udGFjdC5kZXRhaWwnKTtcbiAgICAgKiAgIH07XG4gICAgICogfSk7XG4gICAgICogPC9wcmU+XG4gICAgICogPGltZyBzcmM9Jy4uL25nZG9jX2Fzc2V0cy9TdGF0ZUdvRXhhbXBsZXMucG5nJy8+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG8gQWJzb2x1dGUgc3RhdGUgbmFtZSBvciByZWxhdGl2ZSBzdGF0ZSBwYXRoLiBTb21lIGV4YW1wbGVzOlxuICAgICAqXG4gICAgICogLSBgJHN0YXRlLmdvKCdjb250YWN0LmRldGFpbCcpYCAtIHdpbGwgZ28gdG8gdGhlIGBjb250YWN0LmRldGFpbGAgc3RhdGVcbiAgICAgKiAtIGAkc3RhdGUuZ28oJ14nKWAgLSB3aWxsIGdvIHRvIGEgcGFyZW50IHN0YXRlXG4gICAgICogLSBgJHN0YXRlLmdvKCdeLnNpYmxpbmcnKWAgLSB3aWxsIGdvIHRvIGEgc2libGluZyBzdGF0ZVxuICAgICAqIC0gYCRzdGF0ZS5nbygnLmNoaWxkLmdyYW5kY2hpbGQnKWAgLSB3aWxsIGdvIHRvIGdyYW5kY2hpbGQgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0PX0gcGFyYW1zIEEgbWFwIG9mIHRoZSBwYXJhbWV0ZXJzIHRoYXQgd2lsbCBiZSBzZW50IHRvIHRoZSBzdGF0ZSwgXG4gICAgICogd2lsbCBwb3B1bGF0ZSAkc3RhdGVQYXJhbXMuIEFueSBwYXJhbWV0ZXJzIHRoYXQgYXJlIG5vdCBzcGVjaWZpZWQgd2lsbCBiZSBpbmhlcml0ZWQgZnJvbSBjdXJyZW50bHkgXG4gICAgICogZGVmaW5lZCBwYXJhbWV0ZXJzLiBPbmx5IHBhcmFtZXRlcnMgc3BlY2lmaWVkIGluIHRoZSBzdGF0ZSBkZWZpbml0aW9uIGNhbiBiZSBvdmVycmlkZGVuLCBuZXcgXG4gICAgICogcGFyYW1ldGVycyB3aWxsIGJlIGlnbm9yZWQuIFRoaXMgYWxsb3dzLCBmb3IgZXhhbXBsZSwgZ29pbmcgdG8gYSBzaWJsaW5nIHN0YXRlIHRoYXQgc2hhcmVzIHBhcmFtZXRlcnNcbiAgICAgKiBzcGVjaWZpZWQgaW4gYSBwYXJlbnQgc3RhdGUuIFBhcmFtZXRlciBpbmhlcml0YW5jZSBvbmx5IHdvcmtzIGJldHdlZW4gY29tbW9uIGFuY2VzdG9yIHN0YXRlcywgSS5lLlxuICAgICAqIHRyYW5zaXRpb25pbmcgdG8gYSBzaWJsaW5nIHdpbGwgZ2V0IHlvdSB0aGUgcGFyYW1ldGVycyBmb3IgYWxsIHBhcmVudHMsIHRyYW5zaXRpb25pbmcgdG8gYSBjaGlsZFxuICAgICAqIHdpbGwgZ2V0IHlvdSBhbGwgY3VycmVudCBwYXJhbWV0ZXJzLCBldGMuXG4gICAgICogQHBhcmFtIHtvYmplY3Q9fSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0LiBUaGUgb3B0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtICoqYGxvY2F0aW9uYCoqIC0ge2Jvb2xlYW49dHJ1ZXxzdHJpbmc9fSAtIElmIGB0cnVlYCB3aWxsIHVwZGF0ZSB0aGUgdXJsIGluIHRoZSBsb2NhdGlvbiBiYXIsIGlmIGBmYWxzZWBcbiAgICAgKiAgICB3aWxsIG5vdC4gSWYgc3RyaW5nLCBtdXN0IGJlIGBcInJlcGxhY2VcImAsIHdoaWNoIHdpbGwgdXBkYXRlIHVybCBhbmQgYWxzbyByZXBsYWNlIGxhc3QgaGlzdG9yeSByZWNvcmQuXG4gICAgICogLSAqKmBpbmhlcml0YCoqIC0ge2Jvb2xlYW49dHJ1ZX0sIElmIGB0cnVlYCB3aWxsIGluaGVyaXQgdXJsIHBhcmFtZXRlcnMgZnJvbSBjdXJyZW50IHVybC5cbiAgICAgKiAtICoqYHJlbGF0aXZlYCoqIC0ge29iamVjdD0kc3RhdGUuJGN1cnJlbnR9LCBXaGVuIHRyYW5zaXRpb25pbmcgd2l0aCByZWxhdGl2ZSBwYXRoIChlLmcgJ14nKSwgXG4gICAgICogICAgZGVmaW5lcyB3aGljaCBzdGF0ZSB0byBiZSByZWxhdGl2ZSBmcm9tLlxuICAgICAqIC0gKipgbm90aWZ5YCoqIC0ge2Jvb2xlYW49dHJ1ZX0sIElmIGB0cnVlYCB3aWxsIGJyb2FkY2FzdCAkc3RhdGVDaGFuZ2VTdGFydCBhbmQgJHN0YXRlQ2hhbmdlU3VjY2VzcyBldmVudHMuXG4gICAgICogLSAqKmByZWxvYWRgKiogKHYwLjIuNSkgLSB7Ym9vbGVhbj1mYWxzZXxzdHJpbmd8b2JqZWN0fSwgSWYgYHRydWVgIHdpbGwgZm9yY2UgdHJhbnNpdGlvbiBldmVuIGlmIG5vIHN0YXRlIG9yIHBhcmFtc1xuICAgICAqICAgIGhhdmUgY2hhbmdlZC4gIEl0IHdpbGwgcmVsb2FkIHRoZSByZXNvbHZlcyBhbmQgdmlld3Mgb2YgdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHBhcmVudCBzdGF0ZXMuXG4gICAgICogICAgSWYgYHJlbG9hZGAgaXMgYSBzdHJpbmcgKG9yIHN0YXRlIG9iamVjdCksIHRoZSBzdGF0ZSBvYmplY3QgaXMgZmV0Y2hlZCAoYnkgbmFtZSwgb3Igb2JqZWN0IHJlZmVyZW5jZSk7IGFuZCBcXFxuICAgICAqICAgIHRoZSB0cmFuc2l0aW9uIHJlbG9hZHMgdGhlIHJlc29sdmVzIGFuZCB2aWV3cyBmb3IgdGhhdCBtYXRjaGVkIHN0YXRlLCBhbmQgYWxsIGl0cyBjaGlsZHJlbiBzdGF0ZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX0gQSBwcm9taXNlIHJlcHJlc2VudGluZyB0aGUgc3RhdGUgb2YgdGhlIG5ldyB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogUG9zc2libGUgc3VjY2VzcyB2YWx1ZXM6XG4gICAgICpcbiAgICAgKiAtICRzdGF0ZS5jdXJyZW50XG4gICAgICpcbiAgICAgKiA8YnIvPlBvc3NpYmxlIHJlamVjdGlvbiB2YWx1ZXM6XG4gICAgICpcbiAgICAgKiAtICd0cmFuc2l0aW9uIHN1cGVyc2VkZWQnIC0gd2hlbiBhIG5ld2VyIHRyYW5zaXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhZnRlciB0aGlzIG9uZVxuICAgICAqIC0gJ3RyYW5zaXRpb24gcHJldmVudGVkJyAtIHdoZW4gYGV2ZW50LnByZXZlbnREZWZhdWx0KClgIGhhcyBiZWVuIGNhbGxlZCBpbiBhIGAkc3RhdGVDaGFuZ2VTdGFydGAgbGlzdGVuZXJcbiAgICAgKiAtICd0cmFuc2l0aW9uIGFib3J0ZWQnIC0gd2hlbiBgZXZlbnQucHJldmVudERlZmF1bHQoKWAgaGFzIGJlZW4gY2FsbGVkIGluIGEgYCRzdGF0ZU5vdEZvdW5kYCBsaXN0ZW5lciBvclxuICAgICAqICAgd2hlbiBhIGAkc3RhdGVOb3RGb3VuZGAgYGV2ZW50LnJldHJ5YCBwcm9taXNlIGVycm9ycy5cbiAgICAgKiAtICd0cmFuc2l0aW9uIGZhaWxlZCcgLSB3aGVuIGEgc3RhdGUgaGFzIGJlZW4gdW5zdWNjZXNzZnVsbHkgZm91bmQgYWZ0ZXIgMiB0cmllcy5cbiAgICAgKiAtICpyZXNvbHZlIGVycm9yKiAtIHdoZW4gYW4gZXJyb3IgaGFzIG9jY3VycmVkIHdpdGggYSBgcmVzb2x2ZWBcbiAgICAgKlxuICAgICAqL1xuICAgICRzdGF0ZS5nbyA9IGZ1bmN0aW9uIGdvKHRvLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAkc3RhdGUudHJhbnNpdGlvblRvKHRvLCBwYXJhbXMsIGV4dGVuZCh7IGluaGVyaXQ6IHRydWUsIHJlbGF0aXZlOiAkc3RhdGUuJGN1cnJlbnQgfSwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI3RyYW5zaXRpb25Ub1xuICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBMb3ctbGV2ZWwgbWV0aG9kIGZvciB0cmFuc2l0aW9uaW5nIHRvIGEgbmV3IHN0YXRlLiB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2dvICRzdGF0ZS5nb31cbiAgICAgKiB1c2VzIGB0cmFuc2l0aW9uVG9gIGludGVybmFsbHkuIGAkc3RhdGUuZ29gIGlzIHJlY29tbWVuZGVkIGluIG1vc3Qgc2l0dWF0aW9ucy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogPHByZT5cbiAgICAgKiB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJ10pO1xuICAgICAqXG4gICAgICogYXBwLmNvbnRyb2xsZXIoJ2N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUpIHtcbiAgICAgKiAgICRzY29wZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgJHN0YXRlLnRyYW5zaXRpb25UbygnY29udGFjdC5kZXRhaWwnKTtcbiAgICAgKiAgIH07XG4gICAgICogfSk7XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG8gU3RhdGUgbmFtZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdD19IHRvUGFyYW1zIEEgbWFwIG9mIHRoZSBwYXJhbWV0ZXJzIHRoYXQgd2lsbCBiZSBzZW50IHRvIHRoZSBzdGF0ZSxcbiAgICAgKiB3aWxsIHBvcHVsYXRlICRzdGF0ZVBhcmFtcy5cbiAgICAgKiBAcGFyYW0ge29iamVjdD19IG9wdGlvbnMgT3B0aW9ucyBvYmplY3QuIFRoZSBvcHRpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gKipgbG9jYXRpb25gKiogLSB7Ym9vbGVhbj10cnVlfHN0cmluZz19IC0gSWYgYHRydWVgIHdpbGwgdXBkYXRlIHRoZSB1cmwgaW4gdGhlIGxvY2F0aW9uIGJhciwgaWYgYGZhbHNlYFxuICAgICAqICAgIHdpbGwgbm90LiBJZiBzdHJpbmcsIG11c3QgYmUgYFwicmVwbGFjZVwiYCwgd2hpY2ggd2lsbCB1cGRhdGUgdXJsIGFuZCBhbHNvIHJlcGxhY2UgbGFzdCBoaXN0b3J5IHJlY29yZC5cbiAgICAgKiAtICoqYGluaGVyaXRgKiogLSB7Ym9vbGVhbj1mYWxzZX0sIElmIGB0cnVlYCB3aWxsIGluaGVyaXQgdXJsIHBhcmFtZXRlcnMgZnJvbSBjdXJyZW50IHVybC5cbiAgICAgKiAtICoqYHJlbGF0aXZlYCoqIC0ge29iamVjdD19LCBXaGVuIHRyYW5zaXRpb25pbmcgd2l0aCByZWxhdGl2ZSBwYXRoIChlLmcgJ14nKSwgXG4gICAgICogICAgZGVmaW5lcyB3aGljaCBzdGF0ZSB0byBiZSByZWxhdGl2ZSBmcm9tLlxuICAgICAqIC0gKipgbm90aWZ5YCoqIC0ge2Jvb2xlYW49dHJ1ZX0sIElmIGB0cnVlYCB3aWxsIGJyb2FkY2FzdCAkc3RhdGVDaGFuZ2VTdGFydCBhbmQgJHN0YXRlQ2hhbmdlU3VjY2VzcyBldmVudHMuXG4gICAgICogLSAqKmByZWxvYWRgKiogKHYwLjIuNSkgLSB7Ym9vbGVhbj1mYWxzZXxzdHJpbmc9fG9iamVjdD19LCBJZiBgdHJ1ZWAgd2lsbCBmb3JjZSB0cmFuc2l0aW9uIGV2ZW4gaWYgdGhlIHN0YXRlIG9yIHBhcmFtcyBcbiAgICAgKiAgICBoYXZlIG5vdCBjaGFuZ2VkLCBha2EgYSByZWxvYWQgb2YgdGhlIHNhbWUgc3RhdGUuIEl0IGRpZmZlcnMgZnJvbSByZWxvYWRPblNlYXJjaCBiZWNhdXNlIHlvdSdkXG4gICAgICogICAgdXNlIHRoaXMgd2hlbiB5b3Ugd2FudCB0byBmb3JjZSBhIHJlbG9hZCB3aGVuICpldmVyeXRoaW5nKiBpcyB0aGUgc2FtZSwgaW5jbHVkaW5nIHNlYXJjaCBwYXJhbXMuXG4gICAgICogICAgaWYgU3RyaW5nLCB0aGVuIHdpbGwgcmVsb2FkIHRoZSBzdGF0ZSB3aXRoIHRoZSBuYW1lIGdpdmVuIGluIHJlbG9hZCwgYW5kIGFueSBjaGlsZHJlbi5cbiAgICAgKiAgICBpZiBPYmplY3QsIHRoZW4gYSBzdGF0ZU9iaiBpcyBleHBlY3RlZCwgd2lsbCByZWxvYWQgdGhlIHN0YXRlIGZvdW5kIGluIHN0YXRlT2JqLCBhbmQgYW55IGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3Byb21pc2V9IEEgcHJvbWlzZSByZXByZXNlbnRpbmcgdGhlIHN0YXRlIG9mIHRoZSBuZXcgdHJhbnNpdGlvbi4gU2VlXG4gICAgICoge0BsaW5rIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjbWV0aG9kc19nbyAkc3RhdGUuZ299LlxuICAgICAqL1xuICAgICRzdGF0ZS50cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiB0cmFuc2l0aW9uVG8odG8sIHRvUGFyYW1zLCBvcHRpb25zKSB7XG4gICAgICB0b1BhcmFtcyA9IHRvUGFyYW1zIHx8IHt9O1xuICAgICAgb3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIGxvY2F0aW9uOiB0cnVlLCBpbmhlcml0OiBmYWxzZSwgcmVsYXRpdmU6IG51bGwsIG5vdGlmeTogdHJ1ZSwgcmVsb2FkOiBmYWxzZSwgJHJldHJ5OiBmYWxzZVxuICAgICAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICAgIHZhciBmcm9tID0gJHN0YXRlLiRjdXJyZW50LCBmcm9tUGFyYW1zID0gJHN0YXRlLnBhcmFtcywgZnJvbVBhdGggPSBmcm9tLnBhdGg7XG4gICAgICB2YXIgZXZ0LCB0b1N0YXRlID0gZmluZFN0YXRlKHRvLCBvcHRpb25zLnJlbGF0aXZlKTtcblxuICAgICAgLy8gU3RvcmUgdGhlIGhhc2ggcGFyYW0gZm9yIGxhdGVyIChzaW5jZSBpdCB3aWxsIGJlIHN0cmlwcGVkIG91dCBieSB2YXJpb3VzIG1ldGhvZHMpXG4gICAgICB2YXIgaGFzaCA9IHRvUGFyYW1zWycjJ107XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKHRvU3RhdGUpKSB7XG4gICAgICAgIHZhciByZWRpcmVjdCA9IHsgdG86IHRvLCB0b1BhcmFtczogdG9QYXJhbXMsIG9wdGlvbnM6IG9wdGlvbnMgfTtcbiAgICAgICAgdmFyIHJlZGlyZWN0UmVzdWx0ID0gaGFuZGxlUmVkaXJlY3QocmVkaXJlY3QsIGZyb20uc2VsZiwgZnJvbVBhcmFtcywgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHJlZGlyZWN0UmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlZGlyZWN0UmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWx3YXlzIHJldHJ5IG9uY2UgaWYgdGhlICRzdGF0ZU5vdEZvdW5kIHdhcyBub3QgcHJldmVudGVkXG4gICAgICAgIC8vIChoYW5kbGVzIGVpdGhlciByZWRpcmVjdCBjaGFuZ2VkIG9yIHN0YXRlIGxhenktZGVmaW5pdGlvbilcbiAgICAgICAgdG8gPSByZWRpcmVjdC50bztcbiAgICAgICAgdG9QYXJhbXMgPSByZWRpcmVjdC50b1BhcmFtcztcbiAgICAgICAgb3B0aW9ucyA9IHJlZGlyZWN0Lm9wdGlvbnM7XG4gICAgICAgIHRvU3RhdGUgPSBmaW5kU3RhdGUodG8sIG9wdGlvbnMucmVsYXRpdmUpO1xuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKHRvU3RhdGUpKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLnJlbGF0aXZlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIHN0YXRlICdcIiArIHRvICsgXCInXCIpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZXNvbHZlICdcIiArIHRvICsgXCInIGZyb20gc3RhdGUgJ1wiICsgb3B0aW9ucy5yZWxhdGl2ZSArIFwiJ1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRvU3RhdGVbYWJzdHJhY3RLZXldKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdHJhbnNpdGlvbiB0byBhYnN0cmFjdCBzdGF0ZSAnXCIgKyB0byArIFwiJ1wiKTtcbiAgICAgIGlmIChvcHRpb25zLmluaGVyaXQpIHRvUGFyYW1zID0gaW5oZXJpdFBhcmFtcygkc3RhdGVQYXJhbXMsIHRvUGFyYW1zIHx8IHt9LCAkc3RhdGUuJGN1cnJlbnQsIHRvU3RhdGUpO1xuICAgICAgaWYgKCF0b1N0YXRlLnBhcmFtcy4kJHZhbGlkYXRlcyh0b1BhcmFtcykpIHJldHVybiBUcmFuc2l0aW9uRmFpbGVkO1xuXG4gICAgICB0b1BhcmFtcyA9IHRvU3RhdGUucGFyYW1zLiQkdmFsdWVzKHRvUGFyYW1zKTtcbiAgICAgIHRvID0gdG9TdGF0ZTtcblxuICAgICAgdmFyIHRvUGF0aCA9IHRvLnBhdGg7XG5cbiAgICAgIC8vIFN0YXJ0aW5nIGZyb20gdGhlIHJvb3Qgb2YgdGhlIHBhdGgsIGtlZXAgYWxsIGxldmVscyB0aGF0IGhhdmVuJ3QgY2hhbmdlZFxuICAgICAgdmFyIGtlZXAgPSAwLCBzdGF0ZSA9IHRvUGF0aFtrZWVwXSwgbG9jYWxzID0gcm9vdC5sb2NhbHMsIHRvTG9jYWxzID0gW107XG5cbiAgICAgIGlmICghb3B0aW9ucy5yZWxvYWQpIHtcbiAgICAgICAgd2hpbGUgKHN0YXRlICYmIHN0YXRlID09PSBmcm9tUGF0aFtrZWVwXSAmJiBzdGF0ZS5vd25QYXJhbXMuJCRlcXVhbHModG9QYXJhbXMsIGZyb21QYXJhbXMpKSB7XG4gICAgICAgICAgbG9jYWxzID0gdG9Mb2NhbHNba2VlcF0gPSBzdGF0ZS5sb2NhbHM7XG4gICAgICAgICAga2VlcCsrO1xuICAgICAgICAgIHN0YXRlID0gdG9QYXRoW2tlZXBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKG9wdGlvbnMucmVsb2FkKSB8fCBpc09iamVjdChvcHRpb25zLnJlbG9hZCkpIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KG9wdGlvbnMucmVsb2FkKSAmJiAhb3B0aW9ucy5yZWxvYWQubmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZWxvYWQgc3RhdGUgb2JqZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciByZWxvYWRTdGF0ZSA9IG9wdGlvbnMucmVsb2FkID09PSB0cnVlID8gZnJvbVBhdGhbMF0gOiBmaW5kU3RhdGUob3B0aW9ucy5yZWxvYWQpO1xuICAgICAgICBpZiAob3B0aW9ucy5yZWxvYWQgJiYgIXJlbG9hZFN0YXRlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCByZWxvYWQgc3RhdGUgJ1wiICsgKGlzU3RyaW5nKG9wdGlvbnMucmVsb2FkKSA/IG9wdGlvbnMucmVsb2FkIDogb3B0aW9ucy5yZWxvYWQubmFtZSkgKyBcIidcIik7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoc3RhdGUgJiYgc3RhdGUgPT09IGZyb21QYXRoW2tlZXBdICYmIHN0YXRlICE9PSByZWxvYWRTdGF0ZSkge1xuICAgICAgICAgIGxvY2FscyA9IHRvTG9jYWxzW2tlZXBdID0gc3RhdGUubG9jYWxzO1xuICAgICAgICAgIGtlZXArKztcbiAgICAgICAgICBzdGF0ZSA9IHRvUGF0aFtrZWVwXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSdyZSBnb2luZyB0byB0aGUgc2FtZSBzdGF0ZSBhbmQgYWxsIGxvY2FscyBhcmUga2VwdCwgd2UndmUgZ290IG5vdGhpbmcgdG8gZG8uXG4gICAgICAvLyBCdXQgY2xlYXIgJ3RyYW5zaXRpb24nLCBhcyB3ZSBzdGlsbCB3YW50IHRvIGNhbmNlbCBhbnkgb3RoZXIgcGVuZGluZyB0cmFuc2l0aW9ucy5cbiAgICAgIC8vIFRPRE86IFdlIG1heSBub3Qgd2FudCB0byBidW1wICd0cmFuc2l0aW9uJyBpZiB3ZSdyZSBjYWxsZWQgZnJvbSBhIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgLy8gdGhhdCB3ZSd2ZSBpbml0aWF0ZWQgb3Vyc2VsdmVzLCBiZWNhdXNlIHdlIG1pZ2h0IGFjY2lkZW50YWxseSBhYm9ydCBhIGxlZ2l0aW1hdGVcbiAgICAgIC8vIHRyYW5zaXRpb24gaW5pdGlhdGVkIGZyb20gY29kZT9cbiAgICAgIGlmIChzaG91bGRTa2lwUmVsb2FkKHRvLCB0b1BhcmFtcywgZnJvbSwgZnJvbVBhcmFtcywgbG9jYWxzLCBvcHRpb25zKSkge1xuICAgICAgICBpZiAoaGFzaCkgdG9QYXJhbXNbJyMnXSA9IGhhc2g7XG4gICAgICAgICRzdGF0ZS5wYXJhbXMgPSB0b1BhcmFtcztcbiAgICAgICAgY29weSgkc3RhdGUucGFyYW1zLCAkc3RhdGVQYXJhbXMpO1xuICAgICAgICBjb3B5KGZpbHRlckJ5S2V5cyh0by5wYXJhbXMuJCRrZXlzKCksICRzdGF0ZVBhcmFtcyksIHRvLmxvY2Fscy5nbG9iYWxzLiRzdGF0ZVBhcmFtcyk7XG4gICAgICAgIGlmIChvcHRpb25zLmxvY2F0aW9uICYmIHRvLm5hdmlnYWJsZSAmJiB0by5uYXZpZ2FibGUudXJsKSB7XG4gICAgICAgICAgJHVybFJvdXRlci5wdXNoKHRvLm5hdmlnYWJsZS51cmwsIHRvUGFyYW1zLCB7XG4gICAgICAgICAgICAkJGF2b2lkUmVzeW5jOiB0cnVlLCByZXBsYWNlOiBvcHRpb25zLmxvY2F0aW9uID09PSAncmVwbGFjZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkdXJsUm91dGVyLnVwZGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICAkc3RhdGUudHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgIHJldHVybiAkcS53aGVuKCRzdGF0ZS5jdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gRmlsdGVyIHBhcmFtZXRlcnMgYmVmb3JlIHdlIHBhc3MgdGhlbSB0byBldmVudCBoYW5kbGVycyBldGMuXG4gICAgICB0b1BhcmFtcyA9IGZpbHRlckJ5S2V5cyh0by5wYXJhbXMuJCRrZXlzKCksIHRvUGFyYW1zIHx8IHt9KTtcbiAgICAgIFxuICAgICAgLy8gUmUtYWRkIHRoZSBzYXZlZCBoYXNoIGJlZm9yZSB3ZSBzdGFydCByZXR1cm5pbmcgdGhpbmdzIG9yIGJyb2FkY2FzdGluZyAkc3RhdGVDaGFuZ2VTdGFydFxuICAgICAgaWYgKGhhc2gpIHRvUGFyYW1zWycjJ10gPSBoYXNoO1xuICAgICAgXG4gICAgICAvLyBCcm9hZGNhc3Qgc3RhcnQgZXZlbnQgYW5kIGNhbmNlbCB0aGUgdHJhbnNpdGlvbiBpZiByZXF1ZXN0ZWRcbiAgICAgIGlmIChvcHRpb25zLm5vdGlmeSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG5nZG9jIGV2ZW50XG4gICAgICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjJHN0YXRlQ2hhbmdlU3RhcnRcbiAgICAgICAgICogQGV2ZW50T2YgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICAgICAgICAgKiBAZXZlbnRUeXBlIGJyb2FkY2FzdCBvbiByb290IHNjb3BlXG4gICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAgKiBGaXJlZCB3aGVuIHRoZSBzdGF0ZSB0cmFuc2l0aW9uICoqYmVnaW5zKiouIFlvdSBjYW4gdXNlIGBldmVudC5wcmV2ZW50RGVmYXVsdCgpYFxuICAgICAgICAgKiB0byBwcmV2ZW50IHRoZSB0cmFuc2l0aW9uIGZyb20gaGFwcGVuaW5nIGFuZCB0aGVuIHRoZSB0cmFuc2l0aW9uIHByb21pc2Ugd2lsbCBiZVxuICAgICAgICAgKiByZWplY3RlZCB3aXRoIGEgYCd0cmFuc2l0aW9uIHByZXZlbnRlZCdgIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0ge1N0YXRlfSB0b1N0YXRlIFRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0b1BhcmFtcyBUaGUgcGFyYW1zIHN1cHBsaWVkIHRvIHRoZSBgdG9TdGF0ZWAuXG4gICAgICAgICAqIEBwYXJhbSB7U3RhdGV9IGZyb21TdGF0ZSBUaGUgY3VycmVudCBzdGF0ZSwgcHJlLXRyYW5zaXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tUGFyYW1zIFRoZSBwYXJhbXMgc3VwcGxpZWQgdG8gdGhlIGBmcm9tU3RhdGVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiA8cHJlPlxuICAgICAgICAgKiAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLFxuICAgICAgICAgKiBmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcyl7XG4gICAgICAgICAqICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgKiAgICAgLy8gdHJhbnNpdGlvblRvKCkgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGhcbiAgICAgICAgICogICAgIC8vIGEgJ3RyYW5zaXRpb24gcHJldmVudGVkJyBlcnJvclxuICAgICAgICAgKiB9KVxuICAgICAgICAgKiA8L3ByZT5cbiAgICAgICAgICovXG4gICAgICAgIGlmICgkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRzdGF0ZUNoYW5nZVN0YXJ0JywgdG8uc2VsZiwgdG9QYXJhbXMsIGZyb20uc2VsZiwgZnJvbVBhcmFtcywgb3B0aW9ucykuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnJHN0YXRlQ2hhbmdlQ2FuY2VsJywgdG8uc2VsZiwgdG9QYXJhbXMsIGZyb20uc2VsZiwgZnJvbVBhcmFtcyk7XG4gICAgICAgICAgLy9Eb24ndCB1cGRhdGUgYW5kIHJlc3luYyB1cmwgaWYgdGhlcmUncyBiZWVuIGEgbmV3IHRyYW5zaXRpb24gc3RhcnRlZC4gc2VlIGlzc3VlICMyMjM4LCAjNjAwXG4gICAgICAgICAgaWYgKCRzdGF0ZS50cmFuc2l0aW9uID09IG51bGwpICR1cmxSb3V0ZXIudXBkYXRlKCk7XG4gICAgICAgICAgcmV0dXJuIFRyYW5zaXRpb25QcmV2ZW50ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVzb2x2ZSBsb2NhbHMgZm9yIHRoZSByZW1haW5pbmcgc3RhdGVzLCBidXQgZG9uJ3QgdXBkYXRlIGFueSBnbG9iYWwgc3RhdGUganVzdFxuICAgICAgLy8geWV0IC0tIGlmIGFueXRoaW5nIGZhaWxzIHRvIHJlc29sdmUgdGhlIGN1cnJlbnQgc3RhdGUgbmVlZHMgdG8gcmVtYWluIHVudG91Y2hlZC5cbiAgICAgIC8vIFdlIGFsc28gc2V0IHVwIGFuIGluaGVyaXRhbmNlIGNoYWluIGZvciB0aGUgbG9jYWxzIGhlcmUuIFRoaXMgYWxsb3dzIHRoZSB2aWV3IGRpcmVjdGl2ZVxuICAgICAgLy8gdG8gcXVpY2tseSBsb29rIHVwIHRoZSBjb3JyZWN0IGRlZmluaXRpb24gZm9yIGVhY2ggdmlldyBpbiB0aGUgY3VycmVudCBzdGF0ZS4gRXZlblxuICAgICAgLy8gdGhvdWdoIHdlIGNyZWF0ZSB0aGUgbG9jYWxzIG9iamVjdCBpdHNlbGYgb3V0c2lkZSByZXNvbHZlU3RhdGUoKSwgaXQgaXMgaW5pdGlhbGx5XG4gICAgICAvLyBlbXB0eSBhbmQgZ2V0cyBmaWxsZWQgYXN5bmNocm9ub3VzbHkuIFdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcHJvbWlzZSBmb3IgdGhlXG4gICAgICAvLyAoZnVsbHkgcmVzb2x2ZWQpIGN1cnJlbnQgbG9jYWxzLCBhbmQgcGFzcyB0aGlzIGRvd24gdGhlIGNoYWluLlxuICAgICAgdmFyIHJlc29sdmVkID0gJHEud2hlbihsb2NhbHMpO1xuXG4gICAgICBmb3IgKHZhciBsID0ga2VlcDsgbCA8IHRvUGF0aC5sZW5ndGg7IGwrKywgc3RhdGUgPSB0b1BhdGhbbF0pIHtcbiAgICAgICAgbG9jYWxzID0gdG9Mb2NhbHNbbF0gPSBpbmhlcml0KGxvY2Fscyk7XG4gICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZVN0YXRlKHN0YXRlLCB0b1BhcmFtcywgc3RhdGUgPT09IHRvLCByZXNvbHZlZCwgbG9jYWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLy8gT25jZSBldmVyeXRoaW5nIGlzIHJlc29sdmVkLCB3ZSBhcmUgcmVhZHkgdG8gcGVyZm9ybSB0aGUgYWN0dWFsIHRyYW5zaXRpb25cbiAgICAgIC8vIGFuZCByZXR1cm4gYSBwcm9taXNlIGZvciB0aGUgbmV3IHN0YXRlLiBXZSBhbHNvIGtlZXAgdHJhY2sgb2Ygd2hhdCB0aGVcbiAgICAgIC8vIGN1cnJlbnQgcHJvbWlzZSBpcywgc28gdGhhdCB3ZSBjYW4gZGV0ZWN0IG92ZXJsYXBwaW5nIHRyYW5zaXRpb25zIGFuZFxuICAgICAgLy8ga2VlcCBvbmx5IHRoZSBvdXRjb21lIG9mIHRoZSBsYXN0IHRyYW5zaXRpb24uXG4gICAgICB2YXIgdHJhbnNpdGlvbiA9ICRzdGF0ZS50cmFuc2l0aW9uID0gcmVzb2x2ZWQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsLCBlbnRlcmluZywgZXhpdGluZztcblxuICAgICAgICBpZiAoJHN0YXRlLnRyYW5zaXRpb24gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRzdGF0ZUNoYW5nZUNhbmNlbCcsIHRvLnNlbGYsIHRvUGFyYW1zLCBmcm9tLnNlbGYsIGZyb21QYXJhbXMpO1xuICAgICAgICAgIHJldHVybiBUcmFuc2l0aW9uU3VwZXJzZWRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4aXQgJ2Zyb20nIHN0YXRlcyBub3Qga2VwdFxuICAgICAgICBmb3IgKGwgPSBmcm9tUGF0aC5sZW5ndGggLSAxOyBsID49IGtlZXA7IGwtLSkge1xuICAgICAgICAgIGV4aXRpbmcgPSBmcm9tUGF0aFtsXTtcbiAgICAgICAgICBpZiAoZXhpdGluZy5zZWxmLm9uRXhpdCkge1xuICAgICAgICAgICAgJGluamVjdG9yLmludm9rZShleGl0aW5nLnNlbGYub25FeGl0LCBleGl0aW5nLnNlbGYsIGV4aXRpbmcubG9jYWxzLmdsb2JhbHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBleGl0aW5nLmxvY2FscyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnRlciAndG8nIHN0YXRlcyBub3Qga2VwdFxuICAgICAgICBmb3IgKGwgPSBrZWVwOyBsIDwgdG9QYXRoLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgZW50ZXJpbmcgPSB0b1BhdGhbbF07XG4gICAgICAgICAgZW50ZXJpbmcubG9jYWxzID0gdG9Mb2NhbHNbbF07XG4gICAgICAgICAgaWYgKGVudGVyaW5nLnNlbGYub25FbnRlcikge1xuICAgICAgICAgICAgJGluamVjdG9yLmludm9rZShlbnRlcmluZy5zZWxmLm9uRW50ZXIsIGVudGVyaW5nLnNlbGYsIGVudGVyaW5nLmxvY2Fscy5nbG9iYWxzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gaXQgYWdhaW4sIHRvIGNhdGNoIGFueSB0cmFuc2l0aW9ucyBpbiBjYWxsYmFja3NcbiAgICAgICAgaWYgKCRzdGF0ZS50cmFuc2l0aW9uICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCckc3RhdGVDaGFuZ2VDYW5jZWwnLCB0by5zZWxmLCB0b1BhcmFtcywgZnJvbS5zZWxmLCBmcm9tUGFyYW1zKTtcbiAgICAgICAgICByZXR1cm4gVHJhbnNpdGlvblN1cGVyc2VkZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZ2xvYmFscyBpbiAkc3RhdGVcbiAgICAgICAgJHN0YXRlLiRjdXJyZW50ID0gdG87XG4gICAgICAgICRzdGF0ZS5jdXJyZW50ID0gdG8uc2VsZjtcbiAgICAgICAgJHN0YXRlLnBhcmFtcyA9IHRvUGFyYW1zO1xuICAgICAgICBjb3B5KCRzdGF0ZS5wYXJhbXMsICRzdGF0ZVBhcmFtcyk7XG4gICAgICAgICRzdGF0ZS50cmFuc2l0aW9uID0gbnVsbDtcblxuICAgICAgICBpZiAob3B0aW9ucy5sb2NhdGlvbiAmJiB0by5uYXZpZ2FibGUpIHtcbiAgICAgICAgICAkdXJsUm91dGVyLnB1c2godG8ubmF2aWdhYmxlLnVybCwgdG8ubmF2aWdhYmxlLmxvY2Fscy5nbG9iYWxzLiRzdGF0ZVBhcmFtcywge1xuICAgICAgICAgICAgJCRhdm9pZFJlc3luYzogdHJ1ZSwgcmVwbGFjZTogb3B0aW9ucy5sb2NhdGlvbiA9PT0gJ3JlcGxhY2UnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5ub3RpZnkpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBuZ2RvYyBldmVudFxuICAgICAgICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlIyRzdGF0ZUNoYW5nZVN1Y2Nlc3NcbiAgICAgICAgICogQGV2ZW50T2YgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICAgICAgICAgKiBAZXZlbnRUeXBlIGJyb2FkY2FzdCBvbiByb290IHNjb3BlXG4gICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAgKiBGaXJlZCBvbmNlIHRoZSBzdGF0ZSB0cmFuc2l0aW9uIGlzICoqY29tcGxldGUqKi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHtTdGF0ZX0gdG9TdGF0ZSBUaGUgc3RhdGUgYmVpbmcgdHJhbnNpdGlvbmVkIHRvLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gdG9QYXJhbXMgVGhlIHBhcmFtcyBzdXBwbGllZCB0byB0aGUgYHRvU3RhdGVgLlxuICAgICAgICAgKiBAcGFyYW0ge1N0YXRlfSBmcm9tU3RhdGUgVGhlIGN1cnJlbnQgc3RhdGUsIHByZS10cmFuc2l0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZnJvbVBhcmFtcyBUaGUgcGFyYW1zIHN1cHBsaWVkIHRvIHRoZSBgZnJvbVN0YXRlYC5cbiAgICAgICAgICovXG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgdG8uc2VsZiwgdG9QYXJhbXMsIGZyb20uc2VsZiwgZnJvbVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgJHVybFJvdXRlci51cGRhdGUodHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuICRzdGF0ZS5jdXJyZW50O1xuICAgICAgfSkudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gcHJvcGFnYXRlIFRyYW5zaXRpb25TdXBlcnNlZGVkIGVycm9yIHdpdGhvdXQgZW1pdHRpbmcgJHN0YXRlQ2hhbmdlQ2FuY2VsXG4gICAgICAgIC8vIGFzIGl0IHdhcyBhbHJlYWR5IGVtaXR0ZWQgaW4gdGhlIHN1Y2Nlc3MgaGFuZGxlciBhYm92ZVxuICAgICAgICBpZiAoZXJyb3IgPT09IFRyYW5zaXRpb25TdXBlcnNlZGVkRXJyb3IpIHJldHVybiBUcmFuc2l0aW9uU3VwZXJzZWRlZDtcblxuICAgICAgICBpZiAoJHN0YXRlLnRyYW5zaXRpb24gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRzdGF0ZUNoYW5nZUNhbmNlbCcsIHRvLnNlbGYsIHRvUGFyYW1zLCBmcm9tLnNlbGYsIGZyb21QYXJhbXMpO1xuICAgICAgICAgIHJldHVybiBUcmFuc2l0aW9uU3VwZXJzZWRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgICRzdGF0ZS50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBuZ2RvYyBldmVudFxuICAgICAgICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlIyRzdGF0ZUNoYW5nZUVycm9yXG4gICAgICAgICAqIEBldmVudE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAgICAgICAgICogQGV2ZW50VHlwZSBicm9hZGNhc3Qgb24gcm9vdCBzY29wZVxuICAgICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAgICogRmlyZWQgd2hlbiBhbiAqKmVycm9yIG9jY3VycyoqIGR1cmluZyB0cmFuc2l0aW9uLiBJdCdzIGltcG9ydGFudCB0byBub3RlIHRoYXQgaWYgeW91XG4gICAgICAgICAqIGhhdmUgYW55IGVycm9ycyBpbiB5b3VyIHJlc29sdmUgZnVuY3Rpb25zIChqYXZhc2NyaXB0IGVycm9ycywgbm9uLWV4aXN0ZW50IHNlcnZpY2VzLCBldGMpXG4gICAgICAgICAqIHRoZXkgd2lsbCBub3QgdGhyb3cgdHJhZGl0aW9uYWxseS4gWW91IG11c3QgbGlzdGVuIGZvciB0aGlzICRzdGF0ZUNoYW5nZUVycm9yIGV2ZW50IHRvXG4gICAgICAgICAqIGNhdGNoICoqQUxMKiogZXJyb3JzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0ge1N0YXRlfSB0b1N0YXRlIFRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0b1BhcmFtcyBUaGUgcGFyYW1zIHN1cHBsaWVkIHRvIHRoZSBgdG9TdGF0ZWAuXG4gICAgICAgICAqIEBwYXJhbSB7U3RhdGV9IGZyb21TdGF0ZSBUaGUgY3VycmVudCBzdGF0ZSwgcHJlLXRyYW5zaXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tUGFyYW1zIFRoZSBwYXJhbXMgc3VwcGxpZWQgdG8gdGhlIGBmcm9tU3RhdGVgLlxuICAgICAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgcmVzb2x2ZSBlcnJvciBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBldnQgPSAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRzdGF0ZUNoYW5nZUVycm9yJywgdG8uc2VsZiwgdG9QYXJhbXMsIGZyb20uc2VsZiwgZnJvbVBhcmFtcywgZXJyb3IpO1xuXG4gICAgICAgIGlmICghZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAkdXJsUm91dGVyLnVwZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRxLnJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgc2lsZW5jZVVuY2F1Z2h0SW5Qcm9taXNlKHRyYW5zaXRpb24pO1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjaXNcbiAgICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICAgICAqXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogU2ltaWxhciB0byB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2luY2x1ZGVzICRzdGF0ZS5pbmNsdWRlc30sXG4gICAgICogYnV0IG9ubHkgY2hlY2tzIGZvciB0aGUgZnVsbCBzdGF0ZSBuYW1lLiBJZiBwYXJhbXMgaXMgc3VwcGxpZWQgdGhlbiBpdCB3aWxsIGJlXG4gICAgICogdGVzdGVkIGZvciBzdHJpY3QgZXF1YWxpdHkgYWdhaW5zdCB0aGUgY3VycmVudCBhY3RpdmUgcGFyYW1zIG9iamVjdCwgc28gYWxsIHBhcmFtc1xuICAgICAqIG11c3QgbWF0Y2ggd2l0aCBub25lIG1pc3NpbmcgYW5kIG5vIGV4dHJhcy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogPHByZT5cbiAgICAgKiAkc3RhdGUuJGN1cnJlbnQubmFtZSA9ICdjb250YWN0cy5kZXRhaWxzLml0ZW0nO1xuICAgICAqXG4gICAgICogLy8gYWJzb2x1dGUgbmFtZVxuICAgICAqICRzdGF0ZS5pcygnY29udGFjdC5kZXRhaWxzLml0ZW0nKTsgLy8gcmV0dXJucyB0cnVlXG4gICAgICogJHN0YXRlLmlzKGNvbnRhY3REZXRhaWxJdGVtU3RhdGVPYmplY3QpOyAvLyByZXR1cm5zIHRydWVcbiAgICAgKlxuICAgICAqIC8vIHJlbGF0aXZlIG5hbWUgKC4gYW5kIF4pLCB0eXBpY2FsbHkgZnJvbSBhIHRlbXBsYXRlXG4gICAgICogLy8gRS5nLiBmcm9tIHRoZSAnY29udGFjdHMuZGV0YWlscycgdGVtcGxhdGVcbiAgICAgKiA8ZGl2IG5nLWNsYXNzPVwie2hpZ2hsaWdodGVkOiAkc3RhdGUuaXMoJy5pdGVtJyl9XCI+SXRlbTwvZGl2PlxuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBzdGF0ZU9yTmFtZSBUaGUgc3RhdGUgbmFtZSAoYWJzb2x1dGUgb3IgcmVsYXRpdmUpIG9yIHN0YXRlIG9iamVjdCB5b3UnZCBsaWtlIHRvIGNoZWNrLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0PX0gcGFyYW1zIEEgcGFyYW0gb2JqZWN0LCBlLmcuIGB7c2VjdGlvbklkOiBzZWN0aW9uLmlkfWAsIHRoYXQgeW91J2QgbGlrZVxuICAgICAqIHRvIHRlc3QgYWdhaW5zdCB0aGUgY3VycmVudCBhY3RpdmUgc3RhdGUuXG4gICAgICogQHBhcmFtIHtvYmplY3Q9fSBvcHRpb25zIEFuIG9wdGlvbnMgb2JqZWN0LiAgVGhlIG9wdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSAqKmByZWxhdGl2ZWAqKiAtIHtzdHJpbmd8b2JqZWN0fSAtICBJZiBgc3RhdGVPck5hbWVgIGlzIGEgcmVsYXRpdmUgc3RhdGUgbmFtZSBhbmQgYG9wdGlvbnMucmVsYXRpdmVgIGlzIHNldCwgLmlzIHdpbGxcbiAgICAgKiB0ZXN0IHJlbGF0aXZlIHRvIGBvcHRpb25zLnJlbGF0aXZlYCBzdGF0ZSAob3IgbmFtZSkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGl0IGlzIHRoZSBzdGF0ZS5cbiAgICAgKi9cbiAgICAkc3RhdGUuaXMgPSBmdW5jdGlvbiBpcyhzdGF0ZU9yTmFtZSwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gZXh0ZW5kKHsgcmVsYXRpdmU6ICRzdGF0ZS4kY3VycmVudCB9LCBvcHRpb25zIHx8IHt9KTtcbiAgICAgIHZhciBzdGF0ZSA9IGZpbmRTdGF0ZShzdGF0ZU9yTmFtZSwgb3B0aW9ucy5yZWxhdGl2ZSk7XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKHN0YXRlKSkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gICAgICBpZiAoJHN0YXRlLiRjdXJyZW50ICE9PSBzdGF0ZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgcmV0dXJuICFwYXJhbXMgfHwgb2JqZWN0S2V5cyhwYXJhbXMpLnJlZHVjZShmdW5jdGlvbihhY2MsIGtleSkge1xuICAgICAgICB2YXIgcGFyYW1EZWYgPSBzdGF0ZS5wYXJhbXNba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYyAmJiAhcGFyYW1EZWYgfHwgcGFyYW1EZWYudHlwZS5lcXVhbHMoJHN0YXRlUGFyYW1zW2tleV0sIHBhcmFtc1trZXldKTtcbiAgICAgIH0sIHRydWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI2luY2x1ZGVzXG4gICAgICogQG1ldGhvZE9mIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAgICAgKlxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIEEgbWV0aG9kIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCBhY3RpdmUgc3RhdGUgaXMgZXF1YWwgdG8gb3IgaXMgdGhlIGNoaWxkIG9mIHRoZVxuICAgICAqIHN0YXRlIHN0YXRlTmFtZS4gSWYgYW55IHBhcmFtcyBhcmUgcGFzc2VkIHRoZW4gdGhleSB3aWxsIGJlIHRlc3RlZCBmb3IgYSBtYXRjaCBhcyB3ZWxsLlxuICAgICAqIE5vdCBhbGwgdGhlIHBhcmFtZXRlcnMgbmVlZCB0byBiZSBwYXNzZWQsIGp1c3QgdGhlIG9uZXMgeW91J2QgbGlrZSB0byB0ZXN0IGZvciBlcXVhbGl0eS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogUGFydGlhbCBhbmQgcmVsYXRpdmUgbmFtZXNcbiAgICAgKiA8cHJlPlxuICAgICAqICRzdGF0ZS4kY3VycmVudC5uYW1lID0gJ2NvbnRhY3RzLmRldGFpbHMuaXRlbSc7XG4gICAgICpcbiAgICAgKiAvLyBVc2luZyBwYXJ0aWFsIG5hbWVzXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiY29udGFjdHNcIik7IC8vIHJldHVybnMgdHJ1ZVxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcImNvbnRhY3RzLmRldGFpbHNcIik7IC8vIHJldHVybnMgdHJ1ZVxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcImNvbnRhY3RzLmRldGFpbHMuaXRlbVwiKTsgLy8gcmV0dXJucyB0cnVlXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiY29udGFjdHMubGlzdFwiKTsgLy8gcmV0dXJucyBmYWxzZVxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcImFib3V0XCIpOyAvLyByZXR1cm5zIGZhbHNlXG4gICAgICpcbiAgICAgKiAvLyBVc2luZyByZWxhdGl2ZSBuYW1lcyAoLiBhbmQgXiksIHR5cGljYWxseSBmcm9tIGEgdGVtcGxhdGVcbiAgICAgKiAvLyBFLmcuIGZyb20gdGhlICdjb250YWN0cy5kZXRhaWxzJyB0ZW1wbGF0ZVxuICAgICAqIDxkaXYgbmctY2xhc3M9XCJ7aGlnaGxpZ2h0ZWQ6ICRzdGF0ZS5pbmNsdWRlcygnLml0ZW0nKX1cIj5JdGVtPC9kaXY+XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBCYXNpYyBnbG9iYmluZyBwYXR0ZXJuc1xuICAgICAqIDxwcmU+XG4gICAgICogJHN0YXRlLiRjdXJyZW50Lm5hbWUgPSAnY29udGFjdHMuZGV0YWlscy5pdGVtLnVybCc7XG4gICAgICpcbiAgICAgKiAkc3RhdGUuaW5jbHVkZXMoXCIqLmRldGFpbHMuKi4qXCIpOyAvLyByZXR1cm5zIHRydWVcbiAgICAgKiAkc3RhdGUuaW5jbHVkZXMoXCIqLmRldGFpbHMuKipcIik7IC8vIHJldHVybnMgdHJ1ZVxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcIioqLml0ZW0uKipcIik7IC8vIHJldHVybnMgdHJ1ZVxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcIiouZGV0YWlscy5pdGVtLnVybFwiKTsgLy8gcmV0dXJucyB0cnVlXG4gICAgICogJHN0YXRlLmluY2x1ZGVzKFwiKi5kZXRhaWxzLioudXJsXCIpOyAvLyByZXR1cm5zIHRydWVcbiAgICAgKiAkc3RhdGUuaW5jbHVkZXMoXCIqLmRldGFpbHMuKlwiKTsgLy8gcmV0dXJucyBmYWxzZVxuICAgICAqICRzdGF0ZS5pbmNsdWRlcyhcIml0ZW0uKipcIik7IC8vIHJldHVybnMgZmFsc2VcbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZU9yTmFtZSBBIHBhcnRpYWwgbmFtZSwgcmVsYXRpdmUgbmFtZSwgb3IgZ2xvYiBwYXR0ZXJuXG4gICAgICogdG8gYmUgc2VhcmNoZWQgZm9yIHdpdGhpbiB0aGUgY3VycmVudCBzdGF0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0PX0gcGFyYW1zIEEgcGFyYW0gb2JqZWN0LCBlLmcuIGB7c2VjdGlvbklkOiBzZWN0aW9uLmlkfWAsXG4gICAgICogdGhhdCB5b3UnZCBsaWtlIHRvIHRlc3QgYWdhaW5zdCB0aGUgY3VycmVudCBhY3RpdmUgc3RhdGUuXG4gICAgICogQHBhcmFtIHtvYmplY3Q9fSBvcHRpb25zIEFuIG9wdGlvbnMgb2JqZWN0LiAgVGhlIG9wdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSAqKmByZWxhdGl2ZWAqKiAtIHtzdHJpbmd8b2JqZWN0PX0gLSAgSWYgYHN0YXRlT3JOYW1lYCBpcyBhIHJlbGF0aXZlIHN0YXRlIHJlZmVyZW5jZSBhbmQgYG9wdGlvbnMucmVsYXRpdmVgIGlzIHNldCxcbiAgICAgKiAuaW5jbHVkZXMgd2lsbCB0ZXN0IHJlbGF0aXZlIHRvIGBvcHRpb25zLnJlbGF0aXZlYCBzdGF0ZSAob3IgbmFtZSkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGl0IGRvZXMgaW5jbHVkZSB0aGUgc3RhdGVcbiAgICAgKi9cbiAgICAkc3RhdGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyhzdGF0ZU9yTmFtZSwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gZXh0ZW5kKHsgcmVsYXRpdmU6ICRzdGF0ZS4kY3VycmVudCB9LCBvcHRpb25zIHx8IHt9KTtcbiAgICAgIGlmIChpc1N0cmluZyhzdGF0ZU9yTmFtZSkgJiYgaXNHbG9iKHN0YXRlT3JOYW1lKSkge1xuICAgICAgICBpZiAoIWRvZXNTdGF0ZU1hdGNoR2xvYihzdGF0ZU9yTmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVPck5hbWUgPSAkc3RhdGUuJGN1cnJlbnQubmFtZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gZmluZFN0YXRlKHN0YXRlT3JOYW1lLCBvcHRpb25zLnJlbGF0aXZlKTtcbiAgICAgIGlmICghaXNEZWZpbmVkKHN0YXRlKSkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gICAgICBpZiAoIWlzRGVmaW5lZCgkc3RhdGUuJGN1cnJlbnQuaW5jbHVkZXNbc3RhdGUubmFtZV0pKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgaWYgKCFwYXJhbXMpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKHBhcmFtcyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHBhcmFtRGVmID0gc3RhdGUucGFyYW1zW2tleV07XG4gICAgICAgIGlmIChwYXJhbURlZiAmJiAhcGFyYW1EZWYudHlwZS5lcXVhbHMoJHN0YXRlUGFyYW1zW2tleV0sIHBhcmFtc1trZXldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqZWN0S2V5cyhwYXJhbXMpLnJlZHVjZShmdW5jdGlvbihhY2MsIGtleSkge1xuICAgICAgICB2YXIgcGFyYW1EZWYgPSBzdGF0ZS5wYXJhbXNba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYyAmJiAhcGFyYW1EZWYgfHwgcGFyYW1EZWYudHlwZS5lcXVhbHMoJHN0YXRlUGFyYW1zW2tleV0sIHBhcmFtc1trZXldKTtcbiAgICAgIH0sIHRydWUpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGUjaHJlZlxuICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBBIHVybCBnZW5lcmF0aW9uIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIGNvbXBpbGVkIHVybCBmb3IgdGhlIGdpdmVuIHN0YXRlIHBvcHVsYXRlZCB3aXRoIHRoZSBnaXZlbiBwYXJhbXMuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIDxwcmU+XG4gICAgICogZXhwZWN0KCRzdGF0ZS5ocmVmKFwiYWJvdXQucGVyc29uXCIsIHsgcGVyc29uOiBcImJvYlwiIH0pKS50b0VxdWFsKFwiL2Fib3V0L2JvYlwiKTtcbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gc3RhdGVPck5hbWUgVGhlIHN0YXRlIG5hbWUgb3Igc3RhdGUgb2JqZWN0IHlvdSdkIGxpa2UgdG8gZ2VuZXJhdGUgYSB1cmwgZnJvbS5cbiAgICAgKiBAcGFyYW0ge29iamVjdD19IHBhcmFtcyBBbiBvYmplY3Qgb2YgcGFyYW1ldGVyIHZhbHVlcyB0byBmaWxsIHRoZSBzdGF0ZSdzIHJlcXVpcmVkIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtvYmplY3Q9fSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0LiBUaGUgb3B0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtICoqYGxvc3N5YCoqIC0ge2Jvb2xlYW49dHJ1ZX0gLSAgSWYgdHJ1ZSwgYW5kIGlmIHRoZXJlIGlzIG5vIHVybCBhc3NvY2lhdGVkIHdpdGggdGhlIHN0YXRlIHByb3ZpZGVkIGluIHRoZVxuICAgICAqICAgIGZpcnN0IHBhcmFtZXRlciwgdGhlbiB0aGUgY29uc3RydWN0ZWQgaHJlZiB1cmwgd2lsbCBiZSBidWlsdCBmcm9tIHRoZSBmaXJzdCBuYXZpZ2FibGUgYW5jZXN0b3IgKGFrYVxuICAgICAqICAgIGFuY2VzdG9yIHdpdGggYSB2YWxpZCB1cmwpLlxuICAgICAqIC0gKipgaW5oZXJpdGAqKiAtIHtib29sZWFuPXRydWV9LCBJZiBgdHJ1ZWAgd2lsbCBpbmhlcml0IHVybCBwYXJhbWV0ZXJzIGZyb20gY3VycmVudCB1cmwuXG4gICAgICogLSAqKmByZWxhdGl2ZWAqKiAtIHtvYmplY3Q9JHN0YXRlLiRjdXJyZW50fSwgV2hlbiB0cmFuc2l0aW9uaW5nIHdpdGggcmVsYXRpdmUgcGF0aCAoZS5nICdeJyksIFxuICAgICAqICAgIGRlZmluZXMgd2hpY2ggc3RhdGUgdG8gYmUgcmVsYXRpdmUgZnJvbS5cbiAgICAgKiAtICoqYGFic29sdXRlYCoqIC0ge2Jvb2xlYW49ZmFsc2V9LCAgSWYgdHJ1ZSB3aWxsIGdlbmVyYXRlIGFuIGFic29sdXRlIHVybCwgZS5nLiBcImh0dHA6Ly93d3cuZXhhbXBsZS5jb20vZnVsbHVybFwiLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGNvbXBpbGVkIHN0YXRlIHVybFxuICAgICAqL1xuICAgICRzdGF0ZS5ocmVmID0gZnVuY3Rpb24gaHJlZihzdGF0ZU9yTmFtZSwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgbG9zc3k6ICAgIHRydWUsXG4gICAgICAgIGluaGVyaXQ6ICB0cnVlLFxuICAgICAgICBhYnNvbHV0ZTogZmFsc2UsXG4gICAgICAgIHJlbGF0aXZlOiAkc3RhdGUuJGN1cnJlbnRcbiAgICAgIH0sIG9wdGlvbnMgfHwge30pO1xuXG4gICAgICB2YXIgc3RhdGUgPSBmaW5kU3RhdGUoc3RhdGVPck5hbWUsIG9wdGlvbnMucmVsYXRpdmUpO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZChzdGF0ZSkpIHJldHVybiBudWxsO1xuICAgICAgaWYgKG9wdGlvbnMuaW5oZXJpdCkgcGFyYW1zID0gaW5oZXJpdFBhcmFtcygkc3RhdGVQYXJhbXMsIHBhcmFtcyB8fCB7fSwgJHN0YXRlLiRjdXJyZW50LCBzdGF0ZSk7XG4gICAgICBcbiAgICAgIHZhciBuYXYgPSAoc3RhdGUgJiYgb3B0aW9ucy5sb3NzeSkgPyBzdGF0ZS5uYXZpZ2FibGUgOiBzdGF0ZTtcblxuICAgICAgaWYgKCFuYXYgfHwgbmF2LnVybCA9PT0gdW5kZWZpbmVkIHx8IG5hdi51cmwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gJHVybFJvdXRlci5ocmVmKG5hdi51cmwsIGZpbHRlckJ5S2V5cyhzdGF0ZS5wYXJhbXMuJCRrZXlzKCkuY29uY2F0KCcjJyksIHBhcmFtcyB8fCB7fSksIHtcbiAgICAgICAgYWJzb2x1dGU6IG9wdGlvbnMuYWJzb2x1dGVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI2dldFxuICAgICAqIEBtZXRob2RPZiB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBSZXR1cm5zIHRoZSBzdGF0ZSBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgYW55IHNwZWNpZmljIHN0YXRlIG9yIGFsbCBzdGF0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3Q9fSBzdGF0ZU9yTmFtZSAoYWJzb2x1dGUgb3IgcmVsYXRpdmUpIElmIHByb3ZpZGVkLCB3aWxsIG9ubHkgZ2V0IHRoZSBjb25maWcgZm9yXG4gICAgICogdGhlIHJlcXVlc3RlZCBzdGF0ZS4gSWYgbm90IHByb3ZpZGVkLCByZXR1cm5zIGFuIGFycmF5IG9mIEFMTCBzdGF0ZSBjb25maWdzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdD19IGNvbnRleHQgV2hlbiBzdGF0ZU9yTmFtZSBpcyBhIHJlbGF0aXZlIHN0YXRlIHJlZmVyZW5jZSwgdGhlIHN0YXRlIHdpbGwgYmUgcmV0cmlldmVkIHJlbGF0aXZlIHRvIGNvbnRleHQuXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheX0gU3RhdGUgY29uZmlndXJhdGlvbiBvYmplY3Qgb3IgYXJyYXkgb2YgYWxsIG9iamVjdHMuXG4gICAgICovXG4gICAgJHN0YXRlLmdldCA9IGZ1bmN0aW9uIChzdGF0ZU9yTmFtZSwgY29udGV4dCkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBtYXAob2JqZWN0S2V5cyhzdGF0ZXMpLCBmdW5jdGlvbihuYW1lKSB7IHJldHVybiBzdGF0ZXNbbmFtZV0uc2VsZjsgfSk7XG4gICAgICB2YXIgc3RhdGUgPSBmaW5kU3RhdGUoc3RhdGVPck5hbWUsIGNvbnRleHQgfHwgJHN0YXRlLiRjdXJyZW50KTtcbiAgICAgIHJldHVybiAoc3RhdGUgJiYgc3RhdGUuc2VsZikgPyBzdGF0ZS5zZWxmIDogbnVsbDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVN0YXRlKHN0YXRlLCBwYXJhbXMsIHBhcmFtc0FyZUZpbHRlcmVkLCBpbmhlcml0ZWQsIGRzdCwgb3B0aW9ucykge1xuICAgICAgLy8gTWFrZSBhIHJlc3RyaWN0ZWQgJHN0YXRlUGFyYW1zIHdpdGggb25seSB0aGUgcGFyYW1ldGVycyB0aGF0IGFwcGx5IHRvIHRoaXMgc3RhdGUgaWZcbiAgICAgIC8vIG5lY2Vzc2FyeS4gSW4gYWRkaXRpb24gdG8gYmVpbmcgYXZhaWxhYmxlIHRvIHRoZSBjb250cm9sbGVyIGFuZCBvbkVudGVyL29uRXhpdCBjYWxsYmFja3MsXG4gICAgICAvLyB3ZSBhbHNvIG5lZWQgJHN0YXRlUGFyYW1zIHRvIGJlIGF2YWlsYWJsZSBmb3IgYW55ICRpbmplY3RvciBjYWxscyB3ZSBtYWtlIGR1cmluZyB0aGVcbiAgICAgIC8vIGRlcGVuZGVuY3kgcmVzb2x1dGlvbiBwcm9jZXNzLlxuICAgICAgdmFyICRzdGF0ZVBhcmFtcyA9IChwYXJhbXNBcmVGaWx0ZXJlZCkgPyBwYXJhbXMgOiBmaWx0ZXJCeUtleXMoc3RhdGUucGFyYW1zLiQka2V5cygpLCBwYXJhbXMpO1xuICAgICAgdmFyIGxvY2FscyA9IHsgJHN0YXRlUGFyYW1zOiAkc3RhdGVQYXJhbXMgfTtcblxuICAgICAgLy8gUmVzb2x2ZSAnZ2xvYmFsJyBkZXBlbmRlbmNpZXMgZm9yIHRoZSBzdGF0ZSwgaS5lLiB0aG9zZSBub3Qgc3BlY2lmaWMgdG8gYSB2aWV3LlxuICAgICAgLy8gV2UncmUgYWxzbyBpbmNsdWRpbmcgJHN0YXRlUGFyYW1zIGluIHRoaXM7IHRoYXQgd2F5IHRoZSBwYXJhbWV0ZXJzIGFyZSByZXN0cmljdGVkXG4gICAgICAvLyB0byB0aGUgc2V0IHRoYXQgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHN0YXRlLCBhbmQgYXJlIGluZGVwZW5kZW50IG9mIHdoZW4gd2UgdXBkYXRlXG4gICAgICAvLyB0aGUgZ2xvYmFsICRzdGF0ZSBhbmQgJHN0YXRlUGFyYW1zIHZhbHVlcy5cbiAgICAgIGRzdC5yZXNvbHZlID0gJHJlc29sdmUucmVzb2x2ZShzdGF0ZS5yZXNvbHZlLCBsb2NhbHMsIGRzdC5yZXNvbHZlLCBzdGF0ZSk7XG4gICAgICB2YXIgcHJvbWlzZXMgPSBbZHN0LnJlc29sdmUudGhlbihmdW5jdGlvbiAoZ2xvYmFscykge1xuICAgICAgICBkc3QuZ2xvYmFscyA9IGdsb2JhbHM7XG4gICAgICB9KV07XG4gICAgICBpZiAoaW5oZXJpdGVkKSBwcm9taXNlcy5wdXNoKGluaGVyaXRlZCk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVWaWV3cygpIHtcbiAgICAgICAgdmFyIHZpZXdzUHJvbWlzZXMgPSBbXTtcblxuICAgICAgICAvLyBSZXNvbHZlIHRlbXBsYXRlIGFuZCBkZXBlbmRlbmNpZXMgZm9yIGFsbCB2aWV3cy5cbiAgICAgICAgZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIG5hbWUpIHtcbiAgICAgICAgICB2YXIgaW5qZWN0YWJsZXMgPSAodmlldy5yZXNvbHZlICYmIHZpZXcucmVzb2x2ZSAhPT0gc3RhdGUucmVzb2x2ZSA/IHZpZXcucmVzb2x2ZSA6IHt9KTtcbiAgICAgICAgICBpbmplY3RhYmxlcy4kdGVtcGxhdGUgPSBbIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAkdmlldy5sb2FkKG5hbWUsIHsgdmlldzogdmlldywgbG9jYWxzOiBkc3QuZ2xvYmFscywgcGFyYW1zOiAkc3RhdGVQYXJhbXMsIG5vdGlmeTogb3B0aW9ucy5ub3RpZnkgfSkgfHwgJyc7XG4gICAgICAgICAgfV07XG5cbiAgICAgICAgICB2aWV3c1Byb21pc2VzLnB1c2goJHJlc29sdmUucmVzb2x2ZShpbmplY3RhYmxlcywgZHN0Lmdsb2JhbHMsIGRzdC5yZXNvbHZlLCBzdGF0ZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAvLyBSZWZlcmVuY2VzIHRvIHRoZSBjb250cm9sbGVyIChvbmx5IGluc3RhbnRpYXRlZCBhdCBsaW5rIHRpbWUpXG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbih2aWV3LmNvbnRyb2xsZXJQcm92aWRlcikgfHwgaXNBcnJheSh2aWV3LmNvbnRyb2xsZXJQcm92aWRlcikpIHtcbiAgICAgICAgICAgICAgdmFyIGluamVjdExvY2FscyA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBpbmplY3RhYmxlcywgZHN0Lmdsb2JhbHMpO1xuICAgICAgICAgICAgICByZXN1bHQuJCRjb250cm9sbGVyID0gJGluamVjdG9yLmludm9rZSh2aWV3LmNvbnRyb2xsZXJQcm92aWRlciwgbnVsbCwgaW5qZWN0TG9jYWxzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC4kJGNvbnRyb2xsZXIgPSB2aWV3LmNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcm92aWRlIGFjY2VzcyB0byB0aGUgc3RhdGUgaXRzZWxmIGZvciBpbnRlcm5hbCB1c2VcbiAgICAgICAgICAgIHJlc3VsdC4kJHN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICByZXN1bHQuJCRjb250cm9sbGVyQXMgPSB2aWV3LmNvbnRyb2xsZXJBcztcbiAgICAgICAgICAgIHJlc3VsdC4kJHJlc29sdmVBcyA9IHZpZXcucmVzb2x2ZUFzO1xuICAgICAgICAgICAgZHN0W25hbWVdID0gcmVzdWx0O1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICRxLmFsbCh2aWV3c1Byb21pc2VzKS50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgcmV0dXJuIGRzdC5nbG9iYWxzO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gV2FpdCBmb3IgYWxsIHRoZSBwcm9taXNlcyBhbmQgdGhlbiByZXR1cm4gdGhlIGFjdGl2YXRpb24gb2JqZWN0XG4gICAgICByZXR1cm4gJHEuYWxsKHByb21pc2VzKS50aGVuKHJlc29sdmVWaWV3cykudGhlbihmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBkc3Q7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gJHN0YXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkU2tpcFJlbG9hZCh0bywgdG9QYXJhbXMsIGZyb20sIGZyb21QYXJhbXMsIGxvY2Fscywgb3B0aW9ucykge1xuICAgIC8vIFJldHVybiB0cnVlIGlmIHRoZXJlIGFyZSBubyBkaWZmZXJlbmNlcyBpbiBub24tc2VhcmNoIChwYXRoL29iamVjdCkgcGFyYW1zLCBmYWxzZSBpZiB0aGVyZSBhcmUgZGlmZmVyZW5jZXNcbiAgICBmdW5jdGlvbiBub25TZWFyY2hQYXJhbXNFcXVhbChmcm9tQW5kVG9TdGF0ZSwgZnJvbVBhcmFtcywgdG9QYXJhbXMpIHtcbiAgICAgIC8vIElkZW50aWZ5IHdoZXRoZXIgYWxsIHRoZSBwYXJhbWV0ZXJzIHRoYXQgZGlmZmVyIGJldHdlZW4gYGZyb21QYXJhbXNgIGFuZCBgdG9QYXJhbXNgIHdlcmUgc2VhcmNoIHBhcmFtcy5cbiAgICAgIGZ1bmN0aW9uIG5vdFNlYXJjaFBhcmFtKGtleSkge1xuICAgICAgICByZXR1cm4gZnJvbUFuZFRvU3RhdGUucGFyYW1zW2tleV0ubG9jYXRpb24gIT0gXCJzZWFyY2hcIjtcbiAgICAgIH1cbiAgICAgIHZhciBub25RdWVyeVBhcmFtS2V5cyA9IGZyb21BbmRUb1N0YXRlLnBhcmFtcy4kJGtleXMoKS5maWx0ZXIobm90U2VhcmNoUGFyYW0pO1xuICAgICAgdmFyIG5vblF1ZXJ5UGFyYW1zID0gcGljay5hcHBseSh7fSwgW2Zyb21BbmRUb1N0YXRlLnBhcmFtc10uY29uY2F0KG5vblF1ZXJ5UGFyYW1LZXlzKSk7XG4gICAgICB2YXIgbm9uUXVlcnlQYXJhbVNldCA9IG5ldyAkJFVNRlAuUGFyYW1TZXQobm9uUXVlcnlQYXJhbXMpO1xuICAgICAgcmV0dXJuIG5vblF1ZXJ5UGFyYW1TZXQuJCRlcXVhbHMoZnJvbVBhcmFtcywgdG9QYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIElmIHJlbG9hZCB3YXMgbm90IGV4cGxpY2l0bHkgcmVxdWVzdGVkXG4gICAgLy8gYW5kIHdlJ3JlIHRyYW5zaXRpb25pbmcgdG8gdGhlIHNhbWUgc3RhdGUgd2UncmUgYWxyZWFkeSBpblxuICAgIC8vIGFuZCAgICB0aGUgbG9jYWxzIGRpZG4ndCBjaGFuZ2VcbiAgICAvLyAgICAgb3IgdGhleSBjaGFuZ2VkIGluIGEgd2F5IHRoYXQgZG9lc24ndCBtZXJpdCByZWxvYWRpbmdcbiAgICAvLyAgICAgICAgKHJlbG9hZE9uUGFyYW1zOmZhbHNlLCBvciByZWxvYWRPblNlYXJjaC5mYWxzZSBhbmQgb25seSBzZWFyY2ggcGFyYW1zIGNoYW5nZWQpXG4gICAgLy8gVGhlbiByZXR1cm4gdHJ1ZS5cbiAgICBpZiAoIW9wdGlvbnMucmVsb2FkICYmIHRvID09PSBmcm9tICYmXG4gICAgICAobG9jYWxzID09PSBmcm9tLmxvY2FscyB8fCAodG8uc2VsZi5yZWxvYWRPblNlYXJjaCA9PT0gZmFsc2UgJiYgbm9uU2VhcmNoUGFyYW1zRXF1YWwoZnJvbSwgZnJvbVBhcmFtcywgdG9QYXJhbXMpKSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnN0YXRlJylcbiAgLmZhY3RvcnkoJyRzdGF0ZVBhcmFtcycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9OyB9KVxuICAuY29uc3RhbnQoXCIkc3RhdGUucnVudGltZVwiLCB7IGF1dG9pbmplY3Q6IHRydWUgfSlcbiAgLnByb3ZpZGVyKCckc3RhdGUnLCAkU3RhdGVQcm92aWRlcilcbiAgLy8gSW5qZWN0ICRzdGF0ZSB0byBpbml0aWFsaXplIHdoZW4gZW50ZXJpbmcgcnVudGltZS4gIzI1NzRcbiAgLnJ1bihbJyRpbmplY3RvcicsIGZ1bmN0aW9uICgkaW5qZWN0b3IpIHtcbiAgICAvLyBBbGxvdyB0ZXN0cyAoc3RhdGVTcGVjLmpzKSB0byB0dXJuIHRoaXMgb2ZmIGJ5IGRlZmluaW5nIHRoaXMgY29uc3RhbnRcbiAgICBpZiAoJGluamVjdG9yLmdldChcIiRzdGF0ZS5ydW50aW1lXCIpLmF1dG9pbmplY3QpIHtcbiAgICAgICRpbmplY3Rvci5nZXQoJyRzdGF0ZScpO1xuICAgIH1cbiAgfV0pO1xuXG5cbiRWaWV3UHJvdmlkZXIuJGluamVjdCA9IFtdO1xuZnVuY3Rpb24gJFZpZXdQcm92aWRlcigpIHtcblxuICB0aGlzLiRnZXQgPSAkZ2V0O1xuICAvKipcbiAgICogQG5nZG9jIG9iamVjdFxuICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHZpZXdcbiAgICpcbiAgICogQHJlcXVpcmVzIHVpLnJvdXRlci51dGlsLiR0ZW1wbGF0ZUZhY3RvcnlcbiAgICogQHJlcXVpcmVzICRyb290U2NvcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqXG4gICAqL1xuICAkZ2V0LiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHRlbXBsYXRlRmFjdG9yeSddO1xuICBmdW5jdGlvbiAkZ2V0KCAgICRyb290U2NvcGUsICAgJHRlbXBsYXRlRmFjdG9yeSkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyAkdmlldy5sb2FkKCdmdWxsLnZpZXdOYW1lJywgeyB0ZW1wbGF0ZTogLi4uLCBjb250cm9sbGVyOiAuLi4sIHJlc29sdmU6IC4uLiwgYXN5bmM6IGZhbHNlLCBwYXJhbXM6IC4uLiB9KVxuICAgICAgLyoqXG4gICAgICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS4kdmlldyNsb2FkXG4gICAgICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnN0YXRlLiR2aWV3XG4gICAgICAgKlxuICAgICAgICogQGRlc2NyaXB0aW9uXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZVxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9uIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgbG9hZDogZnVuY3Rpb24gbG9hZChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciByZXN1bHQsIGRlZmF1bHRzID0ge1xuICAgICAgICAgIHRlbXBsYXRlOiBudWxsLCBjb250cm9sbGVyOiBudWxsLCB2aWV3OiBudWxsLCBsb2NhbHM6IG51bGwsIG5vdGlmeTogdHJ1ZSwgYXN5bmM6IHRydWUsIHBhcmFtczoge31cbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucyA9IGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudmlldykge1xuICAgICAgICAgIHJlc3VsdCA9ICR0ZW1wbGF0ZUZhY3RvcnkuZnJvbUNvbmZpZyhvcHRpb25zLnZpZXcsIG9wdGlvbnMucGFyYW1zLCBvcHRpb25zLmxvY2Fscyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIuc3RhdGUnKS5wcm92aWRlcignJHZpZXcnLCAkVmlld1Byb3ZpZGVyKTtcblxuLyoqXG4gKiBAbmdkb2Mgb2JqZWN0XG4gKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHVpVmlld1Njcm9sbFByb3ZpZGVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHVpVmlld1Njcm9sbH0gc2VydmljZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gJFZpZXdTY3JvbGxQcm92aWRlcigpIHtcblxuICB2YXIgdXNlQW5jaG9yU2Nyb2xsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuJHVpVmlld1Njcm9sbFByb3ZpZGVyI3VzZUFuY2hvclNjcm9sbFxuICAgKiBAbWV0aG9kT2YgdWkucm91dGVyLnN0YXRlLiR1aVZpZXdTY3JvbGxQcm92aWRlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV2ZXJ0cyBiYWNrIHRvIHVzaW5nIHRoZSBjb3JlIFtgJGFuY2hvclNjcm9sbGBdKGh0dHA6Ly9kb2NzLmFuZ3VsYXJqcy5vcmcvYXBpL25nLiRhbmNob3JTY3JvbGwpIHNlcnZpY2UgZm9yXG4gICAqIHNjcm9sbGluZyBiYXNlZCBvbiB0aGUgdXJsIGFuY2hvci5cbiAgICovXG4gIHRoaXMudXNlQW5jaG9yU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIHVzZUFuY2hvclNjcm9sbCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBvYmplY3RcbiAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLiR1aVZpZXdTY3JvbGxcbiAgICpcbiAgICogQHJlcXVpcmVzICRhbmNob3JTY3JvbGxcbiAgICogQHJlcXVpcmVzICR0aW1lb3V0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBXaGVuIGNhbGxlZCB3aXRoIGEganFMaXRlIGVsZW1lbnQsIGl0IHNjcm9sbHMgdGhlIGVsZW1lbnQgaW50byB2aWV3IChhZnRlciBhXG4gICAqIGAkdGltZW91dGAgc28gdGhlIERPTSBoYXMgdGltZSB0byByZWZyZXNoKS5cbiAgICpcbiAgICogSWYgeW91IHByZWZlciB0byByZWx5IG9uIGAkYW5jaG9yU2Nyb2xsYCB0byBzY3JvbGwgdGhlIHZpZXcgdG8gdGhlIGFuY2hvcixcbiAgICogdGhpcyBjYW4gYmUgZW5hYmxlZCBieSBjYWxsaW5nIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHVpVmlld1Njcm9sbFByb3ZpZGVyI21ldGhvZHNfdXNlQW5jaG9yU2Nyb2xsIGAkdWlWaWV3U2Nyb2xsUHJvdmlkZXIudXNlQW5jaG9yU2Nyb2xsKClgfS5cbiAgICovXG4gIHRoaXMuJGdldCA9IFsnJGFuY2hvclNjcm9sbCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkYW5jaG9yU2Nyb2xsLCAkdGltZW91dCkge1xuICAgIGlmICh1c2VBbmNob3JTY3JvbGwpIHtcbiAgICAgIHJldHVybiAkYW5jaG9yU2Nyb2xsO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbGVtZW50WzBdLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9LCAwLCBmYWxzZSk7XG4gICAgfTtcbiAgfV07XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXIuc3RhdGUnKS5wcm92aWRlcignJHVpVmlld1Njcm9sbCcsICRWaWV3U2Nyb2xsUHJvdmlkZXIpO1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS5kaXJlY3RpdmU6dWktdmlld1xuICpcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gKiBAcmVxdWlyZXMgJGNvbXBpbGVcbiAqIEByZXF1aXJlcyAkY29udHJvbGxlclxuICogQHJlcXVpcmVzICRpbmplY3RvclxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS4kdWlWaWV3U2Nyb2xsXG4gKiBAcmVxdWlyZXMgJGRvY3VtZW50XG4gKlxuICogQHJlc3RyaWN0IEVDQVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIHVpLXZpZXcgZGlyZWN0aXZlIHRlbGxzICRzdGF0ZSB3aGVyZSB0byBwbGFjZSB5b3VyIHRlbXBsYXRlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZz19IG5hbWUgQSB2aWV3IG5hbWUuIFRoZSBuYW1lIHNob3VsZCBiZSB1bmlxdWUgYW1vbmdzdCB0aGUgb3RoZXIgdmlld3MgaW4gdGhlXG4gKiBzYW1lIHN0YXRlLiBZb3UgY2FuIGhhdmUgdmlld3Mgb2YgdGhlIHNhbWUgbmFtZSB0aGF0IGxpdmUgaW4gZGlmZmVyZW50IHN0YXRlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZz19IGF1dG9zY3JvbGwgSXQgYWxsb3dzIHlvdSB0byBzZXQgdGhlIHNjcm9sbCBiZWhhdmlvciBvZiB0aGUgYnJvd3NlciB3aW5kb3dcbiAqIHdoZW4gYSB2aWV3IGlzIHBvcHVsYXRlZC4gQnkgZGVmYXVsdCwgJGFuY2hvclNjcm9sbCBpcyBvdmVycmlkZGVuIGJ5IHVpLXJvdXRlcidzIGN1c3RvbSBzY3JvbGxcbiAqIHNlcnZpY2UsIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHVpVmlld1Njcm9sbH0uIFRoaXMgY3VzdG9tIHNlcnZpY2UgbGV0J3MgeW91XG4gKiBzY3JvbGwgdWktdmlldyBlbGVtZW50cyBpbnRvIHZpZXcgd2hlbiB0aGV5IGFyZSBwb3B1bGF0ZWQgZHVyaW5nIGEgc3RhdGUgYWN0aXZhdGlvbi5cbiAqXG4gKiAqTm90ZTogVG8gcmV2ZXJ0IGJhY2sgdG8gb2xkIFtgJGFuY2hvclNjcm9sbGBdKGh0dHA6Ly9kb2NzLmFuZ3VsYXJqcy5vcmcvYXBpL25nLiRhbmNob3JTY3JvbGwpXG4gKiBmdW5jdGlvbmFsaXR5LCBjYWxsIGAkdWlWaWV3U2Nyb2xsUHJvdmlkZXIudXNlQW5jaG9yU2Nyb2xsKClgLipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZz19IG9ubG9hZCBFeHByZXNzaW9uIHRvIGV2YWx1YXRlIHdoZW5ldmVyIHRoZSB2aWV3IHVwZGF0ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIEEgdmlldyBjYW4gYmUgdW5uYW1lZCBvciBuYW1lZC5cbiAqIDxwcmU+XG4gKiA8IS0tIFVubmFtZWQgLS0+XG4gKiA8ZGl2IHVpLXZpZXc+PC9kaXY+XG4gKlxuICogPCEtLSBOYW1lZCAtLT5cbiAqIDxkaXYgdWktdmlldz1cInZpZXdOYW1lXCI+PC9kaXY+XG4gKiA8L3ByZT5cbiAqXG4gKiBZb3UgY2FuIG9ubHkgaGF2ZSBvbmUgdW5uYW1lZCB2aWV3IHdpdGhpbiBhbnkgdGVtcGxhdGUgKG9yIHJvb3QgaHRtbCkuIElmIHlvdSBhcmUgb25seSB1c2luZyBhXG4gKiBzaW5nbGUgdmlldyBhbmQgaXQgaXMgdW5uYW1lZCB0aGVuIHlvdSBjYW4gcG9wdWxhdGUgaXQgbGlrZSBzbzpcbiAqIDxwcmU+XG4gKiA8ZGl2IHVpLXZpZXc+PC9kaXY+XG4gKiAkc3RhdGVQcm92aWRlci5zdGF0ZShcImhvbWVcIiwge1xuICogICB0ZW1wbGF0ZTogXCI8aDE+SEVMTE8hPC9oMT5cIlxuICogfSlcbiAqIDwvcHJlPlxuICpcbiAqIFRoZSBhYm92ZSBpcyBhIGNvbnZlbmllbnQgc2hvcnRjdXQgZXF1aXZhbGVudCB0byBzcGVjaWZ5aW5nIHlvdXIgdmlldyBleHBsaWNpdGx5IHdpdGggdGhlIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlUHJvdmlkZXIjbWV0aG9kc19zdGF0ZSBgdmlld3NgfVxuICogY29uZmlnIHByb3BlcnR5LCBieSBuYW1lLCBpbiB0aGlzIGNhc2UgYW4gZW1wdHkgbmFtZTpcbiAqIDxwcmU+XG4gKiAkc3RhdGVQcm92aWRlci5zdGF0ZShcImhvbWVcIiwge1xuICogICB2aWV3czoge1xuICogICAgIFwiXCI6IHtcbiAqICAgICAgIHRlbXBsYXRlOiBcIjxoMT5IRUxMTyE8L2gxPlwiXG4gKiAgICAgfVxuICogICB9ICAgIFxuICogfSlcbiAqIDwvcHJlPlxuICpcbiAqIEJ1dCB0eXBpY2FsbHkgeW91J2xsIG9ubHkgdXNlIHRoZSB2aWV3cyBwcm9wZXJ0eSBpZiB5b3UgbmFtZSB5b3VyIHZpZXcgb3IgaGF2ZSBtb3JlIHRoYW4gb25lIHZpZXdcbiAqIGluIHRoZSBzYW1lIHRlbXBsYXRlLiBUaGVyZSdzIG5vdCByZWFsbHkgYSBjb21wZWxsaW5nIHJlYXNvbiB0byBuYW1lIGEgdmlldyBpZiBpdHMgdGhlIG9ubHkgb25lLFxuICogYnV0IHlvdSBjb3VsZCBpZiB5b3Ugd2FudGVkLCBsaWtlIHNvOlxuICogPHByZT5cbiAqIDxkaXYgdWktdmlldz1cIm1haW5cIj48L2Rpdj5cbiAqIDwvcHJlPlxuICogPHByZT5cbiAqICRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiaG9tZVwiLCB7XG4gKiAgIHZpZXdzOiB7XG4gKiAgICAgXCJtYWluXCI6IHtcbiAqICAgICAgIHRlbXBsYXRlOiBcIjxoMT5IRUxMTyE8L2gxPlwiXG4gKiAgICAgfVxuICogICB9ICAgIFxuICogfSlcbiAqIDwvcHJlPlxuICpcbiAqIFJlYWxseSB0aG91Z2gsIHlvdSdsbCB1c2Ugdmlld3MgdG8gc2V0IHVwIG11bHRpcGxlIHZpZXdzOlxuICogPHByZT5cbiAqIDxkaXYgdWktdmlldz48L2Rpdj5cbiAqIDxkaXYgdWktdmlldz1cImNoYXJ0XCI+PC9kaXY+XG4gKiA8ZGl2IHVpLXZpZXc9XCJkYXRhXCI+PC9kaXY+XG4gKiA8L3ByZT5cbiAqXG4gKiA8cHJlPlxuICogJHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJob21lXCIsIHtcbiAqICAgdmlld3M6IHtcbiAqICAgICBcIlwiOiB7XG4gKiAgICAgICB0ZW1wbGF0ZTogXCI8aDE+SEVMTE8hPC9oMT5cIlxuICogICAgIH0sXG4gKiAgICAgXCJjaGFydFwiOiB7XG4gKiAgICAgICB0ZW1wbGF0ZTogXCI8Y2hhcnRfdGhpbmcvPlwiXG4gKiAgICAgfSxcbiAqICAgICBcImRhdGFcIjoge1xuICogICAgICAgdGVtcGxhdGU6IFwiPGRhdGFfdGhpbmcvPlwiXG4gKiAgICAgfVxuICogICB9ICAgIFxuICogfSlcbiAqIDwvcHJlPlxuICpcbiAqIEV4YW1wbGVzIGZvciBgYXV0b3Njcm9sbGA6XG4gKlxuICogPHByZT5cbiAqIDwhLS0gSWYgYXV0b3Njcm9sbCBwcmVzZW50IHdpdGggbm8gZXhwcmVzc2lvbixcbiAqICAgICAgdGhlbiBzY3JvbGwgdWktdmlldyBpbnRvIHZpZXcgLS0+XG4gKiA8dWktdmlldyBhdXRvc2Nyb2xsLz5cbiAqXG4gKiA8IS0tIElmIGF1dG9zY3JvbGwgcHJlc2VudCB3aXRoIHZhbGlkIGV4cHJlc3Npb24sXG4gKiAgICAgIHRoZW4gc2Nyb2xsIHVpLXZpZXcgaW50byB2aWV3IGlmIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIHRydWUgLS0+XG4gKiA8dWktdmlldyBhdXRvc2Nyb2xsPSd0cnVlJy8+XG4gKiA8dWktdmlldyBhdXRvc2Nyb2xsPSdmYWxzZScvPlxuICogPHVpLXZpZXcgYXV0b3Njcm9sbD0nc2NvcGVWYXJpYWJsZScvPlxuICogPC9wcmU+XG4gKlxuICogUmVzb2x2ZSBkYXRhOlxuICpcbiAqIFRoZSByZXNvbHZlZCBkYXRhIGZyb20gdGhlIHN0YXRlJ3MgYHJlc29sdmVgIGJsb2NrIGlzIHBsYWNlZCBvbiB0aGUgc2NvcGUgYXMgYCRyZXNvbHZlYCAodGhpc1xuICogY2FuIGJlIGN1c3RvbWl6ZWQgdXNpbmcgW1tWaWV3RGVjbGFyYXRpb24ucmVzb2x2ZUFzXV0pLiAgVGhpcyBjYW4gYmUgdGhlbiBhY2Nlc3NlZCBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiBOb3RlIHRoYXQgd2hlbiBgY29udHJvbGxlckFzYCBpcyBiZWluZyB1c2VkLCBgJHJlc29sdmVgIGlzIHNldCBvbiB0aGUgY29udHJvbGxlciBpbnN0YW5jZSAqYWZ0ZXIqIHRoZVxuICogY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQuICBUaGUgYCRvbkluaXQoKWAgaG9vayBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIGNvZGUgd2hpY2hcbiAqIGRlcGVuZHMgb24gYCRyZXNvbHZlYCBkYXRhLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2Ugb2YgJHJlc29sdmUgaW4gYSB2aWV3IHRlbXBsYXRlXG4gKiA8cHJlPlxuICogJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLCB7XG4gKiAgIHRlbXBsYXRlOiAnPG15LWNvbXBvbmVudCB1c2VyPVwiJHJlc29sdmUudXNlclwiPjwvbXktY29tcG9uZW50PicsXG4gKiAgIHJlc29sdmU6IHtcbiAqICAgICB1c2VyOiBmdW5jdGlvbihVc2VyU2VydmljZSkgeyByZXR1cm4gVXNlclNlcnZpY2UuZmV0Y2hVc2VyKCk7IH1cbiAqICAgfVxuICogfSk7XG4gKiA8L3ByZT5cbiAqL1xuJFZpZXdEaXJlY3RpdmUuJGluamVjdCA9IFsnJHN0YXRlJywgJyRpbmplY3RvcicsICckdWlWaWV3U2Nyb2xsJywgJyRpbnRlcnBvbGF0ZScsICckcSddO1xuZnVuY3Rpb24gJFZpZXdEaXJlY3RpdmUoICAgJHN0YXRlLCAgICRpbmplY3RvciwgICAkdWlWaWV3U2Nyb2xsLCAgICRpbnRlcnBvbGF0ZSwgICAkcSkge1xuXG4gIGZ1bmN0aW9uIGdldFNlcnZpY2UoKSB7XG4gICAgcmV0dXJuICgkaW5qZWN0b3IuaGFzKSA/IGZ1bmN0aW9uKHNlcnZpY2UpIHtcbiAgICAgIHJldHVybiAkaW5qZWN0b3IuaGFzKHNlcnZpY2UpID8gJGluamVjdG9yLmdldChzZXJ2aWNlKSA6IG51bGw7XG4gICAgfSA6IGZ1bmN0aW9uKHNlcnZpY2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAkaW5qZWN0b3IuZ2V0KHNlcnZpY2UpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIHNlcnZpY2UgPSBnZXRTZXJ2aWNlKCksXG4gICAgICAkYW5pbWF0b3IgPSBzZXJ2aWNlKCckYW5pbWF0b3InKSxcbiAgICAgICRhbmltYXRlID0gc2VydmljZSgnJGFuaW1hdGUnKTtcblxuICAvLyBSZXR1cm5zIGEgc2V0IG9mIERPTSBtYW5pcHVsYXRpb24gZnVuY3Rpb25zIGJhc2VkIG9uIHdoaWNoIEFuZ3VsYXIgdmVyc2lvblxuICAvLyBpdCBzaG91bGQgdXNlXG4gIGZ1bmN0aW9uIGdldFJlbmRlcmVyKGF0dHJzLCBzY29wZSkge1xuICAgIHZhciBzdGF0aWNzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIHRhcmdldCwgY2IpIHsgdGFyZ2V0LmFmdGVyKGVsZW1lbnQpOyBjYigpOyB9LFxuICAgICAgICBsZWF2ZTogZnVuY3Rpb24gKGVsZW1lbnQsIGNiKSB7IGVsZW1lbnQucmVtb3ZlKCk7IGNiKCk7IH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlmICgkYW5pbWF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uKGVsZW1lbnQsIHRhcmdldCwgY2IpIHtcbiAgICAgICAgICBpZiAoYW5ndWxhci52ZXJzaW9uLm1pbm9yID4gMikge1xuICAgICAgICAgICAgJGFuaW1hdGUuZW50ZXIoZWxlbWVudCwgbnVsbCwgdGFyZ2V0KS50aGVuKGNiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGFuaW1hdGUuZW50ZXIoZWxlbWVudCwgbnVsbCwgdGFyZ2V0LCBjYik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsZWF2ZTogZnVuY3Rpb24oZWxlbWVudCwgY2IpIHtcbiAgICAgICAgICBpZiAoYW5ndWxhci52ZXJzaW9uLm1pbm9yID4gMikge1xuICAgICAgICAgICAgJGFuaW1hdGUubGVhdmUoZWxlbWVudCkudGhlbihjYik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhbmltYXRlLmxlYXZlKGVsZW1lbnQsIGNiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCRhbmltYXRvcikge1xuICAgICAgdmFyIGFuaW1hdGUgPSAkYW5pbWF0b3IgJiYgJGFuaW1hdG9yKHNjb3BlLCBhdHRycyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVudGVyOiBmdW5jdGlvbihlbGVtZW50LCB0YXJnZXQsIGNiKSB7YW5pbWF0ZS5lbnRlcihlbGVtZW50LCBudWxsLCB0YXJnZXQpOyBjYigpOyB9LFxuICAgICAgICBsZWF2ZTogZnVuY3Rpb24oZWxlbWVudCwgY2IpIHsgYW5pbWF0ZS5sZWF2ZShlbGVtZW50KTsgY2IoKTsgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGljcygpO1xuICB9XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0VDQScsXG4gICAgdGVybWluYWw6IHRydWUsXG4gICAgcHJpb3JpdHk6IDQwMCxcbiAgICB0cmFuc2NsdWRlOiAnZWxlbWVudCcsXG4gICAgY29tcGlsZTogZnVuY3Rpb24gKHRFbGVtZW50LCB0QXR0cnMsICR0cmFuc2NsdWRlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHNjb3BlLCAkZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzRWwsIGN1cnJlbnRFbCwgY3VycmVudFNjb3BlLCBsYXRlc3RMb2NhbHMsXG4gICAgICAgICAgICBvbmxvYWRFeHAgICAgID0gYXR0cnMub25sb2FkIHx8ICcnLFxuICAgICAgICAgICAgYXV0b1Njcm9sbEV4cCA9IGF0dHJzLmF1dG9zY3JvbGwsXG4gICAgICAgICAgICByZW5kZXJlciAgICAgID0gZ2V0UmVuZGVyZXIoYXR0cnMsIHNjb3BlKSxcbiAgICAgICAgICAgIGluaGVyaXRlZCAgICAgPSAkZWxlbWVudC5pbmhlcml0ZWREYXRhKCckdWlWaWV3Jyk7XG5cbiAgICAgICAgc2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdXBkYXRlVmlldyhmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZVZpZXcodHJ1ZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYW51cExhc3RWaWV3KCkge1xuICAgICAgICAgIGlmIChwcmV2aW91c0VsKSB7XG4gICAgICAgICAgICBwcmV2aW91c0VsLnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJldmlvdXNFbCA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGN1cnJlbnRTY29wZSkge1xuICAgICAgICAgICAgY3VycmVudFNjb3BlLiRkZXN0cm95KCk7XG4gICAgICAgICAgICBjdXJyZW50U2NvcGUgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgICAgIHZhciAkdWlWaWV3RGF0YSA9IGN1cnJlbnRFbC5kYXRhKCckdWlWaWV3QW5pbScpO1xuICAgICAgICAgICAgcmVuZGVyZXIubGVhdmUoY3VycmVudEVsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJHVpVmlld0RhdGEuJCRhbmltTGVhdmUucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICBwcmV2aW91c0VsID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcmV2aW91c0VsID0gY3VycmVudEVsO1xuICAgICAgICAgICAgY3VycmVudEVsID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KGZpcnN0VGltZSkge1xuICAgICAgICAgIHZhciBuZXdTY29wZSxcbiAgICAgICAgICAgICAgbmFtZSAgICAgICAgICAgID0gZ2V0VWlWaWV3TmFtZShzY29wZSwgYXR0cnMsICRlbGVtZW50LCAkaW50ZXJwb2xhdGUpLFxuICAgICAgICAgICAgICBwcmV2aW91c0xvY2FscyAgPSBuYW1lICYmICRzdGF0ZS4kY3VycmVudCAmJiAkc3RhdGUuJGN1cnJlbnQubG9jYWxzW25hbWVdO1xuXG4gICAgICAgICAgaWYgKCFmaXJzdFRpbWUgJiYgcHJldmlvdXNMb2NhbHMgPT09IGxhdGVzdExvY2FscykgcmV0dXJuOyAvLyBub3RoaW5nIHRvIGRvXG4gICAgICAgICAgbmV3U2NvcGUgPSBzY29wZS4kbmV3KCk7XG4gICAgICAgICAgbGF0ZXN0TG9jYWxzID0gJHN0YXRlLiRjdXJyZW50LmxvY2Fsc1tuYW1lXTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEBuZ2RvYyBldmVudFxuICAgICAgICAgICAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS5kaXJlY3RpdmU6dWktdmlldyMkdmlld0NvbnRlbnRMb2FkaW5nXG4gICAgICAgICAgICogQGV2ZW50T2YgdWkucm91dGVyLnN0YXRlLmRpcmVjdGl2ZTp1aS12aWV3XG4gICAgICAgICAgICogQGV2ZW50VHlwZSBlbWl0cyBvbiB1aS12aWV3IGRpcmVjdGl2ZSBzY29wZVxuICAgICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAgICAqXG4gICAgICAgICAgICogRmlyZWQgb25jZSB0aGUgdmlldyAqKmJlZ2lucyBsb2FkaW5nKiosICpiZWZvcmUqIHRoZSBET00gaXMgcmVuZGVyZWQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgb2JqZWN0LlxuICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TmFtZSBOYW1lIG9mIHRoZSB2aWV3LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIG5ld1Njb3BlLiRlbWl0KCckdmlld0NvbnRlbnRMb2FkaW5nJywgbmFtZSk7XG5cbiAgICAgICAgICB2YXIgY2xvbmUgPSAkdHJhbnNjbHVkZShuZXdTY29wZSwgZnVuY3Rpb24oY2xvbmUpIHtcbiAgICAgICAgICAgIHZhciBhbmltRW50ZXIgPSAkcS5kZWZlcigpLCBhbmltTGVhdmUgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHZpZXdBbmltRGF0YSA9IHtcbiAgICAgICAgICAgICAgJGFuaW1FbnRlcjogYW5pbUVudGVyLnByb21pc2UsXG4gICAgICAgICAgICAgICRhbmltTGVhdmU6IGFuaW1MZWF2ZS5wcm9taXNlLFxuICAgICAgICAgICAgICAkJGFuaW1MZWF2ZTogYW5pbUxlYXZlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjbG9uZS5kYXRhKCckdWlWaWV3QW5pbScsIHZpZXdBbmltRGF0YSk7XG4gICAgICAgICAgICByZW5kZXJlci5lbnRlcihjbG9uZSwgJGVsZW1lbnQsIGZ1bmN0aW9uIG9uVWlWaWV3RW50ZXIoKSB7XG4gICAgICAgICAgICAgIGFuaW1FbnRlci5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgIGlmKGN1cnJlbnRTY29wZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTY29wZS4kZW1pdCgnJHZpZXdDb250ZW50QW5pbWF0aW9uRW5kZWQnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdXRvU2Nyb2xsRXhwKSAmJiAhYXV0b1Njcm9sbEV4cCB8fCBzY29wZS4kZXZhbChhdXRvU2Nyb2xsRXhwKSkge1xuICAgICAgICAgICAgICAgICR1aVZpZXdTY3JvbGwoY2xvbmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNsZWFudXBMYXN0VmlldygpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY3VycmVudEVsID0gY2xvbmU7XG4gICAgICAgICAgY3VycmVudFNjb3BlID0gbmV3U2NvcGU7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQG5nZG9jIGV2ZW50XG4gICAgICAgICAgICogQG5hbWUgdWkucm91dGVyLnN0YXRlLmRpcmVjdGl2ZTp1aS12aWV3IyR2aWV3Q29udGVudExvYWRlZFxuICAgICAgICAgICAqIEBldmVudE9mIHVpLnJvdXRlci5zdGF0ZS5kaXJlY3RpdmU6dWktdmlld1xuICAgICAgICAgICAqIEBldmVudFR5cGUgZW1pdHMgb24gdWktdmlldyBkaXJlY3RpdmUgc2NvcGVcbiAgICAgICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAgICAgKiBGaXJlZCBvbmNlIHRoZSB2aWV3IGlzICoqbG9hZGVkKiosICphZnRlciogdGhlIERPTSBpcyByZW5kZXJlZC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudCBvYmplY3QuXG4gICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZpZXdOYW1lIE5hbWUgb2YgdGhlIHZpZXcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgY3VycmVudFNjb3BlLiRlbWl0KCckdmlld0NvbnRlbnRMb2FkZWQnLCBuYW1lKTtcbiAgICAgICAgICBjdXJyZW50U2NvcGUuJGV2YWwob25sb2FkRXhwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuJFZpZXdEaXJlY3RpdmVGaWxsLiRpbmplY3QgPSBbJyRjb21waWxlJywgJyRjb250cm9sbGVyJywgJyRzdGF0ZScsICckaW50ZXJwb2xhdGUnXTtcbmZ1bmN0aW9uICRWaWV3RGlyZWN0aXZlRmlsbCAoICAkY29tcGlsZSwgICAkY29udHJvbGxlciwgICAkc3RhdGUsICAgJGludGVycG9sYXRlKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQ0EnLFxuICAgIHByaW9yaXR5OiAtNDAwLFxuICAgIGNvbXBpbGU6IGZ1bmN0aW9uICh0RWxlbWVudCkge1xuICAgICAgdmFyIGluaXRpYWwgPSB0RWxlbWVudC5odG1sKCk7XG4gICAgICBpZiAodEVsZW1lbnQuZW1wdHkpIHtcbiAgICAgICAgdEVsZW1lbnQuZW1wdHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5nIDEuMC4wIGRvZXNuJ3QgaGF2ZSBlbXB0eSgpLCB3aGljaCBjbGVhbnMgdXAgZGF0YSBhbmQgaGFuZGxlcnNcbiAgICAgICAgdEVsZW1lbnRbMF0uaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgJGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gJHN0YXRlLiRjdXJyZW50LFxuICAgICAgICAgICAgbmFtZSA9IGdldFVpVmlld05hbWUoc2NvcGUsIGF0dHJzLCAkZWxlbWVudCwgJGludGVycG9sYXRlKSxcbiAgICAgICAgICAgIGxvY2FscyAgPSBjdXJyZW50ICYmIGN1cnJlbnQubG9jYWxzW25hbWVdO1xuXG4gICAgICAgIGlmICghIGxvY2Fscykge1xuICAgICAgICAgICRlbGVtZW50Lmh0bWwoaW5pdGlhbCk7XG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQuY29udGVudHMoKSkoc2NvcGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50LmRhdGEoJyR1aVZpZXcnLCB7IG5hbWU6IG5hbWUsIHN0YXRlOiBsb2NhbHMuJCRzdGF0ZSB9KTtcbiAgICAgICAgJGVsZW1lbnQuaHRtbChsb2NhbHMuJHRlbXBsYXRlID8gbG9jYWxzLiR0ZW1wbGF0ZSA6IGluaXRpYWwpO1xuXG4gICAgICAgIHZhciByZXNvbHZlRGF0YSA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBsb2NhbHMpO1xuICAgICAgICBzY29wZVtsb2NhbHMuJCRyZXNvbHZlQXNdID0gcmVzb2x2ZURhdGE7XG5cbiAgICAgICAgdmFyIGxpbmsgPSAkY29tcGlsZSgkZWxlbWVudC5jb250ZW50cygpKTtcblxuICAgICAgICBpZiAobG9jYWxzLiQkY29udHJvbGxlcikge1xuICAgICAgICAgIGxvY2Fscy4kc2NvcGUgPSBzY29wZTtcbiAgICAgICAgICBsb2NhbHMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICAgICAgICB2YXIgY29udHJvbGxlciA9ICRjb250cm9sbGVyKGxvY2Fscy4kJGNvbnRyb2xsZXIsIGxvY2Fscyk7XG4gICAgICAgICAgaWYgKGxvY2Fscy4kJGNvbnRyb2xsZXJBcykge1xuICAgICAgICAgICAgc2NvcGVbbG9jYWxzLiQkY29udHJvbGxlckFzXSA9IGNvbnRyb2xsZXI7XG4gICAgICAgICAgICBzY29wZVtsb2NhbHMuJCRjb250cm9sbGVyQXNdW2xvY2Fscy4kJHJlc29sdmVBc10gPSByZXNvbHZlRGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY29udHJvbGxlci4kb25Jbml0KSkgY29udHJvbGxlci4kb25Jbml0KCk7XG4gICAgICAgICAgJGVsZW1lbnQuZGF0YSgnJG5nQ29udHJvbGxlckNvbnRyb2xsZXInLCBjb250cm9sbGVyKTtcbiAgICAgICAgICAkZWxlbWVudC5jaGlsZHJlbigpLmRhdGEoJyRuZ0NvbnRyb2xsZXJDb250cm9sbGVyJywgY29udHJvbGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBsaW5rKHNjb3BlKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFNoYXJlZCB1aS12aWV3IGNvZGUgZm9yIGJvdGggZGlyZWN0aXZlczpcbiAqIEdpdmVuIHNjb3BlLCBlbGVtZW50LCBhbmQgaXRzIGF0dHJpYnV0ZXMsIHJldHVybiB0aGUgdmlldydzIG5hbWVcbiAqL1xuZnVuY3Rpb24gZ2V0VWlWaWV3TmFtZShzY29wZSwgYXR0cnMsIGVsZW1lbnQsICRpbnRlcnBvbGF0ZSkge1xuICB2YXIgbmFtZSA9ICRpbnRlcnBvbGF0ZShhdHRycy51aVZpZXcgfHwgYXR0cnMubmFtZSB8fCAnJykoc2NvcGUpO1xuICB2YXIgdWlWaWV3Q3JlYXRlZEJ5ID0gZWxlbWVudC5pbmhlcml0ZWREYXRhKCckdWlWaWV3Jyk7XG4gIHJldHVybiBuYW1lLmluZGV4T2YoJ0AnKSA+PSAwID8gIG5hbWUgOiAgKG5hbWUgKyAnQCcgKyAodWlWaWV3Q3JlYXRlZEJ5ID8gdWlWaWV3Q3JlYXRlZEJ5LnN0YXRlLm5hbWUgOiAnJykpO1xufVxuXG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnN0YXRlJykuZGlyZWN0aXZlKCd1aVZpZXcnLCAkVmlld0RpcmVjdGl2ZSk7XG5hbmd1bGFyLm1vZHVsZSgndWkucm91dGVyLnN0YXRlJykuZGlyZWN0aXZlKCd1aVZpZXcnLCAkVmlld0RpcmVjdGl2ZUZpbGwpO1xuXG5mdW5jdGlvbiBwYXJzZVN0YXRlUmVmKHJlZiwgY3VycmVudCkge1xuICB2YXIgcHJlcGFyc2VkID0gcmVmLm1hdGNoKC9eXFxzKih7W159XSp9KVxccyokLyksIHBhcnNlZDtcbiAgaWYgKHByZXBhcnNlZCkgcmVmID0gY3VycmVudCArICcoJyArIHByZXBhcnNlZFsxXSArICcpJztcbiAgcGFyc2VkID0gcmVmLnJlcGxhY2UoL1xcbi9nLCBcIiBcIikubWF0Y2goL14oW14oXSs/KVxccyooXFwoKC4qKVxcKSk/JC8pO1xuICBpZiAoIXBhcnNlZCB8fCBwYXJzZWQubGVuZ3RoICE9PSA0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0YXRlIHJlZiAnXCIgKyByZWYgKyBcIidcIik7XG4gIHJldHVybiB7IHN0YXRlOiBwYXJzZWRbMV0sIHBhcmFtRXhwcjogcGFyc2VkWzNdIHx8IG51bGwgfTtcbn1cblxuZnVuY3Rpb24gc3RhdGVDb250ZXh0KGVsKSB7XG4gIHZhciBzdGF0ZURhdGEgPSBlbC5wYXJlbnQoKS5pbmhlcml0ZWREYXRhKCckdWlWaWV3Jyk7XG5cbiAgaWYgKHN0YXRlRGF0YSAmJiBzdGF0ZURhdGEuc3RhdGUgJiYgc3RhdGVEYXRhLnN0YXRlLm5hbWUpIHtcbiAgICByZXR1cm4gc3RhdGVEYXRhLnN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVJbmZvKGVsKSB7XG4gIC8vIFNWR0FFbGVtZW50IGRvZXMgbm90IHVzZSB0aGUgaHJlZiBhdHRyaWJ1dGUsIGJ1dCByYXRoZXIgdGhlICd4bGlua0hyZWYnIGF0dHJpYnV0ZS5cbiAgdmFyIGlzU3ZnID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsLnByb3AoJ2hyZWYnKSkgPT09ICdbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXSc7XG4gIHZhciBpc0Zvcm0gPSBlbFswXS5ub2RlTmFtZSA9PT0gXCJGT1JNXCI7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRyOiBpc0Zvcm0gPyBcImFjdGlvblwiIDogKGlzU3ZnID8gJ3hsaW5rOmhyZWYnIDogJ2hyZWYnKSxcbiAgICBpc0FuY2hvcjogZWwucHJvcChcInRhZ05hbWVcIikudG9VcHBlckNhc2UoKSA9PT0gXCJBXCIsXG4gICAgY2xpY2thYmxlOiAhaXNGb3JtXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsaWNrSG9vayhlbCwgJHN0YXRlLCAkdGltZW91dCwgdHlwZSwgY3VycmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIHZhciBidXR0b24gPSBlLndoaWNoIHx8IGUuYnV0dG9uLCB0YXJnZXQgPSBjdXJyZW50KCk7XG5cbiAgICBpZiAoIShidXR0b24gPiAxIHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5zaGlmdEtleSB8fCBlbC5hdHRyKCd0YXJnZXQnKSkpIHtcbiAgICAgIC8vIEhBQ0s6IFRoaXMgaXMgdG8gYWxsb3cgbmctY2xpY2tzIHRvIGJlIHByb2Nlc3NlZCBiZWZvcmUgdGhlIHRyYW5zaXRpb24gaXMgaW5pdGlhdGVkOlxuICAgICAgdmFyIHRyYW5zaXRpb24gPSAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJHN0YXRlLmdvKHRhcmdldC5zdGF0ZSwgdGFyZ2V0LnBhcmFtcywgdGFyZ2V0Lm9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIGlmIHRoZSBzdGF0ZSBoYXMgbm8gVVJMLCBpZ25vcmUgb25lIHByZXZlbnREZWZhdWx0IGZyb20gdGhlIDxhPiBkaXJlY3RpdmUuXG4gICAgICB2YXIgaWdub3JlUHJldmVudERlZmF1bHRDb3VudCA9IHR5cGUuaXNBbmNob3IgJiYgIXRhcmdldC5ocmVmID8gMTogMDtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaWdub3JlUHJldmVudERlZmF1bHRDb3VudC0tIDw9IDApICR0aW1lb3V0LmNhbmNlbCh0cmFuc2l0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0T3B0cyhlbCwgJHN0YXRlKSB7XG4gIHJldHVybiB7IHJlbGF0aXZlOiBzdGF0ZUNvbnRleHQoZWwpIHx8ICRzdGF0ZS4kY3VycmVudCwgaW5oZXJpdDogdHJ1ZSB9O1xufVxuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS5kaXJlY3RpdmU6dWktc3JlZlxuICpcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gKiBAcmVxdWlyZXMgJHRpbWVvdXRcbiAqXG4gKiBAcmVzdHJpY3QgQVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhIGxpbmsgKGA8YT5gIHRhZykgdG8gYSBzdGF0ZS4gSWYgdGhlIHN0YXRlIGhhcyBhbiBhc3NvY2lhdGVkXG4gKiBVUkwsIHRoZSBkaXJlY3RpdmUgd2lsbCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlICYgdXBkYXRlIHRoZSBgaHJlZmAgYXR0cmlidXRlIHZpYVxuICogdGhlIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfaHJlZiAkc3RhdGUuaHJlZigpfSBtZXRob2QuIENsaWNraW5nXG4gKiB0aGUgbGluayB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uIHdpdGggb3B0aW9uYWwgcGFyYW1ldGVycy5cbiAqXG4gKiBBbHNvIG1pZGRsZS1jbGlja2luZywgcmlnaHQtY2xpY2tpbmcsIGFuZCBjdHJsLWNsaWNraW5nIG9uIHRoZSBsaW5rIHdpbGwgYmVcbiAqIGhhbmRsZWQgbmF0aXZlbHkgYnkgdGhlIGJyb3dzZXIuXG4gKlxuICogWW91IGNhbiBhbHNvIHVzZSByZWxhdGl2ZSBzdGF0ZSBwYXRocyB3aXRoaW4gdWktc3JlZiwganVzdCBsaWtlIHRoZSByZWxhdGl2ZVxuICogcGF0aHMgcGFzc2VkIHRvIGAkc3RhdGUuZ28oKWAuIFlvdSBqdXN0IG5lZWQgdG8gYmUgYXdhcmUgdGhhdCB0aGUgcGF0aCBpcyByZWxhdGl2ZVxuICogdG8gdGhlIHN0YXRlIHRoYXQgdGhlIGxpbmsgbGl2ZXMgaW4sIGluIG90aGVyIHdvcmRzIHRoZSBzdGF0ZSB0aGF0IGxvYWRlZCB0aGVcbiAqIHRlbXBsYXRlIGNvbnRhaW5pbmcgdGhlIGxpbmsuXG4gKlxuICogWW91IGNhbiBzcGVjaWZ5IG9wdGlvbnMgdG8gcGFzcyB0byB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2dvICRzdGF0ZS5nbygpfVxuICogdXNpbmcgdGhlIGB1aS1zcmVmLW9wdHNgIGF0dHJpYnV0ZS4gT3B0aW9ucyBhcmUgcmVzdHJpY3RlZCB0byBgbG9jYXRpb25gLCBgaW5oZXJpdGAsXG4gKiBhbmQgYHJlbG9hZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIEhlcmUncyBhbiBleGFtcGxlIG9mIGhvdyB5b3UnZCB1c2UgdWktc3JlZiBhbmQgaG93IGl0IHdvdWxkIGNvbXBpbGUuIElmIHlvdSBoYXZlIHRoZVxuICogZm9sbG93aW5nIHRlbXBsYXRlOlxuICogPHByZT5cbiAqIDxhIHVpLXNyZWY9XCJob21lXCI+SG9tZTwvYT4gfCA8YSB1aS1zcmVmPVwiYWJvdXRcIj5BYm91dDwvYT4gfCA8YSB1aS1zcmVmPVwie3BhZ2U6IDJ9XCI+TmV4dCBwYWdlPC9hPlxuICpcbiAqIDx1bD5cbiAqICAgICA8bGkgbmctcmVwZWF0PVwiY29udGFjdCBpbiBjb250YWN0c1wiPlxuICogICAgICAgICA8YSB1aS1zcmVmPVwiY29udGFjdHMuZGV0YWlsKHsgaWQ6IGNvbnRhY3QuaWQgfSlcIj57eyBjb250YWN0Lm5hbWUgfX08L2E+XG4gKiAgICAgPC9saT5cbiAqIDwvdWw+XG4gKiA8L3ByZT5cbiAqXG4gKiBUaGVuIHRoZSBjb21waWxlZCBodG1sIHdvdWxkIGJlIChhc3N1bWluZyBIdG1sNU1vZGUgaXMgb2ZmIGFuZCBjdXJyZW50IHN0YXRlIGlzIGNvbnRhY3RzKTpcbiAqIDxwcmU+XG4gKiA8YSBocmVmPVwiIy9ob21lXCIgdWktc3JlZj1cImhvbWVcIj5Ib21lPC9hPiB8IDxhIGhyZWY9XCIjL2Fib3V0XCIgdWktc3JlZj1cImFib3V0XCI+QWJvdXQ8L2E+IHwgPGEgaHJlZj1cIiMvY29udGFjdHM/cGFnZT0yXCIgdWktc3JlZj1cIntwYWdlOiAyfVwiPk5leHQgcGFnZTwvYT5cbiAqXG4gKiA8dWw+XG4gKiAgICAgPGxpIG5nLXJlcGVhdD1cImNvbnRhY3QgaW4gY29udGFjdHNcIj5cbiAqICAgICAgICAgPGEgaHJlZj1cIiMvY29udGFjdHMvMVwiIHVpLXNyZWY9XCJjb250YWN0cy5kZXRhaWwoeyBpZDogY29udGFjdC5pZCB9KVwiPkpvZTwvYT5cbiAqICAgICA8L2xpPlxuICogICAgIDxsaSBuZy1yZXBlYXQ9XCJjb250YWN0IGluIGNvbnRhY3RzXCI+XG4gKiAgICAgICAgIDxhIGhyZWY9XCIjL2NvbnRhY3RzLzJcIiB1aS1zcmVmPVwiY29udGFjdHMuZGV0YWlsKHsgaWQ6IGNvbnRhY3QuaWQgfSlcIj5BbGljZTwvYT5cbiAqICAgICA8L2xpPlxuICogICAgIDxsaSBuZy1yZXBlYXQ9XCJjb250YWN0IGluIGNvbnRhY3RzXCI+XG4gKiAgICAgICAgIDxhIGhyZWY9XCIjL2NvbnRhY3RzLzNcIiB1aS1zcmVmPVwiY29udGFjdHMuZGV0YWlsKHsgaWQ6IGNvbnRhY3QuaWQgfSlcIj5Cb2I8L2E+XG4gKiAgICAgPC9saT5cbiAqIDwvdWw+XG4gKlxuICogPGEgdWktc3JlZj1cImhvbWVcIiB1aS1zcmVmLW9wdHM9XCJ7cmVsb2FkOiB0cnVlfVwiPkhvbWU8L2E+XG4gKiA8L3ByZT5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdWktc3JlZiAnc3RhdGVOYW1lJyBjYW4gYmUgYW55IHZhbGlkIGFic29sdXRlIG9yIHJlbGF0aXZlIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdWktc3JlZi1vcHRzIG9wdGlvbnMgdG8gcGFzcyB0byB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2dvICRzdGF0ZS5nbygpfVxuICovXG4kU3RhdGVSZWZEaXJlY3RpdmUuJGluamVjdCA9IFsnJHN0YXRlJywgJyR0aW1lb3V0J107XG5mdW5jdGlvbiAkU3RhdGVSZWZEaXJlY3RpdmUoJHN0YXRlLCAkdGltZW91dCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogWyc/XnVpU3JlZkFjdGl2ZScsICc/XnVpU3JlZkFjdGl2ZUVxJ10sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCB1aVNyZWZBY3RpdmUpIHtcbiAgICAgIHZhciByZWYgICAgPSBwYXJzZVN0YXRlUmVmKGF0dHJzLnVpU3JlZiwgJHN0YXRlLmN1cnJlbnQubmFtZSk7XG4gICAgICB2YXIgZGVmICAgID0geyBzdGF0ZTogcmVmLnN0YXRlLCBocmVmOiBudWxsLCBwYXJhbXM6IG51bGwgfTtcbiAgICAgIHZhciB0eXBlICAgPSBnZXRUeXBlSW5mbyhlbGVtZW50KTtcbiAgICAgIHZhciBhY3RpdmUgPSB1aVNyZWZBY3RpdmVbMV0gfHwgdWlTcmVmQWN0aXZlWzBdO1xuICAgICAgdmFyIHVubGlua0luZm9GbiA9IG51bGw7XG4gICAgICB2YXIgaG9va0ZuO1xuXG4gICAgICBkZWYub3B0aW9ucyA9IGV4dGVuZChkZWZhdWx0T3B0cyhlbGVtZW50LCAkc3RhdGUpLCBhdHRycy51aVNyZWZPcHRzID8gc2NvcGUuJGV2YWwoYXR0cnMudWlTcmVmT3B0cykgOiB7fSk7XG5cbiAgICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgaWYgKHZhbCkgZGVmLnBhcmFtcyA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICBkZWYuaHJlZiA9ICRzdGF0ZS5ocmVmKHJlZi5zdGF0ZSwgZGVmLnBhcmFtcywgZGVmLm9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh1bmxpbmtJbmZvRm4pIHVubGlua0luZm9GbigpO1xuICAgICAgICBpZiAoYWN0aXZlKSB1bmxpbmtJbmZvRm4gPSBhY3RpdmUuJCRhZGRTdGF0ZUluZm8ocmVmLnN0YXRlLCBkZWYucGFyYW1zKTtcbiAgICAgICAgaWYgKGRlZi5ocmVmICE9PSBudWxsKSBhdHRycy4kc2V0KHR5cGUuYXR0ciwgZGVmLmhyZWYpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHJlZi5wYXJhbUV4cHIpIHtcbiAgICAgICAgc2NvcGUuJHdhdGNoKHJlZi5wYXJhbUV4cHIsIGZ1bmN0aW9uKHZhbCkgeyBpZiAodmFsICE9PSBkZWYucGFyYW1zKSB1cGRhdGUodmFsKTsgfSwgdHJ1ZSk7XG4gICAgICAgIGRlZi5wYXJhbXMgPSBhbmd1bGFyLmNvcHkoc2NvcGUuJGV2YWwocmVmLnBhcmFtRXhwcikpO1xuICAgICAgfVxuICAgICAgdXBkYXRlKCk7XG5cbiAgICAgIGlmICghdHlwZS5jbGlja2FibGUpIHJldHVybjtcbiAgICAgIGhvb2tGbiA9IGNsaWNrSG9vayhlbGVtZW50LCAkc3RhdGUsICR0aW1lb3V0LCB0eXBlLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRlZjsgfSk7XG4gICAgICBlbGVtZW50W2VsZW1lbnQub24gPyAnb24nIDogJ2JpbmQnXShcImNsaWNrXCIsIGhvb2tGbik7XG4gICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnRbZWxlbWVudC5vZmYgPyAnb2ZmJyA6ICd1bmJpbmQnXShcImNsaWNrXCIsIGhvb2tGbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgdWkucm91dGVyLnN0YXRlLmRpcmVjdGl2ZTp1aS1zdGF0ZVxuICpcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUudWlTcmVmXG4gKlxuICogQHJlc3RyaWN0IEFcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIE11Y2ggbGlrZSB1aS1zcmVmLCBidXQgd2lsbCBhY2NlcHQgbmFtZWQgJHNjb3BlIHByb3BlcnRpZXMgdG8gZXZhbHVhdGUgZm9yIGEgc3RhdGUgZGVmaW5pdGlvbixcbiAqIHBhcmFtcyBhbmQgb3ZlcnJpZGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdWktc3RhdGUgJ3N0YXRlTmFtZScgY2FuIGJlIGFueSB2YWxpZCBhYnNvbHV0ZSBvciByZWxhdGl2ZSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVpLXN0YXRlLXBhcmFtcyBwYXJhbXMgdG8gcGFzcyB0byB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2hyZWYgJHN0YXRlLmhyZWYoKX1cbiAqIEBwYXJhbSB7T2JqZWN0fSB1aS1zdGF0ZS1vcHRzIG9wdGlvbnMgdG8gcGFzcyB0byB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2dvICRzdGF0ZS5nbygpfVxuICovXG4kU3RhdGVSZWZEeW5hbWljRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRzdGF0ZScsICckdGltZW91dCddO1xuZnVuY3Rpb24gJFN0YXRlUmVmRHluYW1pY0RpcmVjdGl2ZSgkc3RhdGUsICR0aW1lb3V0KSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiBbJz9edWlTcmVmQWN0aXZlJywgJz9edWlTcmVmQWN0aXZlRXEnXSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIHVpU3JlZkFjdGl2ZSkge1xuICAgICAgdmFyIHR5cGUgICA9IGdldFR5cGVJbmZvKGVsZW1lbnQpO1xuICAgICAgdmFyIGFjdGl2ZSA9IHVpU3JlZkFjdGl2ZVsxXSB8fCB1aVNyZWZBY3RpdmVbMF07XG4gICAgICB2YXIgZ3JvdXAgID0gW2F0dHJzLnVpU3RhdGUsIGF0dHJzLnVpU3RhdGVQYXJhbXMgfHwgbnVsbCwgYXR0cnMudWlTdGF0ZU9wdHMgfHwgbnVsbF07XG4gICAgICB2YXIgd2F0Y2ggID0gJ1snICsgZ3JvdXAubWFwKGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gdmFsIHx8ICdudWxsJzsgfSkuam9pbignLCAnKSArICddJztcbiAgICAgIHZhciBkZWYgICAgPSB7IHN0YXRlOiBudWxsLCBwYXJhbXM6IG51bGwsIG9wdGlvbnM6IG51bGwsIGhyZWY6IG51bGwgfTtcbiAgICAgIHZhciB1bmxpbmtJbmZvRm4gPSBudWxsO1xuICAgICAgdmFyIGhvb2tGbjtcblxuICAgICAgZnVuY3Rpb24gcnVuU3RhdGVSZWZMaW5rIChncm91cCkge1xuICAgICAgICBkZWYuc3RhdGUgPSBncm91cFswXTsgZGVmLnBhcmFtcyA9IGdyb3VwWzFdOyBkZWYub3B0aW9ucyA9IGdyb3VwWzJdO1xuICAgICAgICBkZWYuaHJlZiA9ICRzdGF0ZS5ocmVmKGRlZi5zdGF0ZSwgZGVmLnBhcmFtcywgZGVmLm9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh1bmxpbmtJbmZvRm4pIHVubGlua0luZm9GbigpO1xuICAgICAgICBpZiAoYWN0aXZlKSB1bmxpbmtJbmZvRm4gPSBhY3RpdmUuJCRhZGRTdGF0ZUluZm8oZGVmLnN0YXRlLCBkZWYucGFyYW1zKTtcbiAgICAgICAgaWYgKGRlZi5ocmVmKSBhdHRycy4kc2V0KHR5cGUuYXR0ciwgZGVmLmhyZWYpO1xuICAgICAgfVxuXG4gICAgICBzY29wZS4kd2F0Y2god2F0Y2gsIHJ1blN0YXRlUmVmTGluaywgdHJ1ZSk7XG4gICAgICBydW5TdGF0ZVJlZkxpbmsoc2NvcGUuJGV2YWwod2F0Y2gpKTtcblxuICAgICAgaWYgKCF0eXBlLmNsaWNrYWJsZSkgcmV0dXJuO1xuICAgICAgaG9va0ZuID0gY2xpY2tIb29rKGVsZW1lbnQsICRzdGF0ZSwgJHRpbWVvdXQsIHR5cGUsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZGVmOyB9KTtcbiAgICAgIGVsZW1lbnRbZWxlbWVudC5vbiA/ICdvbicgOiAnYmluZCddKFwiY2xpY2tcIiwgaG9va0ZuKTtcbiAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudFtlbGVtZW50Lm9mZiA/ICdvZmYnIDogJ3VuYmluZCddKFwiY2xpY2tcIiwgaG9va0ZuKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS5kaXJlY3RpdmU6dWktc3JlZi1hY3RpdmVcbiAqXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVQYXJhbXNcbiAqIEByZXF1aXJlcyAkaW50ZXJwb2xhdGVcbiAqXG4gKiBAcmVzdHJpY3QgQVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQSBkaXJlY3RpdmUgd29ya2luZyBhbG9uZ3NpZGUgdWktc3JlZiB0byBhZGQgY2xhc3NlcyB0byBhbiBlbGVtZW50IHdoZW4gdGhlXG4gKiByZWxhdGVkIHVpLXNyZWYgZGlyZWN0aXZlJ3Mgc3RhdGUgaXMgYWN0aXZlLCBhbmQgcmVtb3ZpbmcgdGhlbSB3aGVuIGl0IGlzIGluYWN0aXZlLlxuICogVGhlIHByaW1hcnkgdXNlLWNhc2UgaXMgdG8gc2ltcGxpZnkgdGhlIHNwZWNpYWwgYXBwZWFyYW5jZSBvZiBuYXZpZ2F0aW9uIG1lbnVzXG4gKiByZWx5aW5nIG9uIGB1aS1zcmVmYCwgYnkgaGF2aW5nIHRoZSBcImFjdGl2ZVwiIHN0YXRlJ3MgbWVudSBidXR0b24gYXBwZWFyIGRpZmZlcmVudCxcbiAqIGRpc3Rpbmd1aXNoaW5nIGl0IGZyb20gdGhlIGluYWN0aXZlIG1lbnUgaXRlbXMuXG4gKlxuICogdWktc3JlZi1hY3RpdmUgY2FuIGxpdmUgb24gdGhlIHNhbWUgZWxlbWVudCBhcyB1aS1zcmVmIG9yIG9uIGEgcGFyZW50IGVsZW1lbnQuIFRoZSBmaXJzdFxuICogdWktc3JlZi1hY3RpdmUgZm91bmQgYXQgdGhlIHNhbWUgbGV2ZWwgb3IgYWJvdmUgdGhlIHVpLXNyZWYgd2lsbCBiZSB1c2VkLlxuICpcbiAqIFdpbGwgYWN0aXZhdGUgd2hlbiB0aGUgdWktc3JlZidzIHRhcmdldCBzdGF0ZSBvciBhbnkgY2hpbGQgc3RhdGUgaXMgYWN0aXZlLiBJZiB5b3VcbiAqIG5lZWQgdG8gYWN0aXZhdGUgb25seSB3aGVuIHRoZSB1aS1zcmVmIHRhcmdldCBzdGF0ZSBpcyBhY3RpdmUgYW5kICpub3QqIGFueSBvZlxuICogaXQncyBjaGlsZHJlbiwgdGhlbiB5b3Ugd2lsbCB1c2VcbiAqIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuZGlyZWN0aXZlOnVpLXNyZWYtYWN0aXZlLWVxIHVpLXNyZWYtYWN0aXZlLWVxfVxuICpcbiAqIEBleGFtcGxlXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIHRlbXBsYXRlOlxuICogPHByZT5cbiAqIDx1bD5cbiAqICAgPGxpIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlXCIgY2xhc3M9XCJpdGVtXCI+XG4gKiAgICAgPGEgaHJlZiB1aS1zcmVmPVwiYXBwLnVzZXIoe3VzZXI6ICdiaWxib2JhZ2dpbnMnfSlcIj5AYmlsYm9iYWdnaW5zPC9hPlxuICogICA8L2xpPlxuICogPC91bD5cbiAqIDwvcHJlPlxuICpcbiAqXG4gKiBXaGVuIHRoZSBhcHAgc3RhdGUgaXMgXCJhcHAudXNlclwiIChvciBhbnkgY2hpbGRyZW4gc3RhdGVzKSwgYW5kIGNvbnRhaW5zIHRoZSBzdGF0ZSBwYXJhbWV0ZXIgXCJ1c2VyXCIgd2l0aCB2YWx1ZSBcImJpbGJvYmFnZ2luc1wiLFxuICogdGhlIHJlc3VsdGluZyBIVE1MIHdpbGwgYXBwZWFyIGFzIChub3RlIHRoZSAnYWN0aXZlJyBjbGFzcyk6XG4gKiA8cHJlPlxuICogPHVsPlxuICogICA8bGkgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIiBjbGFzcz1cIml0ZW0gYWN0aXZlXCI+XG4gKiAgICAgPGEgdWktc3JlZj1cImFwcC51c2VyKHt1c2VyOiAnYmlsYm9iYWdnaW5zJ30pXCIgaHJlZj1cIi91c2Vycy9iaWxib2JhZ2dpbnNcIj5AYmlsYm9iYWdnaW5zPC9hPlxuICogICA8L2xpPlxuICogPC91bD5cbiAqIDwvcHJlPlxuICpcbiAqIFRoZSBjbGFzcyBuYW1lIGlzIGludGVycG9sYXRlZCAqKm9uY2UqKiBkdXJpbmcgdGhlIGRpcmVjdGl2ZXMgbGluayB0aW1lIChhbnkgZnVydGhlciBjaGFuZ2VzIHRvIHRoZVxuICogaW50ZXJwb2xhdGVkIHZhbHVlIGFyZSBpZ25vcmVkKS5cbiAqXG4gKiBNdWx0aXBsZSBjbGFzc2VzIG1heSBiZSBzcGVjaWZpZWQgaW4gYSBzcGFjZS1zZXBhcmF0ZWQgZm9ybWF0OlxuICogPHByZT5cbiAqIDx1bD5cbiAqICAgPGxpIHVpLXNyZWYtYWN0aXZlPSdjbGFzczEgY2xhc3MyIGNsYXNzMyc+XG4gKiAgICAgPGEgdWktc3JlZj1cImFwcC51c2VyXCI+bGluazwvYT5cbiAqICAgPC9saT5cbiAqIDwvdWw+XG4gKiA8L3ByZT5cbiAqXG4gKiBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgdWktc3JlZi1hY3RpdmUgYW4gZXhwcmVzc2lvbiB0aGF0IGV2YWx1YXRlc1xuICogdG8gYW4gb2JqZWN0IGhhc2gsIHdob3NlIGtleXMgcmVwcmVzZW50IGFjdGl2ZSBjbGFzcyBuYW1lcyBhbmQgd2hvc2VcbiAqIHZhbHVlcyByZXByZXNlbnQgdGhlIHJlc3BlY3RpdmUgc3RhdGUgbmFtZXMvZ2xvYnMuXG4gKiB1aS1zcmVmLWFjdGl2ZSB3aWxsIG1hdGNoIGlmIHRoZSBjdXJyZW50IGFjdGl2ZSBzdGF0ZSAqKmluY2x1ZGVzKiogYW55IG9mXG4gKiB0aGUgc3BlY2lmaWVkIHN0YXRlIG5hbWVzL2dsb2JzLCBldmVuIHRoZSBhYnN0cmFjdCBvbmVzLlxuICpcbiAqIEBFeGFtcGxlXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIHRlbXBsYXRlLCB3aXRoIFwiYWRtaW5cIiBiZWluZyBhbiBhYnN0cmFjdCBzdGF0ZTpcbiAqIDxwcmU+XG4gKiA8ZGl2IHVpLXNyZWYtYWN0aXZlPVwieydhY3RpdmUnOiAnYWRtaW4uKid9XCI+XG4gKiAgIDxhIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlXCIgdWktc3JlZj1cImFkbWluLnJvbGVzXCI+Um9sZXM8L2E+XG4gKiA8L2Rpdj5cbiAqIDwvcHJlPlxuICpcbiAqIFdoZW4gdGhlIGN1cnJlbnQgc3RhdGUgaXMgXCJhZG1pbi5yb2xlc1wiIHRoZSBcImFjdGl2ZVwiIGNsYXNzIHdpbGwgYmUgYXBwbGllZFxuICogdG8gYm90aCB0aGUgPGRpdj4gYW5kIDxhPiBlbGVtZW50cy4gSXQgaXMgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB0aGUgc3RhdGVcbiAqIG5hbWVzL2dsb2JzIHBhc3NlZCB0byB1aS1zcmVmLWFjdGl2ZSBzaGFkb3cgdGhlIHN0YXRlIHByb3ZpZGVkIGJ5IHVpLXNyZWYuXG4gKi9cblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSB1aS5yb3V0ZXIuc3RhdGUuZGlyZWN0aXZlOnVpLXNyZWYtYWN0aXZlLWVxXG4gKlxuICogQHJlcXVpcmVzIHVpLnJvdXRlci5zdGF0ZS4kc3RhdGVcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlUGFyYW1zXG4gKiBAcmVxdWlyZXMgJGludGVycG9sYXRlXG4gKlxuICogQHJlc3RyaWN0IEFcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBzYW1lIGFzIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuZGlyZWN0aXZlOnVpLXNyZWYtYWN0aXZlIHVpLXNyZWYtYWN0aXZlfSBidXQgd2lsbCBvbmx5IGFjdGl2YXRlXG4gKiB3aGVuIHRoZSBleGFjdCB0YXJnZXQgc3RhdGUgdXNlZCBpbiB0aGUgYHVpLXNyZWZgIGlzIGFjdGl2ZTsgbm8gY2hpbGQgc3RhdGVzLlxuICpcbiAqL1xuJFN0YXRlUmVmQWN0aXZlRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJGludGVycG9sYXRlJ107XG5mdW5jdGlvbiAkU3RhdGVSZWZBY3RpdmVEaXJlY3RpdmUoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRpbnRlcnBvbGF0ZSkge1xuICByZXR1cm4gIHtcbiAgICByZXN0cmljdDogXCJBXCIsXG4gICAgY29udHJvbGxlcjogWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGF0dHJzJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJHRpbWVvdXQpIHtcbiAgICAgIHZhciBzdGF0ZXMgPSBbXSwgYWN0aXZlQ2xhc3NlcyA9IHt9LCBhY3RpdmVFcUNsYXNzLCB1aVNyZWZBY3RpdmU7XG5cbiAgICAgIC8vIFRoZXJlIHByb2JhYmx5IGlzbid0IG11Y2ggcG9pbnQgaW4gJG9ic2VydmluZyB0aGlzXG4gICAgICAvLyB1aVNyZWZBY3RpdmUgYW5kIHVpU3JlZkFjdGl2ZUVxIHNoYXJlIHRoZSBzYW1lIGRpcmVjdGl2ZSBvYmplY3Qgd2l0aCBzb21lXG4gICAgICAvLyBzbGlnaHQgZGlmZmVyZW5jZSBpbiBsb2dpYyByb3V0aW5nXG4gICAgICBhY3RpdmVFcUNsYXNzID0gJGludGVycG9sYXRlKCRhdHRycy51aVNyZWZBY3RpdmVFcSB8fCAnJywgZmFsc2UpKCRzY29wZSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHVpU3JlZkFjdGl2ZSA9ICRzY29wZS4kZXZhbCgkYXR0cnMudWlTcmVmQWN0aXZlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRG8gbm90aGluZy4gdWlTcmVmQWN0aXZlIGlzIG5vdCBhIHZhbGlkIGV4cHJlc3Npb24uXG4gICAgICAgIC8vIEZhbGwgYmFjayB0byB1c2luZyAkaW50ZXJwb2xhdGUgYmVsb3dcbiAgICAgIH1cbiAgICAgIHVpU3JlZkFjdGl2ZSA9IHVpU3JlZkFjdGl2ZSB8fCAkaW50ZXJwb2xhdGUoJGF0dHJzLnVpU3JlZkFjdGl2ZSB8fCAnJywgZmFsc2UpKCRzY29wZSk7XG4gICAgICBpZiAoaXNPYmplY3QodWlTcmVmQWN0aXZlKSkge1xuICAgICAgICBmb3JFYWNoKHVpU3JlZkFjdGl2ZSwgZnVuY3Rpb24oc3RhdGVPck5hbWUsIGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgaWYgKGlzU3RyaW5nKHN0YXRlT3JOYW1lKSkge1xuICAgICAgICAgICAgdmFyIHJlZiA9IHBhcnNlU3RhdGVSZWYoc3RhdGVPck5hbWUsICRzdGF0ZS5jdXJyZW50Lm5hbWUpO1xuICAgICAgICAgICAgYWRkU3RhdGUocmVmLnN0YXRlLCAkc2NvcGUuJGV2YWwocmVmLnBhcmFtRXhwciksIGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBbGxvdyB1aVNyZWYgdG8gY29tbXVuaWNhdGUgd2l0aCB1aVNyZWZBY3RpdmVbRXF1YWxzXVxuICAgICAgdGhpcy4kJGFkZFN0YXRlSW5mbyA9IGZ1bmN0aW9uIChuZXdTdGF0ZSwgbmV3UGFyYW1zKSB7XG4gICAgICAgIC8vIHdlIGFscmVhZHkgZ290IGFuIGV4cGxpY2l0IHN0YXRlIHByb3ZpZGVkIGJ5IHVpLXNyZWYtYWN0aXZlLCBzbyB3ZVxuICAgICAgICAvLyBzaGFkb3cgdGhlIG9uZSB0aGF0IGNvbWVzIGZyb20gdWktc3JlZlxuICAgICAgICBpZiAoaXNPYmplY3QodWlTcmVmQWN0aXZlKSAmJiBzdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVyZWdpc3RlciA9IGFkZFN0YXRlKG5ld1N0YXRlLCBuZXdQYXJhbXMsIHVpU3JlZkFjdGl2ZSk7XG4gICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gZGVyZWdpc3RlcjtcbiAgICAgIH07XG5cbiAgICAgICRzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCB1cGRhdGUpO1xuXG4gICAgICBmdW5jdGlvbiBhZGRTdGF0ZShzdGF0ZU5hbWUsIHN0YXRlUGFyYW1zLCBhY3RpdmVDbGFzcykge1xuICAgICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuZ2V0KHN0YXRlTmFtZSwgc3RhdGVDb250ZXh0KCRlbGVtZW50KSk7XG4gICAgICAgIHZhciBzdGF0ZUhhc2ggPSBjcmVhdGVTdGF0ZUhhc2goc3RhdGVOYW1lLCBzdGF0ZVBhcmFtcyk7XG5cbiAgICAgICAgdmFyIHN0YXRlSW5mbyA9IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUgfHwgeyBuYW1lOiBzdGF0ZU5hbWUgfSxcbiAgICAgICAgICBwYXJhbXM6IHN0YXRlUGFyYW1zLFxuICAgICAgICAgIGhhc2g6IHN0YXRlSGFzaFxuICAgICAgICB9O1xuXG4gICAgICAgIHN0YXRlcy5wdXNoKHN0YXRlSW5mbyk7XG4gICAgICAgIGFjdGl2ZUNsYXNzZXNbc3RhdGVIYXNoXSA9IGFjdGl2ZUNsYXNzO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZW1vdmVTdGF0ZSgpIHtcbiAgICAgICAgICB2YXIgaWR4ID0gc3RhdGVzLmluZGV4T2Yoc3RhdGVJbmZvKTtcbiAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkgc3RhdGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICAgICAgICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBbcGFyYW1zXVxuICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBjcmVhdGVTdGF0ZUhhc2goc3RhdGUsIHBhcmFtcykge1xuICAgICAgICBpZiAoIWlzU3RyaW5nKHN0YXRlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc3RhdGUgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JqZWN0KHBhcmFtcykpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUgKyB0b0pzb24ocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMgPSAkc2NvcGUuJGV2YWwocGFyYW1zKTtcbiAgICAgICAgaWYgKGlzT2JqZWN0KHBhcmFtcykpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUgKyB0b0pzb24ocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSByb3V0ZSBzdGF0ZVxuICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhbnlNYXRjaChzdGF0ZXNbaV0uc3RhdGUsIHN0YXRlc1tpXS5wYXJhbXMpKSB7XG4gICAgICAgICAgICBhZGRDbGFzcygkZWxlbWVudCwgYWN0aXZlQ2xhc3Nlc1tzdGF0ZXNbaV0uaGFzaF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcygkZWxlbWVudCwgYWN0aXZlQ2xhc3Nlc1tzdGF0ZXNbaV0uaGFzaF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChleGFjdE1hdGNoKHN0YXRlc1tpXS5zdGF0ZSwgc3RhdGVzW2ldLnBhcmFtcykpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKCRlbGVtZW50LCBhY3RpdmVFcUNsYXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJGVsZW1lbnQsIGFjdGl2ZUVxQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7ICR0aW1lb3V0KGZ1bmN0aW9uICgpIHsgZWwuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfSk7IH1cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHsgZWwucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICAgICAgZnVuY3Rpb24gYW55TWF0Y2goc3RhdGUsIHBhcmFtcykgeyByZXR1cm4gJHN0YXRlLmluY2x1ZGVzKHN0YXRlLm5hbWUsIHBhcmFtcyk7IH1cbiAgICAgIGZ1bmN0aW9uIGV4YWN0TWF0Y2goc3RhdGUsIHBhcmFtcykgeyByZXR1cm4gJHN0YXRlLmlzKHN0YXRlLm5hbWUsIHBhcmFtcyk7IH1cblxuICAgICAgdXBkYXRlKCk7XG4gICAgfV1cbiAgfTtcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci5zdGF0ZScpXG4gIC5kaXJlY3RpdmUoJ3VpU3JlZicsICRTdGF0ZVJlZkRpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgndWlTcmVmQWN0aXZlJywgJFN0YXRlUmVmQWN0aXZlRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCd1aVNyZWZBY3RpdmVFcScsICRTdGF0ZVJlZkFjdGl2ZURpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgndWlTdGF0ZScsICRTdGF0ZVJlZkR5bmFtaWNEaXJlY3RpdmUpO1xuXG4vKipcbiAqIEBuZ2RvYyBmaWx0ZXJcbiAqIEBuYW1lIHVpLnJvdXRlci5zdGF0ZS5maWx0ZXI6aXNTdGF0ZVxuICpcbiAqIEByZXF1aXJlcyB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUcmFuc2xhdGVzIHRvIHtAbGluayB1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlI21ldGhvZHNfaXMgJHN0YXRlLmlzKFwic3RhdGVOYW1lXCIpfS5cbiAqL1xuJElzU3RhdGVGaWx0ZXIuJGluamVjdCA9IFsnJHN0YXRlJ107XG5mdW5jdGlvbiAkSXNTdGF0ZUZpbHRlcigkc3RhdGUpIHtcbiAgdmFyIGlzRmlsdGVyID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gJHN0YXRlLmlzKHN0YXRlLCBwYXJhbXMpO1xuICB9O1xuICBpc0ZpbHRlci4kc3RhdGVmdWwgPSB0cnVlO1xuICByZXR1cm4gaXNGaWx0ZXI7XG59XG5cbi8qKlxuICogQG5nZG9jIGZpbHRlclxuICogQG5hbWUgdWkucm91dGVyLnN0YXRlLmZpbHRlcjppbmNsdWRlZEJ5U3RhdGVcbiAqXG4gKiBAcmVxdWlyZXMgdWkucm91dGVyLnN0YXRlLiRzdGF0ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVHJhbnNsYXRlcyB0byB7QGxpbmsgdWkucm91dGVyLnN0YXRlLiRzdGF0ZSNtZXRob2RzX2luY2x1ZGVzICRzdGF0ZS5pbmNsdWRlcygnZnVsbE9yUGFydGlhbFN0YXRlTmFtZScpfS5cbiAqL1xuJEluY2x1ZGVkQnlTdGF0ZUZpbHRlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcbmZ1bmN0aW9uICRJbmNsdWRlZEJ5U3RhdGVGaWx0ZXIoJHN0YXRlKSB7XG4gIHZhciBpbmNsdWRlc0ZpbHRlciA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuICRzdGF0ZS5pbmNsdWRlcyhzdGF0ZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgfTtcbiAgaW5jbHVkZXNGaWx0ZXIuJHN0YXRlZnVsID0gdHJ1ZTtcbiAgcmV0dXJuICBpbmNsdWRlc0ZpbHRlcjtcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3VpLnJvdXRlci5zdGF0ZScpXG4gIC5maWx0ZXIoJ2lzU3RhdGUnLCAkSXNTdGF0ZUZpbHRlcilcbiAgLmZpbHRlcignaW5jbHVkZWRCeVN0YXRlJywgJEluY2x1ZGVkQnlTdGF0ZUZpbHRlcik7XG59KSh3aW5kb3csIHdpbmRvdy5hbmd1bGFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL2FuZ3VsYXItdWktcm91dGVyL3JlbGVhc2UvYW5ndWxhci11aS1yb3V0ZXIuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjMuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhY2NvdW50Q29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL2FjY291bnQtY29tcC9hY2NvdW50LnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gQWNjb3VudENvbXBDb250cm9sbGVyKCl7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL2FjY291bnQtY29tcC9hY2NvdW50LmNvbXBvbmVudC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBjZW50cmFsQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL2NlbnRyYWwtY29tcC9jZW50cmFsLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gQ2VudHJhbENvbXBDb250cm9sbGVyKCl7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9jZW50cmFsLWNvbXAvY2VudHJhbC5jb21wb25lbnQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjIuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJDb21wID17XHJcbiAgICB0ZW1wbGF0ZVVybDonY29tcG9uZW50cy9oZWFkZXItY29tcC9oZWFkZXItY29tcC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIEhlYWRlckNvbXBDb250cm9sbGVyKCl7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL2hlYWRlci1jb21wL2hlYWRlci1jb21wLmNvbXBvbmVudC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMi4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpc3RDb21wID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvbGlzdC1jb21wL2xpc3QudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBEb2NMaXN0Q29udHJvbGxlcigkaHR0cCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuZG9jcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAxJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcudHh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDInLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy50eHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnR4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyA0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcudHh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDEnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5qcGcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLmpwZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAzJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcuanBnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5qcGcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgMScsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnJlcSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvYyAyJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICcucmVxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9jIDMnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJy5yZXEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb2MgNCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnLnJlcSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9saXN0LWNvbXAvbGlzdC5jb21wb25lbnQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjMuMDMuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2dvQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL2xvZ28tY29tcC9sb2dvLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gTG9nb0NvbXBDb250cm9sbGVyKCl7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL2xvZ28tY29tcC9sb2dvLmNvbXBvbmVudC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtdXJhdiBvbiAyMy4wMy4yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lbnVDb21wID0ge1xyXG4gICAgdGVtcGxhdGVVcmw6J2NvbXBvbmVudHMvbWVudS1jb21wL21lbnUudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBNZW51Q29tcENvbnRyb2xsZXIoKXtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvbWVudS1jb21wL21lbnUuY29tcG9uZW50LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW11cmF2IG9uIDIzLjAzLjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RhdGlzdGljQ29tcCA9IHtcclxuICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL3N0YXRpc3RpYy1jb21wL3N0YXRpc3RpYy50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIFN0YXRpc3RpY0NvbXBDb250cm9sbGVyKCl7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL3N0YXRpc3RpYy1jb21wL3N0YXRpc3RpYy5jb21wb25lbnQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBhbXVyYXYgb24gMjMuMDMuMjAxNy5cclxuICovXHJcbmltcG9ydCB1aVJvdXRlciBmcm9tICdhbmd1bGFyLXVpLXJvdXRlcic7XHJcbmltcG9ydCB7Y29tcEFwcH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCIuL3JvdXRlcnMuY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3BBcHAgPSBhbmd1bGFyLm1vZHVsZSgnc3BBcHAnLCBbY29tcEFwcCwgdWlSb3V0ZXIsICduZ1Jlc291cmNlJ10pXHJcbiAgICAuY29udHJvbGxlcignc3BDdHJsJywgZnVuY3Rpb24gc3BDdHJsKCkge1xyXG4gICAgfSlcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBSb3V0ZXNdKTtcclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7QUNiQTtBQUFBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBL0NBO0FBQ0E7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBL0NBO0FBQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBeEJBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwSEE7QUFzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsRkE7QUFDQTtBQW9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStUQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhHQTtBQUNBO0FBMEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBZ0RBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFvQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBZ0NBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBckdBO0FBdUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7O0FDM2tKQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7OztBQ0hBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7OztBQ0pBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7O0FDSEE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQXZEQTs7Ozs7Ozs7O0FDSEE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7QUNIQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7OztBQ0hBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==