/**
 * Created by amurav on 10.04.2017.
 */
export class DashboardController {

    constructor(){
        // this.compFirst = this.getFirstComp();
        // this.compSecond = this.getSecondComp();
        // this.getFirstComp();
        // this.getSecondComp();

    };

    getLimitCount(){
        let compFirst = document.getElementById('firstList');
        compFirst.getAttribute("data-limit-count");
        compFirst.getAttribute("data-view");


        let compSecond = document.getElementById('secondList');
        compSecond.getAttribute("data-limit-count");
        compSecond.getAttribute("data-view");
    }

    // getComp(){
    //     let compFirst = document.guerySelector('#firstList');
    //     compFirst.dataset.limitCount = '8';
    //     compFirst.dataset.view = 'View all documents';
    //
    //
    //    let compSecond = document.getElementById('firstList');
    //    compSecond.dataset.limitCount = '8';
    //    compSecond.dataset.view = 'View all documents';
    //
    // }

    getSecondComp(){
        // this.compFirst = document.getElementById('firstList');
        // this.compFirst.dataset.limitCount = '8';
        // this.compFirst.dataset.view = 'View all documents';
        // return this.compFirst;
        // this.compSecond = document.getElementById('secondList');
        // this.compSecond.dataset.limitCount = '5';
        // this.compSecond.dataset.view = 'View all documents';
        // return this.compSecond;
    }

}