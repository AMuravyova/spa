
var tableOperationModule = require('./TableOperation.js');
var TableOperation = tableOperationModule.TableOperation;


var serviceModule = require('./Service.js');
var Service = serviceModule.Service;


class Controller {

    constructor() {
        this.table = new TableOperation(); //объект
        this.instanceService = new Service();
    }

    //получаем данные из JSON
    getTableData() {

        return this.instanceService.getTableData();

    }

    setDataToTable(dataTable) {
        this.table.setTableData(dataTable);
    }

    //перезаписываем файл с данными JSON
    updateTableData() {
        return this.instanceService.updateTableData(this.table.getTableData());
    }

}

module.exports.Controller = Controller;

