/**
 * Created by amurav on 22.03.2017.
 */

import {ListController} from './list.controller';

export const listComp = {
    templateUrl: './components/list-comp/list-doc.html',
    controller: ListController,
    controllerAs: 'listCtrl',
    bindings: {
        limitView: '<',
        textView: '<'
    }
};
