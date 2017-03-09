/**
 * Created by amurav on 09.03.2017.
 */
//взаимодействие с данными JSON только через сервис

import * as dataJSON from './dataJSON'
export default class Service{

    //перезаписываем файл с данными JSON
    getTableData(tableData){
        dataJSON = JSON.stringify(tableData);
    }


    //получаем данные из JSON
    updateTableData(){
        var result = JSON.parse('${dataJSON}');
        return result;
    }
}
