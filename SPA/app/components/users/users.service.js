/**
 * Created by amurav on 12.04.2017.
 */
/**
 * Created by amurav on 08.04.2017.
 */
/**
 * Created by amurav on 08.04.2017.
 */

export class UsersService {

    constructor(Restangular) {
        this.Restangular = Restangular;
        this.users = this.Restangular.all('users');
        this.user = {};
        //this.user = this.Restangular.one('users');
        //this.authService = authService;
        //this.currentUser = this.authService.getUser();
        //this.oneUser = this.Restangular.one('users', this.currentUser._id);
    }

    getUsersAsync() {
        return this.users.getList();
    }

    setUser(data) {
        this.user = data;
    }

    getUser(){
        return this.user;
    }


    getUsersImages() {
        return this.oneUser.get().then((user) => {
            user.getList('images');
        })
    }

    getUsersDocuments() {
        return this.oneUser.get().then((user) => {
            user.getList('documents');
        })
    }

    addUser(newUser) {
        this.users.post(newUser).then((newUsr) => {
            this.users = users.getList();
        })
    }

    updateUser(user) {
        user.put();
    }

    // updateUser(user) {
    //     this.users.put(user);
    // }

}
























/*
//customer
    getUserByEmailPassword (userDetails) {

       // return this.Restangular.all("users").getList().find(userDetails);
       //return this.users.getList(userDetails);
      // return this.users.customGET("", userDetails);
       // return this.Restangular.one('users').get(userDetails);
        //return this.Restangular.one('users').customGET("", userDetails);


        return this.users.get({email: userDetails.email,
            password: userDetails.password})
            .then((result) => {
                    this.users = result;
                },
                (error) => {
                    alert('Incorrect e-mail or password. Try enter again.');
                }
            );
        }

}

*/





//Restangular.all('users').customGET('documents', {team: 'team'});
//Restangular.one('users','userEmail').customGET('documents');


