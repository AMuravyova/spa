/**
 * Created by amurav on 29.03.2017.
 */


class LogFormController {
    constructor($state) {
        this.$state = $state;
        this.addNewUser = (userDetails, isvalid) => {
            if (isvalid) {
                this.message = userDetails.login + " " + userDetails.email + " " + userDetails.password;
            }
            else {
                this.message = "Error";
                this.showError = true;
            }
        };


        this.getError = (error) => {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Поле не должно быть пустым";
                }
                else if (error.email) {
                    return "Введите правильный email";
                }
            }
        };
    }

    clickHandler() {
        this.$state.go('page.home.dashboard');
    }
}


export const singinComp = {
    templateUrl: './components/singin-comp/singin.template.html',
    controllerAs: 'vm',
    controller: LogFormController

};