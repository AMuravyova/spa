/**
 * Created by amurav on 23.03.2017.
 */
import uiRouter from 'angular-ui-router';
import {compApp} from './components/index';
import {Routes} from "./routers.config";

export const spApp = angular.module('spApp', [compApp, uiRouter, 'ngResource'])
    .controller('spCtrl', function spCtrl() {
    })
    .config(['$stateProvider', '$urlRouterProvider', Routes]);



