/**
 * Created by amurav on 08.04.2017.
 */
import {FileOperations} from '../file-operations.js';

export class DocumentController extends FileOperations{

    constructor(){
        // let restAngular = Restangular.withConfig( (Configurer) => {
        //   Configurer.setBaseUrl('/document');
        // });
        super();
        this.document = {
            userFirstName: 'userName',
            userLastName: 'userLastName',
            userTeam: 'userTeam',
            userPassword: 'userPassword',
            title: 'title',
            description: 'desc',
            type: 'type',
            data: 'data'
        };

        this.docType = '.doc';
        this.xlsType = '.xls';


        // this.addDocument();
        // this.getDocument();
        // this.deleteDocument();
        // this.updateDocument();

    }

    download(){
        return alert('success loaded');
    }

    // addDocument(){
    //     this.document.addFile();
    // }
    // deleteDocument(){
    //     this.document.deleteFile();
    // }
    // updateDocument(){
    //     this.document.updateFile();
    // }
    // getDocument(){
    //     this.document.getFile();
    // }

}