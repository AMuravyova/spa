
var tableServiceModule = require('./TableService.js');
var TableService = tableServiceModule.TableService;

var entityModule = require('./Entity.js');
var Entity = entityModule.Entity;
//new entityModule.Entity();


class TableOperation extends TableService {

    addEntity(ent) {
        var arr = this.getTableData();
        var entId = ent.id;
        //arr.splice(arr.length, 0, ent);
        arr.push(ent);

    }


    removeEntity(ent) {
        var arr = this.getTableData();
        var entId = ent.id;
        arr.splice(entId, 1);

    }


    updateEntity(ent) {
        var arr = this.getTableData();
        var entId = ent.id;
        arr.splice(entId, 1, ent);
    }

}

module.exports.TableOperation = TableOperation;

