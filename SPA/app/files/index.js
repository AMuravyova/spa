/**
 * Created by amurav on 29.03.2017.
 */

import {imgfileComp} from './image/image.component';
import {docfileComp} from './document/document.component';
import {serviceStatistic} from './service.statistic';
import {dbService} from '../common-services/db.service';
import {fileService} from './file.service';
import {documentService} from './document/document.service';


export const filesApp = angular.module('spApp.files',[])
    .component('imgfileComp', imgfileComp)
    .component('docfileComp', docfileComp)
    .factory('serviceStatistic', serviceStatistic)
    .factory('dbService', dbService)
    .factory('fileService', fileService)
    .factory('documentService',documentService)
.name;