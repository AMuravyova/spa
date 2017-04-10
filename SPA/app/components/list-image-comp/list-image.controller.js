/**
 * Created by amurav on 08.04.2017.
 */
export class ListImageController {

    constructor(dbService, fileService, Restangular) {

        let restAngular = Restangular.withConfig( (Configurer) => {
            Configurer.setBaseUrl('/images');
        });

        this.images = Restangular.all('images').getList().$object;
        this.dbService = dbService;
        this.getCountImages();
        this.refreshImages();
        this.limitCount = this.getCountImages();
        this.view = "View All";
        this.imagesLength = '';
    };

    getView(){
        return this.view;
    }

    // getLimitCount(){
    //     return this.limitCount;
    // }
    getLimitCount(){
        //получить URL /dashboard - 8 /documents - length
        if(window.location.href === 'http://localhost:8000/#/home/dashboard'){
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
