/**
 * Created by amurav on 08.04.2017.
 */
export class ListController {
    constructor(dbService, fileService, Restangular) {

        // let restAngular = Restangular.withConfig( (Configurer) => {
        //     Configurer.setBaseUrl('/documents');
        // });

        this.documents = Restangular.all('documents').getList().$object;
        this.dbService = dbService;
        this.refreshDocuments();
        this.getCountDocuments();
        this.limitCount = this.getCountDocuments();
        this.view = "View All";
        this.documentsLength = '';
        this.docType = '.doc';
        this.xlsType = '.xls';
    };

    getCountDocuments() {
        return this.documentsLength = this.documents.length;
    }

    getLimitCount(){
        //получить URL /dashboard - 8 /documents - length
       if(window.location.href === 'http://localhost:8000/#/home/dashboard'){
           this.limitCount = 8;
           this.view = "View All";
       }
        else {
          this.limitCount = this.getCountDocuments();
          this.view = '';
        }
       return this.limitCount;
    }

    getView(){
        return this.view;
    }


    // download(){
    //
    //         let docArr = document.getElementsByClassName('download');
    //         docArr.forEach((item, id) => {
    //             item[id].onmouseover = () => {
    //                 this.style.visible = true;
    //             }
    //         })
    //
    // }



    // addNewCourse {
    // documents.push({
    //
    //     userFirstName: 'userName',
    //     userLastName: 'userLastName',
    //     userTeam: 'userTeam',
    //     userPassword: 'userPassword',
    //     title: 'title',
    //     description: 'desc',
    //     type: 'type',
    //     path: '',
    //     data: 'data'
    // });
    // };

    refreshDocuments(){
        this.dbService.getDocuments().then((data) => {
            this.documents = data;
        });
    }

}
