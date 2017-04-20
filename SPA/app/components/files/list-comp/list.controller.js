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

    getLimitCount(){
        if(this.limitView){
            this.limitCount = this.limitView;
        }
    }

    getCountDocuments() {
        this.documentsLength = this.documents.length;
        return this.documentsLength;
    }

    getDocumentsByNameTeam(){
        if(this.nameTeam){
            //запрос с параметром
            console.log(this.limitTeam);
            console.log(this.currentUser.team);
            this.documents = this.fileService.getDocumentsByNameTeam();
        }
    }
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