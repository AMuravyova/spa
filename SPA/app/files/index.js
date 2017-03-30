/**
 * Created by amurav on 29.03.2017.
 */

import {imagefileComp} from './image/image.file.component';
import {docfileComp} from './document/document.file.component';
//import {serviceFile} from './service.file.js';

export const filesApp = angular.module('spApp.files',[])
    .component('imagefileComp', imagefileComp)
    .component('docfileComp', docfileComp)
    //.provider('serviceFile', serviceFile)
.name;