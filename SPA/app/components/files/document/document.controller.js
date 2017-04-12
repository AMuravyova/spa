/**
 * Created by amurav on 08.04.2017.
 */
import {FileOperations} from '../file-operations.js';

export class DocumentController extends FileOperations{

    constructor(fileService, Restangular){
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
        this.fileService = fileService;

    }

}