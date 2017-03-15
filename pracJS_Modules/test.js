    var controllerModule = require('./Controller.js');
    var Controller = controllerModule.Controller;
    var entityModule = require('./Entity.js');
    var Entity = entityModule.Entity;



    var ent = new Entity('10','Item3','100');
    console.log('created entity:');
    for(let prop in ent){
        console.log(prop +': ' + ent[prop]);
    }


    var ctrl = new Controller();
    ctrl.setDataToTable(ctrl.getTableData());
    console.log('setting data:');
    ctrl.table.tableData.forEach((arrItem)=>console.log(arrItem));



    console.log("getTableData: ");
    ctrl.table.tableData.forEach((item)=>console.log(item));


    // ctrl.table.addEntity(ent);
    // console.log("operation addEnity");
    // ctrl.table.tableData.forEach((item)=>console.log(item));

    var getEntity = ctrl.table.getEntityById(13);
    console.log("operation getEntity");
    for(let prop in getEntity){
        console.log(prop +': ' + getEntity[prop]);
    }


     var getEntities = ctrl.table.getEntityByIds([11, 12, 13]);
     console.log("operation getEntityByIds");
     getEntities.forEach((item)=>console.log(item));


    ctrl.updateTableData();
    console.log("operation updateTable");
    ctrl.table.tableData.forEach((item)=>console.log(item));


     var sortAsc = ctrl.table.sortTableAsc();
     console.log("operation sortAsc: ");
     ctrl.table.tableData.forEach((item)=>console.log(item));


     var sortDesc = ctrl.table.sortTableDesc();
     console.log("operation sortDesc");
     ctrl.table.tableData.forEach((item)=>console.log(item));


    // ctrl.table.removeEntity(ent);
    // console.log("operation removeEntity");
    // ctrl.table.tableData.forEach((item)=>console.log(item));


    console.log("updateTableData");
    ctrl.updateTableData();
    ctrl.table.tableData.forEach((item)=>console.log(item));

    // ctrl.table.updateEntity(ent);
    // console.log("operation updateEntity");



    console.log("operation updateTableData");
    ctrl.updateTableData();
    ctrl.table.tableData.forEach((item)=>console.log(item));





