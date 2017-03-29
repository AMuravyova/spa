/**
 * Created by amurav on 23.03.2017.
 */
import {accountComp} from './account-comp/account.component';
import {centralComp} from './central-comp/central.component';
import {headerComp} from './header-comp/header-comp.component';
import {listComp} from './list-comp/list.component';
import {logoComp} from './logo-comp/logo.component';
import {menuComp} from './menu-comp/menu.component';
import {statisticComp} from './statistic-comp/statistic.component';
import {singinComp} from './singin-comp/singin.component';
import {singupComp} from './singup-comp/singup.component';


export const compApp = angular.module('spApp.components',[])
    .component('listComp', listComp)
    .component('headerComp', headerComp)
    .component('accountComp', accountComp)
    .component('logoComp', logoComp)
    .component('menuComp', menuComp)
    .component('statisticComp', statisticComp)
    .component('centralComp', centralComp)
    .component('singinComp', singinComp)
    .component('singupComp', singupComp).name;
