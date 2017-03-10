/**
 * Created by amurav on 10.03.2017.
 */

import Controller from './Controller'
import Entity from './Entity'

(function () {

    var ent = new Entity('11','Item3','100');

    var ctrl = new Controller;

    ctrl.addEntity(ent);

    ctrl.updateTableData();
    ctrl.getTableData();

    ctrl.removeEntity(ent);
    ctrl.updateTableData();
    ctrl.getTableData();

    ctrl.updateEntity(ent);
    ctrl.updateTableData();
    ctrl.getTableData();



})();