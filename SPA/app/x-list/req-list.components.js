/**
 * Created by amurav on 22.03.2017.
 */
angular.module('reqList').component('reqList', {
    templateUrl: 'x-list/req-list.template.html',
    controller: function ReqListController(){
    this.reqs = [
        {
            name: 'Req 1',
            type: '.req'
        },
        {
            name: 'Req 2',
            type: '.req'
        },
        {
            name: 'Req 3',
            type: '.req'
        },
        {
            name: 'Req 4',
            type: '.req'
        }
    ];
}
});