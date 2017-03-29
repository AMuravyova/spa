/**
 * Created by amurav on 29.03.2017.
 */
import {parentFileComp} from './files/parent/parent.file.component';

export const filesApp = angular.module('files',[])
    .component('parentFileComp', parentFileComp);