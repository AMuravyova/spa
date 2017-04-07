/**
 * Created by amurav on 29.03.2017.
 */

import {imagefileComp} from './image/image.controller';
import {docfileComp} from './document/document.component';
import {serviceFile} from '../../../practice_pages/page_1/service.file';
import {serviceStatistic} from './service.statistic';
import {documentService} from './document/document.service';


export const filesApp = angular.module('spApp.files',[])
    .component('imagefileComp', imagefileComp)
    .component('docfileComp', docfileComp)
    .factory('serviceFile', ['$resource',serviceFile])
    .factory('serviceStatistic', serviceStatistic)
    .factory('documentService', documentService)
.name;