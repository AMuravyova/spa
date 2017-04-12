/**
 * Created by amurav on 12.04.2017.
 */

export class AuthController {
    constructor($state, fileService) {
        this.$state = $state;
        this.fileService = fileService;
        this.users = this.fileService.getUsers();

        this.addNewUser = (userDetails, isvalid) => {
            if (isvalid) {
                this.$state.go('page.home.dashboard');
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


    // clickHandler() {
    //     this.$state.go('page.home.dashboard');
    // }

    goToSign() {
        this.$state.go('page.registration');
    }
}