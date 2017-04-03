/**
 * Created by amurav on 29.03.2017.
 */

import {imagefileComp} from './image/image.file.component';
import {docfileComp} from './document/document.file.component';
import {serviceFile} from './service.file';
import {serviceStatistic} from './service.statistic';


export const filesApp = angular.module('spApp.files',[])
    .component('imagefileComp', imagefileComp)
    .component('docfileComp', docfileComp)
    .factory('serviceFile', ['$resource',serviceFile])
    .factory('serviceStatistic', serviceStatistic)
.name;