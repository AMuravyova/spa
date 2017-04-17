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

    constructor(Restangular, authService){
        this.Restangular = Restangular;
        this.users = Restangular.all('users');
        this.user = Restangular.one('users');
        this.authService = authService;
        this.currentUser = this.authService.getUser();
        this.oneUser = Restangular.one('users', this.currentUser._id);
    }

    getUsers() {
        return this.users.getList().$object;
    }

    getUsersImages(){
        return this.oneUser.get().then((user) => {
            user.getList('images');
        })
    }

    getUsersDocuments(){
        return this.oneUser.get().then((user) => {
            user.getList('documents');
        })
    }

    addUser(newUser) {
        this.users.post(newUser).then((newUsr) => {
            this.users = users.getList();
        })
    }

    updateUser(newUser) {
        let copyUser = this.Restangular.copy(this.oneUser);
        copyUser.firstName = this.currentUser.firstName;
        copyUser.lastName = this.currentUser.lastName;
        copyUser.userTeam = this.currentUser.userTeam;
        copyUser.password = this.currentUser.password;
        copyUser.email = this.currentUser.email;
        this.users.put(copyUser);
        //copyUser.put();
    }

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







//Restangular.all('users').customGET('documents', {team: 'team'});
//Restangular.one('users','userEmail').customGET('documents');


