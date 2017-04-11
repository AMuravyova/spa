/**
 * Created by amurav on 08.04.2017.
 */
export class ListController {
    constructor(dbService, fileService, Restangular, $state) {

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
        this.$state = $state;



    };


    // getLimitCount(){
    //     let compFirst = document.getElementById('firstList');
    //     compFirst.getAttribute("data-limit-count");
    //     compFirst.getAttribute("data-view");
    //
    //
    //     let compSecond = document.getElementById('secondList');
    //     compSecond.getAttribute("data-limit-count");
    //     compSecond.getAttribute("data-view");
    // }


    getCountDocuments() {
        return this.documentsLength = this.documents.length;
    }

    getLimitCount(){
       if(this.$state.current.name==='page.home.dashboard'){
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


    download(){
           return alert('success loaded');
    }



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
