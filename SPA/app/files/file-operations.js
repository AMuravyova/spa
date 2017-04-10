/**
 * Created by amurav on 08.04.2017.
 */
export class FileOperations {
    constructor(fileService, dbService){
        this.fileService = fileService;
        this.dbService = dbService;

    }
    refreshList(){
        this.dbService.getList().then((data)=>{
            this.arrDocuments = data;
        });
    }

    addFile(){

    }
    deleteFile(){

    }
    updateFile(){

    }
    getFile(){

    }

}