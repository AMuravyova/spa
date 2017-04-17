/**
 * Created by amurav on 08.04.2017.
 */
import {FileOperations} from '../file-operations.js';

export class DocumentController extends FileOperations{

    constructor(fileService, Restangular, authService){
        super();
        this.document = {
            firstName: 'userName',
            lastName: 'userLastName',
            team: 'userTeam',
            password: 'userPassword',
            title: 'title',
            description: 'desc',
            type: 'type',
            data: 'data'
        };

        this.docType = '.doc';
        this.xlsType = '.xls';
        this.fileService = fileService;
        this.authService = authService;
        this.currentUser = this.authService.getUser();
    }


    deleteDocument(){

        if(this.currentUser.lastName === this.document.lastName &&
            this.currentUser.password === this.document.password){
            this.fileService.deleteDocument();
        }
        else {
            alert("Вы не можете удалить документ другого пользователя.");
        }
    }



}