/**
 * Created by amurav on 22.03.2017.
 */
export const listComp = {
    templateUrl: 'components/list-comp/list.template.html',
    controller: function DocListController(){
        this.docs = [
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
            }
        ];
    }
};