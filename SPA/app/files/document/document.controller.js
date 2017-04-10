/**
 * Created by amurav on 08.04.2017.
 */
import {FileOperations} from '../file-operations.js';

export class DocumentController extends FileOperations{

    constructor(Restangular, documentService){
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
        // this.addDocument();
        // this.getDocument();
        // this.deleteDocument();
        // this.updateDocument();

    };

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