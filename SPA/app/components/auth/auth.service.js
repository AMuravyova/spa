export class AuthService {

    constructor(Restangular, $rootScope, $state, $q) {
        this.Restangular = Restangular;
        this.$rootScope = $rootScope;
        // this.$injector = $injector;
        this.$q = $q;
        this.$state = $state;
        this.authenticated = false;
        this.users = [];
        this.user = this.getUser();
    }

    getUser() {
        return this.user;
    }

    setUser(user) {

        this.searchUser = user;
        this.checkUser(this.searchUser).then(
            (data) => {
                this.user = data;

                // if(this.checkAccess()){
                //     this.$state.go('page.home.dashboard');
                // }
                if(this.user){
                    this.authenticated = true;
                    event.preventDefault();
                    this.$state.go('page.home.dashboard');
                }
                else{
                   // this.$state.go('page.auth');
                    this.checkAccess();
                }


            },
            (error) => {
                this.checkAccess();
            }
        );
    }

    checkUser(user) {
        if (this.getUsers() && this.getUsers().length) {
            return this.$q.resolve(this.findUser(this.getUsers(), user));
        }
        else {
            return this.getUsersAsync().then((data) => this.findUser(data, user))
                .then(null,
                    (error) => {
                        alert("Ошибка ввода e-mail или пароля!");
                    });
        }
    }

    findUser(users, user) {
        return users
            .find((item) => item.email === user.email && item.password === user.password);
    }

    getUsers() {
        return this.users;
    }

    getUsersAsync() {
        return this.users = this.Restangular.all('users').getList();
    }

    checkAccess(event, toState) {
        // var $scope = this.$injector.get('$rootScope');
        if (!this.authenticated) {
            //event.preventDefault();

                if (toState.data !== undefined) //есть data
                {
                    // есть noLogin===true
                    if (toState.data.noLogin !== undefined && toState.data.noLogin) {
                        // если нужно, выполняйте здесь какие-то действия
                        // перед входом без авторизации
                        //event.preventDefault();
                        //this.$state.go('page.home.dashboard');
                    }
                    else {
                        event.preventDefault();
                        this.$state.go('page.auth');
                    }
                }

                else {
                    //если пользователь не авторизован - отправляем на страницу авторизации
                    //alert("Ошибка ввода e-mail или пароля!");
                    event.preventDefault();
                    this.$state.go('page.auth');
                }
            }
            else {
                    return true;
                    //this.$state.go('page.home.dashboard');
            }
            //this.$state.go('page.auth');


    }
}
    //     if (toState.data.noLogin !== undefined && !toState.data.noLogin && !this.authenticated) {
    //         // если нужно, выполняйте здесь какие-то действия
    //         // перед входом без авторизации
    //         alert("Ошибка ввода e-mail или пароля!");
    //         event.preventDefault();
    //         this.$state.go('page.auth');
    //     }
    //     if (toState.data.noLogin !== undefined && !toState.data.noLogin && this.authenticated) {
    //         // если нужно, выполняйте здесь какие-то действия
    //         // перед входом без авторизации
    //         event.preventDefault();
    //         this.$state.go('page.home.dashboard');
    //     }
    // }
    // else // нет data===undefined
    // {
    //     // вход с авторизацией
    //     if (this.authenticated) {
    //         event.preventDefault();
    //         this.$state.go('page.home.dashboard');
    //     }
    //     else {
    //         // если пользователь не авторизован - отправляем на страницу авторизации
    //         alert("Ошибка ввода e-mail или пароля!  333333333");
    //         event.preventDefault();
    //         this.$state.go('page.auth');
    //     }
    // }




        // if (!toState || !toState.data || !toState.data.noLogin && this.authenticated) {
        //     this.$state.go('page.home.dashboard');
        //     return;
        // }
        //
        // if (toState.data.noLogin === undefined || !toState.data.noLogin && !this.authenticated) {
        //     event.preventDefault();
        //     this.$state.go('page.auth');
        // }

        // if (toState.data.noLogin || this.authenticated){
        //     return;
        // }


        // if (!toState || !toState.data || !toState.data.noLogin && !this.authenticated){
        //     this.$state.go('page.home.dashboard');
        //     return;
        // }
        // if (toState.data.noLogin === undefined || toState.data.noLogin === false || !this.authenticated) {
        //     event.preventDefault();
        //     this.$state.go('page.auth');
        // }

        // if (!toState || !toState.data || !toState.data.noLogin && this.authenticated === true){
        //     this.$state.go('page.home.dashboard');
        //     return;
        // }
        //
        // if (toState.data.noLogin !== undefined && toState.data.noLogin === false && this.authenticated === false) {
        //     event.preventDefault();
        //     this.$state.go('page.auth');
        // }



        // if(!this.authenticated){
        //     event.preventDefault();
        //     this.$state.go('page.auth');
        // }

        // if (!(toState.data.noLogin !== undefined && toState.data.noLogin) || !this.authenticated) {
        //     event.preventDefault();
        //     this.$state.go('page.auth');
        // }








