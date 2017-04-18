/**
 * Created by amurav on 22.03.2017.
 */

import {ListImageController} from './list-image.controller';

export const listimageComp = {
    templateUrl: './components/files/list-image-comp/list-image.html',
    controller: ListImageController,
    controllerAs: 'listImageCtrl',
    bindings: {
        limitView: '<'
        // limitTeam: '='
    }
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


