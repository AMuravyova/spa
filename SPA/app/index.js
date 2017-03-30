/**
 * Created by amurav on 23.03.2017.
 */
import uiRouter from 'angular-ui-router';
import {compApp} from './components/index';
import {filesApp} from './files/index';
import {Routes} from './routers.config';

export const spApp = angular.module('spApp', [compApp, filesApp, uiRouter, 'ngResource'])
    .config(['$stateProvider', '$urlRouterProvider', Routes]);



