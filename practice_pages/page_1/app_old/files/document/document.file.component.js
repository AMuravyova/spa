/**
 * Created by amurav on 30.03.2017.
 */
/**
 * Created by amurav on 29.03.2017.
 */
import {ParentFile} from '../parent.file.js';

class DocumentFileController extends ParentFile{
    constructor(serviceFile){
        super();
        //this.arrDocuments = serviceFile.query();
        this.arrDocuments = [{
            userFirstName: 'userName',
            userTeam: 'userTeam',
            userPassword: 'userPassword',
            title: 'title',
            type: 'type',
            path: 'path',
            data: 'data'
        }];
        this.countDocuments= this.arrDocuments.length;

    }
    // handlerEvent=()=>{
    //
    // };
    getCountDocuments(){
        return this.countDocuments;
    }

}

export const docfileComp = {
    templateUrl: './files/document/document.file.template.html',
    controller: DocumentFileController,
    controllerAs: 'docCtrl'

};