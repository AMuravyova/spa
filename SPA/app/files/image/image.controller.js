/**
 * Created by amurav on 29.03.2017.
 */
import {FileOperations} from '../file-operations.js';

export class ImageController extends FileOperations{
    constructor(Restangular){

        // let restAngular = Restangular.withConfig( (Configurer) => {
        //     Configurer.setBaseUrl('/image');
        // });

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
        };
        //
        // this.addImage();
        // this.deleteImage();
        // this.getImage();
        // this.updateImage();
    };
    // addImage(){
    //     this.image.addFile();
    // }
    // deleteImage(){
    //     this.image.deleteFile();
    // }
    // updateImage(){
    //     this.image.updateFile();
    // }
    // getImage(){
    //     this.image.getFile();
    // }

}












/*
class ImageController extends ParentFile{
    constructor(){
        super();
        this.arrImages = [
            {
            userFirstName: '',
            userTeam: '',
            userPassword: '',
            title: '',
            type: '',
            path: 'files/image/pictures/raznoe/asy-obekty.jpg',
            data: ''
            },
            {
                userFirstName: '',
                userTeam: '',
                userPassword: '',
                title: '',
                type: '',
                path: 'files/image/pictures/raznoe/dengi.jpg',
                data: ''
            },
            {
                userFirstName: '',
                userTeam: '',
                userPassword: '',
                title: '',
                type: '',
                path: 'files/image/pictures/raznoe/fon-obekty.jpg',
                data: ''
            },
            {
                userFirstName: '',
                userTeam: '',
                userPassword: '',
                title: '',
                type: '',
                path: 'files/image/pictures/raznoe/gitara.jpg',
                data: ''
            },
            {
                userFirstName: '',
                userTeam: '',
                userPassword: '',
                title: '',
                type: '',
                path: 'files/image/pictures/raznoe/igrushki.jpg',
                data: ''
            },
            {
                userFirstName: '',
                userTeam: '',
                userPassword: '',
                title: '',
                type: '',
                path: 'files/image/pictures/raznoe/natyurmort.jpg',
                data: ''
            },
            {
                userFirstName: '',
                userTeam: '',
                userPassword: '',
                title: '',
                type: '',
                path: 'files/image/pictures/raznoe/new_year.jpg',
                data: ''
            },
            {
                userFirstName: '',
                userTeam: '',
                userPassword: '',
                title: '',
                type: '',
                path: 'files/image/pictures/raznoe/obekty.jpg',
                data: ''
            },
            {
                userFirstName: '',
                userTeam: '',
                userPassword: '',
                title: '',
                type: '',
                path: 'files/image/pictures/raznoe/shahmaty.jpg',
                data: ''
            },];
        this.countImages = this.arrImages.length;
    }
    // handlerEvent(){
    //     //затемнение и две кнопки: delete и download
    // }

    getCountImages(){
        return this.countImages;
    }

}
*/
/*
export const imagefileComp = {
    templateUrl: './files/image/image.html',
    controller: ImageController,
    controllerAs: 'imageCtrl'
};
*/