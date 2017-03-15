
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();

class Service {

    //записываем таблицу с новыми данными в JSON (перезаписываем)
    updateTableData(data) {
        var arr = data;
       // console.log("arr after updating: "+arr);
        return arr;
    }


    getTableData(){
        var tableData = [{ id: 11, name: "Item 1", price: 10.9 },
            { id: 13, name: "Item 2", price: 1.22 },
            { id: 15, name: "Item 3", price: 1.33 },
            { id: 14, name: "Item 4", price: 1.44 },
            { id: 12, name: "Item 5", price: 1.55 },
            { id: 16, name: "Item 6", price: 1.66 }];
        return tableData;
    }

/*
     //получаем данные из JSON
     getTableData(){

         var xhr = new XMLHttpRequest();
         xhr.open('GET', 'dataJSON.json');
              xhr.send();
         if (xhr.status != 200) {
             // обработать ошибку

         } else {
             var getTableJson = xhr.responseText;
             var tableData = JSON.parse(getTableJson); //ссылка на массив объектов
         }
         return tableData ? tableData : [];
     }
     */
}

module.exports.Service = Service;

