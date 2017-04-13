/**
 * Created by amurav on 29.03.2017.
 */
class AccountFormController {
    constructor($state, usersService) {
        this.titleForm = "";
        this.$state = $state;
        this.usersService = usersService;
        this.addNewUser = (userDetails, isvalid) => {
            if (isvalid) {
                this.usersService.addUser(userDetails);
                this.$state.go('page.auth');
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

        this.choiseTitle = () => {
            if (this.$state.current.name === 'page.home.account') {
                this.titleForm = "Account";
            }
            if (this.$state.current.name === 'page.registration') {
                this.titleForm = "Registration";
            }
            return this.titleForm;
        }
    }
}

export const accountformComp = {
    templateUrl: './components/account-form-comp/accountform.template.html',
    controllerAs: 'vm',
    controller: AccountFormController
};