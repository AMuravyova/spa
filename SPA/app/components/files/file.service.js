/**
 * Created by amurav on 08.04.2017.
 */
/**
 * Created by amurav on 08.04.2017.
 */

export class FileService {

    constructor(Restangular, usersService, $state) {
        this.Restangular = Restangular;
        this.usersService = usersService;
        this.documents = Restangular.all('documents');
        this.document = Restangular.one('documents');
        this.images = Restangular.all('images');
        this.image = Restangular.one('images');
        this.currentUser = this.usersService.getUser();
        this.oneUser = Restangular.one('users', this.currentUser._id);
        this.$state = $state;


        this.isTeam = (item) => {

            console.log(item.team);
            console.log(this.currentUser.team);
            let param = this.currentUser.team;
            return item.team === param;
        }
    }

    getDocuments() {
        return this.documents.getList().$object;
    }

    // getImagesByTeam(){
    //     return this.images.getList('images', this.currentUser.team);
    // }

    // getDocumentsByNameTeam(){
    //     let queryParamObj = {team: this.currentUser.team};
    //     return this.documents.getList('documents', queryParamObj);
    // }

    // getImagesByTeam(){
    //     let queryParamObj = {team: this.currentUser.team};
    //     return this.images.getList('images', queryParamObj);
    // }

    getDocumentsByTeam() {
        return this.documents.getList('documents', this.currentUser.team);
    }

    getImages() {
         if(this.$state.current.name === 'page.home.team'){

             let currentTeam = this.currentUser.team;
             //запрос с параметром
             let paramTeam = {query: {teamId: currentTeam.id}};

            return this.images.getList(paramTeam);
            //return this.Restangular.all("images").customGETLIST("", paramTeam).$object;
            // return this.images.getList().then((data) => {
            //     let arrTeam = this.findImages(data);
            //     console.log(arrTeam);
            //     return arrTeam;
            // });
         }
         else{
             return this.images.getList();
         }
    }

    findImages(images)
    {
        return images.filter(this.isTeam);
    }

    addDocument(newDocument) {
        this.documents.post(newDocument).then((newDoc) => {
            return this.documents.getList();
        })
    }

    deleteDocument(doc) {
        this.document = this.Restangular.one('documents', doc._id);
        this.document.remove().then(() => {
            return this.documents.getList();
        });
    }

    deleteImage(img) {
        this.image = this.Restangular.one('images', img._id);
        this.image.remove().then(() => {
            return this.images.getList();
        });
    }

    addImage(newImage) {
        this.images.post(newImage).then((newImg) => {
            return this.images.getList();
        })
    }

}


























    // getDocByUserEmail() {
    //     let user = this.Restangular.one('users', 'email');
    //     this.documents = user.getList('documents');
    // }
    //
    // getImgByUserEmail() {
    //     let user = this.Restangular.one('users', 'email');
    //     this.images = user.getList('images');
    // }
    //
    // getDocByUserTeam() {
    //     let user = this.Restangular.one('users', 'team');
    //     this.documents = user.getList('documents');
    // }
    //
    // getImgByUserTeam() {
    //     let user = this.Restangular.one('users', 'team');
    //     this.images = user.getList('images');
    // }












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