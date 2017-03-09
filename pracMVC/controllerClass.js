/**
 * Created by amurav on 09.03.2017.
 */

import Table from './tableClass'
import Service from './serviceClass'


class Controller{

    constructor(){
        this.table = new Table();
        this.instanceService = new Service();
    }

    //получаем данные из JSON
    getTableData(){
        this.table = this.instanceService.getTableData();
        return this.table;
    }

    //перезаписываем файл с данными JSON
    updateTableData(table){
       var newData = this.instanceService.updateTableData(table);
       return newData;
    }

}

