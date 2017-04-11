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
        this.limitCount = '';
        this.view = '';
        this.documentsLength = '';
        // this.docType = '.doc';
        // this.xlsType = '.xls';
        this.$state = $state;
        this.getLimitCount();
    }

    getLimitCount(){

        if(this.limitView){
            this.limitCount = this.limitView;
        }
        if(this.textView){
            this.view = this.textView;
        }
        else {
            this.limitCount = this.getCountDocuments();
            this.view = 'View all documents';
        }

    }

    getCountDocuments() {
        return this.documentsLength = this.documents.length;
    }

    // getLimitCount(){
    //    if (this.$state.current.name==='page.home.dashboard'){
    //        this.limitCount = 8;
    //        this.view = 'View All';
    //    }
    //     else {
    //       this.limitCount = this.getCountDocuments();
    //       this.view = '';
    //     }
    //    //return this.limitCount;
    // }

    // getView(){
    //     return this.view;
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
