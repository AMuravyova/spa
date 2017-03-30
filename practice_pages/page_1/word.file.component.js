/**
 * Created by amurav on 29.03.2017.
 */
import {ParentFile} from '../../SPA/app/files/parent.file.js';

class DocumentFileController extends ParentFile{
    constructor(){
      super();

        this.arrDocuments = [{
            userFirstName: '',
            userTeam: '',
            userPassword: '',
            title: '',
            type: '',
            path: '',
            data: ''
        }];
        this.countDocuments= this.arrDocuments.length;


        // this.data = {
        //     own: "User1",
        //     description: {name: "Document", type: "word", icon: "path"},
        //     listDocuments: []
        //
        // };
        // this.handlerEvent = () => {
        //    alert("Download image");
        //
        // };
        //
        // this.countWords = this.data.listDocuments.length;
        // this.word = true;
        // this.image = false;

    }
    handlerEvent = () => {
        alert("Download document");
    };
    getCountDocuments(){
        return this.countDocuments;
    }

}

export const docfileComp = {
    link: {

    }, //создаем экземпляр класса и применяем необходимые методы для работы приложения
    templateUrl: './files/word.file.template.html',
    controller: DocumentFileController,
    controllerAs: 'wordCtrl'

};