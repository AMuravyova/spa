/**
 * Created by amurav on 30.03.2017.
 */
/**
 * Created by amurav on 29.03.2017.
 */
import {ParentFile} from '../parent.file.js';
import './documents-style.css';

class DocumentController extends ParentFile{
    constructor(documentService){
        super();
        //this.arrDocuments = serviceFile.query();
        this.arrDocuments = [{
            id: '',
            userFirstName: 'userName',
            userLastName: 'userLastName',
            userTeam: 'userTeam',
            userPassword: 'userPassword',
            title: 'title',
            description: 'desc',
            type: 'type',
            path: 'path',
            data: 'data'
        }];
        //this.countDocuments= this.arrDocuments.length;
        this.documentService = documentService;
        this.refreshDocuments();
        console.log(this.getCountDocuments());
    };

    refreshDocuments(){
        this.documentService.getDocuments().then((data)=>{
            this.arrDocuments = data;
        });
    }
    getCountDocuments (){
        return this.arrDocuments.length;
    };

    /*getListDocumentsFromMongoDB (){
       return  this.arrDocuments.addRestangularMethod('','get','/document');
    };

    getDocumentFromMongoDB () {
      return this.arrDocuments.getDocument();
    };

     Creating new Restangular Methods
     RestangularProvider.addElementTransformer('users', true, function(user) {
     // This will add a method called login that will do a POST to the path login
     // signature is (name, operation, path, params, headers, elementToPost)

     user.addRestangularMethod('login', 'post', 'login');

     return user;
     });
*/
}

export const docfileComp = {
    templateUrl: './files/document/document.file.template.html',
    controller: DocumentController,
    controllerAs: 'docCtrl'

};