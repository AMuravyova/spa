/**
 * Created by amurav on 29.03.2017.
 */
import {ParentFile} from '../parent.file.js';
//import 'file-img.css';

class ImageFileController extends ParentFile{
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

export const imagefileComp = {
    templateUrl: 'files/image/image.file.template.html',
    controller: ImageFileController,
    controllerAs: 'imageCtrl'

};