/**
 * Created by amurav on 08.04.2017.
 */

export const dbService = (Restangular) => {


    let documents = Restangular.all('documents');
    let images = Restangular.all('images');
    let users = Restangular.all('users');
    //let component = Restangular.one('components');
    //Restangular.all('users').customGET('documents', {team: 'team'});
    //Restangular.one('users','userEmail').customGET('documents');

    return {
        getDocuments: () => {
            return Restangular.all('documents').getList().$object;
        },
        getImages: () => {
            return images.getList().$object;
        },
        getUsers: () => {
            return users.getList().$object;
        },

        addDocument: (newDocument) => {
            let documents = Restangular.all('documents');
            documents.post(newDocument).then((newDoc) => {
                documents = documents.getList();
            })
        },

        addImage: (newImage) => {
            let images = Restangular.all('images');
            images.post(newImage).then((newImg) => {
                images = images.getList();
            })
        },

        addUser: (newUser) => {
            let users = Restangular.all('users');
            users.post(newUser).then((newUsr) => {
                users = users.getList();
            })
        },

        getDocByUserEmail: () => {
            let user = Restangular.one('users','email');
            let documents = user.getList('documents');
        },

        getUserByEmailPassword: () => {

        },

        updateData: () => {

        }

        // refreshComponents() {
        //     this.dbService.getData().then((data) => {
        //         this.arrComponents = data;
        //     });
        // }


        // getComponent: () => {
        //     return component.get({id: id})
        //         .then((result) => {
        //             $scope.component = result;
        //         });
        // }
    }
};




/*

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