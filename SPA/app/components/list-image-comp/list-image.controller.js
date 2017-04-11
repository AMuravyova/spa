/**
 * Created by amurav on 08.04.2017.
 */
export class ListImageController {

    constructor(dbService, fileService, Restangular, $state) {

        // let restAngular = Restangular.withConfig( (Configurer) => {
        //     Configurer.setBaseUrl('/images');
        // });

        this.images = Restangular.all('images').getList().$object;
        this.dbService = dbService;
        this.getCountImages();
        this.refreshImages();
        this.limitCount = this.getCountImages();
        this.view = "View All";
        this.imagesLength = '';
        this.$state = $state;
    };

    getView(){
        return this.view;
    }

    getLimitCount(){
        if(this.$state.current.name==='page.home.dashboard'){
            this.limitCount = 8;
            this.view = "View All";
        }
        else {
            this.limitCount = this.getCountImages();
            this.view = '';
        }
        return this.limitCount;
    }


    refreshImages() {
        this.dbService.getImages().then((data) => {
            this.images = data;
        });
    }

    getCountImages() {
        return this.imagesLength = this.images.length;
    };
}
