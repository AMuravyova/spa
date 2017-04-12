/**
 * Created by amurav on 29.03.2017.
 */
import {FileOperations} from '../file-operations.js';

export class ImageController extends FileOperations{
    constructor(Restangular){

        super();
        this.image = {
            userFirstName: 'userName',
            userLastName: 'userLastName',
            userTeam: 'userTeam',
            userPassword: 'userPassword',
            title: 'title',
            description: 'desc',
            type: 'type',
            path: 'path',
            data: 'data'
        }
    }
}












