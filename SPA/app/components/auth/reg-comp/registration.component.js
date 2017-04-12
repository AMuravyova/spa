/**
 * Created by amurav on 29.03.2017.
 */

class LogFormController {
    constructor($state){
        this.$state = $state;
        this.goToAuth = () => {
            this.$state.go('page.auth');
        };
    }
}

export const regComp = {
    templateUrl: './components/auth/reg-comp/registration.html',
    controllerAs: 'vm',
    controller: LogFormController
};