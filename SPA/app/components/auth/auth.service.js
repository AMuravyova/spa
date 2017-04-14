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

    setUser(user) {
        //this.user = user;
        this.checkUser(user).then((data)=> {
            this.user = data;
            this.authenticated = true;
            this.checkAccess();
        });
    }

    // setUser(user) {
    //     this.user = user;
    //     this.checkUser().then(()=> {
    //         this.authenticated = true;
    //         this.checkAccess();
    //     });
    // }

    checkUser(user) {

        if (this.getUsers() && this.getUsers().length){
            return this.$q.resolve(this.check(this.getUsers(), user));
        } else{
            //this.users = this.getUsersAsync();
            //return this.check(this.getUsersAsync(), user);
            return this.getUsersAsync().then((data)=>this.check(data, user));
        }
    }

    check(users, user){
        return users
            .some((item) => item.email === user.email)
            .some((item) => item.password === user.password);
    }

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

    getUsersAsync(){
        return this.users = this.Restangular.all('users').getList();
    }

    // getUsersAsync(){
    //     //return this.Restangular
    // }

    checkAccess(event, toState) {
        if (!toState.data && !this.authenticated){
            // this.$state.go('page.home.dashboard');
            return;
        }
        // if (toState.data.noLogin === undefined || toState.data.noLogin === false || !this.authenticated) {
        //     event.preventDefault();
        //     this.$state.go('page.auth');
        // }

        if (!(toState.data.noLogin !== undefined && toState.data.noLogin || this.authenticated)) {
            event.preventDefault();
            this.$state.go('page.auth');
            //alert("Введите правильный email и пароль.")
        }
    }

}





