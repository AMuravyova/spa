export class AuthService {

    constructor(Restangular, $rootScope, $state, $q) {
        this.Restangular = Restangular;
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$state = $state;
        this.authenticated = false;
        this.users = [];
        this.user = {};

    }

    getUser(){
        return this.user;
    }

    // setUser(user) {
    //     this.user = user;
    //     this.checkUser(user).then(()=> {
    //         this.authenticated = true;
    //         this.checkAccess();
    //     });
    // }

    setUser(user) {

        this.user = user;

        this.checkUser(this.user).then(()=> {
            this.authenticated = true;
            this.checkAccess();
        });
    }

    checkUser(user) {

        if (this.getUsers() && this.getUsers().length){
            return this.$q.resolve(this.check(this.getUsers(), user));
        } else{
            //this.users = this.getUsersAsync();
          //  this.user = this.getUsersAsync().then((data)=> this.findUser(data, user));

            //return this.check(this.getUsersAsync(), user);
            //this.user = this.getUsersAsync().then((users)=>this.findUser(users, user));
            return this.getUsersAsync().then((data)=>this.check(data, user));
            //return this.checkUser(this.getUsersAsync(),user);
        }
    }

    check(users, user){
        return users
            .some((item) => item.email === user.email && item.password === user.password);
    }

    // findUser(users, user){
    //     return users
    //         .find((item) => item.email === user.email && item.password === user.password);
    // }

    // checkUser(user) {
    //     if (this.getUsers() && this.getUsers().length){
    //         return this.$q.resolve(this.check(this.getUsers(), user));
    //     } else{
    //         return this.getUsersAsync().then(()=>this.check());
    //     }
    // }

    // check(users, user){
    //      return users.some((item)=>item.email === user.email);
    // }

    getUsers() {
        return this.users;
    }

    // searchUserAsync(user){
    //     //return this.users = this.Restangular.all('users').getList();
    //     return this.usersService.getUserByEmailPassword(user);
    // }

    getUsersAsync(){
        return this.users = this.Restangular.all('users').getList();
        //return this.usersService.getUsers();
    }

    checkAccess(event, toState) {
        if (!toState || !toState.data || !toState.data.noLogin && !this.authenticated){
            this.$state.go('page.home.dashboard');
            return;
        }
        // if (toState.data.noLogin === undefined || toState.data.noLogin === false || !this.authenticated) {
        //     event.preventDefault();
        //     this.$state.go('page.auth');
        // }

        if (!(toState.data.noLogin !== undefined && toState.data.noLogin || this.authenticated)) {
            event.preventDefault();
            this.$state.go('page.auth');

        }
    }

}





