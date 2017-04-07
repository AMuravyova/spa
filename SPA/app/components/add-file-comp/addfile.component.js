/**
 * Created by amurav on 29.03.2017.
 */


class AddFileController {
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
        this.message;

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


export const addfileComp = {
    templateUrl: 'components/add-file-comp/addfile.template.html',
    controllerAs: 'vm',
    controller: AddFileController

};