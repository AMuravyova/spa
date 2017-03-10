/**
 * Created by amurav on 09.03.2017.
 */
export default class TableServiceEntity {

    setTableData (data){
        //создаем объект и копируем в него свойства объекта
    }

    sortTableDesc(){
        this.sort();
    }

    sortTableAsc(){
        this.reverse();
    }

    getEntityById(id){
        var ent = document.getElementById(id);
        return ent;
    }

    getEntityByIds([ids]){
        //проходим по всему массиву и отфильтровываем те элементы, которые соответсвуют
        // переданному массиву. Возвращаемм новый массив, не изменяя источник

    }
    getTableData(){
        // возвращаем ссылку на таблицу
    }

}
