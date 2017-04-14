/**
 * Created by amurav on 13.04.2017.
 */
export class StatisticController {
    constructor(authService, fileService) {
        this.authService = authService;
        this.fileService = fileService;
        this.currentUser = this.authService.getUser();
        //this.email = this.currentUser.email;


    }

    getCurrentUser () {
        return this.currentUser;
    }

    //вызываем у сервиса метод получения документов и изображений у текущего юзера
    // в шаблоне выводим полученные значения {{vm.getDocumentsByUser}} {{vm.getImagesByUser}}
}