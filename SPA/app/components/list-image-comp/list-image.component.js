/**
 * Created by amurav on 22.03.2017.
 */

import {ListImageController} from './list-image.controller';

export const listimageComp = {
    templateUrl: './components/list-image-comp/list-image.html',
    controller: ListImageController,
    controllerAs: 'listImageCtrl'
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




/*


export const listComp = {
    templateUrl: './components/list-comp/list.template.html',
    controller: function DocListController($http){
        var self = this;
        self.docs = [
            {
                name: 'Doc 1',
                type: '.txt'
            },
            {
                name: 'Doc 2',
                type: '.txt'
            },
            {
                name: 'Doc 3',
                type: '.txt'
            },
            {
                name: 'Doc 4',
                type: '.txt'
            },
            {
                name: 'Doc 1',
                type: '.jpg'
            },
            {
                name: 'Doc 2',
                type: '.jpg'
            },
            {
                name: 'Doc 3',
                type: '.jpg'
            },
            {
                name: 'Doc 4',
                type: '.jpg'
            },
            {
                name: 'Doc 1',
                type: '.req'
            },
            {
                name: 'Doc 2',
                type: '.req'
            },
            {
                name: 'Doc 3',
                type: '.req'
            },
            {
                name: 'Doc 4',
                type: '.req'
            }
        ];

    }
};
    */