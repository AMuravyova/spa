/**
 * Created by amurav on 22.03.2017.
 */
angular.module('imgList').component('imgList', {
    templateUrl: 'x-list/img-list.template.html',
    controller: function ImgListController(){
    this.imgs = [
        {
            name: 'Img 1',
            type: '.img'
        },
        {
            name: 'Img 2',
            type: '.img'
        },
        {
            name: 'Img 3',
            type: '.img'
        },
        {
            name: 'Img 4',
            type: '.img'
        }
    ];
}
});