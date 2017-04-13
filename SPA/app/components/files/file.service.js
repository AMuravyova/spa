/**
 * Created by amurav on 08.04.2017.
 */
/**
 * Created by amurav on 08.04.2017.
 */

export class FileService {

    constructor(Restangular){
       this.Restangular = Restangular;
       this.documents = Restangular.all('documents');
       this.images = Restangular.all('images');
    }

    getDocuments() {
        return this.documents.getList().$object;
    }

    getImages() {
        return this.images.getList().$object;
    }

    refreshDocuments() {
        this.getDocuments().then((data) => {
            this.documents = data;
        });
    }

    refreshImages() {
        this.getImages().then((data) => {
            this.Images = data;
        });
    }

    addDocument(newDocument) {
        this.documents.post(newDocument).then((newDoc) => {
            this.documents = documents.getList();
        })
    }

    addImage(newImage) {
        this.images.post(newImage).then((newImg) => {
            this.images = images.getList();
        })
    }

    getDocByUserEmail() {
        let user = this.Restangular.one('users', 'email');
        this.documents = user.getList('documents');
    }

    getImgByUserEmail() {
        let user = this.Restangular.one('users', 'email');
        this.images = user.getList('images');
    }

    getDocByUserTeam() {
        let user = this.Restangular.one('users', 'team');
        this.documents = user.getList('documents');
    }

    getImgByUserTeam() {
        let user = this.Restangular.one('users', 'team');
        this.images = user.getList('images');
    }

}










/*
 // getComponent: () => {
 //     return component.get({id: id})
 //         .then((result) => {
 //             $scope.component = result;
 //         });
 // }

 //These users are being fetched out of a mongo instance
 let users = Restangular.all('users');
 let allUsers = users.getList();
 let oneUser = Restangular.one('users', 'id');
 oneUser.get().then(function (user) {
 user.getList();
 });

 //add: Post to /documents
 let newDocument = {
 id: '',
 userFirstName: '',
 userLastName: 'userLastName',
 userTeam: 'userTeam',
 userPassword: 'userPassword',
 title: 'title',
 description: 'desc',
 type: 'type',
 path: 'path',
 data: 'data'
 };
 // after we update a collection,
 // we can then refresh the collection on our scope:
 documents.post(newDocument).then((newDoc) => {
 $scope.documents = documents.getList();
 },
 function error() {

 });
 //Using the remove() method, we can send a
 // DELETE HTTP request to our back end

 let document = documents.get(id);
 document.remove(); // send a DELETE to /documents

 let baseUrl = Restangular.allUrl('baseUrl', 'http://localhost:8000/');
 baseUrl.getList(); //will send a request to GET http://localhost:8000/

 //To update an object, we’ll need to query the object,
 //set our new attributes on the instance,
 // and then call put() on the object to save the updated
 // attributes in the back end.
 let document = documents.get(id);
 let copyDoc = Restangular.copy(document);
 //modify
 copyDoc.put();

 //Restangular supports nested resources by default.
 // In fact, we can query a particular instance from our collection
 // for their nested resources.
 let user = Restangular.one('users','id');
 let documents = user.getList('documents');

 //we can send custom query parameters or custom headers
 let queryParamObj = {team: 'mera'},
 headerObj = {'x-team': 'mera'};
 users.getList('documents', queryParamObj, headerObj);

 */