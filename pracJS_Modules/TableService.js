/**
 * Created by amurav on 13.03.2017.
 */
class TableService {

    constructor(){
        this.tableData = new Array();
    }

    sortTableDesc(){
        var arr = this.getTableData();
        var res = arr.sort((a,b) => b.id - a.id);
       // console.log(res + " - getEntityById(id) ");
        return res;
    }

    sortTableAsc(){
        var arr = this.getTableData();
        return arr.sort((a,b) => a.id - b.id);
    }

    getEntityById(id){
        var arr = this.getTableData();
        let res = arr.find((item)=>item.id===id);
        //console.log(res + " - getEntityById(id) ");
        return res;
    }

    getEntityByIds(array){
        return this.getTableData().filter((arrItem) => array.some((item)=>arrItem.id === item));
    }

    getTableData(){
        return this.tableData;
    }

    setTableData (data){
        this.tableData = data;
    }
}

module.exports.TableService = TableService;
