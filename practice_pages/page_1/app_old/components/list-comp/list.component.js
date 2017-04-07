/**
 * Created by amurav on 22.03.2017.
 */


export const listComp = {
    templateUrl: './components/list-comp/list.template.html',
    controller: function DocListController($http){
        var self = this;
        self.docs = [
            {
                name: 'Doc 1',
                type: '.txt'
            },
            {
                name: 'Doc 2',
                type: '.txt'
            },
            {
                name: 'Doc 3',
                type: '.txt'
            },
            {
                name: 'Doc 4',
                type: '.txt'
            },
            {
                name: 'Doc 1',
                type: '.jpg'
            },
            {
                name: 'Doc 2',
                type: '.jpg'
            },
            {
                name: 'Doc 3',
                type: '.jpg'
            },
            {
                name: 'Doc 4',
                type: '.jpg'
            },
            {
                name: 'Doc 1',
                type: '.req'
            },
            {
                name: 'Doc 2',
                type: '.req'
            },
            {
                name: 'Doc 3',
                type: '.req'
            },
            {
                name: 'Doc 4',
                type: '.req'
            }
        ];

    }
};