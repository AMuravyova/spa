/**
 * Created by amurav on 08.04.2017.
 */
export class ListController {
    constructor(fileService, Restangular, $state) {
        this.fileService = fileService;
        this.$state = $state;
        this.documents = this.fileService.getDocuments();
        this.limitCount = this.getCountDocuments();
        this.view = "";
        this.documentsLength = this.documents.length;
        // this.getLimitCount();

        this.choiseView = () => {
            if (this.$state.current.name === 'page.home.dashboard') {
                this.view = "View All";
            }
            if (this.$state.current.name === 'page.home.documents') {
                this.view = "";
            }
            return this.view;
        };


    }

    // refreshDocuments(){
    //     this.fileService.getDocuments().then((data) => {
    //         this.documents = data;
    //     });
    // }

    getLimitCount(){
        if(this.limitView){
            this.limitCount = this.limitView;
        }
    }

    getCountDocuments() {
        this.documentsLength = this.documents.length;
        return this.documentsLength;
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



}
