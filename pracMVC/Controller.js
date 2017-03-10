/**
 * Created by amurav on 09.03.2017.
 */

import TableOperation from './TableOperation'
import Service from './Service'


export default class Controller{

    constructor(){
        this.table = new TableOperation();
        this.instanceService = new Service();
    }

    //получаем данные из JSON
    getTableData(){
        return this.instanceService.getTableData();
    }

    //перезаписываем файл с данными JSON
    updateTableData(){
       return this.instanceService.updateTableData(this.table);
    }

}

