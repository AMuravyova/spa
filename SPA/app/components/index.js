/**
 * Created by amurav on 23.03.2017.
 */
import {accountComp} from './account-comp/account.component';
import {headerComp} from './header-comp/header-comp.component';
import {listComp} from './list-comp/list.component';
import {logoComp} from './logo-comp/logo.component';
import {menuComp} from './menu-comp/menu.component';
import {statisticComp} from './statistic-comp/statistic.component';
import {singinComp} from './singin-comp/singin.component';
import {accountformComp} from './account-form-comp/accountform.component';
import {commonComp} from './common-comp/common.component';
import {addfileComp} from './add-file-comp/addfile.component';
import {dbService} from '../common-services/db.service';
import {listimageComp} from './list-image-comp/list-image.component';



export const compApp = angular.module('spApp.components',[])
    .component('listComp', listComp)
    .component('headerComp', headerComp)
    .component('accountComp', accountComp)
    .component('logoComp', logoComp)
    .component('menuComp', menuComp)
    .component('statisticComp', statisticComp)
    .component('singinComp', singinComp)
    .component('accountformComp', accountformComp)
    .component('commonComp', commonComp)
    .component('addfileComp', addfileComp)
    .component('listimageComp', listimageComp)
    .factory('dbService', dbService)
    .name;
