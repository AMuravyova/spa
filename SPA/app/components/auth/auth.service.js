export class AuthService {

    constructor(Restangular, $rootScope, $state, $q) {
        this.Restangular = Restangular;
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$state = $state;
        this.authenticated = false;
        this.users = [];
        //this.user = this.getUser();
        this.user = undefined;
    }

    getUser() {
        return this.user;
    }

    setUser(user) {

        this.searchUser = user;
        this.checkUser(this.searchUser).then(
            (data) => {
                this.user = data;

                if(this.user){
                    this.authenticated = true;
                    event.preventDefault();
                    this.$state.go('page.home.dashboard');
                }
                else {
                    alert('Вы ввели неверный пароль или e-mail!');
                }
            },
            (error) => {

                if(!this.user){
                    alert('Вы ввели неверный пароль или e-mail!');
                }
                this.checkAccess();

            }
        );
    }

    checkUser(user) {
        if (this.getUsers() && this.getUsers().length) {
            return this.$q.resolve(this.findUser(this.getUsers(), user));
        }
        else {
            return this.getUsersAsync().then((data) => this.findUser(data, user));
                // .then(null,
                //     (error) => {
                //         alert("Ошибка ввода e-mail или пароля!");
                //     });
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

        if (!this.authenticated) {

                if (toState.data !== undefined)
                {
                    if (toState.data.noLogin !== undefined && toState.data.noLogin) {

                    }
                    else {

                        event.preventDefault();
                        this.$state.go('page.auth');
                    }
                }

                else {
                    event.preventDefault();
                    this.$state.go('page.auth');
                }
            }
            else {
                    return true;
            }
    }
}











