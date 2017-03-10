/**
 * Created by amurav on 09.03.2017.
 */
//взаимодействие с данными JSON только через сервис


export default class Service {

    //записываем таблицу с новыми данными в JSON (перезаписываем)
    updateTableData(table) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'dataJSON.json');
        xhr.send();
        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            var tableJson = xhr.responseText;
            if (table) {
                //обновляем данные в JSON, если таблица существует
                tableJson = JSON.stringify(table);
            }
        }
        return tableJson;
    }


    //получаем данные из JSON
    getTableData(){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'dataJSON.json');
        xhr.send();
        if (xhr.status != 200) {
            // обработать ошибку
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            var getTableJson = xhr.responseText;
            var tableData = JSON.parse(getTableJson);

        }
        return tableData;

    }
}
