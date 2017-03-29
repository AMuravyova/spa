/**
 * Created by amurav on 29.03.2017.
 */


export const singupComp = {
    templateUrl: './components/singup-comp/singup.template.html',

    controller: function LogFormController($scope){

        $scope.addNewUser = function (userDetails, isvalid) {
            if (isvalid){
                $scope.message = userDetails.login + " " + userDetails.email + " " +userDetails.password;
            }
            else {
                $scope.message = "Error";
                $scope.showError = true;
            }
        };

        $scope.message = "Success";

        $scope.getError = function(error){
            if (angular.isDefined(error)){
                if (error.required){
                    return "Поле не должно быть пустым";
                }
                else if (error.email){
                    return "Введите правильный email";
                }
            }
        }

        $scope.clickHandler = function (){
            document.location.href = 'http://localhost:8000/#/home/dashboard';
        }
    }

};