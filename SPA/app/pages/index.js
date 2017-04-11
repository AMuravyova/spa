/**
 * Created by amurav on 28.03.2017.
 */
import {dashboardComp} from './dashboard-page/dashboard.component';

export const pageApp = angular.module('spApp.pages',[])
    .component('dashboardComp', dashboardComp)
    .name;
