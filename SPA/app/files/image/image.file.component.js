/**
 * Created by amurav on 29.03.2017.
 */
import {ParentFile} from '../parent.file.js';

class ImageFileController extends ParentFile{
    constructor(){
        super();
        this.arrImages = [{
            userFirstName: '',
            userTeam: '',
            userPassword: '',
            title: '',
            type: '',
            path: '',
            data: ''
        }];
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
    templateUrl: './files/image/image.file.template.html',
    controller: ImageFileController,
    controllerAs: 'imageCtrl'

};