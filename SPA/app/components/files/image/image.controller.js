/**
 * Created by amurav on 29.03.2017.
 */
import {FileOperations} from '../file-operations.js';

export class ImageController extends FileOperations{
    constructor(Restangular, fileService, authService){

        super();
        this.fileService = fileService;
        this.image = {
            firstName: 'userName',
            lastName: 'userLastName',
            team: 'userTeam',
            password: 'userPassword',
            title: 'title',
            description: 'desc',
            type: 'type',
            path: 'path',
            data: 'data'
        };
        this.imgType = '.png';
        this.authService = authService;
        this.currentUser = this.authService.getUser();
    }

    deleteImage(){
        if(this.currentUser.lastName === this.image.lastName &&
            this.currentUser.password === this.image.password){
            this.fileService.deleteImage();
        }
        else {
            alert("Вы не можете удалить документ другого пользователя.");
        }

    }


}












